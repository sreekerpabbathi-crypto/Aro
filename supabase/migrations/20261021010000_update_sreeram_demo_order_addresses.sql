-- ==============================================================================
-- ARO MIGRATION: 20261021010000_update_sreeram_demo_order_addresses.sql
-- Description: Update Sreeram K's historical demo order snapshots to canonical
--              Hyderabad address (Villa 14, Whispering Palms, Road No. 36, Jubilee Hills).
--
-- Target Profile:
--   '00000001-0000-0000-0000-000000000001' (Sreeram K, sreeram@example.com)
--
-- Target Orders:
--   - 9e57db99-c0d0-46f0-adff-9ff9fad42d93 (ARO-669414)
--   - da687afd-f5be-4987-867e-2f21ea22cdfd (ARO-748719)
-- ==============================================================================

BEGIN;

UPDATE orders
SET delivery_address_json = jsonb_build_object(
    'label', 'Home',
    'recipientName', 'Sreeram K',
    'recipientPhone', '+91 98765 01234',
    'addressLine1', 'Villa 14, Whispering Palms',
    'addressLine2', 'Road No. 36, Jubilee Hills',
    'landmark', 'Near Peddamma Temple Metro',
    'city', 'Hyderabad',
    'pincode', '500033',
    'latitude', 17.4325000,
    'longitude', 78.4072000
)
WHERE profile_id = '00000001-0000-0000-0000-000000000001'
  AND (
      delivery_address_json->>'city' IN ('Bengaluru', 'Bangalore')
      OR delivery_address_json->>'pincode' = '560038'
      OR id IN ('9e57db99-c0d0-46f0-adff-9ff9fad42d93', 'da687afd-f5be-4987-867e-2f21ea22cdfd')
  );

COMMIT;
