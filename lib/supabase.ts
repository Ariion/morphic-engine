import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.warn('⚠️ Attention: NEXT_PUBLIC_SUPABASE_URL n\'est pas définie dans l\'environnement.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);