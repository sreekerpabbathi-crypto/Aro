import type { Order, OrderStatus } from './order'

export type AdminRole = 'super_admin' | 'admin' | 'manager'

export interface AdminUser {
  id: string
  email: string
  role: AdminRole
  createdAt?: string
}

export interface AdminDashboardMetrics {
  totalOrders: number
  activeOrders: number
  completedOrders: number
  cancelledOrders: number
  totalRevenue: number
  totalRestaurants: number
  totalMenuItems: number
  totalCustomers: number
  recentOrders: Order[]
  ordersByStatus: Record<OrderStatus, number>
}

export interface AdminOrderFilters {
  searchQuery?: string
  status?: 'all' | OrderStatus
  paymentStatus?: 'all' | 'PAID' | 'PENDING' | 'FAILED'
  restaurantId?: string
}

export interface AdminRestaurantFilters {
  searchQuery?: string
  status?: 'all' | 'open' | 'closed'
  priceTier?: 'all' | '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹'
}

export interface AdminMenuItemFilters {
  searchQuery?: string
  restaurantId?: string
  categoryId?: string
  dietary?: 'all' | 'veg' | 'non_veg' | 'chef_special'
  availability?: 'all' | 'available' | 'unavailable'
}

export interface AdminMenuItemWithDetails {
  id: string
  restaurantId: string
  restaurantName: string
  categoryId: string
  categoryName: string
  name: string
  description: string
  price: number
  imageUrl?: string
  isVeg: boolean
  isChefSpecial: boolean
  isAvailable: boolean
  prepTimeMinutes: number
  createdAt: string
  updatedAt: string
}
