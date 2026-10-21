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
        {/* Curated Neo-Brutalist Editorial Banner */}
        <div className="relative rounded-2xl overflow-hidden border-[2.5px] border-[#121212] bg-[#FFF4C2] p-8 sm:p-12 shadow-[6px_6px_0px_#121212] flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Top Washi Tape annotation */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
            <WashiTape text="CURATED HYDERABAD" angle="2deg" className="bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-black uppercase font-['Oswald']" />
          </div>

          <div className="relative z-10 max-w-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-black uppercase font-['Oswald'] text-[#121212]">
              <StarSparkleDoodle className="w-3.5 h-3.5 text-[#FF650D]" />
              <span>Direct Kitchen Collaborations</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121212] font-['Outfit'] tracking-tight leading-[1.1]">
                Extraordinary Food,{'\n'}
                <span className="relative inline-block text-[#FF650D]">
                  Delivered Hot.
                  <ScribbleUnderline className="absolute -bottom-2 left-0 w-full h-3.5 text-[#121212]" />
                </span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#5E5854] leading-relaxed font-medium pt-1">
              Explore authentic courses from the city’s most distinguished dining destinations.
              Pristine regional produce, chef execution, and temperature-controlled road delivery.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] text-xs font-bold text-[#121212]">
                <Clock className="w-3.5 h-3.5 text-[#FF650D]" />
                <span>~32 Min Rapid Arrival</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] text-xs font-bold text-[#121212]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Thermal Insulated Pods</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-[#121212] rounded-lg shadow-[2px_2px_0px_#121212] text-xs font-bold text-[#121212]">
                <ChilliDoodle className="w-3.5 h-3.5 text-[#EF4444]" />
                <span>Zero Compromises</span>
              </div>
            </div>
          </div>

          {/* Right Visual Element: Food Photography Frame with Brutal Badge */}
          <div className="relative shrink-0 w-full lg:w-80 h-56 sm:h-64 rounded-xl overflow-hidden border-[2.5px] border-[#121212] shadow-[4px_4px_0px_#121212] bg-white group">
            <img
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
              alt="Signature Hyderabadi Dum Biryani with saffron"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
              <div>
                <span className="text-[10px] uppercase font-black font-['Oswald'] text-[#FFD13B] tracking-wider block">
                  TODAY&apos;S CURATION
                </span>
                <span className="text-sm font-black font-['Outfit']">
                  Nizami Shahi Dum Biryani
                </span>
              </div>
              <Link
                to="/restaurants"
                className="w-8 h-8 rounded-lg bg-[#FF650D] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center justify-center text-white hover:scale-105 transition-transform"
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
                  className={`px-4 py-2 rounded-lg text-xs font-black uppercase font-['Oswald'] tracking-wider border-2 border-[#121212] whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#121212] text-[#FFD13B] shadow-[3px_3px_0px_#FF650D] -translate-x-0.5 -translate-y-0.5'
                      : 'bg-white text-[#121212] shadow-[2px_2px_0px_#121212] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#121212]'
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
            className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-lg border-2 border-[#121212] text-xs font-black uppercase font-['Oswald'] tracking-wider shadow-[2px_2px_0px_#121212] transition-all cursor-pointer ${
              vegOnly
                ? 'bg-[#E8F8F0] text-[#059669] -translate-y-0.5 shadow-[3px_3px_0px_#121212]'
                : 'bg-white text-[#121212] hover:bg-[#FFF4C2]'
            }`}
          >
            <span
              className={`w-3 h-3 rounded-full border-2 border-[#121212] ${
                vegOnly ? 'bg-[#059669]' : 'bg-white'
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
