import { supabase } from '$lib/db';

export async function createPlayer(payload: any) {
	const { data, error } = await supabase.from('players').insert([payload]);

	if (error) {
		console.error(error);
		throw error;
	}

	return data;
}
