import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zopjmmofmawoxdbfdubc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvcGptbW9mbWF3b3hkYmZkdWJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5MzE5MDYsImV4cCI6MjAxOTUwNzkwNn0.cheXL7LXAkcNmQ4k8jXzhMyqUSJN_bR1dZHMhkTN4DM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
