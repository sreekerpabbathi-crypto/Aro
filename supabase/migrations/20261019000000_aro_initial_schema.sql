-- ==============================================================================
-- ARO DATABASE MIGRATION: 20261019000000_aro_initial_schema.sql
-- Relational Schema Source of Truth (3NF Normalized)
-- Engine: PostgreSQL 15+ / Supabase
-- ==============================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. CUISINES (Master Catalog)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS cuisines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(50) NOT NULL UNIQUE,
    slug VARCHAR(50) NOT NULL UNIQUE,
    icon VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- 2. RESTAURANTS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS restaurants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(120) NOT NULL,
    slug VARCHAR(140) NOT NULL UNIQUE,
    tagline VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    cover_image VARCHAR(500) NOT NULL,
    logo_image VARCHAR(500),
    rating NUMERIC(2, 1) NOT NULL DEFAULT 4.5,
    rating_count INTEGER NOT NULL DEFAULT 0,
    price_tier VARCHAR(10) NOT NULL DEFAULT '₹₹',
    delivery_time_min INTEGER NOT NULL DEFAULT 25,
    delivery_time_max INTEGER NOT NULL DEFAULT 40,
    minimum_order NUMERIC(8, 2) NOT NULL DEFAULT 0.00,
    delivery_fee NUMERIC(8, 2) NOT NULL DEFAULT 40.00,
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    is_open BOOLEAN NOT NULL DEFAULT TRUE,
    address_line VARCHAR(255) NOT NULL,
    city VARCHAR(80) NOT NULL,
    latitude NUMERIC(10, 7) NOT NULL,
    longitude NUMERIC(10, 7) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_restaurant_rating CHECK (rating >= 1.0 AND rating <= 5.0),
    CONSTRAINT chk_restaurant_rating_count CHECK (rating_count >= 0),
    CONSTRAINT chk_restaurant_delivery_time CHECK (delivery_time_min > 0 AND delivery_time_max >= delivery_time_min),
    CONSTRAINT chk_restaurant_price_tier CHECK (price_tier IN ('₹', '₹₹', '₹₹₹', '₹₹₹₹')),
    CONSTRAINT chk_restaurant_minimum_order CHECK (minimum_order >= 0),
    CONSTRAINT chk_restaurant_delivery_fee CHECK (delivery_fee >= 0)
);

-- ------------------------------------------------------------------------------
-- 3. RESTAURANT_CUISINES (M:N Associative Bridge)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS restaurant_cuisines (
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    cuisine_id UUID NOT NULL REFERENCES cuisines(id) ON DELETE RESTRICT,
    PRIMARY KEY (restaurant_id, cuisine_id)
);

-- ------------------------------------------------------------------------------
-- 4. MENU_CATEGORIES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS menu_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_restaurant_category_name UNIQUE (restaurant_id, name)
);

-- ------------------------------------------------------------------------------
-- 5. MENU_ITEMS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS menu_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES menu_categories(id) ON DELETE RESTRICT,
    name VARCHAR(120) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(8, 2) NOT NULL,
    image_url VARCHAR(500),
    is_veg BOOLEAN NOT NULL DEFAULT FALSE,
    is_chef_special BOOLEAN NOT NULL DEFAULT FALSE,
    is_available BOOLEAN NOT NULL DEFAULT TRUE,
    prep_time_minutes INTEGER NOT NULL DEFAULT 20,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_menu_item_price CHECK (price >= 0),
    CONSTRAINT chk_menu_item_prep_time CHECK (prep_time_minutes > 0)
);

-- ------------------------------------------------------------------------------
-- 6. ITEM_CUSTOMIZATION_GROUPS & OPTIONS (Add-ons, Portions, Variants)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS item_customization_groups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    menu_item_id UUID NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    min_select INTEGER NOT NULL DEFAULT 0,
    max_select INTEGER NOT NULL DEFAULT 1,
    is_required BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT chk_custom_group_select CHECK (min_select >= 0 AND max_select >= min_select)
);

CREATE TABLE IF NOT EXISTS item_customization_options (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    group_id UUID NOT NULL REFERENCES item_customization_groups(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    additional_price NUMERIC(8, 2) NOT NULL DEFAULT 0.00,
    is_default BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT chk_custom_option_price CHECK (additional_price >= 0)
);

-- ------------------------------------------------------------------------------
-- 7. CUSTOMER_PROFILES & SAVED ADDRESSES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS customer_profiles (
    id UUID PRIMARY KEY, -- Maps 1:1 with auth.users.id
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(120) NOT NULL,
    phone VARCHAR(20),
    avatar_url VARCHAR(500),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS customer_addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID NOT NULL REFERENCES customer_profiles(id) ON DELETE CASCADE,
    label VARCHAR(30) NOT NULL DEFAULT 'Home',
    recipient_name VARCHAR(100) NOT NULL,
    recipient_phone VARCHAR(20) NOT NULL,
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    landmark VARCHAR(120),
    city VARCHAR(80) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    latitude NUMERIC(10, 7) NOT NULL,
    longitude NUMERIC(10, 7) NOT NULL,
    is_default BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_address_label CHECK (label IN ('Home', 'Work', 'Other'))
);

-- ------------------------------------------------------------------------------
-- 8. COUPONS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS coupons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(30) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    discount_percentage NUMERIC(5, 2),
    flat_discount NUMERIC(8, 2),
    min_order_value NUMERIC(8, 2) NOT NULL DEFAULT 0.00,
    max_discount NUMERIC(8, 2),
    valid_until TIMESTAMPTZ NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_coupon_discount CHECK (
        (discount_percentage IS NOT NULL AND discount_percentage > 0 AND discount_percentage <= 100)
        OR (flat_discount IS NOT NULL AND flat_discount > 0)
    )
);

-- ------------------------------------------------------------------------------
-- 9. ORDERS & ORDER_ITEMS (With Historical Audit Snapshots)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_number VARCHAR(30) NOT NULL UNIQUE,
    customer_id UUID NOT NULL REFERENCES customer_profiles(id) ON DELETE RESTRICT,
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE RESTRICT,
    restaurant_name_snapshot VARCHAR(120) NOT NULL,
    restaurant_address_snapshot VARCHAR(255) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'placed',
    item_total NUMERIC(10, 2) NOT NULL,
    delivery_fee NUMERIC(8, 2) NOT NULL DEFAULT 0.00,
    packaging_fee NUMERIC(8, 2) NOT NULL DEFAULT 0.00,
    tax_amount NUMERIC(8, 2) NOT NULL DEFAULT 0.00,
    discount_amount NUMERIC(8, 2) NOT NULL DEFAULT 0.00,
    final_paid_amount NUMERIC(10, 2) NOT NULL,
    payment_method VARCHAR(30) NOT NULL,
    payment_status VARCHAR(30) NOT NULL DEFAULT 'PENDING',
    coupon_id UUID REFERENCES coupons(id) ON DELETE SET NULL,
    delivery_address_json JSONB NOT NULL,
    placed_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    delivered_at TIMESTAMPTZ,
    CONSTRAINT chk_order_status CHECK (
        status IN ('placed', 'confirmed', 'kitchen_preparing', 'rider_assigned', 'out_for_delivery', 'delivered', 'cancelled')
    ),
    CONSTRAINT chk_order_payment_status CHECK (payment_status IN ('PENDING', 'PAID', 'FAILED', 'REFUNDED')),
    CONSTRAINT chk_order_amounts CHECK (
        item_total >= 0 AND delivery_fee >= 0 AND tax_amount >= 0 AND final_paid_amount >= 0
    )
);

CREATE TABLE IF NOT EXISTS order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    menu_item_id UUID NOT NULL REFERENCES menu_items(id) ON DELETE RESTRICT,
    item_name_snapshot VARCHAR(120) NOT NULL,
    item_price_snapshot NUMERIC(8, 2) NOT NULL,
    quantity INTEGER NOT NULL,
    total_price_snapshot NUMERIC(10, 2) NOT NULL,
    customization_details_json JSONB,
    CONSTRAINT chk_order_item_qty CHECK (quantity > 0),
    CONSTRAINT chk_order_item_total CHECK (total_price_snapshot >= 0)
);

-- ------------------------------------------------------------------------------
-- 10. ORDER_STATUS_LOGS (Audit Timeline)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS order_status_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    from_status VARCHAR(30),
    to_status VARCHAR(30) NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- 11. RESTAURANT_REVIEWS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS restaurant_reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    customer_id UUID NOT NULL REFERENCES customer_profiles(id) ON DELETE RESTRICT,
    order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
    rating INTEGER NOT NULL,
    review_text TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_review_rating CHECK (rating >= 1 AND rating <= 5),
    CONSTRAINT uq_customer_order_review UNIQUE (customer_id, order_id)
);

-- ------------------------------------------------------------------------------
-- INDEXES FOR QUERY OPTIMIZATION
-- ------------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_restaurants_city ON restaurants(city);
CREATE INDEX IF NOT EXISTS idx_restaurants_rating ON restaurants(rating DESC);
CREATE INDEX IF NOT EXISTS idx_restaurants_slug ON restaurants(slug);
CREATE INDEX IF NOT EXISTS idx_menu_items_restaurant ON menu_items(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_is_veg ON menu_items(is_veg);
CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_restaurant ON orders(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_reviews_restaurant ON restaurant_reviews(restaurant_id);

-- ------------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------------------------
ALTER TABLE customer_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurant_reviews ENABLE ROW LEVEL SECURITY;

-- Customers can view and update only their own profile
CREATE POLICY customer_profile_isolation ON customer_profiles
    FOR ALL
    USING (auth.uid() = id);

-- Customers can view, create, edit their own addresses
CREATE POLICY customer_addresses_isolation ON customer_addresses
    FOR ALL
    USING (auth.uid() = customer_id);

-- Customers can view only their own orders
CREATE POLICY customer_orders_isolation ON orders
    FOR SELECT
    USING (auth.uid() = customer_id);

-- Customers can view order items belonging to their orders
CREATE POLICY customer_order_items_isolation ON order_items
    FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM orders
            WHERE orders.id = order_items.order_id
            AND orders.customer_id = auth.uid()
        )
    );

-- Public read-only policies for discovery catalogs
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
CREATE POLICY public_restaurants_read ON restaurants FOR SELECT USING (true);

ALTER TABLE cuisines ENABLE ROW LEVEL SECURITY;
CREATE POLICY public_cuisines_read ON cuisines FOR SELECT USING (true);

ALTER TABLE restaurant_cuisines ENABLE ROW LEVEL SECURITY;
CREATE POLICY public_restaurant_cuisines_read ON restaurant_cuisines FOR SELECT USING (true);

ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY public_categories_read ON menu_categories FOR SELECT USING (true);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY public_menu_items_read ON menu_items FOR SELECT USING (true);

ALTER TABLE item_customization_groups ENABLE ROW LEVEL SECURITY;
CREATE POLICY public_custom_groups_read ON item_customization_groups FOR SELECT USING (true);

ALTER TABLE item_customization_options ENABLE ROW LEVEL SECURITY;
CREATE POLICY public_custom_options_read ON item_customization_options FOR SELECT USING (true);
