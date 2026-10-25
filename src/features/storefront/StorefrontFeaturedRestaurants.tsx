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
    <section id="featured-restaurants" className="py-12 border-t-[1.5px] border-[var(--dp-color-line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-wider text-[var(--dp-color-annotation)] block mb-1">
              Top Rated In Hyderabad
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
              FEATURED KITCHENS
            </h2>
            <p className="text-sm text-[var(--dp-color-ink-muted)] mt-1 font-normal font-['Outfit',sans-serif]">
              Direct chef partnerships with proven hygiene and legendary recipes
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/restaurants')}
            className="px-4 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider text-[var(--dp-color-ink)] hover:border-[var(--dp-color-ink)] hover:shadow-[2px_2px_0px_var(--dp-color-ink)] transition-all cursor-pointer"
          >
            Browse All 36+ Restaurants →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((res) => (
            <article
              key={res.id}
              onClick={() => onSelectRestaurant ? onSelectRestaurant(res.slug) : navigate(`/restaurants/${res.slug}`)}
              className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl overflow-hidden shadow-[2px_2px_0px_rgba(56,53,47,0.12)] hover:border-[var(--dp-color-ink)] hover:shadow-[3px_3px_0px_rgba(56,53,47,0.18)] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Cover Image */}
                <div className="relative w-full h-48 overflow-hidden bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)]">
                  <img
                    src={res.coverImage}
                    alt={res.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--dp-color-ink)]/70 via-transparent to-transparent" />

                  {/* Rating Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center gap-1 font-['Outfit',sans-serif]">
                    <Star className="w-3.5 h-3.5 fill-[var(--dp-color-accent)] text-[var(--dp-color-accent)]" />
                    <span>{res.rating.toFixed(1)}</span>
                    <span className="text-[var(--dp-color-ink-muted)] text-[10px] font-normal font-['Outfit',sans-serif]">
                      ({res.ratingCount})
                    </span>
                  </div>

                  {/* Price Tier */}
                  <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-[var(--dp-color-ink)] text-white text-[11px] font-mono font-bold">
                    {res.priceTier}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] group-hover:text-[var(--dp-color-accent)] transition-colors leading-snug">
                      {res.name}
                    </h3>
                    <p className="text-xs text-[var(--dp-color-ink-muted)] line-clamp-1 mt-0.5 font-normal font-['Outfit',sans-serif]">
                      {res.tagline}
                    </p>
                  </div>

                  {/* Cuisines Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {res.cuisines.slice(0, 2).map((c, i) => (
                      <Badge key={i} variant="accent" className="text-[10px] py-0 px-2 font-normal font-['Outfit',sans-serif]">
                        {c}
                      </Badge>
                    ))}
                  </div>

                  {/* Location & ETA */}
                  <div className="pt-2 border-t-[1.5px] border-[var(--dp-color-line)]/50 flex items-center justify-between text-xs text-[var(--dp-color-ink-muted)] font-normal font-['Outfit',sans-serif]">
                    <div className="flex items-center gap-1 text-[11px] truncate max-w-[150px]">
                      <MapPin className="w-3.5 h-3.5 text-[var(--dp-color-accent)] shrink-0" />
                      <span className="truncate">{res.addressLine}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-[var(--dp-color-ink)] font-bold shrink-0 font-['Outfit',sans-serif]">
                      <Clock className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                      <span>{res.deliveryTimeMin}-{res.deliveryTimeMax}m</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-4 pt-0">
                <div className="w-full py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] group-hover:bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-line)] group-hover:border-[var(--dp-color-accent)] group-hover:text-white text-[var(--dp-color-ink)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider shadow-[1.5px_1.5px_0px_var(--dp-color-line)] flex items-center justify-center gap-2 transition-all">
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
