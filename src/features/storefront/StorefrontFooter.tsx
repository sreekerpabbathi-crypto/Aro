import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, ShieldCheck, Clock, Award } from 'lucide-react'
import { ChilliDoodle } from '@/components/sketch/SketchDoodles'

const currentYear = new Date().getFullYear()

export const StorefrontFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#FAF6EE] border-t-[3px] border-[#121212] pt-14 pb-12 mt-16 text-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Assurance Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 mb-12 border-b-2 border-[#121212]/15">
          <div className="flex items-center gap-3.5 p-4 bg-white border-2 border-[#121212] rounded-xl shadow-[3px_3px_0px_#121212]">
            <div className="w-10 h-10 rounded-lg bg-[#FFD13B] border border-[#121212] flex items-center justify-center text-[#121212] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212]">
                Curated Excellence
              </h4>
              <p className="text-xs text-[#5E5854] mt-0.5 font-normal">
                Every kitchen vetted for food hygiene & culinary caliber
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-white border-2 border-[#121212] rounded-xl shadow-[3px_3px_0px_#121212]">
            <div className="w-10 h-10 rounded-lg bg-[#FF650D] border border-[#121212] flex items-center justify-center text-white shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212]">
                Precision Timing
              </h4>
              <p className="text-xs text-[#5E5854] mt-0.5 font-normal">
                Food dispatched immediately from the chef’s pass to courier
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 bg-white border-2 border-[#121212] rounded-xl shadow-[3px_3px_0px_#121212]">
            <div className="w-10 h-10 rounded-lg bg-[#10B981] border border-[#121212] flex items-center justify-center text-white shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212]">
                Thermal Insulated
              </h4>
              <p className="text-xs text-[#5E5854] mt-0.5 font-normal">
                Hot remains piping hot, chilled courses stay crisp
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#121212] border-2 border-[#121212] flex items-center justify-center font-['Oswald'] font-black text-[#FFD13B] text-lg shadow-[2px_2px_0px_#FF650D]">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-[#121212] font-['Outfit'] leading-none">
                  ARO
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#5E5854] font-bold font-['Oswald']">
                  Hyderabad Gastronomy
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#5E5854] leading-relaxed font-normal">
              ARO brings the city’s finest culinary craft into your home with pristine presentation and uncompromised flavor.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#121212] rounded text-[11px] font-bold font-['Oswald'] text-[#121212]">
              <ChilliDoodle className="w-3.5 h-3.5" />
              <span>Authentic Hyderabad Kitchens</span>
            </div>
          </div>

          {/* Cuisines */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212] pb-1 border-b border-[#121212]/20">
              Culinary Traditions
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#5E5854]">
              <li><Link to="/restaurants" className="hover:text-[#FF650D] transition-colors">Japanese Robata & Omakase</Link></li>
              <li><Link to="/restaurants" className="hover:text-[#FF650D] transition-colors">Wood-Fired Neapolitan Pizza</Link></li>
              <li><Link to="/restaurants" className="hover:text-[#FF650D] transition-colors">Hyderabadi Dum & Awadhi</Link></li>
              <li><Link to="/restaurants" className="hover:text-[#FF650D] transition-colors">Contemporary Deccani</Link></li>
              <li><Link to="/restaurants" className="hover:text-[#FF650D] transition-colors">Artisanal Patisserie & Bakery</Link></li>
            </ul>
          </div>

          {/* Neighborhoods */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212] pb-1 border-b border-[#121212]/20">
              Serving Hyderabad
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#5E5854]">
              <li>Jubilee Hills & Film Nagar</li>
              <li>Banjara Hills (Rd 1 to 14)</li>
              <li>HITEC City & Madhapur</li>
              <li>Financial District & Gachibowli</li>
              <li>Kondapur & Botanical Garden</li>
            </ul>
          </div>

          {/* Navigation & Account */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212] pb-1 border-b border-[#121212]/20">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#5E5854]">
              <li><Link to="/home" className="hover:text-[#FF650D] transition-colors">Storefront Home</Link></li>
              <li><Link to="/restaurants" className="hover:text-[#FF650D] transition-colors">Explore All Restaurants</Link></li>
              <li><Link to="/cart" className="hover:text-[#FF650D] transition-colors">My Order Basket</Link></li>
              <li><Link to="/account" className="hover:text-[#FF650D] transition-colors">Account & Order History</Link></li>
              <li><Link to="/" className="hover:text-[#FF650D] transition-colors">Landing Page</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t-2 border-[#121212]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-[#5E5854]">
          <p>© {currentYear} ARO Eats Hyderabad. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[#121212]">
            Crafted for Hyderabad with <Heart className="w-3.5 h-3.5 text-[#EF4444] fill-current" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default StorefrontFooter
