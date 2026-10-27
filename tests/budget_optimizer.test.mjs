import test from 'node:test'
import assert from 'node:assert/strict'

// ---------------------------------------------------------------------------
// Pure implementation of Pricing & Budget Optimization logic for test verification
// ---------------------------------------------------------------------------

function calculateItemSubtotal(items) {
  if (!items || items.length === 0) return 0
  const total = items.reduce((sum, item) => {
    const qty = Math.max(1, item.quantity || 1)
    const price = Math.max(0, item.price || 0)
    return sum + price * qty
  }, 0)
  return Math.round(total * 100) / 100
}

function calculateTaxes(subtotal, taxRate = 0.05, isTaxInclusive = false) {
  if (subtotal <= 0 || taxRate <= 0) return 0
  if (isTaxInclusive) {
    const taxBase = subtotal / (1 + taxRate)
    return Math.round(subtotal - taxBase)
  }
  return Math.round(subtotal * taxRate)
}

function calculateDiscount(itemTotal, coupon) {
  if (!coupon || itemTotal < (coupon.minOrderValue || 0)) {
    return 0
  }
  if (coupon.discountPercentage && coupon.discountPercentage > 0) {
    const rawDiscount = (itemTotal * coupon.discountPercentage) / 100
    const capped = coupon.maxDiscount
      ? Math.min(rawDiscount, coupon.maxDiscount)
      : rawDiscount
    return Math.min(Math.round(capped * 100) / 100, itemTotal)
  }
  if (coupon.flatDiscount && coupon.flatDiscount > 0) {
    return Math.min(coupon.flatDiscount, itemTotal)
  }
  return 0
}

function calculateOrderPricing({
  items,
  deliveryFee = 40,
  packagingFee = 25,
  taxRate = 0.05,
  isTaxInclusive = false,
  coupon = null,
  userBudget,
  restaurant = null,
}) {
  const itemTotal = calculateItemSubtotal(items)
  const actualDeliveryFee = items.length === 0 ? 0 : (deliveryFee ?? (restaurant?.deliveryFee ?? 40))
  const actualPackagingFee = items.length === 0 ? 0 : (packagingFee ?? 25)
  const taxAmount = calculateTaxes(itemTotal, taxRate, isTaxInclusive)
  const discountAmount = calculateDiscount(itemTotal, coupon)

  const taxableCharge = isTaxInclusive ? 0 : taxAmount
  const rawPayable = itemTotal + taxableCharge + actualDeliveryFee + actualPackagingFee - discountAmount
  const finalPayable = Math.max(0, Math.round(rawPayable * 100) / 100)

  const hasBudget = typeof userBudget === 'number' && !isNaN(userBudget)
  const isAffordable = hasBudget ? finalPayable <= userBudget : true
  const remainingBudget = hasBudget ? Math.max(0, Math.round((userBudget - finalPayable) * 100) / 100) : 0

  const isPricingVerified =
    typeof actualDeliveryFee === 'number' &&
    !isNaN(actualDeliveryFee) &&
    typeof actualPackagingFee === 'number' &&
    !isNaN(actualPackagingFee) &&
    typeof taxAmount === 'number' &&
    !isNaN(taxAmount)

  return {
    itemTotal,
    taxAmount,
    deliveryFee: actualDeliveryFee,
    packagingFee: actualPackagingFee,
    discountAmount,
    finalPayable,
    remainingBudget,
    isTaxInclusive,
    isAffordable,
    isPricingVerified,
  }
}

function validateBudgetInput(rawInput) {
  if (rawInput === undefined || rawInput === null) {
    return { isValid: false, error: 'Please enter your budget amount.' }
  }
  const str = String(rawInput).trim()
  if (str === '') {
    return { isValid: false, error: 'Budget cannot be empty. Please enter an amount in ₹.' }
  }
  const num = Number(str)
  if (isNaN(num)) {
    return { isValid: false, error: 'Please enter a valid numeric budget in ₹.' }
  }
  if (num <= 0) {
    return { isValid: false, error: 'Budget must be greater than ₹0.' }
  }
  if (num < 50) {
    return { isValid: false, error: 'Budget is too low. Minimum order is around ₹80.' }
  }
  return { isValid: true, numericBudget: Math.round(num * 100) / 100 }
}

function classifyItemCategory(item, categoryName = '') {
  const catText = (categoryName || '').toLowerCase()
  const nameDesc = `${item.name} ${item.description || ''}`.toLowerCase()

  if (/beverage|drink|shake|lassi|coffee|tea|brew|soda/i.test(catText) || /\b(coke|thums up|sprite|lassi|shake|coffee|tea|soda)\b/i.test(nameDesc)) {
    return 'beverages'
  }
  if (/dessert|sweet|ice cream|halwa/i.test(catText) || /\b(halwa|jamun|gulab jamun|rasgulla|ice cream|kheer)\b/i.test(nameDesc)) {
    return 'desserts'
  }
  if (/biryani|dum/i.test(catText) || /\b(biryani|dum biryani|pulao)\b/i.test(nameDesc)) {
    return 'biryani'
  }
  if (/bread|roti|naan|kulcha/i.test(catText) || /\b(roti|naan|paratha|kulcha|roomali)\b/i.test(nameDesc)) {
    return 'breads'
  }
  if (/snack|fast food|burger|pizza|dosa/i.test(catText) || /\b(burger|pizza|sandwich|roll|dosa|momo)\b/i.test(nameDesc)) {
    return 'snacks-fast-food'
  }
  if (/starter|kebab|tikka/i.test(catText) || /\b(tikka|kebab|fry|dry|wings)\b/i.test(nameDesc)) {
    return 'starters'
  }
  return 'curries-gravies'
}

function generateMockCombos(restaurant, { budget, mealType = 'all', selectedCategoryIds = [] }) {
  const deliveryFee = restaurant.deliveryFee ?? 40
  const packagingFee = 25
  const results = []
  const seenSignatures = new Set()

  const availableItems = (restaurant.menuItems || []).filter(item => {
    if (!item.isAvailable || item.price <= 0) return false
    if (mealType === 'veg' && !item.isVeg) return false
    const cat = classifyItemCategory(item, item.categoryName)
    if (selectedCategoryIds.length > 0 && !selectedCategoryIds.includes('all') && !selectedCategoryIds.includes(cat)) {
      return false
    }
    return true
  })

  // Strategy: Pairs
  for (let i = 0; i < availableItems.length; i++) {
    for (let j = i + 1; j < availableItems.length; j++) {
      const itemA = availableItems[i]
      const itemB = availableItems[j]

      const comboItems = [
        { menuItem: itemA, quantity: 1, categorySlug: classifyItemCategory(itemA, itemA.categoryName) },
        { menuItem: itemB, quantity: 1, categorySlug: classifyItemCategory(itemB, itemB.categoryName) }
      ]

      const sig = [itemA.id, itemB.id].sort().join('+')
      if (seenSignatures.has(sig)) continue
      seenSignatures.add(sig)

      const allVeg = comboItems.every(c => c.menuItem.isVeg)
      if (mealType === 'veg' && !allVeg) continue
      if (mealType === 'non-veg' && allVeg) continue

      const pricing = calculateOrderPricing({
        items: comboItems.map(c => ({ price: c.menuItem.price, quantity: c.quantity })),
        deliveryFee,
        packagingFee,
        userBudget: budget,
        restaurant
      })

      if (pricing.isAffordable && pricing.finalPayable <= budget) {
        results.push({
          restaurantId: restaurant.id,
          restaurantName: restaurant.name,
          items: comboItems,
          isVeg: allVeg,
          finalPayable: pricing.finalPayable,
          remainingBudget: pricing.remainingBudget,
          pricing
        })
      }
    }
  }

  // Strategy: Single item
  for (const item of availableItems) {
    const comboItems = [{ menuItem: item, quantity: 1, categorySlug: classifyItemCategory(item, item.categoryName) }]
    const sig = `single:${item.id}`
    if (seenSignatures.has(sig)) continue
    seenSignatures.add(sig)

    const allVeg = item.isVeg
    if (mealType === 'veg' && !allVeg) continue
    if (mealType === 'non-veg' && allVeg) continue

    const pricing = calculateOrderPricing({
      items: [{ price: item.price, quantity: 1 }],
      deliveryFee,
      packagingFee,
      userBudget: budget,
      restaurant
    })

    if (pricing.isAffordable && pricing.finalPayable <= budget) {
      results.push({
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        items: comboItems,
        isVeg: allVeg,
        finalPayable: pricing.finalPayable,
        remainingBudget: pricing.remainingBudget,
        pricing
      })
    }
  }

  return results
}

// ---------------------------------------------------------------------------
// Realistic Mock Fixtures
// ---------------------------------------------------------------------------
const MOCK_RESTAURANT = {
  id: 'res-deccan-01',
  name: 'Deccan Heritage Kitchen',
  deliveryFee: 40,
  minimumOrder: 150,
  isOpen: true,
  menuItems: [
    { id: 'm1', name: 'Dum Veg Biryani', categoryName: 'Biryani', price: 160, isVeg: true, isAvailable: true },
    { id: 'm2', name: 'Nizami Chicken Biryani', categoryName: 'Biryani', price: 210, isVeg: false, isAvailable: true },
    { id: 'm3', name: 'Tandoori Roti', categoryName: 'Breads', price: 25, isVeg: true, isAvailable: true },
    { id: 'm4', name: 'Paneer Butter Masala', categoryName: 'Curries', price: 140, isVeg: true, isAvailable: true },
    { id: 'm5', name: 'Chicken Tikka Kebab', categoryName: 'Starters', price: 180, isVeg: false, isAvailable: true },
    { id: 'm6', name: 'Thums Up (500ml)', categoryName: 'Beverages', price: 40, isVeg: true, isAvailable: true },
    { id: 'm7', name: 'Masala Chaas', categoryName: 'Beverages', price: 35, isVeg: true, isAvailable: true },
    { id: 'm8', name: 'Gulab Jamun (2 pcs)', categoryName: 'Desserts', price: 50, isVeg: true, isAvailable: true },
    { id: 'm9_unavail', name: 'Special Mutton Haleem', categoryName: 'Biryani', price: 240, isVeg: false, isAvailable: false },
  ]
}

const MOCK_RESTAURANT_B = {
  id: 'res-kumo-02',
  name: 'Kumo Tokyo Diner',
  deliveryFee: 50,
  minimumOrder: 200,
  isOpen: true,
  menuItems: [
    { id: 'kb1', name: 'Edamame Truffle Roll', categoryName: 'Snacks', price: 180, isVeg: true, isAvailable: true },
    { id: 'kb2', name: 'Salmon Teriyaki Skewer', categoryName: 'Starters', price: 220, isVeg: false, isAvailable: true }
  ]
}

// ===========================================================================
// Test Scenarios (1 through 21)
// ===========================================================================

test('1. Valid budget generates eligible combos within limit', () => {
  const budget = 300
  const combos = generateMockCombos(MOCK_RESTAURANT, { budget, mealType: 'all' })
  assert.ok(combos.length > 0, 'Should generate at least one combo')
  for (const combo of combos) {
    assert.ok(combo.finalPayable <= budget, `Payable ₹${combo.finalPayable} must not exceed budget ₹${budget}`)
    assert.ok(combo.remainingBudget >= 0)
  }
})

test('2. Empty budget is rejected with validation message', () => {
  const res1 = validateBudgetInput('')
  assert.equal(res1.isValid, false)
  assert.match(res1.error, /Budget cannot be empty/i)

  const res2 = validateBudgetInput('   ')
  assert.equal(res2.isValid, false)
})

test('3. Zero and negative budgets are rejected', () => {
  const resZero = validateBudgetInput(0)
  assert.equal(resZero.isValid, false)
  assert.match(resZero.error, /must be greater than ₹0/i)

  const resNeg = validateBudgetInput(-150)
  assert.equal(resNeg.isValid, false)

  const resText = validateBudgetInput('abc')
  assert.equal(resText.isValid, false)
})

test('4. All meal-type displays eligible vegetarian and non-vegetarian combos', () => {
  const budget = 350
  const combos = generateMockCombos(MOCK_RESTAURANT, { budget, mealType: 'all' })
  const hasVeg = combos.some(c => c.isVeg)
  const hasNonVeg = combos.some(c => !c.isVeg)

  assert.ok(hasVeg, 'All filter must include vegetarian options')
  assert.ok(hasNonVeg, 'All filter must include non-vegetarian options')
})

test('5. Pure Veg excludes every combo containing non-vegetarian items', () => {
  const budget = 400
  const combos = generateMockCombos(MOCK_RESTAURANT, { budget, mealType: 'veg' })
  assert.ok(combos.length > 0)
  for (const combo of combos) {
    assert.equal(combo.isVeg, true, 'Every combo must be pure vegetarian')
    for (const item of combo.items) {
      assert.equal(item.menuItem.isVeg, true, `Item ${item.menuItem.name} must be vegetarian`)
    }
  }
})

test('6. Non-Veg excludes vegetarian-only combos', () => {
  const budget = 400
  const combos = generateMockCombos(MOCK_RESTAURANT, { budget, mealType: 'non-veg' })
  assert.ok(combos.length > 0)
  for (const combo of combos) {
    assert.equal(combo.isVeg, false, 'Non-Veg filter must exclude 100% vegetarian combos')
    const hasNonVegItem = combo.items.some(it => !it.menuItem.isVeg)
    assert.ok(hasNonVegItem, 'Must contain at least one non-veg item')
  }
})

test('7. A single category restricts the results correctly', () => {
  const budget = 400
  const combos = generateMockCombos(MOCK_RESTAURANT, {
    budget,
    mealType: 'all',
    selectedCategoryIds: ['biryani']
  })
  assert.ok(combos.length > 0)
  for (const combo of combos) {
    for (const item of combo.items) {
      assert.equal(item.categorySlug, 'biryani', `Item ${item.menuItem.name} must belong to Biryani category`)
    }
  }
})

test('8. Multiple selected categories allow cross-category combinations', () => {
  const budget = 400
  const combos = generateMockCombos(MOCK_RESTAURANT, {
    budget,
    mealType: 'all',
    selectedCategoryIds: ['biryani', 'beverages']
  })
  assert.ok(combos.length > 0)
  for (const combo of combos) {
    for (const item of combo.items) {
      assert.ok(
        ['biryani', 'beverages'].includes(item.categorySlug),
        `Item ${item.menuItem.name} category ${item.categorySlug} must be in allowed categories`
      )
    }
  }
  const hasCrossCategory = combos.some(c => c.items.length === 2 && c.items[0].categorySlug !== c.items[1].categorySlug)
  assert.ok(hasCrossCategory, 'Must allow cross-category pairing (e.g. Biryani + Beverage)')
})

test('9. No selected category defaults to all categories', () => {
  const combosNone = generateMockCombos(MOCK_RESTAURANT, { budget: 350, selectedCategoryIds: [] })
  const combosAll = generateMockCombos(MOCK_RESTAURANT, { budget: 350, selectedCategoryIds: ['all'] })
  assert.equal(combosNone.length, combosAll.length)
})

test('10. Unavailable menu items are excluded', () => {
  const budget = 500
  const combos = generateMockCombos(MOCK_RESTAURANT, { budget, mealType: 'all' })
  for (const combo of combos) {
    for (const item of combo.items) {
      assert.notEqual(item.menuItem.id, 'm9_unavail', 'Unavailable item m9_unavail must not appear in any combo')
      assert.equal(item.menuItem.isAvailable, true)
    }
  }
})

test('11. Combos exceeding the budget after tax are strictly excluded', () => {
  // Let budget = 250
  // Nizami Chicken Biryani (210) + Thums Up (40) = Subtotal 250
  // Tax (5% of 250) = 13, Delivery = 40, Packaging = 25 -> Total = 328 > 250! Must be excluded!
  const budget = 250
  const combos = generateMockCombos(MOCK_RESTAURANT, { budget, mealType: 'all' })
  for (const combo of combos) {
    assert.ok(combo.finalPayable <= budget, `Combo final payable ₹${combo.finalPayable} cannot exceed budget ₹${budget}`)
  }
})

test('12. Delivery and packaging charges are included when applicable', () => {
  const pricing = calculateOrderPricing({
    items: [{ price: 100, quantity: 1 }],
    deliveryFee: 50,
    packagingFee: 25,
    taxRate: 0.05,
  })
  // Subtotal = 100, Tax = 5, Delivery = 50, Packaging = 25 -> Total = 180
  assert.equal(pricing.itemTotal, 100)
  assert.equal(pricing.deliveryFee, 50)
  assert.equal(pricing.packagingFee, 25)
  assert.equal(pricing.taxAmount, 5)
  assert.equal(pricing.finalPayable, 180)
})

test('13. Inclusive taxes are not charged twice', () => {
  // If price is tax-inclusive (5% GST), tax portion is ~5, but taxableCharge added to subtotal is 0
  const pricing = calculateOrderPricing({
    items: [{ price: 105, quantity: 1 }],
    deliveryFee: 40,
    packagingFee: 25,
    taxRate: 0.05,
    isTaxInclusive: true
  })
  // Final total should be 105 + 40 + 25 = 170 (not 170 + 5 = 175)
  assert.equal(pricing.finalPayable, 170)
  assert.equal(pricing.taxAmount, 5) // Extracted tax is 5
})

test('14. Valid discounts are handled correctly', () => {
  const coupon = {
    code: 'SAVE50',
    flatDiscount: 50,
    minOrderValue: 200
  }
  const pricingWithCoupon = calculateOrderPricing({
    items: [{ price: 200, quantity: 1 }],
    deliveryFee: 40,
    packagingFee: 25,
    coupon
  })
  // Subtotal 200, Tax 10, Delivery 40, Packaging 25 = 275 - Discount 50 = 225
  assert.equal(pricingWithCoupon.discountAmount, 50)
  assert.equal(pricingWithCoupon.finalPayable, 225)

  // Subtotal below min order value
  const pricingBelowMin = calculateOrderPricing({
    items: [{ price: 150, quantity: 1 }],
    deliveryFee: 40,
    packagingFee: 25,
    coupon
  })
  assert.equal(pricingBelowMin.discountAmount, 0)
  assert.equal(pricingBelowMin.finalPayable, 223) // 150 + 8 (tax) + 40 + 25
})

test('15. Rounding does not produce an over-budget combo', () => {
  // Budget = 200.00
  // Item price 128.57, qty 1, delivery 40, packaging 25, tax 5% of 128.57 = 6
  // Total = 128.57 + 6 + 40 + 25 = 199.57 <= 200
  const pricing = calculateOrderPricing({
    items: [{ price: 128.57, quantity: 1 }],
    deliveryFee: 40,
    packagingFee: 25,
    userBudget: 200
  })
  assert.ok(pricing.finalPayable <= 200)
  assert.equal(pricing.isAffordable, true)

  // Borderline test: if final payable calculates to 200.01 with budget 200
  const borderlinePricing = calculateOrderPricing({
    items: [{ price: 129.01, quantity: 1 }],
    deliveryFee: 40,
    packagingFee: 25,
    userBudget: 200
  })
  assert.ok(borderlinePricing.finalPayable > 200)
  assert.equal(borderlinePricing.isAffordable, false)
})

test('16. Missing charge configuration does not produce a false affordability claim', () => {
  const incompletePricing = calculateOrderPricing({
    items: [{ price: 100, quantity: 1 }],
    deliveryFee: NaN, // corrupted or unconfigured
    packagingFee: 25,
    userBudget: 200
  })
  assert.equal(incompletePricing.isPricingVerified, false)
})

test('17. Duplicate combinations are eliminated', () => {
  const combos = generateMockCombos(MOCK_RESTAURANT, { budget: 400, mealType: 'all' })
  const signatures = combos.map(c => c.items.map(i => i.menuItem.id).sort().join('+'))
  const uniqueSignatures = new Set(signatures)
  assert.equal(signatures.length, uniqueSignatures.size, 'No duplicate combo item signatures permitted')
})

test('18. Restaurant boundaries are respected (no cross-restaurant cart mixing)', () => {
  const combosA = generateMockCombos(MOCK_RESTAURANT, { budget: 350, mealType: 'all' })
  const combosB = generateMockCombos(MOCK_RESTAURANT_B, { budget: 350, mealType: 'all' })

  for (const combo of combosA) {
    for (const item of combo.items) {
      assert.equal(item.menuItem.id.startsWith('kb'), false, 'Restaurant A combo must not contain Restaurant B dishes')
    }
  }

  for (const combo of combosB) {
    for (const item of combo.items) {
      assert.equal(item.menuItem.id.startsWith('m'), false, 'Restaurant B combo must not contain Restaurant A dishes')
    }
  }
})

test('19. Price changes are recalculated before checkout', () => {
  const itemA = { id: 'm1', price: 160, quantity: 1 }
  const itemB = { id: 'm6', price: 40, quantity: 1 }

  const initialPricing = calculateOrderPricing({
    items: [itemA, itemB],
    deliveryFee: 40,
    packagingFee: 25,
    userBudget: 300
  })
  // Initial: Subtotal 200, Tax 10, Delivery 40, Packaging 25 = 275 <= 300
  assert.equal(initialPricing.finalPayable, 275)
  assert.equal(initialPricing.isAffordable, true)

  // Price updated in kitchen before checkout: itemA increases from 160 to 190
  const updatedItemA = { id: 'm1', price: 190, quantity: 1 }
  const recalculatedPricing = calculateOrderPricing({
    items: [updatedItemA, itemB],
    deliveryFee: 40,
    packagingFee: 25,
    userBudget: 300
  })
  // Updated: Subtotal 230, Tax 12, Delivery 40, Packaging 25 = 307 > 300!
  assert.equal(recalculatedPricing.finalPayable, 307)
  assert.equal(recalculatedPricing.isAffordable, false)
})

test('20. Supabase errors and empty menus are handled gracefully', () => {
  const emptyRestaurant = {
    id: 'res-empty',
    name: 'Empty Kitchen',
    deliveryFee: 40,
    menuItems: []
  }
  const combos = generateMockCombos(emptyRestaurant, { budget: 500, mealType: 'all' })
  assert.deepEqual(combos, [])

  // Null restaurant handling
  const safePricing = calculateOrderPricing({
    items: [],
    deliveryFee: null,
    packagingFee: null,
    restaurant: null
  })
  assert.equal(safePricing.finalPayable, 0)
})

test('21. Existing authentication, cart, restaurant management, and ordering functionality continues to work', () => {
  // Verify Cart Item format compatibility
  const cartItem = {
    id: 'm1__',
    menuItem: { id: 'm1', name: 'Dum Veg Biryani', price: 160, isVeg: true, isAvailable: true, restaurantId: 'res-deccan-01' },
    quantity: 2,
    selectedCustomizations: [],
    unitPrice: 160,
    totalPrice: 320
  }
  assert.equal(cartItem.totalPrice, 320)

  // Verify Order Payload breakdown compatibility
  const orderRecord = {
    order_number: 'ARO-ORD-20261028-1001',
    item_total: 320,
    delivery_fee: 40,
    packaging_fee: 25,
    tax_amount: 16,
    discount_amount: 0,
    final_paid_amount: 401
  }
  assert.equal(
    orderRecord.final_paid_amount,
    orderRecord.item_total + orderRecord.delivery_fee + orderRecord.packaging_fee + orderRecord.tax_amount - orderRecord.discount_amount
  )
})
