<script>
	import Button from '$lib/components/Button.svelte';
	import { page } from '$app/stores';
	import { updateUser } from '$lib/db';

	$: user = $page?.data?.session?.user;

	let formData = {
		username: ''
	};

	async function submit() {
		if (user?.id) {
			const payload = { ...formData, id: user.id, updated_at: new Date() };
			updateUser(payload);
		}
	}
</script>

<section>
	<header class="mt-xl">
		<h1 class="display text-center">Finish setting up <br />your profile</h1>
	</header>
	<form on:submit|preventDefault={submit}>
		<label for="username">Create a username to get started:</label><br />
		<input name="username" type="text" bind:value={formData.username} />

		<Button onClick={submit} disabled={!formData.username}>Continue</Button>
	</form>
</section>

<style>
	section {
		padding: var(--space-md);
	}
</style>
