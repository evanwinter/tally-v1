<script>
	import Button from '$lib/components/Button.svelte';
	import { supabase } from '$lib/db/supabaseClient';

	let loading = false;
	let email = '';

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signInWithOtp({ email });
			if (error) {
				throw error;
			}

			alert('Check your email for the login link!');
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<form on:submit|preventDefault={handleLogin}>
	<div>
		<input class="inputField" type="email" placeholder="Your email" bind:value={email} />
	</div>
	<div>
		<Button classes="mt-sm" onClick={handleLogin} disabled={loading}>
			{loading ? 'Loading' : 'Send Login Link'}
		</Button>
	</div>
</form>
