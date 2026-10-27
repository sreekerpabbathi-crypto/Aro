import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingBag, User, MapPin, ArrowRight, Menu, X, Sparkles } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { ChilliDoodle } from '@/components/sketch/SketchDoodles'
import { UserAccountDropdown } from '@/components/layout/UserAccountDropdown'

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
    <header className="sticky top-0 z-50 w-full bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)] shadow-[0px_2px_0px_rgba(56,53,47,0.06)]">
      {/* Top micro-announcement banner */}
      <div className="bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink-muted)] border-b-[1.5px] border-[var(--dp-color-line)] px-4 py-1.5 text-xs font-medium tracking-wide flex items-center justify-center gap-3 overflow-hidden select-none">
        <span className="flex items-center gap-1.5 text-[var(--dp-color-annotation)] font-bold tracking-wider uppercase text-[11px]">
          <Sparkles className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
          <span>ARO HYDERABAD</span>
        </span>
        <span className="hidden sm:inline text-[var(--dp-color-line)]">•</span>
        <span className="hidden sm:inline text-[12px] text-[var(--dp-color-ink-muted)]">
          Curated Dining & Thermal Pod Delivery Across Jubilee, Banjara & HITEC City
        </span>
        <span className="hidden md:inline text-[var(--dp-color-line)]">•</span>
        <span className="hidden md:flex items-center gap-1 text-[var(--dp-color-accent)] font-medium">
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
            className="flex items-center gap-3 group focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-[var(--dp-color-annotation)]"
          >
            {/* Working sheet logo box */}
            <div className="w-11 h-11 bg-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] rounded-[var(--dp-radius-control)] p-0.5 shadow-[2px_2px_0px_var(--dp-color-accent)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[3px_3px_0px_var(--dp-color-accent)] transition-all flex items-center justify-center">
              <span className="text-[var(--dp-color-highlight)] font-extrabold text-2xl font-['Outfit',sans-serif] tracking-wider leading-none">
                A
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tight text-[var(--dp-color-ink)] font-['Outfit',sans-serif] leading-none">
                  ARO
                </span>
                <span className="bg-[var(--dp-color-accent)] text-white text-[9px] font-bold px-1.5 py-0.5 rounded border border-[var(--dp-color-accent)] uppercase tracking-wider font-['Outfit',sans-serif]">
                  EATS
                </span>
              </div>
              <span className="text-[11px] tracking-wider text-[var(--dp-color-ink-muted)] font-semibold uppercase pt-0.5 font-['Outfit',sans-serif]">
                Hyderabad Gastronomy
              </span>
            </div>
          </Link>

          {/* Location Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-medium text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)]">
            <MapPin className="w-3.5 h-3.5 text-[var(--dp-color-accent)] shrink-0" />
            <span className="truncate max-w-[200px]">Jubilee Hills, Hyderabad</span>
            <span className="w-2 h-2 rounded-full bg-[#2d5f3e] animate-pulse" />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold font-['Outfit',sans-serif] tracking-wide text-[var(--dp-color-ink)]">
          <button
            type="button"
            onClick={() => scrollToSection('categories')}
            className="hover:text-[var(--dp-color-accent)] hover:underline decoration-1 underline-offset-4 transition-colors cursor-pointer"
          >
            Cuisines
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('featured-restaurants')}
            className="hover:text-[var(--dp-color-accent)] hover:underline decoration-1 underline-offset-4 transition-colors cursor-pointer"
          >
            Top Kitchens
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('how-it-works')}
            className="hover:text-[var(--dp-color-accent)] hover:underline decoration-1 underline-offset-4 transition-colors cursor-pointer"
          >
            How It Works
          </button>
          <Link
            to="/restaurants"
            className="hover:text-[var(--dp-color-accent)] hover:underline decoration-1 underline-offset-4 transition-colors"
          >
            All Restaurants
          </Link>
          <Link
            to="/home"
            className="hover:text-[var(--dp-color-accent)] hover:underline decoration-1 underline-offset-4 transition-colors"
          >
            Storefront
          </Link>
        </nav>

        {/* Action Controls: Cart, Account, Order CTA */}
        <div className="flex items-center gap-3">
          {/* Basket Button */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 px-3 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-semibold text-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] hover:shadow-[2px_2px_0px_var(--dp-color-ink)] active:translate-x-[1px] active:translate-y-[1px] transition-all"
            title="Your Basket"
          >
            <ShoppingBag className="w-4 h-4 text-[var(--dp-color-accent)]" />
            <span className="hidden sm:inline font-['Outfit',sans-serif] text-xs font-semibold">Cart</span>
            {cartCount > 0 && (
              <span className="min-w-[18px] h-4 px-1 rounded-full bg-[var(--dp-color-accent)] text-white text-[10px] font-bold flex items-center justify-center font-mono">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Account Dropdown / Sign In Button */}
          {user ? (
            <div className="hidden sm:block">
              <UserAccountDropdown />
            </div>
          ) : (
            <Link
              to="/auth"
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-semibold text-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] active:translate-x-[1px] active:translate-y-[1px] transition-all font-['Outfit',sans-serif]"
            >
              <User className="w-3.5 h-3.5 text-[var(--dp-color-ink)]" />
              <span>Sign In</span>
            </Link>
          )}

          {/* Primary Order Food CTA with Authentication-Aware Redirection */}
          <button
            type="button"
            onClick={() => {
              if (user) {
                navigate('/restaurants')
              } else {
                navigate('/auth?redirect=/restaurants')
              }
            }}
            className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] text-white text-xs sm:text-sm font-semibold border-[1.5px] border-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-ink)] hover:bg-[#852f25] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2.5px_2.5px_0px_var(--dp-color-ink)] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-none transition-all cursor-pointer"
          >
            <span className="font-['Outfit',sans-serif] font-bold text-sm">Order Food</span>
            <ArrowRight className="w-4 h-4 text-[var(--dp-color-highlight)]" />
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all text-[var(--dp-color-ink)]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--dp-color-scrap)] border-t-[1.5px] border-[var(--dp-color-line)] px-6 py-6 space-y-4 shadow-lg">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-medium text-[var(--dp-color-ink)]">
            <MapPin className="w-4 h-4 text-[var(--dp-color-accent)]" />
            <span>Jubilee Hills, Hyderabad (Delivery Ready)</span>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 font-['Outfit',sans-serif] font-bold text-sm">
            <button
              type="button"
              onClick={() => scrollToSection('categories')}
              className="p-3 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-lg shadow-[1px_1px_0px_var(--dp-color-line)] text-center text-[var(--dp-color-ink)]"
            >
              Cuisines
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('featured-restaurants')}
              className="p-3 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-lg shadow-[1px_1px_0px_var(--dp-color-line)] text-center text-[var(--dp-color-ink)]"
            >
              Top Kitchens
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('how-it-works')}
              className="p-3 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-lg shadow-[1px_1px_0px_var(--dp-color-line)] text-center text-[var(--dp-color-ink)]"
            >
              How It Works
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                navigate('/restaurants')
              }}
              className="p-3 bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] rounded-lg shadow-[1px_1px_0px_var(--dp-color-ink)] text-center text-[var(--dp-color-ink)] font-bold"
            >
              All Restaurants
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              to="/home"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-lg text-sm font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)]"
            >
              Enter Storefront →
            </Link>
            {user ? (
              <Link
                to="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-line)] rounded-lg text-sm font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)]"
              >
                Account / Orders ({user.fullName?.split(' ')[0] || 'Patron'})
              </Link>
            ) : (
              <Link
                to="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-line)] rounded-lg text-sm font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)]"
              >
                Sign In / Register
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default LandingNavbar
