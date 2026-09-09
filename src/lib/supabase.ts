import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_KEY;

let clientInstance: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (clientInstance) return clientInstance;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      'Missing Supabase configuration. Set PUBLIC_SUPABASE_URL and PUBLIC_SUPABASE_KEY.'
    );
  }

  clientInstance = createClient(supabaseUrl, supabaseKey);
  return clientInstance;
}
