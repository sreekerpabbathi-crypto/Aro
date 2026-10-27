-- ==============================================================================
-- ARO DATABASE MIGRATION: 20261027010000_aro_authentication_and_roles.sql
-- Role-Based Authentication, Profile Synchronization & Row Level Security (RLS)
-- Engine: PostgreSQL 15+ / Supabase
--
-- PURPOSE:
-- 1. Extend `profiles` with role ('customer', 'restaurant', 'admin') and restaurant_id.
-- 2. Implement automated trigger `handle_new_user()` on auth.users to ensure reliable profile creation.
-- 3. Prevent privilege escalation (customers cannot self-assign admin/restaurant roles).
-- 4. Enable restaurant partners to manage their specific restaurant orders and menus.
-- 5. Safe, non-destructive, and idempotent: can be executed repeatedly in Supabase SQL Editor.
-- ==============================================================================

BEGIN;

-- ------------------------------------------------------------------------------
-- 1. EXTEND PROFILES TABLE WITH ROLE AND RESTAURANT ASSOCIATION
-- ------------------------------------------------------------------------------
ALTER TABLE public.profiles 
    ADD COLUMN IF NOT EXISTS role VARCHAR(30) NOT NULL DEFAULT 'customer';

ALTER TABLE public.profiles 
    ADD COLUMN IF NOT EXISTS restaurant_id UUID REFERENCES public.restaurants(id) ON DELETE SET NULL;

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'chk_profile_role'
    ) THEN
        ALTER TABLE public.profiles 
            ADD CONSTRAINT chk_profile_role CHECK (role IN ('customer', 'restaurant', 'admin'));
    END IF;
END $$;

-- Indexes for lightning fast role & restaurant lookups
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_restaurant_id ON public.profiles(restaurant_id);

-- ------------------------------------------------------------------------------
-- 2. AUTOMATIC PROFILE CREATION TRIGGER (auth.users -> public.profiles)
-- Runs as SECURITY DEFINER to guarantee reliable profile creation regardless of
-- whether Supabase email confirmation is enabled or disabled.
-- ------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, phone, role)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', 'Gourmet Patron'),
        COALESCE(NEW.raw_user_meta_data->>'phone', NEW.phone),
        'customer' -- Explicitly assign default customer role to prevent self-elevation
    )
    ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        full_name = CASE 
            WHEN profiles.full_name IS NULL OR profiles.full_name = 'Gourmet Patron' 
            THEN EXCLUDED.full_name 
            ELSE profiles.full_name 
        END,
        phone = COALESCE(profiles.phone, EXCLUDED.phone),
        updated_at = CURRENT_TIMESTAMP;

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ------------------------------------------------------------------------------
-- 3. DEFENSE AGAINST PRIVILEGE ESCALATION
-- Prevents standard users from modifying their own security role or restaurant link.
-- Only database administrators (or direct SQL Editor executions) can assign elevated roles.
-- ------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.prevent_profile_role_escalation()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    -- Check if calling user is an administrator via is_admin() function
    IF NOT (SELECT coalesce(public.is_admin(auth.uid()), false)) THEN
        IF NEW.role IS DISTINCT FROM OLD.role THEN
            RAISE EXCEPTION 'Access Denied: Standard users cannot alter their assigned security role.';
        END IF;
        IF NEW.restaurant_id IS DISTINCT FROM OLD.restaurant_id THEN
            RAISE EXCEPTION 'Access Denied: Standard users cannot alter their restaurant association.';
        END IF;
    END IF;
    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_prevent_profile_role_escalation ON public.profiles;
CREATE TRIGGER trg_prevent_profile_role_escalation
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.prevent_profile_role_escalation();

-- ------------------------------------------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) ON PROFILES
-- ------------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS customer_profiles_select ON public.profiles;
CREATE POLICY customer_profiles_select ON public.profiles
    FOR SELECT
    USING (
        auth.uid() = id 
        OR (SELECT coalesce(public.is_admin(auth.uid()), false))
    );

DROP POLICY IF EXISTS customer_profiles_update ON public.profiles;
CREATE POLICY customer_profiles_update ON public.profiles
    FOR UPDATE
    USING (
        auth.uid() = id 
        OR (SELECT coalesce(public.is_admin(auth.uid()), false))
    )
    WITH CHECK (
        auth.uid() = id 
        OR (SELECT coalesce(public.is_admin(auth.uid()), false))
    );

DROP POLICY IF EXISTS customer_profiles_insert ON public.profiles;
CREATE POLICY customer_profiles_insert ON public.profiles
    FOR INSERT
    WITH CHECK (
        auth.uid() = id 
        OR (SELECT coalesce(public.is_admin(auth.uid()), false))
    );

-- ------------------------------------------------------------------------------
-- 5. ROW LEVEL SECURITY (RLS) FOR RESTAURANT PARTNERS ON ORDERS
-- ------------------------------------------------------------------------------
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS restaurant_orders_select ON public.orders;
CREATE POLICY restaurant_orders_select ON public.orders
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
              AND profiles.role = 'restaurant'
              AND profiles.restaurant_id = orders.restaurant_id
        )
    );

DROP POLICY IF EXISTS restaurant_orders_update ON public.orders;
CREATE POLICY restaurant_orders_update ON public.orders
    FOR UPDATE
    USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
              AND profiles.role = 'restaurant'
              AND profiles.restaurant_id = orders.restaurant_id
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE profiles.id = auth.uid()
              AND profiles.role = 'restaurant'
              AND profiles.restaurant_id = orders.restaurant_id
        )
    );

COMMIT;

-- ==============================================================================
-- PROVISIONING INSTRUCTIONS FOR SUPABASE SQL EDITOR:
-- ==============================================================================
-- 1. To provision an Administrator account:
--    INSERT INTO public.admin_users (user_id, email, role)
--    SELECT id, email, 'super_admin' FROM auth.users WHERE email = 'admin@aroeats.com'
--    ON CONFLICT (user_id) DO UPDATE SET role = 'super_admin', updated_at = CURRENT_TIMESTAMP;
--
--    UPDATE public.profiles SET role = 'admin' WHERE email = 'admin@aroeats.com';
--
-- 2. To provision a Restaurant Partner account:
--    UPDATE public.profiles
--    SET role = 'restaurant',
--        restaurant_id = (SELECT id FROM public.restaurants LIMIT 1)
--    WHERE email = 'partner@aroeats.com';
-- ==============================================================================

