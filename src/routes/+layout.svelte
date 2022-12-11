<script>
	import { supabase } from '$lib/db/supabaseClient';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { match as _match } from '$lib/stores/match.ts';
	import '$lib/styles/index.scss';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			supabase.invalidate();
		});

		return () => subscription.unsubscribe();
	});

	// Listen for changes to the match store and log the outcome
	_match.subscribe((value) => {
		console.log('match store changed to', value);
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
