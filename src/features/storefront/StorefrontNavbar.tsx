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
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#211A19]/95 border-b border-[#4D3F3C]/60 text-[#FFF0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand identity: navigates to /home */}
        <div className="flex items-center gap-6 shrink-0">
          <Link to="/home" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF650D] via-[#E9432E] to-[#641820] p-0.5 shadow-lg shadow-[#FF650D]/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#211A19] rounded-[10px] flex items-center justify-center">
                <span className="text-[#FF650D] font-black text-lg font-['Oswald'] tracking-wider">
                  A
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white font-['Outfit'] group-hover:text-[#FF650D] transition-colors leading-none">
                ARO
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#A89A97] font-semibold hidden sm:block font-['Oswald'] pt-1">
                Hyderabad Gastronomy
              </span>
            </div>
          </Link>

          {/* Delivery Location Selector */}
          <button
            type="button"
            onClick={() => navigate('/account')}
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E2423] border border-[#4D3F3C] text-xs text-[#A89A97] hover:border-[#FF650D]/60 transition-colors cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#FF650D]" />
            <span className="text-white font-medium">Jubilee Hills, Hyderabad</span>
            <ChevronDown className="w-3 h-3 text-[#A89A97]" />
          </button>
        </div>

        {/* Global Search Bar */}
        <div className="flex-1 max-w-md mx-2 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89A97]" />
            <input
              type="text"
              value={searchVal}
              onChange={handleSearch}
              onKeyDown={handleSearchSubmit}
              placeholder="Search dishes, chef ateliers, cuisines..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[#2E2423] border border-[#4D3F3C] text-white placeholder-[#A89A97] focus:outline-none focus:border-[#FF650D] transition-all"
            />
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-bold font-['Oswald']">
          <Link
            to="/home"
            className={`transition-colors ${
              location.pathname === '/home'
                ? 'text-[#FF650D]'
                : 'text-[#A89A97] hover:text-white'
            }`}
          >
            Storefront
          </Link>
          <Link
            to="/restaurants"
            className={`transition-colors ${
              location.pathname === '/restaurants'
                ? 'text-[#FF650D]'
                : 'text-[#A89A97] hover:text-white'
            }`}
          >
            Ateliers & Menus
          </Link>
          <Link
            to="/account"
            className={`transition-colors ${
              location.pathname === '/account'
                ? 'text-[#FF650D]'
                : 'text-[#A89A97] hover:text-white'
            }`}
          >
            Orders & Cellar
          </Link>
        </nav>

        {/* Customer Controls: Cart & Profile */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/cart"
            className="relative p-2.5 rounded-xl bg-[#2E2423] border border-[#4D3F3C] text-[#A89A97] hover:text-white hover:border-[#FF650D]/60 transition-colors"
            title="Gastronomy Basket"
          >
            <ShoppingBag className="w-5 h-5" />
            {effectiveCartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#FF650D] text-white text-[11px] font-bold flex items-center justify-center shadow-md shadow-[#FF650D]/40 font-mono">
                {effectiveCartCount}
              </span>
            )}
          </Link>

          <Link
            to="/account"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#2E2423] hover:bg-[#3D302E] border border-[#4D3F3C] hover:border-[#FF650D]/60 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            <User className="w-3.5 h-3.5 text-[#FF650D]" />
            <span className="hidden sm:inline">{user?.fullName || 'Account'}</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default StorefrontNavbar
