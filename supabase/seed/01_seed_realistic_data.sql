-- ==============================================================================
-- ARO DATABASE SEED: 01_seed_realistic_data.sql
-- Realistic Fictional Culinary Seed Data for DBMS Testing & Demonstration
-- Location Context: Premium Gastronomy Hubs, Hyderabad, India
-- ==============================================================================

-- 1. SEED CUISINES
INSERT INTO cuisines (id, name, slug, icon) VALUES
('c1111111-1111-1111-1111-111111111111', 'Contemporary Indian', 'contemporary-indian', 'Flame'),
('c2222222-2222-2222-2222-222222222222', 'Japanese & Robata', 'japanese-robata', 'Fish'),
('c3333333-3333-3333-3333-333333333333', 'Artisanal Italian', 'artisanal-italian', 'Pizza'),
('c4444444-4444-4444-4444-444444444444', 'French Haute Cuisine', 'french-haute', 'Wine'),
('c5555555-5555-5555-5555-555555555555', 'Gourmet Patisserie', 'gourmet-patisserie', 'Cake')
ON CONFLICT (slug) DO NOTHING;

-- 2. SEED RESTAURANTS
INSERT INTO restaurants (
    id, name, slug, tagline, description, cover_image, logo_image,
    rating, rating_count, price_tier, delivery_time_min, delivery_time_max,
    minimum_order, delivery_fee, is_featured, is_open, address_line, city,
    latitude, longitude
) VALUES
(
    'r1111111-1111-1111-1111-111111111111',
    'Deccan Table',
    'deccan-table',
    'Contemporary Deccani & Telangana heritage cuisine',
    'Rooted in royal Deccani traditions and Telangana spice crafts. Slow-smoked marag, artisanal bagara rice, and hand-ground spice blends.',
    'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80',
    4.9, 342, '₹₹₹₹', 35, 50, 600.00, 80.00, true, true,
    'Road No. 36, Jubilee Hills', 'Hyderabad',
    17.4325000, 78.4072000
),
(
    'r2222222-2222-2222-2222-222222222222',
    'Kumo House',
    'kumo-house',
    'Japanese-inspired dining & robata charcoal art',
    'Bespoke Tokyo-inspired dining in Banjara Hills. Binchotan-grilled skewers, bluefin nigiri, and delicate yuzu glazes.',
    'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80',
    4.8, 489, '₹₹₹', 30, 45, 450.00, 60.00, true, true,
    'Road No. 12, Banjara Hills', 'Hyderabad',
    17.4156000, 78.4352000
),
(
    'r3333333-3333-3333-3333-333333333333',
    'Forno & Fig',
    'forno-and-fig',
    'Artisanal wood-fired Italian dining & handmade pasta',
    'Pugliese burrata, 72-hour sourdough Neapolitan pizzas, and bronze-die extruded pasta crafted daily in Gachibowli.',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    4.7, 612, '₹₹', 25, 40, 300.00, 40.00, true, true,
    'Financial District, Gachibowli', 'Hyderabad',
    17.4401000, 78.3489000
)
ON CONFLICT (slug) DO NOTHING;

-- 3. ASSOCIATE RESTAURANTS AND CUISINES (M:N)
INSERT INTO restaurant_cuisines (restaurant_id, cuisine_id) VALUES
('r1111111-1111-1111-1111-111111111111', 'c4444444-4444-4444-4444-444444444444'),
('r2222222-2222-2222-2222-222222222222', 'c2222222-2222-2222-2222-222222222222'),
('r3333333-3333-3333-3333-333333333333', 'c3333333-3333-3333-3333-333333333333')
ON CONFLICT DO NOTHING;

-- 4. SEED MENU CATEGORIES
INSERT INTO menu_categories (id, restaurant_id, name, display_order) VALUES
('mc111111-1111-1111-1111-111111111111', 'r2222222-2222-2222-2222-222222222222', 'Chef Signature Nigiri', 1),
('mc222222-2222-2222-2222-222222222222', 'r2222222-2222-2222-2222-222222222222', 'Robata Charcoal Skewers', 2),
('mc333333-3333-3333-3333-333333333333', 'r3333333-3333-3333-3333-333333333333', 'Wood-Fired Neapolitan Pizza', 1),
('mc444444-4444-4444-4444-444444444444', 'r3333333-3333-3333-3333-333333333333', 'Artisanal Pasta Fresca', 2)
ON CONFLICT DO NOTHING;

-- 5. SEED MENU ITEMS
INSERT INTO menu_items (
    id, restaurant_id, category_id, name, description, price,
    image_url, is_veg, is_chef_special, is_available, prep_time_minutes
) VALUES
(
    'mi111111-1111-1111-1111-111111111111',
    'r2222222-2222-2222-2222-222222222222',
    'mc111111-1111-1111-1111-111111111111',
    'Truffle Hamachi Nigiri (4 pcs)',
    'Yellowtail kingfish brushed with nikiri soy, topped with fresh black winter truffle and chives.',
    850.00,
    'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
    false, true, true, 20
),
(
    'mi222222-2222-2222-2222-222222222222',
    'r2222222-2222-2222-2222-222222222222',
    'mc222222-2222-2222-2222-222222222222',
    'Charred King Oyster Mushroom Skewers',
    'Robata-grilled mushrooms glazed with garlic-miso tare, sesame crunch, and scallion curls.',
    420.00,
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    true, false, true, 18
),
(
    'mi333333-3333-3333-3333-333333333333',
    'r3333333-3333-3333-3333-333333333333',
    'mc333333-3333-3333-3333-333333333333',
    'Burrata & Charred Fig Pizza',
    'San Marzano tomato base, fresh pugliese burrata, caramelized Mission figs, aged balsamic drizzle.',
    720.00,
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    true, true, true, 22
)
ON CONFLICT DO NOTHING;

-- 6. SEED COUPONS
INSERT INTO coupons (id, code, description, discount_percentage, flat_discount, min_order_value, max_discount, valid_until, is_active) VALUES
('cp111111-1111-1111-1111-111111111111', 'AROEXPERIENCE', '20% off on your first fine-dining order with ARO', 20.00, NULL, 500.00, 250.00, CURRENT_TIMESTAMP + INTERVAL '90 days', true),
('cp222222-2222-2222-2222-222222222222', 'FLAT100', 'Flat ₹100 discount on orders above ₹800', NULL, 100.00, 800.00, NULL, CURRENT_TIMESTAMP + INTERVAL '60 days', true)
ON CONFLICT (code) DO NOTHING;
