import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Supabase credentials not set');
  process.exit(1);
}

try {
  const supabase = createClient(supabaseUrl, supabaseKey);
  console.log('✅ Supabase client created successfully');
  console.log('✅ URL:', supabaseUrl);
  console.log('✅ Key configured');
  process.exit(0);
} catch (err: any) {
  console.error('❌ Error:', err.message);
  process.exit(1);
}
