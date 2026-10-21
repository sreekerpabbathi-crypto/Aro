import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Star, Clock, Flame, Sparkles, Compass } from 'lucide-react'
import {
  ScribbleUnderline,
  HandDrawnArrow,
  ChilliDoodle,
  BiryaniPotDoodle,
  StarSparkleDoodle,
  WashiTape,
} from '@/components/sketch/SketchDoodles'

export const LandingHero: React.FC = () => {
  const navigate = useNavigate()
  const [heroImgLoaded, setHeroImgLoaded] = useState(false)

  // Primary Hyderabadi Dum Biryani photography
  const primaryHeroImage =
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85'
  const fallbackHeroImage =
    'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1200&q=85'

  // South Indian Ghee Dosa photography
  const secondaryDosaImage =
    'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=85'

  return (
    <section className="relative w-full pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Decorative background doodles */}
      <div className="absolute top-10 left-6 opacity-30 pointer-events-none hidden lg:block -rotate-12">
        <BiryaniPotDoodle className="w-16 h-16 text-[#FF650D]" />
      </div>
      <div className="absolute bottom-12 left-1/3 opacity-25 pointer-events-none hidden lg:block rotate-12">
        <ChilliDoodle className="w-12 h-12 text-[#EF4444]" />
      </div>
      <div className="absolute top-20 right-10 opacity-30 pointer-events-none hidden lg:block rotate-45">
        <StarSparkleDoodle className="w-12 h-12 text-[#FFD13B]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ================================================================= */}
          {/* LEFT COLUMN: Neo-Brutalist Headline, Copy, Handwritten Accents    */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 space-y-7 z-10">
            {/* Top Sticker / Personality Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD13B] border-2 border-[#121212] rounded-md shadow-[3px_3px_0px_#121212] -rotate-1">
                <Flame className="w-4 h-4 text-[#EF4444] fill-current" />
                <span className="font-['Oswald'] font-black text-xs uppercase tracking-wider text-[#121212]">
                  Hyderabad&apos;s Flavor Dispatch
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border-2 border-[#121212] rounded-md shadow-[2px_2px_0px_#121212] text-xs font-bold text-[#121212] rotate-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FF650D]" />
                <span className="font-['Caveat'] text-sm text-[#FF650D]">Zero ghost kitchens</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-['Outfit'] text-[#121212] leading-[1.04] tracking-tight">
                CRAVE IT.
                <br />
                TAP IT.{' '}
                <span className="relative inline-block text-[#FF650D]">
                  DEVOUR IT.
                  <span className="absolute -bottom-2 left-0 w-full block">
                    <ScribbleUnderline className="w-full h-4 text-[#FFD13B]" />
                  </span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#5E5854] max-w-xl leading-relaxed pt-4 font-normal">
                From slow-steamed Nizami mutton biryani and buttery golden ghee roasts to artisanal wood-fired pizzas and sizzling street momos. Hand-selected Hyderabad kitchens, packed with thermal precision, delivered straight to your table.
              </p>
            </div>

            {/* Quick Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-white border-2 border-[#121212] rounded-lg shadow-[3px_3px_0px_#121212]">
                <div className="font-['Oswald'] text-xs font-black uppercase text-[#FF650D] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>32m Average</span>
                </div>
                <div className="text-xs font-semibold text-[#121212] mt-0.5">Thermal Transit</div>
              </div>

              <div className="p-3 bg-white border-2 border-[#121212] rounded-lg shadow-[3px_3px_0px_#121212]">
                <div className="font-['Oswald'] text-xs font-black uppercase text-[#10B981] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.8+ Rating</span>
                </div>
                <div className="text-xs font-semibold text-[#121212] mt-0.5">Strict Vetting</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 bg-white border-2 border-[#121212] rounded-lg shadow-[3px_3px_0px_#121212]">
                <div className="font-['Oswald'] text-xs font-black uppercase text-[#FFD13B] flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#FF650D] fill-current" />
                  <span>100% Piping</span>
                </div>
                <div className="text-xs font-semibold text-[#121212] mt-0.5">Fresh Off Pass</div>
              </div>
            </div>

            {/* CTA Group with Hand-Drawn Arrow */}
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative">
              <button
                type="button"
                onClick={() => navigate('/restaurants')}
                className="w-full sm:w-auto px-8 py-4 bg-[#FF650D] text-white font-black text-base uppercase tracking-wider font-['Oswald'] rounded-xl border-[2.5px] border-[#121212] shadow-[5px_5px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_#121212] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span>Explore 40+ Kitchens</span>
                <ArrowRight className="w-5 h-5 text-[#FFD13B] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('how-it-works')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full sm:w-auto px-6 py-4 bg-white text-[#121212] font-black text-base uppercase tracking-wider font-['Oswald'] rounded-xl border-[2.5px] border-[#121212] shadow-[4px_4px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#121212] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[#FF650D]" />
                <span>How It Works</span>
              </button>

              {/* Hand-Drawn Arrow pointing to the primary CTA */}
              <div className="hidden lg:block absolute -right-28 -top-8 pointer-events-none">
                <HandDrawnArrow
                  label="Order your feast here!"
                  color="#FF650D"
                  direction="down-left"
                  className="w-28 h-20 text-[#FF650D]"
                />
              </div>
            </div>

            {/* Trust badge with sketch note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#5E5854]">
              <span className="font-['Caveat'] text-lg font-bold text-[#121212] -rotate-2">
                &ldquo;Smells like pure saffron and ghee.&rdquo;
              </span>
              <span className="text-[#121212] font-semibold">•</span>
              <span>Serving Jubilee Hills, Banjara Hills, HITEC & Gachibowli</span>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Layered Editorial Food Photography Composition      */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center pt-6 lg:pt-0">
            {/* Background graphic block for Neo-Brutalist depth */}
            <div className="absolute inset-4 sm:inset-6 bg-[#FFD13B] border-[2.5px] border-[#121212] rounded-2xl -rotate-2 shadow-[8px_8px_0px_#121212] -z-10" />

            {/* Central Dominant Food Card */}
            <div className="relative w-full max-w-lg bg-white border-[3px] border-[#121212] rounded-2xl overflow-hidden shadow-[8px_8px_0px_#121212] z-10 transition-transform duration-300 hover:-translate-y-1">
              {/* Washi tape sticker pinning top corner */}
              <div className="absolute top-3 left-4 z-30">
                <WashiTape text="★ HYDERABADI DUM SPECIAL" angle="-4deg" className="bg-[#FFF4C2]" />
              </div>

              {/* Floating live rating badge */}
              <div className="absolute top-3 right-4 z-30 flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#121212] rounded-lg shadow-[3px_3px_0px_#121212] text-xs font-black text-[#121212]">
                <Star className="w-3.5 h-3.5 fill-[#FFD13B] text-[#121212]" />
                <span>4.9</span>
                <span className="text-[#5E5854] font-normal text-[11px]">(342)</span>
              </div>

              {/* High-res Food Photography Frame */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#FAF6EE]">
                <img
                  src={primaryHeroImage}
                  alt="Authentic Hyderabadi Mutton Dum Biryani with caramelized onions and saffron garnish"
                  onLoad={() => setHeroImgLoaded(true)}
                  onError={(e) => {
                    // Fallback to alternative food image if needed
                    e.currentTarget.src = fallbackHeroImage
                  }}
                  className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105 ${
                    heroImgLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                />

                {/* Subtle gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-black/20" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="inline-block px-2 py-0.5 bg-[#FF650D] text-white text-[10px] font-black uppercase font-['Oswald'] rounded border border-[#121212] mb-1">
                    Signature Handi
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black font-['Outfit'] text-white drop-shadow-md">
                    Royal Mutton Dum Biryani
                  </h3>
                  <p className="text-xs text-white/90 font-medium">
                    Deccan Table • Slow-simmered over charcoal embers with Iranian saffron
                  </p>
                </div>
              </div>

              {/* Editorial Info Bar below photo */}
              <div className="p-4 sm:p-5 bg-white border-t-2 border-[#121212] flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#121212]">
                    <span>₹1,150</span>
                    <span className="text-[#5E5854]">•</span>
                    <span className="text-[#FF650D] font-['Oswald'] uppercase tracking-wider">
                      Serves 2-3
                    </span>
                  </div>
                  <p className="text-xs text-[#5E5854]">Paired with mirchi ka salan & burani raita</p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/restaurants/deccan-table')}
                  className="px-4 py-2 bg-[#121212] text-[#FFD13B] text-xs font-black uppercase font-['Oswald'] tracking-wider rounded-lg border-2 border-[#121212] shadow-[3px_3px_0px_#FF650D] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#FF650D] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                >
                  View Menu →
                </button>
              </div>
            </div>

            {/* Overlapping Layered Card 1: Crisp Ghee Roast Dosa (Bottom-Left) */}
            <div className="hidden sm:flex absolute -bottom-8 -left-6 z-20 w-64 bg-white border-2 border-[#121212] rounded-xl p-3 shadow-[5px_5px_0px_#121212] rotate-2 items-center gap-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-[#121212] shrink-0 bg-[#FAF6EE]">
                <img
                  src={secondaryDosaImage}
                  alt="Crisp South Indian Ghee Roast Masala Dosa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-black uppercase font-['Oswald'] text-[#10B981] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  Pure Veg Crisp
                </span>
                <h4 className="text-xs font-bold text-[#121212] leading-snug">
                  Ghee Roast Dosa
                </h4>
                <div className="font-['Caveat'] text-xs text-[#FF650D] font-bold">
                  &ldquo;Crisp at your door! 🤤&rdquo;
                </div>
              </div>
            </div>

            {/* Overlapping Badge 2: Dispatch count sticker (Top-Right) */}
            <div className="hidden sm:block absolute -top-5 -right-4 z-20 px-3 py-2 bg-[#FF650D] text-white border-2 border-[#121212] rounded-lg shadow-[4px_4px_0px_#121212] rotate-3 text-center">
              <div className="text-[10px] uppercase font-['Oswald'] font-black tracking-wider text-[#FFD13B]">
                Active Dispatch
              </div>
              <div className="text-sm font-black font-mono">1,240+ Orders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingHero
