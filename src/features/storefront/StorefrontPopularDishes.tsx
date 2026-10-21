import React, { useState } from 'react'
import { Plus, Check, Star } from 'lucide-react'
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

import { ChilliDoodle } from '@/components/sketch/SketchDoodles'

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
    <section id="popular-dishes" className="py-12 border-t-2 border-[#121212]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <ChilliDoodle className="w-4 h-4 text-[#FF650D]" />
              <span className="font-['Oswald'] text-xs font-black uppercase tracking-wider text-[#FF650D]">
                Fresh From The Pass
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#121212] font-['Outfit']">
              CURATED DISHES
            </h2>
            <p className="text-sm text-[#5E5854] mt-1 font-medium">
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
                className="bg-white border-[2.5px] border-[#121212] rounded-2xl p-4 shadow-[4px_4px_0px_#121212] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121212] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Dish Image */}
                  <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 border-2 border-[#121212] bg-[#FAF6EE]">
                    <img
                      src={dish.imageUrl}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

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
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white border-2 border-[#121212] text-xs font-black text-[#121212] shadow-[2px_2px_0px_#121212] flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#FFD13B] text-[#121212]" />
                      <span>{dish.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase font-['Oswald'] text-[#FF650D] tracking-wider">
                        {dish.restaurantName}
                      </span>
                      <span className="text-[11px] font-mono text-[#5E5854] font-bold">
                        {dish.prepTimeMinutes} mins
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[#121212] font-['Outfit'] group-hover:text-[#FF650D] transition-colors leading-snug">
                      {dish.name}
                    </h3>

                    <p className="text-xs text-[#5E5854] line-clamp-2 leading-relaxed font-medium">
                      {dish.description}
                    </p>
                  </div>
                </div>

                {/* Price and Add to Cart Action */}
                <div className="pt-4 mt-4 border-t-2 border-[#121212]/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-black font-['Oswald'] tracking-wider text-[#5E5854]">
                      Price
                    </span>
                    <span className="text-lg font-black text-[#121212] font-['Oswald']">
                      {formatCurrency(dish.price, 'INR')}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAdd(dish)}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase font-['Oswald'] tracking-wider border-2 border-[#121212] flex items-center gap-1.5 transition-all cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-500 text-white shadow-[2px_2px_0px_#121212]'
                        : 'bg-[#FF650D] text-white shadow-[3px_3px_0px_#121212] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#121212] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#121212]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 stroke-[3]" />
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
