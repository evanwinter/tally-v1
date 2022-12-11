import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Match } from '$lib/types';

function local(key: string, fallback: Match) {
	if (browser && key) {
		const match = window.localStorage.getItem(key);
		if (match) {
			return JSON.parse(match);
		}
	}

	return fallback;
}

export const match = writable(
	<Match>local('match', {
		game: '',
		players: [],
		outcome: {}
	})
);

match.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('match', JSON.stringify(value));
	}
});
