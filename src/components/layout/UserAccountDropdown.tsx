import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  User,
  ShoppingBag,
  MapPin,
  LogOut,
  ChevronDown,
  Shield,
  Store,
  CheckCircle2,
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

interface UserAccountDropdownProps {
  className?: string
  align?: 'right' | 'left'
  onLogoutSuccess?: () => void
}

export const UserAccountDropdown: React.FC<UserAccountDropdownProps> = ({
  className = '',
  align = 'right',
  onLogoutSuccess,
}) => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [logoutNotice, setLogoutNotice] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close on Escape key and return focus
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        triggerRef.current?.focus()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  if (!user) {
    return null
  }

  const firstName = user.fullName?.trim().split(' ')[0] || 'Patron'
  const initials = user.fullName
    ? user.fullName
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((n) => n[0].toUpperCase())
        .join('')
    : 'P'

  const handleLogout = async () => {
    setIsOpen(false)
    try {
      await logout()
      if (onLogoutSuccess) {
        onLogoutSuccess()
      }
      setLogoutNotice('Signed out successfully.')
      // Redirect to home/storefront
      navigate('/home', { replace: true })
    } catch (err) {
      console.warn('[ARO Dropdown] Signout error:', err)
      navigate('/home', { replace: true })
    }
  }

  const menuItems = [
    {
      label: 'Account Details',
      subtext: 'Profile & contact details',
      href: '/account?tab=profile',
      icon: User,
    },
    {
      label: 'My Orders',
      subtext: 'Past dispatches & active tracking',
      href: '/account?tab=orders',
      icon: ShoppingBag,
    },
    {
      label: 'Saved Addresses',
      subtext: 'Delivery locations & coordinates',
      href: '/account?tab=addresses',
      icon: MapPin,
    },
  ]

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Toast Notice */}
      {logoutNotice && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[3px_3px_0px_var(--dp-color-ink)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] animate-in fade-in slide-in-from-bottom-2"
        >
          <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
          <span>{logoutNotice}</span>
        </div>
      )}

      {/* Dropdown Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        id="user-account-menu-button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls="user-account-menu-dropdown"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-highlight)] hover:bg-[#ebda99] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] transition-all cursor-pointer active:translate-x-[1px] active:translate-y-[1px] focus:outline-none focus-visible:outline-2 focus-visible:outline-dashed focus-visible:outline-[var(--dp-color-annotation)]"
      >
        {/* Avatar / Initials Icon */}
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.fullName || 'Patron'}
            className="w-5 h-5 rounded-full object-cover border border-[var(--dp-color-ink)]"
          />
        ) : (
          <div className="w-5 h-5 rounded-full bg-[var(--dp-color-ink)] text-[var(--dp-color-highlight)] flex items-center justify-center text-[10px] font-black font-mono">
            {initials}
          </div>
        )}

        {/* First Name / Display Name */}
        <span className="max-w-[120px] truncate">{firstName}</span>

        {/* Chevron Indicator */}
        <ChevronDown
          className={`w-3.5 h-3.5 text-[var(--dp-color-ink)] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu Panel */}
      {isOpen && (
        <div
          id="user-account-menu-dropdown"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-account-menu-button"
          tabIndex={-1}
          className={`absolute ${
            align === 'right' ? 'right-0' : 'left-0'
          } mt-2 w-64 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[3px_3px_0px_var(--dp-color-ink)] py-2 z-50 focus:outline-none animate-in fade-in zoom-in-95`}
        >
          {/* User Profile Card Header */}
          <div className="px-4 py-3 border-b-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)]/50">
            <div className="flex items-center gap-2.5">
              {user.avatarUrl ? (
                <img
                  src={user.avatarUrl}
                  alt={user.fullName || 'Patron'}
                  className="w-9 h-9 rounded-xl object-cover border-[1.5px] border-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)]"
                />
              ) : (
                <div className="w-9 h-9 rounded-xl bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)] flex items-center justify-center text-xs font-black font-mono text-[var(--dp-color-ink)]">
                  {initials}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-[var(--dp-color-ink)] truncate font-['Outfit',sans-serif]">
                  {user.fullName || 'Gourmet Patron'}
                </p>
                <p className="text-[11px] text-[var(--dp-color-ink-muted)] truncate font-mono">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[var(--dp-color-highlight)] border border-[var(--dp-color-ink)] text-[9px] font-black uppercase font-mono tracking-wider text-[var(--dp-color-ink)]">
                {user.role === 'admin'
                  ? 'Administrator'
                  : user.role === 'restaurant'
                  ? 'Restaurant Partner'
                  : 'Gourmet Patron'}
              </span>
              {user.phone && (
                <span className="text-[10px] text-[var(--dp-color-ink-muted)] font-mono">
                  {user.phone}
                </span>
              )}
            </div>
          </div>

          {/* Navigation Links Group */}
          <div className="py-1" role="none">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  role="menuitem"
                  onClick={() => setIsOpen(false)}
                  className="flex items-start gap-3 px-4 py-2.5 hover:bg-[var(--dp-color-highlight)]/40 transition-colors group focus:outline-none focus:bg-[var(--dp-color-highlight)]/50"
                >
                  <div className="p-1.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)] text-[var(--dp-color-ink)] group-hover:border-[var(--dp-color-ink)] transition-colors mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] group-hover:text-[var(--dp-color-accent)] transition-colors">
                      {item.label}
                    </p>
                    <p className="text-[10px] text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                      {item.subtext}
                    </p>
                  </div>
                </Link>
              )
            })}

            {/* Special Role Portals */}
            {user.role === 'restaurant' && (
              <Link
                to="/restaurant"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex items-start gap-3 px-4 py-2.5 hover:bg-[var(--dp-color-highlight)]/40 transition-colors group border-t border-[var(--dp-color-line)]/50"
              >
                <div className="p-1.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)] text-[var(--dp-color-ink)] group-hover:border-[var(--dp-color-ink)] transition-colors mt-0.5">
                  <Store className="w-3.5 h-3.5 text-[#059669]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                    Restaurant Portal
                  </p>
                  <p className="text-[10px] text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                    Kitchen dispatch & orders
                  </p>
                </div>
              </Link>
            )}

            {user.role === 'admin' && (
              <Link
                to="/admin"
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex items-start gap-3 px-4 py-2.5 hover:bg-[var(--dp-color-highlight)]/40 transition-colors group border-t border-[var(--dp-color-line)]/50"
              >
                <div className="p-1.5 rounded-lg bg-[var(--dp-color-ground)] border border-[var(--dp-color-line)] text-[var(--dp-color-ink)] group-hover:border-[var(--dp-color-ink)] transition-colors mt-0.5">
                  <Shield className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                    Admin Console
                  </p>
                  <p className="text-[10px] text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                    Platform oversight & catalog
                  </p>
                </div>
              </Link>
            )}
          </div>

          {/* Logout Section */}
          <div className="pt-1 mt-1 border-t-[1.5px] border-[var(--dp-color-line)]" role="none">
            <button
              type="button"
              role="menuitem"
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-rose-50 text-rose-700 transition-colors group cursor-pointer focus:outline-none focus:bg-rose-50"
            >
              <div className="p-1.5 rounded-lg bg-rose-100/60 border border-rose-200 text-rose-600 group-hover:border-rose-300 transition-colors">
                <LogOut className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold font-['Outfit',sans-serif]">Sign Out</p>
                <p className="text-[10px] text-rose-600/70 font-['Outfit',sans-serif]">
                  End session on this device
                </p>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserAccountDropdown

