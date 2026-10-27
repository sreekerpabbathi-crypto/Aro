import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { CustomerProfile, CustomerAddress, Order } from '@/types'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { createOrderInSupabase, fetchCustomerOrders } from '@/services/orderService'

export interface AuthContextType {
  user: CustomerProfile | null
  isAuthenticated: boolean
  isAuthLoading: boolean
  addresses: CustomerAddress[]
  favorites: string[]
  orders: Order[]
  activeOrder: Order | null
  toggleFavorite: (id: string) => void
  addAddress: (address: Omit<CustomerAddress, 'id' | 'userId'>) => Promise<boolean>
  saveOrder: (order: Order) => void
  updateOrderStatus: (orderId: string, status: Order['status']) => void
  loginAsDemoUser: () => void
  logout: () => Promise<void>
  signInWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUpWithEmail: (
    email: string,
    password: string,
    fullName: string,
    phone?: string
  ) => Promise<{ success: boolean; emailConfirmationRequired?: boolean; error?: string }>
  resetPasswordForEmail: (email: string) => Promise<{ success: boolean; error?: string }>
}

const DEFAULT_OPT_IN_DEMO_ADDRESSES: CustomerAddress[] = [
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

const DEFAULT_OPT_IN_DEMO_PROFILE: CustomerProfile = {
  id: '00000001-0000-0000-0000-000000000001',
  email: 'sreeram@example.com',
  fullName: 'Sreeram K',
  phone: '+91 98765 01234',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  savedAddresses: DEFAULT_OPT_IN_DEMO_ADDRESSES,
  favoriteRestaurantIds: ['b0000002-0000-0000-0000-000000000002'],
  createdAt: '2026-01-15T10:00:00Z',
  updatedAt: '2026-01-15T10:00:00Z',
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const AUTH_STORAGE_KEY = 'aro_auth_profile_v2'
const ORDERS_STORAGE_KEY = 'aro_customer_orders_v2'
const FAVORITES_STORAGE_KEY = 'aro_customer_favorites_v2'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Start with null: strictly unauthenticated until verified with Supabase session
  const [user, setUser] = useState<CustomerProfile | null>(null)
  const [isAuthLoading, setIsAuthLoading] = useState(true)
  const [addresses, setAddresses] = useState<CustomerAddress[]>([])

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(FAVORITES_STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
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

  // Synchronize authenticated user profile, saved addresses and cloud orders from Supabase
  const syncUserData = useCallback(async (sessionUser: { id: string; email?: string; phone?: string; created_at?: string; updated_at?: string; user_metadata?: Record<string, any> } | null) => {
    if (!sessionUser) {
      setUser(null)
      setAddresses([])
      setOrders([])
      try {
        localStorage.removeItem(AUTH_STORAGE_KEY)
      } catch {
        // ignore
      }
      setIsAuthLoading(false)
      return
    }

    try {
      // 1. Fetch authoritative profile from profiles table
      let profileData: any = null
      const { data: dbProfile, error: profileErr } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', sessionUser.id)
        .maybeSingle()

      if (!profileErr && dbProfile) {
        profileData = dbProfile
      } else {
        // Safe profile creation/synchronization if missing
        const newRecord = {
          id: sessionUser.id,
          email: sessionUser.email || '',
          full_name: sessionUser.user_metadata?.full_name || 'Gourmet Patron',
          phone: sessionUser.user_metadata?.phone || sessionUser.phone || null,
        }
        const { data: inserted } = await supabase
          .from('profiles')
          .insert(newRecord)
          .select()
          .maybeSingle()

        profileData = inserted || newRecord
      }

      // 2. Fetch saved addresses
      const { data: addrData } = await supabase
        .from('addresses')
        .select('*')
        .eq('profile_id', sessionUser.id)
        .order('is_default', { ascending: false })

      const mappedAddresses: CustomerAddress[] = (addrData || []).map((row) => ({
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

      // 3. Construct unified CustomerProfile
      const activeProfile: CustomerProfile = {
        id: sessionUser.id,
        email: profileData?.email || sessionUser.email || '',
        fullName: profileData?.full_name || sessionUser.user_metadata?.full_name || 'Gourmet Patron',
        phone: profileData?.phone || sessionUser.user_metadata?.phone || '',
        avatarUrl: profileData?.avatar_url || sessionUser.user_metadata?.avatar_url || undefined,
        savedAddresses: mappedAddresses,
        favoriteRestaurantIds: [],
        createdAt: profileData?.created_at || sessionUser.created_at || new Date().toISOString(),
        updatedAt: profileData?.updated_at || sessionUser.updated_at || new Date().toISOString(),
      }

      setUser(activeProfile)
      setAddresses(mappedAddresses)

      try {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(activeProfile))
      } catch {
        // ignore
      }

      // 4. Fetch orders for this authenticated customer
      const cloudOrders = await fetchCustomerOrders(sessionUser.id)
      setOrders(cloudOrders)
    } catch (err) {
      console.error('[ARO Auth] Profile synchronization error:', err)
    } finally {
      setIsAuthLoading(false)
    }
  }, [])

  // Subscribe to Supabase Auth State changes & initial session
  useEffect(() => {
    if (!isSupabaseConfigured) {
      setIsAuthLoading(false)
      return
    }

    // Clean up any stale unauthenticated legacy demo profile from localStorage
    try {
      const stored = localStorage.getItem(AUTH_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed.id === '00000001-0000-0000-0000-000000000001') {
          localStorage.removeItem(AUTH_STORAGE_KEY)
        }
      }
    } catch {
      // ignore
    }

    // Initial check
    supabase.auth.getSession().then(({ data: { session } }) => {
      syncUserData(session?.user || null)
    }).catch((err) => {
      console.warn('[ARO Auth] Initial session check warning:', err)
      setIsAuthLoading(false)
    })

    // Realtime auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      syncUserData(session?.user || null)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [syncUserData])

  // Persist favorites and orders
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites))
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders))
    } catch (e) {
      console.warn('Storage error in AuthProvider:', e)
    }
  }, [favorites, orders])

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const addAddress = async (addr: Omit<CustomerAddress, 'id' | 'userId'>): Promise<boolean> => {
    if (user && isSupabaseConfigured) {
      try {
        const { data, error } = await supabase
          .from('addresses')
          .insert({
            profile_id: user.id,
            label: addr.label,
            recipient_name: addr.recipientName,
            recipient_phone: addr.recipientPhone,
            address_line1: addr.addressLine1,
            address_line2: addr.addressLine2 || null,
            landmark: addr.landmark || null,
            city: addr.city || 'Hyderabad',
            pincode: addr.pincode,
            latitude: addr.latitude,
            longitude: addr.longitude,
            is_default: addr.isDefault || false,
          })
          .select()
          .single()

        if (!error && data) {
          const newAddr: CustomerAddress = {
            id: data.id,
            userId: data.profile_id,
            label: data.label,
            recipientName: data.recipient_name,
            recipientPhone: data.recipient_phone,
            addressLine1: data.address_line1,
            addressLine2: data.address_line2 || undefined,
            landmark: data.landmark || undefined,
            city: data.city,
            pincode: data.pincode,
            latitude: Number(data.latitude),
            longitude: Number(data.longitude),
            isDefault: Boolean(data.is_default),
          }
          setAddresses((prev) => [newAddr, ...prev])
          setUser((prev) => (prev ? { ...prev, savedAddresses: [newAddr, ...(prev.savedAddresses || [])] } : null))
          return true
        }
      } catch (e) {
        console.warn('[ARO Auth] Failed to save address to Supabase:', e)
      }
    }

    // Local in-memory fallback
    const localAddr: CustomerAddress = {
      ...addr,
      id: `addr-${Date.now()}`,
      userId: user?.id || 'guest',
    }
    setAddresses((prev) => [localAddr, ...prev])
    if (user) {
      setUser({ ...user, savedAddresses: [localAddr, ...(user.savedAddresses || [])] })
    }
    return true
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

  // Developer opt-in demo utility (never automatically invoked for normal customers)
  const loginAsDemoUser = () => {
    setUser(DEFAULT_OPT_IN_DEMO_PROFILE)
    setAddresses(DEFAULT_OPT_IN_DEMO_ADDRESSES)
  }

  const logout = async () => {
    setUser(null)
    setAddresses([])
    setOrders([])
    try {
      localStorage.removeItem(AUTH_STORAGE_KEY)
    } catch {
      // ignore
    }
    if (isSupabaseConfigured) {
      await supabase.auth.signOut().catch((e) => console.warn('Customer signout notice:', e))
    }
  }

  const signInWithEmail = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    if (!isSupabaseConfigured) {
      return { success: false, error: 'Database authentication is not configured' }
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      })

      if (error || !data.user) {
        return { success: false, error: error?.message || 'Invalid email or password' }
      }

      await syncUserData(data.user)
      return { success: true }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Sign in failed'
      return { success: false, error: message }
    }
  }

  const signUpWithEmail = async (
    email: string,
    password: string,
    fullName: string,
    phone?: string
  ): Promise<{ success: boolean; emailConfirmationRequired?: boolean; error?: string }> => {
    if (!isSupabaseConfigured) {
      return { success: false, error: 'Database authentication is not configured' }
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: fullName.trim(),
            phone: phone?.trim() || null,
          },
        },
      })

      if (error) {
        return { success: false, error: error.message }
      }

      if (!data.user) {
        return { success: false, error: 'Registration failed to create user' }
      }

      // Check if email confirmation is required by Supabase settings (no active session returned)
      if (!data.session) {
        return { success: true, emailConfirmationRequired: true }
      }

      // If session is active (auto-confirm enabled), upsert profile in DB
      try {
        await supabase.from('profiles').upsert({
          id: data.user.id,
          email: email.trim(),
          full_name: fullName.trim(),
          phone: phone?.trim() || null,
        })
      } catch (e) {
        console.warn('[ARO Auth] Profile upsert notice:', e)
      }

      await syncUserData(data.user)
      return { success: true, emailConfirmationRequired: false }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Registration failed'
      return { success: false, error: message }
    }
  }

  const resetPasswordForEmail = async (
    email: string
  ): Promise<{ success: boolean; error?: string }> => {
    if (!isSupabaseConfigured) {
      return { success: false, error: 'Database authentication is not configured' }
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/auth`,
      })

      if (error) {
        return { success: false, error: error.message }
      }
      return { success: true }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Password reset failed'
      return { success: false, error: message }
    }
  }

  const activeOrder = orders.length > 0 ? orders[0] : null

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        isAuthLoading,
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
        signInWithEmail,
        signUpWithEmail,
        resetPasswordForEmail,
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

export default AuthContext
