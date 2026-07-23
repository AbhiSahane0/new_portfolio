import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log(url, anonKey, "Credentials");

/** True only when both public env vars are present. */
export const isSupabaseConfigured = Boolean(url && anonKey);

if (!isSupabaseConfigured && process.env.NODE_ENV !== "production") {
  console.warn(
    "[supabase] Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local — the contact form will not send.",
  );
}

// Fall back to harmless placeholders so importing this module never throws at
// build time; callers should gate real requests behind `isSupabaseConfigured`.
const supabase: SupabaseClient = createClient(
  url ?? "https://placeholder.supabase.co",
  anonKey ?? "public-anon-key-placeholder",
);

export default supabase;
