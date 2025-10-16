// supabase.ts
import ENV from "@/configs/ENV";
import { createClient } from "@supabase/supabase-js";

// اینا رو مستقیم اینجا وارد کن
const SUPABASE_URL = ENV.SUPABASE_URL;
const SUPABASE_ANON_KEY = ENV.SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
