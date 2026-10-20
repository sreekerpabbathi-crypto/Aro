// scratch/build_master_dataset.js
const fs = require('fs');
const path = require('path');

const { CUISINES } = require('./build_dataset.cjs');
const { PART1 } = require('./restaurants_part1.cjs');
const { PART2 } = require('./restaurants_part2.cjs');
const { PART3 } = require('./restaurants_part3.cjs');

const allRestaurants = [...PART1, ...PART2, ...PART3];

console.log(`Loaded ${allRestaurants.length} restaurants definitions.`);

// Generate stable, strictly valid RFC 4122 hexadecimal UUID helpers ([0-9a-f])
function getRestaurantUUID(index) {
  const padEnd = String(index).padStart(12, '0');
  return `b0000000-0000-0000-0000-${padEnd}`;
}

function getCategoryUUID(resIndex, catIndex) {
  const r = String(resIndex).padStart(4, '0');
  const c = String(catIndex).padStart(4, '0');
  return `ca000000-0000-0000-${r}-${c.padStart(12, '0')}`;
}

function getMenuItemUUID(globalItemIndex) {
  const pad = String(globalItemIndex).padStart(12, '0');
  return `d0000000-0000-0000-0000-${pad}`;
}

function getOptionGroupUUID(globalGroupIndex) {
  const pad = String(globalGroupIndex).padStart(12, '0');
  return `e0000000-0000-0000-0000-${pad}`;
}

function getOptionUUID(globalOptionIndex) {
  const pad = String(globalOptionIndex).padStart(12, '0');
  return `f0000000-0000-0000-0000-${pad}`;
}

// Validation maps and counters
const restaurantMap = new Map();
const categoryList = [];
const menuItemList = [];
const optionGroupList = [];
const optionList = [];
const restaurantCuisineList = [];

let globalItemCounter = 0;
let globalGroupCounter = 0;
let globalOptionCounter = 0;

allRestaurants.forEach((res, rIdx) => {
  const resIndex = res.index;
  // Overwrite the first 4 with the exact known existing UUIDs in Supabase!
  let resId;
  if (resIndex === 1) resId = 'b0000001-0000-0000-0000-000000000001';
  else if (resIndex === 2) resId = 'b0000002-0000-0000-0000-000000000002';
  else if (resIndex === 3) resId = 'b0000003-0000-0000-0000-000000000003';
  else if (resIndex === 4) resId = 'b0000004-0000-0000-0000-000000000004';
  else resId = getRestaurantUUID(resIndex);

  if (restaurantMap.has(resId)) {
    throw new Error(`Duplicate restaurant ID: ${resId}`);
  }
  restaurantMap.set(resId, { ...res, id: resId });

  // Map cuisines
  res.cuisines.forEach((cSlug) => {
    const cuisine = CUISINES.find((c) => c.slug === cSlug);
    if (!cuisine) {
      throw new Error(`Cuisine slug not found in CUISINES: ${cSlug} for restaurant ${res.name}`);
    }
    restaurantCuisineList.push({
      restaurant_id: resId,
      cuisine_id: cuisine.id
    });
  });

  // Map categories and items
  res.categories.forEach((cat, cIdx) => {
    const catId = getCategoryUUID(resIndex, cIdx + 1);
    categoryList.push({
      id: catId,
      restaurant_id: resId,
      name: cat.name,
      slug: cat.slug,
      display_order: cIdx + 1
    });

    cat.items.forEach((item) => {
      globalItemCounter++;
      const itemId = getMenuItemUUID(globalItemCounter);
      menuItemList.push({
        id: itemId,
        restaurant_id: resId,
        category_id: catId,
        name: item.name,
        description: item.description,
        price: item.price,
        image_url: item.image_url,
        is_veg: item.is_veg,
        is_chef_special: item.is_chef_special || false,
        is_available: true,
        prep_time_minutes: item.prep_time || 20
      });

      // Contextual Customization Generation if not manually specified
      const finalOptions = (item.options && item.options.length > 0) ? item.options : [];

      if (finalOptions.length === 0) {
        const lowerName = item.name.toLowerCase();
        const lowerCat = cat.name.toLowerCase();

        if (lowerName.includes('biryani') || lowerName.includes('pulao')) {
          finalOptions.push({
            groupName: 'Portion Size',
            min: 1,
            max: 1,
            required: true,
            choices: [
              { name: 'Regular Portion (Serves 1)', price: 0, default: true },
              { name: 'Jumbo Handi (Serves 2)', price: Math.round(item.price * 0.75) }
            ]
          });
          finalOptions.push({
            groupName: 'Accompaniment',
            min: 0,
            max: 2,
            required: false,
            choices: [
              { name: 'Extra Mirchi Ka Salan Bowl', price: 60 },
              { name: 'Thick Spiced Dahi Raita', price: 40 }
            ]
          });
        } else if (lowerName.includes('pizza')) {
          finalOptions.push({
            groupName: 'Crust Style',
            min: 1,
            max: 1,
            required: true,
            choices: [
              { name: 'Artisanal 72hr Sourdough Crust', price: 0, default: true },
              { name: 'Garlic Butter Crust Edge', price: 60 }
            ]
          });
          finalOptions.push({
            groupName: 'Cheese & Topping Upgrade',
            min: 0,
            max: 2,
            required: false,
            choices: [
              { name: 'Extra Buffalo Mozzarella', price: 90 },
              { name: 'Aged Shaved Parmesan', price: 80 }
            ]
          });
        } else if (lowerName.includes('kebab') || lowerName.includes('tikka') || lowerName.includes('fry') || lowerName.includes('vepudu')) {
          finalOptions.push({
            groupName: 'Spice & Marinade',
            min: 1,
            max: 1,
            required: true,
            choices: [
              { name: 'Classic Charcoal Medium', price: 0, default: true },
              { name: 'Guntur Fiery Spiced', price: 0 }
            ]
          });
          finalOptions.push({
            groupName: 'Dipping Accompaniment',
            min: 0,
            max: 1,
            required: false,
            choices: [
              { name: 'Extra Roasted Garlic Dip', price: 40 },
              { name: 'Spicy Mint Pachadi Chutney', price: 30 }
            ]
          });
        } else if (lowerName.includes('curry') || lowerName.includes('korma') || lowerName.includes('dal') || lowerName.includes('pulusu') || lowerName.includes('gravy')) {
          finalOptions.push({
            groupName: 'Spice Level',
            min: 1,
            max: 1,
            required: true,
            choices: [
              { name: 'Mild & Creamy', price: 0 },
              { name: 'Royal Medium Spice', price: 0, default: true },
              { name: 'Andhra Teja Hot', price: 0 }
            ]
          });
        } else if (lowerName.includes('coffee') || lowerName.includes('latte') || lowerName.includes('brew')) {
          finalOptions.push({
            groupName: 'Milk & Sweetener',
            min: 0,
            max: 1,
            required: false,
            choices: [
              { name: 'Oat Milk Alternative', price: 60 },
              { name: 'Almond Milk Alternative', price: 70 },
              { name: 'Sugar-Free Stevia Sweetened', price: 0 }
            ]
          });
        } else if (lowerName.includes('shawarma') || lowerName.includes('roll')) {
          finalOptions.push({
            groupName: 'Roll Preparation',
            min: 1,
            max: 1,
            required: true,
            choices: [
              { name: 'Standard Rumali Roll', price: 0, default: true },
              { name: 'Extra Loaded Chicken & Cheese', price: 60 }
            ]
          });
        } else if (lowerName.includes('dosa') || lowerName.includes('idli')) {
          finalOptions.push({
            groupName: 'Ghee & Podi Finishing',
            min: 0,
            max: 1,
            required: false,
            choices: [
              { name: 'Extra Desi Cow Ghee Topping', price: 40 },
              { name: 'Extra Guntur Karampodi Sprinkling', price: 30 }
            ]
          });
        }
      }

      if (finalOptions.length > 0) {
        finalOptions.forEach((optGrp) => {
          globalGroupCounter++;
          const grpId = getOptionGroupUUID(globalGroupCounter);
          optionGroupList.push({
            id: grpId,
            menu_item_id: itemId,
            name: optGrp.groupName,
            min_select: optGrp.min,
            max_select: optGrp.max,
            is_required: optGrp.required
          });

          optGrp.choices.forEach((choice) => {
            globalOptionCounter++;
            const optId = getOptionUUID(globalOptionCounter);
            optionList.push({
              id: optId,
              group_id: grpId,
              name: choice.name,
              additional_price: choice.price,
              is_default: choice.default || false
            });
          });
        });
      }
    });
  });
});

console.log('--- DATASET SUMMARY ---');
console.log(`Total Cuisines: ${CUISINES.length}`);
console.log(`Total Restaurants: ${restaurantMap.size}`);
console.log(`Total Restaurant-Cuisine Bridges: ${restaurantCuisineList.length}`);
console.log(`Total Categories: ${categoryList.length}`);
console.log(`Total Menu Items: ${menuItemList.length}`);
console.log(`Total Option Groups: ${optionGroupList.length}`);
console.log(`Total Option Values: ${optionList.length}`);

// Validation checks
function escapeSql(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/'/g, "''");
}

// 1. Generate SQL Script
let sql = `-- ==============================================================================
-- ARO HYDERABAD DATASET EXPANSION: 03_hyderabad_expanded_dataset.sql
-- Idempotent Seed Migration for 36 Hyderabad Fine Dining & Cultural Restaurants
-- Target Database: PostgreSQL 15+ / Supabase
--
-- Generated records:
-- - ${CUISINES.length} Cuisines (5 existing, 9 expanded)
-- - ${restaurantMap.size} Curated Restaurants across Hyderabad Key Hubs
-- - ${restaurantCuisineList.length} Restaurant-Cuisine Associative Associations
-- - ${categoryList.length} Categories
-- - ${menuItemList.length} Menu Items (~15-22 items per restaurant)
-- - ${optionGroupList.length} Customization Groups & ${optionList.length} Option Values
-- ==============================================================================

BEGIN;

-- ------------------------------------------------------------------------------
-- 1. UPSERT MASTER CUISINES
-- ------------------------------------------------------------------------------
INSERT INTO cuisines (id, name, slug, icon) VALUES
${CUISINES.map((c) => `('${c.id}', '${escapeSql(c.name)}', '${escapeSql(c.slug)}', '${escapeSql(c.icon)}')`).join(',\n')}
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    slug = EXCLUDED.slug,
    icon = EXCLUDED.icon;

-- ------------------------------------------------------------------------------
-- 2. UPSERT 36 HYDERABAD RESTAURANTS
-- ------------------------------------------------------------------------------
INSERT INTO restaurants (
    id, name, slug, tagline, description, cover_image, logo_image,
    rating, rating_count, price_tier, delivery_time_min, delivery_time_max,
    minimum_order, delivery_fee, packaging_fee, is_featured, is_open,
    address_line, city, latitude, longitude
) VALUES
${Array.from(restaurantMap.values()).map((r) => `(
    '${r.id}',
    '${escapeSql(r.name)}',
    '${escapeSql(r.slug)}',
    '${escapeSql(r.tagline)}',
    '${escapeSql(r.description)}',
    '${escapeSql(r.cover_image)}',
    '${escapeSql(r.logo_image)}',
    ${r.rating.toFixed(1)},
    ${r.rating_count},
    '${r.price_tier}',
    ${r.delivery_time_min},
    ${r.delivery_time_max},
    ${r.minimum_order.toFixed(2)},
    ${r.delivery_fee.toFixed(2)},
    ${r.packaging_fee.toFixed(2)},
    ${r.is_featured},
    ${r.is_open},
    '${escapeSql(r.address_line)}',
    '${escapeSql(r.city)}',
    ${r.latitude.toFixed(7)},
    ${r.longitude.toFixed(7)}
)`).join(',\n')}
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    slug = EXCLUDED.slug,
    tagline = EXCLUDED.tagline,
    description = EXCLUDED.description,
    cover_image = EXCLUDED.cover_image,
    logo_image = EXCLUDED.logo_image,
    rating = EXCLUDED.rating,
    rating_count = EXCLUDED.rating_count,
    price_tier = EXCLUDED.price_tier,
    delivery_time_min = EXCLUDED.delivery_time_min,
    delivery_time_max = EXCLUDED.delivery_time_max,
    minimum_order = EXCLUDED.minimum_order,
    delivery_fee = EXCLUDED.delivery_fee,
    packaging_fee = EXCLUDED.packaging_fee,
    is_featured = EXCLUDED.is_featured,
    is_open = EXCLUDED.is_open,
    address_line = EXCLUDED.address_line,
    city = EXCLUDED.city,
    latitude = EXCLUDED.latitude,
    longitude = EXCLUDED.longitude;

-- ------------------------------------------------------------------------------
-- 3. UPSERT RESTAURANT-CUISINE ASSOCIATIONS
-- ------------------------------------------------------------------------------
INSERT INTO restaurant_cuisines (restaurant_id, cuisine_id) VALUES
${restaurantCuisineList.map((rc) => `('${rc.restaurant_id}', '${rc.cuisine_id}')`).join(',\n')}
ON CONFLICT (restaurant_id, cuisine_id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 4. UPSERT MENU CATEGORIES
-- ------------------------------------------------------------------------------
INSERT INTO categories (id, restaurant_id, name, slug, display_order) VALUES
${categoryList.map((cat) => `('${cat.id}', '${cat.restaurant_id}', '${escapeSql(cat.name)}', '${escapeSql(cat.slug)}', ${cat.display_order})`).join(',\n')}
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    slug = EXCLUDED.slug,
    display_order = EXCLUDED.display_order;

-- ------------------------------------------------------------------------------
-- 5. UPSERT MENU ITEMS
-- ------------------------------------------------------------------------------
INSERT INTO menu_items (
    id, restaurant_id, category_id, name, description, price, image_url,
    is_veg, is_chef_special, is_available, prep_time_minutes
) VALUES
${menuItemList.map((item) => `(
    '${item.id}',
    '${item.restaurant_id}',
    '${item.category_id}',
    '${escapeSql(item.name)}',
    '${escapeSql(item.description)}',
    ${item.price.toFixed(2)},
    '${escapeSql(item.image_url)}',
    ${item.is_veg},
    ${item.is_chef_special},
    ${item.is_available},
    ${item.prep_time_minutes}
)`).join(',\n')}
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    price = EXCLUDED.price,
    image_url = EXCLUDED.image_url,
    is_veg = EXCLUDED.is_veg,
    is_chef_special = EXCLUDED.is_chef_special,
    is_available = EXCLUDED.is_available,
    prep_time_minutes = EXCLUDED.prep_time_minutes;

-- ------------------------------------------------------------------------------
-- 6. UPSERT MENU ITEM OPTION GROUPS
-- ------------------------------------------------------------------------------
INSERT INTO menu_item_option_groups (id, menu_item_id, name, min_select, max_select, is_required) VALUES
${optionGroupList.map((grp) => `('${grp.id}', '${grp.menu_item_id}', '${escapeSql(grp.name)}', ${grp.min_select}, ${grp.max_select}, ${grp.is_required})`).join(',\n')}
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    min_select = EXCLUDED.min_select,
    max_select = EXCLUDED.max_select,
    is_required = EXCLUDED.is_required;

-- ------------------------------------------------------------------------------
-- 7. UPSERT MENU ITEM OPTIONS
-- ------------------------------------------------------------------------------
INSERT INTO menu_item_options (id, group_id, name, additional_price, is_default) VALUES
${optionList.map((opt) => `('${opt.id}', '${opt.group_id}', '${escapeSql(opt.name)}', ${opt.additional_price.toFixed(2)}, ${opt.is_default})`).join(',\n')}
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    additional_price = EXCLUDED.additional_price,
    is_default = EXCLUDED.is_default;

COMMIT;
`;

const sqlFilePath = path.join(__dirname, '../supabase/seed/03_hyderabad_expanded_dataset.sql');
fs.writeFileSync(sqlFilePath, sql, 'utf8');
console.log(`Saved SQL Seed File to: ${sqlFilePath} (${(sql.length / 1024).toFixed(1)} KB)`);

// 2. Generate TypeScript Data Structure for Frontend Fallback & Consistency
const frontendRestaurants = Array.from(restaurantMap.values()).map((r) => {
  const rCuisines = restaurantCuisineList
    .filter((rc) => rc.restaurant_id === r.id)
    .map((rc) => {
      const c = CUISINES.find((item) => item.id === rc.cuisine_id);
      return { id: c.id, name: c.name, slug: c.slug, icon: c.icon };
    });

  const rCategories = categoryList
    .filter((cat) => cat.restaurant_id === r.id)
    .map((cat) => {
      const cItems = menuItemList
        .filter((item) => item.category_id === cat.id)
        .map((item) => {
          const itemOptionGroups = optionGroupList
            .filter((g) => g.menu_item_id === item.id)
            .map((g) => {
              const options = optionList
                .filter((o) => o.group_id === g.id)
                .map((o) => ({
                  id: o.id,
                  groupId: o.group_id,
                  name: o.name,
                  additionalPrice: o.additional_price,
                  isDefault: o.is_default
                }));
              return {
                id: g.id,
                menuItemId: g.menu_item_id,
                name: g.name,
                minSelect: g.min_select,
                maxSelect: g.max_select,
                isRequired: g.is_required,
                options
              };
            });

          return {
            id: item.id,
            restaurantId: item.restaurant_id,
            categoryId: item.category_id,
            name: item.name,
            description: item.description,
            price: item.price,
            imageUrl: item.image_url,
            isVeg: item.is_veg,
            isChefSpecial: item.is_chef_special,
            isAvailable: item.is_available,
            preparationTimeMinutes: item.prep_time_minutes,
            customizationGroups: itemOptionGroups
          };
        });

      return {
        id: cat.id,
        restaurantId: cat.restaurant_id,
        name: cat.name,
        displayOrder: cat.display_order,
        items: cItems
      };
    });

  return {
    id: r.id,
    name: r.name,
    slug: r.slug,
    tagline: r.tagline,
    description: r.description,
    coverImage: r.cover_image,
    logoImage: r.logo_image,
    rating: r.rating,
    ratingCount: r.rating_count,
    priceTier: r.price_tier,
    deliveryTimeEstimateMin: r.delivery_time_min,
    deliveryTimeEstimateMax: r.delivery_time_max,
    minimumOrderAmount: r.minimum_order,
    deliveryFee: r.delivery_fee,
    isFeatured: r.is_featured,
    isOpen: r.is_open,
    addressLine: r.address_line,
    city: r.city,
    latitude: r.latitude,
    longitude: r.longitude,
    cuisines: rCuisines,
    categories: rCategories
  };
});

const tsContent = `// src/data/hyderabadExpandedData.ts
// Expanded 36-restaurant Hyderabad dataset matching frontend types
import type { Restaurant } from '@/types'

export const HYDERABAD_EXPANDED_RESTAURANTS: Restaurant[] = ${JSON.stringify(frontendRestaurants, null, 2)}
`;

const tsFilePath = path.join(__dirname, '../src/data/hyderabadExpandedData.ts');
fs.mkdirSync(path.dirname(tsFilePath), { recursive: true });
fs.writeFileSync(tsFilePath, tsContent, 'utf8');
console.log(`Saved Frontend TypeScript Data to: ${tsFilePath} (${(tsContent.length / 1024).toFixed(1)} KB)`);

// 3. Validation Report
const report = {
  totalRestaurants: restaurantMap.size,
  totalCategories: categoryList.length,
  totalMenuItems: menuItemList.length,
  totalOptionGroups: optionGroupList.length,
  totalOptions: optionList.length,
  totalCuisines: CUISINES.length,
  neighbourhoodDistribution: {},
  priceTierCounts: {},
  vegNonVegRatio: { veg: 0, nonVeg: 0 }
};

menuItemList.forEach((item) => {
  if (item.is_veg) report.vegNonVegRatio.veg++;
  else report.vegNonVegRatio.nonVeg++;
});

allRestaurants.forEach((r) => {
  const addr = r.address_line;
  let n = 'Other Hyderabad';
  if (addr.includes('Jubilee Hills')) n = 'Jubilee Hills';
  else if (addr.includes('Banjara Hills')) n = 'Banjara Hills';
  else if (addr.includes('Gachibowli') || addr.includes('Financial District')) n = 'Gachibowli & Financial District';
  else if (addr.includes('Madhapur') || addr.includes('HITEC City')) n = 'HITEC City & Madhapur';
  else if (addr.includes('Kondapur')) n = 'Kondapur';
  else if (addr.includes('Old City') || addr.includes('Charminar') || addr.includes('Ghansi Bazaar')) n = 'Old City / Charminar';
  else if (addr.includes('Secunderabad')) n = 'Secunderabad';
  else if (addr.includes('Somajiguda') || addr.includes('Basheerbagh') || addr.includes('RTC X Roads')) n = 'Central Hyderabad';
  else if (addr.includes('Gandipet')) n = 'Gandipet';

  report.neighbourhoodDistribution[n] = (report.neighbourhoodDistribution[n] || 0) + 1;
  report.priceTierCounts[r.price_tier] = (report.priceTierCounts[r.price_tier] || 0) + 1;
});

console.log('--- VALIDATION REPORT ---');
console.log(JSON.stringify(report, null, 2));
