<script>
	import { supabase } from '$lib/db';

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
		<input
			type="submit"
			class="button block"
			value={loading ? 'Loading' : 'Send Login link'}
			disabled={loading}
		/>
	</div>
</form>
