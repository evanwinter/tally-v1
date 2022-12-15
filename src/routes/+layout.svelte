<script lang="ts">
	import { supabase } from '$lib/db/supabaseClient';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import '$lib/styles/index.scss';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => subscription.unsubscribe();
	});
</script>

<div class="screen">
	<div>
		<slot />
	</div>
</div>

<style>
	.screen {
		position: fixed;
		top: 0;
		width: 100vw;
		height: 100vh;
		overflow: none;
	}
</style>
