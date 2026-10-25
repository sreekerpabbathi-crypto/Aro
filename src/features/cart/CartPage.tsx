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
      <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid selection:bg-[var(--dp-color-highlight)] selection:text-[var(--dp-color-ink)]">
        <StorefrontNavbar cartCount={0} />
        <main className="flex-1 max-w-lg mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-20 h-20 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.14)] flex items-center justify-center text-[var(--dp-color-accent)]">
            <ShoppingBag className="w-10 h-10 text-[var(--dp-color-ink)]" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">Your Basket is Empty</h1>
            <p className="text-sm sm:text-base text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] leading-relaxed max-w-sm">
              Explore our curated selection of Michelin-caliber partner kitchens in Hyderabad and discover extraordinary dining.
            </p>
          </div>
          <Link
            to="/restaurants"
            className="px-6 py-3 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-sm font-bold font-['Outfit',sans-serif] tracking-wide border-[1.5px] border-[var(--dp-color-ink)] shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.18)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_rgba(56,53,47,0.22)] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
          >
            Explore Menus →
          </Link>
        </main>
        <StorefrontFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid selection:bg-[var(--dp-color-highlight)] selection:text-[var(--dp-color-ink)]">
      <StorefrontNavbar cartCount={items.length} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between pb-6 mb-8 border-b-[1.5px] border-[var(--dp-color-line)]">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] mb-1">
              Order Review
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] tracking-tight">
              YOUR ORDER BASKET
            </h1>
            <p className="text-sm sm:text-base text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mt-1">
              Review and finalize line-item customizations before checkout.
            </p>
          </div>

          <button
            type="button"
            onClick={clearCart}
            className="px-3 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-accent)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:bg-[var(--dp-color-highlight)]/30 transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
          >
            Clear Basket
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Items List & Restaurant Header */}
          <div className="lg:col-span-8 space-y-6">
            {/* Restaurant Info Header */}
            {activeRestaurant && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.10)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--dp-color-highlight)]/50 border-[1.5px] border-[var(--dp-color-line)] flex items-center justify-center text-[var(--dp-color-accent)]">
                    <Store className="w-5 h-5 text-[var(--dp-color-accent)]" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                      Ordering from {activeRestaurant.name}
                    </h2>
                    <p className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                      {activeRestaurant.addressLine}, {activeRestaurant.city}
                    </p>
                  </div>
                </div>

                <Link
                  to={`/restaurants/${activeRestaurant.slug}`}
                  className="px-3 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:bg-[var(--dp-color-highlight)] transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
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
                  className="p-5 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.10)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full border border-[var(--dp-color-line)] ${
                          item.menuItem.isVeg ? 'bg-[#059669]' : 'bg-[var(--dp-color-accent)]'
                        }`}
                      />
                      <h3 className="text-base sm:text-lg font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                        {item.menuItem.name}
                      </h3>
                    </div>

                    {/* Selected Customization Summary */}
                    {item.selectedCustomizations.length > 0 && (
                      <div className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] space-y-0.5 pt-0.5">
                        {item.selectedCustomizations.map((c, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <span className="font-bold text-[var(--dp-color-ink)]">{c.groupName}:</span>
                            <span className="bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] px-1.5 py-0.5 rounded text-[11px]">
                              {c.option.name}
                            </span>
                            {c.option.additionalPrice > 0 && (
                              <span className="text-[var(--dp-color-accent)] font-bold">
                                (+{formatCurrency(c.option.additionalPrice, 'INR')})
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="text-xs font-mono font-bold text-[var(--dp-color-ink-muted)]">
                      {formatCurrency(item.unitPrice, 'INR')} each
                    </div>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <div className="flex items-center gap-2 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl p-1 shadow-[1.5px_1.5px_0px_var(--dp-color-line)]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1.5 rounded-lg text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-highlight)] cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                      >
                        <Minus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                      <span className="font-bold text-xs text-[var(--dp-color-ink)] px-2 font-mono">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1.5 rounded-lg text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-highlight)] cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                      >
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                      </button>
                    </div>

                    <span className="font-bold text-lg text-[var(--dp-color-ink)] font-['Outfit',sans-serif] w-20 text-right">
                      {formatCurrency(item.totalPrice, 'INR')}
                    </span>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="p-2 rounded-lg text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-accent)] hover:bg-[var(--dp-color-highlight)]/30 transition-colors cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
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
            <div className="p-5 sm:p-6 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.12)] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[var(--dp-color-ink)] uppercase font-['Outfit',sans-serif] tracking-wider">
                <TicketPercent className="w-4 h-4 text-[var(--dp-color-accent)]" />
                <span>Privilege / Promo Voucher</span>
              </div>

              {appliedCoupon ? (
                <div className="p-3 rounded-xl bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider text-[#059669]">
                      {appliedCoupon.code} Applied
                    </span>
                    <p className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                      {appliedCoupon.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-xs font-bold uppercase font-['Outfit',sans-serif] text-[var(--dp-color-accent)] hover:underline cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
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
                    className="flex-1 px-3 py-2 text-xs rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)]/60 uppercase font-mono font-bold focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_rgba(56,53,47,0.18)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_rgba(56,53,47,0.22)] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                  >
                    Apply
                  </button>
                </form>
              )}

              {couponFeedback && (
                <p
                  className={`text-xs font-bold ${
                    couponFeedback.success ? 'text-[#059669]' : 'text-[var(--dp-color-accent)]'
                  }`}
                >
                  {couponFeedback.message}
                </p>
              )}
            </div>

            {/* Bill Summary Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[var(--dp-color-highlight)]/30 border-[1.5px] border-[var(--dp-color-line)] shadow-[3px_3px_0px_rgba(56,53,47,0.12)] space-y-4">
              <h3 className="text-sm font-bold text-[var(--dp-color-ink)] uppercase font-['Outfit',sans-serif] tracking-wider border-b-[1.5px] border-[var(--dp-color-line)] pb-3">
                Order Billing Breakdown
              </h3>

              <div className="space-y-2.5 text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] text-sm">
                <div className="flex items-center justify-between">
                  <span>Item Total</span>
                  <span className="text-[var(--dp-color-ink)] font-bold font-['Outfit',sans-serif] text-base">{formatCurrency(totals.itemTotal, 'INR')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Delivery Partner Fee</span>
                  <span className="text-[var(--dp-color-ink)] font-bold font-['Outfit',sans-serif] text-base">{formatCurrency(totals.deliveryFee, 'INR')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Insulated Luxury Packaging</span>
                  <span className="text-[var(--dp-color-ink)] font-bold font-['Outfit',sans-serif] text-base">{formatCurrency(totals.packagingFee, 'INR')}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Government GST & Taxes (5%)</span>
                  <span className="text-[var(--dp-color-ink)] font-bold font-['Outfit',sans-serif] text-base">{formatCurrency(totals.taxesAndCharges, 'INR')}</span>
                </div>

                {totals.discountAmount > 0 && (
                  <div className="flex items-center justify-between text-[#059669] font-bold pt-1">
                    <span>Privilege Voucher Discount</span>
                    <span className="font-bold font-['Outfit',sans-serif] text-base">-{formatCurrency(totals.discountAmount, 'INR')}</span>
                  </div>
                )}

                <div className="pt-3 border-t-[1.5px] border-[var(--dp-color-line)] flex items-center justify-between text-base font-bold text-[var(--dp-color-ink)]">
                  <span>Total Payable</span>
                  <span className="text-2xl font-bold font-['Outfit',sans-serif] text-[var(--dp-color-accent)]">
                    {formatCurrency(totals.finalPayable, 'INR')}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                variant="primary"
                rightIcon={<ArrowRight className="w-4 h-4 stroke-[2.5]" />}
                onClick={() => navigate('/checkout')}
                className="w-full font-bold uppercase font-['Outfit',sans-serif] tracking-wider mt-2 cursor-pointer shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.18)]"
              >
                Proceed to Checkout
              </Button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] pt-2">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
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
