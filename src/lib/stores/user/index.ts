import { writable } from 'svelte-local-storage-store';
import type { User } from '$lib/types';

export const user = writable<User | null>('tally:user', null);
