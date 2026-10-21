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

  const isFavorited = Boolean(restaurant && favorites.includes(restaurant.id))

  const filteredCategories = useMemo(() => {
    if (!restaurant?.categories) return []
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

  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#121212] paper-grid">
        <StorefrontNavbar />
        <div className="flex-1 max-w-xl mx-auto px-4 py-24 text-center space-y-4">
          <h1 className="text-3xl font-black font-['Outfit'] text-[#121212]">Restaurant Not Found</h1>
          <p className="text-sm text-[#5E5854] font-medium">The culinary kitchen you requested is unavailable or has moved.</p>
          <Link
            to="/restaurants"
            className="inline-flex px-6 py-2.5 rounded-xl bg-[#FF650D] border-2 border-[#121212] shadow-[3px_3px_0px_#121212] text-white font-black text-xs uppercase font-['Oswald'] tracking-wider"
          >
            Browse All Restaurants
          </Link>
        </div>
        <StorefrontFooter />
      </div>
    )
  }

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
    <div className="min-h-screen flex flex-col bg-[#FAF6EE] text-[#121212] paper-grid selection:bg-[#FFD13B] selection:text-[#121212]">
      <StorefrontNavbar cartCount={totals.itemTotal > 0 ? 1 : 0} />

      <main className="flex-1 pb-20">
        {/* Restaurant Cover Banner */}
        <div className="relative w-full h-72 sm:h-96 overflow-hidden bg-[#FAF6EE] border-b-[2.5px] border-[#121212]">
          <img
            src={restaurant.coverImage}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

          {/* Back Navigation Button */}
          <div className="absolute top-6 left-6 z-10">
            <Link
              to="/restaurants"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border-2 border-[#121212] shadow-[3px_3px_0px_#121212] text-xs font-black uppercase font-['Oswald'] tracking-wider text-[#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212] transition-all"
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
              className={`p-2.5 rounded-xl border-2 border-[#121212] shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212] transition-all cursor-pointer ${
                isFavorited
                  ? 'bg-[#EF4444] text-white'
                  : 'bg-white text-[#121212]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Restaurant Header Details Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="rounded-2xl bg-white border-[2.5px] border-[#121212] p-6 sm:p-8 shadow-[6px_6px_0px_#121212] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  {restaurant.cuisines.map((c) => (
                    <Badge key={c.id} variant="accent">
                      {c.name}
                    </Badge>
                  ))}
                  <span className="text-xs font-mono font-bold text-[#121212] px-2.5 py-0.5 rounded-md bg-[#FAF6EE] border border-[#121212]">
                    {restaurant.priceTier}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-black text-[#121212] font-['Outfit'] tracking-tight">
                  {restaurant.name}
                </h1>
                <p className="text-sm text-[#5E5854] max-w-2xl leading-relaxed font-medium">
                  {restaurant.description}
                </p>
              </div>

              {/* Rating Card */}
              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 p-3.5 rounded-xl bg-[#FFF4C2] border-2 border-[#121212] shadow-[3px_3px_0px_#121212] shrink-0">
                <div className="flex items-center gap-1.5 text-base font-black text-[#121212]">
                  <Star className="w-5 h-5 fill-[#FFD13B] text-[#121212]" />
                  <span>{restaurant.rating.toFixed(1)}</span>
                </div>
                <span className="text-[11px] text-[#5E5854] font-bold">
                  {restaurant.ratingCount} reviews
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t-2 border-[#121212]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5E5854] font-bold">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#FF650D]" />
                <span className="text-[#121212]">{restaurant.addressLine}, {restaurant.city}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FF650D]" />
                <span className="text-[#121212]">{restaurant.deliveryTimeEstimateMin}-{restaurant.deliveryTimeEstimateMax} min preparation & dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span className="text-[#059669]">Min. order ₹{restaurant.minimumOrderAmount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Navigation & Search */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pb-4 border-b-2 border-[#121212]/15">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase font-['Oswald'] tracking-wider border-2 border-[#121212] whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#121212] text-[#FFD13B] shadow-[2px_2px_0px_#FF650D] -translate-y-0.5'
                    : 'bg-white text-[#121212] shadow-[2px_2px_0px_#121212] hover:-translate-y-0.5'
                }`}
              >
                All Courses
              </button>
              {restaurant.categories?.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-black uppercase font-['Oswald'] tracking-wider border-2 border-[#121212] whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[#FF650D] text-white shadow-[2px_2px_0px_#121212] -translate-y-0.5'
                      : 'bg-white text-[#121212] shadow-[2px_2px_0px_#121212] hover:-translate-y-0.5 hover:bg-[#FFF4C2]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Menu Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5E5854]" />
              <input
                type="text"
                value={menuSearch}
                onChange={(e) => setMenuSearch(e.target.value)}
                placeholder="Search dish in menu..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border-2 border-[#121212] shadow-[2px_2px_0px_#121212] text-[#121212] placeholder-[#5E5854] font-medium focus:outline-none focus:ring-2 focus:ring-[#FF650D]"
              />
            </div>
          </div>

          {/* Categorized Menu Items */}
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-black text-[#121212] font-['Outfit'] border-l-4 border-[#FF650D] pl-3 uppercase tracking-wide">
                  {category.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {category.items.map((dish) => (
                    <div
                      key={dish.id}
                      className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#121212] shadow-[4px_4px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#121212] transition-all flex justify-between gap-4 group"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <Badge variant={dish.isVeg ? 'veg' : 'nonveg'}>
                            {dish.isVeg ? 'Pure Veg' : 'Non-Veg'}
                          </Badge>
                          {dish.isChefSpecial && <Badge variant="accent">Chef Special</Badge>}
                        </div>

                        <h3 className="text-base sm:text-lg font-black text-[#121212] font-['Outfit'] group-hover:text-[#FF650D] transition-colors">
                          {dish.name}
                        </h3>

                        <p className="text-xs text-[#5E5854] line-clamp-2 leading-relaxed font-medium">
                          {dish.description}
                        </p>

                        <div className="pt-2 flex items-center gap-3">
                          <span className="text-base font-black text-[#121212] font-['Oswald']">
                            {formatCurrency(dish.price, 'INR')}
                          </span>
                          <span className="text-[11px] text-[#5E5854] font-mono font-bold">
                            • {dish.preparationTimeMinutes} min prep
                          </span>
                        </div>
                      </div>

                      {/* Image & Action */}
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 flex flex-col justify-end border-2 border-[#121212] bg-[#FAF6EE]">
                        {dish.imageUrl ? (
                          <img
                            src={dish.imageUrl}
                            alt={dish.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#FFF4C2]" />
                        )}

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                          <button
                            type="button"
                            onClick={() => handleOpenCustomization(dish)}
                            className="px-3.5 py-1.5 rounded-lg bg-[#FF650D] hover:bg-[#E55400] text-white text-xs font-black uppercase font-['Oswald'] tracking-wider border-2 border-[#121212] shadow-[2px_2px_0px_#121212] flex items-center gap-1 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                          >
                            <Plus className="w-3.5 h-3.5 stroke-[3]" />
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
          <div className="p-4 rounded-2xl bg-[#121212] text-[#FFF0D5] border-2 border-[#121212] shadow-[5px_5px_0px_#FF650D] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase font-['Oswald'] text-[#FFD13B] font-black tracking-wider">
                Current Basket
              </span>
              <span className="text-sm font-black font-['Outfit'] text-white">
                {formatCurrency(totals.finalPayable, 'INR')} • {restaurant.name}
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="px-5 py-2.5 rounded-xl bg-[#FF650D] border-2 border-white shadow-[2px_2px_0px_white] text-white text-xs font-black uppercase font-['Oswald'] tracking-wider hover:bg-[#E55400] transition-all cursor-pointer"
            >
              Review Order →
            </button>
          </div>
        </div>
      )}

      {addedItemNotice && (
        <div className="fixed top-24 right-6 z-50 bg-white border-2 border-[#121212] text-[#121212] text-xs font-bold px-4 py-3 rounded-xl shadow-[4px_4px_0px_#121212] animate-in fade-in slide-in-from-top-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#121212]" />
          <span>Added <strong className="text-[#FF650D]">{addedItemNotice}</strong> to basket</span>
        </div>
      )}

      <StorefrontFooter />
    </div>
  )
}

export default RestaurantDetailPage
