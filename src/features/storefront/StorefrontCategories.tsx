import React from 'react'
import { Card } from '@/components/common/Card'

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

interface StorefrontCategoriesProps {
  onSelectCategory: (slug: string) => void
}

export const StorefrontCategories: React.FC<StorefrontCategoriesProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="py-12 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Outfit']">
              Explore by Culinary Tradition
            </h2>
            <p className="text-sm text-[#8e95a5] mt-1">
              Curated gastronomy categorized by authenticity and technique
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              variant="surface"
              interactive
              onClick={() => onSelectCategory(cat.slug)}
              className="p-3 overflow-hidden group cursor-pointer border-[#262a34] hover:border-[#ff5733]/50 transition-all flex flex-col"
            >
              <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="space-y-0.5">
                <h3 className="text-sm font-semibold text-white font-['Outfit'] group-hover:text-[#ff7854] transition-colors leading-snug">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-[#8e95a5]">{cat.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StorefrontCategories
