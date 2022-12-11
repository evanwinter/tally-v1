import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const session = await getServerSession(event);
	if (!session?.user) {
		throw redirect(302, '/auth');
	}

	return {};
};
