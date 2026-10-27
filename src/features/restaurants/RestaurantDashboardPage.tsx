import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import {
  fetchAdminRestaurants,
  fetchAdminOrders,
  fetchAdminMenuItems,
  updateAdminOrderStatus,
  toggleMenuItemAvailability,
  toggleRestaurantOpen,
} from '@/services/adminService'
import { INITIAL_RESTAURANTS } from '@/services/catalogService'
import type { Restaurant, Order, AdminMenuItemWithDetails, OrderStatus } from '@/types'
import { formatCurrency } from '@/lib/utils'
import {
  UtensilsCrossed,
  ShoppingBag,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  RefreshCw,
  LogOut,
  ChevronRight,
  Power,
  TrendingUp,
  Layers,
} from 'lucide-react'

function formatTime(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  } catch {
    return dateStr
  }
}

export const RestaurantDashboardPage: React.FC = () => {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  // State
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [orders, setOrders] = useState<Order[]>([])
  const [menuItems, setMenuItems] = useState<AdminMenuItemWithDetails[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)
  const [activeTab, setActiveTab] = useState<'orders' | 'menu'>('orders')
  const [notice, setNotice] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Load Restaurant & associated data
  const loadRestaurantData = async () => {
    try {
      setIsLoading(true)
      setError(null)

      // Fetch restaurants
      const allRestaurants = await fetchAdminRestaurants()
      const targetRestaurant =
        (user?.restaurantId && allRestaurants.find((r) => r.id === user.restaurantId)) ||
        allRestaurants[0] ||
        INITIAL_RESTAURANTS[0]

      setRestaurant(targetRestaurant)

      if (targetRestaurant?.id) {
        // Fetch orders and menu items for this specific restaurant
        const [ordersData, menuData] = await Promise.all([
          fetchAdminOrders({ restaurantId: targetRestaurant.id }),
          fetchAdminMenuItems({ restaurantId: targetRestaurant.id }),
        ])
        setOrders(ordersData)
        setMenuItems(menuData)
      }
    } catch (err) {
      console.warn('[ARO Restaurant] Error fetching restaurant dashboard data:', err)
      setError('Failed to load restaurant data from database. Displaying local cache.')
      if (INITIAL_RESTAURANTS.length > 0) {
        setRestaurant(INITIAL_RESTAURANTS[0])
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadRestaurantData()
  }, [user?.restaurantId])

  // Handle toggling restaurant open/closed status
  const handleToggleOpen = async () => {
    if (!restaurant) return
    const nextState = !restaurant.isOpen
    try {
      setIsUpdatingStatus(true)
      await toggleRestaurantOpen(restaurant.id, nextState)
      setRestaurant((prev) => (prev ? { ...prev, isOpen: nextState } : null))
      setNotice(`Kitchen status updated: ${nextState ? 'OPEN for orders' : 'CLOSED'}`)
      setTimeout(() => setNotice(null), 3000)
    } catch {
      setError('Unable to update kitchen status in database.')
    } finally {
      setIsUpdatingStatus(false)
    }
  }

  // Handle order status progression
  const handleUpdateOrderStatus = async (orderId: string, nextStatus: OrderStatus) => {
    try {
      await updateAdminOrderStatus(orderId, nextStatus)
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: nextStatus } : o))
      )
      setNotice(`Order status advanced to ${nextStatus.replace('_', ' ')}`)
      setTimeout(() => setNotice(null), 3000)
    } catch {
      setError('Failed to update order status in backend.')
    }
  }

  // Handle dish availability toggle
  const handleToggleDishAvailability = async (itemId: string, current: boolean) => {
    const next = !current
    try {
      await toggleMenuItemAvailability(itemId, next)
      setMenuItems((prev) =>
        prev.map((m) => (m.id === itemId ? { ...m, isAvailable: next } : m))
      )
    } catch {
      setError('Failed to update dish availability.')
    }
  }

  const handleSignOut = async () => {
    await logout()
    navigate('/auth')
  }

  const activeOrders = orders.filter(
    (o) => !['delivered', 'cancelled'].includes(o.status)
  )
  const totalRevenue = orders
    .filter((o) => o.status !== 'cancelled')
    .reduce((sum, o) => sum + (o.finalPaidAmount || 0), 0)

  return (
    <div className="min-h-screen bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] font-['Outfit',sans-serif] paper-grid flex flex-col justify-between">
      {/* Top Header */}
      <header className="border-b-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-scrap)] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] flex items-center justify-center font-black text-[var(--dp-color-highlight)] text-xl shadow-[1.5px_1.5px_0px_var(--dp-color-accent)]">
                A
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-[var(--dp-color-ink)]">ARO</span>
                  <span className="bg-[var(--dp-color-accent)] text-white text-[9px] font-black px-1.5 py-0.5 rounded border border-[var(--dp-color-ink)] uppercase tracking-wider">
                    RESTAURANT
                  </span>
                </div>
                <span className="text-[10px] text-[var(--dp-color-ink-muted)] font-bold tracking-wider uppercase">
                  Kitchen Operations Portal
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={loadRestaurantData}
              disabled={isLoading}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)] text-xs font-bold shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)] text-xs font-bold text-[var(--dp-color-accent)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-accent)] transition-all cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        {/* Banner Notice */}
        {notice && (
          <div className="p-3.5 rounded-xl bg-[#059669]/10 border-[1.5px] border-[#059669] flex items-center gap-2 text-xs font-bold text-[#059669]">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{notice}</span>
          </div>
        )}

        {/* Error Notice */}
        {error && (
          <div className="p-3.5 rounded-xl bg-[var(--dp-color-accent)]/10 border-[1.5px] border-[var(--dp-color-accent)] flex items-center gap-2 text-xs font-bold text-[var(--dp-color-accent)]">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Restaurant Header & Status Card */}
        {restaurant && (
          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-5 sm:p-6 shadow-[3px_3px_0px_var(--dp-color-ink)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={restaurant.coverImage}
                alt={restaurant.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)]"
              />
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-[var(--dp-color-ink)]">
                    {restaurant.name}
                  </h1>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-black px-2 py-0.5 rounded-full border ${
                      restaurant.isOpen
                        ? 'bg-[#059669]/15 border-[#059669] text-[#059669]'
                        : 'bg-[var(--dp-color-accent)]/15 border-[var(--dp-color-accent)] text-[var(--dp-color-accent)]'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${restaurant.isOpen ? 'bg-[#059669]' : 'bg-[var(--dp-color-accent)]'}`} />
                    {restaurant.isOpen ? 'ACCEPTING ORDERS' : 'KITCHEN CLOSED'}
                  </span>
                </div>
                <p className="text-xs text-[var(--dp-color-ink-muted)] font-medium">
                  {restaurant.tagline} • {restaurant.city}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--dp-color-ink-muted)] pt-0.5">
                  <span className="flex items-center gap-1 font-bold text-[var(--dp-color-ink)]">
                    ★ {restaurant.rating} ({restaurant.ratingCount} reviews)
                  </span>
                  <span>•</span>
                  <span>{restaurant.priceTier} tier</span>
                  <span>•</span>
                  <span>Est. {restaurant.deliveryTimeEstimateMin}-{restaurant.deliveryTimeEstimateMax}m</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-[var(--dp-color-line)]">
              <button
                type="button"
                onClick={handleToggleOpen}
                disabled={isUpdatingStatus}
                className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--dp-radius-control)] border-[1.5px] border-[var(--dp-color-ink)] font-black text-xs shadow-[2px_2px_0px_var(--dp-color-ink)] transition-transform hover:-translate-y-0.5 cursor-pointer ${
                  restaurant.isOpen
                    ? 'bg-[var(--dp-color-ground)] text-[var(--dp-color-accent)] hover:bg-[var(--dp-color-accent)] hover:text-white'
                    : 'bg-[#059669] text-white hover:bg-[#047857]'
                }`}
              >
                <Power className="w-3.5 h-3.5" />
                <span>{restaurant.isOpen ? 'Close Kitchen' : 'Open Kitchen'}</span>
              </button>

              <Link
                to={`/restaurants/${restaurant.id}`}
                target="_blank"
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] transition-all"
              >
                <span>Live Menu</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-xl p-4 shadow-[2px_2px_0px_var(--dp-color-ink)] space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
              Active Orders
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[var(--dp-color-ink)]">
              {activeOrders.length}
            </div>
            <p className="text-[11px] text-[var(--dp-color-ink-muted)] font-medium">In kitchen or delivery</p>
          </div>

          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-xl p-4 shadow-[2px_2px_0px_var(--dp-color-ink)] space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5 text-[var(--dp-color-annotation)]" />
              Total Orders
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[var(--dp-color-ink)]">
              {orders.length}
            </div>
            <p className="text-[11px] text-[var(--dp-color-ink-muted)] font-medium">Recorded historical tickets</p>
          </div>

          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-xl p-4 shadow-[2px_2px_0px_var(--dp-color-ink)] space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-[#059669]" />
              Gross Revenue
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#059669]">
              {formatCurrency(totalRevenue)}
            </div>
            <p className="text-[11px] text-[var(--dp-color-ink-muted)] font-medium">Excluding cancellations</p>
          </div>

          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-xl p-4 shadow-[2px_2px_0px_var(--dp-color-ink)] space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[var(--dp-color-ink)]" />
              Menu Items
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[var(--dp-color-ink)]">
              {menuItems.length}
            </div>
            <p className="text-[11px] text-[var(--dp-color-ink-muted)] font-medium">Active catalog offerings</p>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 border-b-[1.5px] border-[var(--dp-color-line)] pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`px-4 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-[var(--dp-color-ink)] text-[var(--dp-color-highlight)] shadow-[2px_2px_0px_var(--dp-color-accent)]'
                : 'text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-scrap)]'
            }`}
          >
            Live Kitchen Orders ({orders.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('menu')}
            className={`px-4 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeTab === 'menu'
                ? 'bg-[var(--dp-color-ink)] text-[var(--dp-color-highlight)] shadow-[2px_2px_0px_var(--dp-color-accent)]'
                : 'text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-scrap)]'
            }`}
          >
            Menu Items & Availability ({menuItems.length})
          </button>
        </div>

        {/* TAB 1: Live Kitchen Orders */}
        {activeTab === 'orders' && (
          <div className="space-y-3">
            {orders.length === 0 ? (
              <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-8 text-center space-y-2">
                <ShoppingBag className="w-8 h-8 text-[var(--dp-color-ink-muted)] mx-auto" />
                <h3 className="font-bold text-sm text-[var(--dp-color-ink)]">No Orders Recorded Yet</h3>
                <p className="text-xs text-[var(--dp-color-ink-muted)]">
                  Orders placed for this restaurant will appear here in real-time.
                </p>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-xl p-4 sm:p-5 shadow-[2px_2px_0px_var(--dp-color-ink)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-xs bg-[var(--dp-color-ground)] px-2 py-0.5 rounded border border-[var(--dp-color-line)]">
                        {order.orderNumber}
                      </span>
                      <span className="text-xs text-[var(--dp-color-ink-muted)] font-medium">
                        {formatTime(order.placedAt)}
                      </span>
                      <span
                        className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          order.status === 'delivered'
                            ? 'bg-[#059669]/15 border-[#059669] text-[#059669]'
                            : order.status === 'cancelled'
                              ? 'bg-[var(--dp-color-accent)]/15 border-[var(--dp-color-accent)] text-[var(--dp-color-accent)]'
                              : 'bg-[var(--dp-color-highlight)] border-[var(--dp-color-ink)] text-[var(--dp-color-ink)]'
                        }`}
                      >
                        {order.status.replace(/_/g, ' ')}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-[var(--dp-color-ink)]">
                      {order.items.map((i) => `${i.quantity}x ${i.itemNameSnapshot}`).join(' • ')}
                    </div>

                    <p className="text-xs text-[var(--dp-color-ink-muted)] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>
                        {order.deliveryAddress.recipientName} ({order.deliveryAddress.recipientPhone}) —{' '}
                        {order.deliveryAddress.addressLine1}, {order.deliveryAddress.city}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-[var(--dp-color-line)] pt-2 md:pt-0">
                    <div className="text-right">
                      <span className="text-xs text-[var(--dp-color-ink-muted)] block">Amount</span>
                      <span className="text-sm font-black text-[var(--dp-color-ink)]">
                        {formatCurrency(order.finalPaidAmount)}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {order.status === 'placed' && (
                        <button
                          type="button"
                          onClick={() => handleUpdateOrderStatus(order.id, 'confirmed')}
                          className="px-3 py-1.5 rounded-lg bg-[var(--dp-color-accent)] text-white text-xs font-bold border border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] hover:translate-x-[-0.5px] cursor-pointer"
                        >
                          Confirm Ticket
                        </button>
                      )}
                      {order.status === 'confirmed' && (
                        <button
                          type="button"
                          onClick={() => handleUpdateOrderStatus(order.id, 'kitchen_preparing')}
                          className="px-3 py-1.5 rounded-lg bg-[var(--dp-color-ink)] text-[var(--dp-color-highlight)] text-xs font-bold border border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-accent)] cursor-pointer"
                        >
                          Start Cooking
                        </button>
                      )}
                      {order.status === 'kitchen_preparing' && (
                        <button
                          type="button"
                          onClick={() => handleUpdateOrderStatus(order.id, 'out_for_delivery')}
                          className="px-3 py-1.5 rounded-lg bg-[#059669] text-white text-xs font-bold border border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] cursor-pointer"
                        >
                          Hand to Courier
                        </button>
                      )}
                      {order.status === 'out_for_delivery' && (
                        <button
                          type="button"
                          onClick={() => handleUpdateOrderStatus(order.id, 'delivered')}
                          className="px-3 py-1.5 rounded-lg bg-[#059669] text-white text-xs font-bold border border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] cursor-pointer"
                        >
                          Mark Delivered
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* TAB 2: Menu Items & Availability */}
        {activeTab === 'menu' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {menuItems.map((dish) => (
              <div
                key={dish.id}
                className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-xl p-4 shadow-[2px_2px_0px_var(--dp-color-ink)] flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {dish.imageUrl ? (
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-12 h-12 rounded-lg object-cover border border-[var(--dp-color-line)] shrink-0"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)] flex items-center justify-center shrink-0">
                      <UtensilsCrossed className="w-5 h-5 text-[var(--dp-color-ink-muted)]" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${dish.isVeg ? 'bg-emerald-600' : 'bg-rose-700'}`} />
                      <h4 className="text-sm font-bold text-[var(--dp-color-ink)] truncate">{dish.name}</h4>
                    </div>
                    <p className="text-xs text-[var(--dp-color-ink-muted)] font-medium">
                      {formatCurrency(dish.price)} • {dish.categoryName || 'Standard'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleToggleDishAvailability(dish.id, dish.isAvailable)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black border transition-all cursor-pointer shrink-0 ${
                    dish.isAvailable
                      ? 'bg-[#059669]/15 border-[#059669] text-[#059669] hover:bg-[var(--dp-color-accent)] hover:text-white hover:border-[var(--dp-color-accent)]'
                      : 'bg-[var(--dp-color-accent)]/15 border-[var(--dp-color-accent)] text-[var(--dp-color-accent)] hover:bg-[#059669] hover:text-white hover:border-[#059669]'
                  }`}
                >
                  {dish.isAvailable ? 'In Stock' : 'Sold Out'}
                </button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-[1.5px] border-[var(--dp-color-line)] py-4 text-center text-xs text-[var(--dp-color-ink-muted)] bg-[var(--dp-color-scrap)] mt-8">
        ARO Kitchen Management System • Hyderabad Culinary Operations
      </footer>
    </div>
  )
}

export default RestaurantDashboardPage

