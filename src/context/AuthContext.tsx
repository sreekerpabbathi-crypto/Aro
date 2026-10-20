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
      return stored ? JSON.parse(stored) : DEFAULT_DEMO_PROFILE
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
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  // Sync with Supabase Auth & fetch existing orders
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

      // Fetch cloud orders for user profile
      const targetProfileId = user?.id || DEFAULT_DEMO_PROFILE.id
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
