import { createClient } from "./server";

export async function verifyUser() {
  const supabaseApi = createClient();
  const {
    data: { user },
    error,
  } = await supabaseApi.auth.getUser();

  if (error || !user) {
    return { user: null, error: error?.message || "Unauthorized" };
  }

  return { user, error: null };
}
