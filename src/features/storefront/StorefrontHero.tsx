import React from 'react'
import { ShieldCheck, Clock, ArrowRight } from 'lucide-react'
import { ScribbleUnderline, StarSparkleDoodle, WashiTape, ChilliDoodle } from '@/components/sketch/SketchDoodles'
import { Link } from 'react-router-dom'

interface StorefrontHeroProps {
  selectedCuisine: string
  onSelectCuisine: (slug: string) => void
  vegOnly: boolean
  onToggleVegOnly: () => void
}

export const StorefrontHero: React.FC<StorefrontHeroProps> = ({
  selectedCuisine,
  onSelectCuisine,
  vegOnly,
  onToggleVegOnly,
}) => {
  const cuisinePills = [
    { name: 'All Cuisines', slug: 'all' },
    { name: 'Japanese & Robata', slug: 'japanese-robata' },
    { name: 'Hyderabadi Dum', slug: 'hyderabadi-dum' },
    { name: 'Artisanal Italian', slug: 'artisanal-italian' },
    { name: 'Contemporary Deccani', slug: 'contemporary-deccani' },
    { name: 'South Indian Tiffins', slug: 'south-indian-tiffins' },
  ]

  return (
    <section className="relative pt-6 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Curated Working Sheet Editorial Banner */}
        <div className="relative rounded-2xl overflow-hidden border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-scrap)] p-8 sm:p-12 shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.12)] flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Top Washi Tape annotation */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
            <WashiTape text="CURATED HYDERABAD" angle="1.5deg" className="bg-[var(--dp-color-highlight)]/80 border border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] text-xs font-bold uppercase font-['Caveat',cursive]" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] text-xs font-bold uppercase font-['Outfit',sans-serif] text-[var(--dp-color-ink)] tracking-wider">
              <StarSparkleDoodle className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
              <span>Direct Kitchen Collaborations</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] tracking-tight leading-[1.1]">
                Extraordinary Food,{'\n'}
                <span className="relative inline-block text-[var(--dp-color-accent)]">
                  Delivered Hot.
                  <ScribbleUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[var(--dp-color-accent)]" />
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[var(--dp-color-ink-muted)] leading-relaxed font-normal pt-1 font-['Outfit',sans-serif]">
              Explore authentic courses from the city’s most distinguished dining destinations.
              Pristine regional produce, chef execution, and temperature-controlled road delivery.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 font-['Outfit',sans-serif]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-[var(--dp-radius-control)] shadow-[1px_1px_0px_var(--dp-color-line)] text-xs font-medium text-[var(--dp-color-ink)]">
                <Clock className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                <span>~32 Min Rapid Arrival</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-[var(--dp-radius-control)] shadow-[1px_1px_0px_var(--dp-color-line)] text-xs font-medium text-[var(--dp-color-ink)]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2d5f3e]" />
                <span>Thermal Insulated Pods</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] rounded-[var(--dp-radius-control)] shadow-[1px_1px_0px_var(--dp-color-line)] text-xs font-medium text-[var(--dp-color-ink)]">
                <ChilliDoodle className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                <span>Zero Compromises</span>
              </div>
            </div>
          </div>

          {/* Right Visual Element: Food Photography Frame */}
          <div className="relative shrink-0 w-full lg:w-80 h-56 sm:h-64 rounded-xl overflow-hidden border-[1.5px] border-[var(--dp-color-line)] shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.12)] bg-[var(--dp-color-ground)] group">
            <img
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
              alt="Signature Hyderabadi Dum Biryani with saffron"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--dp-color-ink)]/75 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] uppercase font-bold font-['Outfit',sans-serif] text-[var(--dp-color-highlight)] tracking-wider block">
                  TODAY&apos;S CURATION
                </span>
                <span className="text-sm font-bold font-['Outfit',sans-serif]">
                  Nizami Shahi Dum Biryani
                </span>
              </div>
              <Link
                to="/restaurants"
                className="w-8 h-8 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-accent)] shadow-[1px_1px_0px_var(--dp-color-ink)] flex items-center justify-center text-white hover:scale-105 transition-transform"
                title="Browse Kitchens"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2.5 shrink-0">
            {cuisinePills.map((pill) => {
              const isActive = selectedCuisine === pill.slug
              return (
                <button
                  key={pill.slug}
                  type="button"
                  onClick={() => onSelectCuisine(pill.slug)}
                  className={`px-4 py-2 rounded-[var(--dp-radius-control)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider border-[1.5px] whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[var(--dp-color-accent)] text-white border-[var(--dp-color-accent)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] -translate-y-0.5'
                      : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
                  }`}
                >
                  {pill.name}
                </button>
              )
            })}
          </div>

          {/* Pure Veg Toggle */}
          <button
            type="button"
            onClick={onToggleVegOnly}
            className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-[var(--dp-radius-control)] border-[1.5px] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider transition-all cursor-pointer ${
              vegOnly
                ? 'bg-[var(--dp-color-scrap)] text-[#2d5f3e] border-[#2d5f3e] -translate-y-0.5 shadow-[1.5px_1.5px_0px_rgba(45,95,62,0.25)]'
                : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
            }`}
          >
            <span
              className={`w-3 h-3 rounded-full border-[1.5px] ${
                vegOnly ? 'bg-[#2d5f3e] border-[#2d5f3e]' : 'bg-white border-[var(--dp-color-line)]'
              }`}
            />
            <span>Pure Veg Only</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default StorefrontHero
