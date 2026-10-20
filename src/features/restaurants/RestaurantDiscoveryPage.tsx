import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Star, Clock, MapPin, ArrowUpDown } from 'lucide-react'
import { INITIAL_RESTAURANTS, fetchRestaurants, fetchCuisines } from '@/services/catalogService'
import { Card } from '@/components/common/Card'
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
  }, [searchQuery, selectedCuisine, selectedPriceTier, minRating, vegOnly, sortBy])

  return (
    <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
      <StorefrontNavbar
        cartCount={totals.itemTotal > 0 ? 1 : 0}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header Title */}
        <div className="border-b border-[#4D3F3C] pb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF650D]/15 border border-[#FF650D]/30 text-xs text-[#FF650D] font-bold uppercase font-['Oswald']">
            <span>Fine Dining Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Discover Hyderabad’s Best Kitchens
          </h1>
          <p className="text-sm text-[#A89A97]">
            Vetted restaurants, seasonal tasting menus, and culinary ateliers delivering right to your door.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89A97]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search restaurants, cuisines, or dishes..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#2E2423] border border-[#4D3F3C] text-sm text-white placeholder-[#A89A97] focus:outline-none focus:border-[#FF650D]"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              {/* Sort By */}
              <div className="flex items-center gap-1.5 bg-[#2E2423] border border-[#4D3F3C] px-3 py-2 rounded-xl text-[#A89A97]">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#FF650D]" />
                <span className="font-semibold text-white">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-white focus:outline-none cursor-pointer"
                >
                  <option value="rating" className="bg-[#211A19]">Highest Rated</option>
                  <option value="deliveryTime" className="bg-[#211A19]">Fastest Arrival</option>
                  <option value="minOrder" className="bg-[#211A19]">Min. Order Amount</option>
                </select>
              </div>

              {/* Price Tier Filter */}
              <div className="flex items-center gap-1 bg-[#2E2423] border border-[#4D3F3C] p-1 rounded-xl">
                {['all', '₹₹', '₹₹₹', '₹₹₹₹'].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedPriceTier(tier)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                      selectedPriceTier === tier
                        ? 'bg-[#FF650D] text-white'
                        : 'text-[#A89A97] hover:text-white'
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
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                  vegOnly
                    ? 'bg-emerald-950/40 text-emerald-400 border-emerald-500/40'
                    : 'bg-[#2E2423] border-[#4D3F3C] text-[#A89A97] hover:text-white'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${vegOnly ? 'bg-emerald-400' : 'bg-white/30'}`} />
                <span>Pure Veg</span>
              </button>
            </div>
          </div>

          {/* Neighbourhood Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-none">
            <span className="text-[11px] font-semibold text-[#A89A97] uppercase tracking-wider shrink-0 mr-1 font-['Oswald']">
              Area:
            </span>
            {neighbourhoodsList.map((n) => {
              const active = selectedNeighbourhood === n.slug
              return (
                <button
                  key={n.slug}
                  type="button"
                  onClick={() => setSelectedNeighbourhood(n.slug)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer transition-all ${
                    active
                      ? 'bg-white/15 text-white border border-white/30 font-semibold'
                      : 'bg-[#2E2423]/70 border border-[#4D3F3C]/60 text-[#A89A97] hover:text-white'
                  }`}
                >
                  {n.name}
                </button>
              )
            })}
          </div>

          {/* Cuisine Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-[11px] font-semibold text-[#A89A97] uppercase tracking-wider shrink-0 mr-1 font-['Oswald']">
              Cuisine:
            </span>
            {cuisinesList.map((c) => {
              const active = selectedCuisine === c.slug
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => setSelectedCuisine(c.slug)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-all ${
                    active
                      ? 'bg-[#FF650D] text-white shadow-md'
                      : 'bg-[#2E2423] border border-[#4D3F3C] text-[#A89A97] hover:text-white'
                  }`}
                >
                  {c.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-[#A89A97] pt-2">
          <span>Showing {filteredRestaurants.length} gourmet kitchens</span>
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
              className="text-[#FF650D] hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Restaurant Cards Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((res) => (
              <Card
                key={res.id}
                variant="surface"
                interactive
                onClick={() => navigate(`/restaurants/${res.slug}`)}
                className="p-0 overflow-hidden group cursor-pointer border-[#4D3F3C] hover:border-[#FF650D]/60 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={res.coverImage}
                      alt={res.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#211A19] via-transparent to-black/20" />

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#211A19]/90 backdrop-blur-md border border-white/10 text-xs font-bold text-amber-400 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{res.rating.toFixed(1)}</span>
                      <span className="text-[10px] text-[#A89A97] font-normal">
                        ({res.ratingCount})
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-semibold text-white">
                      {res.priceTier}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-bold text-white font-['Outfit'] group-hover:text-[#FF650D] transition-colors leading-snug">
                        {res.name}
                      </h3>
                      <p className="text-xs text-[#A89A97] line-clamp-1 mt-0.5">
                        {res.tagline}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {res.cuisines.map((c, i) => (
                        <Badge key={i} variant="default" className="text-[10px] py-0 px-2">
                          {c.name}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-[#4D3F3C] flex items-center justify-between text-xs text-[#A89A97]">
                      <div className="flex items-center gap-1 text-[11px] truncate max-w-[160px]">
                        <MapPin className="w-3 h-3 text-[#FF650D] shrink-0" />
                        <span className="truncate">{res.addressLine}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-white font-medium shrink-0">
                        <Clock className="w-3 h-3 text-[#FF650D]" />
                        <span>{res.deliveryTimeEstimateMin}-{res.deliveryTimeEstimateMax} mins</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="w-full py-2.5 rounded-xl bg-white/5 group-hover:bg-[#FF650D] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors">
                    <span>Explore Tasting Menu</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center space-y-3 bg-[#2E2423] rounded-3xl border border-[#4D3F3C]">
            <p className="text-base text-white font-bold">No restaurants match your filters.</p>
            <p className="text-xs text-[#A89A97]">Try loosening dietary or price tier constraints.</p>
          </div>
        )}
      </main>

      <StorefrontFooter />
    </div>
  )
}

export default RestaurantDiscoveryPage
