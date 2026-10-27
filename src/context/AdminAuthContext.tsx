import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase, isSupabaseConfigured, formatAuthError } from '@/lib/supabase'
import { verifyAdminStatus } from '@/services/adminService'
import type { AdminUser } from '@/types'

interface AdminAuthContextType {
  adminUser: AdminUser | null
  authSession: Session | null
  isAdmin: boolean
  isLoading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  refreshAdminStatus: () => Promise<void>
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined)

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null)
  const [authSession, setAuthSession] = useState<Session | null>(null)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const checkUserAdminAuthorization = useCallback(async (session: Session | null) => {
    if (!session?.user) {
      setAdminUser(null)
      setIsAdmin(false)
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      const result = await verifyAdminStatus(session.user.id)

      if (result.isAdmin && result.user) {
        setAdminUser(result.user)
        setIsAdmin(true)
        setError(null)
      } else {
        setAdminUser(null)
        setIsAdmin(false)
        if (result.error) {
          setError(result.error)
        }
      }
    } catch (err) {
      console.error('[ARO AdminAuth] Verification exception:', err)
      setAdminUser(null)
      setIsAdmin(false)
      setError('An error occurred during administrator verification.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setIsLoading(false)
      return
    }

    // 1. Initial session restoration
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => {
        setAuthSession(session)
        checkUserAdminAuthorization(session)
      })
      .catch(() => {
        setIsLoading(false)
      })

    // 2. Real-time auth state listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setAuthSession(session)
      await checkUserAdminAuthorization(session)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [checkUserAdminAuthorization])

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string }> => {
    if (!isSupabaseConfigured) {
      const unconfigMsg = formatAuthError('not configured')
      setError(unconfigMsg)
      return {
        success: false,
        error: unconfigMsg,
      }
    }

    try {
      setIsLoading(true)
      setError(null)

      // 1. Authenticate identity with Supabase Auth
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      })

      if (authError || !data.session) {
        setIsLoading(false)
        const msg = formatAuthError(authError || 'Invalid credentials')
        setError(msg)
        return { success: false, error: msg }
      }

      setAuthSession(data.session)

      // 2. Authorize administrator privileges against database
      const verifyResult = await verifyAdminStatus(data.session.user.id)

      if (!verifyResult.isAdmin) {
        setIsAdmin(false)
        setAdminUser(null)
        setIsLoading(false)

        const forbiddenMsg =
          verifyResult.error || "You don't have admin access. This portal is restricted to authorized administrators."
        setError(forbiddenMsg)
        return {
          success: false,
          error: forbiddenMsg,
        }
      }

      // 3. Admin authorized
      setAdminUser(
        verifyResult.user || {
          id: data.session.user.id,
          email: data.session.user.email || email,
          role: 'admin',
        }
      )
      setIsAdmin(true)
      setError(null)
      setIsLoading(false)
      return { success: true }
    } catch (err) {
      setIsLoading(false)
      const message = formatAuthError(err)
      setError(message)
      return { success: false, error: message }
    }
  }

  const logout = async () => {
    try {
      setIsLoading(true)
      await supabase.auth.signOut()
    } catch (e) {
      console.warn('[ARO AdminAuth] Sign out error:', e)
    } finally {
      setAdminUser(null)
      setIsAdmin(false)
      setAuthSession(null)
      setError(null)
      setIsLoading(false)
    }
  }

  const refreshAdminStatus = async () => {
    await checkUserAdminAuthorization(authSession)
  }

  return (
    <AdminAuthContext.Provider
      value={{
        adminUser,
        authSession,
        isAdmin,
        isLoading,
        error,
        login,
        logout,
        refreshAdminStatus,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  )
}

export function useAdminAuth(): AdminAuthContextType {
  const context = useContext(AdminAuthContext)
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider')
  }
  return context
}
