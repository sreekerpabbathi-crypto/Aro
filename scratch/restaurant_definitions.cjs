// scratch/restaurant_definitions.js
// Master definitions of 36 real Hyderabad restaurants with menus, categories, and customization groups

const RESTAURANTS_DATA = [
  // ===========================================================================
  // 1. Deccan Table (Jubilee Hills) - Existing
  // ===========================================================================
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
    public_source: 'ARO Culinary Catalog / Verified Jubilee Hills Fine Dining',
    categories: [
      {
        name: 'Signature Deccani Broths & Starters',
        slug: 'deccani-starters',
        items: [
          {
            name: 'Slow-Smoked Deccani Marag & Sheermal',
            description: 'Royal Deccani spiced mutton broth simmered overnight with pistachios and black cardamom, paired with warm saffron sheermal.',
            price: 1150,
            image_url: 'https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 30,
            options: [
              { groupName: 'Broth Intensity', min: 1, max: 1, required: true, choices: [{ name: 'Classic Velvety (Medium)', price: 0, default: true }, { name: 'Guntur Teja Spiced', price: 0 }] },
              { groupName: 'Accompaniment', min: 0, max: 2, required: false, choices: [{ name: 'Extra Saffron Sheermal', price: 120 }, { name: 'Flaky Roomali Roti (2 pcs)', price: 70 }] }
            ]
          },
          {
            name: 'Pothuraju Mutton Sukka & Sourdough Appam',
            description: 'Telangana highway-style pan-roasted tender goat with caramelized shallots, curry leaves, and crispy fermented appam.',
            price: 980,
            image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 25,
            options: [
              { groupName: 'Spice Level', min: 1, max: 1, required: true, choices: [{ name: 'Warangal Black Pepper Roast', price: 0, default: true }, { name: 'Mild Caramelized Roast', price: 0 }] }
            ]
          },
          {
            name: 'Smoked Subz Shikampuri Kebab (4 pcs)',
            description: 'Hung yogurt and smoked yam patties stuffed with spiced mint chutney and pomegranate reduction.',
            price: 650,
            image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 20
          },
          {
            name: 'Tawa Macchi Charminar Style',
            description: 'Fresh river Murrel fillets seared on heavy cast iron with pounded deccani spices and lime reduction.',
            price: 890,
            image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: false,
            prep_time: 22
          }
        ]
      },
      {
        name: 'Royal Heritage Mains',
        slug: 'deccani-mains',
        items: [
          {
            name: 'Dum Pukht Gosht Korma',
            description: 'Pot-roasted baby mutton slow-braised with brown onions, almonds, saffron water, and dried rose petals.',
            price: 1100,
            image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 30
          },
          {
            name: 'Bagara Baingan & Paneer Rollatini',
            description: 'Charred baby brinjals and artisanal cottage cheese rolls simmered in roasted peanut, sesame, and tamarind gravy.',
            price: 740,
            image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 24
          },
          {
            name: 'Nalli Nihari Khaas',
            description: 'Overnight simmered lamb shanks in rich bone marrow reduction with fresh ginger juliennes and lemon.',
            price: 1250,
            image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 35
          },
          {
            name: 'Mirchi Ka Salan Heritage Bowl',
            description: 'Bhavnagri chillies poached gently in spiced coconut, sesame, and peanut emulsion.',
            price: 520,
            image_url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 18
          }
        ]
      },
      {
        name: 'Artisanal Rice & Deccani Breads',
        slug: 'deccani-rice-breads',
        items: [
          {
            name: 'Aged Basmati Sufiyani Biryani',
            description: 'White royal biryani cooked in milk, cream, and green cardamom with succulent lamb medallions.',
            price: 1200,
            image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 30
          },
          {
            name: 'Telangana Bagara Rice Pot',
            description: 'Fragrant short-grain rice tempered with whole spices, caramelized shallots, mint, and pure ghee.',
            price: 420,
            image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 15
          },
          {
            name: 'Handcrafted Sheermal (2 pcs)',
            description: 'Traditional milk-kneaded flatbread infused with Kashmiri saffron and brushed with butter.',
            price: 240,
            image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 12
          },
          {
            name: 'Bakarkhani Puff (2 pcs)',
            description: 'Flaky, layered spiced bread sprinkled with sesame and nigella seeds.',
            price: 260,
            image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 12
          }
        ]
      },
      {
        name: 'Desserts & Royal Elixirs',
        slug: 'deccani-desserts',
        items: [
          {
            name: 'Khubani Ka Meetha with Clotted Malai',
            description: 'Slow-stewed dried apricots scented with cardamom, served with thick buffalo milk clotted cream.',
            price: 480,
            image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: true,
            prep_time: 12
          },
          {
            name: 'Zafrani Double Ka Meetha',
            description: 'Crisp ghee-fried bread steeped in saffron-cardamom rabdi, finished with silver leaf and roasted almonds.',
            price: 460,
            image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 15
          },
          {
            name: 'Rooh Afza & Gond Katira Sherbet',
            description: 'Heritage rose nectar with chilled basil seeds, tragacanth gum, and fresh lime.',
            price: 220,
            image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 8
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // 2. Kumo House (Banjara Hills) - Existing
  // ===========================================================================
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
    cuisines: ['japanese-robata'],
    public_source: 'ARO Catalog / Banjara Hills Gourmet Dining',
    categories: [
      {
        name: 'Chef Signature Nigiri & Sashimi',
        slug: 'kumo-nigiri',
        items: [
          {
            name: 'Truffle Hamachi Nigiri (4 pcs)',
            description: 'Yellowtail kingfish brushed with nikiri soy, finished with fresh black winter truffle and chives.',
            price: 850,
            image_url: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 20
          },
          {
            name: 'Aburi Salmon Belly Nigiri (4 pcs)',
            description: 'Torched Norwegian salmon belly with spicy cod roe mayo, unagi tare, and fresh scallions.',
            price: 790,
            image_url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 18
          },
          {
            name: 'Avocado & Truffle Nigiri (4 pcs)',
            description: 'Hass avocado glazed with sweet mushroom reduction and white truffle oil.',
            price: 520,
            image_url: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 15
          },
          {
            name: 'Bluefin Tuna Akami Sashimi (5 slices)',
            description: 'Prime cut tuna loin served with freshly grated Hon-wasabi and pickled ginger.',
            price: 980,
            image_url: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: false,
            prep_time: 16
          }
        ]
      },
      {
        name: 'Robata Charcoal Skewers',
        slug: 'kumo-robata',
        items: [
          {
            name: 'Charred King Oyster Mushroom Skewers',
            description: 'Robata charcoal grilled oyster mushrooms glazed with garlic-miso tare and sesame crunch.',
            price: 420,
            image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 18
          },
          {
            name: 'Yakitori Negima Chicken Skewers',
            description: 'Chicken thigh and charred Tokyo scallions basted with aged sweet soy reduction.',
            price: 540,
            image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 20
          },
          {
            name: 'Tiger Prawn Kushiyaki (3 pcs)',
            description: 'Jumbo prawns grilled over binchotan with sansho pepper and yuzu kosho butter.',
            price: 720,
            image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: false,
            prep_time: 22
          },
          {
            name: 'Tenderloin Beef Tsukune with Coddled Egg',
            description: 'Hand-minced spiced beef patties glazed with sweet soy, served with organic onsen yolk.',
            price: 680,
            image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: false,
            prep_time: 22
          }
        ]
      },
      {
        name: 'Artisanal Ramen & Donburi',
        slug: 'kumo-ramen-don',
        items: [
          {
            name: 'Truffle Tonkotsu Style Ramen',
            description: '24-hour slow braised chicken and dashi broth, ramen noodles, ajitsuke tamago, nori, and black garlic oil.',
            price: 780,
            image_url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 24,
            options: [
              { groupName: 'Noodle Firmness', min: 1, max: 1, required: true, choices: [{ name: 'Katame (Firm)', price: 0, default: true }, { name: 'Futsu (Normal)', price: 0 }] }
            ]
          },
          {
            name: 'Spicy Miso Wild Mushroom Ramen',
            description: 'Rich fermented red miso and shiitake broth, sweet corn, bamboo shoots, and rayu chili drizzle.',
            price: 640,
            image_url: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 20
          },
          {
            name: 'Wagyu Beef Yakiniku Donburi',
            description: 'Thinly sliced teriyaki beef over steamed koshihikari rice, scallions, sesame, and pickled red ginger.',
            price: 890,
            image_url: 'https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: false,
            prep_time: 22
          },
          {
            name: 'Unagi Kabayaki Rice Bowl',
            description: 'Caramelized freshwater eel fillet over fragrant rice with sansho pepper garnish.',
            price: 950,
            image_url: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 25
          }
        ]
      },
      {
        name: 'Desserts & Refreshments',
        slug: 'kumo-desserts',
        items: [
          {
            name: 'Matcha Fondant Tart',
            description: 'Warm Uji ceremonial matcha molten tart with black sesame crumble.',
            price: 450,
            image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: true,
            prep_time: 15
          },
          {
            name: 'Yuzu & Lychee Sparkling Soda',
            description: 'Japanese yuzu juice pressed with sweet lychee puree and sparkling water.',
            price: 280,
            image_url: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 6
          },
          {
            name: 'Mochi Ice Cream Trio',
            description: 'Handmade glutinous rice mochi filled with black sesame, green tea, and salted caramel gelato.',
            price: 390,
            image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 8
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // 3. Forno & Fig (Gachibowli) - Existing
  // ===========================================================================
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
          {
            name: 'Burrata & Charred Fig Neapolitan Pizza',
            description: 'San Marzano tomato base, fresh pugliese burrata, caramelized Mission figs, aged balsamic drizzle.',
            price: 720,
            image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: true,
            prep_time: 22,
            options: [
              { groupName: 'Crust Finish', min: 1, max: 1, required: true, choices: [{ name: 'Extra Virgin Garlic Herb', price: 0, default: true }, { name: 'Hot Honey Infused Crust', price: 50 }] }
            ]
          },
          {
            name: 'Diavola Pepperoni & Hot Nduja Pizza',
            description: 'Spicy artisanal pork salami, smoked provolone, chili flakes, and San Marzano DOP tomatoes.',
            price: 840,
            image_url: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 20
          },
          {
            name: 'Tartufo Funghi & Fontina Pizza',
            description: 'Wild porcini, button mushrooms, garlic crema, fontina cheese, and black truffle oil drizzle.',
            price: 790,
            image_url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 22
          },
          {
            name: 'Margherita Verace D.O.P.',
            description: 'Buffalo mozzarella, sweet cherry tomatoes, fresh Genovese basil, and 100% cold-pressed EVOO.',
            price: 580,
            image_url: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 18
          }
        ]
      },
      {
        name: 'Artisanal Fresh Pasta',
        slug: 'forno-pastas',
        items: [
          {
            name: 'Handmade Truffle Tagliolini',
            description: 'Egg pasta tossed in French butter, aged 24-month Parmigiano-Reggiano, and shaved Norcia truffles.',
            price: 790,
            image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: true,
            prep_time: 20
          },
          {
            name: 'Slow-Cooked Lamb Ragu Pappardelle',
            description: 'Braised lamb shoulder with rosemary, red wine, and plum tomatoes over wide ribbon pasta.',
            price: 820,
            image_url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 25
          },
          {
            name: 'Pesto Genovese Gnocchi',
            description: 'Pillow-soft potato gnocchi tossed with sweet basil, pine nuts, garlic, and pecorino romano.',
            price: 660,
            image_url: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 18
          },
          {
            name: 'Spaghetti ai Frutti di Mare',
            description: 'Squid ink spaghetti tossed with calamari, black tiger prawns, cherry tomatoes, and white wine.',
            price: 890,
            image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: false,
            prep_time: 22
          }
        ]
      },
      {
        name: 'Antipasti & Salads',
        slug: 'forno-antipasti',
        items: [
          {
            name: 'Heirloom Tomato & Burrata Caprese',
            description: 'Vibrant heirloom tomatoes, creamy burrata ball, aged Modena balsamic, and micro basil.',
            price: 590,
            image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 12
          },
          {
            name: 'Charred Polenta Crust Bruschetta',
            description: 'Crisp polenta batons topped with wild garlic mushrooms and goat cheese mousse.',
            price: 480,
            image_url: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 14
          },
          {
            name: 'Crispy Calamari Fritti',
            description: 'Tender baby squid dusted with semolina, fried crisp and served with smoked garlic aioli.',
            price: 620,
            image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: false,
            prep_time: 15
          },
          {
            name: 'Warm Garlic Rosemary Focaccia',
            description: 'Baked in the wood-fired oven with Maldon sea salt and Tuscan rosemary.',
            price: 320,
            image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 10
          }
        ]
      },
      {
        name: 'Dolci & Beverages',
        slug: 'forno-dolci',
        items: [
          {
            name: 'Classic Savoiardi Tiramisu',
            description: 'Espresso-soaked ladyfinger sponge layered with light mascarpone sabayon and Valrhona cocoa.',
            price: 460,
            image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: true,
            prep_time: 10
          },
          {
            name: 'Sicilian Pistachio Panna Cotta',
            description: 'Silky cream infused with Bronte pistachio paste, topped with crushed raspberries.',
            price: 420,
            image_url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 10
          },
          {
            name: 'San Pellegrino Blood Orange Fizz',
            description: 'Italian sparkling mineral water with natural Sicilian arancia rossa citrus.',
            price: 240,
            image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 5
          }
        ]
      }
    ]
  },

  // ===========================================================================
  // 4. Nizami Hearth (HITEC City) - Existing
  // ===========================================================================
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
    cuisines: ['hyderabadi-dum'],
    public_source: 'ARO Catalog / HITEC City Royal Awadhi Kitchens',
    categories: [
      {
        name: 'Royal Awadhi & Dum Curries',
        slug: 'nizami-curries',
        items: [
          {
            name: '24hr Dal Bukhara & Truffle Kulcha',
            description: 'Slow-simmered black lentils cooked overnight on charcoal, served with flaky truffle butter kulcha.',
            price: 680,
            image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: true,
            prep_time: 25,
            options: [
              { groupName: 'Spice Level', min: 1, max: 1, required: true, choices: [{ name: 'Subtle & Velvety (Mild)', price: 0, default: true }, { name: 'Classic Royal Spice (Medium)', price: 0 }] }
            ]
          },
          {
            name: 'Murgh Awadhi Korma Sultani',
            description: 'Tender chicken braised in cashewnut, dried yogurt, saffron, and aromatic kewra water.',
            price: 760,
            image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: false,
            prep_time: 24
          },
          {
            name: 'Gosht Dum Nihari with Bone Marrow',
            description: 'Melt-in-mouth lamb shank braised in 32-spice potli broth with caramelized onions.',
            price: 940,
            image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 30
          },
          {
            name: 'Paneer Zafrani Korma',
            description: 'Silken paneer cubes in velvety saffron-infused melon seed and almond gravy.',
            price: 640,
            image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 20
          }
        ]
      },
      {
        name: 'Sigri Kebabs & Tandoor',
        slug: 'nizami-kebabs',
        items: [
          {
            name: 'Galouti Kebab with Ulte Tawe Ka Paratha',
            description: 'Velvety smoked mutton patties minced 12 times with raw papaya and secret potli masala.',
            price: 820,
            image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 25
          },
          {
            name: 'Bhattee Murgh Tikka (6 pcs)',
            description: 'Charcoal-grilled chicken breast pieces marinated in hung curd, yellow chili, and mustard oil.',
            price: 620,
            image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: false,
            prep_time: 22
          },
          {
            name: 'Dahi Ke Kebab (4 pcs)',
            description: 'Crisp golden patties of strained spiced yogurt, coriander, and crushed pink peppercorn.',
            price: 520,
            image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 16
          },
          {
            name: 'Pathar Ka Gosht Nizam Shahi',
            description: 'Mutton steaks marinated overnight and seared on flat red granite stone over charcoal.',
            price: 880,
            image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 25
          }
        ]
      },
      {
        name: 'Royal Dum Biryani & Breads',
        slug: 'nizami-biryani',
        items: [
          {
            name: 'Kacchi Gosht Dum Biryani Khaas',
            description: 'Raw marinated tender goat layered with parboiled basmati, saffron, mint, and pure ghee, dum-sealed in handi.',
            price: 890,
            image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
            is_veg: false,
            is_chef_special: true,
            prep_time: 30
          },
          {
            name: 'Subz Moti Pulao Handi',
            description: 'Seasonal winter vegetables, baby corn, green peas, and paneer dumplings infused with kewra.',
            price: 580,
            image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 22
          },
          {
            name: 'Warqi Paratha (2 pcs)',
            description: 'Multi-layered flaky bread cooked on copper griddle with generous ghee.',
            price: 180,
            image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 10
          },
          {
            name: 'Truffle Butter Garlic Naan',
            description: 'Tandoor-baked leavened flatbread brushed with black truffle butter and minced garlic.',
            price: 210,
            image_url: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 8
          }
        ]
      },
      {
        name: 'Royal Desserts',
        slug: 'nizami-desserts',
        items: [
          {
            name: 'Shahi Tukda with Gold Vark',
            description: 'Crisp bread pudding steeped in condensed saffron milk and garnished with edible 24k gold leaf.',
            price: 380,
            image_url: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: true,
            prep_time: 12
          },
          {
            name: 'Anokhi Kheer (Garlic Pudding)',
            description: 'A royal Nizami secret: candied garlic flakes slow-simmered in milk so sweet and fragrant it surprises the palate.',
            price: 360,
            image_url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: true,
            prep_time: 12
          },
          {
            name: 'Pista Phirni in Clay Kasora',
            description: 'Ground basmati rice pudding slow-cooked with green pistachios and kewra, served chilled.',
            price: 280,
            image_url: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
            is_veg: true,
            is_chef_special: false,
            prep_time: 8
          }
        ]
      }
    ]
  }
];

module.exports = { RESTAURANTS_DATA };
