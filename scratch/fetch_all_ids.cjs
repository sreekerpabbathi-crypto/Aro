const url = process.env.VITE_SUPABASE_URL || 'https://sgtotyegikhulyghuldd.supabase.co';
const key = process.env.VITE_SUPABASE_ANON_KEY || '';

async function fetchAll() {
  const tables = ['cuisines', 'restaurants', 'categories', 'menu_items', 'menu_item_option_groups', 'menu_item_options', 'orders'];
  const resCats = await fetch(`${url}/rest/v1/categories?select=*`, {
    headers: { 'apikey': key, 'Authorization': `Bearer ${key}` }
  });
  console.log('categories details:', await resCats.json());
}
fetchAll();
