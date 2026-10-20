// src/data/hyderabadExpandedData.ts
// Expanded 36-restaurant Hyderabad dataset matching frontend types
import type { Restaurant } from '@/types'

export const HYDERABAD_EXPANDED_RESTAURANTS: Restaurant[] = [
  {
    "id": "b0000001-0000-0000-0000-000000000001",
    "name": "Deccan Table",
    "slug": "deccan-table",
    "tagline": "Contemporary Deccani & Telangana heritage cuisine",
    "description": "Rooted in royal Deccani traditions and Telangana spice crafts. Slow-smoked marag, artisanal bagara rice, and hand-ground spice blends.",
    "coverImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80",
    "rating": 4.9,
    "ratingCount": 342,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 600,
    "deliveryFee": 80,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Road No. 36, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4325,
    "longitude": 78.4072,
    "cuisines": [
      {
        "id": "c0000001-0000-0000-0000-000000000001",
        "name": "Contemporary Deccani",
        "slug": "contemporary-deccani",
        "icon": "Flame"
      },
      {
        "id": "c0000005-0000-0000-0000-000000000005",
        "name": "Telangana Heritage",
        "slug": "telangana-heritage",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0001-000000000001",
        "restaurantId": "b0000001-0000-0000-0000-000000000001",
        "name": "Signature Deccani Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000001",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000001",
            "name": "Slow-Smoked Deccani Marag & Sheermal",
            "description": "Royal Deccani spiced mutton broth simmered overnight with pistachios, paired with warm saffron sheermal.",
            "price": 1150,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000002",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000001",
            "name": "Pothuraju Mutton Sukka & Appam",
            "description": "Telangana highway-style pan-roasted tender goat with caramelized shallots and crispy fermented appam.",
            "price": 980,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000003",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000001",
            "name": "Smoked Subz Shikampuri Kebab (4 pcs)",
            "description": "Hung yogurt and yam patties stuffed with spiced mint chutney and pomegranate reduction.",
            "price": 650,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000001",
                "menuItemId": "d0000000-0000-0000-0000-000000000003",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000001",
                    "groupId": "e0000000-0000-0000-0000-000000000001",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000002",
                    "groupId": "e0000000-0000-0000-0000-000000000001",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000002",
                "menuItemId": "d0000000-0000-0000-0000-000000000003",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000003",
                    "groupId": "e0000000-0000-0000-0000-000000000002",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000004",
                    "groupId": "e0000000-0000-0000-0000-000000000002",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000004",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000001",
            "name": "Tawa Macchi Charminar Style",
            "description": "Fresh river Murrel fillets seared on heavy cast iron with pounded deccani spices and lime.",
            "price": 890,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0001-000000000002",
        "restaurantId": "b0000001-0000-0000-0000-000000000001",
        "name": "Royal Heritage Mains",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000005",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000002",
            "name": "Dum Pukht Gosht Korma",
            "description": "Pot-roasted baby mutton slow-braised with brown onions, almonds, saffron, and dried rose petals.",
            "price": 1100,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000003",
                "menuItemId": "d0000000-0000-0000-0000-000000000005",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000005",
                    "groupId": "e0000000-0000-0000-0000-000000000003",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000006",
                    "groupId": "e0000000-0000-0000-0000-000000000003",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000007",
                    "groupId": "e0000000-0000-0000-0000-000000000003",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000006",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000002",
            "name": "Bagara Baingan & Paneer Rollatini",
            "description": "Charred baby brinjals and cottage cheese rolls in roasted peanut, sesame, and tamarind gravy.",
            "price": 740,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000004",
                "menuItemId": "d0000000-0000-0000-0000-000000000006",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000008",
                    "groupId": "e0000000-0000-0000-0000-000000000004",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000009",
                    "groupId": "e0000000-0000-0000-0000-000000000004",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000007",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000002",
            "name": "Nalli Nihari Khaas",
            "description": "Overnight simmered lamb shanks in rich bone marrow reduction with ginger juliennes and lemon.",
            "price": 1250,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 35,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000008",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000002",
            "name": "Mirchi Ka Salan Heritage Bowl",
            "description": "Bhavnagri chillies poached gently in spiced coconut, sesame, and peanut emulsion.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0001-000000000003",
        "restaurantId": "b0000001-0000-0000-0000-000000000001",
        "name": "Artisanal Rice & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000009",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000003",
            "name": "Aged Basmati Sufiyani Biryani",
            "description": "White royal biryani cooked in milk, cream, and green cardamom with succulent lamb medallions.",
            "price": 1200,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000005",
                "menuItemId": "d0000000-0000-0000-0000-000000000009",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000010",
                    "groupId": "e0000000-0000-0000-0000-000000000005",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000011",
                    "groupId": "e0000000-0000-0000-0000-000000000005",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 900,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000006",
                "menuItemId": "d0000000-0000-0000-0000-000000000009",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000012",
                    "groupId": "e0000000-0000-0000-0000-000000000006",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000013",
                    "groupId": "e0000000-0000-0000-0000-000000000006",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000010",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000003",
            "name": "Telangana Bagara Rice Pot",
            "description": "Fragrant short-grain rice tempered with whole spices, caramelized shallots, mint, and pure ghee.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000011",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000003",
            "name": "Handcrafted Sheermal (2 pcs)",
            "description": "Traditional milk-kneaded flatbread infused with Kashmiri saffron and brushed with butter.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000012",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000003",
            "name": "Bakarkhani Puff (2 pcs)",
            "description": "Flaky, layered spiced bread sprinkled with sesame and nigella seeds.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0001-000000000004",
        "restaurantId": "b0000001-0000-0000-0000-000000000001",
        "name": "Royal Desserts & Sherbets",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000013",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000004",
            "name": "Khubani Ka Meetha with Clotted Malai",
            "description": "Slow-stewed dried apricots scented with cardamom, served with thick clotted buffalo cream.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000014",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000004",
            "name": "Zafrani Double Ka Meetha",
            "description": "Crisp ghee-fried bread steeped in saffron-cardamom rabdi, finished with silver leaf and almonds.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000015",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000004",
            "name": "Rooh Afza & Gond Katira Sherbet",
            "description": "Heritage rose nectar with chilled basil seeds, tragacanth gum, and fresh lime.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000016",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000004",
            "name": "Paan Gulkand Kulfi",
            "description": "Creamy frozen rabdi kulfi infused with sweet betel leaf and Damascus rose preserve.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000002-0000-0000-0000-000000000002",
    "name": "Kumo House",
    "slug": "kumo-house",
    "tagline": "Japanese-inspired dining & robata charcoal art",
    "description": "Bespoke Tokyo-inspired dining in Banjara Hills. Binchotan-grilled skewers, bluefin nigiri, and delicate yuzu glazes.",
    "coverImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 489,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 450,
    "deliveryFee": 60,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Road No. 12, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4156,
    "longitude": 78.4352,
    "cuisines": [
      {
        "id": "c0000002-0000-0000-0000-000000000002",
        "name": "Japanese & Robata",
        "slug": "japanese-robata",
        "icon": "Fish"
      },
      {
        "id": "c0000010-0000-0000-0000-000000000010",
        "name": "Pan-Asian & Dim Sum",
        "slug": "pan-asian",
        "icon": "Utensils"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0002-000000000001",
        "restaurantId": "b0000002-0000-0000-0000-000000000002",
        "name": "Chef Signature Nigiri & Sashimi",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000017",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000001",
            "name": "Truffle Hamachi Nigiri (4 pcs)",
            "description": "Yellowtail kingfish brushed with nikiri soy, finished with fresh black winter truffle and chives.",
            "price": 850,
            "imageUrl": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000018",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000001",
            "name": "Aburi Salmon Belly Nigiri (4 pcs)",
            "description": "Torched Norwegian salmon belly with spicy cod roe mayo, unagi tare, and scallions.",
            "price": 790,
            "imageUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000019",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000001",
            "name": "Avocado & Truffle Nigiri (4 pcs)",
            "description": "Hass avocado glazed with sweet mushroom reduction and white truffle oil.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000020",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000001",
            "name": "Bluefin Tuna Akami Sashimi (5 slices)",
            "description": "Prime cut tuna loin served with freshly grated Hon-wasabi and pickled ginger.",
            "price": 980,
            "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0002-000000000002",
        "restaurantId": "b0000002-0000-0000-0000-000000000002",
        "name": "Robata Charcoal Skewers",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000021",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000002",
            "name": "Charred King Oyster Mushroom Skewers",
            "description": "Robata charcoal grilled oyster mushrooms glazed with garlic-miso tare and sesame crunch.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000022",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000002",
            "name": "Yakitori Negima Chicken Skewers",
            "description": "Chicken thigh and charred Tokyo scallions basted with aged sweet soy reduction.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000023",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000002",
            "name": "Tiger Prawn Kushiyaki (3 pcs)",
            "description": "Jumbo prawns grilled over binchotan with sansho pepper and yuzu kosho butter.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000024",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000002",
            "name": "Tenderloin Beef Tsukune",
            "description": "Hand-minced spiced beef skewers glazed with sweet soy, served with organic onsen yolk.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0002-000000000003",
        "restaurantId": "b0000002-0000-0000-0000-000000000002",
        "name": "Artisanal Ramen & Bowls",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000025",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000003",
            "name": "Truffle Tonkotsu Style Ramen",
            "description": "24-hour slow braised chicken and dashi broth, ramen noodles, ajitsuke tamago, nori, and black garlic oil.",
            "price": 780,
            "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000026",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000003",
            "name": "Spicy Miso Wild Mushroom Ramen",
            "description": "Rich fermented red miso and shiitake broth, sweet corn, bamboo shoots, and rayu chili drizzle.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000027",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000003",
            "name": "Wagyu Beef Yakiniku Donburi",
            "description": "Thinly sliced teriyaki beef over steamed koshihikari rice, scallions, sesame, and pickled ginger.",
            "price": 890,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000028",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000003",
            "name": "Unagi Kabayaki Rice Bowl",
            "description": "Caramelized freshwater eel fillet over fragrant rice with sansho pepper garnish.",
            "price": 950,
            "imageUrl": "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0002-000000000004",
        "restaurantId": "b0000002-0000-0000-0000-000000000002",
        "name": "Desserts & Refreshments",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000029",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000004",
            "name": "Matcha Molten Tart",
            "description": "Warm Uji ceremonial matcha molten tart with black sesame crumble.",
            "price": 450,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000030",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000004",
            "name": "Yuzu & Lychee Sparkling Soda",
            "description": "Japanese yuzu juice pressed with sweet lychee puree and sparkling water.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000031",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000004",
            "name": "Mochi Ice Cream Trio",
            "description": "Handmade glutinous rice mochi filled with black sesame, green tea, and salted caramel gelato.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000032",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000004",
            "name": "Hojicha Smoked Iced Tea",
            "description": "Roasted green tea cold-brewed with white peach nectar.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000003-0000-0000-0000-000000000003",
    "name": "Forno & Fig",
    "slug": "forno-and-fig",
    "tagline": "Artisanal wood-fired Italian dining & handmade pasta",
    "description": "Pugliese burrata, 72-hour sourdough Neapolitan pizzas, and bronze-die extruded pasta crafted daily in Gachibowli.",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 612,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 300,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Financial District, Gachibowli",
    "city": "Hyderabad",
    "latitude": 17.4401,
    "longitude": 78.3489,
    "cuisines": [
      {
        "id": "c0000003-0000-0000-0000-000000000003",
        "name": "Artisanal Italian",
        "slug": "artisanal-italian",
        "icon": "Pizza"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0003-000000000001",
        "restaurantId": "b0000003-0000-0000-0000-000000000003",
        "name": "Wood-Fired Neapolitan Pizza",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000033",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000001",
            "name": "Burrata & Charred Fig Pizza",
            "description": "San Marzano tomato base, fresh pugliese burrata, caramelized Mission figs, aged balsamic drizzle.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000007",
                "menuItemId": "d0000000-0000-0000-0000-000000000033",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000014",
                    "groupId": "e0000000-0000-0000-0000-000000000007",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000015",
                    "groupId": "e0000000-0000-0000-0000-000000000007",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000008",
                "menuItemId": "d0000000-0000-0000-0000-000000000033",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000016",
                    "groupId": "e0000000-0000-0000-0000-000000000008",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000017",
                    "groupId": "e0000000-0000-0000-0000-000000000008",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000034",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000001",
            "name": "Diavola Pepperoni & Hot Nduja Pizza",
            "description": "Spicy artisanal pork salami, smoked provolone, chili flakes, and San Marzano DOP tomatoes.",
            "price": 840,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000009",
                "menuItemId": "d0000000-0000-0000-0000-000000000034",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000018",
                    "groupId": "e0000000-0000-0000-0000-000000000009",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000019",
                    "groupId": "e0000000-0000-0000-0000-000000000009",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000010",
                "menuItemId": "d0000000-0000-0000-0000-000000000034",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000020",
                    "groupId": "e0000000-0000-0000-0000-000000000010",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000021",
                    "groupId": "e0000000-0000-0000-0000-000000000010",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000035",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000001",
            "name": "Tartufo Funghi & Fontina Pizza",
            "description": "Wild porcini, button mushrooms, garlic crema, fontina cheese, and black truffle oil drizzle.",
            "price": 790,
            "imageUrl": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000011",
                "menuItemId": "d0000000-0000-0000-0000-000000000035",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000022",
                    "groupId": "e0000000-0000-0000-0000-000000000011",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000023",
                    "groupId": "e0000000-0000-0000-0000-000000000011",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000012",
                "menuItemId": "d0000000-0000-0000-0000-000000000035",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000024",
                    "groupId": "e0000000-0000-0000-0000-000000000012",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000025",
                    "groupId": "e0000000-0000-0000-0000-000000000012",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000036",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000001",
            "name": "Margherita Verace D.O.P.",
            "description": "Buffalo mozzarella, sweet cherry tomatoes, fresh Genovese basil, and cold-pressed EVOO.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0003-000000000002",
        "restaurantId": "b0000003-0000-0000-0000-000000000003",
        "name": "Artisanal Fresh Pasta",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000037",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000002",
            "name": "Handmade Truffle Tagliolini",
            "description": "Egg pasta tossed in French butter, 24-month Parmigiano-Reggiano, and shaved Norcia truffles.",
            "price": 790,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000038",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000002",
            "name": "Slow-Cooked Lamb Ragu Pappardelle",
            "description": "Braised lamb shoulder with rosemary, red wine, and plum tomatoes over wide ribbon pasta.",
            "price": 820,
            "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000039",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000002",
            "name": "Pesto Genovese Gnocchi",
            "description": "Pillow-soft potato gnocchi tossed with sweet basil, pine nuts, garlic, and pecorino romano.",
            "price": 660,
            "imageUrl": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000040",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000002",
            "name": "Spaghetti ai Frutti di Mare",
            "description": "Squid ink spaghetti tossed with calamari, black tiger prawns, cherry tomatoes, and white wine.",
            "price": 890,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0003-000000000003",
        "restaurantId": "b0000003-0000-0000-0000-000000000003",
        "name": "Antipasti & Salads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000041",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000003",
            "name": "Heirloom Tomato & Burrata Caprese",
            "description": "Vibrant heirloom tomatoes, creamy burrata ball, aged Modena balsamic, and micro basil.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000042",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000003",
            "name": "Charred Polenta Crust Bruschetta",
            "description": "Crisp polenta batons topped with wild garlic mushrooms and goat cheese mousse.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000043",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000003",
            "name": "Crispy Calamari Fritti",
            "description": "Tender baby squid dusted with semolina, fried crisp and served with smoked garlic aioli.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000044",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000003",
            "name": "Warm Garlic Rosemary Focaccia",
            "description": "Baked in the wood-fired oven with Maldon sea salt and Tuscan rosemary.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0003-000000000004",
        "restaurantId": "b0000003-0000-0000-0000-000000000003",
        "name": "Dolci & Beverages",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000045",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000004",
            "name": "Classic Savoiardi Tiramisu",
            "description": "Espresso-soaked ladyfinger sponge layered with light mascarpone sabayon and Valrhona cocoa.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000046",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000004",
            "name": "Sicilian Pistachio Panna Cotta",
            "description": "Silky cream infused with Bronte pistachio paste, topped with crushed raspberries.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000047",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000004",
            "name": "San Pellegrino Blood Orange Fizz",
            "description": "Italian sparkling mineral water with natural Sicilian arancia rossa citrus.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000048",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000004",
            "name": "Espresso Affogato al Caffe",
            "description": "Double shot of hot arabica espresso poured over Madagascar vanilla bean gelato.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000004-0000-0000-0000-000000000004",
    "name": "Nizami Hearth",
    "slug": "nizami-hearth",
    "tagline": "Royal Hyderabadi & Awadhi-inspired dum heritage",
    "description": "Centuries-old slow-simmered dum preparations, aged basmati gosht biryanis, saffron-infused korma, and flaky roomali.",
    "coverImage": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.9,
    "ratingCount": 521,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 500,
    "deliveryFee": 70,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Hitech City Main Road, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4504,
    "longitude": 78.3808,
    "cuisines": [
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
      },
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0004-000000000001",
        "restaurantId": "b0000004-0000-0000-0000-000000000004",
        "name": "Royal Awadhi & Dum Curries",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000049",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000001",
            "name": "24hr Dal Bukhara & Truffle Kulcha",
            "description": "Slow-simmered black lentils cooked overnight on charcoal, served with flaky truffle butter kulcha.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000013",
                "menuItemId": "d0000000-0000-0000-0000-000000000049",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000026",
                    "groupId": "e0000000-0000-0000-0000-000000000013",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000027",
                    "groupId": "e0000000-0000-0000-0000-000000000013",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000028",
                    "groupId": "e0000000-0000-0000-0000-000000000013",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000050",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000001",
            "name": "Murgh Awadhi Korma Sultani",
            "description": "Tender chicken braised in cashewnut, dried yogurt, saffron, and aromatic kewra water.",
            "price": 760,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000014",
                "menuItemId": "d0000000-0000-0000-0000-000000000050",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000029",
                    "groupId": "e0000000-0000-0000-0000-000000000014",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000030",
                    "groupId": "e0000000-0000-0000-0000-000000000014",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000031",
                    "groupId": "e0000000-0000-0000-0000-000000000014",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000051",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000001",
            "name": "Gosht Dum Nihari with Bone Marrow",
            "description": "Melt-in-mouth lamb shank braised in 32-spice potli broth with caramelized onions.",
            "price": 940,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000052",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000001",
            "name": "Paneer Zafrani Korma",
            "description": "Silken paneer cubes in velvety saffron-infused melon seed and almond gravy.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000015",
                "menuItemId": "d0000000-0000-0000-0000-000000000052",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000032",
                    "groupId": "e0000000-0000-0000-0000-000000000015",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000033",
                    "groupId": "e0000000-0000-0000-0000-000000000015",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000034",
                    "groupId": "e0000000-0000-0000-0000-000000000015",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0004-000000000002",
        "restaurantId": "b0000004-0000-0000-0000-000000000004",
        "name": "Sigri Kebabs & Tandoor",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000053",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000002",
            "name": "Galouti Kebab with Paratha",
            "description": "Velvety smoked mutton patties minced 12 times with raw papaya and secret potli masala.",
            "price": 820,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000016",
                "menuItemId": "d0000000-0000-0000-0000-000000000053",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000035",
                    "groupId": "e0000000-0000-0000-0000-000000000016",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000036",
                    "groupId": "e0000000-0000-0000-0000-000000000016",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000017",
                "menuItemId": "d0000000-0000-0000-0000-000000000053",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000037",
                    "groupId": "e0000000-0000-0000-0000-000000000017",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000038",
                    "groupId": "e0000000-0000-0000-0000-000000000017",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000054",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000002",
            "name": "Bhattee Murgh Tikka (6 pcs)",
            "description": "Charcoal-grilled chicken breast pieces marinated in hung curd, yellow chili, and mustard oil.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000018",
                "menuItemId": "d0000000-0000-0000-0000-000000000054",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000039",
                    "groupId": "e0000000-0000-0000-0000-000000000018",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000040",
                    "groupId": "e0000000-0000-0000-0000-000000000018",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000019",
                "menuItemId": "d0000000-0000-0000-0000-000000000054",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000041",
                    "groupId": "e0000000-0000-0000-0000-000000000019",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000042",
                    "groupId": "e0000000-0000-0000-0000-000000000019",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000055",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000002",
            "name": "Dahi Ke Kebab (4 pcs)",
            "description": "Crisp golden patties of strained spiced yogurt, coriander, and crushed pink peppercorn.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000020",
                "menuItemId": "d0000000-0000-0000-0000-000000000055",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000043",
                    "groupId": "e0000000-0000-0000-0000-000000000020",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000044",
                    "groupId": "e0000000-0000-0000-0000-000000000020",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000021",
                "menuItemId": "d0000000-0000-0000-0000-000000000055",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000045",
                    "groupId": "e0000000-0000-0000-0000-000000000021",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000046",
                    "groupId": "e0000000-0000-0000-0000-000000000021",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000056",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000002",
            "name": "Pathar Ka Gosht Nizam Shahi",
            "description": "Mutton steaks marinated overnight and seared on flat red granite stone over charcoal.",
            "price": 880,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0004-000000000003",
        "restaurantId": "b0000004-0000-0000-0000-000000000004",
        "name": "Royal Dum Biryani & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000057",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000003",
            "name": "Kacchi Gosht Dum Biryani Khaas",
            "description": "Raw marinated tender goat layered with parboiled basmati, saffron, mint, and pure ghee, dum-sealed in handi.",
            "price": 890,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000022",
                "menuItemId": "d0000000-0000-0000-0000-000000000057",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000047",
                    "groupId": "e0000000-0000-0000-0000-000000000022",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000048",
                    "groupId": "e0000000-0000-0000-0000-000000000022",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 668,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000023",
                "menuItemId": "d0000000-0000-0000-0000-000000000057",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000049",
                    "groupId": "e0000000-0000-0000-0000-000000000023",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000050",
                    "groupId": "e0000000-0000-0000-0000-000000000023",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000058",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000003",
            "name": "Subz Moti Pulao Handi",
            "description": "Seasonal winter vegetables, baby corn, green peas, and paneer dumplings infused with kewra.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000024",
                "menuItemId": "d0000000-0000-0000-0000-000000000058",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000051",
                    "groupId": "e0000000-0000-0000-0000-000000000024",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000052",
                    "groupId": "e0000000-0000-0000-0000-000000000024",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 435,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000025",
                "menuItemId": "d0000000-0000-0000-0000-000000000058",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000053",
                    "groupId": "e0000000-0000-0000-0000-000000000025",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000054",
                    "groupId": "e0000000-0000-0000-0000-000000000025",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000059",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000003",
            "name": "Warqi Paratha (2 pcs)",
            "description": "Multi-layered flaky bread cooked on copper griddle with generous ghee.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000060",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000003",
            "name": "Truffle Butter Garlic Naan",
            "description": "Tandoor-baked leavened flatbread brushed with black truffle butter and minced garlic.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0004-000000000004",
        "restaurantId": "b0000004-0000-0000-0000-000000000004",
        "name": "Royal Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000061",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000004",
            "name": "Shahi Tukda with Gold Vark",
            "description": "Crisp bread pudding steeped in condensed saffron milk and garnished with edible gold leaf.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000062",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000004",
            "name": "Anokhi Kheer (Sweet Garlic Pudding)",
            "description": "A royal Nizami secret: candied garlic flakes slow-simmered in sweet cardamom milk.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000063",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000004",
            "name": "Pista Phirni in Clay Kasora",
            "description": "Ground basmati rice pudding slow-cooked with green pistachios and kewra, served chilled.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000064",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000004",
            "name": "Badam Halwa Supreme",
            "description": "Rich almond pudding prepared with pure Desi ghee and saffron strands.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000005",
    "name": "Paradise Biryani",
    "slug": "paradise-biryani",
    "tagline": "World-renowned Hyderabadi Dum Biryani since 1953",
    "description": "The golden landmark of Hyderabadi Dum Biryani, slow-cooked in traditional deghs with fragrant basmati, farm-fresh mutton, and time-honoured spices.",
    "coverImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 1420,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 350,
    "deliveryFee": 50,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Prenderghast Road, MG Road, Secunderabad",
    "city": "Hyderabad",
    "latitude": 17.4412,
    "longitude": 78.4982,
    "cuisines": [
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
      },
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0005-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000005",
        "name": "World Famous Dum Biryani",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000065",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000001",
            "name": "Paradise Special Mutton Biryani",
            "description": "Long-grain basmati layered with succulent cuts of marinated mutton, saffron, fried onions, and pure ghee. Served with Mirchi ka Salan and Dahi ki Chutney.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000026",
                "menuItemId": "d0000000-0000-0000-0000-000000000065",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000055",
                    "groupId": "e0000000-0000-0000-0000-000000000026",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000056",
                    "groupId": "e0000000-0000-0000-0000-000000000026",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 368,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000027",
                "menuItemId": "d0000000-0000-0000-0000-000000000065",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000057",
                    "groupId": "e0000000-0000-0000-0000-000000000027",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000058",
                    "groupId": "e0000000-0000-0000-0000-000000000027",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000066",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000001",
            "name": "Royal Chicken Dum Biryani",
            "description": "Signature chicken pieces cooked in sealed degh with aromatic spices and saffron-tinted basmati.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000028",
                "menuItemId": "d0000000-0000-0000-0000-000000000066",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000059",
                    "groupId": "e0000000-0000-0000-0000-000000000028",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000060",
                    "groupId": "e0000000-0000-0000-0000-000000000028",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 315,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000029",
                "menuItemId": "d0000000-0000-0000-0000-000000000066",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000061",
                    "groupId": "e0000000-0000-0000-0000-000000000029",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000062",
                    "groupId": "e0000000-0000-0000-0000-000000000029",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000067",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000001",
            "name": "Nizami Egg Dum Biryani",
            "description": "Hard-boiled spiced farm eggs layered with fragrant dum basmati and caramelized shallots.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000030",
                "menuItemId": "d0000000-0000-0000-0000-000000000067",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000063",
                    "groupId": "e0000000-0000-0000-0000-000000000030",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000064",
                    "groupId": "e0000000-0000-0000-0000-000000000030",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 255,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000031",
                "menuItemId": "d0000000-0000-0000-0000-000000000067",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000065",
                    "groupId": "e0000000-0000-0000-0000-000000000031",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000066",
                    "groupId": "e0000000-0000-0000-0000-000000000031",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000068",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000001",
            "name": "Special Veg Dum Biryani",
            "description": "Fresh garden vegetables, paneer cubes, and mint slow-dum cooked in sealed earthenware.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000032",
                "menuItemId": "d0000000-0000-0000-0000-000000000068",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000067",
                    "groupId": "e0000000-0000-0000-0000-000000000032",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000068",
                    "groupId": "e0000000-0000-0000-0000-000000000032",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 240,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000033",
                "menuItemId": "d0000000-0000-0000-0000-000000000068",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000069",
                    "groupId": "e0000000-0000-0000-0000-000000000033",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000070",
                    "groupId": "e0000000-0000-0000-0000-000000000033",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0005-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000005",
        "name": "Paradise Starters & Kebabs",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000069",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000002",
            "name": "Mutton Seekh Kebab (4 pcs)",
            "description": "Tender ground lamb seasoned with coriander, cumin, and mint, skewered on coal grill.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000034",
                "menuItemId": "d0000000-0000-0000-0000-000000000069",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000071",
                    "groupId": "e0000000-0000-0000-0000-000000000034",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000072",
                    "groupId": "e0000000-0000-0000-0000-000000000034",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000035",
                "menuItemId": "d0000000-0000-0000-0000-000000000069",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000073",
                    "groupId": "e0000000-0000-0000-0000-000000000035",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000074",
                    "groupId": "e0000000-0000-0000-0000-000000000035",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000070",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000002",
            "name": "Chicken Reshmi Kebab (6 pcs)",
            "description": "Silky chicken supreme pieces marinated in cream, cashew paste, and white pepper.",
            "price": 410,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000036",
                "menuItemId": "d0000000-0000-0000-0000-000000000070",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000075",
                    "groupId": "e0000000-0000-0000-0000-000000000036",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000076",
                    "groupId": "e0000000-0000-0000-0000-000000000036",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000037",
                "menuItemId": "d0000000-0000-0000-0000-000000000070",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000077",
                    "groupId": "e0000000-0000-0000-0000-000000000037",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000078",
                    "groupId": "e0000000-0000-0000-0000-000000000037",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000071",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000002",
            "name": "Tandoori Murgh (Half)",
            "description": "Traditional bone-in chicken marinated in spiced red yogurt and roasted in tandoor.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000072",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000002",
            "name": "Paneer Tikka Shashlik",
            "description": "Malai paneer cubes, bell peppers, and onions roasted over hot coals.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000038",
                "menuItemId": "d0000000-0000-0000-0000-000000000072",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000079",
                    "groupId": "e0000000-0000-0000-0000-000000000038",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000080",
                    "groupId": "e0000000-0000-0000-0000-000000000038",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000039",
                "menuItemId": "d0000000-0000-0000-0000-000000000072",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000081",
                    "groupId": "e0000000-0000-0000-0000-000000000039",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000082",
                    "groupId": "e0000000-0000-0000-0000-000000000039",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0005-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000005",
        "name": "Curries & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000073",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000003",
            "name": "Butter Chicken Masala",
            "description": "Tandoori chicken morsels simmered in velvety tomato, butter, and fenugreek gravy.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000074",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000003",
            "name": "Mutton Rogan Josh",
            "description": "Kashmiri-style mutton curry flavored with alkanet root and mace.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000075",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000003",
            "name": "Mirchi Ka Salan (Extra Portion)",
            "description": "Authentic accompaniment made with Bhavnagri chillies, roasted sesame, and tamarind.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000076",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000003",
            "name": "Butter Naan (2 pcs)",
            "description": "Freshly baked tandoori leavened flatbread brushed with butter.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0005-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000005",
        "name": "Heritage Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000077",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000004",
            "name": "Paradise Double Ka Meetha",
            "description": "Crisp bread soaked in condensed saffron rabdi and topped with roasted nuts.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000078",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000004",
            "name": "Qubani Ka Meetha",
            "description": "Sweet stewed dried apricot delicacy served with thick fresh cream.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000079",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000004",
            "name": "Gulab Jamun with Rabdi (2 pcs)",
            "description": "Mawa dumplings soaked in cardamom rose syrup, drizzled with thick chilled rabdi.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000080",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000004",
            "name": "Matka Phirni",
            "description": "Traditional ground rice sweet pudding served in unglazed earthen cup.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000006",
    "name": "Bawarchi Restaurant",
    "slug": "bawarchi-restaurant",
    "tagline": "The iconic RTC X Roads Hyderabadi Dum Biryani legend",
    "description": "Renowned throughout Telangana for fiery, deeply flavorful authentic kacchi gosht biryani, charred boti kebabs, and rich deccani curries.",
    "coverImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 2150,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Beside Sandhya Theatre, RTC X Roads, Chikkadpally",
    "city": "Hyderabad",
    "latitude": 17.4045,
    "longitude": 78.4981,
    "cuisines": [
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
      },
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0006-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000006",
        "name": "Bawarchi Signature Dum Biryani",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000081",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000001",
            "name": "Bawarchi Special Mutton Biryani",
            "description": "Spiced tender goat pieces layered with long basmati, fragrant saffron, and pure ghee. Hearty portion with salan.",
            "price": 470,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000040",
                "menuItemId": "d0000000-0000-0000-0000-000000000081",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000083",
                    "groupId": "e0000000-0000-0000-0000-000000000040",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000084",
                    "groupId": "e0000000-0000-0000-0000-000000000040",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 353,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000041",
                "menuItemId": "d0000000-0000-0000-0000-000000000081",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000085",
                    "groupId": "e0000000-0000-0000-0000-000000000041",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000086",
                    "groupId": "e0000000-0000-0000-0000-000000000041",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000082",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000001",
            "name": "Bawarchi Chicken Dum Biryani",
            "description": "Tender chicken marinated in crushed green chilies, yogurt, and whole spices, slow-steamed to perfection.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000042",
                "menuItemId": "d0000000-0000-0000-0000-000000000082",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000087",
                    "groupId": "e0000000-0000-0000-0000-000000000042",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000088",
                    "groupId": "e0000000-0000-0000-0000-000000000042",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 293,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000043",
                "menuItemId": "d0000000-0000-0000-0000-000000000082",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000089",
                    "groupId": "e0000000-0000-0000-0000-000000000043",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000090",
                    "groupId": "e0000000-0000-0000-0000-000000000043",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000083",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000001",
            "name": "Mutton Fry Biryani",
            "description": "Fragrant biryani rice served with a generous topping of spicy deep-fried Andhra-style mutton pieces.",
            "price": 510,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000044",
                "menuItemId": "d0000000-0000-0000-0000-000000000083",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000091",
                    "groupId": "e0000000-0000-0000-0000-000000000044",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000092",
                    "groupId": "e0000000-0000-0000-0000-000000000044",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 383,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000045",
                "menuItemId": "d0000000-0000-0000-0000-000000000083",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000093",
                    "groupId": "e0000000-0000-0000-0000-000000000045",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000094",
                    "groupId": "e0000000-0000-0000-0000-000000000045",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000084",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000001",
            "name": "Paneer Dum Biryani",
            "description": "Marinated cottage cheese cubes layered with basmati, mint, and fried onions.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000046",
                "menuItemId": "d0000000-0000-0000-0000-000000000084",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000095",
                    "groupId": "e0000000-0000-0000-0000-000000000046",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000096",
                    "groupId": "e0000000-0000-0000-0000-000000000046",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 233,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000047",
                "menuItemId": "d0000000-0000-0000-0000-000000000084",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000097",
                    "groupId": "e0000000-0000-0000-0000-000000000047",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000098",
                    "groupId": "e0000000-0000-0000-0000-000000000047",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0006-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000006",
        "name": "Coal-Grilled Kebabs & Starters",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000085",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000002",
            "name": "Bawarchi Boti Kebab",
            "description": "Spiced baby mutton cubes char-grilled on skewers, finished with chaat masala and lime.",
            "price": 450,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000048",
                "menuItemId": "d0000000-0000-0000-0000-000000000085",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000099",
                    "groupId": "e0000000-0000-0000-0000-000000000048",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000100",
                    "groupId": "e0000000-0000-0000-0000-000000000048",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000049",
                "menuItemId": "d0000000-0000-0000-0000-000000000085",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000101",
                    "groupId": "e0000000-0000-0000-0000-000000000049",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000102",
                    "groupId": "e0000000-0000-0000-0000-000000000049",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000086",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000002",
            "name": "Chicken 65 RTC X Roads Style",
            "description": "Deep red, crispy spiced boneless chicken tossed with green chilies, garlic, and curry leaves.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000087",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000002",
            "name": "Tangdi Kebab (3 pcs)",
            "description": "Chicken drumsticks marinated in rich cashew cream and roasted till juicy in charcoal clay oven.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000050",
                "menuItemId": "d0000000-0000-0000-0000-000000000087",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000103",
                    "groupId": "e0000000-0000-0000-0000-000000000050",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000104",
                    "groupId": "e0000000-0000-0000-0000-000000000050",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000051",
                "menuItemId": "d0000000-0000-0000-0000-000000000087",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000105",
                    "groupId": "e0000000-0000-0000-0000-000000000051",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000106",
                    "groupId": "e0000000-0000-0000-0000-000000000051",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000088",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000002",
            "name": "Apollo Fish Fry",
            "description": "Murrel fish cubes tossed with yogurt, curry leaves, and green chilies in Hyderabad street style.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000052",
                "menuItemId": "d0000000-0000-0000-0000-000000000088",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000107",
                    "groupId": "e0000000-0000-0000-0000-000000000052",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000108",
                    "groupId": "e0000000-0000-0000-0000-000000000052",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000053",
                "menuItemId": "d0000000-0000-0000-0000-000000000088",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000109",
                    "groupId": "e0000000-0000-0000-0000-000000000053",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000110",
                    "groupId": "e0000000-0000-0000-0000-000000000053",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0006-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000006",
        "name": "Mughlai Curries & Tandoor",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000089",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000003",
            "name": "Mutton Masala Gravy",
            "description": "Succulent mutton slow-simmered in onion, tomato, and ground garam masala gravy.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000054",
                "menuItemId": "d0000000-0000-0000-0000-000000000089",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000111",
                    "groupId": "e0000000-0000-0000-0000-000000000054",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000112",
                    "groupId": "e0000000-0000-0000-0000-000000000054",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000113",
                    "groupId": "e0000000-0000-0000-0000-000000000054",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000090",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000003",
            "name": "Kadai Chicken",
            "description": "Bone-in chicken tossed with bell peppers and crushed coriander seeds in iron wok.",
            "price": 370,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000091",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000003",
            "name": "Dal Tadka Desi Ghee",
            "description": "Yellow lentils tempered with cumin, garlic, dry red chillies, and pure ghee.",
            "price": 230,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000055",
                "menuItemId": "d0000000-0000-0000-0000-000000000091",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000114",
                    "groupId": "e0000000-0000-0000-0000-000000000055",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000115",
                    "groupId": "e0000000-0000-0000-0000-000000000055",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000116",
                    "groupId": "e0000000-0000-0000-0000-000000000055",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000092",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000003",
            "name": "Roomali Roti (2 pcs)",
            "description": "Handkerchief-thin soft flatbread tossed and baked over convex iron kadai.",
            "price": 70,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0006-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000006",
        "name": "Desserts & Drinks",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000093",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000004",
            "name": "Double Ka Meetha",
            "description": "Traditional Hyderabadi ghee-fried bread soaked in rich saffron milk.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000094",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000004",
            "name": "Khubani Ka Meetha with Ice Cream",
            "description": "Stewed apricots paired with rich vanilla bean ice cream.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000095",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000004",
            "name": "Sweet Lassi Bawarchi Special",
            "description": "Thick, creamy churned sweet yogurt topped with malai.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000007",
    "name": "Cafe Bahar",
    "slug": "cafe-bahar",
    "tagline": "Legacy Hyderabadi Biryani & Chai destination since 1973",
    "description": "An iconic culinary pilgrimage in Hyderguda serving rich Irani chai, legendary chicken and mutton biryanis, and succulent tawa kebabs.",
    "coverImage": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 1890,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Old MLA Quarters Road, Hyderguda, Basheerbagh",
    "city": "Hyderabad",
    "latitude": 17.3995,
    "longitude": 78.4821,
    "cuisines": [
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
      },
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0007-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000007",
        "name": "Bahar Signature Biryanis",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000096",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000001",
            "name": "Cafe Bahar Special Mutton Biryani",
            "description": "Double portion mutton with extra eggs and spiced saffron basmati, dum cooked over charcoal.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000056",
                "menuItemId": "d0000000-0000-0000-0000-000000000096",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000117",
                    "groupId": "e0000000-0000-0000-0000-000000000056",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000118",
                    "groupId": "e0000000-0000-0000-0000-000000000056",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 360,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000057",
                "menuItemId": "d0000000-0000-0000-0000-000000000096",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000119",
                    "groupId": "e0000000-0000-0000-0000-000000000057",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000120",
                    "groupId": "e0000000-0000-0000-0000-000000000057",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000097",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000001",
            "name": "Classic Chicken Dum Biryani",
            "description": "Hyderguda’s favorite aromatic chicken biryani with mirchi salan and dahi raita.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000058",
                "menuItemId": "d0000000-0000-0000-0000-000000000097",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000121",
                    "groupId": "e0000000-0000-0000-0000-000000000058",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000122",
                    "groupId": "e0000000-0000-0000-0000-000000000058",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 285,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000059",
                "menuItemId": "d0000000-0000-0000-0000-000000000097",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000123",
                    "groupId": "e0000000-0000-0000-0000-000000000059",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000124",
                    "groupId": "e0000000-0000-0000-0000-000000000059",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000098",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000001",
            "name": "Fish Dum Biryani",
            "description": "Succulent boneless fish fillets marinated in deccani spices and steamed with aged rice.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000060",
                "menuItemId": "d0000000-0000-0000-0000-000000000098",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000125",
                    "groupId": "e0000000-0000-0000-0000-000000000060",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000126",
                    "groupId": "e0000000-0000-0000-0000-000000000060",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 330,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000061",
                "menuItemId": "d0000000-0000-0000-0000-000000000098",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000127",
                    "groupId": "e0000000-0000-0000-0000-000000000061",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000128",
                    "groupId": "e0000000-0000-0000-0000-000000000061",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000099",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000001",
            "name": "Bahar Veg Biryani Special",
            "description": "Assorted seasonal vegetables and green peas simmered with saffron basmati.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000062",
                "menuItemId": "d0000000-0000-0000-0000-000000000099",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000129",
                    "groupId": "e0000000-0000-0000-0000-000000000062",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000130",
                    "groupId": "e0000000-0000-0000-0000-000000000062",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 218,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000063",
                "menuItemId": "d0000000-0000-0000-0000-000000000099",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000131",
                    "groupId": "e0000000-0000-0000-0000-000000000063",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000132",
                    "groupId": "e0000000-0000-0000-0000-000000000063",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0007-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000007",
        "name": "Tandoor & Charcoal Starters",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000100",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000002",
            "name": "Mutton Boti Fry Bahar Style",
            "description": "Tender lamb chunks pan-tossed with curry leaves, crushed pepper, and green chilies.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000064",
                "menuItemId": "d0000000-0000-0000-0000-000000000100",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000133",
                    "groupId": "e0000000-0000-0000-0000-000000000064",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000134",
                    "groupId": "e0000000-0000-0000-0000-000000000064",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000065",
                "menuItemId": "d0000000-0000-0000-0000-000000000100",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000135",
                    "groupId": "e0000000-0000-0000-0000-000000000065",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000136",
                    "groupId": "e0000000-0000-0000-0000-000000000065",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000101",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000002",
            "name": "Murgh Malai Kebab (6 pcs)",
            "description": "Boneless chicken cubes soaked in cheese, heavy cream, and cardamom, flame-roasted.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000066",
                "menuItemId": "d0000000-0000-0000-0000-000000000101",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000137",
                    "groupId": "e0000000-0000-0000-0000-000000000066",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000138",
                    "groupId": "e0000000-0000-0000-0000-000000000066",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000067",
                "menuItemId": "d0000000-0000-0000-0000-000000000101",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000139",
                    "groupId": "e0000000-0000-0000-0000-000000000067",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000140",
                    "groupId": "e0000000-0000-0000-0000-000000000067",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000102",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000002",
            "name": "Tandoori Chicken (Full)",
            "description": "Whole chicken cut into four, marinated in red masala and roasted in clay pit.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000103",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000002",
            "name": "Paneer Malai Tikka",
            "description": "Creamy paneer cubes glazed with cashew-garlic paste and grilled over charcoal.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000068",
                "menuItemId": "d0000000-0000-0000-0000-000000000103",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000141",
                    "groupId": "e0000000-0000-0000-0000-000000000068",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000142",
                    "groupId": "e0000000-0000-0000-0000-000000000068",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000069",
                "menuItemId": "d0000000-0000-0000-0000-000000000103",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000143",
                    "groupId": "e0000000-0000-0000-0000-000000000069",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000144",
                    "groupId": "e0000000-0000-0000-0000-000000000069",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0007-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000007",
        "name": "Mughlai Curries & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000104",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000003",
            "name": "Mutton Tala Hua Gosht",
            "description": "Crisp fried mutton morsels with ginger-garlic, curry leaves, and spicy red masala.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000105",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000003",
            "name": "Butter Chicken Bahar",
            "description": "Tender chicken pieces simmered in sweet-tangy makhani gravy with butter.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000106",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000003",
            "name": "Tandoori Roti (2 pcs)",
            "description": "Crisp whole-wheat flatbread baked on the inner walls of tandoor.",
            "price": 60,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000107",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000003",
            "name": "Rumali Roti (2 pcs)",
            "description": "Soft, stretchy handkerchief bread folded and served warm.",
            "price": 70,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0007-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000007",
        "name": "Bahar Chai & Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000108",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000004",
            "name": "Special Irani Chai Flask (Serves 4)",
            "description": "Condensed, slow-simmered milky decoction tea served with crisp Osmania biscuits.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000109",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000004",
            "name": "Khubani Ka Meetha",
            "description": "Stewed Turkish apricots simmered with sugar and cardamom, topped with cream.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000110",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000004",
            "name": "Double Ka Meetha",
            "description": "Fried bread soaked in sweetened rabdi and cardamom.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000008",
    "name": "Hotel Shadab",
    "slug": "hotel-shadab",
    "tagline": "Heart of Old City royal gastronomy & breakfast Marag",
    "description": "Located in the historic shadow of Charminar, Hotel Shadab is famed for legendary morning Marag, Bheja Fry, tender Nihari, and authentic Zafrani Dum Biryani.",
    "coverImage": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 2450,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 55,
    "minimumOrderAmount": 350,
    "deliveryFee": 55,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "21-1-140/144, High Court Road, Madina Circle, Ghansi Bazaar",
    "city": "Hyderabad",
    "latitude": 17.3685,
    "longitude": 78.4732,
    "cuisines": [
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
      },
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0008-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000008",
        "name": "Old City Heritage Dum Biryani",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000111",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000001",
            "name": "Shadab Special Zafrani Mutton Biryani",
            "description": "Royal old-city recipe with generous tender mutton pieces, long basmati, pure saffron, and ghee.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000070",
                "menuItemId": "d0000000-0000-0000-0000-000000000111",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000145",
                    "groupId": "e0000000-0000-0000-0000-000000000070",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000146",
                    "groupId": "e0000000-0000-0000-0000-000000000070",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 368,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000071",
                "menuItemId": "d0000000-0000-0000-0000-000000000111",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000147",
                    "groupId": "e0000000-0000-0000-0000-000000000071",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000148",
                    "groupId": "e0000000-0000-0000-0000-000000000071",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000112",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000001",
            "name": "Shadab Chicken Dum Biryani",
            "description": "Charcoal steamed degh biryani served with spicy Mirchi Salan and fresh onion raita.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000072",
                "menuItemId": "d0000000-0000-0000-0000-000000000112",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000149",
                    "groupId": "e0000000-0000-0000-0000-000000000072",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000150",
                    "groupId": "e0000000-0000-0000-0000-000000000072",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 293,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000073",
                "menuItemId": "d0000000-0000-0000-0000-000000000112",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000151",
                    "groupId": "e0000000-0000-0000-0000-000000000073",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000152",
                    "groupId": "e0000000-0000-0000-0000-000000000073",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000113",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000001",
            "name": "Mutton Kheema Biryani",
            "description": "Aromatic basmati rice layered with spicy minced mutton and whole spices.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000074",
                "menuItemId": "d0000000-0000-0000-0000-000000000113",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000153",
                    "groupId": "e0000000-0000-0000-0000-000000000074",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000154",
                    "groupId": "e0000000-0000-0000-0000-000000000074",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 330,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000075",
                "menuItemId": "d0000000-0000-0000-0000-000000000113",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000155",
                    "groupId": "e0000000-0000-0000-0000-000000000075",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000156",
                    "groupId": "e0000000-0000-0000-0000-000000000075",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000114",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000001",
            "name": "Vegetable Dum Biryani",
            "description": "Fresh vegetables and mint cooked in sealed degh with aromatic spices.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000076",
                "menuItemId": "d0000000-0000-0000-0000-000000000114",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000157",
                    "groupId": "e0000000-0000-0000-0000-000000000076",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000158",
                    "groupId": "e0000000-0000-0000-0000-000000000076",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 233,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000077",
                "menuItemId": "d0000000-0000-0000-0000-000000000114",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000159",
                    "groupId": "e0000000-0000-0000-0000-000000000077",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000160",
                    "groupId": "e0000000-0000-0000-0000-000000000077",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0008-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000008",
        "name": "Heritage Broths & Breakfast Specials",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000115",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000002",
            "name": "Authentic Mutton Marag & Sheermal",
            "description": "Rich, peppery mutton soup slow-simmered with cashews, pistachios, and bone-in mutton pieces.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000116",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000002",
            "name": "Bheja Fry Old City Style",
            "description": "Fresh goat brain sauteed with chopped onions, green chilies, and black pepper on flat tawa.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000078",
                "menuItemId": "d0000000-0000-0000-0000-000000000116",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000161",
                    "groupId": "e0000000-0000-0000-0000-000000000078",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000162",
                    "groupId": "e0000000-0000-0000-0000-000000000078",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000079",
                "menuItemId": "d0000000-0000-0000-0000-000000000116",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000163",
                    "groupId": "e0000000-0000-0000-0000-000000000079",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000164",
                    "groupId": "e0000000-0000-0000-0000-000000000079",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000117",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000002",
            "name": "Paya Nahari with Kulcha",
            "description": "Overnight simmered trotters in velvety spiced bone broth with ginger and fresh lime.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000118",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000002",
            "name": "Gurda Kaleji Fry",
            "description": "Kidney and liver pieces tossed with curry leaves, cracked coriander seeds, and chili.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000080",
                "menuItemId": "d0000000-0000-0000-0000-000000000118",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000165",
                    "groupId": "e0000000-0000-0000-0000-000000000080",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000166",
                    "groupId": "e0000000-0000-0000-0000-000000000080",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000081",
                "menuItemId": "d0000000-0000-0000-0000-000000000118",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000167",
                    "groupId": "e0000000-0000-0000-0000-000000000081",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000168",
                    "groupId": "e0000000-0000-0000-0000-000000000081",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0008-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000008",
        "name": "Charcoal Kebabs & Curries",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000119",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000003",
            "name": "Shikampur Kebab (4 pcs)",
            "description": "Mutton mince patties stuffed with spiced hung curd, mint, and green chilies.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000082",
                "menuItemId": "d0000000-0000-0000-0000-000000000119",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000169",
                    "groupId": "e0000000-0000-0000-0000-000000000082",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000170",
                    "groupId": "e0000000-0000-0000-0000-000000000082",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000083",
                "menuItemId": "d0000000-0000-0000-0000-000000000119",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000171",
                    "groupId": "e0000000-0000-0000-0000-000000000083",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000172",
                    "groupId": "e0000000-0000-0000-0000-000000000083",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000120",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000003",
            "name": "Mutton Rogan Josh Shadab",
            "description": "Aromatic mutton curry cooked with brown onion paste, yogurt, and whole spices.",
            "price": 450,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000121",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000003",
            "name": "Tandoori Murgh (Full)",
            "description": "Charcoal-grilled whole chicken marinated in spiced red masala.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000122",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000003",
            "name": "Tandoori Naan (2 pcs)",
            "description": "Crisp and fluffy tandoor bread brushed with butter.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0008-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000008",
        "name": "Deccani Sweets & Chai",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000123",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000004",
            "name": "Shadab Special Shahi Tukda",
            "description": "Fried bread triangles steeped in thickened saffron rabdi with almonds and pistachios.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000124",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000004",
            "name": "Qubani Ka Meetha with Malai",
            "description": "Stewed apricots served with generous dollop of fresh clotted cream.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000125",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000004",
            "name": "Irani Zafrani Chai Flask",
            "description": "Rich, creamy dum-brewed tea infused with saffron strands.",
            "price": 170,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000009",
    "name": "Pista House",
    "slug": "pista-house",
    "tagline": "World-famous GI-tagged Haleem & Hyderabadi specialties",
    "description": "Pioneers of GI-certified Hyderabadi Haleem and royal Zafrani Biryanis, blending pure mutton, pounded wheat, and aromatic spices with authentic bakery sweets.",
    "coverImage": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 1780,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Opposite Cyber Gateway, HITEC City Main Road, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4478,
    "longitude": 78.3792,
    "cuisines": [
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
      },
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0009-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000009",
        "name": "GI-Tagged World Famous Haleem",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000126",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000001",
            "name": "Pista House Royal Mutton Haleem",
            "description": "Slow-cooked for 12 hours with tender mutton, broken wheat, lentils, ghee, cashews, and golden fried onions. Served with lemon wedges.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000127",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000001",
            "name": "Special Chicken Haleem",
            "description": "Rich and velvety chicken stew beaten to a paste with spices and pure Desi ghee.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000128",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000001",
            "name": "Family Pack Mutton Haleem (1 kg)",
            "description": "Large sharing container of signature mutton haleem topped with roasted almonds, cashews, and fried onions.",
            "price": 950,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000129",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000001",
            "name": "Vegetarian Dry Fruit Haleem",
            "description": "Wheat, lentils, seasonal vegetables, soya, and assorted roasted dry fruits beaten with ghee.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0009-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000009",
        "name": "Zafrani Biryanis",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000130",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000002",
            "name": "Zafrani Mutton Dum Biryani",
            "description": "Basmati rice infused with saffron strands and tender baby goat pieces in traditional dum.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000084",
                "menuItemId": "d0000000-0000-0000-0000-000000000130",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000173",
                    "groupId": "e0000000-0000-0000-0000-000000000084",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000174",
                    "groupId": "e0000000-0000-0000-0000-000000000084",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 345,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000085",
                "menuItemId": "d0000000-0000-0000-0000-000000000130",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000175",
                    "groupId": "e0000000-0000-0000-0000-000000000085",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000176",
                    "groupId": "e0000000-0000-0000-0000-000000000085",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000131",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000002",
            "name": "Zafrani Chicken Dum Biryani",
            "description": "Classic chicken biryani cooked with green chilies, mint, and saffron.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000086",
                "menuItemId": "d0000000-0000-0000-0000-000000000131",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000177",
                    "groupId": "e0000000-0000-0000-0000-000000000086",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000178",
                    "groupId": "e0000000-0000-0000-0000-000000000086",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 285,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000087",
                "menuItemId": "d0000000-0000-0000-0000-000000000131",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000179",
                    "groupId": "e0000000-0000-0000-0000-000000000087",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000180",
                    "groupId": "e0000000-0000-0000-0000-000000000087",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000132",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000002",
            "name": "Special Mutton Kheema Biryani",
            "description": "Minced mutton cooked with biryani spices and basmati rice.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000088",
                "menuItemId": "d0000000-0000-0000-0000-000000000132",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000181",
                    "groupId": "e0000000-0000-0000-0000-000000000088",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000182",
                    "groupId": "e0000000-0000-0000-0000-000000000088",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 315,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000089",
                "menuItemId": "d0000000-0000-0000-0000-000000000132",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000183",
                    "groupId": "e0000000-0000-0000-0000-000000000089",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000184",
                    "groupId": "e0000000-0000-0000-0000-000000000089",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000133",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000002",
            "name": "Paneer Dum Biryani Handi",
            "description": "Marinated cottage cheese and fragrant rice dum-cooked with fried onions.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000090",
                "menuItemId": "d0000000-0000-0000-0000-000000000133",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000185",
                    "groupId": "e0000000-0000-0000-0000-000000000090",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000186",
                    "groupId": "e0000000-0000-0000-0000-000000000090",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 240,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000091",
                "menuItemId": "d0000000-0000-0000-0000-000000000133",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000187",
                    "groupId": "e0000000-0000-0000-0000-000000000091",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000188",
                    "groupId": "e0000000-0000-0000-0000-000000000091",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0009-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000009",
        "name": "Kebabs & Curries",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000134",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000003",
            "name": "Mutton Seekh Kebab",
            "description": "Spiced minced lamb rolled onto skewers and char-grilled.",
            "price": 430,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000092",
                "menuItemId": "d0000000-0000-0000-0000-000000000134",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000189",
                    "groupId": "e0000000-0000-0000-0000-000000000092",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000190",
                    "groupId": "e0000000-0000-0000-0000-000000000092",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000093",
                "menuItemId": "d0000000-0000-0000-0000-000000000134",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000191",
                    "groupId": "e0000000-0000-0000-0000-000000000093",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000192",
                    "groupId": "e0000000-0000-0000-0000-000000000093",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000135",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000003",
            "name": "Murgh Tikka (6 pcs)",
            "description": "Tender chicken cubes marinated in tandoori red masala.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000094",
                "menuItemId": "d0000000-0000-0000-0000-000000000135",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000193",
                    "groupId": "e0000000-0000-0000-0000-000000000094",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000194",
                    "groupId": "e0000000-0000-0000-0000-000000000094",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000095",
                "menuItemId": "d0000000-0000-0000-0000-000000000135",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000195",
                    "groupId": "e0000000-0000-0000-0000-000000000095",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000196",
                    "groupId": "e0000000-0000-0000-0000-000000000095",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000136",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000003",
            "name": "Mutton Rogan Josh",
            "description": "Slow-simmered rich mutton gravy with Kashmiri spices.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000137",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000003",
            "name": "Butter Naan",
            "description": "Clay oven baked flatbread brushed with butter.",
            "price": 60,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0009-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000009",
        "name": "Bakery Confections & Sweets",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000138",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000004",
            "name": "Apricot Delight Cake Slice",
            "description": "Pista House’s famed sponge cake layered with rich apricot compote and whipped cream.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000139",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000004",
            "name": "Assorted Baklava Box (250g)",
            "description": "Flaky filo pastry layered with chopped pistachios, walnuts, and honey syrup.",
            "price": 450,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000140",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000004",
            "name": "Osmania Biscuits Tin (400g)",
            "description": "Traditional sweet and mildly salty buttery biscuits, best paired with Irani chai.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000141",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000004",
            "name": "Khubani Ka Meetha",
            "description": "Heritage stewed apricot dessert topped with clotted cream.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000010",
    "name": "Shah Ghouse Hotel & Restaurant",
    "slug": "shah-ghouse",
    "tagline": "Authentic late-night Hyderabadi Haleem & Dum Biryani",
    "description": "A powerhouse of Hyderabadi culinary tradition, revered for slow-cooked mutton biryanis, night-simmered paya, and authentic tandoor skewers.",
    "coverImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 1980,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 300,
    "deliveryFee": 40,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Opposite Bio-Diversity Park, Raidurgam, Gachibowli",
    "city": "Hyderabad",
    "latitude": 17.4371,
    "longitude": 78.3685,
    "cuisines": [
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
      },
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0010-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000010",
        "name": "Shah Ghouse Dum Biryanis",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000142",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000001",
            "name": "Shah Ghouse Special Mutton Biryani",
            "description": "Famous spicy dum mutton biryani with extra pieces, golden fried shallots, and rich salan.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000096",
                "menuItemId": "d0000000-0000-0000-0000-000000000142",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000197",
                    "groupId": "e0000000-0000-0000-0000-000000000096",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000198",
                    "groupId": "e0000000-0000-0000-0000-000000000096",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 360,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000097",
                "menuItemId": "d0000000-0000-0000-0000-000000000142",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000199",
                    "groupId": "e0000000-0000-0000-0000-000000000097",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000200",
                    "groupId": "e0000000-0000-0000-0000-000000000097",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000143",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000001",
            "name": "Special Chicken Dum Biryani",
            "description": "Fragrant saffron rice and juicy chicken cooked on low flame with traditional spices.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000098",
                "menuItemId": "d0000000-0000-0000-0000-000000000143",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000201",
                    "groupId": "e0000000-0000-0000-0000-000000000098",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000202",
                    "groupId": "e0000000-0000-0000-0000-000000000098",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 293,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000099",
                "menuItemId": "d0000000-0000-0000-0000-000000000143",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000203",
                    "groupId": "e0000000-0000-0000-0000-000000000099",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000204",
                    "groupId": "e0000000-0000-0000-0000-000000000099",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000144",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000001",
            "name": "Mutton Fry Piece Biryani",
            "description": "Spicy pan-roasted boneless mutton pieces served over steaming biryani rice.",
            "price": 510,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000100",
                "menuItemId": "d0000000-0000-0000-0000-000000000144",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000205",
                    "groupId": "e0000000-0000-0000-0000-000000000100",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000206",
                    "groupId": "e0000000-0000-0000-0000-000000000100",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 383,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000101",
                "menuItemId": "d0000000-0000-0000-0000-000000000144",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000207",
                    "groupId": "e0000000-0000-0000-0000-000000000101",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000208",
                    "groupId": "e0000000-0000-0000-0000-000000000101",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000145",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000001",
            "name": "Veg Dum Biryani",
            "description": "Aromatic basmati cooked with mixed vegetables, mint, and whole spices.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000102",
                "menuItemId": "d0000000-0000-0000-0000-000000000145",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000209",
                    "groupId": "e0000000-0000-0000-0000-000000000102",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000210",
                    "groupId": "e0000000-0000-0000-0000-000000000102",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 218,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000103",
                "menuItemId": "d0000000-0000-0000-0000-000000000145",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000211",
                    "groupId": "e0000000-0000-0000-0000-000000000103",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000212",
                    "groupId": "e0000000-0000-0000-0000-000000000103",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0010-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000010",
        "name": "Haleem & Mughlai Starters",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000146",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000002",
            "name": "Shah Ghouse Mutton Haleem",
            "description": "Signature pounded wheat and mutton stew garnished with fried onions, coriander, and ghee.",
            "price": 330,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000147",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000002",
            "name": "Tangdi Kebab (3 pcs)",
            "description": "Juicy chicken drumsticks marinated in spiced curd and cooked in charcoal clay oven.",
            "price": 350,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000104",
                "menuItemId": "d0000000-0000-0000-0000-000000000147",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000213",
                    "groupId": "e0000000-0000-0000-0000-000000000104",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000214",
                    "groupId": "e0000000-0000-0000-0000-000000000104",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000105",
                "menuItemId": "d0000000-0000-0000-0000-000000000147",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000215",
                    "groupId": "e0000000-0000-0000-0000-000000000105",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000216",
                    "groupId": "e0000000-0000-0000-0000-000000000105",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000148",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000002",
            "name": "Tala Hua Gosht",
            "description": "Deep fried tender mutton morsels tossed with green chillies and curry leaves.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000149",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000002",
            "name": "Chicken Reshmi Kebab (6 pcs)",
            "description": "Cream and cashew marinated boneless chicken skewers roasted over coals.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000106",
                "menuItemId": "d0000000-0000-0000-0000-000000000149",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000217",
                    "groupId": "e0000000-0000-0000-0000-000000000106",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000218",
                    "groupId": "e0000000-0000-0000-0000-000000000106",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000107",
                "menuItemId": "d0000000-0000-0000-0000-000000000149",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000219",
                    "groupId": "e0000000-0000-0000-0000-000000000107",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000220",
                    "groupId": "e0000000-0000-0000-0000-000000000107",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0010-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000010",
        "name": "Curries & Flatbreads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000150",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000003",
            "name": "Mutton Korma",
            "description": "Traditional brown onion and cashew gravy with tender cuts of mutton.",
            "price": 430,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000108",
                "menuItemId": "d0000000-0000-0000-0000-000000000150",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000221",
                    "groupId": "e0000000-0000-0000-0000-000000000108",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000222",
                    "groupId": "e0000000-0000-0000-0000-000000000108",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000223",
                    "groupId": "e0000000-0000-0000-0000-000000000108",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000151",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000003",
            "name": "Murgh Makhani Butter Chicken",
            "description": "Boneless tandoori chicken simmered in rich creamy tomato butter sauce.",
            "price": 370,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000152",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000003",
            "name": "Roomali Roti (2 pcs)",
            "description": "Thin and soft griddle flatbread.",
            "price": 70,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000153",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000003",
            "name": "Butter Naan (2 pcs)",
            "description": "Tandoor leavened flatbread brushed with butter.",
            "price": 100,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0010-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000010",
        "name": "Desserts & Chai",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000154",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000004",
            "name": "Special Double Ka Meetha",
            "description": "Golden fried bread in saffron milk rabdi with dry fruits.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000155",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000004",
            "name": "Qubani Ka Meetha with Cream",
            "description": "Stewed apricots topped with fresh cream.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000156",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000004",
            "name": "Irani Dum Chai Flask",
            "description": "Freshly brewed strong Irani chai.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000011",
    "name": "Rayalaseema Ruchulu",
    "slug": "rayalaseema-ruchulu",
    "tagline": "Fiery Telugu & Rayalaseema regional heritage cuisine",
    "description": "Celebrated for legendary rustic Telugu dining: Ragi Sangati with spicy Natu Kodi Pulusu, Gongura Mamsam, spicy Rayalaseema biryani, and Pottelu Mutton.",
    "coverImage": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 1120,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 400,
    "deliveryFee": 55,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 481, Road No. 36, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4312,
    "longitude": 78.4068,
    "cuisines": [
      {
        "id": "c0000006-0000-0000-0000-000000000006",
        "name": "Andhra & Rayalaseema",
        "slug": "andhra-rayalaseema",
        "icon": "Flame"
      },
      {
        "id": "c0000005-0000-0000-0000-000000000005",
        "name": "Telangana Heritage",
        "slug": "telangana-heritage",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0011-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000011",
        "name": "Rayalaseema Signature Classics",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000157",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000001",
            "name": "Ragi Sangati with Natu Kodi Pulusu",
            "description": "Wholesome finger-millet mudde balls served with country chicken curry slow-cooked with Byadgi chillies and poppy seeds.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000109",
                "menuItemId": "d0000000-0000-0000-0000-000000000157",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000224",
                    "groupId": "e0000000-0000-0000-0000-000000000109",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000225",
                    "groupId": "e0000000-0000-0000-0000-000000000109",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000226",
                    "groupId": "e0000000-0000-0000-0000-000000000109",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000158",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000001",
            "name": "Gongura Mamsam",
            "description": "Tender goat pieces braised in tangy sorrel leaves (gongura) paste with green chillies and roasted spices.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000159",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000001",
            "name": "Ulavacharu Kodi Pulao",
            "description": "Aromatic horse-gram soup reduction blended with spiced chicken and fragrant basmati rice.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000110",
                "menuItemId": "d0000000-0000-0000-0000-000000000159",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000227",
                    "groupId": "e0000000-0000-0000-0000-000000000110",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000228",
                    "groupId": "e0000000-0000-0000-0000-000000000110",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 360,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000111",
                "menuItemId": "d0000000-0000-0000-0000-000000000159",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000229",
                    "groupId": "e0000000-0000-0000-0000-000000000111",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000230",
                    "groupId": "e0000000-0000-0000-0000-000000000111",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000160",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000001",
            "name": "Gutti Vankaya Koora",
            "description": "Small eggplants stuffed with roasted peanuts, sesame, dried coconut, and tamarind gravy.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0011-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000011",
        "name": "Telugu Starters & Vepudulu",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000161",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000002",
            "name": "Royyala Vepudu (Prawn Fry)",
            "description": "Succulent river prawns stir-fried with caramelized onions, curry leaves, and spicy red pepper powder.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000112",
                "menuItemId": "d0000000-0000-0000-0000-000000000161",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000231",
                    "groupId": "e0000000-0000-0000-0000-000000000112",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000232",
                    "groupId": "e0000000-0000-0000-0000-000000000112",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000113",
                "menuItemId": "d0000000-0000-0000-0000-000000000161",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000233",
                    "groupId": "e0000000-0000-0000-0000-000000000113",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000234",
                    "groupId": "e0000000-0000-0000-0000-000000000113",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000162",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000002",
            "name": "Mamsam Vepudu (Mutton Roast)",
            "description": "Tender baby goat cubes pan-roasted in iron kadai with freshly pounded spices.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000114",
                "menuItemId": "d0000000-0000-0000-0000-000000000162",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000235",
                    "groupId": "e0000000-0000-0000-0000-000000000114",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000236",
                    "groupId": "e0000000-0000-0000-0000-000000000114",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000115",
                "menuItemId": "d0000000-0000-0000-0000-000000000162",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000237",
                    "groupId": "e0000000-0000-0000-0000-000000000115",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000238",
                    "groupId": "e0000000-0000-0000-0000-000000000115",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000163",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000002",
            "name": "Miriyala Kodi Vepudu (Pepper Chicken)",
            "description": "Boneless chicken tossed with pungent black peppercorn paste and curry leaves.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000116",
                "menuItemId": "d0000000-0000-0000-0000-000000000163",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000239",
                    "groupId": "e0000000-0000-0000-0000-000000000116",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000240",
                    "groupId": "e0000000-0000-0000-0000-000000000116",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000117",
                "menuItemId": "d0000000-0000-0000-0000-000000000163",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000241",
                    "groupId": "e0000000-0000-0000-0000-000000000117",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000242",
                    "groupId": "e0000000-0000-0000-0000-000000000117",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000164",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000002",
            "name": "Kaju Paneer Pakoda",
            "description": "Cottage cheese and whole cashews coated in spiced gram flour batter and fried golden.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0011-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000011",
        "name": "Rice, Pulaos & Roti",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000165",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000003",
            "name": "Rayalaseema Mutton Dum Biryani",
            "description": "Spicier Telugu version of dum mutton biryani with pungent green chili paste and mint.",
            "price": 510,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000118",
                "menuItemId": "d0000000-0000-0000-0000-000000000165",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000243",
                    "groupId": "e0000000-0000-0000-0000-000000000118",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000244",
                    "groupId": "e0000000-0000-0000-0000-000000000118",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 383,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000119",
                "menuItemId": "d0000000-0000-0000-0000-000000000165",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000245",
                    "groupId": "e0000000-0000-0000-0000-000000000119",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000246",
                    "groupId": "e0000000-0000-0000-0000-000000000119",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000166",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000003",
            "name": "Bagara Annam with Dalcha",
            "description": "Flavored tempered rice served with lentil-mutton broth and mint.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000120",
                "menuItemId": "d0000000-0000-0000-0000-000000000166",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000247",
                    "groupId": "e0000000-0000-0000-0000-000000000120",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000248",
                    "groupId": "e0000000-0000-0000-0000-000000000120",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000249",
                    "groupId": "e0000000-0000-0000-0000-000000000120",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000167",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000003",
            "name": "Jonnalu Roti (2 pcs)",
            "description": "Traditional gluten-free sorghum (jowar) flatbread hand-patted and baked on clay tawa.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000168",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000003",
            "name": "Perugu Annam (Curd Rice)",
            "description": "Creamy cooled rice tempered with mustard seeds, ginger, curry leaves, and pomegranate.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0011-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000011",
        "name": "Desserts & Beverages",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000169",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000004",
            "name": "Pootharekulu with Dry Fruits (2 pcs)",
            "description": "Delicate Andhra paper sweet made with rice starch layers, pure ghee, and jaggery powder.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000170",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000004",
            "name": "Bellam Bobbatlu with Ghee (2 pcs)",
            "description": "Sweet flatbread stuffed with chana dal, jaggery, and cardamom, served with molten ghee.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000171",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000004",
            "name": "Nannari Sharbat",
            "description": "Traditional cooling herbal root sherbet with basil seeds and fresh lime juice.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000012",
    "name": "Chutneys",
    "slug": "chutneys",
    "tagline": "Iconic all-day South Indian gourmet tiffins & signature chutneys",
    "description": "Hyderabad’s premier South Indian culinary institution, famous for Babai Idli with white butter, MLA Pesarattu, and a legendary rainbow of freshly ground chutneys.",
    "coverImage": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 2300,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 20,
    "deliveryTimeEstimateMax": 35,
    "minimumOrderAmount": 250,
    "deliveryFee": 35,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 3-6-271, Road No. 3, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4221,
    "longitude": 78.4412,
    "cuisines": [
      {
        "id": "c0000007-0000-0000-0000-000000000007",
        "name": "South Indian Tiffins",
        "slug": "south-indian-tiffins",
        "icon": "Coffee"
      },
      {
        "id": "c0000013-0000-0000-0000-000000000013",
        "name": "Pure Vegetarian Gourmet",
        "slug": "pure-vegetarian",
        "icon": "Leaf"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0012-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000012",
        "name": "Iconic Breakfast Tiffins",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000172",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000001",
            "name": "Babai Idli with White Butter (3 pcs)",
            "description": "Ultra-soft steamed rice cakes topped with melting homemade white butter, karampodi, and 6 assorted chutneys.",
            "price": 230,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000121",
                "menuItemId": "d0000000-0000-0000-0000-000000000172",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000250",
                    "groupId": "e0000000-0000-0000-0000-000000000121",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000251",
                    "groupId": "e0000000-0000-0000-0000-000000000121",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000173",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000001",
            "name": "Guntur Idli Karampodi Spiced",
            "description": "Mini button idlis tossed in fiery Guntur chili powder, sesame oil, and fresh curry leaves.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000122",
                "menuItemId": "d0000000-0000-0000-0000-000000000173",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000252",
                    "groupId": "e0000000-0000-0000-0000-000000000122",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000253",
                    "groupId": "e0000000-0000-0000-0000-000000000122",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000174",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000001",
            "name": "Meda Vada Sambar (2 pcs)",
            "description": "Crisp golden lentil fritters served with hot piping vegetable sambar and coconut chutney.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000175",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000001",
            "name": "Poori with Potato Sagu (3 pcs)",
            "description": "Fluffy golden fried bread served with spiced potato sagu and ginger chutney.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0012-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000012",
        "name": "Gourmet Dosa Collection",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000176",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000002",
            "name": "MLA Pesarattu with Upma Filling",
            "description": "Whole green gram crepe cooked crisp, stuffed with spicy semolina upma, chopped onions, and ginger.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000177",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000002",
            "name": "Corn and Cheese Dosa",
            "description": "Crispy crepe filled with sweet corn kernels, grated cheddar, and fresh green chilies.",
            "price": 270,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000123",
                "menuItemId": "d0000000-0000-0000-0000-000000000177",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000254",
                    "groupId": "e0000000-0000-0000-0000-000000000123",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000255",
                    "groupId": "e0000000-0000-0000-0000-000000000123",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000178",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000002",
            "name": "Ghee Karam Dosa",
            "description": "Golden roasted thin crepe smeared with spicy red chili garlic paste and dollops of pure ghee.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000124",
                "menuItemId": "d0000000-0000-0000-0000-000000000178",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000256",
                    "groupId": "e0000000-0000-0000-0000-000000000124",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000257",
                    "groupId": "e0000000-0000-0000-0000-000000000124",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000179",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000002",
            "name": "Butter Masala Dosa",
            "description": "Classic crisp dosa stuffed with seasoned potato mash and dollop of dairy butter.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000125",
                "menuItemId": "d0000000-0000-0000-0000-000000000179",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000258",
                    "groupId": "e0000000-0000-0000-0000-000000000125",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000259",
                    "groupId": "e0000000-0000-0000-0000-000000000125",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0012-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000012",
        "name": "South Indian Rice Specialties",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000180",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000003",
            "name": "South Indian Special Thali Feast",
            "description": "Includes poori, rice, sambar, rasam, kootu, poriyal, curd, appalam, and sweet payasam.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000181",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000003",
            "name": "Bisi Bele Bath with Boondi",
            "description": "Karnataka-style spiced rice and lentil porridge cooked with vegetables and served with crunchy boondi.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000182",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000003",
            "name": "Lemon Rice with Fried Peanuts",
            "description": "Tangy lemon-tempered rice with mustard seeds, curry leaves, and crunchy peanuts.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000183",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000003",
            "name": "Tempered Curd Rice",
            "description": "Soft rice whipped with fresh curd, pomegranate pearls, and roasted mustard tempering.",
            "price": 170,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0012-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000012",
        "name": "Beverages & Sweets",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000184",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000004",
            "name": "Degree Filter Coffee",
            "description": "Traditional South Indian chicory and coffee blend frothed with hot milk in dabarah set.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000126",
                "menuItemId": "d0000000-0000-0000-0000-000000000184",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000260",
                    "groupId": "e0000000-0000-0000-0000-000000000126",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000261",
                    "groupId": "e0000000-0000-0000-0000-000000000126",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000262",
                    "groupId": "e0000000-0000-0000-0000-000000000126",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000185",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000004",
            "name": "Rava Kesari Bath with Cashews",
            "description": "Sweet semolina pudding enriched with pure ghee, saffron, and roasted cashews.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000186",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000004",
            "name": "Spiced Neer Moru (Buttermilk)",
            "description": "Chilled salted churned buttermilk infused with curry leaves, ginger, and asafoetida.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000013",
    "name": "Tatva",
    "slug": "tatva",
    "tagline": "Award-winning luxury pure-vegetarian fine dining",
    "description": "An elevated haute gastronomy experience celebrating vegetarian culinary art. Signature truffle infused khichdi, melt-in-mouth lotus stem galoutis, and progressive Indian-continental creations.",
    "coverImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=200&q=80",
    "rating": 4.9,
    "ratingCount": 890,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 600,
    "deliveryFee": 75,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 1215/A, Road No. 36, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4338,
    "longitude": 78.4055,
    "cuisines": [
      {
        "id": "c0000013-0000-0000-0000-000000000013",
        "name": "Pure Vegetarian Gourmet",
        "slug": "pure-vegetarian",
        "icon": "Leaf"
      },
      {
        "id": "c0000011-0000-0000-0000-000000000011",
        "name": "Modern Indian Bistro",
        "slug": "modern-indian",
        "icon": "Sparkles"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0013-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000013",
        "name": "Gourmet Vegetarian Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000187",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000001",
            "name": "Kamalkakdi Ki Galouti (4 pcs)",
            "description": "Lotus stem smoked patties spiced with potli masala, served over miniature saffron sheermal crisps.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000188",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000001",
            "name": "Smoked Jalapeno Paneer Tikka",
            "description": "Malai paneer cubes stuffed with pickled jalapenos, glazed with hung curd and smoked in charcoal tandoor.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000127",
                "menuItemId": "d0000000-0000-0000-0000-000000000188",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000263",
                    "groupId": "e0000000-0000-0000-0000-000000000127",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000264",
                    "groupId": "e0000000-0000-0000-0000-000000000127",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000128",
                "menuItemId": "d0000000-0000-0000-0000-000000000188",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000265",
                    "groupId": "e0000000-0000-0000-0000-000000000128",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000266",
                    "groupId": "e0000000-0000-0000-0000-000000000128",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000189",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000001",
            "name": "Edamame Truffle Dim Sum (4 pcs)",
            "description": "Crystal skin dumplings packed with young soybeans, water chestnuts, and black truffle drizzle.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000190",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000001",
            "name": "Crispy Waterchestnut Pepper Salt",
            "description": "Wok-tossed crunchy water chestnuts with scallions, crushed black pepper, and sea salt.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0013-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000013",
        "name": "Fine Dining Mains",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000191",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000002",
            "name": "Tatva Signature Truffle Khichdi",
            "description": "Aged basmati and yellow lentils cooked risotto-style with white truffle oil, shaved parmesan, and garlic crisps.",
            "price": 690,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000192",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000002",
            "name": "Paneer Lababdar Khaas",
            "description": "Cottage cheese steeped in rich cashew-tomato gravy enriched with grated paneer and kasuri methi.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000193",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000002",
            "name": "Subz Dum Handi Awadhi",
            "description": "Seasonal florets, baby potatoes, carrots, and baby corn slow-cooked in yellow chili almond gravy.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000194",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000002",
            "name": "Dal Tatva Slow Simmered",
            "description": "Black lentils braised for 18 hours on charcoal embers with sweet cream and churned butter.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000129",
                "menuItemId": "d0000000-0000-0000-0000-000000000194",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000267",
                    "groupId": "e0000000-0000-0000-0000-000000000129",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000268",
                    "groupId": "e0000000-0000-0000-0000-000000000129",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000269",
                    "groupId": "e0000000-0000-0000-0000-000000000129",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0013-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000013",
        "name": "Artisanal Breads & Rice",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000195",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000003",
            "name": "Blue Cheese & Olive Naan",
            "description": "Clay oven flatbread stuffed with mild blue cheese crumble and kalamata olives.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000196",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000003",
            "name": "Chur Chur Butter Naan",
            "description": "Crisp crushed flaky naan loaded with melted butter and chaat spices.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000197",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000003",
            "name": "Subz Chilman Biryani Pot",
            "description": "Fragrant basmati cooked under puff pastry seal with vegetables, mint, and saffron.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000130",
                "menuItemId": "d0000000-0000-0000-0000-000000000197",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000270",
                    "groupId": "e0000000-0000-0000-0000-000000000130",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000271",
                    "groupId": "e0000000-0000-0000-0000-000000000130",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 405,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000131",
                "menuItemId": "d0000000-0000-0000-0000-000000000197",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000272",
                    "groupId": "e0000000-0000-0000-0000-000000000131",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000273",
                    "groupId": "e0000000-0000-0000-0000-000000000131",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000198",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000003",
            "name": "Zafrani Jeera Pulao",
            "description": "Long basmati rice tempered with royal cumin seeds and clarified butter.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000132",
                "menuItemId": "d0000000-0000-0000-0000-000000000198",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000274",
                    "groupId": "e0000000-0000-0000-0000-000000000132",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000275",
                    "groupId": "e0000000-0000-0000-0000-000000000132",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 255,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000133",
                "menuItemId": "d0000000-0000-0000-0000-000000000198",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000276",
                    "groupId": "e0000000-0000-0000-0000-000000000133",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000277",
                    "groupId": "e0000000-0000-0000-0000-000000000133",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0013-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000013",
        "name": "Desserts & Mocktails",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000199",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000004",
            "name": "Deconstructed Baked Rasgulla",
            "description": "Warm baked rasgulla in pistachio rabdi caramel crust with edible flowers.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000200",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000004",
            "name": "Belgian Chocolate Hazelnut Sphere",
            "description": "Warm chocolate sphere melted with pouring caramel sauce over hazelnut mousse.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000201",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000004",
            "name": "Rose & Cardamom Smoked Cooler",
            "description": "Damask rose shrub with crushed mint, pink salt, and chilled soda.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000014",
    "name": "Farzi Cafe",
    "slug": "farzi-cafe",
    "tagline": "Modern Indian bistro & molecular illusion gastronomy",
    "description": "Playful, modern progressive Indian dining in Jubilee Hills. Creating culinary illusions with regional Indian favorites: Dal Chawal Arancini, Butter Chicken Baos, and Rasmalai Tres Leches.",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 940,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 450,
    "deliveryFee": 60,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 1200, Road No. 59, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4354,
    "longitude": 78.4012,
    "cuisines": [
      {
        "id": "c0000011-0000-0000-0000-000000000011",
        "name": "Modern Indian Bistro",
        "slug": "modern-indian",
        "icon": "Sparkles"
      },
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0014-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000014",
        "name": "Small Plates & Farzified Tapas",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000202",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000001",
            "name": "Dal Chawal Arancini (4 pcs)",
            "description": "Crisp rolled yellow lentil risotto balls topped with tomato pachadi, papad roll, and mint foam.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000134",
                "menuItemId": "d0000000-0000-0000-0000-000000000202",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000278",
                    "groupId": "e0000000-0000-0000-0000-000000000134",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000279",
                    "groupId": "e0000000-0000-0000-0000-000000000134",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000280",
                    "groupId": "e0000000-0000-0000-0000-000000000134",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000203",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000001",
            "name": "Tempura Fried Prawns with Nimboo Mirchi Aioli",
            "description": "Crispy Japanese-style battered prawns tossed in spicy green chili-lime emulsion.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000204",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000001",
            "name": "Butter Chicken Bao (3 pcs)",
            "description": "Fluffy steamed lotus flour buns stuffed with shredded tandoori chicken, makhani glaze, and pickled onions.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000205",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000001",
            "name": "Chilli Paneer Pockets with Szechuan Mayo",
            "description": "Crispy wonton wrappers filled with spicy Indo-Chinese cottage cheese filling.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0014-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000014",
        "name": "Modern Indian Large Plates",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000206",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000002",
            "name": "Braised Mutton Shank Rogan Josh",
            "description": "Overnight braised tender shank served with spiced bone marrow jus and chili oil.",
            "price": 780,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000207",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000002",
            "name": "Smoked Butter Chicken San Marzano",
            "description": "Charred chicken breast in smoked tomato-cashew reduction finished with micro greens.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000208",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000002",
            "name": "Paneer Makhani with Sourdough Naan",
            "description": "Cottage cheese steaks seared and served over silky makhani gravy with freshly baked mini sourdough naan.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000209",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000002",
            "name": "Farzi Dal Makhani Cream Bowl",
            "description": "Classic black lentils simmered with churned butter and cream for 16 hours.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000135",
                "menuItemId": "d0000000-0000-0000-0000-000000000209",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000281",
                    "groupId": "e0000000-0000-0000-0000-000000000135",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000282",
                    "groupId": "e0000000-0000-0000-0000-000000000135",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000283",
                    "groupId": "e0000000-0000-0000-0000-000000000135",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0014-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000014",
        "name": "Rice, Pulaos & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000210",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000003",
            "name": "Farzi Mutton Dum Biryani Bowl",
            "description": "Kolkata-Hyderabad fusion biryani served with boiled egg and spiced potato chunks in dum pot.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000136",
                "menuItemId": "d0000000-0000-0000-0000-000000000210",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000284",
                    "groupId": "e0000000-0000-0000-0000-000000000136",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000285",
                    "groupId": "e0000000-0000-0000-0000-000000000136",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 465,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000137",
                "menuItemId": "d0000000-0000-0000-0000-000000000210",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000286",
                    "groupId": "e0000000-0000-0000-0000-000000000137",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000287",
                    "groupId": "e0000000-0000-0000-0000-000000000137",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000211",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000003",
            "name": "Wild Mushroom Ghee Roast Rice",
            "description": "Fragrant short-grain rice tossed with Kundapur ghee roast masala and button mushrooms.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000212",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000003",
            "name": "Truffle & Rosemary Olive Naan",
            "description": "Leavened tandoor bread brushed with white truffle oil and fresh rosemary.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000213",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000003",
            "name": "Chilli Cheese Garlic Kulcha",
            "description": "Crispy clay oven flatbread stuffed with cheddar, green chilies, and garlic.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0014-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000014",
        "name": "Illusion Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000214",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000004",
            "name": "Rasmalai Tres Leches",
            "description": "Mexican three-milk soaked sponge topped with delicate Kolkata rasmalai and rose petal dust.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000215",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000004",
            "name": "Parle-G Cheesecake with Rabdi",
            "description": "Nostalgic childhood glucose biscuit crust filled with cream cheese mousse and poured condensed rabdi.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000216",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000004",
            "name": "Smoked Blackberry Mojito",
            "description": "Cold blackberry nectar, crushed mint, lime, and wood-smoke infusion.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000015",
    "name": "Conçū",
    "slug": "concu",
    "tagline": "Artisanal European patisserie & luxury all-day cafe",
    "description": "Hyderabad’s benchmark for French pastry, viennoiserie, handmade pasta, and boutique European bistro dining in a serene Jubilee Hills garden courtyard.",
    "coverImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=200&q=80",
    "rating": 4.9,
    "ratingCount": 1650,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 350,
    "deliveryFee": 50,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 738, Road No. 37, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4361,
    "longitude": 78.4042,
    "cuisines": [
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0015-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000015",
        "name": "Viennoiserie & Savory Bakes",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000217",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000001",
            "name": "Butter Croissant French AOP",
            "description": "Traditional laminated 27-layer flaky croissant crafted with French Normandy butter.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000218",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000001",
            "name": "Pain au Chocolat Valrhona",
            "description": "Flaky viennoiserie filled with twin batons of dark 64% Valrhona chocolate.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000219",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000001",
            "name": "Quiche Florentine",
            "description": "Buttery shortcrust tart baked with egg custard, baby spinach, sauteed mushrooms, and Gruyere cheese.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000220",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000001",
            "name": "Smoked Chicken & Leek Quiche",
            "description": "Tender smoked chicken breast, leeks, and aged cheddar in crisp pastry shell.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0015-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000015",
        "name": "Bistro Mains & Sourdough Tartines",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000221",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000002",
            "name": "Avocado Tartine with Poached Eggs",
            "description": "Crushed Hass avocado on toasted country sourdough with zaatar, feta, chili flakes, and organic eggs.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000222",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000002",
            "name": "Burrata Bruschetta Conçū",
            "description": "Whole fresh burrata ball over charred sourdough rubbed with garlic and heirloom cherry tomato compote.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000223",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000002",
            "name": "Grilled Herb Chicken Steak",
            "description": "Sous-vide chicken breast pan-seared with rosemary jus, garlic mashed potatoes, and buttered greens.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000224",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000002",
            "name": "Wild Mushroom Risotto",
            "description": "Arborio rice slowly cooked in vegetable broth with porcini, parmesan shavings, and white truffle oil.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0015-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000015",
        "name": "Artisanal Patisserie & Entremets",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000225",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000003",
            "name": "Conçū Classic Tiramisu Tub",
            "description": "Kahlua and espresso soaked savoiardi biscuits layered with authentic mascarpone mousse.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000226",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000003",
            "name": "Opera Gateau French Classic",
            "description": "Almond sponge Joconde cake soaked in coffee syrup, layered with ganache and coffee buttercream.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000227",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000003",
            "name": "Pistachio Raspberry Tart",
            "description": "Sweet tart crust filled with Bronte pistachio frangipane, fresh raspberries, and whipped ganache.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000228",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000003",
            "name": "Madagascar Vanilla Bean Cheesecake",
            "description": "Velvety New York style cheesecake with genuine bourbon vanilla specks and graham crust.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0015-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000015",
        "name": "Specialty Beverages & Coffee",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000229",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000004",
            "name": "Iced Spanish Latte",
            "description": "Double shot of arabica espresso shaken with condensed milk and whole milk over ice.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000138",
                "menuItemId": "d0000000-0000-0000-0000-000000000229",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000288",
                    "groupId": "e0000000-0000-0000-0000-000000000138",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000289",
                    "groupId": "e0000000-0000-0000-0000-000000000138",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000290",
                    "groupId": "e0000000-0000-0000-0000-000000000138",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000230",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000004",
            "name": "Hot Belgian Mocha",
            "description": "Single-origin espresso blended with melted Belgian dark chocolate and micro-foamed milk.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000231",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000004",
            "name": "Hibiscus Peach Cold Brew Tea",
            "description": "Steeped Egyptian hibiscus petals with white peach reduction and mint.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000139",
                "menuItemId": "d0000000-0000-0000-0000-000000000231",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000291",
                    "groupId": "e0000000-0000-0000-0000-000000000139",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000292",
                    "groupId": "e0000000-0000-0000-0000-000000000139",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000293",
                    "groupId": "e0000000-0000-0000-0000-000000000139",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000016",
    "name": "Roastery Coffee House",
    "slug": "roastery-coffee-house",
    "tagline": "Artisanal Indian estate coffees & gourmet cafe cuisine",
    "description": "Set in a sprawling heritage bungalow in Jubilee Hills, famed for single-estate pour-overs, cold brews, crispy onion rings, gourmet pastas, and grilled chicken steaks.",
    "coverImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 1540,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "House 418, Road No. 41, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4298,
    "longitude": 78.4091,
    "cuisines": [
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0016-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000016",
        "name": "Single-Origin Estate Coffees",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000232",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000001",
            "name": "Monsooned Malabar Pour Over",
            "description": "Smooth, heavy-bodied coffee processed on Malabar coast with notes of dark chocolate and roasted nuts.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000233",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000001",
            "name": "Cascara Cold Brew Coffee",
            "description": "Brewed from dried coffee cherry husks with natural notes of dried fruit, honey, and hibiscus.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000140",
                "menuItemId": "d0000000-0000-0000-0000-000000000233",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000294",
                    "groupId": "e0000000-0000-0000-0000-000000000140",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000295",
                    "groupId": "e0000000-0000-0000-0000-000000000140",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000296",
                    "groupId": "e0000000-0000-0000-0000-000000000140",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000234",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000001",
            "name": "Cortado Double Shot",
            "description": "Equal parts single-origin espresso and silky steamed milk in an artisanal glass.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000235",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000001",
            "name": "Cranberry Nitro Iced Coffee",
            "description": "Nitro-infused cold brew charged with cranberry juice and lime spritz.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000141",
                "menuItemId": "d0000000-0000-0000-0000-000000000235",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000297",
                    "groupId": "e0000000-0000-0000-0000-000000000141",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000298",
                    "groupId": "e0000000-0000-0000-0000-000000000141",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000299",
                    "groupId": "e0000000-0000-0000-0000-000000000141",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0016-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000016",
        "name": "Bistro Starters & Appetizers",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000236",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000002",
            "name": "Roastery Peri Peri Onion Rings",
            "description": "Gigantic crispy panko-coated Spanish onion rings dusted with in-house peri-peri blend and garlic dip.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000237",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000002",
            "name": "Cheesy Garlic Pull-Apart Bread",
            "description": "Warm sourdough loaf baked with molten mozzarella, roasted garlic butter, and parsley.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000238",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000002",
            "name": "Chicken Popcorn with Spicy Mayo",
            "description": "Bite-sized chicken nuggets seasoned with Cajun spices, fried golden crisp.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000239",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000002",
            "name": "Jalapeno Cheese Poppers (6 pcs)",
            "description": "Crispy crumbed poppers filled with cheddar cheese and pickled jalapenos.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0016-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000016",
        "name": "Pasta & Gourmet Mains",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000240",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000003",
            "name": "Grilled Mustard Chicken Steak",
            "description": "Pan-roasted chicken breast in Dijon mustard cream sauce with roasted potatoes and sauteed veggies.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000241",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000003",
            "name": "Penne Arrabiata with Garlic Bread",
            "description": "Al dente penne in spicy San Marzano tomato sauce with fresh basil and parmesan.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000242",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000003",
            "name": "Creamy Mushroom & Truffle Fettuccine",
            "description": "Fettuccine ribbons tossed with button and shiitake mushrooms in garlic-parmesan cream.",
            "price": 510,
            "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000243",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000003",
            "name": "Roastery Club Sandwich Non-Veg",
            "description": "Triple decker toasted sandwich with grilled chicken, fried egg, lettuce, cheddar, and fries.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0016-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000016",
        "name": "Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000244",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000004",
            "name": "Warm Chocolate Fudge Brownie with Gelato",
            "description": "Gooey walnut brownie warmed and served with artisanal vanilla ice cream.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000245",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000004",
            "name": "Baked Blueberry Cheesecake",
            "description": "Classic baked cheesecake crowned with sweet-tart wild blueberry compote.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000246",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000004",
            "name": "Carrot Walnut Cake Slice",
            "description": "Moist spiced carrot sponge layered with rich cream cheese frosting.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000017",
    "name": "Olive Bistro & Bar",
    "slug": "olive-bistro",
    "tagline": "Mediterranean fine dining overlooking the Secret Lake",
    "description": "White-walled Mediterranean sanctuary perched over Durgam Cheruvu, offering sun-kissed pizzas, handmade pastas, and rustic European coastal recipes.",
    "coverImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 1280,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 600,
    "deliveryFee": 70,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Road No. 46, Atop Durgam Cheruvu Secret Lake, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4382,
    "longitude": 78.3965,
    "cuisines": [
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      },
      {
        "id": "c0000003-0000-0000-0000-000000000003",
        "name": "Artisanal Italian",
        "slug": "artisanal-italian",
        "icon": "Pizza"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0017-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000017",
        "name": "Antipasti & Mediterranean Tapas",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000247",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000001",
            "name": "Pugliese Burrata Caprese",
            "description": "Fresh 125g burrata with charred heirloom tomatoes, basil pesto emulsion, and balsamic pearls.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000248",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000001",
            "name": "Gambas al Ajillo (Garlic Prawns)",
            "description": "Tiger prawns sizzling in olive oil, toasted garlic chips, dried chilies, and grilled sourdough.",
            "price": 740,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000249",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000001",
            "name": "Mezze Platter Royale",
            "description": "Silky hummus, smoked moutabal, tzatziki, crispy falafel, and warm Zaatar pita pockets.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000142",
                "menuItemId": "d0000000-0000-0000-0000-000000000249",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000300",
                    "groupId": "e0000000-0000-0000-0000-000000000142",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000301",
                    "groupId": "e0000000-0000-0000-0000-000000000142",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000302",
                    "groupId": "e0000000-0000-0000-0000-000000000142",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000250",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000001",
            "name": "Crispy Polenta Bites with Gorgonzola Dip",
            "description": "Golden fried herb polenta cubes with warm creamy gorgonzola cheese sauce.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0017-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000017",
        "name": "Wood-Fired Pizzas & Handmade Pastas",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000251",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000002",
            "name": "Prosciutto di Parma & Arugula Pizza",
            "description": "San Marzano DOP base, mozzarella, 18-month cured Parma ham, shaved parmesan, and baby arugula.",
            "price": 890,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000143",
                "menuItemId": "d0000000-0000-0000-0000-000000000251",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000303",
                    "groupId": "e0000000-0000-0000-0000-000000000143",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000304",
                    "groupId": "e0000000-0000-0000-0000-000000000143",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000144",
                "menuItemId": "d0000000-0000-0000-0000-000000000251",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000305",
                    "groupId": "e0000000-0000-0000-0000-000000000144",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000306",
                    "groupId": "e0000000-0000-0000-0000-000000000144",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000252",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000002",
            "name": "Wild Truffle & Four Cheese Pizza",
            "description": "Gorgonzola, fontina, mozzarella, and smoked scamorza with white truffle glaze.",
            "price": 820,
            "imageUrl": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000145",
                "menuItemId": "d0000000-0000-0000-0000-000000000252",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000307",
                    "groupId": "e0000000-0000-0000-0000-000000000145",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000308",
                    "groupId": "e0000000-0000-0000-0000-000000000145",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000146",
                "menuItemId": "d0000000-0000-0000-0000-000000000252",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000309",
                    "groupId": "e0000000-0000-0000-0000-000000000146",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000310",
                    "groupId": "e0000000-0000-0000-0000-000000000146",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000253",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000002",
            "name": "Handmade Pappardelle with Braised Lamb Ragu",
            "description": "Slow-cooked lamb shoulder in red wine reduction over broad egg ribbon pasta.",
            "price": 840,
            "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000254",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000002",
            "name": "Spaghetti Aglio Olio e Peperoncino",
            "description": "Bronze-cut spaghetti tossed in cold-pressed EVOO, sliced garlic, chili flakes, and parsley.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0017-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000017",
        "name": "Coastal European Mains",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000255",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000003",
            "name": "Pan-Seared Chilean Sea Bass",
            "description": "Wild sea bass in lemon-caper beurre blanc with buttered asparagus and crushed baby potatoes.",
            "price": 1250,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 28,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000256",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000003",
            "name": "Roast Rosemary Chicken Supreme",
            "description": "Juicy half chicken roasted with garlic and wild herbs, served with potato gratin.",
            "price": 740,
            "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000257",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000003",
            "name": "Stuffed Portobello Mushroom Steaks",
            "description": "Baked giant mushroom caps filled with ratatouille and gratin of goat cheese.",
            "price": 660,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000258",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000003",
            "name": "Sourdough Garlic Focaccia Loaf",
            "description": "Freshly baked focaccia with roasted garlic cloves and Maldon sea salt.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0017-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000017",
        "name": "Dolci & Refreshments",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000259",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000004",
            "name": "Olive Signature Tiramisu",
            "description": "Classic Venetian recipe with espresso-soaked sponge, mascarpone cream, and dark cocoa.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000260",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000004",
            "name": "Valrhona Chocolate Fondant",
            "description": "Warm molten chocolate cake with raspberry coulis and vanilla bean gelato.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000261",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000004",
            "name": "Elderflower & Cucumber Spritzer",
            "description": "Sparkling elderflower tonic with muddled English cucumber and mint.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000018",
    "name": "The Fisherman's Wharf",
    "slug": "the-fishermans-wharf",
    "tagline": "Coastal Goan seafood delicacies & beachside flavors",
    "description": "Bringing the authentic culinary soul of Goa to Gachibowli: Fresh catch Kingfish Recheado, Butter Garlic Jumbo Prawns, Goan Fish Curry, and traditional Bebinca.",
    "coverImage": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 1410,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 400,
    "deliveryFee": 55,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 304, ISB Road, Financial District, Gachibowli",
    "city": "Hyderabad",
    "latitude": 17.4215,
    "longitude": 78.3421,
    "cuisines": [
      {
        "id": "c0000008-0000-0000-0000-000000000008",
        "name": "Coastal Seafood & Goan",
        "slug": "coastal-seafood",
        "icon": "Fish"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0018-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000018",
        "name": "Goan Seafood Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000262",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000001",
            "name": "Kingfish Masala Pan Fry (Surmai Rava Fry)",
            "description": "Fresh kingfish darnes marinated in fiery red chili-toddy vinegar paste, coated in semolina and pan-fried crisp.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000147",
                "menuItemId": "d0000000-0000-0000-0000-000000000262",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000311",
                    "groupId": "e0000000-0000-0000-0000-000000000147",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000312",
                    "groupId": "e0000000-0000-0000-0000-000000000147",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000148",
                "menuItemId": "d0000000-0000-0000-0000-000000000262",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000313",
                    "groupId": "e0000000-0000-0000-0000-000000000148",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000314",
                    "groupId": "e0000000-0000-0000-0000-000000000148",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000263",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000001",
            "name": "Butter Garlic Tiger Prawns",
            "description": "Jumbo prawns pan-tossed in garlic butter and parsley with a dash of white wine.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000264",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000001",
            "name": "Calamari Peri-Peri Fry",
            "description": "Squid rings tossed in spicy Portuguese peri-peri chili paste and scallions.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000149",
                "menuItemId": "d0000000-0000-0000-0000-000000000264",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000315",
                    "groupId": "e0000000-0000-0000-0000-000000000149",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000316",
                    "groupId": "e0000000-0000-0000-0000-000000000149",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000150",
                "menuItemId": "d0000000-0000-0000-0000-000000000264",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000317",
                    "groupId": "e0000000-0000-0000-0000-000000000150",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000318",
                    "groupId": "e0000000-0000-0000-0000-000000000150",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000265",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000001",
            "name": "Mushroom & Cheese Croquettes (4 pcs)",
            "description": "Crisp breaded croquettes filled with button mushrooms and melted mozzarella.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0018-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000018",
        "name": "Coastal Curries & Stews",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000266",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000002",
            "name": "Goan Fish Curry with Coconut Milk",
            "description": "Tender Kingfish simmered in freshly squeezed coconut milk with kokum, coriander seeds, and Kashmiri chilies.",
            "price": 660,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000151",
                "menuItemId": "d0000000-0000-0000-0000-000000000266",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000319",
                    "groupId": "e0000000-0000-0000-0000-000000000151",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000320",
                    "groupId": "e0000000-0000-0000-0000-000000000151",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000321",
                    "groupId": "e0000000-0000-0000-0000-000000000151",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000267",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000002",
            "name": "Prawns Balchao",
            "description": "Fiery and tangy prawn pickle curry cooked with vinegar, caramelized onions, and red chilies.",
            "price": 690,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000268",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000002",
            "name": "Chicken Xacuti",
            "description": "Traditional Goan chicken curry prepared with roasted grated coconut, poppy seeds, and whole spices.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000269",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000002",
            "name": "Paneer Caldin",
            "description": "Mild yellow coconut curry cooked with cottage cheese, cumin, and turmeric.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0018-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000018",
        "name": "Rice & Goan Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000270",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000003",
            "name": "Seafood Pulao Fisherman Style",
            "description": "Fragrant basmati rice tossed with calamari, prawns, and fish in coastal spices.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000152",
                "menuItemId": "d0000000-0000-0000-0000-000000000270",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000322",
                    "groupId": "e0000000-0000-0000-0000-000000000152",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000323",
                    "groupId": "e0000000-0000-0000-0000-000000000152",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 480,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000153",
                "menuItemId": "d0000000-0000-0000-0000-000000000270",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000324",
                    "groupId": "e0000000-0000-0000-0000-000000000153",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000325",
                    "groupId": "e0000000-0000-0000-0000-000000000153",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000271",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000003",
            "name": "Steamed Goan Red Rice",
            "description": "Nutritious unpolished indigenous red parboiled rice, perfect with fish curry.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000272",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000003",
            "name": "Warm Poee (Goan Bread - 2 pcs)",
            "description": "Traditional wheat pocket bread fermented with toddy/yeast and baked on floor oven.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000273",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000003",
            "name": "Appam (2 pcs)",
            "description": "Soft fermented rice and coconut milk hopper with lacy crisp borders.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0018-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000018",
        "name": "Goan Desserts & Drinks",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000274",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000004",
            "name": "Traditional Bebinca (7 Layers)",
            "description": "Queen of Goan desserts: layered coconut milk, egg yolk, and jaggery pudding baked painstakingly.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000275",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000004",
            "name": "Serra Durra (Sawdust Pudding)",
            "description": "Portuguese layered chilled pudding of condensed whipped cream and crushed Marie biscuits.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000276",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000004",
            "name": "Sol Kadi Cooler",
            "description": "Digestive drink made from kokum extract, coconut milk, fresh garlic, green chili, and cilantro.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000019",
    "name": "Ulavacharu",
    "slug": "ulavacharu",
    "tagline": "Authentic Andhra & Telugu regional culinary marvels",
    "description": "Home of the legendary Ulavacharu Kodi Pulao, Raju Gari Royyala Pulao, spicy bamboo chicken, and fiery Telugu countryside cooking.",
    "coverImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 1590,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 400,
    "deliveryFee": 55,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 464, Road No. 29, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4285,
    "longitude": 78.4115,
    "cuisines": [
      {
        "id": "c0000006-0000-0000-0000-000000000006",
        "name": "Andhra & Rayalaseema",
        "slug": "andhra-rayalaseema",
        "icon": "Flame"
      },
      {
        "id": "c0000005-0000-0000-0000-000000000005",
        "name": "Telangana Heritage",
        "slug": "telangana-heritage",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0019-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000019",
        "name": "Signature Pulaos & Biryanis",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000277",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000001",
            "name": "Ulavacharu Chicken Pulao",
            "description": "Slow-simmered horse gram broth infused into aged basmati rice, layered with country spiced chicken and rich ghee.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000154",
                "menuItemId": "d0000000-0000-0000-0000-000000000277",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000326",
                    "groupId": "e0000000-0000-0000-0000-000000000154",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000327",
                    "groupId": "e0000000-0000-0000-0000-000000000154",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 368,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000155",
                "menuItemId": "d0000000-0000-0000-0000-000000000277",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000328",
                    "groupId": "e0000000-0000-0000-0000-000000000155",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000329",
                    "groupId": "e0000000-0000-0000-0000-000000000155",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000278",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000001",
            "name": "Raju Gari Kodi Pulao",
            "description": "Famous Godavari Kshatriya recipe of tender bone-in chicken cooked in fragrant bagara basmati with whole spices.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000156",
                "menuItemId": "d0000000-0000-0000-0000-000000000278",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000330",
                    "groupId": "e0000000-0000-0000-0000-000000000156",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000331",
                    "groupId": "e0000000-0000-0000-0000-000000000156",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 360,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000157",
                "menuItemId": "d0000000-0000-0000-0000-000000000278",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000332",
                    "groupId": "e0000000-0000-0000-0000-000000000157",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000333",
                    "groupId": "e0000000-0000-0000-0000-000000000157",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000279",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000001",
            "name": "Ulavacharu Mutton Pulao",
            "description": "Rich horse-gram broth reduction paired with tender mutton chunks and fragrant long-grain rice.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000158",
                "menuItemId": "d0000000-0000-0000-0000-000000000279",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000334",
                    "groupId": "e0000000-0000-0000-0000-000000000158",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000335",
                    "groupId": "e0000000-0000-0000-0000-000000000158",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 420,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000159",
                "menuItemId": "d0000000-0000-0000-0000-000000000279",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000336",
                    "groupId": "e0000000-0000-0000-0000-000000000159",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000337",
                    "groupId": "e0000000-0000-0000-0000-000000000159",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000280",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000001",
            "name": "Avakaya Veg Pulao",
            "description": "Aged Andhra mango pickle tossed with fragrant basmati, fried cashews, and garden vegetables.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000160",
                "menuItemId": "d0000000-0000-0000-0000-000000000280",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000338",
                    "groupId": "e0000000-0000-0000-0000-000000000160",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000339",
                    "groupId": "e0000000-0000-0000-0000-000000000160",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 270,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000161",
                "menuItemId": "d0000000-0000-0000-0000-000000000280",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000340",
                    "groupId": "e0000000-0000-0000-0000-000000000161",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000341",
                    "groupId": "e0000000-0000-0000-0000-000000000161",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0019-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000019",
        "name": "Andhra Village Starters",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000281",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000002",
            "name": "Kodi Vepudu (Andhra Chicken Fry)",
            "description": "Country chicken tossed with crushed garlic, shallots, curry leaves, and pounded dry chili masala.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000162",
                "menuItemId": "d0000000-0000-0000-0000-000000000281",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000342",
                    "groupId": "e0000000-0000-0000-0000-000000000162",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000343",
                    "groupId": "e0000000-0000-0000-0000-000000000162",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000163",
                "menuItemId": "d0000000-0000-0000-0000-000000000281",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000344",
                    "groupId": "e0000000-0000-0000-0000-000000000163",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000345",
                    "groupId": "e0000000-0000-0000-0000-000000000163",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000282",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000002",
            "name": "Royyala Iguru Fry (Prawns)",
            "description": "Fresh river prawns pan-roasted with caramelized onion gravy and peppercorns.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000164",
                "menuItemId": "d0000000-0000-0000-0000-000000000282",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000346",
                    "groupId": "e0000000-0000-0000-0000-000000000164",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000347",
                    "groupId": "e0000000-0000-0000-0000-000000000164",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000165",
                "menuItemId": "d0000000-0000-0000-0000-000000000282",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000348",
                    "groupId": "e0000000-0000-0000-0000-000000000165",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000349",
                    "groupId": "e0000000-0000-0000-0000-000000000165",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000283",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000002",
            "name": "Mokkajonna Vepudu (Crispy Corn)",
            "description": "Sweet corn kernels coated in spiced rice flour and fried crisp with curry leaves.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000166",
                "menuItemId": "d0000000-0000-0000-0000-000000000283",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000350",
                    "groupId": "e0000000-0000-0000-0000-000000000166",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000351",
                    "groupId": "e0000000-0000-0000-0000-000000000166",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000167",
                "menuItemId": "d0000000-0000-0000-0000-000000000283",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000352",
                    "groupId": "e0000000-0000-0000-0000-000000000167",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000353",
                    "groupId": "e0000000-0000-0000-0000-000000000167",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000284",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000002",
            "name": "Miriyala Mutton Vepudu",
            "description": "Baby goat meat pan-roasted in black pepper and toasted coriander reduction.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000168",
                "menuItemId": "d0000000-0000-0000-0000-000000000284",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000354",
                    "groupId": "e0000000-0000-0000-0000-000000000168",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000355",
                    "groupId": "e0000000-0000-0000-0000-000000000168",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000169",
                "menuItemId": "d0000000-0000-0000-0000-000000000284",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000356",
                    "groupId": "e0000000-0000-0000-0000-000000000169",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000357",
                    "groupId": "e0000000-0000-0000-0000-000000000169",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0019-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000019",
        "name": "Curries & Traditional Accompaniments",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000285",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000003",
            "name": "Natu Kodi Pulusu",
            "description": "Free-range country chicken in fiery red gravy simmered with shallots and curry leaves.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000170",
                "menuItemId": "d0000000-0000-0000-0000-000000000285",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000358",
                    "groupId": "e0000000-0000-0000-0000-000000000170",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000359",
                    "groupId": "e0000000-0000-0000-0000-000000000170",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000360",
                    "groupId": "e0000000-0000-0000-0000-000000000170",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000286",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000003",
            "name": "Ulavacharu Soup Bowl with Cream",
            "description": "Pure concentrated horse gram soup served warm with fresh cream and butter.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000287",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000003",
            "name": "Gutti Vankaya Kura",
            "description": "Stuffed brinjals cooked in roasted peanut, sesame, and dry coconut gravy.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000288",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000003",
            "name": "Jowar Roti (2 pcs)",
            "description": "Hand-patted sorghum rotis.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0019-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000019",
        "name": "Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000289",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000004",
            "name": "Junnu (Colostrum Pudding)",
            "description": "Traditional Telugu milk pudding steamed with green cardamom and black pepper.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000290",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000004",
            "name": "Bellam Bobbattu with Pure Ghee",
            "description": "Sweet flatbread filled with lentil jaggery stuffing.",
            "price": 170,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000291",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000004",
            "name": "Majiga (Spiced Buttermilk)",
            "description": "Churned cooling buttermilk with ginger and coriander.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000020",
    "name": "Haïku",
    "slug": "haiku",
    "tagline": "Artisanal Pan-Asian gastronomy, dim sums & sushi",
    "description": "An elegant Pan-Asian sanctuary in Banjara Hills, celebrated for delicate dim sums, authentic sushi, fiery Thai curries, and Japanese robata specialties.",
    "coverImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 880,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 450,
    "deliveryFee": 60,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 686/D, Road No. 10, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4189,
    "longitude": 78.4385,
    "cuisines": [
      {
        "id": "c0000010-0000-0000-0000-000000000010",
        "name": "Pan-Asian & Dim Sum",
        "slug": "pan-asian",
        "icon": "Utensils"
      },
      {
        "id": "c0000002-0000-0000-0000-000000000002",
        "name": "Japanese & Robata",
        "slug": "japanese-robata",
        "icon": "Fish"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0020-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000020",
        "name": "Handcrafted Dim Sum Baskets",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000292",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000001",
            "name": "Truffle Edamame Dumplings (4 pcs)",
            "description": "Translucent parcels packed with sweet green soybeans, water chestnuts, and fragrant white truffle essence.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000293",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000001",
            "name": "Crystal Prawn Har Gow (4 pcs)",
            "description": "Delicate pleated dumplings filled with whole succulent tiger prawns and bamboo shoot.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000294",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000001",
            "name": "Chicken & Coriander Sui Mai (4 pcs)",
            "description": "Open-faced steamed dumplings filled with spiced chicken mince and tobiko flying fish roe garnish.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000295",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000001",
            "name": "Wild Mushroom Bao (3 pcs)",
            "description": "Fluffy steamed buns stuffed with braised shiitake, shimeji, and oyster mushrooms.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0020-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000020",
        "name": "Sushi & Maki Rolls",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000296",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000002",
            "name": "Spicy Salmon Uramaki Roll (8 pcs)",
            "description": "Fresh Atlantic salmon, sriracha mayo, avocado, and cucumber rolled inside-out with flying fish roe.",
            "price": 740,
            "imageUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000171",
                "menuItemId": "d0000000-0000-0000-0000-000000000296",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000361",
                    "groupId": "e0000000-0000-0000-0000-000000000171",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000362",
                    "groupId": "e0000000-0000-0000-0000-000000000171",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000297",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000002",
            "name": "Crispy Avocado & Cream Cheese Maki (8 pcs)",
            "description": "Hass avocado, Philadelphia cream cheese, and tempura crunch rolled with tanuki flakes.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000298",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000002",
            "name": "Prawn Tempura Ebi Roll (8 pcs)",
            "description": "Crispy fried black tiger prawns, unagi sweet glaze, and toasted sesame.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000172",
                "menuItemId": "d0000000-0000-0000-0000-000000000298",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000363",
                    "groupId": "e0000000-0000-0000-0000-000000000172",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000364",
                    "groupId": "e0000000-0000-0000-0000-000000000172",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000299",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000002",
            "name": "Asparagus Tempura & Truffle Roll (8 pcs)",
            "description": "Golden asparagus spears with vegan truffle mayo and sesame wrap.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000173",
                "menuItemId": "d0000000-0000-0000-0000-000000000299",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000365",
                    "groupId": "e0000000-0000-0000-0000-000000000173",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000366",
                    "groupId": "e0000000-0000-0000-0000-000000000173",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0020-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000020",
        "name": "Wok Specialties & Asian Curries",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000300",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000003",
            "name": "Thai Green Curry with Jasmine Rice",
            "description": "Aromatic coconut broth with galangal, kaffir lime, bamboo shoots, and fresh basil.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000174",
                "menuItemId": "d0000000-0000-0000-0000-000000000300",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000367",
                    "groupId": "e0000000-0000-0000-0000-000000000174",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000368",
                    "groupId": "e0000000-0000-0000-0000-000000000174",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000369",
                    "groupId": "e0000000-0000-0000-0000-000000000174",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000301",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000003",
            "name": "Teriyaki Glazed Chicken Bowl",
            "description": "Pan-seared chicken supreme in house teriyaki glaze over steamed sticky rice with sesame.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000302",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000003",
            "name": "Singapore Hawker Chilli Prawns",
            "description": "Succulent prawns tossed in sweet, sour, and spicy egg ribbon chili reduction.",
            "price": 740,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000303",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000003",
            "name": "Wok-Tossed Hakka Noodles Veg",
            "description": "Springy noodles tossed with shredded bell peppers, cabbage, and scallions in garlic soy.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0020-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000020",
        "name": "Desserts & Asian Beverages",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000304",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000004",
            "name": "Panko Banana Fritters with Honey",
            "description": "Crisp banana spring rolls drizzled with wild honey and toasted sesame, served warm.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000305",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000004",
            "name": "Coconut Mango Sticky Rice",
            "description": "Warm coconut milk sticky rice served with sweet Thai mango slices.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000306",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000004",
            "name": "Yuzu Iced Green Tea",
            "description": "Chilled Japanese sencha infused with tart yuzu citrus puree.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000021",
    "name": "United Kitchens of India",
    "slug": "united-kitchens-of-india",
    "tagline": "Authentic pan-Indian regional culinary heritage",
    "description": "A celebrated culinary journey exploring India’s royal and coastal heritage: Mangalorean Ghee Roast, Malabar Parottas, Kashmiri Rogan Josh, and Bengali Kosha Mangsho.",
    "coverImage": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 1100,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 400,
    "deliveryFee": 55,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 1187, Road No. 45, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4348,
    "longitude": 78.4038,
    "cuisines": [
      {
        "id": "c0000011-0000-0000-0000-000000000011",
        "name": "Modern Indian Bistro",
        "slug": "modern-indian",
        "icon": "Sparkles"
      },
      {
        "id": "c0000005-0000-0000-0000-000000000005",
        "name": "Telangana Heritage",
        "slug": "telangana-heritage",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0021-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000021",
        "name": "Regional Signature Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000307",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000001",
            "name": "Mangalorean Kundapur Chicken Ghee Roast",
            "description": "Tender chicken braised in clarified butter with Byadgi red chilies, crushed coriander, and jaggery.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000308",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000001",
            "name": "Paneer Ghee Roast",
            "description": "Cottage cheese batons roasted in pure desi ghee with Kundapur spice paste.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000309",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000001",
            "name": "Dahi Ke Sholay (4 pcs)",
            "description": "Crispy fried bread rolls stuffed with spiced hung curd, mint, and pomegranate.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000310",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000001",
            "name": "Kolkata Fish Fry (Bhetki - 2 pcs)",
            "description": "Fresh bhetki fillets marinated in mustard and green herb paste, crumbed and fried golden.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000175",
                "menuItemId": "d0000000-0000-0000-0000-000000000310",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000370",
                    "groupId": "e0000000-0000-0000-0000-000000000175",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000371",
                    "groupId": "e0000000-0000-0000-0000-000000000175",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000176",
                "menuItemId": "d0000000-0000-0000-0000-000000000310",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000372",
                    "groupId": "e0000000-0000-0000-0000-000000000176",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000373",
                    "groupId": "e0000000-0000-0000-0000-000000000176",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0021-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000021",
        "name": "Heritage Curries",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000311",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000002",
            "name": "Bengali Kosha Mangsho",
            "description": "Slow-braised mutton in mustard oil, caramelized onions, and whole garam masalas till dark and unctuous.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 26,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000312",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000002",
            "name": "Alleppey Fish Curry",
            "description": "Kerala style raw mango and coconut curry with fresh kingfish and curry leaves.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000177",
                "menuItemId": "d0000000-0000-0000-0000-000000000312",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000374",
                    "groupId": "e0000000-0000-0000-0000-000000000177",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000375",
                    "groupId": "e0000000-0000-0000-0000-000000000177",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000376",
                    "groupId": "e0000000-0000-0000-0000-000000000177",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000313",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000002",
            "name": "Old Delhi Butter Chicken",
            "description": "Clay-roasted chicken in rich tomato, cashew, and cream gravy with fenugreek.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000314",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000002",
            "name": "Dal Moradabadi",
            "description": "Yellow moong dal cooked to a silky texture, topped with crisp hing jeera tadka and chaat masala.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000178",
                "menuItemId": "d0000000-0000-0000-0000-000000000314",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000377",
                    "groupId": "e0000000-0000-0000-0000-000000000178",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000378",
                    "groupId": "e0000000-0000-0000-0000-000000000178",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000379",
                    "groupId": "e0000000-0000-0000-0000-000000000178",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0021-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000021",
        "name": "Regional Breads & Rice",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000315",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000003",
            "name": "Flaky Malabar Parotta (2 pcs)",
            "description": "Multi-layered Kerala spiral flatbread cooked on griddle with ghee.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000316",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000003",
            "name": "Appam Basket (2 pcs)",
            "description": "Soft center, lacy crisp fermented rice pancakes.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000317",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000003",
            "name": "Thalassery Mutton Biryani",
            "description": "Fragrant Kaima short-grain rice cooked with malabar spices, tender mutton, and fried cashews.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000179",
                "menuItemId": "d0000000-0000-0000-0000-000000000317",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000380",
                    "groupId": "e0000000-0000-0000-0000-000000000179",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000381",
                    "groupId": "e0000000-0000-0000-0000-000000000179",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 435,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000180",
                "menuItemId": "d0000000-0000-0000-0000-000000000317",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000382",
                    "groupId": "e0000000-0000-0000-0000-000000000180",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000383",
                    "groupId": "e0000000-0000-0000-0000-000000000180",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000318",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000003",
            "name": "Ghee Rice with Crispy Onions",
            "description": "Short grain rice sauteed in pure cow ghee with whole spices and golden fried shallots.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0021-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000021",
        "name": "Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000319",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000004",
            "name": "Baked Mihidana with Rabdi",
            "description": "Fine golden gram flour pearls baked with condensed saffron milk and almonds.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000320",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000004",
            "name": "Elaneer Payasam (Tender Coconut)",
            "description": "Chilled pudding of tender coconut pulp, coconut milk, and condensed milk with cardamom.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000321",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000004",
            "name": "Masala Chaas",
            "description": "Traditional spiced buttermilk with ginger and fresh mint.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000022",
    "name": "Aidu",
    "slug": "aidu",
    "tagline": "5-State South Indian heritage & regional royal feasts",
    "description": "Celebrating the distinct culinary heritage of five southern states: Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, and Kerala in an opulent Jubilee Hills setting.",
    "coverImage": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 760,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 450,
    "deliveryFee": 60,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Road No. 45, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4345,
    "longitude": 78.4031,
    "cuisines": [
      {
        "id": "c0000006-0000-0000-0000-000000000006",
        "name": "Andhra & Rayalaseema",
        "slug": "andhra-rayalaseema",
        "icon": "Flame"
      },
      {
        "id": "c0000005-0000-0000-0000-000000000005",
        "name": "Telangana Heritage",
        "slug": "telangana-heritage",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0022-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000022",
        "name": "Pan-South Indian Appetizers",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000322",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000001",
            "name": "Karivepaku Kodi Vepudu",
            "description": "Tender chicken tossed with roasted curry leaf powder, black pepper, and garlic.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000181",
                "menuItemId": "d0000000-0000-0000-0000-000000000322",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000384",
                    "groupId": "e0000000-0000-0000-0000-000000000181",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000385",
                    "groupId": "e0000000-0000-0000-0000-000000000181",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000182",
                "menuItemId": "d0000000-0000-0000-0000-000000000322",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000386",
                    "groupId": "e0000000-0000-0000-0000-000000000182",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000387",
                    "groupId": "e0000000-0000-0000-0000-000000000182",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000323",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000001",
            "name": "Koliwada Fish Fry",
            "description": "Crispy fried river fish fillets with carom seeds and spicy coastal batter.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000183",
                "menuItemId": "d0000000-0000-0000-0000-000000000323",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000388",
                    "groupId": "e0000000-0000-0000-0000-000000000183",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000389",
                    "groupId": "e0000000-0000-0000-0000-000000000183",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000184",
                "menuItemId": "d0000000-0000-0000-0000-000000000323",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000390",
                    "groupId": "e0000000-0000-0000-0000-000000000184",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000391",
                    "groupId": "e0000000-0000-0000-0000-000000000184",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000324",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000001",
            "name": "Mushroom Sukka Mangalore Style",
            "description": "Button mushrooms sauteed in dry roasted coconut, cumin, and red chilies.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000325",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000001",
            "name": "Kurnool Paneer Vepudu",
            "description": "Cottage cheese pan-roasted with spicy Kurnool chili paste and curry leaves.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000185",
                "menuItemId": "d0000000-0000-0000-0000-000000000325",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000392",
                    "groupId": "e0000000-0000-0000-0000-000000000185",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000393",
                    "groupId": "e0000000-0000-0000-0000-000000000185",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000186",
                "menuItemId": "d0000000-0000-0000-0000-000000000325",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000394",
                    "groupId": "e0000000-0000-0000-0000-000000000186",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000395",
                    "groupId": "e0000000-0000-0000-0000-000000000186",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0022-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000022",
        "name": "Five States Curries",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000326",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000002",
            "name": "Chettinad Pepper Chicken",
            "description": "Tamil Nadu style spicy chicken cooked with star anise, stone flower, and freshly roasted peppercorns.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000327",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000002",
            "name": "Telangana Mutton Curry",
            "description": "Rustic Telangana highway style goat curry with spicy red gravy and local spices.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000187",
                "menuItemId": "d0000000-0000-0000-0000-000000000327",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000396",
                    "groupId": "e0000000-0000-0000-0000-000000000187",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000397",
                    "groupId": "e0000000-0000-0000-0000-000000000187",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000398",
                    "groupId": "e0000000-0000-0000-0000-000000000187",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000328",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000002",
            "name": "Bendakaya Pulusu (Okra Tangy Stew)",
            "description": "Tender ladyfingers simmered in sweet and tangy tamarind and jaggery sauce.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000188",
                "menuItemId": "d0000000-0000-0000-0000-000000000328",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000399",
                    "groupId": "e0000000-0000-0000-0000-000000000188",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000400",
                    "groupId": "e0000000-0000-0000-0000-000000000188",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000401",
                    "groupId": "e0000000-0000-0000-0000-000000000188",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000329",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000002",
            "name": "Avial Kerala Style",
            "description": "Assorted vegetables cooked in thick coconut-yogurt paste with coconut oil tempering.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0022-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000022",
        "name": "Pulaos & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000330",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000003",
            "name": "Aidu Special Kodi Pulao",
            "description": "Fragrant seasoned rice cooked with country chicken and house roasted spices.",
            "price": 510,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000189",
                "menuItemId": "d0000000-0000-0000-0000-000000000330",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000402",
                    "groupId": "e0000000-0000-0000-0000-000000000189",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000403",
                    "groupId": "e0000000-0000-0000-0000-000000000189",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 383,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000190",
                "menuItemId": "d0000000-0000-0000-0000-000000000330",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000404",
                    "groupId": "e0000000-0000-0000-0000-000000000190",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000405",
                    "groupId": "e0000000-0000-0000-0000-000000000190",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000331",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000003",
            "name": "Gongura Royyalu Pulao",
            "description": "Prawns cooked in tangy sorrel leaf masala layered with basmati.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000191",
                "menuItemId": "d0000000-0000-0000-0000-000000000331",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000406",
                    "groupId": "e0000000-0000-0000-0000-000000000191",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000407",
                    "groupId": "e0000000-0000-0000-0000-000000000191",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 435,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000192",
                "menuItemId": "d0000000-0000-0000-0000-000000000331",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000408",
                    "groupId": "e0000000-0000-0000-0000-000000000192",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000409",
                    "groupId": "e0000000-0000-0000-0000-000000000192",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000332",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000003",
            "name": "Kothu Parotta Veg",
            "description": "Shredded flaky parotta stir-fried on cast iron tawa with vegetables and salna.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000333",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000003",
            "name": "Neer Dosa (3 pcs)",
            "description": "Lacy, light-as-air rice crepes from coastal Karnataka.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000193",
                "menuItemId": "d0000000-0000-0000-0000-000000000333",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000410",
                    "groupId": "e0000000-0000-0000-0000-000000000193",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000411",
                    "groupId": "e0000000-0000-0000-0000-000000000193",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0022-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000022",
        "name": "Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000334",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000004",
            "name": "Ada Pradhaman (Kerala Payasam)",
            "description": "Rice pasta cooked in reduced coconut milk and dark palm jaggery with fried coconut bits.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000335",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000004",
            "name": "Mysore Pak with Warm Ghee",
            "description": "Traditional melt-in-mouth gram flour and ghee sweet.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000336",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000004",
            "name": "Panakam Herbal Punch",
            "description": "Refreshing jaggery, ginger, black pepper, and cardamom nectar.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000023",
    "name": "Minerva Coffee Shop",
    "slug": "minerva-coffee-shop",
    "tagline": "Legacy South Indian tiffins & authentic filter coffee",
    "description": "Somajiguda’s timeless culinary institution since decades, celebrated for button idlis steeped in hot sambar, crisp masala dosas, and piping hot Minerva filter coffee.",
    "coverImage": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 2100,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 20,
    "deliveryTimeEstimateMax": 35,
    "minimumOrderAmount": 200,
    "deliveryFee": 35,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Amrutha Mall, Raj Bhavan Road, Somajiguda",
    "city": "Hyderabad",
    "latitude": 17.4265,
    "longitude": 78.4582,
    "cuisines": [
      {
        "id": "c0000007-0000-0000-0000-000000000007",
        "name": "South Indian Tiffins",
        "slug": "south-indian-tiffins",
        "icon": "Coffee"
      },
      {
        "id": "c0000013-0000-0000-0000-000000000013",
        "name": "Pure Vegetarian Gourmet",
        "slug": "pure-vegetarian",
        "icon": "Leaf"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0023-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000023",
        "name": "Heritage Tiffins",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000337",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000001",
            "name": "Button Sambar Idli (14 mini idlis)",
            "description": "Mini button idlis submerged in hot lentil-vegetable sambar, topped with pure ghee and coriander.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000194",
                "menuItemId": "d0000000-0000-0000-0000-000000000337",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000412",
                    "groupId": "e0000000-0000-0000-0000-000000000194",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000413",
                    "groupId": "e0000000-0000-0000-0000-000000000194",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000338",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000001",
            "name": "Special Masala Dosa",
            "description": "Crispy golden roasted crepe smeared with red chutney and stuffed with spiced potato mash.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000195",
                "menuItemId": "d0000000-0000-0000-0000-000000000338",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000414",
                    "groupId": "e0000000-0000-0000-0000-000000000195",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000415",
                    "groupId": "e0000000-0000-0000-0000-000000000195",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000339",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000001",
            "name": "Crispy Medu Vada (2 pcs)",
            "description": "Freshly fried black gram donuts with crunchy crust, served with coconut chutney.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000340",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000001",
            "name": "Pesarattu Upma",
            "description": "Green moong dal dosa stuffed with spiced semolina upma, chopped ginger, and onions.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0023-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000023",
        "name": "South Indian Rice Specialties",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000341",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000002",
            "name": "Minerva Executive South Indian Meals",
            "description": "Complete traditional meal with rice, poori, sambar, rasam, kootu, poriyal, curd, and sweet.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000342",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000002",
            "name": "Bisi Bele Bath with Boondi",
            "description": "Spicy rice, lentil, and vegetable medley cooked with special masala.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000343",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000002",
            "name": "Tempered Curd Rice",
            "description": "Chilled curd rice tempered with mustard, ginger, green chilies, and pomegranate.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000344",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000002",
            "name": "Puliyogare (Tamarind Rice)",
            "description": "Tangy and spiced rice cooked with tamarind pulp, peanuts, and curry leaves.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0023-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000023",
        "name": "Snacks & Evening Specials",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000345",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000003",
            "name": "Mirchi Bajji (3 pcs)",
            "description": "Large Bhavnagri green chilies stuffed with tamarind-ajwain paste, batter fried.",
            "price": 130,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000346",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000003",
            "name": "Cut Mirchi with Onions",
            "description": "Double-fried chopped chili fritters seasoned with roasted spices and fresh lemon juice.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000347",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000003",
            "name": "Poori Masala (3 pcs)",
            "description": "Puffed wheat breads served with potato masala.",
            "price": 170,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000348",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000003",
            "name": "Rava Dosa Special",
            "description": "Crispy lacy semolina crepe with cumin and peppercorns.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000196",
                "menuItemId": "d0000000-0000-0000-0000-000000000348",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000416",
                    "groupId": "e0000000-0000-0000-0000-000000000196",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000417",
                    "groupId": "e0000000-0000-0000-0000-000000000196",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0023-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000023",
        "name": "Beverages & Sweets",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000349",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000004",
            "name": "Minerva Filter Coffee",
            "description": "Legendary freshly brewed South Indian chicory and coffee blend.",
            "price": 75,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000197",
                "menuItemId": "d0000000-0000-0000-0000-000000000349",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000418",
                    "groupId": "e0000000-0000-0000-0000-000000000197",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000419",
                    "groupId": "e0000000-0000-0000-0000-000000000197",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000420",
                    "groupId": "e0000000-0000-0000-0000-000000000197",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000350",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000004",
            "name": "Rava Kesari with Cashews",
            "description": "Pure ghee semolina sweet flavored with saffron.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000351",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000004",
            "name": "Badam Milk Chilled",
            "description": "Rich almond milk enriched with saffron and crushed nuts.",
            "price": 130,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000024",
    "name": "Tre-Forni Bar & Restaurant",
    "slug": "tre-forni",
    "tagline": "Authentic northern Italian fine dining at Park Hyatt",
    "description": "Hyderabad’s premier five-star Italian destination at Park Hyatt, Banjara Hills. Home to three stone ovens, handmade pastas, Risotto ai Porcini, and prime grilled meats.",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
    "rating": 4.9,
    "ratingCount": 580,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 55,
    "minimumOrderAmount": 800,
    "deliveryFee": 90,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Park Hyatt, Road No. 2, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4258,
    "longitude": 78.4402,
    "cuisines": [
      {
        "id": "c0000003-0000-0000-0000-000000000003",
        "name": "Artisanal Italian",
        "slug": "artisanal-italian",
        "icon": "Pizza"
      },
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0024-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000024",
        "name": "Antipasti Classici",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000352",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000001",
            "name": "Carpaccio di Manzo",
            "description": "Paper-thin beef tenderloin carpaccio, caperberries, shaved 24-month Parmigiano-Reggiano, and lemon-truffle vinaigrette.",
            "price": 920,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000353",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000001",
            "name": "Burrata Pugliese Artigianale",
            "description": "Fresh burrata, vine-ripened San Marzano tomatoes, Genovese basil emulsion, and Modena balsamic reduction.",
            "price": 780,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000354",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000001",
            "name": "Calamari alla Griglia",
            "description": "Char-grilled fresh squids with chili-garlic salmoriglio oil and rocket salad.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000355",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000001",
            "name": "Bruschetta ai Funghi Porcini",
            "description": "Toasted ciabatta topped with sauteed Italian porcini mushrooms, garlic, and thyme.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0024-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000024",
        "name": "Primi Piatti & Risotto",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000356",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000002",
            "name": "Risotto ai Funghi Porcini",
            "description": "Acquerello carnaroli rice slow-cooked with wild porcini stock, mountain butter, and aged Parmigiano.",
            "price": 880,
            "imageUrl": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000357",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000002",
            "name": "Ravioli di Ricotta e Spinaci al Burro e Salvia",
            "description": "Handmade pasta pillows filled with buffalo ricotta and spinach in sage brown butter sauce.",
            "price": 820,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000358",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000002",
            "name": "Tagliolini al Tartufo Nero",
            "description": "Fresh egg pasta tossed with winter black truffle paste and cream.",
            "price": 950,
            "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000359",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000002",
            "name": "Linguine ai Frutti di Mare",
            "description": "Linguine tossed with baby lobster tail, calamari, mussels, cherry tomatoes, and pinot grigio.",
            "price": 1100,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0024-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000024",
        "name": "Pizze Forno a Legna (Stone Oven)",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000360",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000003",
            "name": "Pizza Tre-Forni Signature",
            "description": "Smoked scamorza, spicy spianata calabrese, wild mushrooms, and fresh oregano on 48h sourdough.",
            "price": 920,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000198",
                "menuItemId": "d0000000-0000-0000-0000-000000000360",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000421",
                    "groupId": "e0000000-0000-0000-0000-000000000198",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000422",
                    "groupId": "e0000000-0000-0000-0000-000000000198",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000199",
                "menuItemId": "d0000000-0000-0000-0000-000000000360",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000423",
                    "groupId": "e0000000-0000-0000-0000-000000000199",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000424",
                    "groupId": "e0000000-0000-0000-0000-000000000199",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000361",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000003",
            "name": "Pizza Margherita D.O.P.",
            "description": "San Marzano tomatoes, buffalo mozzarella from Campania, and fresh sweet basil.",
            "price": 740,
            "imageUrl": "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000200",
                "menuItemId": "d0000000-0000-0000-0000-000000000361",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000425",
                    "groupId": "e0000000-0000-0000-0000-000000000200",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000426",
                    "groupId": "e0000000-0000-0000-0000-000000000200",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000201",
                "menuItemId": "d0000000-0000-0000-0000-000000000361",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000427",
                    "groupId": "e0000000-0000-0000-0000-000000000201",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000428",
                    "groupId": "e0000000-0000-0000-0000-000000000201",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000362",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000003",
            "name": "Pizza Primavera Ortolana",
            "description": "Grilled zucchini, bell peppers, artichoke hearts, and fior di latte mozzarella.",
            "price": 780,
            "imageUrl": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000202",
                "menuItemId": "d0000000-0000-0000-0000-000000000362",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000429",
                    "groupId": "e0000000-0000-0000-0000-000000000202",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000430",
                    "groupId": "e0000000-0000-0000-0000-000000000202",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000203",
                "menuItemId": "d0000000-0000-0000-0000-000000000362",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000431",
                    "groupId": "e0000000-0000-0000-0000-000000000203",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000432",
                    "groupId": "e0000000-0000-0000-0000-000000000203",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000363",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000003",
            "name": "Focaccia Barese al Pomodoro",
            "description": "Stone-baked Pugliese focaccia with whole cherry tomatoes and oregano.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0024-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000024",
        "name": "Dolci Artigianali",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000364",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000004",
            "name": "Tiramisu Tradizionale Tre-Forni",
            "description": "Authentic Treviso recipe with freshly whipped mascarpone, espresso, and dark chocolate.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000365",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000004",
            "name": "Cannoli Siciliani con Ricotta (2 pcs)",
            "description": "Crisp pastry shells filled with sweetened sheep ricotta, candied orange peel, and pistachios.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000366",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000004",
            "name": "Acqua Panna Still Mineral Water (750ml)",
            "description": "Natural Tuscan spring water.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 3,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000025",
    "name": "Jewel of Nizam - The Minar",
    "slug": "jewel-of-nizam",
    "tagline": "Palatial 100-foot tower dining & royal Nizami banquets",
    "description": "Hyderabad’s iconic royal sanctuary at The Golkonda Resort, offering regal dining overlooking Osman Sagar lake. Renowned for Barkas Pathar Ka Gosht, Subz Dum Biryani, and Anokhi Kheer.",
    "coverImage": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.9,
    "ratingCount": 670,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 40,
    "deliveryTimeEstimateMax": 60,
    "minimumOrderAmount": 800,
    "deliveryFee": 95,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "The Golkonda Resort, Sagar Mahal Complex, Gandipet",
    "city": "Hyderabad",
    "latitude": 17.3912,
    "longitude": 78.3285,
    "cuisines": [
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
      },
      {
        "id": "c0000001-0000-0000-0000-000000000001",
        "name": "Contemporary Deccani",
        "slug": "contemporary-deccani",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0025-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000025",
        "name": "Royal Nizami Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000367",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000001",
            "name": "Barkas Pathar Ka Gosht",
            "description": "Mutton scallops marinated in green papaya and secret Nizam spices, cooked on heated granite stone.",
            "price": 920,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000368",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000001",
            "name": "Dahi Ke Shikampuri Kebab (4 pcs)",
            "description": "Velvety hung curd patties stuffed with caramelized mint and pomegranate, cooked on low griddle.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000204",
                "menuItemId": "d0000000-0000-0000-0000-000000000368",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000433",
                    "groupId": "e0000000-0000-0000-0000-000000000204",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000434",
                    "groupId": "e0000000-0000-0000-0000-000000000204",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000205",
                "menuItemId": "d0000000-0000-0000-0000-000000000368",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000435",
                    "groupId": "e0000000-0000-0000-0000-000000000205",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000436",
                    "groupId": "e0000000-0000-0000-0000-000000000205",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000369",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000001",
            "name": "Murgh Nizami Boti Kebab",
            "description": "Boneless chicken cubes steeped in saffron, mace, and royal cumin, charcoal grilled.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000206",
                "menuItemId": "d0000000-0000-0000-0000-000000000369",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000437",
                    "groupId": "e0000000-0000-0000-0000-000000000206",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000438",
                    "groupId": "e0000000-0000-0000-0000-000000000206",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000207",
                "menuItemId": "d0000000-0000-0000-0000-000000000369",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000439",
                    "groupId": "e0000000-0000-0000-0000-000000000207",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000440",
                    "groupId": "e0000000-0000-0000-0000-000000000207",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000370",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000001",
            "name": "Subz Moti Seekh",
            "description": "Spiced vegetable and cottage cheese skewers coated with crisp pearls of roasted corn.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0025-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000025",
        "name": "Palatial Shahi Mains",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000371",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000002",
            "name": "Kacchi Dum Gosht Biryani Khaas",
            "description": "Aged basmati layered with tender baby lamb marinated in royal spices, slow-steamed in a sealed earthenware degh.",
            "price": 980,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000208",
                "menuItemId": "d0000000-0000-0000-0000-000000000371",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000441",
                    "groupId": "e0000000-0000-0000-0000-000000000208",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000442",
                    "groupId": "e0000000-0000-0000-0000-000000000208",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 735,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000209",
                "menuItemId": "d0000000-0000-0000-0000-000000000371",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000443",
                    "groupId": "e0000000-0000-0000-0000-000000000209",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000444",
                    "groupId": "e0000000-0000-0000-0000-000000000209",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000372",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000002",
            "name": "Murgh Dum Korma Jahanara",
            "description": "Chicken simmered in velvety almond, cashew, and saffron gravy with fragrant screwpine essence.",
            "price": 790,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000210",
                "menuItemId": "d0000000-0000-0000-0000-000000000372",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000445",
                    "groupId": "e0000000-0000-0000-0000-000000000210",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000446",
                    "groupId": "e0000000-0000-0000-0000-000000000210",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000447",
                    "groupId": "e0000000-0000-0000-0000-000000000210",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000373",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000002",
            "name": "Nalli Nihari Asaf Jahi",
            "description": "Pot-roasted lamb shanks simmered overnight in 32-herb broth with bone marrow garnish.",
            "price": 1150,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 32,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000374",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000002",
            "name": "Paneer Kundan Qaliya",
            "description": "Silken cottage cheese batons cooked in yellow chili, melon seed, and saffron reduction.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0025-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000025",
        "name": "Shahi Breads & Pulao",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000375",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000003",
            "name": "Zafrani Sheermal (2 pcs)",
            "description": "Royal saffron flatbread enriched with milk, butter, and green cardamom.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000376",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000003",
            "name": "Warqi Paratha (2 pcs)",
            "description": "Crisp multi-layered bread baked on copper tawa.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000377",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000003",
            "name": "Subz Moti Pulao Handi",
            "description": "Aged basmati rice cooked with winter vegetables, baby corn, and aromatic kewra.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000211",
                "menuItemId": "d0000000-0000-0000-0000-000000000377",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000448",
                    "groupId": "e0000000-0000-0000-0000-000000000211",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000449",
                    "groupId": "e0000000-0000-0000-0000-000000000211",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 405,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000212",
                "menuItemId": "d0000000-0000-0000-0000-000000000377",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000450",
                    "groupId": "e0000000-0000-0000-0000-000000000212",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000451",
                    "groupId": "e0000000-0000-0000-0000-000000000212",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000378",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000003",
            "name": "Mirchi Ka Salan Khaas",
            "description": "Royal Bhavnagri chili gravy enriched with roasted sesame and coconut paste.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0025-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000025",
        "name": "Royal Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000379",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000004",
            "name": "Anokhi Kheer (Royal Garlic Dessert)",
            "description": "Candidate garlic cloves blanched seven times and simmered in sweet condensed milk with silver leaf.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000380",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000004",
            "name": "Khubani Ka Meetha with Clotted Malai",
            "description": "Stewed Turkish apricots with clotted cream and roasted almond slivers.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000381",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000004",
            "name": "Badam Ka Harira (Almond Elixir)",
            "description": "Warm comforting almond and cardamom drink simmered with pure ghee.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000026",
    "name": "AB's - Absolute Barbecues",
    "slug": "absolute-barbecues",
    "tagline": "Live table grills, Wish Grill & barbecue feast",
    "description": "The energetic barbecue pioneer in Madhapur featuring live charcoal table skewers, Brazilian churrasco pineapple, and exotic meats.",
    "coverImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 2210,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 350,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 22, Inorbit Mall Road, Vittal Rao Nagar, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4385,
    "longitude": 78.3871,
    "cuisines": [
      {
        "id": "c0000014-0000-0000-0000-000000000014",
        "name": "Craft Brewery & Gastropub",
        "slug": "craft-brewery",
        "icon": "Beer"
      },
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0026-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000026",
        "name": "Live Grill Skewers & Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000382",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "Cinnamon Spiced Churrasco Pineapple",
            "description": "Brazilian-style roasted pineapple skewers glazed with cinnamon sugar and honey.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000383",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "ABs Peri Peri Grilled Chicken Skewers",
            "description": "Chicken chunks marinated in tangy peri-peri dry rub and char-grilled.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000384",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "Country BBQ Wings (6 pcs)",
            "description": "Crisp chicken wings tossed in smoky hickory barbecue glaze.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000385",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "Coastal BBQ Prawns Skewers",
            "description": "Prawns marinated with curry leaves and coastal spices, grilled over live charcoal.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0026-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000026",
        "name": "Mains & Biryanis",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000386",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000002",
            "name": "ABs Signature Chicken Dum Biryani Bowl",
            "description": "Rich spiced biryani rice layered with tandoor grilled chicken and boiled egg.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000213",
                "menuItemId": "d0000000-0000-0000-0000-000000000386",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000452",
                    "groupId": "e0000000-0000-0000-0000-000000000213",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000453",
                    "groupId": "e0000000-0000-0000-0000-000000000213",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 293,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000214",
                "menuItemId": "d0000000-0000-0000-0000-000000000386",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000454",
                    "groupId": "e0000000-0000-0000-0000-000000000214",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000455",
                    "groupId": "e0000000-0000-0000-0000-000000000214",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000387",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000002",
            "name": "Mutton Rogan Josh Special",
            "description": "Kashmiri style slow-simmered tender lamb curry.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000388",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000002",
            "name": "Paneer Butter Masala",
            "description": "Cottage cheese cubes in creamy tomato and butter gravy.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000389",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000002",
            "name": "Dal Makhani Smokey Handi",
            "description": "Slow cooked black lentils with churned butter and cream.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000215",
                "menuItemId": "d0000000-0000-0000-0000-000000000389",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000456",
                    "groupId": "e0000000-0000-0000-0000-000000000215",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000457",
                    "groupId": "e0000000-0000-0000-0000-000000000215",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000458",
                    "groupId": "e0000000-0000-0000-0000-000000000215",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0026-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000026",
        "name": "Breads & Rice",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000390",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000003",
            "name": "Garlic Butter Naan (2 pcs)",
            "description": "Tandoor baked leavened bread brushed with garlic and butter.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000391",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000003",
            "name": "Lacha Paratha (2 pcs)",
            "description": "Multi-layered flaky wheat bread.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000392",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000003",
            "name": "Jeera Rice with Fried Onions",
            "description": "Steamed basmati rice tempered with roasted cumin seeds.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0026-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000026",
        "name": "Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000393",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000004",
            "name": "Hot Angoori Gulab Jamun (6 mini pcs)",
            "description": "Mini cottage cheese balls soaked in warm rose syrup.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000394",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000004",
            "name": "Cold Nitrogen Brownie Delight",
            "description": "Dense fudge brownie topped with dark chocolate sauce.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000395",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000004",
            "name": "Mango Lassi Bottle",
            "description": "Creamy yogurt churned with Alphonso mango pulp.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000027",
    "name": "Exotica",
    "slug": "exotica",
    "tagline": "Rooftop green sanctuary with North Indian & Mughlai fine dining",
    "description": "A lush rooftop garden haven on Road No. 12, Banjara Hills, celebrated for fragrant tandoori kebabs, royal Mughlai curries, and panoramic city views.",
    "coverImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 1390,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 450,
    "deliveryFee": 60,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "5th Floor, 12th Square, Road No. 12, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4162,
    "longitude": 78.4348,
    "cuisines": [
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      },
      {
        "id": "c0000011-0000-0000-0000-000000000011",
        "name": "Modern Indian Bistro",
        "slug": "modern-indian",
        "icon": "Sparkles"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0027-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000027",
        "name": "Sigri Kebabs & Charcoal Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000396",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000001",
            "name": "Murgh Malai Kebab Exotica",
            "description": "Chicken supreme marinated in cream cheese, cardamom, and roasted garlic, cooked over white coals.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000216",
                "menuItemId": "d0000000-0000-0000-0000-000000000396",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000459",
                    "groupId": "e0000000-0000-0000-0000-000000000216",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000460",
                    "groupId": "e0000000-0000-0000-0000-000000000216",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000217",
                "menuItemId": "d0000000-0000-0000-0000-000000000396",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000461",
                    "groupId": "e0000000-0000-0000-0000-000000000217",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000462",
                    "groupId": "e0000000-0000-0000-0000-000000000217",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000397",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000001",
            "name": "Zafrani Paneer Tikka (4 pcs)",
            "description": "Thick cubes of cottage cheese soaked in saffron marinade, grilled with bell peppers.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000218",
                "menuItemId": "d0000000-0000-0000-0000-000000000397",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000463",
                    "groupId": "e0000000-0000-0000-0000-000000000218",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000464",
                    "groupId": "e0000000-0000-0000-0000-000000000218",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000219",
                "menuItemId": "d0000000-0000-0000-0000-000000000397",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000465",
                    "groupId": "e0000000-0000-0000-0000-000000000219",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000466",
                    "groupId": "e0000000-0000-0000-0000-000000000219",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000398",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000001",
            "name": "Kakori Kebab (4 pcs)",
            "description": "Tender minced mutton rolls with clove smoke and rose water essence.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000220",
                "menuItemId": "d0000000-0000-0000-0000-000000000398",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000467",
                    "groupId": "e0000000-0000-0000-0000-000000000220",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000468",
                    "groupId": "e0000000-0000-0000-0000-000000000220",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000221",
                "menuItemId": "d0000000-0000-0000-0000-000000000398",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000469",
                    "groupId": "e0000000-0000-0000-0000-000000000221",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000470",
                    "groupId": "e0000000-0000-0000-0000-000000000221",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000399",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000001",
            "name": "Tandoori Soya Chaap",
            "description": "Soya ribs marinated in spicy hung curd and roasted in clay tandoor.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0027-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000027",
        "name": "Mughlai & Heritage Mains",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000400",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000002",
            "name": "Exotica Special Dal Makhani",
            "description": "Overnight charcoal simmered whole urad dal with churned butter and cream.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000222",
                "menuItemId": "d0000000-0000-0000-0000-000000000400",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000471",
                    "groupId": "e0000000-0000-0000-0000-000000000222",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000472",
                    "groupId": "e0000000-0000-0000-0000-000000000222",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000473",
                    "groupId": "e0000000-0000-0000-0000-000000000222",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000401",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000002",
            "name": "Murgh Tikka Butter Masala",
            "description": "Tandoori chicken tikka pieces simmered in sweet-spicy makhani gravy.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000223",
                "menuItemId": "d0000000-0000-0000-0000-000000000401",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000474",
                    "groupId": "e0000000-0000-0000-0000-000000000223",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000475",
                    "groupId": "e0000000-0000-0000-0000-000000000223",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000224",
                "menuItemId": "d0000000-0000-0000-0000-000000000401",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000476",
                    "groupId": "e0000000-0000-0000-0000-000000000224",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000477",
                    "groupId": "e0000000-0000-0000-0000-000000000224",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000402",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000002",
            "name": "Rara Gosht Punjabi Style",
            "description": "Mutton pieces slow-cooked in a spicy minced mutton gravy.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000403",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000002",
            "name": "Paneer Tikka Lababdar",
            "description": "Charred paneer cubes in chunky onion tomato gravy with grated cheese.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000225",
                "menuItemId": "d0000000-0000-0000-0000-000000000403",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000478",
                    "groupId": "e0000000-0000-0000-0000-000000000225",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000479",
                    "groupId": "e0000000-0000-0000-0000-000000000225",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000226",
                "menuItemId": "d0000000-0000-0000-0000-000000000403",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000480",
                    "groupId": "e0000000-0000-0000-0000-000000000226",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000481",
                    "groupId": "e0000000-0000-0000-0000-000000000226",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0027-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000027",
        "name": "Rice, Dum Biryani & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000404",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000003",
            "name": "Gosht Dum Biryani Handi",
            "description": "Tender mutton pieces cooked in sealed pot with long-grain basmati and spices.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000227",
                "menuItemId": "d0000000-0000-0000-0000-000000000404",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000482",
                    "groupId": "e0000000-0000-0000-0000-000000000227",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000483",
                    "groupId": "e0000000-0000-0000-0000-000000000227",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 465,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000228",
                "menuItemId": "d0000000-0000-0000-0000-000000000404",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000484",
                    "groupId": "e0000000-0000-0000-0000-000000000228",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000485",
                    "groupId": "e0000000-0000-0000-0000-000000000228",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000405",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000003",
            "name": "Murgh Dum Biryani Handi",
            "description": "Aromatic chicken biryani cooked on slow charcoal dum.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000229",
                "menuItemId": "d0000000-0000-0000-0000-000000000405",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000486",
                    "groupId": "e0000000-0000-0000-0000-000000000229",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000487",
                    "groupId": "e0000000-0000-0000-0000-000000000229",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 390,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000230",
                "menuItemId": "d0000000-0000-0000-0000-000000000405",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000488",
                    "groupId": "e0000000-0000-0000-0000-000000000230",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000489",
                    "groupId": "e0000000-0000-0000-0000-000000000230",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000406",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000003",
            "name": "Garlic Butter Naan (2 pcs)",
            "description": "Clay oven flatbread brushed with garlic butter.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000407",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000003",
            "name": "Kashmiri Naan (Dry Fruit Stuffed)",
            "description": "Tandoor bread stuffed with sweetened dry fruits and nuts.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0027-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000027",
        "name": "Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000408",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000004",
            "name": "Zafrani Kesar Phirni",
            "description": "Chilled ground rice pudding cooked with Kashmiri saffron and almonds.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000409",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000004",
            "name": "Gulab Jamun with Ice Cream",
            "description": "Hot khoya dumplings served with vanilla ice cream.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000410",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000004",
            "name": "Fresh Mint Lime Cooler",
            "description": "Muddled mint leaves, lime juice, and chilled soda.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000028",
    "name": "Little Italy",
    "slug": "little-italy",
    "tagline": "Authentic gourmet Italian cuisine — 100% pure vegetarian",
    "description": "Hyderabad’s premier pure-vegetarian Italian fine-dining landmark, serving wood-fired thin crust pizzas, handmade pastas, and gourmet fondues since 2002.",
    "coverImage": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 1450,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 400,
    "deliveryFee": 55,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 256, Apollo Hospital Road, Film Nagar",
    "city": "Hyderabad",
    "latitude": 17.4205,
    "longitude": 78.4112,
    "cuisines": [
      {
        "id": "c0000003-0000-0000-0000-000000000003",
        "name": "Artisanal Italian",
        "slug": "artisanal-italian",
        "icon": "Pizza"
      },
      {
        "id": "c0000013-0000-0000-0000-000000000013",
        "name": "Pure Vegetarian Gourmet",
        "slug": "pure-vegetarian",
        "icon": "Leaf"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0028-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000028",
        "name": "Antipasti & Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000411",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000001",
            "name": "Nachos with Warm Cheese Sauce & Salsa",
            "description": "Crisp corn tortilla chips served with refried beans, jalapenos, and molten cheddar fondue.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000412",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000001",
            "name": "Bruschetta al Pomodoro",
            "description": "Toasted country bread slices topped with marinated tomatoes, garlic, basil, and EVOO.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000413",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000001",
            "name": "Funghi Trifolati",
            "description": "Fresh button mushrooms sauteed in garlic, olive oil, white wine, and fresh parsley.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000414",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000001",
            "name": "Garlic Bread with Melted Cheese",
            "description": "Crisp baguette baked with herb butter and golden melted mozzarella.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0028-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000028",
        "name": "Wood-Fired Pizzas",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000415",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000002",
            "name": "Pizza Sicilia",
            "description": "Spicy sun-dried tomatoes, pickled jalapenos, baby corn, capers, and mozzarella.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000231",
                "menuItemId": "d0000000-0000-0000-0000-000000000415",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000490",
                    "groupId": "e0000000-0000-0000-0000-000000000231",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000491",
                    "groupId": "e0000000-0000-0000-0000-000000000231",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000232",
                "menuItemId": "d0000000-0000-0000-0000-000000000415",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000492",
                    "groupId": "e0000000-0000-0000-0000-000000000232",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000493",
                    "groupId": "e0000000-0000-0000-0000-000000000232",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000416",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000002",
            "name": "Pizza Bellassai",
            "description": "Spicy tomato sauce, mozzarella, mushrooms, garlic, and fresh basil.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000233",
                "menuItemId": "d0000000-0000-0000-0000-000000000416",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000494",
                    "groupId": "e0000000-0000-0000-0000-000000000233",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000495",
                    "groupId": "e0000000-0000-0000-0000-000000000233",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000234",
                "menuItemId": "d0000000-0000-0000-0000-000000000416",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000496",
                    "groupId": "e0000000-0000-0000-0000-000000000234",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000497",
                    "groupId": "e0000000-0000-0000-0000-000000000234",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000417",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000002",
            "name": "Pizza Mellino",
            "description": "Fresh spinach, sun-dried tomatoes, roasted garlic, and creamy goat cheese.",
            "price": 690,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000235",
                "menuItemId": "d0000000-0000-0000-0000-000000000417",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000498",
                    "groupId": "e0000000-0000-0000-0000-000000000235",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000499",
                    "groupId": "e0000000-0000-0000-0000-000000000235",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000236",
                "menuItemId": "d0000000-0000-0000-0000-000000000417",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000500",
                    "groupId": "e0000000-0000-0000-0000-000000000236",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000501",
                    "groupId": "e0000000-0000-0000-0000-000000000236",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000418",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000002",
            "name": "Pizza Margherita Classica",
            "description": "Tomato sauce, mozzarella cheese, and sweet basil.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000237",
                "menuItemId": "d0000000-0000-0000-0000-000000000418",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000502",
                    "groupId": "e0000000-0000-0000-0000-000000000237",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000503",
                    "groupId": "e0000000-0000-0000-0000-000000000237",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000238",
                "menuItemId": "d0000000-0000-0000-0000-000000000418",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000504",
                    "groupId": "e0000000-0000-0000-0000-000000000238",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000505",
                    "groupId": "e0000000-0000-0000-0000-000000000238",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0028-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000028",
        "name": "Artisanal Pasta & Risotto",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000419",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000003",
            "name": "Pasta Barbaresca",
            "description": "Penne tossed with sun-dried tomatoes, broccoli, garlic, and creamy tomato sauce.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000420",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000003",
            "name": "Pasta Al Forno (Baked Pasta)",
            "description": "Layers of pasta, bechamel sauce, vegetables, and mozzarella baked golden.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000421",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000003",
            "name": "Risotto ai Funghi",
            "description": "Arborio rice cooked in vegetable stock with porcini mushrooms and parmesan.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000422",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000003",
            "name": "Ravioli Burro e Salvia",
            "description": "Handmade pasta stuffed with spinach and ricotta, tossed in sage butter.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0028-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000028",
        "name": "Dolci & Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000423",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000004",
            "name": "Tiramisu Italiano",
            "description": "Classic Italian dessert with ladyfingers and whipped mascarpone cream.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000424",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000004",
            "name": "Warm Chocolate Fudge Brownie",
            "description": "Rich chocolate brownie with molten chocolate drizzle.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000425",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000004",
            "name": "Peach Iced Tea",
            "description": "Freshly brewed iced black tea with sweet peach syrup.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000029",
    "name": "Churrolto",
    "slug": "churrolto",
    "tagline": "Spanish artisanal churros & global bistro kitchen",
    "description": "Hyderabad’s premier destination for crisp golden Spanish churros dipped in warm Belgian chocolates, gourmet burgers, thin pizzas, and Spanish paella.",
    "coverImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 1720,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 282/A, Road No. 10, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4178,
    "longitude": 78.4372,
    "cuisines": [
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0029-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000029",
        "name": "Artisanal Spanish Churros",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000426",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000001",
            "name": "Classic Cinnamon Churros with Belgian Chocolate",
            "description": "Crisp golden piped churros dusted in cinnamon sugar, served with molten dark chocolate dip.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000427",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000001",
            "name": "Stuffed Nutella Churros (3 pcs)",
            "description": "Giant churros piped internally with warm creamy Nutella hazelnut spread.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000428",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000001",
            "name": "Dulce de Leche Churro Bites",
            "description": "Bite-sized crispy churros tossed in warm caramelized milk dulce de leche.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000429",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000001",
            "name": "Ruby Chocolate Churro Platter",
            "description": "Assorted churros paired with ruby berry chocolate dip and toasted pistachios.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000239",
                "menuItemId": "d0000000-0000-0000-0000-000000000429",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000506",
                    "groupId": "e0000000-0000-0000-0000-000000000239",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000507",
                    "groupId": "e0000000-0000-0000-0000-000000000239",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000508",
                    "groupId": "e0000000-0000-0000-0000-000000000239",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0029-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000029",
        "name": "Gourmet Tapas & Starters",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000430",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000002",
            "name": "Truffle Parmesan Hand-Cut Fries",
            "description": "Crisp hand-cut potato batons tossed in white truffle oil, grated parmesan, and rosemary.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000431",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000002",
            "name": "Spanish Chicken Croquettes (4 pcs)",
            "description": "Crispy fried panko croquettes stuffed with shredded chicken and creamy bechamel.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000432",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000002",
            "name": "Charred Corn & Jalapeno Quesadilla",
            "description": "Folded toasted tortilla stuffed with cheddar, corn, jalapenos, and sour cream.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000433",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000002",
            "name": "Peri Peri Crispy Calamari",
            "description": "Tender squid rings fried crisp with citrus mayo.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0029-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000029",
        "name": "Bistro Mains & Pasta",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000434",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000003",
            "name": "Spanish Vegetable Paella",
            "description": "Saffron-infused bomba rice cooked in shallow pan with bell peppers, artichokes, and peas.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000435",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000003",
            "name": "Chicken Pesto Fettuccine",
            "description": "Grilled chicken strips and ribbon pasta tossed in pine nut basil pesto cream.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000436",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000003",
            "name": "Smash Bacon Cheeseburger",
            "description": "Crisp pressed beef/mutton patty with melted cheese, gherkins, and special sauce in brioche bun.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000437",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000003",
            "name": "Wild Mushroom Risotto Bowl",
            "description": "Creamy arborio rice with sauteed portobello and parmesan crisps.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0029-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000029",
        "name": "Beverages",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000438",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000004",
            "name": "Spanish Hot Chocolate Thick Sip",
            "description": "Velvety, ultra-thick dark chocolate drink made with 70% cocoa.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000439",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000004",
            "name": "Iced Hazelnut Frappe",
            "description": "Blended espresso with roasted hazelnut syrup and whipped cream.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000440",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000004",
            "name": "Passionfruit Mint Lemonade",
            "description": "Chilled passionfruit puree, fresh mint, and sparkling soda.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000030",
    "name": "Flechazo",
    "slug": "flechazo",
    "tagline": "Mediterranean warmth & Pan-Asian feast buffet",
    "description": "An interactive Mediterranean and Asian culinary destination in Madhapur, featuring wood-fired thin crust pizzas, shawarma live counters, and Asian dim sums.",
    "coverImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 1480,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 350,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "2nd Floor, Sun Towers, HUDA Techno Enclave, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4432,
    "longitude": 78.3895,
    "cuisines": [
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      },
      {
        "id": "c0000010-0000-0000-0000-000000000010",
        "name": "Pan-Asian & Dim Sum",
        "slug": "pan-asian",
        "icon": "Utensils"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0030-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000030",
        "name": "Mediterranean Tapas & Shawarma",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000441",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000001",
            "name": "Chicken Shawarma Wrap with Garlic Toum",
            "description": "Rotisserie carved spiced chicken wrapped in soft pita with pickled turnips, fries, and garlic sauce.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000240",
                "menuItemId": "d0000000-0000-0000-0000-000000000441",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000509",
                    "groupId": "e0000000-0000-0000-0000-000000000240",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000510",
                    "groupId": "e0000000-0000-0000-0000-000000000240",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000442",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000001",
            "name": "Falafel Pita Pocket with Hummus",
            "description": "Crisp chickpea balls stuffed in pita with tahini, parsley, and sumac onions.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000443",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000001",
            "name": "Mezze Platter Trio",
            "description": "Classic hummus, beetroot moutabal, and tzatziki served with warm pita triangles.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000241",
                "menuItemId": "d0000000-0000-0000-0000-000000000443",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000511",
                    "groupId": "e0000000-0000-0000-0000-000000000241",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000512",
                    "groupId": "e0000000-0000-0000-0000-000000000241",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000513",
                    "groupId": "e0000000-0000-0000-0000-000000000241",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000444",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000001",
            "name": "Smoked Chicken Wings (6 pcs)",
            "description": "Charred wings tossed in honey sriracha glaze.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0030-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000030",
        "name": "Pizzas & Asian Wok",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000445",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000002",
            "name": "Barbecue Chicken Thin Crust Pizza",
            "description": "Smoked chicken, red onions, cilantro, and mozzarella on crispy dough.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000242",
                "menuItemId": "d0000000-0000-0000-0000-000000000445",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000514",
                    "groupId": "e0000000-0000-0000-0000-000000000242",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000515",
                    "groupId": "e0000000-0000-0000-0000-000000000242",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000243",
                "menuItemId": "d0000000-0000-0000-0000-000000000445",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000516",
                    "groupId": "e0000000-0000-0000-0000-000000000243",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000517",
                    "groupId": "e0000000-0000-0000-0000-000000000243",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000446",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000002",
            "name": "Margherita Thin Crust Pizza",
            "description": "Tomato sauce, fresh basil, and mozzarella.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000244",
                "menuItemId": "d0000000-0000-0000-0000-000000000446",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000518",
                    "groupId": "e0000000-0000-0000-0000-000000000244",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000519",
                    "groupId": "e0000000-0000-0000-0000-000000000244",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000245",
                "menuItemId": "d0000000-0000-0000-0000-000000000446",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000520",
                    "groupId": "e0000000-0000-0000-0000-000000000245",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000521",
                    "groupId": "e0000000-0000-0000-0000-000000000245",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000447",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000002",
            "name": "Chilli Garlic Chicken Fried Rice",
            "description": "Wok-tossed jasmine rice with shredded chicken, burnt garlic, and scallions.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000448",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000002",
            "name": "Veg Hakka Noodles with Bok Choy",
            "description": "Stir-fried noodles with Asian greens and light soy.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0030-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000030",
        "name": "Indian & Regional Curries",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000449",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000003",
            "name": "Mutton Dum Biryani Bowl",
            "description": "Fragrant basmati cooked with tender spiced mutton.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000246",
                "menuItemId": "d0000000-0000-0000-0000-000000000449",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000522",
                    "groupId": "e0000000-0000-0000-0000-000000000246",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000523",
                    "groupId": "e0000000-0000-0000-0000-000000000246",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 360,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000247",
                "menuItemId": "d0000000-0000-0000-0000-000000000449",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000524",
                    "groupId": "e0000000-0000-0000-0000-000000000247",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000525",
                    "groupId": "e0000000-0000-0000-0000-000000000247",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000450",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000003",
            "name": "Butter Chicken Gravy",
            "description": "Classic creamy makhani chicken curry.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000248",
                "menuItemId": "d0000000-0000-0000-0000-000000000450",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000526",
                    "groupId": "e0000000-0000-0000-0000-000000000248",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000527",
                    "groupId": "e0000000-0000-0000-0000-000000000248",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000528",
                    "groupId": "e0000000-0000-0000-0000-000000000248",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000451",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000003",
            "name": "Paneer Tikka Masala",
            "description": "Charred paneer cubes in spiced tomato gravy.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000249",
                "menuItemId": "d0000000-0000-0000-0000-000000000451",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000529",
                    "groupId": "e0000000-0000-0000-0000-000000000249",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000530",
                    "groupId": "e0000000-0000-0000-0000-000000000249",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000250",
                "menuItemId": "d0000000-0000-0000-0000-000000000451",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000531",
                    "groupId": "e0000000-0000-0000-0000-000000000250",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000532",
                    "groupId": "e0000000-0000-0000-0000-000000000250",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000452",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000003",
            "name": "Butter Naan (2 pcs)",
            "description": "Tandoor leavened flatbread.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0030-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000030",
        "name": "Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000453",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000004",
            "name": "Nutella Brownie Tub",
            "description": "Warm brownie smothered in hazelnut chocolate spread.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000454",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000004",
            "name": "Gulab Jamun (2 pcs)",
            "description": "Sweet milk dumplings in cardamom syrup.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000455",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000004",
            "name": "Blueberry Iced Slush",
            "description": "Crushed ice cooler with blueberry fruit puree.",
            "price": 170,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000031",
    "name": "Autumn Leaf Cafe",
    "slug": "autumn-leaf-cafe",
    "tagline": "Lush garden courtyard bistro & artisanal breakfast",
    "description": "A charming open-air heritage courtyard cafe nestled in Jubilee Hills, celebrated for European breakfast platters, Eggs Florentine, fresh salads, and wholesome comfort bakes.",
    "coverImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 1190,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 300,
    "deliveryFee": 50,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 823, Road No. 41, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4292,
    "longitude": 78.4095,
    "cuisines": [
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0031-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000031",
        "name": "Artisanal Breakfast & Eggs",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000456",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000001",
            "name": "Eggs Florentine on Brioche",
            "description": "Poached farm eggs over buttered English brioche with sauteed spinach, creamy hollandaise, and paprika.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000457",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000001",
            "name": "Avocado Toast with Crumbled Feta",
            "description": "Toasted seeded sourdough with smashed avocado, cherry tomatoes, and microgreens.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000458",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000001",
            "name": "Classic Fluffy Pancakes with Maple Syrup",
            "description": "Stack of 3 golden buttermilk pancakes with butter and genuine Canadian maple syrup.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000459",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000001",
            "name": "Shakshuka with Warm Sourdough",
            "description": "Middle Eastern baked eggs in spiced tomato-bell pepper ragout with crumbled goat cheese.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6eb22509?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0031-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000031",
        "name": "Gourmet Sandwiches & Burgers",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000460",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000002",
            "name": "Smoked Chicken & Pesto Panini",
            "description": "Grilled chicken breast, sundried tomato, fresh mozzarella, and basil pesto in ciabatta.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000461",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000002",
            "name": "Grilled Mediterranean Veggie Sandwich",
            "description": "Charred zucchini, bell peppers, balsamic mushrooms, and hummus on multigrain bread.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000462",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000002",
            "name": "Gourmet Lamb Burger with Caramelized Onions",
            "description": "Juicy spiced lamb patty with cheddar, caramelized shallots, and herb fries.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000463",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000002",
            "name": "Crispy Halloumi Fries with Dip",
            "description": "Golden fried halloumi cheese batons with zaatar herb mayo.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0031-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000031",
        "name": "Pastas & Mains",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000464",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000003",
            "name": "Handcrafted Spinach Ricotta Ravioli",
            "description": "Ravioli in walnut sage butter with grated parmesan.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000465",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000003",
            "name": "Grilled Herb Crusted Fish Fillet",
            "description": "Fresh pan-seared river fish with lemon-caper butter and roasted baby potatoes.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000466",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000003",
            "name": "Wild Mushroom Cream Penne",
            "description": "Penne pasta in roasted garlic and porcini mushroom cream sauce.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0031-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000031",
        "name": "Desserts & Artisan Brews",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000467",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000004",
            "name": "Warm Apple Cinnamon Crumble with Ice Cream",
            "description": "Stewed spiced Granny Smith apples topped with toasted oat crumble and vanilla bean gelato.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000468",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000004",
            "name": "Dark Chocolate Sea Salt Tart",
            "description": "Ganache tart finished with flakes of Cornish sea salt.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000469",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000004",
            "name": "Rose Petal Cold Brew Latte",
            "description": "Cold-steeped coffee with natural Damascena rose extract and oat milk.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000251",
                "menuItemId": "d0000000-0000-0000-0000-000000000469",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000533",
                    "groupId": "e0000000-0000-0000-0000-000000000251",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000534",
                    "groupId": "e0000000-0000-0000-0000-000000000251",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000535",
                    "groupId": "e0000000-0000-0000-0000-000000000251",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000032",
    "name": "Telangana Spice Kitchen",
    "slug": "telangana-spice-kitchen",
    "tagline": "Authentic rustic Telangana cuisine & Highway spices",
    "description": "Located in Gachibowli near DLF, dedicated to unadulterated Telangana regional cooking: Golichina Mamsam, Jowar Rotis, Pachi Pulusu, and Warangal pepper chicken.",
    "coverImage": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 1350,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 350,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Gachibowli - Miyapur Road, Opp. DLF Gate 3, Gachibowli",
    "city": "Hyderabad",
    "latitude": 17.4428,
    "longitude": 78.3562,
    "cuisines": [
      {
        "id": "c0000005-0000-0000-0000-000000000005",
        "name": "Telangana Heritage",
        "slug": "telangana-heritage",
        "icon": "Flame"
      },
      {
        "id": "c0000006-0000-0000-0000-000000000006",
        "name": "Andhra & Rayalaseema",
        "slug": "andhra-rayalaseema",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0032-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000032",
        "name": "Telangana Special Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000470",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000001",
            "name": "Golichina Mamsam (Mutton Roast)",
            "description": "Tender baby goat cubes pan-seared with caramelized shallots, Warangal red chilies, and curry leaves.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000471",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000001",
            "name": "Miriyala Kodi Vepudu (Pepper Chicken)",
            "description": "Bone-in country chicken tossed with black pepper, garlic, and curry leaves in iron kadai.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000252",
                "menuItemId": "d0000000-0000-0000-0000-000000000471",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000536",
                    "groupId": "e0000000-0000-0000-0000-000000000252",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000537",
                    "groupId": "e0000000-0000-0000-0000-000000000252",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000253",
                "menuItemId": "d0000000-0000-0000-0000-000000000471",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000538",
                    "groupId": "e0000000-0000-0000-0000-000000000253",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000539",
                    "groupId": "e0000000-0000-0000-0000-000000000253",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000472",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000001",
            "name": "Makka Garelu (Corn Vada - 4 pcs)",
            "description": "Traditional Telangana spiced sweet corn fritters fried crispy, served with tomato chutney.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000473",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000001",
            "name": "Royyala Vepudu (Spicy Prawn Fry)",
            "description": "Fresh river prawns pan-roasted with pounded dry red chili and cumin paste.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000254",
                "menuItemId": "d0000000-0000-0000-0000-000000000473",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000540",
                    "groupId": "e0000000-0000-0000-0000-000000000254",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000541",
                    "groupId": "e0000000-0000-0000-0000-000000000254",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000255",
                "menuItemId": "d0000000-0000-0000-0000-000000000473",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000542",
                    "groupId": "e0000000-0000-0000-0000-000000000255",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000543",
                    "groupId": "e0000000-0000-0000-0000-000000000255",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0032-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000032",
        "name": "Rustic Curries & Stews",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000474",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000002",
            "name": "Telangana Natu Kodi Pulusu",
            "description": "Country chicken simmered in fiery red gravy with ginger, garlic, and whole spices.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000256",
                "menuItemId": "d0000000-0000-0000-0000-000000000474",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000544",
                    "groupId": "e0000000-0000-0000-0000-000000000256",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000545",
                    "groupId": "e0000000-0000-0000-0000-000000000256",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000546",
                    "groupId": "e0000000-0000-0000-0000-000000000256",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000475",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000002",
            "name": "Pachi Pulusu (Raw Tamarind Rasam)",
            "description": "Charred onion and tamarind cooling soup seasoned with cumin, mustard, and green chili.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000257",
                "menuItemId": "d0000000-0000-0000-0000-000000000475",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000547",
                    "groupId": "e0000000-0000-0000-0000-000000000257",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000548",
                    "groupId": "e0000000-0000-0000-0000-000000000257",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000549",
                    "groupId": "e0000000-0000-0000-0000-000000000257",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000476",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000002",
            "name": "Mutton Dalcha",
            "description": "Tender mutton cooked with chana dal, bottle gourd, and sour tamarind paste.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000258",
                "menuItemId": "d0000000-0000-0000-0000-000000000476",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000550",
                    "groupId": "e0000000-0000-0000-0000-000000000258",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000551",
                    "groupId": "e0000000-0000-0000-0000-000000000258",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000552",
                    "groupId": "e0000000-0000-0000-0000-000000000258",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000477",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000002",
            "name": "Tomato Kura with Desi Ghee",
            "description": "Slow-stewed country tomatoes cooked with mustard seeds and curry leaves.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0032-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000032",
        "name": "Bagara Rice & Roti",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000478",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000003",
            "name": "Telangana Bagara Rice Pot",
            "description": "Fragrant short-grain rice tempered with whole spices, caramelized shallots, mint, and pure ghee.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000479",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000003",
            "name": "Jowar Roti (2 pcs)",
            "description": "Hand-patted sorghum flatbread cooked on clay griddle.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000480",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000003",
            "name": "Saddi Annam (Fermented Rice Bowl)",
            "description": "Overnight fermented rice with shallots and churned curd.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0032-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000032",
        "name": "Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000481",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000004",
            "name": "Bellam Paramannam (Sweet Pongal)",
            "description": "Short grain rice and moong dal simmered in pure jaggery, cardamom, and ghee.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000482",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000004",
            "name": "Sunnundalu with Ghee (2 pcs)",
            "description": "Traditional roasted urad dal and jaggery laddu.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000259",
                "menuItemId": "d0000000-0000-0000-0000-000000000482",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000553",
                    "groupId": "e0000000-0000-0000-0000-000000000259",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000554",
                    "groupId": "e0000000-0000-0000-0000-000000000259",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000555",
                    "groupId": "e0000000-0000-0000-0000-000000000259",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000483",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000004",
            "name": "Allam Majjiga (Ginger Buttermilk)",
            "description": "Fresh churned buttermilk with pounded ginger and green chilies.",
            "price": 70,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000033",
    "name": "Platform 65",
    "slug": "platform-65",
    "tagline": "Train-themed multi-cuisine & authentic Andhra kitchen",
    "description": "Hyderabad’s celebrated toy-train dining concept in Kondapur, delivering steaming hot Potlam Biryani, Kaju Paneer Biryani, and spicy coastal curries.",
    "coverImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 1840,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "3rd Floor, PNR Empire, Near Kothaguda Junction, Kondapur",
    "city": "Hyderabad",
    "latitude": 17.4642,
    "longitude": 78.3615,
    "cuisines": [
      {
        "id": "c0000006-0000-0000-0000-000000000006",
        "name": "Andhra & Rayalaseema",
        "slug": "andhra-rayalaseema",
        "icon": "Flame"
      },
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0033-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000033",
        "name": "Express Biryanis & Pulaos",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000484",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000001",
            "name": "Potlam Biryani (Omelette Wrapped Mutton)",
            "description": "Spiced minced and bone-in mutton biryani encased in a thin golden egg crepe.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000260",
                "menuItemId": "d0000000-0000-0000-0000-000000000484",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000556",
                    "groupId": "e0000000-0000-0000-0000-000000000260",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000557",
                    "groupId": "e0000000-0000-0000-0000-000000000260",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 390,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000261",
                "menuItemId": "d0000000-0000-0000-0000-000000000484",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000558",
                    "groupId": "e0000000-0000-0000-0000-000000000261",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000559",
                    "groupId": "e0000000-0000-0000-0000-000000000261",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000485",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000001",
            "name": "Kaju Paneer Dum Biryani",
            "description": "Fragrant basmati rice tossed with whole fried cashews and marinated cottage cheese.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000262",
                "menuItemId": "d0000000-0000-0000-0000-000000000485",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000560",
                    "groupId": "e0000000-0000-0000-0000-000000000262",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000561",
                    "groupId": "e0000000-0000-0000-0000-000000000262",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 285,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000263",
                "menuItemId": "d0000000-0000-0000-0000-000000000485",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000562",
                    "groupId": "e0000000-0000-0000-0000-000000000263",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000563",
                    "groupId": "e0000000-0000-0000-0000-000000000263",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000486",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000001",
            "name": "Allam Kodi Pulao (Ginger Chicken)",
            "description": "Aromatic basmati rice cooked with fresh ginger paste and country spiced chicken pieces.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000264",
                "menuItemId": "d0000000-0000-0000-0000-000000000486",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000564",
                    "groupId": "e0000000-0000-0000-0000-000000000264",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000565",
                    "groupId": "e0000000-0000-0000-0000-000000000264",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 330,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000265",
                "menuItemId": "d0000000-0000-0000-0000-000000000486",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000566",
                    "groupId": "e0000000-0000-0000-0000-000000000265",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000567",
                    "groupId": "e0000000-0000-0000-0000-000000000265",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000487",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000001",
            "name": "Avakaya Chicken Biryani",
            "description": "Spicy biryani rice tossed with aged mango pickle and juicy chicken pieces.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000266",
                "menuItemId": "d0000000-0000-0000-0000-000000000487",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000568",
                    "groupId": "e0000000-0000-0000-0000-000000000266",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000569",
                    "groupId": "e0000000-0000-0000-0000-000000000266",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 345,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000267",
                "menuItemId": "d0000000-0000-0000-0000-000000000487",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000570",
                    "groupId": "e0000000-0000-0000-0000-000000000267",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000571",
                    "groupId": "e0000000-0000-0000-0000-000000000267",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0033-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000033",
        "name": "Station Master Starters",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000488",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000002",
            "name": "Chitti Mutyalu Prawn Fry",
            "description": "Crispy river prawns tossed in spicy Andhra green chili masala.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000268",
                "menuItemId": "d0000000-0000-0000-0000-000000000488",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000572",
                    "groupId": "e0000000-0000-0000-0000-000000000268",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000573",
                    "groupId": "e0000000-0000-0000-0000-000000000268",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000269",
                "menuItemId": "d0000000-0000-0000-0000-000000000488",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000574",
                    "groupId": "e0000000-0000-0000-0000-000000000269",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000575",
                    "groupId": "e0000000-0000-0000-0000-000000000269",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000489",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000002",
            "name": "Dragon Chicken Indo-Chinese",
            "description": "Crispy chicken strips tossed in spicy red chili garlic sauce with cashews.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000490",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000002",
            "name": "Crispy Corn Pepper Fry",
            "description": "Golden fried sweet corn kernels tossed with black pepper and curry leaves.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000270",
                "menuItemId": "d0000000-0000-0000-0000-000000000490",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000576",
                    "groupId": "e0000000-0000-0000-0000-000000000270",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000577",
                    "groupId": "e0000000-0000-0000-0000-000000000270",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000271",
                "menuItemId": "d0000000-0000-0000-0000-000000000490",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000578",
                    "groupId": "e0000000-0000-0000-0000-000000000271",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000579",
                    "groupId": "e0000000-0000-0000-0000-000000000271",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000491",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000002",
            "name": "Mutton Sukka Fry",
            "description": "Tender goat pieces pan-roasted with caramelized shallots and ground spices.",
            "price": 510,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000272",
                "menuItemId": "d0000000-0000-0000-0000-000000000491",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000580",
                    "groupId": "e0000000-0000-0000-0000-000000000272",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000581",
                    "groupId": "e0000000-0000-0000-0000-000000000272",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000273",
                "menuItemId": "d0000000-0000-0000-0000-000000000491",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000582",
                    "groupId": "e0000000-0000-0000-0000-000000000273",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000583",
                    "groupId": "e0000000-0000-0000-0000-000000000273",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0033-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000033",
        "name": "Curries & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000492",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000003",
            "name": "Gongura Mutton Curry",
            "description": "Mutton cooked in tangy sorrel leaf paste with green chillies.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000274",
                "menuItemId": "d0000000-0000-0000-0000-000000000492",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000584",
                    "groupId": "e0000000-0000-0000-0000-000000000274",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000585",
                    "groupId": "e0000000-0000-0000-0000-000000000274",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000586",
                    "groupId": "e0000000-0000-0000-0000-000000000274",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000493",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000003",
            "name": "Butter Chicken Masala",
            "description": "Boneless chicken in sweet-savory makhani gravy.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000494",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000003",
            "name": "Butter Naan (2 pcs)",
            "description": "Tandoori flatbread brushed with butter.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0033-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000033",
        "name": "Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000495",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000004",
            "name": "Sizzling Brownie with Vanilla Ice Cream",
            "description": "Warm walnut brownie served with vanilla ice cream and hot chocolate sauce.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000496",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000004",
            "name": "Gulab Jamun (2 pcs)",
            "description": "Khoya dumplings in cardamom syrup.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000034",
    "name": "Siddique Kabab Centre",
    "slug": "siddique-kabab-centre",
    "tagline": "Legendary DLF night-street grilled chicken & shawarmas",
    "description": "The indisputable king of Gachibowli’s DLF street food culture, serving smoky grilled chicken skewers, Jumbo Malai Chicken Shawarmas, and freshly rolled Roomali kebabs.",
    "coverImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 2800,
    "priceTier": "₹",
    "deliveryTimeEstimateMin": 20,
    "deliveryTimeEstimateMax": 35,
    "minimumOrderAmount": 150,
    "deliveryFee": 35,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Shop 14, DLF Cyber City Food Street, Gachibowli",
    "city": "Hyderabad",
    "latitude": 17.4462,
    "longitude": 78.3585,
    "cuisines": [
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0034-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000034",
        "name": "Signature Shawarmas & Rolls",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000497",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000001",
            "name": "Special Chicken Malai Shawarma (Jumbo)",
            "description": "Grilled chicken shaved from vertical spit, drenched in house garlic mayo, wrapped in soft rumali bread.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000275",
                "menuItemId": "d0000000-0000-0000-0000-000000000497",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000587",
                    "groupId": "e0000000-0000-0000-0000-000000000275",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000588",
                    "groupId": "e0000000-0000-0000-0000-000000000275",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000498",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000001",
            "name": "Rumali Chicken Tikka Roll",
            "description": "Charcoal-grilled spicy chicken tikka pieces rolled in thin roomali roti with sliced onions and mint chutney.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000276",
                "menuItemId": "d0000000-0000-0000-0000-000000000498",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000589",
                    "groupId": "e0000000-0000-0000-0000-000000000276",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000590",
                    "groupId": "e0000000-0000-0000-0000-000000000276",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000277",
                "menuItemId": "d0000000-0000-0000-0000-000000000498",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000591",
                    "groupId": "e0000000-0000-0000-0000-000000000277",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000592",
                    "groupId": "e0000000-0000-0000-0000-000000000277",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000499",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000001",
            "name": "Paneer Tikka Rumali Roll",
            "description": "Clay oven roasted cottage cheese rolled with spiced onions and green chutney.",
            "price": 170,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000278",
                "menuItemId": "d0000000-0000-0000-0000-000000000499",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000593",
                    "groupId": "e0000000-0000-0000-0000-000000000278",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000594",
                    "groupId": "e0000000-0000-0000-0000-000000000278",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000279",
                "menuItemId": "d0000000-0000-0000-0000-000000000499",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000595",
                    "groupId": "e0000000-0000-0000-0000-000000000279",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000596",
                    "groupId": "e0000000-0000-0000-0000-000000000279",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000500",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000001",
            "name": "Open Shawarma Plate with Pita & Salad",
            "description": "Shaved grilled chicken served on plate with fries, pickled vegetables, and extra garlic dip.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000280",
                "menuItemId": "d0000000-0000-0000-0000-000000000500",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000597",
                    "groupId": "e0000000-0000-0000-0000-000000000280",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000598",
                    "groupId": "e0000000-0000-0000-0000-000000000280",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0034-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000034",
        "name": "Charcoal Tandoor Skewers",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000501",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000002",
            "name": "Tandoori Chicken (Half)",
            "description": "Juicy chicken roasted over red-hot coals, spiced with red chili, curd, and garam masala.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000502",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000002",
            "name": "Chicken Malai Tikka (6 pcs)",
            "description": "Boneless chicken cubes marinated in cashew cream and grilled tender.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000281",
                "menuItemId": "d0000000-0000-0000-0000-000000000502",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000599",
                    "groupId": "e0000000-0000-0000-0000-000000000281",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000600",
                    "groupId": "e0000000-0000-0000-0000-000000000281",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000282",
                "menuItemId": "d0000000-0000-0000-0000-000000000502",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000601",
                    "groupId": "e0000000-0000-0000-0000-000000000282",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000602",
                    "groupId": "e0000000-0000-0000-0000-000000000282",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000503",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000002",
            "name": "Chicken 65 DLF Street Style",
            "description": "Deep-red crispy fried boneless chicken tossed with green chillies and curry leaves.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000504",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000002",
            "name": "Tandoori Chicken Wings (6 pcs)",
            "description": "Charred spicy chicken wings glazed with butter.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0034-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000034",
        "name": "Breads & Accompaniments",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000505",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000003",
            "name": "Roomali Roti (2 pcs)",
            "description": "Freshly stretched handkerchief-thin flatbread.",
            "price": 50,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000506",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000003",
            "name": "Extra Garlic Toum Mayo Dip",
            "description": "Fluffy authentic Lebanese garlic sauce.",
            "price": 40,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 2,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0034-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000034",
        "name": "Beverages",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000507",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000004",
            "name": "Sweet Lassi Kulhad",
            "description": "Thick churned sweet yogurt in clay glass.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000508",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000004",
            "name": "Mint Masala Soda",
            "description": "Digestive spiced soda with lime and rock salt.",
            "price": 60,
            "imageUrl": "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 3,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000035",
    "name": "Broadway - The Brewery",
    "slug": "broadway-the-brewery",
    "tagline": "Premier craft microbrewery & wood-fired gastropub",
    "description": "Hyderabad’s premier craft brewery and gastropub on Road No. 36, Jubilee Hills, famed for wood-fired sourdough pizzas, Ghee Roast tacos, and gourmet pub bites.",
    "coverImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 1920,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 450,
    "deliveryFee": 60,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 1057, Road No. 36, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.432,
    "longitude": 78.4048,
    "cuisines": [
      {
        "id": "c0000014-0000-0000-0000-000000000014",
        "name": "Craft Brewery & Gastropub",
        "slug": "craft-brewery",
        "icon": "Beer"
      },
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0035-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000035",
        "name": "Gourmet Pub Grub & Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000509",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000001",
            "name": "Broadway Ghee Roast Chicken Tacos (3 pcs)",
            "description": "Mangalorean chicken ghee roast stuffed in soft corn tortillas with sour cream and pickled onions.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000510",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000001",
            "name": "Loaded Pulled Pork Nachos",
            "description": "Slow-cooked barbecue pork shoulder over crisp chips with jalapenos, cheddar fondue, and pico de gallo.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000511",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000001",
            "name": "Truffle Parmesan Hand-Cut Fries",
            "description": "Crisp potatoes tossed in white truffle oil, rosemary sea salt, and aged parmesan.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000512",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000001",
            "name": "Crispy Buffalo Wings (6 pcs)",
            "description": "Crisp fried wings tossed in spicy cayenne pepper butter sauce with blue cheese dip.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0035-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000035",
        "name": "Wood-Fired Sourdough Pizzas",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000513",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000002",
            "name": "Broadway Pepperoni & Hot Honey Pizza",
            "description": "Imported artisanal pork pepperoni, mozzarella, and spicy habanero honey drizzle.",
            "price": 820,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000283",
                "menuItemId": "d0000000-0000-0000-0000-000000000513",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000603",
                    "groupId": "e0000000-0000-0000-0000-000000000283",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000604",
                    "groupId": "e0000000-0000-0000-0000-000000000283",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000284",
                "menuItemId": "d0000000-0000-0000-0000-000000000513",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000605",
                    "groupId": "e0000000-0000-0000-0000-000000000284",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000606",
                    "groupId": "e0000000-0000-0000-0000-000000000284",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000514",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000002",
            "name": "Smoked Chicken & Jalapeno Pizza",
            "description": "Hickory smoked chicken, pickled jalapenos, barbecue swirl, and mozzarella.",
            "price": 740,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000285",
                "menuItemId": "d0000000-0000-0000-0000-000000000514",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000607",
                    "groupId": "e0000000-0000-0000-0000-000000000285",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000608",
                    "groupId": "e0000000-0000-0000-0000-000000000285",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000286",
                "menuItemId": "d0000000-0000-0000-0000-000000000514",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000609",
                    "groupId": "e0000000-0000-0000-0000-000000000286",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000610",
                    "groupId": "e0000000-0000-0000-0000-000000000286",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000515",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000002",
            "name": "Quattro Formaggi (Four Cheese)",
            "description": "Gorgonzola, fontina, fresh mozzarella, and shaved parmesan on white garlic base.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000516",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000002",
            "name": "Margherita Burrata D.O.P.",
            "description": "San Marzano tomato base topped with a whole fresh burrata ball and basil.",
            "price": 690,
            "imageUrl": "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0035-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000035",
        "name": "Hearty Mains",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000517",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000003",
            "name": "Slow-Cooked BBQ Pork Ribs",
            "description": "Fall-off-the-bone tender pork ribs glazed in house craft stout BBQ sauce, served with slaw and fries.",
            "price": 890,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000518",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000003",
            "name": "Grilled Tenderloin Steak with Pepper Jus",
            "description": "Prime beef tenderloin seared with garlic herb butter, mashed potatoes, and roasted veggies.",
            "price": 840,
            "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000519",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000003",
            "name": "Wild Mushroom Cream Tagliatelle",
            "description": "Ribbon pasta in creamy garlic mushroom sauce with truffle aroma.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0035-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000035",
        "name": "Desserts & Non-Alcoholic Brews",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000520",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000004",
            "name": "Broadway Warm Churros with Belgian Dip",
            "description": "Cinnamon sugar dusted crisp churro fingers with dark chocolate sauce.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000521",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000004",
            "name": "Molten Chocolate Lava Cake with Ice Cream",
            "description": "Warm molten chocolate cake with vanilla ice cream.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000522",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000004",
            "name": "Ginger Beer Craft Mocktail",
            "description": "Brewed spicy ginger beer with fresh lime and mint.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  },
  {
    "id": "b0000000-0000-0000-0000-000000000036",
    "name": "Santè Spa Cuisine",
    "slug": "sante-spa-cuisine",
    "tagline": "Clean, organic & guilt-free gourmet wellness dining",
    "description": "An organic, mindful sanctuary on Road No. 82, Jubilee Hills, redefining healthy eating with whole-food vegan, gluten-free, and clean dining delicacies.",
    "coverImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 790,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 450,
    "deliveryFee": 60,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot 128, Road No. 82, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4241,
    "longitude": 78.4132,
    "cuisines": [
      {
        "id": "c0000013-0000-0000-0000-000000000013",
        "name": "Pure Vegetarian Gourmet",
        "slug": "pure-vegetarian",
        "icon": "Leaf"
      },
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0036-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000036",
        "name": "Wellness Starters & Mezze",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000523",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000001",
            "name": "Spinach & Beetroot Hummus with Multigrain Crisps",
            "description": "Duo of vibrant farm-fresh organic pureed hummus served with baked gluten-free seed crackers.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000524",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000001",
            "name": "Quinoa & Avocado Salad Bowl",
            "description": "Peruvian organic quinoa, Hass avocado, cherry tomatoes, and pomegranate in lemon herb dressing.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000525",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000001",
            "name": "Baked Sweet Potato Wedges with Vegan Aioli",
            "description": "Spiced oven-roasted sweet potato batons with garlic cashew emulsion.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000526",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000001",
            "name": "Crispy Rice Paper Summer Rolls (4 pcs)",
            "description": "Vietnamese rice paper rolls packed with crunchy vegetables, mint, and peanut dip.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-d8a4369e5d48?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000287",
                "menuItemId": "d0000000-0000-0000-0000-000000000526",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000611",
                    "groupId": "e0000000-0000-0000-0000-000000000287",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000612",
                    "groupId": "e0000000-0000-0000-0000-000000000287",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0036-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000036",
        "name": "Guilt-Free Pizza & Pasta",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000527",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000002",
            "name": "Activated Charcoal Sourdough Pizza",
            "description": "Digestive black activated charcoal crust with sun-dried tomatoes, cashew cheese, and arugula.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000288",
                "menuItemId": "d0000000-0000-0000-0000-000000000527",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000613",
                    "groupId": "e0000000-0000-0000-0000-000000000288",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000614",
                    "groupId": "e0000000-0000-0000-0000-000000000288",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000289",
                "menuItemId": "d0000000-0000-0000-0000-000000000527",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000615",
                    "groupId": "e0000000-0000-0000-0000-000000000289",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000616",
                    "groupId": "e0000000-0000-0000-0000-000000000289",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000528",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000002",
            "name": "Zucchini Zoodles with Walnut Basil Pesto",
            "description": "Spiralized raw organic zucchini tossed in fragrant walnut and Genovese basil emulsion.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 14,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000529",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000002",
            "name": "Gluten-Free Penne All’Arrabbiata",
            "description": "Brown rice pasta tossed with roasted plum tomatoes, garlic, and fresh oregano.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 16,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0036-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000036",
        "name": "Wholesome Mains",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000530",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000003",
            "name": "Wild Mushroom & Black Rice Risotto",
            "description": "Antioxidant-rich black rice cooked with wild porcini, coconut milk, and nutritional yeast.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000531",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000003",
            "name": "Thai Coconut Tofu Green Bowl",
            "description": "Steamed edamame, organic tofu, and seasonal greens in gentle green curry broth with brown rice.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000532",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000003",
            "name": "Stuffed Roasted Capsicum Bowl",
            "description": "Bell peppers stuffed with spiced millets, pine nuts, and baked with almond crust.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0036-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000036",
        "name": "Guilt-Free Desserts & Cold-Pressed Elixirs",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000533",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000004",
            "name": "Raw Avocado Dark Chocolate Mousse",
            "description": "Creamy cold-whipped Hass avocado, raw cacao, and organic maple syrup.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000534",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000004",
            "name": "Chia Seed & Mango Coconut Pudding",
            "description": "Organic chia seeds soaked in tender coconut milk, layered with fresh mango puree.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000535",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000004",
            "name": "Activated Charcoal Detox Cold-Pressed Juice",
            "description": "Fresh pressed green apple, lemon, ginger, and activated coconut charcoal.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 4,
            "customizationGroups": []
          }
        ]
      }
    ]
  }
]
