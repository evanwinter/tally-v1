import { get } from 'svelte/store';
import { supabase } from '$lib/db';
import { games as gamesStore } from '$lib/stores';

export async function getGames() {
	const games = get(gamesStore);
	if (games) {
		return games;
	}

	const { data, error } = await supabase.from('games').select('*');
	if (error) {
		throw error;
	}

	gamesStore.set(data);

	return data;
}
