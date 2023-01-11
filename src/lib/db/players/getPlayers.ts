import { get } from 'svelte/store';
import { supabase } from '$lib/db';
import { players as playersStore } from '$lib/stores';

export async function getPlayers() {
	const players = get(playersStore);
	if (players) {
		return players;
	}

	const { data, error } = await supabase.from('profiles').select('*');
	if (error) {
		throw error;
	}

	playersStore.set(data);

	return data;
}
