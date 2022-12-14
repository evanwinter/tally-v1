import { supabase } from '$lib/db/supabaseClient.js';

export const load = async () => {
  // Get users from Supabase
  const { data: users, error } = await supabase.from('profiles').select('id, full_name');

  if (error) {
    console.error(error);
    return { error };
  }

  return { users };
};
