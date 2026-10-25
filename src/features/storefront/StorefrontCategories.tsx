import React from 'react'
import { StarSparkleDoodle, ScribbleUnderline } from '@/components/sketch/SketchDoodles'
import { CRAVING_CATEGORIES } from '@/services/categoryFilterService'

interface StorefrontCategoriesProps {
  onSelectCategory: (slug: string) => void
}

export const StorefrontCategories: React.FC<StorefrontCategoriesProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-12 border-t-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <StarSparkleDoodle className="w-5 h-5 text-[var(--dp-color-accent)]" />
              <span className="font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-wider text-[var(--dp-color-annotation)]">
                Culinary Discovery
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
              WHAT ARE YOU{' '}
              <span className="relative inline-block text-[var(--dp-color-accent)]">
                CRAVING?
                <ScribbleUnderline className="absolute -bottom-2 left-0 w-full h-2.5 text-[var(--dp-color-accent)]" />
              </span>
            </h2>
            <p className="text-sm text-[var(--dp-color-ink-muted)] mt-1.5 font-normal font-['Outfit',sans-serif]">
              Select a culinary category to discover vetted dishes and master kitchens across Hyderabad
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CRAVING_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className="p-3 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] hover:shadow-[2.5px_2.5px_0px_var(--dp-color-ink)] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3 border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)]">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--dp-color-ink)]/70 via-transparent to-transparent" />
                <div className="absolute top-2 left-2 z-10">
                  <span className="inline-block px-1.5 py-0.5 text-[9px] font-bold uppercase font-['Outfit',sans-serif] tracking-wider rounded border-[1.5px] border-[var(--dp-color-ink)] bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)]">
                    {cat.stickerText.split(' ')[0]}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] group-hover:text-[var(--dp-color-accent)] transition-colors leading-snug">
                  {cat.name}
                </h3>
                <span className="inline-block px-2 py-0.5 rounded bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[10px] font-medium text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                  {cat.countText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StorefrontCategories
