import { writable } from 'svelte-local-storage-store';
import type { Match } from '$lib/types';

const initialMatch: Match = {
	game: {},
	players: [],
	outcome: {
		winner: null
	}
};

export const match = writable<Match>('tally:match', initialMatch);
