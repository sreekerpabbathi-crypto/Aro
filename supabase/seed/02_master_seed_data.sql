-- ==============================================================================
-- ARO MASTER SEED DATA: 02_master_seed_data.sql
-- Comprehensive Realistic Culinary Seed Data for DBMS Academic Evaluation
-- ==============================================================================

-- 1. SEED PROFILES
INSERT INTO profiles (id, email, full_name, phone, avatar_url) VALUES
('p1111111-1111-1111-1111-111111111111', 'sreeram@example.com', 'Sreeram K', '+91 98765 01234', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80')
ON CONFLICT (id) DO UPDATE SET full_name = EXCLUDED.full_name;

-- 2. SEED ADDRESSES
INSERT INTO addresses (id, profile_id, label, recipient_name, recipient_phone, address_line1, address_line2, landmark, city, pincode, latitude, longitude, is_default) VALUES
('a1111111-1111-1111-1111-111111111111', 'p1111111-1111-1111-1111-111111111111', 'Home', 'Sreeram K', '+91 98765 01234', 'Villa 14, Whispering Palms', 'Road No. 36, Jubilee Hills', 'Near Peddamma Temple Metro', 'Hyderabad', '500033', 17.4325000, 78.4072000, true),
('a2222222-2222-2222-2222-222222222222', 'p1111111-1111-1111-1111-111111111111', 'Work', 'Sreeram K', '+91 98765 01234', 'Level 12, Cyber Towers', 'Hitech City Main Road, Madhapur', 'Opposite Shilparamam', 'Hyderabad', '500081', 17.4504000, 78.3808000, false)
ON CONFLICT (id) DO NOTHING;

-- 3. SEED RESTAURANTS
INSERT INTO restaurants (
    id, name, slug, tagline, description, cover_image, logo_image,
    rating, rating_count, price_tier, delivery_time_min, delivery_time_max,
    minimum_order, delivery_fee, packaging_fee, is_featured, is_open,
    address_line, city, latitude, longitude
) VALUES
(
    'r1111111-1111-1111-1111-111111111111',
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
    'r2222222-2222-2222-2222-222222222222',
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
    'r3333333-3333-3333-3333-333333333333',
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
    'r4444444-4444-4444-4444-444444444444',
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
ON CONFLICT (slug) DO NOTHING;

-- 4. SEED CATEGORIES
INSERT INTO categories (id, restaurant_id, name, slug, display_order) VALUES
('c1111111-1111-1111-1111-111111111111', 'r2222222-2222-2222-2222-222222222222', 'Chef Signature Nigiri', 'signature-nigiri', 1),
('c2222222-2222-2222-2222-222222222222', 'r2222222-2222-2222-2222-222222222222', 'Robata Charcoal Skewers', 'robata-skewers', 2),
('c3333333-3333-3333-3333-333333333333', 'r3333333-3333-3333-3333-333333333333', 'Wood-Fired Neapolitan Pizza', 'wood-fired-pizza', 1),
('c4444444-4444-4444-4444-444444444444', 'r3333333-3333-3333-3333-333333333333', 'Artisanal Pasta Fresca', 'pasta-fresca', 2),
('c5555555-5555-5555-5555-555555555555', 'r4444444-4444-4444-4444-444444444444', 'Royal Awadhi Curries', 'awadhi-curries', 1),
('c6666666-6666-6666-6666-666666666666', 'r1111111-1111-1111-1111-111111111111', 'Tasting Course Mains', 'tasting-mains', 1)
ON CONFLICT DO NOTHING;

-- 5. SEED MENU ITEMS
INSERT INTO menu_items (id, restaurant_id, category_id, name, description, price, image_url, is_veg, is_chef_special, is_available, prep_time_minutes) VALUES
(
    'm1111111-1111-1111-1111-111111111111',
    'r2222222-2222-2222-2222-222222222222',
    'c1111111-1111-1111-1111-111111111111',
    'Truffle Hamachi Nigiri (4 pcs)',
    'Yellowtail kingfish brushed with nikiri soy, finished with fresh black winter truffle and chives.',
    850.00,
    'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
    false, true, true, 20
),
(
    'm2222222-2222-2222-2222-222222222222',
    'r2222222-2222-2222-2222-222222222222',
    'c2222222-2222-2222-2222-222222222222',
    'Charred King Oyster Mushroom Skewers',
    'Robata-grilled mushrooms glazed with garlic-miso tare, sesame crunch, and scallion curls.',
    420.00,
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    true, false, true, 18
),
(
    'm3333333-3333-3333-3333-333333333333',
    'r3333333-3333-3333-3333-333333333333',
    'c3333333-3333-3333-3333-333333333333',
    'Burrata & Charred Fig Neapolitan Pizza',
    'San Marzano tomato base, fresh pugliese burrata, caramelized Mission figs, aged balsamic drizzle.',
    720.00,
    'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    true, true, true, 22
),
(
    'm4444444-4444-4444-4444-444444444444',
    'r1111111-1111-1111-1111-111111111111',
    'c6666666-6666-6666-6666-666666666666',
    'Slow-Smoked Duck Breast & Cherry Demi',
    'Heritage dry-aged duck breast with sour morello cherry reduction and parsnip velvet purée.',
    1150.00,
    'https://images.unsplash.com/photo-1514944298352-d922a969b828?auto=format&fit=crop&w=800&q=80',
    false, true, true, 30
),
(
    'm5555555-5555-5555-5555-555555555555',
    'r4444444-4444-4444-4444-444444444444',
    'c5555555-5555-5555-5555-555555555555',
    '24hr Dal Bukhara & Truffle Kulcha',
    'Slow-simmered black lentils cooked overnight on charcoal, served with flaky truffle butter kulcha.',
    680.00,
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    true, true, true, 25
)
ON CONFLICT (id) DO NOTHING;

-- 6. SEED OPTION GROUPS & OPTIONS
INSERT INTO menu_item_option_groups (id, menu_item_id, name, min_select, max_select, is_required) VALUES
('og111111-1111-1111-1111-111111111111', 'm3333333-3333-3333-3333-333333333333', 'Crust Preference', 1, 1, true),
('og222222-2222-2222-2222-222222222222', 'm3333333-3333-3333-3333-333333333333', 'Artisanal Add-ons', 0, 3, false)
ON CONFLICT (id) DO NOTHING;

INSERT INTO menu_item_options (id, group_id, name, additional_price, is_default) VALUES
('op111111-1111-1111-1111-111111111111', 'og111111-1111-1111-1111-111111111111', 'Classic 72hr Sourdough', 0.00, true),
('op222222-2222-2222-2222-222222222222', 'og111111-1111-1111-1111-111111111111', 'Gluten-Free Charcoal Infused Crust', 120.00, false),
('op333333-3333-3333-3333-333333333333', 'og222222-2222-2222-2222-222222222222', 'Extra Whole Pugliese Burrata', 180.00, false),
('op444444-4444-4444-4444-444444444444', 'og222222-2222-2222-2222-222222222222', 'Shaved Umbrian Winter Truffle', 250.00, false)
ON CONFLICT (id) DO NOTHING;

-- 7. SEED COUPONS
INSERT INTO coupons (id, code, description, discount_percentage, flat_discount, min_order_value, max_discount, valid_until, is_active) VALUES
('cp111111-1111-1111-1111-111111111111', 'AROWELCOME', '20% off your inaugural fine-dining order with ARO (up to ₹250)', 20.00, NULL, 500.00, 250.00, CURRENT_TIMESTAMP + INTERVAL '90 days', true),
('cp222222-2222-2222-2222-222222222222', 'FLAT100', 'Flat ₹100 gourmet privilege on orders above ₹800', NULL, 100.00, 800.00, NULL, CURRENT_TIMESTAMP + INTERVAL '60 days', true),
('cp333333-3333-3333-3333-333333333333', 'FIESTA50', 'Flat ₹50 weekend privilege on sharing menus', NULL, 50.00, 450.00, NULL, CURRENT_TIMESTAMP + INTERVAL '30 days', true)
ON CONFLICT (code) DO NOTHING;
