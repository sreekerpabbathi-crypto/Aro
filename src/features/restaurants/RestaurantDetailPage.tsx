import React, { useState, useEffect, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Clock, MapPin, Search, ArrowLeft, Plus, Heart, ShieldCheck, Sparkles } from 'lucide-react'
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
      <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid">
        <StorefrontNavbar />
        <div className="flex-1 max-w-xl mx-auto px-4 py-24 text-center space-y-4">
          <h1 className="text-3xl font-extrabold font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">Restaurant Not Found</h1>
          <p className="text-sm text-[var(--dp-color-ink-muted)] font-normal font-['Outfit',sans-serif]">The culinary kitchen you requested is unavailable or has moved.</p>
          <Link
            to="/restaurants"
            className="inline-flex px-6 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-accent)] shadow-[2px_2px_0px_var(--dp-color-ink)] text-white font-bold text-xs uppercase font-['Outfit',sans-serif] tracking-wider"
          >
            Browse All Restaurants
          </Link>
        </div>
        <StorefrontFooter />
      </div>
    )
  }

  const handleOpenCustomization = (dish: MenuItem) => {
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
    <div className="min-h-screen flex flex-col bg-[var(--dp-color-ground)] text-[var(--dp-color-ink)] paper-grid selection:bg-[var(--dp-color-highlight)] selection:text-[var(--dp-color-ink)]">
      <StorefrontNavbar cartCount={totals.itemTotal > 0 ? 1 : 0} />

      <main className="flex-1 pb-20">
        {/* Restaurant Cover Banner */}
        <div className="relative w-full h-72 sm:h-96 overflow-hidden bg-[var(--dp-color-ground)] border-b-[1.5px] border-[var(--dp-color-line)]">
          <img
            src={restaurant.coverImage}
            alt={restaurant.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--dp-color-ink)]/75 via-[var(--dp-color-ink)]/30 to-black/20" />

          {/* Back Navigation Button */}
          <div className="absolute top-6 left-6 z-10">
            <Link
              to="/restaurants"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider text-[var(--dp-color-ink)] hover:border-[var(--dp-color-ink)] transition-all"
            >
              <ArrowLeft className="w-4 h-4 text-[var(--dp-color-accent)]" />
              <span>Back to Discovery</span>
            </Link>
          </div>

          {/* Favorite Toggle Button */}
          <div className="absolute top-6 right-6 z-10">
            <button
              type="button"
              onClick={() => toggleFavorite(restaurant.id)}
              className={`p-2.5 rounded-[var(--dp-radius-control)] border-[1.5px] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)] transition-all cursor-pointer ${
                isFavorited
                  ? 'bg-[var(--dp-color-accent)] text-white border-[var(--dp-color-accent)]'
                  : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)]'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>

        {/* Restaurant Header Details Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
          <div className="rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] p-6 sm:p-8 shadow-[3px_3px_0px_rgba(56,53,47,0.14)] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  {restaurant.cuisines.map((c) => (
                    <Badge key={c.id} variant="accent" className="font-normal font-['Outfit',sans-serif]">
                      {c.name}
                    </Badge>
                  ))}
                  <span className="text-xs font-mono font-medium text-[var(--dp-color-ink)] px-2.5 py-0.5 rounded-md bg-[var(--dp-color-ground)] border-[1.5px] border-[var(--dp-color-line)]">
                    {restaurant.priceTier}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] tracking-tight">
                  {restaurant.name}
                </h1>
                <p className="text-sm text-[var(--dp-color-ink-muted)] max-w-2xl leading-relaxed font-normal font-['Outfit',sans-serif]">
                  {restaurant.description}
                </p>
              </div>

              {/* Rating Card */}
              <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-1 p-3.5 rounded-xl bg-[var(--dp-color-highlight)]/40 border-[1.5px] border-[var(--dp-color-line)] shadow-[1.5px_1.5px_0px_var(--dp-color-line)] shrink-0">
                <div className="flex items-center gap-1.5 text-base font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                  <Star className="w-5 h-5 fill-[var(--dp-color-accent)] text-[var(--dp-color-accent)]" />
                  <span>{restaurant.rating.toFixed(1)}</span>
                </div>
                <span className="text-[11px] text-[var(--dp-color-ink-muted)] font-medium font-['Outfit',sans-serif]">
                  {restaurant.ratingCount} reviews
                </span>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t-[1.5px] border-[var(--dp-color-line)]/50 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[var(--dp-color-ink-muted)] font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[var(--dp-color-accent)]" />
                <span className="text-[var(--dp-color-ink)]">{restaurant.addressLine}, {restaurant.city}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[var(--dp-color-accent)]" />
                <span className="text-[var(--dp-color-ink)]">{restaurant.deliveryTimeEstimateMin}-{restaurant.deliveryTimeEstimateMax} min preparation & dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2d5f3e]" />
                <span className="text-[#2d5f3e]">Min. order ₹{restaurant.minimumOrderAmount}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Navigation & Search */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between pb-4 border-b-[1.5px] border-[var(--dp-color-line)]">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                type="button"
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-[var(--dp-radius-control)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider border-[1.5px] whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[var(--dp-color-accent)] text-white border-[var(--dp-color-accent)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] -translate-y-0.5'
                    : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
                }`}
              >
                All Courses
              </button>
              <Link
                to={`/budget-optimizer?restaurant=${restaurant.id || restaurant.slug}`}
                className="px-3.5 py-2 rounded-[var(--dp-radius-control)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider border-[1.5px] bg-[var(--dp-color-highlight)] text-[var(--dp-color-ink)] border-[var(--dp-color-ink)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] hover:bg-[#ebda99] whitespace-nowrap transition-all flex items-center gap-1.5"
                title="Optimize combos under your budget for this kitchen"
              >
                <Sparkles className="w-3.5 h-3.5 text-[var(--dp-color-accent)]" />
                <span>Smart Budget Combos</span>
              </Link>
              {restaurant.categories?.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-[var(--dp-radius-control)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider border-[1.5px] whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-[var(--dp-color-accent)] text-white border-[var(--dp-color-accent)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] -translate-y-0.5'
                      : 'bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] hover:border-[var(--dp-color-ink)]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Menu Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--dp-color-ink-muted)]" />
              <input
                type="text"
                value={menuSearch}
                onChange={(e) => setMenuSearch(e.target.value)}
                placeholder="Search dish in menu..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-[var(--dp-radius-control)] bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[1px_1px_0px_var(--dp-color-line)] text-[var(--dp-color-ink)] placeholder-[var(--dp-color-ink-muted)] font-medium focus:outline-dashed focus:outline-2 focus:outline-[var(--dp-color-annotation)]"
              />
            </div>
          </div>

          {/* Categorized Menu Items */}
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] border-l-4 border-[var(--dp-color-accent)] pl-3 uppercase tracking-wide">
                  {category.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {category.items.map((dish) => (
                    <div
                      key={dish.id}
                      className="p-4 sm:p-5 rounded-2xl bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] shadow-[2px_2px_0px_rgba(56,53,47,0.12)] hover:border-[var(--dp-color-ink)] hover:shadow-[3px_3px_0px_rgba(56,53,47,0.18)] hover:-translate-y-0.5 transition-all flex justify-between gap-4 group"
                    >
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <Badge variant={dish.isVeg ? 'veg' : 'nonveg'}>
                            {dish.isVeg ? 'Pure Veg' : 'Non-Veg'}
                          </Badge>
                          {dish.isChefSpecial && <Badge variant="accent">Chef Special</Badge>}
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] group-hover:text-[var(--dp-color-accent)] transition-colors">
                          {dish.name}
                        </h3>

                        <p className="text-xs text-[var(--dp-color-ink-muted)] line-clamp-2 leading-relaxed font-normal">
                          {dish.description}
                        </p>

                        <div className="pt-2 flex items-center gap-3">
                          <span className="text-base font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                            {formatCurrency(dish.price, 'INR')}
                          </span>
                          <span className="text-[11px] text-[var(--dp-color-ink-muted)] font-mono">
                            • {dish.preparationTimeMinutes} min prep
                          </span>
                        </div>
                      </div>

                      {/* Image & Action */}
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0 flex flex-col justify-end border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)]">
                        {dish.imageUrl ? (
                          <img
                            src={dish.imageUrl}
                            alt={dish.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-[var(--dp-color-ground)]" />
                        )}

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                          <button
                            type="button"
                            onClick={() => handleOpenCustomization(dish)}
                            className="px-3.5 py-1.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] hover:bg-[#852f25] text-white text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider border-[1.5px] border-[var(--dp-color-accent)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] flex items-center gap-1 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                          >
                            <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
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
          <div className="p-4 rounded-2xl bg-[var(--dp-color-scrap)] text-[var(--dp-color-ink)] border-[1.5px] border-[var(--dp-color-ink)] shadow-[3px_3px_0px_var(--dp-color-ink)] flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase font-['Outfit',sans-serif] text-[var(--dp-color-annotation)] font-bold tracking-wider">
                Current Basket
              </span>
              <span className="text-sm font-bold font-['Outfit',sans-serif] text-[var(--dp-color-ink)]">
                {formatCurrency(totals.finalPayable, 'INR')} • {restaurant.name}
              </span>
            </div>

            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="px-5 py-2.5 rounded-[var(--dp-radius-control)] bg-[var(--dp-color-accent)] border-[1.5px] border-[var(--dp-color-accent)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] text-white text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider hover:bg-[#852f25] transition-all cursor-pointer"
            >
              Review Order →
            </button>
          </div>
        </div>
      )}

      {addedItemNotice && (
        <div className="fixed top-24 right-6 z-50 bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-ink)] text-[var(--dp-color-ink)] text-xs font-bold px-4 py-3 rounded-xl shadow-[2px_2px_0px_var(--dp-color-ink)] animate-in fade-in slide-in-from-top-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2d5f3e] border border-[var(--dp-color-line)]" />
          <span>Added <strong className="text-[var(--dp-color-accent)]">{addedItemNotice}</strong> to basket</span>
        </div>
      )}

      <StorefrontFooter />
    </div>
  )
}

export default RestaurantDetailPage
