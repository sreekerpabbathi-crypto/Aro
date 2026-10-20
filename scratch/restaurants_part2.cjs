// scratch/restaurants_part2.js
// Restaurants 13 to 24

const PART2 = [
  // 13. Tatva (Jubilee Hills)
  {
    index: 13,
    name: 'Tatva',
    slug: 'tatva',
    tagline: 'Award-winning luxury pure-vegetarian fine dining',
    description: 'An elevated haute gastronomy experience celebrating vegetarian culinary art. Signature truffle infused khichdi, melt-in-mouth lotus stem galoutis, and progressive Indian-continental creations.',
    cover_image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    rating_count: 890,
    price_tier: '₹₹₹₹',
    delivery_time_min: 35,
    delivery_time_max: 50,
    minimum_order: 600,
    delivery_fee: 75,
    packaging_fee: 30,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 1215/A, Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4338000,
    longitude: 78.4055000,
    cuisines: ['pure-vegetarian', 'modern-indian'],
    public_source: 'tatvapr.com / Zomato Jubilee Hills',
    categories: [
      {
        name: 'Gourmet Vegetarian Starters',
        slug: 'tatva-starters',
        items: [
          { name: 'Kamalkakdi Ki Galouti (4 pcs)', description: 'Lotus stem smoked patties spiced with potli masala, served over miniature saffron sheermal crisps.', price: 590, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Smoked Jalapeno Paneer Tikka', description: 'Malai paneer cubes stuffed with pickled jalapenos, glazed with hung curd and smoked in charcoal tandoor.', price: 540, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Edamame Truffle Dim Sum (4 pcs)', description: 'Crystal skin dumplings packed with young soybeans, water chestnuts, and black truffle drizzle.', price: 620, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 18 },
          { name: 'Crispy Waterchestnut Pepper Salt', description: 'Wok-tossed crunchy water chestnuts with scallions, crushed black pepper, and sea salt.', price: 480, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Fine Dining Mains',
        slug: 'tatva-mains',
        items: [
          { name: 'Tatva Signature Truffle Khichdi', description: 'Aged basmati and yellow lentils cooked risotto-style with white truffle oil, shaved parmesan, and garlic crisps.', price: 690, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 22 },
          { name: 'Paneer Lababdar Khaas', description: 'Cottage cheese steeped in rich cashew-tomato gravy enriched with grated paneer and kasuri methi.', price: 580, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Subz Dum Handi Awadhi', description: 'Seasonal florets, baby potatoes, carrots, and baby corn slow-cooked in yellow chili almond gravy.', price: 520, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Dal Tatva Slow Simmered', description: 'Black lentils braised for 18 hours on charcoal embers with sweet cream and churned butter.', price: 490, image_url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Artisanal Breads & Rice',
        slug: 'tatva-breads',
        items: [
          { name: 'Blue Cheese & Olive Naan', description: 'Clay oven flatbread stuffed with mild blue cheese crumble and kalamata olives.', price: 240, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Chur Chur Butter Naan', description: 'Crisp crushed flaky naan loaded with melted butter and chaat spices.', price: 180, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Subz Chilman Biryani Pot', description: 'Fragrant basmati cooked under puff pastry seal with vegetables, mint, and saffron.', price: 540, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 25 },
          { name: 'Zafrani Jeera Pulao', description: 'Long basmati rice tempered with royal cumin seeds and clarified butter.', price: 340, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Desserts & Mocktails',
        slug: 'tatva-desserts',
        items: [
          { name: 'Deconstructed Baked Rasgulla', description: 'Warm baked rasgulla in pistachio rabdi caramel crust with edible flowers.', price: 420, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Belgian Chocolate Hazelnut Sphere', description: 'Warm chocolate sphere melted with pouring caramel sauce over hazelnut mousse.', price: 480, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 14 },
          { name: 'Rose & Cardamom Smoked Cooler', description: 'Damask rose shrub with crushed mint, pink salt, and chilled soda.', price: 260, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 14. Farzi Cafe (Jubilee Hills)
  {
    index: 14,
    name: 'Farzi Cafe',
    slug: 'farzi-cafe',
    tagline: 'Modern Indian bistro & molecular illusion gastronomy',
    description: 'Playful, modern progressive Indian dining in Jubilee Hills. Creating culinary illusions with regional Indian favorites: Dal Chawal Arancini, Butter Chicken Baos, and Rasmalai Tres Leches.',
    cover_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 940,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 450,
    delivery_fee: 60,
    packaging_fee: 25,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 1200, Road No. 59, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4354000,
    longitude: 78.4012000,
    cuisines: ['modern-indian', 'european-bistro'],
    public_source: 'massivehotels.com/farzicafe / EazyDiner Jubilee Hills',
    categories: [
      {
        name: 'Small Plates & Farzified Tapas',
        slug: 'farzi-small-plates',
        items: [
          { name: 'Dal Chawal Arancini (4 pcs)', description: 'Crisp rolled yellow lentil risotto balls topped with tomato pachadi, papad roll, and mint foam.', price: 460, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 18 },
          { name: 'Tempura Fried Prawns with Nimboo Mirchi Aioli', description: 'Crispy Japanese-style battered prawns tossed in spicy green chili-lime emulsion.', price: 620, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Butter Chicken Bao (3 pcs)', description: 'Fluffy steamed lotus flour buns stuffed with shredded tandoori chicken, makhani glaze, and pickled onions.', price: 540, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Chilli Paneer Pockets with Szechuan Mayo', description: 'Crispy wonton wrappers filled with spicy Indo-Chinese cottage cheese filling.', price: 420, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Modern Indian Large Plates',
        slug: 'farzi-large-plates',
        items: [
          { name: 'Braised Mutton Shank Rogan Josh', description: 'Overnight braised tender shank served with spiced bone marrow jus and chili oil.', price: 780, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Smoked Butter Chicken San Marzano', description: 'Charred chicken breast in smoked tomato-cashew reduction finished with micro greens.', price: 640, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Paneer Makhani with Sourdough Naan', description: 'Cottage cheese steaks seared and served over silky makhani gravy with freshly baked mini sourdough naan.', price: 560, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Farzi Dal Makhani Cream Bowl', description: 'Classic black lentils simmered with churned butter and cream for 16 hours.', price: 460, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Rice, Pulaos & Breads',
        slug: 'farzi-rice-breads',
        items: [
          { name: 'Farzi Mutton Dum Biryani Bowl', description: 'Kolkata-Hyderabad fusion biryani served with boiled egg and spiced potato chunks in dum pot.', price: 620, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Wild Mushroom Ghee Roast Rice', description: 'Fragrant short-grain rice tossed with Kundapur ghee roast masala and button mushrooms.', price: 480, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Truffle & Rosemary Olive Naan', description: 'Leavened tandoor bread brushed with white truffle oil and fresh rosemary.', price: 190, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Chilli Cheese Garlic Kulcha', description: 'Crispy clay oven flatbread stuffed with cheddar, green chilies, and garlic.', price: 180, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Illusion Desserts',
        slug: 'farzi-desserts',
        items: [
          { name: 'Rasmalai Tres Leches', description: 'Mexican three-milk soaked sponge topped with delicate Kolkata rasmalai and rose petal dust.', price: 420, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Parle-G Cheesecake with Rabdi', description: 'Nostalgic childhood glucose biscuit crust filled with cream cheese mousse and poured condensed rabdi.', price: 390, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Smoked Blackberry Mojito', description: 'Cold blackberry nectar, crushed mint, lime, and wood-smoke infusion.', price: 280, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 15. Conçū (Jubilee Hills)
  {
    index: 15,
    name: 'Conçū',
    slug: 'concu',
    tagline: 'Artisanal European patisserie & luxury all-day cafe',
    description: 'Hyderabad’s benchmark for French pastry, viennoiserie, handmade pasta, and boutique European bistro dining in a serene Jubilee Hills garden courtyard.',
    cover_image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    rating_count: 1650,
    price_tier: '₹₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 350,
    delivery_fee: 50,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 738, Road No. 37, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4361000,
    longitude: 78.4042000,
    cuisines: ['european-bistro'],
    public_source: 'concu.in / Zomato Jubilee Hills',
    categories: [
      {
        name: 'Viennoiserie & Savory Bakes',
        slug: 'concu-viennoiserie',
        items: [
          { name: 'Butter Croissant French AOP', description: 'Traditional laminated 27-layer flaky croissant crafted with French Normandy butter.', price: 220, image_url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Pain au Chocolat Valrhona', description: 'Flaky viennoiserie filled with twin batons of dark 64% Valrhona chocolate.', price: 260, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Quiche Florentine', description: 'Buttery shortcrust tart baked with egg custard, baby spinach, sauteed mushrooms, and Gruyere cheese.', price: 340, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Smoked Chicken & Leek Quiche', description: 'Tender smoked chicken breast, leeks, and aged cheddar in crisp pastry shell.', price: 380, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Bistro Mains & Sourdough Tartines',
        slug: 'concu-mains',
        items: [
          { name: 'Avocado Tartine with Poached Eggs', description: 'Crushed Hass avocado on toasted country sourdough with zaatar, feta, chili flakes, and organic eggs.', price: 460, image_url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Burrata Bruschetta Conçū', description: 'Whole fresh burrata ball over charred sourdough rubbed with garlic and heirloom cherry tomato compote.', price: 540, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 14 },
          { name: 'Grilled Herb Chicken Steak', description: 'Sous-vide chicken breast pan-seared with rosemary jus, garlic mashed potatoes, and buttered greens.', price: 620, image_url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Wild Mushroom Risotto', description: 'Arborio rice slowly cooked in vegetable broth with porcini, parmesan shavings, and white truffle oil.', price: 580, image_url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Artisanal Patisserie & Entremets',
        slug: 'concu-patisserie',
        items: [
          { name: 'Conçū Classic Tiramisu Tub', description: 'Kahlua and espresso soaked savoiardi biscuits layered with authentic mascarpone mousse.', price: 420, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Opera Gateau French Classic', description: 'Almond sponge Joconde cake soaked in coffee syrup, layered with ganache and coffee buttercream.', price: 380, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Pistachio Raspberry Tart', description: 'Sweet tart crust filled with Bronte pistachio frangipane, fresh raspberries, and whipped ganache.', price: 390, image_url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Madagascar Vanilla Bean Cheesecake', description: 'Velvety New York style cheesecake with genuine bourbon vanilla specks and graham crust.', price: 360, image_url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Specialty Beverages & Coffee',
        slug: 'concu-coffee',
        items: [
          { name: 'Iced Spanish Latte', description: 'Double shot of arabica espresso shaken with condensed milk and whole milk over ice.', price: 260, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Hot Belgian Mocha', description: 'Single-origin espresso blended with melted Belgian dark chocolate and micro-foamed milk.', price: 280, image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Hibiscus Peach Cold Brew Tea', description: 'Steeped Egyptian hibiscus petals with white peach reduction and mint.', price: 240, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 16. Roastery Coffee House (Jubilee Hills)
  {
    index: 16,
    name: 'Roastery Coffee House',
    slug: 'roastery-coffee-house',
    tagline: 'Artisanal Indian estate coffees & gourmet cafe cuisine',
    description: 'Set in a sprawling heritage bungalow in Jubilee Hills, famed for single-estate pour-overs, cold brews, crispy onion rings, gourmet pastas, and grilled chicken steaks.',
    cover_image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 1540,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 300,
    delivery_fee: 45,
    packaging_fee: 20,
    is_featured: false,
    is_open: true,
    address_line: 'House 418, Road No. 41, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4298000,
    longitude: 78.4091000,
    cuisines: ['european-bistro'],
    public_source: 'roasterycoffee.co.in / LBB Hyderabad',
    categories: [
      {
        name: 'Single-Origin Estate Coffees',
        slug: 'roastery-coffees',
        items: [
          { name: 'Monsooned Malabar Pour Over', description: 'Smooth, heavy-bodied coffee processed on Malabar coast with notes of dark chocolate and roasted nuts.', price: 240, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Cascara Cold Brew Coffee', description: 'Brewed from dried coffee cherry husks with natural notes of dried fruit, honey, and hibiscus.', price: 260, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Cortado Double Shot', description: 'Equal parts single-origin espresso and silky steamed milk in an artisanal glass.', price: 210, image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Cranberry Nitro Iced Coffee', description: 'Nitro-infused cold brew charged with cranberry juice and lime spritz.', price: 280, image_url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      },
      {
        name: 'Bistro Starters & Appetizers',
        slug: 'roastery-starters',
        items: [
          { name: 'Roastery Peri Peri Onion Rings', description: 'Gigantic crispy panko-coated Spanish onion rings dusted with in-house peri-peri blend and garlic dip.', price: 340, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Cheesy Garlic Pull-Apart Bread', description: 'Warm sourdough loaf baked with molten mozzarella, roasted garlic butter, and parsley.', price: 360, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Chicken Popcorn with Spicy Mayo', description: 'Bite-sized chicken nuggets seasoned with Cajun spices, fried golden crisp.', price: 380, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 14 },
          { name: 'Jalapeno Cheese Poppers (6 pcs)', description: 'Crispy crumbed poppers filled with cheddar cheese and pickled jalapenos.', price: 320, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Pasta & Gourmet Mains',
        slug: 'roastery-mains',
        items: [
          { name: 'Grilled Mustard Chicken Steak', description: 'Pan-roasted chicken breast in Dijon mustard cream sauce with roasted potatoes and sauteed veggies.', price: 540, image_url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Penne Arrabiata with Garlic Bread', description: 'Al dente penne in spicy San Marzano tomato sauce with fresh basil and parmesan.', price: 440, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Creamy Mushroom & Truffle Fettuccine', description: 'Fettuccine ribbons tossed with button and shiitake mushrooms in garlic-parmesan cream.', price: 510, image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Roastery Club Sandwich Non-Veg', description: 'Triple decker toasted sandwich with grilled chicken, fried egg, lettuce, cheddar, and fries.', price: 460, image_url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Desserts',
        slug: 'roastery-desserts',
        items: [
          { name: 'Warm Chocolate Fudge Brownie with Gelato', description: 'Gooey walnut brownie warmed and served with artisanal vanilla ice cream.', price: 310, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Baked Blueberry Cheesecake', description: 'Classic baked cheesecake crowned with sweet-tart wild blueberry compote.', price: 340, image_url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Carrot Walnut Cake Slice', description: 'Moist spiced carrot sponge layered with rich cream cheese frosting.', price: 280, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 17. Olive Bistro & Bar (Jubilee Hills / Durgam Cheruvu)
  {
    index: 17,
    name: 'Olive Bistro & Bar',
    slug: 'olive-bistro',
    tagline: 'Mediterranean fine dining overlooking the Secret Lake',
    description: 'White-walled Mediterranean sanctuary perched over Durgam Cheruvu, offering sun-kissed pizzas, handmade pastas, and rustic European coastal recipes.',
    cover_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 1280,
    price_tier: '₹₹₹₹',
    delivery_time_min: 35,
    delivery_time_max: 50,
    minimum_order: 600,
    delivery_fee: 70,
    packaging_fee: 30,
    is_featured: true,
    is_open: true,
    address_line: 'Road No. 46, Atop Durgam Cheruvu Secret Lake, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4382000,
    longitude: 78.3965000,
    cuisines: ['european-bistro', 'artisanal-italian'],
    public_source: 'olivebarandkitchen.com / Zomato Jubilee Hills',
    categories: [
      {
        name: 'Antipasti & Mediterranean Tapas',
        slug: 'olive-antipasti',
        items: [
          { name: 'Pugliese Burrata Caprese', description: 'Fresh 125g burrata with charred heirloom tomatoes, basil pesto emulsion, and balsamic pearls.', price: 680, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Gambas al Ajillo (Garlic Prawns)', description: 'Tiger prawns sizzling in olive oil, toasted garlic chips, dried chilies, and grilled sourdough.', price: 740, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Mezze Platter Royale', description: 'Silky hummus, smoked moutabal, tzatziki, crispy falafel, and warm Zaatar pita pockets.', price: 590, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 },
          { name: 'Crispy Polenta Bites with Gorgonzola Dip', description: 'Golden fried herb polenta cubes with warm creamy gorgonzola cheese sauce.', price: 490, image_url: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 }
        ]
      },
      {
        name: 'Wood-Fired Pizzas & Handmade Pastas',
        slug: 'olive-pizzas-pastas',
        items: [
          { name: 'Prosciutto di Parma & Arugula Pizza', description: 'San Marzano DOP base, mozzarella, 18-month cured Parma ham, shaved parmesan, and baby arugula.', price: 890, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Wild Truffle & Four Cheese Pizza', description: 'Gorgonzola, fontina, mozzarella, and smoked scamorza with white truffle glaze.', price: 820, image_url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Handmade Pappardelle with Braised Lamb Ragu', description: 'Slow-cooked lamb shoulder in red wine reduction over broad egg ribbon pasta.', price: 840, image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Spaghetti Aglio Olio e Peperoncino', description: 'Bronze-cut spaghetti tossed in cold-pressed EVOO, sliced garlic, chili flakes, and parsley.', price: 620, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Coastal European Mains',
        slug: 'olive-mains',
        items: [
          { name: 'Pan-Seared Chilean Sea Bass', description: 'Wild sea bass in lemon-caper beurre blanc with buttered asparagus and crushed baby potatoes.', price: 1250, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 28 },
          { name: 'Roast Rosemary Chicken Supreme', description: 'Juicy half chicken roasted with garlic and wild herbs, served with potato gratin.', price: 740, image_url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Stuffed Portobello Mushroom Steaks', description: 'Baked giant mushroom caps filled with ratatouille and gratin of goat cheese.', price: 660, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Sourdough Garlic Focaccia Loaf', description: 'Freshly baked focaccia with roasted garlic cloves and Maldon sea salt.', price: 340, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Dolci & Refreshments',
        slug: 'olive-desserts',
        items: [
          { name: 'Olive Signature Tiramisu', description: 'Classic Venetian recipe with espresso-soaked sponge, mascarpone cream, and dark cocoa.', price: 460, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Valrhona Chocolate Fondant', description: 'Warm molten chocolate cake with raspberry coulis and vanilla bean gelato.', price: 480, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Elderflower & Cucumber Spritzer', description: 'Sparkling elderflower tonic with muddled English cucumber and mint.', price: 290, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 18. The Fisherman's Wharf (Financial District / Gachibowli)
  {
    index: 18,
    name: "The Fisherman's Wharf",
    slug: 'the-fishermans-wharf',
    tagline: 'Coastal Goan seafood delicacies & beachside flavors',
    description: 'Bringing the authentic culinary soul of Goa to Gachibowli: Fresh catch Kingfish Recheado, Butter Garlic Jumbo Prawns, Goan Fish Curry, and traditional Bebinca.',
    cover_image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 1410,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 400,
    delivery_fee: 55,
    packaging_fee: 25,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 304, ISB Road, Financial District, Gachibowli',
    city: 'Hyderabad',
    latitude: 17.4215000,
    longitude: 78.3421000,
    cuisines: ['coastal-seafood'],
    public_source: 'thefishermanswharf.in / Zomato Gachibowli',
    categories: [
      {
        name: 'Goan Seafood Starters',
        slug: 'wharf-starters',
        items: [
          { name: 'Kingfish Masala Pan Fry (Surmai Rava Fry)', description: 'Fresh kingfish darnes marinated in fiery red chili-toddy vinegar paste, coated in semolina and pan-fried crisp.', price: 680, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Butter Garlic Tiger Prawns', description: 'Jumbo prawns pan-tossed in garlic butter and parsley with a dash of white wine.', price: 720, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Calamari Peri-Peri Fry', description: 'Squid rings tossed in spicy Portuguese peri-peri chili paste and scallions.', price: 580, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 16 },
          { name: 'Mushroom & Cheese Croquettes (4 pcs)', description: 'Crisp breaded croquettes filled with button mushrooms and melted mozzarella.', price: 380, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Coastal Curries & Stews',
        slug: 'wharf-curries',
        items: [
          { name: 'Goan Fish Curry with Coconut Milk', description: 'Tender Kingfish simmered in freshly squeezed coconut milk with kokum, coriander seeds, and Kashmiri chilies.', price: 660, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Prawns Balchao', description: 'Fiery and tangy prawn pickle curry cooked with vinegar, caramelized onions, and red chilies.', price: 690, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Chicken Xacuti', description: 'Traditional Goan chicken curry prepared with roasted grated coconut, poppy seeds, and whole spices.', price: 560, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Paneer Caldin', description: 'Mild yellow coconut curry cooked with cottage cheese, cumin, and turmeric.', price: 460, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Rice & Goan Breads',
        slug: 'wharf-rice-breads',
        items: [
          { name: 'Seafood Pulao Fisherman Style', description: 'Fragrant basmati rice tossed with calamari, prawns, and fish in coastal spices.', price: 640, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Steamed Goan Red Rice', description: 'Nutritious unpolished indigenous red parboiled rice, perfect with fish curry.', price: 210, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Warm Poee (Goan Bread - 2 pcs)', description: 'Traditional wheat pocket bread fermented with toddy/yeast and baked on floor oven.', price: 120, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Appam (2 pcs)', description: 'Soft fermented rice and coconut milk hopper with lacy crisp borders.', price: 140, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Goan Desserts & Drinks',
        slug: 'wharf-desserts',
        items: [
          { name: 'Traditional Bebinca (7 Layers)', description: 'Queen of Goan desserts: layered coconut milk, egg yolk, and jaggery pudding baked painstakingly.', price: 340, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 10 },
          { name: 'Serra Durra (Sawdust Pudding)', description: 'Portuguese layered chilled pudding of condensed whipped cream and crushed Marie biscuits.', price: 290, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Sol Kadi Cooler', description: 'Digestive drink made from kokum extract, coconut milk, fresh garlic, green chili, and cilantro.', price: 160, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 }
        ]
      }
    ]
  },

  // 19. Ulavacharu (Jubilee Hills)
  {
    index: 19,
    name: 'Ulavacharu',
    slug: 'ulavacharu',
    tagline: 'Authentic Andhra & Telugu regional culinary marvels',
    description: 'Home of the legendary Ulavacharu Kodi Pulao, Raju Gari Royyala Pulao, spicy bamboo chicken, and fiery Telugu countryside cooking.',
    cover_image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 1590,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 400,
    delivery_fee: 55,
    packaging_fee: 25,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 464, Road No. 29, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4285000,
    longitude: 78.4115000,
    cuisines: ['andhra-rayalaseema', 'telangana-heritage'],
    public_source: 'ulavacharu.in / Zomato Jubilee Hills',
    categories: [
      {
        name: 'Signature Pulaos & Biryanis',
        slug: 'ulava-pulaos',
        items: [
          { name: 'Ulavacharu Chicken Pulao', description: 'Slow-simmered horse gram broth infused into aged basmati rice, layered with country spiced chicken and rich ghee.', price: 490, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Raju Gari Kodi Pulao', description: 'Famous Godavari Kshatriya recipe of tender bone-in chicken cooked in fragrant bagara basmati with whole spices.', price: 480, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Ulavacharu Mutton Pulao', description: 'Rich horse-gram broth reduction paired with tender mutton chunks and fragrant long-grain rice.', price: 560, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Avakaya Veg Pulao', description: 'Aged Andhra mango pickle tossed with fragrant basmati, fried cashews, and garden vegetables.', price: 360, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Andhra Village Starters',
        slug: 'ulava-starters',
        items: [
          { name: 'Kodi Vepudu (Andhra Chicken Fry)', description: 'Country chicken tossed with crushed garlic, shallots, curry leaves, and pounded dry chili masala.', price: 440, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Royyala Iguru Fry (Prawns)', description: 'Fresh river prawns pan-roasted with caramelized onion gravy and peppercorns.', price: 580, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Mokkajonna Vepudu (Crispy Corn)', description: 'Sweet corn kernels coated in spiced rice flour and fried crisp with curry leaves.', price: 320, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 },
          { name: 'Miriyala Mutton Vepudu', description: 'Baby goat meat pan-roasted in black pepper and toasted coriander reduction.', price: 540, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 }
        ]
      },
      {
        name: 'Curries & Traditional Accompaniments',
        slug: 'ulava-curries',
        items: [
          { name: 'Natu Kodi Pulusu', description: 'Free-range country chicken in fiery red gravy simmered with shallots and curry leaves.', price: 520, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Ulavacharu Soup Bowl with Cream', description: 'Pure concentrated horse gram soup served warm with fresh cream and butter.', price: 240, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Gutti Vankaya Kura', description: 'Stuffed brinjals cooked in roasted peanut, sesame, and dry coconut gravy.', price: 380, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Jowar Roti (2 pcs)', description: 'Hand-patted sorghum rotis.', price: 90, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Desserts',
        slug: 'ulava-desserts',
        items: [
          { name: 'Junnu (Colostrum Pudding)', description: 'Traditional Telugu milk pudding steamed with green cardamom and black pepper.', price: 210, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Bellam Bobbattu with Pure Ghee', description: 'Sweet flatbread filled with lentil jaggery stuffing.', price: 170, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Majiga (Spiced Buttermilk)', description: 'Churned cooling buttermilk with ginger and coriander.', price: 80, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 20. Haïku (Banjara Hills)
  {
    index: 20,
    name: 'Haïku',
    slug: 'haiku',
    tagline: 'Artisanal Pan-Asian gastronomy, dim sums & sushi',
    description: 'An elegant Pan-Asian sanctuary in Banjara Hills, celebrated for delicate dim sums, authentic sushi, fiery Thai curries, and Japanese robata specialties.',
    cover_image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 880,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 450,
    delivery_fee: 60,
    packaging_fee: 25,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 686/D, Road No. 10, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4189000,
    longitude: 78.4385000,
    cuisines: ['pan-asian', 'japanese-robata'],
    public_source: 'haiku.in / EazyDiner Banjara Hills',
    categories: [
      {
        name: 'Handcrafted Dim Sum Baskets',
        slug: 'haiku-dimsum',
        items: [
          { name: 'Truffle Edamame Dumplings (4 pcs)', description: 'Translucent parcels packed with sweet green soybeans, water chestnuts, and fragrant white truffle essence.', price: 540, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 18 },
          { name: 'Crystal Prawn Har Gow (4 pcs)', description: 'Delicate pleated dumplings filled with whole succulent tiger prawns and bamboo shoot.', price: 620, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Chicken & Coriander Sui Mai (4 pcs)', description: 'Open-faced steamed dumplings filled with spiced chicken mince and tobiko flying fish roe garnish.', price: 520, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 16 },
          { name: 'Wild Mushroom Bao (3 pcs)', description: 'Fluffy steamed buns stuffed with braised shiitake, shimeji, and oyster mushrooms.', price: 460, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Sushi & Maki Rolls',
        slug: 'haiku-sushi',
        items: [
          { name: 'Spicy Salmon Uramaki Roll (8 pcs)', description: 'Fresh Atlantic salmon, sriracha mayo, avocado, and cucumber rolled inside-out with flying fish roe.', price: 740, image_url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Crispy Avocado & Cream Cheese Maki (8 pcs)', description: 'Hass avocado, Philadelphia cream cheese, and tempura crunch rolled with tanuki flakes.', price: 580, image_url: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Prawn Tempura Ebi Roll (8 pcs)', description: 'Crispy fried black tiger prawns, unagi sweet glaze, and toasted sesame.', price: 720, image_url: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Asparagus Tempura & Truffle Roll (8 pcs)', description: 'Golden asparagus spears with vegan truffle mayo and sesame wrap.', price: 540, image_url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Wok Specialties & Asian Curries',
        slug: 'haiku-curries',
        items: [
          { name: 'Thai Green Curry with Jasmine Rice', description: 'Aromatic coconut broth with galangal, kaffir lime, bamboo shoots, and fresh basil.', price: 620, image_url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 22 },
          { name: 'Teriyaki Glazed Chicken Bowl', description: 'Pan-seared chicken supreme in house teriyaki glaze over steamed sticky rice with sesame.', price: 590, image_url: 'https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Singapore Hawker Chilli Prawns', description: 'Succulent prawns tossed in sweet, sour, and spicy egg ribbon chili reduction.', price: 740, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Wok-Tossed Hakka Noodles Veg', description: 'Springy noodles tossed with shredded bell peppers, cabbage, and scallions in garlic soy.', price: 380, image_url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Desserts & Asian Beverages',
        slug: 'haiku-desserts',
        items: [
          { name: 'Panko Banana Fritters with Honey', description: 'Crisp banana spring rolls drizzled with wild honey and toasted sesame, served warm.', price: 320, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Coconut Mango Sticky Rice', description: 'Warm coconut milk sticky rice served with sweet Thai mango slices.', price: 380, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Yuzu Iced Green Tea', description: 'Chilled Japanese sencha infused with tart yuzu citrus puree.', price: 240, image_url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 21. United Kitchens of India (UKI) (Jubilee Hills)
  {
    index: 21,
    name: 'United Kitchens of India',
    slug: 'united-kitchens-of-india',
    tagline: 'Authentic pan-Indian regional culinary heritage',
    description: 'A celebrated culinary journey exploring India’s royal and coastal heritage: Mangalorean Ghee Roast, Malabar Parottas, Kashmiri Rogan Josh, and Bengali Kosha Mangsho.',
    cover_image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 1100,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 400,
    delivery_fee: 55,
    packaging_fee: 25,
    is_featured: false,
    is_open: true,
    address_line: 'Plot 1187, Road No. 45, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4348000,
    longitude: 78.4038000,
    cuisines: ['modern-indian', 'telangana-heritage'],
    public_source: 'unitedkitchensofindia.com / Zomato Jubilee Hills',
    categories: [
      {
        name: 'Regional Signature Starters',
        slug: 'uki-starters',
        items: [
          { name: 'Mangalorean Kundapur Chicken Ghee Roast', description: 'Tender chicken braised in clarified butter with Byadgi red chilies, crushed coriander, and jaggery.', price: 540, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Paneer Ghee Roast', description: 'Cottage cheese batons roasted in pure desi ghee with Kundapur spice paste.', price: 460, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Dahi Ke Sholay (4 pcs)', description: 'Crispy fried bread rolls stuffed with spiced hung curd, mint, and pomegranate.', price: 390, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Kolkata Fish Fry (Bhetki - 2 pcs)', description: 'Fresh bhetki fillets marinated in mustard and green herb paste, crumbed and fried golden.', price: 580, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 }
        ]
      },
      {
        name: 'Heritage Curries',
        slug: 'uki-curries',
        items: [
          { name: 'Bengali Kosha Mangsho', description: 'Slow-braised mutton in mustard oil, caramelized onions, and whole garam masalas till dark and unctuous.', price: 680, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 26 },
          { name: 'Alleppey Fish Curry', description: 'Kerala style raw mango and coconut curry with fresh kingfish and curry leaves.', price: 640, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Old Delhi Butter Chicken', description: 'Clay-roasted chicken in rich tomato, cashew, and cream gravy with fenugreek.', price: 560, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Dal Moradabadi', description: 'Yellow moong dal cooked to a silky texture, topped with crisp hing jeera tadka and chaat masala.', price: 380, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Regional Breads & Rice',
        slug: 'uki-rice-breads',
        items: [
          { name: 'Flaky Malabar Parotta (2 pcs)', description: 'Multi-layered Kerala spiral flatbread cooked on griddle with ghee.', price: 140, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Appam Basket (2 pcs)', description: 'Soft center, lacy crisp fermented rice pancakes.', price: 120, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Thalassery Mutton Biryani', description: 'Fragrant Kaima short-grain rice cooked with malabar spices, tender mutton, and fried cashews.', price: 580, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Ghee Rice with Crispy Onions', description: 'Short grain rice sauteed in pure cow ghee with whole spices and golden fried shallots.', price: 320, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Desserts',
        slug: 'uki-desserts',
        items: [
          { name: 'Baked Mihidana with Rabdi', description: 'Fine golden gram flour pearls baked with condensed saffron milk and almonds.', price: 320, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Elaneer Payasam (Tender Coconut)', description: 'Chilled pudding of tender coconut pulp, coconut milk, and condensed milk with cardamom.', price: 260, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Masala Chaas', description: 'Traditional spiced buttermilk with ginger and fresh mint.', price: 110, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 22. Aidu (Jubilee Hills)
  {
    index: 22,
    name: 'Aidu',
    slug: 'aidu',
    tagline: '5-State South Indian heritage & regional royal feasts',
    description: 'Celebrating the distinct culinary heritage of five southern states: Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, and Kerala in an opulent Jubilee Hills setting.',
    cover_image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 760,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 450,
    delivery_fee: 60,
    packaging_fee: 25,
    is_featured: false,
    is_open: true,
    address_line: 'Road No. 45, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4345000,
    longitude: 78.4031000,
    cuisines: ['andhra-rayalaseema', 'telangana-heritage'],
    public_source: 'aiduhyd.com / LBB Hyderabad',
    categories: [
      {
        name: 'Pan-South Indian Appetizers',
        slug: 'aidu-appetizers',
        items: [
          { name: 'Karivepaku Kodi Vepudu', description: 'Tender chicken tossed with roasted curry leaf powder, black pepper, and garlic.', price: 480, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Koliwada Fish Fry', description: 'Crispy fried river fish fillets with carom seeds and spicy coastal batter.', price: 540, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Mushroom Sukka Mangalore Style', description: 'Button mushrooms sauteed in dry roasted coconut, cumin, and red chilies.', price: 420, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 },
          { name: 'Kurnool Paneer Vepudu', description: 'Cottage cheese pan-roasted with spicy Kurnool chili paste and curry leaves.', price: 440, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 }
        ]
      },
      {
        name: 'Five States Curries',
        slug: 'aidu-curries',
        items: [
          { name: 'Chettinad Pepper Chicken', description: 'Tamil Nadu style spicy chicken cooked with star anise, stone flower, and freshly roasted peppercorns.', price: 560, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Telangana Mutton Curry', description: 'Rustic Telangana highway style goat curry with spicy red gravy and local spices.', price: 640, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Bendakaya Pulusu (Okra Tangy Stew)', description: 'Tender ladyfingers simmered in sweet and tangy tamarind and jaggery sauce.', price: 390, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Avial Kerala Style', description: 'Assorted vegetables cooked in thick coconut-yogurt paste with coconut oil tempering.', price: 420, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Pulaos & Breads',
        slug: 'aidu-rice-breads',
        items: [
          { name: 'Aidu Special Kodi Pulao', description: 'Fragrant seasoned rice cooked with country chicken and house roasted spices.', price: 510, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Gongura Royyalu Pulao', description: 'Prawns cooked in tangy sorrel leaf masala layered with basmati.', price: 580, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Kothu Parotta Veg', description: 'Shredded flaky parotta stir-fried on cast iron tawa with vegetables and salna.', price: 340, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 },
          { name: 'Neer Dosa (3 pcs)', description: 'Lacy, light-as-air rice crepes from coastal Karnataka.', price: 160, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Desserts',
        slug: 'aidu-desserts',
        items: [
          { name: 'Ada Pradhaman (Kerala Payasam)', description: 'Rice pasta cooked in reduced coconut milk and dark palm jaggery with fried coconut bits.', price: 260, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Mysore Pak with Warm Ghee', description: 'Traditional melt-in-mouth gram flour and ghee sweet.', price: 210, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Panakam Herbal Punch', description: 'Refreshing jaggery, ginger, black pepper, and cardamom nectar.', price: 120, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 23. Minerva Coffee Shop (Somajiguda)
  {
    index: 23,
    name: 'Minerva Coffee Shop',
    slug: 'minerva-coffee-shop',
    tagline: 'Legacy South Indian tiffins & authentic filter coffee',
    description: 'Somajiguda’s timeless culinary institution since decades, celebrated for button idlis steeped in hot sambar, crisp masala dosas, and piping hot Minerva filter coffee.',
    cover_image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 2100,
    price_tier: '₹₹',
    delivery_time_min: 20,
    delivery_time_max: 35,
    minimum_order: 200,
    delivery_fee: 35,
    packaging_fee: 15,
    is_featured: false,
    is_open: true,
    address_line: 'Amrutha Mall, Raj Bhavan Road, Somajiguda',
    city: 'Hyderabad',
    latitude: 17.4265000,
    longitude: 78.4582000,
    cuisines: ['south-indian-tiffins', 'pure-vegetarian'],
    public_source: 'minervahospitality.com / Zomato Somajiguda',
    categories: [
      {
        name: 'Heritage Tiffins',
        slug: 'minerva-tiffins',
        items: [
          { name: 'Button Sambar Idli (14 mini idlis)', description: 'Mini button idlis submerged in hot lentil-vegetable sambar, topped with pure ghee and coriander.', price: 180, image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Special Masala Dosa', description: 'Crispy golden roasted crepe smeared with red chutney and stuffed with spiced potato mash.', price: 190, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Crispy Medu Vada (2 pcs)', description: 'Freshly fried black gram donuts with crunchy crust, served with coconut chutney.', price: 150, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Pesarattu Upma', description: 'Green moong dal dosa stuffed with spiced semolina upma, chopped ginger, and onions.', price: 210, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 }
        ]
      },
      {
        name: 'South Indian Rice Specialties',
        slug: 'minerva-rice',
        items: [
          { name: 'Minerva Executive South Indian Meals', description: 'Complete traditional meal with rice, poori, sambar, rasam, kootu, poriyal, curd, and sweet.', price: 290, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Bisi Bele Bath with Boondi', description: 'Spicy rice, lentil, and vegetable medley cooked with special masala.', price: 190, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Tempered Curd Rice', description: 'Chilled curd rice tempered with mustard, ginger, green chilies, and pomegranate.', price: 160, image_url: 'https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Puliyogare (Tamarind Rice)', description: 'Tangy and spiced rice cooked with tamarind pulp, peanuts, and curry leaves.', price: 180, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Snacks & Evening Specials',
        slug: 'minerva-snacks',
        items: [
          { name: 'Mirchi Bajji (3 pcs)', description: 'Large Bhavnagri green chilies stuffed with tamarind-ajwain paste, batter fried.', price: 130, image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Cut Mirchi with Onions', description: 'Double-fried chopped chili fritters seasoned with roasted spices and fresh lemon juice.', price: 140, image_url: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Poori Masala (3 pcs)', description: 'Puffed wheat breads served with potato masala.', price: 170, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Rava Dosa Special', description: 'Crispy lacy semolina crepe with cumin and peppercorns.', price: 190, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 }
        ]
      },
      {
        name: 'Beverages & Sweets',
        slug: 'minerva-drinks',
        items: [
          { name: 'Minerva Filter Coffee', description: 'Legendary freshly brewed South Indian chicory and coffee blend.', price: 75, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Rava Kesari with Cashews', description: 'Pure ghee semolina sweet flavored with saffron.', price: 120, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Badam Milk Chilled', description: 'Rich almond milk enriched with saffron and crushed nuts.', price: 130, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  },

  // 24. Tre-Forni Bar & Restaurant (Park Hyatt, Banjara Hills)
  {
    index: 24,
    name: 'Tre-Forni Bar & Restaurant',
    slug: 'tre-forni',
    tagline: 'Authentic northern Italian fine dining at Park Hyatt',
    description: 'Hyderabad’s premier five-star Italian destination at Park Hyatt, Banjara Hills. Home to three stone ovens, handmade pastas, Risotto ai Porcini, and prime grilled meats.',
    cover_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    rating_count: 580,
    price_tier: '₹₹₹₹',
    delivery_time_min: 35,
    delivery_time_max: 55,
    minimum_order: 800,
    delivery_fee: 90,
    packaging_fee: 35,
    is_featured: true,
    is_open: true,
    address_line: 'Park Hyatt, Road No. 2, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4258000,
    longitude: 78.4402000,
    cuisines: ['artisanal-italian', 'european-bistro'],
    public_source: 'hyatt.com/park-hyatt-hyderabad / Luxury Dining Hyderabad',
    categories: [
      {
        name: 'Antipasti Classici',
        slug: 'tre-antipasti',
        items: [
          { name: 'Carpaccio di Manzo', description: 'Paper-thin beef tenderloin carpaccio, caperberries, shaved 24-month Parmigiano-Reggiano, and lemon-truffle vinaigrette.', price: 920, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Burrata Pugliese Artigianale', description: 'Fresh burrata, vine-ripened San Marzano tomatoes, Genovese basil emulsion, and Modena balsamic reduction.', price: 780, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Calamari alla Griglia', description: 'Char-grilled fresh squids with chili-garlic salmoriglio oil and rocket salad.', price: 720, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 16 },
          { name: 'Bruschetta ai Funghi Porcini', description: 'Toasted ciabatta topped with sauteed Italian porcini mushrooms, garlic, and thyme.', price: 580, image_url: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 }
        ]
      },
      {
        name: 'Primi Piatti & Risotto',
        slug: 'tre-primi',
        items: [
          { name: 'Risotto ai Funghi Porcini', description: 'Acquerello carnaroli rice slow-cooked with wild porcini stock, mountain butter, and aged Parmigiano.', price: 880, image_url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 25 },
          { name: 'Ravioli di Ricotta e Spinaci al Burro e Salvia', description: 'Handmade pasta pillows filled with buffalo ricotta and spinach in sage brown butter sauce.', price: 820, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Tagliolini al Tartufo Nero', description: 'Fresh egg pasta tossed with winter black truffle paste and cream.', price: 950, image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Linguine ai Frutti di Mare', description: 'Linguine tossed with baby lobster tail, calamari, mussels, cherry tomatoes, and pinot grigio.', price: 1100, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 24 }
        ]
      },
      {
        name: 'Pizze Forno a Legna (Stone Oven)',
        slug: 'tre-pizze',
        items: [
          { name: 'Pizza Tre-Forni Signature', description: 'Smoked scamorza, spicy spianata calabrese, wild mushrooms, and fresh oregano on 48h sourdough.', price: 920, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Pizza Margherita D.O.P.', description: 'San Marzano tomatoes, buffalo mozzarella from Campania, and fresh sweet basil.', price: 740, image_url: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Pizza Primavera Ortolana', description: 'Grilled zucchini, bell peppers, artichoke hearts, and fior di latte mozzarella.', price: 780, image_url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Focaccia Barese al Pomodoro', description: 'Stone-baked Pugliese focaccia with whole cherry tomatoes and oregano.', price: 380, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Dolci Artigianali',
        slug: 'tre-dolci',
        items: [
          { name: 'Tiramisu Tradizionale Tre-Forni', description: 'Authentic Treviso recipe with freshly whipped mascarpone, espresso, and dark chocolate.', price: 540, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Cannoli Siciliani con Ricotta (2 pcs)', description: 'Crisp pastry shells filled with sweetened sheep ricotta, candied orange peel, and pistachios.', price: 460, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Acqua Panna Still Mineral Water (750ml)', description: 'Natural Tuscan spring water.', price: 320, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 3 }
        ]
      }
    ]
  }
];

module.exports = { PART2 };
