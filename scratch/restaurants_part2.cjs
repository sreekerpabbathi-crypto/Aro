// scratch/restaurants_part2.cjs
// Audited Restaurants 14 to 26

const PART2 = [
  // 14. The Spicy Venue (Replaces permanently closed Farzi Cafe)
  {
    index: 14,
    name: 'The Spicy Venue',
    slug: 'the-spicy-venue',
    tagline: 'Iconic Andhra delicacies, MLA Potlam Biryani & Apricot Delight',
    description: 'Legendary Jubilee Hills dining institution celebrated across South India for authentic Andhra homestyle cooking, fiery curries, signature MLA Potlam Biryani, and the world-famous Apricot Delight.',
    cover_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 2650,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 265/S, Road No. 10, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4335000,
    longitude: 78.4110000,
    cuisines: ['andhra-rayalaseema', 'modern-indian'],
    public_source: 'Swiggy / Zomato / Official Site (The Spicy Venue, Jubilee Hills)',
    categories: [
      {
        name: 'Legendary Biryanis & Pulaos',
        slug: 'spicyvenue-biryanis',
        items: [
          { name: 'MLA Potlam Biryani (Signature)', description: 'The famous creation of spiced mutton, prawns, and fragrant rice neatly wrapped in a thin pan-fried omelette parcel.', price: 460, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Avakaya Chicken Biryani', description: 'Hyderabadi chicken dum biryani infused with the spicy and tangy flavors of traditional Andhra mango pickle.', price: 380, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Ulavacharu Kodi Pulao', description: 'Tender chicken and fragrant rice cooked in rich, slow-simmered Andhra horse gram broth with fresh cream.', price: 390, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Traditional Andhra Veg Thali', description: 'Authentic vegetarian feast with rice, pappu, rasam, sambar, seasonal vegetable fry, curd, and sweet.', price: 260, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Coastal Andhra Starters',
        slug: 'spicyvenue-starters',
        items: [
          { name: 'Fish Apollo', description: 'Crisp boneless fish fillets spiced with red chillies, curry leaves, and tossed in mild yoghurt seasoning.', price: 380, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Loose Prawns', description: 'Crispy batter-fried coastal prawns tossed with finely chopped garlic, ginger, and spring onions.', price: 420, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Kodi Vepudu (Chicken Fry)', description: 'Dry-roasted chicken seasoned with black pepper, curry leaves, shallots, and whole red chillies.', price: 360, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Mamsam Fry (Mutton Fry)', description: 'Tender baby goat pieces pan-roasted on high heat with caramelized shallots and crushed spices.', price: 440, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 }
        ]
      },
      {
        name: 'Homestyle Curries & Staples',
        slug: 'spicyvenue-curries',
        items: [
          { name: 'Kodi Pulusu (Country Chicken Curry)', description: 'Homestyle Andhra chicken curry slow-cooked with village spices and fresh coriander.', price: 370, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Gutti Vankaya Kura', description: 'Tender stuffed baby brinjals simmered in roasted sesame, peanut, and tamarind gravy.', price: 280, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Ragi Sankati with Ghee', description: 'Nutritious steamed finger millet ball served hot with a dollop of pure desi cow ghee.', price: 120, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Pulka (2 pcs)', description: 'Soft and puffed whole wheat rotis cooked without oil.', price: 40, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Famous Desserts & Drinks',
        slug: 'spicyvenue-desserts',
        items: [
          { name: 'Original Apricot Delight', description: 'The original iconic dessert invented at The Spicy Venue — stewed apricots layered over sponge cake with rich vanilla custard.', price: 180, image_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Double Ka Meetha', description: 'Hyderabadi festive bread pudding cooked in sweetened saffron milk and almonds.', price: 120, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Nimmakaya Majjiga', description: 'Traditional South Indian cooling buttermilk with crushed ginger and fresh lime.', price: 60, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 15. Conçū (Retained, Audited Prices)
  {
    index: 15,
    name: 'Conçū',
    slug: 'concu',
    tagline: 'Artisanal European patisserie & specialty cafe in Jubilee Hills',
    description: 'Hyderabad\'s premier bespoke patisserie founded by Sahil and Swati Taneja. Renowned for delicate French pastries, handcrafted choux, gourmet entremets, and artisan sourdough toasts.',
    cover_image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 3410,
    price_tier: '₹₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 300,
    delivery_fee: 45,
    packaging_fee: 30,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 738, Road No. 37, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4355000,
    longitude: 78.4055000,
    cuisines: ['european-bistro'],
    public_source: 'Swiggy / Zomato (Conçū, Jubilee Hills)',
    categories: [
      {
        name: 'Signature Pastries & Entremets',
        slug: 'concu-pastries',
        items: [
          { name: 'Signature Tiramisu Glass', description: 'Classic Italian dessert with espresso-infused sponge, whipped mascarpone, and fine cocoa.', price: 340, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Chocolate Choux Bun', description: 'Crisp French choux pastry filled with rich Belgian dark chocolate cremeux.', price: 260, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Strawberry Tartlet', description: 'Almond sable crust filled with vanilla pastry cream and fresh seasonal strawberries.', price: 290, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Macarons Box (4 pcs)', description: 'Assorted French macarons: dark chocolate, salted caramel, pistachio, and raspberry.', price: 360, image_url: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      },
      {
        name: 'Savoury Bistro Plates',
        slug: 'concu-savoury',
        items: [
          { name: 'Truffle Parmesan Fries', description: 'Crisp golden potato fries tossed with white truffle oil and freshly grated parmesan.', price: 290, image_url: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Avocado Toast on Sourdough', description: 'Hass avocado mash on toasted country sourdough with cherry tomatoes, feta, and seeds.', price: 390, image_url: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Quiche Lorraine with Chicken', description: 'Buttery shortcrust pastry filled with savoury smoked chicken custard and gruyere.', price: 320, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 },
          { name: 'Croissant Ham & Cheese', description: 'Flaky artisanal French butter croissant stuffed with chicken ham and melted cheddar.', price: 340, image_url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Crepes & Paninis',
        slug: 'concu-mains',
        items: [
          { name: 'Spinach & Mushroom Crepe', description: 'French thin crepe filled with creamy sauteed spinach, button mushrooms, and gruyere.', price: 360, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Chicken Pesto Panini', description: 'Grilled ciabatta sandwich with roasted chicken breast, basil walnut pesto, and bocconcini.', price: 380, image_url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 18 },
          { name: 'Spaghetti Aglio Olio', description: 'Classic pasta tossed in extra virgin olive oil, golden garlic, chilli flakes, and parmesan.', price: 420, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Specialty Coffee & Beverages',
        slug: 'concu-beverages',
        items: [
          { name: 'Hot Chocolate Conçū Style', description: 'Thick European drinking chocolate prepared with 70% dark Belgian chocolate and steamed milk.', price: 240, image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Cold Brew Tonic', description: 'Slow-steeped Arabica cold brew poured over sparkling tonic water and citrus peel.', price: 220, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Iced Vanilla Latte', description: 'Double shot of espresso, Madagascar vanilla syrup, and chilled milk over ice.', price: 210, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Peach Passion Iced Tea', description: 'Cold brewed black tea infused with peach puree, passionfruit, and fresh mint.', price: 180, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 16. Roastery Coffee House (Retained, Audited Prices)
  {
    index: 16,
    name: 'Roastery Coffee House',
    slug: 'roastery-coffee-house',
    tagline: 'Artisanal farm-to-cup coffee & bungalow cafe dining',
    description: 'Hyderabad\'s most beloved heritage cafe in Jubilee Hills. Pioneering Indian estate coffees with custom roasting, hand brews, artisan breakfast steaks, and pasta.',
    cover_image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 4210,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'House 418, Road No. 41, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4358000,
    longitude: 78.4062000,
    cuisines: ['european-bistro'],
    public_source: 'Swiggy / Zomato (Roastery Coffee House, Jubilee Hills)',
    categories: [
      {
        name: 'Specialty Estate Brews',
        slug: 'roastery-brews',
        items: [
          { name: 'Pour Over Specialty Coffee', description: 'Manual drip brew showcasing single-estate Indian Arabica beans with clean floral notes.', price: 220, image_url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Cortado Double Shot', description: 'Equal parts rich espresso and silky steamed milk served in a traditional glass tumbler.', price: 190, image_url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Cranberry Nitro Iced Coffee', description: 'Nitrogen-infused cold brew cascading over ice with tart cranberry reduction.', price: 260, image_url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Cascara Iced Brew', description: 'Refreshing infusion of dried coffee cherry husks with fresh mint, lime, and crushed ice.', price: 210, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 6 }
        ]
      },
      {
        name: 'Appetizers & Finger Food',
        slug: 'roastery-starters',
        items: [
          { name: 'Roastery Peri Peri Onion Rings', description: 'Beer-battered jumbo onion rings dusted in house peri peri spice mix with garlic dip.', price: 260, image_url: 'https://images.unsplash.com/photo-1639024471285-0afc31ff14dd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Cheesy Garlic Pull-Apart Bread', description: 'Freshly baked sourdough bun stuffed with garlic herb butter and melted mozzarella.', price: 280, image_url: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Chicken Popcorn with Spicy Mayo', description: 'Crispy bite-sized seasoned chicken tenders tossed in peri peri with siracha mayo.', price: 290, image_url: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 },
          { name: 'Jalapeno Cheese Poppers (6 pcs)', description: 'Crisp breaded croquettes stuffed with cream cheese, cheddar, and spicy jalapeño bits.', price: 250, image_url: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Gourmet Mains & Pastas',
        slug: 'roastery-mains',
        items: [
          { name: 'Grilled Mustard Chicken Steak', description: 'Tender chicken breast in wholegrain mustard cream sauce with roasted veggies and mash.', price: 440, image_url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Creamy Mushroom & Truffle Fettuccine', description: 'Fettuccine tossed with button and cremini mushrooms in parmesan cream with truffle oil.', price: 420, image_url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Penne Arrabiata with Garlic Bread', description: 'Penne pasta tossed in spicy Italian tomato and garlic sauce with fresh basil.', price: 360, image_url: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Roastery Club Sandwich Non-Veg', description: 'Triple-decker toasted sandwich with roast chicken, fried egg, cheese, and lettuce.', price: 370, image_url: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Bakery Desserts',
        slug: 'roastery-desserts',
        items: [
          { name: 'Warm Chocolate Fudge Brownie with Gelato', description: 'Gooey walnut chocolate brownie served warm with a scoop of vanilla ice cream.', price: 250, image_url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Baked Blueberry Cheesecake', description: 'New York style baked cheesecake topped with tart blueberry compote.', price: 280, image_url: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Carrot Walnut Cake Slice', description: 'Spiced homestyle carrot cake layered with cream cheese frosting.', price: 230, image_url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 17. Olive Bistro & Bar (Retained, Audited Prices)
  {
    index: 17,
    name: 'Olive Bistro & Bar',
    slug: 'olive-bistro',
    tagline: 'Mediterranean fine dining overlooking the Secret Lake',
    description: 'Charming white-walled Mediterranean bistro perched atop Durgam Cheruvu in Jubilee Hills. Renowned for artisanal pizzas, handmade pappardelle, and panoramic lakeside views.',
    cover_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 2280,
    price_tier: '₹₹₹₹',
    delivery_time_min: 35,
    delivery_time_max: 50,
    minimum_order: 500,
    delivery_fee: 65,
    packaging_fee: 35,
    is_featured: true,
    is_open: true,
    address_line: 'Road No. 46, Atop Durgam Cheruvu Secret Lake, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4362000,
    longitude: 78.3895000,
    cuisines: ['european-bistro', 'artisanal-italian'],
    public_source: 'Swiggy / Swiggy Dineout (Olive Bistro & Bar, Jubilee Hills)',
    categories: [
      {
        name: 'Small Plates & Mezze',
        slug: 'olive-starters',
        items: [
          { name: 'Pugliese Burrata Caprese', description: 'Fresh artisanal burrata cheese with heirloom tomatoes, wild rocket, and aged balsamic glaze.', price: 590, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Gambas al Ajillo (Garlic Prawns)', description: 'Tiger prawns pan-sautéed in extra virgin olive oil with sliced garlic, chilli flakes, and warm bread.', price: 640, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Mezze Platter Royale', description: 'Classic Lebanese hummus, smoked baba ganoush, tzatziki, falafel, kalamata olives, and fresh pita.', price: 520, image_url: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Crispy Polenta Bites with Gorgonzola Dip', description: 'Golden fried herb polenta fingers served with creamy melted gorgonzola cheese sauce.', price: 420, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Wood-Fired Pizza & Pasta',
        slug: 'olive-pizza',
        items: [
          { name: 'Prosciutto di Parma & Arugula Pizza', description: 'Hand-stretched sourdough crust with San Marzano sauce, fresh mozzarella, aged prosciutto, and wild rocket.', price: 780, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Wild Truffle & Four Cheese Pizza', description: 'White base pizza topped with fontina, mozzarella, gorgonzola, parmesan, and aromatic black truffle oil.', price: 720, image_url: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 22 },
          { name: 'Handmade Pappardelle with Braised Lamb Ragu', description: 'Ribbon pasta tossed with slow-braised Australian lamb shoulder in rosemary red wine reduction.', price: 740, image_url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Spaghetti Aglio Olio e Peperoncino', description: 'Al dente spaghetti tossed in fruity olive oil, golden garlic slivers, parsley, and pepperoncini chillies.', price: 540, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Signature Large Plates',
        slug: 'olive-mains',
        items: [
          { name: 'Pan-Seared Chilean Sea Bass', description: 'Fresh sea bass fillet seared in butter, served over saffron cauliflower puree and caper butter sauce.', price: 1150, image_url: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 30 },
          { name: 'Roast Rosemary Chicken Supreme', description: 'Herb-roasted bone-in chicken breast with potato gratin, charred asparagus, and pan jus.', price: 660, image_url: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Stuffed Portobello Mushroom Steaks', description: 'Baked giant mushroom caps filled with herbed goat cheese, pine nuts, and sun-dried tomatoes.', price: 580, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Sourdough Garlic Focaccia Loaf', description: 'Freshly baked rosemary sea salt focaccia served warm with balsamic olive oil dip.', price: 280, image_url: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Desserts & Refreshers',
        slug: 'olive-desserts',
        items: [
          { name: 'Olive Signature Tiramisu', description: 'Classic Italian pick-me-up with espresso soaked savoiardi, mascarpone cream, and cocoa.', price: 390, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 8 },
          { name: 'Valrhona Chocolate Fondant', description: 'Molten dark chocolate lava cake with French vanilla bean ice cream.', price: 410, image_url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Elderflower & Cucumber Spritzer', description: 'Fragrant French elderflower cordial with cucumber ribbons, fresh mint, and sparkling soda.', price: 240, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 18. The Fisherman's Wharf (Retained, Audited Prices)
  {
    index: 18,
    name: 'The Fisherman\'s Wharf',
    slug: 'the-fishermans-wharf',
    tagline: 'Authentic Goan coastal cuisine & fresh seafood grills',
    description: 'Hyderabad\'s premier coastal seafood destination in the Financial District corridor. Celebrated for Goan Fish Curry, Butter Garlic Tiger Prawns, Kingfish Rava Fry, and Bebinca.',
    cover_image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 2410,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 350,
    delivery_fee: 45,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 304, ISB Road, Financial District, Gachibowli',
    city: 'Hyderabad',
    latitude: 17.4185000,
    longitude: 78.3495000,
    cuisines: ['coastal-seafood'],
    public_source: 'Swiggy / Official Site (The Fisherman\'s Wharf, Gachibowli)',
    categories: [
      {
        name: 'Fresh Coastal Starters',
        slug: 'wharf-starters',
        items: [
          { name: 'Kingfish Masala Pan Fry (Surmai Rava Fry)', description: 'Fresh steak of Kingfish marinated in recheado masala, crusted in semolina and shallow fried.', price: 560, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Butter Garlic Tiger Prawns', description: 'Jumbo prawns pan-sautéed in white butter with burnt garlic and chopped parsley.', price: 590, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Calamari Peri-Peri Fry', description: 'Fresh squid rings marinated in spicy Goan peri-peri masala and crispy batter fried.', price: 460, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Mushroom & Cheese Croquettes (4 pcs)', description: 'Crisp breadcrumbed croquettes filled with creamy wild mushroom and melted mozzarella.', price: 310, image_url: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Goan Curries & Seafood Mains',
        slug: 'wharf-curries',
        items: [
          { name: 'Goan Fish Curry with Coconut Milk', description: 'Authentic Goan curry made with fresh fish, fresh coconut extract, Kashmiri chillies, and kokum.', price: 520, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Prawns Balchao', description: 'Fiery and tangy prawn pickle curry cooked with caramelized onions, vinegar, and ground spices.', price: 540, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Chicken Xacuti', description: 'Complex Goan curry prepared with roasted grated coconut, poppy seeds, and fragrant spices.', price: 460, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Paneer Caldin', description: 'Mild yellow coconut curry cooked with cottage cheese cubes, coriander, and turmeric.', price: 380, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Rice & Goan Breads',
        slug: 'wharf-rice',
        items: [
          { name: 'Seafood Pulao Fisherman Style', description: 'Aromatic short-grain rice cooked with fresh prawns, fish, calamari, and whole spices.', price: 510, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Steamed Goan Red Rice', description: 'Nutritious unpolished indigenous Goan boiled red rice, best with fish curry.', price: 160, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Warm Poee (Goan Bread - 2 pcs)', description: 'Traditional Goan whole wheat pocket bread fermented with local toddy yeast.', price: 80, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Appam (2 pcs)', description: 'Lacy fermented rice and coconut milk hoppers with soft spongy center.', price: 90, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Goan Desserts & Coolers',
        slug: 'wharf-desserts',
        items: [
          { name: 'Traditional Bebinca (7 Layers)', description: 'The queen of Goan desserts — multi-layered cake baked with coconut milk, egg yolks, and nutmeg.', price: 260, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 8 },
          { name: 'Serra Durra (Sawdust Pudding)', description: 'Portuguese layered chilled pudding of condensed milk cream and crushed tea biscuit dust.', price: 220, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 },
          { name: 'Sol Kadi Cooler', description: 'Digestive pink cooler made from wild kokum fruit extract, fresh coconut milk, and crushed garlic.', price: 110, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 19. Kritunga Restaurant (Replaces permanently closed Ulavacharu)
  {
    index: 19,
    name: 'Kritunga Restaurant',
    slug: 'kritunga-restaurant',
    tagline: 'Fiery Rayalaseema cuisine, Ragi Sankati & Natu Kodi',
    description: 'Beloved Rayalaseema culinary powerhouse in Hyderabad famous for its authentic spice blends, signature Ragi Mudda with Natu Kodi Pulusu, Ghee Roast Biryani, and fiery Rayalaseema vepudus.',
    cover_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=200&q=80',
    rating: 4.6,
    rating_count: 3180,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Near Kothaguda Junction, Whitefields, Kondapur',
    city: 'Hyderabad',
    latitude: 17.4612000,
    longitude: 78.3688000,
    cuisines: ['andhra-rayalaseema', 'telangana-heritage'],
    public_source: 'Swiggy / Zomato (Kritunga Restaurant, Kondapur / Somajiguda)',
    categories: [
      {
        name: 'Rayalaseema Pulaos & Biryanis',
        slug: 'kritunga-rice',
        items: [
          { name: 'Ragi Mudda with Natu Kodi Pulusu', description: 'Signature Rayalaseema combo: steamed finger millet ball served with spicy country chicken gravy and pure ghee.', price: 420, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Ghee Roast Chicken Pulao', description: 'Aromatic chitti mutyalu rice cooked in rich ghee and topped with spicy roast chicken fry.', price: 380, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Rayalaseema Mutton Pulao', description: 'Fragrant short-grain rice cooked with tender baby mutton pieces and stone-ground spices.', price: 440, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Gongura Kodi Biryani', description: 'Spicy chicken dum biryani layered with tangy sorrel leaves chutney and golden onions.', price: 370, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 }
        ]
      },
      {
        name: 'Fiery Starters & Vepudus',
        slug: 'kritunga-starters',
        items: [
          { name: 'Natu Kodi Vepudu', description: 'Country chicken pan-roasted with fiery red chillies, shallots, and cracked black pepper.', price: 360, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Rayalaseema Mutton Fry', description: 'Tender mutton chunks slow-roasted in an iron skillet with dry coconut and coriander seeds.', price: 440, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Royyala Vepudu (Prawn Fry)', description: 'Fresh prawns pan-fried in garlic, green chillies, and authentic Rayalaseema spices.', price: 420, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Kaju Paneer Vepudu', description: 'Crisp cottage cheese cubes dry-fried with roasted cashews and aromatic curry leaves.', price: 290, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Village Curries & Breads',
        slug: 'kritunga-curries',
        items: [
          { name: 'Natu Kodi Pulusu (Single)', description: 'Spicy country chicken curry simmered in rustic earthen pot with coriander and garlic.', price: 340, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Gutti Vankaya Kura', description: 'Small eggplants stuffed with ground peanut and sesame masala, simmered to thick gravy.', price: 260, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Ragi Sankati (Single)', description: 'Nutritious steamed ball of finger millet and rice served hot with pure ghee.', price: 110, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Parotta (2 pcs)', description: 'Layered flaky South Indian flatbread, freshly cooked on hot griddle.', price: 60, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Desserts & Beverages',
        slug: 'kritunga-desserts',
        items: [
          { name: 'Gulab Jamun (2 pcs)', description: 'Classic sweet milk dumplings soaked in fragrant sugar syrup.', price: 80, image_url: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Sweet Lassi', description: 'Chilled sweetened churned yoghurt drink flavored with cardamom.', price: 70, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Spiced Buttermilk', description: 'Cooling churned curd drink seasoned with mustard seeds, curry leaves, and ginger.', price: 50, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 20. Haïku (Retained, Audited Prices)
  {
    index: 20,
    name: 'Haïku',
    slug: 'haiku',
    tagline: 'Refined Pan-Asian dining, artisan sushi & dim sum artistry',
    description: 'Banjara Hills\' acclaimed Asian kitchen on Road No. 12. Showcasing handcrafted dim sum, fresh sushi rolls, fragrant Thai curries, and robata grilled delicacies.',
    cover_image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 1880,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 350,
    delivery_fee: 45,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 686/D, Road No. 12, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4156000,
    longitude: 78.4352000,
    cuisines: ['pan-asian', 'japanese-robata'],
    public_source: 'Swiggy / Haiku Official Site (Haiku, Banjara Hills)',
    categories: [
      {
        name: 'Artisan Dim Sum & Bao',
        slug: 'haiku-dimsum',
        items: [
          { name: 'Truffle Edamame Dumplings (4 pcs)', description: 'Delicate translucent skins filled with seasoned edamame and infused with aromatic truffle oil.', price: 440, image_url: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Crystal Prawn Har Gow (4 pcs)', description: 'Traditional Cantonese steamed dumplings packed with juicy tiger prawns and bamboo shoots.', price: 490, image_url: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Chicken & Coriander Sui Mai (4 pcs)', description: 'Open-top dumplings stuffed with minced chicken, fresh coriander, ginger, and tobiko.', price: 420, image_url: 'https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Wild Mushroom Bao (3 pcs)', description: 'Fluffy steamed lotus leaf buns filled with braised wild mushrooms in sweet hoisin glaze.', price: 380, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Signature Sushi Rolls',
        slug: 'haiku-sushi',
        items: [
          { name: 'Spicy Salmon Uramaki Roll (8 pcs)', description: 'Fresh salmon tartare, cucumber, spicy togarashi mayo, rolled inside-out with toasted sesame.', price: 660, image_url: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Crispy Avocado & Cream Cheese Maki (8 pcs)', description: 'Ripe avocado, Philadelphia cream cheese, and tempura flakes with sweet teriyaki drizzle.', price: 490, image_url: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Prawn Tempura Ebi Roll (8 pcs)', description: 'Crisp prawn tempura, cucumber, and creamy Japanese mayo wrapped with nori and orange tobiko.', price: 620, image_url: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Asparagus Tempura & Truffle Roll (8 pcs)', description: 'Crisp tempura asparagus spears rolled with seasoned rice and drizzled with white truffle mayo.', price: 460, image_url: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 }
        ]
      },
      {
        name: 'Wok Specialties & Curries',
        slug: 'haiku-mains',
        items: [
          { name: 'Thai Green Curry with Jasmine Rice', description: 'Fragrant green curry paste cooked with coconut milk, Thai eggplants, kaffir lime, and fragrant rice.', price: 520, image_url: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 25 },
          { name: 'Teriyaki Glazed Chicken Bowl', description: 'Char-grilled chicken thigh glazed with house teriyaki sauce, served over steamed rice with sesame greens.', price: 480, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Singapore Hawker Chilli Prawns', description: 'Tiger prawns tossed in a fiery and sweet chilli garlic sauce with egg ribbons and scallions.', price: 620, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 22 },
          { name: 'Wok-Tossed Hakka Noodles Veg', description: 'Al dente eggless noodles stir-fried with julienned vegetables, soy sauce, and white pepper.', price: 320, image_url: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Desserts & Asian Coolers',
        slug: 'haiku-desserts',
        items: [
          { name: 'Panko Banana Fritters with Honey', description: 'Warm banana coated in Japanese panko crumbs, fried golden and served with wild honey.', price: 260, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Coconut Mango Sticky Rice', description: 'Traditional Thai glutinous rice cooked with sweet coconut cream, served with fresh mango slices.', price: 310, image_url: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Yuzu Iced Green Tea', description: 'Chilled Japanese sencha green tea infused with citrus yuzu and fresh mint leaves.', price: 190, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 21. Vivaha Bhojanambu (Replaces permanently closed United Kitchens of India)
  {
    index: 21,
    name: 'Vivaha Bhojanambu',
    slug: 'vivaha-bhojanambu',
    tagline: 'Celebrated Telugu wedding feast & royal regional pulaos',
    description: 'Renowned Telugu specialty dining in Jubilee Hills known for its grand Raju Gari Bhojanam traditional thali feast, Bamboo Chicken, and aromatic regional pulaos from Godavari and Telangana.',
    cover_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 2840,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 20,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 822, Road No. 10, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4330000,
    longitude: 78.4095000,
    cuisines: ['andhra-rayalaseema', 'telangana-heritage'],
    public_source: 'Swiggy / Swiggy Dineout / Zomato (Vivaha Bhojanambu, Jubilee Hills)',
    categories: [
      {
        name: 'Royal Telugu Pulaos & Thali',
        slug: 'vb-pulaos',
        items: [
          { name: 'Raju Gari Bhojanam (Grand Thali)', description: 'Traditional celebratory Telugu vegetarian spread with 14 accompaniments, podi, ghee, and sweet.', price: 290, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Rajahmundry Kodi Pulao', description: 'Coastal Andhra fragrant pulao prepared with tender chicken morsels and green chilli coriander masala.', price: 370, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Bhimavaram Royyala Pulao', description: 'Fresh succulent prawns tossed with aromatic spices and layered with fragrant chitti mutyalu rice.', price: 440, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Gongura Mamsam Pulao', description: 'Tender baby mutton simmered in tangy sorrel leaf gravy and blended with spiced rice.', price: 460, image_url: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 }
        ]
      },
      {
        name: 'Heritage Telugu Starters',
        slug: 'vb-starters',
        items: [
          { name: 'Bamboo Chicken', description: 'Tribal Araku specialty: marinated chicken cooked inside fresh green bamboo stalk over charcoal fire.', price: 390, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Bhimavaram Kodi Vepudu', description: 'Spicy chicken roast prepared with Godavari country spices, roasted cashews, and curry leaves.', price: 360, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Kakinada Peethala Vepudu (Crab Roast)', description: 'Fresh sea crab pieces tossed in a fiery, aromatic coastal Andhra black pepper and chilli masala.', price: 490, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Ullipayala Pakodi', description: 'Crispy deep-fried sliced onion fritters tossed with curry leaves, served with peanut chutney.', price: 160, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Curries & Rice Accompaniments',
        slug: 'vb-curries',
        items: [
          { name: 'Gutti Vankaya Koora', description: 'Tender baby eggplants stuffed with roasted peanut, sesame, and coriander paste.', price: 270, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Gongura Pappu with Desi Ghee', description: 'Homestyle yellow toor dal stewed with tangy sorrel leaves and tempered with garlic.', price: 190, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Steamed Bagara Rice Handi', description: 'Traditional Hyderabadi wedding spiced tempered rice with whole garam masala and mint.', price: 220, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Pulka (2 pcs)', description: 'Soft puffed whole wheat rotis brushed with pure ghee.', price: 40, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      },
      {
        name: 'Wedding Sweets & Beverages',
        slug: 'vb-desserts',
        items: [
          { name: 'Rose Milk (Classic)', description: 'Chilled fragrant South Indian sweet milk flavored with pure Damascus rose essence.', price: 70, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Pootharekulu (2 pcs)', description: 'Traditional wafer-thin rice paper sweet rolls stuffed with pure jaggery and chopped dry fruits.', price: 110, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Kaju Barfi (2 pcs)', description: 'Diamond cut rich cashew fudge prepared with pure ghee and silver varq.', price: 80, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 22. Aidu (Retained, Audited Prices)
  {
    index: 22,
    name: 'Aidu',
    slug: 'aidu',
    tagline: 'The five southern states on one culinary canvas',
    description: 'Jubilee Hills specialty restaurant celebrating the diverse culinary traditions of the five southern states: Telangana, Andhra Pradesh, Karnataka, Tamil Nadu, and Kerala.',
    cover_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
    rating_count: 1460,
    price_tier: '₹₹₹',
    delivery_time_min: 30,
    delivery_time_max: 45,
    minimum_order: 350,
    delivery_fee: 45,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Road No. 45, Jubilee Hills',
    city: 'Hyderabad',
    latitude: 17.4345000,
    longitude: 78.4038000,
    cuisines: ['andhra-rayalaseema', 'telangana-heritage'],
    public_source: 'Swiggy / Zomato (Aidu Kitchen and Bar, Jubilee Hills)',
    categories: [
      {
        name: 'South Indian Coastal & Regional Starters',
        slug: 'aidu-starters',
        items: [
          { name: 'Karivepaku Kodi Vepudu', description: 'Tender chicken bites tossed with fresh fragrant curry leaf paste, green chillies, and crushed pepper.', price: 390, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Koliwada Fish Fry', description: 'Boneless fish fillets marinated in spiced chickpea batter with carom seeds and crispy fried.', price: 440, image_url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Mushroom Sukka Mangalore Style', description: 'Fresh button mushrooms dry-roasted with freshly grated coconut, byadgi chillies, and curry leaves.', price: 340, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Kurnool Paneer Vepudu', description: 'Fresh malai cottage cheese cubes tossed with dry roasted spices and crunchy curry leaves.', price: 360, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Heritage Curries of the South',
        slug: 'aidu-curries',
        items: [
          { name: 'Chettinad Pepper Chicken', description: 'Famous Tamil Nadu village-style chicken curry cooked with freshly stone-ground kalpasi and black pepper.', price: 460, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Telangana Mutton Curry', description: 'Rustic Telangana highway preparation of tender mutton simmered in dark roasted coriander and onion gravy.', price: 520, image_url: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Bendakaya Pulusu (Okra Stew)', description: 'Tender ladyfingers cooked in a tangy tamarind, jaggery, and shallot broth with mustard tempering.', price: 290, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Avial Kerala Style', description: 'Medley of native tropical vegetables stewed in fresh coconut paste, yoghurt, and pure cold-pressed coconut oil.', price: 320, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Regional Pulaos & Breads',
        slug: 'aidu-rice',
        items: [
          { name: 'Aidu Special Kodi Pulao', description: 'Fragrant short-grain rice cooked with whole spices and topped with succulent spiced chicken fry.', price: 420, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Gongura Royyalu Pulao', description: 'Coastal spiced rice tossed with fresh prawns and tangy sorrel leaf masala.', price: 490, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Kothu Parotta Veg', description: 'Flaky shredded parotta tossed on hot tawa with seasonal vegetables, onions, and spicy salna.', price: 280, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Neer Dosa (3 pcs)', description: 'Paper-thin delicate rice crepes from Coastal Karnataka, served with coconut chutney.', price: 120, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Heritage Desserts & Drinks',
        slug: 'aidu-desserts',
        items: [
          { name: 'Ada Pradhaman (Kerala Payasam)', description: 'Traditional Kerala dessert made of steamed rice flakes, rich coconut milk, and dark jaggery.', price: 210, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Mysore Pak with Warm Ghee', description: 'Rich, crumbly and melt-in-mouth gram flour fudge prepared with pure desi cow ghee.', price: 160, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Panakam Herbal Punch', description: 'Refreshing Vedic cooler made with jaggery water, crushed black pepper, cardamom, and dry ginger.', price: 80, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 23. Minerva Coffee Shop (Retained, Audited Prices)
  {
    index: 23,
    name: 'Minerva Coffee Shop',
    slug: 'minerva-coffee-shop',
    tagline: 'Heritage South Indian breakfast & vegetarian landmark since 1987',
    description: 'Somajiguda\'s iconic vegetarian coffee shop in Amrutha Mall. Loved for Button Sambar Idlis, golden crisp Masala Dosas, afternoon Mirchi Bajjis, and authentic filter coffee.',
    cover_image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 5120,
    price_tier: '₹₹',
    delivery_time_min: 20,
    delivery_time_max: 35,
    minimum_order: 150,
    delivery_fee: 30,
    packaging_fee: 15,
    is_featured: true,
    is_open: true,
    address_line: 'Amrutha Mall, Raj Bhavan Road, Somajiguda',
    city: 'Hyderabad',
    latitude: 17.4255000,
    longitude: 78.4578000,
    cuisines: ['south-indian-tiffins', 'pure-vegetarian'],
    public_source: 'Swiggy / Zomato (Minerva Coffee Shop, Somajiguda)',
    categories: [
      {
        name: 'Heritage Morning Tiffins',
        slug: 'minerva-tiffins',
        items: [
          { name: 'Button Sambar Idli (14 mini idlis)', description: 'Platter of fourteen bite-sized steamed idlis submerged in piping hot spiced lentil sambar with ghee.', price: 120, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Special Masala Dosa', description: 'Crispy golden crepe smeared with red chutney and filled with spiced potato onion masala.', price: 135, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Crispy Medu Vada (2 pcs)', description: 'Golden fried crispy lentil doughnuts with crushed black pepper and ginger, served with fresh chutneys.', price: 105, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Pesarattu Upma', description: 'Whole green gram batter crepe roasted crisp on griddle, stuffed with classic rava upma.', price: 145, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 }
        ]
      },
      {
        name: 'South Indian Rice Specialties',
        slug: 'minerva-rice',
        items: [
          { name: 'Minerva Executive South Indian Meals', description: 'Traditional vegetarian thali meal with rice, poori, sambar, rasam, kootu, veg fry, curd, and dessert.', price: 220, image_url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Bisi Bele Bath with Boondi', description: 'Wholesome rice and toor dal preparation simmered with seasonal vegetables, pure ghee, and boondi.', price: 140, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Tempered Curd Rice', description: 'Cooling seasoned yoghurt rice tempered with mustard, cumin, green chillies, and ginger.', price: 120, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Puliyogare (Tamarind Rice)', description: 'Temple-style tangy tamarind rice tempered with roasted peanuts, curry leaves, and red chillies.', price: 130, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Snacks & Evening Specials',
        slug: 'minerva-snacks',
        items: [
          { name: 'Mirchi Bajji (3 pcs)', description: 'Stuffed large green chillies dipped in spiced gram flour batter, deep-fried and dusted with chaat masala.', price: 90, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 12 },
          { name: 'Cut Mirchi with Onions', description: 'Crisp twice-fried chopped chilli fritters tossed with finely chopped raw onions, lemon, and peanut podi.', price: 95, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Poori Masala (3 pcs)', description: 'Golden puffed whole wheat pooris served with warm spiced potato curry.', price: 130, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Rava Dosa Special', description: 'Thin and crispy semolina crepe riddled with cumin seeds, crushed black pepper, and cashews.', price: 140, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Beverages & Sweets',
        slug: 'minerva-drinks',
        items: [
          { name: 'Minerva Filter Coffee', description: 'The famous house blend chicory filter coffee frothed to perfection in stainless steel davarah.', price: 50, image_url: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 5 },
          { name: 'Rava Kesari with Cashews', description: 'Warm golden sweet semolina dessert infused with saffron, ghee, and golden raisins.', price: 85, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Badam Milk Chilled', description: 'Creamy chilled milk prepared with crushed almonds, saffron strands, and green cardamom.', price: 90, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 24. Tre-Forni Bar & Restaurant (Retained, Audited Prices)
  {
    index: 24,
    name: 'Tre-Forni Bar & Restaurant',
    slug: 'tre-forni',
    tagline: 'Luxury Italian dining & wood-fired stone oven gastronomy',
    description: 'Banjara Hills\' premier luxury Italian destination at Park Hyatt Hyderabad. Renowned for authentic Northern Italian homestyle recipes, wood-fired oven pizzas, and artisan pasta.',
    cover_image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    rating_count: 1580,
    price_tier: '₹₹₹₹',
    delivery_time_min: 35,
    delivery_time_max: 55,
    minimum_order: 600,
    delivery_fee: 75,
    packaging_fee: 40,
    is_featured: true,
    is_open: true,
    address_line: 'Park Hyatt, Road No. 2, Banjara Hills',
    city: 'Hyderabad',
    latitude: 17.4262000,
    longitude: 78.4295000,
    cuisines: ['artisanal-italian', 'european-bistro'],
    public_source: 'Hyatt Restaurants Official / Swiggy Dineout (Tre-Forni, Park Hyatt Hyderabad)',
    categories: [
      {
        name: 'Antipasti Artigianali',
        slug: 'treforni-starters',
        items: [
          { name: 'Carpaccio di Manzo', description: 'Paper-thin slices of tenderloin beef with wild arugula, shaved parmesan, capers, and truffle vinaigrette.', price: 850, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Burrata Pugliese Artigianale', description: 'Creamy artisanal burrata from Puglia with roasted heirloom cherry tomatoes, basil pesto, and pine nuts.', price: 740, image_url: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 15 },
          { name: 'Calamari alla Griglia', description: 'Charcoal-grilled fresh squid with garlic, fresh red chillies, lemon zest, and extra virgin olive oil.', price: 680, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Bruschetta ai Funghi Porcini', description: 'Grilled country bread topped with sautéed wild porcini mushrooms, fresh thyme, and melted fontina.', price: 520, image_url: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Primi Piatti & Risotto',
        slug: 'treforni-pasta',
        items: [
          { name: 'Risotto ai Funghi Porcini', description: 'Carnaroli rice slow-cooked with wild porcini stock, white wine, butter, and 24-month aged parmesan.', price: 820, image_url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 25 },
          { name: 'Ravioli di Ricotta e Spinaci al Burro', description: 'Handmade pasta pillows filled with buffalo ricotta and spinach, tossed in sage butter and pine nuts.', price: 760, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Tagliolini al Tartufo Nero', description: 'Fine handcrafted egg pasta strands tossed with aromatic black winter truffle paste and butter sabayon.', price: 890, image_url: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281699?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 22 },
          { name: 'Linguine ai Frutti di Mare', description: 'Artisan linguine with tiger prawns, squid, and black mussels in a light white wine tomato broth.', price: 980, image_url: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 }
        ]
      },
      {
        name: 'Pizze Forno a Legna',
        slug: 'treforni-pizza',
        items: [
          { name: 'Pizza Tre-Forni Signature', description: 'Stone oven sourdough pizza with San Marzano tomatoes, buffalo mozzarella, parma ham, and arugula.', price: 840, image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 22 },
          { name: 'Pizza Margherita D.O.P.', description: 'San Marzano D.O.P. tomatoes, fresh Campania buffalo mozzarella, fragrant sweet basil, and EVOO.', price: 690, image_url: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Pizza Primavera Ortolana', description: 'Wood-fired crust with grilled eggplant, zucchini, roasted peppers, black olives, and fior di latte.', price: 720, image_url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 20 },
          { name: 'Focaccia Barese al Pomodoro', description: 'Puglian style thick sourdough focaccia baked with cherry tomatoes, oregano, and olive oil.', price: 340, image_url: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Dolci Tradizionali',
        slug: 'treforni-desserts',
        items: [
          { name: 'Tiramisu Tradizionale Tre-Forni', description: 'Prepared tableside with fresh mascarpone cream, savoiardi biscuits soaked in Illy espresso, and cocoa.', price: 480, image_url: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Cannoli Siciliani con Ricotta (2 pcs)', description: 'Crispy fried Sicilian pastry tubes filled with sweetened sheep ricotta, candied orange, and pistachios.', price: 420, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 },
          { name: 'Acqua Panna Still Mineral Water (750ml)', description: 'Natural spring water bottled at the source in Tuscany, Italy.', price: 290, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  },

  // 25. Jewel of Nizam - The Minar (Retained, Audited Prices)
  {
    index: 25,
    name: 'Jewel of Nizam - The Minar',
    slug: 'jewel-of-nizam',
    tagline: 'Royal fine dining in a 100-foot heritage tower overlooking the lake',
    description: 'Hyderabad\'s iconic fifth minar at The Golkonda Resort, Gandipet. An incomparable royal Nizami fine-dining experience with Barkas Pathar Ka Gosht, Kacchi Dum Biryani, and Nalli Nihari.',
    cover_image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
    rating_count: 1890,
    price_tier: '₹₹₹₹',
    delivery_time_min: 40,
    delivery_time_max: 60,
    minimum_order: 600,
    delivery_fee: 80,
    packaging_fee: 40,
    is_featured: true,
    is_open: true,
    address_line: 'The Golkonda Resort, Sagar Mahal Complex, Gandipet',
    city: 'Hyderabad',
    latitude: 17.3912000,
    longitude: 78.3245000,
    cuisines: ['hyderabadi-dum', 'contemporary-deccani'],
    public_source: 'Golkonda Resorts Official / Swiggy Dineout (Jewel of Nizam - The Minar, Gandipet)',
    categories: [
      {
        name: 'Nizami Dastarkhwan Starters',
        slug: 'jewel-starters',
        items: [
          { name: 'Barkas Pathar Ka Gosht', description: 'Tender baby lamb fillets marinated with green papaya, garam masala, and seared on granite slabs.', price: 840, image_url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 25 },
          { name: 'Dahi Ke Shikampuri Kebab (4 pcs)', description: 'Pan-seared spiced yoghurt and lentil patties stuffed with fresh mint, green chillies, and pomegranate.', price: 560, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 20 },
          { name: 'Murgh Nizami Boti Kebab', description: 'Boneless chicken morsels steeped in saffron yoghurt marinade, skewered and roasted over charcoal.', price: 620, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Subz Moti Seekh', description: 'Finely minced garden vegetables and cottage cheese pearls skewered and charred over live embers.', price: 480, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 }
        ]
      },
      {
        name: 'Royal Heritage Curries',
        slug: 'jewel-curries',
        items: [
          { name: 'Nalli Nihari Asaf Jahi', description: 'Shank of tender lamb braised overnight in a copper cauldron with 36 proprietary spices and bone marrow broth.', price: 980, image_url: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 35 },
          { name: 'Murgh Dum Korma Jahanara', description: 'Chicken cooked on slow dum with cashew paste, brown onions, yoghurt, and rose petal water.', price: 720, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 25 },
          { name: 'Paneer Kundan Qaliya', description: 'Cottage cheese simmered in a velvety golden turmeric and almond gravy, garnished with pure gold leaf.', price: 620, image_url: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Mirchi Ka Salan Khaas', description: 'Large Bhavnagri chillies poached in a royal roasted peanut, sesame, and tamarind emulsion.', price: 180, image_url: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Shahi Biryanis & Breads',
        slug: 'jewel-rice',
        items: [
          { name: 'Kacchi Dum Gosht Biryani Khaas', description: 'Raw tender mutton marinated in curd and spices, layered with aged basmati rice and cooked on slow charcoal dum.', price: 860, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 35 },
          { name: 'Subz Moti Pulao Handi', description: 'Fragrant basmati rice layered with garden vegetables, paneer pearls, and mild Awadhi spices.', price: 480, image_url: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 22 },
          { name: 'Zafrani Sheermal (2 pcs)', description: 'Traditional milk-kneaded baked sweet bread infused with pure saffron and brushed with butter.', price: 190, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 },
          { name: 'Warqi Paratha (2 pcs)', description: 'Multi-layered flaky royal flatbread brushed with desi ghee.', price: 150, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 12 }
        ]
      },
      {
        name: 'Royal Shahi Sweets',
        slug: 'jewel-desserts',
        items: [
          { name: 'Anokhi Kheer (Royal Garlic Dessert)', description: 'The legendary royal delicacy made with blanched garlic cooked in sweetened saffron milk so all pungency is gone.', price: 380, image_url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Khubani Ka Meetha with Clotted Malai', description: 'Stewed dried apricots garnished with fresh clotted malai and blanched apricot kernels.', price: 360, image_url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: true, prep_time: 10 },
          { name: 'Badam Ka Harira (Almond Elixir)', description: 'Warm comforting traditional almond beverage brewed with saffron, cardamom, and pure ghee.', price: 220, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 8 }
        ]
      }
    ]
  },

  // 26. AB's - Absolute Barbecues (Retained, Audited Prices)
  {
    index: 26,
    name: 'AB\'s - Absolute Barbecues',
    slug: 'absolute-barbecues',
    tagline: 'Custom wish-grill, live skewers & celebratory buffet feasts',
    description: 'Hyderabad\'s high-energy live barbecue destination in Madhapur. Famous for DIY table grills, exotic wish-grills, customized chicken & seafood boxes, and indulgent biryani meals.',
    cover_image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    logo_image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=200&q=80',
    rating: 4.7,
    rating_count: 5120,
    price_tier: '₹₹',
    delivery_time_min: 25,
    delivery_time_max: 40,
    minimum_order: 250,
    delivery_fee: 40,
    packaging_fee: 25,
    is_featured: true,
    is_open: true,
    address_line: 'Plot 22, Inorbit Mall Road, Vittal Rao Nagar, Madhapur',
    city: 'Hyderabad',
    latitude: 17.4398000,
    longitude: 78.3845000,
    cuisines: ['craft-brewery', 'mughlai-charminar-grill'],
    public_source: 'Swiggy / Zomato / Absolute Barbecues Official Site (AB\'s, Madhapur)',
    categories: [
      {
        name: 'Live Grill Boxes & Skewers',
        slug: 'abs-grills',
        items: [
          { name: 'BBQ Chicken Wings (6 pcs)', description: 'Smoky char-grilled chicken wings glazed with tangy barbecue sauce and crushed black pepper.', price: 340, image_url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Grilled Prawns Skewer Box', description: 'Fresh coastal prawns marinated in herb garlic butter, char-grilled on skewers with grilled lemon.', price: 440, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Spiced Mutton Seekh Kebab Box', description: 'Skewered minced mutton kebabs seasoned with cumin, coriander, and fresh mint, grilled on charcoal.', price: 420, image_url: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Crispy Corn Salt and Pepper', description: 'Sweet corn kernels coated in light cornstarch batter, flash-fried and tossed with spring onions and pepper.', price: 220, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Paneer Tikka Platter', description: 'Cottage cheese cubes marinated in spiced yoghurt and roasted in clay tandoor with onions and capsicum.', price: 310, image_url: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 18 },
          { name: 'Tandoori Mushroom Skewers', description: 'Whole button mushrooms marinated in tikka spices and char-roasted over coals.', price: 270, image_url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 }
        ]
      },
      {
        name: 'Biryanis & Meal Boxes',
        slug: 'abs-mains',
        items: [
          { name: 'AB\'s Special Chicken Dum Biryani', description: 'Fragrant basmati rice cooked on dum with spiced chicken, served with raita and mirchi ka salan.', price: 290, image_url: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: true, prep_time: 20 },
          { name: 'Butter Chicken with 2 Parottas', description: 'Boneless chicken tikka pieces in creamy makhani gravy paired with two layered parottas.', price: 340, image_url: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80', is_veg: false, is_chef_special: false, prep_time: 20 },
          { name: 'Dal Makhani Bowl', description: 'Slow-simmered black lentils cooked overnight with butter and fresh cream.', price: 220, image_url: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 15 },
          { name: 'Butter Naan (2 pcs)', description: 'Tandoor-baked flatbreads brushed with fresh butter.', price: 80, image_url: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 10 }
        ]
      },
      {
        name: 'Desserts & Beverages',
        slug: 'abs-desserts',
        items: [
          { name: 'Angoori Gulab Jamun (6 pcs)', description: 'Bite-sized soft milk dumplings soaked in rose-flavored sugar syrup.', price: 120, image_url: 'https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Chocolate Walnut Brownie', description: 'Dense fudgy chocolate brownie loaded with roasted walnuts and chocolate sauce.', price: 160, image_url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Lemon Mint Ice Tea', description: 'Freshly brewed iced black tea with lemon juice and crushed mint.', price: 95, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 },
          { name: 'Fresh Lime Soda', description: 'Chilled bubbly soda with freshly squeezed lime juice, sweet and salted.', price: 75, image_url: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80', is_veg: true, is_chef_special: false, prep_time: 5 }
        ]
      }
    ]
  }
];

module.exports = { PART2 };
