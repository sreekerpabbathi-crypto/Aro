export type OrderStatus =
  | 'placed'
  | 'confirmed'
  | 'kitchen_preparing'
  | 'rider_assigned'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'

export interface OrderItemSnapshot {
  id: string
  menuItemId: string
  itemNameSnapshot: string
  itemPriceSnapshot: number
  quantity: number
  totalPriceSnapshot: number
  customizationDetailsSnapshot: Array<{
    groupName: string
    optionName: string
    priceSnapshot: number
  }>
}

export interface DeliveryAddressSnapshot {
  label: string
  recipientName: string
  recipientPhone: string
  addressLine1: string
  addressLine2?: string
  landmark?: string
  city: string
  pincode: string
  latitude: number
  longitude: number
}

export interface RiderInfo {
  name: string
  phone: string
  vehicleModel: string
  vehicleNumber: string
  avatarUrl?: string
  currentLatitude: number
  currentLongitude: number
}

export interface OrderStatusTimelineEntry {
  status: OrderStatus
  title: string
  description: string
  timestamp: string
  isCompleted: boolean
}

export interface Order {
  id: string
  orderNumber: string
  customerId: string
  restaurantId: string
  restaurantNameSnapshot: string
  restaurantAddressSnapshot: string
  status: OrderStatus
  placedAt: string
  estimatedDeliveryAt: string
  deliveryAddress: DeliveryAddressSnapshot
  items: OrderItemSnapshot[]
  itemTotal: number
  deliveryFee: number
  taxAmount: number
  discountAmount: number
  finalPaidAmount: number
  paymentMethod: 'UPI' | 'CARD' | 'NET_BANKING' | 'CASH_ON_DELIVERY'
  paymentStatus: 'PAID' | 'PENDING' | 'FAILED'
  rider?: RiderInfo
  timeline: OrderStatusTimelineEntry[]
}
