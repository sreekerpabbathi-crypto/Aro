import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type {
  AdminUser,
  AdminDashboardMetrics,
  AdminOrderFilters,
  AdminRestaurantFilters,
  AdminMenuItemFilters,
  AdminMenuItemWithDetails,
  Order,
  OrderStatus,
  Restaurant,
  MenuItem,
  MenuCategory,
} from '@/types'

/**
 * Service providing database-backed operations for the ARO Admin Dashboard.
 * All operations communicate with Supabase PostgreSQL and are protected by RLS.
 */

export async function verifyAdminStatus(userId: string): Promise<{
  isAdmin: boolean
  user?: AdminUser
  error?: string
}> {
  if (!isSupabaseConfigured || !userId) {
    return { isAdmin: false }
  }

  try {
    // 1. First attempt to query the secure admin_users table directly
    const { data, error } = await supabase
      .from('admin_users')
      .select('user_id, email, role, created_at')
      .eq('user_id', userId)
      .maybeSingle()

    if (!error && data) {
      return {
        isAdmin: true,
        user: {
          id: data.user_id,
          email: data.email,
          role: data.role as AdminUser['role'],
          createdAt: data.created_at,
        },
      }
    }

    // 2. Fallback check: call is_admin RPC function if available
    try {
      const { data: rpcIsAdmin, error: rpcError } = await supabase.rpc('is_admin', {
        check_user_id: userId,
      })
      if (!rpcError && rpcIsAdmin === true) {
        return {
          isAdmin: true,
          user: {
            id: userId,
            email: 'admin@aroeats.com',
            role: 'admin',
          },
        }
      }
    } catch {
      // RPC may not exist if migration not yet applied
    }

    // If table returned an error indicating table doesn't exist
    if (error && (error.code === '42P01' || error.message.includes('does not exist'))) {
      return {
        isAdmin: false,
        error:
          'The `admin_users` table does not exist in your Supabase database yet. Please apply migration `20261027000000_aro_admin_roles_and_rls.sql` in the Supabase SQL Editor.',
      }
    }

    return { isAdmin: false }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    return { isAdmin: false, error: message }
  }
}

/**
 * Fetch live dashboard summary metrics from Supabase database.
 */
export async function fetchDashboardMetrics(): Promise<AdminDashboardMetrics> {
  const defaultMetrics: AdminDashboardMetrics = {
    totalOrders: 0,
    activeOrders: 0,
    completedOrders: 0,
    cancelledOrders: 0,
    totalRevenue: 0,
    totalRestaurants: 0,
    totalMenuItems: 0,
    totalCustomers: 0,
    recentOrders: [],
    ordersByStatus: {
      placed: 0,
      confirmed: 0,
      kitchen_preparing: 0,
      rider_assigned: 0,
      out_for_delivery: 0,
      delivered: 0,
      cancelled: 0,
    },
  }

  if (!isSupabaseConfigured) {
    return defaultMetrics
  }

  try {
    // 1. Fetch Orders and calculate status aggregations
    const { data: ordersData, error: ordersError } = await supabase
      .from('orders')
      .select('*')
      .order('placed_at', { ascending: false })

    if (ordersError) {
      console.warn('[ARO Admin] Orders metrics fetch error:', ordersError.message)
    }

    const orders = ordersData || []
    const ordersByStatus: Record<OrderStatus, number> = {
      placed: 0,
      confirmed: 0,
      kitchen_preparing: 0,
      rider_assigned: 0,
      out_for_delivery: 0,
      delivered: 0,
      cancelled: 0,
    }

    let totalRevenue = 0
    let activeOrders = 0
    let completedOrders = 0
    let cancelledOrders = 0

    orders.forEach((row) => {
      const status = row.status as OrderStatus
      if (ordersByStatus[status] !== undefined) {
        ordersByStatus[status] += 1
      }

      if (['placed', 'confirmed', 'kitchen_preparing', 'rider_assigned', 'out_for_delivery'].includes(status)) {
        activeOrders += 1
      } else if (status === 'delivered') {
        completedOrders += 1
      } else if (status === 'cancelled') {
        cancelledOrders += 1
      }

      if (status !== 'cancelled') {
        totalRevenue += Number(row.final_paid_amount || 0)
      }
    })

    // 2. Fetch Restaurants Count
    const { count: restaurantsCount, error: restError } = await supabase
      .from('restaurants')
      .select('*', { count: 'exact', head: true })

    if (restError) {
      console.warn('[ARO Admin] Restaurants count error:', restError.message)
    }

    // 3. Fetch Menu Items Count
    const { count: menuItemsCount, error: menuError } = await supabase
      .from('menu_items')
      .select('*', { count: 'exact', head: true })

    if (menuError) {
      console.warn('[ARO Admin] Menu items count error:', menuError.message)
    }

    // 4. Fetch Customers Count
    let totalCustomers = 0
    try {
      const { count: customersCount, error: custError } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })

      if (!custError && customersCount !== null) {
        totalCustomers = customersCount
      }
    } catch {
      // Profiles RLS might restrict if not full admin yet
    }

    // 5. Map recent 5 orders
    const recentOrders: Order[] = orders.slice(0, 6).map(mapOrderRowToOrder)

    return {
      totalOrders: orders.length,
      activeOrders,
      completedOrders,
      cancelledOrders,
      totalRevenue,
      totalRestaurants: restaurantsCount || 0,
      totalMenuItems: menuItemsCount || 0,
      totalCustomers,
      recentOrders,
      ordersByStatus,
    }
  } catch (err) {
    console.error('[ARO Admin] Failed to fetch dashboard metrics:', err)
    return defaultMetrics
  }
}

/**
 * Fetch and filter orders for the Admin Orders management page.
 */
export async function fetchAdminOrders(filters?: AdminOrderFilters): Promise<Order[]> {
  if (!isSupabaseConfigured) return []

  try {
    let query = supabase.from('orders').select('*').order('placed_at', { ascending: false })

    if (filters?.status && filters.status !== 'all') {
      query = query.eq('status', filters.status)
    }

    if (filters?.paymentStatus && filters.paymentStatus !== 'all') {
      query = query.eq('payment_status', filters.paymentStatus)
    }

    if (filters?.restaurantId) {
      query = query.eq('restaurant_id', filters.restaurantId)
    }

    const { data, error } = await query

    if (error || !data) {
      console.warn('[ARO Admin] Orders fetch error:', error?.message)
      return []
    }

    let result = data.map(mapOrderRowToOrder)

    if (filters?.searchQuery && filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim()
      result = result.filter(
        (o) =>
          o.orderNumber.toLowerCase().includes(q) ||
          o.restaurantNameSnapshot.toLowerCase().includes(q) ||
          o.deliveryAddress?.recipientName?.toLowerCase().includes(q) ||
          o.deliveryAddress?.recipientPhone?.includes(q) ||
          o.id.toLowerCase().includes(q)
      )
    }

    return result
  } catch (err) {
    console.error('[ARO Admin] Orders fetch exception:', err)
    return []
  }
}

/**
 * Fetch line items and audit timeline for an individual order.
 */
export async function fetchAdminOrderDetails(orderId: string): Promise<{
  order?: Order
  timeline: Array<{ status: string; fromStatus?: string; notes?: string; createdAt: string }>
  items: Array<{
    id: string
    itemNameSnapshot: string
    itemPriceSnapshot: number
    quantity: number
    totalPriceSnapshot: number
  }>
}> {
  if (!isSupabaseConfigured || !orderId) {
    return { timeline: [], items: [] }
  }

  try {
    // 1. Fetch order
    const { data: orderData } = await supabase.from('orders').select('*').eq('id', orderId).maybeSingle()

    // 2. Fetch timeline
    const { data: historyData } = await supabase
      .from('order_status_history')
      .select('*')
      .eq('order_id', orderId)
      .order('created_at', { ascending: true })

    // 3. Fetch items
    const { data: itemsData } = await supabase
      .from('order_items')
      .select('*')
      .eq('order_id', orderId)

    const timeline = (historyData || []).map((h) => ({
      status: h.to_status,
      fromStatus: h.from_status || undefined,
      notes: h.notes || undefined,
      createdAt: h.created_at,
    }))

    const items = (itemsData || []).map((i) => ({
      id: i.id,
      itemNameSnapshot: i.item_name_snapshot,
      itemPriceSnapshot: Number(i.item_price_snapshot),
      quantity: i.quantity,
      totalPriceSnapshot: Number(i.total_price_snapshot),
    }))

    return {
      order: orderData ? mapOrderRowToOrder(orderData) : undefined,
      timeline,
      items,
    }
  } catch (err) {
    console.error('[ARO Admin] Error loading order details:', err)
    return { timeline: [], items: [] }
  }
}

/**
 * Update an order's status and record an audit log entry.
 */
export async function updateAdminOrderStatus(
  orderId: string,
  newStatus: OrderStatus,
  currentStatus?: OrderStatus,
  notes?: string
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Database is not configured' }
  }

  try {
    const updatePayload: Record<string, unknown> = {
      status: newStatus,
    }

    if (newStatus === 'delivered') {
      updatePayload.delivered_at = new Date().toISOString()
    }

    // 1. Update orders table
    const { error: updateError } = await supabase
      .from('orders')
      .update(updatePayload)
      .eq('id', orderId)

    if (updateError) {
      return { success: false, error: updateError.message }
    }

    // 2. Insert into audit trail: order_status_history
    const { error: historyError } = await supabase.from('order_status_history').insert({
      order_id: orderId,
      from_status: currentStatus || null,
      to_status: newStatus,
      notes: notes || `Order status updated to ${newStatus} by administrator`,
    })

    if (historyError) {
      console.warn('[ARO Admin] Audit log insert warning:', historyError.message)
    }

    return { success: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { success: false, error: message }
  }
}

/**
 * Fetch restaurants for Admin Restaurant Management.
 */
export async function fetchAdminRestaurants(filters?: AdminRestaurantFilters): Promise<Restaurant[]> {
  if (!isSupabaseConfigured) return []

  try {
    let query = supabase
      .from('restaurants')
      .select('*, restaurant_cuisines(cuisine:cuisines(*)), categories(*)')
      .order('name', { ascending: true })

    if (filters?.priceTier && filters.priceTier !== 'all') {
      query = query.eq('price_tier', filters.priceTier)
    }

    if (filters?.status === 'open') {
      query = query.eq('is_open', true)
    } else if (filters?.status === 'closed') {
      query = query.eq('is_open', false)
    }

    const { data, error } = await query

    if (error || !data) {
      console.warn('[ARO Admin] Restaurants fetch error:', error?.message)
      return []
    }

    let results: Restaurant[] = data.map((row) => ({
      id: row.id,
      name: row.name,
      slug: row.slug,
      tagline: row.tagline,
      description: row.description,
      coverImage: row.cover_image,
      logoImage: row.logo_image || undefined,
      rating: Number(row.rating) || 4.5,
      ratingCount: Number(row.rating_count) || 0,
      priceTier: row.price_tier || '₹₹',
      deliveryTimeEstimateMin: Number(row.delivery_time_min) || 25,
      deliveryTimeEstimateMax: Number(row.delivery_time_max) || 40,
      minimumOrderAmount: Number(row.minimum_order) || 0,
      deliveryFee: Number(row.delivery_fee) || 40,
      isFeatured: Boolean(row.is_featured),
      isOpen: Boolean(row.is_open),
      addressLine: row.address_line,
      city: row.city || 'Hyderabad',
      latitude: Number(row.latitude),
      longitude: Number(row.longitude),
      cuisines: (row.restaurant_cuisines || [])
        .map((rc: { cuisine?: { id: string; name: string; slug: string; icon?: string } }) => rc.cuisine)
        .filter(Boolean),
      categories: (row.categories || []).map((c: { id: string; name: string; slug: string; display_order: number }) => ({
        id: c.id,
        restaurantId: row.id,
        name: c.name,
        displayOrder: c.display_order,
        items: [],
      })),
    }))

    if (filters?.searchQuery && filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim()
      results = results.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.tagline.toLowerCase().includes(q) ||
          r.addressLine.toLowerCase().includes(q) ||
          r.slug.toLowerCase().includes(q)
      )
    }

    return results
  } catch (err) {
    console.error('[ARO Admin] Restaurants fetch exception:', err)
    return []
  }
}

/**
 * Create a new restaurant in Supabase.
 */
export async function createAdminRestaurant(
  restaurant: Omit<Restaurant, 'id' | 'cuisines' | 'categories'>
): Promise<{ success: boolean; data?: Restaurant; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Database is not configured' }
  }

  try {
    const slug = restaurant.slug || restaurant.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    const payload = {
      name: restaurant.name,
      slug,
      tagline: restaurant.tagline,
      description: restaurant.description,
      cover_image: restaurant.coverImage,
      logo_image: restaurant.logoImage || null,
      rating: restaurant.rating || 4.5,
      rating_count: restaurant.ratingCount || 0,
      price_tier: restaurant.priceTier || '₹₹',
      delivery_time_min: restaurant.deliveryTimeEstimateMin || 25,
      delivery_time_max: restaurant.deliveryTimeEstimateMax || 40,
      minimum_order: restaurant.minimumOrderAmount || 0,
      delivery_fee: restaurant.deliveryFee || 40,
      packaging_fee: 25,
      is_featured: restaurant.isFeatured || false,
      is_open: restaurant.isOpen !== undefined ? restaurant.isOpen : true,
      address_line: restaurant.addressLine,
      city: restaurant.city || 'Hyderabad',
      latitude: restaurant.latitude || 17.4325,
      longitude: restaurant.longitude || 78.4072,
    }

    const { data, error } = await supabase.from('restaurants').insert(payload).select().single()

    if (error) {
      return { success: false, error: error.message }
    }

    return {
      success: true,
      data: {
        ...restaurant,
        id: data.id,
        cuisines: [],
      },
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { success: false, error: message }
  }
}

/**
 * Update an existing restaurant in Supabase.
 */
export async function updateAdminRestaurant(
  id: string,
  updates: Partial<Restaurant>
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Database is not configured' }
  }

  try {
    const payload: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    }

    if (updates.name !== undefined) payload.name = updates.name
    if (updates.slug !== undefined) payload.slug = updates.slug
    if (updates.tagline !== undefined) payload.tagline = updates.tagline
    if (updates.description !== undefined) payload.description = updates.description
    if (updates.coverImage !== undefined) payload.cover_image = updates.coverImage
    if (updates.logoImage !== undefined) payload.logo_image = updates.logoImage
    if (updates.rating !== undefined) payload.rating = updates.rating
    if (updates.priceTier !== undefined) payload.price_tier = updates.priceTier
    if (updates.deliveryTimeEstimateMin !== undefined) payload.delivery_time_min = updates.deliveryTimeEstimateMin
    if (updates.deliveryTimeEstimateMax !== undefined) payload.delivery_time_max = updates.deliveryTimeEstimateMax
    if (updates.minimumOrderAmount !== undefined) payload.minimum_order = updates.minimumOrderAmount
    if (updates.deliveryFee !== undefined) payload.delivery_fee = updates.deliveryFee
    if (updates.isFeatured !== undefined) payload.is_featured = updates.isFeatured
    if (updates.isOpen !== undefined) payload.is_open = updates.isOpen
    if (updates.addressLine !== undefined) payload.address_line = updates.addressLine
    if (updates.city !== undefined) payload.city = updates.city
    if (updates.latitude !== undefined) payload.latitude = updates.latitude
    if (updates.longitude !== undefined) payload.longitude = updates.longitude

    const { error } = await supabase.from('restaurants').update(payload).eq('id', id)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { success: false, error: message }
  }
}

/**
 * Toggle restaurant open/closed status.
 */
export async function toggleRestaurantOpen(
  id: string,
  isOpen: boolean
): Promise<{ success: boolean; error?: string }> {
  return updateAdminRestaurant(id, { isOpen })
}

/**
 * Fetch menu items with restaurant and category names for Admin Menu management.
 */
export async function fetchAdminMenuItems(filters?: AdminMenuItemFilters): Promise<AdminMenuItemWithDetails[]> {
  if (!isSupabaseConfigured) return []

  try {
    let query = supabase
      .from('menu_items')
      .select('*, restaurants(id, name), categories(id, name)')
      .order('name', { ascending: true })

    if (filters?.restaurantId && filters.restaurantId !== 'all') {
      query = query.eq('restaurant_id', filters.restaurantId)
    }

    if (filters?.categoryId && filters.categoryId !== 'all') {
      query = query.eq('category_id', filters.categoryId)
    }

    if (filters?.availability === 'available') {
      query = query.eq('is_available', true)
    } else if (filters?.availability === 'unavailable') {
      query = query.eq('is_available', false)
    }

    if (filters?.dietary === 'veg') {
      query = query.eq('is_veg', true)
    } else if (filters?.dietary === 'non_veg') {
      query = query.eq('is_veg', false)
    } else if (filters?.dietary === 'chef_special') {
      query = query.eq('is_chef_special', true)
    }

    const { data, error } = await query

    if (error || !data) {
      console.warn('[ARO Admin] Menu items fetch error:', error?.message)
      return []
    }

    let results: AdminMenuItemWithDetails[] = data.map((row) => ({
      id: row.id,
      restaurantId: row.restaurant_id,
      restaurantName: row.restaurants?.name || 'Unknown Atelier',
      categoryId: row.category_id,
      categoryName: row.categories?.name || 'Standard Menu',
      name: row.name,
      description: row.description || '',
      price: Number(row.price),
      imageUrl: row.image_url || undefined,
      isVeg: Boolean(row.is_veg),
      isChefSpecial: Boolean(row.is_chef_special),
      isAvailable: Boolean(row.is_available),
      prepTimeMinutes: row.prep_time_minutes || 20,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }))

    if (filters?.searchQuery && filters.searchQuery.trim()) {
      const q = filters.searchQuery.toLowerCase().trim()
      results = results.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.restaurantName.toLowerCase().includes(q) ||
          m.categoryName.toLowerCase().includes(q)
      )
    }

    return results
  } catch (err) {
    console.error('[ARO Admin] Menu items fetch exception:', err)
    return []
  }
}

/**
 * Fetch categories for a specific restaurant.
 */
export async function fetchRestaurantCategories(restaurantId: string): Promise<MenuCategory[]> {
  if (!isSupabaseConfigured || !restaurantId) return []

  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('display_order', { ascending: true })

    if (error || !data) {
      return []
    }

    return data.map((c) => ({
      id: c.id,
      restaurantId: c.restaurant_id,
      name: c.name,
      displayOrder: c.display_order,
      items: [],
    }))
  } catch {
    return []
  }
}

/**
 * Create a new category for a restaurant if needed.
 */
export async function createRestaurantCategory(
  restaurantId: string,
  name: string
): Promise<{ success: boolean; data?: { id: string; name: string }; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Database is not configured' }
  }

  try {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const { data, error } = await supabase
      .from('categories')
      .insert({
        restaurant_id: restaurantId,
        name,
        slug,
        display_order: 1,
      })
      .select()
      .single()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data: { id: data.id, name: data.name } }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { success: false, error: message }
  }
}

/**
 * Create a new menu item.
 */
export async function createAdminMenuItem(
  item: Omit<MenuItem, 'id'>
): Promise<{ success: boolean; data?: MenuItem; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Database is not configured' }
  }

  try {
    const payload = {
      restaurant_id: item.restaurantId,
      category_id: item.categoryId,
      name: item.name,
      description: item.description || '',
      price: item.price,
      image_url: item.imageUrl || null,
      is_veg: item.isVeg,
      is_chef_special: item.isChefSpecial || false,
      is_available: item.isAvailable !== undefined ? item.isAvailable : true,
      prep_time_minutes: item.preparationTimeMinutes || 20,
    }

    const { data, error } = await supabase.from('menu_items').insert(payload).select().single()

    if (error) {
      return { success: false, error: error.message }
    }

    return {
      success: true,
      data: {
        ...item,
        id: data.id,
      },
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { success: false, error: message }
  }
}

/**
 * Update a menu item's attributes (price, description, availability, etc.).
 */
export async function updateAdminMenuItem(
  id: string,
  updates: Partial<MenuItem>
): Promise<{ success: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Database is not configured' }
  }

  try {
    const payload: Record<string, unknown> = {
      updated_at: new Date().toISOString(),
    }

    if (updates.name !== undefined) payload.name = updates.name
    if (updates.description !== undefined) payload.description = updates.description
    if (updates.price !== undefined) payload.price = updates.price
    if (updates.imageUrl !== undefined) payload.image_url = updates.imageUrl
    if (updates.isVeg !== undefined) payload.is_veg = updates.isVeg
    if (updates.isChefSpecial !== undefined) payload.is_chef_special = updates.isChefSpecial
    if (updates.isAvailable !== undefined) payload.is_available = updates.isAvailable
    if (updates.preparationTimeMinutes !== undefined) payload.prep_time_minutes = updates.preparationTimeMinutes
    if (updates.categoryId !== undefined) payload.category_id = updates.categoryId

    const { error } = await supabase.from('menu_items').update(payload).eq('id', id)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { success: false, error: message }
  }
}

/**
 * Toggle menu item availability.
 */
export async function toggleMenuItemAvailability(
  id: string,
  isAvailable: boolean
): Promise<{ success: boolean; error?: string }> {
  return updateAdminMenuItem(id, { isAvailable })
}

/**
 * Safely delete or deactivate a menu item.
 * If historical orders reference this item, safe deactivation is applied instead of hard delete.
 */
export async function deleteAdminMenuItem(
  id: string
): Promise<{ success: boolean; deactivatedInstead?: boolean; error?: string }> {
  if (!isSupabaseConfigured) {
    return { success: false, error: 'Database is not configured' }
  }

  try {
    // Attempt delete
    const { error } = await supabase.from('menu_items').delete().eq('id', id)

    if (error) {
      // Foreign key constraint violation (e.g. 23503: referenced by order_items or cart_items)
      if (error.code === '23503' || error.message.includes('foreign key constraint')) {
        // Safe deactivation fallback: preserve historical orders
        const { error: deactError } = await supabase
          .from('menu_items')
          .update({ is_available: false, updated_at: new Date().toISOString() })
          .eq('id', id)

        if (deactError) {
          return { success: false, error: deactError.message }
        }

        return {
          success: true,
          deactivatedInstead: true,
        }
      }

      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return { success: false, error: message }
  }
}

/**
 * Helper: Map database row to frontend Order model
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapOrderRowToOrder(row: any): Order {
  return {
    id: row.id,
    orderNumber: row.order_number,
    customerId: row.profile_id,
    restaurantId: row.restaurant_id,
    restaurantNameSnapshot: row.restaurant_name_snapshot,
    restaurantAddressSnapshot: row.restaurant_address_snapshot,
    status: row.status as OrderStatus,
    items: [],
    itemTotal: Number(row.item_total),
    deliveryFee: Number(row.delivery_fee),
    taxAmount: Number(row.tax_amount),
    discountAmount: Number(row.discount_amount || 0),
    finalPaidAmount: Number(row.final_paid_amount),
    deliveryAddress: row.delivery_address_json || {
      label: 'Home',
      recipientName: 'Valued Guest',
      recipientPhone: '+91 98765 43210',
      addressLine1: 'Hyderabad, Telangana',
      city: 'Hyderabad',
      pincode: '500033',
      latitude: 17.4325,
      longitude: 78.4072,
    },
    placedAt: row.placed_at,
    estimatedDeliveryAt: row.delivered_at || new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    paymentMethod: (row.payment_method as Order['paymentMethod']) || 'UPI',
    paymentStatus: (row.payment_status as Order['paymentStatus']) || 'PAID',
    timeline: [
      {
        status: row.status as OrderStatus,
        title: `Order ${row.status}`,
        description: `Current order status is ${row.status}`,
        timestamp: row.placed_at,
        isCompleted: true,
      },
    ],
  }
}
