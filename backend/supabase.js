const { 
    createClient 
} = require("@supabase/supabase-js");

const supabaseUrl = "https://waifbhduwgnxpzjimlws.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhaWZiaGR1d2dueHB6amltbHdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjIyNTQ2MiwiZXhwIjoyMDgxODAxNDYyfQ.dRxqh6CaPDZttCvwjcA3nGdAJk5yRvYh_vMrdq0wL-4";
const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = { supabase };