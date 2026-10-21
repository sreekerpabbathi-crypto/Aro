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
      <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#121212] paper-grid selection:bg-[#FFD13B] selection:text-[#121212]">
        <StorefrontNavbar cartCount={0} />
        <main className="flex-1 max-w-lg mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-20 h-20 rounded-2xl bg-white border-2 border-[#121212] shadow-[4px_4px_0px_#121212] flex items-center justify-center text-[#FF650D]">
            <ShoppingBag className="w-10 h-10 text-[#121212]" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black font-['Outfit'] text-[#121212]">Your Basket is Empty</h1>
            <p className="text-xs sm:text-sm text-[#5E5854] leading-relaxed max-w-sm font-medium">
              Explore our curated selection of Michelin-caliber partner kitchens in Hyderabad and discover extraordinary dining.
            </p>
          </div>
          <Link
            to="/restaurants"
            className="px-6 py-3 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-black uppercase font-['Oswald'] tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212] transition-all cursor-pointer"
          >
            Explore Menus →
          </Link>
        </main>
        <StorefrontFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#121212] paper-grid selection:bg-[#FFD13B] selection:text-[#121212]">
      <StorefrontNavbar cartCount={items.length} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between pb-6 mb-8 border-b-2 border-[#121212]/15">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FFD13B] border-2 border-[#121212] text-[10px] font-black uppercase font-['Oswald'] text-[#121212] mb-1">
              Order Review
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#121212] font-['Outfit'] tracking-tight">
              YOUR ORDER BASKET
            </h1>
            <p className="text-xs sm:text-sm text-[#5E5854] font-medium mt-1">
              Review and finalize line-item customizations before checkout.
            </p>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="px-3 py-1.5 rounded-lg bg-white border-2 border-[#121212] text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#EF4444] shadow-[2px_2px_0px_#121212] hover:bg-[#FEECEB] transition-all cursor-pointer"
          >
            Clear Basket
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Items List & Restaurant Header */}
          <div className="lg:col-span-8 space-y-6">
            {/* Restaurant Info Header */}
            {activeRestaurant && (
              <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#121212] shadow-[3px_3px_0px_#121212] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4C2] border-2 border-[#121212] flex items-center justify-center text-[#121212]">
                    <Store className="w-5 h-5 text-[#FF650D]" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-black text-[#121212] font-['Outfit']">
                      Ordering from {activeRestaurant.name}
                    </h2>
                    <p className="text-[11px] text-[#5E5854] font-medium">
                      {activeRestaurant.addressLine}, {activeRestaurant.city}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/restaurants/${activeRestaurant.slug}`}
                  className="px-3 py-1.5 rounded-lg bg-[#FAF6EE] border-2 border-[#121212] text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212] shadow-[2px_2px_0px_#121212] hover:bg-[#FFD13B] transition-all"
                >
                  + Add More
                </Link>
              </div>
            )}

            {/* Line Items List */}
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white border-2 border-[#121212] shadow-[3px_3px_0px_#121212] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full border border-[#121212] ${
                          item.menuItem.isVeg ? 'bg-[#059669]' : 'bg-[#DC2626]'
                        }`}
                      />
                      <h3 className="text-sm sm:text-base font-black text-[#121212] font-['Outfit']">
                        {item.menuItem.name}
                      </h3>
                    </div>

                    {/* Selected Customization Summary */}
                    {item.selectedCustomizations.length > 0 && (
                      <div className="text-[11px] text-[#5E5854] space-y-0.5 pt-0.5 font-medium">
                        {item.selectedCustomizations.map((c, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="font-bold text-[#121212]">{c.groupName}:</span>
                            <span className="bg-[#FAF6EE] border border-[#121212] px-1.5 py-0.2 rounded text-[10px]">
                              {c.option.name}
                            </span>
                            {c.option.additionalPrice > 0 && (
                              <span className="text-[#FF650D] font-bold">
                                (+{formatCurrency(c.option.additionalPrice, 'INR')})
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="text-xs font-mono font-bold text-[#5E5854]">
                      {formatCurrency(item.unitPrice, 'INR')} each
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <div className="flex items-center gap-2 bg-[#FAF6EE] border-2 border-[#121212] rounded-xl p-1 shadow-[2px_2px_0px_#121212]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1.5 rounded-lg text-[#121212] hover:bg-[#FFF4C2] cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                      <span className="font-black text-xs text-[#121212] px-2 font-mono">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1.5 rounded-lg text-[#121212] hover:bg-[#FFF4C2] cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    </div>

                    <span className="font-black text-base text-[#121212] font-['Oswald'] w-20 text-right">
                      {formatCurrency(item.totalPrice, 'INR')}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-lg text-[#5E5854] hover:text-[#EF4444] hover:bg-[#FEECEB] transition-colors cursor-pointer"
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
            <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#121212] shadow-[4px_4px_0px_#121212] space-y-3">
              <div className="flex items-center gap-2 text-xs font-black text-[#121212] uppercase font-['Oswald'] tracking-wider">
                <TicketPercent className="w-4 h-4 text-[#FF650D]" />
                <span>Privilege / Promo Voucher</span>
              </div>

              {appliedCoupon ? (
                <div className="p-3 rounded-xl bg-[#E8F8F0] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black font-['Oswald'] uppercase tracking-wider text-[#059669]">
                      {appliedCoupon.code} Applied
                    </span>
                    <p className="text-[11px] text-[#5E5854] font-medium">
                      {appliedCoupon.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-xs font-black uppercase font-['Oswald'] text-[#EF4444] hover:underline cursor-pointer"
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
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#FAF6EE] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-[#121212] placeholder-[#5E5854] uppercase font-mono font-bold focus:outline-none focus:ring-2 focus:ring-[#FF650D]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-black uppercase font-['Oswald'] tracking-wider border-2 border-[#121212] shadow-[2px_2px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#121212] transition-all cursor-pointer"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponFeedback && (
                <p
                  className={`text-xs font-bold ${
                    couponFeedback.success ? 'text-[#059669]' : 'text-[#EF4444]'
                  }`}
                >
                  {couponFeedback.message}
                </p>
              )}
            </div>

            {/* Bill Summary Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF4C2] border-[2.5px] border-[#121212] shadow-[6px_6px_0px_#121212] space-y-4">
              <h3 className="text-sm font-black text-[#121212] uppercase font-['Oswald'] tracking-wider border-b-2 border-[#121212]/20 pb-3">
                Order Billing Breakdown
              </h3>

              <div className="space-y-2.5 text-xs text-[#5E5854] font-medium">
                <div className="flex items-center justify-between">
                  <span>Item Total</span>
                  <span className="text-[#121212] font-black font-['Oswald'] text-sm">{formatCurrency(totals.itemTotal, 'INR')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Delivery Partner Fee</span>
                  <span className="text-[#121212] font-black font-['Oswald'] text-sm">{formatCurrency(totals.deliveryFee, 'INR')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Insulated Luxury Packaging</span>
                  <span className="text-[#121212] font-black font-['Oswald'] text-sm">{formatCurrency(totals.packagingFee, 'INR')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Government GST & Taxes (5%)</span>
                  <span className="text-[#121212] font-black font-['Oswald'] text-sm">{formatCurrency(totals.taxesAndCharges, 'INR')}</span>
                </div>

                {totals.discountAmount > 0 && (
                  <div className="flex items-center justify-between text-[#059669] font-bold pt-1">
                    <span>Privilege Voucher Discount</span>
                    <span className="font-black font-['Oswald'] text-sm">-{formatCurrency(totals.discountAmount, 'INR')}</span>
                  </div>
                )}

                <div className="pt-3 border-t-2 border-[#121212]/20 flex items-center justify-between text-base font-black text-[#121212]">
                  <span>Total Payable</span>
                  <span className="text-xl font-black font-['Oswald'] text-[#FF650D]">
                    {formatCurrency(totals.finalPayable, 'INR')}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
                onClick={() => navigate('/checkout')}
                className="w-full font-black uppercase font-['Oswald'] tracking-wider mt-2 cursor-pointer shadow-[3px_3px_0px_#121212]"
              >
                Proceed to Checkout
              </Button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#5E5854] font-bold pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                <span>100% Genuine Partner Kitchen Fulfillment</span>
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
