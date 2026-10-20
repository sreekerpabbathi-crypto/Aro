// scratch/validate_dataset_integrity.cjs
const fs = require('fs');
const path = require('path');

console.log('Running comprehensive integrity verification on generated dataset...');

const sqlPath = path.join(__dirname, '../supabase/seed/03_hyderabad_expanded_dataset.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

// Basic parse checks on SQL file
const lines = sql.split('\n');
console.log(`SQL File total lines: ${lines.length}`);

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function assertValidUUID(id, entityName) {
  if (!id || typeof id !== 'string' || !UUID_REGEX.test(id)) {
    throw new Error(`Invalid UUID syntax for ${entityName}: "${id}". Postgres UUID must be 32 hexadecimal characters (0-9, a-f) with hyphens.`);
  }
}

// Verify that it starts with BEGIN and ends with COMMIT
if (!sql.includes('BEGIN;') || !sql.includes('COMMIT;')) {
  throw new Error('Transaction boundary missing (BEGIN / COMMIT)');
}

// Verify ON CONFLICT clauses for every INSERT block
const insertCount = (sql.match(/INSERT INTO /g) || []).length;
const onConflictCount = (sql.match(/ON CONFLICT/g) || []).length;
console.log(`INSERT statements: ${insertCount}, ON CONFLICT clauses: ${onConflictCount}`);
if (insertCount !== onConflictCount) {
  throw new Error(`Mismatched INSERT (${insertCount}) and ON CONFLICT (${onConflictCount}) statements`);
}

// Check every single 36-character UUID token in the SQL file
const sqlUuidTokens = sql.match(/'[0-9a-zA-Z-]{36}'/g) || [];
console.log(`Extracted ${sqlUuidTokens.length} UUID tokens from SQL file. Validating hexadecimal characters...`);
for (const token of sqlUuidTokens) {
  const clean = token.replace(/'/g, '');
  if (!UUID_REGEX.test(clean)) {
    throw new Error(`INVALID UUID IN SQL FILE: ${token}. Contains non-hexadecimal characters!`);
  }
}
console.log(`✅ All ${sqlUuidTokens.length} UUID tokens in SQL file are strictly valid PostgreSQL UUIDs.`);

// Load TypeScript exported dataset to run deep in-memory relational integrity checks
const { HYDERABAD_EXPANDED_RESTAURANTS } = require('../src/data/hyderabadExpandedData.ts');

console.log(`Checking ${HYDERABAD_EXPANDED_RESTAURANTS.length} restaurants from frontend data...`);

const restaurantIds = new Set();
const restaurantSlugs = new Set();
const categoryIds = new Set();
const menuItemIds = new Set();
const optionGroupIds = new Set();
const optionIds = new Set();

let totalCategories = 0;
let totalItems = 0;
let totalOptionGroups = 0;
let totalOptions = 0;

for (const res of HYDERABAD_EXPANDED_RESTAURANTS) {
  // Check Restaurant constraints
  assertValidUUID(res.id, `Restaurant ${res.name}`);
  if (restaurantIds.has(res.id)) throw new Error(`Duplicate restaurant ID: ${res.id}`);
  restaurantIds.add(res.id);

  if (restaurantSlugs.has(res.slug)) throw new Error(`Duplicate restaurant slug: ${res.slug}`);
  restaurantSlugs.add(res.slug);

  if (res.rating < 1.0 || res.rating > 5.0) throw new Error(`Invalid rating for ${res.name}: ${res.rating}`);
  if (res.ratingCount < 0) throw new Error(`Invalid ratingCount for ${res.name}: ${res.ratingCount}`);
  if (!['₹', '₹₹', '₹₹₹', '₹₹₹₹'].includes(res.priceTier)) throw new Error(`Invalid priceTier for ${res.name}: ${res.priceTier}`);
  if (res.deliveryTimeEstimateMin <= 0 || res.deliveryTimeEstimateMax < res.deliveryTimeEstimateMin) {
    throw new Error(`Invalid delivery time range for ${res.name}`);
  }
  if (res.minimumOrderAmount < 0 || res.deliveryFee < 0) {
    throw new Error(`Invalid fees for ${res.name}`);
  }

  // Geographic check (Hyderabad bounds: lat 17.30 - 17.55, lon 78.25 - 78.60)
  if (res.latitude < 17.30 || res.latitude > 17.55 || res.longitude < 78.25 || res.longitude > 78.60) {
    throw new Error(`Coordinates outside Hyderabad bounding box for ${res.name}: ${res.latitude}, ${res.longitude}`);
  }

  // Cuisines check
  if (!res.cuisines || res.cuisines.length === 0) {
    throw new Error(`Restaurant ${res.name} has no cuisines assigned`);
  }

  // Categories check
  const catSlugsForRes = new Set();
  for (const cat of res.categories || []) {
    totalCategories++;
    assertValidUUID(cat.id, `Category ${cat.name}`);
    if (categoryIds.has(cat.id)) throw new Error(`Duplicate category ID: ${cat.id}`);
    categoryIds.add(cat.id);

    if (cat.restaurantId !== res.id) {
      throw new Error(`Category ${cat.name} restaurantId mismatch: ${cat.restaurantId} vs ${res.id}`);
    }

    if (catSlugsForRes.has(cat.name)) {
      throw new Error(`Duplicate category in restaurant ${res.name}: ${cat.name}`);
    }
    catSlugsForRes.add(cat.name);

    // Items check
    for (const item of cat.items || []) {
      totalItems++;
      assertValidUUID(item.id, `MenuItem ${item.name}`);
      if (menuItemIds.has(item.id)) throw new Error(`Duplicate menu item ID: ${item.id}`);
      menuItemIds.add(item.id);

      if (item.restaurantId !== res.id) {
        throw new Error(`Menu item ${item.name} restaurantId mismatch`);
      }
      if (item.categoryId !== cat.id) {
        throw new Error(`Menu item ${item.name} categoryId mismatch`);
      }
      if (item.price < 0) throw new Error(`Negative price for ${item.name}`);
      if (item.preparationTimeMinutes <= 0) throw new Error(`Invalid prep time for ${item.name}`);

      // Options check
      for (const grp of item.customizationGroups || []) {
        totalOptionGroups++;
        assertValidUUID(grp.id, `OptionGroup ${grp.name}`);
        if (optionGroupIds.has(grp.id)) throw new Error(`Duplicate option group ID: ${grp.id}`);
        optionGroupIds.add(grp.id);

        if (grp.menuItemId !== item.id) {
          throw new Error(`Option group ${grp.name} menuItemId mismatch`);
        }
        if (grp.minSelect < 0 || grp.maxSelect < grp.minSelect) {
          throw new Error(`Invalid select constraints for group ${grp.name}`);
        }

        for (const opt of grp.options || []) {
          totalOptions++;
          assertValidUUID(opt.id, `OptionChoice ${opt.name}`);
          if (optionIds.has(opt.id)) throw new Error(`Duplicate option ID: ${opt.id}`);
          optionIds.add(opt.id);

          if (opt.groupId !== grp.id) throw new Error(`Option ${opt.name} groupId mismatch`);
          if (opt.additionalPrice < 0) throw new Error(`Negative additionalPrice for option ${opt.name}`);
        }
      }
    }
  }
}

console.log('✅ ALL INTEGRITY ASSERTIONS PASSED SUCCESSFULLY!');
console.log({
  verifiedRestaurants: restaurantIds.size,
  verifiedCategories: totalCategories,
  verifiedMenuItems: totalItems,
  verifiedOptionGroups: totalOptionGroups,
  verifiedOptionValues: totalOptions,
  foreignKeyViolations: 0,
  duplicateKeys: 0
});
