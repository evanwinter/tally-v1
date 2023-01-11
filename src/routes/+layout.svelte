<script lang="ts">
	import { supabase } from '$lib/db';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import AccountStatus from '$lib/components/AccountStatus.svelte';
	import '$lib/styles/index.scss';

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange(() => invalidate('supabase:auth'));
		return () => data.subscription.unsubscribe();
	});
</script>

<div class="screen">
	<nav class="p-sm flex justify-between">
		<a
			href="/"
			class="button primary"
			aria-current="page"
			class:active={$page.url.pathname === '/'}
		>
			New +
		</a>
		<AccountStatus active={$page.url.pathname === '/account'} />
	</nav>
	<div class="p-sm">
		<slot />
	</div>
</div>

<style>
	/* .screen {
		position: fixed;
		top: 0;
		width: 100vw;
		height: 100vh;
		overflow: none;
	} */
</style>
