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
import type { Order, CustomerAddress } from '@/types'

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate()
  const { items, activeRestaurant, totals, clearCart } = useCart()
  const { user, addresses, addAddress, saveOrder } = useAuth()

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
  const [newPincode, setNewPincode] = useState('560038')
  const [addressFormError, setAddressFormError] = useState('')

  // Cooking and delivery instructions
  const [deliveryNote, setDeliveryNote] = useState('')
  const [contactless, setContactless] = useState(false)
  const [cutleryOptIn, setCutleryOptIn] = useState(false)

  // Payment method simulation
  type PaymentMethod = 'UPI' | 'CARD' | 'NET_BANKING' | 'CASH_ON_DELIVERY'
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('UPI')
  const [upiId, setUpiId] = useState('sreeram@okhdfcbank')
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8821')
  const [selectedBank, setSelectedBank] = useState('HDFC Bank')

  // Submitting state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorNotice, setErrorNotice] = useState<string | null>(null)

  // If cart is empty, redirect back
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
        <StorefrontNavbar cartCount={0} />
        <main className="flex-1 max-w-lg mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-[#2E2423] border border-[#4D3F3C] flex items-center justify-center text-[#FF650D]">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold font-['Outfit'] text-white">Your Cart is Empty</h1>
          <p className="text-xs text-[#A89A97] leading-relaxed">
            Please select items from our curated kitchens before proceeding to checkout.
          </p>
          <Link
            to="/restaurants"
            className="px-6 py-2.5 rounded-xl bg-[#FF650D] text-white text-xs font-bold hover:bg-[#E55400] transition-colors"
          >
            Browse Restaurants
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
          vehicleNumber: 'KA 01 EQ 4210',
          avatarUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
          currentLatitude: 12.9784,
          currentLongitude: 77.6408,
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
    <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
      <StorefrontNavbar cartCount={totals.itemTotal > 0 ? 1 : 0} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#A89A97]">
          <Link to="/home" className="hover:text-white transition-colors">
            Storefront
          </Link>
          <ChevronRight className="w-3 h-3 text-[#4D3F3C]" />
          <Link to="/cart" className="hover:text-white transition-colors">
            Basket
          </Link>
          <ChevronRight className="w-3 h-3 text-[#4D3F3C]" />
          <span className="text-[#FF650D] font-semibold">Checkout & Coordinates</span>
        </div>

        {/* Demo Simulation Warning Notice */}
        <div className="bg-[#641820]/40 border border-[#E9432E]/40 rounded-2xl p-4 sm:p-5 flex items-start gap-4">
          <div className="p-2 rounded-xl bg-[#E9432E]/20 text-[#FF650D] shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white font-['Outfit'] flex items-center gap-2">
              <span>Interactive Educational & Portfolio Simulation</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FF650D] text-white">
                No Real Charges
              </span>
            </h4>
            <p className="text-xs text-[#FFF0D5]/80 leading-relaxed">
              This checkout flow is a working database-backed simulation. No real money or payment
              credentials will be charged. Clicking <strong>Complete & Place Order</strong> will
              record a 3NF relational transaction and open the live GPS telemetry tracking map.
            </p>
          </div>
        </div>

        {errorNotice && (
          <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-3">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorNotice}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Preferences, Payment */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Delivery Address Section */}
            <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-[#4D3F3C] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FF650D]/20 text-[#FF650D] flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white font-['Outfit']">
                      Delivery Address
                    </h2>
                    <p className="text-xs text-[#A89A97]">Select or add your destination in Hyderabad</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAddAddressModal(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#FF650D] hover:text-[#ff8134] font-semibold cursor-pointer transition-colors"
                >
                  <Plus className="w-4 h-4" />
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
                      className={`relative p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#641820]/30 border-[#FF650D] ring-1 ring-[#FF650D]'
                          : 'bg-[#211A19]/80 border-[#4D3F3C] hover:border-[#6B5A57]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin
                            className={`w-4 h-4 ${isSelected ? 'text-[#FF650D]' : 'text-[#A89A97]'}`}
                          />
                          <span className="text-xs font-bold uppercase tracking-wider text-white">
                            {addr.label}
                          </span>
                        </div>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#FF650D]" />}
                      </div>

                      <div className="mt-2 text-xs text-[#FFF0D5]/90 font-medium">
                        {addr.recipientName} • {addr.recipientPhone}
                      </div>

                      <p className="text-[11px] text-[#A89A97] leading-relaxed mt-1 line-clamp-2">
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
                  className="bg-[#211A19] border border-[#FF650D]/40 rounded-xl p-5 space-y-4 animate-in fade-in"
                >
                  <div className="flex items-center justify-between border-b border-[#4D3F3C] pb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      Add New Delivery Coordinate
                    </h4>
                    <button
                      type="button"
                      onClick={() => setShowAddAddressModal(false)}
                      className="text-xs text-[#A89A97] hover:text-white"
                    >
                      ✕ Cancel
                    </button>
                  </div>

                  {addressFormError && (
                    <p className="text-xs text-red-400 font-medium">{addressFormError}</p>
                  )}

                  <div className="grid grid-cols-3 gap-2">
                    {(['Home', 'Work', 'Other'] as const).map((lbl) => (
                      <button
                        key={lbl}
                        type="button"
                        onClick={() => setNewLabel(lbl)}
                        className={`py-1.5 text-xs rounded-lg font-semibold transition-colors ${
                          newLabel === lbl
                            ? 'bg-[#FF650D] text-white'
                            : 'bg-[#2E2423] text-[#A89A97] hover:text-white'
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
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#2E2423] border border-[#4D3F3C] text-white focus:outline-none focus:border-[#FF650D]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                        Landmark / Area
                      </label>
                      <input
                        type="text"
                        value={newLandmark}
                        onChange={(e) => setNewLandmark(e.target.value)}
                        placeholder="e.g. Near Peddamma Temple"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#2E2423] border border-[#4D3F3C] text-white focus:outline-none focus:border-[#FF650D]"
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
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#2E2423] border border-[#4D3F3C] text-white focus:outline-none focus:border-[#FF650D]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Save Address & Use
                  </button>
                </form>
              )}
            </div>

            {/* 2. Delivery Preferences & Kitchen Note */}
            <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#4D3F3C] pb-4">
                <div className="w-8 h-8 rounded-lg bg-[#FF650D]/20 text-[#FF650D] flex items-center justify-center font-bold text-xs">
                  2
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white font-['Outfit']">
                    Delivery Instructions
                  </h2>
                  <p className="text-xs text-[#A89A97]">Special requests for our courier and chef</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#211A19] border border-[#4D3F3C] cursor-pointer hover:border-[#6B5A57] transition-colors">
                  <input
                    type="checkbox"
                    checked={contactless}
                    onChange={(e) => setContactless(e.target.checked)}
                    className="w-4 h-4 rounded border-[#4D3F3C] accent-[#FF650D]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Contactless Delivery</span>
                    <span className="text-[11px] text-[#A89A97]">Leave at doorway / reception</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#211A19] border border-[#4D3F3C] cursor-pointer hover:border-[#6B5A57] transition-colors">
                  <input
                    type="checkbox"
                    checked={cutleryOptIn}
                    onChange={(e) => setCutleryOptIn(e.target.checked)}
                    className="w-4 h-4 rounded border-[#4D3F3C] accent-[#FF650D]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-white block">Include Cutlery & Napkins</span>
                    <span className="text-[11px] text-[#A89A97]">Eco-friendly bamboo sets</span>
                  </div>
                </label>
              </div>

              <div>
                <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1.5">
                  Chef Preparation Note (Optional)
                </label>
                <input
                  type="text"
                  value={deliveryNote}
                  onChange={(e) => setDeliveryNote(e.target.value)}
                  placeholder="e.g. Medium spice, sauces packed separately, extra limes..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#211A19] border border-[#4D3F3C] text-white placeholder-[#A89A97]/60 focus:outline-none focus:border-[#FF650D]"
                />
              </div>
            </div>

            {/* 3. Payment Method Simulation */}
            <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#4D3F3C] pb-4">
                <div className="w-8 h-8 rounded-lg bg-[#FF650D]/20 text-[#FF650D] flex items-center justify-center font-bold text-xs">
                  3
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white font-['Outfit']">
                    Payment Simulation
                  </h2>
                  <p className="text-xs text-[#A89A97]">Select your simulated checkout method</p>
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
                      className={`p-3.5 rounded-xl border flex flex-col items-center gap-2 text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#641820]/40 border-[#FF650D] text-white shadow-md'
                          : 'bg-[#211A19] border-[#4D3F3C] text-[#A89A97] hover:text-white hover:border-[#6B5A57]'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[#FF650D]' : ''}`} />
                      <span className="text-[11px] font-bold">{m.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Dynamic Payment Details Simulation Form */}
              <div className="p-4 rounded-xl bg-[#211A19] border border-[#4D3F3C] space-y-3">
                {paymentMethod === 'UPI' && (
                  <div className="space-y-2">
                    <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider">
                      Virtual Payment Address (VPA / UPI ID)
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@bank"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#2E2423] border border-[#4D3F3C] text-white focus:outline-none focus:border-[#FF650D]"
                    />
                    <div className="flex gap-2 pt-1 text-[11px] text-[#A89A97]">
                      <span className="px-2 py-0.5 rounded bg-[#2E2423] border border-[#4D3F3C]">
                        GPay
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#2E2423] border border-[#4D3F3C]">
                        PhonePe
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#2E2423] border border-[#4D3F3C]">
                        Paytm
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#2E2423] border border-[#4D3F3C]">
                        BHIM
                      </span>
                    </div>
                  </div>
                )}

                {paymentMethod === 'CARD' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                        Card Number (Demo)
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-[#2E2423] border border-[#4D3F3C] text-white font-mono focus:outline-none focus:border-[#FF650D]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                          Valid Thru
                        </label>
                        <input
                          type="text"
                          defaultValue="10/28"
                          className="w-full px-3 py-2 text-xs rounded-lg bg-[#2E2423] border border-[#4D3F3C] text-white font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider mb-1">
                          CVV
                        </label>
                        <input
                          type="password"
                          defaultValue="•••"
                          className="w-full px-3 py-2 text-xs rounded-lg bg-[#2E2423] border border-[#4D3F3C] text-white font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'NET_BANKING' && (
                  <div className="space-y-2">
                    <label className="block text-[11px] text-[#A89A97] uppercase tracking-wider">
                      Select Financial Institution
                    </label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-[#2E2423] border border-[#4D3F3C] text-white focus:outline-none focus:border-[#FF650D]"
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
                  <div className="flex items-center gap-3 text-xs text-[#A89A97]">
                    <Banknote className="w-5 h-5 text-[#FF650D]" />
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
            <div className="bg-[#2E2423] border border-[#4D3F3C] rounded-2xl p-6 space-y-6">
              <div className="border-b border-[#4D3F3C] pb-4">
                <span className="text-[10px] uppercase font-bold text-[#FF650D] tracking-widest font-['Oswald']">
                  Order Summary
                </span>
                <h3 className="text-lg font-bold text-white font-['Outfit'] mt-1">
                  {activeRestaurant?.name || 'Partner Kitchen'}
                </h3>
                <p className="text-xs text-[#A89A97] mt-0.5">
                  Estimated delivery in {activeRestaurant?.deliveryTimeEstimateMin || 35} mins
                </p>
              </div>

              {/* Itemized Snapshot list */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="flex items-start justify-between text-xs py-2 border-b border-[#4D3F3C]/50 last:border-0"
                  >
                    <div className="space-y-1 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-[#211A19] text-[#FF650D] font-bold text-[10px] flex items-center justify-center">
                          {cartItem.quantity}×
                        </span>
                        <span className="text-white font-medium">{cartItem.menuItem.name}</span>
                      </div>
                      {cartItem.selectedCustomizations && cartItem.selectedCustomizations.length > 0 && (
                        <div className="text-[11px] text-[#A89A97] pl-7">
                          {cartItem.selectedCustomizations.map((c) => c.option.name).join(', ')}
                        </div>
                      )}
                    </div>
                    <span className="font-mono text-white shrink-0">
                      {formatCurrency(cartItem.unitPrice * cartItem.quantity, 'INR')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Financial Calculation Breakdown */}
              <div className="border-t border-[#4D3F3C] pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-[#A89A97]">
                  <span>Item Subtotal</span>
                  <span className="font-mono text-white">
                    {formatCurrency(totals.itemTotal, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[#A89A97]">
                  <span>Thermal-Precision Delivery</span>
                  <span className="font-mono text-white">
                    {totals.deliveryFee === 0 ? 'FREE' : formatCurrency(totals.deliveryFee, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[#A89A97]">
                  <span>GST & Service Levies (5%)</span>
                  <span className="font-mono text-white">
                    {formatCurrency(totals.taxesAndCharges, 'INR')}
                  </span>
                </div>

                {totals.discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Applied Privilege Voucher</span>
                    <span className="font-mono">
                      -{formatCurrency(totals.discountAmount, 'INR')}
                    </span>
                  </div>
                )}

                <div className="border-t border-[#4D3F3C] pt-3 flex justify-between items-center text-base font-bold text-white">
                  <span>Total Amount</span>
                  <span className="text-xl font-mono text-[#FF650D]">
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
                    <Clock className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )
                }
                onClick={handlePlaceOrder}
                className="w-full font-bold tracking-wide cursor-pointer shadow-xl shadow-[#FF650D]/25"
              >
                {isSubmitting ? 'Transacting Order...' : 'Complete & Place Order →'}
              </Button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#A89A97] text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
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
