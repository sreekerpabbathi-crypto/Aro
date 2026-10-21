import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/common/Badge'
import { fetchRestaurants } from '@/services/catalogService'

interface RestaurantCardData {
  id: string
  name: string
  slug: string
  tagline: string
  coverImage: string
  rating: number
  ratingCount: number
  deliveryTimeMin: number
  deliveryTimeMax: number
  priceTier: string
  minimumOrder: number
  deliveryFee: number
  addressLine: string
  cuisines: string[]
  isChefSpecialFeatured?: boolean
}

const featuredRestaurants: RestaurantCardData[] = [
  {
    id: 'b0000001-0000-0000-0000-000000000001',
    name: 'Deccan Table',
    slug: 'deccan-table',
    tagline: 'Contemporary Deccani & Telangana heritage cuisine',
    coverImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    ratingCount: 342,
    deliveryTimeMin: 35,
    deliveryTimeMax: 50,
    priceTier: '₹₹₹₹',
    minimumOrder: 600,
    deliveryFee: 80,
    addressLine: 'Road No. 36, Jubilee Hills',
    cuisines: ['Contemporary Deccani', 'Telangana Heritage'],
    isChefSpecialFeatured: true,
  },
  {
    id: 'b0000002-0000-0000-0000-000000000002',
    name: 'Kumo House',
    slug: 'kumo-house',
    tagline: 'Japanese-inspired dining & robata charcoal art',
    coverImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    ratingCount: 489,
    deliveryTimeMin: 30,
    deliveryTimeMax: 45,
    priceTier: '₹₹₹',
    minimumOrder: 450,
    deliveryFee: 60,
    addressLine: 'Road No. 12, Banjara Hills',
    cuisines: ['Japanese & Robata', 'Tokyo Omakase'],
    isChefSpecialFeatured: true,
  },
  {
    id: 'b0000003-0000-0000-0000-000000000003',
    name: 'Forno & Fig',
    slug: 'forno-and-fig',
    tagline: 'Artisanal wood-fired Italian dining & handmade pasta',
    coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    ratingCount: 612,
    deliveryTimeMin: 25,
    deliveryTimeMax: 40,
    priceTier: '₹₹',
    minimumOrder: 300,
    deliveryFee: 40,
    addressLine: 'Financial District, Gachibowli',
    cuisines: ['Artisanal Italian', 'Wood-Fired Pizza'],
  },
  {
    id: 'b0000004-0000-0000-0000-000000000004',
    name: 'Nizami Hearth',
    slug: 'nizami-hearth',
    tagline: 'Royal Hyderabadi & Awadhi-inspired dum heritage',
    coverImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    ratingCount: 521,
    deliveryTimeMin: 35,
    deliveryTimeMax: 50,
    priceTier: '₹₹₹₹',
    minimumOrder: 500,
    deliveryFee: 70,
    addressLine: 'Hitech City Main Road, Madhapur',
    cuisines: ['Hyderabadi Dum', 'Royal Awadhi'],
  },
]

interface StorefrontFeaturedRestaurantsProps {
  onSelectRestaurant?: (slug: string) => void
}

export const StorefrontFeaturedRestaurants: React.FC<StorefrontFeaturedRestaurantsProps> = ({
  onSelectRestaurant,
}) => {
  const navigate = useNavigate()
  const [restaurants, setRestaurants] = useState<RestaurantCardData[]>(featuredRestaurants)

  useEffect(() => {
    fetchRestaurants().then((data) => {
      if (data && data.length > 0) {
        setRestaurants(
          data.map((r) => ({
            id: r.id,
            name: r.name,
            slug: r.slug,
            tagline: r.tagline,
            coverImage: r.coverImage,
            rating: r.rating,
            ratingCount: r.ratingCount,
            deliveryTimeMin: r.deliveryTimeEstimateMin,
            deliveryTimeMax: r.deliveryTimeEstimateMax,
            priceTier: r.priceTier,
            minimumOrder: r.minimumOrderAmount,
            deliveryFee: r.deliveryFee,
            addressLine: r.addressLine,
            cuisines: r.cuisines.map((c) => c.name),
            isChefSpecialFeatured: r.isFeatured,
          }))
        )
      }
    })
  }, [])

  return (
    <section id="featured-restaurants" className="py-12 border-t-2 border-[#121212]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-['Oswald'] text-xs font-black uppercase tracking-wider text-[#FF650D] block mb-1">
              Top Rated In Hyderabad
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#121212] font-['Outfit']">
              FEATURED KITCHENS
            </h2>
            <p className="text-sm text-[#5E5854] mt-1 font-medium">
              Direct chef partnerships with proven hygiene and legendary recipes
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/restaurants')}
            className="px-4 py-2 rounded-lg bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-black font-['Oswald'] uppercase tracking-wider text-[#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#121212] transition-all cursor-pointer"
          >
            Browse All 36+ Restaurants →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((res) => (
            <article
              key={res.id}
              onClick={() => onSelectRestaurant ? onSelectRestaurant(res.slug) : navigate(`/restaurants/${res.slug}`)}
              className="bg-white border-[2.5px] border-[#121212] rounded-2xl overflow-hidden shadow-[4px_4px_0px_#121212] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative w-full h-48 overflow-hidden bg-[#FAF6EE] border-b-2 border-[#121212]">
                  <img
                    src={res.coverImage}
                    alt={res.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white border-2 border-[#121212] text-xs font-black text-[#121212] shadow-[2px_2px_0px_#121212] flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#FFD13B] text-[#121212]" />
                    <span>{res.rating.toFixed(1)}</span>
                    <span className="text-[#5E5854] text-[10px] font-normal">
                      ({res.ratingCount})
                    </span>
                  </div>

                  {/* Price Tier */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-[#121212] text-white text-[11px] font-mono font-bold border border-white/20">
                    {res.priceTier}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#121212] font-['Outfit'] group-hover:text-[#FF650D] transition-colors leading-snug">
                      {res.name}
                    </h3>
                    <p className="text-xs text-[#5E5854] line-clamp-1 mt-0.5 font-medium">
                      {res.tagline}
                    </p>
                  </div>

                  {/* Cuisines Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {res.cuisines.slice(0, 2).map((c, i) => (
                      <Badge key={i} variant="accent" className="text-[10px] py-0 px-2">
                        {c}
                      </Badge>
                    ))}
                  </div>

                  {/* Location & ETA */}
                  <div className="pt-2 border-t border-[#121212]/10 flex items-center justify-between text-xs text-[#5E5854] font-medium">
                    <div className="flex items-center gap-1 text-[11px] truncate max-w-[150px]">
                      <MapPin className="w-3.5 h-3.5 text-[#FF650D] shrink-0" />
                      <span className="truncate">{res.addressLine}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-[#121212] font-bold shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#FF650D]" />
                      <span>{res.deliveryTimeMin}-{res.deliveryTimeMax}m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-4 pt-0">
                <div className="w-full py-2.5 rounded-xl bg-[#FAF6EE] group-hover:bg-[#FF650D] border-2 border-[#121212] group-hover:text-white text-[#121212] text-xs font-black uppercase font-['Oswald'] tracking-wider shadow-[2px_2px_0px_#121212] flex items-center justify-center gap-2 transition-all">
                  <span>View Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StorefrontFeaturedRestaurants
