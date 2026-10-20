import type { MenuItem, CustomizationOption } from './restaurant'

export interface SelectedCustomization {
  groupId: string
  groupName: string
  option: CustomizationOption
}

export interface CartItem {
  id: string // unique client cart item id (incorporating customization hash)
  menuItem: MenuItem
  quantity: number
  selectedCustomizations: SelectedCustomization[]
  unitPrice: number
  totalPrice: number
}

export interface Coupon {
  code: string
  discountPercentage?: number
  flatDiscount?: number
  minOrderValue: number
  maxDiscount?: number
  description: string
}

export interface CartTotals {
  itemTotal: number
  deliveryFee: number
  packagingFee: number
  taxesAndCharges: number
  discountAmount: number
  finalPayable: number
  appliedCoupon?: Coupon | null
}
