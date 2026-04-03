import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vqhflrkywonqvwpecxsc.supabase.co';
const supabaseAnonKey = 'sb_publishable_yj9NbgSWz2MrdJhbMMHNng_1XlxNL1G';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
