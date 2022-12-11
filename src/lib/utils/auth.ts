import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

interface AuthenticateParams {
	event: any;
	onError?: string;
	onSuccess?: string;
}

export const authenticate = async ({ event, onError = '/auth', onSuccess }: AuthenticateParams) => {
	let session = await getServerSession(event);
	let authenticated = session?.user;

	if (!authenticated) {
		throw redirect(302, onError);
	} else {
		if (onSuccess) {
			throw redirect(302, onSuccess);
		}
	}
};
