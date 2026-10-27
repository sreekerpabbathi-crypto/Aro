import React, { useState } from 'react'
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom'
import { useAdminAuth } from '@/context/AdminAuthContext'
import {
  LayoutDashboard,
  ShoppingBag,
  UtensilsCrossed,
  BookOpen,
  LogOut,
  ExternalLink,
  Menu as MenuIcon,
  X,
  ShieldCheck,
  Building2,
} from 'lucide-react'

export const AdminLayout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { adminUser, logout } = useAdminAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Overview',
      path: '/admin',
      icon: LayoutDashboard,
      exact: true,
    },
    {
      name: 'Orders',
      path: '/admin/orders',
      icon: ShoppingBag,
      exact: false,
    },
    {
      name: 'Restaurants',
      path: '/admin/restaurants',
      icon: UtensilsCrossed,
      exact: false,
    },
    {
      name: 'Menu Items',
      path: '/admin/menu',
      icon: BookOpen,
      exact: false,
    },
  ]

  const isActive = (item: (typeof navItems)[0]) => {
    if (item.exact) {
      return location.pathname === item.path
    }
    return location.pathname.startsWith(item.path)
  }

  const handleSignOut = async () => {
    await logout()
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] flex flex-col md:flex-row font-['Outfit',sans-serif]">
      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-between px-4 py-3 bg-[var(--dp-color-scrap)] border-b-[1.5px] border-[var(--dp-color-line)] shadow-[0px_1.5px_0px_rgba(56,53,47,0.06)] sticky top-0 z-40">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] flex items-center justify-center font-black text-[var(--dp-color-highlight)] text-base shadow-[1px_1px_0px_var(--dp-color-accent)]">
            A
          </div>
          <span className="font-black text-lg tracking-tight text-[var(--dp-color-ink)]">
            ARO ADMIN
          </span>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] cursor-pointer"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-[var(--dp-color-scrap)] border-r-[1.5px] border-[var(--dp-color-line)] flex flex-col justify-between z-50 transition-transform duration-200 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-5 space-y-6 overflow-y-auto">
          {/* Brand Header */}
          <div className="flex items-center justify-between border-b-[1.5px] border-[var(--dp-color-line)] pb-5">
            <Link to="/admin" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] flex items-center justify-center font-black text-[var(--dp-color-highlight)] text-xl shadow-[1.5px_1.5px_0px_var(--dp-color-accent)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none text-[var(--dp-color-ink)]">
                  ARO
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--dp-color-accent)] mt-1">
                  Admin Console
                </span>
              </div>
            </Link>

            {/* Mobile Close Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden p-1.5 rounded-lg border border-[var(--dp-color-line)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] px-3 mb-2">
              Management
            </span>
            {navItems.map((item) => {
              const active = isActive(item)
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-[var(--dp-radius-control)] text-xs font-bold transition-all ${
                    active
                      ? 'bg-[var(--dp-color-ink)] text-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[2px_2px_0px_var(--dp-color-accent)]'
                      : 'text-[var(--dp-color-ink)] hover:bg-[var(--dp-color-ground)] hover:border-[1.5px] hover:border-[var(--dp-color-line)]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-[var(--dp-color-highlight)]' : 'text-[var(--dp-color-ink-muted)]'}`} />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Customer Portal Shortcut */}
          <div className="pt-4 border-t-[1.5px] border-[var(--dp-color-line)]">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-[var(--dp-color-ink-muted)] px-3 mb-2">
              Live Application
            </span>
            <Link
              to="/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-semibold text-[var(--dp-color-ink)] hover:border-[var(--dp-color-ink)] transition-all shadow-[1px_1px_0px_var(--dp-color-line)]"
            >
              <span className="flex items-center gap-2">
                <Building2 className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                <span>Customer Storefront</span>
              </span>
              <ExternalLink className="w-3 h-3 text-[var(--dp-color-ink-muted)]" />
            </Link>
          </div>
        </div>

        {/* Admin Account & Sign-out Bottom Card */}
        <div className="p-4 border-t-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-scrap)]">
          <div className="flex items-center gap-2.5 mb-3 px-1">
            <div className="w-8 h-8 rounded-full bg-[var(--dp-color-annotation)] text-white flex items-center justify-center text-xs font-bold shrink-0 border border-[var(--dp-color-annotation)]">
              {adminUser?.email.charAt(0).toUpperCase() || 'A'}
            </div>
            <div className="flex-1 min-w-0">
              <span className="block text-xs font-bold text-[var(--dp-color-ink)] truncate">
                {adminUser?.email || 'Administrator'}
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#059669]">
                <ShieldCheck className="w-3 h-3" />
                <span>{adminUser?.role || 'Admin'}</span>
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] hover:bg-[#ede6d5] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] transition-colors shadow-[1px_1px_0px_var(--dp-color-line)] cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          <Outlet />
        </div>

        {/* Professional Admin Footer (Notice: NO customer-facing footer) */}
        <footer className="border-t-[1.5px] border-[var(--dp-color-line)]/60 bg-[var(--dp-color-scrap)] py-4 px-6 text-xs text-[var(--dp-color-ink-muted)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span className="font-semibold text-[var(--dp-color-ink)]">ARO Admin Control System</span>
            <span>•</span>
            <span>Hyderabad Gastronomy Network</span>
          </div>
          <span>Connected to Supabase PostgreSQL • RLS Enforced</span>
        </footer>
      </main>

      {/* Mobile Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-[#38352f]/40 backdrop-blur-xs z-40 md:hidden"
        />
      )}
    </div>
  )
}

export default AdminLayout
