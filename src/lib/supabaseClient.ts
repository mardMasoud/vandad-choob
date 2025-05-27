// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// خواندن آدرس URL و کلید anon پروژه Supabase از متغیرهای محیطی
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// یک بررسی ساده برای اطمینان از اینکه متغیرها از فایل .env.local خوانده شده‌اند
if (!supabaseUrl) {
  throw new Error("Supabase URL is missing. Did you create a .env.local file with NEXT_PUBLIC_SUPABASE_URL?");
}
if (!supabaseAnonKey) {
  throw new Error("Supabase Anon Key is missing. Did you create a .env.local file with NEXT_PUBLIC_SUPABASE_ANON_KEY?");
}

// ایجاد و اکسپورت کردن کلاینت Supabase
// این کلاینت برای تمام ارتباطات ما با Supabase استفاده خواهد شد
export const supabase = createClient(supabaseUrl, supabaseAnonKey);