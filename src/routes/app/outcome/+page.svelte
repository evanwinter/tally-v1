<script lang="ts">
	import { match } from '$lib/stores/match';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	function setWinner(player: string) {
		$match.outcome = {
			...$match.outcome,
			winner: player
		};
	}

	onMount(() => {
		if (!$match.game) {
			goto('/app/game');
		} else if (!$match.players.length) {
			goto('/app/players');
		}
	});
</script>

<main class="flush-y">
	<form class="my-md">
		<header>
			<h1 class="display mt-none">Who won?</h1>
		</header>

		<div>
			{#each $match.players as player}
				<button class="button square" type="submit" on:click={() => setWinner(player)}>
					{player}
				</button>
			{/each}
		</div>
	</form>
</main>

<style lang="scss">
	form {
		padding: var(--space-lg) var(--space-sm) var(--space-sm);
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
