# ARO Database Normalization Document (1NF, 2NF, 3NF)

## 1. Executive Summary
This document provides formal relational database normalization justifications for **ARO**, an online food ordering and restaurant discovery platform. The schema has been systematically modeled to eliminate update, insertion, and deletion anomalies while enforcing strict referential integrity.

---

## 2. First Normal Form (1NF)

### Definition
A relation is in 1NF if and only if:
1. Every attribute domain contains only atomic (indivisible) values.
2. There are no repeating groups or multi-valued attributes in a single record.

### Application in ARO
- **Decomposition of Cuisines**: In primitive or poorly designed food ordering schemas, cuisines are often stored as comma-separated text strings (e.g., `"Italian, Wood-fired, Pasta"`) inside a single column in the `restaurants` table. This violates 1NF. In ARO, cuisines are extracted into a distinct master relation (`cuisines`), linked via a pure associative bridge table (`restaurant_cuisines`) with a composite primary key `(restaurant_id, cuisine_id)`.
- **Atomic Address Fields**: Customer addresses are broken down into atomic scalar domains: `address_line1`, `address_line2`, `landmark`, `city`, `pincode`, `latitude`, `longitude`.

---

## 3. Second Normal Form (2NF)

### Definition
A relation is in 2NF if and only if:
1. It is already in 1NF.
2. Every non-prime attribute is **fully functionally dependent** on the whole candidate key (no partial functional dependency on any subset of a composite candidate key).

### Application in ARO
- In the bridge table `restaurant_cuisines(restaurant_id, cuisine_id)`:
  - Candidate Key = `(restaurant_id, cuisine_id)`
  - There are zero non-key attributes in this table. Thus, no partial dependency can exist.
- In `order_items(id, order_id, menu_item_id, ...)`:
  - A surrogate primary key `id` (UUID) is utilized. Every non-key attribute (`quantity`, `item_price_snapshot`, `total_price_snapshot`) is functionally dependent on `id`.
  - Alternatively, if modeled with composite key `(order_id, menu_item_id)`, storing `item_description` or `restaurant_city` inside `order_items` would be a partial dependency on `menu_item_id` alone, violating 2NF. By isolating `menu_items` and referencing foreign keys, 2NF is strictly maintained.

---

## 4. Third Normal Form (3NF)

### Definition
A relation is in 3NF if and only if:
1. It is already in 2NF.
2. No non-prime attribute is **transitively dependent** on the candidate key (i.e., if $X \to Y$ and $Y \to Z$, then $Y$ must be a superkey or $Z$ must be a prime attribute).

### Application in ARO
- **Menu Items and Categories**:
  - Suppose `menu_items` stored `category_name` and `category_display_order`.
  - Functional Dependency: `menu_item_id -> category_id`, and `category_id -> category_name`.
  - Here, `category_name` depends transitively on `menu_item_id` through `category_id`. Updating a category name would cause update anomalies across dozens of menu items.
  - **Resolution**: `menu_categories` is extracted into its own relation. `menu_items` maintains only the foreign key `category_id REFERENCES menu_categories(id)`.
- **Customer Addresses**:
  - Delivery coordinates and recipient profiles are kept in `customer_addresses`, dependent directly on `address_id` and foreign key `customer_id`.

---

## 5. Domain-Specific DBMS Requirement: Historical Price Snapshots

In typical relational schemas, normalization demands referencing prices directly from `menu_items.price`. However, in real-world commercial food ordering platforms, this creates a catastrophic business flaw:

If Chef Antonio updates the price of *Truffle Hamachi Nigiri* from ₹850 to ₹950 next month:
- A naive normalized query `SELECT SUM(menu_items.price * order_items.quantity) FROM order_items...` would retroactively inflate orders placed months ago!
- Financial invoices, tax records, and customer purchase histories would be corrupted.

### The Solution: Temporal Price Snapshotting
In `order_items`, ARO explicitly captures:
- `item_name_snapshot VARCHAR(120)`
- `item_price_snapshot NUMERIC(8, 2)`
- `total_price_snapshot NUMERIC(10, 2)`

This fulfills the temporal relational snapshot pattern: while `menu_items` represents the current mutable state, `order_items` records an immutable financial transaction ledger at time $t$.

---

## 6. ACID Transaction Boundaries

ARO specifies atomic transaction boundaries for critical operations:

```sql
BEGIN TRANSACTION;
  -- 1. Insert order record
  INSERT INTO orders (...) VALUES (...);

  -- 2. Insert snapshot items
  INSERT INTO order_items (...) VALUES (...);

  -- 3. Validate and record coupon redemption
  UPDATE coupons SET is_active = false WHERE id = ... AND max_redemptions = 1;

  -- 4. Log initial timeline status
  INSERT INTO order_status_logs (order_id, from_status, to_status) VALUES (..., NULL, 'placed');
COMMIT;
```
If any check constraint or coupon validity condition fails, the entire transaction rolls back cleanly with zero partial writes.
