import { authenticate } from '$lib/utils/auth';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async (event) => {
  return authenticate({ event, onSuccess: '/app/game' });
};
