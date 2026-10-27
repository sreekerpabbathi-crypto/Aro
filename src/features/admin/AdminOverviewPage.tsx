import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchDashboardMetrics } from '@/services/adminService'
import type { AdminDashboardMetrics, OrderStatus } from '@/types'
import { formatCurrency } from '@/lib/utils'
import {
  ShoppingBag,
  Clock,
  CheckCircle2,
  Building2,
  BookOpen,
  Users,
  IndianRupee,
  ArrowRight,
  RefreshCw,
  AlertCircle,
  Eye,
} from 'lucide-react'

export const AdminOverviewPage: React.FC = () => {
  const [metrics, setMetrics] = useState<AdminDashboardMetrics | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadMetrics = async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await fetchDashboardMetrics()
      setMetrics(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch dashboard metrics.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadMetrics()
  }, [])

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

  return (
    <div className="space-y-6">
      {/* Page Title & Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
        <div>
          <h1 className="text-2xl font-black text-[var(--dp-color-ink)] tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] mt-0.5">
            Real-time metrics from your live Supabase database
          </p>
        </div>

        <button
          type="button"
          onClick={loadMetrics}
          disabled={isLoading}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] hover:bg-[#ede6d5] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] cursor-pointer transition-all disabled:opacity-50"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh Data</span>
        </button>
      </div>

      {/* Error Notice */}
      {error && (
        <div className="p-4 rounded-xl bg-[var(--dp-color-accent)]/10 border-[1.5px] border-[var(--dp-color-accent)] flex items-start gap-3 text-xs text-[var(--dp-color-ink)]">
          <AlertCircle className="w-5 h-5 text-[var(--dp-color-accent)] shrink-0" />
          <div>
            <span className="font-bold block text-[var(--dp-color-accent)]">Database Query Error</span>
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* Primary KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Orders */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_var(--dp-color-line)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)]">
              Total Orders
            </span>
            <div className="w-8 h-8 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)] flex items-center justify-center text-[var(--dp-color-ink)]">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[var(--dp-color-ink)]">
              {isLoading ? '...' : metrics?.totalOrders ?? 0}
            </span>
            <span className="block text-[11px] text-[var(--dp-color-ink-muted)] mt-1">
              Historical purchase contracts
            </span>
          </div>
        </div>

        {/* Active Orders */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_var(--dp-color-line)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)]">
              Active Orders
            </span>
            <div className="w-8 h-8 rounded-lg bg-[var(--dp-color-highlight)] border border-[var(--dp-color-ink)] flex items-center justify-center text-[var(--dp-color-ink)]">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[var(--dp-color-accent)]">
              {isLoading ? '...' : metrics?.activeOrders ?? 0}
            </span>
            <span className="block text-[11px] text-[var(--dp-color-ink-muted)] mt-1">
              Preparing or in-transit
            </span>
          </div>
        </div>

        {/* Completed Orders */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_var(--dp-color-line)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)]">
              Completed Orders
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[#059669]">
              {isLoading ? '...' : metrics?.completedOrders ?? 0}
            </span>
            <span className="block text-[11px] text-[var(--dp-color-ink-muted)] mt-1">
              Successfully delivered
            </span>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_var(--dp-color-line)] flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)]">
              Gross Volume
            </span>
            <div className="w-8 h-8 rounded-lg bg-[var(--dp-color-annotation)] text-white flex items-center justify-center">
              <IndianRupee className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-2xl sm:text-3xl font-black text-[var(--dp-color-ink)]">
              {isLoading ? '...' : formatCurrency(metrics?.totalRevenue ?? 0)}
            </span>
            <span className="block text-[11px] text-[var(--dp-color-ink-muted)] mt-1">
              Paid order revenue
            </span>
          </div>
        </div>
      </div>

      {/* Secondary Catalog Entity Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Restaurants Count */}
        <div className="p-4 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] flex items-center justify-between shadow-[1px_1px_0px_var(--dp-color-line)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--dp-color-scrap)] border border-[var(--dp-color-line)] flex items-center justify-center text-[var(--dp-color-ink)]">
              <Building2 className="w-5 h-5 text-[var(--dp-color-accent)]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] block">
                Restaurants
              </span>
              <span className="text-xl font-black text-[var(--dp-color-ink)]">
                {isLoading ? '...' : metrics?.totalRestaurants ?? 0}
              </span>
            </div>
          </div>
          <Link
            to="/admin/restaurants"
            className="text-xs font-bold text-[var(--dp-color-accent)] hover:underline flex items-center gap-1"
          >
            <span>Manage →</span>
          </Link>
        </div>

        {/* Menu Items Count */}
        <div className="p-4 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] flex items-center justify-between shadow-[1px_1px_0px_var(--dp-color-line)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--dp-color-scrap)] border border-[var(--dp-color-line)] flex items-center justify-center text-[var(--dp-color-ink)]">
              <BookOpen className="w-5 h-5 text-[var(--dp-color-annotation)]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] block">
                Menu Items
              </span>
              <span className="text-xl font-black text-[var(--dp-color-ink)]">
                {isLoading ? '...' : metrics?.totalMenuItems ?? 0}
              </span>
            </div>
          </div>
          <Link
            to="/admin/menu"
            className="text-xs font-bold text-[var(--dp-color-accent)] hover:underline flex items-center gap-1"
          >
            <span>Manage →</span>
          </Link>
        </div>

        {/* Customers Count */}
        <div className="p-4 rounded-xl bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] flex items-center justify-between shadow-[1px_1px_0px_var(--dp-color-line)]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--dp-color-scrap)] border border-[var(--dp-color-line)] flex items-center justify-center text-[var(--dp-color-ink)]">
              <Users className="w-5 h-5 text-[#059669]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] block">
                Registered Profiles
              </span>
              <span className="text-xl font-black text-[var(--dp-color-ink)]">
                {isLoading ? '...' : metrics?.totalCustomers ?? 0}
              </span>
            </div>
          </div>
          <span className="text-[11px] font-bold text-[var(--dp-color-ink-muted)]">Verified</span>
        </div>
      </div>

      {/* Order Status Distribution Bar */}
      {metrics && (
        <div className="p-5 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_var(--dp-color-line)] space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--dp-color-ink)]">
            Order Lifecycle Distribution
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)]">
              <span className="text-[10px] uppercase font-bold text-amber-800 block">Placed</span>
              <strong className="text-base font-black text-[var(--dp-color-ink)]">
                {metrics.ordersByStatus.placed}
              </strong>
            </div>
            <div className="p-2.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)]">
              <span className="text-[10px] uppercase font-bold text-blue-800 block">Confirmed</span>
              <strong className="text-base font-black text-[var(--dp-color-ink)]">
                {metrics.ordersByStatus.confirmed}
              </strong>
            </div>
            <div className="p-2.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)]">
              <span className="text-[10px] uppercase font-bold text-orange-800 block">Preparing</span>
              <strong className="text-base font-black text-[var(--dp-color-ink)]">
                {metrics.ordersByStatus.kitchen_preparing}
              </strong>
            </div>
            <div className="p-2.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)]">
              <span className="text-[10px] uppercase font-bold text-indigo-800 block">Rider Assigned</span>
              <strong className="text-base font-black text-[var(--dp-color-ink)]">
                {metrics.ordersByStatus.rider_assigned}
              </strong>
            </div>
            <div className="p-2.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)]">
              <span className="text-[10px] uppercase font-bold text-purple-800 block">In Transit</span>
              <strong className="text-base font-black text-[var(--dp-color-ink)]">
                {metrics.ordersByStatus.out_for_delivery}
              </strong>
            </div>
            <div className="p-2.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)]">
              <span className="text-[10px] uppercase font-bold text-emerald-800 block">Delivered</span>
              <strong className="text-base font-black text-[var(--dp-color-ink)]">
                {metrics.ordersByStatus.delivered}
              </strong>
            </div>
            <div className="p-2.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)]">
              <span className="text-[10px] uppercase font-bold text-rose-800 block">Cancelled</span>
              <strong className="text-base font-black text-[var(--dp-color-ink)]">
                {metrics.ordersByStatus.cancelled}
              </strong>
            </div>
          </div>
        </div>
      )}

      {/* Recent Orders Section */}
      <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl shadow-[2px_2px_0px_var(--dp-color-line)] overflow-hidden">
        <div className="p-5 border-b-[1.5px] border-[var(--dp-color-line)] flex items-center justify-between">
          <div>
            <h2 className="text-base font-bold text-[var(--dp-color-ink)]">Recent Customer Orders</h2>
            <p className="text-xs text-[var(--dp-color-ink-muted)]">Live transactions recorded in Supabase</p>
          </div>

          <Link
            to="/admin/orders"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] hover:border-[var(--dp-color-ink)] transition-colors shadow-[1px_1px_0px_var(--dp-color-line)]"
          >
            <span>View All Orders</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)] font-bold text-[var(--dp-color-ink)] uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Order #</th>
                <th className="py-3 px-4">Customer</th>
                <th className="py-3 px-4">Restaurant</th>
                <th className="py-3 px-4">Date & Time</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--dp-color-line)]/50">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-[var(--dp-color-ink-muted)]">
                    Loading orders from database...
                  </td>
                </tr>
              ) : !metrics?.recentOrders || metrics.recentOrders.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-[var(--dp-color-ink-muted)]">
                    No orders recorded yet.
                  </td>
                </tr>
              ) : (
                metrics.recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-[var(--dp-color-ground)]/50 transition-colors">
                    <td className="py-3 px-4 font-mono font-bold text-[var(--dp-color-ink)]">
                      {order.orderNumber}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-semibold text-[var(--dp-color-ink)] block">
                        {order.deliveryAddress?.recipientName || 'Valued Guest'}
                      </span>
                      <span className="text-[11px] text-[var(--dp-color-ink-muted)]">
                        {order.deliveryAddress?.city || 'Hyderabad'}
                      </span>
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
                    <td className="py-3 px-4 font-bold text-[var(--dp-color-ink)]">
                      {formatCurrency(order.finalPaidAmount)}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusBadge(
                          order.status
                        )}`}
                      >
                        {order.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Link
                        to={`/admin/orders?highlight=${order.id}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[var(--dp-color-ground)] hover:bg-[#ede6d5] border border-[var(--dp-color-line)] text-xs font-semibold text-[var(--dp-color-ink)]"
                      >
                        <Eye className="w-3 h-3 text-[var(--dp-color-accent)]" />
                        <span>Manage</span>
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminOverviewPage
