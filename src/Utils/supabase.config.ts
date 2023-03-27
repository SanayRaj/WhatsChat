import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://hgsavwomkkkiazkasyne.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhnc2F2d29ta2traWF6a2FzeW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3NjA4MjEsImV4cCI6MTk5NTMzNjgyMX0.tQmyzvdNVsrArvW2YGqwbDPqopMNDeyB9FyhdWWTsg8';

export const SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
