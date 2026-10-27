-- ==============================================================================
-- ARO DATABASE MIGRATION: 20261028000000_aro_budget_optimizer.sql
-- Smart Budget Optimizer: Optimization Indexes, Performance Views & Taxonomy Mapping
-- Engine: PostgreSQL 15+ / Supabase
-- ==============================================================================

-- 1. Index for lightning-fast budget & filter lookups on menu_items
CREATE INDEX IF NOT EXISTS idx_menu_items_budget_lookup
ON menu_items (restaurant_id, is_available, is_veg, price)
WHERE is_available = TRUE;

-- 2. Index for category filtering by restaurant
CREATE INDEX IF NOT EXISTS idx_categories_restaurant_slug
ON categories (restaurant_id, slug);

-- 3. Canonical Materialized View / Read-Only Fast View for Budget Optimization
CREATE OR REPLACE VIEW view_budget_optimized_menu_items AS
SELECT
    m.id AS menu_item_id,
    m.restaurant_id,
    r.name AS restaurant_name,
    r.slug AS restaurant_slug,
    r.delivery_fee,
    r.packaging_fee,
    r.minimum_order,
    r.is_open AS restaurant_is_open,
    m.category_id,
    c.name AS category_name,
    c.slug AS category_slug,
    m.name AS item_name,
    m.description AS item_description,
    m.price AS item_price,
    m.is_veg,
    m.is_available,
    m.image_url,
    ROUND(m.price * 0.05, 2) AS estimated_tax_amount,
    ROUND(m.price + (m.price * 0.05) + r.delivery_fee + r.packaging_fee, 2) AS minimum_single_item_payable
FROM menu_items m
JOIN restaurants r ON m.restaurant_id = r.id
JOIN categories c ON m.category_id = c.id
WHERE m.is_available = TRUE AND r.is_open = TRUE;

-- Grant select on view to public/authenticated customers
GRANT SELECT ON view_budget_optimized_menu_items TO anon, authenticated;

COMMENT ON VIEW view_budget_optimized_menu_items IS 'Optimized relational view for ARO Smart Budget Optimizer querying active menu items with exact delivery & packaging fee snapshots.';

