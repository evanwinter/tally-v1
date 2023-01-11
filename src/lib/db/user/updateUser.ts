import { supabase } from '$lib/db';
import type { User } from '$lib/types';

export async function updateUser(payload: User) {
	const { data, error } = await supabase
		.from('profiles')
		.upsert({ ...payload, updated_at: new Date() });

	if (error) {
		console.error(error);
		throw error;
	}

	return data;
}
