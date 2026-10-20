import React, { useState } from 'react'
import { Plus, Check, Star, Sparkles } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Badge } from '@/components/common/Badge'
import { formatCurrency } from '@/lib/utils'

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
}

export const StorefrontPopularDishes: React.FC<StorefrontPopularDishesProps> = ({
  onAddToCart,
  vegOnly = false,
}) => {
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({})

  const handleAdd = (dish: DishItem) => {
    onAddToCart?.(dish)
    setAddedIds((prev) => ({ ...prev, [dish.id]: true }))
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [dish.id]: false }))
    }, 1500)
  }

  const displayedDishes = vegOnly
    ? curatedDishes.filter((d) => d.isVeg)
    : curatedDishes

  return (
    <section id="popular-dishes" className="py-12 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5733]/10 border border-[#ff5733]/20 text-xs text-[#ff7854] font-medium mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chef Selections</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Outfit']">
              Curated Masterpieces
            </h2>
            <p className="text-sm text-[#8e95a5] mt-1">
              Iconic dishes prepared fresh by master chefs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDishes.map((dish) => {
            const isAdded = addedIds[dish.id]
            return (
              <Card
                key={dish.id}
                variant="surface"
                className="p-4 border-[#262a34] hover:border-[#ff5733]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Dish Image */}
                  <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4">
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/30" />

                    {/* Veg / Non-Veg Indicator */}
                    <div className="absolute top-3 left-3">
                      <Badge variant={dish.isVeg ? 'veg' : 'nonveg'}>
                        {dish.isVeg ? 'Pure Veg' : 'Non-Veg'}
                      </Badge>
                    </div>

                    {/* Chef Special Badge */}
                    {dish.isChefSpecial && (
                      <div className="absolute top-3 right-3">
                        <Badge variant="accent">Chef Special</Badge>
                      </div>
                    )}

                    {/* Rating Pill */}
                    <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-md text-xs font-semibold text-amber-400 flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{dish.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-[#ff7854] tracking-wide uppercase">
                        {dish.restaurantName}
                      </span>
                      <span className="text-[11px] text-[#8e95a5]">
                        {dish.prepTimeMinutes} mins
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white font-['Outfit'] group-hover:text-[#ff7854] transition-colors leading-snug">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-[#8e95a5] line-clamp-2 leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </div>

                {/* Price and Add to Cart Action */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[#8e95a5]">
                      Price
                    </span>
                    <span className="text-lg font-bold text-white font-['Outfit']">
                      {formatCurrency(dish.price, 'INR')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAdd(dish)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                        : 'bg-[#ff5733] text-white hover:bg-[#e04826] shadow-md shadow-[#ff5733]/25 active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StorefrontPopularDishes
