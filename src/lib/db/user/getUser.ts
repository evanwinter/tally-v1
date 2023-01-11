import { get } from 'svelte/store';
import { supabase } from '$lib/db';
import { user as userStore } from '$lib/stores';

export async function getUser(id: string) {
	const user = get(userStore);
	if (user) {
		return user;
	}

	const { data, error } = await supabase
		.from('profiles')
		.select('id, username, avatar_url, full_name')
		.eq('id', id)
		.single();
	if (error) {
		throw error;
	}

	userStore.set(data);

	return data;
}
