import type { Coupon, Restaurant } from '@/types'

export interface PricingItemInput {
  price: number
  quantity: number
  name?: string
}

export interface PricingCalculationOptions {
  items: PricingItemInput[]
  deliveryFee?: number | null
  packagingFee?: number | null
  taxRate?: number // e.g. 0.05 for 5% GST
  isTaxInclusive?: boolean
  coupon?: Coupon | null
  userBudget?: number
  restaurant?: Partial<Restaurant> | null
}

export interface PriceBreakdown {
  itemTotal: number
  taxAmount: number
  deliveryFee: number
  packagingFee: number
  discountAmount: number
  finalPayable: number
  remainingBudget: number
  isTaxInclusive: boolean
  isAffordable: boolean
  isPricingVerified: boolean
  missingPricingReason?: string
  meetsMinimumOrder: boolean
  minimumOrderAmount: number
}

export const DEFAULT_TAX_RATE = 0.05 // 5% GST on Restaurant Services in India
export const DEFAULT_PACKAGING_FEE = 25.0 // Standard ARO packaging fee
export const DEFAULT_DELIVERY_FEE = 40.0

/**
 * Safe currency rounder (rounds to nearest whole rupee or 2 decimals)
 */
export function roundCurrency(amount: number): number {
  return Math.round((amount + Number.EPSILON) * 100) / 100
}

/**
 * Calculate item subtotal safely
 */
export function calculateItemSubtotal(items: PricingItemInput[]): number {
  if (!items || items.length === 0) return 0
  const total = items.reduce((sum, item) => {
    const qty = Math.max(1, item.quantity || 1)
    const price = Math.max(0, item.price || 0)
    return sum + price * qty
  }, 0)
  return roundCurrency(total)
}

/**
 * Calculate taxes safely, handling inclusive vs exclusive taxes
 */
export function calculateTaxes(
  subtotal: number,
  taxRate: number = DEFAULT_TAX_RATE,
  isTaxInclusive: boolean = false
): number {
  if (subtotal <= 0 || taxRate <= 0) return 0
  if (isTaxInclusive) {
    // If tax is inclusive, tax = subtotal - (subtotal / (1 + taxRate))
    const taxBase = subtotal / (1 + taxRate)
    return Math.round(subtotal - taxBase)
  }
  // Standard exclusive 5% GST: rounded to nearest integer as per Indian restaurant billing conventions
  return Math.round(subtotal * taxRate)
}

/**
 * Calculate applicable discount from a coupon
 */
export function calculateDiscount(
  itemTotal: number,
  coupon?: Coupon | null
): number {
  if (!coupon || itemTotal < (coupon.minOrderValue || 0)) {
    return 0
  }
  if (coupon.discountPercentage && coupon.discountPercentage > 0) {
    const rawDiscount = (itemTotal * coupon.discountPercentage) / 100
    const capped = coupon.maxDiscount
      ? Math.min(rawDiscount, coupon.maxDiscount)
      : rawDiscount
    return Math.min(roundCurrency(capped), itemTotal)
  }
  if (coupon.flatDiscount && coupon.flatDiscount > 0) {
    return Math.min(coupon.flatDiscount, itemTotal)
  }
  return 0
}

/**
 * Centralized, trusted pricing calculation engine used by:
 * - Smart Budget Optimizer
 * - CartContext
 * - Checkout order placement
 */
export function calculateOrderPricing(options: PricingCalculationOptions): PriceBreakdown {
  const {
    items,
    deliveryFee: explicitDeliveryFee,
    packagingFee: explicitPackagingFee,
    taxRate = DEFAULT_TAX_RATE,
    isTaxInclusive = false,
    coupon,
    userBudget,
    restaurant,
  } = options

  // 1. Calculate item subtotal
  const itemTotal = calculateItemSubtotal(items)

  // 2. Resolve delivery fee
  let deliveryFee = DEFAULT_DELIVERY_FEE
  if (explicitDeliveryFee !== undefined && explicitDeliveryFee !== null) {
    deliveryFee = explicitDeliveryFee
  } else if (restaurant?.deliveryFee !== undefined && restaurant?.deliveryFee !== null) {
    deliveryFee = restaurant.deliveryFee
  }

  // 3. Resolve packaging fee
  let packagingFee = DEFAULT_PACKAGING_FEE
  if (explicitPackagingFee !== undefined && explicitPackagingFee !== null) {
    packagingFee = explicitPackagingFee
  }

  // If there are no items in cart/combo, fees should be zero
  if (items.length === 0) {
    deliveryFee = 0
    packagingFee = 0
  }

  // 4. Calculate taxes (5% GST)
  const taxAmount = calculateTaxes(itemTotal, taxRate, isTaxInclusive)

  // 5. Calculate discount
  const discountAmount = calculateDiscount(itemTotal, coupon)

  // 6. Calculate final payable total
  // If tax is inclusive, taxAmount is already inside itemTotal, so do not add it again!
  const taxableCharge = isTaxInclusive ? 0 : taxAmount
  const rawPayable = itemTotal + taxableCharge + deliveryFee + packagingFee - discountAmount
  const finalPayable = Math.max(0, roundCurrency(rawPayable))

  // 7. Budget constraint check
  const hasBudget = typeof userBudget === 'number' && !isNaN(userBudget)
  const isAffordable = hasBudget ? finalPayable <= userBudget : true
  const remainingBudget = hasBudget ? Math.max(0, roundCurrency(userBudget - finalPayable)) : 0

  // 8. Minimum order verification
  const minimumOrderAmount = restaurant?.minimumOrderAmount ?? 0
  const meetsMinimumOrder = itemTotal >= minimumOrderAmount

  // 9. Pricing verification state
  const isPricingVerified =
    typeof deliveryFee === 'number' &&
    !isNaN(deliveryFee) &&
    typeof packagingFee === 'number' &&
    !isNaN(packagingFee) &&
    typeof taxAmount === 'number' &&
    !isNaN(taxAmount)

  return {
    itemTotal,
    taxAmount,
    deliveryFee,
    packagingFee,
    discountAmount,
    finalPayable,
    remainingBudget,
    isTaxInclusive,
    isAffordable,
    isPricingVerified,
    missingPricingReason: !isPricingVerified ? 'Pricing configuration incomplete' : undefined,
    meetsMinimumOrder,
    minimumOrderAmount,
  }
}

