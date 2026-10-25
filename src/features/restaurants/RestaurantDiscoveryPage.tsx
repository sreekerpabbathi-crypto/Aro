import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Search, Star, Clock, MapPin, ArrowUpDown, Plus, Check, X, Utensils } from 'lucide-react'
import { INITIAL_RESTAURANTS, fetchRestaurants, fetchCuisines } from '@/services/catalogService'
import {
  CRAVING_CATEGORIES,
  getCategoryBySlug,
  filterCategoryResults,
  type MatchedDishWithRestaurant,
} from '@/services/categoryFilterService'
import { Badge } from '@/components/common/Badge'
import { CartConflictModal } from '@/components/common/CartConflictModal'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
import { useCart } from '@/context/CartContext'
import { formatCurrency } from '@/lib/utils'
import { StarSparkleDoodle, ScribbleUnderline, WashiTape } from '@/components/sketch/SketchDoodles'
import type { Restaurant } from '@/types'

export const RestaurantDiscoveryPage: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const { totals, addToCart, conflict, resolveConflict } = useCart()

  // Read URL query parameters
  const categoryParam = searchParams.get('category') || ''
  const cuisineParam = searchParams.get('cuisine') || 'all'
  const searchParam = searchParams.get('q') || ''
  const areaParam = searchParams.get('area') || 'all'
  const vegParam = searchParams.get('veg') === 'true'

  // Local state
  const [restaurants, setRestaurants] = useState<Restaurant[]>(INITIAL_RESTAURANTS)
  const [searchQuery, setSearchQuery] = useState(searchParam)
  const selectedCuisine = cuisineParam
  const selectedNeighbourhood = areaParam
  const vegOnly = vegParam
  const [selectedPriceTier, setSelectedPriceTier] = useState<string>('all')
  const [minRating, setMinRating] = useState<number>(0)
  const [sortBy, setSortBy] = useState<'rating' | 'deliveryTime' | 'minOrder'>('rating')
  const [addedDishIds, setAddedDishIds] = useState<Record<string, boolean>>({})

  // Active Category Definition
  const activeCategoryDef = useMemo(() => {
    return getCategoryBySlug(categoryParam)
  }, [categoryParam])

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

  // Helper to update search params while preserving other filters
  const updateParams = (updates: Record<string, string | null>) => {
    const newParams = new URLSearchParams(searchParams)
    Object.entries(updates).forEach(([key, val]) => {
      if (!val || val === 'all' || val === 'false') {
        newParams.delete(key)
      } else {
        newParams.set(key, val)
      }
    })
    setSearchParams(newParams)
  }

  const handleCategoryClick = (slug: string) => {
    if (activeCategoryDef?.slug === slug || slug === 'all') {
      updateParams({ category: null })
    } else {
      updateParams({ category: slug })
    }
  }

  const handleCuisineClick = (slug: string) => {
    updateParams({ cuisine: slug === 'all' ? null : slug })
  }

  const handleNeighbourhoodClick = (slug: string) => {
    updateParams({ area: slug === 'all' ? null : slug })
  }

  const handleToggleVeg = () => {
    updateParams({ veg: !vegOnly ? 'true' : null })
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    updateParams({ q: query.trim() || null })
  }

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedPriceTier('all')
    setMinRating(0)
    setSearchParams({})
  }

  // Filter matching data
  const { matchingDishes, filteredRestaurants } = useMemo(() => {
    const { categoryDef, matchingRestaurants: catRestaurants, matchingDishes: catDishes } =
      filterCategoryResults(restaurants, categoryParam)

    // Base restaurant list to filter:
    // If a category is selected, start with catRestaurants
    const baseRestaurants = categoryDef ? catRestaurants : restaurants

    // 1. Filter Restaurants
    const filteredRes = baseRestaurants.filter((res) => {
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchesName = res.name.toLowerCase().includes(q)
        const matchesTagline = res.tagline.toLowerCase().includes(q)
        const matchesAddress = res.addressLine.toLowerCase().includes(q)
        const matchesCuisine = res.cuisines.some((c) => c.name.toLowerCase().includes(q))
        const matchesDishes = res.categories?.some((cat) =>
          cat.items.some(
            (item) =>
              item.name.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q)
          )
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
          const isCentral =
            addr.includes('old city') ||
            addr.includes('charminar') ||
            addr.includes('ghansi bazaar') ||
            addr.includes('secunderabad') ||
            addr.includes('somajiguda') ||
            addr.includes('basheerbagh') ||
            addr.includes('rtc x roads') ||
            addr.includes('gandipet')
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

    // 2. Filter Dishes (when category is selected)
    let filteredD: MatchedDishWithRestaurant[] = []
    if (categoryDef) {
      filteredD = catDishes.filter((dish) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase()
          const matchesDish =
            dish.name.toLowerCase().includes(q) ||
            dish.description.toLowerCase().includes(q) ||
            dish.restaurantName.toLowerCase().includes(q)
          if (!matchesDish) return false
        }

        // Veg only
        if (vegOnly && !dish.isVeg) {
          return false
        }

        // Check if the restaurant providing this dish survived the restaurant-level neighbourhood or price filter
        const parentRes = restaurants.find((r) => r.slug === dish.restaurantSlug)
        if (parentRes) {
          if (selectedPriceTier !== 'all' && parentRes.priceTier !== selectedPriceTier) return false
          if (minRating > 0 && parentRes.rating < minRating) return false

          if (selectedNeighbourhood !== 'all') {
            const addr = parentRes.addressLine.toLowerCase()
            if (selectedNeighbourhood === 'jubilee-hills' && !addr.includes('jubilee hills')) return false
            if (selectedNeighbourhood === 'banjara-hills' && !addr.includes('banjara hills')) return false
            if (selectedNeighbourhood === 'gachibowli' && !addr.includes('gachibowli') && !addr.includes('financial district')) return false
            if (selectedNeighbourhood === 'hitec-madhapur' && !addr.includes('hitec') && !addr.includes('madhapur')) return false
            if (selectedNeighbourhood === 'kondapur' && !addr.includes('kondapur')) return false
            if (selectedNeighbourhood === 'central-heritage') {
              const isCentral =
                addr.includes('old city') ||
                addr.includes('charminar') ||
                addr.includes('ghansi bazaar') ||
                addr.includes('secunderabad') ||
                addr.includes('somajiguda') ||
                addr.includes('basheerbagh') ||
                addr.includes('rtc x roads') ||
                addr.includes('gandipet')
              if (!isCentral) return false
            }
          }
        }

        return true
      })
    }

    return {
      matchingDishes: filteredD,
      filteredRestaurants: filteredRes,
    }
  }, [
    restaurants,
    categoryParam,
    searchQuery,
    selectedNeighbourhood,
    selectedCuisine,
    selectedPriceTier,
    minRating,
    vegOnly,
    sortBy,
  ])

  const handleAddToCart = (dish: MatchedDishWithRestaurant) => {
    addToCart(dish, [], 1)
    setAddedDishIds((prev) => ({ ...prev, [dish.id]: true }))
    setTimeout(() => {
      setAddedDishIds((prev) => ({ ...prev, [dish.id]: false }))
    }, 2000)
  }

  const isAnyFilterActive =
    !!categoryParam ||
    selectedCuisine !== 'all' ||
    selectedNeighbourhood !== 'all' ||
    !!searchQuery ||
    vegOnly ||
    selectedPriceTier !== 'all'

  return (
    <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid selection:bg-[var(--dp-color-highlight)] selection:text-[var(--dp-color-ink)]">
      <StorefrontNavbar
        cartCount={totals.itemTotal > 0 ? 1 : 0}
        onSearchChange={handleSearchChange}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Dynamic Header: Adapts if category is selected */}
        <div className="border-b-[1.5px] border-[var(--dp-color-line)] pb-6 space-y-3">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)] text-xs font-bold uppercase font-['Outfit',sans-serif] text-[var(--dp-color-ink)] tracking-wider">
              <StarSparkleDoodle className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
              <span>{activeCategoryDef ? activeCategoryDef.stickerText : 'Vetted Hyderabad Kitchens'}</span>
            </div>
            {activeCategoryDef && (
              <WashiTape text="CATEGORY FOCUS" angle="-1deg" className="bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-line)] font-['Caveat',cursive] text-xs" />
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] tracking-tight">
            {activeCategoryDef ? (
              <>
                {activeCategoryDef.name.toUpperCase()}
                <span className="relative inline-block text-[var(--dp-color-accent)] ml-2">
                  SPECIALTIES
                  <ScribbleUnderline className="absolute -bottom-2 left-0 w-full h-3 text-[var(--dp-color-accent)]" />
                </span>
              </>
            ) : (
              "DISCOVER HYDERABAD'S BEST ATELIERS"
            )}
          </h1>

          <p className="text-sm sm:text-base text-[var(--dp-color-ink-muted)] font-normal max-w-3xl font-['Outfit',sans-serif]">
            {activeCategoryDef
              ? `${activeCategoryDef.tagline}. Discover individual signature dishes and vetted master kitchens crafting authentic recipes across Hyderabad.`
              : 'From historic Old City dum biryani masters to contemporary Banjara Hills robata kitchens and wood-fired pizzerias.'}
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search restaurants, cuisines, or dishes..."
                className="w-full pl-10 pr-4 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] text-sm font-medium font-['Outfit',sans-serif] text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)]"
              />
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              {/* Sort By */}
              <div className="flex items-center gap-1.5 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] px-3 py-2 rounded-[var(--dp-radius-control)] text-[var(--dp-color-ink)] font-semibold font-['Outfit',sans-serif]">
                <ArrowUpDown className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                <span className="uppercase tracking-wider">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-[var(--dp-color-ink)] font-bold focus:outline-none cursor-pointer"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="deliveryTime">Fastest Arrival</option>
                  <option value="minOrder">Min. Order Amount</option>
                </select>
              </div>

              {/* Price Tier Filter */}
              <div className="flex items-center gap-1 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] p-1 rounded-[var(--dp-radius-control)]">
                {['all', '₹₹', '₹₹₹', '₹₹₹₹'].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setSelectedPriceTier(tier)}
                    className={`px-2.5 py-1 rounded text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider cursor-pointer transition-all ${
                      selectedPriceTier === tier
                        ? 'bg-[var(--dp-color-accent)] text-white shadow-[1px_1px_0px_var(--dp-color-ink)]'
                        : 'text-[var(--dp-color-ink-muted)] hover:text-[var(--dp-color-ink)]'
                    }`}
                  >
                    {tier === 'all' ? 'All Prices' : tier}
                  </button>
                ))}
              </div>

              {/* Pure Veg Toggle */}
              <button
                type="button"
                onClick={handleToggleVeg}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-[var(--dp-radius-control)] border-[1.5px] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider transition-all cursor-pointer ${
                  vegOnly
                    ? 'bg-[var(--dp-color-scrap)] text-[#2d5f3e] border-[#2d5f3e] -translate-y-0.5 shadow-[1.5px_1.5px_0px_rgba(45,95,62,0.25)]'
                    : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full border-[1.5px] ${
                    vegOnly ? 'bg-[#2d5f3e] border-[#2d5f3e]' : 'bg-white border-[var(--dp-color-line)]'
                  }`}
                />
                <span>Pure Veg</span>
              </button>
            </div>
          </div>

          {/* Craving Category Filter Pills Bar */}
          <div className="p-3 bg-[var(--dp-color-scrap)] rounded-xl border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_rgba(56,53,47,0.08)] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[var(--dp-color-ink)] uppercase tracking-wider font-['Outfit',sans-serif] flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                <span>What are you craving?</span>
              </span>
              {activeCategoryDef && (
                <button
                  type="button"
                  onClick={() => updateParams({ category: null })}
                  className="text-[var(--dp-color-accent)] font-bold font-['Outfit',sans-serif] text-[11px] uppercase tracking-wider hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  <span>Clear Category</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => handleCategoryClick('all')}
                className={`px-3 py-1.5 rounded-[var(--dp-radius-control)] text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider whitespace-nowrap cursor-pointer border-[1.5px] transition-all ${
                  !activeCategoryDef
                    ? 'bg-[var(--dp-color-ink)] text-white border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] -translate-y-0.5'
                    : 'bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
                }`}
              >
                All Cravings
              </button>

              {CRAVING_CATEGORIES.map((cat) => {
                const isActive = activeCategoryDef?.slug === cat.slug
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryClick(cat.slug)}
                    className={`px-3 py-1.5 rounded-[var(--dp-radius-control)] text-xs font-bold font-['Outfit',sans-serif] uppercase tracking-wider whitespace-nowrap cursor-pointer border-[1.5px] transition-all flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[var(--dp-color-accent)] text-white border-[var(--dp-color-accent)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] -translate-y-0.5'
                        : 'bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
                    }`}
                  >
                    <span>{cat.name}</span>
                    {isActive && <Check className="w-3.5 h-3.5" />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Area and Cuisine Secondary Filter Pills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {/* Neighbourhood Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-bold text-[var(--dp-color-ink-muted)] uppercase tracking-wider shrink-0 mr-1 font-['Outfit',sans-serif]">
                Area:
              </span>
              {neighbourhoodsList.map((n) => {
                const active = selectedNeighbourhood === n.slug
                return (
                  <button
                    key={n.slug}
                    type="button"
                    onClick={() => handleNeighbourhoodClick(n.slug)}
                    className={`px-2.5 py-1 rounded-[var(--dp-radius-control)] text-[11px] font-bold font-['Outfit',sans-serif] uppercase tracking-wider whitespace-nowrap cursor-pointer border-[1.5px] transition-all ${
                      active
                        ? 'bg-[var(--dp-color-ink)] text-white border-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)]'
                        : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
                    }`}
                  >
                    {n.name}
                  </button>
                )
              })}
            </div>

            {/* Cuisine Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-[11px] font-bold text-[var(--dp-color-ink-muted)] uppercase tracking-wider shrink-0 mr-1 font-['Outfit',sans-serif]">
                Cuisine:
              </span>
              {cuisinesList.slice(0, 7).map((c) => {
                const active = selectedCuisine === c.slug
                return (
                  <button
                    key={c.slug}
                    type="button"
                    onClick={() => handleCuisineClick(c.slug)}
                    className={`px-2.5 py-1 rounded-[var(--dp-radius-control)] text-[11px] font-bold font-['Outfit',sans-serif] uppercase tracking-wider whitespace-nowrap cursor-pointer border-[1.5px] transition-all ${
                      active
                        ? 'bg-[var(--dp-color-ink)] text-white border-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)]'
                        : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
                    }`}
                  >
                    {c.name}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Results Count & Reset Header */}
        <div className="flex items-center justify-between text-xs text-[var(--dp-color-ink-muted)] font-medium pt-2 border-t-[1.5px] border-[var(--dp-color-line)]/50">
          <div>
            <span>
              Showing{' '}
              <strong className="text-[var(--dp-color-ink)] font-bold">
                {filteredRestaurants.length}
              </strong>{' '}
              culinary kitchens
              {activeCategoryDef && matchingDishes.length > 0 && (
                <>
                  {' '}
                  and{' '}
                  <strong className="text-[var(--dp-color-accent)] font-bold">
                    {matchingDishes.length}
                  </strong>{' '}
                  matching dishes
                </>
              )}
            </span>
          </div>

          {isAnyFilterActive && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-[var(--dp-color-accent)] font-bold font-['Outfit',sans-serif] uppercase tracking-wider hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>Reset all filters ×</span>
            </button>
          )}
        </div>

        {/* SECTION 1: Matching Category Dishes (Displayed when a food category is selected) */}
        {activeCategoryDef && matchingDishes.length > 0 && (
          <section className="space-y-4 pt-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <StarSparkleDoodle className="w-4 h-4 text-[var(--dp-color-accent)]" />
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] tracking-tight">
                    FEATURED {activeCategoryDef.name.toUpperCase()} DISHES
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-normal font-['Outfit',sans-serif]">
                  Individual courses matching your craving, ready for immediate delivery
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-[var(--dp-color-highlight)] border-[1.5px] border-[var(--dp-color-ink)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)]">
                {matchingDishes.length} Dishes Found
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {matchingDishes.map((dish) => {
                const isAdded = !!addedDishIds[dish.id]
                return (
                  <div
                    key={`${dish.restaurantSlug}-${dish.id}`}
                    className="p-3.5 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-xl shadow-[2px_2px_0px_rgba(56,53,47,0.1)] hover:border-[var(--dp-color-ink)] hover:shadow-[3px_3px_0px_rgba(56,53,47,0.18)] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      {/* Dish Image */}
                      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-3 border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)]">
                        <img
                          src={dish.imageUrl}
                          alt={dish.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--dp-color-ink)]/70 via-transparent to-transparent" />

                        {/* Veg / Non-Veg Indicator */}
                        <div className="absolute top-2 left-2 z-10 p-1 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded shadow-sm">
                          <span
                            className={`w-2.5 h-2.5 rounded-full block border-[1.5px] ${
                              dish.isVeg
                                ? 'bg-[#2d5f3e] border-[#2d5f3e]'
                                : 'bg-[var(--dp-color-accent)] border-[var(--dp-color-accent)]'
                            }`}
                          />
                        </div>

                        {/* Chef Special Badge */}
                        {dish.isChefSpecial && (
                          <div className="absolute top-2 right-2 z-10">
                            <span className="inline-block px-2 py-0.5 text-[9px] font-bold uppercase font-['Outfit',sans-serif] tracking-wider rounded border-[1.5px] border-[var(--dp-color-ink)] bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-ink)]">
                              Chef Special
                            </span>
                          </div>
                        )}

                        {/* Price Badge */}
                        <div className="absolute bottom-2 left-2 z-10 px-2 py-0.5 rounded bg-[var(--dp-color-ink)] text-white text-xs font-bold font-mono shadow-sm">
                          {formatCurrency(dish.price)}
                        </div>
                      </div>

                      {/* Dish Title & Description */}
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] group-hover:text-[var(--dp-color-accent)] transition-colors leading-snug line-clamp-1">
                          {dish.name}
                        </h3>
                        <p className="text-[11px] text-[var(--dp-color-ink-muted)] line-clamp-2 leading-relaxed font-normal font-['Outfit',sans-serif]">
                          {dish.description}
                        </p>
                      </div>

                      {/* Restaurant Attribution Badge */}
                      <div className="pt-2 mt-2 border-t-[1.5px] border-[var(--dp-color-line)]/50 flex items-center justify-between text-[11px]">
                        <button
                          type="button"
                          onClick={() => navigate(`/restaurants/${dish.restaurantSlug}`)}
                          className="font-bold text-[var(--dp-color-ink)] hover:text-[var(--dp-color-accent)] hover:underline flex items-center gap-1 font-['Outfit',sans-serif] truncate max-w-[170px]"
                          title={`View ${dish.restaurantName} Menu`}
                        >
                          <span>by {dish.restaurantName}</span>
                        </button>
                        <span className="text-[10px] text-[var(--dp-color-ink-muted)] flex items-center gap-0.5 shrink-0">
                          <Star className="w-3 h-3 fill-[var(--dp-color-accent)] text-[var(--dp-color-accent)]" />
                          <span>{dish.restaurantRating.toFixed(1)}</span>
                        </span>
                      </div>
                    </div>

                    {/* Action Button: Add to Cart */}
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(dish)}
                        className={`w-full py-2 rounded-[var(--dp-radius-control)] border-[1.5px] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-[#2d5f3e] text-white border-[#2d5f3e]'
                            : 'bg-[var(--dp-color-ground)] hover:bg-[var(--dp-color-accent)] border-[var(--dp-color-line)] hover:border-[var(--dp-color-accent)] text-[var(--dp-color-ink)] hover:text-white'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added to Basket</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Basket</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* SECTION 2: Restaurants List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] tracking-tight">
                {activeCategoryDef
                  ? `KITCHENS OFFERING ${activeCategoryDef.name.toUpperCase()}`
                  : 'FEATURED HYDERABAD KITCHENS'}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--dp-color-ink-muted)] font-normal font-['Outfit',sans-serif]">
                {activeCategoryDef
                  ? `Vetted dining destinations with authentic ${activeCategoryDef.name.toLowerCase()} preparations`
                  : 'Browse all curated master kitchens and regional ateliers'}
              </p>
            </div>
            <span className="px-2.5 py-1 rounded bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">
              {filteredRestaurants.length} Kitchens
            </span>
          </div>

          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((res) => (
                <article
                  key={res.id}
                  onClick={() => navigate(`/restaurants/${res.slug}`)}
                  className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl overflow-hidden shadow-[2px_2px_0px_rgba(56,53,47,0.12)] hover:border-[var(--dp-color-ink)] hover:shadow-[3px_3px_0px_rgba(56,53,47,0.18)] hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-full h-52 overflow-hidden bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)]">
                      <img
                        src={res.coverImage}
                        alt={res.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--dp-color-ink)]/70 via-transparent to-transparent" />

                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center gap-1 font-['Outfit',sans-serif]">
                        <Star className="w-3.5 h-3.5 fill-[var(--dp-color-accent)] text-[var(--dp-color-accent)]" />
                        <span>{res.rating.toFixed(1)}</span>
                        <span className="text-[var(--dp-color-ink-muted)] text-[10px] font-normal font-['Outfit',sans-serif]">
                          ({res.ratingCount})
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-[var(--dp-color-ink)] text-white text-[11px] font-mono font-bold">
                        {res.priceTier}
                      </div>

                      {activeCategoryDef && (
                        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-[var(--dp-color-highlight)] border border-[var(--dp-color-ink)] text-[var(--dp-color-ink)] text-[10px] font-bold font-['Outfit',sans-serif]">
                          {activeCategoryDef.shortName} Specialist
                        </div>
                      )}
                    </div>

                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] group-hover:text-[var(--dp-color-accent)] transition-colors leading-snug">
                          {res.name}
                        </h3>
                        <p className="text-xs text-[var(--dp-color-ink-muted)] line-clamp-1 mt-0.5 font-normal font-['Outfit',sans-serif]">
                          {res.tagline}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {res.cuisines.map((c, i) => (
                          <Badge key={i} variant="accent" className="text-[10px] py-0 px-2 font-normal font-['Outfit',sans-serif]">
                            {c.name}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-2 border-t-[1.5px] border-[var(--dp-color-line)]/50 flex items-center justify-between text-xs text-[var(--dp-color-ink-muted)] font-normal font-['Outfit',sans-serif]">
                        <div className="flex items-center gap-1 text-[11px] truncate max-w-[160px]">
                          <MapPin className="w-3.5 h-3.5 text-[var(--dp-color-accent)] shrink-0" />
                          <span className="truncate">{res.addressLine}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] text-[var(--dp-color-ink)] font-bold shrink-0 font-['Outfit',sans-serif]">
                          <Clock className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                          <span>{res.deliveryTimeEstimateMin}-{res.deliveryTimeEstimateMax} mins</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="w-full py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-ground)] group-hover:bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-line)] group-hover:border-[var(--dp-color-accent)] group-hover:text-white text-[var(--dp-color-ink)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center justify-center gap-1.5 transition-all">
                      <span>Explore Tasting Menu</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-14 text-center space-y-4 bg-[var(--dp-color-scrap)] rounded-2xl border-[1.5px] border-[var(--dp-color-line)] shadow-[2.5px_2.5px_0px_rgba(56,53,47,0.12)] p-8 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] flex items-center justify-center mx-auto text-[var(--dp-color-accent)]">
                <Utensils className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg text-[var(--dp-color-ink)] font-bold font-['Outfit',sans-serif]">
                  No matching kitchens found
                </h3>
                <p className="text-xs text-[var(--dp-color-ink-muted)] font-normal font-['Outfit',sans-serif]">
                  {activeCategoryDef
                    ? `No partner kitchens match '${activeCategoryDef.name}' with your active filters.`
                    : 'Try loosening your search, dietary, or area constraints.'}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="w-full sm:w-auto px-4 py-2 bg-[var(--dp-color-accent)] text-white font-bold text-xs uppercase font-['Outfit',sans-serif] rounded-[var(--dp-radius-control)] border-[1.5px] border-[var(--dp-color-accent)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>

              {/* Suggestion pills to browse other categories */}
              <div className="pt-4 border-t-[1.5px] border-[var(--dp-color-line)]/50">
                <span className="text-[11px] font-bold text-[var(--dp-color-ink-muted)] uppercase tracking-wider block mb-2 font-['Outfit',sans-serif]">
                  Browse popular categories:
                </span>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {CRAVING_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryClick(cat.slug)}
                      className="px-2.5 py-1 rounded bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)] text-[11px] font-bold text-[var(--dp-color-ink)] hover:border-[var(--dp-color-ink)] transition-colors cursor-pointer font-['Outfit',sans-serif]"
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Cart Conflict Modal */}
      {conflict && (
        <CartConflictModal
          isOpen={Boolean(conflict)}
          currentRestaurantName={conflict.currentRestaurantName}
          newRestaurantName={conflict.newRestaurantName}
          onCancel={() => resolveConflict(false)}
          onReplace={() => resolveConflict(true)}
        />
      )}

      <StorefrontFooter />
    </div>
  )
}

export default RestaurantDiscoveryPage
