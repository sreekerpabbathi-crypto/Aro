export interface CustomerAddress {
  id: string
  userId: string
  label: 'Home' | 'Work' | 'Other'
  recipientName: string
  recipientPhone: string
  addressLine1: string
  addressLine2?: string
  landmark?: string
  city: string
  pincode: string
  latitude: number
  longitude: number
  isDefault: boolean
}

export interface CustomerProfile {
  id: string // maps to auth.users.id
  email: string
  fullName: string
  phone?: string
  avatarUrl?: string
  savedAddresses: CustomerAddress[]
  favoriteRestaurantIds: string[]
  createdAt: string
  updatedAt: string
}
