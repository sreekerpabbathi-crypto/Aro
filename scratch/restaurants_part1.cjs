// scratch/restaurants_part1.cjs
// Audited Restaurants 1 to 13

const PART1 = [
  // 1. AnTeRa Kitchen & Bar (Replaces fictional Deccan Table)
  {
    index: 1,
    name: 'AnTeRa Kitchen & Bar',
    slug: 'antera-kitchen-and-bar',
    tagline: 'Authentic Andhra, Telangana & Rayalaseema culinary craft',
    description: 'Celebrated regional dining in Jubilee Hills bringing together heritage flavours of Telangana, coastal Andhra, and Rayalaseema. Renowned for Bangla Kodi, Bhimavaram Royyala Vepudu, and Nalli Gosht Biryani.',
    cover_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 1420,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 350,
    delivery_fee: 50,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 468, Road No. 10, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4342000,
    longitude: 78.4068000,
    cuisines: ['telangana-heritage', 'andhra-rayalaseema'],
    public_source: 'Swiggy / Zomato / Google Maps (AnTeRa Kitchen and Bar, Jubilee Hills)',
    categories: [
      {
        name: 'Signature Regional Starters',
        slug: 'antera-starters',
        items: [
          { name: 'Bangla Kodi (Crispy Curry Leaf Chicken)', description: 'Crisp fried chicken chunks tossed in traditional Godavari village spices, fresh curry leaves, and green chillies.', price: 390, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Bhimavaram Royyala Vepudu (Prawn Fry)', description: 'Succulent coastal prawns tossed with caramelized onions, cracked coriander, and green chillies.', price: 490, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Kaju Paneer Vepudu', description: 'Fresh malai paneer cubes dry-roasted with cashews, curry leaves, and Guntur chilli paste.', price: 360, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Telangana Mutton Sukka', description: 'Tender goat pan-roasted with Warangal black pepper, shallots, and fresh coconut shreds.', price: 480, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 }
        ]
      },
      {
        name: 'Heritage Curries & Ragi Combos',
        slug: 'antera-curries',
        items: [
          { name: 'Gongura Mamsam', description: 'Classic Andhra delicacy of tender mutton simmered slowly with tangy sorrel leaves and spices.', price: 490, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Natu Kodi Pulusu with Ragi Sankati', description: 'Country chicken curry simmered in rustic village spices, served with steamed ragi mudda and ghee.', price: 480, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Gutti Vankaya Kura', description: 'Baby brinjals stuffed and cooked in a velvety roasted peanut, sesame, and tamarind gravy.', price: 320, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Pappu Charu with Desi Ghee', description: 'Homestyle Andhra comforting toor dal stew tempered with mustard, cumin, and garlic cloves.', price: 210, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Regional Pulaos & Biryanis',
        slug: 'antera-rice',
        items: [
          { name: 'Bangla Kodi Pulao', description: 'Fragrant short-grain chitti mutyalu rice cooked with aromatic spices and topped with Bangla chicken.', price: 440, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Nalli Gosht Biryani (Handi)', description: 'Succulent lamb shanks slow-cooked with aged basmati rice on low flame with mint and brown onions.', price: 560, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 35 },
          { name: 'Chitti Mutyalu Paneer Pulao', description: 'Aromatic micro-grain rice tempered with pure ghee, whole spices, and spiced paneer cubes.', price: 370, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 25 },
          { name: 'Telangana Bagara Rice Pot', description: 'Traditional celebratory tempered rice cooked with whole spices, mint leaves, and desi ghee.', price: 240, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Breads & Artisanal Sweets',
        slug: 'antera-desserts',
        items: [
          { name: 'Pulka (2 pcs)', description: 'Thin and soft puffed whole wheat flatbreads prepared homestyle on open flame.', price: 40, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Jaggery Ice Cream with Chikki Crumbs', description: 'Creamy artisanal ice cream prepared with pure organic palm jaggery and peanut chikki crunch.', price: 180, image_url: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Bellam Jeedipappu Halwa', description: 'Warm roasted cashew nut halwa cooked with organic Godavari jaggery and cardamom ghee.', price: 220, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Nannari Sharbat Cooler', description: 'Refreshing traditional cooling drink made from wild sarsaparilla root syrup and soaked sabja seeds.', price: 90, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 2. Hashi (Replaces fictional Kumo House)
  {
    index: 2,
    name: 'Hashi',
    slug: 'hashi-japanese-asian',
    tagline: 'Artisanal Japanese sushi, robata & modern Pan-Asian dining',
    description: 'Premier Asian and Japanese dining in Jubilee Hills known for precision nigiri, signature sushi rolls, steamed edamame, and vibrant wok-tossed Pan-Asian creations.',
    cover_image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 980,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 400,
    delivery_fee: 55,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 1121, Road No. 45, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4338000,
    longitude: 78.4025000,
    cuisines: ['japanese-robata', 'pan-asian'],
    public_source: 'Swiggy / Zomato / Google Maps (Hashi, Jubilee Hills)',
    categories: [
      {
        name: 'Small Plates & Dim Sum',
        slug: 'hashi-starters',
        items: [
          { name: 'Steamed Edamame with Sea Salt', description: 'Tender young soybeans steamed in the pod, finished with crushed Maldon sea salt.', price: 320, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Chilli Garlic Edamame', description: 'Wok-tossed whole edamame pods glazed in spicy togarashi chilli, burnt garlic, and sesame oil.', price: 340, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Truffle Edamame Dim Sum (4 pcs)', description: 'Translucent crystal dumplings filled with mashed edamame, water chestnuts, and fragrant white truffle essence.', price: 420, image_url: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Chicken & Prawn Sui Mai (4 pcs)', description: 'Open-faced steamed wonton cups packed with seasoned minced chicken, tiger prawns, and tobiko.', price: 460, image_url: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 }
        ]
      },
      {
        name: 'Signature Sushi & Maki',
        slug: 'hashi-sushi',
        items: [
          { name: 'Geisha Sushi Roll (8 pcs)', description: 'Crisp tempura prawn, crabstick, avocado, and cucumber wrapped in nori, topped with spicy mayo and tobiko.', price: 680, image_url: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Dynamite Sushi Roll (8 pcs)', description: 'Fresh salmon, cream cheese, and avocado roll topped with torched spicy salmon tartare and scallions.', price: 690, image_url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'California Veg Roll (8 pcs)', description: 'Ripe avocado, crisp cucumber, and blanched asparagus rolled with seasoned sushi rice and toasted sesame.', price: 540, image_url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Chicken Teriyaki Roll (8 pcs)', description: 'Char-grilled chicken breast glazed with house-made teriyaki sauce, cucumber, and roasted sesame.', price: 580, image_url: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 }
        ]
      },
      {
        name: 'Robata Skewers & Asian Mains',
        slug: 'hashi-mains',
        items: [
          { name: 'Robata King Oyster Mushroom Skewers', description: 'Charcoal-grilled king oyster mushrooms brushed with garlic miso glaze and green scallions.', price: 380, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Chicken Yakitori Skewers (2 skewers)', description: 'Tender chicken thighs and leeks grilled over binchotan coals with sweet mirin soy glaze.', price: 440, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Thai Massaman Curry with Jasmine Rice', description: 'Mild coconut milk curry stewed with roasted baby potatoes, shallots, and fragrant Thai herbs.', price: 540, image_url: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 25 },
          { name: 'Pad Thai Noodles with Prawns', description: 'Wok-tossed flat rice noodles with tiger prawns, tamarind pulp, crushed peanuts, and fresh lime.', price: 520, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Desserts & Refreshers',
        slug: 'hashi-beverages',
        items: [
          { name: 'Matcha Green Tea Cheesecake', description: 'Velvety Japanese Uji matcha-infused baked cheesecake on a crisp biscuit crust.', price: 340, image_url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Yuzu Lemonade Iced Fizz', description: 'Sparkling cooler prepared with aromatic Japanese yuzu citrus fruit, fresh mint, and soda.', price: 220, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      }
    ]
  },

  // 3. Toscano (Replaces fictional Forno & Fig)
  {
    index: 3,
    name: 'Toscano',
    slug: 'toscano-gachibowli',
    tagline: 'Authentic Italian dining, hand-tossed sourdough pizza & pasta',
    description: 'Renowned Italian restaurant in Gachibowli\'s tech corridor. Featuring wood-fired artisanal sourdough pizzas, fresh handcrafted pastas, antipasti platters, and classic Italian desserts.',
    cover_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 1320,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 350,
    delivery_fee: 45,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Ground Floor, Trendset Jayabheri Silicon Tower, Gachibowli',
    city: 'Hyderabad',
    latitude: 17.4428000,
    longitude: 78.3615000,
    cuisines: ['artisanal-italian'],
    public_source: 'Swiggy / Swiggy Dineout / Zomato (Toscano, Gachibowli)',
    categories: [
      {
        name: 'Antipasti & Small Plates',
        slug: 'toscano-starters',
        items: [
          { name: 'Bruschetta al Pomodoro (4 pcs)', description: 'Toasted artisan baguette slices topped with marinated vine tomatoes, fresh basil, garlic, and extra virgin olive oil.', price: 320, image_url: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Crispy Calamari Fritti', description: 'Tender squid rings dusted in seasoned semolina, flash-fried golden, and served with spicy tomato marinara dip.', price: 490, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Garlic Sourdough Bread with Mozzarella', description: 'Freshly baked sourdough slices smothered with roasted garlic herb butter and melted mozzarella cheese.', price: 240, image_url: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Caprese Salad with Buffalo Mozzarella', description: 'Thick slices of fresh buffalo mozzarella, beefsteak tomatoes, wild arugula, and aged balsamic reduction.', price: 460, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Wood-Fired Sourdough Pizzas',
        slug: 'toscano-pizza',
        items: [
          { name: 'Pizza Margherita Classica', description: 'San Marzano DOP tomato sauce, fresh bocconcini mozzarella, fragrant basil leaves, and cold-pressed olive oil.', price: 520, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Pizza Quattro Formaggi', description: 'Four cheese pizza topped with creamy mozzarella, sharp gorgonzola, aged fontina, and parmigiano reggiano.', price: 640, image_url: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 22 },
          { name: 'Pizza Pepperoni Piccante', description: 'Wood-fired crust layered with tomato sauce, mozzarella, spicy Italian pork pepperoni, and pickled jalapeños.', price: 690, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Pizza Rustica Verdure', description: 'Chargrilled zucchini, sweet bell peppers, caramelized onions, kalamata olives, and Greek feta cheese.', price: 580, image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Handcrafted Pastas & Mains',
        slug: 'toscano-pasta',
        items: [
          { name: 'Fettuccine ai Funghi Porcini', description: 'Handcrafted egg fettuccine tossed with wild porcini mushrooms, garlic butter, and shaved parmesan.', price: 560, image_url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 22 },
          { name: 'Spaghetti Bolognese Tradizionale', description: 'Classic slow-simmered minced lamb and tomato ragu served over al dente spaghetti with grana padano.', price: 590, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Penne all\'Arrabbiata', description: 'Penne pasta tossed in spicy slow-cooked San Marzano tomato sauce, garlic, red chilli flakes, and fresh parsley.', price: 440, image_url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Pollo alla Griglia with Herb Potatoes', description: 'Pan-seared herb-marinated chicken breast served with rosemary roasted potatoes and chicken jus.', price: 620, image_url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 }
        ]
      },
      {
        name: 'Dolci & Refreshers',
        slug: 'toscano-desserts',
        items: [
          { name: 'Classic Tiramisu Italiano', description: 'Traditional recipe with espresso-dipped savoiardi biscuits, creamy mascarpone sabayon, and Dutch cocoa powder.', price: 360, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Warm Chocolate Fondant with Gelato', description: 'Molten dark Belgian chocolate lava cake served warm with Madagascar vanilla bean gelato.', price: 380, image_url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Sicilian Blood Orange Soda', description: 'Craft Italian sparkling citrus soda infused with fresh rosemary and cracked ice.', price: 190, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 4. Dum Pukht Begum's (Replaces fictional Nizami Hearth)
  {
    index: 4,
    name: 'Dum Pukht Begum\'s',
    slug: 'dum-pukht-begums',
    tagline: 'Royal Nizami & Awadhi slow-cooked dum pukht dining',
    description: 'Luxury royal dining at ITC Kohenur, celebrating the refined slow-cooking traditions of the Begums of Hyderabad and royal Awadh. Famous for Dum Pukht Kakori, Nalli Nihari, and Shahi Biryanis.',
    cover_image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    rating_count: 890,
    price_tier: '₹₹₹₹',
    delivery_time_min: 35,
    delivery_time_max: 55,
    minimum_order: 600,
    delivery_fee: 75,
    packaging_fee: 40,
    is_featured: true,
    is_open: true,
    address_line: 'ITC Kohenur, Plot 5, Knowledge City, Madhapur',
    city: 'Hyderabad',
    latitude: 17.4385000,
    longitude: 78.3812000,
    cuisines: ['hyderabadi-dum', 'contemporary-deccani'],
    public_source: 'ITC Hotels Official Site / Swiggy Dineout (Dum Pukht Begum\'s, ITC Kohenur)',
    categories: [
      {
        name: 'Royal Shorbas & Starters',
        slug: 'dumpukht-starters',
        items: [
          { name: 'Murgh Badami Shorba', description: 'Delicate chicken broth enriched with toasted almond paste, saffron threads, and cracked white pepper.', price: 440, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Dum Pukht Kakori Kebab (4 pcs)', description: 'The legendary melt-in-mouth mutton kebab flavored with cloves, rose petals, and royal spices, grilled on skewers.', price: 890, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Shahi Galawati Kebab with Paratha', description: 'Finely minced baby lamb patty smoked over charcoal and served on delicate ulte tawa ka paratha.', price: 860, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Subz Galouti Kebab (4 pcs)', description: 'Pan-seared spiced yam and green pea patties infused with cardamom, saffron, and kewra water.', price: 590, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 25 }
        ]
      },
      {
        name: 'Slow-Simmered Royal Mains',
        slug: 'dumpukht-mains',
        items: [
          { name: 'Nalli Nihari Begum-I-Khas', description: 'Tender lamb shanks simmered overnight in an aromatic pot roast reduction with ginger juliennes and lime.', price: 1080, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 40 },
          { name: 'Nizami Dum Ka Murgh', description: 'Chicken pieces slow-cooked on dum in a rich gravy of cashews, brown onions, yoghurt, and Kashmiri saffron.', price: 780, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Dum Dal Begum-I-Khas', description: 'The famous black lentils slow-cooked overnight over charcoal with tomato puree, white butter, and cream.', price: 560, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 25 },
          { name: 'Paneer Pasanda Khas', description: 'Stuffed cottage cheese triangles simmered in a creamy almond and tomato gravy scented with green cardamom.', price: 640, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 25 }
        ]
      },
      {
        name: 'Dastarkhwan Biryanis & Breads',
        slug: 'dumpukht-rice',
        items: [
          { name: 'Dum Pukht Biryani Khaas (Handi)', description: 'Aged basmati rice and baby lamb cooked in a sealed earthenware handi with saffron, mint, and pure ghee.', price: 920, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 35 },
          { name: 'Subz Moti Tehri', description: 'Fragrant basmati rice layered with garden vegetables, paneer pearls, and mild Awadhi spices.', price: 590, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 25 },
          { name: 'Warqi Paratha (2 pcs)', description: 'Flaky multi-layered royal flatbread kneaded with milk and baked on an inverted griddle.', price: 160, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Zafrani Sheermal', description: 'Traditional royal sweet bread enriched with saffron milk and baked in a clay tandoor.', price: 190, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Royal Meetha',
        slug: 'dumpukht-desserts',
        items: [
          { name: 'Shahi Tukda Begumi', description: 'Golden fried brioche soaked in saffron cardamom syrup and covered with thick malai rabdi.', price: 360, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Khubani Ka Meetha with Clotted Malai', description: 'Stewed Afghani dried apricots simmered in sugar syrup and topped with chilled buffalo milk malai.', price: 380, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 }
        ]
      }
    ]
  },

  // 5. Paradise Biryani (Retained, Audited Prices)
  {
    index: 5,
    name: 'Paradise Biryani',
    slug: 'paradise-biryani',
    tagline: 'The world\'s favorite Hyderabadi biryani institution since 1953',
    description: 'Hyderabad\'s historic biryani brand founded in Secunderabad in 1953. Famous for authentic Dum Biryanis, tender mutton seekh kebabs, and rich Mughlai gravies.',
    cover_image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 5120,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Prenderghast Road, MG Road, Secunderabad',
    city: 'Hyderabad',
    latitude: 17.4412000,
    longitude: 78.4985000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'Paradise Food Court Official / Swiggy Secunderabad',
    categories: [
      {
        name: 'World Famous Dum Biryani',
        slug: 'paradise-biryani',
        items: [
          { name: 'Paradise Special Mutton Biryani', description: 'Legendary long-grain basmati rice cooked on dum with two succulent spiced mutton pieces and rich spices.', price: 430, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Royal Chicken Dum Biryani', description: 'Authentic Hyderabadi chicken biryani cooked with layers of fragrant basmati rice, tender chicken, and saffron.', price: 340, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Nizami Egg Dum Biryani', description: 'Fragrant dum-cooked basmati rice served with seasoned boiled eggs and golden caramelized onions.', price: 260, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Special Veg Dum Biryani', description: 'Basmati rice layered with fresh seasonal vegetables, mint, fried onions, and whole spices in a sealed pot.', price: 240, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Paradise Starters & Kebabs',
        slug: 'paradise-starters',
        items: [
          { name: 'Mutton Seekh Kebab (4 pcs)', description: 'Minced mutton blended with garlic, ginger, green chillies, and aromatic spices, roasted on charcoal skewers.', price: 390, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Chicken Reshmi Kebab (6 pcs)', description: 'Boneless chicken breast pieces marinated in silky cashew paste, yoghurt, and cream, grilled in clay oven.', price: 340, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Tandoori Murgh (Half)', description: 'Traditional bone-in chicken marinated in spiced hung curd, roasted in clay tandoor until charred and juicy.', price: 290, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Paneer Tikka Shashlik', description: 'Fresh malai cottage cheese chunks, bell peppers, and red onions marinated in mustard oil tikka masala.', price: 280, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Curries & Breads',
        slug: 'paradise-curries',
        items: [
          { name: 'Butter Chicken Masala', description: 'Tandoori chicken pieces simmered in creamy makhani gravy enriched with butter and fenugreek leaves.', price: 330, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Mutton Rogan Josh', description: 'Kashmiri-style tender mutton curry cooked with red chillies, fennel seeds, and aromatic whole spices.', price: 420, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Mirchi Ka Salan (Extra Portion)', description: 'Traditional Hyderabadi peanut, sesame, and green chilli curry accompaniment for biryani.', price: 70, image_url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Butter Naan (2 pcs)', description: 'Soft and fluffy leavened white flour bread baked in tandoor and brushed generously with butter.', price: 80, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Heritage Desserts',
        slug: 'paradise-desserts',
        items: [
          { name: 'Paradise Double Ka Meetha', description: 'Traditional Hyderabadi bread pudding soaked in saffron-cardamom flavored milk and garnished with nuts.', price: 120, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Qubani Ka Meetha', description: 'Classic stewed dried apricot compote served with fresh cream, an indispensable Hyderabadi sweet.', price: 150, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Gulab Jamun with Rabdi (2 pcs)', description: 'Soft deep-fried milk dumplings soaked in rose sugar syrup and served with creamy condensed rabdi.', price: 110, image_url: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Matka Phirni', description: 'Creamy slow-cooked ground rice pudding set in chilled clay cups and infused with saffron and pistachios.', price: 95, image_url: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      }
    ]
  },

  // 6. Bawarchi Restaurant (Retained, Audited Prices)
  {
    index: 6,
    name: 'Bawarchi Restaurant',
    slug: 'bawarchi-restaurant',
    tagline: 'The iconic single-outlet RTC X Roads biryani benchmark',
    description: 'The legendary original Bawarchi at RTC X Roads, celebrated by generations for its deeply spiced Chicken Biryani, Mutton Fry Biryani, and sizzling Boti Kebabs.',
    cover_image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 6890,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 45,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Beside Sandhya Theatre, RTC X Roads, Chikkadpally',
    city: 'Hyderabad',
    latitude: 17.4042000,
    longitude: 78.4978000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'Swiggy / Zomato (Bawarchi Restaurant, RTC X Roads)',
    categories: [
      {
        name: 'Bawarchi Signature Dum Biryani',
        slug: 'bawarchi-biryani',
        items: [
          { name: 'Bawarchi Special Mutton Biryani', description: 'RTC X Roads flagship mutton dum biryani with two tender mutton pieces, boiled egg, and mirchi ka salan.', price: 410, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Bawarchi Chicken Dum Biryani', description: 'The undisputed RTC X Roads bestseller chicken biryani, generously spiced with brown onions and mint.', price: 290, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Mutton Fry Biryani', description: 'Hyderabadi biryani rice crowned with spicy, deeply pan-roasted bone-in mutton fry chunks.', price: 430, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Paneer Dum Biryani', description: 'Basmati rice cooked in dum style with marinated cottage cheese cubes, saffron, and fresh coriander.', price: 240, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Coal-Grilled Kebabs & Starters',
        slug: 'bawarchi-starters',
        items: [
          { name: 'Bawarchi Boti Kebab', description: 'Tender baby lamb cubes marinated in ginger, garlic, and fiery chilli paste, roasted over charcoal.', price: 360, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Chicken 65 RTC X Roads Style', description: 'Deep-fried spicy boneless chicken pieces tossed with curry leaves, yoghurt, and green chillies.', price: 270, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Tangdi Kebab (3 pcs)', description: 'Chicken drumsticks marinated in spiced yoghurt and roasted over live charcoal until golden and tender.', price: 290, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Apollo Fish Fry', description: 'Crisp batter-fried fresh fish fillets tossed with yoghurt, red chilli paste, and curry leaves.', price: 340, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Mughlai Curries & Tandoor',
        slug: 'bawarchi-curries',
        items: [
          { name: 'Mutton Masala Gravy', description: 'Tender mutton cooked in a rich onion and tomato-based gravy with crushed garam masala.', price: 360, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Kadai Chicken', description: 'Chicken pieces cooked in an iron wok with bell peppers, tomatoes, and freshly ground coriander seeds.', price: 290, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Dal Tadka Desi Ghee', description: 'Yellow lentils tempered with cumin seeds, garlic, red chillies, and pure desi cow ghee.', price: 180, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Roomali Roti (2 pcs)', description: 'Thin and soft flatbread baked on a hot domed griddle, best paired with kebabs and curries.', price: 40, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Desserts & Drinks',
        slug: 'bawarchi-desserts',
        items: [
          { name: 'Double Ka Meetha', description: 'Crisp fried bread soaked in warm saffron milk, condensed milk, and garnished with roasted almonds.', price: 95, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Khubani Ka Meetha with Ice Cream', description: 'Stewed apricots cooked to rich amber jam consistency, served with a scoop of vanilla ice cream.', price: 130, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Sweet Lassi Bawarchi Special', description: 'Chilled thick sweet yoghurt drink whipped with cardamom and topped with fresh malai.', price: 70, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 7. Cafe Bahar (Retained, Audited Prices)
  {
    index: 7,
    name: 'Cafe Bahar',
    slug: 'cafe-bahar',
    tagline: 'Legendary biryani, haleem & Irani chai since 1973',
    description: 'Hyderguda\'s historic culinary landmark operating since 1973. Famous for rich Mutton Dum Biryani, Tala Hua Gosht, and hot Irani chai brewed to perfection.',
    cover_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 5740,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Old MLA Quarters Road, Hyderguda, Basheerbagh',
    city: 'Hyderabad',
    latitude: 17.3995000,
    longitude: 78.4798000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'Swiggy / Zomato (Cafe Bahar, Hyderguda)',
    categories: [
      {
        name: 'Bahar Signature Biryanis',
        slug: 'bahar-biryani',
        items: [
          { name: 'Cafe Bahar Special Mutton Biryani', description: 'Hyderguda legendary mutton biryani packed with aromatic saffron rice, tender goat, and boiled egg.', price: 420, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Classic Chicken Dum Biryani', description: 'Flavourful basmati rice cooked on slow charcoal dum with marinated tender chicken pieces.', price: 280, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Fish Dum Biryani', description: 'Fragrant biryani rice layered with marinated boneless fish fillets and caramelized onions.', price: 350, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Bahar Veg Biryani Special', description: 'Aromatic basmati rice layered with seasoned mixed vegetables, fried cashews, and mint.', price: 220, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Tandoor & Charcoal Starters',
        slug: 'bahar-starters',
        items: [
          { name: 'Mutton Boti Fry Bahar Style', description: 'Tender mutton boti morsels pan-fried with onions, crushed peppercorns, and green chillies.', price: 350, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Murgh Malai Kebab (6 pcs)', description: 'Boneless chicken cubes marinated in creamy yoghurt, mild green chillies, and melted butter.', price: 320, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Tandoori Chicken (Full)', description: 'Whole chicken marinated in mustard oil, Kashmiri red chilli paste, and roasted in clay oven.', price: 460, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Paneer Malai Tikka', description: 'Chunks of cottage cheese marinated in cream, cashew paste, and aromatic green cardamom.', price: 270, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Mughlai Curries & Breads',
        slug: 'bahar-curries',
        items: [
          { name: 'Mutton Tala Hua Gosht', description: 'Classic Hyderabadi dry meat fry prepared with boneless tender goat, curry leaves, and green chillies.', price: 370, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Butter Chicken Bahar', description: 'Tandoori chicken simmered in a silky, lightly sweet tomato butter gravy with dried fenugreek.', price: 310, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Tandoori Roti (2 pcs)', description: 'Whole wheat flatbread baked against the charcoal tandoor wall.', price: 36, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Rumali Roti (2 pcs)', description: 'Thin and soft griddle-baked bread, perfect for wrapping spicy kebabs and dry meat.', price: 40, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Bahar Chai & Desserts',
        slug: 'bahar-desserts',
        items: [
          { name: 'Special Irani Chai Flask (Serves 4)', description: 'Freshly brewed thick and creamy Hyderabadi Irani chai delivered hot in a flask.', price: 110, image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Khubani Ka Meetha', description: 'Stewed dried apricots cooked to thick compote, topped with custard and blanched almond slivers.', price: 120, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Double Ka Meetha', description: 'Traditional golden fried bread pudding soaked in saffron milk and condensed milk.', price: 90, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      }
    ]
  },

  // 8. Hotel Shadab (Retained, Audited Prices)
  {
    index: 8,
    name: 'Hotel Shadab',
    slug: 'hotel-shadab',
    tagline: 'Historic Old City culinary crown near Charminar',
    description: 'The heartbeat of Old City Hyderabad near Madina Circle. Renowned for rich Zafrani Mutton Biryani, morning Paya Nahari, Bheja Fry, and flaky sheermal.',
    cover_image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 7420,
    price_tier: '₹₹',
    delivery_time_min: 30,
    delivery_time_max: 50,
    minimum_order: 250,
    delivery_fee: 45,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: '21-1-140/144, High Court Road, Madina Circle, Ghansi Bazaar',
    city: 'Hyderabad',
    latitude: 17.3685000,
    longitude: 78.4732000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'Swiggy / Zomato (Hotel Shadab, Ghansi Bazaar)',
    categories: [
      {
        name: 'Old City Heritage Dum Biryani',
        slug: 'shadab-biryani',
        items: [
          { name: 'Shadab Special Zafrani Mutton Biryani', description: 'Old City signature mutton biryani made with fragrant aged basmati rice, tender mutton cuts, and saffron.', price: 420, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Shadab Chicken Dum Biryani', description: 'Flavor-packed Hyderabadi chicken dum biryani served with spicy mirchi ka salan and dahi ki chutney.', price: 290, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Mutton Kheema Biryani', description: 'Spiced minced lamb cooked in dum style with long-grain rice, fresh mint, and browned onions.', price: 360, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Vegetable Dum Biryani', description: 'Garden vegetables slow-simmered with aromatic rice, cardamom, and fried onions.', price: 220, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Heritage Broths & Breakfast Specials',
        slug: 'shadab-heritage',
        items: [
          { name: 'Authentic Mutton Marag & Sheermal', description: 'Traditional thin mutton broth simmered with cracked black pepper, pistachios, and paired with sheermal.', price: 340, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Bheja Fry Old City Style', description: 'Tender goat brain tossed on hot tawa with green chillies, ginger juliennes, and ground spices.', price: 290, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Paya Nahari with Kulcha', description: 'Slow-cooked trotter soup simmered overnight with bone marrow and herbs, served with warm kulcha.', price: 310, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Gurda Kaleji Fry', description: 'Mutton kidneys and liver pan-fried with onions, curry leaves, and crushed black pepper.', price: 280, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Charcoal Kebabs & Curries',
        slug: 'shadab-kebabs',
        items: [
          { name: 'Shikampur Kebab (4 pcs)', description: 'Tender minced meat patties stuffed with hung yoghurt, mint, and green chillies, pan-seared in ghee.', price: 320, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Mutton Rogan Josh Shadab', description: 'Rich gravy of tender mutton pieces simmered in Kashmiri red chillies and yoghurt.', price: 350, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Tandoori Murgh (Full)', description: 'Whole marinated chicken roasted in clay oven, seasoned with chaat masala and lime juice.', price: 440, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Tandoori Naan (2 pcs)', description: 'Fluffy tandoor-baked flatbreads, ideal for scooping up thick gravies.', price: 50, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Deccani Sweets & Chai',
        slug: 'shadab-sweets',
        items: [
          { name: 'Shadab Special Shahi Tukda', description: 'Crispy fried bread soaked in saffron milk and topped with thick rabdi and dry fruits.', price: 120, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Qubani Ka Meetha with Malai', description: 'Stewed dried apricots garnished with fresh clotted malai and blanched apricot kernels.', price: 130, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Irani Zafrani Chai Flask', description: 'Authentic Old City Irani dum tea brewed with saffron and caramelized milk.', price: 110, image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      }
    ]
  },

  // 9. Pista House (Retained, Audited Prices)
  {
    index: 9,
    name: 'Pista House',
    slug: 'pista-house',
    tagline: 'World-famous GI-tagged Haleem & Hyderabadi bakery classics',
    description: 'Renowned world over for its Geographical Indication (GI) tagged Hyderabadi Mutton Haleem, aromatic Zafrani Dum Biryani, and traditional bakery delicacies.',
    cover_image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 8120,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Opposite Cyber Gateway, HITEC City Main Road, Madhapur',
    city: 'Hyderabad',
    latitude: 17.4475000,
    longitude: 78.3789000,
    cuisines: ['hyderabadi-dum', 'european-bistro'],
    public_source: 'Swiggy / Pista House Official Delivery Portal',
    categories: [
      {
        name: 'GI-Tagged World Famous Haleem',
        slug: 'pista-haleem',
        items: [
          { name: 'Pista House Royal Mutton Haleem', description: 'Pure mutton pounded with broken wheat, pure ghee, lentils, and royal spices, slow-cooked for 12 hours.', price: 290, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Special Chicken Haleem', description: 'Flavorful chicken haleem slow-cooked with wheat, lentils, and spices, topped with fried onions and mint.', price: 240, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 },
          { name: 'Family Pack Mutton Haleem (1 kg)', description: 'Grand 1 kg pack of GI-tagged mutton haleem served with fried onions, cashew nuts, and fresh lime.', price: 850, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Vegetarian Dry Fruit Haleem', description: 'A delicate vegetarian rendition prepared with oats, cracked wheat, lentils, and rich roasted dry fruits.', price: 210, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Zafrani Biryanis',
        slug: 'pista-biryani',
        items: [
          { name: 'Zafrani Mutton Dum Biryani', description: 'Fragrant basmati rice cooked on charcoal dum with tender mutton chunks and saffron infusion.', price: 390, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Zafrani Chicken Dum Biryani', description: 'Signature Hyderabadi chicken biryani cooked with aged basmati rice, mint, and fried onions.', price: 290, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Special Mutton Kheema Biryani', description: 'Slow-cooked spiced mutton mince layered with aromatic basmati rice and fresh herbs.', price: 340, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Paneer Dum Biryani Handi', description: 'Earthen pot biryani cooked with marinated paneer cubes and whole garam masala.', price: 240, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Kebabs & Curries',
        slug: 'pista-kebabs',
        items: [
          { name: 'Mutton Seekh Kebab', description: 'Charcoal-grilled minced mutton skewers flavored with cumin, ginger, and green chillies.', price: 340, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Murgh Tikka (6 pcs)', description: 'Tender chicken morsels marinated in spiced yoghurt and roasted in clay oven.', price: 290, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Mutton Rogan Josh', description: 'Aromatic mutton curry simmered in rich gravy with Kashmiri red chillies and whole spices.', price: 360, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Butter Naan', description: 'Clay-oven baked white flour flatbread brushed with butter.', price: 45, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Bakery Confections & Sweets',
        slug: 'pista-bakery',
        items: [
          { name: 'Apricot Delight Cake Slice', description: 'Sponge cake layered with rich stewed apricot compote and whipped custard.', price: 140, image_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Assorted Baklava Box (250g)', description: 'Crisp multi-layered Middle Eastern phyllo pastry loaded with chopped pistachios and honey.', price: 380, image_url: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Osmania Biscuits Tin (400g)', description: 'The quintessential sweet and salty Hyderabadi melt-in-mouth chai tea biscuits.', price: 180, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Khubani Ka Meetha', description: 'Stewed dried apricots garnished with cream and blanched almond slivers.', price: 120, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 10. Shah Ghouse Hotel & Restaurant (Retained, Audited Prices)
  {
    index: 10,
    name: 'Shah Ghouse Hotel & Restaurant',
    slug: 'shah-ghouse',
    tagline: 'Legendary night dining, mutton biryani & boti kebabs',
    description: 'A heavyweight culinary institution in Hyderabad famed for its late-night bustling service, authentic Mutton Dum Biryani, Tala Hua Gosht, and rich Haleem.',
    cover_image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 6790,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 45,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Opposite Bio-Diversity Park, Raidurgam, Gachibowli',
    city: 'Hyderabad',
    latitude: 17.4328000,
    longitude: 78.3752000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'Swiggy / Zomato (Shah Ghouse, Gachibowli / Tolichowki)',
    categories: [
      {
        name: 'Shah Ghouse Dum Biryanis',
        slug: 'shahghouse-biryani',
        items: [
          { name: 'Shah Ghouse Special Mutton Biryani', description: 'The famous house special dum biryani packed with tender goat meat pieces, egg, and spiced rice.', price: 410, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Special Chicken Dum Biryani', description: 'Flavourful basmati rice layered with spiced chicken, mint, and fried onions, served with salan and raita.', price: 290, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Mutton Fry Piece Biryani', description: 'Aromatic biryani rice topped with spicy, pan-fried succulent mutton fry chunks.', price: 430, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Veg Dum Biryani', description: 'Dum-cooked basmati rice with mixed fresh vegetables and whole aromatic spices.', price: 210, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Haleem & Mughlai Starters',
        slug: 'shahghouse-starters',
        items: [
          { name: 'Shah Ghouse Mutton Haleem', description: 'Slow-simmered pounded meat and wheat porridge prepared in pure ghee with aromatic spices.', price: 280, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Tangdi Kebab (3 pcs)', description: 'Juicy chicken drumsticks marinated in spicy yoghurt tikka marinade, char-grilled in tandoor.', price: 280, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Tala Hua Gosht', description: 'Crisp boneless mutton pieces pan-fried with onions, curry leaves, and green chillies.', price: 340, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Chicken Reshmi Kebab (6 pcs)', description: 'Melt-in-mouth chicken breast cubes marinated in cream, cashews, and mild spices.', price: 310, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Curries & Flatbreads',
        slug: 'shahghouse-curries',
        items: [
          { name: 'Mutton Korma', description: 'Classic mutton curry slow-cooked with browned onion paste, yoghurt, and whole spices.', price: 340, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Murgh Makhani Butter Chicken', description: 'Tandoori chicken pieces simmered in sweet and tangy butter tomato gravy.', price: 290, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Roomali Roti (2 pcs)', description: 'Handkerchief thin griddle flatbreads made fresh.', price: 40, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Butter Naan (2 pcs)', description: 'Tandoori leavened flatbreads topped with melted butter.', price: 70, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Desserts & Chai',
        slug: 'shahghouse-desserts',
        items: [
          { name: 'Special Double Ka Meetha', description: 'Traditional fried bread pudding in saffron-scented condensed milk.', price: 95, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Qubani Ka Meetha with Cream', description: 'Rich stewed apricot compote with fresh cream.', price: 120, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Irani Dum Chai Flask', description: 'Freshly prepared thick Hyderabadi Irani chai in insulated flask.', price: 100, image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 11. Rayalaseema Ruchulu (Retained, Audited Prices)
  {
    index: 11,
    name: 'Rayalaseema Ruchulu',
    slug: 'rayalaseema-ruchulu',
    tagline: 'Authentic fiery Rayalaseema & Andhra culinary heritage',
    description: 'Renowned for introducing authentic Rayalaseema cuisine to Hyderabad. Celebrated for Ragi Sankati with Natu Kodi Pulusu, spicy Gongura Mamsam, and Rayalaseema thalis.',
    cover_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 3820,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 300,
    delivery_fee: 45,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Level 5, 36th Square, Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4325000,
    longitude: 78.4072000,
    cuisines: ['andhra-rayalaseema', 'telangana-heritage'],
    public_source: 'Swiggy / Rayalaseema Ruchulu Official Menu',
    categories: [
      {
        name: 'Rayalaseema Starters & Vepudus',
        slug: 'ruchulu-starters',
        items: [
          { name: 'Kodi Vepudu', description: 'Tender chicken tossed with village spices, curry leaves, and green chillies.', price: 340, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Rayalaseema Mamsam Vepudu', description: 'Pan-roasted tender mutton cooked dry with shallots and black pepper.', price: 440, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Royyala Vepudu (Prawn Fry)', description: 'Fresh prawns pan-fried with caramelized onions and roasted spices.', price: 460, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Kaju Paneer Vepudu', description: 'Crisp cottage cheese cubes dry-fried with roasted cashews and curry leaves.', price: 290, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Rustic Curries & Ragi Combos',
        slug: 'ruchulu-curries',
        items: [
          { name: 'Ragi Sankati with Natu Kodi Pulusu', description: 'Country chicken curry simmered with spicy Rayalaseema masala, served with steamed ragi mudda and ghee.', price: 440, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 28 },
          { name: 'Gongura Mamsam', description: 'Tender baby mutton pieces simmered in a tangy sorrel leaves gravy.', price: 420, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Rayalaseema Talakaya Kura', description: 'Traditional head meat stew slow-cooked with village spices and black pepper.', price: 390, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Gutti Vankaya Kura', description: 'Baby brinjals cooked in roasted peanut, sesame, and coriander gravy.', price: 260, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Pulaos, Thalis & Breads',
        slug: 'ruchulu-rice',
        items: [
          { name: 'Ulavacharu Kodi Pulao', description: 'Fragrant rice cooked in rich horse gram broth, topped with spicy chicken.', price: 380, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Rayalaseema Special Non-Veg Thali', description: 'Grand feast featuring chicken curry, mutton fry, sambar, rasam, curd, and sweets.', price: 490, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Jonnah Roti (2 pcs)', description: 'Healthy and wholesome unleavened flatbreads made from roasted jowar millet flour.', price: 60, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Ulava Charu with Cream', description: 'Traditional thick horse gram soup served with fresh malai and hot steamed rice accompaniment.', price: 160, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Desserts & Beverages',
        slug: 'ruchulu-desserts',
        items: [
          { name: 'Junnu (Colostrum Milk Pudding)', description: 'Steamed sweet delicacy made with first-day cow milk, jaggery, and black pepper.', price: 140, image_url: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Poornam Boorelu (2 pcs)', description: 'Crisp golden batter-fried balls filled with sweet chana dal and jaggery mixture.', price: 120, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Majjiga Charu Cooler', description: 'Traditional spiced buttermilk flavored with crushed ginger, mustard, and green chillies.', price: 60, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 12. Chutneys (Retained, Audited Prices)
  {
    index: 12,
    name: 'Chutneys',
    slug: 'chutneys',
    tagline: 'Iconic South Indian tiffins & the legendary 6 signature chutneys',
    description: 'Hyderabad\'s premier vegetarian breakfast and tiffin destination. Famous for Babai Idli with pure white butter, Guntur Karampodi Dosa, MLA Pesarattu, and its signature rainbow chutneys.',
    cover_image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 5340,
    price_tier: '₹₹',
    delivery_time_min: 20,
    delivery_time_max: 35,
    minimum_order: 200,
    delivery_fee: 35,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 3-6-271, Road No. 3, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4235000,
    longitude: 78.4485000,
    cuisines: ['south-indian-tiffins', 'pure-vegetarian'],
    public_source: 'Swiggy / Zomato (Chutneys, Banjara Hills)',
    categories: [
      {
        name: 'Iconic Breakfast Tiffins',
        slug: 'chutneys-tiffins',
        items: [
          { name: 'Babai Idli with White Butter (3 pcs)', description: 'Ultra-soft steamed rice idlis topped with a dollop of fresh churned white butter and podi.', price: 155, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Guntur Idli Karampodi Spiced', description: 'Steamed idlis tossed in roasted Guntur red chilli podi and pure desi ghee.', price: 145, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Meda Vada Sambar (2 pcs)', description: 'Crisp on the outside, fluffy inside lentil doughnuts served with hot spiced vegetable sambar.', price: 135, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Poori with Potato Sagu (3 pcs)', description: 'Fluffy golden fried whole wheat pooris served with spiced potato sagu and coconut chutney.', price: 145, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Gourmet Dosa Collection',
        slug: 'chutneys-dosas',
        items: [
          { name: 'MLA Pesarattu with Upma Filling', description: 'Whole green gram batter crepe roasted on griddle, stuffed with ginger-spiced semolina upma.', price: 175, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Ghee Karam Dosa', description: 'Crisp golden crepe roasted in pure ghee and spiced with traditional Andhra karampodi.', price: 165, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Corn and Cheese Dosa', description: 'Modern fusion crepe layered with sweet corn kernels, melted mozzarella, and green chillies.', price: 195, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Butter Masala Dosa', description: 'Crispy fermented crepe smeared with red garlic chutney, filled with potato bhaji and butter.', price: 150, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'South Indian Rice Specialties',
        slug: 'chutneys-rice',
        items: [
          { name: 'South Indian Special Thali Feast', description: 'Complete traditional vegetarian meal with poori, rice, sambar, rasam, kootu, curd, and sweet.', price: 265, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 18 },
          { name: 'Bisi Bele Bath with Boondi', description: 'Karnataka-style spiced rice and lentil porridge cooked with seasonal vegetables and pure ghee.', price: 155, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Lemon Rice with Fried Peanuts', description: 'Fragrant rice tempered with turmeric, fresh lemon juice, curry leaves, and crunchy peanuts.', price: 140, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Tempered Curd Rice', description: 'Cooling seasoned yoghurt rice tempered with mustard seeds, green chillies, and ginger.', price: 130, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Beverages & Sweets',
        slug: 'chutneys-drinks',
        items: [
          { name: 'Degree Filter Coffee', description: 'Authentic South Indian chicory filter coffee frothed to perfection in brass tumbler.', price: 65, image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Rava Kesari Bath with Cashews', description: 'Warm golden semolina pudding enriched with pure ghee, saffron, and roasted cashew nuts.', price: 105, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Spiced Neer Moru (Buttermilk)', description: 'Chilled buttermilk tempered with ginger, green chillies, hing, and fresh coriander.', price: 55, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 13. Tatva (Retained, Audited Prices)
  {
    index: 13,
    name: 'Tatva',
    slug: 'tatva',
    tagline: 'Refined pure vegetarian gourmet dining in Jubilee Hills',
    description: 'Award-winning vegetarian fine dining on Road No. 36. An exquisite fusion of contemporary Indian, Mediterranean, and European cuisines in an elegant setting.',
    cover_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 2450,
    price_tier: '₹₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 400,
    delivery_fee: 55,
    packaging_fee: 30,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 1215/A, Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4332000,
    longitude: 78.4045000,
    cuisines: ['pure-vegetarian', 'modern-indian'],
    public_source: 'Swiggy / Zomato / Tatva Official Site (Tatva, Jubilee Hills)',
    categories: [
      {
        name: 'Gourmet Vegetarian Starters',
        slug: 'tatva-starters',
        items: [
          { name: 'Galouti Kebab Veg', description: 'Melt-in-mouth smoked yam and lentil kebabs infused with royal spices, served on coin parathas.', price: 420, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Paneer Tikka Angaar', description: 'Cottage cheese cubes marinated in fiery red spices and hung curd, roasted in clay oven.', price: 440, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Dahi Ke Kebab', description: 'Crispy outer shell filled with spiced hung yoghurt, coriander, and pomegranate reduction.', price: 380, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Crispy Lotus Stem Honey Chilli', description: 'Thinly sliced lotus stem crisped and tossed with honey, sesame, and scallions.', price: 390, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Signature Curries & Handis',
        slug: 'tatva-curries',
        items: [
          { name: 'Dal Tatva Special', description: 'Slow-simmered black lentils cooked overnight on charcoal with rich cream and churned butter.', price: 390, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 22 },
          { name: 'Paneer Lababdar Handi', description: 'Fresh malai paneer simmered in a spiced tomato, cashew, and onion gravy with ginger.', price: 440, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Subz Handi Biryani', description: 'Fragrant aged basmati rice cooked on dum with seasonal vegetables and whole spices in clay handi.', price: 390, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 25 },
          { name: 'Truffle Mushroom Risotto', description: 'Creamy arborio rice simmered with wild button and porcini mushrooms, finished with white truffle oil.', price: 540, image_url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 24 }
        ]
      },
      {
        name: 'Artisan Breads & Soup',
        slug: 'tatva-breads',
        items: [
          { name: 'Garlic Butter Naan (2 pcs)', description: 'Tandoori flatbread brushed with garlic and butter.', price: 120, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Chur Chur Naan', description: 'Crisp crushed flaky layered tandoori bread with spiced potato stuffing.', price: 130, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Wild Mushroom Soup', description: 'Velvety cream of roasted wild mushrooms with a touch of thyme and croutons.', price: 240, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Desserts & Artisanal Drinks',
        slug: 'tatva-desserts',
        items: [
          { name: 'Gulab Jamun Cheesecake', description: 'Fusion dessert combining classic New York baked cheesecake with soft gulab jamun center.', price: 280, image_url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Rasmalai Tres Leches', description: 'Mexican three-milk soaked sponge cake infused with cardamom rasmalai rabdi.', price: 290, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Kesar Badam Milk', description: 'Warm sweetened milk infused with saffron strands and slivered almonds.', price: 140, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Virgin Mojito Cooler', description: 'Refreshing sparkling cooler with fresh mint, lime juice, and crushed ice.', price: 170, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  }
];

module.exports = { PART1 };
