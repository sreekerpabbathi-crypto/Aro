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
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { INITIAL_RESTAURANTS } from '@/services/catalogService'
import { formatCurrency } from '@/lib/utils'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
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
  const [newPincode, setNewPincode] = useState('560038')

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
    // Find restaurant in catalog
    const restaurant = INITIAL_RESTAURANTS.find((r) => r.id === order.restaurantId) || INITIAL_RESTAURANTS[0]
    
    // Attempt to add matching items to cart
    let addedCount = 0
    order.items.forEach((itemSnapshot) => {
      // Find item in restaurant categories
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
    <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
      <StorefrontNavbar cartCount={cartItems.length > 0 ? 1 : 0} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#A89A97]">
          <Link to="/home" className="hover:text-white transition-colors">
            Storefront
          </Link>
          <ChevronRight className="w-3 h-3 text-[#4D3F3C]" />
          <span className="text-[#FF650D] font-semibold">Customer Account</span>
        </div>

        {reorderNotice && (
          <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-3 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{reorderNotice}</span>
          </div>
        )}

        {/* Profile Header Card */}
        <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#641820]/30 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                alt={user?.fullName || 'Profile Avatar'}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#FF650D] shadow-xl"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                    {user?.fullName || 'Sreeram K'}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#FF650D]/20 border border-[#FF650D]/40 text-[#FF650D] font-bold text-[10px] uppercase font-['Oswald'] tracking-wider">
                    Epicure Privilege Tier
                  </span>
                </div>
                <p className="text-xs text-[#A89A97]">
                  {user?.email || 'sreeram@example.com'} • {user?.phone || '+91 98765 01234'}
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#A89A97] pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#FF650D]" />
                  <span>Hyderabad, India</span>
                  <span>•</span>
                  <span>Member since Oct 2026</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/restaurants"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold transition-colors cursor-pointer shadow-lg shadow-[#FF650D]/20"
              >
                <span>Discover Food</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 mt-8 pt-6 border-t border-[#4D3F3C]/60 overflow-x-auto">
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
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#641820] text-white border border-[#FF650D]/60 shadow-md'
                      : 'text-[#A89A97] hover:text-white hover:bg-[#211A19]'
                  }`}
                >
                  <span>{tab.label}</span>
                  {tab.count !== null && (
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                        isActive ? 'bg-[#FF650D] text-white' : 'bg-[#211A19] text-[#A89A97]'
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
              <h2 className="text-lg font-bold text-white font-['Outfit']">
                Your Gastronomic Journey
              </h2>
              <span className="text-xs text-[#A89A97]">Showing past & active dispatches</span>
            </div>

            {displayOrders.map((ord) => {
              const isDelivered = ord.status === 'delivered'
              return (
                <div
                  key={ord.id}
                  className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-6 space-y-4 hover:border-[#6B5A57] transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#4D3F3C]/60 pb-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="text-base font-bold text-white font-['Outfit']">
                          {ord.restaurantNameSnapshot}
                        </span>
                        <span
                          className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                            isDelivered
                              ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-400'
                              : 'bg-[#FF650D]/20 border border-[#FF650D]/40 text-[#FF650D] animate-pulse'
                          }`}
                        >
                          {ord.status.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-xs text-[#A89A97] mt-0.5">
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

                    <div className="flex items-center gap-2">
                      {!isDelivered && (
                        <Link
                          to={`/orders/${ord.id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF650D] text-white text-xs font-bold hover:bg-[#E55400] transition-colors"
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>Track Live GPS</span>
                        </Link>
                      )}

                      <button
                        type="button"
                        onClick={() => handle1ClickReorder(ord)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#211A19] hover:bg-[#3D302E] border border-[#4D3F3C] text-white text-xs font-bold transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5 text-[#FF650D]" />
                        <span>Reorder 1-Click</span>
                      </button>

                      {isDelivered && (
                        <button
                          type="button"
                          onClick={() => setReviewOrder(ord)}
                          className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#211A19] hover:bg-[#3D302E] border border-[#4D3F3C] text-[#A89A97] hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <Star className="w-3.5 h-3.5 text-amber-400" />
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
                        className="flex items-start justify-between text-xs py-1 text-[#FFF0D5]/90"
                      >
                        <div className="space-y-0.5">
                          <span className="font-medium">
                            {item.quantity}× {item.itemNameSnapshot}
                          </span>
                          {item.customizationDetailsSnapshot &&
                            item.customizationDetailsSnapshot.length > 0 && (
                              <div className="text-[11px] text-[#A89A97]">
                                {item.customizationDetailsSnapshot.map((c) => c.optionName).join(', ')}
                              </div>
                            )}
                        </div>
                        <span className="font-mono text-white">
                          {formatCurrency(item.totalPriceSnapshot, 'INR')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Summary Bar */}
                  <div className="pt-3 border-t border-[#4D3F3C]/40 flex flex-wrap items-center justify-between text-xs text-[#A89A97]">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#FF650D]" />
                      <span>Delivered to {ord.deliveryAddress.label} ({ord.deliveryAddress.addressLine1})</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span>Total Paid:</span>
                      <span className="text-sm font-bold font-mono text-white">
                        {formatCurrency(ord.finalPaidAmount, 'INR')}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#211A19] border border-[#4D3F3C]">
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
                <h2 className="text-lg font-bold text-white font-['Outfit']">
                  Saved Delivery Coordinates
                </h2>
                <p className="text-xs text-[#A89A97]">Locations for thermal delivery dispatch</p>
              </div>

              <button
                type="button"
                onClick={() => setShowAddAddressModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Coordinate</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addresses.map((addr) => (
                <div
                  key={addr.id}
                  className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-5 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FF650D]/20 text-[#FF650D] flex items-center justify-center font-bold text-xs">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        {addr.label}
                      </span>
                    </div>
                    {addr.isDefault && (
                      <span className="text-[10px] bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 px-2 py-0.5 rounded-full font-bold">
                        Default Coordinate
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 text-xs text-[#A89A97]">
                    <div className="font-semibold text-white">
                      {addr.recipientName} • {addr.recipientPhone}
                    </div>
                    <p className="leading-relaxed">
                      {addr.addressLine1}
                      {addr.addressLine2 ? `, ${addr.addressLine2}` : ''}
                      {addr.landmark ? ` (Landmark: ${addr.landmark})` : ''}
                    </p>
                    <p>
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
                className="bg-[#2E2423] border border-[#FF650D] rounded-2xl p-6 space-y-4 max-w-xl mx-auto animate-in fade-in"
              >
                <div className="flex items-center justify-between border-b border-[#4D3F3C] pb-3">
                  <h3 className="text-sm font-bold uppercase text-white font-['Outfit']">
                    Add New Delivery Address
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowAddAddressModal(false)}
                    className="text-xs text-[#A89A97] hover:text-white"
                  >
                    ✕ Cancel
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {(['Home', 'Work', 'Other'] as const).map((lbl) => (
                    <button
                      key={lbl}
                      type="button"
                      onClick={() => setNewLabel(lbl)}
                      className={`py-2 text-xs rounded-xl font-semibold transition-colors ${
                        newLabel === lbl
                          ? 'bg-[#FF650D] text-white'
                          : 'bg-[#211A19] text-[#A89A97] hover:text-white'
                      }`}
                    >
                      {lbl}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                    Street Address / Flat / Floor *
                  </label>
                  <input
                    type="text"
                    required
                    value={newAddressLine1}
                    onChange={(e) => setNewAddressLine1(e.target.value)}
                    placeholder="e.g. 504 Tower C, Prestige Kingfisher Towers"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#211A19] border border-[#4D3F3C] text-white focus:outline-none focus:border-[#FF650D]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                      Landmark
                    </label>
                    <input
                      type="text"
                      value={newLandmark}
                      onChange={(e) => setNewLandmark(e.target.value)}
                      placeholder="e.g. Near Peddamma Temple"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[#211A19] border border-[#4D3F3C] text-white focus:outline-none focus:border-[#FF650D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                      PIN Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={newPincode}
                      onChange={(e) => setNewPincode(e.target.value)}
                      placeholder="500033"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[#211A19] border border-[#4D3F3C] text-white focus:outline-none focus:border-[#FF650D]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold transition-colors cursor-pointer"
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
              <h2 className="text-lg font-bold text-white font-['Outfit']">
                Curated Favorite Ateliers
              </h2>
              <p className="text-xs text-[#A89A97]">Quick access to your preferred gastronomic kitchens</p>
            </div>

            {favoriteRestaurants.length === 0 ? (
              <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-12 text-center space-y-4">
                <Heart className="w-12 h-12 text-[#FF650D] mx-auto" />
                <h3 className="text-base font-bold text-white font-['Outfit']">No Saved Favorites Yet</h3>
                <p className="text-xs text-[#A89A97] max-w-sm mx-auto">
                  Click the heart icon on any restaurant or dish to pin them to your personal tasting cellar.
                </p>
                <Link
                  to="/restaurants"
                  className="inline-flex px-5 py-2.5 rounded-xl bg-[#FF650D] text-white text-xs font-bold"
                >
                  Explore Restaurants
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {favoriteRestaurants.map((res) => (
                  <div
                    key={res.id}
                    className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl overflow-hidden hover:border-[#6B5A57] transition-all flex flex-col sm:flex-row"
                  >
                    <img
                      src={res.coverImage}
                      alt={res.name}
                      className="w-full sm:w-44 h-40 sm:h-auto object-cover"
                    />
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white font-['Outfit']">
                            {res.name}
                          </h4>
                          <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 fill-amber-400" />
                            {res.rating}
                          </span>
                        </div>
                        <p className="text-xs text-[#A89A97] mt-1 line-clamp-1">{res.tagline}</p>
                        <div className="text-[11px] text-[#A89A97] mt-2 flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[#FF650D]" />
                          <span>{res.addressLine}</span>
                          <span>•</span>
                          <span>{res.deliveryTimeEstimateMin} mins</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-[#4D3F3C]/60">
                        <button
                          type="button"
                          onClick={() => toggleFavorite(res.id)}
                          className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 cursor-pointer"
                        >
                          <Heart className="w-3.5 h-3.5 fill-rose-400" />
                          <span>Remove</span>
                        </button>

                        <Link
                          to={`/restaurants/${res.slug}`}
                          className="px-3.5 py-1.5 rounded-lg bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold transition-colors"
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
          <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-6 sm:p-8 space-y-6 max-w-2xl">
            <div className="border-b border-[#4D3F3C] pb-4">
              <h2 className="text-lg font-bold text-white font-['Outfit']">
                Account & Security Profile
              </h2>
              <p className="text-xs text-[#A89A97]">Managed via ARO customer identity directory</p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                  Full Legal Name
                </label>
                <input
                  type="text"
                  readOnly
                  value={user?.fullName || 'Sreeram K'}
                  className="w-full px-3 py-2 rounded-xl bg-[#211A19] border border-[#4D3F3C] text-white font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                  Registered Email Address
                </label>
                <input
                  type="email"
                  readOnly
                  value={user?.email || 'sreeram@example.com'}
                  className="w-full px-3 py-2 rounded-xl bg-[#211A19] border border-[#4D3F3C] text-white font-medium"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                  Primary Mobile Phone
                </label>
                <input
                  type="text"
                  readOnly
                  value={user?.phone || '+91 98765 01234'}
                  className="w-full px-3 py-2 rounded-xl bg-[#211A19] border border-[#4D3F3C] text-white font-medium"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#211A19] border border-[#4D3F3C] flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">Two-Factor Authentication</span>
                  <span className="text-[#A89A97] text-[11px]">SMS OTP verification active</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold text-[10px]">
                  ACTIVE
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Review Modal */}
        {reviewOrder && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-[#2E2423] border border-[#FF650D] rounded-2xl p-6 max-w-md w-full space-y-5 animate-in zoom-in-95">
              <div className="flex items-center justify-between border-b border-[#4D3F3C] pb-3">
                <h3 className="text-base font-bold text-white font-['Outfit']">
                  Review Tasting Experience
                </h3>
                <button
                  type="button"
                  onClick={() => setReviewOrder(null)}
                  className="text-xs text-[#A89A97] hover:text-white"
                >
                  ✕
                </button>
              </div>

              {reviewSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Review Submitted!</h4>
                  <p className="text-xs text-[#A89A97]">Thank you for your feedback for {reviewOrder.restaurantNameSnapshot}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <p className="text-xs text-[#A89A97]">
                    How was your meal from <strong className="text-white">{reviewOrder.restaurantNameSnapshot}</strong>?
                  </p>

                  <div className="flex items-center justify-center gap-2 py-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 cursor-pointer transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-7 h-7 ${
                            star <= rating
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-[#4D3F3C]'
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                      Chef Notes & Tasting Comments
                    </label>
                    <textarea
                      rows={3}
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="The sauce reduction was sublime, arrived at perfect serving temperature..."
                      className="w-full px-3 py-2 text-xs rounded-xl bg-[#211A19] border border-[#4D3F3C] text-white focus:outline-none focus:border-[#FF650D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold transition-colors cursor-pointer"
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
