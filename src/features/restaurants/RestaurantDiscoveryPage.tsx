import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Star, Clock, MapPin, ArrowUpDown } from 'lucide-react'
import { INITIAL_RESTAURANTS, fetchRestaurants, fetchCuisines } from '@/services/catalogService'
import { Badge } from '@/components/common/Badge'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
import { useCart } from '@/context/CartContext'
import type { Restaurant } from '@/types'

export const RestaurantDiscoveryPage: React.FC = () => {
  const navigate = useNavigate()
  const { totals } = useCart()

  const [restaurants, setRestaurants] = useState<Restaurant[]>(INITIAL_RESTAURANTS)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all')
  const [vegOnly, setVegOnly] = useState(false)
  const [selectedPriceTier, setSelectedPriceTier] = useState<string>('all')
  const [minRating, setMinRating] = useState<number>(0)
  const [sortBy, setSortBy] = useState<'rating' | 'deliveryTime' | 'minOrder'>('rating')
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState<string>('all')

  const neighbourhoodsList = [
    { name: 'All Areas', slug: 'all' },
    { name: 'Jubilee Hills', slug: 'jubilee-hills' },
    { name: 'Banjara Hills', slug: 'banjara-hills' },
    { name: 'Gachibowli & Financial Dist', slug: 'gachibowli' },
    { name: 'HITEC City & Madhapur', slug: 'hitec-madhapur' },
    { name: 'Kondapur', slug: 'kondapur' },
    { name: 'Central & Heritage', slug: 'central-heritage' },
  ]

  const [cuisinesList, setCuisinesList] = useState([
    { name: 'All Cuisines', slug: 'all' },
    { name: 'Contemporary Deccani', slug: 'contemporary-deccani' },
    { name: 'Hyderabadi Dum & Awadhi', slug: 'hyderabadi-dum' },
    { name: 'Japanese & Robata', slug: 'japanese-robata' },
    { name: 'Artisanal Italian', slug: 'artisanal-italian' },
    { name: 'Telangana Heritage', slug: 'telangana-heritage' },
    { name: 'Andhra & Rayalaseema', slug: 'andhra-rayalaseema' },
    { name: 'South Indian Tiffins', slug: 'south-indian-tiffins' },
    { name: 'Coastal Seafood & Goan', slug: 'coastal-seafood' },
    { name: 'European Bistro & Patisserie', slug: 'european-bistro' },
    { name: 'Pure Vegetarian Gourmet', slug: 'pure-vegetarian' },
    { name: 'Craft Brewery & Gastropub', slug: 'craft-brewery' },
  ])

  useEffect(() => {
    fetchRestaurants().then((data) => {
      if (data && data.length > 0) setRestaurants(data)
    })
    fetchCuisines().then((cuisines) => {
      if (cuisines && cuisines.length > 0) {
        setCuisinesList([
          { name: 'All Cuisines', slug: 'all' },
          ...cuisines.map((c) => ({ name: c.name, slug: c.slug })),
        ])
      }
    })
  }, [])

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((res) => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchesName = res.name.toLowerCase().includes(q)
        const matchesTagline = res.tagline.toLowerCase().includes(q)
        const matchesAddress = res.addressLine.toLowerCase().includes(q)
        const matchesCuisine = res.cuisines.some((c) => c.name.toLowerCase().includes(q))
        const matchesDishes = res.categories?.some((cat) =>
          cat.items.some((item) => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q))
        )
        if (!matchesName && !matchesTagline && !matchesAddress && !matchesCuisine && !matchesDishes) {
          return false
        }
      }

      // Neighbourhood filter
      if (selectedNeighbourhood !== 'all') {
        const addr = res.addressLine.toLowerCase()
        if (selectedNeighbourhood === 'jubilee-hills' && !addr.includes('jubilee hills')) return false
        if (selectedNeighbourhood === 'banjara-hills' && !addr.includes('banjara hills')) return false
        if (selectedNeighbourhood === 'gachibowli' && !addr.includes('gachibowli') && !addr.includes('financial district')) return false
        if (selectedNeighbourhood === 'hitec-madhapur' && !addr.includes('hitec') && !addr.includes('madhapur')) return false
        if (selectedNeighbourhood === 'kondapur' && !addr.includes('kondapur')) return false
        if (selectedNeighbourhood === 'central-heritage') {
          const isCentral = addr.includes('old city') || addr.includes('charminar') || addr.includes('ghansi bazaar') ||
            addr.includes('secunderabad') || addr.includes('somajiguda') || addr.includes('basheerbagh') ||
            addr.includes('rtc x roads') || addr.includes('gandipet')
          if (!isCentral) return false
        }
      }

      // Cuisine filter
      if (selectedCuisine !== 'all') {
        const hasCuisine = res.cuisines.some((c) => c.slug === selectedCuisine)
        if (!hasCuisine) return false
      }

      // Price tier
      if (selectedPriceTier !== 'all' && res.priceTier !== selectedPriceTier) {
        return false
      }

      // Rating filter
      if (minRating > 0 && res.rating < minRating) {
        return false
      }

      // Veg only: check if restaurant has veg dishes
      if (vegOnly) {
        const hasVeg = res.categories?.some((cat) => cat.items.some((item) => item.isVeg))
        if (!hasVeg) return false
      }

      return true
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'deliveryTime') return a.deliveryTimeEstimateMin - b.deliveryTimeEstimateMin
      if (sortBy === 'minOrder') return a.minimumOrderAmount - b.minimumOrderAmount
      return 0
    })
  }, [restaurants, searchQuery, selectedNeighbourhood, selectedCuisine, selectedPriceTier, minRating, vegOnly, sortBy])

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#121212] paper-grid selection:bg-[#FFD13B] selection:text-[#121212]">
      <StorefrontNavbar
        cartCount={totals.itemTotal > 0 ? 1 : 0}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Title */}
        <div className="border-b-2 border-[#121212]/15 pb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FFD13B] border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-xs font-black uppercase font-['Oswald'] text-[#121212]">
            <span>Vetted Hyderabad Kitchens</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#121212] font-['Outfit'] tracking-tight">
            DISCOVER HYDERABAD&apos;S BEST ATELIERS
          </h1>
          <p className="text-sm sm:text-base text-[#5E5854] font-medium max-w-3xl">
            From historic Old City dum biryani masters to contemporary Banjara Hills robata kitchens and wood-fired pizzerias.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5E5854]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search restaurants, cuisines, or dishes..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-sm font-medium text-[#121212] placeholder-[#5E5854] focus:outline-none focus:ring-2 focus:ring-[#FF650D]"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              {/* Sort By */}
              <div className="flex items-center gap-1.5 bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] px-3 py-2 rounded-xl text-[#121212] font-bold">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#FF650D]" />
                <span className="font-['Oswald'] uppercase tracking-wider">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-[#121212] font-black focus:outline-none cursor-pointer"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="deliveryTime">Fastest Arrival</option>
                  <option value="minOrder">Min. Order Amount</option>
                </select>
              </div>

              {/* Price Tier Filter */}
              <div className="flex items-center gap-1 bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] p-1 rounded-xl">
                {['all', '₹₹', '₹₹₹', '₹₹₹₹'].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedPriceTier(tier)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-black font-['Oswald'] uppercase tracking-wider cursor-pointer transition-all ${
                      selectedPriceTier === tier
                        ? 'bg-[#121212] text-[#FFD13B] shadow-[1px_1px_0px_#FF650D]'
                        : 'text-[#5E5854] hover:text-[#121212]'
                    }`}
                  >
                    {tier === 'all' ? 'All Prices' : tier}
                  </button>
                ))}
              </div>

              {/* Pure Veg Toggle */}
              <button
                type="button"
                onClick={() => setVegOnly((v) => !v)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border-2 border-[#121212] text-xs font-black uppercase font-['Oswald'] tracking-wider shadow-[2px_2px_0px_#121212] transition-all cursor-pointer ${
                  vegOnly
                    ? 'bg-[#E8F8F0] text-[#059669] -translate-y-0.5'
                    : 'bg-white text-[#121212] hover:bg-[#FFF4C2]'
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full border border-[#121212] ${vegOnly ? 'bg-[#059669]' : 'bg-white'}`} />
                <span>Pure Veg</span>
              </button>
            </div>
          </div>

          {/* Neighbourhood Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-black text-[#5E5854] uppercase tracking-wider shrink-0 mr-1 font-['Oswald']">
              Area:
            </span>
            {neighbourhoodsList.map((n) => {
              const active = selectedNeighbourhood === n.slug
              return (
                <button
                  key={n.slug}
                  type="button"
                  onClick={() => setSelectedNeighbourhood(n.slug)}
                  className={`px-3 py-1 rounded-lg text-xs font-black font-['Oswald'] uppercase tracking-wider whitespace-nowrap cursor-pointer border-2 border-[#121212] transition-all ${
                    active
                      ? 'bg-[#121212] text-[#FFD13B] shadow-[2px_2px_0px_#FF650D] -translate-y-0.5'
                      : 'bg-white text-[#121212] shadow-[2px_2px_0px_#121212] hover:-translate-y-0.5'
                  }`}
                >
                  {n.name}
                </button>
              )
            })}
          </div>

          {/* Cuisine Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-black text-[#5E5854] uppercase tracking-wider shrink-0 mr-1 font-['Oswald']">
              Cuisine:
            </span>
            {cuisinesList.map((c) => {
              const active = selectedCuisine === c.slug
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setSelectedCuisine(c.slug)}
                  className={`px-3 py-1 rounded-lg text-xs font-black font-['Oswald'] uppercase tracking-wider whitespace-nowrap cursor-pointer border-2 border-[#121212] transition-all ${
                    active
                      ? 'bg-[#FF650D] text-white shadow-[2px_2px_0px_#121212] -translate-y-0.5'
                      : 'bg-white text-[#121212] shadow-[2px_2px_0px_#121212] hover:-translate-y-0.5 hover:bg-[#FFF4C2]'
                  }`}
                >
                  {c.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Results Count & Reset */}
        <div className="flex items-center justify-between text-xs text-[#5E5854] font-bold pt-2 border-t border-[#121212]/10">
          <span>Showing <strong className="text-[#121212]">{filteredRestaurants.length}</strong> culinary kitchens</span>
          {(selectedCuisine !== 'all' || selectedNeighbourhood !== 'all' || searchQuery || vegOnly || selectedPriceTier !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCuisine('all')
                setSelectedNeighbourhood('all')
                setVegOnly(false)
                setSelectedPriceTier('all')
                setMinRating(0)
              }}
              className="text-[#FF650D] font-black font-['Oswald'] uppercase tracking-wider hover:underline cursor-pointer"
            >
              Reset all filters ×
            </button>
          )}
        </div>

        {/* Restaurant Cards Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((res) => (
              <article
                key={res.id}
                onClick={() => navigate(`/restaurants/${res.slug}`)}
                className="bg-white border-[2.5px] border-[#121212] rounded-2xl overflow-hidden shadow-[4px_4px_0px_#121212] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212] transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="relative w-full h-52 overflow-hidden bg-[#FAF6EE] border-b-2 border-[#121212]">
                    <img
                      src={res.coverImage}
                      alt={res.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white border-2 border-[#121212] text-xs font-black text-[#121212] shadow-[2px_2px_0px_#121212] flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#FFD13B] text-[#121212]" />
                      <span>{res.rating.toFixed(1)}</span>
                      <span className="text-[#5E5854] text-[10px] font-normal">
                        ({res.ratingCount})
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-[#121212] text-white text-[11px] font-mono font-bold border border-white/20">
                      {res.priceTier}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-black text-[#121212] font-['Outfit'] group-hover:text-[#FF650D] transition-colors leading-snug">
                        {res.name}
                      </h3>
                      <p className="text-xs text-[#5E5854] line-clamp-1 mt-0.5 font-medium">
                        {res.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {res.cuisines.map((c, i) => (
                        <Badge key={i} variant="accent" className="text-[10px] py-0 px-2">
                          {c.name}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-[#121212]/10 flex items-center justify-between text-xs text-[#5E5854] font-medium">
                      <div className="flex items-center gap-1 text-[11px] truncate max-w-[160px]">
                        <MapPin className="w-3.5 h-3.5 text-[#FF650D] shrink-0" />
                        <span className="truncate">{res.addressLine}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-[#121212] font-bold shrink-0">
                        <Clock className="w-3.5 h-3.5 text-[#FF650D]" />
                        <span>{res.deliveryTimeEstimateMin}-{res.deliveryTimeEstimateMax} mins</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="w-full py-2.5 rounded-xl bg-[#FAF6EE] group-hover:bg-[#FF650D] border-2 border-[#121212] group-hover:text-white text-[#121212] text-xs font-black uppercase font-['Oswald'] tracking-wider shadow-[2px_2px_0px_#121212] flex items-center justify-center gap-1.5 transition-all">
                    <span>Explore Tasting Menu</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center space-y-3 bg-white rounded-2xl border-[2.5px] border-[#121212] shadow-[6px_6px_0px_#121212] p-8 max-w-lg mx-auto">
            <p className="text-lg text-[#121212] font-black font-['Outfit']">No restaurants match your filters.</p>
            <p className="text-xs text-[#5E5854] font-medium">Try loosening dietary or price tier constraints to view more partner kitchens.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                setSelectedCuisine('all')
                setSelectedNeighbourhood('all')
                setVegOnly(false)
                setSelectedPriceTier('all')
              }}
              className="mt-2 px-4 py-2 bg-[#FF650D] text-white font-black text-xs uppercase font-['Oswald'] rounded-lg border-2 border-[#121212] shadow-[2px_2px_0px_#121212] cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <StorefrontFooter />
    </div>
  )
}

export default RestaurantDiscoveryPage
