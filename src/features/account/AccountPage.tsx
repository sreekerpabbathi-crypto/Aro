import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  MapPin,
  Clock,
  Heart,
  RotateCcw,
  Star,
  Plus,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Shield,
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { INITIAL_RESTAURANTS } from '@/services/catalogService'
import { formatCurrency } from '@/lib/utils'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
import { ScribbleUnderline, WashiTape } from '@/components/sketch/SketchDoodles'
import type { Order, CustomerAddress, MenuItem } from '@/types'

export const AccountPage: React.FC = () => {
  const navigate = useNavigate()
  const { user, addresses, addAddress, favorites, toggleFavorite, orders } = useAuth()
  const { addToCart, items: cartItems } = useCart()

  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'favorites' | 'profile'>('orders')

  // Review modal state
  const [reviewOrder, setReviewOrder] = useState<Order | null>(null)
  const [rating, setRating] = useState<number>(5)
  const [reviewText, setReviewText] = useState<string>('')
  const [reviewSubmitted, setReviewSubmitted] = useState<boolean>(false)

  // Reorder toast
  const [reorderNotice, setReorderNotice] = useState<string | null>(null)

  // New address modal state
  const [showAddAddressModal, setShowAddAddressModal] = useState(false)
  const [newLabel, setNewLabel] = useState<'Home' | 'Work' | 'Other'>('Home')
  const [newAddressLine1, setNewAddressLine1] = useState('')
  const [newAddressLine2, setNewAddressLine2] = useState('')
  const [newLandmark, setNewLandmark] = useState('')
  const [newPincode, setNewPincode] = useState('500033')

  // Past orders fallback if customer just opened
  const displayOrders: Order[] = orders.length > 0 ? orders : [
    {
      id: 'ord-past-1',
      orderNumber: 'ARO-719324',
      customerId: user?.id || 'demo-user-1',
      restaurantId: 'b0000003-0000-0000-0000-000000000003',
      restaurantNameSnapshot: 'Forno & Fig',
      restaurantAddressSnapshot: 'Financial District, Gachibowli, Hyderabad',
      status: 'delivered',
      placedAt: '2026-10-18T19:30:00Z',
      estimatedDeliveryAt: '2026-10-18T20:10:00Z',
      deliveryAddress: {
        label: 'Home',
        recipientName: user?.fullName || 'Sreeram K',
        recipientPhone: user?.phone || '+91 98765 01234',
        addressLine1: 'Villa 14, Whispering Palms',
        addressLine2: 'Road No. 36, Jubilee Hills',
        city: 'Hyderabad',
        pincode: '500033',
        latitude: 17.4325,
        longitude: 78.4072,
      },
      items: [
        {
          id: 'oi-past-1',
          menuItemId: 'mi-101',
          itemNameSnapshot: 'Handmade Black Truffle Tagliolini',
          itemPriceSnapshot: 1450,
          quantity: 2,
          totalPriceSnapshot: 2900,
          customizationDetailsSnapshot: [
            { groupName: 'Portion Size', optionName: 'Classic Degustation', priceSnapshot: 0 },
          ],
        },
      ],
      itemTotal: 2900,
      deliveryFee: 0,
      taxAmount: 145,
      discountAmount: 200,
      finalPaidAmount: 2845,
      paymentMethod: 'UPI',
      paymentStatus: 'PAID',
      timeline: [],
    },
  ]

  // Favorite restaurants
  const favoriteRestaurants = INITIAL_RESTAURANTS.filter((r) => favorites.includes(r.id))

  const handle1ClickReorder = (order: Order) => {
    const restaurant = INITIAL_RESTAURANTS.find((r) => r.id === order.restaurantId) || INITIAL_RESTAURANTS[0]
    
    let addedCount = 0
    order.items.forEach((itemSnapshot) => {
      let matchedMenuItem: MenuItem | undefined
      restaurant.categories?.forEach((cat) => {
        const found = cat.items.find((i) => i.id === itemSnapshot.menuItemId || i.name === itemSnapshot.itemNameSnapshot)
        if (found) matchedMenuItem = found
      })

      if (matchedMenuItem) {
        addToCart(matchedMenuItem, [], itemSnapshot.quantity)
        addedCount++
      }
    })

    setReorderNotice(`Added ${addedCount || order.items.length} items from ${order.restaurantNameSnapshot} to your basket.`)
    setTimeout(() => {
      setReorderNotice(null)
      navigate('/cart')
    }, 1200)
  }

  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAddressLine1.trim() || !newPincode.trim()) return

    const newAddr: Omit<CustomerAddress, 'id' | 'userId'> = {
      label: newLabel,
      recipientName: user?.fullName || 'Sreeram K',
      recipientPhone: user?.phone || '+91 98765 01234',
      addressLine1: newAddressLine1,
      addressLine2: newAddressLine2 || undefined,
      landmark: newLandmark || undefined,
      city: 'Hyderabad',
      pincode: newPincode,
      latitude: 17.4325,
      longitude: 78.4072,
      isDefault: false,
    }

    addAddress(newAddr)
    setShowAddAddressModal(false)
    setNewAddressLine1('')
    setNewAddressLine2('')
    setNewLandmark('')
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    setReviewSubmitted(true)
    setTimeout(() => {
      setReviewSubmitted(false)
      setReviewOrder(null)
      setReviewText('')
    }, 1800)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid selection:bg-[var(--dp-color-highlight)] selection:text-[var(--dp-color-ink)]">
      <StorefrontNavbar cartCount={cartItems.length > 0 ? 1 : 0} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider text-[var(--dp-color-ink-muted)]">
          <Link to="/home" className="hover:text-[var(--dp-color-ink)] transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]">
            Storefront
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[var(--dp-color-line)]" />
          <span className="text-[var(--dp-color-accent)] bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-line)] px-2 py-0.5 rounded shadow-[1px_1px_0px_var(--dp-color-line)]">
            Customer Account
          </span>
        </div>

        {reorderNotice && (
          <div className="p-4 rounded-xl bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] text-xs font-bold font-['Outfit',sans-serif] text-sm flex items-center gap-3 shadow-[2px_2px_0px_var(--dp-color-line)] animate-in fade-in">
            <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
            <span>{reorderNotice}</span>
          </div>
        )}

        {/* Profile Header Card */}
        <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 sm:p-8 relative shadow-[3px_3px_0px_rgba(56,53,47,0.12)]">
          <div className="absolute -top-3 right-8 hidden sm:block">
            <WashiTape text="VERIFIED GOURMET" angle="1deg" className="bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] font-['Caveat',cursive]" />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <img
                src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                alt={user?.fullName || 'Profile Avatar'}
                className="w-20 h-20 rounded-2xl object-cover border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_var(--dp-color-line)]"
              />
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] tracking-tight">
                    {user?.fullName || 'Sreeram K'}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-lg bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] font-bold text-xs uppercase font-['Outfit',sans-serif] tracking-wider shadow-[1px_1px_0px_var(--dp-color-line)]">
                    Epicure Privilege Tier
                  </span>
                </div>
                <p className="text-xs text-[var(--dp-color-ink-muted)] font-bold font-['Outfit',sans-serif] text-sm">
                  {user?.email || 'sreeram@example.com'} • <span className="font-mono">{user?.phone || '+91 98765 01234'}</span>
                </p>
                <div className="flex items-center gap-2 text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] text-sm">
                  <MapPin className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                  <span>Jubilee Hills, Hyderabad</span>
                  <span>•</span>
                  <span>Member since Oct 2026</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/restaurants"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_rgba(56,53,47,0.18)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
              >
                <span>Discover Food</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 mt-8 pt-6 border-t-[1.5px] border-[var(--dp-color-line)] overflow-x-auto pb-1">
            {[
              { id: 'orders', label: 'Order History', count: displayOrders.length },
              { id: 'addresses', label: 'Saved Addresses', count: addresses.length },
              { id: 'favorites', label: 'Favorite Ateliers', count: favoriteRestaurants.length },
              { id: 'profile', label: 'Profile & Security', count: null },
            ].map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`px-4 py-2.5 rounded-[var(--dp-radius-control)] text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border-[1.5px] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)] ${
                    isActive
                      ? 'bg-[var(--dp-color-accent)] text-white border-[var(--dp-color-ink)] shadow-[2px_2px_0px_rgba(56,53,47,0.18)] -translate-y-0.5'
                      : 'bg-[var(--dp-color-ground)] text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-scrap)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)]'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count !== null && (
                    <span
                      className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold border-[1.5px] ${
                        isActive ? 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-ink)]' : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)]'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab 1: Orders History */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                  Your Gastronomic Journey
                </h2>
                <div className="w-32 text-[var(--dp-color-accent)]">
                  <ScribbleUnderline />
                </div>
              </div>
              <span className="text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider text-[var(--dp-color-ink-muted)]">
                Showing past & active dispatches
              </span>
            </div>

            {displayOrders.map((ord) => {
              const isDelivered = ord.status === 'delivered'
              return (
                <div
                  key={ord.id}
                  className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 space-y-4 shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.10)] transition-all hover:-translate-y-0.5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                          {ord.restaurantNameSnapshot}
                        </span>
                        <span
                          className={`text-xs uppercase font-bold font-['Outfit',sans-serif] px-2.5 py-0.5 rounded-md border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] ${
                            isDelivered
                              ? 'bg-[var(--dp-color-highlight)]/40 text-[#059669]'
                              : 'bg-[var(--dp-color-highlight)] text-[var(--dp-color-accent)] animate-pulse'
                          }`}
                        >
                          {ord.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-xs font-['Outfit',sans-serif] text-[var(--dp-color-ink-muted)] mt-1 text-sm">
                        Order #{ord.orderNumber} • Placed on{' '}
                        {new Date(ord.placedAt).toLocaleDateString('en-IN', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {!isDelivered && (
                        <Link
                          to={`/orders/${ord.id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] text-white text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.18)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>Track Live GPS</span>
                        </Link>
                      )}

                      <button
                        type="button"
                        onClick={() => handle1ClickReorder(ord)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-highlight)]/40 hover:bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                        <span>Reorder 1-Click</span>
                      </button>

                      {isDelivered && (
                        <button
                          type="button"
                          onClick={() => setReviewOrder(ord)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] hover:bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                        >
                          <Star className="w-3.5 h-3.5 text-[var(--dp-color-accent)] fill-[var(--dp-color-accent)]" />
                          <span>Rate Tasting</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Itemized Line Items */}
                  <div className="space-y-2">
                    {ord.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-start justify-between text-xs py-1 text-[var(--dp-color-ink)]"
                      >
                        <div className="space-y-0.5">
                          <span className="font-bold font-['Outfit',sans-serif] text-sm">
                            {item.quantity}× {item.itemNameSnapshot}
                          </span>
                          {item.customizationDetailsSnapshot &&
                            item.customizationDetailsSnapshot.length > 0 && (
                              <div className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] pl-4">
                                {item.customizationDetailsSnapshot.map((c) => c.optionName).join(', ')}
                              </div>
                            )}
                        </div>
                        <span className="font-mono font-bold text-[var(--dp-color-ink)]">
                          {formatCurrency(item.totalPriceSnapshot, 'INR')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Summary Bar */}
                  <div className="pt-3 border-t-[1.5px] border-[var(--dp-color-line)]/50 flex flex-wrap items-center justify-between text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[var(--dp-color-accent)]" />
                      <span>Delivered to {ord.deliveryAddress.label} ({ord.deliveryAddress.addressLine1})</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-bold">Total Paid:</span>
                      <span className="text-base font-bold font-mono text-[var(--dp-color-accent)]">
                        {formatCurrency(ord.finalPaidAmount, 'INR')}
                      </span>
                      <span className="text-xs font-bold font-['Outfit',sans-serif] px-2 py-0.5 rounded bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] text-[var(--dp-color-ink)]">
                        {ord.paymentMethod}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Tab 2: Saved Addresses */}
        {activeTab === 'addresses' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                  Saved Delivery Coordinates
                </h2>
                <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Locations for thermal delivery dispatch</p>
              </div>

              <button
                type="button"
                onClick={() => setShowAddAddressModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_rgba(56,53,47,0.18)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
              >
                <Plus className="w-4 h-4" />
                <span>Add Coordinate</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-5 space-y-3 relative shadow-[2px_2px_0px_rgba(56,53,47,0.10)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center justify-center font-bold text-xs">
                        <MapPin className="w-4 h-4 text-[var(--dp-color-accent)]" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                        {addr.label}
                      </span>
                    </div>
                    {addr.isDefault && (
                      <span className="text-xs bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-line)] text-[#059669] px-2 py-0.5 rounded-md font-bold font-['Outfit',sans-serif] shadow-[1px_1px_0px_var(--dp-color-line)]">
                        Default Coordinate
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] text-sm">
                    <div className="font-bold text-[var(--dp-color-ink)]">
                      {addr.recipientName} • <span className="font-mono">{addr.recipientPhone}</span>
                    </div>
                    <p className="leading-relaxed">
                      {addr.addressLine1}
                      {addr.addressLine2 ? `, ${addr.addressLine2}` : ''}
                      {addr.landmark ? ` (Landmark: ${addr.landmark})` : ''}
                    </p>
                    <p className="font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                      {addr.city} - {addr.pincode}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Add Address Modal Inline */}
            {showAddAddressModal && (
              <form
                onSubmit={handleAddNewAddress}
                className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 space-y-4 max-w-xl mx-auto shadow-[3px_3px_0px_rgba(56,53,47,0.12)] animate-in fade-in"
              >
                <div className="flex items-center justify-between border-b-[1.5px] border-[var(--dp-color-line)] pb-3">
                  <h3 className="text-sm font-bold uppercase text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                    Add New Hyderabad Coordinate
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowAddAddressModal(false)}
                    className="text-xs font-bold text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] px-2 py-0.5 border-[1.5px] border-[var(--dp-color-line)] rounded bg-[var(--dp-color-ground)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                  >
                    ✕ Close
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {(['Home', 'Work', 'Other'] as const).map((lbl) => (
                    <button
                      key={lbl}
                      type="button"
                      onClick={() => setNewLabel(lbl)}
                      className={`py-2 text-xs rounded-xl font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-line)] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)] ${
                        newLabel === lbl
                          ? 'bg-[var(--dp-color-accent)] text-white shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.18)]'
                          : 'bg-[var(--dp-color-ground)] text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)]'
                      }`}
                    >
                      {lbl}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                    Street Address / Flat / Floor *
                  </label>
                  <input
                    type="text"
                    required
                    value={newAddressLine1}
                    onChange={(e) => setNewAddressLine1(e.target.value)}
                    placeholder="e.g. Villa 14, Whispering Palms, Road No. 36"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                      Landmark
                    </label>
                    <input
                      type="text"
                      value={newLandmark}
                      onChange={(e) => setNewLandmark(e.target.value)}
                      placeholder="e.g. Near Peddamma Temple"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={newPincode}
                      onChange={(e) => setNewPincode(e.target.value)}
                      placeholder="500033"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_rgba(56,53,47,0.18)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                >
                  Save Address Coordinate
                </button>
              </form>
            )}
          </div>
        )}

        {/* Tab 3: Saved Favorites */}
        {activeTab === 'favorites' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                Curated Favorite Ateliers
              </h2>
              <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Quick access to your preferred gastronomic kitchens</p>
            </div>

            {favoriteRestaurants.length === 0 ? (
              <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-12 text-center space-y-4 shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.10)]">
                <Heart className="w-12 h-12 text-[var(--dp-color-accent)] mx-auto" />
                <h3 className="text-lg font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">No Saved Favorites Yet</h3>
                <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] max-w-sm mx-auto font-['Outfit',sans-serif]">
                  Click the heart icon on any restaurant or dish to pin them to your personal tasting cellar.
                </p>
                <Link
                  to="/restaurants"
                  className="inline-flex px-5 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] text-white text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_rgba(56,53,47,0.18)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                >
                  Explore Restaurants
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favoriteRestaurants.map((res) => (
                  <div
                    key={res.id}
                    className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl overflow-hidden shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.10)] flex flex-col sm:flex-row hover:-translate-y-0.5 transition-all"
                  >
                    <img
                      src={res.coverImage}
                      alt={res.name}
                      className="w-full sm:w-44 h-40 sm:h-auto object-cover border-b-[1.5px] sm:border-b-0 sm:border-r-[1.5px] border-[var(--dp-color-line)]"
                    />
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                            {res.name}
                          </h4>
                          <span className="text-xs font-bold text-[var(--dp-color-ink)] bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-line)] px-2 py-0.5 rounded shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center gap-1 font-['Outfit',sans-serif]">
                            <Star className="w-3.5 h-3.5 fill-[var(--dp-color-ink)]" />
                            {res.rating}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mt-1 line-clamp-1">{res.tagline}</p>
                        <div className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mt-2 flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                          <span>{res.addressLine}</span>
                          <span>•</span>
                          <span>{res.deliveryTimeEstimateMin} mins</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t-[1.5px] border-[var(--dp-color-line)]/50">
                        <button
                          type="button"
                          onClick={() => toggleFavorite(res.id)}
                          className="text-xs font-bold text-[var(--dp-color-accent)] hover:underline flex items-center gap-1 cursor-pointer font-['Outfit',sans-serif] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                        >
                          <Heart className="w-3.5 h-3.5 fill-[var(--dp-color-accent)]" />
                          <span>Remove</span>
                        </button>

                        <Link
                          to={`/restaurants/${res.slug}`}
                          className="px-3.5 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.18)] transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                        >
                          View Menu →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: Profile & Security */}
        {activeTab === 'profile' && (
          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 sm:p-8 space-y-6 max-w-2xl shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.10)]">
            <div className="border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
              <h2 className="text-xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                Account & Security Profile
              </h2>
              <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Managed via ARO customer identity directory</p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  readOnly
                  value={user?.fullName || 'Sreeram K'}
                  className="w-full px-3 py-2.5 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] font-bold shadow-[1px_1px_0px_var(--dp-color-line)]"
                />
              </div>

              <div>
                <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                  Registered Email Address
                </label>
                <input
                  type="email"
                  readOnly
                  value={user?.email || 'sreeram@example.com'}
                  className="w-full px-3 py-2.5 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] font-bold shadow-[1px_1px_0px_var(--dp-color-line)]"
                />
              </div>

              <div>
                <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                  Primary Mobile Phone
                </label>
                <input
                  type="text"
                  readOnly
                  value={user?.phone || '+91 98765 01234'}
                  className="w-full px-3 py-2.5 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] font-bold font-mono shadow-[1px_1px_0px_var(--dp-color-line)]"
                />
              </div>

              <div className="p-4 rounded-xl bg-[var(--dp-color-highlight)]/30 border-[1.5px] border-[var(--dp-color-line)] flex items-center justify-between shadow-[1.5px_1.5px_0px_var(--dp-color-line)]">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-[#059669] shrink-0" />
                  <div>
                    <span className="font-bold text-[var(--dp-color-ink)] block font-['Outfit',sans-serif]">Two-Factor Authentication</span>
                    <span className="text-[#059669] text-xs font-['Outfit',sans-serif]">SMS OTP verification active for Hyderabad dispatches</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[#059669] font-bold text-xs font-['Outfit',sans-serif] shadow-[1px_1px_0px_var(--dp-color-line)]">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Review Modal */}
        {reviewOrder && (
          <div className="fixed inset-0 z-50 bg-[#38352f]/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 max-w-md w-full space-y-5 shadow-[4px_4px_0px_rgba(56,53,47,0.20)] animate-in zoom-in-95">
              <div className="flex items-center justify-between border-b-[1.5px] border-[var(--dp-color-line)] pb-3">
                <h3 className="text-lg font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                  Review Tasting Experience
                </h3>
                <button
                  type="button"
                  onClick={() => setReviewOrder(null)}
                  className="text-xs font-bold text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] px-2 py-0.5 border-[1.5px] border-[var(--dp-color-line)] rounded bg-[var(--dp-color-ground)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                >
                  ✕ Close
                </button>
              </div>

              {reviewSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#059669] mx-auto" />
                  <h4 className="text-base font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">Review Submitted!</h4>
                  <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Thank you for your feedback for {reviewOrder.restaurantNameSnapshot}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                    How was your meal from <strong className="text-[var(--dp-color-ink)] font-bold">{reviewOrder.restaurantNameSnapshot}</strong>?
                  </p>

                  <div className="flex items-center justify-center gap-2 py-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 cursor-pointer transition-transform hover:scale-110 focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= rating
                              ? 'text-[var(--dp-color-accent)] fill-[var(--dp-color-accent)]'
                              : 'text-[var(--dp-color-line)]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                      Chef Notes & Tasting Comments
                    </label>
                    <textarea
                      rows={3}
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="The sauce reduction was sublime, arrived at perfect serving temperature..."
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_rgba(56,53,47,0.18)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <StorefrontFooter />
    </div>
  )
}

export default AccountPage
