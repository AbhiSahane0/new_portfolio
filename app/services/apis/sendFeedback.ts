import supabase, { isSupabaseConfigured } from "@/app/services/supabase";

export type FeedbackInput = {
  name: string;
  email: string;
  message: string;
};

export type FeedbackResult = { success: boolean; error?: string };

const EMAIL_RE = /^\S+@\S+\.\S+$/;

/**
 * Sends a contact-form message to the Supabase `feedbacks` table.
 * Uses an insert-only path (no `.select()`), so it works with the locked-down
 * RLS policy where the public anon key can insert but never read rows.
 */
export async function sendFeedback(
  formData: FeedbackInput,
): Promise<FeedbackResult> {
  const name = formData.name.trim();
  const email = formData.email.trim();
  const message = formData.message.trim();

  // Validate up front for a friendly message (mirrors the DB CHECK constraints).
  if (!name || !email || !message) {
    return { success: false, error: "Please fill in every field." };
  }
  if (!EMAIL_RE.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }
  if (message.length > 5000) {
    return { success: false, error: "Message is a bit too long." };
  }
  if (!isSupabaseConfigured) {
    return {
      success: false,
      error:
        "Contact form isn't configured yet. Please email me directly for now.",
    };
  }

  try {
    const { error } = await supabase
      .from("feedbacks")
      .insert({ name, email, message });

    if (error) throw error;
    return { success: true };
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("[sendFeedback]", JSON.stringify(detail));
    return {
      success: false,
      error: "Couldn't send right now. Please try again in a moment.",
    };
  }
}
