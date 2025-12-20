const { 
    createClient 
} = require("@supabase/supabase-js");

const supabaseUrl = "https://waifbhduwgnxpzjimlws.supabase.co";
const supabaseKey = "sb_publishable_qhCAFONj4oYBYqAyohZkpg_woCSGKTa";
const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = { supabase };