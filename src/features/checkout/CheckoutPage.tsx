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
  const [newPincode, setNewPincode] = useState('500033')
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
      <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#121212] paper-grid">
        <StorefrontNavbar cartCount={0} />
        <main className="flex-1 max-w-lg mx-auto px-4 py-24 flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-20 h-20 rounded-2xl bg-[#FFF4C2] border-2 sm:border-[2.5px] border-[#121212] shadow-[4px_4px_0px_#121212] flex items-center justify-center text-[#FF650D]">
            <AlertCircle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-black font-['Outfit'] text-[#121212]">Your Basket is Empty</h1>
          <p className="text-sm text-[#5E5854] leading-relaxed max-w-md font-medium">
            Please select items from our curated Hyderabad kitchens before proceeding to checkout.
          </p>
          <Link
            to="/restaurants"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF650D] text-white text-sm font-bold font-['Outfit'] border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#121212] transition-all"
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
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#121212] paper-grid">
      <StorefrontNavbar cartCount={totals.itemTotal > 0 ? 1 : 0} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-bold font-['Oswald'] uppercase tracking-wider text-[#5E5854]">
          <Link to="/home" className="hover:text-[#121212] transition-colors">
            Storefront
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#121212]/40" />
          <Link to="/cart" className="hover:text-[#121212] transition-colors">
            Basket
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#121212]/40" />
          <span className="text-[#FF650D] bg-[#FFF4C2] border border-[#121212] px-2 py-0.5 rounded shadow-[1px_1px_0px_#121212]">
            Checkout & Coordinates
          </span>
        </div>

        {/* Header with Hand-Drawn Sketch Accent */}
        <div className="relative">
          <div className="inline-block relative">
            <h1 className="text-3xl sm:text-4xl font-black font-['Outfit'] text-[#121212] tracking-tight">
              Finalize Your Order
            </h1>
            <div className="w-48 text-[#FF650D] mt-1">
              <ScribbleUnderline />
            </div>
          </div>
          <p className="text-sm font-medium text-[#5E5854] mt-2">
            Confirm your destination in Hyderabad and verify delivery instructions.
          </p>
        </div>

        {/* Demo Simulation Warning Notice */}
        <div className="relative bg-[#FFF4C2] border-2 sm:border-[2.5px] border-[#121212] rounded-2xl p-5 shadow-[4px_4px_0px_#121212] flex items-start gap-4">
          <div className="absolute -top-3 right-6 hidden sm:block">
            <WashiTape text="SIMULATED" angle="-2deg" className="bg-[#FF650D] text-white" />
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#FF650D] text-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-base font-bold text-[#121212] font-['Outfit']">
                Interactive Educational & Portfolio Simulation
              </h4>
              <span className="text-[11px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#121212] text-[#FFF4C2] font-['Oswald']">
                Zero Financial Charge
              </span>
            </div>
            <p className="text-xs text-[#5E5854] leading-relaxed font-medium">
              This checkout flow is a working database-backed simulation. No real money or payment
              credentials will be billed. Clicking <strong>Complete & Place Order</strong> will
              record a 3NF relational transaction and open the live road-following telematics tracking map.
            </p>
          </div>
        </div>

        {errorNotice && (
          <div className="p-4 rounded-xl bg-[#FEE2E2] border-2 border-[#EF4444] text-[#B91C1C] text-xs font-bold flex items-center gap-3 shadow-[3px_3px_0px_#EF4444]">
            <AlertCircle className="w-5 h-5 text-[#EF4444] shrink-0" />
            <span>{errorNotice}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Preferences, Payment */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Delivery Address Section */}
            <div className="bg-white border-2 sm:border-[2.5px] border-[#121212] rounded-2xl p-6 shadow-[6px_6px_0px_#121212] space-y-5">
              <div className="flex items-center justify-between border-b-2 border-[#121212] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FF650D] text-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center font-black font-['Oswald'] text-base">
                    1
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-[#121212] font-['Outfit']">
                      Delivery Address
                    </h2>
                    <p className="text-xs text-[#5E5854] font-medium">
                      Select or add your destination coordinate in Hyderabad
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAddAddressModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF6EE] hover:bg-[#FFF4C2] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-bold font-['Outfit'] text-[#121212] cursor-pointer transition-all hover:translate-x-[1px] hover:translate-y-[1px]"
                >
                  <Plus className="w-4 h-4 text-[#FF650D]" />
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
                      className={`relative p-4 rounded-xl border-2 sm:border-[2.5px] border-[#121212] cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-[#FFF4C2] shadow-[4px_4px_0px_#121212] -translate-y-0.5'
                          : 'bg-[#FAF6EE] hover:bg-white shadow-[2px_2px_0px_#121212]/30 hover:shadow-[3px_3px_0px_#121212]'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin
                            className={`w-4 h-4 ${isSelected ? 'text-[#FF650D]' : 'text-[#5E5854]'}`}
                          />
                          <span className="text-xs font-black uppercase tracking-wider font-['Oswald'] text-[#121212]">
                            {addr.label}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#10B981] border-2 border-[#121212] text-white flex items-center justify-center shadow-[1px_1px_0px_#121212]">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>

                      <div className="mt-2 text-xs text-[#121212] font-bold">
                        {addr.recipientName} • <span className="font-mono text-[11px]">{addr.recipientPhone}</span>
                      </div>

                      <p className="text-xs text-[#5E5854] font-medium leading-relaxed mt-1 line-clamp-2">
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
                  className="bg-[#FAF6EE] border-2 border-[#121212] rounded-xl p-5 space-y-4 shadow-[4px_4px_0px_#121212] animate-in fade-in"
                >
                  <div className="flex items-center justify-between border-b-2 border-[#121212] pb-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#121212] font-['Oswald']">
                      Add New Hyderabad Address
                    </h4>
                    <button
                      type="button"
                      onClick={() => setShowAddAddressModal(false)}
                      className="text-xs font-bold text-[#5E5854] hover:text-[#121212] px-2 py-0.5 border border-[#121212] rounded bg-white shadow-[1px_1px_0px_#121212]"
                    >
                      ✕ Close
                    </button>
                  </div>

                  {addressFormError && (
                    <p className="text-xs text-[#EF4444] font-bold">{addressFormError}</p>
                  )}

                  <div className="grid grid-cols-3 gap-2">
                    {(['Home', 'Work', 'Other'] as const).map((lbl) => (
                      <button
                        key={lbl}
                        type="button"
                        onClick={() => setNewLabel(lbl)}
                        className={`py-1.5 text-xs rounded-lg font-bold font-['Outfit'] border-2 border-[#121212] transition-all cursor-pointer ${
                          newLabel === lbl
                            ? 'bg-[#FF650D] text-white shadow-[2px_2px_0px_#121212]'
                            : 'bg-white text-[#5E5854] hover:text-[#121212]'
                        }`}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[11px] text-[#5E5854] font-bold uppercase tracking-wider mb-1 font-['Oswald']">
                      Street Address / Flat / Floor *
                    </label>
                    <input
                      type="text"
                      required
                      value={newAddressLine1}
                      onChange={(e) => setNewAddressLine1(e.target.value)}
                      placeholder="e.g. Villa 14, Whispering Palms, Road No. 36"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white border-2 border-[#121212] text-[#121212] font-medium shadow-[2px_2px_0px_#121212] focus:outline-none focus:bg-[#FFF4C2]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] text-[#5E5854] font-bold uppercase tracking-wider mb-1 font-['Oswald']">
                        Landmark / Area
                      </label>
                      <input
                        type="text"
                        value={newLandmark}
                        onChange={(e) => setNewLandmark(e.target.value)}
                        placeholder="e.g. Near Peddamma Temple"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border-2 border-[#121212] text-[#121212] font-medium shadow-[2px_2px_0px_#121212] focus:outline-none focus:bg-[#FFF4C2]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#5E5854] font-bold uppercase tracking-wider mb-1 font-['Oswald']">
                        PIN Code *
                      </label>
                      <input
                        type="text"
                        required
                        value={newPincode}
                        onChange={(e) => setNewPincode(e.target.value)}
                        placeholder="500033"
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border-2 border-[#121212] text-[#121212] font-medium shadow-[2px_2px_0px_#121212] focus:outline-none focus:bg-[#FFF4C2]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-black font-['Outfit'] uppercase tracking-wider border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
                  >
                    Save Address & Use
                  </button>
                </form>
              )}
            </div>

            {/* 2. Delivery Preferences & Kitchen Note */}
            <div className="bg-white border-2 sm:border-[2.5px] border-[#121212] rounded-2xl p-6 shadow-[6px_6px_0px_#121212] space-y-4">
              <div className="flex items-center gap-3 border-b-2 border-[#121212] pb-4">
                <div className="w-9 h-9 rounded-xl bg-[#FFD13B] text-[#121212] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center font-black font-['Oswald'] text-base">
                  2
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#121212] font-['Outfit']">
                    Delivery Instructions
                  </h2>
                  <p className="text-xs text-[#5E5854] font-medium">Special requests for our courier and chef</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF6EE] border-2 border-[#121212] cursor-pointer hover:bg-[#FFF4C2] transition-colors shadow-[2px_2px_0px_#121212]">
                  <input
                    type="checkbox"
                    checked={contactless}
                    onChange={(e) => setContactless(e.target.checked)}
                    className="w-4 h-4 rounded border-2 border-[#121212] accent-[#FF650D]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[#121212] block font-['Outfit']">Contactless Drop-off</span>
                    <span className="text-[11px] text-[#5E5854] font-medium">Leave at doorway / reception</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF6EE] border-2 border-[#121212] cursor-pointer hover:bg-[#FFF4C2] transition-colors shadow-[2px_2px_0px_#121212]">
                  <input
                    type="checkbox"
                    checked={cutleryOptIn}
                    onChange={(e) => setCutleryOptIn(e.target.checked)}
                    className="w-4 h-4 rounded border-2 border-[#121212] accent-[#FF650D]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-[#121212] block font-['Outfit']">Cutlery & Napkins</span>
                    <span className="text-[11px] text-[#5E5854] font-medium">Eco-friendly bamboo sets</span>
                  </div>
                </label>
              </div>

              <div>
                <label className="block text-[11px] text-[#5E5854] font-bold uppercase tracking-wider mb-1.5 font-['Oswald']">
                  Chef Preparation Note (Optional)
                </label>
                <input
                  type="text"
                  value={deliveryNote}
                  onChange={(e) => setDeliveryNote(e.target.value)}
                  placeholder="e.g. Medium spice, extra lemons, keep chutney separate..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white border-2 border-[#121212] text-[#121212] font-medium placeholder-[#5E5854]/60 shadow-[2px_2px_0px_#121212] focus:outline-none focus:bg-[#FFF4C2]"
                />
              </div>
            </div>

            {/* 3. Payment Method Simulation */}
            <div className="bg-white border-2 sm:border-[2.5px] border-[#121212] rounded-2xl p-6 shadow-[6px_6px_0px_#121212] space-y-4">
              <div className="flex items-center gap-3 border-b-2 border-[#121212] pb-4">
                <div className="w-9 h-9 rounded-xl bg-[#10B981] text-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center font-black font-['Oswald'] text-base">
                  3
                </div>
                <div>
                  <h2 className="text-xl font-black text-[#121212] font-['Outfit']">
                    Payment Simulation
                  </h2>
                  <p className="text-xs text-[#5E5854] font-medium">Choose your simulated checkout method</p>
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
                      className={`p-3.5 rounded-xl border-2 sm:border-[2.5px] border-[#121212] flex flex-col items-center gap-2 text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#FFD13B] shadow-[3px_3px_0px_#121212] text-[#121212] font-black -translate-y-0.5'
                          : 'bg-[#FAF6EE] text-[#5E5854] hover:text-[#121212] hover:bg-white shadow-[2px_2px_0px_#121212]/30'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-[#FF650D]' : ''}`} />
                      <span className="text-[11px] font-bold font-['Outfit']">{m.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Dynamic Payment Details Simulation Form */}
              <div className="p-4 rounded-xl bg-[#FAF6EE] border-2 border-[#121212] shadow-[3px_3px_0px_#121212] space-y-3">
                {paymentMethod === 'UPI' && (
                  <div className="space-y-2">
                    <label className="block text-[11px] text-[#5E5854] font-bold uppercase tracking-wider font-['Oswald']">
                      Virtual Payment Address (VPA / UPI ID)
                    </label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@bank"
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white border-2 border-[#121212] text-[#121212] font-medium shadow-[2px_2px_0px_#121212] focus:outline-none focus:bg-[#FFF4C2]"
                    />
                    <div className="flex gap-2 pt-1 text-[11px] font-bold font-['Oswald'] text-[#121212]">
                      <span className="px-2 py-0.5 rounded bg-white border border-[#121212] shadow-[1px_1px_0px_#121212]">
                        GPay
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#121212] shadow-[1px_1px_0px_#121212]">
                        PhonePe
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#121212] shadow-[1px_1px_0px_#121212]">
                        Paytm
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white border border-[#121212] shadow-[1px_1px_0px_#121212]">
                        BHIM
                      </span>
                    </div>
                  </div>
                )}

                {paymentMethod === 'CARD' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] text-[#5E5854] font-bold uppercase tracking-wider mb-1 font-['Oswald']">
                        Card Number (Demo)
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white border-2 border-[#121212] text-[#121212] font-mono shadow-[2px_2px_0px_#121212]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-[#5E5854] font-bold uppercase tracking-wider mb-1 font-['Oswald']">
                          Valid Thru
                        </label>
                        <input
                          type="text"
                          defaultValue="10/28"
                          className="w-full px-3 py-2 text-xs rounded-lg bg-white border-2 border-[#121212] text-[#121212] font-mono shadow-[2px_2px_0px_#121212]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-[#5E5854] font-bold uppercase tracking-wider mb-1 font-['Oswald']">
                          CVV
                        </label>
                        <input
                          type="password"
                          defaultValue="•••"
                          className="w-full px-3 py-2 text-xs rounded-lg bg-white border-2 border-[#121212] text-[#121212] font-mono shadow-[2px_2px_0px_#121212]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'NET_BANKING' && (
                  <div className="space-y-2">
                    <label className="block text-[11px] text-[#5E5854] font-bold uppercase tracking-wider font-['Oswald']">
                      Select Financial Institution
                    </label>
                    <select
                      value={selectedBank}
                      onChange={(e) => setSelectedBank(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg bg-white border-2 border-[#121212] text-[#121212] font-bold shadow-[2px_2px_0px_#121212] focus:outline-none"
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
                  <div className="flex items-center gap-3 text-xs text-[#5E5854] font-medium">
                    <Banknote className="w-5 h-5 text-[#FF650D] shrink-0" />
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
            <div className="bg-[#FFF4C2] border-2 sm:border-[2.5px] border-[#121212] rounded-2xl p-6 shadow-[8px_8px_0px_#121212] space-y-6">
              <div className="border-b-2 border-[#121212] pb-4">
                <span className="text-[11px] uppercase font-black text-[#FF650D] tracking-widest font-['Oswald'] bg-[#121212] text-[#FFF4C2] px-2 py-0.5 rounded">
                  Order Summary
                </span>
                <h3 className="text-2xl font-black text-[#121212] font-['Outfit'] mt-2">
                  {activeRestaurant?.name || 'Partner Kitchen'}
                </h3>
                <p className="text-xs text-[#5E5854] font-bold mt-0.5">
                  Estimated delivery in {activeRestaurant?.deliveryTimeEstimateMin || 35} mins
                </p>
              </div>

              {/* Itemized Snapshot list */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="flex items-start justify-between text-xs py-2 border-b border-[#121212]/15 last:border-0"
                  >
                    <div className="space-y-1 pr-3">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-[#121212] text-[#FFF4C2] font-bold text-[10px] flex items-center justify-center font-mono">
                          {cartItem.quantity}×
                        </span>
                        <span className="text-[#121212] font-bold font-['Outfit']">{cartItem.menuItem.name}</span>
                      </div>
                      {cartItem.selectedCustomizations && cartItem.selectedCustomizations.length > 0 && (
                        <div className="text-[11px] text-[#5E5854] pl-7 font-medium">
                          {cartItem.selectedCustomizations.map((c) => c.option.name).join(', ')}
                        </div>
                      )}
                    </div>
                    <span className="font-mono font-bold text-[#121212] shrink-0">
                      {formatCurrency(cartItem.unitPrice * cartItem.quantity, 'INR')}
                    </span>
                  </div>
                ))}
              </div>

              {/* Financial Calculation Breakdown */}
              <div className="border-t-2 border-[#121212] pt-4 space-y-2 text-xs font-medium">
                <div className="flex justify-between text-[#5E5854]">
                  <span>Item Subtotal</span>
                  <span className="font-mono font-bold text-[#121212]">
                    {formatCurrency(totals.itemTotal, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[#5E5854]">
                  <span>Thermal-Precision Delivery</span>
                  <span className="font-mono font-bold text-[#121212]">
                    {totals.deliveryFee === 0 ? 'FREE' : formatCurrency(totals.deliveryFee, 'INR')}
                  </span>
                </div>
                <div className="flex justify-between text-[#5E5854]">
                  <span>GST & Service Levies (5%)</span>
                  <span className="font-mono font-bold text-[#121212]">
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

                <div className="border-t-2 border-[#121212] pt-3 flex justify-between items-center text-base font-black text-[#121212] font-['Outfit']">
                  <span>Total Amount</span>
                  <span className="text-2xl font-mono font-black text-[#FF650D]">
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
                className="w-full font-black text-base tracking-wide cursor-pointer py-4"
              >
                {isSubmitting ? 'Transacting Order...' : 'Complete & Place Order →'}
              </Button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#5E5854] font-medium text-center">
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
