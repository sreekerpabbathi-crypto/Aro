import React, { createContext, useContext, useState, useEffect } from 'react'
import type { CustomerProfile, CustomerAddress, Order } from '@/types'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { createOrderInSupabase, fetchCustomerOrders } from '@/services/orderService'

interface AuthContextType {
  user: CustomerProfile | null
  isAuthenticated: boolean
  addresses: CustomerAddress[]
  favorites: string[]
  orders: Order[]
  activeOrder: Order | null
  toggleFavorite: (id: string) => void
  addAddress: (address: Omit<CustomerAddress, 'id' | 'userId'>) => void
  saveOrder: (order: Order) => void
  updateOrderStatus: (orderId: string, status: Order['status']) => void
  loginAsDemoUser: () => void
  logout: () => void
}

const DEFAULT_DEMO_ADDRESSES: CustomerAddress[] = [
  {
    id: 'a0000001-0000-0000-0000-000000000001',
    userId: '00000001-0000-0000-0000-000000000001',
    label: 'Home',
    recipientName: 'Sreeram K',
    recipientPhone: '+91 98765 01234',
    addressLine1: 'Villa 14, Whispering Palms',
    addressLine2: 'Road No. 36, Jubilee Hills',
    landmark: 'Near Peddamma Temple Metro',
    city: 'Hyderabad',
    pincode: '500033',
    latitude: 17.4325,
    longitude: 78.4072,
    isDefault: true,
  },
  {
    id: 'a0000002-0000-0000-0000-000000000002',
    userId: '00000001-0000-0000-0000-000000000001',
    label: 'Work',
    recipientName: 'Sreeram K',
    recipientPhone: '+91 98765 01234',
    addressLine1: 'Level 12, Cyber Towers',
    addressLine2: 'Hitech City Main Road, Madhapur',
    landmark: 'Opposite Shilparamam',
    city: 'Hyderabad',
    pincode: '500081',
    latitude: 17.4504,
    longitude: 78.3808,
    isDefault: false,
  },
]

const DEFAULT_DEMO_PROFILE: CustomerProfile = {
  id: '00000001-0000-0000-0000-000000000001',
  email: 'sreeram@example.com',
  fullName: 'Sreeram K',
  phone: '+91 98765 01234',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  savedAddresses: DEFAULT_DEMO_ADDRESSES,
  favoriteRestaurantIds: ['b0000002-0000-0000-0000-000000000002'],
  createdAt: '2026-01-15T10:00:00Z',
  updatedAt: '2026-01-15T10:00:00Z',
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AUTH_STORAGE_KEY = 'aro_auth_profile_v2'
const ORDERS_STORAGE_KEY = 'aro_customer_orders_v2'
const FAVORITES_STORAGE_KEY = 'aro_customer_favorites_v2'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<CustomerProfile | null>(() => {
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY)
      if (!stored) return DEFAULT_DEMO_PROFILE
      const parsed: CustomerProfile = JSON.parse(stored)
      // Normalize any stale pre-migration Bengaluru addresses in cached profile
      const cleanAddresses = (parsed.savedAddresses || DEFAULT_DEMO_ADDRESSES).map((addr) => {
        if (addr.city === 'Bengaluru' || addr.city === 'Bangalore') {
          return {
            ...addr,
            addressLine1: 'Villa 14, Whispering Palms',
            addressLine2: 'Road No. 36, Jubilee Hills',
            landmark: 'Near Peddamma Temple Metro',
            city: 'Hyderabad',
            pincode: '500033',
            latitude: 17.4325,
            longitude: 78.4072,
          }
        }
        return addr
      })
      return { ...parsed, savedAddresses: cleanAddresses }
    } catch {
      return DEFAULT_DEMO_PROFILE
    }
  })

  const [addresses, setAddresses] = useState<CustomerAddress[]>(() => {
    return user?.savedAddresses || DEFAULT_DEMO_ADDRESSES
  })

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
      return stored ? JSON.parse(stored) : ['b0000002-0000-0000-0000-000000000002']
    } catch {
      return ['b0000002-0000-0000-0000-000000000002']
    }
  })

  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const stored = localStorage.getItem(ORDERS_STORAGE_KEY)
      if (!stored) return []
      const parsed: Order[] = JSON.parse(stored)
      // Normalize any stale pre-migration Bengaluru order snapshots for Sreeram
      return parsed.map((ord) => {
        if (
          ord.deliveryAddress &&
          (ord.deliveryAddress.city === 'Bengaluru' || ord.deliveryAddress.city === 'Bangalore') &&
          (ord.customerId === '00000001-0000-0000-0000-000000000001' || ord.customerId === 'demo-user-1')
        ) {
          return {
            ...ord,
            deliveryAddress: {
              ...ord.deliveryAddress,
              label: 'Home',
              recipientName: ord.deliveryAddress.recipientName || 'Sreeram K',
              recipientPhone: ord.deliveryAddress.recipientPhone || '+91 98765 01234',
              addressLine1: 'Villa 14, Whispering Palms',
              addressLine2: 'Road No. 36, Jubilee Hills',
              landmark: 'Near Peddamma Temple Metro',
              city: 'Hyderabad',
              pincode: '500033',
              latitude: 17.4325,
              longitude: 78.4072,
            },
          }
        }
        return ord
      })
    } catch {
      return []
    }
  })

  // Sync with Supabase Auth, Addresses table & Orders table
  useEffect(() => {
    if (isSupabaseConfigured) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          setUser((prev) => ({
            id: session.user.id,
            email: session.user.email || 'user@example.com',
            fullName: session.user.user_metadata?.full_name || 'Gourmet Guest',
            phone: session.user.phone || '',
            savedAddresses: prev?.savedAddresses || DEFAULT_DEMO_ADDRESSES,
            favoriteRestaurantIds: prev?.favoriteRestaurantIds || [],
            createdAt: session.user.created_at,
            updatedAt: session.user.updated_at || session.user.created_at,
          }))
        }
      })

      // Fetch authoritative saved addresses from Supabase addresses table
      const targetProfileId = user?.id || DEFAULT_DEMO_PROFILE.id
      supabase
        .from('addresses')
        .select('*')
        .eq('profile_id', targetProfileId)
        .order('is_default', { ascending: false })
        .then(({ data, error }) => {
          if (!error && data && data.length > 0) {
            const mappedAddresses: CustomerAddress[] = data.map((row) => ({
              id: row.id,
              userId: row.profile_id,
              label: row.label as CustomerAddress['label'],
              recipientName: row.recipient_name,
              recipientPhone: row.recipient_phone,
              addressLine1: row.address_line1,
              addressLine2: row.address_line2 || undefined,
              landmark: row.landmark || undefined,
              city: row.city,
              pincode: row.pincode,
              latitude: Number(row.latitude),
              longitude: Number(row.longitude),
              isDefault: Boolean(row.is_default),
            }))
            setAddresses(mappedAddresses)
            setUser((prev) => (prev ? { ...prev, savedAddresses: mappedAddresses } : prev))
          }
        })

      // Fetch cloud orders for user profile
      fetchCustomerOrders(targetProfileId).then((cloudOrders) => {
        if (cloudOrders.length > 0) {
          setOrders((prev) => {
            const existingIds = new Set(prev.map((o) => o.id))
            const newOnes = cloudOrders.filter((o) => !existingIds.has(o.id))
            return [...prev, ...newOnes]
          })
        }
      })
    }
  }, [user?.id])

  // Persist state
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY)
      }
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders))
    } catch (e) {
      console.warn('Storage error in AuthProvider:', e)
    }
  }, [user, favorites, orders])

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const addAddress = (addr: Omit<CustomerAddress, 'id' | 'userId'>) => {
    const newAddr: CustomerAddress = {
      ...addr,
      id: `addr-${Date.now()}`,
      userId: user?.id || DEFAULT_DEMO_PROFILE.id,
    }
    setAddresses((prev) => [newAddr, ...prev])
    if (user) {
      setUser({ ...user, savedAddresses: [newAddr, ...(user.savedAddresses || [])] })
    }
  }

  const saveOrder = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev])
    createOrderInSupabase(newOrder).catch((err) => {
      console.warn('[ARO] Background sync of order to Supabase failed:', err)
    })
  }

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    )
  }

  const loginAsDemoUser = () => {
    setUser(DEFAULT_DEMO_PROFILE)
    setAddresses(DEFAULT_DEMO_ADDRESSES)
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem(AUTH_STORAGE_KEY)
  }

  const activeOrder = orders.length > 0 ? orders[0] : null

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        addresses,
        favorites,
        orders,
        activeOrder,
        toggleFavorite,
        addAddress,
        saveOrder,
        updateOrderStatus,
        loginAsDemoUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
