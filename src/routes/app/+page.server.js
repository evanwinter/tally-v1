import { authenticate } from '$lib/utils/auth';
export const load = async (event) => authenticate({ event, onSuccess: '/app/game' });
