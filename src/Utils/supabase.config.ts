import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = '<REPLACE_WITH_YOURS_URL>';
const supabaseAnonKey = '<REPLACE_WITH_YOURS_ANNON_KEY>';

export const Supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
