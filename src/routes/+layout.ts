import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import type { Load } from '@sveltejs/kit';

// (client-side) get the current supabase auth session
export const load: Load = async (event) => {
	const { session } = await getSupabase(event);
	return { session };
};
