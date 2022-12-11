import { getServerSession } from '@supabase/auth-helpers-sveltekit';
import { redirect } from '@sveltejs/kit';

/**
 * Authenticate a user and handle redirects
 * @param {import{'@sveltejs/kit'}.Load} event - SvelteKit load event
 * @param {string} [onError] - URL to redirect to if not authenticated
 * @param {string} [onSuccess] - URL to redirect to if authenticated
 * @returns {Promise<void>}
 */
export async function authenticate({ event, onError = '/auth', onSuccess }) {
	let session = await getServerSession(event);
	let authenticated = session?.user;

	if (!authenticated) {
		throw redirect(302, onError);
	} else {
		if (onSuccess) {
			throw redirect(302, onSuccess);
		}
	}
}
