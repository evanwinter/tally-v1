import type { Game } from '$lib/types';
import { supabase } from '$lib/db';

export async function createGame(payload: Game) {
	const { data, error } = await supabase.from('games').insert([payload]);

	console.log(data);

	if (error) {
		console.error(error);
		throw error;
	}

	return data;
}
