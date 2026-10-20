import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Trash2, Plus, Minus, TicketPercent, ArrowRight, ShieldCheck, ShoppingBag, Store } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/utils'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
import { Button } from '@/components/common/Button'

export const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const {
    items,
    activeRestaurant,
    totals,
    appliedCoupon,
    updateQuantity,
    removeItem,
    clearCart,
    applyCoupon,
    removeCoupon,
  } = useCart()

  const [couponInput, setCouponInput] = useState('')
  const [couponFeedback, setCouponFeedback] = useState<{ success: boolean; message: string } | null>(null)

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    if (!couponInput.trim()) return
    const res = applyCoupon(couponInput)
    setCouponFeedback(res)
    if (res.success) {
      setCouponInput('')
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
        <StorefrontNavbar cartCount={0} />
        <main className="flex-1 max-w-lg mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-20 h-20 rounded-3xl bg-[#2E2423] border border-[#4D3F3C] flex items-center justify-center text-[#A89A97]">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold font-['Outfit'] text-white">Your Basket is Empty</h1>
            <p className="text-xs text-[#A89A97] leading-relaxed max-w-sm">
              Explore our curated selection of Michelin-caliber partner kitchens in Hyderabad and discover extraordinary dining.
            </p>
          </div>
          <Link
            to="/restaurants"
            className="px-6 py-3 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold transition-colors"
          >
            Explore Menus →
          </Link>
        </main>
        <StorefrontFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
      <StorefrontNavbar cartCount={items.length} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#4D3F3C]">
          <div>
            <h1 className="text-3xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Order Basket
            </h1>
            <p className="text-xs text-[#A89A97] mt-1">
              Review and finalize line-item customizations before checkout.
            </p>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="text-xs text-[#E9432E] hover:underline cursor-pointer"
          >
            Clear Basket
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Items List & Restaurant Header */}
          <div className="lg:col-span-8 space-y-6">
            {/* Restaurant Info Header */}
            {activeRestaurant && (
              <div className="p-4 rounded-2xl bg-[#2E2423] border border-[#4D3F3C] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF650D]/20 border border-[#FF650D]/30 flex items-center justify-center text-[#FF650D]">
                    <Store className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white font-['Outfit']">
                      Ordering from {activeRestaurant.name}
                    </h2>
                    <p className="text-[11px] text-[#A89A97]">
                      {activeRestaurant.addressLine}, {activeRestaurant.city}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/restaurants/${activeRestaurant.slug}`}
                  className="text-xs text-[#FF650D] hover:underline font-semibold"
                >
                  + Add More Dishes
                </Link>
              </div>
            )}

            {/* Line Items List */}
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-[#2E2423] border border-[#4D3F3C] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.menuItem.isVeg ? 'bg-emerald-400' : 'bg-rose-400'
                        }`}
                      />
                      <h3 className="text-sm font-bold text-white font-['Outfit']">
                        {item.menuItem.name}
                      </h3>
                    </div>

                    {/* Selected Customization Summary */}
                    {item.selectedCustomizations.length > 0 && (
                      <div className="text-[11px] text-[#A89A97] space-y-0.5">
                        {item.selectedCustomizations.map((c, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <span className="text-white/60">{c.groupName}:</span>
                            <span className="text-white/90">{c.option.name}</span>
                            {c.option.additionalPrice > 0 && (
                              <span className="text-[#FF650D]">
                                (+{formatCurrency(c.option.additionalPrice, 'INR')})
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="text-xs font-mono text-[#A89A97]">
                      {formatCurrency(item.unitPrice, 'INR')} each
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <div className="flex items-center gap-2 bg-[#211A19] border border-[#4D3F3C] rounded-xl p-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1.5 rounded-lg text-[#A89A97] hover:text-white cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="font-bold text-xs text-white px-2 font-mono">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1.5 rounded-lg text-[#A89A97] hover:text-white cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="font-bold text-sm text-white font-mono w-20 text-right">
                      {formatCurrency(item.totalPrice, 'INR')}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-lg text-[#A89A97] hover:text-[#E9432E] transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Billing Breakdown & Checkout CTA */}
          <div className="lg:col-span-4 space-y-6">
            {/* Promo Code Input Card */}
            <div className="p-5 rounded-3xl bg-[#2E2423] border border-[#4D3F3C] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white uppercase font-['Oswald'] tracking-wider">
                <TicketPercent className="w-4 h-4 text-[#FF650D]" />
                <span>Privilege / Promo Voucher</span>
              </div>

              {appliedCoupon ? (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold font-mono text-emerald-400">
                      {appliedCoupon.code} Applied
                    </span>
                    <p className="text-[11px] text-[#A89A97]">
                      {appliedCoupon.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-xs text-[#E9432E] hover:underline cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="e.g. AROWELCOME"
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#211A19] border border-[#4D3F3C] text-white placeholder-[#A89A97] uppercase font-mono focus:outline-none focus:border-[#FF650D]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponFeedback && (
                <p
                  className={`text-xs ${
                    couponFeedback.success ? 'text-emerald-400' : 'text-[#E9432E]'
                  }`}
                >
                  {couponFeedback.message}
                </p>
              )}
            </div>

            {/* Bill Summary Card */}
            <div className="p-6 rounded-3xl bg-[#2E2423] border border-[#4D3F3C] space-y-4">
              <h3 className="text-sm font-bold text-white uppercase font-['Oswald'] tracking-wider border-b border-[#4D3F3C] pb-3">
                Order Billing Breakdown
              </h3>

              <div className="space-y-2.5 text-xs text-[#A89A97]">
                <div className="flex items-center justify-between">
                  <span>Item Total</span>
                  <span className="text-white font-mono">{formatCurrency(totals.itemTotal, 'INR')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Delivery Partner Fee</span>
                  <span className="text-white font-mono">{formatCurrency(totals.deliveryFee, 'INR')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Insulated Luxury Packaging</span>
                  <span className="text-white font-mono">{formatCurrency(totals.packagingFee, 'INR')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Government GST & Taxes (5%)</span>
                  <span className="text-white font-mono">{formatCurrency(totals.taxesAndCharges, 'INR')}</span>
                </div>

                {totals.discountAmount > 0 && (
                  <div className="flex items-center justify-between text-emerald-400 font-semibold pt-1">
                    <span>Privilege Voucher Discount</span>
                    <span className="font-mono">-{formatCurrency(totals.discountAmount, 'INR')}</span>
                  </div>
                )}

                <div className="pt-3 border-t border-[#4D3F3C] flex items-center justify-between text-base font-bold text-white">
                  <span>Total Payable</span>
                  <span className="text-lg font-mono text-[#FF650D]">
                    {formatCurrency(totals.finalPayable, 'INR')}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={() => navigate('/checkout')}
                className="w-full font-bold tracking-wide mt-2 cursor-pointer shadow-xl shadow-[#FF650D]/25"
              >
                Proceed to Checkout
              </Button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A89A97] pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Secure Checkout Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  )
}

export default CartPage
