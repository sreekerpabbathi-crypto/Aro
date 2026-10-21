import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react'
import { INITIAL_RESTAURANTS, fetchRestaurants } from '@/services/catalogService'
import type { Restaurant } from '@/types'
import { ChilliDoodle, StarSparkleDoodle } from '@/components/sketch/SketchDoodles'

export const LandingFeaturedRestaurants: React.FC = () => {
  const navigate = useNavigate()
  const [restaurants, setRestaurants] = useState<Restaurant[]>(INITIAL_RESTAURANTS.slice(0, 6))
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchRestaurants()
      .then((data) => {
        if (data && data.length > 0) {
          setRestaurants(data.slice(0, 8))
        }
      })
      .catch((err) => {
        console.warn('Error fetching live restaurants, using cache:', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const filterTabs = [
    { label: 'All Heavyweights', slug: 'all' },
    { label: 'Deccani & Biryani', slug: 'contemporary-deccani' },
    { label: 'Japanese & Robata', slug: 'japanese-robata' },
    { label: 'Artisanal Italian', slug: 'artisanal-italian' },
    { label: 'South Indian Tiffins', slug: 'south-indian-tiffins' },
  ]

  const filteredRestaurants = restaurants.filter((r) => {
    if (activeFilter === 'all') return true
    return r.cuisines?.some(
      (c) =>
        c.slug.includes(activeFilter) ||
        c.name.toLowerCase().includes(activeFilter.toLowerCase())
    )
  })

  return (
    <section id="featured-restaurants" className="py-16 sm:py-24 bg-[#FAF6EE] border-t-[2.5px] border-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ChilliDoodle className="w-5 h-5 text-[#EF4444]" />
              <span className="font-['Oswald'] text-xs font-black uppercase tracking-wider text-[#FF650D]">
                Vetted Hyderabad Ateliers
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Outfit'] text-[#121212] tracking-tight">
              CULINARY HEAVYWEIGHTS
            </h2>
            <p className="text-sm sm:text-base text-[#5E5854] max-w-xl pt-1 font-normal">
              Direct chef partnerships, authentic regional ingredients, and zero ghost-kitchen shortcuts.
            </p>
          </div>

          <div className="flex items-center gap-2 font-['Caveat'] text-lg font-bold text-[#FF650D] rotate-1">
            <span>&ldquo;Only 4.5+ star verified kitchens pass our doors.&rdquo;</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.slug
            return (
              <button
                key={tab.slug}
                type="button"
                onClick={() => setActiveFilter(tab.slug)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase font-['Oswald'] tracking-wider border-2 border-[#121212] whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#121212] text-[#FFD13B] shadow-[3px_3px_0px_#FF650D] -translate-y-0.5'
                    : 'bg-white text-[#121212] shadow-[2px_2px_0px_#121212] hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#121212]'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Restaurant Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-96 rounded-xl bg-white border-2 border-[#121212] animate-pulse"
              />
            ))}
          </div>
        ) : filteredRestaurants.length === 0 ? (
          <div className="p-12 text-center bg-white border-2 border-[#121212] rounded-xl shadow-[4px_4px_0px_#121212]">
            <p className="text-base font-bold text-[#121212]">
              No restaurants matching this filter currently.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-4 py-2 bg-[#FF650D] text-white font-bold text-xs uppercase font-['Oswald'] rounded border border-[#121212]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant) => (
              <article
                key={restaurant.id}
                onClick={() => navigate(`/restaurants/${restaurant.slug}`)}
                className="group bg-white border-[2.5px] border-[#121212] rounded-2xl overflow-hidden shadow-[5px_5px_0px_#121212] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_#121212] transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#FAF6EE] border-b-2 border-[#121212]">
                    <img
                      src={restaurant.coverImage}
                      alt={restaurant.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Gradient highlight */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Top Sticker: Rating Pill */}
                    <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 bg-white border-2 border-[#121212] rounded-md shadow-[2px_2px_0px_#121212] text-xs font-black text-[#121212]">
                      <Star className="w-3.5 h-3.5 fill-[#FFD13B] text-[#121212]" />
                      <span>{restaurant.rating}</span>
                      <span className="text-[#5E5854] text-[10px] font-normal">
                        ({restaurant.ratingCount})
                      </span>
                    </div>

                    {/* Top Left: Featured Tag */}
                    {restaurant.isFeatured && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FFD13B] text-[#121212] text-[10px] font-black uppercase font-['Oswald'] tracking-wider rounded border-2 border-[#121212] shadow-[2px_2px_0px_#121212]">
                          <StarSparkleDoodle className="w-3 h-3 text-[#121212]" />
                          CHEF FEATURED
                        </span>
                      </div>
                    )}

                    {/* Bottom overlay: Location */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#FFD13B]" />
                        <span className="truncate max-w-[190px]">{restaurant.addressLine}</span>
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/60 border border-white/20 font-mono text-[11px]">
                        {restaurant.priceTier}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    {/* Cuisines Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {restaurant.cuisines?.slice(0, 2).map((c) => (
                        <span
                          key={c.id}
                          className="px-2 py-0.5 bg-[#FAF6EE] text-[#121212] text-[10px] font-bold uppercase font-['Oswald'] rounded border border-[#121212]/30"
                        >
                          {c.name}
                        </span>
                      ))}
                    </div>

                    {/* Restaurant Name & Tagline */}
                    <div>
                      <h3 className="text-xl font-black font-['Outfit'] text-[#121212] group-hover:text-[#FF650D] transition-colors">
                        {restaurant.name}
                      </h3>
                      <p className="text-xs text-[#5E5854] line-clamp-2 mt-1 leading-relaxed font-normal">
                        {restaurant.tagline || restaurant.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="px-5 py-3.5 bg-[#FAF6EE] border-t-2 border-[#121212] flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-[#5E5854] font-semibold">
                    <Clock className="w-3.5 h-3.5 text-[#FF650D]" />
                    <span>
                      {restaurant.deliveryTimeEstimateMin}-{restaurant.deliveryTimeEstimateMax} min
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 font-['Oswald'] font-black uppercase text-xs text-[#FF650D] group-hover:translate-x-1 transition-transform">
                    <span>View Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Bottom Explore All CTA */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={() => navigate('/restaurants')}
            className="px-8 py-4 bg-[#121212] text-white font-black text-sm uppercase tracking-wider font-['Oswald'] rounded-xl border-2 border-[#121212] shadow-[5px_5px_0px_#FFD13B] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_#FFD13B] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer inline-flex items-center gap-3"
          >
            <span>Browse All 40+ Hyderabad Ateliers</span>
            <ArrowRight className="w-4 h-4 text-[#FFD13B]" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default LandingFeaturedRestaurants
