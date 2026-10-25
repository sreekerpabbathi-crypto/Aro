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
      {/* Restrained decorative background sketch accents */}
      <div className="absolute top-10 left-6 opacity-20 pointer-events-none hidden lg:block -rotate-6">
        <BiryaniPotDoodle className="w-14 h-14 text-[var(--dp-color-accent)]" />
      </div>
      <div className="absolute bottom-12 left-1/3 opacity-20 pointer-events-none hidden lg:block rotate-6">
        <ChilliDoodle className="w-10 h-10 text-[var(--dp-color-accent)]" />
      </div>
      <div className="absolute top-20 right-10 opacity-25 pointer-events-none hidden lg:block rotate-12">
        <StarSparkleDoodle className="w-10 h-10 text-[var(--dp-color-highlight)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* ================================================================= */}
          {/* LEFT COLUMN: Large Statement Heading, Open Thoughts, Action Link  */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 space-y-7 z-10">
            {/* Top Note / Annotation Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] rounded-[var(--dp-radius-control)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] -rotate-1">
                <Flame className="w-4 h-4 text-[var(--dp-color-accent)] fill-current" />
                <span className="font-['Outfit',sans-serif] font-bold text-xs uppercase tracking-wider text-[var(--dp-color-ink)]">
                  Hyderabad&apos;s Flavor Dispatch
                </span>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-[var(--dp-radius-control)] shadow-[1px_1px_0px_var(--dp-color-line)] text-xs font-medium text-[var(--dp-color-annotation)] rotate-1">
                <Sparkles className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                <span className="font-['Caveat',cursive] text-base font-bold text-[var(--dp-color-annotation)]">Zero ghost kitchens</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] leading-[1.06] tracking-tight">
                CRAVE IT.
                <br />
                TAP IT.{' '}
                <span className="relative inline-block text-[var(--dp-color-accent)]">
                  DEVOUR IT.
                  <span className="absolute -bottom-2 left-0 w-full block">
                    <ScribbleUnderline className="w-full h-3 text-[var(--dp-color-accent)]" />
                  </span>
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[var(--dp-color-ink-muted)] max-w-xl leading-relaxed pt-3 font-normal font-['Outfit',sans-serif]">
                From slow-steamed Nizami mutton biryani and buttery golden ghee roasts to artisanal wood-fired pizzas and sizzling street momos. Hand-selected Hyderabad kitchens, packed with thermal precision, delivered straight to your table.
              </p>
            </div>

            {/* Quick Value Points beneath drawn paper cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.1)]">
                <div className="font-['Outfit',sans-serif] text-xs font-bold uppercase text-[var(--dp-color-accent)] flex items-center gap-1 tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>32m Average</span>
                </div>
                <div className="text-xs font-medium text-[var(--dp-color-ink)] mt-0.5 font-['Outfit',sans-serif]">Thermal Transit</div>
              </div>

              <div className="p-3 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.1)]">
                <div className="font-['Outfit',sans-serif] text-xs font-bold uppercase text-[var(--dp-color-annotation)] flex items-center gap-1 tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>4.8+ Rating</span>
                </div>
                <div className="text-xs font-medium text-[var(--dp-color-ink)] mt-0.5 font-['Outfit',sans-serif]">Strict Vetting</div>
              </div>

              <div className="col-span-2 sm:col-span-1 p-3 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.1)]">
                <div className="font-['Outfit',sans-serif] text-xs font-bold uppercase text-[var(--dp-color-accent)] flex items-center gap-1 tracking-wider">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  <span>100% Piping</span>
                </div>
                <div className="text-xs font-medium text-[var(--dp-color-ink)] mt-0.5 font-['Outfit',sans-serif]">Fresh Off Pass</div>
              </div>
            </div>

            {/* CTA Group with Hand-Drawn Arrow */}
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 relative">
              <button
                type="button"
                onClick={() => navigate('/restaurants')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[var(--dp-color-accent)] text-white font-medium text-base rounded-[var(--dp-radius-control)] border-[1.5px] border-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-ink)] hover:bg-[#852f25] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2.5px_2.5px_0px_var(--dp-color-ink)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-3 group"
              >
                <span className="font-['Outfit',sans-serif] font-bold">Explore 40+ Kitchens</span>
                <ArrowRight className="w-4 h-4 text-[var(--dp-color-highlight)] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('how-it-works')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="w-full sm:w-auto px-6 py-3.5 bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] font-medium text-base rounded-[var(--dp-radius-control)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_var(--dp-color-ink)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Compass className="w-4 h-4 text-[var(--dp-color-annotation)]" />
                <span className="font-['Outfit',sans-serif] font-bold">How It Works</span>
              </button>

              {/* Hand-Drawn Arrow pointing toward the primary CTA */}
              <div className="hidden lg:block absolute -right-28 -top-8 pointer-events-none">
                <HandDrawnArrow
                  label="Order your feast here!"
                  color="var(--dp-color-annotation)"
                  direction="down-left"
                  className="w-28 h-20 text-[var(--dp-color-annotation)]"
                />
              </div>
            </div>

            {/* Trust badge with sketch note */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[var(--dp-color-ink-muted)]">
              <span className="font-['Caveat',cursive] text-lg font-bold text-[var(--dp-color-annotation)] -rotate-1">
                &ldquo;Smells like pure saffron and ghee.&rdquo;
              </span>
              <span className="text-[var(--dp-color-line)] font-semibold">•</span>
              <span className="font-['Outfit',sans-serif]">Serving Jubilee Hills, Banjara Hills, HITEC & Gachibowli</span>
            </div>
          </div>

          {/* ================================================================= */}
          {/* RIGHT COLUMN: Editorial Taped Photo Reference Mount              */}
          {/* ================================================================= */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center pt-6 lg:pt-0">
            {/* Soft background mount shadow */}
            <div className="absolute inset-4 sm:inset-6 bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-line)] rounded-2xl -rotate-1 shadow-[3px_3px_0px_rgba(56,53,47,0.1)] -z-10" />

            {/* Central Taped Reference Food Card */}
            <div className="relative w-full max-w-lg bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-2xl overflow-hidden shadow-[3px_3px_0px_rgba(56,53,47,0.18)] z-10 transition-transform duration-300 hover:-translate-y-0.5">
              {/* Taped reference strip */}
              <div className="absolute top-3 left-4 z-30">
                <WashiTape text="★ HYDERABADI DUM SPECIAL" angle="-3deg" className="bg-[var(--dp-color-highlight)]/80" />
              </div>

              {/* Live rating badge */}
              <div className="absolute top-3 right-4 z-30 flex items-center gap-1.5 px-3 py-1 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-lg shadow-[1px_1px_0px_var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)]">
                <Star className="w-3.5 h-3.5 fill-[var(--dp-color-accent)] text-[var(--dp-color-accent)]" />
                <span className="font-['Outfit',sans-serif] font-bold">4.9</span>
                <span className="text-[var(--dp-color-ink-muted)] font-normal text-[11px]">(342)</span>
              </div>

              {/* Natural High-res Food Photography Frame */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[var(--dp-color-ground)]">
                <img
                  src={primaryHeroImage}
                  alt="Authentic Hyderabadi Mutton Dum Biryani with caramelized onions and saffron garnish"
                  onLoad={() => setHeroImgLoaded(true)}
                  onError={(e) => {
                    e.currentTarget.src = fallbackHeroImage
                  }}
                  className={`w-full h-full object-cover object-center transition-transform duration-500 ease-out hover:scale-105 ${
                    heroImgLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                />

                {/* Subtle gradient overlay for reading text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dp-color-ink)]/85 via-transparent to-black/10" />

                {/* Bottom caption overlay */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="inline-block px-2 py-0.5 bg-[var(--dp-color-accent)] text-white text-[10px] font-bold uppercase rounded border border-[var(--dp-color-accent)] mb-1 font-['Outfit',sans-serif]">
                    Signature Handi
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] text-white drop-shadow-sm">
                    Royal Mutton Dum Biryani
                  </h3>
                  <p className="text-xs text-white/90 font-medium font-['Outfit',sans-serif]">
                    Deccan Table • Slow-simmered over charcoal embers with Iranian saffron
                  </p>
                </div>
              </div>

              {/* Info Bar below photo */}
              <div className="p-4 sm:p-5 bg-[var(--dp-color-scrap)] border-t-[1.5px] border-[var(--dp-color-line)] flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[var(--dp-color-ink)]">
                    <span className="font-['Outfit',sans-serif] font-extrabold text-sm">₹1,150</span>
                    <span className="text-[var(--dp-color-line)]">•</span>
                    <span className="text-[var(--dp-color-accent)] font-['Outfit',sans-serif] uppercase font-bold tracking-wider text-[11px]">
                      Serves 2-3
                    </span>
                  </div>
                  <p className="text-xs text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">Paired with mirchi ka salan & burani raita</p>
                </div>

                <button
                  type="button"
                  onClick={() => navigate('/restaurants/deccan-table')}
                  className="px-4 py-2 bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider rounded-[var(--dp-radius-control)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] hover:bg-[var(--dp-color-highlight)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
                >
                  View Menu →
                </button>
              </div>
            </div>

            {/* Overlapping Reference Mount 1: Crisp Ghee Roast Dosa (Bottom-Left) */}
            <div className="hidden sm:flex absolute -bottom-7 -left-5 z-20 w-64 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] rounded-xl p-3 shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.16)] rotate-1 items-center gap-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden border-[1.5px] border-[var(--dp-color-line)] shrink-0 bg-[var(--dp-color-ground)]">
                <img
                  src={secondaryDosaImage}
                  alt="Crisp South Indian Ghee Roast Masala Dosa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold uppercase text-[#2d5f3e] flex items-center gap-1 font-['Outfit',sans-serif]">
                  <span className="w-2 h-2 rounded-full bg-[#2d5f3e]" />
                  Pure Veg Crisp
                </span>
                <h4 className="text-xs font-bold text-[var(--dp-color-ink)] leading-snug font-['Outfit',sans-serif]">
                  Ghee Roast Dosa
                </h4>
                <div className="font-['Caveat',cursive] text-sm text-[var(--dp-color-accent)] font-bold">
                  &ldquo;Crisp at your door!&rdquo;
                </div>
              </div>
            </div>

            {/* Overlapping Badge 2: Dispatch count note (Top-Right) */}
            <div className="hidden sm:block absolute -top-4 -right-3 z-20 px-3 py-1.5 bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] rounded-[var(--dp-radius-control)] shadow-[2px_2px_0px_var(--dp-color-ink)] rotate-2 text-center">
              <div className="text-[10px] uppercase font-['Outfit',sans-serif] font-bold tracking-wider text-[var(--dp-color-annotation)]">
                Active Dispatch
              </div>
              <div className="text-xs font-bold font-mono">1,240+ Orders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingHero
