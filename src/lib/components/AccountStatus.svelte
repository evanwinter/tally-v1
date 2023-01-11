<script lang="ts">
	import { user } from '$lib/stores';
	export let active: boolean;
</script>

{#if $user}
	<div class="container p-xxs px-xs flex align-center border color-black bg-white" class:active>
		<div class="circle bg-success mr-xxs border" />
		<a href="/account" class="pr-xxs color-black">
			{$user.username}
		</a>
	</div>
{:else}
	<a href="/sign-in" class="button">Sign in</a>
{/if}

<style>
	.container {
		border-radius: 1rem;
	}

	a {
		font-size: 0.9em;
	}
</style>
