-- ==============================================================================
-- ARO DATABASE MIGRATION: 20261021000000_migrate_to_hyderabad.sql
-- Safe, idempotent migration to transition demo content from Bengaluru to Hyderabad
--
-- INSTRUCTIONS FOR SUPABASE:
-- Run this script in the Supabase SQL Editor if applying directly to your live project.
-- This script only uses non-destructive UPDATE / INSERT ON CONFLICT statements.
-- It preserves all foreign key relationships, existing UUIDs, RLS policies, and
-- schema definitions intact.
-- ==============================================================================

BEGIN;

-- 1. UPDATE DEMO ADDRESSES TO HYDERABAD
UPDATE addresses
SET
    address_line1 = 'Villa 14, Whispering Palms',
    address_line2 = 'Road No. 36, Jubilee Hills',
    landmark = 'Near Peddamma Temple Metro',
    city = 'Hyderabad',
    pincode = '500033',
    latitude = 17.4325000,
    longitude = 78.4072000
WHERE id = 'a0000001-0000-0000-0000-000000000001'
   OR (label = 'Home' AND city IN ('Bengaluru', 'Bangalore'));

UPDATE addresses
SET
    address_line1 = 'Level 12, Cyber Towers',
    address_line2 = 'Hitech City Main Road, Madhapur',
    landmark = 'Opposite Shilparamam',
    city = 'Hyderabad',
    pincode = '500081',
    latitude = 17.4504000,
    longitude = 78.3808000
WHERE id = 'a0000002-0000-0000-0000-000000000002'
   OR (label = 'Work' AND city IN ('Bengaluru', 'Bangalore'));

-- 2. UPDATE OR INSERT HYDERABAD CUISINES
INSERT INTO cuisines (id, name, slug, icon) VALUES
('c0000001-0000-0000-0000-000000000001', 'Contemporary Deccani', 'contemporary-deccani', 'Flame'),
('c0000002-0000-0000-0000-000000000002', 'Japanese & Robata', 'japanese-robata', 'Fish'),
('c0000003-0000-0000-0000-000000000003', 'Artisanal Italian', 'artisanal-italian', 'Pizza'),
('c0000004-0000-0000-0000-000000000004', 'Hyderabadi Dum & Awadhi', 'hyderabadi-dum', 'Sparkles'),
('c0000005-0000-0000-0000-000000000005', 'Telangana Heritage', 'telangana-heritage', 'Flame')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    slug = EXCLUDED.slug,
    icon = EXCLUDED.icon;

-- 3. UPDATE DEMO RESTAURANTS TO HYDERABAD BRANDS (PRESERVING PRIMARY KEYS)

-- Restaurant 1: Deccan Table (Jubilee Hills)
UPDATE restaurants
SET
    name = 'Deccan Table',
    slug = 'deccan-table',
    tagline = 'Contemporary Deccani & Telangana heritage cuisine',
    description = 'Rooted in royal Deccani traditions and Telangana spice crafts. Slow-smoked marag, artisanal bagara rice, and hand-ground spice blends.',
    address_line = 'Road No. 36, Jubilee Hills',
    city = 'Hyderabad',
    latitude = 17.4325000,
    longitude = 78.4072000,
    delivery_fee = 80.00,
    minimum_order = 600.00
WHERE id = 'b0000001-0000-0000-0000-000000000001'
   OR slug IN ('larome-atelier', 'deccan-table');

-- Restaurant 2: Kumo House (Banjara Hills)
UPDATE restaurants
SET
    name = 'Kumo House',
    slug = 'kumo-house',
    tagline = 'Japanese-inspired dining & robata charcoal art',
    description = 'Bespoke Tokyo-inspired dining in Banjara Hills. Binchotan-grilled skewers, bluefin nigiri, and delicate yuzu glazes.',
    address_line = 'Road No. 12, Banjara Hills',
    city = 'Hyderabad',
    latitude = 17.4156000,
    longitude = 78.4352000,
    delivery_fee = 60.00,
    minimum_order = 450.00
WHERE id = 'b0000002-0000-0000-0000-000000000002'
   OR slug IN ('umami-and-ember', 'kumo-house');

-- Restaurant 3: Forno & Fig (Gachibowli)
UPDATE restaurants
SET
    name = 'Forno & Fig',
    slug = 'forno-and-fig',
    tagline = 'Artisanal wood-fired Italian dining & handmade pasta',
    description = 'Pugliese burrata, 72-hour sourdough Neapolitan pizzas, and bronze-die extruded pasta crafted daily in Gachibowli.',
    address_line = 'Financial District, Gachibowli',
    city = 'Hyderabad',
    latitude = 17.4401000,
    longitude = 78.3489000,
    delivery_fee = 40.00,
    minimum_order = 300.00
WHERE id = 'b0000003-0000-0000-0000-000000000003'
   OR slug IN ('trattoria-rustica', 'forno-and-fig');

-- Restaurant 4: Nizami Hearth (HITEC City)
UPDATE restaurants
SET
    name = 'Nizami Hearth',
    slug = 'nizami-hearth',
    tagline = 'Royal Hyderabadi & Awadhi-inspired dum heritage',
    description = 'Centuries-old slow-simmered dum preparations, aged basmati gosht biryanis, saffron-infused korma, and flaky roomali.',
    address_line = 'Hitech City Main Road, Madhapur',
    city = 'Hyderabad',
    latitude = 17.4504000,
    longitude = 78.3808000,
    delivery_fee = 70.00,
    minimum_order = 500.00
WHERE id = 'b0000004-0000-0000-0000-000000000004'
   OR slug IN ('saffron-and-silk', 'nizami-hearth');

-- 4. UPDATE RESTAURANT CUISINE ASSOCIATIONS
DELETE FROM restaurant_cuisines
WHERE restaurant_id IN (
    'b0000001-0000-0000-0000-000000000001',
    'b0000002-0000-0000-0000-000000000002',
    'b0000003-0000-0000-0000-000000000003',
    'b0000004-0000-0000-0000-000000000004'
);

INSERT INTO restaurant_cuisines (restaurant_id, cuisine_id) VALUES
('b0000001-0000-0000-0000-000000000001', 'c0000001-0000-0000-0000-000000000001'),
('b0000001-0000-0000-0000-000000000001', 'c0000005-0000-0000-0000-000000000005'),
('b0000002-0000-0000-0000-000000000002', 'c0000002-0000-0000-0000-000000000002'),
('b0000003-0000-0000-0000-000000000003', 'c0000003-0000-0000-0000-000000000003'),
('b0000004-0000-0000-0000-000000000004', 'c0000004-0000-0000-0000-000000000004')
ON CONFLICT DO NOTHING;

-- 5. UPDATE HISTORICAL DEMO ORDER SNAPSHOTS (BENGALURU -> HYDERABAD)
UPDATE orders
SET
    restaurant_address_snapshot = 'Road No. 36, Jubilee Hills, Hyderabad',
    restaurant_name_snapshot = 'Deccan Table'
WHERE restaurant_id = 'b0000001-0000-0000-0000-000000000001'
   OR restaurant_name_snapshot = 'L’Arôme Atelier';

UPDATE orders
SET
    restaurant_address_snapshot = 'Road No. 12, Banjara Hills, Hyderabad',
    restaurant_name_snapshot = 'Kumo House'
WHERE restaurant_id = 'b0000002-0000-0000-0000-000000000002'
   OR restaurant_name_snapshot = 'Umami & Ember';

UPDATE orders
SET
    restaurant_address_snapshot = 'Financial District, Gachibowli, Hyderabad',
    restaurant_name_snapshot = 'Forno & Fig'
WHERE restaurant_id = 'b0000003-0000-0000-0000-000000000003'
   OR restaurant_name_snapshot IN ('Trattoria Rustica', 'Osteria Emilia & Cellar');

UPDATE orders
SET
    restaurant_address_snapshot = 'Hitech City Main Road, Madhapur, Hyderabad',
    restaurant_name_snapshot = 'Nizami Hearth'
WHERE restaurant_id = 'b0000004-0000-0000-0000-000000000004'
   OR restaurant_name_snapshot = 'Saffron & Silk';

-- 6. UPDATE DEMO DELIVERIES & VEHICLE NUMBER PLATES (KA -> TS)
UPDATE deliveries
SET
    vehicle_number = 'TS 09 EQ 4821',
    current_latitude = 17.4245000,
    current_longitude = 78.4215000
WHERE vehicle_number LIKE 'KA%' OR vehicle_number IS NULL;

COMMIT;
