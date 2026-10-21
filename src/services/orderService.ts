import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import type { Order } from '@/types'

/**
 * Service to sync customer orders with Supabase PostgreSQL tables:
 * - orders (header)
 * - order_status_history (audit timeline)
 * - deliveries (tracking assignment)
 */
export async function createOrderInSupabase(order: Order): Promise<boolean> {
  if (!isSupabaseConfigured) {
    return false
  }

  try {
    // 1. Ensure valid profile exists or use demo profile
    const profileId =
      order.customerId && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(order.customerId)
        ? order.customerId
        : '00000001-0000-0000-0000-000000000001'

    // 2. Insert into orders table
    const { error: orderError } = await supabase.from('orders').insert({
      id: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(order.id)
        ? order.id
        : undefined,
      order_number: order.orderNumber,
      profile_id: profileId,
      restaurant_id: order.restaurantId,
      restaurant_name_snapshot: order.restaurantNameSnapshot,
      restaurant_address_snapshot: order.restaurantAddressSnapshot || 'Hyderabad',
      status: order.status || 'placed',
      item_total: order.itemTotal,
      delivery_fee: order.deliveryFee,
      packaging_fee: 25.0,
      tax_amount: order.taxAmount,
      discount_amount: order.discountAmount || 0,
      final_paid_amount: order.finalPaidAmount,
      payment_method: order.paymentMethod || 'UPI',
      payment_status: order.paymentStatus || 'PAID',
      delivery_address_json: order.deliveryAddress,
      customer_notes: null,
      placed_at: order.placedAt,
    })

    if (orderError) {
      console.warn('[ARO Supabase] Failed to write order to Supabase:', orderError.message)
      return false
    }

    // 3. Insert order status history
    if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(order.id)) {
      await supabase.from('order_status_history').insert({
        order_id: order.id,
        from_status: null,
        to_status: 'placed',
        notes: 'Initial order placement completed via simulated UPI',
      })
    }

    // 4. Create initial delivery assignment if rider is assigned
    if (order.rider && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(order.id)) {
      await supabase.from('deliveries').insert({
        order_id: order.id,
        rider_name: order.rider.name,
        rider_phone: order.rider.phone,
        vehicle_number: order.rider.vehicleNumber,
        current_status: 'assigned',
        current_latitude: order.rider.currentLatitude,
        current_longitude: order.rider.currentLongitude,
        estimated_arrival_minutes: 25,
      })
    }

    return true
  } catch (err) {
    console.error('[ARO Supabase] Unexpected error saving order to database:', err)
    return false
  }
}

/**
 * Fetch past orders for the active profile from Supabase
 */
export async function fetchCustomerOrders(profileId: string): Promise<Order[]> {
  if (!isSupabaseConfigured) return []

  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('profile_id', profileId)
      .order('placed_at', { ascending: false })

    if (error || !data) {
      return []
    }

    // Map DB orders back to frontend Order interface
    return data.map((row) => {
      let deliveryAddress = row.delivery_address_json
      // Guard against stale pre-migration Bengaluru demo addresses for Sreeram
      if (
        deliveryAddress &&
        (deliveryAddress.city === 'Bengaluru' || deliveryAddress.city === 'Bangalore') &&
        row.profile_id === '00000001-0000-0000-0000-000000000001'
      ) {
        deliveryAddress = {
          ...deliveryAddress,
          label: 'Home',
          recipientName: deliveryAddress.recipientName || 'Sreeram K',
          recipientPhone: deliveryAddress.recipientPhone || '+91 98765 01234',
          addressLine1: 'Villa 14, Whispering Palms',
          addressLine2: 'Road No. 36, Jubilee Hills',
          landmark: 'Near Peddamma Temple Metro',
          city: 'Hyderabad',
          pincode: '500033',
          latitude: 17.4325,
          longitude: 78.4072,
        }
      }

      return {
        id: row.id,
        orderNumber: row.order_number,
        customerId: row.profile_id,
        restaurantId: row.restaurant_id,
        restaurantNameSnapshot: row.restaurant_name_snapshot,
        restaurantAddressSnapshot: row.restaurant_address_snapshot,
        status: row.status,
        items: [],
        itemTotal: Number(row.item_total),
        deliveryFee: Number(row.delivery_fee),
        taxAmount: Number(row.tax_amount),
        discountAmount: Number(row.discount_amount),
        finalPaidAmount: Number(row.final_paid_amount),
        deliveryAddress,
        placedAt: row.placed_at,
        estimatedDeliveryAt: row.delivered_at || new Date(Date.now() + 30 * 60 * 1000).toISOString(),
        timeline: [
          {
            status: 'placed',
            title: 'Order Confirmed',
            description: 'Payment verified and sent to restaurant.',
            timestamp: row.placed_at,
            isCompleted: true,
          },
        ],
        paymentMethod: (row.payment_method as Order['paymentMethod']) || 'UPI',
        paymentStatus: (row.payment_status as Order['paymentStatus']) || 'PAID',
      }
    })
  } catch (err) {
    console.error('[ARO Supabase] Failed to fetch customer orders:', err)
    return []
  }
}
