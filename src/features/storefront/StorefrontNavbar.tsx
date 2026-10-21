import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, ShoppingBag, MapPin, User, ChevronDown } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

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
    <header className="sticky top-0 z-50 w-full bg-[#FAF6EE] border-b-[2.5px] border-[#121212] shadow-[0px_4px_0px_#121212] text-[#121212]">
      {/* Top micro-announcement banner */}
      <div className="bg-[#121212] text-[#FFF4C2] px-4 py-1.5 text-xs font-bold font-['Oswald'] tracking-wider uppercase flex items-center justify-center gap-3 overflow-hidden select-none">
        <span className="flex items-center gap-1.5 text-[#FFD13B]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>ARO HYDERABAD</span>
        </span>
        <span className="hidden sm:inline text-white/40">•</span>
        <span className="hidden sm:inline font-sans font-medium text-[11px] text-[#FAF6EE]/90">
          Chef-Crafted Gastronomy Delivered Across Jubilee, Banjara & HITEC City
        </span>
        <span className="hidden md:inline text-white/40">•</span>
        <Link
          to="/"
          className="text-[#FF650D] hover:underline font-['Oswald'] text-[11px] flex items-center gap-1"
        >
          <span>Landing Experience →</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand identity: navigates to /home */}
        <div className="flex items-center gap-5 shrink-0">
          <Link to="/home" className="flex items-center gap-3 group focus-visible:outline-none">
            {/* Neo-brutalist logo box */}
            <div className="w-11 h-11 bg-[#121212] border-2 border-[#121212] rounded-lg p-0.5 shadow-[3px_3px_0px_#FF650D] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[5px_5px_0px_#FF650D] transition-all flex items-center justify-center">
              <span className="text-[#FFD13B] font-black text-2xl font-['Oswald'] tracking-wider leading-none">
                A
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[#121212] font-['Outfit'] leading-none">
                  ARO
                </span>
                <span className="bg-[#FF650D] text-white text-[9px] font-bold px-1.5 py-0.5 rounded border border-[#121212] font-['Oswald'] uppercase tracking-wider">
                  APP
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#5E5854] font-bold font-['Oswald'] pt-0.5">
                Hyderabad Gastronomy
              </span>
            </div>
          </Link>

          {/* Delivery Location Selector */}
          <button
            type="button"
            onClick={() => navigate('/account')}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border-2 border-[#121212] text-xs font-bold text-[#121212] shadow-[2px_2px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#121212] transition-all cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#FF650D]" />
            <span className="truncate max-w-[170px]">Jubilee Hills, Hyderabad</span>
            <ChevronDown className="w-3 h-3 text-[#121212]" />
          </button>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-md mx-2 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5E5854]" />
            <input
              type="text"
              value={searchVal}
              onChange={handleSearch}
              onKeyDown={handleSearchSubmit}
              placeholder="Search dishes, chef ateliers, biryani..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-[#121212] placeholder-[#5E5854] font-medium focus:outline-none focus:ring-2 focus:ring-[#FF650D] transition-all"
            />
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-black font-['Oswald'] text-[#121212]">
          <Link
            to="/home"
            className={`transition-colors hover:text-[#FF650D] hover:underline decoration-2 underline-offset-4 ${
              location.pathname === '/home'
                ? 'text-[#FF650D] underline decoration-2 underline-offset-4'
                : 'text-[#121212]'
            }`}
          >
            Storefront
          </Link>
          <Link
            to="/restaurants"
            className={`transition-colors hover:text-[#FF650D] hover:underline decoration-2 underline-offset-4 ${
              location.pathname.startsWith('/restaurants')
                ? 'text-[#FF650D] underline decoration-2 underline-offset-4'
                : 'text-[#121212]'
            }`}
          >
            Restaurants
          </Link>
          <Link
            to="/account"
            className={`transition-colors hover:text-[#FF650D] hover:underline decoration-2 underline-offset-4 ${
              location.pathname === '/account'
                ? 'text-[#FF650D] underline decoration-2 underline-offset-4'
                : 'text-[#121212]'
            }`}
          >
            Orders & Account
          </Link>
        </nav>

        {/* Customer Controls: Cart & Profile */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/cart"
            className="relative p-2.5 rounded-xl bg-white border-2 border-[#121212] text-[#121212] shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212] transition-all"
            title="Order Basket"
          >
            <ShoppingBag className="w-5 h-5 text-[#121212]" />
            {effectiveCartCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-[22px] h-5.5 px-1 rounded-full bg-[#FF650D] text-white border-2 border-[#121212] text-[11px] font-black flex items-center justify-center shadow-[1px_1px_0px_#121212] font-['Oswald']">
                {effectiveCartCount}
              </span>
            )}
          </Link>

          <Link
            to="/account"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#FFD13B] hover:bg-[#ffe066] border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212] text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212] transition-all cursor-pointer"
          >
            <User className="w-4 h-4 text-[#121212]" />
            <span className="hidden sm:inline">{user?.fullName?.split(' ')[0] || 'Account'}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default StorefrontNavbar
