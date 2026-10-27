import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, MapPin, User, ChevronDown, Sparkles } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { UserAccountDropdown } from '@/components/layout/UserAccountDropdown'

interface StorefrontNavbarProps {
  onSearchChange?: (query: string) => void
  cartCount?: number
}

export const StorefrontNavbar: React.FC<StorefrontNavbarProps> = ({
  onSearchChange,
  cartCount,
}) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { items } = useCart()
  const { user } = useAuth()
  const [searchVal, setSearchVal] = useState('')

  const effectiveCartCount = cartCount !== undefined ? cartCount : items.length

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value)
    onSearchChange?.(e.target.value)
  }

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchVal.trim()) {
      navigate(`/restaurants?search=${encodeURIComponent(searchVal.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)] shadow-[0px_2px_0px_rgba(56,53,47,0.06)] text-[var(--dp-color-ink)]">
      {/* Top micro-announcement banner */}
      <div className="bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink-muted)] border-b-[1.5px] border-[var(--dp-color-line)] px-4 py-1.5 text-xs font-medium tracking-wide flex items-center justify-center gap-3 overflow-hidden select-none">
        <span className="flex items-center gap-1.5 text-[var(--dp-color-annotation)] font-['Outfit',sans-serif] font-bold text-[11px] tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-[#2d5f3e] animate-pulse" />
          <span>ARO HYDERABAD</span>
        </span>
        <span className="hidden sm:inline text-[var(--dp-color-line)]">•</span>
        <span className="hidden sm:inline text-[12px] text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
          Chef-Crafted Gastronomy Delivered Across Jubilee, Banjara & HITEC City
        </span>
        <span className="hidden md:inline text-[var(--dp-color-line)]">•</span>
        <Link
          to="/"
          className="text-[var(--dp-color-accent)] hover:underline font-['Outfit',sans-serif] text-[12px] font-bold flex items-center gap-1"
        >
          <span>Landing Experience →</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand identity: navigates to /home */}
        <div className="flex items-center gap-5 shrink-0">
          <Link to="/home" className="flex items-center gap-3 group focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[var(--dp-color-annotation)]">
            {/* Working sheet logo box */}
            <div className="w-11 h-11 bg-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] rounded-[var(--dp-radius-control)] p-0.5 shadow-[1.5px_1.5px_0px_var(--dp-color-accent)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[2.5px_2.5px_0px_var(--dp-color-accent)] transition-all flex items-center justify-center">
              <span className="text-[var(--dp-color-highlight)] font-black text-2xl font-['Outfit',sans-serif] tracking-wider leading-none">
                A
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[var(--dp-color-ink)] font-['Outfit',sans-serif] leading-none">
                  ARO
                </span>
                <span className="bg-[var(--dp-color-accent)] text-white text-[9px] font-bold px-1.5 py-0.5 rounded border border-[var(--dp-color-accent)] uppercase tracking-wider font-['Outfit',sans-serif]">
                  APP
                </span>
              </div>
              <span className="text-[11px] tracking-wider text-[var(--dp-color-ink-muted)] font-semibold uppercase font-['Outfit',sans-serif] pt-0.5">
                Hyderabad Gastronomy
              </span>
            </div>
          </Link>

          {/* Delivery Location Selector */}
          <button
            type="button"
            onClick={() => navigate(user ? '/account' : '/auth?redirect=/account')}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-semibold text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] transition-all cursor-pointer font-['Outfit',sans-serif]"
          >
            <MapPin className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
            <span className="truncate max-w-[170px]">Jubilee Hills, Hyderabad</span>
            <ChevronDown className="w-3 h-3 text-[var(--dp-color-ink)]" />
          </button>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-md mx-2 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
            <input
              type="text"
              value={searchVal}
              onChange={handleSearch}
              onKeyDown={handleSearchSubmit}
              placeholder="Search dishes, chef ateliers, biryani..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] font-medium font-['Outfit',sans-serif] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)] transition-all"
            />
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold font-['Outfit',sans-serif] tracking-wide text-[var(--dp-color-ink)]">
          <Link
            to="/home"
            className={`transition-colors hover:text-[var(--dp-color-accent)] hover:underline decoration-1 underline-offset-4 ${
              location.pathname === '/home'
                ? 'text-[var(--dp-color-accent)] underline decoration-1 underline-offset-4'
                : 'text-[var(--dp-color-ink)]'
            }`}
          >
            Storefront
          </Link>
          <Link
            to="/restaurants"
            className={`transition-colors hover:text-[var(--dp-color-accent)] hover:underline decoration-1 underline-offset-4 ${
              location.pathname.startsWith('/restaurants')
                ? 'text-[var(--dp-color-accent)] underline decoration-1 underline-offset-4'
                : 'text-[var(--dp-color-ink)]'
            }`}
          >
            Restaurants
          </Link>
          <Link
            to="/budget-optimizer"
            className={`inline-flex items-center gap-1.5 transition-colors hover:text-[var(--dp-color-accent)] hover:underline decoration-1 underline-offset-4 ${
              location.pathname === '/budget-optimizer'
                ? 'text-[var(--dp-color-accent)] underline decoration-1 underline-offset-4'
                : 'text-[var(--dp-color-ink)]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
            <span>Smart Budget</span>
            <span className="px-1.5 py-0.2 rounded bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] text-[9px] font-black uppercase font-mono border border-[var(--dp-color-ink)]">
              AI
            </span>
          </Link>
        </nav>

        {/* Customer Controls: Cart & Profile Dropdown */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/cart"
            className="relative p-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] hover:shadow-[2px_2px_0px_var(--dp-color-ink)] transition-all"
            title="Order Basket"
          >
            <ShoppingBag className="w-5 h-5 text-[var(--dp-color-ink)]" />
            {effectiveCartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[20px] h-5 px-1 rounded-full bg-[var(--dp-color-accent)] text-white text-[11px] font-bold flex items-center justify-center font-mono">
                {effectiveCartCount}
              </span>
            )}
          </Link>

          {user ? (
            <UserAccountDropdown />
          ) : (
            <Link
              to="/auth"
              className="flex items-center gap-2 px-3.5 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-highlight)] hover:bg-[#ebda99] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] text-xs font-bold font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-ink)] transition-all cursor-pointer"
            >
              <User className="w-4 h-4 text-[var(--dp-color-ink)]" />
              <span className="hidden sm:inline">Sign In</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default StorefrontNavbar
