import React from 'react'
import { motion } from 'motion/react'
import { Star, Clock } from 'lucide-react'
import { BrandSeal } from '@/components/common/BrandSeal'

interface HeroCulinaryShowcaseProps {
  onExplore?: () => void
}

export const HeroCulinaryShowcase: React.FC<HeroCulinaryShowcaseProps> = ({ onExplore }) => {
  return (
    <div className="relative w-full h-full min-h-[460px] sm:min-h-[540px] lg:min-h-[600px] flex items-center justify-center">
      {/* Warm Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF650D]/20 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#641820]/30 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Main Luxury Platter Showcase Card */}
      <div className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-[#211A19]/90 border border-[#4D3F3C]/80 shadow-2xl shadow-black/80 group">
        {/* Retro Circular Brand Seal Floating Badge */}
        <div className="absolute top-4 right-4 z-30">
          <BrandSeal
            text="EST. 2026 • ARO GASTRONOMY • CHEF CURATED •"
            subtext="FINE DINING"
          />
        </div>

        {/* Hero Culinary Image */}
        <div className="relative h-[340px] sm:h-[390px] w-full overflow-hidden bg-[#161110]">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
            alt="Slow-Smoked Deccani Signature Platter"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#211A19] via-[#211A19]/20 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#211A19]/60 via-transparent to-transparent" />

          {/* Floating Atelier Badge - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute top-4 left-4 z-20 flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#211A19]/85 backdrop-blur-md border border-[#4D3F3C]/90 shadow-xl"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-[#FF650D]/40 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=150&q=80"
                alt="Deccan Table Chef"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white font-['Outfit']">Deccan Table</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF650D]" />
                <span className="text-[10px] text-[#A89A97]">Jubilee Hills</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#A89A97]">
                <span className="flex items-center text-amber-400 font-semibold gap-0.5">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  4.9
                </span>
                <span>•</span>
                <span className="text-[#FF650D] font-medium">Deccani Heritage</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Live Temperature Pod Indicator - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="absolute bottom-4 right-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#211A19]/90 backdrop-blur-md border border-[#FF650D]/40 shadow-xl"
          >
            <div className="w-7 h-7 rounded-lg bg-[#FF650D]/15 flex items-center justify-center text-[#FF650D]">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-[#A89A97] tracking-wider font-['Oswald']">
                Thermal Transit
              </div>
              <div className="text-xs font-semibold text-white flex items-center gap-1">
                <span className="text-emerald-400">●</span> 32m Fast Arrival
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Editorial Information Bar */}
        <div className="p-5 sm:p-6 bg-[#211A19] border-t border-[#4D3F3C]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[#641820]/50 border border-[#FF650D]/30 text-[10px] uppercase tracking-wider text-[#FF650D] font-bold font-['Oswald']">
                Chef Tasting Feature
              </span>
              <span className="text-xs text-[#A89A97]">Road No. 36, Hyderabad</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
              Slow-Smoked Deccani Ribs & Saffron Sheermal
            </h3>
            <p className="text-xs text-[#A89A97] line-clamp-1">
              Simmered overnight on charcoal embers with crushed Warangal peppercorns and Iranian saffron.
            </p>
          </div>

          <button
            type="button"
            onClick={onExplore}
            className="shrink-0 px-4 py-2 rounded-xl bg-[#2E2423] hover:bg-[#FF650D] border border-[#4D3F3C] hover:border-[#FF650D] text-xs font-semibold text-white transition-all cursor-pointer shadow-md"
          >
            View Menu →
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroCulinaryShowcase
