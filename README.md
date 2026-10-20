# ARO — Good food. Beautifully found.

> A portfolio-quality, cinematic online food ordering and restaurant discovery platform built with **React 19**, **Three.js**, **Supabase PostgreSQL**, and modern relational DBMS architecture.

---

## 1. Brand Identity & Vision

- **Brand Name**: ARO
- **Provisional Brand Line**: *"Good food. Beautifully found."*
- **Personality**: Minimal, elegant, modern, memorable, premium but approachable, technology-driven without looking overly futuristic.
- **Product Experience**:
  - Cinematic, 3D-enhanced culinary landing experience
  - Restaurant discovery, multi-criteria filters, and sorting
  - Categorized menus, chef specials, and item details
  - Food customization (portions, add-ons) with strict selection rules
  - Single-restaurant persistent cart with live fee calculations
  - Coupons, promo codes, itemized taxes, and checkout
  - Supabase Auth and customer profiles
  - Saved addresses with GPS coordinates and order history
  - Simulated rider tracking on MapLibre GL JS interactive vector maps
  - Order status timeline with live updates
  - Verified reviews, ratings, favorites, and 1-click reorder

---

## 2. Technology Stack

| Layer | Technologies Selected |
| :--- | :--- |
| **Frontend Framework** | React 19, TypeScript, Vite 8 |
| **Styling** | Tailwind CSS v4 Engine, Vanilla CSS tokens, Glassmorphism utilities |
| **Routing** | React Router v7 (`react-router-dom`) |
| **Interface Motion** | Motion for React (`motion`) |
| **Real 3D Graphics** | Three.js, React Three Fiber v9 (`@react-three/fiber`), `@react-three/drei` |
| **Cinematic Animations**| GSAP with ScrollTrigger |
| **Geospatial & Delivery**| MapLibre GL JS (`maplibre-gl`) |
| **Form & Validations** | React Hook Form, Zod |
| **Database & Auth** | Supabase PostgreSQL 15+, Supabase Auth, Row Level Security (RLS) |

---

## 3. Architecture & Folder Structure

```
aro/
├── public/                     # Static public assets and SVG brand favicon
│   └── favicon.svg
├── src/
│   ├── assets/                 # Brand illustrations and vector icons
│   ├── components/             # Reusable design system components
│   │   ├── common/             # Button, Card, Badge, Modal, Input
│   │   ├── layout/             # Navbar, Footer, MobileNav, Containers
│   │   └── canvas/             # R3F 3D Canvas, WebGL detector, ThreeFallback
│   ├── context/                # React Contexts (AuthContext, CartContext)
│   ├── features/               # High-cohesion domain modules
│   │   ├── landing/            # Dedicated cinematic entry experience at /
│   │   ├── storefront/         # Customer-facing food-ordering storefront at /home
│   │   ├── restaurants/        # Discovery catalog, filters, restaurant menu
│   │   ├── cart/               # Cart drawer, coupon validation, price summary
│   │   ├── checkout/           # Delivery address picker, payment simulation
│   │   ├── orders/             # Order tracking, MapLibre simulated route, timeline
│   │   └── profile/            # Customer profile, saved addresses, order history
│   ├── hooks/                  # Custom hooks (useReducedMotion, useCart, useAuth)
│   ├── lib/                    # Core libraries (supabase client, cn utils, validations)
│   │   ├── supabase.ts         # Supabase client with dev fallback & safety guards
│   │   ├── utils.ts            # Class merger, formatters, WebGL support check
│   │   └── validations.ts      # Shared Zod validation schemas
│   ├── services/               # API & data-access abstraction layer
│   │   ├── restaurantService.ts
│   │   └── orderService.ts
│   ├── styles/                 # Tailwind CSS v4 entry point & design tokens
│   ├── types/                  # Shared TypeScript interfaces & DB schema types
│   ├── App.tsx                 # Root layout with BrowserRouter & routes
│   └── main.tsx                # React DOM entry point
├── supabase/
│   ├── migrations/             # SQL Migrations as the schema source of truth
│   │   └── 20261019000000_aro_initial_schema.sql
│   ├── seed/                   # Realistic fictional seed data for Bengaluru restaurants
│   │   └── 01_seed_realistic_data.sql
│   └── docs/
│       ├── er_diagram.md       # ER diagram specification & cardinality matrix
│       └── normalization.md    # Formal 1NF, 2NF, 3NF documentation
├── .env.example                # Example environment variables blueprint
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 4. Academic Database Principles

1. **Third Normal Form (3NF)**:
   - Full functional dependencies. Zero transitive dependencies.
   - Decomposed many-to-many relationships (e.g. `restaurant_cuisines` bridge).
2. **Temporal Audit Price Snapshots**:
   - `order_items` preserves `item_price_snapshot` and `item_name_snapshot` at the time of purchase. Future restaurant price updates never corrupt past financial records.
3. **Integrity & Constraints**:
   - Primary Keys (`UUID`) and Foreign Keys with explicit `ON DELETE CASCADE` / `ON DELETE RESTRICT` semantics.
   - Check constraints: `rating BETWEEN 1 AND 5`, `price >= 0`, `prep_time_minutes > 0`.
   - Unique constraints on slugs, codes, and order numbers.
4. **Row Level Security (RLS)**:
   - Built-in Supabase security policies ensuring customers access only their own orders, profiles, and addresses.

---

## 5. Getting Started

### Prerequisites
- Node.js (v18+ or v20+)
- npm (v9+ or v11+)

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd Aro

# Install dependencies
npm install
```

### Environment Configuration
Copy `.env.example` to `.env` and fill in your Supabase project parameters:
```bash
cp .env.example .env
```
*(Note: ARO includes graceful local fallbacks if Supabase credentials are not yet configured)*.

### Primary Experiences & Routes
- `/`: Dedicated full-screen cinematic brand entry experience with the procedural 3D gourmet dish centerpiece, ARO wordmark, and "Enter ARO" CTA.
- `/home`: Real customer-facing food-ordering storefront with restaurant search, cuisine categories, chef masterpieces, and privileges.

### Development Server
```bash
npm run dev
```
- Landing Page: [http://localhost:5173/](http://localhost:5173/)
- Storefront: [http://localhost:5173/home](http://localhost:5173/home)

### Build & Verification
```bash
# Run TypeScript compilation and Vite production bundle check
npm run build

# Run linter
npm run lint
```
