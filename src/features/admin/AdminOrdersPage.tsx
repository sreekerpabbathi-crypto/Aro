import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  fetchAdminOrders,
  fetchAdminOrderDetails,
  updateAdminOrderStatus,
} from '@/services/adminService'
import type { Order, OrderStatus } from '@/types'
import { formatCurrency } from '@/lib/utils'
import {
  Search,
  Filter,
  RefreshCw,
  Eye,
  CheckCircle2,
  Clock,
  AlertCircle,
  X,
  MapPin,
  Phone,
  User,
  History,
  Check,
  Loader2,
} from 'lucide-react'

export const AdminOrdersPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const highlightId = searchParams.get('highlight')

  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Filters
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [paymentFilter, setPaymentFilter] = useState<string>('all')

  // Selected Order for Details & Status Transition
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [selectedOrderDetails, setSelectedOrderDetails] = useState<{
    timeline: Array<{ status: string; fromStatus?: string; notes?: string; createdAt: string }>
    items: Array<{
      id: string
      itemNameSnapshot: string
      itemPriceSnapshot: number
      quantity: number
      totalPriceSnapshot: number
    }>
  } | null>(null)
  const [isLoadingDetails, setIsLoadingDetails] = useState(false)

  // Status Update State
  const [newStatus, setNewStatus] = useState<OrderStatus>('placed')
  const [statusNote, setStatusNote] = useState('')
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false)
  const [statusUpdateSuccess, setStatusUpdateSuccess] = useState<string | null>(null)
  const [statusUpdateError, setStatusUpdateError] = useState<string | null>(null)

  const loadOrders = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await fetchAdminOrders({
        searchQuery,
        status: statusFilter as 'all' | OrderStatus,
        paymentStatus: paymentFilter as 'all' | 'PAID' | 'PENDING' | 'FAILED',
      })
      setOrders(data)

      // Auto-open modal if highlight parameter is set
      if (highlightId && !selectedOrder) {
        const target = data.find((o) => o.id === highlightId)
        if (target) {
          handleOpenOrderDetails(target)
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch orders')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadOrders()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter, paymentFilter])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    loadOrders()
  }

  const handleOpenOrderDetails = async (order: Order) => {
    setSelectedOrder(order)
    setNewStatus(order.status)
    setStatusNote('')
    setStatusUpdateSuccess(null)
    setStatusUpdateError(null)
    setIsLoadingDetails(true)

    try {
      const details = await fetchAdminOrderDetails(order.id)
      setSelectedOrderDetails(details)
    } catch (e) {
      console.warn('Failed to load full order details:', e)
    } finally {
      setIsLoadingDetails(false)
    }
  }

  const handleStatusUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedOrder) return

    setIsUpdatingStatus(true)
    setStatusUpdateSuccess(null)
    setStatusUpdateError(null)

    const result = await updateAdminOrderStatus(
      selectedOrder.id,
      newStatus,
      selectedOrder.status,
      statusNote
    )

    setIsUpdatingStatus(false)

    if (result.success) {
      setStatusUpdateSuccess(`Order status transitioned to ${newStatus.replace('_', ' ')}`)
      // Refresh local order state
      const updatedOrder = { ...selectedOrder, status: newStatus }
      setSelectedOrder(updatedOrder)
      setOrders((prev) => prev.map((o) => (o.id === selectedOrder.id ? updatedOrder : o)))

      // Reload timeline details
      const details = await fetchAdminOrderDetails(selectedOrder.id)
      setSelectedOrderDetails(details)
    } else {
      setStatusUpdateError(result.error || 'Failed to update order status.')
    }
  }

  const getStatusBadge = (status: OrderStatus) => {
    switch (status) {
      case 'placed':
        return 'bg-amber-100 text-amber-800 border-amber-300'
      case 'confirmed':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'kitchen_preparing':
        return 'bg-orange-100 text-orange-800 border-orange-300'
      case 'rider_assigned':
        return 'bg-indigo-100 text-indigo-800 border-indigo-300'
      case 'out_for_delivery':
        return 'bg-purple-100 text-purple-800 border-purple-300'
      case 'delivered':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300'
      case 'cancelled':
        return 'bg-rose-100 text-rose-800 border-rose-300'
      default:
        return 'bg-stone-100 text-stone-800 border-stone-300'
    }
  }

  const ALL_ORDER_STATUSES: OrderStatus[] = [
    'placed',
    'confirmed',
    'kitchen_preparing',
    'rider_assigned',
    'out_for_delivery',
    'delivered',
    'cancelled',
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
        <div>
          <h1 className="text-2xl font-black text-[var(--dp-color-ink)] tracking-tight">
            Order Management
          </h1>
          <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] mt-0.5">
            Audit contracts, track delivery telematics, and manage status lifecycles
          </p>
        </div>

        <button
          type="button"
          onClick={loadOrders}
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] hover:bg-[#ede6d5] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] cursor-pointer transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh Orders</span>
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-4 rounded-xl bg-[var(--dp-color-accent)]/10 border-[1.5px] border-[var(--dp-color-accent)] flex items-start gap-3 text-xs text-[var(--dp-color-ink)]">
          <AlertCircle className="w-5 h-5 text-[var(--dp-color-accent)] shrink-0" />
          <div>
            <span className="font-bold block text-[var(--dp-color-accent)]">Database Query Error</span>
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* Search and Filters Bar */}
      <div className="p-4 rounded-xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <form onSubmit={handleSearchSubmit} className="flex-1 relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by order # (e.g. ARO-669414), customer name, or restaurant..."
            className="w-full pl-10 pr-4 py-2 text-xs rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)]/60 font-medium focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)]"
          />
        </form>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <Filter className="w-3.5 h-3.5 text-[var(--dp-color-ink-muted)]" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
            >
              <option value="all">All Statuses</option>
              <option value="placed">Placed</option>
              <option value="confirmed">Confirmed</option>
              <option value="kitchen_preparing">Kitchen Preparing</option>
              <option value="rider_assigned">Rider Assigned</option>
              <option value="out_for_delivery">Out for Delivery</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {/* Payment Status Filter */}
          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
          >
            <option value="all">All Payments</option>
            <option value="PAID">PAID</option>
            <option value="PENDING">PENDING</option>
            <option value="FAILED">FAILED</option>
          </select>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl shadow-[2px_2px_0px_var(--dp-color-line)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)] font-bold text-[var(--dp-color-ink)] uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4">Order Number</th>
                <th className="py-3.5 px-4">Customer Details</th>
                <th className="py-3.5 px-4">Restaurant</th>
                <th className="py-3.5 px-4">Date & Time</th>
                <th className="py-3.5 px-4">Payment</th>
                <th className="py-3.5 px-4">Total Amount</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--dp-color-line)]/50">
              {isLoading ? (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-[var(--dp-color-ink-muted)]">
                    <Loader2 className="w-5 h-5 animate-spin mx-auto mb-2 text-[var(--dp-color-accent)]" />
                    <span>Loading orders from Supabase...</span>
                  </td>
                </tr>
              ) : orders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-12 text-[var(--dp-color-ink-muted)]">
                    No orders matching criteria.
                  </td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr
                    key={order.id}
                    className={`hover:bg-[var(--dp-color-ground)]/50 transition-colors ${
                      highlightId === order.id ? 'bg-[var(--dp-color-highlight)]/30' : ''
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-bold text-[var(--dp-color-ink)]">
                      {order.orderNumber}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-semibold text-[var(--dp-color-ink)]">
                        {order.deliveryAddress?.recipientName || 'Valued Guest'}
                      </div>
                      <div className="text-[11px] text-[var(--dp-color-ink-muted)] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[var(--dp-color-accent)]" />
                        <span className="truncate max-w-[140px]">
                          {order.deliveryAddress?.addressLine1 || order.deliveryAddress?.city}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium text-[var(--dp-color-ink)]">
                      {order.restaurantNameSnapshot}
                    </td>
                    <td className="py-3 px-4 text-[var(--dp-color-ink-muted)] font-mono text-[11px]">
                      {new Date(order.placedAt).toLocaleString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-mono text-[11px] font-bold text-[var(--dp-color-ink)]">
                        {order.paymentMethod}
                      </div>
                      <span
                        className={`inline-block px-1.5 py-0.2 rounded text-[9px] font-bold ${
                          order.paymentStatus === 'PAID'
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-[var(--dp-color-ink)]">
                      {formatCurrency(order.finalPaidAmount)}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusBadge(
                          order.status
                        )}`}
                      >
                        {order.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleOpenOrderDetails(order)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] hover:bg-[#ede6d5] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                        <span>Manage</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details & Status Transition Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 bg-[#38352f]/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-6 max-w-2xl w-full shadow-[4px_4px_0px_var(--dp-color-ink)] space-y-6 my-8 max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-black text-[var(--dp-color-ink)]">
                    Order {selectedOrder.orderNumber}
                  </h2>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusBadge(
                      selectedOrder.status
                    )}`}
                  >
                    {selectedOrder.status.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-xs text-[var(--dp-color-ink-muted)] mt-0.5">
                  Placed on {new Date(selectedOrder.placedAt).toLocaleString('en-IN')}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="p-1.5 rounded-lg border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] hover:text-[var(--dp-color-accent)]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Status Transition Control Card */}
            <div className="p-4 rounded-xl bg-[var(--dp-color-highlight)]/30 border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink)] flex items-center gap-2">
                <Clock className="w-4 h-4 text-[var(--dp-color-accent)]" />
                <span>Transition Order Lifecycle Status</span>
              </h3>

              {statusUpdateSuccess && (
                <div className="p-2.5 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{statusUpdateSuccess}</span>
                </div>
              )}

              {statusUpdateError && (
                <div className="p-2.5 rounded-lg bg-rose-100 border border-rose-300 text-rose-800 text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{statusUpdateError}</span>
                </div>
              )}

              <form onSubmit={handleStatusUpdate} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                      New Status Target
                    </label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value as OrderStatus)}
                      className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]"
                    >
                      {ALL_ORDER_STATUSES.map((st) => (
                        <option key={st} value={st}>
                          {st.replace('_', ' ').toUpperCase()} {st === selectedOrder.status ? '(Current)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[var(--dp-color-ink)] mb-1">
                      Audit Notes (Optional)
                    </label>
                    <input
                      type="text"
                      value={statusNote}
                      onChange={(e) => setStatusNote(e.target.value)}
                      placeholder="e.g. Dispatched with delivery pod"
                      className="w-full px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs text-[var(--dp-color-ink)]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isUpdatingStatus || newStatus === selectedOrder.status}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold uppercase tracking-wider border-[1.5px] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUpdatingStatus ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Persisting to Database...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Commit Status Transition</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Restaurant & Customer Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {/* Customer Box */}
              <div className="p-3.5 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] space-y-1.5">
                <span className="font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] text-[10px] block">
                  Delivery Destination
                </span>
                <div className="flex items-center gap-2 font-bold text-[var(--dp-color-ink)] text-sm">
                  <User className="w-4 h-4 text-[var(--dp-color-accent)]" />
                  <span>{selectedOrder.deliveryAddress?.recipientName}</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--dp-color-ink-muted)]">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{selectedOrder.deliveryAddress?.recipientPhone}</span>
                </div>
                <div className="text-[var(--dp-color-ink-muted)] leading-relaxed pt-1">
                  {selectedOrder.deliveryAddress?.addressLine1}
                  {selectedOrder.deliveryAddress?.addressLine2 && `, ${selectedOrder.deliveryAddress?.addressLine2}`}
                  <br />
                  {selectedOrder.deliveryAddress?.landmark && `Near ${selectedOrder.deliveryAddress?.landmark}, `}
                  {selectedOrder.deliveryAddress?.city} - {selectedOrder.deliveryAddress?.pincode}
                </div>
              </div>

              {/* Restaurant Box */}
              <div className="p-3.5 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] space-y-1.5">
                <span className="font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] text-[10px] block">
                  Origin Kitchen
                </span>
                <span className="font-bold text-[var(--dp-color-ink)] text-sm block">
                  {selectedOrder.restaurantNameSnapshot}
                </span>
                <p className="text-[var(--dp-color-ink-muted)] leading-relaxed">
                  {selectedOrder.restaurantAddressSnapshot}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-[var(--dp-color-line)]/50 text-[11px]">
                  <span className="text-[var(--dp-color-ink-muted)]">Payment Method:</span>
                  <strong className="font-mono">{selectedOrder.paymentMethod} ({selectedOrder.paymentStatus})</strong>
                </div>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="p-3.5 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] space-y-2 text-xs">
              <span className="font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] text-[10px] block">
                Financial Breakdown
              </span>
              <div className="space-y-1">
                <div className="flex justify-between text-[var(--dp-color-ink-muted)]">
                  <span>Item Subtotal:</span>
                  <span>{formatCurrency(selectedOrder.itemTotal)}</span>
                </div>
                <div className="flex justify-between text-[var(--dp-color-ink-muted)]">
                  <span>Delivery Fee:</span>
                  <span>{formatCurrency(selectedOrder.deliveryFee)}</span>
                </div>
                <div className="flex justify-between text-[var(--dp-color-ink-muted)]">
                  <span>Taxes (GST):</span>
                  <span>{formatCurrency(selectedOrder.taxAmount)}</span>
                </div>
                {selectedOrder.discountAmount > 0 && (
                  <div className="flex justify-between text-[#059669]">
                    <span>Coupon Discount:</span>
                    <span>-{formatCurrency(selectedOrder.discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black text-[var(--dp-color-ink)] border-t border-[var(--dp-color-line)] pt-2 mt-2">
                  <span>Total Paid:</span>
                  <span>{formatCurrency(selectedOrder.finalPaidAmount)}</span>
                </div>
              </div>
            </div>

            {/* Audit Status History Timeline */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink)] flex items-center gap-1.5">
                <History className="w-3.5 h-3.5 text-[var(--dp-color-annotation)]" />
                <span>Audit Status Trail (Database-Recorded)</span>
              </h4>

              {isLoadingDetails ? (
                <div className="text-center py-4 text-xs text-[var(--dp-color-ink-muted)]">
                  Loading timeline...
                </div>
              ) : !selectedOrderDetails?.timeline || selectedOrderDetails.timeline.length === 0 ? (
                <div className="text-xs text-[var(--dp-color-ink-muted)] p-3 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)]">
                  Initial order placement logged at {new Date(selectedOrder.placedAt).toLocaleString()}
                </div>
              ) : (
                <div className="space-y-2">
                  {selectedOrderDetails.timeline.map((entry, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)] flex items-start justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-[var(--dp-color-ink)] block">
                          Status shifted to <strong className="uppercase">{entry.status.replace('_', ' ')}</strong>
                        </span>
                        {entry.notes && (
                          <span className="text-[11px] text-[var(--dp-color-ink-muted)] block mt-0.5">
                            {entry.notes}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-[var(--dp-color-ink-muted)] shrink-0">
                        {new Date(entry.createdAt).toLocaleTimeString('en-IN', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminOrdersPage
