import React from 'react'
import { Navigate, Outlet, useLocation, Link } from 'react-router-dom'
import { useAdminAuth } from '@/context/AdminAuthContext'
import { ShieldAlert, LogOut, ArrowLeft, Loader2, Database, UtensilsCrossed } from 'lucide-react'

export const AdminRouteGuard: React.FC = () => {
  const { authSession, isAdmin, isLoading, error, logout } = useAdminAuth()
  const location = useLocation()

  // 1. Loading State - Protect against UI flash while verifying session & RLS
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] p-4">
        <div className="flex flex-col items-center gap-4 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] p-8 rounded-2xl shadow-[3px_3px_0px_var(--dp-color-line)] max-w-sm w-full text-center">
          <div className="w-12 h-12 rounded-xl bg-[var(--dp-color-ink)] flex items-center justify-center text-[var(--dp-color-highlight)] font-['Outfit',sans-serif] font-black text-2xl shadow-[2px_2px_0px_var(--dp-color-accent)] animate-pulse">
            A
          </div>
          <div className="flex items-center gap-2 text-sm font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">
            <Loader2 className="w-4 h-4 animate-spin text-[var(--dp-color-accent)]" />
            <span>Verifying Administrator Authorization...</span>
          </div>
          <p className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
            Validating security role against ARO database
          </p>
        </div>
      </div>
    )
  }

  // 2. Unauthenticated: Redirect to /admin/login preserving redirect target
  if (!authSession) {
    return <Navigate to={`/admin/login?redirect=${encodeURIComponent(location.pathname)}`} replace />
  }

  // 3. Authenticated customer, but NOT an authorized administrator
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] p-4 sm:p-6">
        <div className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-[4px_4px_0px_var(--dp-color-ink)] space-y-6">
          <div className="flex items-center gap-3 border-b-[1.5px] border-[var(--dp-color-line)] pb-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--dp-color-accent)]/15 border-[1.5px] border-[var(--dp-color-accent)] flex items-center justify-center text-[var(--dp-color-accent)] shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">
                You don't have admin access.
              </h1>
              <p className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                Signed in as: <strong className="text-[var(--dp-color-ink)]">{authSession.user.email}</strong>
              </p>
            </div>
          </div>

          <p className="text-sm text-[var(--dp-color-ink-muted)] leading-relaxed font-['Outfit',sans-serif]">
            This portal is restricted to provisioned ARO administrators. Your current account does not have
            administrator privileges.
          </p>

          {/* Database Setup Notice if migration not yet applied */}
          {error && error.includes('admin_users') && (
            <div className="p-4 rounded-xl bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-line)] space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-[var(--dp-color-ink)]">
                <Database className="w-4 h-4 text-[var(--dp-color-accent)]" />
                <span>Database Configuration Required</span>
              </div>
              <p className="text-[var(--dp-color-ink-muted)] leading-normal">
                The <code className="bg-white/80 px-1 py-0.5 rounded border border-[var(--dp-color-line)] font-mono">admin_users</code> table has not been initialized in Supabase yet.
              </p>
              <p className="text-[11px] text-[var(--dp-color-ink-muted)]">
                Run migration <code className="bg-white/80 px-1 py-0.5 rounded border border-[var(--dp-color-line)] font-mono">20261027000000_aro_admin_roles_and_rls.sql</code> in the Supabase SQL Editor, then provision your account with:
              </p>
              <pre className="p-2 bg-[var(--dp-color-ground)] rounded border border-[var(--dp-color-line)] text-[10px] font-mono overflow-x-auto text-[var(--dp-color-ink)] select-all">
{`INSERT INTO public.admin_users (user_id, email, role)
SELECT id, email, 'super_admin' FROM auth.users WHERE email = '${authSession.user.email}';`}
              </pre>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => logout()}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] hover:bg-[#ede6d5] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] transition-colors shadow-[1.5px_1.5px_0px_var(--dp-color-line)] cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-[var(--dp-color-accent)]" />
              <span>Sign Out</span>
            </button>

            <Link
              to="/restaurant"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] hover:bg-[#ede6d5] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] transition-colors shadow-[1.5px_1.5px_0px_var(--dp-color-line)]"
            >
              <UtensilsCrossed className="w-4 h-4 text-[var(--dp-color-accent)]" />
              <span>Restaurant Portal</span>
            </Link>

            <Link
              to="/home"
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold font-['Outfit',sans-serif] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-ink)] transition-transform hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Storefront</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // 4. Authorized Administrator
  return <Outlet />
}
