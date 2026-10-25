// src/data/hyderabadExpandedData.ts
// Expanded 36-restaurant Hyderabad dataset matching frontend types
import type { Restaurant } from '@/types'

export const HYDERABAD_EXPANDED_RESTAURANTS: Restaurant[] = [
  {
    "id": "b0000001-0000-0000-0000-000000000001",
    "name": "AnTeRa Kitchen & Bar",
    "slug": "antera-kitchen-and-bar",
    "tagline": "Authentic Andhra, Telangana & Rayalaseema culinary craft",
    "description": "Celebrated regional dining in Jubilee Hills bringing together heritage flavours of Telangana, coastal Andhra, and Rayalaseema. Renowned for Bangla Kodi, Bhimavaram Royyala Vepudu, and Nalli Gosht Biryani.",
    "coverImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 1420,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 350,
    "deliveryFee": 50,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 468, Road No. 10, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4342,
    "longitude": 78.4068,
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
        "id": "ca000000-0000-0000-0001-000000000001",
        "restaurantId": "b0000001-0000-0000-0000-000000000001",
        "name": "Signature Regional Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000001",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000001",
            "name": "Bangla Kodi (Crispy Curry Leaf Chicken)",
            "description": "Crisp fried chicken chunks tossed in traditional Godavari village spices, fresh curry leaves, and green chillies.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000001",
                "menuItemId": "d0000000-0000-0000-0000-000000000001",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000001",
                    "groupId": "e0000000-0000-0000-0000-000000000001",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000002",
                    "groupId": "e0000000-0000-0000-0000-000000000001",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000003",
                    "groupId": "e0000000-0000-0000-0000-000000000001",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000002",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000001",
            "name": "Bhimavaram Royyala Vepudu (Prawn Fry)",
            "description": "Succulent coastal prawns tossed with caramelized onions, cracked coriander, and green chillies.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000002",
                "menuItemId": "d0000000-0000-0000-0000-000000000002",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000004",
                    "groupId": "e0000000-0000-0000-0000-000000000002",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000005",
                    "groupId": "e0000000-0000-0000-0000-000000000002",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000003",
                "menuItemId": "d0000000-0000-0000-0000-000000000002",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000006",
                    "groupId": "e0000000-0000-0000-0000-000000000003",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000007",
                    "groupId": "e0000000-0000-0000-0000-000000000003",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000003",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000001",
            "name": "Kaju Paneer Vepudu",
            "description": "Fresh malai paneer cubes dry-roasted with cashews, curry leaves, and Guntur chilli paste.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000004",
                "menuItemId": "d0000000-0000-0000-0000-000000000003",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000008",
                    "groupId": "e0000000-0000-0000-0000-000000000004",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000009",
                    "groupId": "e0000000-0000-0000-0000-000000000004",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000005",
                "menuItemId": "d0000000-0000-0000-0000-000000000003",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000010",
                    "groupId": "e0000000-0000-0000-0000-000000000005",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000011",
                    "groupId": "e0000000-0000-0000-0000-000000000005",
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
            "name": "Telangana Mutton Sukka",
            "description": "Tender goat pan-roasted with Warangal black pepper, shallots, and fresh coconut shreds.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0001-000000000002",
        "restaurantId": "b0000001-0000-0000-0000-000000000001",
        "name": "Heritage Curries & Ragi Combos",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000005",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000002",
            "name": "Gongura Mamsam",
            "description": "Classic Andhra delicacy of tender mutton simmered slowly with tangy sorrel leaves and spices.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000006",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000002",
            "name": "Natu Kodi Pulusu with Ragi Sankati",
            "description": "Country chicken curry simmered in rustic village spices, served with steamed ragi mudda and ghee.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000006",
                "menuItemId": "d0000000-0000-0000-0000-000000000006",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000012",
                    "groupId": "e0000000-0000-0000-0000-000000000006",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000013",
                    "groupId": "e0000000-0000-0000-0000-000000000006",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000014",
                    "groupId": "e0000000-0000-0000-0000-000000000006",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
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
            "name": "Gutti Vankaya Kura",
            "description": "Baby brinjals stuffed and cooked in a velvety roasted peanut, sesame, and tamarind gravy.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000008",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000002",
            "name": "Pappu Charu with Desi Ghee",
            "description": "Homestyle Andhra comforting toor dal stew tempered with mustard, cumin, and garlic cloves.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0001-000000000003",
        "restaurantId": "b0000001-0000-0000-0000-000000000001",
        "name": "Regional Pulaos & Biryanis",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000009",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000003",
            "name": "Bangla Kodi Pulao",
            "description": "Fragrant short-grain chitti mutyalu rice cooked with aromatic spices and topped with Bangla chicken.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000007",
                "menuItemId": "d0000000-0000-0000-0000-000000000009",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000015",
                    "groupId": "e0000000-0000-0000-0000-000000000007",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000016",
                    "groupId": "e0000000-0000-0000-0000-000000000007",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 330,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000008",
                "menuItemId": "d0000000-0000-0000-0000-000000000009",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000017",
                    "groupId": "e0000000-0000-0000-0000-000000000008",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000018",
                    "groupId": "e0000000-0000-0000-0000-000000000008",
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
            "name": "Nalli Gosht Biryani (Handi)",
            "description": "Succulent lamb shanks slow-cooked with aged basmati rice on low flame with mint and brown onions.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 35,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000009",
                "menuItemId": "d0000000-0000-0000-0000-000000000010",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000019",
                    "groupId": "e0000000-0000-0000-0000-000000000009",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000020",
                    "groupId": "e0000000-0000-0000-0000-000000000009",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 420,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000010",
                "menuItemId": "d0000000-0000-0000-0000-000000000010",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000021",
                    "groupId": "e0000000-0000-0000-0000-000000000010",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000022",
                    "groupId": "e0000000-0000-0000-0000-000000000010",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000011",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000003",
            "name": "Chitti Mutyalu Paneer Pulao",
            "description": "Aromatic micro-grain rice tempered with pure ghee, whole spices, and spiced paneer cubes.",
            "price": 370,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000011",
                "menuItemId": "d0000000-0000-0000-0000-000000000011",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000023",
                    "groupId": "e0000000-0000-0000-0000-000000000011",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000024",
                    "groupId": "e0000000-0000-0000-0000-000000000011",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 278,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000012",
                "menuItemId": "d0000000-0000-0000-0000-000000000011",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000025",
                    "groupId": "e0000000-0000-0000-0000-000000000012",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000026",
                    "groupId": "e0000000-0000-0000-0000-000000000012",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000012",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000003",
            "name": "Telangana Bagara Rice Pot",
            "description": "Traditional celebratory tempered rice cooked with whole spices, mint leaves, and desi ghee.",
            "price": 240,
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
        "id": "ca000000-0000-0000-0001-000000000004",
        "restaurantId": "b0000001-0000-0000-0000-000000000001",
        "name": "Breads & Artisanal Sweets",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000013",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000004",
            "name": "Pulka (2 pcs)",
            "description": "Thin and soft puffed whole wheat flatbreads prepared homestyle on open flame.",
            "price": 40,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000014",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000004",
            "name": "Jaggery Ice Cream with Chikki Crumbs",
            "description": "Creamy artisanal ice cream prepared with pure organic palm jaggery and peanut chikki crunch.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000015",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000004",
            "name": "Bellam Jeedipappu Halwa",
            "description": "Warm roasted cashew nut halwa cooked with organic Godavari jaggery and cardamom ghee.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000016",
            "restaurantId": "b0000001-0000-0000-0000-000000000001",
            "categoryId": "ca000000-0000-0000-0001-000000000004",
            "name": "Nannari Sharbat Cooler",
            "description": "Refreshing traditional cooling drink made from wild sarsaparilla root syrup and soaked sabja seeds.",
            "price": 90,
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
    "id": "b0000002-0000-0000-0000-000000000002",
    "name": "Hashi",
    "slug": "hashi-japanese-asian",
    "tagline": "Artisanal Japanese sushi, robata & modern Pan-Asian dining",
    "description": "Premier Asian and Japanese dining in Jubilee Hills known for precision nigiri, signature sushi rolls, steamed edamame, and vibrant wok-tossed Pan-Asian creations.",
    "coverImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 980,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 400,
    "deliveryFee": 55,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 1121, Road No. 45, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4338,
    "longitude": 78.4025,
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
        "name": "Small Plates & Dim Sum",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000017",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000001",
            "name": "Steamed Edamame with Sea Salt",
            "description": "Tender young soybeans steamed in the pod, finished with crushed Maldon sea salt.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000018",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000001",
            "name": "Chilli Garlic Edamame",
            "description": "Wok-tossed whole edamame pods glazed in spicy togarashi chilli, burnt garlic, and sesame oil.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000019",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000001",
            "name": "Truffle Edamame Dim Sum (4 pcs)",
            "description": "Translucent crystal dumplings filled with mashed edamame, water chestnuts, and fragrant white truffle essence.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000020",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000001",
            "name": "Chicken & Prawn Sui Mai (4 pcs)",
            "description": "Open-faced steamed wonton cups packed with seasoned minced chicken, tiger prawns, and tobiko.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0002-000000000002",
        "restaurantId": "b0000002-0000-0000-0000-000000000002",
        "name": "Signature Sushi & Maki",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000021",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000002",
            "name": "Geisha Sushi Roll (8 pcs)",
            "description": "Crisp tempura prawn, crabstick, avocado, and cucumber wrapped in nori, topped with spicy mayo and tobiko.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000013",
                "menuItemId": "d0000000-0000-0000-0000-000000000021",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000027",
                    "groupId": "e0000000-0000-0000-0000-000000000013",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000028",
                    "groupId": "e0000000-0000-0000-0000-000000000013",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000022",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000002",
            "name": "Dynamite Sushi Roll (8 pcs)",
            "description": "Fresh salmon, cream cheese, and avocado roll topped with torched spicy salmon tartare and scallions.",
            "price": 690,
            "imageUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000014",
                "menuItemId": "d0000000-0000-0000-0000-000000000022",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000029",
                    "groupId": "e0000000-0000-0000-0000-000000000014",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000030",
                    "groupId": "e0000000-0000-0000-0000-000000000014",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000023",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000002",
            "name": "California Veg Roll (8 pcs)",
            "description": "Ripe avocado, crisp cucumber, and blanched asparagus rolled with seasoned sushi rice and toasted sesame.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000015",
                "menuItemId": "d0000000-0000-0000-0000-000000000023",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000031",
                    "groupId": "e0000000-0000-0000-0000-000000000015",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000032",
                    "groupId": "e0000000-0000-0000-0000-000000000015",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000024",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000002",
            "name": "Chicken Teriyaki Roll (8 pcs)",
            "description": "Char-grilled chicken breast glazed with house-made teriyaki sauce, cucumber, and roasted sesame.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000016",
                "menuItemId": "d0000000-0000-0000-0000-000000000024",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000033",
                    "groupId": "e0000000-0000-0000-0000-000000000016",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000034",
                    "groupId": "e0000000-0000-0000-0000-000000000016",
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
        "id": "ca000000-0000-0000-0002-000000000003",
        "restaurantId": "b0000002-0000-0000-0000-000000000002",
        "name": "Robata Skewers & Asian Mains",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000025",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000003",
            "name": "Robata King Oyster Mushroom Skewers",
            "description": "Charcoal-grilled king oyster mushrooms brushed with garlic miso glaze and green scallions.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000026",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000003",
            "name": "Chicken Yakitori Skewers (2 skewers)",
            "description": "Tender chicken thighs and leeks grilled over binchotan coals with sweet mirin soy glaze.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000027",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000003",
            "name": "Thai Massaman Curry with Jasmine Rice",
            "description": "Mild coconut milk curry stewed with roasted baby potatoes, shallots, and fragrant Thai herbs.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000017",
                "menuItemId": "d0000000-0000-0000-0000-000000000027",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000035",
                    "groupId": "e0000000-0000-0000-0000-000000000017",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000036",
                    "groupId": "e0000000-0000-0000-0000-000000000017",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000037",
                    "groupId": "e0000000-0000-0000-0000-000000000017",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000028",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000003",
            "name": "Pad Thai Noodles with Prawns",
            "description": "Wok-tossed flat rice noodles with tiger prawns, tamarind pulp, crushed peanuts, and fresh lime.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0002-000000000004",
        "restaurantId": "b0000002-0000-0000-0000-000000000002",
        "name": "Desserts & Refreshers",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000029",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000004",
            "name": "Matcha Green Tea Cheesecake",
            "description": "Velvety Japanese Uji matcha-infused baked cheesecake on a crisp biscuit crust.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000030",
            "restaurantId": "b0000002-0000-0000-0000-000000000002",
            "categoryId": "ca000000-0000-0000-0002-000000000004",
            "name": "Yuzu Lemonade Iced Fizz",
            "description": "Sparkling cooler prepared with aromatic Japanese yuzu citrus fruit, fresh mint, and soda.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000003-0000-0000-0000-000000000003",
    "name": "Toscano",
    "slug": "toscano-gachibowli",
    "tagline": "Authentic Italian dining, hand-tossed sourdough pizza & pasta",
    "description": "Renowned Italian restaurant in Gachibowli's tech corridor. Featuring wood-fired artisanal sourdough pizzas, fresh handcrafted pastas, antipasti platters, and classic Italian desserts.",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 1320,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 350,
    "deliveryFee": 45,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Ground Floor, Trendset Jayabheri Silicon Tower, Gachibowli",
    "city": "Hyderabad",
    "latitude": 17.4428,
    "longitude": 78.3615,
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
        "name": "Antipasti & Small Plates",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000031",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000001",
            "name": "Bruschetta al Pomodoro (4 pcs)",
            "description": "Toasted artisan baguette slices topped with marinated vine tomatoes, fresh basil, garlic, and extra virgin olive oil.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000032",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000001",
            "name": "Crispy Calamari Fritti",
            "description": "Tender squid rings dusted in seasoned semolina, flash-fried golden, and served with spicy tomato marinara dip.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000033",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000001",
            "name": "Garlic Sourdough Bread with Mozzarella",
            "description": "Freshly baked sourdough slices smothered with roasted garlic herb butter and melted mozzarella cheese.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000034",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000001",
            "name": "Caprese Salad with Buffalo Mozzarella",
            "description": "Thick slices of fresh buffalo mozzarella, beefsteak tomatoes, wild arugula, and aged balsamic reduction.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0003-000000000002",
        "restaurantId": "b0000003-0000-0000-0000-000000000003",
        "name": "Wood-Fired Sourdough Pizzas",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000035",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000002",
            "name": "Pizza Margherita Classica",
            "description": "San Marzano DOP tomato sauce, fresh bocconcini mozzarella, fragrant basil leaves, and cold-pressed olive oil.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000018",
                "menuItemId": "d0000000-0000-0000-0000-000000000035",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000038",
                    "groupId": "e0000000-0000-0000-0000-000000000018",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000039",
                    "groupId": "e0000000-0000-0000-0000-000000000018",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000019",
                "menuItemId": "d0000000-0000-0000-0000-000000000035",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000040",
                    "groupId": "e0000000-0000-0000-0000-000000000019",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000041",
                    "groupId": "e0000000-0000-0000-0000-000000000019",
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
            "categoryId": "ca000000-0000-0000-0003-000000000002",
            "name": "Pizza Quattro Formaggi",
            "description": "Four cheese pizza topped with creamy mozzarella, sharp gorgonzola, aged fontina, and parmigiano reggiano.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000020",
                "menuItemId": "d0000000-0000-0000-0000-000000000036",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000042",
                    "groupId": "e0000000-0000-0000-0000-000000000020",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000043",
                    "groupId": "e0000000-0000-0000-0000-000000000020",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000021",
                "menuItemId": "d0000000-0000-0000-0000-000000000036",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000044",
                    "groupId": "e0000000-0000-0000-0000-000000000021",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000045",
                    "groupId": "e0000000-0000-0000-0000-000000000021",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000037",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000002",
            "name": "Pizza Pepperoni Piccante",
            "description": "Wood-fired crust layered with tomato sauce, mozzarella, spicy Italian pork pepperoni, and pickled jalapeños.",
            "price": 690,
            "imageUrl": "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000022",
                "menuItemId": "d0000000-0000-0000-0000-000000000037",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000046",
                    "groupId": "e0000000-0000-0000-0000-000000000022",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000047",
                    "groupId": "e0000000-0000-0000-0000-000000000022",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000023",
                "menuItemId": "d0000000-0000-0000-0000-000000000037",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000048",
                    "groupId": "e0000000-0000-0000-0000-000000000023",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000049",
                    "groupId": "e0000000-0000-0000-0000-000000000023",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000038",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000002",
            "name": "Pizza Rustica Verdure",
            "description": "Chargrilled zucchini, sweet bell peppers, caramelized onions, kalamata olives, and Greek feta cheese.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000024",
                "menuItemId": "d0000000-0000-0000-0000-000000000038",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000050",
                    "groupId": "e0000000-0000-0000-0000-000000000024",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000051",
                    "groupId": "e0000000-0000-0000-0000-000000000024",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000025",
                "menuItemId": "d0000000-0000-0000-0000-000000000038",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000052",
                    "groupId": "e0000000-0000-0000-0000-000000000025",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000053",
                    "groupId": "e0000000-0000-0000-0000-000000000025",
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
        "id": "ca000000-0000-0000-0003-000000000003",
        "restaurantId": "b0000003-0000-0000-0000-000000000003",
        "name": "Handcrafted Pastas & Mains",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000039",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000003",
            "name": "Fettuccine ai Funghi Porcini",
            "description": "Handcrafted egg fettuccine tossed with wild porcini mushrooms, garlic butter, and shaved parmesan.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000040",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000003",
            "name": "Spaghetti Bolognese Tradizionale",
            "description": "Classic slow-simmered minced lamb and tomato ragu served over al dente spaghetti with grana padano.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000041",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000003",
            "name": "Penne all'Arrabbiata",
            "description": "Penne pasta tossed in spicy slow-cooked San Marzano tomato sauce, garlic, red chilli flakes, and fresh parsley.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000042",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000003",
            "name": "Pollo alla Griglia with Herb Potatoes",
            "description": "Pan-seared herb-marinated chicken breast served with rosemary roasted potatoes and chicken jus.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0003-000000000004",
        "restaurantId": "b0000003-0000-0000-0000-000000000003",
        "name": "Dolci & Refreshers",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000043",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000004",
            "name": "Classic Tiramisu Italiano",
            "description": "Traditional recipe with espresso-dipped savoiardi biscuits, creamy mascarpone sabayon, and Dutch cocoa powder.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000044",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000004",
            "name": "Warm Chocolate Fondant with Gelato",
            "description": "Molten dark Belgian chocolate lava cake served warm with Madagascar vanilla bean gelato.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000045",
            "restaurantId": "b0000003-0000-0000-0000-000000000003",
            "categoryId": "ca000000-0000-0000-0003-000000000004",
            "name": "Sicilian Blood Orange Soda",
            "description": "Craft Italian sparkling citrus soda infused with fresh rosemary and cracked ice.",
            "price": 190,
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
    "id": "b0000004-0000-0000-0000-000000000004",
    "name": "Dum Pukht Begum's",
    "slug": "dum-pukht-begums",
    "tagline": "Royal Nizami & Awadhi slow-cooked dum pukht dining",
    "description": "Luxury royal dining at ITC Kohenur, celebrating the refined slow-cooking traditions of the Begums of Hyderabad and royal Awadh. Famous for Dum Pukht Kakori, Nalli Nihari, and Shahi Biryanis.",
    "coverImage": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.9,
    "ratingCount": 890,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 55,
    "minimumOrderAmount": 600,
    "deliveryFee": 75,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "ITC Kohenur, Plot 5, Knowledge City, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4385,
    "longitude": 78.3812,
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
        "id": "ca000000-0000-0000-0004-000000000001",
        "restaurantId": "b0000004-0000-0000-0000-000000000004",
        "name": "Royal Shorbas & Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000046",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000001",
            "name": "Murgh Badami Shorba",
            "description": "Delicate chicken broth enriched with toasted almond paste, saffron threads, and cracked white pepper.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000047",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000001",
            "name": "Dum Pukht Kakori Kebab (4 pcs)",
            "description": "The legendary melt-in-mouth mutton kebab flavored with cloves, rose petals, and royal spices, grilled on skewers.",
            "price": 890,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000026",
                "menuItemId": "d0000000-0000-0000-0000-000000000047",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000054",
                    "groupId": "e0000000-0000-0000-0000-000000000026",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000055",
                    "groupId": "e0000000-0000-0000-0000-000000000026",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000027",
                "menuItemId": "d0000000-0000-0000-0000-000000000047",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000056",
                    "groupId": "e0000000-0000-0000-0000-000000000027",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000057",
                    "groupId": "e0000000-0000-0000-0000-000000000027",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000048",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000001",
            "name": "Shahi Galawati Kebab with Paratha",
            "description": "Finely minced baby lamb patty smoked over charcoal and served on delicate ulte tawa ka paratha.",
            "price": 860,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000028",
                "menuItemId": "d0000000-0000-0000-0000-000000000048",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000058",
                    "groupId": "e0000000-0000-0000-0000-000000000028",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000059",
                    "groupId": "e0000000-0000-0000-0000-000000000028",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000029",
                "menuItemId": "d0000000-0000-0000-0000-000000000048",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000060",
                    "groupId": "e0000000-0000-0000-0000-000000000029",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000061",
                    "groupId": "e0000000-0000-0000-0000-000000000029",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000049",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000001",
            "name": "Subz Galouti Kebab (4 pcs)",
            "description": "Pan-seared spiced yam and green pea patties infused with cardamom, saffron, and kewra water.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000030",
                "menuItemId": "d0000000-0000-0000-0000-000000000049",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000062",
                    "groupId": "e0000000-0000-0000-0000-000000000030",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000063",
                    "groupId": "e0000000-0000-0000-0000-000000000030",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000031",
                "menuItemId": "d0000000-0000-0000-0000-000000000049",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000064",
                    "groupId": "e0000000-0000-0000-0000-000000000031",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000065",
                    "groupId": "e0000000-0000-0000-0000-000000000031",
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
        "id": "ca000000-0000-0000-0004-000000000002",
        "restaurantId": "b0000004-0000-0000-0000-000000000004",
        "name": "Slow-Simmered Royal Mains",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000050",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000002",
            "name": "Nalli Nihari Begum-I-Khas",
            "description": "Tender lamb shanks simmered overnight in an aromatic pot roast reduction with ginger juliennes and lime.",
            "price": 1080,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 40,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000051",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000002",
            "name": "Nizami Dum Ka Murgh",
            "description": "Chicken pieces slow-cooked on dum in a rich gravy of cashews, brown onions, yoghurt, and Kashmiri saffron.",
            "price": 780,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000052",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000002",
            "name": "Dum Dal Begum-I-Khas",
            "description": "The famous black lentils slow-cooked overnight over charcoal with tomato puree, white butter, and cream.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000032",
                "menuItemId": "d0000000-0000-0000-0000-000000000052",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000066",
                    "groupId": "e0000000-0000-0000-0000-000000000032",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000067",
                    "groupId": "e0000000-0000-0000-0000-000000000032",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000068",
                    "groupId": "e0000000-0000-0000-0000-000000000032",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000053",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000002",
            "name": "Paneer Pasanda Khas",
            "description": "Stuffed cottage cheese triangles simmered in a creamy almond and tomato gravy scented with green cardamom.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0004-000000000003",
        "restaurantId": "b0000004-0000-0000-0000-000000000004",
        "name": "Dastarkhwan Biryanis & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000054",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000003",
            "name": "Dum Pukht Biryani Khaas (Handi)",
            "description": "Aged basmati rice and baby lamb cooked in a sealed earthenware handi with saffron, mint, and pure ghee.",
            "price": 920,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 35,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000033",
                "menuItemId": "d0000000-0000-0000-0000-000000000054",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000069",
                    "groupId": "e0000000-0000-0000-0000-000000000033",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000070",
                    "groupId": "e0000000-0000-0000-0000-000000000033",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 690,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000034",
                "menuItemId": "d0000000-0000-0000-0000-000000000054",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000071",
                    "groupId": "e0000000-0000-0000-0000-000000000034",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000072",
                    "groupId": "e0000000-0000-0000-0000-000000000034",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000055",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000003",
            "name": "Subz Moti Tehri",
            "description": "Fragrant basmati rice layered with garden vegetables, paneer pearls, and mild Awadhi spices.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000056",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000003",
            "name": "Warqi Paratha (2 pcs)",
            "description": "Flaky multi-layered royal flatbread kneaded with milk and baked on an inverted griddle.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000057",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000003",
            "name": "Zafrani Sheermal",
            "description": "Traditional royal sweet bread enriched with saffron milk and baked in a clay tandoor.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0004-000000000004",
        "restaurantId": "b0000004-0000-0000-0000-000000000004",
        "name": "Royal Meetha",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000058",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000004",
            "name": "Shahi Tukda Begumi",
            "description": "Golden fried brioche soaked in saffron cardamom syrup and covered with thick malai rabdi.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000059",
            "restaurantId": "b0000004-0000-0000-0000-000000000004",
            "categoryId": "ca000000-0000-0000-0004-000000000004",
            "name": "Khubani Ka Meetha with Clotted Malai",
            "description": "Stewed Afghani dried apricots simmered in sugar syrup and topped with chilled buffalo milk malai.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
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
    "tagline": "The world's favorite Hyderabadi biryani institution since 1953",
    "description": "Hyderabad's historic biryani brand founded in Secunderabad in 1953. Famous for authentic Dum Biryanis, tender mutton seekh kebabs, and rich Mughlai gravies.",
    "coverImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 5120,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Prenderghast Road, MG Road, Secunderabad",
    "city": "Hyderabad",
    "latitude": 17.4412,
    "longitude": 78.4985,
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
            "id": "d0000000-0000-0000-0000-000000000060",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000001",
            "name": "Paradise Special Mutton Biryani",
            "description": "Legendary long-grain basmati rice cooked on dum with two succulent spiced mutton pieces and rich spices.",
            "price": 430,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000035",
                "menuItemId": "d0000000-0000-0000-0000-000000000060",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000073",
                    "groupId": "e0000000-0000-0000-0000-000000000035",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000074",
                    "groupId": "e0000000-0000-0000-0000-000000000035",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 323,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000036",
                "menuItemId": "d0000000-0000-0000-0000-000000000060",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000075",
                    "groupId": "e0000000-0000-0000-0000-000000000036",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000076",
                    "groupId": "e0000000-0000-0000-0000-000000000036",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000061",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000001",
            "name": "Royal Chicken Dum Biryani",
            "description": "Authentic Hyderabadi chicken biryani cooked with layers of fragrant basmati rice, tender chicken, and saffron.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000037",
                "menuItemId": "d0000000-0000-0000-0000-000000000061",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000077",
                    "groupId": "e0000000-0000-0000-0000-000000000037",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000078",
                    "groupId": "e0000000-0000-0000-0000-000000000037",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 255,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000038",
                "menuItemId": "d0000000-0000-0000-0000-000000000061",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000079",
                    "groupId": "e0000000-0000-0000-0000-000000000038",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000080",
                    "groupId": "e0000000-0000-0000-0000-000000000038",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000062",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000001",
            "name": "Nizami Egg Dum Biryani",
            "description": "Fragrant dum-cooked basmati rice served with seasoned boiled eggs and golden caramelized onions.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000039",
                "menuItemId": "d0000000-0000-0000-0000-000000000062",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000081",
                    "groupId": "e0000000-0000-0000-0000-000000000039",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000082",
                    "groupId": "e0000000-0000-0000-0000-000000000039",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 195,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000040",
                "menuItemId": "d0000000-0000-0000-0000-000000000062",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000083",
                    "groupId": "e0000000-0000-0000-0000-000000000040",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000084",
                    "groupId": "e0000000-0000-0000-0000-000000000040",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000063",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000001",
            "name": "Special Veg Dum Biryani",
            "description": "Basmati rice layered with fresh seasonal vegetables, mint, fried onions, and whole spices in a sealed pot.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000041",
                "menuItemId": "d0000000-0000-0000-0000-000000000063",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000085",
                    "groupId": "e0000000-0000-0000-0000-000000000041",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000086",
                    "groupId": "e0000000-0000-0000-0000-000000000041",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 180,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000042",
                "menuItemId": "d0000000-0000-0000-0000-000000000063",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000087",
                    "groupId": "e0000000-0000-0000-0000-000000000042",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000088",
                    "groupId": "e0000000-0000-0000-0000-000000000042",
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
            "id": "d0000000-0000-0000-0000-000000000064",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000002",
            "name": "Mutton Seekh Kebab (4 pcs)",
            "description": "Minced mutton blended with garlic, ginger, green chillies, and aromatic spices, roasted on charcoal skewers.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000043",
                "menuItemId": "d0000000-0000-0000-0000-000000000064",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000089",
                    "groupId": "e0000000-0000-0000-0000-000000000043",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000090",
                    "groupId": "e0000000-0000-0000-0000-000000000043",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000044",
                "menuItemId": "d0000000-0000-0000-0000-000000000064",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000091",
                    "groupId": "e0000000-0000-0000-0000-000000000044",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000092",
                    "groupId": "e0000000-0000-0000-0000-000000000044",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000065",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000002",
            "name": "Chicken Reshmi Kebab (6 pcs)",
            "description": "Boneless chicken breast pieces marinated in silky cashew paste, yoghurt, and cream, grilled in clay oven.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000045",
                "menuItemId": "d0000000-0000-0000-0000-000000000065",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000093",
                    "groupId": "e0000000-0000-0000-0000-000000000045",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000094",
                    "groupId": "e0000000-0000-0000-0000-000000000045",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000046",
                "menuItemId": "d0000000-0000-0000-0000-000000000065",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000095",
                    "groupId": "e0000000-0000-0000-0000-000000000046",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000096",
                    "groupId": "e0000000-0000-0000-0000-000000000046",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000066",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000002",
            "name": "Tandoori Murgh (Half)",
            "description": "Traditional bone-in chicken marinated in spiced hung curd, roasted in clay tandoor until charred and juicy.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000067",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000002",
            "name": "Paneer Tikka Shashlik",
            "description": "Fresh malai cottage cheese chunks, bell peppers, and red onions marinated in mustard oil tikka masala.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000047",
                "menuItemId": "d0000000-0000-0000-0000-000000000067",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000097",
                    "groupId": "e0000000-0000-0000-0000-000000000047",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000098",
                    "groupId": "e0000000-0000-0000-0000-000000000047",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000048",
                "menuItemId": "d0000000-0000-0000-0000-000000000067",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000099",
                    "groupId": "e0000000-0000-0000-0000-000000000048",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000100",
                    "groupId": "e0000000-0000-0000-0000-000000000048",
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
            "id": "d0000000-0000-0000-0000-000000000068",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000003",
            "name": "Butter Chicken Masala",
            "description": "Tandoori chicken pieces simmered in creamy makhani gravy enriched with butter and fenugreek leaves.",
            "price": 330,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000069",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000003",
            "name": "Mutton Rogan Josh",
            "description": "Kashmiri-style tender mutton curry cooked with red chillies, fennel seeds, and aromatic whole spices.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000070",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000003",
            "name": "Mirchi Ka Salan (Extra Portion)",
            "description": "Traditional Hyderabadi peanut, sesame, and green chilli curry accompaniment for biryani.",
            "price": 70,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000071",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000003",
            "name": "Butter Naan (2 pcs)",
            "description": "Soft and fluffy leavened white flour bread baked in tandoor and brushed generously with butter.",
            "price": 80,
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
        "id": "ca000000-0000-0000-0005-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000005",
        "name": "Heritage Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000072",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000004",
            "name": "Paradise Double Ka Meetha",
            "description": "Traditional Hyderabadi bread pudding soaked in saffron-cardamom flavored milk and garnished with nuts.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000073",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000004",
            "name": "Qubani Ka Meetha",
            "description": "Classic stewed dried apricot compote served with fresh cream, an indispensable Hyderabadi sweet.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000074",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000004",
            "name": "Gulab Jamun with Rabdi (2 pcs)",
            "description": "Soft deep-fried milk dumplings soaked in rose sugar syrup and served with creamy condensed rabdi.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000075",
            "restaurantId": "b0000000-0000-0000-0000-000000000005",
            "categoryId": "ca000000-0000-0000-0005-000000000004",
            "name": "Matka Phirni",
            "description": "Creamy slow-cooked ground rice pudding set in chilled clay cups and infused with saffron and pistachios.",
            "price": 95,
            "imageUrl": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000006",
    "name": "Bawarchi Restaurant",
    "slug": "bawarchi-restaurant",
    "tagline": "The iconic single-outlet RTC X Roads biryani benchmark",
    "description": "The legendary original Bawarchi at RTC X Roads, celebrated by generations for its deeply spiced Chicken Biryani, Mutton Fry Biryani, and sizzling Boti Kebabs.",
    "coverImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 6890,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Beside Sandhya Theatre, RTC X Roads, Chikkadpally",
    "city": "Hyderabad",
    "latitude": 17.4042,
    "longitude": 78.4978,
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
            "id": "d0000000-0000-0000-0000-000000000076",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000001",
            "name": "Bawarchi Special Mutton Biryani",
            "description": "RTC X Roads flagship mutton dum biryani with two tender mutton pieces, boiled egg, and mirchi ka salan.",
            "price": 410,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000049",
                "menuItemId": "d0000000-0000-0000-0000-000000000076",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000101",
                    "groupId": "e0000000-0000-0000-0000-000000000049",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000102",
                    "groupId": "e0000000-0000-0000-0000-000000000049",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 308,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000050",
                "menuItemId": "d0000000-0000-0000-0000-000000000076",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000103",
                    "groupId": "e0000000-0000-0000-0000-000000000050",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000104",
                    "groupId": "e0000000-0000-0000-0000-000000000050",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000077",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000001",
            "name": "Bawarchi Chicken Dum Biryani",
            "description": "The undisputed RTC X Roads bestseller chicken biryani, generously spiced with brown onions and mint.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000051",
                "menuItemId": "d0000000-0000-0000-0000-000000000077",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000105",
                    "groupId": "e0000000-0000-0000-0000-000000000051",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000106",
                    "groupId": "e0000000-0000-0000-0000-000000000051",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 218,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000052",
                "menuItemId": "d0000000-0000-0000-0000-000000000077",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000107",
                    "groupId": "e0000000-0000-0000-0000-000000000052",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000108",
                    "groupId": "e0000000-0000-0000-0000-000000000052",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000078",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000001",
            "name": "Mutton Fry Biryani",
            "description": "Hyderabadi biryani rice crowned with spicy, deeply pan-roasted bone-in mutton fry chunks.",
            "price": 430,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000053",
                "menuItemId": "d0000000-0000-0000-0000-000000000078",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000109",
                    "groupId": "e0000000-0000-0000-0000-000000000053",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000110",
                    "groupId": "e0000000-0000-0000-0000-000000000053",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 323,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000054",
                "menuItemId": "d0000000-0000-0000-0000-000000000078",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000111",
                    "groupId": "e0000000-0000-0000-0000-000000000054",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000112",
                    "groupId": "e0000000-0000-0000-0000-000000000054",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000079",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000001",
            "name": "Paneer Dum Biryani",
            "description": "Basmati rice cooked in dum style with marinated cottage cheese cubes, saffron, and fresh coriander.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000055",
                "menuItemId": "d0000000-0000-0000-0000-000000000079",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000113",
                    "groupId": "e0000000-0000-0000-0000-000000000055",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000114",
                    "groupId": "e0000000-0000-0000-0000-000000000055",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 180,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000056",
                "menuItemId": "d0000000-0000-0000-0000-000000000079",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000115",
                    "groupId": "e0000000-0000-0000-0000-000000000056",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000116",
                    "groupId": "e0000000-0000-0000-0000-000000000056",
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
            "id": "d0000000-0000-0000-0000-000000000080",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000002",
            "name": "Bawarchi Boti Kebab",
            "description": "Tender baby lamb cubes marinated in ginger, garlic, and fiery chilli paste, roasted over charcoal.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000057",
                "menuItemId": "d0000000-0000-0000-0000-000000000080",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000117",
                    "groupId": "e0000000-0000-0000-0000-000000000057",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000118",
                    "groupId": "e0000000-0000-0000-0000-000000000057",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000058",
                "menuItemId": "d0000000-0000-0000-0000-000000000080",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000119",
                    "groupId": "e0000000-0000-0000-0000-000000000058",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000120",
                    "groupId": "e0000000-0000-0000-0000-000000000058",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000081",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000002",
            "name": "Chicken 65 RTC X Roads Style",
            "description": "Deep-fried spicy boneless chicken pieces tossed with curry leaves, yoghurt, and green chillies.",
            "price": 270,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000082",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000002",
            "name": "Tangdi Kebab (3 pcs)",
            "description": "Chicken drumsticks marinated in spiced yoghurt and roasted over live charcoal until golden and tender.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000059",
                "menuItemId": "d0000000-0000-0000-0000-000000000082",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000121",
                    "groupId": "e0000000-0000-0000-0000-000000000059",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000122",
                    "groupId": "e0000000-0000-0000-0000-000000000059",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000060",
                "menuItemId": "d0000000-0000-0000-0000-000000000082",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000123",
                    "groupId": "e0000000-0000-0000-0000-000000000060",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000124",
                    "groupId": "e0000000-0000-0000-0000-000000000060",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000083",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000002",
            "name": "Apollo Fish Fry",
            "description": "Crisp batter-fried fresh fish fillets tossed with yoghurt, red chilli paste, and curry leaves.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000061",
                "menuItemId": "d0000000-0000-0000-0000-000000000083",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000125",
                    "groupId": "e0000000-0000-0000-0000-000000000061",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000126",
                    "groupId": "e0000000-0000-0000-0000-000000000061",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000062",
                "menuItemId": "d0000000-0000-0000-0000-000000000083",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000127",
                    "groupId": "e0000000-0000-0000-0000-000000000062",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000128",
                    "groupId": "e0000000-0000-0000-0000-000000000062",
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
            "id": "d0000000-0000-0000-0000-000000000084",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000003",
            "name": "Mutton Masala Gravy",
            "description": "Tender mutton cooked in a rich onion and tomato-based gravy with crushed garam masala.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000063",
                "menuItemId": "d0000000-0000-0000-0000-000000000084",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000129",
                    "groupId": "e0000000-0000-0000-0000-000000000063",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000130",
                    "groupId": "e0000000-0000-0000-0000-000000000063",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000131",
                    "groupId": "e0000000-0000-0000-0000-000000000063",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000085",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000003",
            "name": "Kadai Chicken",
            "description": "Chicken pieces cooked in an iron wok with bell peppers, tomatoes, and freshly ground coriander seeds.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000086",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000003",
            "name": "Dal Tadka Desi Ghee",
            "description": "Yellow lentils tempered with cumin seeds, garlic, red chillies, and pure desi cow ghee.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000064",
                "menuItemId": "d0000000-0000-0000-0000-000000000086",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000132",
                    "groupId": "e0000000-0000-0000-0000-000000000064",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000133",
                    "groupId": "e0000000-0000-0000-0000-000000000064",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000134",
                    "groupId": "e0000000-0000-0000-0000-000000000064",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000087",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000003",
            "name": "Roomali Roti (2 pcs)",
            "description": "Thin and soft flatbread baked on a hot domed griddle, best paired with kebabs and curries.",
            "price": 40,
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
            "id": "d0000000-0000-0000-0000-000000000088",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000004",
            "name": "Double Ka Meetha",
            "description": "Crisp fried bread soaked in warm saffron milk, condensed milk, and garnished with roasted almonds.",
            "price": 95,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000089",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000004",
            "name": "Khubani Ka Meetha with Ice Cream",
            "description": "Stewed apricots cooked to rich amber jam consistency, served with a scoop of vanilla ice cream.",
            "price": 130,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000090",
            "restaurantId": "b0000000-0000-0000-0000-000000000006",
            "categoryId": "ca000000-0000-0000-0006-000000000004",
            "name": "Sweet Lassi Bawarchi Special",
            "description": "Chilled thick sweet yoghurt drink whipped with cardamom and topped with fresh malai.",
            "price": 70,
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
    "tagline": "Legendary biryani, haleem & Irani chai since 1973",
    "description": "Hyderguda's historic culinary landmark operating since 1973. Famous for rich Mutton Dum Biryani, Tala Hua Gosht, and hot Irani chai brewed to perfection.",
    "coverImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 5740,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Old MLA Quarters Road, Hyderguda, Basheerbagh",
    "city": "Hyderabad",
    "latitude": 17.3995,
    "longitude": 78.4798,
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
            "id": "d0000000-0000-0000-0000-000000000091",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000001",
            "name": "Cafe Bahar Special Mutton Biryani",
            "description": "Hyderguda legendary mutton biryani packed with aromatic saffron rice, tender goat, and boiled egg.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000065",
                "menuItemId": "d0000000-0000-0000-0000-000000000091",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000135",
                    "groupId": "e0000000-0000-0000-0000-000000000065",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000136",
                    "groupId": "e0000000-0000-0000-0000-000000000065",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 315,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000066",
                "menuItemId": "d0000000-0000-0000-0000-000000000091",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000137",
                    "groupId": "e0000000-0000-0000-0000-000000000066",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000138",
                    "groupId": "e0000000-0000-0000-0000-000000000066",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000092",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000001",
            "name": "Classic Chicken Dum Biryani",
            "description": "Flavourful basmati rice cooked on slow charcoal dum with marinated tender chicken pieces.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000067",
                "menuItemId": "d0000000-0000-0000-0000-000000000092",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000139",
                    "groupId": "e0000000-0000-0000-0000-000000000067",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000140",
                    "groupId": "e0000000-0000-0000-0000-000000000067",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 210,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000068",
                "menuItemId": "d0000000-0000-0000-0000-000000000092",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000141",
                    "groupId": "e0000000-0000-0000-0000-000000000068",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000142",
                    "groupId": "e0000000-0000-0000-0000-000000000068",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000093",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000001",
            "name": "Fish Dum Biryani",
            "description": "Fragrant biryani rice layered with marinated boneless fish fillets and caramelized onions.",
            "price": 350,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000069",
                "menuItemId": "d0000000-0000-0000-0000-000000000093",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000143",
                    "groupId": "e0000000-0000-0000-0000-000000000069",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000144",
                    "groupId": "e0000000-0000-0000-0000-000000000069",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 263,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000070",
                "menuItemId": "d0000000-0000-0000-0000-000000000093",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000145",
                    "groupId": "e0000000-0000-0000-0000-000000000070",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000146",
                    "groupId": "e0000000-0000-0000-0000-000000000070",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000094",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000001",
            "name": "Bahar Veg Biryani Special",
            "description": "Aromatic basmati rice layered with seasoned mixed vegetables, fried cashews, and mint.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000071",
                "menuItemId": "d0000000-0000-0000-0000-000000000094",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000147",
                    "groupId": "e0000000-0000-0000-0000-000000000071",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000148",
                    "groupId": "e0000000-0000-0000-0000-000000000071",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 165,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000072",
                "menuItemId": "d0000000-0000-0000-0000-000000000094",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000149",
                    "groupId": "e0000000-0000-0000-0000-000000000072",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000150",
                    "groupId": "e0000000-0000-0000-0000-000000000072",
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
            "id": "d0000000-0000-0000-0000-000000000095",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000002",
            "name": "Mutton Boti Fry Bahar Style",
            "description": "Tender mutton boti morsels pan-fried with onions, crushed peppercorns, and green chillies.",
            "price": 350,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000073",
                "menuItemId": "d0000000-0000-0000-0000-000000000095",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000151",
                    "groupId": "e0000000-0000-0000-0000-000000000073",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000152",
                    "groupId": "e0000000-0000-0000-0000-000000000073",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000074",
                "menuItemId": "d0000000-0000-0000-0000-000000000095",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000153",
                    "groupId": "e0000000-0000-0000-0000-000000000074",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000154",
                    "groupId": "e0000000-0000-0000-0000-000000000074",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000096",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000002",
            "name": "Murgh Malai Kebab (6 pcs)",
            "description": "Boneless chicken cubes marinated in creamy yoghurt, mild green chillies, and melted butter.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000075",
                "menuItemId": "d0000000-0000-0000-0000-000000000096",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000155",
                    "groupId": "e0000000-0000-0000-0000-000000000075",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000156",
                    "groupId": "e0000000-0000-0000-0000-000000000075",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000076",
                "menuItemId": "d0000000-0000-0000-0000-000000000096",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000157",
                    "groupId": "e0000000-0000-0000-0000-000000000076",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000158",
                    "groupId": "e0000000-0000-0000-0000-000000000076",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000097",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000002",
            "name": "Tandoori Chicken (Full)",
            "description": "Whole chicken marinated in mustard oil, Kashmiri red chilli paste, and roasted in clay oven.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000098",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000002",
            "name": "Paneer Malai Tikka",
            "description": "Chunks of cottage cheese marinated in cream, cashew paste, and aromatic green cardamom.",
            "price": 270,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000077",
                "menuItemId": "d0000000-0000-0000-0000-000000000098",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000159",
                    "groupId": "e0000000-0000-0000-0000-000000000077",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000160",
                    "groupId": "e0000000-0000-0000-0000-000000000077",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000078",
                "menuItemId": "d0000000-0000-0000-0000-000000000098",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000161",
                    "groupId": "e0000000-0000-0000-0000-000000000078",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000162",
                    "groupId": "e0000000-0000-0000-0000-000000000078",
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
            "id": "d0000000-0000-0000-0000-000000000099",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000003",
            "name": "Mutton Tala Hua Gosht",
            "description": "Classic Hyderabadi dry meat fry prepared with boneless tender goat, curry leaves, and green chillies.",
            "price": 370,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000100",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000003",
            "name": "Butter Chicken Bahar",
            "description": "Tandoori chicken simmered in a silky, lightly sweet tomato butter gravy with dried fenugreek.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000101",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000003",
            "name": "Tandoori Roti (2 pcs)",
            "description": "Whole wheat flatbread baked against the charcoal tandoor wall.",
            "price": 36,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000102",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000003",
            "name": "Rumali Roti (2 pcs)",
            "description": "Thin and soft griddle-baked bread, perfect for wrapping spicy kebabs and dry meat.",
            "price": 40,
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
        "id": "ca000000-0000-0000-0007-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000007",
        "name": "Bahar Chai & Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000103",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000004",
            "name": "Special Irani Chai Flask (Serves 4)",
            "description": "Freshly brewed thick and creamy Hyderabadi Irani chai delivered hot in a flask.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000104",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000004",
            "name": "Khubani Ka Meetha",
            "description": "Stewed dried apricots cooked to thick compote, topped with custard and blanched almond slivers.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000105",
            "restaurantId": "b0000000-0000-0000-0000-000000000007",
            "categoryId": "ca000000-0000-0000-0007-000000000004",
            "name": "Double Ka Meetha",
            "description": "Traditional golden fried bread pudding soaked in saffron milk and condensed milk.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000008",
    "name": "Hotel Shadab",
    "slug": "hotel-shadab",
    "tagline": "Historic Old City culinary crown near Charminar",
    "description": "The heartbeat of Old City Hyderabad near Madina Circle. Renowned for rich Zafrani Mutton Biryani, morning Paya Nahari, Bheja Fry, and flaky sheermal.",
    "coverImage": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 7420,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 250,
    "deliveryFee": 45,
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
            "id": "d0000000-0000-0000-0000-000000000106",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000001",
            "name": "Shadab Special Zafrani Mutton Biryani",
            "description": "Old City signature mutton biryani made with fragrant aged basmati rice, tender mutton cuts, and saffron.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000079",
                "menuItemId": "d0000000-0000-0000-0000-000000000106",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000163",
                    "groupId": "e0000000-0000-0000-0000-000000000079",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000164",
                    "groupId": "e0000000-0000-0000-0000-000000000079",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 315,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000080",
                "menuItemId": "d0000000-0000-0000-0000-000000000106",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000165",
                    "groupId": "e0000000-0000-0000-0000-000000000080",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000166",
                    "groupId": "e0000000-0000-0000-0000-000000000080",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000107",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000001",
            "name": "Shadab Chicken Dum Biryani",
            "description": "Flavor-packed Hyderabadi chicken dum biryani served with spicy mirchi ka salan and dahi ki chutney.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000081",
                "menuItemId": "d0000000-0000-0000-0000-000000000107",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000167",
                    "groupId": "e0000000-0000-0000-0000-000000000081",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000168",
                    "groupId": "e0000000-0000-0000-0000-000000000081",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 218,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000082",
                "menuItemId": "d0000000-0000-0000-0000-000000000107",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000169",
                    "groupId": "e0000000-0000-0000-0000-000000000082",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000170",
                    "groupId": "e0000000-0000-0000-0000-000000000082",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000108",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000001",
            "name": "Mutton Kheema Biryani",
            "description": "Spiced minced lamb cooked in dum style with long-grain rice, fresh mint, and browned onions.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000083",
                "menuItemId": "d0000000-0000-0000-0000-000000000108",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000171",
                    "groupId": "e0000000-0000-0000-0000-000000000083",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000172",
                    "groupId": "e0000000-0000-0000-0000-000000000083",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 270,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000084",
                "menuItemId": "d0000000-0000-0000-0000-000000000108",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000173",
                    "groupId": "e0000000-0000-0000-0000-000000000084",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000174",
                    "groupId": "e0000000-0000-0000-0000-000000000084",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000109",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000001",
            "name": "Vegetable Dum Biryani",
            "description": "Garden vegetables slow-simmered with aromatic rice, cardamom, and fried onions.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000085",
                "menuItemId": "d0000000-0000-0000-0000-000000000109",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000175",
                    "groupId": "e0000000-0000-0000-0000-000000000085",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000176",
                    "groupId": "e0000000-0000-0000-0000-000000000085",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 165,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000086",
                "menuItemId": "d0000000-0000-0000-0000-000000000109",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000177",
                    "groupId": "e0000000-0000-0000-0000-000000000086",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000178",
                    "groupId": "e0000000-0000-0000-0000-000000000086",
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
            "id": "d0000000-0000-0000-0000-000000000110",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000002",
            "name": "Authentic Mutton Marag & Sheermal",
            "description": "Traditional thin mutton broth simmered with cracked black pepper, pistachios, and paired with sheermal.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000111",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000002",
            "name": "Bheja Fry Old City Style",
            "description": "Tender goat brain tossed on hot tawa with green chillies, ginger juliennes, and ground spices.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000087",
                "menuItemId": "d0000000-0000-0000-0000-000000000111",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000179",
                    "groupId": "e0000000-0000-0000-0000-000000000087",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000180",
                    "groupId": "e0000000-0000-0000-0000-000000000087",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000088",
                "menuItemId": "d0000000-0000-0000-0000-000000000111",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000181",
                    "groupId": "e0000000-0000-0000-0000-000000000088",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000182",
                    "groupId": "e0000000-0000-0000-0000-000000000088",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000112",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000002",
            "name": "Paya Nahari with Kulcha",
            "description": "Slow-cooked trotter soup simmered overnight with bone marrow and herbs, served with warm kulcha.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000113",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000002",
            "name": "Gurda Kaleji Fry",
            "description": "Mutton kidneys and liver pan-fried with onions, curry leaves, and crushed black pepper.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000089",
                "menuItemId": "d0000000-0000-0000-0000-000000000113",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000183",
                    "groupId": "e0000000-0000-0000-0000-000000000089",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000184",
                    "groupId": "e0000000-0000-0000-0000-000000000089",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000090",
                "menuItemId": "d0000000-0000-0000-0000-000000000113",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000185",
                    "groupId": "e0000000-0000-0000-0000-000000000090",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000186",
                    "groupId": "e0000000-0000-0000-0000-000000000090",
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
            "id": "d0000000-0000-0000-0000-000000000114",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000003",
            "name": "Shikampur Kebab (4 pcs)",
            "description": "Tender minced meat patties stuffed with hung yoghurt, mint, and green chillies, pan-seared in ghee.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000091",
                "menuItemId": "d0000000-0000-0000-0000-000000000114",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000187",
                    "groupId": "e0000000-0000-0000-0000-000000000091",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000188",
                    "groupId": "e0000000-0000-0000-0000-000000000091",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000092",
                "menuItemId": "d0000000-0000-0000-0000-000000000114",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000189",
                    "groupId": "e0000000-0000-0000-0000-000000000092",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000190",
                    "groupId": "e0000000-0000-0000-0000-000000000092",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000115",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000003",
            "name": "Mutton Rogan Josh Shadab",
            "description": "Rich gravy of tender mutton pieces simmered in Kashmiri red chillies and yoghurt.",
            "price": 350,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000116",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000003",
            "name": "Tandoori Murgh (Full)",
            "description": "Whole marinated chicken roasted in clay oven, seasoned with chaat masala and lime juice.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000117",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000003",
            "name": "Tandoori Naan (2 pcs)",
            "description": "Fluffy tandoor-baked flatbreads, ideal for scooping up thick gravies.",
            "price": 50,
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
        "id": "ca000000-0000-0000-0008-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000008",
        "name": "Deccani Sweets & Chai",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000118",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000004",
            "name": "Shadab Special Shahi Tukda",
            "description": "Crispy fried bread soaked in saffron milk and topped with thick rabdi and dry fruits.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000119",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000004",
            "name": "Qubani Ka Meetha with Malai",
            "description": "Stewed dried apricots garnished with fresh clotted malai and blanched apricot kernels.",
            "price": 130,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000120",
            "restaurantId": "b0000000-0000-0000-0000-000000000008",
            "categoryId": "ca000000-0000-0000-0008-000000000004",
            "name": "Irani Zafrani Chai Flask",
            "description": "Authentic Old City Irani dum tea brewed with saffron and caramelized milk.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000009",
    "name": "Pista House",
    "slug": "pista-house",
    "tagline": "World-famous GI-tagged Haleem & Hyderabadi bakery classics",
    "description": "Renowned world over for its Geographical Indication (GI) tagged Hyderabadi Mutton Haleem, aromatic Zafrani Dum Biryani, and traditional bakery delicacies.",
    "coverImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 8120,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Opposite Cyber Gateway, HITEC City Main Road, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4475,
    "longitude": 78.3789,
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
            "id": "d0000000-0000-0000-0000-000000000121",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000001",
            "name": "Pista House Royal Mutton Haleem",
            "description": "Pure mutton pounded with broken wheat, pure ghee, lentils, and royal spices, slow-cooked for 12 hours.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000122",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000001",
            "name": "Special Chicken Haleem",
            "description": "Flavorful chicken haleem slow-cooked with wheat, lentils, and spices, topped with fried onions and mint.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000123",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000001",
            "name": "Family Pack Mutton Haleem (1 kg)",
            "description": "Grand 1 kg pack of GI-tagged mutton haleem served with fried onions, cashew nuts, and fresh lime.",
            "price": 850,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000124",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000001",
            "name": "Vegetarian Dry Fruit Haleem",
            "description": "A delicate vegetarian rendition prepared with oats, cracked wheat, lentils, and rich roasted dry fruits.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
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
            "id": "d0000000-0000-0000-0000-000000000125",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000002",
            "name": "Zafrani Mutton Dum Biryani",
            "description": "Fragrant basmati rice cooked on charcoal dum with tender mutton chunks and saffron infusion.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000093",
                "menuItemId": "d0000000-0000-0000-0000-000000000125",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000191",
                    "groupId": "e0000000-0000-0000-0000-000000000093",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000192",
                    "groupId": "e0000000-0000-0000-0000-000000000093",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 293,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000094",
                "menuItemId": "d0000000-0000-0000-0000-000000000125",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000193",
                    "groupId": "e0000000-0000-0000-0000-000000000094",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000194",
                    "groupId": "e0000000-0000-0000-0000-000000000094",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000126",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000002",
            "name": "Zafrani Chicken Dum Biryani",
            "description": "Signature Hyderabadi chicken biryani cooked with aged basmati rice, mint, and fried onions.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000095",
                "menuItemId": "d0000000-0000-0000-0000-000000000126",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000195",
                    "groupId": "e0000000-0000-0000-0000-000000000095",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000196",
                    "groupId": "e0000000-0000-0000-0000-000000000095",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 218,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000096",
                "menuItemId": "d0000000-0000-0000-0000-000000000126",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000197",
                    "groupId": "e0000000-0000-0000-0000-000000000096",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000198",
                    "groupId": "e0000000-0000-0000-0000-000000000096",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000127",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000002",
            "name": "Special Mutton Kheema Biryani",
            "description": "Slow-cooked spiced mutton mince layered with aromatic basmati rice and fresh herbs.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000097",
                "menuItemId": "d0000000-0000-0000-0000-000000000127",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000199",
                    "groupId": "e0000000-0000-0000-0000-000000000097",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000200",
                    "groupId": "e0000000-0000-0000-0000-000000000097",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 255,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000098",
                "menuItemId": "d0000000-0000-0000-0000-000000000127",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000201",
                    "groupId": "e0000000-0000-0000-0000-000000000098",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000202",
                    "groupId": "e0000000-0000-0000-0000-000000000098",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000128",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000002",
            "name": "Paneer Dum Biryani Handi",
            "description": "Earthen pot biryani cooked with marinated paneer cubes and whole garam masala.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000099",
                "menuItemId": "d0000000-0000-0000-0000-000000000128",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000203",
                    "groupId": "e0000000-0000-0000-0000-000000000099",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000204",
                    "groupId": "e0000000-0000-0000-0000-000000000099",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 180,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000100",
                "menuItemId": "d0000000-0000-0000-0000-000000000128",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000205",
                    "groupId": "e0000000-0000-0000-0000-000000000100",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000206",
                    "groupId": "e0000000-0000-0000-0000-000000000100",
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
            "id": "d0000000-0000-0000-0000-000000000129",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000003",
            "name": "Mutton Seekh Kebab",
            "description": "Charcoal-grilled minced mutton skewers flavored with cumin, ginger, and green chillies.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000101",
                "menuItemId": "d0000000-0000-0000-0000-000000000129",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000207",
                    "groupId": "e0000000-0000-0000-0000-000000000101",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000208",
                    "groupId": "e0000000-0000-0000-0000-000000000101",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000102",
                "menuItemId": "d0000000-0000-0000-0000-000000000129",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000209",
                    "groupId": "e0000000-0000-0000-0000-000000000102",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000210",
                    "groupId": "e0000000-0000-0000-0000-000000000102",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000130",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000003",
            "name": "Murgh Tikka (6 pcs)",
            "description": "Tender chicken morsels marinated in spiced yoghurt and roasted in clay oven.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000103",
                "menuItemId": "d0000000-0000-0000-0000-000000000130",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000211",
                    "groupId": "e0000000-0000-0000-0000-000000000103",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000212",
                    "groupId": "e0000000-0000-0000-0000-000000000103",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000104",
                "menuItemId": "d0000000-0000-0000-0000-000000000130",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000213",
                    "groupId": "e0000000-0000-0000-0000-000000000104",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000214",
                    "groupId": "e0000000-0000-0000-0000-000000000104",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000131",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000003",
            "name": "Mutton Rogan Josh",
            "description": "Aromatic mutton curry simmered in rich gravy with Kashmiri red chillies and whole spices.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000132",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000003",
            "name": "Butter Naan",
            "description": "Clay-oven baked white flour flatbread brushed with butter.",
            "price": 45,
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
        "id": "ca000000-0000-0000-0009-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000009",
        "name": "Bakery Confections & Sweets",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000133",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000004",
            "name": "Apricot Delight Cake Slice",
            "description": "Sponge cake layered with rich stewed apricot compote and whipped custard.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000134",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000004",
            "name": "Assorted Baklava Box (250g)",
            "description": "Crisp multi-layered Middle Eastern phyllo pastry loaded with chopped pistachios and honey.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000135",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000004",
            "name": "Osmania Biscuits Tin (400g)",
            "description": "The quintessential sweet and salty Hyderabadi melt-in-mouth chai tea biscuits.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000136",
            "restaurantId": "b0000000-0000-0000-0000-000000000009",
            "categoryId": "ca000000-0000-0000-0009-000000000004",
            "name": "Khubani Ka Meetha",
            "description": "Stewed dried apricots garnished with cream and blanched almond slivers.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000010",
    "name": "Shah Ghouse Hotel & Restaurant",
    "slug": "shah-ghouse",
    "tagline": "Legendary night dining, mutton biryani & boti kebabs",
    "description": "A heavyweight culinary institution in Hyderabad famed for its late-night bustling service, authentic Mutton Dum Biryani, Tala Hua Gosht, and rich Haleem.",
    "coverImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 6790,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Opposite Bio-Diversity Park, Raidurgam, Gachibowli",
    "city": "Hyderabad",
    "latitude": 17.4328,
    "longitude": 78.3752,
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
            "id": "d0000000-0000-0000-0000-000000000137",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000001",
            "name": "Shah Ghouse Special Mutton Biryani",
            "description": "The famous house special dum biryani packed with tender goat meat pieces, egg, and spiced rice.",
            "price": 410,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000105",
                "menuItemId": "d0000000-0000-0000-0000-000000000137",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000215",
                    "groupId": "e0000000-0000-0000-0000-000000000105",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000216",
                    "groupId": "e0000000-0000-0000-0000-000000000105",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 308,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000106",
                "menuItemId": "d0000000-0000-0000-0000-000000000137",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000217",
                    "groupId": "e0000000-0000-0000-0000-000000000106",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000218",
                    "groupId": "e0000000-0000-0000-0000-000000000106",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000138",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000001",
            "name": "Special Chicken Dum Biryani",
            "description": "Flavourful basmati rice layered with spiced chicken, mint, and fried onions, served with salan and raita.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000107",
                "menuItemId": "d0000000-0000-0000-0000-000000000138",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000219",
                    "groupId": "e0000000-0000-0000-0000-000000000107",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000220",
                    "groupId": "e0000000-0000-0000-0000-000000000107",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 218,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000108",
                "menuItemId": "d0000000-0000-0000-0000-000000000138",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000221",
                    "groupId": "e0000000-0000-0000-0000-000000000108",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000222",
                    "groupId": "e0000000-0000-0000-0000-000000000108",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000139",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000001",
            "name": "Mutton Fry Piece Biryani",
            "description": "Aromatic biryani rice topped with spicy, pan-fried succulent mutton fry chunks.",
            "price": 430,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000109",
                "menuItemId": "d0000000-0000-0000-0000-000000000139",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000223",
                    "groupId": "e0000000-0000-0000-0000-000000000109",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000224",
                    "groupId": "e0000000-0000-0000-0000-000000000109",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 323,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000110",
                "menuItemId": "d0000000-0000-0000-0000-000000000139",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000225",
                    "groupId": "e0000000-0000-0000-0000-000000000110",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000226",
                    "groupId": "e0000000-0000-0000-0000-000000000110",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000140",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000001",
            "name": "Veg Dum Biryani",
            "description": "Dum-cooked basmati rice with mixed fresh vegetables and whole aromatic spices.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000111",
                "menuItemId": "d0000000-0000-0000-0000-000000000140",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000227",
                    "groupId": "e0000000-0000-0000-0000-000000000111",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000228",
                    "groupId": "e0000000-0000-0000-0000-000000000111",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 158,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000112",
                "menuItemId": "d0000000-0000-0000-0000-000000000140",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000229",
                    "groupId": "e0000000-0000-0000-0000-000000000112",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000230",
                    "groupId": "e0000000-0000-0000-0000-000000000112",
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
            "id": "d0000000-0000-0000-0000-000000000141",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000002",
            "name": "Shah Ghouse Mutton Haleem",
            "description": "Slow-simmered pounded meat and wheat porridge prepared in pure ghee with aromatic spices.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000142",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000002",
            "name": "Tangdi Kebab (3 pcs)",
            "description": "Juicy chicken drumsticks marinated in spicy yoghurt tikka marinade, char-grilled in tandoor.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000113",
                "menuItemId": "d0000000-0000-0000-0000-000000000142",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000231",
                    "groupId": "e0000000-0000-0000-0000-000000000113",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000232",
                    "groupId": "e0000000-0000-0000-0000-000000000113",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000114",
                "menuItemId": "d0000000-0000-0000-0000-000000000142",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000233",
                    "groupId": "e0000000-0000-0000-0000-000000000114",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000234",
                    "groupId": "e0000000-0000-0000-0000-000000000114",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000143",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000002",
            "name": "Tala Hua Gosht",
            "description": "Crisp boneless mutton pieces pan-fried with onions, curry leaves, and green chillies.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000144",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000002",
            "name": "Chicken Reshmi Kebab (6 pcs)",
            "description": "Melt-in-mouth chicken breast cubes marinated in cream, cashews, and mild spices.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000115",
                "menuItemId": "d0000000-0000-0000-0000-000000000144",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000235",
                    "groupId": "e0000000-0000-0000-0000-000000000115",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000236",
                    "groupId": "e0000000-0000-0000-0000-000000000115",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000116",
                "menuItemId": "d0000000-0000-0000-0000-000000000144",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000237",
                    "groupId": "e0000000-0000-0000-0000-000000000116",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000238",
                    "groupId": "e0000000-0000-0000-0000-000000000116",
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
            "id": "d0000000-0000-0000-0000-000000000145",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000003",
            "name": "Mutton Korma",
            "description": "Classic mutton curry slow-cooked with browned onion paste, yoghurt, and whole spices.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000117",
                "menuItemId": "d0000000-0000-0000-0000-000000000145",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000239",
                    "groupId": "e0000000-0000-0000-0000-000000000117",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000240",
                    "groupId": "e0000000-0000-0000-0000-000000000117",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000241",
                    "groupId": "e0000000-0000-0000-0000-000000000117",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000146",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000003",
            "name": "Murgh Makhani Butter Chicken",
            "description": "Tandoori chicken pieces simmered in sweet and tangy butter tomato gravy.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000147",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000003",
            "name": "Roomali Roti (2 pcs)",
            "description": "Handkerchief thin griddle flatbreads made fresh.",
            "price": 40,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000148",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000003",
            "name": "Butter Naan (2 pcs)",
            "description": "Tandoori leavened flatbreads topped with melted butter.",
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
        "id": "ca000000-0000-0000-0010-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000010",
        "name": "Desserts & Chai",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000149",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000004",
            "name": "Special Double Ka Meetha",
            "description": "Traditional fried bread pudding in saffron-scented condensed milk.",
            "price": 95,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000150",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000004",
            "name": "Qubani Ka Meetha with Cream",
            "description": "Rich stewed apricot compote with fresh cream.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000151",
            "restaurantId": "b0000000-0000-0000-0000-000000000010",
            "categoryId": "ca000000-0000-0000-0010-000000000004",
            "name": "Irani Dum Chai Flask",
            "description": "Freshly prepared thick Hyderabadi Irani chai in insulated flask.",
            "price": 100,
            "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000011",
    "name": "Rayalaseema Ruchulu",
    "slug": "rayalaseema-ruchulu",
    "tagline": "Authentic fiery Rayalaseema & Andhra culinary heritage",
    "description": "Renowned for introducing authentic Rayalaseema cuisine to Hyderabad. Celebrated for Ragi Sankati with Natu Kodi Pulusu, spicy Gongura Mamsam, and Rayalaseema thalis.",
    "coverImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 3820,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Level 5, 36th Square, Road No. 36, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4325,
    "longitude": 78.4072,
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
        "name": "Rayalaseema Starters & Vepudus",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000152",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000001",
            "name": "Kodi Vepudu",
            "description": "Tender chicken tossed with village spices, curry leaves, and green chillies.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000118",
                "menuItemId": "d0000000-0000-0000-0000-000000000152",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000242",
                    "groupId": "e0000000-0000-0000-0000-000000000118",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000243",
                    "groupId": "e0000000-0000-0000-0000-000000000118",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000119",
                "menuItemId": "d0000000-0000-0000-0000-000000000152",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000244",
                    "groupId": "e0000000-0000-0000-0000-000000000119",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000245",
                    "groupId": "e0000000-0000-0000-0000-000000000119",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000153",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000001",
            "name": "Rayalaseema Mamsam Vepudu",
            "description": "Pan-roasted tender mutton cooked dry with shallots and black pepper.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000120",
                "menuItemId": "d0000000-0000-0000-0000-000000000153",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000246",
                    "groupId": "e0000000-0000-0000-0000-000000000120",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000247",
                    "groupId": "e0000000-0000-0000-0000-000000000120",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000121",
                "menuItemId": "d0000000-0000-0000-0000-000000000153",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000248",
                    "groupId": "e0000000-0000-0000-0000-000000000121",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000249",
                    "groupId": "e0000000-0000-0000-0000-000000000121",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000154",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000001",
            "name": "Royyala Vepudu (Prawn Fry)",
            "description": "Fresh prawns pan-fried with caramelized onions and roasted spices.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000122",
                "menuItemId": "d0000000-0000-0000-0000-000000000154",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000250",
                    "groupId": "e0000000-0000-0000-0000-000000000122",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000251",
                    "groupId": "e0000000-0000-0000-0000-000000000122",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000123",
                "menuItemId": "d0000000-0000-0000-0000-000000000154",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000252",
                    "groupId": "e0000000-0000-0000-0000-000000000123",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000253",
                    "groupId": "e0000000-0000-0000-0000-000000000123",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000155",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000001",
            "name": "Kaju Paneer Vepudu",
            "description": "Crisp cottage cheese cubes dry-fried with roasted cashews and curry leaves.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000124",
                "menuItemId": "d0000000-0000-0000-0000-000000000155",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000254",
                    "groupId": "e0000000-0000-0000-0000-000000000124",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000255",
                    "groupId": "e0000000-0000-0000-0000-000000000124",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000125",
                "menuItemId": "d0000000-0000-0000-0000-000000000155",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000256",
                    "groupId": "e0000000-0000-0000-0000-000000000125",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000257",
                    "groupId": "e0000000-0000-0000-0000-000000000125",
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
        "id": "ca000000-0000-0000-0011-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000011",
        "name": "Rustic Curries & Ragi Combos",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000156",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000002",
            "name": "Ragi Sankati with Natu Kodi Pulusu",
            "description": "Country chicken curry simmered with spicy Rayalaseema masala, served with steamed ragi mudda and ghee.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 28,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000126",
                "menuItemId": "d0000000-0000-0000-0000-000000000156",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000258",
                    "groupId": "e0000000-0000-0000-0000-000000000126",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000259",
                    "groupId": "e0000000-0000-0000-0000-000000000126",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000260",
                    "groupId": "e0000000-0000-0000-0000-000000000126",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000157",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000002",
            "name": "Gongura Mamsam",
            "description": "Tender baby mutton pieces simmered in a tangy sorrel leaves gravy.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000158",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000002",
            "name": "Rayalaseema Talakaya Kura",
            "description": "Traditional head meat stew slow-cooked with village spices and black pepper.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000159",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000002",
            "name": "Gutti Vankaya Kura",
            "description": "Baby brinjals cooked in roasted peanut, sesame, and coriander gravy.",
            "price": 260,
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
        "id": "ca000000-0000-0000-0011-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000011",
        "name": "Pulaos, Thalis & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000160",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000003",
            "name": "Ulavacharu Kodi Pulao",
            "description": "Fragrant rice cooked in rich horse gram broth, topped with spicy chicken.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000127",
                "menuItemId": "d0000000-0000-0000-0000-000000000160",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000261",
                    "groupId": "e0000000-0000-0000-0000-000000000127",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000262",
                    "groupId": "e0000000-0000-0000-0000-000000000127",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 285,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000128",
                "menuItemId": "d0000000-0000-0000-0000-000000000160",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000263",
                    "groupId": "e0000000-0000-0000-0000-000000000128",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000264",
                    "groupId": "e0000000-0000-0000-0000-000000000128",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000161",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000003",
            "name": "Rayalaseema Special Non-Veg Thali",
            "description": "Grand feast featuring chicken curry, mutton fry, sambar, rasam, curd, and sweets.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000162",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000003",
            "name": "Jonnah Roti (2 pcs)",
            "description": "Healthy and wholesome unleavened flatbreads made from roasted jowar millet flour.",
            "price": 60,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000163",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000003",
            "name": "Ulava Charu with Cream",
            "description": "Traditional thick horse gram soup served with fresh malai and hot steamed rice accompaniment.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
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
            "id": "d0000000-0000-0000-0000-000000000164",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000004",
            "name": "Junnu (Colostrum Milk Pudding)",
            "description": "Steamed sweet delicacy made with first-day cow milk, jaggery, and black pepper.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000165",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000004",
            "name": "Poornam Boorelu (2 pcs)",
            "description": "Crisp golden batter-fried balls filled with sweet chana dal and jaggery mixture.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000166",
            "restaurantId": "b0000000-0000-0000-0000-000000000011",
            "categoryId": "ca000000-0000-0000-0011-000000000004",
            "name": "Majjiga Charu Cooler",
            "description": "Traditional spiced buttermilk flavored with crushed ginger, mustard, and green chillies.",
            "price": 60,
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
    "tagline": "Iconic South Indian tiffins & the legendary 6 signature chutneys",
    "description": "Hyderabad's premier vegetarian breakfast and tiffin destination. Famous for Babai Idli with pure white butter, Guntur Karampodi Dosa, MLA Pesarattu, and its signature rainbow chutneys.",
    "coverImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 5340,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 20,
    "deliveryTimeEstimateMax": 35,
    "minimumOrderAmount": 200,
    "deliveryFee": 35,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 3-6-271, Road No. 3, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4235,
    "longitude": 78.4485,
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
            "id": "d0000000-0000-0000-0000-000000000167",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000001",
            "name": "Babai Idli with White Butter (3 pcs)",
            "description": "Ultra-soft steamed rice idlis topped with a dollop of fresh churned white butter and podi.",
            "price": 155,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000129",
                "menuItemId": "d0000000-0000-0000-0000-000000000167",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000265",
                    "groupId": "e0000000-0000-0000-0000-000000000129",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000266",
                    "groupId": "e0000000-0000-0000-0000-000000000129",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000168",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000001",
            "name": "Guntur Idli Karampodi Spiced",
            "description": "Steamed idlis tossed in roasted Guntur red chilli podi and pure desi ghee.",
            "price": 145,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000130",
                "menuItemId": "d0000000-0000-0000-0000-000000000168",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000267",
                    "groupId": "e0000000-0000-0000-0000-000000000130",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000268",
                    "groupId": "e0000000-0000-0000-0000-000000000130",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000169",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000001",
            "name": "Meda Vada Sambar (2 pcs)",
            "description": "Crisp on the outside, fluffy inside lentil doughnuts served with hot spiced vegetable sambar.",
            "price": 135,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000170",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000001",
            "name": "Poori with Potato Sagu (3 pcs)",
            "description": "Fluffy golden fried whole wheat pooris served with spiced potato sagu and coconut chutney.",
            "price": 145,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
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
            "id": "d0000000-0000-0000-0000-000000000171",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000002",
            "name": "MLA Pesarattu with Upma Filling",
            "description": "Whole green gram batter crepe roasted on griddle, stuffed with ginger-spiced semolina upma.",
            "price": 175,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000172",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000002",
            "name": "Ghee Karam Dosa",
            "description": "Crisp golden crepe roasted in pure ghee and spiced with traditional Andhra karampodi.",
            "price": 165,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000131",
                "menuItemId": "d0000000-0000-0000-0000-000000000172",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000269",
                    "groupId": "e0000000-0000-0000-0000-000000000131",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000270",
                    "groupId": "e0000000-0000-0000-0000-000000000131",
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
            "categoryId": "ca000000-0000-0000-0012-000000000002",
            "name": "Corn and Cheese Dosa",
            "description": "Modern fusion crepe layered with sweet corn kernels, melted mozzarella, and green chillies.",
            "price": 195,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000132",
                "menuItemId": "d0000000-0000-0000-0000-000000000173",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000271",
                    "groupId": "e0000000-0000-0000-0000-000000000132",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000272",
                    "groupId": "e0000000-0000-0000-0000-000000000132",
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
            "categoryId": "ca000000-0000-0000-0012-000000000002",
            "name": "Butter Masala Dosa",
            "description": "Crispy fermented crepe smeared with red garlic chutney, filled with potato bhaji and butter.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000133",
                "menuItemId": "d0000000-0000-0000-0000-000000000174",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000273",
                    "groupId": "e0000000-0000-0000-0000-000000000133",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000274",
                    "groupId": "e0000000-0000-0000-0000-000000000133",
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
            "id": "d0000000-0000-0000-0000-000000000175",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000003",
            "name": "South Indian Special Thali Feast",
            "description": "Complete traditional vegetarian meal with poori, rice, sambar, rasam, kootu, curd, and sweet.",
            "price": 265,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000176",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000003",
            "name": "Bisi Bele Bath with Boondi",
            "description": "Karnataka-style spiced rice and lentil porridge cooked with seasonal vegetables and pure ghee.",
            "price": 155,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000177",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000003",
            "name": "Lemon Rice with Fried Peanuts",
            "description": "Fragrant rice tempered with turmeric, fresh lemon juice, curry leaves, and crunchy peanuts.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000178",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000003",
            "name": "Tempered Curd Rice",
            "description": "Cooling seasoned yoghurt rice tempered with mustard seeds, green chillies, and ginger.",
            "price": 130,
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
        "id": "ca000000-0000-0000-0012-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000012",
        "name": "Beverages & Sweets",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000179",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000004",
            "name": "Degree Filter Coffee",
            "description": "Authentic South Indian chicory filter coffee frothed to perfection in brass tumbler.",
            "price": 65,
            "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000134",
                "menuItemId": "d0000000-0000-0000-0000-000000000179",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000275",
                    "groupId": "e0000000-0000-0000-0000-000000000134",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000276",
                    "groupId": "e0000000-0000-0000-0000-000000000134",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000277",
                    "groupId": "e0000000-0000-0000-0000-000000000134",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000180",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000004",
            "name": "Rava Kesari Bath with Cashews",
            "description": "Warm golden semolina pudding enriched with pure ghee, saffron, and roasted cashew nuts.",
            "price": 105,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000181",
            "restaurantId": "b0000000-0000-0000-0000-000000000012",
            "categoryId": "ca000000-0000-0000-0012-000000000004",
            "name": "Spiced Neer Moru (Buttermilk)",
            "description": "Chilled buttermilk tempered with ginger, green chillies, hing, and fresh coriander.",
            "price": 55,
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
    "id": "b0000000-0000-0000-0000-000000000013",
    "name": "Tatva",
    "slug": "tatva",
    "tagline": "Refined pure vegetarian gourmet dining in Jubilee Hills",
    "description": "Award-winning vegetarian fine dining on Road No. 36. An exquisite fusion of contemporary Indian, Mediterranean, and European cuisines in an elegant setting.",
    "coverImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 2450,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 400,
    "deliveryFee": 55,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 1215/A, Road No. 36, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4332,
    "longitude": 78.4045,
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
            "id": "d0000000-0000-0000-0000-000000000182",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000001",
            "name": "Galouti Kebab Veg",
            "description": "Melt-in-mouth smoked yam and lentil kebabs infused with royal spices, served on coin parathas.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000135",
                "menuItemId": "d0000000-0000-0000-0000-000000000182",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000278",
                    "groupId": "e0000000-0000-0000-0000-000000000135",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000279",
                    "groupId": "e0000000-0000-0000-0000-000000000135",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000136",
                "menuItemId": "d0000000-0000-0000-0000-000000000182",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000280",
                    "groupId": "e0000000-0000-0000-0000-000000000136",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000281",
                    "groupId": "e0000000-0000-0000-0000-000000000136",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000183",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000001",
            "name": "Paneer Tikka Angaar",
            "description": "Cottage cheese cubes marinated in fiery red spices and hung curd, roasted in clay oven.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000137",
                "menuItemId": "d0000000-0000-0000-0000-000000000183",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000282",
                    "groupId": "e0000000-0000-0000-0000-000000000137",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000283",
                    "groupId": "e0000000-0000-0000-0000-000000000137",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000138",
                "menuItemId": "d0000000-0000-0000-0000-000000000183",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000284",
                    "groupId": "e0000000-0000-0000-0000-000000000138",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000285",
                    "groupId": "e0000000-0000-0000-0000-000000000138",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000184",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000001",
            "name": "Dahi Ke Kebab",
            "description": "Crispy outer shell filled with spiced hung yoghurt, coriander, and pomegranate reduction.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000139",
                "menuItemId": "d0000000-0000-0000-0000-000000000184",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000286",
                    "groupId": "e0000000-0000-0000-0000-000000000139",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000287",
                    "groupId": "e0000000-0000-0000-0000-000000000139",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000140",
                "menuItemId": "d0000000-0000-0000-0000-000000000184",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000288",
                    "groupId": "e0000000-0000-0000-0000-000000000140",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000289",
                    "groupId": "e0000000-0000-0000-0000-000000000140",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000185",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000001",
            "name": "Crispy Lotus Stem Honey Chilli",
            "description": "Thinly sliced lotus stem crisped and tossed with honey, sesame, and scallions.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0013-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000013",
        "name": "Signature Curries & Handis",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000186",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000002",
            "name": "Dal Tatva Special",
            "description": "Slow-simmered black lentils cooked overnight on charcoal with rich cream and churned butter.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000141",
                "menuItemId": "d0000000-0000-0000-0000-000000000186",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000290",
                    "groupId": "e0000000-0000-0000-0000-000000000141",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000291",
                    "groupId": "e0000000-0000-0000-0000-000000000141",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000292",
                    "groupId": "e0000000-0000-0000-0000-000000000141",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000187",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000002",
            "name": "Paneer Lababdar Handi",
            "description": "Fresh malai paneer simmered in a spiced tomato, cashew, and onion gravy with ginger.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000188",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000002",
            "name": "Subz Handi Biryani",
            "description": "Fragrant aged basmati rice cooked on dum with seasonal vegetables and whole spices in clay handi.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000142",
                "menuItemId": "d0000000-0000-0000-0000-000000000188",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000293",
                    "groupId": "e0000000-0000-0000-0000-000000000142",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000294",
                    "groupId": "e0000000-0000-0000-0000-000000000142",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 293,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000143",
                "menuItemId": "d0000000-0000-0000-0000-000000000188",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000295",
                    "groupId": "e0000000-0000-0000-0000-000000000143",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000296",
                    "groupId": "e0000000-0000-0000-0000-000000000143",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000189",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000002",
            "name": "Truffle Mushroom Risotto",
            "description": "Creamy arborio rice simmered with wild button and porcini mushrooms, finished with white truffle oil.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 24,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0013-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000013",
        "name": "Artisan Breads & Soup",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000190",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000003",
            "name": "Garlic Butter Naan (2 pcs)",
            "description": "Tandoori flatbread brushed with garlic and butter.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000191",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000003",
            "name": "Chur Chur Naan",
            "description": "Crisp crushed flaky layered tandoori bread with spiced potato stuffing.",
            "price": 130,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000192",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000003",
            "name": "Wild Mushroom Soup",
            "description": "Velvety cream of roasted wild mushrooms with a touch of thyme and croutons.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0013-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000013",
        "name": "Desserts & Artisanal Drinks",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000193",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000004",
            "name": "Gulab Jamun Cheesecake",
            "description": "Fusion dessert combining classic New York baked cheesecake with soft gulab jamun center.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000194",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000004",
            "name": "Rasmalai Tres Leches",
            "description": "Mexican three-milk soaked sponge cake infused with cardamom rasmalai rabdi.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000195",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000004",
            "name": "Kesar Badam Milk",
            "description": "Warm sweetened milk infused with saffron strands and slivered almonds.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000196",
            "restaurantId": "b0000000-0000-0000-0000-000000000013",
            "categoryId": "ca000000-0000-0000-0013-000000000004",
            "name": "Virgin Mojito Cooler",
            "description": "Refreshing sparkling cooler with fresh mint, lime juice, and crushed ice.",
            "price": 170,
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
    "id": "b0000000-0000-0000-0000-000000000014",
    "name": "The Spicy Venue",
    "slug": "the-spicy-venue",
    "tagline": "Iconic Andhra delicacies, MLA Potlam Biryani & Apricot Delight",
    "description": "Legendary Jubilee Hills dining institution celebrated across South India for authentic Andhra homestyle cooking, fiery curries, signature MLA Potlam Biryani, and the world-famous Apricot Delight.",
    "coverImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 2650,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 265/S, Road No. 10, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4335,
    "longitude": 78.411,
    "cuisines": [
      {
        "id": "c0000006-0000-0000-0000-000000000006",
        "name": "Andhra & Rayalaseema",
        "slug": "andhra-rayalaseema",
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
        "id": "ca000000-0000-0000-0014-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000014",
        "name": "Legendary Biryanis & Pulaos",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000197",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000001",
            "name": "MLA Potlam Biryani (Signature)",
            "description": "The famous creation of spiced mutton, prawns, and fragrant rice neatly wrapped in a thin pan-fried omelette parcel.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000144",
                "menuItemId": "d0000000-0000-0000-0000-000000000197",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000297",
                    "groupId": "e0000000-0000-0000-0000-000000000144",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000298",
                    "groupId": "e0000000-0000-0000-0000-000000000144",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 345,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000145",
                "menuItemId": "d0000000-0000-0000-0000-000000000197",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000299",
                    "groupId": "e0000000-0000-0000-0000-000000000145",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000300",
                    "groupId": "e0000000-0000-0000-0000-000000000145",
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
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000001",
            "name": "Avakaya Chicken Biryani",
            "description": "Hyderabadi chicken dum biryani infused with the spicy and tangy flavors of traditional Andhra mango pickle.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000146",
                "menuItemId": "d0000000-0000-0000-0000-000000000198",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000301",
                    "groupId": "e0000000-0000-0000-0000-000000000146",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000302",
                    "groupId": "e0000000-0000-0000-0000-000000000146",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 285,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000147",
                "menuItemId": "d0000000-0000-0000-0000-000000000198",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000303",
                    "groupId": "e0000000-0000-0000-0000-000000000147",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000304",
                    "groupId": "e0000000-0000-0000-0000-000000000147",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000199",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000001",
            "name": "Ulavacharu Kodi Pulao",
            "description": "Tender chicken and fragrant rice cooked in rich, slow-simmered Andhra horse gram broth with fresh cream.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000148",
                "menuItemId": "d0000000-0000-0000-0000-000000000199",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000305",
                    "groupId": "e0000000-0000-0000-0000-000000000148",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000306",
                    "groupId": "e0000000-0000-0000-0000-000000000148",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 293,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000149",
                "menuItemId": "d0000000-0000-0000-0000-000000000199",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000307",
                    "groupId": "e0000000-0000-0000-0000-000000000149",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000308",
                    "groupId": "e0000000-0000-0000-0000-000000000149",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000200",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000001",
            "name": "Traditional Andhra Veg Thali",
            "description": "Authentic vegetarian feast with rice, pappu, rasam, sambar, seasonal vegetable fry, curd, and sweet.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
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
        "name": "Coastal Andhra Starters",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000201",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000002",
            "name": "Fish Apollo",
            "description": "Crisp boneless fish fillets spiced with red chillies, curry leaves, and tossed in mild yoghurt seasoning.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000202",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000002",
            "name": "Loose Prawns",
            "description": "Crispy batter-fried coastal prawns tossed with finely chopped garlic, ginger, and spring onions.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000203",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000002",
            "name": "Kodi Vepudu (Chicken Fry)",
            "description": "Dry-roasted chicken seasoned with black pepper, curry leaves, shallots, and whole red chillies.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000150",
                "menuItemId": "d0000000-0000-0000-0000-000000000203",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000309",
                    "groupId": "e0000000-0000-0000-0000-000000000150",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000310",
                    "groupId": "e0000000-0000-0000-0000-000000000150",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000151",
                "menuItemId": "d0000000-0000-0000-0000-000000000203",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000311",
                    "groupId": "e0000000-0000-0000-0000-000000000151",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000312",
                    "groupId": "e0000000-0000-0000-0000-000000000151",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000204",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000002",
            "name": "Mamsam Fry (Mutton Fry)",
            "description": "Tender baby goat pieces pan-roasted on high heat with caramelized shallots and crushed spices.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000152",
                "menuItemId": "d0000000-0000-0000-0000-000000000204",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000313",
                    "groupId": "e0000000-0000-0000-0000-000000000152",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000314",
                    "groupId": "e0000000-0000-0000-0000-000000000152",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000153",
                "menuItemId": "d0000000-0000-0000-0000-000000000204",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000315",
                    "groupId": "e0000000-0000-0000-0000-000000000153",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000316",
                    "groupId": "e0000000-0000-0000-0000-000000000153",
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
        "id": "ca000000-0000-0000-0014-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000014",
        "name": "Homestyle Curries & Staples",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000205",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000003",
            "name": "Kodi Pulusu (Country Chicken Curry)",
            "description": "Homestyle Andhra chicken curry slow-cooked with village spices and fresh coriander.",
            "price": 370,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000154",
                "menuItemId": "d0000000-0000-0000-0000-000000000205",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000317",
                    "groupId": "e0000000-0000-0000-0000-000000000154",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000318",
                    "groupId": "e0000000-0000-0000-0000-000000000154",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000319",
                    "groupId": "e0000000-0000-0000-0000-000000000154",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000206",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000003",
            "name": "Gutti Vankaya Kura",
            "description": "Tender stuffed baby brinjals simmered in roasted sesame, peanut, and tamarind gravy.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000207",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000003",
            "name": "Ragi Sankati with Ghee",
            "description": "Nutritious steamed finger millet ball served hot with a dollop of pure desi cow ghee.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000208",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000003",
            "name": "Pulka (2 pcs)",
            "description": "Soft and puffed whole wheat rotis cooked without oil.",
            "price": 40,
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
        "id": "ca000000-0000-0000-0014-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000014",
        "name": "Famous Desserts & Drinks",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000209",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000004",
            "name": "Original Apricot Delight",
            "description": "The original iconic dessert invented at The Spicy Venue — stewed apricots layered over sponge cake with rich vanilla custard.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000210",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000004",
            "name": "Double Ka Meetha",
            "description": "Hyderabadi festive bread pudding cooked in sweetened saffron milk and almonds.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000211",
            "restaurantId": "b0000000-0000-0000-0000-000000000014",
            "categoryId": "ca000000-0000-0000-0014-000000000004",
            "name": "Nimmakaya Majjiga",
            "description": "Traditional South Indian cooling buttermilk with crushed ginger and fresh lime.",
            "price": 60,
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
    "id": "b0000000-0000-0000-0000-000000000015",
    "name": "Conçū",
    "slug": "concu",
    "tagline": "Artisanal European patisserie & specialty cafe in Jubilee Hills",
    "description": "Hyderabad's premier bespoke patisserie founded by Sahil and Swati Taneja. Renowned for delicate French pastries, handcrafted choux, gourmet entremets, and artisan sourdough toasts.",
    "coverImage": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 3410,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 738, Road No. 37, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4355,
    "longitude": 78.4055,
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
        "name": "Signature Pastries & Entremets",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000212",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000001",
            "name": "Signature Tiramisu Glass",
            "description": "Classic Italian dessert with espresso-infused sponge, whipped mascarpone, and fine cocoa.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000213",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000001",
            "name": "Chocolate Choux Bun",
            "description": "Crisp French choux pastry filled with rich Belgian dark chocolate cremeux.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000214",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000001",
            "name": "Strawberry Tartlet",
            "description": "Almond sable crust filled with vanilla pastry cream and fresh seasonal strawberries.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000215",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000001",
            "name": "Macarons Box (4 pcs)",
            "description": "Assorted French macarons: dark chocolate, salted caramel, pistachio, and raspberry.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0015-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000015",
        "name": "Savoury Bistro Plates",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000216",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000002",
            "name": "Truffle Parmesan Fries",
            "description": "Crisp golden potato fries tossed with white truffle oil and freshly grated parmesan.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000217",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000002",
            "name": "Avocado Toast on Sourdough",
            "description": "Hass avocado mash on toasted country sourdough with cherry tomatoes, feta, and seeds.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000218",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000002",
            "name": "Quiche Lorraine with Chicken",
            "description": "Buttery shortcrust pastry filled with savoury smoked chicken custard and gruyere.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000219",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000002",
            "name": "Croissant Ham & Cheese",
            "description": "Flaky artisanal French butter croissant stuffed with chicken ham and melted cheddar.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0015-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000015",
        "name": "Crepes & Paninis",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000220",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000003",
            "name": "Spinach & Mushroom Crepe",
            "description": "French thin crepe filled with creamy sauteed spinach, button mushrooms, and gruyere.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000221",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000003",
            "name": "Chicken Pesto Panini",
            "description": "Grilled ciabatta sandwich with roasted chicken breast, basil walnut pesto, and bocconcini.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000222",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000003",
            "name": "Spaghetti Aglio Olio",
            "description": "Classic pasta tossed in extra virgin olive oil, golden garlic, chilli flakes, and parmesan.",
            "price": 420,
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
        "id": "ca000000-0000-0000-0015-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000015",
        "name": "Specialty Coffee & Beverages",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000223",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000004",
            "name": "Hot Chocolate Conçū Style",
            "description": "Thick European drinking chocolate prepared with 70% dark Belgian chocolate and steamed milk.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000224",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000004",
            "name": "Cold Brew Tonic",
            "description": "Slow-steeped Arabica cold brew poured over sparkling tonic water and citrus peel.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000155",
                "menuItemId": "d0000000-0000-0000-0000-000000000224",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000320",
                    "groupId": "e0000000-0000-0000-0000-000000000155",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000321",
                    "groupId": "e0000000-0000-0000-0000-000000000155",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000322",
                    "groupId": "e0000000-0000-0000-0000-000000000155",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000225",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000004",
            "name": "Iced Vanilla Latte",
            "description": "Double shot of espresso, Madagascar vanilla syrup, and chilled milk over ice.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000156",
                "menuItemId": "d0000000-0000-0000-0000-000000000225",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000323",
                    "groupId": "e0000000-0000-0000-0000-000000000156",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000324",
                    "groupId": "e0000000-0000-0000-0000-000000000156",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000325",
                    "groupId": "e0000000-0000-0000-0000-000000000156",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000226",
            "restaurantId": "b0000000-0000-0000-0000-000000000015",
            "categoryId": "ca000000-0000-0000-0015-000000000004",
            "name": "Peach Passion Iced Tea",
            "description": "Cold brewed black tea infused with peach puree, passionfruit, and fresh mint.",
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
    "id": "b0000000-0000-0000-0000-000000000016",
    "name": "Roastery Coffee House",
    "slug": "roastery-coffee-house",
    "tagline": "Artisanal farm-to-cup coffee & bungalow cafe dining",
    "description": "Hyderabad's most beloved heritage cafe in Jubilee Hills. Pioneering Indian estate coffees with custom roasting, hand brews, artisan breakfast steaks, and pasta.",
    "coverImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 4210,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "House 418, Road No. 41, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4358,
    "longitude": 78.4062,
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
        "name": "Specialty Estate Brews",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000227",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000001",
            "name": "Pour Over Specialty Coffee",
            "description": "Manual drip brew showcasing single-estate Indian Arabica beans with clean floral notes.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000157",
                "menuItemId": "d0000000-0000-0000-0000-000000000227",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000326",
                    "groupId": "e0000000-0000-0000-0000-000000000157",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000327",
                    "groupId": "e0000000-0000-0000-0000-000000000157",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000328",
                    "groupId": "e0000000-0000-0000-0000-000000000157",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000228",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000001",
            "name": "Cortado Double Shot",
            "description": "Equal parts rich espresso and silky steamed milk served in a traditional glass tumbler.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000229",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000001",
            "name": "Cranberry Nitro Iced Coffee",
            "description": "Nitrogen-infused cold brew cascading over ice with tart cranberry reduction.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000158",
                "menuItemId": "d0000000-0000-0000-0000-000000000229",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000329",
                    "groupId": "e0000000-0000-0000-0000-000000000158",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000330",
                    "groupId": "e0000000-0000-0000-0000-000000000158",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000331",
                    "groupId": "e0000000-0000-0000-0000-000000000158",
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
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000001",
            "name": "Cascara Iced Brew",
            "description": "Refreshing infusion of dried coffee cherry husks with fresh mint, lime, and crushed ice.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 6,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000159",
                "menuItemId": "d0000000-0000-0000-0000-000000000230",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000332",
                    "groupId": "e0000000-0000-0000-0000-000000000159",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000333",
                    "groupId": "e0000000-0000-0000-0000-000000000159",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000334",
                    "groupId": "e0000000-0000-0000-0000-000000000159",
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
        "name": "Appetizers & Finger Food",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000231",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000002",
            "name": "Roastery Peri Peri Onion Rings",
            "description": "Beer-battered jumbo onion rings dusted in house peri peri spice mix with garlic dip.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1639024471285-0afc31ff14dd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000232",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000002",
            "name": "Cheesy Garlic Pull-Apart Bread",
            "description": "Freshly baked sourdough bun stuffed with garlic herb butter and melted mozzarella.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000233",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000002",
            "name": "Chicken Popcorn with Spicy Mayo",
            "description": "Crispy bite-sized seasoned chicken tenders tossed in peri peri with siracha mayo.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000234",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000002",
            "name": "Jalapeno Cheese Poppers (6 pcs)",
            "description": "Crisp breaded croquettes stuffed with cream cheese, cheddar, and spicy jalapeño bits.",
            "price": 250,
            "imageUrl": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0016-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000016",
        "name": "Gourmet Mains & Pastas",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000235",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000003",
            "name": "Grilled Mustard Chicken Steak",
            "description": "Tender chicken breast in wholegrain mustard cream sauce with roasted veggies and mash.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000236",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000003",
            "name": "Creamy Mushroom & Truffle Fettuccine",
            "description": "Fettuccine tossed with button and cremini mushrooms in parmesan cream with truffle oil.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000237",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000003",
            "name": "Penne Arrabiata with Garlic Bread",
            "description": "Penne pasta tossed in spicy Italian tomato and garlic sauce with fresh basil.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000238",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000003",
            "name": "Roastery Club Sandwich Non-Veg",
            "description": "Triple-decker toasted sandwich with roast chicken, fried egg, cheese, and lettuce.",
            "price": 370,
            "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
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
        "name": "Bakery Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000239",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000004",
            "name": "Warm Chocolate Fudge Brownie with Gelato",
            "description": "Gooey walnut chocolate brownie served warm with a scoop of vanilla ice cream.",
            "price": 250,
            "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000240",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000004",
            "name": "Baked Blueberry Cheesecake",
            "description": "New York style baked cheesecake topped with tart blueberry compote.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000241",
            "restaurantId": "b0000000-0000-0000-0000-000000000016",
            "categoryId": "ca000000-0000-0000-0016-000000000004",
            "name": "Carrot Walnut Cake Slice",
            "description": "Spiced homestyle carrot cake layered with cream cheese frosting.",
            "price": 230,
            "imageUrl": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000017",
    "name": "Olive Bistro & Bar",
    "slug": "olive-bistro",
    "tagline": "Mediterranean fine dining overlooking the Secret Lake",
    "description": "Charming white-walled Mediterranean bistro perched atop Durgam Cheruvu in Jubilee Hills. Renowned for artisanal pizzas, handmade pappardelle, and panoramic lakeside views.",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 2280,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 500,
    "deliveryFee": 65,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Road No. 46, Atop Durgam Cheruvu Secret Lake, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4362,
    "longitude": 78.3895,
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
        "name": "Small Plates & Mezze",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000242",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000001",
            "name": "Pugliese Burrata Caprese",
            "description": "Fresh artisanal burrata cheese with heirloom tomatoes, wild rocket, and aged balsamic glaze.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000243",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000001",
            "name": "Gambas al Ajillo (Garlic Prawns)",
            "description": "Tiger prawns pan-sautéed in extra virgin olive oil with sliced garlic, chilli flakes, and warm bread.",
            "price": 640,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000244",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000001",
            "name": "Mezze Platter Royale",
            "description": "Classic Lebanese hummus, smoked baba ganoush, tzatziki, falafel, kalamata olives, and fresh pita.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000160",
                "menuItemId": "d0000000-0000-0000-0000-000000000244",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000335",
                    "groupId": "e0000000-0000-0000-0000-000000000160",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000336",
                    "groupId": "e0000000-0000-0000-0000-000000000160",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000337",
                    "groupId": "e0000000-0000-0000-0000-000000000160",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000245",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000001",
            "name": "Crispy Polenta Bites with Gorgonzola Dip",
            "description": "Golden fried herb polenta fingers served with creamy melted gorgonzola cheese sauce.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0017-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000017",
        "name": "Wood-Fired Pizza & Pasta",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000246",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000002",
            "name": "Prosciutto di Parma & Arugula Pizza",
            "description": "Hand-stretched sourdough crust with San Marzano sauce, fresh mozzarella, aged prosciutto, and wild rocket.",
            "price": 780,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000161",
                "menuItemId": "d0000000-0000-0000-0000-000000000246",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000338",
                    "groupId": "e0000000-0000-0000-0000-000000000161",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000339",
                    "groupId": "e0000000-0000-0000-0000-000000000161",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000162",
                "menuItemId": "d0000000-0000-0000-0000-000000000246",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000340",
                    "groupId": "e0000000-0000-0000-0000-000000000162",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000341",
                    "groupId": "e0000000-0000-0000-0000-000000000162",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000247",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000002",
            "name": "Wild Truffle & Four Cheese Pizza",
            "description": "White base pizza topped with fontina, mozzarella, gorgonzola, parmesan, and aromatic black truffle oil.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000163",
                "menuItemId": "d0000000-0000-0000-0000-000000000247",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000342",
                    "groupId": "e0000000-0000-0000-0000-000000000163",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000343",
                    "groupId": "e0000000-0000-0000-0000-000000000163",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000164",
                "menuItemId": "d0000000-0000-0000-0000-000000000247",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000344",
                    "groupId": "e0000000-0000-0000-0000-000000000164",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000345",
                    "groupId": "e0000000-0000-0000-0000-000000000164",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000248",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000002",
            "name": "Handmade Pappardelle with Braised Lamb Ragu",
            "description": "Ribbon pasta tossed with slow-braised Australian lamb shoulder in rosemary red wine reduction.",
            "price": 740,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000249",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000002",
            "name": "Spaghetti Aglio Olio e Peperoncino",
            "description": "Al dente spaghetti tossed in fruity olive oil, golden garlic slivers, parsley, and pepperoncini chillies.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0017-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000017",
        "name": "Signature Large Plates",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000250",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000003",
            "name": "Pan-Seared Chilean Sea Bass",
            "description": "Fresh sea bass fillet seared in butter, served over saffron cauliflower puree and caper butter sauce.",
            "price": 1150,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000251",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000003",
            "name": "Roast Rosemary Chicken Supreme",
            "description": "Herb-roasted bone-in chicken breast with potato gratin, charred asparagus, and pan jus.",
            "price": 660,
            "imageUrl": "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000252",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000003",
            "name": "Stuffed Portobello Mushroom Steaks",
            "description": "Baked giant mushroom caps filled with herbed goat cheese, pine nuts, and sun-dried tomatoes.",
            "price": 580,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000253",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000003",
            "name": "Sourdough Garlic Focaccia Loaf",
            "description": "Freshly baked rosemary sea salt focaccia served warm with balsamic olive oil dip.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
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
        "name": "Desserts & Refreshers",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000254",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000004",
            "name": "Olive Signature Tiramisu",
            "description": "Classic Italian pick-me-up with espresso soaked savoiardi, mascarpone cream, and cocoa.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000255",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000004",
            "name": "Valrhona Chocolate Fondant",
            "description": "Molten dark chocolate lava cake with French vanilla bean ice cream.",
            "price": 410,
            "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000256",
            "restaurantId": "b0000000-0000-0000-0000-000000000017",
            "categoryId": "ca000000-0000-0000-0017-000000000004",
            "name": "Elderflower & Cucumber Spritzer",
            "description": "Fragrant French elderflower cordial with cucumber ribbons, fresh mint, and sparkling soda.",
            "price": 240,
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
    "id": "b0000000-0000-0000-0000-000000000018",
    "name": "The Fisherman's Wharf",
    "slug": "the-fishermans-wharf",
    "tagline": "Authentic Goan coastal cuisine & fresh seafood grills",
    "description": "Hyderabad's premier coastal seafood destination in the Financial District corridor. Celebrated for Goan Fish Curry, Butter Garlic Tiger Prawns, Kingfish Rava Fry, and Bebinca.",
    "coverImage": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 2410,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 350,
    "deliveryFee": 45,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 304, ISB Road, Financial District, Gachibowli",
    "city": "Hyderabad",
    "latitude": 17.4185,
    "longitude": 78.3495,
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
        "name": "Fresh Coastal Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000257",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000001",
            "name": "Kingfish Masala Pan Fry (Surmai Rava Fry)",
            "description": "Fresh steak of Kingfish marinated in recheado masala, crusted in semolina and shallow fried.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000165",
                "menuItemId": "d0000000-0000-0000-0000-000000000257",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000346",
                    "groupId": "e0000000-0000-0000-0000-000000000165",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000347",
                    "groupId": "e0000000-0000-0000-0000-000000000165",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000166",
                "menuItemId": "d0000000-0000-0000-0000-000000000257",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000348",
                    "groupId": "e0000000-0000-0000-0000-000000000166",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000349",
                    "groupId": "e0000000-0000-0000-0000-000000000166",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000258",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000001",
            "name": "Butter Garlic Tiger Prawns",
            "description": "Jumbo prawns pan-sautéed in white butter with burnt garlic and chopped parsley.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000259",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000001",
            "name": "Calamari Peri-Peri Fry",
            "description": "Fresh squid rings marinated in spicy Goan peri-peri masala and crispy batter fried.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000167",
                "menuItemId": "d0000000-0000-0000-0000-000000000259",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000350",
                    "groupId": "e0000000-0000-0000-0000-000000000167",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000351",
                    "groupId": "e0000000-0000-0000-0000-000000000167",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000168",
                "menuItemId": "d0000000-0000-0000-0000-000000000259",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000352",
                    "groupId": "e0000000-0000-0000-0000-000000000168",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000353",
                    "groupId": "e0000000-0000-0000-0000-000000000168",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000260",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000001",
            "name": "Mushroom & Cheese Croquettes (4 pcs)",
            "description": "Crisp breadcrumbed croquettes filled with creamy wild mushroom and melted mozzarella.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
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
        "name": "Goan Curries & Seafood Mains",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000261",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000002",
            "name": "Goan Fish Curry with Coconut Milk",
            "description": "Authentic Goan curry made with fresh fish, fresh coconut extract, Kashmiri chillies, and kokum.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000169",
                "menuItemId": "d0000000-0000-0000-0000-000000000261",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000354",
                    "groupId": "e0000000-0000-0000-0000-000000000169",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000355",
                    "groupId": "e0000000-0000-0000-0000-000000000169",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000356",
                    "groupId": "e0000000-0000-0000-0000-000000000169",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000262",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000002",
            "name": "Prawns Balchao",
            "description": "Fiery and tangy prawn pickle curry cooked with caramelized onions, vinegar, and ground spices.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000263",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000002",
            "name": "Chicken Xacuti",
            "description": "Complex Goan curry prepared with roasted grated coconut, poppy seeds, and fragrant spices.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000264",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000002",
            "name": "Paneer Caldin",
            "description": "Mild yellow coconut curry cooked with cottage cheese cubes, coriander, and turmeric.",
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
        "id": "ca000000-0000-0000-0018-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000018",
        "name": "Rice & Goan Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000265",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000003",
            "name": "Seafood Pulao Fisherman Style",
            "description": "Aromatic short-grain rice cooked with fresh prawns, fish, calamari, and whole spices.",
            "price": 510,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000170",
                "menuItemId": "d0000000-0000-0000-0000-000000000265",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000357",
                    "groupId": "e0000000-0000-0000-0000-000000000170",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000358",
                    "groupId": "e0000000-0000-0000-0000-000000000170",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 383,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000171",
                "menuItemId": "d0000000-0000-0000-0000-000000000265",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000359",
                    "groupId": "e0000000-0000-0000-0000-000000000171",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000360",
                    "groupId": "e0000000-0000-0000-0000-000000000171",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000266",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000003",
            "name": "Steamed Goan Red Rice",
            "description": "Nutritious unpolished indigenous Goan boiled red rice, best with fish curry.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000267",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000003",
            "name": "Warm Poee (Goan Bread - 2 pcs)",
            "description": "Traditional Goan whole wheat pocket bread fermented with local toddy yeast.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000268",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000003",
            "name": "Appam (2 pcs)",
            "description": "Lacy fermented rice and coconut milk hoppers with soft spongy center.",
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
        "id": "ca000000-0000-0000-0018-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000018",
        "name": "Goan Desserts & Coolers",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000269",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000004",
            "name": "Traditional Bebinca (7 Layers)",
            "description": "The queen of Goan desserts — multi-layered cake baked with coconut milk, egg yolks, and nutmeg.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000270",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000004",
            "name": "Serra Durra (Sawdust Pudding)",
            "description": "Portuguese layered chilled pudding of condensed milk cream and crushed tea biscuit dust.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000271",
            "restaurantId": "b0000000-0000-0000-0000-000000000018",
            "categoryId": "ca000000-0000-0000-0018-000000000004",
            "name": "Sol Kadi Cooler",
            "description": "Digestive pink cooler made from wild kokum fruit extract, fresh coconut milk, and crushed garlic.",
            "price": 110,
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
    "id": "b0000000-0000-0000-0000-000000000019",
    "name": "Kritunga Restaurant",
    "slug": "kritunga-restaurant",
    "tagline": "Fiery Rayalaseema cuisine, Ragi Sankati & Natu Kodi",
    "description": "Beloved Rayalaseema culinary powerhouse in Hyderabad famous for its authentic spice blends, signature Ragi Mudda with Natu Kodi Pulusu, Ghee Roast Biryani, and fiery Rayalaseema vepudus.",
    "coverImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 3180,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Near Kothaguda Junction, Whitefields, Kondapur",
    "city": "Hyderabad",
    "latitude": 17.4612,
    "longitude": 78.3688,
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
        "name": "Rayalaseema Pulaos & Biryanis",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000272",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000001",
            "name": "Ragi Mudda with Natu Kodi Pulusu",
            "description": "Signature Rayalaseema combo: steamed finger millet ball served with spicy country chicken gravy and pure ghee.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000172",
                "menuItemId": "d0000000-0000-0000-0000-000000000272",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000361",
                    "groupId": "e0000000-0000-0000-0000-000000000172",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000362",
                    "groupId": "e0000000-0000-0000-0000-000000000172",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000363",
                    "groupId": "e0000000-0000-0000-0000-000000000172",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000273",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000001",
            "name": "Ghee Roast Chicken Pulao",
            "description": "Aromatic chitti mutyalu rice cooked in rich ghee and topped with spicy roast chicken fry.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000173",
                "menuItemId": "d0000000-0000-0000-0000-000000000273",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000364",
                    "groupId": "e0000000-0000-0000-0000-000000000173",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000365",
                    "groupId": "e0000000-0000-0000-0000-000000000173",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 285,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000174",
                "menuItemId": "d0000000-0000-0000-0000-000000000273",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000366",
                    "groupId": "e0000000-0000-0000-0000-000000000174",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000367",
                    "groupId": "e0000000-0000-0000-0000-000000000174",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000274",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000001",
            "name": "Rayalaseema Mutton Pulao",
            "description": "Fragrant short-grain rice cooked with tender baby mutton pieces and stone-ground spices.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000175",
                "menuItemId": "d0000000-0000-0000-0000-000000000274",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000368",
                    "groupId": "e0000000-0000-0000-0000-000000000175",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000369",
                    "groupId": "e0000000-0000-0000-0000-000000000175",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 330,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000176",
                "menuItemId": "d0000000-0000-0000-0000-000000000274",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000370",
                    "groupId": "e0000000-0000-0000-0000-000000000176",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000371",
                    "groupId": "e0000000-0000-0000-0000-000000000176",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000275",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000001",
            "name": "Gongura Kodi Biryani",
            "description": "Spicy chicken dum biryani layered with tangy sorrel leaves chutney and golden onions.",
            "price": 370,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000177",
                "menuItemId": "d0000000-0000-0000-0000-000000000275",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000372",
                    "groupId": "e0000000-0000-0000-0000-000000000177",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000373",
                    "groupId": "e0000000-0000-0000-0000-000000000177",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 278,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000178",
                "menuItemId": "d0000000-0000-0000-0000-000000000275",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000374",
                    "groupId": "e0000000-0000-0000-0000-000000000178",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000375",
                    "groupId": "e0000000-0000-0000-0000-000000000178",
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
        "name": "Fiery Starters & Vepudus",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000276",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000002",
            "name": "Natu Kodi Vepudu",
            "description": "Country chicken pan-roasted with fiery red chillies, shallots, and cracked black pepper.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000179",
                "menuItemId": "d0000000-0000-0000-0000-000000000276",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000376",
                    "groupId": "e0000000-0000-0000-0000-000000000179",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000377",
                    "groupId": "e0000000-0000-0000-0000-000000000179",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000180",
                "menuItemId": "d0000000-0000-0000-0000-000000000276",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000378",
                    "groupId": "e0000000-0000-0000-0000-000000000180",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000379",
                    "groupId": "e0000000-0000-0000-0000-000000000180",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000277",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000002",
            "name": "Rayalaseema Mutton Fry",
            "description": "Tender mutton chunks slow-roasted in an iron skillet with dry coconut and coriander seeds.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000181",
                "menuItemId": "d0000000-0000-0000-0000-000000000277",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000380",
                    "groupId": "e0000000-0000-0000-0000-000000000181",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000381",
                    "groupId": "e0000000-0000-0000-0000-000000000181",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000182",
                "menuItemId": "d0000000-0000-0000-0000-000000000277",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000382",
                    "groupId": "e0000000-0000-0000-0000-000000000182",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000383",
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
            "id": "d0000000-0000-0000-0000-000000000278",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000002",
            "name": "Royyala Vepudu (Prawn Fry)",
            "description": "Fresh prawns pan-fried in garlic, green chillies, and authentic Rayalaseema spices.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000183",
                "menuItemId": "d0000000-0000-0000-0000-000000000278",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000384",
                    "groupId": "e0000000-0000-0000-0000-000000000183",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000385",
                    "groupId": "e0000000-0000-0000-0000-000000000183",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000184",
                "menuItemId": "d0000000-0000-0000-0000-000000000278",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000386",
                    "groupId": "e0000000-0000-0000-0000-000000000184",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000387",
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
            "id": "d0000000-0000-0000-0000-000000000279",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000002",
            "name": "Kaju Paneer Vepudu",
            "description": "Crisp cottage cheese cubes dry-fried with roasted cashews and aromatic curry leaves.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000185",
                "menuItemId": "d0000000-0000-0000-0000-000000000279",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000388",
                    "groupId": "e0000000-0000-0000-0000-000000000185",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000389",
                    "groupId": "e0000000-0000-0000-0000-000000000185",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000186",
                "menuItemId": "d0000000-0000-0000-0000-000000000279",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000390",
                    "groupId": "e0000000-0000-0000-0000-000000000186",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000391",
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
        "id": "ca000000-0000-0000-0019-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000019",
        "name": "Village Curries & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000280",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000003",
            "name": "Natu Kodi Pulusu (Single)",
            "description": "Spicy country chicken curry simmered in rustic earthen pot with coriander and garlic.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000187",
                "menuItemId": "d0000000-0000-0000-0000-000000000280",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000392",
                    "groupId": "e0000000-0000-0000-0000-000000000187",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000393",
                    "groupId": "e0000000-0000-0000-0000-000000000187",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000394",
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
            "id": "d0000000-0000-0000-0000-000000000281",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000003",
            "name": "Gutti Vankaya Kura",
            "description": "Small eggplants stuffed with ground peanut and sesame masala, simmered to thick gravy.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000282",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000003",
            "name": "Ragi Sankati (Single)",
            "description": "Nutritious steamed ball of finger millet and rice served hot with pure ghee.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000283",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000003",
            "name": "Parotta (2 pcs)",
            "description": "Layered flaky South Indian flatbread, freshly cooked on hot griddle.",
            "price": 60,
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
        "name": "Desserts & Beverages",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000284",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000004",
            "name": "Gulab Jamun (2 pcs)",
            "description": "Classic sweet milk dumplings soaked in fragrant sugar syrup.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000285",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000004",
            "name": "Sweet Lassi",
            "description": "Chilled sweetened churned yoghurt drink flavored with cardamom.",
            "price": 70,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000286",
            "restaurantId": "b0000000-0000-0000-0000-000000000019",
            "categoryId": "ca000000-0000-0000-0019-000000000004",
            "name": "Spiced Buttermilk",
            "description": "Cooling churned curd drink seasoned with mustard seeds, curry leaves, and ginger.",
            "price": 50,
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
    "id": "b0000000-0000-0000-0000-000000000020",
    "name": "Haïku",
    "slug": "haiku",
    "tagline": "Refined Pan-Asian dining, artisan sushi & dim sum artistry",
    "description": "Banjara Hills' acclaimed Asian kitchen on Road No. 12. Showcasing handcrafted dim sum, fresh sushi rolls, fragrant Thai curries, and robata grilled delicacies.",
    "coverImage": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 1880,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 350,
    "deliveryFee": 45,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 686/D, Road No. 12, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4156,
    "longitude": 78.4352,
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
        "name": "Artisan Dim Sum & Bao",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000287",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000001",
            "name": "Truffle Edamame Dumplings (4 pcs)",
            "description": "Delicate translucent skins filled with seasoned edamame and infused with aromatic truffle oil.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000288",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000001",
            "name": "Crystal Prawn Har Gow (4 pcs)",
            "description": "Traditional Cantonese steamed dumplings packed with juicy tiger prawns and bamboo shoots.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000289",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000001",
            "name": "Chicken & Coriander Sui Mai (4 pcs)",
            "description": "Open-top dumplings stuffed with minced chicken, fresh coriander, ginger, and tobiko.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000290",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000001",
            "name": "Wild Mushroom Bao (3 pcs)",
            "description": "Fluffy steamed lotus leaf buns filled with braised wild mushrooms in sweet hoisin glaze.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0020-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000020",
        "name": "Signature Sushi Rolls",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000291",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000002",
            "name": "Spicy Salmon Uramaki Roll (8 pcs)",
            "description": "Fresh salmon tartare, cucumber, spicy togarashi mayo, rolled inside-out with toasted sesame.",
            "price": 660,
            "imageUrl": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000188",
                "menuItemId": "d0000000-0000-0000-0000-000000000291",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000395",
                    "groupId": "e0000000-0000-0000-0000-000000000188",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000396",
                    "groupId": "e0000000-0000-0000-0000-000000000188",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000292",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000002",
            "name": "Crispy Avocado & Cream Cheese Maki (8 pcs)",
            "description": "Ripe avocado, Philadelphia cream cheese, and tempura flakes with sweet teriyaki drizzle.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000293",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000002",
            "name": "Prawn Tempura Ebi Roll (8 pcs)",
            "description": "Crisp prawn tempura, cucumber, and creamy Japanese mayo wrapped with nori and orange tobiko.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000189",
                "menuItemId": "d0000000-0000-0000-0000-000000000293",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000397",
                    "groupId": "e0000000-0000-0000-0000-000000000189",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000398",
                    "groupId": "e0000000-0000-0000-0000-000000000189",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000294",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000002",
            "name": "Asparagus Tempura & Truffle Roll (8 pcs)",
            "description": "Crisp tempura asparagus spears rolled with seasoned rice and drizzled with white truffle mayo.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000190",
                "menuItemId": "d0000000-0000-0000-0000-000000000294",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000399",
                    "groupId": "e0000000-0000-0000-0000-000000000190",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000400",
                    "groupId": "e0000000-0000-0000-0000-000000000190",
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
        "name": "Wok Specialties & Curries",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000295",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000003",
            "name": "Thai Green Curry with Jasmine Rice",
            "description": "Fragrant green curry paste cooked with coconut milk, Thai eggplants, kaffir lime, and fragrant rice.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000191",
                "menuItemId": "d0000000-0000-0000-0000-000000000295",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000401",
                    "groupId": "e0000000-0000-0000-0000-000000000191",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000402",
                    "groupId": "e0000000-0000-0000-0000-000000000191",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000403",
                    "groupId": "e0000000-0000-0000-0000-000000000191",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000296",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000003",
            "name": "Teriyaki Glazed Chicken Bowl",
            "description": "Char-grilled chicken thigh glazed with house teriyaki sauce, served over steamed rice with sesame greens.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000297",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000003",
            "name": "Singapore Hawker Chilli Prawns",
            "description": "Tiger prawns tossed in a fiery and sweet chilli garlic sauce with egg ribbons and scallions.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000298",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000003",
            "name": "Wok-Tossed Hakka Noodles Veg",
            "description": "Al dente eggless noodles stir-fried with julienned vegetables, soy sauce, and white pepper.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0020-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000020",
        "name": "Desserts & Asian Coolers",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000299",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000004",
            "name": "Panko Banana Fritters with Honey",
            "description": "Warm banana coated in Japanese panko crumbs, fried golden and served with wild honey.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000300",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000004",
            "name": "Coconut Mango Sticky Rice",
            "description": "Traditional Thai glutinous rice cooked with sweet coconut cream, served with fresh mango slices.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000301",
            "restaurantId": "b0000000-0000-0000-0000-000000000020",
            "categoryId": "ca000000-0000-0000-0020-000000000004",
            "name": "Yuzu Iced Green Tea",
            "description": "Chilled Japanese sencha green tea infused with citrus yuzu and fresh mint leaves.",
            "price": 190,
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
    "id": "b0000000-0000-0000-0000-000000000021",
    "name": "Vivaha Bhojanambu",
    "slug": "vivaha-bhojanambu",
    "tagline": "Celebrated Telugu wedding feast & royal regional pulaos",
    "description": "Renowned Telugu specialty dining in Jubilee Hills known for its grand Raju Gari Bhojanam traditional thali feast, Bamboo Chicken, and aromatic regional pulaos from Godavari and Telangana.",
    "coverImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 2840,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 822, Road No. 10, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.433,
    "longitude": 78.4095,
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
        "id": "ca000000-0000-0000-0021-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000021",
        "name": "Royal Telugu Pulaos & Thali",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000302",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000001",
            "name": "Raju Gari Bhojanam (Grand Thali)",
            "description": "Traditional celebratory Telugu vegetarian spread with 14 accompaniments, podi, ghee, and sweet.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000303",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000001",
            "name": "Rajahmundry Kodi Pulao",
            "description": "Coastal Andhra fragrant pulao prepared with tender chicken morsels and green chilli coriander masala.",
            "price": 370,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000192",
                "menuItemId": "d0000000-0000-0000-0000-000000000303",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000404",
                    "groupId": "e0000000-0000-0000-0000-000000000192",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000405",
                    "groupId": "e0000000-0000-0000-0000-000000000192",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 278,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000193",
                "menuItemId": "d0000000-0000-0000-0000-000000000303",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000406",
                    "groupId": "e0000000-0000-0000-0000-000000000193",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000407",
                    "groupId": "e0000000-0000-0000-0000-000000000193",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000304",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000001",
            "name": "Bhimavaram Royyala Pulao",
            "description": "Fresh succulent prawns tossed with aromatic spices and layered with fragrant chitti mutyalu rice.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000194",
                "menuItemId": "d0000000-0000-0000-0000-000000000304",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000408",
                    "groupId": "e0000000-0000-0000-0000-000000000194",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000409",
                    "groupId": "e0000000-0000-0000-0000-000000000194",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 330,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000195",
                "menuItemId": "d0000000-0000-0000-0000-000000000304",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000410",
                    "groupId": "e0000000-0000-0000-0000-000000000195",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000411",
                    "groupId": "e0000000-0000-0000-0000-000000000195",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000305",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000001",
            "name": "Gongura Mamsam Pulao",
            "description": "Tender baby mutton simmered in tangy sorrel leaf gravy and blended with spiced rice.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000196",
                "menuItemId": "d0000000-0000-0000-0000-000000000305",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000412",
                    "groupId": "e0000000-0000-0000-0000-000000000196",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000413",
                    "groupId": "e0000000-0000-0000-0000-000000000196",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 345,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000197",
                "menuItemId": "d0000000-0000-0000-0000-000000000305",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000414",
                    "groupId": "e0000000-0000-0000-0000-000000000197",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000415",
                    "groupId": "e0000000-0000-0000-0000-000000000197",
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
        "id": "ca000000-0000-0000-0021-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000021",
        "name": "Heritage Telugu Starters",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000306",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000002",
            "name": "Bamboo Chicken",
            "description": "Tribal Araku specialty: marinated chicken cooked inside fresh green bamboo stalk over charcoal fire.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000307",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000002",
            "name": "Bhimavaram Kodi Vepudu",
            "description": "Spicy chicken roast prepared with Godavari country spices, roasted cashews, and curry leaves.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000198",
                "menuItemId": "d0000000-0000-0000-0000-000000000307",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000416",
                    "groupId": "e0000000-0000-0000-0000-000000000198",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000417",
                    "groupId": "e0000000-0000-0000-0000-000000000198",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000199",
                "menuItemId": "d0000000-0000-0000-0000-000000000307",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000418",
                    "groupId": "e0000000-0000-0000-0000-000000000199",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000419",
                    "groupId": "e0000000-0000-0000-0000-000000000199",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000308",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000002",
            "name": "Kakinada Peethala Vepudu (Crab Roast)",
            "description": "Fresh sea crab pieces tossed in a fiery, aromatic coastal Andhra black pepper and chilli masala.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000200",
                "menuItemId": "d0000000-0000-0000-0000-000000000308",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000420",
                    "groupId": "e0000000-0000-0000-0000-000000000200",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000421",
                    "groupId": "e0000000-0000-0000-0000-000000000200",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000201",
                "menuItemId": "d0000000-0000-0000-0000-000000000308",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000422",
                    "groupId": "e0000000-0000-0000-0000-000000000201",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000423",
                    "groupId": "e0000000-0000-0000-0000-000000000201",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000309",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000002",
            "name": "Ullipayala Pakodi",
            "description": "Crispy deep-fried sliced onion fritters tossed with curry leaves, served with peanut chutney.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0021-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000021",
        "name": "Curries & Rice Accompaniments",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000310",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000003",
            "name": "Gutti Vankaya Koora",
            "description": "Tender baby eggplants stuffed with roasted peanut, sesame, and coriander paste.",
            "price": 270,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000311",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000003",
            "name": "Gongura Pappu with Desi Ghee",
            "description": "Homestyle yellow toor dal stewed with tangy sorrel leaves and tempered with garlic.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000312",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000003",
            "name": "Steamed Bagara Rice Handi",
            "description": "Traditional Hyderabadi wedding spiced tempered rice with whole garam masala and mint.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000313",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000003",
            "name": "Pulka (2 pcs)",
            "description": "Soft puffed whole wheat rotis brushed with pure ghee.",
            "price": 40,
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
        "id": "ca000000-0000-0000-0021-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000021",
        "name": "Wedding Sweets & Beverages",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000314",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000004",
            "name": "Rose Milk (Classic)",
            "description": "Chilled fragrant South Indian sweet milk flavored with pure Damascus rose essence.",
            "price": 70,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000315",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000004",
            "name": "Pootharekulu (2 pcs)",
            "description": "Traditional wafer-thin rice paper sweet rolls stuffed with pure jaggery and chopped dry fruits.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000316",
            "restaurantId": "b0000000-0000-0000-0000-000000000021",
            "categoryId": "ca000000-0000-0000-0021-000000000004",
            "name": "Kaju Barfi (2 pcs)",
            "description": "Diamond cut rich cashew fudge prepared with pure ghee and silver varq.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000022",
    "name": "Aidu",
    "slug": "aidu",
    "tagline": "The five southern states on one culinary canvas",
    "description": "Jubilee Hills specialty restaurant celebrating the diverse culinary traditions of the five southern states: Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, and Kerala.",
    "coverImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
    "rating": 4.8,
    "ratingCount": 1460,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 350,
    "deliveryFee": 45,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Road No. 45, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4345,
    "longitude": 78.4038,
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
        "name": "South Indian Coastal & Regional Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000317",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000001",
            "name": "Karivepaku Kodi Vepudu",
            "description": "Tender chicken bites tossed with fresh fragrant curry leaf paste, green chillies, and crushed pepper.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000202",
                "menuItemId": "d0000000-0000-0000-0000-000000000317",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000424",
                    "groupId": "e0000000-0000-0000-0000-000000000202",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000425",
                    "groupId": "e0000000-0000-0000-0000-000000000202",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000203",
                "menuItemId": "d0000000-0000-0000-0000-000000000317",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000426",
                    "groupId": "e0000000-0000-0000-0000-000000000203",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000427",
                    "groupId": "e0000000-0000-0000-0000-000000000203",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000318",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000001",
            "name": "Koliwada Fish Fry",
            "description": "Boneless fish fillets marinated in spiced chickpea batter with carom seeds and crispy fried.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000204",
                "menuItemId": "d0000000-0000-0000-0000-000000000318",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000428",
                    "groupId": "e0000000-0000-0000-0000-000000000204",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000429",
                    "groupId": "e0000000-0000-0000-0000-000000000204",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000205",
                "menuItemId": "d0000000-0000-0000-0000-000000000318",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000430",
                    "groupId": "e0000000-0000-0000-0000-000000000205",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000431",
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
            "id": "d0000000-0000-0000-0000-000000000319",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000001",
            "name": "Mushroom Sukka Mangalore Style",
            "description": "Fresh button mushrooms dry-roasted with freshly grated coconut, byadgi chillies, and curry leaves.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000320",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000001",
            "name": "Kurnool Paneer Vepudu",
            "description": "Fresh malai cottage cheese cubes tossed with dry roasted spices and crunchy curry leaves.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000206",
                "menuItemId": "d0000000-0000-0000-0000-000000000320",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000432",
                    "groupId": "e0000000-0000-0000-0000-000000000206",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000433",
                    "groupId": "e0000000-0000-0000-0000-000000000206",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000207",
                "menuItemId": "d0000000-0000-0000-0000-000000000320",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000434",
                    "groupId": "e0000000-0000-0000-0000-000000000207",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000435",
                    "groupId": "e0000000-0000-0000-0000-000000000207",
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
        "name": "Heritage Curries of the South",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000321",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000002",
            "name": "Chettinad Pepper Chicken",
            "description": "Famous Tamil Nadu village-style chicken curry cooked with freshly stone-ground kalpasi and black pepper.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000322",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000002",
            "name": "Telangana Mutton Curry",
            "description": "Rustic Telangana highway preparation of tender mutton simmered in dark roasted coriander and onion gravy.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000208",
                "menuItemId": "d0000000-0000-0000-0000-000000000322",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000436",
                    "groupId": "e0000000-0000-0000-0000-000000000208",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000437",
                    "groupId": "e0000000-0000-0000-0000-000000000208",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000438",
                    "groupId": "e0000000-0000-0000-0000-000000000208",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000323",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000002",
            "name": "Bendakaya Pulusu (Okra Stew)",
            "description": "Tender ladyfingers cooked in a tangy tamarind, jaggery, and shallot broth with mustard tempering.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000209",
                "menuItemId": "d0000000-0000-0000-0000-000000000323",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000439",
                    "groupId": "e0000000-0000-0000-0000-000000000209",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000440",
                    "groupId": "e0000000-0000-0000-0000-000000000209",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000441",
                    "groupId": "e0000000-0000-0000-0000-000000000209",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000324",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000002",
            "name": "Avial Kerala Style",
            "description": "Medley of native tropical vegetables stewed in fresh coconut paste, yoghurt, and pure cold-pressed coconut oil.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
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
        "name": "Regional Pulaos & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000325",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000003",
            "name": "Aidu Special Kodi Pulao",
            "description": "Fragrant short-grain rice cooked with whole spices and topped with succulent spiced chicken fry.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000210",
                "menuItemId": "d0000000-0000-0000-0000-000000000325",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000442",
                    "groupId": "e0000000-0000-0000-0000-000000000210",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000443",
                    "groupId": "e0000000-0000-0000-0000-000000000210",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 315,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000211",
                "menuItemId": "d0000000-0000-0000-0000-000000000325",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000444",
                    "groupId": "e0000000-0000-0000-0000-000000000211",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000445",
                    "groupId": "e0000000-0000-0000-0000-000000000211",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000326",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000003",
            "name": "Gongura Royyalu Pulao",
            "description": "Coastal spiced rice tossed with fresh prawns and tangy sorrel leaf masala.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000212",
                "menuItemId": "d0000000-0000-0000-0000-000000000326",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000446",
                    "groupId": "e0000000-0000-0000-0000-000000000212",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000447",
                    "groupId": "e0000000-0000-0000-0000-000000000212",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 368,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000213",
                "menuItemId": "d0000000-0000-0000-0000-000000000326",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000448",
                    "groupId": "e0000000-0000-0000-0000-000000000213",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000449",
                    "groupId": "e0000000-0000-0000-0000-000000000213",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000327",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000003",
            "name": "Kothu Parotta Veg",
            "description": "Flaky shredded parotta tossed on hot tawa with seasonal vegetables, onions, and spicy salna.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000328",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000003",
            "name": "Neer Dosa (3 pcs)",
            "description": "Paper-thin delicate rice crepes from Coastal Karnataka, served with coconut chutney.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000214",
                "menuItemId": "d0000000-0000-0000-0000-000000000328",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000450",
                    "groupId": "e0000000-0000-0000-0000-000000000214",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000451",
                    "groupId": "e0000000-0000-0000-0000-000000000214",
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
        "name": "Heritage Desserts & Drinks",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000329",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000004",
            "name": "Ada Pradhaman (Kerala Payasam)",
            "description": "Traditional Kerala dessert made of steamed rice flakes, rich coconut milk, and dark jaggery.",
            "price": 210,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000330",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000004",
            "name": "Mysore Pak with Warm Ghee",
            "description": "Rich, crumbly and melt-in-mouth gram flour fudge prepared with pure desi cow ghee.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000331",
            "restaurantId": "b0000000-0000-0000-0000-000000000022",
            "categoryId": "ca000000-0000-0000-0022-000000000004",
            "name": "Panakam Herbal Punch",
            "description": "Refreshing Vedic cooler made with jaggery water, crushed black pepper, cardamom, and dry ginger.",
            "price": 80,
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
    "id": "b0000000-0000-0000-0000-000000000023",
    "name": "Minerva Coffee Shop",
    "slug": "minerva-coffee-shop",
    "tagline": "Heritage South Indian breakfast & vegetarian landmark since 1987",
    "description": "Somajiguda's iconic vegetarian coffee shop in Amrutha Mall. Loved for Button Sambar Idlis, golden crisp Masala Dosas, afternoon Mirchi Bajjis, and authentic filter coffee.",
    "coverImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 5120,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 20,
    "deliveryTimeEstimateMax": 35,
    "minimumOrderAmount": 150,
    "deliveryFee": 30,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Amrutha Mall, Raj Bhavan Road, Somajiguda",
    "city": "Hyderabad",
    "latitude": 17.4255,
    "longitude": 78.4578,
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
        "name": "Heritage Morning Tiffins",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000332",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000001",
            "name": "Button Sambar Idli (14 mini idlis)",
            "description": "Platter of fourteen bite-sized steamed idlis submerged in piping hot spiced lentil sambar with ghee.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000215",
                "menuItemId": "d0000000-0000-0000-0000-000000000332",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000452",
                    "groupId": "e0000000-0000-0000-0000-000000000215",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000453",
                    "groupId": "e0000000-0000-0000-0000-000000000215",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000333",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000001",
            "name": "Special Masala Dosa",
            "description": "Crispy golden crepe smeared with red chutney and filled with spiced potato onion masala.",
            "price": 135,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000216",
                "menuItemId": "d0000000-0000-0000-0000-000000000333",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000454",
                    "groupId": "e0000000-0000-0000-0000-000000000216",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000455",
                    "groupId": "e0000000-0000-0000-0000-000000000216",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000334",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000001",
            "name": "Crispy Medu Vada (2 pcs)",
            "description": "Golden fried crispy lentil doughnuts with crushed black pepper and ginger, served with fresh chutneys.",
            "price": 105,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000335",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000001",
            "name": "Pesarattu Upma",
            "description": "Whole green gram batter crepe roasted crisp on griddle, stuffed with classic rava upma.",
            "price": 145,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
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
            "id": "d0000000-0000-0000-0000-000000000336",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000002",
            "name": "Minerva Executive South Indian Meals",
            "description": "Traditional vegetarian thali meal with rice, poori, sambar, rasam, kootu, veg fry, curd, and dessert.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000337",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000002",
            "name": "Bisi Bele Bath with Boondi",
            "description": "Wholesome rice and toor dal preparation simmered with seasonal vegetables, pure ghee, and boondi.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000338",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000002",
            "name": "Tempered Curd Rice",
            "description": "Cooling seasoned yoghurt rice tempered with mustard, cumin, green chillies, and ginger.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000339",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000002",
            "name": "Puliyogare (Tamarind Rice)",
            "description": "Temple-style tangy tamarind rice tempered with roasted peanuts, curry leaves, and red chillies.",
            "price": 130,
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
        "id": "ca000000-0000-0000-0023-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000023",
        "name": "Snacks & Evening Specials",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000340",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000003",
            "name": "Mirchi Bajji (3 pcs)",
            "description": "Stuffed large green chillies dipped in spiced gram flour batter, deep-fried and dusted with chaat masala.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000341",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000003",
            "name": "Cut Mirchi with Onions",
            "description": "Crisp twice-fried chopped chilli fritters tossed with finely chopped raw onions, lemon, and peanut podi.",
            "price": 95,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000342",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000003",
            "name": "Poori Masala (3 pcs)",
            "description": "Golden puffed whole wheat pooris served with warm spiced potato curry.",
            "price": 130,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000343",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000003",
            "name": "Rava Dosa Special",
            "description": "Thin and crispy semolina crepe riddled with cumin seeds, crushed black pepper, and cashews.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000217",
                "menuItemId": "d0000000-0000-0000-0000-000000000343",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000456",
                    "groupId": "e0000000-0000-0000-0000-000000000217",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000457",
                    "groupId": "e0000000-0000-0000-0000-000000000217",
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
            "id": "d0000000-0000-0000-0000-000000000344",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000004",
            "name": "Minerva Filter Coffee",
            "description": "The famous house blend chicory filter coffee frothed to perfection in stainless steel davarah.",
            "price": 50,
            "imageUrl": "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000218",
                "menuItemId": "d0000000-0000-0000-0000-000000000344",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000458",
                    "groupId": "e0000000-0000-0000-0000-000000000218",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000459",
                    "groupId": "e0000000-0000-0000-0000-000000000218",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000460",
                    "groupId": "e0000000-0000-0000-0000-000000000218",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000345",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000004",
            "name": "Rava Kesari with Cashews",
            "description": "Warm golden sweet semolina dessert infused with saffron, ghee, and golden raisins.",
            "price": 85,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000346",
            "restaurantId": "b0000000-0000-0000-0000-000000000023",
            "categoryId": "ca000000-0000-0000-0023-000000000004",
            "name": "Badam Milk Chilled",
            "description": "Creamy chilled milk prepared with crushed almonds, saffron strands, and green cardamom.",
            "price": 90,
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
    "id": "b0000000-0000-0000-0000-000000000024",
    "name": "Tre-Forni Bar & Restaurant",
    "slug": "tre-forni",
    "tagline": "Luxury Italian dining & wood-fired stone oven gastronomy",
    "description": "Banjara Hills' premier luxury Italian destination at Park Hyatt Hyderabad. Renowned for authentic Northern Italian homestyle recipes, wood-fired oven pizzas, and artisan pasta.",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80",
    "rating": 4.9,
    "ratingCount": 1580,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 55,
    "minimumOrderAmount": 600,
    "deliveryFee": 75,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Park Hyatt, Road No. 2, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4262,
    "longitude": 78.4295,
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
        "name": "Antipasti Artigianali",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000347",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000001",
            "name": "Carpaccio di Manzo",
            "description": "Paper-thin slices of tenderloin beef with wild arugula, shaved parmesan, capers, and truffle vinaigrette.",
            "price": 850,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000348",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000001",
            "name": "Burrata Pugliese Artigianale",
            "description": "Creamy artisanal burrata from Puglia with roasted heirloom cherry tomatoes, basil pesto, and pine nuts.",
            "price": 740,
            "imageUrl": "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000349",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000001",
            "name": "Calamari alla Griglia",
            "description": "Charcoal-grilled fresh squid with garlic, fresh red chillies, lemon zest, and extra virgin olive oil.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000350",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000001",
            "name": "Bruschetta ai Funghi Porcini",
            "description": "Grilled country bread topped with sautéed wild porcini mushrooms, fresh thyme, and melted fontina.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
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
            "id": "d0000000-0000-0000-0000-000000000351",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000002",
            "name": "Risotto ai Funghi Porcini",
            "description": "Carnaroli rice slow-cooked with wild porcini stock, white wine, butter, and 24-month aged parmesan.",
            "price": 820,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000352",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000002",
            "name": "Ravioli di Ricotta e Spinaci al Burro",
            "description": "Handmade pasta pillows filled with buffalo ricotta and spinach, tossed in sage butter and pine nuts.",
            "price": 760,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000353",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000002",
            "name": "Tagliolini al Tartufo Nero",
            "description": "Fine handcrafted egg pasta strands tossed with aromatic black winter truffle paste and butter sabayon.",
            "price": 890,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000354",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000002",
            "name": "Linguine ai Frutti di Mare",
            "description": "Artisan linguine with tiger prawns, squid, and black mussels in a light white wine tomato broth.",
            "price": 980,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0024-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000024",
        "name": "Pizze Forno a Legna",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000355",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000003",
            "name": "Pizza Tre-Forni Signature",
            "description": "Stone oven sourdough pizza with San Marzano tomatoes, buffalo mozzarella, parma ham, and arugula.",
            "price": 840,
            "imageUrl": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000219",
                "menuItemId": "d0000000-0000-0000-0000-000000000355",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000461",
                    "groupId": "e0000000-0000-0000-0000-000000000219",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000462",
                    "groupId": "e0000000-0000-0000-0000-000000000219",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000220",
                "menuItemId": "d0000000-0000-0000-0000-000000000355",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000463",
                    "groupId": "e0000000-0000-0000-0000-000000000220",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000464",
                    "groupId": "e0000000-0000-0000-0000-000000000220",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000356",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000003",
            "name": "Pizza Margherita D.O.P.",
            "description": "San Marzano D.O.P. tomatoes, fresh Campania buffalo mozzarella, fragrant sweet basil, and EVOO.",
            "price": 690,
            "imageUrl": "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000221",
                "menuItemId": "d0000000-0000-0000-0000-000000000356",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000465",
                    "groupId": "e0000000-0000-0000-0000-000000000221",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000466",
                    "groupId": "e0000000-0000-0000-0000-000000000221",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000222",
                "menuItemId": "d0000000-0000-0000-0000-000000000356",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000467",
                    "groupId": "e0000000-0000-0000-0000-000000000222",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000468",
                    "groupId": "e0000000-0000-0000-0000-000000000222",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000357",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000003",
            "name": "Pizza Primavera Ortolana",
            "description": "Wood-fired crust with grilled eggplant, zucchini, roasted peppers, black olives, and fior di latte.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000223",
                "menuItemId": "d0000000-0000-0000-0000-000000000357",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000469",
                    "groupId": "e0000000-0000-0000-0000-000000000223",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000470",
                    "groupId": "e0000000-0000-0000-0000-000000000223",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000224",
                "menuItemId": "d0000000-0000-0000-0000-000000000357",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000471",
                    "groupId": "e0000000-0000-0000-0000-000000000224",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000472",
                    "groupId": "e0000000-0000-0000-0000-000000000224",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000358",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000003",
            "name": "Focaccia Barese al Pomodoro",
            "description": "Puglian style thick sourdough focaccia baked with cherry tomatoes, oregano, and olive oil.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0024-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000024",
        "name": "Dolci Tradizionali",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000359",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000004",
            "name": "Tiramisu Tradizionale Tre-Forni",
            "description": "Prepared tableside with fresh mascarpone cream, savoiardi biscuits soaked in Illy espresso, and cocoa.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000360",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000004",
            "name": "Cannoli Siciliani con Ricotta (2 pcs)",
            "description": "Crispy fried Sicilian pastry tubes filled with sweetened sheep ricotta, candied orange, and pistachios.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000361",
            "restaurantId": "b0000000-0000-0000-0000-000000000024",
            "categoryId": "ca000000-0000-0000-0024-000000000004",
            "name": "Acqua Panna Still Mineral Water (750ml)",
            "description": "Natural spring water bottled at the source in Tuscany, Italy.",
            "price": 290,
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
    "id": "b0000000-0000-0000-0000-000000000025",
    "name": "Jewel of Nizam - The Minar",
    "slug": "jewel-of-nizam",
    "tagline": "Royal fine dining in a 100-foot heritage tower overlooking the lake",
    "description": "Hyderabad's iconic fifth minar at The Golkonda Resort, Gandipet. An incomparable royal Nizami fine-dining experience with Barkas Pathar Ka Gosht, Kacchi Dum Biryani, and Nalli Nihari.",
    "coverImage": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80",
    "rating": 4.9,
    "ratingCount": 1890,
    "priceTier": "₹₹₹₹",
    "deliveryTimeEstimateMin": 40,
    "deliveryTimeEstimateMax": 60,
    "minimumOrderAmount": 600,
    "deliveryFee": 80,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "The Golkonda Resort, Sagar Mahal Complex, Gandipet",
    "city": "Hyderabad",
    "latitude": 17.3912,
    "longitude": 78.3245,
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
        "name": "Nizami Dastarkhwan Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000362",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000001",
            "name": "Barkas Pathar Ka Gosht",
            "description": "Tender baby lamb fillets marinated with green papaya, garam masala, and seared on granite slabs.",
            "price": 840,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000363",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000001",
            "name": "Dahi Ke Shikampuri Kebab (4 pcs)",
            "description": "Pan-seared spiced yoghurt and lentil patties stuffed with fresh mint, green chillies, and pomegranate.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000225",
                "menuItemId": "d0000000-0000-0000-0000-000000000363",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000473",
                    "groupId": "e0000000-0000-0000-0000-000000000225",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000474",
                    "groupId": "e0000000-0000-0000-0000-000000000225",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000226",
                "menuItemId": "d0000000-0000-0000-0000-000000000363",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000475",
                    "groupId": "e0000000-0000-0000-0000-000000000226",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000476",
                    "groupId": "e0000000-0000-0000-0000-000000000226",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000364",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000001",
            "name": "Murgh Nizami Boti Kebab",
            "description": "Boneless chicken morsels steeped in saffron yoghurt marinade, skewered and roasted over charcoal.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000227",
                "menuItemId": "d0000000-0000-0000-0000-000000000364",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000477",
                    "groupId": "e0000000-0000-0000-0000-000000000227",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000478",
                    "groupId": "e0000000-0000-0000-0000-000000000227",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000228",
                "menuItemId": "d0000000-0000-0000-0000-000000000364",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000479",
                    "groupId": "e0000000-0000-0000-0000-000000000228",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000480",
                    "groupId": "e0000000-0000-0000-0000-000000000228",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000365",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000001",
            "name": "Subz Moti Seekh",
            "description": "Finely minced garden vegetables and cottage cheese pearls skewered and charred over live embers.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
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
        "name": "Royal Heritage Curries",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000366",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000002",
            "name": "Nalli Nihari Asaf Jahi",
            "description": "Shank of tender lamb braised overnight in a copper cauldron with 36 proprietary spices and bone marrow broth.",
            "price": 980,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 35,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000367",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000002",
            "name": "Murgh Dum Korma Jahanara",
            "description": "Chicken cooked on slow dum with cashew paste, brown onions, yoghurt, and rose petal water.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000229",
                "menuItemId": "d0000000-0000-0000-0000-000000000367",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000481",
                    "groupId": "e0000000-0000-0000-0000-000000000229",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000482",
                    "groupId": "e0000000-0000-0000-0000-000000000229",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000483",
                    "groupId": "e0000000-0000-0000-0000-000000000229",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000368",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000002",
            "name": "Paneer Kundan Qaliya",
            "description": "Cottage cheese simmered in a velvety golden turmeric and almond gravy, garnished with pure gold leaf.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000369",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000002",
            "name": "Mirchi Ka Salan Khaas",
            "description": "Large Bhavnagri chillies poached in a royal roasted peanut, sesame, and tamarind emulsion.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0025-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000025",
        "name": "Shahi Biryanis & Breads",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000370",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000003",
            "name": "Kacchi Dum Gosht Biryani Khaas",
            "description": "Raw tender mutton marinated in curd and spices, layered with aged basmati rice and cooked on slow charcoal dum.",
            "price": 860,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 35,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000230",
                "menuItemId": "d0000000-0000-0000-0000-000000000370",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000484",
                    "groupId": "e0000000-0000-0000-0000-000000000230",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000485",
                    "groupId": "e0000000-0000-0000-0000-000000000230",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 645,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000231",
                "menuItemId": "d0000000-0000-0000-0000-000000000370",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000486",
                    "groupId": "e0000000-0000-0000-0000-000000000231",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000487",
                    "groupId": "e0000000-0000-0000-0000-000000000231",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000371",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000003",
            "name": "Subz Moti Pulao Handi",
            "description": "Fragrant basmati rice layered with garden vegetables, paneer pearls, and mild Awadhi spices.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000232",
                "menuItemId": "d0000000-0000-0000-0000-000000000371",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000488",
                    "groupId": "e0000000-0000-0000-0000-000000000232",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000489",
                    "groupId": "e0000000-0000-0000-0000-000000000232",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 360,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000233",
                "menuItemId": "d0000000-0000-0000-0000-000000000371",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000490",
                    "groupId": "e0000000-0000-0000-0000-000000000233",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000491",
                    "groupId": "e0000000-0000-0000-0000-000000000233",
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
            "categoryId": "ca000000-0000-0000-0025-000000000003",
            "name": "Zafrani Sheermal (2 pcs)",
            "description": "Traditional milk-kneaded baked sweet bread infused with pure saffron and brushed with butter.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000373",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000003",
            "name": "Warqi Paratha (2 pcs)",
            "description": "Multi-layered flaky royal flatbread brushed with desi ghee.",
            "price": 150,
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
        "id": "ca000000-0000-0000-0025-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000025",
        "name": "Royal Shahi Sweets",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000374",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000004",
            "name": "Anokhi Kheer (Royal Garlic Dessert)",
            "description": "The legendary royal delicacy made with blanched garlic cooked in sweetened saffron milk so all pungency is gone.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000375",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000004",
            "name": "Khubani Ka Meetha with Clotted Malai",
            "description": "Stewed dried apricots garnished with fresh clotted malai and blanched apricot kernels.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000376",
            "restaurantId": "b0000000-0000-0000-0000-000000000025",
            "categoryId": "ca000000-0000-0000-0025-000000000004",
            "name": "Badam Ka Harira (Almond Elixir)",
            "description": "Warm comforting traditional almond beverage brewed with saffron, cardamom, and pure ghee.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000026",
    "name": "AB's - Absolute Barbecues",
    "slug": "absolute-barbecues",
    "tagline": "Custom wish-grill, live skewers & celebratory buffet feasts",
    "description": "Hyderabad's high-energy live barbecue destination in Madhapur. Famous for DIY table grills, exotic wish-grills, customized chicken & seafood boxes, and indulgent biryani meals.",
    "coverImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80",
    "rating": 4.7,
    "ratingCount": 5120,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 40,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot 22, Inorbit Mall Road, Vittal Rao Nagar, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4398,
    "longitude": 78.3845,
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
        "name": "Live Grill Boxes & Skewers",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000377",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "BBQ Chicken Wings (6 pcs)",
            "description": "Smoky char-grilled chicken wings glazed with tangy barbecue sauce and crushed black pepper.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000378",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "Grilled Prawns Skewer Box",
            "description": "Fresh coastal prawns marinated in herb garlic butter, char-grilled on skewers with grilled lemon.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000379",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "Spiced Mutton Seekh Kebab Box",
            "description": "Skewered minced mutton kebabs seasoned with cumin, coriander, and fresh mint, grilled on charcoal.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000234",
                "menuItemId": "d0000000-0000-0000-0000-000000000379",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000492",
                    "groupId": "e0000000-0000-0000-0000-000000000234",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000493",
                    "groupId": "e0000000-0000-0000-0000-000000000234",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000235",
                "menuItemId": "d0000000-0000-0000-0000-000000000379",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000494",
                    "groupId": "e0000000-0000-0000-0000-000000000235",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000495",
                    "groupId": "e0000000-0000-0000-0000-000000000235",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000380",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "Crispy Corn Salt and Pepper",
            "description": "Sweet corn kernels coated in light cornstarch batter, flash-fried and tossed with spring onions and pepper.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000381",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "Paneer Tikka Platter",
            "description": "Cottage cheese cubes marinated in spiced yoghurt and roasted in clay tandoor with onions and capsicum.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000236",
                "menuItemId": "d0000000-0000-0000-0000-000000000381",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000496",
                    "groupId": "e0000000-0000-0000-0000-000000000236",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000497",
                    "groupId": "e0000000-0000-0000-0000-000000000236",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000237",
                "menuItemId": "d0000000-0000-0000-0000-000000000381",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000498",
                    "groupId": "e0000000-0000-0000-0000-000000000237",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000499",
                    "groupId": "e0000000-0000-0000-0000-000000000237",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000382",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000001",
            "name": "Tandoori Mushroom Skewers",
            "description": "Whole button mushrooms marinated in tikka spices and char-roasted over coals.",
            "price": 270,
            "imageUrl": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0026-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000026",
        "name": "Biryanis & Meal Boxes",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000383",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000002",
            "name": "AB's Special Chicken Dum Biryani",
            "description": "Fragrant basmati rice cooked on dum with spiced chicken, served with raita and mirchi ka salan.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000238",
                "menuItemId": "d0000000-0000-0000-0000-000000000383",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000500",
                    "groupId": "e0000000-0000-0000-0000-000000000238",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000501",
                    "groupId": "e0000000-0000-0000-0000-000000000238",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 218,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000239",
                "menuItemId": "d0000000-0000-0000-0000-000000000383",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000502",
                    "groupId": "e0000000-0000-0000-0000-000000000239",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000503",
                    "groupId": "e0000000-0000-0000-0000-000000000239",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000384",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000002",
            "name": "Butter Chicken with 2 Parottas",
            "description": "Boneless chicken tikka pieces in creamy makhani gravy paired with two layered parottas.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000385",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000002",
            "name": "Dal Makhani Bowl",
            "description": "Slow-simmered black lentils cooked overnight with butter and fresh cream.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000240",
                "menuItemId": "d0000000-0000-0000-0000-000000000385",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000504",
                    "groupId": "e0000000-0000-0000-0000-000000000240",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000505",
                    "groupId": "e0000000-0000-0000-0000-000000000240",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000506",
                    "groupId": "e0000000-0000-0000-0000-000000000240",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000386",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000002",
            "name": "Butter Naan (2 pcs)",
            "description": "Tandoor-baked flatbreads brushed with fresh butter.",
            "price": 80,
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
        "id": "ca000000-0000-0000-0026-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000026",
        "name": "Desserts & Beverages",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000387",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000003",
            "name": "Angoori Gulab Jamun (6 pcs)",
            "description": "Bite-sized soft milk dumplings soaked in rose-flavored sugar syrup.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000388",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000003",
            "name": "Chocolate Walnut Brownie",
            "description": "Dense fudgy chocolate brownie loaded with roasted walnuts and chocolate sauce.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000389",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000003",
            "name": "Lemon Mint Ice Tea",
            "description": "Freshly brewed iced black tea with lemon juice and crushed mint.",
            "price": 95,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000390",
            "restaurantId": "b0000000-0000-0000-0000-000000000026",
            "categoryId": "ca000000-0000-0000-0026-000000000003",
            "name": "Fresh Lime Soda",
            "description": "Chilled bubbly soda with freshly squeezed lime juice, sweet and salted.",
            "price": 75,
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
    "id": "b0000000-0000-0000-0000-000000000027",
    "name": "Exotica",
    "slug": "exotica-banjara-hills",
    "tagline": "Scenic rooftop dining with North Indian charcoal kebabs & Mughlai gravies",
    "description": "Renowned rooftop dining sanctuary overlooking Banjara Hills, serving refined North Indian sigri kebabs, slow-simmered rich curries, and fragrant dum handis.",
    "coverImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80",
    "rating": 4.4,
    "ratingCount": 16800,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 400,
    "deliveryFee": 49,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "5th Floor, 12th Square Building, Road No. 12, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4145,
    "longitude": 78.4412,
    "cuisines": [
      {
        "id": "c0000011-0000-0000-0000-000000000011",
        "name": "Modern Indian Bistro",
        "slug": "modern-indian",
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
        "id": "ca000000-0000-0000-0027-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000027",
        "name": "Sigri Kebabs & Charcoal Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000391",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000001",
            "name": "Murgh Malai Kebab Exotica",
            "description": "Boneless chicken cubes steeped in clotted cream, green cardamom, and mild cheese, char-grilled to velvety tenderness.",
            "price": 495,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000241",
                "menuItemId": "d0000000-0000-0000-0000-000000000391",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000507",
                    "groupId": "e0000000-0000-0000-0000-000000000241",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000508",
                    "groupId": "e0000000-0000-0000-0000-000000000241",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000242",
                "menuItemId": "d0000000-0000-0000-0000-000000000391",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000509",
                    "groupId": "e0000000-0000-0000-0000-000000000242",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000510",
                    "groupId": "e0000000-0000-0000-0000-000000000242",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000392",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000001",
            "name": "Zafrani Paneer Tikka (4 pcs)",
            "description": "Plump malai paneer blocks marinated with Kashmiri saffron, hung curd, and roasted cumin.",
            "price": 425,
            "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000243",
                "menuItemId": "d0000000-0000-0000-0000-000000000392",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000511",
                    "groupId": "e0000000-0000-0000-0000-000000000243",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000512",
                    "groupId": "e0000000-0000-0000-0000-000000000243",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000244",
                "menuItemId": "d0000000-0000-0000-0000-000000000392",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000513",
                    "groupId": "e0000000-0000-0000-0000-000000000244",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000514",
                    "groupId": "e0000000-0000-0000-0000-000000000244",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000393",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000001",
            "name": "Kakori Kebab (4 pcs)",
            "description": "Finely minced lamb kebabs enriched with raw papaya, rose water, and brown onion paste that melt on the tongue.",
            "price": 575,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000245",
                "menuItemId": "d0000000-0000-0000-0000-000000000393",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000515",
                    "groupId": "e0000000-0000-0000-0000-000000000245",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000516",
                    "groupId": "e0000000-0000-0000-0000-000000000245",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000246",
                "menuItemId": "d0000000-0000-0000-0000-000000000393",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000517",
                    "groupId": "e0000000-0000-0000-0000-000000000246",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000518",
                    "groupId": "e0000000-0000-0000-0000-000000000246",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000394",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000001",
            "name": "Tandoori Soya Chaap",
            "description": "Succulent soya chops steeped in Punjabi tandoori masala and finished with butter and fresh coriander.",
            "price": 365,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
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
            "id": "d0000000-0000-0000-0000-000000000395",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000002",
            "name": "Exotica Special Dal Makhani",
            "description": "Whole black urad lentils slow-simmered over charcoal for 18 hours with vine-ripened tomatoes, white butter, and rich cream.",
            "price": 395,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000247",
                "menuItemId": "d0000000-0000-0000-0000-000000000395",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000519",
                    "groupId": "e0000000-0000-0000-0000-000000000247",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000520",
                    "groupId": "e0000000-0000-0000-0000-000000000247",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000521",
                    "groupId": "e0000000-0000-0000-0000-000000000247",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000396",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000002",
            "name": "Murgh Tikka Butter Masala",
            "description": "Smoky boneless tandoori chicken chunks simmered in a silky, mildly sweet and tart makhani tomato-cashew reduction.",
            "price": 495,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000248",
                "menuItemId": "d0000000-0000-0000-0000-000000000396",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000522",
                    "groupId": "e0000000-0000-0000-0000-000000000248",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000523",
                    "groupId": "e0000000-0000-0000-0000-000000000248",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000249",
                "menuItemId": "d0000000-0000-0000-0000-000000000396",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000524",
                    "groupId": "e0000000-0000-0000-0000-000000000249",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000525",
                    "groupId": "e0000000-0000-0000-0000-000000000249",
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
            "categoryId": "ca000000-0000-0000-0027-000000000002",
            "name": "Rara Gosht Punjabi Style",
            "description": "Tender baby mutton bone-in pieces simmered alongside aromatic spiced mutton kheema in a robust bhuna gravy.",
            "price": 595,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000398",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000002",
            "name": "Paneer Tikka Lababdar",
            "description": "Charred paneer cubes cooked in an onion-tomato gravy laced with grated paneer and freshly pounded coriander seeds.",
            "price": 445,
            "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000250",
                "menuItemId": "d0000000-0000-0000-0000-000000000398",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000526",
                    "groupId": "e0000000-0000-0000-0000-000000000250",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000527",
                    "groupId": "e0000000-0000-0000-0000-000000000250",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000251",
                "menuItemId": "d0000000-0000-0000-0000-000000000398",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000528",
                    "groupId": "e0000000-0000-0000-0000-000000000251",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000529",
                    "groupId": "e0000000-0000-0000-0000-000000000251",
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
            "id": "d0000000-0000-0000-0000-000000000399",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000003",
            "name": "Gosht Dum Biryani Handi (Serves 1-2)",
            "description": "Fragrant long-grain aged basmati rice layered with pot-braised baby lamb cuts, saffron milk, and fried onions in a sealed handi.",
            "price": 525,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 30,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000252",
                "menuItemId": "d0000000-0000-0000-0000-000000000399",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000530",
                    "groupId": "e0000000-0000-0000-0000-000000000252",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000531",
                    "groupId": "e0000000-0000-0000-0000-000000000252",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 394,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000253",
                "menuItemId": "d0000000-0000-0000-0000-000000000399",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000532",
                    "groupId": "e0000000-0000-0000-0000-000000000253",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000533",
                    "groupId": "e0000000-0000-0000-0000-000000000253",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000400",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000003",
            "name": "Murgh Dum Biryani Handi (Serves 1-2)",
            "description": "Layered chicken dum biryani prepared in the Awadhi-Hyderabadi fusion method, served with spiced burani raita and salan.",
            "price": 445,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000254",
                "menuItemId": "d0000000-0000-0000-0000-000000000400",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000534",
                    "groupId": "e0000000-0000-0000-0000-000000000254",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000535",
                    "groupId": "e0000000-0000-0000-0000-000000000254",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 334,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000255",
                "menuItemId": "d0000000-0000-0000-0000-000000000400",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000536",
                    "groupId": "e0000000-0000-0000-0000-000000000255",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000537",
                    "groupId": "e0000000-0000-0000-0000-000000000255",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000401",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000003",
            "name": "Garlic Butter Naan (2 pcs)",
            "description": "Fluffy tandoor-baked leavened bread brushed generously with minced garlic and Amul melted butter.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000402",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000003",
            "name": "Kashmiri Naan (Stuffed with Nuts)",
            "description": "Special leavened flatbread stuffed with grated mawa, crushed almonds, cashews, and raisins.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0027-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000027",
        "name": "Desserts & Refreshers",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000403",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000004",
            "name": "Zafrani Kesar Phirni",
            "description": "Chilled ground rice pudding cooked with full-cream milk, infused with real saffron and set in traditional earthen sakoras.",
            "price": 195,
            "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000404",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000004",
            "name": "Gulab Jamun with Ice Cream",
            "description": "Two golden khoya jamuns soaked in warm cardamom syrup, accompanied by a scoop of artisanal vanilla bean ice cream.",
            "price": 185,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000405",
            "restaurantId": "b0000000-0000-0000-0000-000000000027",
            "categoryId": "ca000000-0000-0000-0027-000000000004",
            "name": "Fresh Mint Lime Cooler",
            "description": "Muddled fresh garden mint leaves, freshly squeezed lime, and chilled sparkling club soda with black salt.",
            "price": 145,
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
    "id": "b0000000-0000-0000-0000-000000000028",
    "name": "Little Italy",
    "slug": "little-italy-film-nagar",
    "tagline": "Pioneering vegetarian Italian fine dining, wood-fired pizzas & artisan dolci",
    "description": "Pioneering authentic vegetarian Italian dining destination in Hyderabad, celebrated for thin-crust wood-fired pizzas, hand-rolled pastas, and exquisite dolci.",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=200&q=80",
    "rating": 4.3,
    "ratingCount": 14200,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 350,
    "deliveryFee": 49,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Plot No. 240/A, 3rd Floor, Road No. 92, Film Nagar, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4262,
    "longitude": 78.4068,
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
            "id": "d0000000-0000-0000-0000-000000000406",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000001",
            "name": "Nachos with Warm Cheese Sauce & Salsa",
            "description": "Crispy warm corn tortilla chips loaded with melted Italian cheese sauce, refried beans, and fresh pico de gallo.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000407",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000001",
            "name": "Bruschetta al Pomodoro (4 pcs)",
            "description": "Sliced toasted artisan baguette rubbed with garlic and topped with chopped Roma tomatoes, fresh basil, and extra virgin olive oil.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000408",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000001",
            "name": "Funghi Trifolati",
            "description": "Fresh button mushrooms sautéed in garlic butter, white wine reduction, and fresh Italian parsley.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000409",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000001",
            "name": "Garlic Bread with Melted Cheese (4 pcs)",
            "description": "French baguette slices baked with herb garlic butter and bubbling mozzarella cheese.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
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
            "id": "d0000000-0000-0000-0000-000000000410",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000002",
            "name": "Pizza Sicilia",
            "description": "Fresh tomato sauce, fresh mozzarella, sun-dried tomatoes, pickled capers, black olives, and spicy chilli oil.",
            "price": 595,
            "imageUrl": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000256",
                "menuItemId": "d0000000-0000-0000-0000-000000000410",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000538",
                    "groupId": "e0000000-0000-0000-0000-000000000256",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000539",
                    "groupId": "e0000000-0000-0000-0000-000000000256",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000257",
                "menuItemId": "d0000000-0000-0000-0000-000000000410",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000540",
                    "groupId": "e0000000-0000-0000-0000-000000000257",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000541",
                    "groupId": "e0000000-0000-0000-0000-000000000257",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000411",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000002",
            "name": "Pizza Bellassai",
            "description": "San Marzano tomato sauce, mozzarella, sautéed mushrooms, baby spinach, roasted garlic, and toasted pine nuts.",
            "price": 575,
            "imageUrl": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000258",
                "menuItemId": "d0000000-0000-0000-0000-000000000411",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000542",
                    "groupId": "e0000000-0000-0000-0000-000000000258",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000543",
                    "groupId": "e0000000-0000-0000-0000-000000000258",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000259",
                "menuItemId": "d0000000-0000-0000-0000-000000000411",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000544",
                    "groupId": "e0000000-0000-0000-0000-000000000259",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000545",
                    "groupId": "e0000000-0000-0000-0000-000000000259",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000412",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000002",
            "name": "Pizza Mellino",
            "description": "Signature white pizza with mozzarella, gorgonzola cheese sauce, fresh cream, roasted garlic, and seasoned baby potatoes.",
            "price": 595,
            "imageUrl": "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000260",
                "menuItemId": "d0000000-0000-0000-0000-000000000412",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000546",
                    "groupId": "e0000000-0000-0000-0000-000000000260",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000547",
                    "groupId": "e0000000-0000-0000-0000-000000000260",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000261",
                "menuItemId": "d0000000-0000-0000-0000-000000000412",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000548",
                    "groupId": "e0000000-0000-0000-0000-000000000261",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000549",
                    "groupId": "e0000000-0000-0000-0000-000000000261",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000413",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000002",
            "name": "Pizza Margherita Classica",
            "description": "Traditional Neapolitan pizza topped with crushed Italian plum tomatoes, fresh Fior di Latte mozzarella, and sweet basil leaves.",
            "price": 495,
            "imageUrl": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000262",
                "menuItemId": "d0000000-0000-0000-0000-000000000413",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000550",
                    "groupId": "e0000000-0000-0000-0000-000000000262",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000551",
                    "groupId": "e0000000-0000-0000-0000-000000000262",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000263",
                "menuItemId": "d0000000-0000-0000-0000-000000000413",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000552",
                    "groupId": "e0000000-0000-0000-0000-000000000263",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000553",
                    "groupId": "e0000000-0000-0000-0000-000000000263",
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
            "id": "d0000000-0000-0000-0000-000000000414",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000003",
            "name": "Pasta Barbaresca",
            "description": "Penne pasta tossed in a creamy tomato sauce with broccoli, asparagus, sun-dried tomatoes, and parmesan cheese.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281728?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000415",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000003",
            "name": "Pasta Al Forno (Baked Pasta)",
            "description": "Oven-baked rigatoni layered with creamy béchamel, marinara sauce, seasonal garden vegetables, and golden melted mozzarella.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000416",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000003",
            "name": "Risotto ai Funghi",
            "description": "Slow-stirred Carnaroli rice cooked in vegetable stock with porcini and button mushrooms, finished with parmesan and butter.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000417",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000003",
            "name": "Ravioli Burro e Salvia",
            "description": "Handmade pasta pillows stuffed with spinach and ricotta, gently tossed in fragrant sage-infused brown butter sauce.",
            "price": 550,
            "imageUrl": "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
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
            "id": "d0000000-0000-0000-0000-000000000418",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000004",
            "name": "Tiramisu Italiano (Eggless)",
            "description": "Classic Venetian dessert of espresso-soaked savoiardi biscuits layered with mascarpone cream and dusted with Valrhona cocoa.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000419",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000004",
            "name": "Warm Chocolate Fudge Brownie",
            "description": "Decadent dark chocolate brownie served warm with rich hot fudge sauce and vanilla gelato.",
            "price": 250,
            "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000420",
            "restaurantId": "b0000000-0000-0000-0000-000000000028",
            "categoryId": "ca000000-0000-0000-0028-000000000004",
            "name": "Peach Iced Tea",
            "description": "Brewed black tea infused with natural white peach puree and chilled with crushed ice.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
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
    "slug": "churrolto-banjara-hills",
    "tagline": "Artisanal Spanish churros, gourmet tapas, rich thick sips & bistro mains",
    "description": "Hyderabad iconic dessert bistro and European cafe, famous for handcrafted Spanish churros, gourmet tapas, artisanal pasta, and rich thick sips.",
    "coverImage": "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=200&q=80",
    "rating": 4.4,
    "ratingCount": 18900,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 39,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot No. 48, Road No. 10, Banjara Hills",
    "city": "Hyderabad",
    "latitude": 17.4218,
    "longitude": 78.4485,
    "cuisines": [
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
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
        "id": "ca000000-0000-0000-0029-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000029",
        "name": "Artisanal Spanish Churros",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000421",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000001",
            "name": "Classic Cinnamon Churros with Belgian Chocolate",
            "description": "Four crispy handcrafted Spanish churros dusted with Ceylon cinnamon sugar, served with warm 54% dark Belgian chocolate fondue.",
            "price": 295,
            "imageUrl": "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000422",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000001",
            "name": "Stuffed Nutella Churros (3 pcs)",
            "description": "Plump crispy churro loops injected with creamy hazelnut Nutella spread and garnished with toasted hazelnuts.",
            "price": 325,
            "imageUrl": "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000423",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000001",
            "name": "Dulce de Leche Churro Bites",
            "description": "Bite-sized crispy churro nuggets rolled in brown sugar and drizzled with warm caramel dulce de leche sauce.",
            "price": 285,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000424",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000001",
            "name": "Ruby Chocolate Churro Platter",
            "description": "Tasting flight of classic and red velvet churros served with ruby chocolate dip, pistachio white ganache, and dark cocoa.",
            "price": 365,
            "imageUrl": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000264",
                "menuItemId": "d0000000-0000-0000-0000-000000000424",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000554",
                    "groupId": "e0000000-0000-0000-0000-000000000264",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000555",
                    "groupId": "e0000000-0000-0000-0000-000000000264",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000556",
                    "groupId": "e0000000-0000-0000-0000-000000000264",
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
            "id": "d0000000-0000-0000-0000-000000000425",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000002",
            "name": "Truffle Parmesan Hand-Cut Fries",
            "description": "Double-fried Idaho potato batons tossed in white truffle oil, sea salt crystals, and freshly grated Grana Padano parmesan.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000426",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000002",
            "name": "Spanish Chicken Croquettes (4 pcs)",
            "description": "Golden crumbed croquetas filled with smoked shredded chicken and rich creamy béchamel, served with garlic aioli.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000427",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000002",
            "name": "Charred Corn & Jalapeno Quesadilla",
            "description": "Toasted flour tortillas filled with Monterey Jack cheese, fire-roasted sweet corn, and jalapeno relish.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000428",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000002",
            "name": "Peri Peri Crispy Calamari",
            "description": "Tender squid rings dusted in seasoned cornmeal and fiery African peri peri spice, served with lemon herb dip.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
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
            "id": "d0000000-0000-0000-0000-000000000429",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000003",
            "name": "Spanish Vegetable Paella",
            "description": "Traditional Bomba rice cooked slowly in saffron vegetable stock with artichoke hearts, bell peppers, green peas, and rosemary.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000430",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000003",
            "name": "Chicken Pesto Fettuccine",
            "description": "Handcrafted flat fettuccine tossed with grilled chicken strips in a fragrant Genovese basil and roasted pine nut pesto cream.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281728?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000431",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000003",
            "name": "Smash Bacon Cheeseburger",
            "description": "Two smashed grilled patties layered with cheddar cheese, crispy bacon rashers, house gherkin relish, and brioche bun.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000432",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000003",
            "name": "Wild Mushroom Risotto Bowl",
            "description": "Creamy Arborio rice with porcini mushroom paste, truffle oil drizzle, and shaved parmesan.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0029-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000029",
        "name": "Beverages & Thick Sips",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000433",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000004",
            "name": "Spanish Hot Chocolate Thick Sip",
            "description": "Traditional spoon-thick Spanish sipping chocolate made from melted high-cocoa dark chocolate and fresh dairy.",
            "price": 195,
            "imageUrl": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000434",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000004",
            "name": "Iced Hazelnut Frappe",
            "description": "Double espresso blended with roasted hazelnut syrup, chilled milk, and vanilla ice cream, crowned with whipped cream.",
            "price": 230,
            "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000435",
            "restaurantId": "b0000000-0000-0000-0000-000000000029",
            "categoryId": "ca000000-0000-0000-0029-000000000004",
            "name": "Passionfruit Mint Lemonade",
            "description": "Tropical passionfruit nectar, fresh garden mint, lime juice, and chilled sparkling soda.",
            "price": 170,
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
    "id": "b0000000-0000-0000-0000-000000000030",
    "name": "Flechazo",
    "slug": "flechazo-madhapur",
    "tagline": "Mediterranean tapas, wood-fired pizza & multi-cuisine celebratory dining",
    "description": "Dynamic celebratory dining brand in Madhapur offering a lively fusion of Mediterranean mezze, thin-crust pizzas, Asian wok toss, and rich North Indian curries.",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80",
    "rating": 4.3,
    "ratingCount": 22100,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "2nd Floor, Plot No. 128, Inorbit Mall Road, Next to Karachi Bakery, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4372,
    "longitude": 78.3854,
    "cuisines": [
      {
        "id": "c0000011-0000-0000-0000-000000000011",
        "name": "Modern Indian Bistro",
        "slug": "modern-indian",
        "icon": "Sparkles"
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
            "id": "d0000000-0000-0000-0000-000000000436",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000001",
            "name": "Chicken Shawarma Wrap with Garlic Toum",
            "description": "Shaved chicken rotisserie meat rolled with pickled turnip, fries, and garlic toum in warm Lebanese flatbread.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000265",
                "menuItemId": "d0000000-0000-0000-0000-000000000436",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000557",
                    "groupId": "e0000000-0000-0000-0000-000000000265",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000558",
                    "groupId": "e0000000-0000-0000-0000-000000000265",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000437",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000001",
            "name": "Falafel Pita Pocket with Hummus",
            "description": "Golden spiced chickpea patties tucked into whole wheat pita with creamy tahini hummus and shredded salad.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1593001874117-c99c800e3eb7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000438",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000001",
            "name": "Mezze Platter Trio",
            "description": "Tasting sampler of classic smooth hummus, smoky baba ganoush, and spicy muhammara, served with warm pita triangles.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000266",
                "menuItemId": "d0000000-0000-0000-0000-000000000438",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000559",
                    "groupId": "e0000000-0000-0000-0000-000000000266",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000560",
                    "groupId": "e0000000-0000-0000-0000-000000000266",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000561",
                    "groupId": "e0000000-0000-0000-0000-000000000266",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000439",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000001",
            "name": "Smoked Chicken Wings (6 pcs)",
            "description": "Crisp chicken wings glazed with smoky barbecue sauce and sprinkled with toasted sesame seeds.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
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
            "id": "d0000000-0000-0000-0000-000000000440",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000002",
            "name": "Barbecue Chicken Thin Crust Pizza",
            "description": "Oven-baked 10-inch pizza topped with smoky shredded chicken, red onion rings, mozzarella, and hickory BBQ drizzle.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000267",
                "menuItemId": "d0000000-0000-0000-0000-000000000440",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000562",
                    "groupId": "e0000000-0000-0000-0000-000000000267",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000563",
                    "groupId": "e0000000-0000-0000-0000-000000000267",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000268",
                "menuItemId": "d0000000-0000-0000-0000-000000000440",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000564",
                    "groupId": "e0000000-0000-0000-0000-000000000268",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000565",
                    "groupId": "e0000000-0000-0000-0000-000000000268",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000441",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000002",
            "name": "Margherita Thin Crust Pizza",
            "description": "Crisp hand-tossed base layered with herb tomato concasse, mozzarella cheese, and sweet Italian basil.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000269",
                "menuItemId": "d0000000-0000-0000-0000-000000000441",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000566",
                    "groupId": "e0000000-0000-0000-0000-000000000269",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000567",
                    "groupId": "e0000000-0000-0000-0000-000000000269",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000270",
                "menuItemId": "d0000000-0000-0000-0000-000000000441",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000568",
                    "groupId": "e0000000-0000-0000-0000-000000000270",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000569",
                    "groupId": "e0000000-0000-0000-0000-000000000270",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000442",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000002",
            "name": "Chilli Garlic Chicken Fried Rice",
            "description": "Fragrant jasmine rice wok-tossed on high flame with diced chicken, scorched red chillies, and fried golden garlic.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000443",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000002",
            "name": "Veg Hakka Noodles with Bok Choy",
            "description": "Classic wok-tossed street noodles with shredded cabbage, carrots, spring onions, and crisp baby bok choy.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
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
            "id": "d0000000-0000-0000-0000-000000000444",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000003",
            "name": "Mutton Dum Biryani Bowl (Serves 1)",
            "description": "Fragrant basmati rice layered with succulent baby goat pieces, brown onions, and whole spices, served with raita and mirchi ka salan.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000271",
                "menuItemId": "d0000000-0000-0000-0000-000000000444",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000570",
                    "groupId": "e0000000-0000-0000-0000-000000000271",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000571",
                    "groupId": "e0000000-0000-0000-0000-000000000271",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 293,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000272",
                "menuItemId": "d0000000-0000-0000-0000-000000000444",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000572",
                    "groupId": "e0000000-0000-0000-0000-000000000272",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000573",
                    "groupId": "e0000000-0000-0000-0000-000000000272",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000445",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000003",
            "name": "Butter Chicken Gravy",
            "description": "Tender tandoori chicken cooked in an aromatic tomato, cashew, and fenugreek butter sauce.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000273",
                "menuItemId": "d0000000-0000-0000-0000-000000000445",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000574",
                    "groupId": "e0000000-0000-0000-0000-000000000273",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000575",
                    "groupId": "e0000000-0000-0000-0000-000000000273",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000576",
                    "groupId": "e0000000-0000-0000-0000-000000000273",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000446",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000003",
            "name": "Paneer Tikka Masala",
            "description": "Grilled tandoori paneer cubes simmered in a mildly spiced onion, tomato, and bell pepper masala gravy.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000274",
                "menuItemId": "d0000000-0000-0000-0000-000000000446",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000577",
                    "groupId": "e0000000-0000-0000-0000-000000000274",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000578",
                    "groupId": "e0000000-0000-0000-0000-000000000274",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000275",
                "menuItemId": "d0000000-0000-0000-0000-000000000446",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000579",
                    "groupId": "e0000000-0000-0000-0000-000000000275",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000580",
                    "groupId": "e0000000-0000-0000-0000-000000000275",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000447",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000003",
            "name": "Butter Naan (2 pcs)",
            "description": "Tandoor-baked leavened flatbread brushed with butter.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0030-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000030",
        "name": "Desserts & Refreshers",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000448",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000004",
            "name": "Nutella Brownie Tub",
            "description": "Rich gooey chocolate brownie topped with chocolate fudge sauce and Nutella drizzle.",
            "price": 195,
            "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000449",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000004",
            "name": "Gulab Jamun (2 pcs)",
            "description": "Classic fried milk solid dumplings steeped in warm sugar syrup flavoured with green cardamom.",
            "price": 95,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000450",
            "restaurantId": "b0000000-0000-0000-0000-000000000030",
            "categoryId": "ca000000-0000-0000-0030-000000000004",
            "name": "Blueberry Iced Slush",
            "description": "Crushed ice slush infused with wild blueberry syrup, lime juice, and mint leaves.",
            "price": 145,
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
    "id": "b0000000-0000-0000-0000-000000000031",
    "name": "The Hole in the Wall Cafe",
    "slug": "the-hole-in-the-wall-cafe-jubilee-hills",
    "tagline": "Colossal all-day English breakfast, fluffy pancakes, paninis & specialty brews",
    "description": "Vibrant all-day breakfast haven and bohemian hangout in Jubilee Hills, legendary for colossal English platters, fluffy buttermilk pancakes, sourdough toasts, and artisanal coffee.",
    "coverImage": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=200&q=80",
    "rating": 4.4,
    "ratingCount": 17300,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 40,
    "minimumOrderAmount": 250,
    "deliveryFee": 39,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot No. 1355, Road No. 86, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4338,
    "longitude": 78.4026,
    "cuisines": [
      {
        "id": "c0000012-0000-0000-0000-000000000012",
        "name": "European Bistro & Patisserie",
        "slug": "european-bistro",
        "icon": "Cake"
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
        "id": "ca000000-0000-0000-0031-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000031",
        "name": "All-Day Breakfast & Eggs",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000451",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000001",
            "name": "The Whole Hog English Breakfast Platter",
            "description": "Two eggs cooked to order, grilled chicken sausages, crispy bacon, sautéed mushrooms, baked beans, grilled tomato, and buttered toast.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000276",
                "menuItemId": "d0000000-0000-0000-0000-000000000451",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000581",
                    "groupId": "e0000000-0000-0000-0000-000000000276",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000582",
                    "groupId": "e0000000-0000-0000-0000-000000000276",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000583",
                    "groupId": "e0000000-0000-0000-0000-000000000276",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000452",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000001",
            "name": "Smashed Avocado & Feta Sourdough Toast",
            "description": "Crushed ripe Hass avocados on thick-cut toasted sourdough, sprinkled with crumbled Danish feta, cherry tomatoes, and microgreens.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000453",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000001",
            "name": "Classic Fluffy Buttermilk Pancakes with Maple Syrup",
            "description": "Stack of three golden, cloud-soft buttermilk pancakes served with sweet whipped butter and pure maple syrup.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000454",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000001",
            "name": "Spicy Moroccan Shakshuka with Toast",
            "description": "Two farm eggs poached gently in a spiced sauce of stewed tomatoes, bell peppers, cumin, and garlic, served with toasted sourdough.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
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
            "id": "d0000000-0000-0000-0000-000000000455",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000002",
            "name": "Grilled Smoked Chicken & Pesto Panini",
            "description": "Herb-roasted chicken breast, homemade basil pesto, sun-dried tomatoes, and melted mozzarella pressed in crusty ciabatta.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000456",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000002",
            "name": "Grilled Mediterranean Roasted Veggie Sandwich",
            "description": "Charred zucchini, bell peppers, baby spinach, caramelized onions, and garlic herb spread on grilled multigrain bread.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1521390188846-e2a39b7ef4a8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000457",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000002",
            "name": "The Hole Juicy Tender Beef / Lamb Burger",
            "description": "Handcrafted seasoned meat patty grilled medium, stacked with melted cheddar cheese, lettuce, pickles, and house secret burger sauce on brioche.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000458",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000002",
            "name": "Crispy Loaded Potato Wedges with Dip",
            "description": "Golden skin-on potato wedges seasoned with smoked paprika and garlic herb seasoning, served with sour cream dip.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
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
            "id": "d0000000-0000-0000-0000-000000000459",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000003",
            "name": "Handcrafted Spinach Ricotta Ravioli",
            "description": "Fresh square ravioli stuffed with creamed spinach and ricotta cheese, tossed in a sun-ripened tomato basil sauce.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1587740908075-9e245070dfaa?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000460",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000003",
            "name": "Grilled Herb Crusted Fish Fillet with Lemon Butter",
            "description": "Pan-seared river fish fillet coated in fresh herb crumbs, served over buttered mashed potatoes and sautéed greens.",
            "price": 450,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000461",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000003",
            "name": "Wild Mushroom Penne in Cream Sauce",
            "description": "Al dente penne pasta coated in rich garlic mushroom cream sauce and finished with freshly cracked black pepper and parmesan.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281728?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
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
            "id": "d0000000-0000-0000-0000-000000000462",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000004",
            "name": "Warm Apple Cinnamon Crumble with Vanilla Ice Cream",
            "description": "Baked spiced Granny Smith apples topped with crunchy golden butter-oat crumble and served with vanilla ice cream.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000463",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000004",
            "name": "Mudpie / Dark Chocolate Sea Salt Tart",
            "description": "Silky rich dark Belgian chocolate ganache tart sprinkled with sea salt crystals and served chilled.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000464",
            "restaurantId": "b0000000-0000-0000-0000-000000000031",
            "categoryId": "ca000000-0000-0000-0031-000000000004",
            "name": "Classic Cold Brew Iced Latte",
            "description": "Slow-steeped Arabica cold brew concentrate poured over chilled whole milk and ice.",
            "price": 195,
            "imageUrl": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000277",
                "menuItemId": "d0000000-0000-0000-0000-000000000464",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000584",
                    "groupId": "e0000000-0000-0000-0000-000000000277",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000585",
                    "groupId": "e0000000-0000-0000-0000-000000000277",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000586",
                    "groupId": "e0000000-0000-0000-0000-000000000277",
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
    "slug": "telangana-spice-kitchen-madhapur",
    "tagline": "Authentic rustic Telangana cuisine, Golichina Mamsam & Natu Kodi Pulusu",
    "description": "Authentic regional culinary tribute celebrating rural Telangana home cooking, village-style country curries, fiery dry roasts, and rustic jowar rotis.",
    "coverImage": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=200&q=80",
    "rating": 4.3,
    "ratingCount": 15400,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 300,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Opposite Hitex Gate, Next to Silpa Gram, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4475,
    "longitude": 78.3756,
    "cuisines": [
      {
        "id": "c0000005-0000-0000-0000-000000000005",
        "name": "Telangana Heritage",
        "slug": "telangana-heritage",
        "icon": "Flame"
      },
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
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
            "id": "d0000000-0000-0000-0000-000000000465",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000001",
            "name": "Golichina Mamsam (Mutton Roast)",
            "description": "Tender baby mutton cubes pan-roasted in stone-ground Telangana spices, caramelized shallots, curry leaves, and green chillies.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000466",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000001",
            "name": "Miriyala Kodi Vepudu (Pepper Chicken)",
            "description": "Country chicken morsels tossed vigorously with cracked black Tellicherry pepper, garlic pods, and fresh curry leaves.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000278",
                "menuItemId": "d0000000-0000-0000-0000-000000000466",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000587",
                    "groupId": "e0000000-0000-0000-0000-000000000278",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000588",
                    "groupId": "e0000000-0000-0000-0000-000000000278",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000279",
                "menuItemId": "d0000000-0000-0000-0000-000000000466",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000589",
                    "groupId": "e0000000-0000-0000-0000-000000000279",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000590",
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
            "id": "d0000000-0000-0000-0000-000000000467",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000001",
            "name": "Makka Garelu (Corn Vada - 4 pcs)",
            "description": "Traditional crisp sweet corn fritters ground with cumin, ginger, and green chillies, served with spicy tomato chutney.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000468",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000001",
            "name": "Royyala Vepudu (Spicy Prawn Fry)",
            "description": "Fresh bay prawns sautéed with crushed coriander seeds, garlic cloves, red chillies, and lemon juice.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000280",
                "menuItemId": "d0000000-0000-0000-0000-000000000468",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000591",
                    "groupId": "e0000000-0000-0000-0000-000000000280",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000592",
                    "groupId": "e0000000-0000-0000-0000-000000000280",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000281",
                "menuItemId": "d0000000-0000-0000-0000-000000000468",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000593",
                    "groupId": "e0000000-0000-0000-0000-000000000281",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000594",
                    "groupId": "e0000000-0000-0000-0000-000000000281",
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
            "id": "d0000000-0000-0000-0000-000000000469",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000002",
            "name": "Telangana Natu Kodi Pulusu (Country Chicken Stew)",
            "description": "Slow-simmered indigenous country chicken in a peppery, spicy red gravy enriched with poppy seeds and roasted spices.",
            "price": 410,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 28,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000282",
                "menuItemId": "d0000000-0000-0000-0000-000000000469",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000595",
                    "groupId": "e0000000-0000-0000-0000-000000000282",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000596",
                    "groupId": "e0000000-0000-0000-0000-000000000282",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000597",
                    "groupId": "e0000000-0000-0000-0000-000000000282",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000470",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000002",
            "name": "Pachi Pulusu (Raw Tamarind Stew)",
            "description": "Ancient Telangana heritage dish of unboiled raw tamarind extract seasoned with charred green chillies, onions, and jaggery.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000283",
                "menuItemId": "d0000000-0000-0000-0000-000000000470",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000598",
                    "groupId": "e0000000-0000-0000-0000-000000000283",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000599",
                    "groupId": "e0000000-0000-0000-0000-000000000283",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000600",
                    "groupId": "e0000000-0000-0000-0000-000000000283",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000471",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000002",
            "name": "Mutton Dalcha",
            "description": "Hyderabadi-Telangana comfort stew of slow-cooked mutton pieces and tender bottle gourd in a spiced chana dal gravy.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000284",
                "menuItemId": "d0000000-0000-0000-0000-000000000471",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000601",
                    "groupId": "e0000000-0000-0000-0000-000000000284",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000602",
                    "groupId": "e0000000-0000-0000-0000-000000000284",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000603",
                    "groupId": "e0000000-0000-0000-0000-000000000284",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000472",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000002",
            "name": "Tomato Kura with Desi Ghee",
            "description": "Country tomatoes stewed with mustard seeds, curry leaves, and a generous splash of pure desi cow ghee.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
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
            "id": "d0000000-0000-0000-0000-000000000473",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000003",
            "name": "Telangana Bagara Rice Pot (Serves 1-2)",
            "description": "Fragrant basmati rice tempered with whole spices, bay leaves, mint, coriander, and caramelized shallots.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000474",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000003",
            "name": "Jowar Roti (2 pcs)",
            "description": "Hand-patted unleavened sorghum flatbread baked on iron griddle, naturally gluten-free and packed with rural nutrition.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000475",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000003",
            "name": "Saddi Annam (Traditional Fermented Curd Rice Bowl)",
            "description": "Heritage overnight fermented rice mixed with rich fresh curd, mustard tadka, pomegranate seeds, and fresh green chillies.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0032-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000032",
        "name": "Desserts & Chilled Refreshers",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000476",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000004",
            "name": "Bellam Paramannam (Jaggery Payasam)",
            "description": "Traditional sweet pudding made with rice, organic sugarcane jaggery, whole milk, cardamom, and ghee-roasted cashews.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000477",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000004",
            "name": "Sunnundalu with Ghee (2 pcs)",
            "description": "Classic roasted urad dal sweet laddoos rolled in golden cow ghee and powdered sugar.",
            "price": 130,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000285",
                "menuItemId": "d0000000-0000-0000-0000-000000000477",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000604",
                    "groupId": "e0000000-0000-0000-0000-000000000285",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000605",
                    "groupId": "e0000000-0000-0000-0000-000000000285",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000606",
                    "groupId": "e0000000-0000-0000-0000-000000000285",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000478",
            "restaurantId": "b0000000-0000-0000-0000-000000000032",
            "categoryId": "ca000000-0000-0000-0032-000000000004",
            "name": "Allam Majjiga (Ginger Spiced Buttermilk)",
            "description": "Churned cooling country buttermilk flavored with crushed ginger, green chillies, curry leaves, and rock salt.",
            "price": 60,
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
    "id": "b0000000-0000-0000-0000-000000000033",
    "name": "Platform 65",
    "slug": "platform-65-kondapur",
    "tagline": "Train-themed multi-cuisine dining with Potlam Biryani & Andhra delicacies",
    "description": "Hyderabad famous train-themed multi-cuisine restaurant where miniature toy trains deliver mouth-watering Andhra specials, potlam biryanis, and tandoori kebabs to your table.",
    "coverImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=200&q=80",
    "rating": 4.2,
    "ratingCount": 16200,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 250,
    "deliveryFee": 45,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "3rd Floor, Above Brand Factory, Botanical Garden Rd, Kondapur",
    "city": "Hyderabad",
    "latitude": 17.4582,
    "longitude": 78.3621,
    "cuisines": [
      {
        "id": "c0000006-0000-0000-0000-000000000006",
        "name": "Andhra & Rayalaseema",
        "slug": "andhra-rayalaseema",
        "icon": "Flame"
      },
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
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
            "id": "d0000000-0000-0000-0000-000000000479",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000001",
            "name": "Potlam Biryani (Omelette Wrapped Mutton Biryani)",
            "description": "Spiced aromatic mutton keema and juicy boneless mutton biryani wrapped inside a thin herb-seasoned egg omelette.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000286",
                "menuItemId": "d0000000-0000-0000-0000-000000000479",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000607",
                    "groupId": "e0000000-0000-0000-0000-000000000286",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000608",
                    "groupId": "e0000000-0000-0000-0000-000000000286",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 315,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000287",
                "menuItemId": "d0000000-0000-0000-0000-000000000479",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000609",
                    "groupId": "e0000000-0000-0000-0000-000000000287",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000610",
                    "groupId": "e0000000-0000-0000-0000-000000000287",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000480",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000001",
            "name": "Kaju Paneer Dum Biryani",
            "description": "Fragrant basmati rice cooked on dum with golden roasted cashews and marinated malai paneer cubes.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000288",
                "menuItemId": "d0000000-0000-0000-0000-000000000480",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000611",
                    "groupId": "e0000000-0000-0000-0000-000000000288",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000612",
                    "groupId": "e0000000-0000-0000-0000-000000000288",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 240,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000289",
                "menuItemId": "d0000000-0000-0000-0000-000000000480",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000613",
                    "groupId": "e0000000-0000-0000-0000-000000000289",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000614",
                    "groupId": "e0000000-0000-0000-0000-000000000289",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000481",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000001",
            "name": "Allam Kodi Pulao (Ginger Chicken)",
            "description": "Long-grain pulao infused with fragrant ginger paste, southern herbs, and spiced chicken bone-in pieces.",
            "price": 360,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000290",
                "menuItemId": "d0000000-0000-0000-0000-000000000481",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000615",
                    "groupId": "e0000000-0000-0000-0000-000000000290",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000616",
                    "groupId": "e0000000-0000-0000-0000-000000000290",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 270,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000291",
                "menuItemId": "d0000000-0000-0000-0000-000000000481",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000617",
                    "groupId": "e0000000-0000-0000-0000-000000000291",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000618",
                    "groupId": "e0000000-0000-0000-0000-000000000291",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000482",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000001",
            "name": "Avakaya Chicken Biryani",
            "description": "Tangy and spicy Andhra mango pickle (avakaya) folded into hot spiced chicken dum biryani.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000292",
                "menuItemId": "d0000000-0000-0000-0000-000000000482",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000619",
                    "groupId": "e0000000-0000-0000-0000-000000000292",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000620",
                    "groupId": "e0000000-0000-0000-0000-000000000292",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 285,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000293",
                "menuItemId": "d0000000-0000-0000-0000-000000000482",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000621",
                    "groupId": "e0000000-0000-0000-0000-000000000293",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000622",
                    "groupId": "e0000000-0000-0000-0000-000000000293",
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
            "id": "d0000000-0000-0000-0000-000000000483",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000002",
            "name": "Chitti Mutyalu Prawn Fry",
            "description": "Crisp tiny fresh prawns tossed with crushed garlic, green chillies, and aromatic curry leaf powder.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000294",
                "menuItemId": "d0000000-0000-0000-0000-000000000483",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000623",
                    "groupId": "e0000000-0000-0000-0000-000000000294",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000624",
                    "groupId": "e0000000-0000-0000-0000-000000000294",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000295",
                "menuItemId": "d0000000-0000-0000-0000-000000000483",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000625",
                    "groupId": "e0000000-0000-0000-0000-000000000295",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000626",
                    "groupId": "e0000000-0000-0000-0000-000000000295",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000484",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000002",
            "name": "Dragon Chicken Indo-Chinese",
            "description": "Shredded chicken strips crisp-fried and coated in sweet and spicy chilli-cashew sauce.",
            "price": 320,
            "imageUrl": "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000485",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000002",
            "name": "Crispy Corn Pepper Fry",
            "description": "Sweet corn kernels flash-fried till crunchy and tossed with crushed black pepper, spring onions, and chaat masala.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000296",
                "menuItemId": "d0000000-0000-0000-0000-000000000485",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000627",
                    "groupId": "e0000000-0000-0000-0000-000000000296",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000628",
                    "groupId": "e0000000-0000-0000-0000-000000000296",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000297",
                "menuItemId": "d0000000-0000-0000-0000-000000000485",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000629",
                    "groupId": "e0000000-0000-0000-0000-000000000297",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000630",
                    "groupId": "e0000000-0000-0000-0000-000000000297",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000486",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000002",
            "name": "Mutton Sukka Fry",
            "description": "Baby mutton pieces dry-roasted with coastal spices, coconut slivers, and fiery dry red chillies.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000298",
                "menuItemId": "d0000000-0000-0000-0000-000000000486",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000631",
                    "groupId": "e0000000-0000-0000-0000-000000000298",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000632",
                    "groupId": "e0000000-0000-0000-0000-000000000298",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000299",
                "menuItemId": "d0000000-0000-0000-0000-000000000486",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000633",
                    "groupId": "e0000000-0000-0000-0000-000000000299",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000634",
                    "groupId": "e0000000-0000-0000-0000-000000000299",
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
            "id": "d0000000-0000-0000-0000-000000000487",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000003",
            "name": "Gongura Mutton Curry",
            "description": "Tender mutton cuts simmered with sour roselle (gongura) leaves, red chillies, and rustic country spices.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000300",
                "menuItemId": "d0000000-0000-0000-0000-000000000487",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000635",
                    "groupId": "e0000000-0000-0000-0000-000000000300",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000636",
                    "groupId": "e0000000-0000-0000-0000-000000000300",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000637",
                    "groupId": "e0000000-0000-0000-0000-000000000300",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000488",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000003",
            "name": "Butter Chicken Masala",
            "description": "Tender chicken pieces cooked in a creamy mild tomato butter gravy, perfect with tandoori naans.",
            "price": 330,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000489",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000003",
            "name": "Butter Naan (2 pcs)",
            "description": "Soft tandoor-baked leavened bread brushed with butter.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
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
            "id": "d0000000-0000-0000-0000-000000000490",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000004",
            "name": "Sizzling Brownie with Vanilla Ice Cream",
            "description": "Hot walnut brownie served with vanilla ice cream and sizzling molten chocolate sauce on cast iron platter.",
            "price": 195,
            "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000491",
            "restaurantId": "b0000000-0000-0000-0000-000000000033",
            "categoryId": "ca000000-0000-0000-0033-000000000004",
            "name": "Gulab Jamun (2 pcs)",
            "description": "Warm soft milk dumplings steeped in sweet cardamom sugar syrup.",
            "price": 85,
            "imageUrl": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
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
    "slug": "siddique-kabab-centre-kondapur",
    "tagline": "Legendary DLF IT corridor shawarma, charcoal tandoori grills & roomali rolls",
    "description": "Iconic street food powerhouse along the DLF Cybercity corridor, legendary among techies for massive chicken malai shawarmas, smoky tandoori skewers, and fresh roomali rolls.",
    "coverImage": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80",
    "rating": 4.2,
    "ratingCount": 24600,
    "priceTier": "₹",
    "deliveryTimeEstimateMin": 20,
    "deliveryTimeEstimateMax": 35,
    "minimumOrderAmount": 150,
    "deliveryFee": 29,
    "isFeatured": false,
    "isOpen": true,
    "addressLine": "Near DLF Gate 2, Gachibowli - Miyapur Rd, Whitefields, Kondapur",
    "city": "Hyderabad",
    "latitude": 17.4498,
    "longitude": 78.3639,
    "cuisines": [
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      },
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
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
            "id": "d0000000-0000-0000-0000-000000000492",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000001",
            "name": "Special Chicken Malai Shawarma (Jumbo)",
            "description": "Generous portion of juicy shredded grilled chicken stuffed with creamy garlic mayo, fries, and pickled cabbage in a toasted roomali wrap.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000301",
                "menuItemId": "d0000000-0000-0000-0000-000000000492",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000638",
                    "groupId": "e0000000-0000-0000-0000-000000000301",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000639",
                    "groupId": "e0000000-0000-0000-0000-000000000301",
                    "name": "Extra Loaded Chicken & Cheese",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000493",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000001",
            "name": "Rumali Chicken Tikka Roll",
            "description": "Charcoal-grilled spiced chicken tikka pieces wrapped in a fresh hot roomali roti with sliced onions and mint chutney.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000302",
                "menuItemId": "d0000000-0000-0000-0000-000000000493",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000640",
                    "groupId": "e0000000-0000-0000-0000-000000000302",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000641",
                    "groupId": "e0000000-0000-0000-0000-000000000302",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000303",
                "menuItemId": "d0000000-0000-0000-0000-000000000493",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000642",
                    "groupId": "e0000000-0000-0000-0000-000000000303",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000643",
                    "groupId": "e0000000-0000-0000-0000-000000000303",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000494",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000001",
            "name": "Paneer Tikka Rumali Roll",
            "description": "Spiced tandoori paneer cubes wrapped in roomali roti with crunchy peppers, mint mayo, and chaat masala.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000304",
                "menuItemId": "d0000000-0000-0000-0000-000000000494",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000644",
                    "groupId": "e0000000-0000-0000-0000-000000000304",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000645",
                    "groupId": "e0000000-0000-0000-0000-000000000304",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000305",
                "menuItemId": "d0000000-0000-0000-0000-000000000494",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000646",
                    "groupId": "e0000000-0000-0000-0000-000000000305",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000647",
                    "groupId": "e0000000-0000-0000-0000-000000000305",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000495",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000001",
            "name": "Open Shawarma Plate with Pita & Salad",
            "description": "Double portion of carved chicken shawarma meat served on a platter with two pita breads, pickled veggies, and garlic toum.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000306",
                "menuItemId": "d0000000-0000-0000-0000-000000000495",
                "name": "Roll Preparation",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000648",
                    "groupId": "e0000000-0000-0000-0000-000000000306",
                    "name": "Standard Rumali Roll",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000649",
                    "groupId": "e0000000-0000-0000-0000-000000000306",
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
            "id": "d0000000-0000-0000-0000-000000000496",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000002",
            "name": "Tandoori Chicken (Half)",
            "description": "Two bone-in pieces of chicken steeped in curd and Kashmiri chilli marinade, roasted crisp over red-hot charcoal.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000497",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000002",
            "name": "Chicken Malai Tikka (6 pcs)",
            "description": "Creamy boneless chicken tikka skewers flavoured with green cardamom and white pepper, roasted till succulent.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000307",
                "menuItemId": "d0000000-0000-0000-0000-000000000497",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000650",
                    "groupId": "e0000000-0000-0000-0000-000000000307",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000651",
                    "groupId": "e0000000-0000-0000-0000-000000000307",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000308",
                "menuItemId": "d0000000-0000-0000-0000-000000000497",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000652",
                    "groupId": "e0000000-0000-0000-0000-000000000308",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000653",
                    "groupId": "e0000000-0000-0000-0000-000000000308",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000498",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000002",
            "name": "Chicken 65 DLF Street Style",
            "description": "Crispy fried boneless chicken bites tossed with yoghurt, red chilli paste, mustard seeds, and fried curry leaves.",
            "price": 190,
            "imageUrl": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000499",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000002",
            "name": "Tandoori Chicken Wings (6 pcs)",
            "description": "Six chicken wings marinated in tandoori spices and roasted crisp with lemon and chaat masala.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
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
            "id": "d0000000-0000-0000-0000-000000000500",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000003",
            "name": "Roomali Roti (2 pcs)",
            "description": "Ultra thin, soft handkerchief bread hand-stretched and cooked over inverted tawa.",
            "price": 24,
            "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000501",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000003",
            "name": "Extra Garlic Toum Mayo Dip",
            "description": "Extra tub of Siddique famous creamy garlic toum mayonnaise dip.",
            "price": 25,
            "imageUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
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
            "id": "d0000000-0000-0000-0000-000000000502",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000004",
            "name": "Sweet Lassi Kulhad",
            "description": "Traditional thick churned sweet curd lassi served chilled with a hint of cardamom.",
            "price": 60,
            "imageUrl": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000503",
            "restaurantId": "b0000000-0000-0000-0000-000000000034",
            "categoryId": "ca000000-0000-0000-0034-000000000004",
            "name": "Mint Masala Soda",
            "description": "Chilled club soda spiked with lemon juice, mint syrup, black salt, and roasted cumin.",
            "price": 45,
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
    "id": "b0000000-0000-0000-0000-000000000035",
    "name": "Broadway - The Brewery",
    "slug": "broadway-the-brewery-jubilee-hills",
    "tagline": "Premier Jubilee Hills microbrewery, wood-fired sourdough pizzas & gastropub dining",
    "description": "Hyderabad premier microbrewery and gastropub on Road 46, celebrated for colossal wood-fired sourdough pizzas, artisanal bar bites, gourmet meats, and lively ambient dining.",
    "coverImage": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80",
    "rating": 4.5,
    "ratingCount": 26800,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 400,
    "deliveryFee": 49,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot No. 488, Road No. 46, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4331,
    "longitude": 78.4037,
    "cuisines": [
      {
        "id": "c0000014-0000-0000-0000-000000000014",
        "name": "Craft Brewery & Gastropub",
        "slug": "craft-brewery",
        "icon": "Beer"
      },
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
        "id": "ca000000-0000-0000-0035-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000035",
        "name": "Gourmet Pub Grub & Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000504",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000001",
            "name": "Broadway Ghee Roast Chicken Tacos (3 pcs)",
            "description": "Mangalorean-style Kundapur ghee roast chicken stuffed in soft corn tacos with pickled shallots, curry leaf aioli, and micro coriander.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000505",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000001",
            "name": "Loaded Pulled Pork Nachos",
            "description": "Crisp tortilla chips baked with slow-braised BBQ pulled pork, smoked cheddar sauce, sour cream, and jalapeños.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000506",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000001",
            "name": "Truffle Parmesan Hand-Cut Fries",
            "description": "Crisp hand-cut potato wedges tossed with white truffle oil, sea salt, and grated 24-month aged parmesan cheese.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000507",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000001",
            "name": "Crispy Buffalo Wings (6 pcs)",
            "description": "Juicy chicken wings crisp-fried and tossed in tangy Louisiana hot sauce, served with blue cheese ranch dip.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
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
            "id": "d0000000-0000-0000-0000-000000000508",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000002",
            "name": "Broadway Pepperoni & Hot Honey Pizza",
            "description": "Crushed San Marzano tomatoes, fresh mozzarella, spicy pork pepperoni, and a drizzle of chilli-infused organic hot honey.",
            "price": 680,
            "imageUrl": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000309",
                "menuItemId": "d0000000-0000-0000-0000-000000000508",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000654",
                    "groupId": "e0000000-0000-0000-0000-000000000309",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000655",
                    "groupId": "e0000000-0000-0000-0000-000000000309",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000310",
                "menuItemId": "d0000000-0000-0000-0000-000000000508",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000656",
                    "groupId": "e0000000-0000-0000-0000-000000000310",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000657",
                    "groupId": "e0000000-0000-0000-0000-000000000310",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000509",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000002",
            "name": "Smoked Chicken & Jalapeno Pizza",
            "description": "Hickory smoked chicken cubes, sliced jalapeños, charred sweet corn, and mozzarella on a crispy sourdough crust.",
            "price": 620,
            "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000311",
                "menuItemId": "d0000000-0000-0000-0000-000000000509",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000658",
                    "groupId": "e0000000-0000-0000-0000-000000000311",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000659",
                    "groupId": "e0000000-0000-0000-0000-000000000311",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000312",
                "menuItemId": "d0000000-0000-0000-0000-000000000509",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000660",
                    "groupId": "e0000000-0000-0000-0000-000000000312",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000661",
                    "groupId": "e0000000-0000-0000-0000-000000000312",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000510",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000002",
            "name": "Quattro Formaggi (Four Cheese)",
            "description": "White base pizza topped with aged mozzarella, gorgonzola, smoked scamorza, and parmesan reggiano with rosemary oil.",
            "price": 590,
            "imageUrl": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000511",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000002",
            "name": "Margherita Burrata D.O.P.",
            "description": "Neapolitan sourdough crust with roasted tomato sugo, whole fresh creamy artisanal burrata ball, and sweet basil oil.",
            "price": 560,
            "imageUrl": "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
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
            "id": "d0000000-0000-0000-0000-000000000512",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000003",
            "name": "Slow-Cooked BBQ Pork Ribs",
            "description": "Baby back pork ribs braised tender for 6 hours, finished on the open grill with house bourbon barbecue glaze, served with slaw.",
            "price": 720,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 28,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000513",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000003",
            "name": "Grilled Tenderloin Steak with Pepper Jus",
            "description": "Prime cut tenderloin grilled to your liking, served with buttered garlic mash, roasted asparagus, and Madagascar peppercorn jus.",
            "price": 690,
            "imageUrl": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000514",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000003",
            "name": "Wild Mushroom Cream Tagliatelle",
            "description": "Handmade fresh egg tagliatelle pasta ribbons tossed with button and porcini mushrooms in a white wine cream sauce with parmesan.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1621996346565-e3d5d6281728?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
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
            "id": "d0000000-0000-0000-0000-000000000515",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000004",
            "name": "Broadway Warm Churros with Belgian Dip",
            "description": "Four freshly fried cinnamon churro batons served with dark Belgian chocolate and warm salted caramel dips.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000516",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000004",
            "name": "Molten Chocolate Lava Cake with Ice Cream",
            "description": "Warm chocolate cake with a molten liquid Valrhona chocolate centre, paired with Madagascar vanilla ice cream.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000517",
            "restaurantId": "b0000000-0000-0000-0000-000000000035",
            "categoryId": "ca000000-0000-0000-0035-000000000004",
            "name": "House Ginger Beer Craft Mocktail",
            "description": "In-house brewed non-alcoholic ginger beer infused with lime juice, fresh mint, and cracked black pepper.",
            "price": 185,
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
    "id": "b0000000-0000-0000-0000-000000000036",
    "name": "Burma Burma",
    "slug": "burma-burma-sattva-knowledge-city",
    "tagline": "Authentic 100% vegetarian Burmese gourmet dining, Khow Suey & artisan tea room",
    "description": "Acclaimed 100% vegetarian Burmese gourmet restaurant and artisan tea room at Sattva Knowledge City, renowned for fragrant Khow Suey, traditional Laphet Thoke tea leaf salads, steamed bao, and exotic Asian broths.",
    "coverImage": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=200&q=80",
    "rating": 4.6,
    "ratingCount": 19800,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 30,
    "deliveryTimeEstimateMax": 45,
    "minimumOrderAmount": 350,
    "deliveryFee": 49,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Unit 6, Ground Floor, Tower 10, Sattva Knowledge City, HITEC City, Madhapur",
    "city": "Hyderabad",
    "latitude": 17.4378,
    "longitude": 78.3792,
    "cuisines": [
      {
        "id": "c0000010-0000-0000-0000-000000000010",
        "name": "Pan-Asian & Dim Sum",
        "slug": "pan-asian",
        "icon": "Utensils"
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
        "id": "ca000000-0000-0000-0036-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000036",
        "name": "Burmese Salads & Starters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000518",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000001",
            "name": "Lotus Stem Crisps with Paprika & Lime",
            "description": "Thinly sliced lotus root crisped to perfection and dusted with smoked paprika, kaffir lime zest, and sea salt.",
            "price": 380,
            "imageUrl": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000519",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000001",
            "name": "Tea Leaf Salad (Laphet Thoke) with Fermented Tea Leaves",
            "description": "Famous national dish of Burma with fermented Shan state tea leaves tossed with toasted crunchy split peas, roasted garlic chips, tomatoes, and sesame.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000520",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000001",
            "name": "Crunchy Tofu & Steamed Bao (2 pcs)",
            "description": "Fluffy handmade steamed buns stuffed with crispy spiced Shan tofu, pickled cucumber, and fiery chilli-garlic glaze.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000521",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000001",
            "name": "Raw Mango Salad with Crushed Peanuts & Crispy Onions",
            "description": "Shredded fresh green mango tossed with roasted peanuts, red onions, coriander, and light tamarind dressing.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0036-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000036",
        "name": "Signature Khow Suey & Noodles",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000522",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000002",
            "name": "Burma Burma Oh No Khow Suey (Signature Coconut Curry Noodles)",
            "description": "Aromatic coconut milk broth infused with lemongrass and turmeric, poured over tender noodles and served with 8 traditional accompaniments and fried garlic.",
            "price": 540,
            "imageUrl": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000313",
                "menuItemId": "d0000000-0000-0000-0000-000000000522",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000662",
                    "groupId": "e0000000-0000-0000-0000-000000000313",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000663",
                    "groupId": "e0000000-0000-0000-0000-000000000313",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000664",
                    "groupId": "e0000000-0000-0000-0000-000000000313",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000523",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000002",
            "name": "Pan-Fried Rice Dumplings with Spicy Soy Dip",
            "description": "Crisp bottom rice flour dumplings filled with seasoned water chestnuts, corn, and greens, accompanied by ginger-soy dipping sauce.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000524",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000002",
            "name": "Wa Style Dry Noodles with Roasted Garlic",
            "description": "Handcrafted flat noodles tossed with dark soy, crushed shallots, crispy garlic chips, and bok choy.",
            "price": 440,
            "imageUrl": "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0036-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000036",
        "name": "Wholesome Burmese Mains",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000525",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000003",
            "name": "Burmese Creamy Corn Poritha with Warm Coconut Broth",
            "description": "Creamy sweet corn preparation with kaffir lime and turmeric, accompanied by two flaky Burmese layered parathas.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000526",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000003",
            "name": "Spicy Tofu & Mock Meat Curry with Coconut Rice",
            "description": "Tofu and plant protein cooked in a rich Shan red curry with tomatoes and shallots, served with fragrant coconut jasmine rice.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000314",
                "menuItemId": "d0000000-0000-0000-0000-000000000526",
                "name": "Spice Level",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000665",
                    "groupId": "e0000000-0000-0000-0000-000000000314",
                    "name": "Mild & Creamy",
                    "additionalPrice": 0,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000666",
                    "groupId": "e0000000-0000-0000-0000-000000000314",
                    "name": "Royal Medium Spice",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000667",
                    "groupId": "e0000000-0000-0000-0000-000000000314",
                    "name": "Andhra Teja Hot",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000527",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000003",
            "name": "Edamame & Truffle Fried Rice",
            "description": "Fragrant jasmine rice wok-tossed with Japanese edamame beans, spring vegetables, and aromatic white truffle oil.",
            "price": 480,
            "imageUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0036-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000036",
        "name": "Artisan Desserts & Teas",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000528",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000004",
            "name": "Rangoon Baked Cheesecake",
            "description": "Velvety baked vanilla cheesecake resting on a buttery biscuit crumb, garnished with raspberry compote.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000529",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000004",
            "name": "Tagu Pyian (Coconut Sago Pudding with Palm Jaggery)",
            "description": "Layers of delicate coconut cream and pandan-infused sago pearls sweetened with Burmese dark palm jaggery syrup.",
            "price": 290,
            "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000530",
            "restaurantId": "b0000000-0000-0000-0000-000000000036",
            "categoryId": "ca000000-0000-0000-0036-000000000004",
            "name": "Saffron & Lavender Artisan Iced Tea",
            "description": "Delicate loose-leaf white tea cold-infused with French lavender buds, royal saffron strands, and wild honey.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000037",
    "name": "Grand Hotel",
    "slug": "grand-hotel-abids",
    "tagline": "Historic Abids heritage culinary institution since 1935, Mutton Biryani & Irani Chai",
    "description": "Iconic heritage culinary institution founded in 1935 in Abids, legendary across generations for authentic wood-fired Hyderabadi mutton dum biryani, morning nihari, bheja fry, and steaming Irani chai.",
    "coverImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=200&q=80",
    "rating": 4.2,
    "ratingCount": 28400,
    "priceTier": "₹₹",
    "deliveryTimeEstimateMin": 25,
    "deliveryTimeEstimateMax": 35,
    "minimumOrderAmount": 200,
    "deliveryFee": 29,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "4-1-395, Opposite Taj Mahal Hotel, Bank Street, Abids",
    "city": "Hyderabad",
    "latitude": 17.3918,
    "longitude": 78.4746,
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
        "id": "ca000000-0000-0000-0037-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000037",
        "name": "Heritage Dum Biryani",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000531",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000001",
            "name": "Grand Special Mutton Dum Biryani (Serves 1-2)",
            "description": "Legendary Abids mutton biryani with two tender lamb pieces and fragrant aged basmati rice cooked on charcoal dum, served with mirchi ka salan and dahi raita.",
            "price": 310,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000315",
                "menuItemId": "d0000000-0000-0000-0000-000000000531",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000668",
                    "groupId": "e0000000-0000-0000-0000-000000000315",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000669",
                    "groupId": "e0000000-0000-0000-0000-000000000315",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 233,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000316",
                "menuItemId": "d0000000-0000-0000-0000-000000000531",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000670",
                    "groupId": "e0000000-0000-0000-0000-000000000316",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000671",
                    "groupId": "e0000000-0000-0000-0000-000000000316",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000532",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000001",
            "name": "Grand Special Chicken Dum Biryani (Serves 1)",
            "description": "Fragrant basmati rice slow cooked on dum with marinated chicken cuts, saffron milk, and caramelized onions.",
            "price": 230,
            "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000317",
                "menuItemId": "d0000000-0000-0000-0000-000000000532",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000672",
                    "groupId": "e0000000-0000-0000-0000-000000000317",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000673",
                    "groupId": "e0000000-0000-0000-0000-000000000317",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 173,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000318",
                "menuItemId": "d0000000-0000-0000-0000-000000000532",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000674",
                    "groupId": "e0000000-0000-0000-0000-000000000318",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000675",
                    "groupId": "e0000000-0000-0000-0000-000000000318",
                    "name": "Thick Spiced Dahi Raita",
                    "additionalPrice": 40,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000533",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000001",
            "name": "Biryani Single (Chicken - Serves 1)",
            "description": "Economical single serving of authentic chicken dum biryani with one piece of chicken, boiled egg, salan, and raita.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000319",
                "menuItemId": "d0000000-0000-0000-0000-000000000533",
                "name": "Portion Size",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000676",
                    "groupId": "e0000000-0000-0000-0000-000000000319",
                    "name": "Regular Portion (Serves 1)",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000677",
                    "groupId": "e0000000-0000-0000-0000-000000000319",
                    "name": "Jumbo Handi (Serves 2)",
                    "additionalPrice": 113,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000320",
                "menuItemId": "d0000000-0000-0000-0000-000000000533",
                "name": "Accompaniment",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000678",
                    "groupId": "e0000000-0000-0000-0000-000000000320",
                    "name": "Extra Mirchi Ka Salan Bowl",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000679",
                    "groupId": "e0000000-0000-0000-0000-000000000320",
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
        "id": "ca000000-0000-0000-0037-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000037",
        "name": "Nizami Curries & Kheema",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000534",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000002",
            "name": "Mutton Kheema Masala",
            "description": "Minced lamb cooked slowly with chopped onions, green peas, whole cloves, and ground garam masala.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000535",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000002",
            "name": "Mutton Bheja Fry (Brain Masala)",
            "description": "Fresh sheep brain sautéed on high flame tawa with browned onions, ginger-garlic paste, and crushed green chillies.",
            "price": 260,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000321",
                "menuItemId": "d0000000-0000-0000-0000-000000000535",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000680",
                    "groupId": "e0000000-0000-0000-0000-000000000321",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000681",
                    "groupId": "e0000000-0000-0000-0000-000000000321",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000322",
                "menuItemId": "d0000000-0000-0000-0000-000000000535",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000682",
                    "groupId": "e0000000-0000-0000-0000-000000000322",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000683",
                    "groupId": "e0000000-0000-0000-0000-000000000322",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000536",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000002",
            "name": "Butter Chicken Handi",
            "description": "Boneless chicken chunks cooked in a rich, velvety tomato and cashew butter gravy.",
            "price": 250,
            "imageUrl": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000537",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000002",
            "name": "Tandoori Roti (2 pcs)",
            "description": "Whole wheat flatbread baked crisp in clay oven.",
            "price": 30,
            "imageUrl": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0037-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000037",
        "name": "Tandoori & Kebabs",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000538",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000003",
            "name": "Chicken Tikka Kebab (6 pcs)",
            "description": "Boneless chicken cubes marinated in hung curd, ginger, garlic, and red chillies, charcoal grilled.",
            "price": 240,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000323",
                "menuItemId": "d0000000-0000-0000-0000-000000000538",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000684",
                    "groupId": "e0000000-0000-0000-0000-000000000323",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000685",
                    "groupId": "e0000000-0000-0000-0000-000000000323",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000324",
                "menuItemId": "d0000000-0000-0000-0000-000000000538",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000686",
                    "groupId": "e0000000-0000-0000-0000-000000000324",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000687",
                    "groupId": "e0000000-0000-0000-0000-000000000324",
                    "name": "Spicy Mint Pachadi Chutney",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000539",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000003",
            "name": "Tandoori Chicken (Half)",
            "description": "Two quarters of fresh chicken marinated in tandoori spices and roasted over glowing coals.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000540",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000003",
            "name": "Shami Kebab (4 pcs)",
            "description": "Finely pounded mutton and chana dal patties shallow-fried on a griddle with aromatic herbs.",
            "price": 180,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000325",
                "menuItemId": "d0000000-0000-0000-0000-000000000540",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000688",
                    "groupId": "e0000000-0000-0000-0000-000000000325",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000689",
                    "groupId": "e0000000-0000-0000-0000-000000000325",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000326",
                "menuItemId": "d0000000-0000-0000-0000-000000000540",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000690",
                    "groupId": "e0000000-0000-0000-0000-000000000326",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000691",
                    "groupId": "e0000000-0000-0000-0000-000000000326",
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
        "id": "ca000000-0000-0000-0037-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000037",
        "name": "Irani Chai & Desserts",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000541",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000004",
            "name": "Grand Irani Chai (Cup)",
            "description": "Legendary slow-boiled strong tea decoction blended with reduced sweet creamy milk in traditional ceramic cup.",
            "price": 30,
            "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000542",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000004",
            "name": "Osmania Biscuit Box (4 pcs)",
            "description": "Crisp, sweet and slightly salty heritage shortbread biscuits baked to pair with hot Irani chai.",
            "price": 40,
            "imageUrl": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 2,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000543",
            "restaurantId": "b0000000-0000-0000-0000-000000000037",
            "categoryId": "ca000000-0000-0000-0037-000000000004",
            "name": "Shahi Tukda (2 pcs)",
            "description": "Crisp fried bread triangles steeped in saffron sugar syrup and covered with thick rabdi, almonds, and pistachios.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
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
    "id": "b0000000-0000-0000-0000-000000000038",
    "name": "Ram Ki Bandi",
    "slug": "ram-ki-bandi-nampally",
    "tagline": "World-famous midnight butter cheese dosas, ghee karam idlis & tiffin legend",
    "description": "Hyderabad world-famous midnight tiffin pioneer at Mozamjahi Market, legendary nationwide for decadent butter cheese dosas, ghee karam idlis, and crisp tawa specialties.",
    "coverImage": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=200&q=80",
    "rating": 4.3,
    "ratingCount": 34200,
    "priceTier": "₹",
    "deliveryTimeEstimateMin": 20,
    "deliveryTimeEstimateMax": 30,
    "minimumOrderAmount": 150,
    "deliveryFee": 29,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Opposite Karachi Bakery, Mozamjahi Market, Nampally",
    "city": "Hyderabad",
    "latitude": 17.3824,
    "longitude": 78.4735,
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
        "id": "ca000000-0000-0000-0038-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000038",
        "name": "Signature Butter & Cheese Dosas",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000544",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000001",
            "name": "Ram Ki Special Butter Cheese Dosa",
            "description": "Legendary crisp golden dosa smothered with a generous slab of Amul butter, fiery podi chutney, and a mountain of shredded processed cheese.",
            "price": 140,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000327",
                "menuItemId": "d0000000-0000-0000-0000-000000000544",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000692",
                    "groupId": "e0000000-0000-0000-0000-000000000327",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000693",
                    "groupId": "e0000000-0000-0000-0000-000000000327",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000545",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000001",
            "name": "Karam Butter Dosa",
            "description": "Thin crisp crepe smeared with spicy red chilli-garlic paste and melted butter, served with allam and coconut chutneys.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000328",
                "menuItemId": "d0000000-0000-0000-0000-000000000545",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000694",
                    "groupId": "e0000000-0000-0000-0000-000000000328",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000695",
                    "groupId": "e0000000-0000-0000-0000-000000000328",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000546",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000001",
            "name": "Paneer Butter Masala Dosa",
            "description": "Crisp dosa stuffed with spiced grated paneer bhurji, diced onions, coriander, and golden Amul butter.",
            "price": 150,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 12,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000329",
                "menuItemId": "d0000000-0000-0000-0000-000000000546",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000696",
                    "groupId": "e0000000-0000-0000-0000-000000000329",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000697",
                    "groupId": "e0000000-0000-0000-0000-000000000329",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000547",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000001",
            "name": "Pizza Dosa with Cheese & Capsicum",
            "description": "Street-style fusion dosa topped with marinara sauce, chopped capsicum, sweet corn, onions, and melted mozzarella.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000330",
                "menuItemId": "d0000000-0000-0000-0000-000000000547",
                "name": "Crust Style",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000698",
                    "groupId": "e0000000-0000-0000-0000-000000000330",
                    "name": "Artisanal 72hr Sourdough Crust",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000699",
                    "groupId": "e0000000-0000-0000-0000-000000000330",
                    "name": "Garlic Butter Crust Edge",
                    "additionalPrice": 60,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000331",
                "menuItemId": "d0000000-0000-0000-0000-000000000547",
                "name": "Cheese & Topping Upgrade",
                "minSelect": 0,
                "maxSelect": 2,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000700",
                    "groupId": "e0000000-0000-0000-0000-000000000331",
                    "name": "Extra Buffalo Mozzarella",
                    "additionalPrice": 90,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000701",
                    "groupId": "e0000000-0000-0000-0000-000000000331",
                    "name": "Aged Shaved Parmesan",
                    "additionalPrice": 80,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000548",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000001",
            "name": "Plain Ghee Roast Dosa",
            "description": "Classic paper-thin crispy dosa roasted in pure desi cow ghee until golden amber.",
            "price": 80,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000332",
                "menuItemId": "d0000000-0000-0000-0000-000000000548",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000702",
                    "groupId": "e0000000-0000-0000-0000-000000000332",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000703",
                    "groupId": "e0000000-0000-0000-0000-000000000332",
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
        "id": "ca000000-0000-0000-0038-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000038",
        "name": "Tiffin Delicacies & Idlis",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000549",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000002",
            "name": "Ghee Karam Idli (4 pcs)",
            "description": "Four steaming hot button idlis tossed in pure aromatic desi cow ghee and gun powder karam podi.",
            "price": 90,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000333",
                "menuItemId": "d0000000-0000-0000-0000-000000000549",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000704",
                    "groupId": "e0000000-0000-0000-0000-000000000333",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000705",
                    "groupId": "e0000000-0000-0000-0000-000000000333",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000550",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000002",
            "name": "Butter Tawa Idli with Spices",
            "description": "Idlis sliced and pan-tossed on hot iron tawa with Amul butter, sliced tomatoes, onions, and pav bhaji spices.",
            "price": 110,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000334",
                "menuItemId": "d0000000-0000-0000-0000-000000000550",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000706",
                    "groupId": "e0000000-0000-0000-0000-000000000334",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000707",
                    "groupId": "e0000000-0000-0000-0000-000000000334",
                    "name": "Extra Guntur Karampodi Sprinkling",
                    "additionalPrice": 30,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000551",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000002",
            "name": "Cheese Button Idli Plate",
            "description": "Bite-sized mini idlis drowned in melted butter and coated with a thick blanket of shredded processed cheese.",
            "price": 120,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000335",
                "menuItemId": "d0000000-0000-0000-0000-000000000551",
                "name": "Ghee & Podi Finishing",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000708",
                    "groupId": "e0000000-0000-0000-0000-000000000335",
                    "name": "Extra Desi Cow Ghee Topping",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000709",
                    "groupId": "e0000000-0000-0000-0000-000000000335",
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
        "id": "ca000000-0000-0000-0038-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000038",
        "name": "Upma & Vada",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000552",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000003",
            "name": "Butter Ghee Upma",
            "description": "Semolina roasted and cooked with mustard seeds, ginger, curry leaves, and a ladle of hot desi ghee.",
            "price": 70,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 8,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000553",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000003",
            "name": "Medu Vada Sambar (2 pcs)",
            "description": "Crisp golden fried urad dal lentil doughnuts served with piping hot vegetable sambar and fresh coconut chutney.",
            "price": 70,
            "imageUrl": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0038-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000038",
        "name": "Traditional Beverages",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000554",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000004",
            "name": "Filter Coffee",
            "description": "South Indian chicory blended decoction brewed with frothy hot milk.",
            "price": 40,
            "imageUrl": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 5,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000336",
                "menuItemId": "d0000000-0000-0000-0000-000000000554",
                "name": "Milk & Sweetener",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000710",
                    "groupId": "e0000000-0000-0000-0000-000000000336",
                    "name": "Oat Milk Alternative",
                    "additionalPrice": 60,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000711",
                    "groupId": "e0000000-0000-0000-0000-000000000336",
                    "name": "Almond Milk Alternative",
                    "additionalPrice": 70,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000712",
                    "groupId": "e0000000-0000-0000-0000-000000000336",
                    "name": "Sugar-Free Stevia Sweetened",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              }
            ]
          },
          {
            "id": "d0000000-0000-0000-0000-000000000555",
            "restaurantId": "b0000000-0000-0000-0000-000000000038",
            "categoryId": "ca000000-0000-0000-0038-000000000004",
            "name": "Masala Majjiga (Spiced Buttermilk)",
            "description": "Refreshing churned spiced buttermilk with ginger, green chillies, and curry leaves.",
            "price": 35,
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
    "id": "b0000000-0000-0000-0000-000000000039",
    "name": "Mandi @ 36",
    "slug": "mandi-at-36-jubilee-hills",
    "tagline": "Premier Arabian Mandi feast destination on Road 36, slow-steamed meats & fragrant saffron rice",
    "description": "Premier authentic Arabian Mandi destination on Road No. 36 Jubilee Hills, renowned for slow-steamed tender mutton, charcoal-grilled Al Faham chicken, and majestic communal platters on aromatic Yemeni saffron rice.",
    "coverImage": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    "logoImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=200&q=80",
    "rating": 4.4,
    "ratingCount": 19800,
    "priceTier": "₹₹₹",
    "deliveryTimeEstimateMin": 35,
    "deliveryTimeEstimateMax": 50,
    "minimumOrderAmount": 350,
    "deliveryFee": 49,
    "isFeatured": true,
    "isOpen": true,
    "addressLine": "Plot No. 36, Opposite Metro Pillar 1650, Road No. 36, Jubilee Hills",
    "city": "Hyderabad",
    "latitude": 17.4308,
    "longitude": 78.3995,
    "cuisines": [
      {
        "id": "c0000009-0000-0000-0000-000000000009",
        "name": "Mughlai & Charminar Grill",
        "slug": "mughlai-charminar-grill",
        "icon": "Flame"
      },
      {
        "id": "c0000004-0000-0000-0000-000000000004",
        "name": "Hyderabadi Dum & Awadhi",
        "slug": "hyderabadi-dum",
        "icon": "Sparkles"
      }
    ],
    "categories": [
      {
        "id": "ca000000-0000-0000-0039-000000000001",
        "restaurantId": "b0000000-0000-0000-0000-000000000039",
        "name": "Signature Arabian Mandi Platters",
        "displayOrder": 1,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000556",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000001",
            "name": "Mutton Juicy Mandi (Single - Serves 1-2)",
            "description": "Succulent lamb shanks steamed tender till fall-off-the-bone, served over aromatic Yemeni spiced basmati rice garnished with fried cashews and raisins, with spicy tomato salsa and soup.",
            "price": 520,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000557",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000001",
            "name": "Chicken Al Faham Mandi (Single - Serves 1-2)",
            "description": "Half chicken marinated in Arabian sumac, garlic, and Middle Eastern spices, char-grilled over live embers and placed on fragrant Mandi rice.",
            "price": 390,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000558",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000001",
            "name": "Mutton Roast Mandi (Single - Serves 1-2)",
            "description": "Baby lamb pieces roasted with caramelized shallots and ground black pepper, served on rich aromatic Mandi rice.",
            "price": 490,
            "imageUrl": "https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 25,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000559",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000001",
            "name": "Fish Mandi with Fragrant Rice",
            "description": "Fresh boneless fish fillets spiced and pan-seared with Arabian marinade, served on long-grain Mandi rice.",
            "price": 460,
            "imageUrl": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 22,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000560",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000001",
            "name": "Mandi @ 36 Mixed Meat Feast (Mutton & Chicken - Serves 3-4)",
            "description": "Colossal communal platter loaded with tender mutton juicy cuts, Al Faham grilled chicken, crispy fried fish, aromatic Mandi rice, dry fruits, and assorted dips.",
            "price": 1190,
            "imageUrl": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 35,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0039-000000000002",
        "restaurantId": "b0000000-0000-0000-0000-000000000039",
        "name": "Charcoal Arabian Grills & Kebabs",
        "displayOrder": 2,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000561",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000002",
            "name": "Charcoal Chicken Al Faham (Half)",
            "description": "Half bone-in chicken infused with Arabian dried lemon, sumac, and crushed cumin, grilled crisp on charcoal grill.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000562",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000002",
            "name": "Lebanese Shish Tawook Skewers (4 pcs)",
            "description": "Tender chicken breast chunks marinated in garlic toum, Greek yoghurt, lemon juice, and oregano.",
            "price": 340,
            "imageUrl": "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 18,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000563",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000002",
            "name": "Lamb Seekh Kebab (4 pcs)",
            "description": "Minced lamb spiced with green chillies, mint, and roasted spices, charcoal grilled on long iron skewers.",
            "price": 420,
            "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 20,
            "customizationGroups": [
              {
                "id": "e0000000-0000-0000-0000-000000000337",
                "menuItemId": "d0000000-0000-0000-0000-000000000563",
                "name": "Spice & Marinade",
                "minSelect": 1,
                "maxSelect": 1,
                "isRequired": true,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000713",
                    "groupId": "e0000000-0000-0000-0000-000000000337",
                    "name": "Classic Charcoal Medium",
                    "additionalPrice": 0,
                    "isDefault": true
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000714",
                    "groupId": "e0000000-0000-0000-0000-000000000337",
                    "name": "Guntur Fiery Spiced",
                    "additionalPrice": 0,
                    "isDefault": false
                  }
                ]
              },
              {
                "id": "e0000000-0000-0000-0000-000000000338",
                "menuItemId": "d0000000-0000-0000-0000-000000000563",
                "name": "Dipping Accompaniment",
                "minSelect": 0,
                "maxSelect": 1,
                "isRequired": false,
                "options": [
                  {
                    "id": "f0000000-0000-0000-0000-000000000715",
                    "groupId": "e0000000-0000-0000-0000-000000000338",
                    "name": "Extra Roasted Garlic Dip",
                    "additionalPrice": 40,
                    "isDefault": false
                  },
                  {
                    "id": "f0000000-0000-0000-0000-000000000716",
                    "groupId": "e0000000-0000-0000-0000-000000000338",
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
        "id": "ca000000-0000-0000-0039-000000000003",
        "restaurantId": "b0000000-0000-0000-0000-000000000039",
        "name": "Soups & Mezze",
        "displayOrder": 3,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000564",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000003",
            "name": "Maraq Soup (Hyderabadi Arabian Bone Broth)",
            "description": "Rich, peppery clear soup brewed from mutton marrow bones, cardamom, whole spices, and slivered almonds.",
            "price": 160,
            "imageUrl": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
            "isVeg": false,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000565",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000003",
            "name": "Classic Hummus with Pita Bread (2 pcs)",
            "description": "Silky smooth chickpea puree whipped with tahini, lemon juice, extra virgin olive oil, and warm pita breads.",
            "price": 220,
            "imageUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 10,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000566",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000003",
            "name": "Garlic Toum Dip with Extra Pickles",
            "description": "Authentic whipped garlic emulsion dip served with pickled Arabian cucumbers and turnips.",
            "price": 40,
            "imageUrl": "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": false,
            "isAvailable": true,
            "preparationTimeMinutes": 2,
            "customizationGroups": []
          }
        ]
      },
      {
        "id": "ca000000-0000-0000-0039-000000000004",
        "restaurantId": "b0000000-0000-0000-0000-000000000039",
        "name": "Arabian Desserts & Drinks",
        "displayOrder": 4,
        "items": [
          {
            "id": "d0000000-0000-0000-0000-000000000567",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000004",
            "name": "Kunafa with Cream & Crushed Pistachios",
            "description": "Crisp shredded phyllo pastry baked with sweet mozzarella and clotted cream, soaked in fragrant orange blossom sugar syrup.",
            "price": 280,
            "imageUrl": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
            "isVeg": true,
            "isChefSpecial": true,
            "isAvailable": true,
            "preparationTimeMinutes": 15,
            "customizationGroups": []
          },
          {
            "id": "d0000000-0000-0000-0000-000000000568",
            "restaurantId": "b0000000-0000-0000-0000-000000000039",
            "categoryId": "ca000000-0000-0000-0039-000000000004",
            "name": "Fresh Arabian Mint Lemonade",
            "description": "Blended freshly squeezed lemon juice, ice, fresh mint leaves, and a touch of orange blossom water.",
            "price": 110,
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
  }
]
