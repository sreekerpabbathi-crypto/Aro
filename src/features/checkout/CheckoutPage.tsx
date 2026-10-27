import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  MapPin,
  Clock,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Banknote,
  Building,
  CheckCircle2,
  AlertCircle,
  Plus,
  ArrowRight,
  ChevronRight,
  Info,
} from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { formatCurrency } from '@/lib/utils'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
import { Button } from '@/components/common/Button'
import { ScribbleUnderline, WashiTape } from '@/components/sketch/SketchDoodles'
import type { Order, CustomerAddress } from '@/types'

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate()
  const { items, activeRestaurant, totals, clearCart } = useCart()
  const { user, addresses, addAddress, saveOrder, isAuthLoading } = useAuth()

  // Route Guard: Guests attempting checkout are redirected to /auth?redirect=/checkout
  React.useEffect(() => {
    if (!isAuthLoading && !user) {
      navigate('/auth?redirect=/checkout', { replace: true })
    }
  }, [user, isAuthLoading, navigate])

  // Selected delivery address
  const [selectedAddressId, setSelectedAddressId] = useState<string>(
    addresses[0]?.id || 'addr-1'
  )

  // New address modal state
  const [showAddAddressModal, setShowAddAddressModal] = useState(false)
  const [newLabel, setNewLabel] = useState<'Home' | 'Work' | 'Other'>('Home')
  const [newAddressLine1, setNewAddressLine1] = useState('')
  const [newAddressLine2, setNewAddressLine2] = useState('')
  const [newLandmark, setNewLandmark] = useState('')
  const [newPincode, setNewPincode] = useState('500033')
  const [addressFormError, setAddressFormError] = useState('')

  // Cooking and delivery instructions
  const [deliveryNote, setDeliveryNote] = useState('')
  const [contactless, setContactless] = useState(false)
  const [cutleryOptIn, setCutleryOptIn] = useState(false)

  // Payment method simulation
  type PaymentMethod = 'UPI' | 'CARD' | 'NET_BANKING' | 'CASH_ON_DELIVERY'
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('UPI')
  const [upiId, setUpiId] = useState(() => (user?.email ? `${user.email.split('@')[0]}@okhdfcbank` : 'patron@okhdfcbank'))
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8821')
  const [selectedBank, setSelectedBank] = useState('HDFC Bank')

  // Submitting state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorNotice, setErrorNotice] = useState<string | null>(null)

  // If verifying authentication session
  if (isAuthLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid">
        <StorefrontNavbar cartCount={items.length} />
        <main className="flex-1 max-w-lg mx-auto px-4 py-24 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-[var(--dp-color-accent)] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-bold text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
              Verifying Patron Checkout Session...
            </span>
          </div>
        </main>
        <StorefrontFooter />
      </div>
    )
  }

  if (!user) {
    return null
  }

  // If cart is empty, redirect back
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid">
        <StorefrontNavbar cartCount={0} />
        <main className="flex-1 max-w-lg mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-20 h-20 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.14)] flex items-center justify-center text-[var(--dp-color-accent)]">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">Your Basket is Empty</h1>
          <p className="text-sm sm:text-base text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] leading-relaxed max-w-md">
            Please select items from our curated Hyderabad kitchens before proceeding to checkout.
          </p>
          <Link
            to="/restaurants"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] text-white text-sm font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.18)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.18)] transition-all focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
          >
            Explore Kitchens & Menus →
          </Link>
        </main>
        <StorefrontFooter />
      </div>
    )
  }

  const selectedAddress = addresses.find((a) => a.id === selectedAddressId) || addresses[0]

  const handleAddNewAddress = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newAddressLine1.trim() || !newPincode.trim()) {
      setAddressFormError('Please enter street address and PIN code.')
      return
    }

    const newAddr: Omit<CustomerAddress, 'id' | 'userId'> = {
      label: newLabel,
      recipientName: user?.fullName || 'Patron',
      recipientPhone: user?.phone || '',
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
    setAddressFormError('')
  }

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      setErrorNotice('Please select or add a delivery address to proceed.')
      return
    }

    setIsSubmitting(true)
    setErrorNotice(null)

    // Simulate order placement processing
    setTimeout(() => {
      const orderId = `ord-${Date.now()}`
      const orderNumber = `ARO-${Math.floor(100000 + Math.random() * 900000)}`
      const now = new Date().toISOString()
      const estimatedTime = new Date(Date.now() + 35 * 60 * 1000).toISOString()

      // Create full order snapshot compliant with 3NF database schema
      const newOrder: Order = {
        id: orderId,
        orderNumber,
        customerId: user?.id || 'demo-user-1',
        restaurantId: activeRestaurant?.id || 'b0000001-0000-0000-0000-000000000001',
        restaurantNameSnapshot: activeRestaurant?.name || 'Aro Partner Kitchen',
        restaurantAddressSnapshot:
          activeRestaurant?.addressLine || 'Road No. 36, Jubilee Hills, Hyderabad',
        status: 'placed',
        placedAt: now,
        estimatedDeliveryAt: estimatedTime,
        deliveryAddress: {
          label: selectedAddress.label,
          recipientName: selectedAddress.recipientName,
          recipientPhone: selectedAddress.recipientPhone,
          addressLine1: selectedAddress.addressLine1,
          addressLine2: selectedAddress.addressLine2,
          landmark: selectedAddress.landmark,
          city: selectedAddress.city,
          pincode: selectedAddress.pincode,
          latitude: selectedAddress.latitude,
          longitude: selectedAddress.longitude,
        },
        items: items.map((cartItem) => ({
          id: `oi-${cartItem.id}`,
          menuItemId: cartItem.menuItem.id,
          itemNameSnapshot: cartItem.menuItem.name,
          itemPriceSnapshot: cartItem.menuItem.price,
          quantity: cartItem.quantity,
          totalPriceSnapshot: cartItem.unitPrice * cartItem.quantity,
          customizationDetailsSnapshot: cartItem.selectedCustomizations.map((c) => ({
            groupName: c.groupName,
            optionName: c.option.name,
            priceSnapshot: c.option.additionalPrice,
          })),
        })),
        itemTotal: totals.itemTotal,
        deliveryFee: totals.deliveryFee,
        taxAmount: totals.taxesAndCharges,
        discountAmount: totals.discountAmount,
        finalPaidAmount: totals.finalPayable,
        paymentMethod: paymentMethod,
        paymentStatus: paymentMethod === 'CASH_ON_DELIVERY' ? 'PENDING' : 'PAID',
        rider: {
          name: 'Vikram Sharma',
          phone: '+91 98450 78219',
          vehicleModel: 'Ather 450X Electric Scooter',
          vehicleNumber: 'TS 09 EQ 4210',
          avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
          currentLatitude: 17.4325,
          currentLongitude: 78.4072,
        },
        timeline: [
          {
            status: 'placed',
            title: 'Order Placed & Transmitted',
            description: 'Order logged and received by kitchen POS dispatch system.',
            timestamp: now,
            isCompleted: true,
          },
          {
            status: 'confirmed',
            title: 'Confirmed by Atelier',
            description: 'Chef acknowledged recipe queue and assigned prep station.',
            timestamp: new Date(Date.now() + 2 * 60 * 1000).toISOString(),
            isCompleted: false,
          },
          {
            status: 'kitchen_preparing',
            title: 'Artisanal Preparation',
            description: 'Sous chef plating and assembling courses in heat-sealed containers.',
            timestamp: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
            isCompleted: false,
          },
          {
            status: 'rider_assigned',
            title: 'Dedicated Courier Assigned',
            description: 'Vikram Sharma dispatched with thermal-controlled delivery pod.',
            timestamp: new Date(Date.now() + 18 * 60 * 1000).toISOString(),
            isCompleted: false,
          },
          {
            status: 'out_for_delivery',
            title: 'Dispatched for Delivery',
            description: 'Courier en route via Road No. 36, Jubilee Hills with GPS telematics active.',
            timestamp: new Date(Date.now() + 25 * 60 * 1000).toISOString(),
            isCompleted: false,
          },
          {
            status: 'delivered',
            title: 'Handover Completed',
            description: 'Dining-room temperature preserved. Enjoy your meal.',
            timestamp: estimatedTime,
            isCompleted: false,
          },
        ],
      }

      saveOrder(newOrder)
      clearCart()
      setIsSubmitting(false)
      navigate(`/orders/${orderId}`)
    }, 1200)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid">
      <StorefrontNavbar cartCount={totals.itemTotal > 0 ? 1 : 0} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider text-[var(--dp-color-ink-muted)]">
          <Link to="/home" className="hover:text-[var(--dp-color-ink)] transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]">
            Storefront
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[var(--dp-color-line)]" />
          <Link to="/cart" className="hover:text-[var(--dp-color-ink)] transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]">
            Basket
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[var(--dp-color-line)]" />
          <span className="text-[var(--dp-color-accent)] bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-line)] px-2 py-0.5 rounded shadow-[1px_1px_0px_var(--dp-color-line)]">
            Checkout & Coordinates
          </span>
        </div>

        {/* Header with Hand-Drawn Sketch Accent */}
        <div className="relative">
          <div className="inline-block relative">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] tracking-tight">
              Finalize Your Order
            </h1>
            <div className="w-48 text-[var(--dp-color-accent)] mt-1">
              <ScribbleUnderline />
            </div>
          </div>
          <p className="text-sm sm:text-base font-['Outfit',sans-serif] text-[var(--dp-color-ink-muted)] mt-2">
            Confirm your destination in Hyderabad and verify delivery instructions.
          </p>
        </div>

        {/* Demo Simulation Warning Notice */}
        <div className="relative bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-5 shadow-[2px_2px_0px_rgba(56,53,47,0.10)] flex items-start gap-4">
          <div className="absolute -top-3 right-6 hidden sm:block">
            <WashiTape text="SIMULATED" angle="-2deg" className="bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] font-['Caveat',cursive]" />
          </div>
          <div className="w-10 h-10 rounded-xl bg-[var(--dp-color-highlight)]/50 text-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-base font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                Interactive Educational & Portfolio Simulation
              </h4>
              <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] font-['Outfit',sans-serif]">
                Zero Financial Charge
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] leading-relaxed">
              This checkout flow is a working database-backed simulation. No real money or payment
              credentials will be billed. Clicking <strong>Complete & Place Order</strong> will
              record a 3NF relational transaction and open the live road-following telematics tracking map.
            </p>
          </div>
        </div>

        {errorNotice && (
          <div className="p-4 rounded-xl bg-[var(--dp-color-accent)]/10 border-[1.5px] border-[var(--dp-color-accent)] text-[var(--dp-color-accent)] text-xs font-bold font-['Outfit',sans-serif] flex items-center gap-3 shadow-[2px_2px_0px_rgba(158,58,46,0.15)]">
            <AlertCircle className="w-5 h-5 text-[var(--dp-color-accent)] shrink-0" />
            <span>{errorNotice}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Preferences, Payment */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Delivery Address Section */}
            <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.10)] space-y-5">
              <div className="flex items-center justify-between border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center justify-center font-bold font-['Outfit',sans-serif] text-sm">
                    1
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                      Delivery Address
                    </h2>
                    <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                      Select or add your destination coordinate in Hyderabad
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAddAddressModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] hover:bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] cursor-pointer transition-all hover:translate-x-[1px] hover:translate-y-[1px] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                >
                  <Plus className="w-4 h-4 text-[var(--dp-color-accent)]" />
                  <span>Add New</span>
                </button>
              </div>

              {/* Address Radio Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addresses.map((addr) => {
                  const isSelected = selectedAddressId === addr.id
                  return (
                    <div
                      key={addr.id}
                      onClick={() => setSelectedAddressId(addr.id)}
                      className={`relative p-4 rounded-xl border-[1.5px] cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[var(--dp-color-highlight)]/40 border-[var(--dp-color-ink)] shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.18)] -translate-y-0.5'
                          : 'bg-[var(--dp-color-ground)] hover:bg-[var(--dp-color-scrap)] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:shadow-[2px_2px_0px_var(--dp-color-line)]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin
                            className={`w-4 h-4 ${isSelected ? 'text-[var(--dp-color-accent)]' : 'text-[var(--dp-color-ink-muted)]'}`}
                          />
                          <span className="text-xs font-bold uppercase tracking-wider font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">
                            {addr.label}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#10B981] border-[1.5px] border-[var(--dp-color-ink)] text-white flex items-center justify-center shadow-[1px_1px_0px_rgba(56,53,47,0.15)]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>

                      <div className="mt-2 text-xs text-[var(--dp-color-ink)] font-bold">
                        {addr.recipientName} • <span className="font-mono text-[11px]">{addr.recipientPhone}</span>
                      </div>

                      <p className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] leading-relaxed mt-1 line-clamp-2">
                        {addr.addressLine1}
                        {addr.addressLine2 ? `, ${addr.addressLine2}` : ''}, {addr.city} -{' '}
                        {addr.pincode}
                      </p>
                    </div>
                  )
                })}
              </div>

              {/* Add Address Modal Inline Form */}
              {showAddAddressModal && (
                <form
                  onSubmit={handleAddNewAddress}
                  className="bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl p-5 space-y-4 shadow-[2px_2px_0px_var(--dp-color-line)] animate-in fade-in"
                >
                  <div className="flex items-center justify-between border-b-[1.5px] border-[var(--dp-color-line)] pb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                      Add New Hyderabad Address
                    </h4>
                    <button
                      type="button"
                      onClick={() => setShowAddAddressModal(false)}
                      className="text-xs font-bold text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] px-2 py-0.5 border-[1.5px] border-[var(--dp-color-line)] rounded bg-[var(--dp-color-scrap)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                    >
                      ✕ Close
                    </button>
                  </div>

                  {addressFormError && (
                    <p className="text-xs text-[var(--dp-color-accent)] font-bold">{addressFormError}</p>
                  )}

                  <div className="grid grid-cols-3 gap-2">
                    {(['Home', 'Work', 'Other'] as const).map((lbl) => (
                      <button
                        key={lbl}
                        type="button"
                        onClick={() => setNewLabel(lbl)}
                        className={`py-1.5 text-xs rounded-lg font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-line)] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)] ${
                          newLabel === lbl
                            ? 'bg-[var(--dp-color-accent)] text-white shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.18)]'
                            : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)]'
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
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                        Landmark / Area
                      </label>
                      <input
                        type="text"
                        value={newLandmark}
                        onChange={(e) => setNewLandmark(e.target.value)}
                        placeholder="e.g. Near Peddamma Temple"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
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
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_rgba(56,53,47,0.18)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                  >
                    Save Address & Use
                  </button>
                </form>
              )}
            </div>

            {/* 2. Delivery Preferences & Kitchen Note */}
            <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.10)] space-y-4">
              <div className="flex items-center gap-3 border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center justify-center font-bold font-['Outfit',sans-serif] text-sm">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                    Delivery Instructions
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Special requests for our courier and chef</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] cursor-pointer hover:bg-[var(--dp-color-highlight)]/30 transition-colors shadow-[1.5px_1.5px_0px_var(--dp-color-line)]">
                  <input
                    type="checkbox"
                    checked={contactless}
                    onChange={(e) => setContactless(e.target.checked)}
                    className="w-4 h-4 rounded border-[1.5px] border-[var(--dp-color-line)] accent-[var(--dp-color-accent)] focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[var(--dp-color-ink)] block font-['Outfit',sans-serif]">Contactless Drop-off</span>
                    <span className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Leave at doorway / reception</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] cursor-pointer hover:bg-[var(--dp-color-highlight)]/30 transition-colors shadow-[1.5px_1.5px_0px_var(--dp-color-line)]">
                  <input
                    type="checkbox"
                    checked={cutleryOptIn}
                    onChange={(e) => setCutleryOptIn(e.target.checked)}
                    className="w-4 h-4 rounded border-[1.5px] border-[var(--dp-color-line)] accent-[var(--dp-color-accent)] focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[var(--dp-color-ink)] block font-['Outfit',sans-serif]">Cutlery & Napkins</span>
                    <span className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Eco-friendly bamboo sets</span>
                  </div>
                </label>
              </div>

              <div>
                <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1.5 font-['Outfit',sans-serif]">
                  Chef Preparation Note (Optional)
                </label>
                <input
                  type="text"
                  value={deliveryNote}
                  onChange={(e) => setDeliveryNote(e.target.value)}
                  placeholder="e.g. Medium spice, extra lemons, keep chutney separate..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)]/60 shadow-[1.5px_1.5px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                />
              </div>
            </div>

            {/* 3. Payment Method Simulation */}
            <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.10)] space-y-4">
              <div className="flex items-center gap-3 border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center justify-center font-bold font-['Outfit',sans-serif] text-sm">
                  3
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                    Payment Simulation
                  </h2>
                  <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Choose your simulated checkout method</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'UPI', label: 'UPI / QR', icon: Smartphone },
                  { id: 'CARD', label: 'Credit / Debit', icon: CreditCard },
                  { id: 'NET_BANKING', label: 'Net Banking', icon: Building },
                  { id: 'CASH_ON_DELIVERY', label: 'Cash on Delivery', icon: Banknote },
                ].map((m) => {
                  const Icon = m.icon
                  const isSelected = paymentMethod === m.id
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setPaymentMethod(m.id as PaymentMethod)}
                      className={`p-3.5 rounded-xl border-[1.5px] flex flex-col items-center gap-2 text-center transition-all cursor-pointer focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)] ${
                        isSelected
                          ? 'bg-[var(--dp-color-highlight)] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_rgba(56,53,47,0.18)] text-[var(--dp-color-ink)] font-bold -translate-y-0.5'
                          : 'bg-[var(--dp-color-ground)] text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-scrap)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)]'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[var(--dp-color-accent)]' : ''}`} />
                      <span className="text-xs font-bold font-['Outfit',sans-serif]">{m.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Dynamic Payment Details Simulation Form */}
              <div className="p-4 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] space-y-3">
                {paymentMethod === 'UPI' && (
                  <div className="space-y-2">
                    <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider font-['Outfit',sans-serif]">
                      Virtual Payment Address (VPA / UPI ID)
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@bank"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                    />
                    <div className="flex gap-2 pt-1 text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">
                      <span className="px-2 py-0.5 rounded bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)]">
                        GPay
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)]">
                        PhonePe
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)]">
                        Paytm
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)]">
                        BHIM
                      </span>
                    </div>
                  </div>
                )}

                {paymentMethod === 'CARD' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                        Card Number (Demo)
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] font-mono shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                          Valid Thru
                        </label>
                        <input
                          type="text"
                          defaultValue="10/28"
                          className="w-full px-3 py-2 text-xs rounded-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] font-mono shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider mb-1 font-['Outfit',sans-serif]">
                          CVV
                        </label>
                        <input
                          type="password"
                          defaultValue="•••"
                          className="w-full px-3 py-2 text-xs rounded-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] font-mono shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'NET_BANKING' && (
                  <div className="space-y-2">
                    <label className="block text-xs text-[var(--dp-color-ink-muted)] font-bold uppercase tracking-wider font-['Outfit',sans-serif]">
                      Select Financial Institution
                    </label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] font-bold shadow-[1px_1px_0px_var(--dp-color-line)] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
                    >
                      <option value="HDFC Bank">HDFC Bank</option>
                      <option value="ICICI Bank">ICICI Bank</option>
                      <option value="State Bank of India">State Bank of India</option>
                      <option value="Axis Bank">Axis Bank</option>
                      <option value="Kotak Mahindra">Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}

                {paymentMethod === 'CASH_ON_DELIVERY' && (
                  <div className="flex items-center gap-3 text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] text-sm">
                    <Banknote className="w-5 h-5 text-[var(--dp-color-accent)] shrink-0" />
                    <span>
                      Pay in cash or dynamic UPI QR upon arrival to our courier partner.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Placement Action */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <div className="bg-[var(--dp-color-highlight)]/30 border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-6 shadow-[3px_3px_0px_rgba(56,53,47,0.14)] space-y-6">
              <div className="border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
                <span className="text-xs uppercase font-bold text-[var(--dp-color-accent)] tracking-wider font-['Outfit',sans-serif] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] px-2 py-0.5 rounded shadow-[1px_1px_0px_var(--dp-color-line)]">
                  Order Summary
                </span>
                <h3 className="text-2xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] mt-2">
                  {activeRestaurant?.name || 'Partner Kitchen'}
                </h3>
                <p className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] mt-0.5">
                  Estimated delivery in {activeRestaurant?.deliveryTimeEstimateMin || 35} mins
                </p>
              </div>

              {/* Itemized Snapshot list */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="flex items-start justify-between text-xs py-2 border-b-[1.5px] border-[var(--dp-color-line)]/50 last:border-0"
                  >
                    <div className="space-y-1 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] font-bold text-[10px] flex items-center justify-center font-mono">
                          {cartItem.quantity}×
                        </span>
                        <span className="text-[var(--dp-color-ink)] font-bold font-['Outfit',sans-serif] text-sm">{cartItem.menuItem.name}</span>
                      </div>
                      {cartItem.selectedCustomizations && cartItem.selectedCustomizations.length > 0 && (
                        <div className="text-xs text-[var(--dp-color-ink-muted)] pl-7 font-['Outfit',sans-serif]">
                          {cartItem.selectedCustomizations.map((c) => c.option.name).join(', ')}
                        </div>
                      )}
                    </div>
                    <span className="font-mono font-bold text-[var(--dp-color-ink)] shrink-0">
                      {formatCurrency(cartItem.unitPrice * cartItem.quantity, 'INR')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Financial Calculation Breakdown */}
              <div className="border-t-[1.5px] border-[var(--dp-color-line)] pt-4 space-y-2 text-xs font-['Outfit',sans-serif] text-sm">
                <div className="flex justify-between text-[var(--dp-color-ink-muted)]">
                  <span>Item Subtotal</span>
                  <span className="font-mono font-bold text-[var(--dp-color-ink)]">
                    {formatCurrency(totals.itemTotal, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[var(--dp-color-ink-muted)]">
                  <span>Thermal-Precision Delivery</span>
                  <span className="font-mono font-bold text-[var(--dp-color-ink)]">
                    {totals.deliveryFee === 0 ? 'FREE' : formatCurrency(totals.deliveryFee, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[var(--dp-color-ink-muted)]">
                  <span>GST & Service Levies (5%)</span>
                  <span className="font-mono font-bold text-[var(--dp-color-ink)]">
                    {formatCurrency(totals.taxesAndCharges, 'INR')}
                  </span>
                </div>

                {totals.discountAmount > 0 && (
                  <div className="flex justify-between text-[#059669] font-bold">
                    <span>Applied Privilege Voucher</span>
                    <span className="font-mono">
                      -{formatCurrency(totals.discountAmount, 'INR')}
                    </span>
                  </div>
                )}

                <div className="border-t-[1.5px] border-[var(--dp-color-line)] pt-3 flex justify-between items-center text-base font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                  <span>Total Amount</span>
                  <span className="text-2xl font-mono font-bold text-[var(--dp-color-accent)]">
                    {formatCurrency(totals.finalPayable, 'INR')}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                size="lg"
                variant="primary"
                disabled={isSubmitting}
                rightIcon={
                  isSubmitting ? (
                    <Clock className="w-5 h-5 animate-spin" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )
                }
                onClick={handlePlaceOrder}
                className="w-full font-bold text-base tracking-wide cursor-pointer py-4 shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.20)]"
              >
                {isSubmitting ? 'Transacting Order...' : 'Complete & Place Order →'}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif] text-center">
                <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
                <span>Zero Risk • Academic Demonstration Environment</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <StorefrontFooter />
    </div>
  )
}

export default CheckoutPage
