<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	import Button from '$lib/components/Button.svelte';
	import { getUser, supabase, updateUser } from '$lib/db';
	import { page } from '$app/stores';

	$: session = $page.data.session as AuthSession;

	const formData = {
		username: '',
		avatarUrl: '',
		fullName: ''
	};

	const formState = {
		loading: false,
		error: ''
	};

	onMount(() => {
		getProfile();
	});

	const getProfile = async () => {
		try {
			formState.loading = true;

			const data = await getUser(session.user.id);

			if (data) {
				formData.username = data.username;
				formData.avatarUrl = data.avatar_url;
				formData.fullName = data.full_name;
			}

			// if (error && status !== 406) throw error;
		} catch (error) {
			if (error instanceof Error) {
				formState.error = error.message;
			}
		} finally {
			formState.loading = false;
		}
	};

	async function updateProfile() {
		try {
			formState.loading = true;

			const payload = {
				id: session.user.id,
				username: formData.username,
				avatar_url: formData.avatarUrl,
				full_name: formData.fullName
			};

			await updateUser(payload);
		} catch (error) {
			if (error instanceof Error) {
				formState.error = error.message;
			}
		} finally {
			formState.loading = false;
		}
	}

	async function signOut() {
		try {
			formState.loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		} finally {
			formState.loading = false;
		}
	}

	function clearError() {
		formState.error = '';
	}
</script>

<h1 class="display">Your Account</h1>

<form on:change={clearError} on:submit|preventDefault={updateProfile}>
	{#if formState.error}
		<div class="border br-sm p-sm color-error">{formState.error}</div>
	{/if}

	<div class="my-sm">
		<label for="full_name">Full Name</label>
		<input id="full_name" type="text" bind:value={formData.fullName} />
	</div>
	<div class="my-sm">
		<label for="username">Username</label>
		<input id="username" type="text" bind:value={formData.username} />
	</div>
	<div class="my-sm">
		<label for="email">Email</label>
		<input id="email" type="text" value={session.user.email} disabled />
	</div>
	<div class="flex gap-xs mt-md align-start">
		<Button classes="primary" onClick={updateProfile} disabled={formState.loading}>Save</Button>
		<Button onClick={signOut} disabled={formState.loading}>Sign Out</Button>
	</div>
</form>
