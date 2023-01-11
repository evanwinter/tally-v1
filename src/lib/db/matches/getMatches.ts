import { supabase } from '$lib/db';

export async function getMatches() {
	const { data, error } = await supabase.from('matches').select('*');

	if (error) {
		console.error(error);
		throw error;
	}

	return data;
}
