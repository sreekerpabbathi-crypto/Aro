import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { StarSparkleDoodle, ScribbleUnderline } from '@/components/sketch/SketchDoodles'

interface FoodCategory {
  id: string
  name: string
  tagline: string
  count: string
  slug: string
  imageUrl: string
  stickerText: string
  accentColor: string
}

const CATEGORIES: FoodCategory[] = [
  {
    id: 'cat-biryani',
    name: 'Hyderabadi Dum Biryani',
    tagline: 'Aromatic basmati, slow embers & saffron',
    count: '48+ Specialties',
    slug: 'hyderabadi-dum',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
    stickerText: '★ ROYAL HERITAGE',
    accentColor: '#FF650D',
  },
  {
    id: 'cat-south-indian',
    name: 'South Indian & Dosas',
    tagline: 'Fermented ghee roasts & freshly ground chutneys',
    count: '36+ Specialties',
    slug: 'south-indian-tiffins',
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80',
    stickerText: '🌿 100% PURE CRISP',
    accentColor: '#10B981',
  },
  {
    id: 'cat-burgers',
    name: 'Gourmet Smash Burgers',
    tagline: 'Caramelized crusts, brioche & melted cheese',
    count: '28+ Specialties',
    slug: 'craft-brewery',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    stickerText: '🔥 SIZZLING SMASH',
    accentColor: '#FFD13B',
  },
  {
    id: 'cat-pizza',
    name: 'Wood-Fired Pizza',
    tagline: 'San Marzano tomatoes, buffalo mozzarella & basil',
    count: '32+ Specialties',
    slug: 'artisanal-italian',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    stickerText: '🍕 LEOPARD CRUST',
    accentColor: '#EF4444',
  },
  {
    id: 'cat-asian',
    name: 'Pan-Asian & Dim Sum',
    tagline: 'Steaming momos, robata charcoal & wok craft',
    count: '40+ Specialties',
    slug: 'japanese-robata',
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=700&q=80',
    stickerText: '🥢 HANDMADE DAILY',
    accentColor: '#8B5CF6',
  },
  {
    id: 'cat-desserts',
    name: 'Desserts & Patisserie',
    tagline: 'Double ka meetha, artisanal pastries & gelato',
    count: '24+ Specialties',
    slug: 'european-bistro',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
    stickerText: '🍰 SWEET FINISH',
    accentColor: '#EC4899',
  },
]

export const LandingCategories: React.FC = () => {
  const navigate = useNavigate()

  const handleCategoryClick = (slug: string) => {
    navigate(`/restaurants?cuisine=${slug}`)
  }

  return (
    <section id="categories" className="py-16 sm:py-20 bg-[#FAF6EE] border-t-[2.5px] border-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <StarSparkleDoodle className="w-5 h-5 text-[#FF650D]" />
              <span className="font-['Oswald'] text-xs font-black uppercase tracking-wider text-[#FF650D]">
                Culinary Discovery
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-[#121212] tracking-tight">
              WHAT ARE YOU{' '}
              <span className="relative inline-block text-[#FF650D]">
                CRAVING?
                <span className="absolute -bottom-2 left-0 w-full block">
                  <ScribbleUnderline className="w-full h-3 text-[#FFD13B]" />
                </span>
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#5E5854] max-w-xl pt-2 font-normal">
              Select a culinary tradition below to browse vetted menus from Hyderabad&apos;s leading master kitchens.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/restaurants')}
            className="self-start md:self-auto px-5 py-2.5 bg-white border-2 border-[#121212] rounded-lg text-xs font-black uppercase font-['Oswald'] tracking-wider shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>View All Cuisines</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF650D]" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.slug)}
              className="group bg-white border-2 border-[#121212] rounded-xl overflow-hidden shadow-[4px_4px_0px_#121212] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#121212] transition-all cursor-pointer flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#FAF6EE] border-b-2 border-[#121212]">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Sticker Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className="inline-block px-2.5 py-1 text-[10px] font-black uppercase font-['Oswald'] tracking-wider rounded border-2 border-[#121212] shadow-[2px_2px_0px_#121212]"
                    style={{ backgroundColor: cat.accentColor, color: cat.accentColor === '#FFD13B' ? '#121212' : '#FFFFFF' }}
                  >
                    {cat.stickerText}
                  </span>
                </div>

                {/* Dish Count Tag */}
                <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 bg-white/95 backdrop-blur-sm border border-[#121212] rounded text-[11px] font-bold text-[#121212] font-mono">
                  {cat.count}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-black font-['Outfit'] text-[#121212] group-hover:text-[#FF650D] transition-colors">
                      {cat.name}
                    </h3>
                    <div className="w-7 h-7 rounded-lg bg-[#FAF6EE] border border-[#121212] flex items-center justify-center shrink-0 group-hover:bg-[#FFD13B] transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-[#121212]" />
                    </div>
                  </div>
                  <p className="text-xs text-[#5E5854] mt-1.5 leading-relaxed font-normal">
                    {cat.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-[#121212]/10 flex items-center justify-between text-xs font-semibold text-[#121212]">
                  <span className="font-['Oswald'] uppercase tracking-wider text-[11px] text-[#FF650D]">
                    Instant Dispatch Available
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform font-bold">
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
