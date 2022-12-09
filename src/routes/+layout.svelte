<script>
	import { supabase } from '$lib/db/supabaseClient';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import '$lib/styles/index.scss';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate();
		});

		return () => subscription.unsubscribe();
	});
</script>

<div>
	<slot />
</div>

<style>
	div {
		position: fixed;
		top: 0;
		width: 100vw;
		height: 100vh;
		overflow: none;
	}
</style>
