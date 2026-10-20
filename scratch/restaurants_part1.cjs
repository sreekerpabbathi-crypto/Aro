// scratch/restaurants_part1.js
// Restaurants 1 to 12

const PART1 = [
  // 1 to 4: Refer to existing definitions or standard entries
  {
    index: 1,
    name: 'Deccan Table',
    slug: 'deccan-table',
    tagline: 'Contemporary Deccani & Telangana heritage cuisine',
    description: 'Rooted in royal Deccani traditions and Telangana spice crafts. Slow-smoked marag, artisanal bagara rice, and hand-ground spice blends.',
    cover_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    rating_count: 342,
    price_tier: '₹₹₹₹',
    delivery_time_min: 35,
    delivery_time_max: 50,
    minimum_order: 600,
    delivery_fee: 80,
    packaging_fee: 30,
    is_featured: true,
    is_open: true,
    address_line: 'Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4325000,
    longitude: 78.4072000,
    cuisines: ['contemporary-deccani', 'telangana-heritage'],
    public_source: 'ARO Catalog / Verified Jubilee Hills Gastronomy',
    categories: [
      {
        name: 'Signature Deccani Starters',
        slug: 'deccan-starters',
        items: [
          { name: 'Slow-Smoked Deccani Marag & Sheermal', description: 'Royal Deccani spiced mutton broth simmered overnight with pistachios, paired with warm saffron sheermal.', price: 1150, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Pothuraju Mutton Sukka & Appam', description: 'Telangana highway-style pan-roasted tender goat with caramelized shallots and crispy fermented appam.', price: 980, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Smoked Subz Shikampuri Kebab (4 pcs)', description: 'Hung yogurt and yam patties stuffed with spiced mint chutney and pomegranate reduction.', price: 650, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Tawa Macchi Charminar Style', description: 'Fresh river Murrel fillets seared on heavy cast iron with pounded deccani spices and lime.', price: 890, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 }
        ]
      },
      {
        name: 'Royal Heritage Mains',
        slug: 'deccan-mains',
        items: [
          { name: 'Dum Pukht Gosht Korma', description: 'Pot-roasted baby mutton slow-braised with brown onions, almonds, saffron, and dried rose petals.', price: 1100, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Bagara Baingan & Paneer Rollatini', description: 'Charred baby brinjals and cottage cheese rolls in roasted peanut, sesame, and tamarind gravy.', price: 740, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 24 },
          { name: 'Nalli Nihari Khaas', description: 'Overnight simmered lamb shanks in rich bone marrow reduction with ginger juliennes and lemon.', price: 1250, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 35 },
          { name: 'Mirchi Ka Salan Heritage Bowl', description: 'Bhavnagri chillies poached gently in spiced coconut, sesame, and peanut emulsion.', price: 520, image_url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Artisanal Rice & Breads',
        slug: 'deccan-rice',
        items: [
          { name: 'Aged Basmati Sufiyani Biryani', description: 'White royal biryani cooked in milk, cream, and green cardamom with succulent lamb medallions.', price: 1200, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Telangana Bagara Rice Pot', description: 'Fragrant short-grain rice tempered with whole spices, caramelized shallots, mint, and pure ghee.', price: 420, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Handcrafted Sheermal (2 pcs)', description: 'Traditional milk-kneaded flatbread infused with Kashmiri saffron and brushed with butter.', price: 240, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Bakarkhani Puff (2 pcs)', description: 'Flaky, layered spiced bread sprinkled with sesame and nigella seeds.', price: 260, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Royal Desserts & Sherbets',
        slug: 'deccan-desserts',
        items: [
          { name: 'Khubani Ka Meetha with Clotted Malai', description: 'Slow-stewed dried apricots scented with cardamom, served with thick clotted buffalo cream.', price: 480, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Zafrani Double Ka Meetha', description: 'Crisp ghee-fried bread steeped in saffron-cardamom rabdi, finished with silver leaf and almonds.', price: 460, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Rooh Afza & Gond Katira Sherbet', description: 'Heritage rose nectar with chilled basil seeds, tragacanth gum, and fresh lime.', price: 220, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Paan Gulkand Kulfi', description: 'Creamy frozen rabdi kulfi infused with sweet betel leaf and Damascus rose preserve.', price: 320, image_url: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 2. Kumo House
  {
    index: 2,
    name: 'Kumo House',
    slug: 'kumo-house',
    tagline: 'Japanese-inspired dining & robata charcoal art',
    description: 'Bespoke Tokyo-inspired dining in Banjara Hills. Binchotan-grilled skewers, bluefin nigiri, and delicate yuzu glazes.',
    cover_image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 489,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 450,
    delivery_fee: 60,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Road No. 12, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4156000,
    longitude: 78.4352000,
    cuisines: ['japanese-robata', 'pan-asian'],
    public_source: 'ARO Catalog / Banjara Hills Gourmet Dining',
    categories: [
      {
        name: 'Chef Signature Nigiri & Sashimi',
        slug: 'kumo-nigiri',
        items: [
          { name: 'Truffle Hamachi Nigiri (4 pcs)', description: 'Yellowtail kingfish brushed with nikiri soy, finished with fresh black winter truffle and chives.', price: 850, image_url: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Aburi Salmon Belly Nigiri (4 pcs)', description: 'Torched Norwegian salmon belly with spicy cod roe mayo, unagi tare, and scallions.', price: 790, image_url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Avocado & Truffle Nigiri (4 pcs)', description: 'Hass avocado glazed with sweet mushroom reduction and white truffle oil.', price: 520, image_url: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Bluefin Tuna Akami Sashimi (5 slices)', description: 'Prime cut tuna loin served with freshly grated Hon-wasabi and pickled ginger.', price: 980, image_url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 16 }
        ]
      },
      {
        name: 'Robata Charcoal Skewers',
        slug: 'kumo-robata',
        items: [
          { name: 'Charred King Oyster Mushroom Skewers', description: 'Robata charcoal grilled oyster mushrooms glazed with garlic-miso tare and sesame crunch.', price: 420, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Yakitori Negima Chicken Skewers', description: 'Chicken thigh and charred Tokyo scallions basted with aged sweet soy reduction.', price: 540, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Tiger Prawn Kushiyaki (3 pcs)', description: 'Jumbo prawns grilled over binchotan with sansho pepper and yuzu kosho butter.', price: 720, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Tenderloin Beef Tsukune', description: 'Hand-minced spiced beef skewers glazed with sweet soy, served with organic onsen yolk.', price: 680, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 }
        ]
      },
      {
        name: 'Artisanal Ramen & Bowls',
        slug: 'kumo-ramen',
        items: [
          { name: 'Truffle Tonkotsu Style Ramen', description: '24-hour slow braised chicken and dashi broth, ramen noodles, ajitsuke tamago, nori, and black garlic oil.', price: 780, image_url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Spicy Miso Wild Mushroom Ramen', description: 'Rich fermented red miso and shiitake broth, sweet corn, bamboo shoots, and rayu chili drizzle.', price: 640, image_url: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Wagyu Beef Yakiniku Donburi', description: 'Thinly sliced teriyaki beef over steamed koshihikari rice, scallions, sesame, and pickled ginger.', price: 890, image_url: 'https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Unagi Kabayaki Rice Bowl', description: 'Caramelized freshwater eel fillet over fragrant rice with sansho pepper garnish.', price: 950, image_url: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 }
        ]
      },
      {
        name: 'Desserts & Refreshments',
        slug: 'kumo-desserts',
        items: [
          { name: 'Matcha Molten Tart', description: 'Warm Uji ceremonial matcha molten tart with black sesame crumble.', price: 450, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Yuzu & Lychee Sparkling Soda', description: 'Japanese yuzu juice pressed with sweet lychee puree and sparkling water.', price: 280, image_url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Mochi Ice Cream Trio', description: 'Handmade glutinous rice mochi filled with black sesame, green tea, and salted caramel gelato.', price: 390, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Hojicha Smoked Iced Tea', description: 'Roasted green tea cold-brewed with white peach nectar.', price: 260, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 3. Forno & Fig
  {
    index: 3,
    name: 'Forno & Fig',
    slug: 'forno-and-fig',
    tagline: 'Artisanal wood-fired Italian dining & handmade pasta',
    description: 'Pugliese burrata, 72-hour sourdough Neapolitan pizzas, and bronze-die extruded pasta crafted daily in Gachibowli.',
    cover_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 612,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 300,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Financial District, Gachibowli',
    city: 'Hyderabad',
    latitude: 17.4401000,
    longitude: 78.3489000,
    cuisines: ['artisanal-italian'],
    public_source: 'ARO Catalog / Financial District Artisanal Kitchens',
    categories: [
      {
        name: 'Wood-Fired Neapolitan Pizza',
        slug: 'forno-pizzas',
        items: [
          { name: 'Burrata & Charred Fig Pizza', description: 'San Marzano tomato base, fresh pugliese burrata, caramelized Mission figs, aged balsamic drizzle.', price: 720, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 22 },
          { name: 'Diavola Pepperoni & Hot Nduja Pizza', description: 'Spicy artisanal pork salami, smoked provolone, chili flakes, and San Marzano DOP tomatoes.', price: 840, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Tartufo Funghi & Fontina Pizza', description: 'Wild porcini, button mushrooms, garlic crema, fontina cheese, and black truffle oil drizzle.', price: 790, image_url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Margherita Verace D.O.P.', description: 'Buffalo mozzarella, sweet cherry tomatoes, fresh Genovese basil, and cold-pressed EVOO.', price: 580, image_url: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Artisanal Fresh Pasta',
        slug: 'forno-pastas',
        items: [
          { name: 'Handmade Truffle Tagliolini', description: 'Egg pasta tossed in French butter, 24-month Parmigiano-Reggiano, and shaved Norcia truffles.', price: 790, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Slow-Cooked Lamb Ragu Pappardelle', description: 'Braised lamb shoulder with rosemary, red wine, and plum tomatoes over wide ribbon pasta.', price: 820, image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Pesto Genovese Gnocchi', description: 'Pillow-soft potato gnocchi tossed with sweet basil, pine nuts, garlic, and pecorino romano.', price: 660, image_url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Spaghetti ai Frutti di Mare', description: 'Squid ink spaghetti tossed with calamari, black tiger prawns, cherry tomatoes, and white wine.', price: 890, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 }
        ]
      },
      {
        name: 'Antipasti & Salads',
        slug: 'forno-antipasti',
        items: [
          { name: 'Heirloom Tomato & Burrata Caprese', description: 'Vibrant heirloom tomatoes, creamy burrata ball, aged Modena balsamic, and micro basil.', price: 590, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Charred Polenta Crust Bruschetta', description: 'Crisp polenta batons topped with wild garlic mushrooms and goat cheese mousse.', price: 480, image_url: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 },
          { name: 'Crispy Calamari Fritti', description: 'Tender baby squid dusted with semolina, fried crisp and served with smoked garlic aioli.', price: 620, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 },
          { name: 'Warm Garlic Rosemary Focaccia', description: 'Baked in the wood-fired oven with Maldon sea salt and Tuscan rosemary.', price: 320, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Dolci & Beverages',
        slug: 'forno-dolci',
        items: [
          { name: 'Classic Savoiardi Tiramisu', description: 'Espresso-soaked ladyfinger sponge layered with light mascarpone sabayon and Valrhona cocoa.', price: 460, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Sicilian Pistachio Panna Cotta', description: 'Silky cream infused with Bronte pistachio paste, topped with crushed raspberries.', price: 420, image_url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'San Pellegrino Blood Orange Fizz', description: 'Italian sparkling mineral water with natural Sicilian arancia rossa citrus.', price: 240, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Espresso Affogato al Caffe', description: 'Double shot of hot arabica espresso poured over Madagascar vanilla bean gelato.', price: 290, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 4. Nizami Hearth
  {
    index: 4,
    name: 'Nizami Hearth',
    slug: 'nizami-hearth',
    tagline: 'Royal Hyderabadi & Awadhi-inspired dum heritage',
    description: 'Centuries-old slow-simmered dum preparations, aged basmati gosht biryanis, saffron-infused korma, and flaky roomali.',
    cover_image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    rating_count: 521,
    price_tier: '₹₹₹₹',
    delivery_time_min: 35,
    delivery_time_max: 50,
    minimum_order: 500,
    delivery_fee: 70,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Hitech City Main Road, Madhapur',
    city: 'Hyderabad',
    latitude: 17.4504000,
    longitude: 78.3808000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'ARO Catalog / HITEC City Royal Kitchens',
    categories: [
      {
        name: 'Royal Awadhi & Dum Curries',
        slug: 'nizami-curries',
        items: [
          { name: '24hr Dal Bukhara & Truffle Kulcha', description: 'Slow-simmered black lentils cooked overnight on charcoal, served with flaky truffle butter kulcha.', price: 680, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 25 },
          { name: 'Murgh Awadhi Korma Sultani', description: 'Tender chicken braised in cashewnut, dried yogurt, saffron, and aromatic kewra water.', price: 760, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 24 },
          { name: 'Gosht Dum Nihari with Bone Marrow', description: 'Melt-in-mouth lamb shank braised in 32-spice potli broth with caramelized onions.', price: 940, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Paneer Zafrani Korma', description: 'Silken paneer cubes in velvety saffron-infused melon seed and almond gravy.', price: 640, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Sigri Kebabs & Tandoor',
        slug: 'nizami-kebabs',
        items: [
          { name: 'Galouti Kebab with Paratha', description: 'Velvety smoked mutton patties minced 12 times with raw papaya and secret potli masala.', price: 820, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Bhattee Murgh Tikka (6 pcs)', description: 'Charcoal-grilled chicken breast pieces marinated in hung curd, yellow chili, and mustard oil.', price: 620, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Dahi Ke Kebab (4 pcs)', description: 'Crisp golden patties of strained spiced yogurt, coriander, and crushed pink peppercorn.', price: 520, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 16 },
          { name: 'Pathar Ka Gosht Nizam Shahi', description: 'Mutton steaks marinated overnight and seared on flat red granite stone over charcoal.', price: 880, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 }
        ]
      },
      {
        name: 'Royal Dum Biryani & Breads',
        slug: 'nizami-biryani',
        items: [
          { name: 'Kacchi Gosht Dum Biryani Khaas', description: 'Raw marinated tender goat layered with parboiled basmati, saffron, mint, and pure ghee, dum-sealed in handi.', price: 890, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Subz Moti Pulao Handi', description: 'Seasonal winter vegetables, baby corn, green peas, and paneer dumplings infused with kewra.', price: 580, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Warqi Paratha (2 pcs)', description: 'Multi-layered flaky bread cooked on copper griddle with generous ghee.', price: 180, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Truffle Butter Garlic Naan', description: 'Tandoor-baked leavened flatbread brushed with black truffle butter and minced garlic.', price: 210, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Royal Desserts',
        slug: 'nizami-desserts',
        items: [
          { name: 'Shahi Tukda with Gold Vark', description: 'Crisp bread pudding steeped in condensed saffron milk and garnished with edible gold leaf.', price: 380, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Anokhi Kheer (Sweet Garlic Pudding)', description: 'A royal Nizami secret: candied garlic flakes slow-simmered in sweet cardamom milk.', price: 360, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Pista Phirni in Clay Kasora', description: 'Ground basmati rice pudding slow-cooked with green pistachios and kewra, served chilled.', price: 280, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Badam Halwa Supreme', description: 'Rich almond pudding prepared with pure Desi ghee and saffron strands.', price: 340, image_url: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      }
    ]
  },

  // 5. Paradise Biryani (Secunderabad / Jubilee Hills)
  {
    index: 5,
    name: 'Paradise Biryani',
    slug: 'paradise-biryani',
    tagline: 'World-renowned Hyderabadi Dum Biryani since 1953',
    description: 'The golden landmark of Hyderabadi Dum Biryani, slow-cooked in traditional deghs with fragrant basmati, farm-fresh mutton, and time-honoured spices.',
    cover_image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 1420,
    price_tier: '₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 350,
    delivery_fee: 50,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Prenderghast Road, MG Road, Secunderabad',
    city: 'Hyderabad',
    latitude: 17.4412000,
    longitude: 78.4982000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'paradisefoodcourt.in / Zomato / Swiggy Verified Flagship',
    categories: [
      {
        name: 'World Famous Dum Biryani',
        slug: 'paradise-biryani-cat',
        items: [
          { name: 'Paradise Special Mutton Biryani', description: 'Long-grain basmati layered with succulent cuts of marinated mutton, saffron, fried onions, and pure ghee. Served with Mirchi ka Salan and Dahi ki Chutney.', price: 490, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Royal Chicken Dum Biryani', description: 'Signature chicken pieces cooked in sealed degh with aromatic spices and saffron-tinted basmati.', price: 420, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Nizami Egg Dum Biryani', description: 'Hard-boiled spiced farm eggs layered with fragrant dum basmati and caramelized shallots.', price: 340, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Special Veg Dum Biryani', description: 'Fresh garden vegetables, paneer cubes, and mint slow-dum cooked in sealed earthenware.', price: 320, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Paradise Starters & Kebabs',
        slug: 'paradise-kebabs',
        items: [
          { name: 'Mutton Seekh Kebab (4 pcs)', description: 'Tender ground lamb seasoned with coriander, cumin, and mint, skewered on coal grill.', price: 460, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Chicken Reshmi Kebab (6 pcs)', description: 'Silky chicken supreme pieces marinated in cream, cashew paste, and white pepper.', price: 410, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Tandoori Murgh (Half)', description: 'Traditional bone-in chicken marinated in spiced red yogurt and roasted in tandoor.', price: 380, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Paneer Tikka Shashlik', description: 'Malai paneer cubes, bell peppers, and onions roasted over hot coals.', price: 340, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Curries & Breads',
        slug: 'paradise-curries',
        items: [
          { name: 'Butter Chicken Masala', description: 'Tandoori chicken morsels simmered in velvety tomato, butter, and fenugreek gravy.', price: 390, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Mutton Rogan Josh', description: 'Kashmiri-style mutton curry flavored with alkanet root and mace.', price: 480, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 24 },
          { name: 'Mirchi Ka Salan (Extra Portion)', description: 'Authentic accompaniment made with Bhavnagri chillies, roasted sesame, and tamarind.', price: 120, image_url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Butter Naan (2 pcs)', description: 'Freshly baked tandoori leavened flatbread brushed with butter.', price: 110, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Heritage Desserts',
        slug: 'paradise-desserts',
        items: [
          { name: 'Paradise Double Ka Meetha', description: 'Crisp bread soaked in condensed saffron rabdi and topped with roasted nuts.', price: 180, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Qubani Ka Meetha', description: 'Sweet stewed dried apricot delicacy served with thick fresh cream.', price: 210, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Gulab Jamun with Rabdi (2 pcs)', description: 'Mawa dumplings soaked in cardamom rose syrup, drizzled with thick chilled rabdi.', price: 160, image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Matka Phirni', description: 'Traditional ground rice sweet pudding served in unglazed earthen cup.', price: 140, image_url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 6. Bawarchi Restaurant (RTC X Roads)
  {
    index: 6,
    name: 'Bawarchi Restaurant',
    slug: 'bawarchi-restaurant',
    tagline: 'The iconic RTC X Roads Hyderabadi Dum Biryani legend',
    description: 'Renowned throughout Telangana for fiery, deeply flavorful authentic kacchi gosht biryani, charred boti kebabs, and rich deccani curries.',
    cover_image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 2150,
    price_tier: '₹₹',
    delivery_time_min: 35,
    delivery_time_max: 50,
    minimum_order: 300,
    delivery_fee: 45,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Beside Sandhya Theatre, RTC X Roads, Chikkadpally',
    city: 'Hyderabad',
    latitude: 17.4045000,
    longitude: 78.4981000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'bawarchihyderabad.com / Swiggy RTC X Roads',
    categories: [
      {
        name: 'Bawarchi Signature Dum Biryani',
        slug: 'bawarchi-biryani',
        items: [
          { name: 'Bawarchi Special Mutton Biryani', description: 'Spiced tender goat pieces layered with long basmati, fragrant saffron, and pure ghee. Hearty portion with salan.', price: 470, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Bawarchi Chicken Dum Biryani', description: 'Tender chicken marinated in crushed green chilies, yogurt, and whole spices, slow-steamed to perfection.', price: 390, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Mutton Fry Biryani', description: 'Fragrant biryani rice served with a generous topping of spicy deep-fried Andhra-style mutton pieces.', price: 510, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Paneer Dum Biryani', description: 'Marinated cottage cheese cubes layered with basmati, mint, and fried onions.', price: 310, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Coal-Grilled Kebabs & Starters',
        slug: 'bawarchi-starters',
        items: [
          { name: 'Bawarchi Boti Kebab', description: 'Spiced baby mutton cubes char-grilled on skewers, finished with chaat masala and lime.', price: 450, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Chicken 65 RTC X Roads Style', description: 'Deep red, crispy spiced boneless chicken tossed with green chilies, garlic, and curry leaves.', price: 340, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Tangdi Kebab (3 pcs)', description: 'Chicken drumsticks marinated in rich cashew cream and roasted till juicy in charcoal clay oven.', price: 360, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Apollo Fish Fry', description: 'Murrel fish cubes tossed with yogurt, curry leaves, and green chilies in Hyderabad street style.', price: 420, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 }
        ]
      },
      {
        name: 'Mughlai Curries & Tandoor',
        slug: 'bawarchi-curries',
        items: [
          { name: 'Mutton Masala Gravy', description: 'Succulent mutton slow-simmered in onion, tomato, and ground garam masala gravy.', price: 440, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Kadai Chicken', description: 'Bone-in chicken tossed with bell peppers and crushed coriander seeds in iron wok.', price: 370, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Dal Tadka Desi Ghee', description: 'Yellow lentils tempered with cumin, garlic, dry red chillies, and pure ghee.', price: 230, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Roomali Roti (2 pcs)', description: 'Handkerchief-thin soft flatbread tossed and baked over convex iron kadai.', price: 70, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Desserts & Drinks',
        slug: 'bawarchi-desserts',
        items: [
          { name: 'Double Ka Meetha', description: 'Traditional Hyderabadi ghee-fried bread soaked in rich saffron milk.', price: 160, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Khubani Ka Meetha with Ice Cream', description: 'Stewed apricots paired with rich vanilla bean ice cream.', price: 190, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Sweet Lassi Bawarchi Special', description: 'Thick, creamy churned sweet yogurt topped with malai.', price: 120, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 7. Cafe Bahar (Basheerbagh / Hyderguda)
  {
    index: 7,
    name: 'Cafe Bahar',
    slug: 'cafe-bahar',
    tagline: 'Legacy Hyderabadi Biryani & Chai destination since 1973',
    description: 'An iconic culinary pilgrimage in Hyderguda serving rich Irani chai, legendary chicken and mutton biryanis, and succulent tawa kebabs.',
    cover_image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 1890,
    price_tier: '₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 300,
    delivery_fee: 45,
    packaging_fee: 20,
    is_featured: false,
    is_open: true,
    address_line: 'Old MLA Quarters Road, Hyderguda, Basheerbagh',
    city: 'Hyderabad',
    latitude: 17.3995000,
    longitude: 78.4821000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'cafebaharhyderabad.com / Zomato Basheerbagh',
    categories: [
      {
        name: 'Bahar Signature Biryanis',
        slug: 'bahar-biryanis',
        items: [
          { name: 'Cafe Bahar Special Mutton Biryani', description: 'Double portion mutton with extra eggs and spiced saffron basmati, dum cooked over charcoal.', price: 480, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Classic Chicken Dum Biryani', description: 'Hyderguda’s favorite aromatic chicken biryani with mirchi salan and dahi raita.', price: 380, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Fish Dum Biryani', description: 'Succulent boneless fish fillets marinated in deccani spices and steamed with aged rice.', price: 440, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 24 },
          { name: 'Bahar Veg Biryani Special', description: 'Assorted seasonal vegetables and green peas simmered with saffron basmati.', price: 290, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Tandoor & Charcoal Starters',
        slug: 'bahar-starters',
        items: [
          { name: 'Mutton Boti Fry Bahar Style', description: 'Tender lamb chunks pan-tossed with curry leaves, crushed pepper, and green chilies.', price: 440, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Murgh Malai Kebab (6 pcs)', description: 'Boneless chicken cubes soaked in cheese, heavy cream, and cardamom, flame-roasted.', price: 390, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Tandoori Chicken (Full)', description: 'Whole chicken cut into four, marinated in red masala and roasted in clay pit.', price: 540, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Paneer Malai Tikka', description: 'Creamy paneer cubes glazed with cashew-garlic paste and grilled over charcoal.', price: 340, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Mughlai Curries & Breads',
        slug: 'bahar-curries',
        items: [
          { name: 'Mutton Tala Hua Gosht', description: 'Crisp fried mutton morsels with ginger-garlic, curry leaves, and spicy red masala.', price: 460, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Butter Chicken Bahar', description: 'Tender chicken pieces simmered in sweet-tangy makhani gravy with butter.', price: 380, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Tandoori Roti (2 pcs)', description: 'Crisp whole-wheat flatbread baked on the inner walls of tandoor.', price: 60, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Rumali Roti (2 pcs)', description: 'Soft, stretchy handkerchief bread folded and served warm.', price: 70, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      },
      {
        name: 'Bahar Chai & Desserts',
        slug: 'bahar-chai-desserts',
        items: [
          { name: 'Special Irani Chai Flask (Serves 4)', description: 'Condensed, slow-simmered milky decoction tea served with crisp Osmania biscuits.', price: 160, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Khubani Ka Meetha', description: 'Stewed Turkish apricots simmered with sugar and cardamom, topped with cream.', price: 180, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Double Ka Meetha', description: 'Fried bread soaked in sweetened rabdi and cardamom.', price: 150, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 8. Hotel Shadab (Madina Circle, Old City)
  {
    index: 8,
    name: 'Hotel Shadab',
    slug: 'hotel-shadab',
    tagline: 'Heart of Old City royal gastronomy & breakfast Marag',
    description: 'Located in the historic shadow of Charminar, Hotel Shadab is famed for legendary morning Marag, Bheja Fry, tender Nihari, and authentic Zafrani Dum Biryani.',
    cover_image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 2450,
    price_tier: '₹₹',
    delivery_time_min: 35,
    delivery_time_max: 55,
    minimum_order: 350,
    delivery_fee: 55,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: '21-1-140/144, High Court Road, Madina Circle, Ghansi Bazaar',
    city: 'Hyderabad',
    latitude: 17.3685000,
    longitude: 78.4732000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'Times Food Guide / Google Maps Ghansi Bazaar / Swiggy Verified',
    categories: [
      {
        name: 'Old City Heritage Dum Biryani',
        slug: 'shadab-biryani',
        items: [
          { name: 'Shadab Special Zafrani Mutton Biryani', description: 'Royal old-city recipe with generous tender mutton pieces, long basmati, pure saffron, and ghee.', price: 490, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Shadab Chicken Dum Biryani', description: 'Charcoal steamed degh biryani served with spicy Mirchi Salan and fresh onion raita.', price: 390, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Mutton Kheema Biryani', description: 'Aromatic basmati rice layered with spicy minced mutton and whole spices.', price: 440, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Vegetable Dum Biryani', description: 'Fresh vegetables and mint cooked in sealed degh with aromatic spices.', price: 310, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Heritage Broths & Breakfast Specials',
        slug: 'shadab-heritage-specials',
        items: [
          { name: 'Authentic Mutton Marag & Sheermal', description: 'Rich, peppery mutton soup slow-simmered with cashews, pistachios, and bone-in mutton pieces.', price: 480, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Bheja Fry Old City Style', description: 'Fresh goat brain sauteed with chopped onions, green chilies, and black pepper on flat tawa.', price: 390, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Paya Nahari with Kulcha', description: 'Overnight simmered trotters in velvety spiced bone broth with ginger and fresh lime.', price: 440, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Gurda Kaleji Fry', description: 'Kidney and liver pieces tossed with curry leaves, cracked coriander seeds, and chili.', price: 380, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Charcoal Kebabs & Curries',
        slug: 'shadab-kebabs-curries',
        items: [
          { name: 'Shikampur Kebab (4 pcs)', description: 'Mutton mince patties stuffed with spiced hung curd, mint, and green chilies.', price: 420, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Mutton Rogan Josh Shadab', description: 'Aromatic mutton curry cooked with brown onion paste, yogurt, and whole spices.', price: 450, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Tandoori Murgh (Full)', description: 'Charcoal-grilled whole chicken marinated in spiced red masala.', price: 520, image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 24 },
          { name: 'Tandoori Naan (2 pcs)', description: 'Crisp and fluffy tandoor bread brushed with butter.', price: 90, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Deccani Sweets & Chai',
        slug: 'shadab-sweets',
        items: [
          { name: 'Shadab Special Shahi Tukda', description: 'Fried bread triangles steeped in thickened saffron rabdi with almonds and pistachios.', price: 180, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Qubani Ka Meetha with Malai', description: 'Stewed apricots served with generous dollop of fresh clotted cream.', price: 190, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Irani Zafrani Chai Flask', description: 'Rich, creamy dum-brewed tea infused with saffron strands.', price: 170, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 9. Pista House (HITEC City / Charminar)
  {
    index: 9,
    name: 'Pista House',
    slug: 'pista-house',
    tagline: 'World-famous GI-tagged Haleem & Hyderabadi specialties',
    description: 'Pioneers of GI-certified Hyderabadi Haleem and royal Zafrani Biryanis, blending pure mutton, pounded wheat, and aromatic spices with authentic bakery sweets.',
    cover_image: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 1780,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 300,
    delivery_fee: 45,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Opposite Cyber Gateway, HITEC City Main Road, Madhapur',
    city: 'Hyderabad',
    latitude: 17.4478000,
    longitude: 78.3792000,
    cuisines: ['hyderabadi-dum', 'european-bistro'],
    public_source: 'pistahouse.in / Zomato HITEC City Flagship',
    categories: [
      {
        name: 'GI-Tagged World Famous Haleem',
        slug: 'pista-haleem',
        items: [
          { name: 'Pista House Royal Mutton Haleem', description: 'Slow-cooked for 12 hours with tender mutton, broken wheat, lentils, ghee, cashews, and golden fried onions. Served with lemon wedges.', price: 340, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Special Chicken Haleem', description: 'Rich and velvety chicken stew beaten to a paste with spices and pure Desi ghee.', price: 290, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 },
          { name: 'Family Pack Mutton Haleem (1 kg)', description: 'Large sharing container of signature mutton haleem topped with roasted almonds, cashews, and fried onions.', price: 950, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Vegetarian Dry Fruit Haleem', description: 'Wheat, lentils, seasonal vegetables, soya, and assorted roasted dry fruits beaten with ghee.', price: 260, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Zafrani Biryanis',
        slug: 'pista-biryanis',
        items: [
          { name: 'Zafrani Mutton Dum Biryani', description: 'Basmati rice infused with saffron strands and tender baby goat pieces in traditional dum.', price: 460, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Zafrani Chicken Dum Biryani', description: 'Classic chicken biryani cooked with green chilies, mint, and saffron.', price: 380, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Special Mutton Kheema Biryani', description: 'Minced mutton cooked with biryani spices and basmati rice.', price: 420, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Paneer Dum Biryani Handi', description: 'Marinated cottage cheese and fragrant rice dum-cooked with fried onions.', price: 320, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Kebabs & Curries',
        slug: 'pista-kebabs',
        items: [
          { name: 'Mutton Seekh Kebab', description: 'Spiced minced lamb rolled onto skewers and char-grilled.', price: 430, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Murgh Tikka (6 pcs)', description: 'Tender chicken cubes marinated in tandoori red masala.', price: 360, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Mutton Rogan Josh', description: 'Slow-simmered rich mutton gravy with Kashmiri spices.', price: 440, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Butter Naan', description: 'Clay oven baked flatbread brushed with butter.', price: 60, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      },
      {
        name: 'Bakery Confections & Sweets',
        slug: 'pista-sweets',
        items: [
          { name: 'Apricot Delight Cake Slice', description: 'Pista House’s famed sponge cake layered with rich apricot compote and whipped cream.', price: 190, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Assorted Baklava Box (250g)', description: 'Flaky filo pastry layered with chopped pistachios, walnuts, and honey syrup.', price: 450, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Osmania Biscuits Tin (400g)', description: 'Traditional sweet and mildly salty buttery biscuits, best paired with Irani chai.', price: 220, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Khubani Ka Meetha', description: 'Heritage stewed apricot dessert topped with clotted cream.', price: 180, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 10. Shah Ghouse Hotel & Restaurant (Gachibowli)
  {
    index: 10,
    name: 'Shah Ghouse Hotel & Restaurant',
    slug: 'shah-ghouse',
    tagline: 'Authentic late-night Hyderabadi Haleem & Dum Biryani',
    description: 'A powerhouse of Hyderabadi culinary tradition, revered for slow-cooked mutton biryanis, night-simmered paya, and authentic tandoor skewers.',
    cover_image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 1980,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 300,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: false,
    is_open: true,
    address_line: 'Opposite Bio-Diversity Park, Raidurgam, Gachibowli',
    city: 'Hyderabad',
    latitude: 17.4371000,
    longitude: 78.3685000,
    cuisines: ['hyderabadi-dum', 'mughlai-charminar-grill'],
    public_source: 'shahghouse.in / Zomato Gachibowli',
    categories: [
      {
        name: 'Shah Ghouse Dum Biryanis',
        slug: 'ghouse-biryani',
        items: [
          { name: 'Shah Ghouse Special Mutton Biryani', description: 'Famous spicy dum mutton biryani with extra pieces, golden fried shallots, and rich salan.', price: 480, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Special Chicken Dum Biryani', description: 'Fragrant saffron rice and juicy chicken cooked on low flame with traditional spices.', price: 390, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Mutton Fry Piece Biryani', description: 'Spicy pan-roasted boneless mutton pieces served over steaming biryani rice.', price: 510, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 24 },
          { name: 'Veg Dum Biryani', description: 'Aromatic basmati cooked with mixed vegetables, mint, and whole spices.', price: 290, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Haleem & Mughlai Starters',
        slug: 'ghouse-starters',
        items: [
          { name: 'Shah Ghouse Mutton Haleem', description: 'Signature pounded wheat and mutton stew garnished with fried onions, coriander, and ghee.', price: 330, image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 15 },
          { name: 'Tangdi Kebab (3 pcs)', description: 'Juicy chicken drumsticks marinated in spiced curd and cooked in charcoal clay oven.', price: 350, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Tala Hua Gosht', description: 'Deep fried tender mutton morsels tossed with green chillies and curry leaves.', price: 440, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 18 },
          { name: 'Chicken Reshmi Kebab (6 pcs)', description: 'Cream and cashew marinated boneless chicken skewers roasted over coals.', price: 380, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Curries & Flatbreads',
        slug: 'ghouse-curries',
        items: [
          { name: 'Mutton Korma', description: 'Traditional brown onion and cashew gravy with tender cuts of mutton.', price: 430, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Murgh Makhani Butter Chicken', description: 'Boneless tandoori chicken simmered in rich creamy tomato butter sauce.', price: 370, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Roomali Roti (2 pcs)', description: 'Thin and soft griddle flatbread.', price: 70, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Butter Naan (2 pcs)', description: 'Tandoor leavened flatbread brushed with butter.', price: 100, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      },
      {
        name: 'Desserts & Chai',
        slug: 'ghouse-desserts',
        items: [
          { name: 'Special Double Ka Meetha', description: 'Golden fried bread in saffron milk rabdi with dry fruits.', price: 160, image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Qubani Ka Meetha with Cream', description: 'Stewed apricots topped with fresh cream.', price: 180, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 },
          { name: 'Irani Dum Chai Flask', description: 'Freshly brewed strong Irani chai.', price: 150, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      }
    ]
  },

  // 11. Rayalaseema Ruchulu (Jubilee Hills)
  {
    index: 11,
    name: 'Rayalaseema Ruchulu',
    slug: 'rayalaseema-ruchulu',
    tagline: 'Fiery Telugu & Rayalaseema regional heritage cuisine',
    description: 'Celebrated for legendary rustic Telugu dining: Ragi Sangati with spicy Natu Kodi Pulusu, Gongura Mamsam, spicy Rayalaseema biryani, and Pottelu Mutton.',
    cover_image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 1120,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 400,
    delivery_fee: 55,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 481, Road No. 36, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4312000,
    longitude: 78.4068000,
    cuisines: ['andhra-rayalaseema', 'telangana-heritage'],
    public_source: 'rayalaseemaruchulu.com / Zomato Jubilee Hills',
    categories: [
      {
        name: 'Rayalaseema Signature Classics',
        slug: 'raya-classics',
        items: [
          { name: 'Ragi Sangati with Natu Kodi Pulusu', description: 'Wholesome finger-millet mudde balls served with country chicken curry slow-cooked with Byadgi chillies and poppy seeds.', price: 540, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Gongura Mamsam', description: 'Tender goat pieces braised in tangy sorrel leaves (gongura) paste with green chillies and roasted spices.', price: 560, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Ulavacharu Kodi Pulao', description: 'Aromatic horse-gram soup reduction blended with spiced chicken and fragrant basmati rice.', price: 480, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Gutti Vankaya Koora', description: 'Small eggplants stuffed with roasted peanuts, sesame, dried coconut, and tamarind gravy.', price: 380, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Telugu Starters & Vepudulu',
        slug: 'raya-starters',
        items: [
          { name: 'Royyala Vepudu (Prawn Fry)', description: 'Succulent river prawns stir-fried with caramelized onions, curry leaves, and spicy red pepper powder.', price: 580, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Mamsam Vepudu (Mutton Roast)', description: 'Tender baby goat cubes pan-roasted in iron kadai with freshly pounded spices.', price: 520, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Miriyala Kodi Vepudu (Pepper Chicken)', description: 'Boneless chicken tossed with pungent black peppercorn paste and curry leaves.', price: 420, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Kaju Paneer Pakoda', description: 'Cottage cheese and whole cashews coated in spiced gram flour batter and fried golden.', price: 340, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Rice, Pulaos & Roti',
        slug: 'raya-rice',
        items: [
          { name: 'Rayalaseema Mutton Dum Biryani', description: 'Spicier Telugu version of dum mutton biryani with pungent green chili paste and mint.', price: 510, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 24 },
          { name: 'Bagara Annam with Dalcha', description: 'Flavored tempered rice served with lentil-mutton broth and mint.', price: 360, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Jonnalu Roti (2 pcs)', description: 'Traditional gluten-free sorghum (jowar) flatbread hand-patted and baked on clay tawa.', price: 90, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Perugu Annam (Curd Rice)', description: 'Creamy cooled rice tempered with mustard seeds, ginger, curry leaves, and pomegranate.', price: 180, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Desserts & Beverages',
        slug: 'raya-desserts',
        items: [
          { name: 'Pootharekulu with Dry Fruits (2 pcs)', description: 'Delicate Andhra paper sweet made with rice starch layers, pure ghee, and jaggery powder.', price: 210, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 6 },
          { name: 'Bellam Bobbatlu with Ghee (2 pcs)', description: 'Sweet flatbread stuffed with chana dal, jaggery, and cardamom, served with molten ghee.', price: 180, image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Nannari Sharbat', description: 'Traditional cooling herbal root sherbet with basil seeds and fresh lime juice.', price: 140, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 12. Chutneys (Banjara Hills)
  {
    index: 12,
    name: 'Chutneys',
    slug: 'chutneys',
    tagline: 'Iconic all-day South Indian gourmet tiffins & signature chutneys',
    description: 'Hyderabad’s premier South Indian culinary institution, famous for Babai Idli with white butter, MLA Pesarattu, and a legendary rainbow of freshly ground chutneys.',
    cover_image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 2300,
    price_tier: '₹₹',
    delivery_time_min: 20,
    delivery_time_max: 35,
    minimum_order: 250,
    delivery_fee: 35,
    packaging_fee: 15,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 3-6-271, Road No. 3, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4221000,
    longitude: 78.4412000,
    cuisines: ['south-indian-tiffins', 'pure-vegetarian'],
    public_source: 'chutneys.co.in / Zomato Banjara Hills',
    categories: [
      {
        name: 'Iconic Breakfast Tiffins',
        slug: 'chutneys-tiffins',
        items: [
          { name: 'Babai Idli with White Butter (3 pcs)', description: 'Ultra-soft steamed rice cakes topped with melting homemade white butter, karampodi, and 6 assorted chutneys.', price: 230, image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Guntur Idli Karampodi Spiced', description: 'Mini button idlis tossed in fiery Guntur chili powder, sesame oil, and fresh curry leaves.', price: 210, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Meda Vada Sambar (2 pcs)', description: 'Crisp golden lentil fritters served with hot piping vegetable sambar and coconut chutney.', price: 180, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Poori with Potato Sagu (3 pcs)', description: 'Fluffy golden fried bread served with spiced potato sagu and ginger chutney.', price: 190, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Gourmet Dosa Collection',
        slug: 'chutneys-dosas',
        items: [
          { name: 'MLA Pesarattu with Upma Filling', description: 'Whole green gram crepe cooked crisp, stuffed with spicy semolina upma, chopped onions, and ginger.', price: 260, image_url: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Corn and Cheese Dosa', description: 'Crispy crepe filled with sweet corn kernels, grated cheddar, and fresh green chilies.', price: 270, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 },
          { name: 'Ghee Karam Dosa', description: 'Golden roasted thin crepe smeared with spicy red chili garlic paste and dollops of pure ghee.', price: 240, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Butter Masala Dosa', description: 'Classic crisp dosa stuffed with seasoned potato mash and dollop of dairy butter.', price: 220, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'South Indian Rice Specialties',
        slug: 'chutneys-rice',
        items: [
          { name: 'South Indian Special Thali Feast', description: 'Includes poori, rice, sambar, rasam, kootu, poriyal, curd, appalam, and sweet payasam.', price: 340, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 18 },
          { name: 'Bisi Bele Bath with Boondi', description: 'Karnataka-style spiced rice and lentil porridge cooked with vegetables and served with crunchy boondi.', price: 220, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 14 },
          { name: 'Lemon Rice with Fried Peanuts', description: 'Tangy lemon-tempered rice with mustard seeds, curry leaves, and crunchy peanuts.', price: 190, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Tempered Curd Rice', description: 'Soft rice whipped with fresh curd, pomegranate pearls, and roasted mustard tempering.', price: 170, image_url: 'https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Beverages & Sweets',
        slug: 'chutneys-drinks',
        items: [
          { name: 'Degree Filter Coffee', description: 'Traditional South Indian chicory and coffee blend frothed with hot milk in dabarah set.', price: 90, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Rava Kesari Bath with Cashews', description: 'Sweet semolina pudding enriched with pure ghee, saffron, and roasted cashews.', price: 140, image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Spiced Neer Moru (Buttermilk)', description: 'Chilled salted churned buttermilk infused with curry leaves, ginger, and asafoetida.', price: 80, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 4 }
        ]
      }
    ]
  }
];

module.exports = { PART1 };
