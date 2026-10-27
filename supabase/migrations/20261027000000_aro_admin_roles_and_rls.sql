-- ==============================================================================
-- ARO DATABASE MIGRATION: 20261027000000_aro_admin_roles_and_rls.sql
-- Role-Based Administrator Authorization & PostgreSQL Row Level Security (RLS)
-- Engine: PostgreSQL 15+ / Supabase
--
-- PURPOSE:
-- 1. Create a secure, database-backed `admin_users` table mapped to auth.users.
-- 2. Implement a SECURITY DEFINER `is_admin()` helper function for policy enforcement.
-- 3. Enforce strict RLS policies on orders, restaurants, categories, and menu items.
-- 4. Ensure customer authentication remains strictly separated from administrator privileges.
-- 5. Guarantee least privilege: unauthorized customers cannot read other users' orders
--    or execute write operations on administrative resources.
--
-- SAFE & IDEMPOTENT:
-- Can be executed safely multiple times in the Supabase SQL Editor.
-- ==============================================================================

BEGIN;

-- ------------------------------------------------------------------------------
-- 1. ADMIN USERS TABLE (Database-Backed Admin Authorization)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.admin_users (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin',
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_admin_role CHECK (role IN ('super_admin', 'admin', 'manager'))
);

-- Index for instant role lookups
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON public.admin_users(email);

-- ------------------------------------------------------------------------------
-- 2. SECURE FUNCTION: is_admin(user_id)
-- Runs as SECURITY DEFINER to verify admin status safely without exposing table
-- ------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.is_admin(check_user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, auth
AS $$
BEGIN
    IF check_user_id IS NULL THEN
        RETURN FALSE;
    END IF;

    RETURN EXISTS (
        SELECT 1 
        FROM public.admin_users 
        WHERE user_id = check_user_id
    );
END;
$$;

-- Grant execution to authenticated & anon roles
GRANT EXECUTE ON FUNCTION public.is_admin(UUID) TO authenticated, anon;

-- ------------------------------------------------------------------------------
-- 3. ROW LEVEL SECURITY (RLS) ON admin_users
-- ------------------------------------------------------------------------------
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running
DROP POLICY IF EXISTS admin_users_read ON public.admin_users;
DROP POLICY IF EXISTS admin_users_write ON public.admin_users;

-- Authenticated users can check if their own UID is registered, or admins can view all
CREATE POLICY admin_users_read ON public.admin_users
    FOR SELECT
    TO authenticated
    USING (public.is_admin(auth.uid()) OR auth.uid() = user_id);

-- Only existing admins can insert or update admin_users (No public self-assignment)
CREATE POLICY admin_users_write ON public.admin_users
    FOR ALL
    TO authenticated
    USING (public.is_admin(auth.uid()))
    WITH CHECK (public.is_admin(auth.uid()));

-- ------------------------------------------------------------------------------
-- 4. RESTAURANTS RLS (Public Read, Admin Write)
-- ------------------------------------------------------------------------------
ALTER TABLE public.restaurants ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS public_restaurants_browse ON public.restaurants;
DROP POLICY IF EXISTS admin_restaurants_insert ON public.restaurants;
DROP POLICY IF EXISTS admin_restaurants_update ON public.restaurants;
DROP POLICY IF EXISTS admin_restaurants_delete ON public.restaurants;

-- Public customer discoverability
CREATE POLICY public_restaurants_browse ON public.restaurants
    FOR SELECT
    USING (true);

-- Admin-only modifications
CREATE POLICY admin_restaurants_insert ON public.restaurants
    FOR INSERT
    TO authenticated
    WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY admin_restaurants_update ON public.restaurants
    FOR UPDATE
    TO authenticated
    USING (public.is_admin(auth.uid()))
    WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY admin_restaurants_delete ON public.restaurants
    FOR DELETE
    TO authenticated
    USING (public.is_admin(auth.uid()));

-- ------------------------------------------------------------------------------
-- 5. CATEGORIES RLS (Public Read, Admin Write)
-- ------------------------------------------------------------------------------
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS public_categories_browse ON public.categories;
DROP POLICY IF EXISTS admin_categories_insert ON public.categories;
DROP POLICY IF EXISTS admin_categories_update ON public.categories;
DROP POLICY IF EXISTS admin_categories_delete ON public.categories;

CREATE POLICY public_categories_browse ON public.categories
    FOR SELECT
    USING (true);

CREATE POLICY admin_categories_insert ON public.categories
    FOR INSERT
    TO authenticated
    WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY admin_categories_update ON public.categories
    FOR UPDATE
    TO authenticated
    USING (public.is_admin(auth.uid()))
    WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY admin_categories_delete ON public.categories
    FOR DELETE
    TO authenticated
    USING (public.is_admin(auth.uid()));

-- ------------------------------------------------------------------------------
-- 6. MENU_ITEMS RLS (Public Read, Admin Write)
-- ------------------------------------------------------------------------------
ALTER TABLE public.menu_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS public_menu_items_browse ON public.menu_items;
DROP POLICY IF EXISTS admin_menu_items_insert ON public.menu_items;
DROP POLICY IF EXISTS admin_menu_items_update ON public.menu_items;
DROP POLICY IF EXISTS admin_menu_items_delete ON public.menu_items;

CREATE POLICY public_menu_items_browse ON public.menu_items
    FOR SELECT
    USING (true);

CREATE POLICY admin_menu_items_insert ON public.menu_items
    FOR INSERT
    TO authenticated
    WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY admin_menu_items_update ON public.menu_items
    FOR UPDATE
    TO authenticated
    USING (public.is_admin(auth.uid()))
    WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY admin_menu_items_delete ON public.menu_items
    FOR DELETE
    TO authenticated
    USING (public.is_admin(auth.uid()));

-- ------------------------------------------------------------------------------
-- 7. ORDERS & AUDIT RLS (Customer Isolation + Admin Full Oversight)
-- ------------------------------------------------------------------------------
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_status_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS order_owner_access ON public.orders;
DROP POLICY IF EXISTS customer_orders_select ON public.orders;
DROP POLICY IF EXISTS customer_orders_insert ON public.orders;
DROP POLICY IF EXISTS admin_orders_update ON public.orders;

-- Customers can view their own orders; Admins can view ALL orders
CREATE POLICY customer_orders_select ON public.orders
    FOR SELECT
    USING (
        auth.uid() = profile_id 
        OR public.is_admin(auth.uid())
    );

-- Customers can place orders for their own profile; Admins can place/record orders
CREATE POLICY customer_orders_insert ON public.orders
    FOR INSERT
    WITH CHECK (
        auth.uid() = profile_id 
        OR public.is_admin(auth.uid())
    );

-- Only Admins can update order statuses and manage orders
CREATE POLICY admin_orders_update ON public.orders
    FOR UPDATE
    TO authenticated
    USING (public.is_admin(auth.uid()))
    WITH CHECK (public.is_admin(auth.uid()));

-- Order items security
DROP POLICY IF EXISTS order_items_owner_access ON public.order_items;
DROP POLICY IF EXISTS customer_order_items_select ON public.order_items;
DROP POLICY IF EXISTS customer_order_items_insert ON public.order_items;

CREATE POLICY customer_order_items_select ON public.order_items
    FOR SELECT
    USING (
        public.is_admin(auth.uid()) OR
        EXISTS (
            SELECT 1 FROM public.orders 
            WHERE orders.id = order_items.order_id 
              AND orders.profile_id = auth.uid()
        )
    );

CREATE POLICY customer_order_items_insert ON public.order_items
    FOR INSERT
    WITH CHECK (
        public.is_admin(auth.uid()) OR
        EXISTS (
            SELECT 1 FROM public.orders 
            WHERE orders.id = order_items.order_id 
              AND orders.profile_id = auth.uid()
        )
    );

-- Order status audit history
DROP POLICY IF EXISTS order_status_history_select ON public.order_status_history;
DROP POLICY IF EXISTS order_status_history_insert ON public.order_status_history;

CREATE POLICY order_status_history_select ON public.order_status_history
    FOR SELECT
    USING (
        public.is_admin(auth.uid()) OR
        EXISTS (
            SELECT 1 FROM public.orders 
            WHERE orders.id = order_status_history.order_id 
              AND orders.profile_id = auth.uid()
        )
    );

CREATE POLICY order_status_history_insert ON public.order_status_history
    FOR INSERT
    WITH CHECK (
        public.is_admin(auth.uid()) OR
        EXISTS (
            SELECT 1 FROM public.orders 
            WHERE orders.id = order_status_history.order_id 
              AND orders.profile_id = auth.uid()
        )
    );

-- ------------------------------------------------------------------------------
-- 8. PROFILES RLS (Customer Isolation + Admin Metrics Access)
-- ------------------------------------------------------------------------------
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS profile_owner_access ON public.profiles;
DROP POLICY IF EXISTS customer_profiles_select ON public.profiles;
DROP POLICY IF EXISTS customer_profiles_update ON public.profiles;

CREATE POLICY customer_profiles_select ON public.profiles
    FOR SELECT
    USING (
        auth.uid() = id 
        OR public.is_admin(auth.uid())
    );

CREATE POLICY customer_profiles_update ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS customer_profiles_insert ON public.profiles;
CREATE POLICY customer_profiles_insert ON public.profiles
    FOR INSERT
    WITH CHECK (auth.uid() = id);

COMMIT;

-- ==============================================================================
-- INSTRUCTIONS TO PROVISION THE FIRST ADMINISTRATOR:
-- ==============================================================================
-- 1. Create a user account in Supabase Dashboard -> Authentication -> Users
--    (e.g., admin@aroeats.com) OR use an existing user's email.
-- 2. Execute the following in the Supabase SQL Editor:
--
--    INSERT INTO public.admin_users (user_id, email, role)
--    SELECT id, email, 'super_admin'
--    FROM auth.users
--    WHERE email = 'admin@aroeats.com'
--    ON CONFLICT (user_id) DO UPDATE SET role = 'super_admin', updated_at = CURRENT_TIMESTAMP;
-- ==============================================================================
