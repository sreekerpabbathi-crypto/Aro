// scratch/build_dataset.js
// Structured generator for 36 Hyderabad restaurants, categories, menu items, options and cuisines
const fs = require('fs');
const path = require('path');

console.log('Building Hyderabad Expanded Culinary Dataset...');

// Master Cuisines (5 existing + 9 expanded)
const CUISINES = [
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
  { id: 'c0000014-0000-0000-0000-000000000014', name: 'Craft Brewery & Gastropub', slug: 'craft-brewery', icon: 'Beer' }
];

module.exports = { CUISINES };
