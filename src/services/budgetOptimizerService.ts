import type { Restaurant, MenuItem, Coupon } from '@/types'
import { calculateOrderPricing, type PriceBreakdown } from './pricingService'
import { fetchRestaurants, fetchRestaurantByIdOrSlug, INITIAL_RESTAURANTS } from './catalogService'

export type MealTypeFilter = 'all' | 'veg' | 'non-veg'

export interface BudgetOptimizerCategory {
  id: string
  name: string
  description: string
  iconName: string
}

export const BUDGET_CATEGORIES: BudgetOptimizerCategory[] = [
  { id: 'biryani', name: 'Biryani', description: 'Hyderabadi Dum & Handi Biryanis', iconName: 'Sparkles' },
  { id: 'meals-thalis', name: 'Meals & Thalis', description: 'Complete meals, thalis & bowls', iconName: 'Utensils' },
  { id: 'rice-noodles', name: 'Rice & Noodles', description: 'Fried rice, noodles & pasta', iconName: 'Flame' },
  { id: 'starters', name: 'Starters', description: 'Kebabs, tikkas & appetizers', iconName: 'Flame' },
  { id: 'snacks-fast-food', name: 'Snacks & Fast Food', description: 'Burgers, rolls, dosas & snacks', iconName: 'Pizza' },
  { id: 'curries-gravies', name: 'Curries & Gravies', description: 'Rich gravies, dals & curries', iconName: 'Coffee' },
  { id: 'breads', name: 'Breads', description: 'Naan, rotis, parathas & sheermal', iconName: 'Cookie' },
  { id: 'desserts', name: 'Desserts', description: 'Traditional sweets, pastries & ice cream', iconName: 'Cake' },
  { id: 'beverages', name: 'Beverages', description: 'Cold drinks, craft shakes & brews', iconName: 'CupSoda' },
  { id: 'combos-specials', name: 'Combos & Specials', description: 'Chef special pairings & sets', iconName: 'Award' },
]

export interface ComboItem {
  menuItem: MenuItem
  quantity: number
  categorySlug: string
}

export interface GeneratedCombo {
  id: string
  title: string
  restaurant: Restaurant
  items: ComboItem[]
  isVeg: boolean
  hasNonVeg: boolean
  categories: string[]
  itemTotal: number
  deliveryFee: number
  packagingFee: number
  taxAmount: number
  discountAmount: number
  finalPayable: number
  remainingBudget: number
  userBudget: number
  reason: string
  score: number
  meetsMinimumOrder: boolean
  pricing: PriceBreakdown
}

export interface BudgetOptimizerParams {
  budget: number
  mealType?: MealTypeFilter
  categoryIds?: string[] // empty or ['all'] means all
  restaurantId?: string | 'all'
  coupon?: Coupon | null
  limit?: number
}

export interface OptimizerValidationResult {
  isValid: boolean
  error?: string
  numericBudget?: number
}

/**
 * Validate budget input strictly:
 * - Must be positive numeric amount
 * - Reject empty, zero, negative, NaN
 */
export function validateBudgetInput(rawInput: string | number | undefined | null): OptimizerValidationResult {
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
    return {
      isValid: false,
      error: 'Budget is too low. Minimum order and standard delivery charges in Hyderabad start around ₹80.',
    }
  }

  if (num > 50000) {
    return { isValid: false, error: 'Budget exceeds maximum supported order limit (₹50,000).' }
  }

  return { isValid: true, numericBudget: Math.round(num * 100) / 100 }
}

/**
 * Classify a menu item into one of the canonical 10 categories
 * using category metadata or item title/description
 */
export function classifyItemCategory(item: MenuItem, categoryName?: string): string {
  const catText = (categoryName || '').toLowerCase()
  const nameDesc = `${item.name} ${item.description || ''}`.toLowerCase()

  // 1. Beverages
  if (
    /beverage|drink|shake|lassi|coffee|tea|chai|brew|soda|cooler|juice|mojito|smoothie/i.test(catText) ||
    /\b(coke|thums up|pepsi|sprite|fanta|lassi|shake|coffee|cold brew|tea|chai|soda|lemonade|mojito|mocktail|buttermilk|water)\b/i.test(nameDesc)
  ) {
    return 'beverages'
  }

  // 2. Desserts
  if (
    /dessert|sweet|ice cream|pastry|cake|halwa|mithai/i.test(catText) ||
    /\b(halwa|jamun|gulab jamun|rasgulla|kheer|tiramisu|ice cream|brownie|tart|cake|payasam|qurbani ka meetha|double ka meetha)\b/i.test(nameDesc)
  ) {
    return 'desserts'
  }

  // 3. Biryani
  if (
    /biryani|dum/i.test(catText) ||
    /\b(biryani|dum biryani|pulao|bagara rice|pulav)\b/i.test(nameDesc)
  ) {
    return 'biryani'
  }

  // 4. Breads
  if (
    /bread|roti|naan|kulcha|paratha/i.test(catText) ||
    /\b(roti|naan|paratha|kulcha|sheermal|roomali|appam|chapati|phulka|puri|bhatura)\b/i.test(nameDesc)
  ) {
    return 'breads'
  }

  // 5. Meals & Thalis
  if (
    /thali|meal|platter|tasting|combo/i.test(catText) ||
    /\b(thali|platter|executive meal|combo meal|lunch box|mini meal)\b/i.test(nameDesc)
  ) {
    return 'meals-thalis'
  }

  // 6. Rice & Noodles
  if (
    /rice|noodle|pasta|wok/i.test(catText) ||
    /\b(fried rice|noodles|hakka|schezwan rice|pasta|risotto|ramen|spaghetti)\b/i.test(nameDesc)
  ) {
    return 'rice-noodles'
  }

  // 7. Snacks & Fast Food
  if (
    /snack|fast food|burger|pizza|sandwich|momo|dim sum|tiffin|dosa|street/i.test(catText) ||
    /\b(burger|pizza|sandwich|roll|wrap|dosa|idli|vada|momo|dumpling|samosa|chaat|fries|taco)\b/i.test(nameDesc)
  ) {
    return 'snacks-fast-food'
  }

  // 8. Starters
  if (
    /starter|appetizer|kebab|tikka|skewers|fry|dry/i.test(catText) ||
    /\b(tikka|kebab|fry|dry|wings|skewer|vepudu|sukka|crispy|chilli|manchurian|pepper fry)\b/i.test(nameDesc)
  ) {
    return 'starters'
  }

  // 9. Curries & Gravies
  if (
    /curry|gravy|dal|main/i.test(catText) ||
    /\b(curry|gravy|dal|korma|masala|kadai|makhani|paneer|kofta|marag|nihari|salan|sambar)\b/i.test(nameDesc)
  ) {
    return 'curries-gravies'
  }

  // 10. Combos & Specials
  if (/special|combo/i.test(catText) || /\b(combo|special|feast|treat)\b/i.test(nameDesc)) {
    return 'combos-specials'
  }

  return 'curries-gravies'
}

/**
 * Check if a menu item satisfies the selected categories
 */
function isItemCategoryAllowed(categorySlug: string, selectedCategoryIds?: string[]): boolean {
  if (!selectedCategoryIds || selectedCategoryIds.length === 0 || selectedCategoryIds.includes('all')) {
    return true
  }
  return selectedCategoryIds.includes(categorySlug)
}

/**
 * Deduplicate combos based on sorted item ID + quantity signature
 */
function getComboSignature(restaurantId: string, items: ComboItem[]): string {
  const sorted = [...items]
    .sort((a, b) => a.menuItem.id.localeCompare(b.menuItem.id))
    .map((it) => `${it.menuItem.id}x${it.quantity}`)
    .join('|')
  return `${restaurantId}:${sorted}`
}

/**
 * Generate a descriptive title for a combo
 */
function generateComboTitle(items: ComboItem[]): string {
  if (items.length === 1) {
    return `${items[0].menuItem.name} Meal`
  }
  if (items.length === 2) {
    return `${items[0].menuItem.name} + ${items[1].menuItem.name}`
  }
  return `${items[0].menuItem.name} + ${items[1].menuItem.name} & More`
}

/**
 * Generate an informative recommendation reason for the combo
 */
function generateRecommendationReason(
  items: ComboItem[],
  payable: number,
  budget: number,
  isVeg: boolean
): string {
  const savings = Math.max(0, budget - payable)
  const isBudgetHero = savings >= 20 && savings <= 80
  const isDuo = items.length === 2
  const isTrio = items.length >= 3

  if (isTrio) {
    return `3-Course complete feast (${isVeg ? 'Pure Veg' : 'Non-Veg'}) maximizing variety with ₹${savings} remaining.`
  }
  if (isDuo) {
    const categories = items.map((i) => i.categorySlug)
    if (categories.includes('biryani') && categories.includes('beverages')) {
      return `Classic Biryani & chilled refreshment pairing with ₹${savings} under budget.`
    }
    if (categories.includes('curries-gravies') && categories.includes('breads')) {
      return `Hearty curry and freshly baked bread pairing with ₹${savings} saved.`
    }
    if (categories.includes('snacks-fast-food') && categories.includes('beverages')) {
      return `Popular fast food and drink combo, perfectly balanced for your budget.`
    }
    return `Balanced 2-dish pairing offering great food value at ₹${payable}.`
  }
  if (isBudgetHero) {
    return `Hearty single specialty leaving a comfortable cushion of ₹${savings}.`
  }
  return `Satisfying meal tailored within your ₹${budget} budget limit.`
}

/**
 * Rank and score a candidate combo
 */
function scoreCombo(
  items: ComboItem[],
  pricing: PriceBreakdown,
  budget: number,
  restaurant: Restaurant
): number {
  // 1. Food value ratio (food subtotal / budget)
  const valueRatio = pricing.itemTotal / budget
  const valueScore = Math.min(valueRatio, 1) * 45

  // 2. Variety score (multiple items and courses)
  const distinctCategories = new Set(items.map((i) => i.categorySlug)).size
  const varietyScore = distinctCategories * 12 + items.length * 8

  // 3. Restaurant reputation
  const ratingScore = (restaurant.rating || 4.0) * 6

  // 4. Affordable safety buffer (neither blowing entire budget to the last paisa nor leaving 90% unspent)
  const budgetUtilization = pricing.finalPayable / budget
  const utilizationScore = budgetUtilization >= 0.6 && budgetUtilization <= 0.98 ? 15 : 8

  return valueScore + varietyScore + ratingScore + utilizationScore
}

/**
 * Core Combo Generation Engine:
 * Generates verified, tax- and fee-inclusive combos that guarantee finalPayable <= budget
 */
export function generateCombosForRestaurant(
  restaurant: Restaurant,
  params: BudgetOptimizerParams
): GeneratedCombo[] {
  const { budget, mealType = 'all', categoryIds, coupon } = params
  const deliveryFee = restaurant.deliveryFee ?? 40
  const packagingFee = 25

  // If fixed fees already exceed budget, restaurant cannot deliver within budget
  if (deliveryFee + packagingFee >= budget) {
    return []
  }

  // 1. Extract and classify all available menu items
  interface ClassifiedItem {
    item: MenuItem
    categorySlug: string
  }

  const classifiedItems: ClassifiedItem[] = []

  ;(restaurant.categories || []).forEach((cat) => {
    ;(cat.items || []).forEach((item) => {
      // Must be currently available and active
      if (!item.isAvailable || item.price <= 0) return

      // Meal type filtering at item level:
      // If mealType is 'veg', exclude all non-veg items completely
      if (mealType === 'veg' && !item.isVeg) return

      const categorySlug = classifyItemCategory(item, cat.name)

      // Category filtering:
      if (!isItemCategoryAllowed(categorySlug, categoryIds)) return

      // Standalone price check: if (price + tax + delivery + packaging) > budget, item can never fit in any combo
      const minTax = Math.round(item.price * 0.05)
      if (item.price + minTax + deliveryFee + packagingFee > budget) return

      classifiedItems.push({ item, categorySlug })
    })
  })

  if (classifiedItems.length === 0) {
    return []
  }

  const generatedCombos: GeneratedCombo[] = []
  const seenSignatures = new Set<string>()

  // Group items by category bucket
  const mains = classifiedItems.filter((ci) =>
    ['biryani', 'meals-thalis', 'rice-noodles', 'curries-gravies', 'snacks-fast-food'].includes(ci.categorySlug)
  )
  const sides = classifiedItems.filter((ci) =>
    ['starters', 'breads', 'snacks-fast-food'].includes(ci.categorySlug)
  )
  const accompaniments = classifiedItems.filter((ci) =>
    ['beverages', 'desserts', 'breads'].includes(ci.categorySlug)
  )

  // Candidate combo builder helper
  const tryAddCombo = (candidateItems: ComboItem[]) => {
    // 1. Deduplication signature
    const signature = getComboSignature(restaurant.id, candidateItems)
    if (seenSignatures.has(signature)) return
    seenSignatures.add(signature)

    // 2. Strict Meal-Type Validation
    const allVeg = candidateItems.every((c) => c.menuItem.isVeg)
    const hasNonVeg = candidateItems.some((c) => !c.menuItem.isVeg)

    if (mealType === 'veg' && !allVeg) {
      return // Must be purely vegetarian
    }
    if (mealType === 'non-veg' && allVeg) {
      return // Non-Veg filter must exclude veg-only combos!
    }

    // 3. Strict Category Validation: every item must belong to allowed categories
    const allCategoriesAllowed = candidateItems.every((c) =>
      isItemCategoryAllowed(c.categorySlug, categoryIds)
    )
    if (!allCategoriesAllowed) return

    // 4. Centralized Pricing Calculation
    const pricingItems = candidateItems.map((c) => ({
      price: c.menuItem.price,
      quantity: c.quantity,
      name: c.menuItem.name,
    }))

    const pricing = calculateOrderPricing({
      items: pricingItems,
      deliveryFee,
      packagingFee,
      coupon,
      userBudget: budget,
      restaurant,
    })

    // 5. CRITICAL CONSTRAINT: Final payable MUST NOT exceed user budget
    if (!pricing.isAffordable || pricing.finalPayable > budget) {
      return
    }

    // 6. Build combo object
    const distinctCategories = Array.from(new Set(candidateItems.map((c) => c.categorySlug)))
    const score = scoreCombo(candidateItems, pricing, budget, restaurant)
    const title = generateComboTitle(candidateItems)
    const reason = generateRecommendationReason(candidateItems, pricing.finalPayable, budget, allVeg)

    generatedCombos.push({
      id: `combo-${restaurant.id}-${signature}`,
      title,
      restaurant,
      items: candidateItems,
      isVeg: allVeg,
      hasNonVeg,
      categories: distinctCategories,
      itemTotal: pricing.itemTotal,
      deliveryFee: pricing.deliveryFee,
      packagingFee: pricing.packagingFee,
      taxAmount: pricing.taxAmount,
      discountAmount: pricing.discountAmount,
      finalPayable: pricing.finalPayable,
      remainingBudget: pricing.remainingBudget,
      userBudget: budget,
      reason,
      score,
      meetsMinimumOrder: pricing.meetsMinimumOrder,
      pricing,
    })
  }

  // ==========================================
  // Strategy 1: Pairings (Main + Accompaniment or Side)
  // ==========================================
  for (const main of mains) {
    // 1a. Main + Accompaniment (Drink / Dessert / Bread)
    for (const acc of accompaniments) {
      if (main.item.id === acc.item.id) continue
      tryAddCombo([
        { menuItem: main.item, quantity: 1, categorySlug: main.categorySlug },
        { menuItem: acc.item, quantity: 1, categorySlug: acc.categorySlug },
      ])
    }

    // 1b. Main + Side (Starter / Bread / Snack)
    for (const side of sides) {
      if (main.item.id === side.item.id) continue
      tryAddCombo([
        { menuItem: main.item, quantity: 1, categorySlug: main.categorySlug },
        { menuItem: side.item, quantity: 1, categorySlug: side.categorySlug },
      ])
    }
  }

  // ==========================================
  // Strategy 2: 3-Item Feasts (Main + Side + Beverage)
  // ==========================================
  const beverages = accompaniments.filter((a) => a.categorySlug === 'beverages')
  for (const main of mains.slice(0, 10)) {
    for (const side of sides.slice(0, 8)) {
      if (main.item.id === side.item.id) continue
      for (const bev of beverages.slice(0, 5)) {
        if (main.item.id === bev.item.id || side.item.id === bev.item.id) continue
        tryAddCombo([
          { menuItem: main.item, quantity: 1, categorySlug: main.categorySlug },
          { menuItem: side.item, quantity: 1, categorySlug: side.categorySlug },
          { menuItem: bev.item, quantity: 1, categorySlug: bev.categorySlug },
        ])
      }
    }
  }

  // ==========================================
  // Strategy 3: Multi-Quantity Sets (e.g. 2x Bread + Curry)
  // ==========================================
  const breads = sides.filter((s) => s.categorySlug === 'breads')
  const curries = mains.filter((m) => m.categorySlug === 'curries-gravies')
  for (const curry of curries) {
    for (const bread of breads) {
      tryAddCombo([
        { menuItem: curry.item, quantity: 1, categorySlug: curry.categorySlug },
        { menuItem: bread.item, quantity: 2, categorySlug: bread.categorySlug },
      ])
    }
  }

  // ==========================================
  // Strategy 4: Cross-category pairings within same selection
  // ==========================================
  for (let i = 0; i < classifiedItems.length; i++) {
    for (let j = i + 1; j < classifiedItems.length; j++) {
      const a = classifiedItems[i]
      const b = classifiedItems[j]
      tryAddCombo([
        { menuItem: a.item, quantity: 1, categorySlug: a.categorySlug },
        { menuItem: b.item, quantity: 1, categorySlug: b.categorySlug },
      ])
    }
  }

  // ==========================================
  // Strategy 5: Single-Item Meal (Fallback or Hearty Mains)
  // ==========================================
  for (const ci of classifiedItems) {
    tryAddCombo([{ menuItem: ci.item, quantity: 1, categorySlug: ci.categorySlug }])
  }

  // Sort by score descending
  generatedCombos.sort((a, b) => b.score - a.score)

  return generatedCombos
}

/**
 * Top-level optimizer query function:
 * Resolves restaurants, executes combo generation, and ranks diverse options
 */
export async function optimizeBudget(params: BudgetOptimizerParams): Promise<{
  combos: GeneratedCombo[]
  totalEvaluatedRestaurants: number
  selectedRestaurantName?: string
  error?: string
}> {
  const { budget, restaurantId = 'all', limit = 20 } = params

  // 1. Validate budget
  const validation = validateBudgetInput(budget)
  if (!validation.isValid || validation.numericBudget === undefined) {
    return {
      combos: [],
      totalEvaluatedRestaurants: 0,
      error: validation.error,
    }
  }

  const effectiveParams = {
    ...params,
    budget: validation.numericBudget,
  }

  // 2. Fetch restaurants from Supabase or Fallback
  let targetRestaurants: Restaurant[] = []

  try {
    if (restaurantId && restaurantId !== 'all') {
      const single = await fetchRestaurantByIdOrSlug(restaurantId)
      if (single) {
        targetRestaurants = [single]
      } else {
        const found = INITIAL_RESTAURANTS.find((r) => r.id === restaurantId || r.slug === restaurantId)
        if (found) targetRestaurants = [found]
      }
    } else {
      const all = await fetchRestaurants()
      targetRestaurants = all && all.length > 0 ? all : INITIAL_RESTAURANTS
    }
  } catch (err) {
    console.warn('[Smart Budget Optimizer] Failed to fetch from catalog, using cache:', err)
    targetRestaurants = INITIAL_RESTAURANTS
  }

  if (targetRestaurants.length === 0) {
    return {
      combos: [],
      totalEvaluatedRestaurants: 0,
      error: 'No restaurant menus are currently available.',
    }
  }

  // 3. Generate combos across all eligible restaurants
  const allCombos: GeneratedCombo[] = []

  for (const restaurant of targetRestaurants) {
    if (!restaurant.isOpen) continue // Skip closed kitchens

    const restaurantCombos = generateCombosForRestaurant(restaurant, effectiveParams)
    // Take top distinct combos from each restaurant to ensure variety across restaurants
    allCombos.push(...restaurantCombos.slice(0, 6))
  }

  // 4. Global Ranking & Diversity
  // Sort primarily by score descending
  allCombos.sort((a, b) => b.score - a.score)

  // Deduplicate near-identical entries and cap to requested limit
  const finalCombos = allCombos.slice(0, limit)

  return {
    combos: finalCombos,
    totalEvaluatedRestaurants: targetRestaurants.length,
    selectedRestaurantName:
      restaurantId !== 'all' && targetRestaurants[0] ? targetRestaurants[0].name : undefined,
  }
}

