import { writable } from 'svelte-local-storage-store';
import type { Player } from '$lib/types';

export const players = writable<Player[] | null>('tally:players', null);
