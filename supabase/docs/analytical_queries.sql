-- ==============================================================================
-- ARO ACADEMIC DBMS DEMONSTRATION QUERIES
-- Aligned with 21-entity 3NF Schema (Section 11)
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1. SELECT, WHERE, SORTING & FILTERING
-- Retrieve all available vegetarian dishes under ₹800 sorted by price ascending
-- ------------------------------------------------------------------------------
SELECT 
    mi.id,
    mi.name AS dish_name,
    mi.price,
    mi.prep_time_minutes,
    r.name AS restaurant_name,
    r.city
FROM menu_items mi
JOIN restaurants r ON mi.restaurant_id = r.id
WHERE mi.is_veg = TRUE 
  AND mi.is_available = TRUE 
  AND mi.price <= 800.00
ORDER BY mi.price ASC, mi.name ASC;

-- ------------------------------------------------------------------------------
-- 2. INNER JOIN vs LEFT JOIN
-- List all restaurants with their active category count and total menu item count
-- (Uses LEFT JOIN so restaurants without items still appear)
-- ------------------------------------------------------------------------------
SELECT 
    r.id AS restaurant_id,
    r.name AS restaurant_name,
    r.price_tier,
    COUNT(DISTINCT c.id) AS active_categories,
    COUNT(mi.id) AS total_menu_items
FROM restaurants r
LEFT JOIN categories c ON c.restaurant_id = r.id
LEFT JOIN menu_items mi ON mi.restaurant_id = r.id AND mi.is_available = TRUE
GROUP BY r.id, r.name, r.price_tier
ORDER BY total_menu_items DESC;

-- ------------------------------------------------------------------------------
-- 3. AGGREGATE FUNCTIONS, GROUP BY & HAVING
-- Business Report: High-performing restaurants by gross revenue and order volume
-- (Restricted to restaurants with at least 5 completed orders and avg ticket >= ₹500)
-- ------------------------------------------------------------------------------
SELECT 
    r.id,
    r.name AS restaurant_name,
    r.city,
    COUNT(o.id) AS completed_orders_count,
    ROUND(AVG(o.final_paid_amount), 2) AS average_order_value,
    SUM(o.item_total) AS gross_item_revenue,
    SUM(o.discount_amount) AS total_discounts_absorbed,
    SUM(o.final_paid_amount) AS net_settlement_revenue
FROM restaurants r
INNER JOIN orders o ON o.restaurant_id = r.id
WHERE o.status = 'delivered'
  AND o.payment_status = 'PAID'
GROUP BY r.id, r.name, r.city
HAVING COUNT(o.id) >= 5 AND AVG(o.final_paid_amount) >= 500.00
ORDER BY net_settlement_revenue DESC;

-- ------------------------------------------------------------------------------
-- 4. SUBQUERIES (Scalar & Correlated)
-- Identify dishes priced above their respective restaurant's average dish price
-- ------------------------------------------------------------------------------
SELECT 
    mi.name AS dish_name,
    mi.price AS dish_price,
    r.name AS restaurant_name,
    ROUND(sub.avg_restaurant_price, 2) AS restaurant_average_price,
    ROUND(mi.price - sub.avg_restaurant_price, 2) AS price_premium
FROM menu_items mi
JOIN restaurants r ON mi.restaurant_id = r.id
JOIN (
    SELECT 
        restaurant_id, 
        AVG(price) AS avg_restaurant_price
    FROM menu_items
    GROUP BY restaurant_id
) sub ON mi.restaurant_id = sub.restaurant_id
WHERE mi.price > sub.avg_restaurant_price
ORDER BY price_premium DESC;

-- ------------------------------------------------------------------------------
-- 5. ANALYTICAL BUSINESS VIEW: Best-Selling Dishes & Customization Frequency
-- ------------------------------------------------------------------------------
CREATE OR REPLACE VIEW view_bestselling_dishes AS
SELECT 
    oi.item_name_snapshot AS dish_name,
    r.name AS restaurant_name,
    SUM(oi.quantity) AS total_units_sold,
    SUM(oi.total_price_snapshot) AS total_revenue_generated,
    COUNT(DISTINCT oi.order_id) AS distinct_orders_included
FROM order_items oi
JOIN orders o ON oi.order_id = o.id
JOIN restaurants r ON o.restaurant_id = r.id
WHERE o.status = 'delivered'
GROUP BY oi.item_name_snapshot, r.name
ORDER BY total_units_sold DESC;

-- ------------------------------------------------------------------------------
-- 6. REPORT: Customer Lifetime Value (LTV) and Order Recency
-- ------------------------------------------------------------------------------
SELECT 
    p.id AS profile_id,
    p.full_name AS customer_name,
    p.email,
    COUNT(o.id) AS total_orders_placed,
    COALESCE(SUM(o.final_paid_amount), 0.00) AS lifetime_expenditure,
    MAX(o.placed_at) AS last_order_timestamp
FROM profiles p
LEFT JOIN orders o ON o.profile_id = p.id AND o.payment_status = 'PAID'
GROUP BY p.id, p.full_name, p.email
ORDER BY lifetime_expenditure DESC;
