import React from 'react'
import { Sparkles, ShieldCheck, Clock, Flame } from 'lucide-react'

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
    { name: 'Artisanal Italian', slug: 'artisanal-italian' },
    { name: 'French Haute', slug: 'french-haute' },
    { name: 'Contemporary Indian', slug: 'contemporary-indian' },
    { name: 'Gourmet Patisserie', slug: 'gourmet-patisserie' },
  ]

  return (
    <section className="relative pt-6 pb-10 overflow-hidden">
      {/* Warm Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff5733]/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Curated Editorial Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#14161a] via-[#1a1d24] to-[#121418] p-8 sm:p-12 shadow-2xl">
          {/* Subtle background image overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=80')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e] via-[#0b0c0e]/80 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff5733]/15 border border-[#ff5733]/30 text-xs text-[#ff7854] font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Fine-Dining Showcase</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight leading-tight">
              Exceptional dining,{'\n'}
              <span className="bg-gradient-to-r from-[#ff5733] to-[#ffaa40] bg-clip-text text-transparent">
                delivered with elegance.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#8e95a5] leading-relaxed">
              Experience handcrafted menus from Hyderabad’s most celebrated culinary ateliers.
              Pristine ingredients, temperature-controlled delivery, and dining-room caliber presentation.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#8e95a5]">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ff5733]" />
                <span className="text-white/90">Average 32 min arrival</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-white/90">Insulated luxury packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span className="text-white/90">Chef-crafted daily</span>
              </div>
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
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#ff5733] text-white shadow-lg shadow-[#ff5733]/25'
                      : 'bg-[#14161a] text-[#8e95a5] hover:text-white hover:bg-[#1a1d24] border border-[#262a34]'
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
            className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
              vegOnly
                ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40'
                : 'bg-[#14161a] text-[#8e95a5] border-[#262a34] hover:text-white'
            }`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                vegOnly ? 'bg-emerald-400' : 'bg-[#8e95a5]/40'
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
