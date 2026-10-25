import type { Restaurant, MenuItem } from '@/types'

export interface FoodCategoryDef {
  id: string
  slug: string
  aliases: string[]
  name: string
  shortName: string
  tagline: string
  stickerText: string
  countText: string
  imageUrl: string
  matchesItem: (item: MenuItem | { name: string; description: string; categoryName?: string }) => boolean
  matchesRestaurant: (restaurant: Restaurant) => boolean
}

export const CRAVING_CATEGORIES: FoodCategoryDef[] = [
  {
    id: 'cat-biryani',
    slug: 'biryani',
    aliases: ['biryani', 'hyderabadi-dum', 'dum-biryani'],
    name: 'Hyderabadi Dum Biryani',
    shortName: 'Biryani',
    tagline: 'Aromatic basmati, slow embers & royal saffron',
    stickerText: '★ ROYAL HERITAGE',
    countText: '48+ Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=700&q=80',
    matchesItem: (item) => {
      const text = `${item.name} ${item.description || ''}`
      return (
        /\b(biryani|dum biryani|gosht dum|sufiyani biryani|bagara|marag|haleem|dum pukht)\b/i.test(text) &&
        !/\b(burger|pizza|dosa|idli|dim sum|bao|tart)\b/i.test(item.name)
      )
    },
    matchesRestaurant: (r) => {
      return (
        (r.cuisines || []).some(
          (c) =>
            c.slug === 'hyderabadi-dum' ||
            c.slug === 'mughlai-charminar-grill' ||
            /biryani|dum|awadhi/i.test(c.name)
        ) || /biryani|bawarchi|shadab|bahar|paradise|nizami|shaghouse|pista house/i.test(r.name)
      )
    },
  },
  {
    id: 'cat-south-indian',
    slug: 'south-indian',
    aliases: ['south-indian', 'south-indian-tiffins', 'dosas', 'dosa'],
    name: 'South Indian & Dosas',
    shortName: 'South Indian',
    tagline: 'Fermented ghee roasts, fluffy idlis & artisanal chutneys',
    stickerText: '🌿 100% PURE CRISP',
    countText: '36+ Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80',
    matchesItem: (item) => {
      const text = `${item.name} ${item.description || ''}`
      return (
        /\b(dosa|dosas|tiffin|tiffins|idli|idlis|vada|vadas|uttapam|uttapams|pesarattu|appam|sambar|karampodi|chutneys|filter coffee)\b/i.test(text) &&
        !/\b(burger|pizza|biryani|dim sum)\b/i.test(item.name)
      )
    },
    matchesRestaurant: (r) => {
      return (
        (r.cuisines || []).some(
          (c) =>
            c.slug === 'south-indian-tiffins' ||
            /south indian|tiffin/i.test(c.name)
        ) || /chutneys|minerva|aidu/i.test(r.name)
      )
    },
  },
  {
    id: 'cat-burgers',
    slug: 'burgers',
    aliases: ['burgers', 'burger', 'craft-brewery', 'smash-burgers'],
    name: 'Gourmet Smash Burgers',
    shortName: 'Burgers',
    tagline: 'Caramelized crusts, brioche, smash patties & melted cheese',
    stickerText: '🔥 SIZZLING SMASH',
    countText: '28+ Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
    matchesItem: (item) => {
      const text = `${item.name} ${item.description || ''}`
      return (
        /\b(burger|burgers|smash burger|slider|sliders|cheeseburger)\b/i.test(text) &&
        !/\b(kebab|galouti|shikampuri|tikka|biryani|curry|pulao|avocado toast)\b/i.test(item.name)
      )
    },
    matchesRestaurant: (r) => {
      return (
        (r.cuisines || []).some((c) => c.slug === 'craft-brewery' || /brewery|gastropub|burger/i.test(c.name)) ||
        /churrolto|autumn leaf|broadway|absolute barbecues/i.test(r.name)
      )
    },
  },
  {
    id: 'cat-pizza',
    slug: 'pizza',
    aliases: ['pizza', 'artisanal-italian', 'pizzas', 'wood-fired'],
    name: 'Wood-Fired Pizza',
    shortName: 'Pizza',
    tagline: 'San Marzano tomatoes, buffalo mozzarella & charred leopard crust',
    stickerText: '🍕 LEOPARD CRUST',
    countText: '32+ Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
    matchesItem: (item) => {
      const text = `${item.name} ${item.description || ''}`
      return (
        /\b(pizza|pizzas|neapolitan|margherita|burrata.*pizza|calzone|focaccia|wood-fired)\b/i.test(text)
      )
    },
    matchesRestaurant: (r) => {
      return (
        (r.cuisines || []).some((c) => c.slug === 'artisanal-italian' || /italian|pizza/i.test(c.name)) ||
        /forno|olive bistro|tre-forni|little italy|flechazo/i.test(r.name)
      )
    },
  },
  {
    id: 'cat-momos',
    slug: 'momos',
    aliases: ['momos', 'dumplings', 'pan-asian', 'japanese-robata', 'dim-sum'],
    name: 'Momos & Dumplings',
    shortName: 'Momos / Dim Sum',
    tagline: 'Steaming momos, crystal dim sum, bao & delicate gyoza',
    stickerText: '🥢 HANDMADE DAILY',
    countText: '25+ Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=700&q=80',
    matchesItem: (item) => {
      const text = `${item.name} ${item.description || ''}`
      return (
        /\b(momo|momos|dumpling|dumplings|dim sum|bao|gyoza|gyozas|wonton|wontons|har gow|sui mai)\b/i.test(text) &&
        !/\b(gulab jamun|rasgulla|pulao|biryani|handi|kebab)\b/i.test(item.name)
      )
    },
    matchesRestaurant: (r) => {
      return (
        (r.cuisines || []).some(
          (c) => c.slug === 'pan-asian' || /dim sum|asian/i.test(c.name)
        ) || /haïku|haiku|tatva|farzi/i.test(r.name)
      )
    },
  },
  {
    id: 'cat-drinks',
    slug: 'drinks',
    aliases: ['drinks', 'beverages', 'european-bistro', 'beverage'],
    name: 'Drinks & Beverages',
    shortName: 'Drinks',
    tagline: 'Craft sodas, cold-pressed brews, lassis, teas & sherbets',
    stickerText: '🧊 REFRESHING BREW',
    countText: '40+ Specialties',
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80',
    matchesItem: (item) => {
      const text = `${item.name} ${item.description || ''}`
      return (
        /\b(drink|drinks|beverage|beverages|brew|brews|kombucha|cooler|coolers|cocktail|cocktails|mocktail|mocktails|shake|shakes|milkshake|tea|chai|coffee|cold brew|pour over|espresso|latte|cappuccino|lassi|sherbet|sharbat|soda|lemonade|mojito|smoothie|tisane)\b/i.test(text) &&
        !/\b(tiramisu|tart|tarts|mochi|biscuit|biscuits|cake|gateau|tub|marag|korma|biryani|curry|pulao|mutton|chicken tikka|naan|roti|pizza|burger|dosa|idli)\b/i.test(item.name)
      )
    },
    matchesRestaurant: (r) => {
      // Matches restaurants that have drink dishes or cafes
      return /roastery|conçū|concu|autumn leaf|broadway/i.test(r.name)
    },
  },
]

/**
 * Resolve a URL slug or alias to the canonical category definition
 */
export function getCategoryBySlug(slug: string | null | undefined): FoodCategoryDef | undefined {
  if (!slug || slug === 'all') return undefined
  const cleanSlug = slug.toLowerCase().trim()
  return CRAVING_CATEGORIES.find(
    (c) => c.slug === cleanSlug || c.aliases.includes(cleanSlug)
  )
}

export interface MatchedDishWithRestaurant extends MenuItem {
  restaurantName: string
  restaurantSlug: string
  restaurantRating: number
  restaurantDeliveryMin: number
}

/**
 * Filter restaurants and extract matching individual dishes for a category
 */
export function filterCategoryResults(
  restaurants: Restaurant[],
  categorySlug: string | undefined
): {
  categoryDef?: FoodCategoryDef
  matchingRestaurants: Restaurant[]
  matchingDishes: MatchedDishWithRestaurant[]
} {
  const categoryDef = getCategoryBySlug(categorySlug)

  if (!categoryDef) {
    return {
      categoryDef: undefined,
      matchingRestaurants: restaurants,
      matchingDishes: [],
    }
  }

  const matchingDishes: MatchedDishWithRestaurant[] = []
  const matchingRestaurants: Restaurant[] = []

  restaurants.forEach((restaurant) => {
    let restaurantHasMatchingDish = false

    ;(restaurant.categories || []).forEach((cat) => {
      ;(cat.items || []).forEach((item) => {
        if (categoryDef.matchesItem(item)) {
          restaurantHasMatchingDish = true
          matchingDishes.push({
            ...item,
            restaurantName: restaurant.name,
            restaurantSlug: restaurant.slug,
            restaurantRating: restaurant.rating,
            restaurantDeliveryMin: restaurant.deliveryTimeEstimateMin,
          })
        }
      })
    })

    if (restaurantHasMatchingDish || categoryDef.matchesRestaurant(restaurant)) {
      matchingRestaurants.push(restaurant)
    }
  })

  return {
    categoryDef,
    matchingRestaurants,
    matchingDishes,
  }
}
