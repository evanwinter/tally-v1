import { writable } from 'svelte-local-storage-store';
import type { Game } from '$lib/types';

export const games = writable<Game[] | null>('tally:games', null);
