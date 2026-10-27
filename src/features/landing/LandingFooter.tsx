import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Heart, ShieldCheck, Clock, Award } from 'lucide-react'
import { ChilliDoodle } from '@/components/sketch/SketchDoodles'

const currentYear = new Date().getFullYear()

export const LandingFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[var(--dp-color-ground)] border-t-[1.5px] border-[var(--dp-color-line)] pt-14 pb-12 text-[var(--dp-color-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Assurance Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b-[1.5px] border-[var(--dp-color-line)]/50">
          <div className="flex items-center gap-3.5 p-4 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl shadow-[1.5px_1.5px_0px_var(--dp-color-line)]">
            <div className="w-10 h-10 rounded-lg bg-[var(--dp-color-highlight)] border border-[var(--dp-color-line)] flex items-center justify-center text-[var(--dp-color-ink)] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-ink)]">
                Strict Kitchen Caliber
              </h4>
              <p className="text-xs text-[var(--dp-color-ink-muted)] mt-0.5 font-normal font-['Outfit',sans-serif]">
                Only licensed chef ateliers with proven culinary hygiene
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl shadow-[1.5px_1.5px_0px_var(--dp-color-line)]">
            <div className="w-10 h-10 rounded-lg bg-[var(--dp-color-accent)] border border-[var(--dp-color-accent)] flex items-center justify-center text-white shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-ink)]">
                Thermal Pod Logistics
              </h4>
              <p className="text-xs text-[var(--dp-color-ink-muted)] mt-0.5 font-normal font-['Outfit',sans-serif]">
                Dispatched immediately in insulated cases to preserve temperature
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl shadow-[1.5px_1.5px_0px_var(--dp-color-line)]">
            <div className="w-10 h-10 rounded-lg bg-[var(--dp-color-annotation)] border border-[var(--dp-color-annotation)] flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-ink)]">
                Real-Time GPS Telematics
              </h4>
              <p className="text-xs text-[var(--dp-color-ink-muted)] mt-0.5 font-normal font-['Outfit',sans-serif]">
                Vector live courier updates directly to your door
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] flex items-center justify-center font-['Outfit',sans-serif] font-black text-[var(--dp-color-highlight)] text-lg shadow-[1.5px_1.5px_0px_var(--dp-color-accent)]">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-[var(--dp-color-ink)] font-['Outfit',sans-serif] leading-none">
                  ARO
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[var(--dp-color-ink-muted)] font-bold font-['Outfit',sans-serif]">
                  Hyderabad Gastronomy
                </span>
              </div>
            </Link>

            <p className="text-xs text-[var(--dp-color-ink-muted)] leading-relaxed font-normal font-['Outfit',sans-serif]">
              ARO is an artisanal food ordering and dining discovery platform connecting Hyderabad food lovers with the city&apos;s most skilled kitchens.
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded text-[11px] font-bold font-['Outfit',sans-serif] uppercase tracking-wider text-[var(--dp-color-ink)]">
              <ChilliDoodle className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
              <span>Piping Hot Guarantee</span>
            </div>
          </div>

          {/* Cuisines Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-ink)] pb-1 border-b-[1.5px] border-[var(--dp-color-line)]/50">
              Culinary Traditions
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
              <li>
                <Link to="/restaurants?cuisine=hyderabadi-dum" className="hover:text-[var(--dp-color-accent)] transition-colors">
                  Hyderabadi Dum & Awadhi
                </Link>
              </li>
              <li>
                <Link to="/restaurants?cuisine=contemporary-deccani" className="hover:text-[var(--dp-color-accent)] transition-colors">
                  Contemporary Deccani Heritage
                </Link>
              </li>
              <li>
                <Link to="/restaurants?cuisine=south-indian-tiffins" className="hover:text-[var(--dp-color-accent)] transition-colors">
                  South Indian Ghee Tiffins
                </Link>
              </li>
              <li>
                <Link to="/restaurants?cuisine=japanese-robata" className="hover:text-[var(--dp-color-accent)] transition-colors">
                  Japanese Robata & Omakase
                </Link>
              </li>
              <li>
                <Link to="/restaurants?cuisine=artisanal-italian" className="hover:text-[var(--dp-color-accent)] transition-colors">
                  Wood-Fired Neapolitan Pizza
                </Link>
              </li>
            </ul>
          </div>

          {/* Neighborhoods Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-ink)] pb-1 border-b-[1.5px] border-[var(--dp-color-line)]/50">
              Active Delivery Zones
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[var(--dp-color-accent)]" />
                <span>Jubilee Hills (Rd 1 to 45)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[var(--dp-color-accent)]" />
                <span>Banjara Hills (Rd 1 to 14)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[var(--dp-color-accent)]" />
                <span>HITEC City & Madhapur</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[var(--dp-color-accent)]" />
                <span>Financial District & Gachibowli</span>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-[var(--dp-color-accent)]" />
                <span>Kondapur & Botanical Garden</span>
              </li>
            </ul>
          </div>

          {/* Navigation Links Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-ink)] pb-1 border-b-[1.5px] border-[var(--dp-color-line)]/50">
              Navigation & Account
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
              <li>
                <Link to="/home" className="hover:text-[var(--dp-color-accent)] transition-colors">
                  Storefront Catalogue
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="hover:text-[var(--dp-color-accent)] transition-colors">
                  All Restaurants & Menus
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[var(--dp-color-accent)] transition-colors">
                  Shopping Basket
                </Link>
              </li>
              <li>
                <Link to="/account" className="hover:text-[var(--dp-color-accent)] transition-colors">
                  Order History & Cellar
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/login"
                  className="inline-flex items-center gap-1 text-[var(--dp-color-ink-muted)]/80 hover:text-[var(--dp-color-accent)] transition-colors text-[11px]"
                >
                  <ShieldCheck className="w-3 h-3 text-[var(--dp-color-annotation)]" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t-[1.5px] border-[var(--dp-color-line)]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--dp-color-ink-muted)]">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-['Outfit',sans-serif]">
            <span>© {currentYear} ARO Technologies Inc. All rights reserved.</span>
            <span className="hidden sm:inline text-[var(--dp-color-line)]">•</span>
            <Link
              to="/admin/login"
              className="inline-flex items-center gap-1 text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-accent)] transition-colors font-semibold"
              title="ARO Operations & Admin Gateway"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--dp-color-annotation)]" />
              <span>Admin Portal</span>
            </Link>
          </div>
          <p className="flex items-center gap-1.5 font-['Caveat',cursive] text-lg text-[var(--dp-color-ink)] font-bold">
            Curated for food lovers with <Heart className="w-3.5 h-3.5 text-[var(--dp-color-accent)] fill-current inline" /> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  )
}

export default LandingFooter
