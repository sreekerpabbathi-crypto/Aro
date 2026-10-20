import React, { createContext, useContext, useState, useEffect } from 'react'
import type { CartItem, CartTotals, Coupon, MenuItem, CustomizationOption, Restaurant } from '@/types'
import { validateCouponCode, getRestaurantBySlug } from '@/services/catalogService'

interface CartConflict {
  pendingItem: MenuItem
  pendingCustomizations: Array<{ groupId: string; groupName: string; option: CustomizationOption }>
  pendingRestaurantId: string
  newRestaurantName: string
  currentRestaurantName: string
}

interface CartContextType {
  items: CartItem[]
  restaurantId: string | null
  activeRestaurant: Restaurant | null
  totals: CartTotals
  appliedCoupon: Coupon | null
  conflict: CartConflict | null
  addToCart: (
    menuItem: MenuItem,
    customizations?: Array<{ groupId: string; groupName: string; option: CustomizationOption }>,
    quantity?: number
  ) => void
  resolveConflict: (replace: boolean) => void
  updateQuantity: (cartItemId: string, delta: number) => void
  removeItem: (cartItemId: string) => void
  clearCart: () => void
  applyCoupon: (code: string) => { success: boolean; message: string }
  removeCoupon: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const CART_STORAGE_KEY = 'aro_cart_state_v1'

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  const [restaurantId, setRestaurantId] = useState<string | null>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY + '_res')
      return stored || null
    } catch {
      return null
    }
  })

  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY + '_coupon')
      return stored ? JSON.parse(stored) : null
    } catch {
      return null
    }
  })

  const [conflict, setConflict] = useState<CartConflict | null>(null)

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
      if (restaurantId) {
        localStorage.setItem(CART_STORAGE_KEY + '_res', restaurantId)
      } else {
        localStorage.removeItem(CART_STORAGE_KEY + '_res')
      }
      if (appliedCoupon) {
        localStorage.setItem(CART_STORAGE_KEY + '_coupon', JSON.stringify(appliedCoupon))
      } else {
        localStorage.removeItem(CART_STORAGE_KEY + '_coupon')
      }
    } catch (e) {
      console.warn('LocalStorage error in CartProvider:', e)
    }
  }, [items, restaurantId, appliedCoupon])

  const activeRestaurant = restaurantId ? getRestaurantBySlug(restaurantId) || null : null

  // Calculate totals
  const itemTotal = items.reduce((acc, it) => acc + it.totalPrice, 0)
  const deliveryFee = items.length > 0 ? (activeRestaurant?.deliveryFee ?? 60) : 0
  const packagingFee = items.length > 0 ? 25 : 0
  const taxesAndCharges = Math.round(itemTotal * 0.05) // 5% GST

  let discountAmount = 0
  if (appliedCoupon && itemTotal >= appliedCoupon.minOrderValue) {
    if (appliedCoupon.discountPercentage) {
      const rawDiscount = (itemTotal * appliedCoupon.discountPercentage) / 100
      discountAmount = appliedCoupon.maxDiscount
        ? Math.min(rawDiscount, appliedCoupon.maxDiscount)
        : rawDiscount
    } else if (appliedCoupon.flatDiscount) {
      discountAmount = Math.min(appliedCoupon.flatDiscount, itemTotal)
    }
  }

  const finalPayable = Math.max(0, itemTotal + deliveryFee + packagingFee + taxesAndCharges - discountAmount)

  const totals: CartTotals = {
    itemTotal,
    deliveryFee,
    packagingFee,
    taxesAndCharges,
    discountAmount,
    finalPayable,
    appliedCoupon,
  }

  const addToCart = (
    menuItem: MenuItem,
    customizations: Array<{ groupId: string; groupName: string; option: CustomizationOption }> = [],
    quantity: number = 1
  ) => {
    // Single-restaurant enforcement
    if (restaurantId && restaurantId !== menuItem.restaurantId && items.length > 0) {
      const currentRes = getRestaurantBySlug(restaurantId)?.name || 'Current Restaurant'
      const newRes = getRestaurantBySlug(menuItem.restaurantId)?.name || 'New Restaurant'
      setConflict({
        pendingItem: menuItem,
        pendingCustomizations: customizations,
        pendingRestaurantId: menuItem.restaurantId,
        newRestaurantName: newRes,
        currentRestaurantName: currentRes,
      })
      return
    }

    // Base price + customizations
    const customAddonsTotal = customizations.reduce(
      (sum, c) => sum + (c.option.additionalPrice || 0),
      0
    )
    const unitPrice = menuItem.price + customAddonsTotal
    const totalPrice = unitPrice * quantity

    // Customization hash for line item identity
    const customHash = customizations
      .map((c) => `${c.groupId}:${c.option.id}`)
      .sort()
      .join('|')
    const cartItemId = `${menuItem.id}__${customHash}`

    setRestaurantId(menuItem.restaurantId)
    setItems((prev) => {
      const existing = prev.find((it) => it.id === cartItemId)
      if (existing) {
        return prev.map((it) =>
          it.id === cartItemId
            ? {
                ...it,
                quantity: it.quantity + quantity,
                totalPrice: (it.quantity + quantity) * unitPrice,
              }
            : it
        )
      }
      return [
        ...prev,
        {
          id: cartItemId,
          menuItem,
          quantity,
          selectedCustomizations: customizations,
          unitPrice,
          totalPrice,
        },
      ]
    })
  }

  const resolveConflict = (replace: boolean) => {
    if (replace && conflict) {
      // Discard previous restaurant items and start new cart
      const customAddonsTotal = conflict.pendingCustomizations.reduce(
        (sum, c) => sum + (c.option.additionalPrice || 0),
        0
      )
      const unitPrice = conflict.pendingItem.price + customAddonsTotal
      const customHash = conflict.pendingCustomizations
        .map((c) => `${c.groupId}:${c.option.id}`)
        .sort()
        .join('|')
      const cartItemId = `${conflict.pendingItem.id}__${customHash}`

      setRestaurantId(conflict.pendingRestaurantId)
      setItems([
        {
          id: cartItemId,
          menuItem: conflict.pendingItem,
          quantity: 1,
          selectedCustomizations: conflict.pendingCustomizations,
          unitPrice,
          totalPrice: unitPrice,
        },
      ])
    }
    setConflict(null)
  }

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) => {
      const updated = prev
        .map((it) => {
          if (it.id === cartItemId) {
            const nextQty = it.quantity + delta
            if (nextQty <= 0) return null
            return {
              ...it,
              quantity: nextQty,
              totalPrice: nextQty * it.unitPrice,
            }
          }
          return it
        })
        .filter(Boolean) as CartItem[]

      if (updated.length === 0) {
        setRestaurantId(null)
        setAppliedCoupon(null)
      }
      return updated
    })
  }

  const removeItem = (cartItemId: string) => {
    setItems((prev) => {
      const updated = prev.filter((it) => it.id !== cartItemId)
      if (updated.length === 0) {
        setRestaurantId(null)
        setAppliedCoupon(null)
      }
      return updated
    })
  }

  const clearCart = () => {
    setItems([])
    setRestaurantId(null)
    setAppliedCoupon(null)
  }

  const applyCoupon = (code: string): { success: boolean; message: string } => {
    const res = validateCouponCode(code, itemTotal)
    if (res.error) {
      return { success: false, message: res.error }
    }
    if (res.coupon) {
      setAppliedCoupon(res.coupon)
      return { success: true, message: `Privilege code '${res.coupon.code}' applied successfully!` }
    }
    return { success: false, message: 'Could not apply coupon' }
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        restaurantId,
        activeRestaurant,
        totals,
        appliedCoupon,
        conflict,
        addToCart,
        resolveConflict,
        updateQuantity,
        removeItem,
        clearCart,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextType {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
