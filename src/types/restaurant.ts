export type PriceTier = '₹' | '₹₹' | '₹₹₹' | '₹₹₹₹'

export interface Cuisine {
  id: string
  name: string
  slug: string
  icon?: string
}

export interface CustomizationOption {
  id: string
  groupId: string
  name: string
  additionalPrice: number
  isDefault?: boolean
}

export interface CustomizationGroup {
  id: string
  menuItemId: string
  name: string
  minSelect: number
  maxSelect: number
  isRequired: boolean
  options: CustomizationOption[]
}

export interface MenuItem {
  id: string
  restaurantId: string
  categoryId: string
  name: string
  description: string
  price: number
  imageUrl?: string
  isVeg: boolean
  isChefSpecial?: boolean
  isAvailable: boolean
  preparationTimeMinutes: number
  customizationGroups?: CustomizationGroup[]
}

export interface MenuCategory {
  id: string
  restaurantId: string
  name: string
  displayOrder: number
  items: MenuItem[]
}

export interface Restaurant {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  coverImage: string
  logoImage?: string
  rating: number
  ratingCount: number
  priceTier: PriceTier
  deliveryTimeEstimateMin: number
  deliveryTimeEstimateMax: number
  minimumOrderAmount: number
  deliveryFee: number
  isFeatured: boolean
  isOpen: boolean
  addressLine: string
  city: string
  latitude: number
  longitude: number
  cuisines: Cuisine[]
  categories?: MenuCategory[]
}

export interface RestaurantFilterOptions {
  searchQuery?: string
  cuisineSlugs?: string[]
  isVegOnly?: boolean
  sortBy?: 'featured' | 'rating' | 'deliveryTime' | 'priceAsc' | 'priceDesc'
  priceTiers?: PriceTier[]
}
