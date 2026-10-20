// scratch/restaurants_part3.js
// Restaurants 25 to 36

const PART3 = [
  // 25. Jewel of Nizam - The Minar (Gandipet)
  {
    index: 25,
    name: 'Jewel of Nizam - The Minar',
    slug: 'jewel-of-nizam',
    tagline: 'Palatial 100-foot tower dining & royal Nizami banquets',
    description: 'Hyderabad’s iconic royal sanctuary at The Golkonda Resort, offering regal dining overlooking Osman Sagar lake. Renowned for Barkas Pathar Ka Gosht, Subz Dum Biryani, and Anokhi Kheer.',
    cover_image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    rating_count: 670,
    price_tier: '₹₹₹₹',
    delivery_time_min: 40,
    delivery_time_max: 60,
    minimum_order: 800,
    delivery_fee: 95,
    packaging_fee: 35,
    is_featured: true,
    is_open: true,
    address_line: 'The Golkonda Resort, Sagar Mahal Complex, Gandipet',
    city: 'Hyderabad',
    latitude: 17.3912000,
    longitude: 78.3285000,
    cuisines: ['hyderabadi-dum', 'contemporary-deccani'],
    public_source: 'thegolkondaresort.com / EazyDiner Luxury Hyderabad',
    categories: [
      {
        name: 'Royal Nizami Starters',
        slug: 'nizam-starters',
        items: [
          { name: 'Barkas Pathar Ka Gosht', description: 'Mutton scallops marinated in green papaya and secret Nizam spices, cooked on heated granite stone.', price: 920, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Dahi Ke Shikampuri Kebab (4 pcs)', description: 'Velvety hung curd patties stuffed with caramelized mint and pomegranate, cooked on low griddle.', price: 620, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Murgh Nizami Boti Kebab', description: 'Boneless chicken cubes steeped in saffron, mace, and royal cumin, charcoal grilled.', price: 680, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Subz Moti Seekh', description: 'Spiced vegetable and cottage cheese skewers coated with crisp pearls of roasted corn.', price: 540, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Palatial Shahi Mains',
        slug: 'nizam-mains',
        items: [
          { name: 'Kacchi Dum Gosht Biryani Khaas', description: 'Aged basmati layered with tender baby lamb marinated in royal spices, slow-steamed in a sealed earthenware degh.', price: 980, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Murgh Dum Korma Jahanara', description: 'Chicken simmered in velvety almond, cashew, and saffron gravy with fragrant screwpine essence.', price: 790, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Nalli Nihari Asaf Jahi', description: 'Pot-roasted lamb shanks simmered overnight in 32-herb broth with bone marrow garnish.', price: 1150, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 32 },
          { name: 'Paneer Kundan Qaliya', description: 'Silken cottage cheese batons cooked in yellow chili, melon seed, and saffron reduction.', price: 680, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Shahi Breads & Pulao',
        slug: 'nizam-breads',
        items: [
          { name: 'Zafrani Sheermal (2 pcs)', description: 'Royal saffron flatbread enriched with milk, butter, and green cardamom.', price: 260, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Warqi Paratha (2 pcs)', description: 'Crisp multi-layered bread baked on copper tawa.', price: 190, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Subz Moti Pulao Handi', description: 'Aged basmati rice cooked with winter vegetables, baby corn, and aromatic kewra.', price: 540, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Mirchi Ka Salan Khaas', description: 'Royal Bhavnagri chili gravy enriched with roasted sesame and coconut paste.', price: 240, image_url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Royal Desserts',
        slug: 'nizam-desserts',
        items: [
          { name: 'Anokhi Kheer (Royal Garlic Dessert)', description: 'Candidate garlic cloves blanched seven times and simmered in sweet condensed milk with silver leaf.', price: 440, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Khubani Ka Meetha with Clotted Malai', description: 'Stewed Turkish apricots with clotted cream and roasted almond slivers.', price: 420, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Badam Ka Harira (Almond Elixir)', description: 'Warm comforting almond and cardamom drink simmered with pure ghee.', price: 260, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 26. AB's - Absolute Barbecues (Inorbit Mall Road, Madhapur)
  {
    index: 26,
    name: "AB's - Absolute Barbecues",
    slug: 'absolute-barbecues',
    tagline: 'Live table grills, Wish Grill & barbecue feast',
    description: 'The energetic barbecue pioneer in Madhapur featuring live charcoal table skewers, Brazilian churrasco pineapple, and exotic meats.',
    cover_image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 2210,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 350,
    delivery_fee: 45,
    packaging_fee: 20,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 22, Inorbit Mall Road, Vittal Rao Nagar, Madhapur',
    city: 'Hyderabad',
    latitude: 17.4385000,
    longitude: 78.3871000,
    cuisines: ['craft-brewery', 'mughlai-charminar-grill'],
    public_source: 'absolutebarbecues.com / Zomato Madhapur',
    categories: [
      {
        name: 'Live Grill Skewers & Starters',
        slug: 'abs-skewers',
        items: [
          { name: 'Cinnamon Spiced Churrasco Pineapple', description: 'Brazilian-style roasted pineapple skewers glazed with cinnamon sugar and honey.', price: 320, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 14 },
          { name: 'ABs Peri Peri Grilled Chicken Skewers', description: 'Chicken chunks marinated in tangy peri-peri dry rub and char-grilled.', price: 460, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Country BBQ Wings (6 pcs)', description: 'Crisp chicken wings tossed in smoky hickory barbecue glaze.', price: 420, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 16 },
          { name: 'Coastal BBQ Prawns Skewers', description: 'Prawns marinated with curry leaves and coastal spices, grilled over live charcoal.', price: 560, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 }
        ]
      },
      {
        name: 'Mains & Biryanis',
        slug: 'abs-mains',
        items: [
          { name: 'ABs Signature Chicken Dum Biryani Bowl', description: 'Rich spiced biryani rice layered with tandoor grilled chicken and boiled egg.', price: 390, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Mutton Rogan Josh Special', description: 'Kashmiri style slow-simmered tender lamb curry.', price: 480, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Paneer Butter Masala', description: 'Cottage cheese cubes in creamy tomato and butter gravy.', price: 380, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Dal Makhani Smokey Handi', description: 'Slow cooked black lentils with churned butter and cream.', price: 320, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Breads & Rice',
        slug: 'abs-breads',
        items: [
          { name: 'Garlic Butter Naan (2 pcs)', description: 'Tandoor baked leavened bread brushed with garlic and butter.', price: 120, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Lacha Paratha (2 pcs)', description: 'Multi-layered flaky wheat bread.', price: 110, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Jeera Rice with Fried Onions', description: 'Steamed basmati rice tempered with roasted cumin seeds.', price: 210, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Desserts',
        slug: 'abs-desserts',
        items: [
          { name: 'Hot Angoori Gulab Jamun (6 mini pcs)', description: 'Mini cottage cheese balls soaked in warm rose syrup.', price: 160, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Cold Nitrogen Brownie Delight', description: 'Dense fudge brownie topped with dark chocolate sauce.', price: 210, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Mango Lassi Bottle', description: 'Creamy yogurt churned with Alphonso mango pulp.', price: 140, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 27. Exotica (Banjara Hills)
  {
    index: 27,
    name: 'Exotica',
    slug: 'exotica',
    tagline: 'Rooftop green sanctuary with North Indian & Mughlai fine dining',
    description: 'A lush rooftop garden haven on Road No. 12, Banjara Hills, celebrated for fragrant tandoori kebabs, royal Mughlai curries, and panoramic city views.',
    cover_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 1390,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 450,
    delivery_fee: 60,
    packaging_fee: 25,
    is_featured: false,
    is_open: true,
    address_line: '5th Floor, 12th Square, Road No. 12, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4162000,
    longitude: 78.4348000,
    cuisines: ['mughlai-charminar-grill', 'modern-indian'],
    public_source: 'exoticarestaurants.com / Zomato Banjara Hills',
    categories: [
      {
        name: 'Sigri Kebabs & Charcoal Starters',
        slug: 'exotica-kebabs',
        items: [
          { name: 'Murgh Malai Kebab Exotica', description: 'Chicken supreme marinated in cream cheese, cardamom, and roasted garlic, cooked over white coals.', price: 540, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Zafrani Paneer Tikka (4 pcs)', description: 'Thick cubes of cottage cheese soaked in saffron marinade, grilled with bell peppers.', price: 460, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Kakori Kebab (4 pcs)', description: 'Tender minced mutton rolls with clove smoke and rose water essence.', price: 620, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Tandoori Soya Chaap', description: 'Soya ribs marinated in spicy hung curd and roasted in clay tandoor.', price: 390, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 }
        ]
      },
      {
        name: 'Mughlai & Heritage Mains',
        slug: 'exotica-mains',
        items: [
          { name: 'Exotica Special Dal Makhani', description: 'Overnight charcoal simmered whole urad dal with churned butter and cream.', price: 440, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 16 },
          { name: 'Murgh Tikka Butter Masala', description: 'Tandoori chicken tikka pieces simmered in sweet-spicy makhani gravy.', price: 560, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Rara Gosht Punjabi Style', description: 'Mutton pieces slow-cooked in a spicy minced mutton gravy.', price: 680, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Paneer Tikka Lababdar', description: 'Charred paneer cubes in chunky onion tomato gravy with grated cheese.', price: 490, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Rice, Dum Biryani & Breads',
        slug: 'exotica-biryani',
        items: [
          { name: 'Gosht Dum Biryani Handi', description: 'Tender mutton pieces cooked in sealed pot with long-grain basmati and spices.', price: 620, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Murgh Dum Biryani Handi', description: 'Aromatic chicken biryani cooked on slow charcoal dum.', price: 520, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Garlic Butter Naan (2 pcs)', description: 'Clay oven flatbread brushed with garlic butter.', price: 140, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Kashmiri Naan (Dry Fruit Stuffed)', description: 'Tandoor bread stuffed with sweetened dry fruits and nuts.', price: 180, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Desserts',
        slug: 'exotica-desserts',
        items: [
          { name: 'Zafrani Kesar Phirni', description: 'Chilled ground rice pudding cooked with Kashmiri saffron and almonds.', price: 240, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Gulab Jamun with Ice Cream', description: 'Hot khoya dumplings served with vanilla ice cream.', price: 210, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Fresh Mint Lime Cooler', description: 'Muddled mint leaves, lime juice, and chilled soda.', price: 160, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 28. Little Italy (Film Nagar / Jubilee Hills)
  {
    index: 28,
    name: 'Little Italy',
    slug: 'little-italy',
    tagline: 'Authentic gourmet Italian cuisine — 100% pure vegetarian',
    description: 'Hyderabad’s premier pure-vegetarian Italian fine-dining landmark, serving wood-fired thin crust pizzas, handmade pastas, and gourmet fondues since 2002.',
    cover_image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 1450,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 400,
    delivery_fee: 55,
    packaging_fee: 25,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 256, Apollo Hospital Road, Film Nagar',
    city: 'Hyderabad',
    latitude: 17.4205000,
    longitude: 78.4112000,
    cuisines: ['artisanal-italian', 'pure-vegetarian'],
    public_source: 'littleitaly.in / Zomato Film Nagar',
    categories: [
      {
        name: 'Antipasti & Starters',
        slug: 'italy-antipasti',
        items: [
          { name: 'Nachos with Warm Cheese Sauce & Salsa', description: 'Crisp corn tortilla chips served with refried beans, jalapenos, and molten cheddar fondue.', price: 440, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 14 },
          { name: 'Bruschetta al Pomodoro', description: 'Toasted country bread slices topped with marinated tomatoes, garlic, basil, and EVOO.', price: 380, image_url: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Funghi Trifolati', description: 'Fresh button mushrooms sauteed in garlic, olive oil, white wine, and fresh parsley.', price: 420, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Garlic Bread with Melted Cheese', description: 'Crisp baguette baked with herb butter and golden melted mozzarella.', price: 290, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Wood-Fired Pizzas',
        slug: 'italy-pizzas',
        items: [
          { name: 'Pizza Sicilia', description: 'Spicy sun-dried tomatoes, pickled jalapenos, baby corn, capers, and mozzarella.', price: 680, image_url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Pizza Bellassai', description: 'Spicy tomato sauce, mozzarella, mushrooms, garlic, and fresh basil.', price: 640, image_url: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Pizza Mellino', description: 'Fresh spinach, sun-dried tomatoes, roasted garlic, and creamy goat cheese.', price: 690, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Pizza Margherita Classica', description: 'Tomato sauce, mozzarella cheese, and sweet basil.', price: 540, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 }
        ]
      },
      {
        name: 'Artisanal Pasta & Risotto',
        slug: 'italy-pastas',
        items: [
          { name: 'Pasta Barbaresca', description: 'Penne tossed with sun-dried tomatoes, broccoli, garlic, and creamy tomato sauce.', price: 620, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 18 },
          { name: 'Pasta Al Forno (Baked Pasta)', description: 'Layers of pasta, bechamel sauce, vegetables, and mozzarella baked golden.', price: 590, image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Risotto ai Funghi', description: 'Arborio rice cooked in vegetable stock with porcini mushrooms and parmesan.', price: 640, image_url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Ravioli Burro e Salvia', description: 'Handmade pasta stuffed with spinach and ricotta, tossed in sage butter.', price: 620, image_url: 'https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Dolci & Desserts',
        slug: 'italy-desserts',
        items: [
          { name: 'Tiramisu Italiano', description: 'Classic Italian dessert with ladyfingers and whipped mascarpone cream.', price: 420, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Warm Chocolate Fudge Brownie', description: 'Rich chocolate brownie with molten chocolate drizzle.', price: 280, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Peach Iced Tea', description: 'Freshly brewed iced black tea with sweet peach syrup.', price: 180, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 29. Churrolto (Banjara Hills)
  {
    index: 29,
    name: 'Churrolto',
    slug: 'churrolto',
    tagline: 'Spanish artisanal churros & global bistro kitchen',
    description: 'Hyderabad’s premier destination for crisp golden Spanish churros dipped in warm Belgian chocolates, gourmet burgers, thin pizzas, and Spanish paella.',
    cover_image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 1720,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 300,
    delivery_fee: 45,
    packaging_fee: 20,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 282/A, Road No. 10, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4178000,
    longitude: 78.4372000,
    cuisines: ['european-bistro'],
    public_source: 'churrolto.com / Zomato Banjara Hills',
    categories: [
      {
        name: 'Artisanal Spanish Churros',
        slug: 'churro-churros',
        items: [
          { name: 'Classic Cinnamon Churros with Belgian Chocolate', description: 'Crisp golden piped churros dusted in cinnamon sugar, served with molten dark chocolate dip.', price: 340, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 14 },
          { name: 'Stuffed Nutella Churros (3 pcs)', description: 'Giant churros piped internally with warm creamy Nutella hazelnut spread.', price: 380, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Dulce de Leche Churro Bites', description: 'Bite-sized crispy churros tossed in warm caramelized milk dulce de leche.', price: 320, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Ruby Chocolate Churro Platter', description: 'Assorted churros paired with ruby berry chocolate dip and toasted pistachios.', price: 420, image_url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Gourmet Tapas & Starters',
        slug: 'churro-starters',
        items: [
          { name: 'Truffle Parmesan Hand-Cut Fries', description: 'Crisp hand-cut potato batons tossed in white truffle oil, grated parmesan, and rosemary.', price: 320, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Spanish Chicken Croquettes (4 pcs)', description: 'Crispy fried panko croquettes stuffed with shredded chicken and creamy bechamel.', price: 380, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 },
          { name: 'Charred Corn & Jalapeno Quesadilla', description: 'Folded toasted tortilla stuffed with cheddar, corn, jalapenos, and sour cream.', price: 360, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 },
          { name: 'Peri Peri Crispy Calamari', description: 'Tender squid rings fried crisp with citrus mayo.', price: 460, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Bistro Mains & Pasta',
        slug: 'churro-mains',
        items: [
          { name: 'Spanish Vegetable Paella', description: 'Saffron-infused bomba rice cooked in shallow pan with bell peppers, artichokes, and peas.', price: 480, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 24 },
          { name: 'Chicken Pesto Fettuccine', description: 'Grilled chicken strips and ribbon pasta tossed in pine nut basil pesto cream.', price: 520, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Smash Bacon Cheeseburger', description: 'Crisp pressed beef/mutton patty with melted cheese, gherkins, and special sauce in brioche bun.', price: 490, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 16 },
          { name: 'Wild Mushroom Risotto Bowl', description: 'Creamy arborio rice with sauteed portobello and parmesan crisps.', price: 460, image_url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Beverages',
        slug: 'churro-drinks',
        items: [
          { name: 'Spanish Hot Chocolate Thick Sip', description: 'Velvety, ultra-thick dark chocolate drink made with 70% cocoa.', price: 220, image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Iced Hazelnut Frappe', description: 'Blended espresso with roasted hazelnut syrup and whipped cream.', price: 260, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Passionfruit Mint Lemonade', description: 'Chilled passionfruit puree, fresh mint, and sparkling soda.', price: 190, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 30. Flechazo (Madhapur)
  {
    index: 30,
    name: 'Flechazo',
    slug: 'flechazo',
    tagline: 'Mediterranean warmth & Pan-Asian feast buffet',
    description: 'An interactive Mediterranean and Asian culinary destination in Madhapur, featuring wood-fired thin crust pizzas, shawarma live counters, and Asian dim sums.',
    cover_image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 1480,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 350,
    delivery_fee: 45,
    packaging_fee: 20,
    is_featured: false,
    is_open: true,
    address_line: '2nd Floor, Sun Towers, HUDA Techno Enclave, Madhapur',
    city: 'Hyderabad',
    latitude: 17.4432000,
    longitude: 78.3895000,
    cuisines: ['european-bistro', 'pan-asian'],
    public_source: 'flechazo.in / Zomato Madhapur',
    categories: [
      {
        name: 'Mediterranean Tapas & Shawarma',
        slug: 'flechazo-tapas',
        items: [
          { name: 'Chicken Shawarma Wrap with Garlic Toum', description: 'Rotisserie carved spiced chicken wrapped in soft pita with pickled turnips, fries, and garlic sauce.', price: 340, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Falafel Pita Pocket with Hummus', description: 'Crisp chickpea balls stuffed in pita with tahini, parsley, and sumac onions.', price: 290, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Mezze Platter Trio', description: 'Classic hummus, beetroot moutabal, and tzatziki served with warm pita triangles.', price: 380, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Smoked Chicken Wings (6 pcs)', description: 'Charred wings tossed in honey sriracha glaze.', price: 360, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Pizzas & Asian Wok',
        slug: 'flechazo-pizzas',
        items: [
          { name: 'Barbecue Chicken Thin Crust Pizza', description: 'Smoked chicken, red onions, cilantro, and mozzarella on crispy dough.', price: 490, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Margherita Thin Crust Pizza', description: 'Tomato sauce, fresh basil, and mozzarella.', price: 390, image_url: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 },
          { name: 'Chilli Garlic Chicken Fried Rice', description: 'Wok-tossed jasmine rice with shredded chicken, burnt garlic, and scallions.', price: 360, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 14 },
          { name: 'Veg Hakka Noodles with Bok Choy', description: 'Stir-fried noodles with Asian greens and light soy.', price: 310, image_url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 }
        ]
      },
      {
        name: 'Indian & Regional Curries',
        slug: 'flechazo-curries',
        items: [
          { name: 'Mutton Dum Biryani Bowl', description: 'Fragrant basmati cooked with tender spiced mutton.', price: 480, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Butter Chicken Gravy', description: 'Classic creamy makhani chicken curry.', price: 420, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Paneer Tikka Masala', description: 'Charred paneer cubes in spiced tomato gravy.', price: 380, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 },
          { name: 'Butter Naan (2 pcs)', description: 'Tandoor leavened flatbread.', price: 90, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      },
      {
        name: 'Desserts',
        slug: 'flechazo-desserts',
        items: [
          { name: 'Nutella Brownie Tub', description: 'Warm brownie smothered in hazelnut chocolate spread.', price: 240, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Gulab Jamun (2 pcs)', description: 'Sweet milk dumplings in cardamom syrup.', price: 120, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Blueberry Iced Slush', description: 'Crushed ice cooler with blueberry fruit puree.', price: 170, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 31. Autumn Leaf Cafe (Jubilee Hills)
  {
    index: 31,
    name: 'Autumn Leaf Cafe',
    slug: 'autumn-leaf-cafe',
    tagline: 'Lush garden courtyard bistro & artisanal breakfast',
    description: 'A charming open-air heritage courtyard cafe nestled in Jubilee Hills, celebrated for European breakfast platters, Eggs Florentine, fresh salads, and wholesome comfort bakes.',
    cover_image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 1190,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 300,
    delivery_fee: 50,
    packaging_fee: 20,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 823, Road No. 41, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4292000,
    longitude: 78.4095000,
    cuisines: ['european-bistro'],
    public_source: 'autumnleafcafe.com / Zomato Jubilee Hills',
    categories: [
      {
        name: 'Artisanal Breakfast & Eggs',
        slug: 'leaf-breakfast',
        items: [
          { name: 'Eggs Florentine on Brioche', description: 'Poached farm eggs over buttered English brioche with sauteed spinach, creamy hollandaise, and paprika.', price: 380, image_url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Avocado Toast with Crumbled Feta', description: 'Toasted seeded sourdough with smashed avocado, cherry tomatoes, and microgreens.', price: 420, image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Classic Fluffy Pancakes with Maple Syrup', description: 'Stack of 3 golden buttermilk pancakes with butter and genuine Canadian maple syrup.', price: 320, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 },
          { name: 'Shakshuka with Warm Sourdough', description: 'Middle Eastern baked eggs in spiced tomato-bell pepper ragout with crumbled goat cheese.', price: 390, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Gourmet Sandwiches & Burgers',
        slug: 'leaf-sandwiches',
        items: [
          { name: 'Smoked Chicken & Pesto Panini', description: 'Grilled chicken breast, sundried tomato, fresh mozzarella, and basil pesto in ciabatta.', price: 440, image_url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Grilled Mediterranean Veggie Sandwich', description: 'Charred zucchini, bell peppers, balsamic mushrooms, and hummus on multigrain bread.', price: 360, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 },
          { name: 'Gourmet Lamb Burger with Caramelized Onions', description: 'Juicy spiced lamb patty with cheddar, caramelized shallots, and herb fries.', price: 520, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Crispy Halloumi Fries with Dip', description: 'Golden fried halloumi cheese batons with zaatar herb mayo.', price: 380, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Pastas & Mains',
        slug: 'leaf-mains',
        items: [
          { name: 'Handcrafted Spinach Ricotta Ravioli', description: 'Ravioli in walnut sage butter with grated parmesan.', price: 490, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Grilled Herb Crusted Fish Fillet', description: 'Fresh pan-seared river fish with lemon-caper butter and roasted baby potatoes.', price: 580, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Wild Mushroom Cream Penne', description: 'Penne pasta in roasted garlic and porcini mushroom cream sauce.', price: 440, image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 }
        ]
      },
      {
        name: 'Desserts & Artisan Brews',
        slug: 'leaf-desserts',
        items: [
          { name: 'Warm Apple Cinnamon Crumble with Ice Cream', description: 'Stewed spiced Granny Smith apples topped with toasted oat crumble and vanilla bean gelato.', price: 320, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Dark Chocolate Sea Salt Tart', description: 'Ganache tart finished with flakes of Cornish sea salt.', price: 290, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Rose Petal Cold Brew Latte', description: 'Cold-steeped coffee with natural Damascena rose extract and oat milk.', price: 240, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 32. Telangana Spice Kitchen (Gachibowli)
  {
    index: 32,
    name: 'Telangana Spice Kitchen',
    slug: 'telangana-spice-kitchen',
    tagline: 'Authentic rustic Telangana cuisine & Highway spices',
    description: 'Located in Gachibowli near DLF, dedicated to unadulterated Telangana regional cooking: Golichina Mamsam, Jowar Rotis, Pachi Pulusu, and Warangal pepper chicken.',
    cover_image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 1350,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 350,
    delivery_fee: 45,
    packaging_fee: 20,
    is_featured: false,
    is_open: true,
    address_line: 'Gachibowli - Miyapur Road, Opp. DLF Gate 3, Gachibowli',
    city: 'Hyderabad',
    latitude: 17.4428000,
    longitude: 78.3562000,
    cuisines: ['telangana-heritage', 'andhra-rayalaseema'],
    public_source: 'telanganaspicekitchen.com / Zomato Gachibowli',
    categories: [
      {
        name: 'Telangana Special Starters',
        slug: 'tsk-starters',
        items: [
          { name: 'Golichina Mamsam (Mutton Roast)', description: 'Tender baby goat cubes pan-seared with caramelized shallots, Warangal red chilies, and curry leaves.', price: 540, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Miriyala Kodi Vepudu (Pepper Chicken)', description: 'Bone-in country chicken tossed with black pepper, garlic, and curry leaves in iron kadai.', price: 440, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Makka Garelu (Corn Vada - 4 pcs)', description: 'Traditional Telangana spiced sweet corn fritters fried crispy, served with tomato chutney.', price: 290, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 },
          { name: 'Royyala Vepudu (Spicy Prawn Fry)', description: 'Fresh river prawns pan-roasted with pounded dry red chili and cumin paste.', price: 560, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Rustic Curries & Stews',
        slug: 'tsk-curries',
        items: [
          { name: 'Telangana Natu Kodi Pulusu', description: 'Country chicken simmered in fiery red gravy with ginger, garlic, and whole spices.', price: 490, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Pachi Pulusu (Raw Tamarind Rasam)', description: 'Charred onion and tamarind cooling soup seasoned with cumin, mustard, and green chili.', price: 220, image_url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Mutton Dalcha', description: 'Tender mutton cooked with chana dal, bottle gourd, and sour tamarind paste.', price: 460, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Tomato Kura with Desi Ghee', description: 'Slow-stewed country tomatoes cooked with mustard seeds and curry leaves.', price: 280, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 }
        ]
      },
      {
        name: 'Bagara Rice & Roti',
        slug: 'tsk-rice',
        items: [
          { name: 'Telangana Bagara Rice Pot', description: 'Fragrant short-grain rice tempered with whole spices, caramelized shallots, mint, and pure ghee.', price: 340, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Jowar Roti (2 pcs)', description: 'Hand-patted sorghum flatbread cooked on clay griddle.', price: 90, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Saddi Annam (Fermented Rice Bowl)', description: 'Overnight fermented rice with shallots and churned curd.', price: 180, image_url: 'https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      },
      {
        name: 'Desserts',
        slug: 'tsk-desserts',
        items: [
          { name: 'Bellam Paramannam (Sweet Pongal)', description: 'Short grain rice and moong dal simmered in pure jaggery, cardamom, and ghee.', price: 210, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Sunnundalu with Ghee (2 pcs)', description: 'Traditional roasted urad dal and jaggery laddu.', price: 160, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 },
          { name: 'Allam Majjiga (Ginger Buttermilk)', description: 'Fresh churned buttermilk with pounded ginger and green chilies.', price: 70, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 33. Platform 65 (Kondapur)
  {
    index: 33,
    name: 'Platform 65',
    slug: 'platform-65',
    tagline: 'Train-themed multi-cuisine & authentic Andhra kitchen',
    description: 'Hyderabad’s celebrated toy-train dining concept in Kondapur, delivering steaming hot Potlam Biryani, Kaju Paneer Biryani, and spicy coastal curries.',
    cover_image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 1840,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 300,
    delivery_fee: 45,
    packaging_fee: 20,
    is_featured: false,
    is_open: true,
    address_line: '3rd Floor, PNR Empire, Near Kothaguda Junction, Kondapur',
    city: 'Hyderabad',
    latitude: 17.4642000,
    longitude: 78.3615000,
    cuisines: ['andhra-rayalaseema', 'mughlai-charminar-grill'],
    public_source: 'platform65.in / Zomato Kondapur',
    categories: [
      {
        name: 'Express Biryanis & Pulaos',
        slug: 'p65-biryanis',
        items: [
          { name: 'Potlam Biryani (Omelette Wrapped Mutton)', description: 'Spiced minced and bone-in mutton biryani encased in a thin golden egg crepe.', price: 520, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Kaju Paneer Dum Biryani', description: 'Fragrant basmati rice tossed with whole fried cashews and marinated cottage cheese.', price: 380, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Allam Kodi Pulao (Ginger Chicken)', description: 'Aromatic basmati rice cooked with fresh ginger paste and country spiced chicken pieces.', price: 440, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Avakaya Chicken Biryani', description: 'Spicy biryani rice tossed with aged mango pickle and juicy chicken pieces.', price: 460, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Station Master Starters',
        slug: 'p65-starters',
        items: [
          { name: 'Chitti Mutyalu Prawn Fry', description: 'Crispy river prawns tossed in spicy Andhra green chili masala.', price: 540, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Dragon Chicken Indo-Chinese', description: 'Crispy chicken strips tossed in spicy red chili garlic sauce with cashews.', price: 390, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 16 },
          { name: 'Crispy Corn Pepper Fry', description: 'Golden fried sweet corn kernels tossed with black pepper and curry leaves.', price: 290, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 },
          { name: 'Mutton Sukka Fry', description: 'Tender goat pieces pan-roasted with caramelized shallots and ground spices.', price: 510, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Curries & Breads',
        slug: 'p65-curries',
        items: [
          { name: 'Gongura Mutton Curry', description: 'Mutton cooked in tangy sorrel leaf paste with green chillies.', price: 520, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Butter Chicken Masala', description: 'Boneless chicken in sweet-savory makhani gravy.', price: 390, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Butter Naan (2 pcs)', description: 'Tandoori flatbread brushed with butter.', price: 90, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      },
      {
        name: 'Desserts',
        slug: 'p65-desserts',
        items: [
          { name: 'Sizzling Brownie with Vanilla Ice Cream', description: 'Warm walnut brownie served with vanilla ice cream and hot chocolate sauce.', price: 240, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Gulab Jamun (2 pcs)', description: 'Khoya dumplings in cardamom syrup.', price: 110, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 34. Siddique Kabab Centre (DLF Street, Gachibowli)
  {
    index: 34,
    name: 'Siddique Kabab Centre',
    slug: 'siddique-kabab-centre',
    tagline: 'Legendary DLF night-street grilled chicken & shawarmas',
    description: 'The indisputable king of Gachibowli’s DLF street food culture, serving smoky grilled chicken skewers, Jumbo Malai Chicken Shawarmas, and freshly rolled Roomali kebabs.',
    cover_image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 2800,
    price_tier: '₹',
    delivery_time_min: 20,
    delivery_time_max: 35,
    minimum_order: 150,
    delivery_fee: 35,
    packaging_fee: 15,
    is_featured: false,
    is_open: true,
    address_line: 'Shop 14, DLF Cyber City Food Street, Gachibowli',
    city: 'Hyderabad',
    latitude: 17.4462000,
    longitude: 78.3585000,
    cuisines: ['mughlai-charminar-grill'],
    public_source: 'Swiggy DLF Food Street / Google Maps Gachibowli',
    categories: [
      {
        name: 'Signature Shawarmas & Rolls',
        slug: 'siddique-shawarma',
        items: [
          { name: 'Special Chicken Malai Shawarma (Jumbo)', description: 'Grilled chicken shaved from vertical spit, drenched in house garlic mayo, wrapped in soft rumali bread.', price: 210, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 10 },
          { name: 'Rumali Chicken Tikka Roll', description: 'Charcoal-grilled spicy chicken tikka pieces rolled in thin roomali roti with sliced onions and mint chutney.', price: 190, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 12 },
          { name: 'Paneer Tikka Rumali Roll', description: 'Clay oven roasted cottage cheese rolled with spiced onions and green chutney.', price: 170, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Open Shawarma Plate with Pita & Salad', description: 'Shaved grilled chicken served on plate with fries, pickled vegetables, and extra garlic dip.', price: 260, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Charcoal Tandoor Skewers',
        slug: 'siddique-tandoor',
        items: [
          { name: 'Tandoori Chicken (Half)', description: 'Juicy chicken roasted over red-hot coals, spiced with red chili, curd, and garam masala.', price: 290, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Chicken Malai Tikka (6 pcs)', description: 'Boneless chicken cubes marinated in cashew cream and grilled tender.', price: 310, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 },
          { name: 'Chicken 65 DLF Street Style', description: 'Deep-red crispy fried boneless chicken tossed with green chillies and curry leaves.', price: 260, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 12 },
          { name: 'Tandoori Chicken Wings (6 pcs)', description: 'Charred spicy chicken wings glazed with butter.', price: 240, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 14 }
        ]
      },
      {
        name: 'Breads & Accompaniments',
        slug: 'siddique-breads',
        items: [
          { name: 'Roomali Roti (2 pcs)', description: 'Freshly stretched handkerchief-thin flatbread.', price: 50, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Extra Garlic Toum Mayo Dip', description: 'Fluffy authentic Lebanese garlic sauce.', price: 40, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 2 }
        ]
      },
      {
        name: 'Beverages',
        slug: 'siddique-drinks',
        items: [
          { name: 'Sweet Lassi Kulhad', description: 'Thick churned sweet yogurt in clay glass.', price: 90, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 },
          { name: 'Mint Masala Soda', description: 'Digestive spiced soda with lime and rock salt.', price: 60, image_url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 3 }
        ]
      }
    ]
  },

  // 35. Broadway - The Brewery (Jubilee Hills)
  {
    index: 35,
    name: 'Broadway - The Brewery',
    slug: 'broadway-the-brewery',
    tagline: 'Premier craft microbrewery & wood-fired gastropub',
    description: 'Hyderabad’s premier craft brewery and gastropub on Road No. 36, Jubilee Hills, famed for wood-fired sourdough pizzas, Ghee Roast tacos, and gourmet pub bites.',
    cover_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 1920,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 450,
    delivery_fee: 60,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 1057, Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4320000,
    longitude: 78.4048000,
    cuisines: ['craft-brewery', 'european-bistro'],
    public_source: 'broadwaybrews.com / Zomato Jubilee Hills',
    categories: [
      {
        name: 'Gourmet Pub Grub & Starters',
        slug: 'broadway-starters',
        items: [
          { name: 'Broadway Ghee Roast Chicken Tacos (3 pcs)', description: 'Mangalorean chicken ghee roast stuffed in soft corn tortillas with sour cream and pickled onions.', price: 540, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 16 },
          { name: 'Loaded Pulled Pork Nachos', description: 'Slow-cooked barbecue pork shoulder over crisp chips with jalapenos, cheddar fondue, and pico de gallo.', price: 580, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Truffle Parmesan Hand-Cut Fries', description: 'Crisp potatoes tossed in white truffle oil, rosemary sea salt, and aged parmesan.', price: 360, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Crispy Buffalo Wings (6 pcs)', description: 'Crisp fried wings tossed in spicy cayenne pepper butter sauce with blue cheese dip.', price: 440, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Wood-Fired Sourdough Pizzas',
        slug: 'broadway-pizzas',
        items: [
          { name: 'Broadway Pepperoni & Hot Honey Pizza', description: 'Imported artisanal pork pepperoni, mozzarella, and spicy habanero honey drizzle.', price: 820, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Smoked Chicken & Jalapeno Pizza', description: 'Hickory smoked chicken, pickled jalapenos, barbecue swirl, and mozzarella.', price: 740, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Quattro Formaggi (Four Cheese)', description: 'Gorgonzola, fontina, fresh mozzarella, and shaved parmesan on white garlic base.', price: 720, image_url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Margherita Burrata D.O.P.', description: 'San Marzano tomato base topped with a whole fresh burrata ball and basil.', price: 690, image_url: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 18 }
        ]
      },
      {
        name: 'Hearty Mains',
        slug: 'broadway-mains',
        items: [
          { name: 'Slow-Cooked BBQ Pork Ribs', description: 'Fall-off-the-bone tender pork ribs glazed in house craft stout BBQ sauce, served with slaw and fries.', price: 890, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Grilled Tenderloin Steak with Pepper Jus', description: 'Prime beef tenderloin seared with garlic herb butter, mashed potatoes, and roasted veggies.', price: 840, image_url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Wild Mushroom Cream Tagliatelle', description: 'Ribbon pasta in creamy garlic mushroom sauce with truffle aroma.', price: 560, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Desserts & Non-Alcoholic Brews',
        slug: 'broadway-desserts',
        items: [
          { name: 'Broadway Warm Churros with Belgian Dip', description: 'Cinnamon sugar dusted crisp churro fingers with dark chocolate sauce.', price: 340, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Molten Chocolate Lava Cake with Ice Cream', description: 'Warm molten chocolate cake with vanilla ice cream.', price: 360, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Ginger Beer Craft Mocktail', description: 'Brewed spicy ginger beer with fresh lime and mint.', price: 220, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 36. Santè Spa Cuisine (Road No. 82, Jubilee Hills)
  {
    index: 36,
    name: 'Santè Spa Cuisine',
    slug: 'sante-spa-cuisine',
    tagline: 'Clean, organic & guilt-free gourmet wellness dining',
    description: 'An organic, mindful sanctuary on Road No. 82, Jubilee Hills, redefining healthy eating with whole-food vegan, gluten-free, and clean dining delicacies.',
    cover_image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 790,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 450,
    delivery_fee: 60,
    packaging_fee: 25,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 128, Road No. 82, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4241000,
    longitude: 78.4132000,
    cuisines: ['pure-vegetarian', 'european-bistro'],
    public_source: 'santespacuisine.com / Zomato Jubilee Hills',
    categories: [
      {
        name: 'Wellness Starters & Mezze',
        slug: 'sante-starters',
        items: [
          { name: 'Spinach & Beetroot Hummus with Multigrain Crisps', description: 'Duo of vibrant farm-fresh organic pureed hummus served with baked gluten-free seed crackers.', price: 440, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 14 },
          { name: 'Quinoa & Avocado Salad Bowl', description: 'Peruvian organic quinoa, Hass avocado, cherry tomatoes, and pomegranate in lemon herb dressing.', price: 460, image_url: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Baked Sweet Potato Wedges with Vegan Aioli', description: 'Spiced oven-roasted sweet potato batons with garlic cashew emulsion.', price: 360, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Crispy Rice Paper Summer Rolls (4 pcs)', description: 'Vietnamese rice paper rolls packed with crunchy vegetables, mint, and peanut dip.', price: 390, image_url: 'https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 }
        ]
      },
      {
        name: 'Guilt-Free Pizza & Pasta',
        slug: 'sante-pizza-pasta',
        items: [
          { name: 'Activated Charcoal Sourdough Pizza', description: 'Digestive black activated charcoal crust with sun-dried tomatoes, cashew cheese, and arugula.', price: 620, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Zucchini Zoodles with Walnut Basil Pesto', description: 'Spiralized raw organic zucchini tossed in fragrant walnut and Genovese basil emulsion.', price: 520, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 14 },
          { name: 'Gluten-Free Penne All’Arrabbiata', description: 'Brown rice pasta tossed with roasted plum tomatoes, garlic, and fresh oregano.', price: 490, image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 }
        ]
      },
      {
        name: 'Wholesome Mains',
        slug: 'sante-mains',
        items: [
          { name: 'Wild Mushroom & Black Rice Risotto', description: 'Antioxidant-rich black rice cooked with wild porcini, coconut milk, and nutritional yeast.', price: 580, image_url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 22 },
          { name: 'Thai Coconut Tofu Green Bowl', description: 'Steamed edamame, organic tofu, and seasonal greens in gentle green curry broth with brown rice.', price: 540, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Stuffed Roasted Capsicum Bowl', description: 'Bell peppers stuffed with spiced millets, pine nuts, and baked with almond crust.', price: 460, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Guilt-Free Desserts & Cold-Pressed Elixirs',
        slug: 'sante-desserts',
        items: [
          { name: 'Raw Avocado Dark Chocolate Mousse', description: 'Creamy cold-whipped Hass avocado, raw cacao, and organic maple syrup.', price: 340, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Chia Seed & Mango Coconut Pudding', description: 'Organic chia seeds soaked in tender coconut milk, layered with fresh mango puree.', price: 290, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Activated Charcoal Detox Cold-Pressed Juice', description: 'Fresh pressed green apple, lemon, ginger, and activated coconut charcoal.', price: 240, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  }
];

module.exports = { PART3 };
