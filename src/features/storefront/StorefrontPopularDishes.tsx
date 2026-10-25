import React, { useState } from 'react'
import { Plus, Check, Star } from 'lucide-react'
import { Badge } from '@/components/common/Badge'
import { formatCurrency } from '@/lib/utils'
import { ChilliDoodle } from '@/components/sketch/SketchDoodles'

export interface DishItem {
  id: string
  name: string
  restaurantName: string
  description: string
  price: number
  imageUrl: string
  isVeg: boolean
  isChefSpecial?: boolean
  rating: number
  prepTimeMinutes: number
}

const curatedDishes: DishItem[] = [
  {
    id: 'dish-1',
    name: 'Truffle Hamachi Nigiri (4 pcs)',
    restaurantName: 'Kumo House',
    description: 'Yellowtail kingfish brushed with nikiri soy, finished with black winter truffle and chives.',
    price: 850,
    imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    isChefSpecial: true,
    rating: 4.9,
    prepTimeMinutes: 20,
  },
  {
    id: 'dish-2',
    name: 'Burrata & Charred Fig Neapolitan Pizza',
    restaurantName: 'Forno & Fig',
    description: '72hr fermented San Marzano dough, Puglia burrata, mission figs, and aged balsamic glaze.',
    price: 720,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    rating: 4.8,
    prepTimeMinutes: 22,
  },
  {
    id: 'dish-3',
    name: 'Charred King Oyster Mushroom Skewers',
    restaurantName: 'Kumo House',
    description: 'Robata charcoal grilled oyster mushrooms glazed with garlic-miso tare and sesame crunch.',
    price: 420,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    rating: 4.7,
    prepTimeMinutes: 18,
  },
  {
    id: 'dish-4',
    name: 'Slow-Smoked Deccani Marag & Sheermal',
    restaurantName: 'Deccan Table',
    description: 'Royal Deccani spiced mutton broth simmered overnight with pistachios, paired with warm saffron sheermal.',
    price: 1150,
    imageUrl: 'https://images.unsplash.com/photo-1514944298352-d922a969b828?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    isChefSpecial: true,
    rating: 5.0,
    prepTimeMinutes: 30,
  },
  {
    id: 'dish-5',
    name: 'Nizami Shahi Gosht Dum Biryani',
    restaurantName: 'Nizami Hearth',
    description: 'Aged long-grain basmati, tender lamb cuts, saffron dum milk, and fried onions with burani raita.',
    price: 820,
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    isVeg: false,
    rating: 4.9,
    prepTimeMinutes: 25,
  },
  {
    id: 'dish-6',
    name: 'Pistachio Irani Mawa Tart',
    restaurantName: 'Deccan Table',
    description: 'Slow-reduced spiced mawa crust, ceremonial grade Iranian pistachios, and silver vark.',
    price: 450,
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    rating: 4.9,
    prepTimeMinutes: 15,
  },
]

interface StorefrontPopularDishesProps {
  onAddToCart?: (dish: DishItem) => void
  vegOnly?: boolean
  selectedCuisine?: string
}

export const StorefrontPopularDishes: React.FC<StorefrontPopularDishesProps> = ({
  onAddToCart,
  vegOnly = false,
  selectedCuisine = 'all',
}) => {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({})

  const handleAdd = (dish: DishItem) => {
    onAddToCart?.(dish)
    setAddedIds((prev) => ({ ...prev, [dish.id]: true }))
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [dish.id]: false }))
    }, 1500)
  }

  const cuisineFiltered =
    selectedCuisine && selectedCuisine !== 'all'
      ? curatedDishes.filter((d) => {
          if (selectedCuisine === 'hyderabadi-dum') return /biryani|marag|nizami/i.test(d.name)
          if (selectedCuisine === 'japanese-robata') return /hamachi|mushroom|nigiri|robata/i.test(d.name)
          if (selectedCuisine === 'artisanal-italian') return /pizza|burrata|italian/i.test(d.name)
          if (selectedCuisine === 'contemporary-deccani') return /deccani|marag|tart|irani/i.test(d.name)
          return true
        })
      : curatedDishes

  const finalPool = cuisineFiltered.length > 0 ? cuisineFiltered : curatedDishes

  const displayedDishes = vegOnly
    ? finalPool.filter((d) => d.isVeg)
    : finalPool

  return (
    <section id="popular-dishes" className="py-12 border-t-[1.5px] border-[var(--dp-color-line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <ChilliDoodle className="w-4 h-4 text-[var(--dp-color-accent)]" />
              <span className="font-['Outfit',sans-serif] text-xs font-bold uppercase tracking-wider text-[var(--dp-color-annotation)]">
                Fresh From The Pass
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
              CURATED DISHES
            </h2>
            <p className="text-sm text-[var(--dp-color-ink-muted)] mt-1 font-normal font-['Outfit',sans-serif]">
              Signature recipes crafted with uncompromising precision and premium ingredients
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDishes.map((dish) => {
            const isAdded = addedIds[dish.id]
            return (
              <div
                key={dish.id}
                className="bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] rounded-2xl p-4 shadow-[2px_2px_0px_rgba(56,53,47,0.12)] hover:border-[var(--dp-color-ink)] hover:shadow-[3px_3px_0px_rgba(56,53,47,0.18)] hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Dish Image */}
                  <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 border-[1.5px] border-[var(--dp-color-line)] bg-[var(--dp-color-ground)]">
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--dp-color-ink)]/60 via-transparent to-transparent" />

                    {/* Veg / Non-Veg Indicator */}
                    <div className="absolute top-2.5 left-2.5">
                      <Badge variant={dish.isVeg ? 'veg' : 'nonveg'}>
                        {dish.isVeg ? 'Veg' : 'Non-Veg'}
                      </Badge>
                    </div>

                    {/* Chef Special Badge */}
                    {dish.isChefSpecial && (
                      <div className="absolute top-2.5 right-2.5">
                        <Badge variant="accent">Special</Badge>
                      </div>
                    )}

                    {/* Rating Pill */}
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[var(--dp-color-scrap)] border-[1.5px] border-[var(--dp-color-line)] text-xs font-bold text-[var(--dp-color-ink)] shadow-[1px_1px_0px_var(--dp-color-line)] flex items-center gap-1 font-['Outfit',sans-serif]">
                      <Star className="w-3.5 h-3.5 fill-[var(--dp-color-accent)] text-[var(--dp-color-accent)]" />
                      <span>{dish.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase font-['Outfit',sans-serif] text-[var(--dp-color-accent)] tracking-wider">
                        {dish.restaurantName}
                      </span>
                      <span className="text-[11px] font-mono text-[var(--dp-color-ink-muted)] font-medium">
                        {dish.prepTimeMinutes} mins
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[var(--dp-color-ink)] font-['Outfit',sans-serif] group-hover:text-[var(--dp-color-accent)] transition-colors leading-snug">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-[var(--dp-color-ink-muted)] line-clamp-2 leading-relaxed font-normal font-['Outfit',sans-serif]">
                      {dish.description}
                    </p>
                  </div>
                </div>

                {/* Price and Add to Cart Action */}
                <div className="pt-4 mt-4 border-t-[1.5px] border-[var(--dp-color-line)]/50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--dp-color-ink-muted)] font-['Outfit',sans-serif]">
                      Price
                    </span>
                    <span className="text-lg font-black text-[var(--dp-color-ink)] font-['Outfit',sans-serif]">
                      {formatCurrency(dish.price, 'INR')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAdd(dish)}
                    className={`px-4 py-2 rounded-[var(--dp-radius-control)] text-xs font-bold uppercase font-['Outfit',sans-serif] tracking-wider border-[1.5px] flex items-center gap-1.5 transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-[#2d5f3e] text-white border-[#2d5f3e] shadow-[1px_1px_0px_var(--dp-color-ink)]'
                        : 'bg-[var(--dp-color-accent)] text-white border-[var(--dp-color-accent)] shadow-[1.5px_1.5px_0px_var(--dp-color-ink)] hover:bg-[#852f25] hover:-translate-y-0.5 active:translate-y-0.5'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                        <span>Add To Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StorefrontPopularDishes
