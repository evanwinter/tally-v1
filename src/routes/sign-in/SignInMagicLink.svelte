<script>
	import Button from '$lib/components/Button.svelte';
	import { supabase } from '$lib/db';

	const formData = {
		email: ''
	};

	const formState = {
		error: '',
		loading: false
	};

	const signIn = async () => {
		try {
			formState.loading = true;
			const { error } = await supabase.auth.signInWithOtp(formData);
			if (error) {
				throw error;
			}

			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				formState.error = error.message;
			}
		} finally {
			formState.loading = false;
		}
	};
</script>

<form class="p-sm" on:submit|preventDefault={signIn}>
	<h1 class="display">Sign in</h1>
	{#if formState.error}
		<div class="border br-sm color-error p-sm">{formState.error}</div>
	{/if}
	<div class="my-sm">
		<label for="email">Email</label>
		<input type="email" placeholder="Your email" bind:value={formData.email} />
	</div>
	<div class="mt-md">
		<Button onClick={signIn} disabled={formState.loading}>
			{formState.loading ? 'Loading' : 'Send Login Link'}
		</Button>
	</div>
</form>
