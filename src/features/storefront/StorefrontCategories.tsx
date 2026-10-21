import React from 'react'

interface Category {
  id: string
  name: string
  count: string
  imageUrl: string
  slug: string
}

const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Hyderabadi Dum & Awadhi',
    count: '60+ Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80',
    slug: 'hyderabadi-dum',
  },
  {
    id: 'cat-2',
    name: 'Contemporary Deccani',
    count: '32 Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80',
    slug: 'contemporary-deccani',
  },
  {
    id: 'cat-3',
    name: 'Japanese & Robata',
    count: '28 Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80',
    slug: 'japanese-robata',
  },
  {
    id: 'cat-4',
    name: 'Artisanal Italian',
    count: '35 Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    slug: 'artisanal-italian',
  },
  {
    id: 'cat-5',
    name: 'European Bistro',
    count: '42 Creations',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    slug: 'european-bistro',
  },
  {
    id: 'cat-6',
    name: 'Pure Vegetarian',
    count: '50+ Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    slug: 'pure-vegetarian',
  },
]

import { BiryaniPotDoodle } from '@/components/sketch/SketchDoodles'

interface StorefrontCategoriesProps {
  onSelectCategory: (slug: string) => void
}

export const StorefrontCategories: React.FC<StorefrontCategoriesProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-12 border-t-2 border-[#121212]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BiryaniPotDoodle className="w-5 h-5 text-[#FF650D]" />
              <span className="font-['Oswald'] text-xs font-black uppercase tracking-wider text-[#FF650D]">
                Authentic Traditions
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#121212] font-['Outfit']">
              EXPLORE BY CUISINE
            </h2>
            <p className="text-sm text-[#5E5854] mt-1 font-medium">
              Curated gastronomy categorized by authenticity, spice profile, and technique
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className="p-3 bg-white border-2 border-[#121212] rounded-xl shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3 border-2 border-[#121212] bg-[#FAF6EE]">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#121212] font-['Outfit'] group-hover:text-[#FF650D] transition-colors leading-snug">
                  {cat.name}
                </h3>
                <span className="inline-block px-2 py-0.5 rounded bg-[#FAF6EE] border border-[#121212] text-[10px] font-black font-['Oswald'] text-[#121212]">
                  {cat.count}
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
