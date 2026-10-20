import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StorefrontNavbar } from './StorefrontNavbar'
import { StorefrontHero } from './StorefrontHero'
import { StorefrontCategories } from './StorefrontCategories'
import { StorefrontFeaturedRestaurants } from './StorefrontFeaturedRestaurants'
import { StorefrontPopularDishes, type DishItem } from './StorefrontPopularDishes'
import { StorefrontOffers } from './StorefrontOffers'
import { StorefrontFooter } from './StorefrontFooter'
import { CartConflictModal } from '@/components/common/CartConflictModal'
import { useCart } from '@/context/CartContext'
import { INITIAL_RESTAURANTS } from '@/services/catalogService'
import { Check, ArrowRight } from 'lucide-react'
import type { MenuItem } from '@/types'

export const StorefrontPage: React.FC = () => {
  const navigate = useNavigate()
  const { addToCart, totals, conflict, resolveConflict } = useCart()
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all')
  const [vegOnly, setVegOnly] = useState<boolean>(false)
  const [lastAddedDish, setLastAddedDish] = useState<DishItem | null>(null)

  const handleAddToCart = (dish: DishItem) => {
    // Match restaurant in catalog
    const restaurant =
      INITIAL_RESTAURANTS.find((r) =>
        r.name.toLowerCase().includes(dish.restaurantName.toLowerCase())
      ) || INITIAL_RESTAURANTS[0]

    // Construct or match MenuItem
    const menuItem: MenuItem = {
      id: dish.id,
      restaurantId: restaurant.id,
      categoryId: 'cat-general',
      name: dish.name,
      description: dish.description,
      price: dish.price,
      imageUrl: dish.imageUrl,
      isVeg: dish.isVeg,
      isChefSpecial: dish.isChefSpecial,
      isAvailable: true,
      preparationTimeMinutes: dish.prepTimeMinutes,
      customizationGroups: [],
    }

    addToCart(menuItem, [], 1)
    setLastAddedDish(dish)
    setTimeout(() => setLastAddedDish(null), 3000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#211A19] text-[#FFF0D5]">
      {/* Sticky Storefront Navbar */}
      <StorefrontNavbar
        cartCount={totals.itemTotal > 0 ? 1 : 0}
        onSearchChange={(query) => {
          if (query.length > 2) {
            const el = document.getElementById('popular-dishes')
            el?.scrollIntoView({ behavior: 'smooth' })
          }
        }}
      />

      <main className="flex-1">
        {/* Curated Editorial Hero */}
        <StorefrontHero
          selectedCuisine={selectedCuisine}
          onSelectCuisine={(slug) => setSelectedCuisine(slug)}
          vegOnly={vegOnly}
          onToggleVegOnly={() => setVegOnly((prev) => !prev)}
        />

        {/* Culinary Categories */}
        <StorefrontCategories
          onSelectCategory={(slug) => {
            setSelectedCuisine(slug)
            const el = document.getElementById('popular-dishes')
            el?.scrollIntoView({ behavior: 'smooth' })
          }}
        />

        {/* Featured Restaurants */}
        <StorefrontFeaturedRestaurants
          onSelectRestaurant={(slug) => {
            navigate(`/restaurants/${slug}`)
          }}
        />

        {/* Curated Masterpieces (Dishes) */}
        <StorefrontPopularDishes
          onAddToCart={handleAddToCart}
          vegOnly={vegOnly}
        />

        {/* Special Privileges & Offers */}
        <StorefrontOffers />
      </main>

      {/* Floating Cart Toast notification */}
      {lastAddedDish && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#2E2423]/95 backdrop-blur-xl border border-[#FF650D]/50 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-white">
              Added to order
            </span>
            <span className="text-[11px] text-[#A89A97] max-w-[180px] truncate">
              {lastAddedDish.name}
            </span>
          </div>
          <button
            type="button"
            onClick={() => navigate('/cart')}
            className="ml-2 px-3 py-1.5 rounded-lg bg-[#FF650D] text-white text-xs font-semibold hover:bg-[#E55400] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>View Cart</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Single-Restaurant Basket Conflict Modal */}
      {conflict && (
        <CartConflictModal
          isOpen={Boolean(conflict)}
          currentRestaurantName={conflict.currentRestaurantName}
          newRestaurantName={conflict.newRestaurantName}
          onCancel={() => resolveConflict(false)}
          onReplace={() => resolveConflict(true)}
        />
      )}

      {/* Customer Footer */}
      <StorefrontFooter />
    </div>
  )
}

export default StorefrontPage
