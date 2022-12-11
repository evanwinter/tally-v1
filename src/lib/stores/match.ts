import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { CacheQuery, Match } from '$lib/types';

function cached(query: CacheQuery): Match {
	if (browser && query.key) {
		const match = window.localStorage.getItem(query.key);
		if (match) {
			return JSON.parse(match);
		}
	}

	return query.default;
}

export const match = writable(
	cached({
		key: 'match',
		default: {
			game: '',
			players: [],
			outcome: {}
		}
	})
);

match.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('match', JSON.stringify(value));
	}
});
