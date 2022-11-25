import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';

const supabaseUrl = 'https://tfjzflqmeclgwyjmdjot.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmanpmbHFtZWNsZ3d5am1kam90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU1OTA0NzYsImV4cCI6MTk4MTE2NjQ3Nn0.T2E1qNkwoeQepNEi0p69PN4hjfAQAHzbqma0q8os8is';

export async function signIn(email: string) {
  return await supabase.auth.signInWithOtp({
    email,
  });
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
