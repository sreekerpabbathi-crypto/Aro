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
      {/* Restrained paper ambient tint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--dp-color-highlight)]/25 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Luxury Platter Showcase Card */}
      <div className="relative w-full max-w-lg rounded-2xl overflow-hidden bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[3px_3px_0px_rgba(56,53,47,0.15)] group">
        {/* Circular Brand Seal Floating Badge */}
        <div className="absolute top-4 right-4 z-30">
          <BrandSeal
            text="EST. 2026 • ARO GASTRONOMY • CHEF CURATED •"
            subtext="FINE DINING"
          />
        </div>

        {/* Hero Culinary Image */}
        <div className="relative h-[340px] sm:h-[390px] w-full overflow-hidden bg-[var(--dp-color-ground)]">
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85"
            alt="Slow-Smoked Deccani Signature Platter"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dp-color-ink)]/80 via-transparent to-black/20" />

          {/* Floating Atelier Badge - Top Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute top-4 left-4 z-20 flex items-center gap-3 px-3.5 py-2 rounded-xl bg-[var(--dp-color-scrap)]/95 backdrop-blur-sm border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.1)]"
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden border-[1.5px] border-[var(--dp-color-line)] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=150&q=80"
                alt="Deccan Table Chef"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">Deccan Table</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--dp-color-accent)]" />
                <span className="text-[10px] text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Jubilee Hills</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                <span className="flex items-center text-[var(--dp-color-accent)] font-semibold gap-0.5">
                  <Star className="w-3 h-3 fill-[var(--dp-color-accent)] text-[var(--dp-color-accent)]" />
                  4.9
                </span>
                <span>•</span>
                <span className="text-[var(--dp-color-annotation)] font-medium">Deccani Heritage</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Live Temperature Pod Indicator - Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="absolute bottom-4 right-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[var(--dp-color-scrap)]/95 backdrop-blur-sm border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.1)]"
          >
            <div className="w-7 h-7 rounded-lg bg-[var(--dp-color-highlight)] flex items-center justify-center text-[var(--dp-color-accent)]">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-[var(--dp-color-ink-muted)] tracking-wider font-['Outfit',sans-serif]">
                Thermal Transit
              </div>
              <div className="text-xs font-semibold text-[var(--dp-color-ink)] flex items-center gap-1 font-['Outfit',sans-serif]">
                <span className="text-[#2d5f3e]">●</span> 32m Fast Arrival
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lower Editorial Information Bar */}
        <div className="p-5 sm:p-6 bg-[var(--dp-color-scrap)] border-t-[1.5px] border-[var(--dp-color-line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-[var(--dp-color-highlight)]/50 border border-[var(--dp-color-line)] text-[10px] uppercase tracking-wider text-[var(--dp-color-accent)] font-bold font-['Outfit',sans-serif]">
                Chef Tasting Feature
              </span>
              <span className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Road No. 36, Hyderabad</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
              Slow-Smoked Deccani Ribs & Saffron Sheermal
            </h3>
            <p className="text-xs text-[var(--dp-color-ink-muted)] line-clamp-1 font-['Outfit',sans-serif]">
              Simmered overnight on charcoal embers with crushed Warangal peppercorns and Iranian saffron.
            </p>
          </div>

          <button
            type="button"
            onClick={onExplore}
            className="shrink-0 px-4 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] hover:bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] transition-all cursor-pointer shadow-[1.5px_1.5px_0px_var(--dp-color-ink)]"
          >
            View Menu →
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroCulinaryShowcase
