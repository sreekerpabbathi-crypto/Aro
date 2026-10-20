-- ==============================================================================
-- ARO MASTER DATABASE MIGRATION: 20261020000000_aro_master_schema.sql
-- 21 Normalized Relational Entities (3NF Source of Truth)
-- Engine: PostgreSQL 15+ / Supabase
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. PROFILES (Customer & User Accounts)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- maps to auth.users.id
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(120) NOT NULL,
    phone VARCHAR(20),
    avatar_url VARCHAR(500),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- 2. ADDRESSES (Customer Saved Delivery Coordinates)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    label VARCHAR(30) NOT NULL DEFAULT 'Home', -- 'Home', 'Work', 'Other'
    recipient_name VARCHAR(100) NOT NULL,
    recipient_phone VARCHAR(20) NOT NULL,
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    landmark VARCHAR(120),
    city VARCHAR(80) NOT NULL DEFAULT 'Hyderabad',
    pincode VARCHAR(10) NOT NULL,
    latitude NUMERIC(10, 7) NOT NULL,
    longitude NUMERIC(10, 7) NOT NULL,
    is_default BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_address_label CHECK (label IN ('Home', 'Work', 'Other', 'Apartment', 'Studio'))
);

-- ------------------------------------------------------------------------------
-- 3. RESTAURANTS
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
    minimum_order NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    delivery_fee NUMERIC(10, 2) NOT NULL DEFAULT 40.00,
    packaging_fee NUMERIC(10, 2) NOT NULL DEFAULT 25.00,
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    is_open BOOLEAN NOT NULL DEFAULT TRUE,
    address_line VARCHAR(255) NOT NULL,
    city VARCHAR(80) NOT NULL DEFAULT 'Hyderabad',
    latitude NUMERIC(10, 7) NOT NULL,
    longitude NUMERIC(10, 7) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_restaurant_rating CHECK (rating >= 1.0 AND rating <= 5.0),
    CONSTRAINT chk_restaurant_rating_count CHECK (rating_count >= 0),
    CONSTRAINT chk_restaurant_delivery_time CHECK (delivery_time_min > 0 AND delivery_time_max >= delivery_time_min),
    CONSTRAINT chk_restaurant_price_tier CHECK (price_tier IN ('₹', '₹₹', '₹₹₹', '₹₹₹₹')),
    CONSTRAINT chk_restaurant_fees CHECK (minimum_order >= 0 AND delivery_fee >= 0 AND packaging_fee >= 0)
);

-- ------------------------------------------------------------------------------
-- 4. CATEGORIES (Menu Taxonomy per Restaurant)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    display_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_restaurant_category UNIQUE (restaurant_id, slug)
);

-- ------------------------------------------------------------------------------
-- 5. MENU_ITEMS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS menu_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
    name VARCHAR(120) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
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
-- 6. MENU_ITEM_OPTION_GROUPS (e.g. Size, Crust, Spice Level, Add-ons)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS menu_item_option_groups (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    menu_item_id UUID NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    min_select INTEGER NOT NULL DEFAULT 0,
    max_select INTEGER NOT NULL DEFAULT 1,
    is_required BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_option_group_select CHECK (min_select >= 0 AND max_select >= min_select)
);

-- ------------------------------------------------------------------------------
-- 7. MENU_ITEM_OPTIONS (e.g. Large, Medium, Extra Truffle, Saffron Glaze)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS menu_item_options (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    group_id UUID NOT NULL REFERENCES menu_item_option_groups(id) ON DELETE CASCADE,
    name VARCHAR(80) NOT NULL,
    additional_price NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    is_default BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_option_price CHECK (additional_price >= 0)
);

-- ------------------------------------------------------------------------------
-- 8. CARTS (Persistent Customer Shopping Baskets)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS carts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID UNIQUE REFERENCES profiles(id) ON DELETE CASCADE,
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    session_token VARCHAR(120),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- 9. CART_ITEMS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS cart_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cart_id UUID NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
    menu_item_id UUID NOT NULL REFERENCES menu_items(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_cart_item_qty CHECK (quantity > 0)
);

-- ------------------------------------------------------------------------------
-- 10. CART_ITEM_OPTIONS (Options Selected on Cart Item)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS cart_item_options (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cart_item_id UUID NOT NULL REFERENCES cart_items(id) ON DELETE CASCADE,
    option_id UUID NOT NULL REFERENCES menu_item_options(id) ON DELETE CASCADE
);

-- ------------------------------------------------------------------------------
-- 11. COUPONS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS coupons (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(30) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    discount_percentage NUMERIC(5, 2),
    flat_discount NUMERIC(10, 2),
    min_order_value NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    max_discount NUMERIC(10, 2),
    max_redemptions INTEGER,
    start_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    valid_until TIMESTAMPTZ NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_coupon_rule CHECK (
        (discount_percentage IS NOT NULL AND discount_percentage > 0 AND discount_percentage <= 100)
        OR (flat_discount IS NOT NULL AND flat_discount > 0)
    ),
    CONSTRAINT chk_coupon_dates CHECK (valid_until >= start_date)
);

-- ------------------------------------------------------------------------------
-- 12. COUPON_REDEMPTIONS (Audit Trail for Used Vouchers)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS coupon_redemptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    coupon_id UUID NOT NULL REFERENCES coupons(id) ON DELETE RESTRICT,
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE RESTRICT,
    order_id UUID NOT NULL, -- references orders(id)
    discount_applied NUMERIC(10, 2) NOT NULL,
    redeemed_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_discount_applied CHECK (discount_applied >= 0)
);

-- ------------------------------------------------------------------------------
-- 13. ORDERS (Immutable Purchase Contracts)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_number VARCHAR(30) NOT NULL UNIQUE,
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE RESTRICT,
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE RESTRICT,
    restaurant_name_snapshot VARCHAR(120) NOT NULL,
    restaurant_address_snapshot VARCHAR(255) NOT NULL,
    status VARCHAR(30) NOT NULL DEFAULT 'placed',
    item_total NUMERIC(10, 2) NOT NULL,
    delivery_fee NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    packaging_fee NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    tax_amount NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    discount_amount NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    final_paid_amount NUMERIC(10, 2) NOT NULL,
    coupon_id UUID REFERENCES coupons(id) ON DELETE SET NULL,
    payment_method VARCHAR(30) NOT NULL DEFAULT 'SIMULATED_UPI',
    payment_status VARCHAR(30) NOT NULL DEFAULT 'PAID',
    delivery_address_json JSONB NOT NULL,
    customer_notes TEXT,
    placed_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    delivered_at TIMESTAMPTZ,
    CONSTRAINT chk_order_status CHECK (
        status IN ('placed', 'confirmed', 'kitchen_preparing', 'rider_assigned', 'out_for_delivery', 'delivered', 'cancelled')
    ),
    CONSTRAINT chk_order_payment_status CHECK (
        payment_status IN ('PENDING', 'PAID', 'FAILED', 'REFUNDED')
    ),
    CONSTRAINT chk_order_monies CHECK (
        item_total >= 0 AND delivery_fee >= 0 AND tax_amount >= 0 AND final_paid_amount >= 0
    )
);

-- ------------------------------------------------------------------------------
-- 14. ORDER_ITEMS (Historical Line-Item Price & Name Snapshots)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    menu_item_id UUID NOT NULL REFERENCES menu_items(id) ON DELETE RESTRICT,
    item_name_snapshot VARCHAR(120) NOT NULL,
    item_price_snapshot NUMERIC(10, 2) NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1,
    total_price_snapshot NUMERIC(10, 2) NOT NULL,
    CONSTRAINT chk_order_item_qty CHECK (quantity > 0),
    CONSTRAINT chk_order_item_total CHECK (total_price_snapshot >= 0)
);

-- ------------------------------------------------------------------------------
-- 15. ORDER_ITEM_OPTIONS (Historical Customization Snapshots)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS order_item_options (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_item_id UUID NOT NULL REFERENCES order_items(id) ON DELETE CASCADE,
    option_name_snapshot VARCHAR(80) NOT NULL,
    additional_price_snapshot NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    CONSTRAINT chk_order_opt_price CHECK (additional_price_snapshot >= 0)
);

-- ------------------------------------------------------------------------------
-- 16. FAVORITES (Saved Restaurants & Dishes)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS favorites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
    menu_item_id UUID REFERENCES menu_items(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_fav_target CHECK (
        (restaurant_id IS NOT NULL AND menu_item_id IS NULL) OR
        (restaurant_id IS NULL AND menu_item_id IS NOT NULL)
    )
);

-- ------------------------------------------------------------------------------
-- 17. REVIEWS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE RESTRICT,
    order_id UUID REFERENCES orders(id) ON DELETE SET NULL,
    rating INTEGER NOT NULL,
    review_text TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_review_rating CHECK (rating >= 1 AND rating <= 5),
    CONSTRAINT uq_profile_order_review UNIQUE (profile_id, order_id)
);

-- ------------------------------------------------------------------------------
-- 18. ORDER_STATUS_HISTORY (Timeline Transitions & Audit)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS order_status_history (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    from_status VARCHAR(30),
    to_status VARCHAR(30) NOT NULL,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- 19. DELIVERIES (Courier & Live Tracking Assignment)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS deliveries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID NOT NULL UNIQUE REFERENCES orders(id) ON DELETE CASCADE,
    rider_name VARCHAR(100) NOT NULL DEFAULT 'Karthik Rao',
    rider_phone VARCHAR(20) NOT NULL DEFAULT '+91 98765 43210',
    vehicle_number VARCHAR(30) NOT NULL DEFAULT 'KA 03 EQ 4821',
    current_status VARCHAR(30) NOT NULL DEFAULT 'assigned',
    current_latitude NUMERIC(10, 7) NOT NULL,
    current_longitude NUMERIC(10, 7) NOT NULL,
    estimated_arrival_minutes INTEGER NOT NULL DEFAULT 28,
    route_polyline_json JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_delivery_status CHECK (
        current_status IN ('assigned', 'picked_up', 'in_transit', 'arrived', 'completed')
    )
);

-- ------------------------------------------------------------------------------
-- 20. DELIVERY_LOCATION_UPDATES (Telemetry Breadcrumbs)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS delivery_location_updates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    delivery_id UUID NOT NULL REFERENCES deliveries(id) ON DELETE CASCADE,
    latitude NUMERIC(10, 7) NOT NULL,
    longitude NUMERIC(10, 7) NOT NULL,
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- 21. NOTIFICATIONS (Customer Alerts & Delivery Milestones)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    title VARCHAR(120) NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- INDEXES FOR COMMONLY QUERIED LOOKUPS & JOINS
-- ------------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_restaurants_city ON restaurants(city);
CREATE INDEX IF NOT EXISTS idx_restaurants_rating ON restaurants(rating DESC);
CREATE INDEX IF NOT EXISTS idx_restaurants_slug ON restaurants(slug);
CREATE INDEX IF NOT EXISTS idx_menu_items_restaurant ON menu_items(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_category ON menu_items(category_id);
CREATE INDEX IF NOT EXISTS idx_menu_items_is_veg ON menu_items(is_veg);
CREATE INDEX IF NOT EXISTS idx_orders_profile ON orders(profile_id);
CREATE INDEX IF NOT EXISTS idx_orders_restaurant ON orders(restaurant_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_order_items_order ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_deliveries_order ON deliveries(order_id);
CREATE INDEX IF NOT EXISTS idx_favorites_profile ON favorites(profile_id);
CREATE INDEX IF NOT EXISTS idx_notifications_profile ON notifications(profile_id);

-- ------------------------------------------------------------------------------
-- ROW LEVEL SECURITY (RLS)
-- ------------------------------------------------------------------------------
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY profile_owner_access ON profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY address_owner_access ON addresses FOR ALL USING (auth.uid() = profile_id);
CREATE POLICY cart_owner_access ON carts FOR ALL USING (auth.uid() = profile_id);
CREATE POLICY order_owner_access ON orders FOR SELECT USING (auth.uid() = profile_id);
CREATE POLICY favorites_owner_access ON favorites FOR ALL USING (auth.uid() = profile_id);
CREATE POLICY notifications_owner_access ON notifications FOR ALL USING (auth.uid() = profile_id);

-- Public Discoverability
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_item_option_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_item_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;

CREATE POLICY public_restaurants_browse ON restaurants FOR SELECT USING (true);
CREATE POLICY public_categories_browse ON categories FOR SELECT USING (true);
CREATE POLICY public_menu_items_browse ON menu_items FOR SELECT USING (true);
CREATE POLICY public_options_browse ON menu_item_option_groups FOR SELECT USING (true);
CREATE POLICY public_option_values_browse ON menu_item_options FOR SELECT USING (true);
CREATE POLICY public_coupons_browse ON coupons FOR SELECT USING (true);
