import supabase from "@/app/services/supabase";

export async function sendFeedback(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { data, error } = await supabase
      .from("feedbacks")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ])
      .select();

    if (error) throw error;

    return { success: true, data };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}
