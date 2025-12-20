import { 
    createClient 
} 
from "@supabase/supabase-js";

const SUPABASE_URL = "https://waifbhduwgnxpzjimlws.supabase.co";
const SUPABASE_KEY = "sb_publishable_qhCAFONj4oYBYqAyohZkpg_woCSGKTa";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
