import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect, type ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async (event) => {
	const session = await getServerSession(event);
	if (!session?.user) {
		throw redirect(302, '/sign-in');
	}

	return {};
};
