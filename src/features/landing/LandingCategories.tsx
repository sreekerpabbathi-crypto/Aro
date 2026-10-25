import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { StarSparkleDoodle, ScribbleUnderline } from '@/components/sketch/SketchDoodles'

import { CRAVING_CATEGORIES } from '@/services/categoryFilterService'

export const LandingCategories: React.FC = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (slug: string) => {
    navigate(`/restaurants?category=${slug}`)
  }

  return (
    <section id="categories" className="py-16 sm:py-20 bg-[var(--dp-color-ground)] border-t-[1.5px] border-[var(--dp-color-line)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <StarSparkleDoodle className="w-5 h-5 text-[var(--dp-color-accent)]" />
              <span className="font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-wider text-[var(--dp-color-annotation)]">
                Culinary Discovery
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] tracking-tight">
              WHAT ARE YOU{' '}
              <span className="relative inline-block text-[var(--dp-color-accent)]">
                CRAVING?
                <span className="absolute -bottom-2 left-0 w-full block">
                  <ScribbleUnderline className="w-full h-3 text-[var(--dp-color-accent)]" />
                </span>
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[var(--dp-color-ink-muted)] max-w-xl pt-2 font-normal font-['Outfit',sans-serif]">
              Select a culinary tradition below to browse vetted menus from Hyderabad&apos;s leading master kitchens.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/restaurants')}
            className="self-start md:self-auto px-5 py-2.5 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-[var(--dp-radius-control)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] hover:shadow-[2px_2px_0px_var(--dp-color-ink)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer flex items-center gap-1.5 text-[var(--dp-color-ink)]"
          >
            <span>View All Cuisines</span>
            <ArrowUpRight className="w-4 h-4 text-[var(--dp-color-accent)]" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CRAVING_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              className="group bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl overflow-hidden shadow-[2px_2px_0px_rgba(56,53,47,0.12)] hover:border-[var(--dp-color-ink)] hover:shadow-[3px_3px_0px_rgba(56,53,47,0.18)] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)]">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Sticker Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase font-['Outfit',sans-serif] tracking-wider rounded border-[1.5px] border-[var(--dp-color-ink)] bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)]">
                    {cat.stickerText}
                  </span>
                </div>

                {/* Dish Count Tag */}
                <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 bg-[var(--dp-color-scrap)]/95 backdrop-blur-sm border-[1.5px] border-[var(--dp-color-line)] rounded text-[11px] font-medium text-[var(--dp-color-ink)] font-mono">
                  {cat.countText}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] group-hover:text-[var(--dp-color-accent)] transition-colors">
                      {cat.name}
                    </h3>
                    <div className="w-7 h-7 rounded-lg bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] flex items-center justify-center shrink-0 group-hover:border-[var(--dp-color-ink)] transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[var(--dp-color-ink)]" />
                    </div>
                  </div>
                  <p className="text-xs text-[var(--dp-color-ink-muted)] mt-1.5 leading-relaxed font-normal font-['Outfit',sans-serif]">
                    {cat.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t-[1.5px] border-[var(--dp-color-line)]/50 flex items-center justify-between text-xs font-semibold text-[var(--dp-color-ink)]">
                  <span className="font-['Outfit',sans-serif] uppercase tracking-wider text-[11px] text-[var(--dp-color-accent)] font-bold">
                    Instant Dispatch Available
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform font-bold font-['Outfit',sans-serif]">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LandingCategories
