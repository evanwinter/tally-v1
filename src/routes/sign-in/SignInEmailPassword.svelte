<script>
	import { supabase } from '$lib/db';
	import Button from '$lib/components/Button.svelte';

	let formData = {
		email: '',
		password: ''
	};

	let formState = {
		error: '',
		loading: false
	};

	async function handleSubmit() {
		try {
			formState.loading = true;

			// TODO
			const { data, error } = await supabase.auth.signInWithPassword(formData);
			if (error) throw error;
			console.log(data);
		} catch (error) {
			if (error instanceof Error) {
				formState.error = error.message;
			}
		} finally {
			formState.loading = false;
		}
	}
</script>

<form class="p-sm" on:submit|preventDefault={handleSubmit}>
	<div class="my-sm">
		<label for="email">Email:</label>
		<input type="email" name="email" bind:value={formData.email} />
	</div>

	<div class="my-sm">
		<label for="password">Password:</label>
		<input type="password" name="password" bind:value={formData.password} />
	</div>

	<div class="mt-md">
		<Button onClick={handleSubmit} disabled={formState.loading}>Submit</Button>
	</div>
</form>
