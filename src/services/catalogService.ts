import type { Restaurant, MenuItem, Coupon, Cuisine, MenuCategory } from '@/types'
import { supabase, isSupabaseConfigured } from '@/lib/supabase'
import { HYDERABAD_EXPANDED_RESTAURANTS } from '@/data/hyderabadExpandedData'

export const INITIAL_RESTAURANTS: Restaurant[] = HYDERABAD_EXPANDED_RESTAURANTS

export const LEGACY_FALLBACK_RESTAURANTS: Restaurant[] = [
  {
    id: 'b0000001-0000-0000-0000-000000000001',
    name: 'Deccan Table',
    slug: 'deccan-table',
    tagline: 'Contemporary Deccani & Telangana heritage cuisine',
    description: 'Rooted in royal Deccani traditions and Telangana spice crafts. Slow-smoked marag, artisanal bagara rice, and hand-ground spice blends.',
    coverImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    logoImage: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    ratingCount: 342,
    priceTier: '₹₹₹₹',
    deliveryTimeEstimateMin: 35,
    deliveryTimeEstimateMax: 50,
    minimumOrderAmount: 600,
    deliveryFee: 80,
    isFeatured: true,
    isOpen: true,
    addressLine: 'Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4325,
    longitude: 78.4072,
    cuisines: [
      { id: 'c-deccani', name: 'Contemporary Deccani', slug: 'contemporary-deccani' },
      { id: 'c-telangana', name: 'Telangana Heritage', slug: 'telangana-heritage' },
    ],
    categories: [
      {
        id: 'cat-d-1',
        restaurantId: 'b0000001-0000-0000-0000-000000000001',
        name: 'Signature Deccani Mains',
        displayOrder: 1,
        items: [
          {
            id: 'm-deccan-1',
            restaurantId: 'b0000001-0000-0000-0000-000000000001',
            categoryId: 'cat-d-1',
            name: 'Slow-Smoked Deccani Marag & Sheermal',
            description: 'Royal Deccani spiced mutton broth simmered overnight with pistachios and cracked black cardamom, paired with warm saffron sheermal.',
            price: 1150,
            imageUrl: 'https://images.unsplash.com/photo-1514944298352-d922a969b828?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isChefSpecial: true,
            isAvailable: true,
            preparationTimeMinutes: 30,
            customizationGroups: [
              {
                id: 'cg-marag-spice',
                menuItemId: 'm-deccan-1',
                name: 'Broth Intensity',
                minSelect: 1,
                maxSelect: 1,
                isRequired: true,
                options: [
                  { id: 'opt-marag-classic', groupId: 'cg-marag-spice', name: 'Classic Velvety (Medium)', additionalPrice: 0, isDefault: true },
                  { id: 'opt-marag-teja', groupId: 'cg-marag-spice', name: 'Guntur Teja Spiced', additionalPrice: 0 },
                ],
              },
              {
                id: 'cg-deccan-bread',
                menuItemId: 'm-deccan-1',
                name: 'Artisanal Accompaniment',
                minSelect: 0,
                maxSelect: 2,
                isRequired: false,
                options: [
                  { id: 'opt-bread-sheermal', groupId: 'cg-deccan-bread', name: 'Extra Saffron Sheermal', additionalPrice: 120 },
                  { id: 'opt-bread-roti', groupId: 'cg-deccan-bread', name: 'Flaky Roomali Roti (2 pcs)', additionalPrice: 70 },
                ],
              },
            ],
          },
          {
            id: 'm-deccan-2',
            restaurantId: 'b0000001-0000-0000-0000-000000000001',
            categoryId: 'cat-d-1',
            name: 'Pothuraju Mutton Sukka & Sourdough Appam',
            description: 'Telangana highway-style pan-roasted tender goat with caramelized shallots, curry leaves, and crispy fermented appam.',
            price: 980,
            imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isChefSpecial: true,
            isAvailable: true,
            preparationTimeMinutes: 24,
            customizationGroups: [
              {
                id: 'cg-sukka-spice',
                menuItemId: 'm-deccan-2',
                name: 'Spice Craft',
                minSelect: 1,
                maxSelect: 1,
                isRequired: true,
                options: [
                  { id: 'opt-sukka-telangana', groupId: 'cg-sukka-spice', name: 'Classic Warangal Pepper', additionalPrice: 0, isDefault: true },
                  { id: 'opt-sukka-mild', groupId: 'cg-sukka-spice', name: 'Subtle Roast (Mild)', additionalPrice: 0 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'b0000002-0000-0000-0000-000000000002',
    name: 'Kumo House',
    slug: 'kumo-house',
    tagline: 'Japanese-inspired dining & robata charcoal art',
    description: 'Bespoke Tokyo-inspired dining in Banjara Hills. Binchotan-grilled skewers, bluefin nigiri, and delicate yuzu glazes.',
    coverImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    logoImage: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    ratingCount: 489,
    priceTier: '₹₹₹',
    deliveryTimeEstimateMin: 30,
    deliveryTimeEstimateMax: 45,
    minimumOrderAmount: 450,
    deliveryFee: 60,
    isFeatured: true,
    isOpen: true,
    addressLine: 'Road No. 12, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4156,
    longitude: 78.4352,
    cuisines: [
      { id: 'c-japanese', name: 'Japanese & Robata', slug: 'japanese-robata' },
      { id: 'c-sushi', name: 'Tokyo Omakase', slug: 'tokyo-omakase' },
    ],
    categories: [
      {
        id: 'cat-u-1',
        restaurantId: 'b0000002-0000-0000-0000-000000000002',
        name: 'Chef Signature Nigiri',
        displayOrder: 1,
        items: [
          {
            id: 'm-umami-1',
            restaurantId: 'b0000002-0000-0000-0000-000000000002',
            categoryId: 'cat-u-1',
            name: 'Truffle Hamachi Nigiri (4 pcs)',
            description: 'Yellowtail kingfish brushed with nikiri soy, finished with fresh black winter truffle and chives.',
            price: 850,
            imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
            isVeg: false,
            isChefSpecial: true,
            isAvailable: true,
            preparationTimeMinutes: 20,
            customizationGroups: [
              {
                id: 'cg-hamachi-wasabi',
                menuItemId: 'm-umami-1',
                name: 'Fresh Grated Wasabi',
                minSelect: 1,
                maxSelect: 1,
                isRequired: true,
                options: [
                  { id: 'opt-wasabi-norm', groupId: 'cg-hamachi-wasabi', name: 'Traditional Shizuoka Wasabi', additionalPrice: 0, isDefault: true },
                  { id: 'opt-wasabi-none', groupId: 'cg-hamachi-wasabi', name: 'No Wasabi', additionalPrice: 0 },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'cat-u-2',
        restaurantId: 'b0000002-0000-0000-0000-000000000002',
        name: 'Robata Charcoal Skewers',
        displayOrder: 2,
        items: [
          {
            id: 'm-umami-2',
            restaurantId: 'b0000002-0000-0000-0000-000000000002',
            categoryId: 'cat-u-2',
            name: 'Charred King Oyster Mushroom Skewers',
            description: 'Robata-grilled mushrooms glazed with garlic-miso tare, sesame crunch, and scallion curls.',
            price: 420,
            imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isChefSpecial: false,
            isAvailable: true,
            preparationTimeMinutes: 18,
          },
        ],
      },
    ],
  },
  {
    id: 'b0000003-0000-0000-0000-000000000003',
    name: 'Forno & Fig',
    slug: 'forno-and-fig',
    tagline: 'Wood-fired sourdough pizza & bronze-die pasta',
    description: 'Artisanal Italian dining in Gachibowli. 72-hour fermented Campanian crusts, pugliese burrata, caramelized Mission figs, and hand-spun pasta.',
    coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    logoImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    ratingCount: 612,
    priceTier: '₹₹',
    deliveryTimeEstimateMin: 25,
    deliveryTimeEstimateMax: 40,
    minimumOrderAmount: 300,
    deliveryFee: 40,
    isFeatured: true,
    isOpen: true,
    addressLine: 'Financial District Road, Gachibowli',
    city: 'Hyderabad',
    latitude: 17.4401,
    longitude: 78.3489,
    cuisines: [
      { id: 'c-italian', name: 'Artisanal Italian', slug: 'artisanal-italian' },
      { id: 'c-pizza', name: 'Wood-Fired Pizza', slug: 'wood-fired-pizza' },
    ],
    categories: [
      {
        id: 'cat-t-1',
        restaurantId: 'b0000003-0000-0000-0000-000000000003',
        name: 'Wood-Fired Neapolitan Pizza',
        displayOrder: 1,
        items: [
          {
            id: 'm-trattoria-1',
            restaurantId: 'b0000003-0000-0000-0000-000000000003',
            categoryId: 'cat-t-1',
            name: 'Burrata & Charred Fig Neapolitan Pizza',
            description: 'San Marzano tomato base, fresh pugliese burrata, caramelized Mission figs, aged balsamic drizzle.',
            price: 720,
            imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isChefSpecial: true,
            isAvailable: true,
            preparationTimeMinutes: 22,
            customizationGroups: [
              {
                id: 'cg-crust',
                menuItemId: 'm-trattoria-1',
                name: 'Crust Preference',
                minSelect: 1,
                maxSelect: 1,
                isRequired: true,
                options: [
                  { id: 'opt-crust-std', groupId: 'cg-crust', name: 'Classic 72hr Sourdough', additionalPrice: 0, isDefault: true },
                  { id: 'opt-crust-charcoal', groupId: 'cg-crust', name: 'Gluten-Free Charcoal Infused (+₹120)', additionalPrice: 120 },
                ],
              },
              {
                id: 'cg-pizza-addons',
                menuItemId: 'm-trattoria-1',
                name: 'Gourmet Toppings',
                minSelect: 0,
                maxSelect: 3,
                isRequired: false,
                options: [
                  { id: 'opt-extra-burrata', groupId: 'cg-pizza-addons', name: 'Extra Whole Pugliese Burrata (+₹180)', additionalPrice: 180 },
                  { id: 'opt-truffle-oil', groupId: 'cg-pizza-addons', name: 'Organic White Truffle Oil Drizzle (+₹90)', additionalPrice: 90 },
                  { id: 'opt-prosciutto', groupId: 'cg-pizza-addons', name: 'Aged Prosciutto di Parma (+₹160)', additionalPrice: 160 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'b0000004-0000-0000-0000-000000000004',
    name: 'Nizami Hearth',
    slug: 'nizami-hearth',
    tagline: 'Hyderabadi & Awadhi-inspired royal banquet',
    description: 'Centuries-old slow-simmered dum preparations, royal saffron biryanis, melt-in-mouth kebabs, and flaky butter kulchas.',
    coverImage: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    logoImage: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    ratingCount: 521,
    priceTier: '₹₹₹₹',
    deliveryTimeEstimateMin: 35,
    deliveryTimeEstimateMax: 50,
    minimumOrderAmount: 500,
    deliveryFee: 70,
    isFeatured: true,
    isOpen: true,
    addressLine: 'Cyber Towers Road, HITEC City',
    city: 'Hyderabad',
    latitude: 17.4504,
    longitude: 78.3808,
    cuisines: [
      { id: 'c-hyderabadi', name: 'Hyderabadi Nizami', slug: 'hyderabadi-nizami' },
      { id: 'c-awadhi', name: 'Royal Awadhi', slug: 'royal-awadhi' },
    ],
    categories: [
      {
        id: 'cat-s-1',
        restaurantId: 'b0000004-0000-0000-0000-000000000004',
        name: 'Royal Heritage Gravies',
        displayOrder: 1,
        items: [
          {
            id: 'm-saffron-1',
            restaurantId: 'b0000004-0000-0000-0000-000000000004',
            categoryId: 'cat-s-1',
            name: '24hr Dal Bukhara & Truffle Kulcha',
            description: 'Slow-simmered black lentils cooked overnight on charcoal, served with flaky truffle butter kulcha.',
            price: 680,
            imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
            isVeg: true,
            isChefSpecial: true,
            isAvailable: true,
            preparationTimeMinutes: 25,
            customizationGroups: [
              {
                id: 'cg-bukhara-spice',
                menuItemId: 'm-saffron-1',
                name: 'Spice Level',
                minSelect: 1,
                maxSelect: 1,
                isRequired: true,
                options: [
                  { id: 'opt-spice-mild', groupId: 'cg-bukhara-spice', name: 'Subtle & Velvety (Mild)', additionalPrice: 0, isDefault: true },
                  { id: 'opt-spice-royal', groupId: 'cg-bukhara-spice', name: 'Classic Royal Spice (Medium)', additionalPrice: 0 },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export const VALID_COUPONS: Coupon[] = [
  {
    code: 'AROWELCOME',
    discountPercentage: 20,
    minOrderValue: 500,
    maxDiscount: 250,
    description: '20% off your inaugural fine-dining order with ARO (up to ₹250)',
  },
  {
    code: 'FLAT100',
    flatDiscount: 100,
    minOrderValue: 800,
    description: 'Flat ₹100 gourmet privilege on orders above ₹800',
  },
  {
    code: 'FIESTA50',
    flatDiscount: 50,
    minOrderValue: 450,
    description: 'Flat ₹50 weekend privilege on sharing menus',
  },
]

export function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return INITIAL_RESTAURANTS.find((r) => r.slug === slug || r.id === slug)
}

export function getAllDishes(): MenuItem[] {
  const dishes: MenuItem[] = []
  INITIAL_RESTAURANTS.forEach((r) => {
    r.categories?.forEach((c) => {
      dishes.push(...c.items)
    })
  })
  return dishes
}

export function validateCouponCode(code: string, subtotal: number): { coupon?: Coupon; error?: string } {
  const normalized = code.trim().toUpperCase()
  const found = VALID_COUPONS.find((c) => c.code === normalized)

  if (!found) {
    return { error: 'Invalid coupon code. Try AROWELCOME or FLAT100.' }
  }

  if (subtotal < found.minOrderValue) {
    return {
      error: `Coupon applies only to orders of ₹${found.minOrderValue} or more. Add ₹${found.minOrderValue - subtotal} to unlock.`,
    }
  }

  return { coupon: found }
}

/**
 * Maps raw PostgreSQL rows from Supabase into typed frontend Restaurant structures
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function mapDatabaseRestaurant(row: any): Restaurant {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cuisines: Cuisine[] = (row.restaurant_cuisines || []).map((rc: any) => ({
    id: rc.cuisine?.id || rc.cuisine_id,
    name: rc.cuisine?.name || 'Cuisine',
    slug: rc.cuisine?.slug || 'cuisine',
    icon: rc.cuisine?.icon || undefined,
  }))

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categories: MenuCategory[] = (row.categories || []).map((cat: any) => ({
    id: cat.id,
    restaurantId: cat.restaurant_id,
    name: cat.name,
    displayOrder: cat.display_order ?? 0,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: (cat.menu_items || []).map((item: any) => ({
      id: item.id,
      restaurantId: item.restaurant_id,
      categoryId: item.category_id,
      name: item.name,
      description: item.description,
      price: Number(item.price),
      imageUrl: item.image_url,
      isVeg: Boolean(item.is_veg),
      isChefSpecial: Boolean(item.is_chef_special),
      isAvailable: Boolean(item.is_available),
      preparationTimeMinutes: item.prep_time_minutes || 20,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      customizationGroups: (item.menu_item_option_groups || []).map((grp: any) => ({
        id: grp.id,
        menuItemId: grp.menu_item_id,
        name: grp.name,
        minSelect: grp.min_select,
        maxSelect: grp.max_select,
        isRequired: Boolean(grp.is_required),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        options: (grp.menu_item_options || []).map((opt: any) => ({
          id: opt.id,
          groupId: opt.group_id,
          name: opt.name,
          additionalPrice: Number(opt.additional_price),
          isDefault: Boolean(opt.is_default),
        })),
      })),
    })),
  }))

  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    tagline: row.tagline,
    description: row.description,
    coverImage: row.cover_image,
    logoImage: row.logo_image || undefined,
    rating: Number(row.rating) || 4.5,
    ratingCount: Number(row.rating_count) || 0,
    priceTier: row.price_tier || '₹₹',
    deliveryTimeEstimateMin: Number(row.delivery_time_min) || 25,
    deliveryTimeEstimateMax: Number(row.delivery_time_max) || 40,
    minimumOrderAmount: Number(row.minimum_order) || 0,
    deliveryFee: Number(row.delivery_fee) || 40,
    isFeatured: Boolean(row.is_featured),
    isOpen: Boolean(row.is_open),
    addressLine: row.address_line,
    city: row.city || 'Hyderabad',
    latitude: Number(row.latitude),
    longitude: Number(row.longitude),
    cuisines,
    categories,
  }
}

/**
 * Fetch all restaurants from live Supabase DB with relations
 */
export async function fetchRestaurants(): Promise<Restaurant[]> {
  if (!isSupabaseConfigured) {
    return INITIAL_RESTAURANTS
  }

  try {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*, restaurant_cuisines(cuisine:cuisines(*)), categories(*, menu_items(*, menu_item_option_groups(*, menu_item_options(*))))')
      .order('rating', { ascending: false })

    if (error || !data || data.length === 0) {
      console.warn('[ARO Catalog] Using fallback catalog data:', error?.message)
      return INITIAL_RESTAURANTS
    }

    return data.map(mapDatabaseRestaurant)
  } catch (err) {
    console.warn('[ARO Catalog] Error fetching from Supabase, using cache:', err)
    return INITIAL_RESTAURANTS
  }
}

/**
 * Fetch a single restaurant by UUID or slug from Supabase
 */
export async function fetchRestaurantByIdOrSlug(idOrSlug: string): Promise<Restaurant | undefined> {
  if (!isSupabaseConfigured) {
    return getRestaurantBySlug(idOrSlug)
  }

  try {
    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(idOrSlug)
    let query = supabase
      .from('restaurants')
      .select('*, restaurant_cuisines(cuisine:cuisines(*)), categories(*, menu_items(*, menu_item_option_groups(*, menu_item_options(*))))')

    if (isUuid) {
      query = query.eq('id', idOrSlug)
    } else {
      query = query.eq('slug', idOrSlug)
    }

    const { data, error } = await query.maybeSingle()
    if (error || !data) {
      return getRestaurantBySlug(idOrSlug)
    }

    return mapDatabaseRestaurant(data)
  } catch {
    return getRestaurantBySlug(idOrSlug)
  }
}

export const MASTER_HYDERABAD_CUISINES: Cuisine[] = [
  { id: 'c0000001-0000-0000-0000-000000000001', name: 'Contemporary Deccani', slug: 'contemporary-deccani', icon: 'Flame' },
  { id: 'c0000002-0000-0000-0000-000000000002', name: 'Japanese & Robata', slug: 'japanese-robata', icon: 'Fish' },
  { id: 'c0000003-0000-0000-0000-000000000003', name: 'Artisanal Italian', slug: 'artisanal-italian', icon: 'Pizza' },
  { id: 'c0000004-0000-0000-0000-000000000004', name: 'Hyderabadi Dum & Awadhi', slug: 'hyderabadi-dum', icon: 'Sparkles' },
  { id: 'c0000005-0000-0000-0000-000000000005', name: 'Telangana Heritage', slug: 'telangana-heritage', icon: 'Flame' },
  { id: 'c0000006-0000-0000-0000-000000000006', name: 'Andhra & Rayalaseema', slug: 'andhra-rayalaseema', icon: 'Flame' },
  { id: 'c0000007-0000-0000-0000-000000000007', name: 'South Indian Tiffins', slug: 'south-indian-tiffins', icon: 'Coffee' },
  { id: 'c0000008-0000-0000-0000-000000000008', name: 'Coastal Seafood & Goan', slug: 'coastal-seafood', icon: 'Fish' },
  { id: 'c0000009-0000-0000-0000-000000000009', name: 'Mughlai & Charminar Grill', slug: 'mughlai-charminar-grill', icon: 'Flame' },
  { id: 'c0000010-0000-0000-0000-000000000010', name: 'Pan-Asian & Dim Sum', slug: 'pan-asian', icon: 'Utensils' },
  { id: 'c0000011-0000-0000-0000-000000000011', name: 'Modern Indian Bistro', slug: 'modern-indian', icon: 'Sparkles' },
  { id: 'c0000012-0000-0000-0000-000000000012', name: 'European Bistro & Patisserie', slug: 'european-bistro', icon: 'Cake' },
  { id: 'c0000013-0000-0000-0000-000000000013', name: 'Pure Vegetarian Gourmet', slug: 'pure-vegetarian', icon: 'Leaf' },
  { id: 'c0000014-0000-0000-0000-000000000014', name: 'Craft Brewery & Gastropub', slug: 'craft-brewery', icon: 'Beer' },
]

/**
 * Fetch all active cuisines
 */
export async function fetchCuisines(): Promise<Cuisine[]> {
  if (!isSupabaseConfigured) {
    return MASTER_HYDERABAD_CUISINES
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { data, error } = await supabase.from('cuisines').select('*').order('name')
    if (error || !data || data.length === 0) {
      return MASTER_HYDERABAD_CUISINES
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map((c: any) => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      icon: c.icon || undefined,
    }))
  } catch {
    return MASTER_HYDERABAD_CUISINES
  }
}


