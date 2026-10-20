-- ==============================================================================
-- ARO CONSOLIDATED MASTER SCHEMA & SEED DATA
-- Database: PostgreSQL 15+ / Supabase
-- Target Project: https://sgtotyegikhulyghuldd.supabase.co
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. PROFILES (Customer & User Accounts)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(120) NOT NULL,
    phone VARCHAR(20),
    avatar_url VARCHAR(500),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- 2. ADDRESSES (Customer Delivery Coordinates)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS addresses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    label VARCHAR(30) NOT NULL DEFAULT 'Home',
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
-- 3. CUISINES (Master Catalog - 1NF Extraction)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS cuisines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(80) NOT NULL UNIQUE,
    slug VARCHAR(80) NOT NULL UNIQUE,
    icon VARCHAR(60),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- 4. RESTAURANTS
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
-- 5. RESTAURANT_CUISINES (M:N Associative Bridge - 2NF Pure Key)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS restaurant_cuisines (
    restaurant_id UUID NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE,
    cuisine_id UUID NOT NULL REFERENCES cuisines(id) ON DELETE RESTRICT,
    PRIMARY KEY (restaurant_id, cuisine_id)
);

-- ------------------------------------------------------------------------------
-- 6. CATEGORIES (Menu Taxonomy per Restaurant)
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
-- 7. MENU_ITEMS
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
-- 8. MENU_ITEM_OPTION_GROUPS (e.g. Crust, Doneness, Spice Level, Add-ons)
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
-- 9. MENU_ITEM_OPTIONS (e.g. Sourdough, Medium Rare, Extra Truffle)
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
-- 10. CARTS (Persistent Shopping Baskets)
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
-- 11. CART_ITEMS
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
-- 12. CART_ITEM_OPTIONS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS cart_item_options (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    cart_item_id UUID NOT NULL REFERENCES cart_items(id) ON DELETE CASCADE,
    option_id UUID NOT NULL REFERENCES menu_item_options(id) ON DELETE CASCADE
);

-- ------------------------------------------------------------------------------
-- 13. COUPONS
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
-- 14. ORDERS (Immutable Purchase Contracts with Snapshots)
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
-- 15. ORDER_ITEMS (Historical Line-Item Price & Name Snapshots)
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
-- 16. ORDER_ITEM_OPTIONS (Customization Snapshots)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS order_item_options (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_item_id UUID NOT NULL REFERENCES order_items(id) ON DELETE CASCADE,
    option_name_snapshot VARCHAR(80) NOT NULL,
    additional_price_snapshot NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    CONSTRAINT chk_order_opt_price CHECK (additional_price_snapshot >= 0)
);

-- ------------------------------------------------------------------------------
-- 17. FAVORITES
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
-- 18. REVIEWS
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
-- 19. ORDER_STATUS_HISTORY
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
-- 20. DELIVERIES (Courier & Live Tracking Assignment)
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
-- 21. DELIVERY_LOCATION_UPDATES (Telemetry Breadcrumbs)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS delivery_location_updates (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    delivery_id UUID NOT NULL REFERENCES deliveries(id) ON DELETE CASCADE,
    latitude NUMERIC(10, 7) NOT NULL,
    longitude NUMERIC(10, 7) NOT NULL,
    recorded_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------------------------
-- 22. NOTIFICATIONS
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
-- 23. COUPON_REDEMPTIONS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS coupon_redemptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    coupon_id UUID NOT NULL REFERENCES coupons(id) ON DELETE RESTRICT,
    profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE RESTRICT,
    order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    discount_applied NUMERIC(10, 2) NOT NULL,
    redeemed_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_discount_applied CHECK (discount_applied >= 0)
);

-- ------------------------------------------------------------------------------
-- INDEXES
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
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------------------------
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE cuisines ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE restaurant_cuisines ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_item_option_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_item_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE carts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_item_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE coupon_redemptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_item_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_status_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE deliveries ENABLE ROW LEVEL SECURITY;
ALTER TABLE delivery_location_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Public Browse Policies (Catalog is universally readable)
DROP POLICY IF EXISTS public_cuisines_browse ON cuisines;
CREATE POLICY public_cuisines_browse ON cuisines FOR SELECT USING (true);

DROP POLICY IF EXISTS public_restaurants_browse ON restaurants;
CREATE POLICY public_restaurants_browse ON restaurants FOR SELECT USING (true);

DROP POLICY IF EXISTS public_restaurant_cuisines_browse ON restaurant_cuisines;
CREATE POLICY public_restaurant_cuisines_browse ON restaurant_cuisines FOR SELECT USING (true);

DROP POLICY IF EXISTS public_categories_browse ON categories;
CREATE POLICY public_categories_browse ON categories FOR SELECT USING (true);

DROP POLICY IF EXISTS public_menu_items_browse ON menu_items;
CREATE POLICY public_menu_items_browse ON menu_items FOR SELECT USING (true);

DROP POLICY IF EXISTS public_options_groups_browse ON menu_item_option_groups;
CREATE POLICY public_options_groups_browse ON menu_item_option_groups FOR SELECT USING (true);

DROP POLICY IF EXISTS public_options_values_browse ON menu_item_options;
CREATE POLICY public_options_values_browse ON menu_item_options FOR SELECT USING (true);

DROP POLICY IF EXISTS public_coupons_browse ON coupons;
CREATE POLICY public_coupons_browse ON coupons FOR SELECT USING (true);

DROP POLICY IF EXISTS public_reviews_browse ON reviews;
CREATE POLICY public_reviews_browse ON reviews FOR SELECT USING (true);

-- User Policies (Permit authenticated and dev mock user profile access)
DROP POLICY IF EXISTS profile_owner_access ON profiles;
CREATE POLICY profile_owner_access ON profiles FOR ALL USING (true);

DROP POLICY IF EXISTS address_owner_access ON addresses;
CREATE POLICY address_owner_access ON addresses FOR ALL USING (true);

DROP POLICY IF EXISTS cart_owner_access ON carts;
CREATE POLICY cart_owner_access ON carts FOR ALL USING (true);

DROP POLICY IF EXISTS cart_items_owner_access ON cart_items;
CREATE POLICY cart_items_owner_access ON cart_items FOR ALL USING (true);

DROP POLICY IF EXISTS cart_item_options_owner_access ON cart_item_options;
CREATE POLICY cart_item_options_owner_access ON cart_item_options FOR ALL USING (true);

DROP POLICY IF EXISTS order_owner_access ON orders;
CREATE POLICY order_owner_access ON orders FOR ALL USING (true);

DROP POLICY IF EXISTS order_items_owner_access ON order_items;
CREATE POLICY order_items_owner_access ON order_items FOR ALL USING (true);

DROP POLICY IF EXISTS order_item_options_owner_access ON order_item_options;
CREATE POLICY order_item_options_owner_access ON order_item_options FOR ALL USING (true);

DROP POLICY IF EXISTS favorites_owner_access ON favorites;
CREATE POLICY favorites_owner_access ON favorites FOR ALL USING (true);

DROP POLICY IF EXISTS notifications_owner_access ON notifications;
CREATE POLICY notifications_owner_access ON notifications FOR ALL USING (true);

DROP POLICY IF EXISTS deliveries_browse ON deliveries;
CREATE POLICY deliveries_browse ON deliveries FOR ALL USING (true);

DROP POLICY IF EXISTS delivery_locations_browse ON delivery_location_updates;
CREATE POLICY delivery_locations_browse ON delivery_location_updates FOR ALL USING (true);

-- ==============================================================================
-- REALISTIC SEED DATA (Hyderabad Fine Gastronomy)
-- Valid hexadecimal RFC 4122 UUIDs (0-9, a-f)
-- ==============================================================================

-- 1. SEED PROFILES
INSERT INTO profiles (id, email, full_name, phone, avatar_url) VALUES
('00000001-0000-0000-0000-000000000001', 'sreeram@example.com', 'Sreeram K', '+91 98765 01234', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80')
ON CONFLICT (id) DO UPDATE SET full_name = EXCLUDED.full_name;

-- 2. SEED ADDRESSES
INSERT INTO addresses (id, profile_id, label, recipient_name, recipient_phone, address_line1, address_line2, landmark, city, pincode, latitude, longitude, is_default) VALUES
('a0000001-0000-0000-0000-000000000001', '00000001-0000-0000-0000-000000000001', 'Home', 'Sreeram K', '+91 98765 01234', 'Villa 14, Whispering Palms', 'Road No. 36, Jubilee Hills', 'Near Peddamma Temple Metro', 'Hyderabad', '500033', 17.4325000, 78.4072000, true),
('a0000002-0000-0000-0000-000000000002', '00000001-0000-0000-0000-000000000001', 'Work', 'Sreeram K', '+91 98765 01234', 'Level 12, Cyber Towers', 'Hitech City Main Road, Madhapur', 'Opposite Shilparamam', 'Hyderabad', '500081', 17.4504000, 78.3808000, false)
ON CONFLICT (id) DO NOTHING;

-- 3. SEED CUISINES
INSERT INTO cuisines (id, name, slug, icon) VALUES
('c0000001-0000-0000-0000-000000000001', 'Contemporary Deccani', 'contemporary-deccani', 'Flame'),
('c0000002-0000-0000-0000-000000000002', 'Japanese & Robata', 'japanese-robata', 'Fish'),
('c0000003-0000-0000-0000-000000000003', 'Artisanal Italian', 'artisanal-italian', 'Pizza'),
('c0000004-0000-0000-0000-000000000004', 'Hyderabadi Dum & Awadhi', 'hyderabadi-dum', 'Sparkles'),
('c0000005-0000-0000-0000-000000000005', 'Telangana Heritage', 'telangana-heritage', 'Flame')
ON CONFLICT (slug) DO NOTHING;

-- 4. SEED RESTAURANTS
INSERT INTO restaurants (
    id, name, slug, tagline, description, cover_image, logo_image,
    rating, rating_count, price_tier, delivery_time_min, delivery_time_max,
    minimum_order, delivery_fee, packaging_fee, is_featured, is_open,
    address_line, city, latitude, longitude
) VALUES
(
    'b0000001-0000-0000-0000-000000000001',
    'Deccan Table',
    'deccan-table',
    'Contemporary Deccani & Telangana heritage cuisine',
    'Rooted in royal Deccani traditions and Telangana spice crafts. Slow-smoked marag, artisanal bagara rice, and hand-ground spice blends.',
    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80',
    4.9, 342, '₹₹₹₹', 35, 50, 600.00, 80.00, 30.00, true, true,
    'Road No. 36, Jubilee Hills', 'Hyderabad',
    17.4325000, 78.4072000
),
(
    'b0000002-0000-0000-0000-000000000002',
    'Kumo House',
    'kumo-house',
    'Japanese-inspired dining & robata charcoal art',
    'Bespoke Tokyo-inspired dining in Banjara Hills. Binchotan-grilled skewers, bluefin nigiri, and delicate yuzu glazes.',
    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80',
    4.8, 489, '₹₹₹', 30, 45, 450.00, 60.00, 25.00, true, true,
    'Road No. 12, Banjara Hills', 'Hyderabad',
    17.4156000, 78.4352000
),
(
    'b0000003-0000-0000-0000-000000000003',
    'Forno & Fig',
    'forno-and-fig',
    'Artisanal wood-fired Italian dining & handmade pasta',
    'Pugliese burrata, 72-hour sourdough Neapolitan pizzas, and bronze-die extruded pasta crafted daily in Gachibowli.',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    4.7, 612, '₹₹', 25, 40, 300.00, 40.00, 20.00, true, true,
    'Financial District, Gachibowli', 'Hyderabad',
    17.4401000, 78.3489000
),
(
    'b0000004-0000-0000-0000-000000000004',
    'Nizami Hearth',
    'nizami-hearth',
    'Royal Hyderabadi & Awadhi-inspired dum heritage',
    'Centuries-old slow-simmered dum preparations, aged basmati gosht biryanis, saffron-infused korma, and flaky roomali.',
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    4.9, 521, '₹₹₹₹', 35, 50, 500.00, 70.00, 25.00, true, true,
    'Hitech City Main Road, Madhapur', 'Hyderabad',
    17.4504000, 78.3808000
)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    tagline = EXCLUDED.tagline,
    cover_image = EXCLUDED.cover_image,
    rating = EXCLUDED.rating,
    address_line = EXCLUDED.address_line,
    city = EXCLUDED.city,
    latitude = EXCLUDED.latitude,
    longitude = EXCLUDED.longitude;

-- 5. SEED RESTAURANT_CUISINES
INSERT INTO restaurant_cuisines (restaurant_id, cuisine_id) VALUES
('b0000001-0000-0000-0000-000000000001', 'c0000001-0000-0000-0000-000000000001'),
('b0000001-0000-0000-0000-000000000001', 'c0000005-0000-0000-0000-000000000005'),
('b0000002-0000-0000-0000-000000000002', 'c0000002-0000-0000-0000-000000000002'),
('b0000003-0000-0000-0000-000000000003', 'c0000003-0000-0000-0000-000000000003'),
('b0000004-0000-0000-0000-000000000004', 'c0000004-0000-0000-0000-000000000004')
ON CONFLICT DO NOTHING;

-- 6. SEED CATEGORIES
INSERT INTO categories (id, restaurant_id, name, slug, display_order) VALUES
('ca000001-0000-0000-0000-000000000001', 'b0000002-0000-0000-0000-000000000002', 'Chef Signature Nigiri', 'signature-nigiri', 1),
('ca000002-0000-0000-0000-000000000002', 'b0000002-0000-0000-0000-000000000002', 'Robata Charcoal Skewers', 'robata-skewers', 2),
('ca000003-0000-0000-0000-000000000003', 'b0000003-0000-0000-0000-000000000003', 'Wood-Fired Neapolitan Pizza', 'wood-fired-pizza', 1),
('ca000004-0000-0000-0000-000000000004', 'b0000003-0000-0000-0000-000000000003', 'Artisanal Pasta Fresca', 'pasta-fresca', 2),
('ca000005-0000-0000-0000-000000000005', 'b0000004-0000-0000-0000-000000000004', 'Royal Awadhi Curries', 'awadhi-curries', 1),
('ca000006-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Tasting Course Mains', 'tasting-mains', 1)
ON CONFLICT (id) DO NOTHING;

-- 7. SEED MENU ITEMS
INSERT INTO menu_items (id, restaurant_id, category_id, name, description, price, image_url, is_veg, is_chef_special, is_available, prep_time_minutes) VALUES
(
    'd0000001-0000-0000-0000-000000000001',
    'b0000002-0000-0000-0000-000000000002',
    'ca000001-0000-0000-0000-000000000001',
    'Truffle Hamachi Nigiri (4 pcs)',
    'Yellowtail kingfish brushed with nikiri soy, finished with fresh black winter truffle and chives.',
    850.00,
    'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
    false, true, true, 20
),
(
    'd0000002-0000-0000-0000-000000000002',
    'b0000002-0000-0000-0000-000000000002',
    'ca000002-0000-0000-0000-000000000002',
    'Charred King Oyster Mushroom Skewers',
    'Robata-grilled mushrooms glazed with garlic-miso tare, sesame crunch, and scallion curls.',
    420.00,
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    true, false, true, 18
),
(
    'd0000003-0000-0000-0000-000000000003',
    'b0000003-0000-0000-0000-000000000003',
    'ca000003-0000-0000-0000-000000000003',
    'Burrata & Charred Fig Neapolitan Pizza',
    'San Marzano tomato base, fresh pugliese burrata, caramelized Mission figs, aged balsamic drizzle.',
    720.00,
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    true, true, true, 22
),
(
    'd0000004-0000-0000-0000-000000000004',
    'b0000001-0000-0000-0000-000000000001',
    'ca000006-0000-0000-0000-000000000006',
    'Slow-Smoked Duck Breast & Cherry Demi',
    'Heritage dry-aged duck breast with sour morello cherry reduction and parsnip velvet purée.',
    1150.00,
    'https://images.unsplash.com/photo-1514944298352-d922a969b828?auto=format&fit=crop&w=800&q=80',
    false, true, true, 30
),
(
    'd0000005-0000-0000-0000-000000000005',
    'b0000004-0000-0000-0000-000000000004',
    'ca000005-0000-0000-0000-000000000005',
    '24hr Dal Bukhara & Truffle Kulcha',
    'Slow-simmered black lentils cooked overnight on charcoal, served with flaky truffle butter kulcha.',
    680.00,
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    true, true, true, 25
)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    price = EXCLUDED.price,
    image_url = EXCLUDED.image_url;

-- 8. SEED OPTION GROUPS & OPTIONS
INSERT INTO menu_item_option_groups (id, menu_item_id, name, min_select, max_select, is_required) VALUES
('e0000001-0000-0000-0000-000000000001', 'd0000003-0000-0000-0000-000000000003', 'Crust Preference', 1, 1, true),
('e0000002-0000-0000-0000-000000000002', 'd0000003-0000-0000-0000-000000000003', 'Artisanal Add-ons', 0, 3, false)
ON CONFLICT (id) DO NOTHING;

INSERT INTO menu_item_options (id, group_id, name, additional_price, is_default) VALUES
('f0000001-0000-0000-0000-000000000001', 'e0000001-0000-0000-0000-000000000001', 'Classic 72hr Sourdough', 0.00, true),
('f0000002-0000-0000-0000-000000000002', 'e0000001-0000-0000-0000-000000000001', 'Gluten-Free Charcoal Infused Crust', 120.00, false),
('f0000003-0000-0000-0000-000000000003', 'e0000002-0000-0000-0000-000000000002', 'Extra Whole Pugliese Burrata', 180.00, false),
('f0000004-0000-0000-0000-000000000004', 'e0000002-0000-0000-0000-000000000002', 'Shaved Umbrian Winter Truffle', 250.00, false)
ON CONFLICT (id) DO NOTHING;

-- 9. SEED COUPONS
INSERT INTO coupons (id, code, description, discount_percentage, flat_discount, min_order_value, max_discount, valid_until, is_active) VALUES
('000000c0-0000-0000-0000-000000000001', 'AROWELCOME', '20% off your inaugural fine-dining order with ARO (up to ₹250)', 20.00, NULL, 500.00, 250.00, CURRENT_TIMESTAMP + INTERVAL '90 days', true),
('000000c0-0000-0000-0000-000000000002', 'FLAT100', 'Flat ₹100 gourmet privilege on orders above ₹800', NULL, 100.00, 800.00, NULL, CURRENT_TIMESTAMP + INTERVAL '60 days', true),
('000000c0-0000-0000-0000-000000000003', 'FIESTA50', 'Flat ₹50 weekend privilege on sharing menus', NULL, 50.00, 450.00, NULL, CURRENT_TIMESTAMP + INTERVAL '30 days', true)
ON CONFLICT (code) DO NOTHING;
