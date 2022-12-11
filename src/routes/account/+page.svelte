<script>
	import { page } from '$app/stores';
	import Account from './Account.svelte';
</script>

<svelte:head>
	<title>Account</title>
</svelte:head>

<Account session={$page.data.session} />
