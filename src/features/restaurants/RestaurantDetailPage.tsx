import React, { useState, useEffect, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Clock, MapPin, Search, ArrowLeft, Plus, Heart, ShieldCheck } from 'lucide-react'
import { getRestaurantBySlug, fetchRestaurantByIdOrSlug } from '@/services/catalogService'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { ItemCustomizationModal } from '@/components/common/ItemCustomizationModal'
import { CartConflictModal } from '@/components/common/CartConflictModal'
import { Badge } from '@/components/common/Badge'
import { formatCurrency } from '@/lib/utils'
import { StorefrontNavbar } from '@/features/storefront/StorefrontNavbar'
import { StorefrontFooter } from '@/features/storefront/StorefrontFooter'
import type { MenuItem, CustomizationOption, Restaurant } from '@/types'

export const RestaurantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart, totals, conflict, resolveConflict } = useCart()
  const { favorites, toggleFavorite } = useAuth()

  const [restaurant, setRestaurant] = useState<Restaurant | undefined>(() =>
    id ? getRestaurantBySlug(id) : undefined
  )

  useEffect(() => {
    if (id) {
      fetchRestaurantByIdOrSlug(id).then((data) => {
        if (data) setRestaurant(data)
      })
    }
  }, [id])

  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [menuSearch, setMenuSearch] = useState<string>('')
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null)

  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
        <StorefrontNavbar />
        <div className="flex-1 max-w-xl mx-auto px-4 py-24 text-center space-y-4">
          <h1 className="text-3xl font-bold font-['Outfit'] text-white">Restaurant Not Found</h1>
          <p className="text-sm text-[#A89A97]">The culinary kitchen you requested is unavailable or has moved.</p>
          <Link
            to="/restaurants"
            className="inline-flex px-6 py-2.5 rounded-xl bg-[#FF650D] text-white font-bold text-xs"
          >
            Browse All Restaurants
          </Link>
        </div>
        <StorefrontFooter />
      </div>
    )
  }

  const isFavorited = favorites.includes(restaurant.id)

  const filteredCategories = useMemo(() => {
    if (!restaurant.categories) return []
    return restaurant.categories
      .map((cat) => {
        const matchesCategory = activeCategory === 'all' || activeCategory === cat.id
        if (!matchesCategory) return null

        const matchedItems = cat.items.filter((item) => {
          if (!menuSearch.trim()) return true
          const q = menuSearch.toLowerCase()
          return item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
        })

        if (matchedItems.length === 0) return null
        return { ...cat, items: matchedItems }
      })
      .filter(Boolean) as NonNullable<typeof restaurant.categories>
  }, [restaurant, activeCategory, menuSearch])

  const handleOpenCustomization = (dish: MenuItem) => {
    // If dish has options, open customization modal; otherwise add directly
    if (dish.customizationGroups && dish.customizationGroups.length > 0) {
      setSelectedMenuItem(dish)
      setIsModalOpen(true)
    } else {
      addToCart(dish, [], 1)
      setAddedItemNotice(dish.name)
      setTimeout(() => setAddedItemNotice(null), 2500)
    }
  }

  const handleConfirmCustomization = (
    item: MenuItem,
    customizations: Array<{ groupId: string; groupName: string; option: CustomizationOption }>,
    quantity: number
  ) => {
    addToCart(item, customizations, quantity)
    setAddedItemNotice(`${quantity}x ${item.name}`)
    setTimeout(() => setAddedItemNotice(null), 2500)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
      <StorefrontNavbar cartCount={totals.itemTotal > 0 ? 1 : 0} />

      <main className="flex-1 pb-20">
        {/* Restaurant Cover Banner */}
        <div className="relative w-full h-72 sm:h-96 overflow-hidden">
          <img
            src={restaurant.coverImage}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211A19] via-[#211A19]/50 to-black/30" />

          {/* Back Navigation Button */}
          <div className="absolute top-6 left-6 z-10">
            <Link
              to="/restaurants"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 hover:bg-black/80 backdrop-blur-md text-xs font-semibold text-white border border-white/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF650D]" />
              <span>Back to Discovery</span>
            </Link>
          </div>

          {/* Favorite Toggle Button */}
          <div className="absolute top-6 right-6 z-10">
            <button
              type="button"
              onClick={() => toggleFavorite(restaurant.id)}
              className={`p-2.5 rounded-xl backdrop-blur-md border border-white/10 transition-colors cursor-pointer ${
                isFavorited
                  ? 'bg-[#E9432E] text-white'
                  : 'bg-black/60 hover:bg-black/80 text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Restaurant Header Details Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
          <div className="rounded-3xl bg-[#2E2423] border border-[#4D3F3C] p-6 sm:p-8 shadow-2xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  {restaurant.cuisines.map((c) => (
                    <Badge key={c.id} variant="accent">
                      {c.name}
                    </Badge>
                  ))}
                  <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded-md bg-[#3C302E]">
                    {restaurant.priceTier}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit']">
                  {restaurant.name}
                </h1>
                <p className="text-sm text-[#A89A97] max-w-2xl leading-relaxed">
                  {restaurant.description}
                </p>
              </div>

              {/* Rating Card */}
              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 p-3.5 rounded-2xl bg-[#211A19] border border-[#4D3F3C] shrink-0">
                <div className="flex items-center gap-1.5 text-base font-bold text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{restaurant.rating.toFixed(1)}</span>
                </div>
                <span className="text-[11px] text-[#A89A97]">
                  {restaurant.ratingCount} guest reviews
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-[#4D3F3C] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A89A97]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FF650D]" />
                <span className="text-white">{restaurant.addressLine}, {restaurant.city}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FF650D]" />
                <span className="text-white">{restaurant.deliveryTimeEstimateMin}-{restaurant.deliveryTimeEstimateMax} min preparation & dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Min. order ₹{restaurant.minimumOrderAmount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Navigation & Search */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pb-4 border-b border-[#4D3F3C]">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#FF650D] text-white'
                    : 'bg-[#2E2423] border border-[#4D3F3C] text-[#A89A97] hover:text-white'
                }`}
              >
                All Courses
              </button>
              {restaurant.categories?.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#FF650D] text-white'
                      : 'bg-[#2E2423] border border-[#4D3F3C] text-[#A89A97] hover:text-white'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Menu Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A89A97]" />
              <input
                type="text"
                value={menuSearch}
                onChange={(e) => setMenuSearch(e.target.value)}
                placeholder="Search dish in menu..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#2E2423] border border-[#4D3F3C] text-white placeholder-[#A89A97] focus:outline-none focus:border-[#FF650D]"
              />
            </div>
          </div>

          {/* Categorized Menu Items */}
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <h2 className="text-xl font-bold text-white font-['Outfit'] border-l-4 border-[#FF650D] pl-3">
                  {category.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((dish) => (
                    <div
                      key={dish.id}
                      className="p-4 rounded-2xl bg-[#2E2423] border border-[#4D3F3C] hover:border-[#FF650D]/50 transition-all flex justify-between gap-4 group"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <Badge variant={dish.isVeg ? 'veg' : 'nonveg'}>
                            {dish.isVeg ? 'Pure Veg' : 'Non-Veg'}
                          </Badge>
                          {dish.isChefSpecial && <Badge variant="accent">Chef Special</Badge>}
                        </div>

                        <h3 className="text-base font-bold text-white font-['Outfit'] group-hover:text-[#FF650D] transition-colors">
                          {dish.name}
                        </h3>

                        <p className="text-xs text-[#A89A97] line-clamp-2 leading-relaxed">
                          {dish.description}
                        </p>

                        <div className="pt-2 flex items-center gap-3">
                          <span className="text-base font-bold text-white font-mono">
                            {formatCurrency(dish.price, 'INR')}
                          </span>
                          <span className="text-[11px] text-[#A89A97]">
                            • {dish.preparationTimeMinutes} min prep
                          </span>
                        </div>
                      </div>

                      {/* Image & Action */}
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 flex flex-col justify-end">
                        {dish.imageUrl ? (
                          <img
                            src={dish.imageUrl}
                            alt={dish.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#3C302E]" />
                        )}

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                          <button
                            type="button"
                            onClick={() => handleOpenCustomization(dish)}
                            className="px-4 py-1.5 rounded-lg bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold shadow-lg shadow-black/80 flex items-center gap-1 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>
                              {dish.customizationGroups && dish.customizationGroups.length > 0
                                ? 'Customize'
                                : 'Add'}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Item Customization Modal */}
      <ItemCustomizationModal
        item={selectedMenuItem}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmCustomization}
      />

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

      {/* Floating Bottom Bar if Cart Has Items */}
      {totals.itemTotal > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-xl w-full px-4">
          <div className="p-4 rounded-2xl bg-[#641820] text-[#FFF0D5] border border-[#FF650D]/40 shadow-2xl flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase font-['Oswald'] text-[#FF650D] font-bold tracking-wider">
                Current Basket
              </span>
              <span className="text-sm font-bold text-white">
                {formatCurrency(totals.finalPayable, 'INR')} • {restaurant.name}
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="px-5 py-2.5 rounded-xl bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-bold transition-all cursor-pointer"
            >
              Review Order →
            </button>
          </div>
        </div>
      )}

      {addedItemNotice && (
        <div className="fixed top-24 right-6 z-50 bg-[#2E2423] border border-[#FF650D] text-white text-xs px-4 py-3 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Added <strong>{addedItemNotice}</strong> to basket</span>
        </div>
      )}

      <StorefrontFooter />
    </div>
  )
}

export default RestaurantDetailPage
