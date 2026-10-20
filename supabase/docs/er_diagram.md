# ARO Entity-Relationship (ER) Specification

## 1. Master Relational Diagram (21 Entities)

```mermaid
erDiagram
    PROFILES ||--o{ ADDRESSES : "registers"
    PROFILES ||--o{ CARTS : "owns"
    PROFILES ||--o{ ORDERS : "places"
    PROFILES ||--o{ FAVORITES : "bookmarks"
    PROFILES ||--o{ REVIEWS : "authors"
    PROFILES ||--o{ NOTIFICATIONS : "receives"
    PROFILES ||--o{ COUPON_REDEMPTIONS : "redeems"

    RESTAURANTS ||--o{ CATEGORIES : "organizes"
    CATEGORIES ||--o{ MENU_ITEMS : "contains"
    RESTAURANTS ||--o{ MENU_ITEMS : "cooks"
    RESTAURANTS ||--o{ CARTS : "fulfills"
    RESTAURANTS ||--o{ ORDERS : "prepares"
    RESTAURANTS ||--o{ FAVORITES : "favorited_by"
    RESTAURANTS ||--o{ REVIEWS : "rated_by"

    MENU_ITEMS ||--o{ MENU_ITEM_OPTION_GROUPS : "defines"
    MENU_ITEM_OPTION_GROUPS ||--o{ MENU_ITEM_OPTIONS : "offers"
    MENU_ITEMS ||--o{ CART_ITEMS : "selected_in"
    MENU_ITEMS ||--o{ ORDER_ITEMS : "purchased_in"
    MENU_ITEMS ||--o{ FAVORITES : "liked_by"

    CARTS ||--|{ CART_ITEMS : "holds"
    CART_ITEMS ||--o{ CART_ITEM_OPTIONS : "configured_with"
    MENU_ITEM_OPTIONS ||--o{ CART_ITEM_OPTIONS : "chosen"

    COUPONS ||--o{ ORDERS : "applied_to"
    COUPONS ||--o{ COUPON_REDEMPTIONS : "tracked_in"

    ORDERS ||--|{ ORDER_ITEMS : "contains"
    ORDERS ||--o{ ORDER_STATUS_HISTORY : "progresses_through"
    ORDERS ||--o| DELIVERIES : "dispatched_via"
    ORDERS ||--o| REVIEWS : "generates"
    ORDERS ||--o{ NOTIFICATIONS : "triggers"

    ORDER_ITEMS ||--o{ ORDER_ITEM_OPTIONS : "customized_with"
    DELIVERIES ||--o{ DELIVERY_LOCATION_UPDATES : "logs_telemetry"

    PROFILES {
        UUID id PK
        VARCHAR email UK
        VARCHAR full_name
        VARCHAR phone
    }

    ADDRESSES {
        UUID id PK
        UUID profile_id FK
        VARCHAR label
        VARCHAR address_line1
        VARCHAR city
        NUMERIC latitude
        NUMERIC longitude
    }

    RESTAURANTS {
        UUID id PK
        VARCHAR name
        VARCHAR slug UK
        NUMERIC rating
        VARCHAR price_tier
        NUMERIC minimum_order
        NUMERIC delivery_fee
        NUMERIC packaging_fee
    }

    CATEGORIES {
        UUID id PK
        UUID restaurant_id FK
        VARCHAR name
        VARCHAR slug
        INTEGER display_order
    }

    MENU_ITEMS {
        UUID id PK
        UUID restaurant_id FK
        UUID category_id FK
        VARCHAR name
        NUMERIC price
        BOOLEAN is_veg
        BOOLEAN is_available
    }

    MENU_ITEM_OPTION_GROUPS {
        UUID id PK
        UUID menu_item_id FK
        VARCHAR name
        INTEGER min_select
        INTEGER max_select
    }

    MENU_ITEM_OPTIONS {
        UUID id PK
        UUID group_id FK
        VARCHAR name
        NUMERIC additional_price
    }

    CARTS {
        UUID id PK
        UUID profile_id FK, UK
        UUID restaurant_id FK
    }

    CART_ITEMS {
        UUID id PK
        UUID cart_id FK
        UUID menu_item_id FK
        INTEGER quantity
    }

    CART_ITEM_OPTIONS {
        UUID id PK
        UUID cart_item_id FK
        UUID option_id FK
    }

    COUPONS {
        UUID id PK
        VARCHAR code UK
        NUMERIC discount_percentage
        NUMERIC flat_discount
        NUMERIC min_order_value
        TIMESTAMPTZ valid_until
    }

    COUPON_REDEMPTIONS {
        UUID id PK
        UUID coupon_id FK
        UUID profile_id FK
        UUID order_id FK
        NUMERIC discount_applied
    }

    ORDERS {
        UUID id PK
        VARCHAR order_number UK
        UUID profile_id FK
        UUID restaurant_id FK
        VARCHAR status
        NUMERIC item_total
        NUMERIC final_paid_amount
    }

    ORDER_ITEMS {
        UUID id PK
        UUID order_id FK
        UUID menu_item_id FK
        VARCHAR item_name_snapshot
        NUMERIC item_price_snapshot
        INTEGER quantity
        NUMERIC total_price_snapshot
    }

    ORDER_ITEM_OPTIONS {
        UUID id PK
        UUID order_item_id FK
        VARCHAR option_name_snapshot
        NUMERIC additional_price_snapshot
    }

    FAVORITES {
        UUID id PK
        UUID profile_id FK
        UUID restaurant_id FK
        UUID menu_item_id FK
    }

    REVIEWS {
        UUID id PK
        UUID restaurant_id FK
        UUID profile_id FK
        UUID order_id FK
        INTEGER rating
        TEXT review_text
    }

    ORDER_STATUS_HISTORY {
        UUID id PK
        UUID order_id FK
        VARCHAR from_status
        VARCHAR to_status
    }

    DELIVERIES {
        UUID id PK
        UUID order_id FK, UK
        VARCHAR rider_name
        VARCHAR rider_phone
        VARCHAR vehicle_number
        VARCHAR current_status
        NUMERIC current_latitude
        NUMERIC current_longitude
        INTEGER estimated_arrival_minutes
    }

    DELIVERY_LOCATION_UPDATES {
        UUID id PK
        UUID delivery_id FK
        NUMERIC latitude
        NUMERIC longitude
        TIMESTAMPTZ recorded_at
    }

    NOTIFICATIONS {
        UUID id PK
        UUID profile_id FK
        UUID order_id FK
        VARCHAR title
        TEXT message
        BOOLEAN is_read
    }
```

---

## 2. Cardinality Matrix & Deletion Integrity

| Parent Entity | Dependent Entity | Cardinality | Delete Action | Rationale |
| :--- | :--- | :--- | :--- | :--- |
| `profiles` | `addresses` | 1 : N | `CASCADE` | User addresses belong strictly to customer account. |
| `profiles` | `orders` | 1 : N | `RESTRICT` | User accounts with order history cannot be deleted without audit preservation. |
| `restaurants` | `categories` | 1 : N | `CASCADE` | Categories are specific to restaurant menus. |
| `categories` | `menu_items` | 1 : N | `RESTRICT` | Active menu categories with dishes cannot be dropped abruptly. |
| `menu_items` | `option_groups` | 1 : N | `CASCADE` | Options are tied to dish configuration. |
| `carts` | `cart_items` | 1 : N | `CASCADE` | Cart flush cascades to item options. |
| `orders` | `order_items` | 1 : N | `CASCADE` | Canceling unconfirmed draft purges line items. |
| `order_items` | `order_item_options` | 1 : N | `CASCADE` | Line item customizations cascade with item. |
| `orders` | `deliveries` | 1 : 1 | `CASCADE` | Delivery assignment is uniquely bound to one order. |
| `deliveries` | `location_updates` | 1 : N | `CASCADE` | Rider telemetry history tied to delivery session. |
| `coupons` | `orders` | 1 : N | `SET NULL` | Expiring a coupon preserves historical order discount values. |
