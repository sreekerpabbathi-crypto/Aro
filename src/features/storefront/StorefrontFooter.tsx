import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShieldCheck, Clock, Award } from 'lucide-react'

const currentYear = new Date().getFullYear()

export const StorefrontFooter: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#090a0c] pt-16 pb-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b border-white/[0.04]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff5733]/10 border border-[#ff5733]/20 flex items-center justify-center text-[#ff5733]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Curated Excellence</h4>
              <p className="text-xs text-[#8e95a5]">Every partner vetted for kitchen hygiene & culinary caliber</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff5733]/10 border border-[#ff5733]/20 flex items-center justify-center text-[#ff5733]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Precision Timing</h4>
              <p className="text-xs text-[#8e95a5]">Food dispatched immediately from the chef’s pass to courier</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff5733]/10 border border-[#ff5733]/20 flex items-center justify-center text-[#ff5733]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Thermal Insulated</h4>
              <p className="text-xs text-[#8e95a5]">Hot remains piping hot, cold courses remain crisp & chilled</p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/home" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#ff5733] flex items-center justify-center font-['Outfit'] font-bold text-white text-base">
                A
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Outfit']">
                ARO
              </span>
            </Link>
            <p className="text-sm text-[#8e95a5] leading-relaxed">
              Good food. Beautifully found.
            </p>
            <p className="text-xs text-[#8e95a5]/70 leading-relaxed">
              ARO brings the city’s finest culinary craft into your home with pristine presentation and uncompromised flavor.
            </p>
          </div>

          {/* Cuisines */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Culinary Traditions
            </h4>
            <ul className="space-y-2 text-xs text-[#8e95a5]">
              <li><a href="#categories" className="hover:text-white transition-colors">Japanese Robata & Omakase</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Wood-Fired Neapolitan Pizza</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Contemporary Indian Gastronomy</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">French Haute Cuisine</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Artisanal Patisserie & Bakery</a></li>
            </ul>
          </div>

          {/* Neighborhoods */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Serving Hyderabad
            </h4>
            <ul className="space-y-2 text-xs text-[#8e95a5]">
              <li>Jubilee Hills & Film Nagar</li>
              <li>Banjara Hills (Rd 1 to 14)</li>
              <li>HITEC City & Madhapur</li>
              <li>Financial District & Gachibowli</li>
              <li>Kondapur & Botanical Garden</li>
            </ul>
          </div>

          {/* Concierge & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Guest Care
            </h4>
            <ul className="space-y-2 text-xs text-[#8e95a5]">
              <li><a href="#offers" className="hover:text-white transition-colors">Dining Privileges & Offers</a></li>
              <li><span className="text-white/40">VIP Concierge Desk</span></li>
              <li><span className="text-white/40">Dietary & Allergen Inquiries</span></li>
              <li><span className="text-white/40">Partner With ARO</span></li>
              <li><span className="text-white/40">Privacy Policy & Terms</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e95a5]">
          <p>© {currentYear} ARO Technologies Inc. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Engineered for culinary lovers with <Heart className="w-3 h-3 text-[#ff5733] fill-current" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default StorefrontFooter
