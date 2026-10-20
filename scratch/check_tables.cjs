const url = process.env.VITE_SUPABASE_URL || 'https://sgtotyegikhulyghuldd.supabase.co';
const key = process.env.VITE_SUPABASE_ANON_KEY || '';

async function check() {
  const tables = [
    'cuisines',
    'restaurants',
    'categories',
    'menu_categories',
    'menu_items',
    'menu_item_option_groups',
    'customization_groups',
    'item_customization_groups',
    'customization_options',
    'menu_item_options',
    'orders',
    'order_items'
  ];

  for (const tbl of tables) {
    try {
      const res = await fetch(`${url}/rest/v1/${tbl}?select=*&limit=3`, {
        headers: {
          'apikey': key,
          'Authorization': `Bearer ${key}`
        }
      });
      const data = await res.json();
      console.log(tbl, 'status:', res.status, Array.isArray(data) ? `rows: ${data.length}, sample id: ${data[0]?.id}` : data?.message || data);
      if (Array.isArray(data) && data[0]) {
        console.log('   columns:', Object.keys(data[0]).join(', '));
      }
    } catch (e) {
      console.log(tbl, 'error:', e.message);
    }
  }
}

check();
