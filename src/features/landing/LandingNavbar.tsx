import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingBag, User, MapPin, ArrowRight, Menu, X, Sparkles } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { ChilliDoodle } from '@/components/sketch/SketchDoodles'

export const LandingNavbar: React.FC = () => {
  const navigate = useNavigate()
  const { totals } = useCart()
  const { user } = useAuth()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const cartCount = totals.itemTotal > 0 ? 1 : 0

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF6EE] border-b-[2.5px] border-[#121212] shadow-[0px_4px_0px_#121212]">
      {/* Top micro-announcement banner */}
      <div className="bg-[#121212] text-[#FFF4C2] px-4 py-1.5 text-xs font-bold font-['Oswald'] tracking-wider uppercase flex items-center justify-center gap-3 overflow-hidden select-none">
        <span className="flex items-center gap-1.5 text-[#FFD13B]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ARO HYDERABAD</span>
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline font-sans font-medium text-[11px] text-[#FAF6EE]/90">
          Curated Dining & Thermal Pod Delivery Across Jubilee, Banjara & HITEC City
        </span>
        <span className="hidden md:inline">•</span>
        <span className="hidden md:flex items-center gap-1 text-[#FF650D]">
          <ChilliDoodle className="w-4 h-4" />
          <span>Zero Compromise on Freshness</span>
        </span>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Wordmark & Location Pill */}
        <div className="flex items-center gap-5 shrink-0">
          <Link
            to="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF650D]"
          >
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
                  EATS
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#5E5854] font-bold font-['Oswald'] pt-0.5">
                Hyderabad Gastronomy
              </span>
            </div>
          </Link>

          {/* Location Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border-2 border-[#121212] text-xs font-semibold text-[#121212] shadow-[2px_2px_0px_#121212]">
            <MapPin className="w-3.5 h-3.5 text-[#FF650D] shrink-0" />
            <span className="truncate max-w-[200px]">Jubilee Hills, Hyderabad</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-black uppercase tracking-wider font-['Oswald'] text-[#121212]">
          <button
            type="button"
            onClick={() => scrollToSection('categories')}
            className="hover:text-[#FF650D] hover:underline decoration-2 underline-offset-4 transition-colors cursor-pointer"
          >
            Cuisines
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('featured-restaurants')}
            className="hover:text-[#FF650D] hover:underline decoration-2 underline-offset-4 transition-colors cursor-pointer"
          >
            Top Kitchens
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-[#FF650D] hover:underline decoration-2 underline-offset-4 transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <Link
            to="/restaurants"
            className="hover:text-[#FF650D] hover:underline decoration-2 underline-offset-4 transition-colors"
          >
            All Restaurants
          </Link>
          <Link
            to="/home"
            className="hover:text-[#FF650D] hover:underline decoration-2 underline-offset-4 transition-colors"
          >
            Storefront
          </Link>
        </nav>

        {/* Action Controls: Cart, Account, Order CTA */}
        <div className="flex items-center gap-3">
          {/* Basket Button */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white border-2 border-[#121212] text-xs font-bold text-[#121212] shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all"
            title="Your Basket"
          >
            <ShoppingBag className="w-4 h-4 text-[#FF650D]" />
            <span className="hidden sm:inline font-['Oswald'] uppercase tracking-wider">Cart</span>
            {cartCount > 0 && (
              <span className="min-w-[18px] h-4 px-1 rounded-full bg-[#FF650D] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Account Button */}
          <Link
            to="/account"
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#FFF4C2] border-2 border-[#121212] text-xs font-bold text-[#121212] shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all font-['Oswald'] uppercase tracking-wider"
          >
            <User className="w-3.5 h-3.5 text-[#121212]" />
            <span>{user?.fullName?.split(' ')[0] || 'Account'}</span>
          </Link>

          {/* Primary Explore/Order CTA */}
          <button
            type="button"
            onClick={() => navigate('/restaurants')}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#FF650D] text-white text-xs sm:text-sm font-black border-2 border-[#121212] shadow-[4px_4px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all font-['Oswald'] uppercase tracking-wider cursor-pointer"
          >
            <span>Order Food</span>
            <ArrowRight className="w-4 h-4 text-[#FFD13B]" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-[#121212]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-t-2 border-[#121212] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border-2 border-[#121212] text-xs font-semibold text-[#121212]">
            <MapPin className="w-4 h-4 text-[#FF650D]" />
            <span>Jubilee Hills, Hyderabad (Delivery Ready)</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 font-['Oswald'] font-black uppercase text-xs">
            <button
              type="button"
              onClick={() => scrollToSection('categories')}
              className="p-3 bg-white border-2 border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] text-center"
            >
              Cuisines
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('featured-restaurants')}
              className="p-3 bg-white border-2 border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] text-center"
            >
              Top Kitchens
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('how-it-works')}
              className="p-3 bg-white border-2 border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] text-center"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                navigate('/restaurants')
              }}
              className="p-3 bg-[#FFD13B] border-2 border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] text-center"
            >
              All Restaurants
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              to="/home"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center bg-white border-2 border-[#121212] rounded-lg text-xs font-black uppercase font-['Oswald'] shadow-[2px_2px_0px_#121212]"
            >
              Enter Storefront →
            </Link>
            <Link
              to="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center bg-[#FFF4C2] border-2 border-[#121212] rounded-lg text-xs font-black uppercase font-['Oswald'] shadow-[2px_2px_0px_#121212]"
            >
              Account / Orders
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default LandingNavbar
