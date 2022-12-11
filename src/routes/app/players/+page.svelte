<script lang="ts">
	import { fade } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { match } from '$lib/stores/match';
	import { onMount } from 'svelte';

	const recentPlayers = [
		{ name: 'Emily Buchberger', id: 'emilybuchberger' },
		{ name: 'Evan Winter', id: 'evanwinter' }
	];

	function togglePlayer(player: string) {
		if ($match?.players?.includes(player)) {
			$match.players = $match.players.filter((p) => p !== player);
		} else {
			$match.players = [...$match.players, player];
		}
	}

	onMount(() => {
		if (!$match.game) {
			goto('/app/game');
		}
	});
</script>

<main class="flush-y">
	<form class="my-md">
		<header>
			<h1 class="display mt-none">Who played {$match?.game}?</h1>
		</header>

		<div>
			<h2>Recent Players</h2>
			<ul class="games scroll-x">
				{#each recentPlayers as recentPlayer}
					<li>
						<button
							class="button square mr-sm my-none"
							class:selected={$match?.players?.includes(recentPlayer.name)}
							on:click|preventDefault={() => togglePlayer(recentPlayer.name)}
						>
							{recentPlayer.name}
							<span style="position: absolute; top: var(--space-xs); right: var(--space-xs);">
								✅
							</span>
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</form>

	{#if $match.players.length > 0}
		<div
			style="
				position: fixed;
				bottom: var(--space-sm);
			"
		>
			<button in:fade class="button" on:click={() => goto('/app/outcome')}> Next </button>
		</div>
	{/if}
</main>

<style lang="scss">
	form {
		padding: var(--space-lg) var(--space-sm) var(--space-sm);
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.scroll-x {
		display: flex;
		flex-wrap: none;
		overflow-x: scroll;
		overflow-y: hidden;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;

		> * {
			scroll-snap-align: start;
		}
	}

	.games {
		padding-inline-start: var(--space-sm);
		scroll-padding-inline-start: var(--space-sm);
		margin-inline: calc(var(--space-sm) * -1);
	}

	li {
		font-size: 6vw;
	}
</style>
