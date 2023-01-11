import { supabase } from '$lib/db';
import type { Match } from '$lib/types';

// TODO: Copilot wrote this, untested
export async function createMatch(match: Match) {
	const { data, error } = await supabase.from('matches').insert([match]).single();

	if (error) {
		console.error(error);
		throw error;
	}

	return data;
}
