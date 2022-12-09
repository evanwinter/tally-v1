import { getServerSession } from "@supabase/auth-helpers-sveltekit";
import { r as redirect } from "../../../chunks/index2.js";
const load = async (event) => {
  const session = await getServerSession(event);
  if (!(session == null ? void 0 : session.user)) {
    throw redirect(302, "/");
  }
  return {};
};
export {
  load
};
