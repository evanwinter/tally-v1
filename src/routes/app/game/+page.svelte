<script lang="ts">
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { match } from '$lib/stores/match';
	import { goto } from '$app/navigation';

	const games = [
		{ name: 'Settlers of Catan', id: 'settlersofcatan' },
		{ name: 'Gin Rummy', id: 'ginrummy' },
		{ name: 'Chess', id: 'chess' },
		{ name: 'Ticket to Ride', id: 'tickettoride' },
		{ name: 'Go', id: 'go' },
		{ name: 'Poker', id: 'poker' },
		{ name: 'Backgammon', id: 'backgammon' },
		{ name: 'Dominoes', id: 'dominoes' },
		{ name: 'Mancala', id: 'mancala' },
		{ name: 'Reversi', id: 'reversi' },
		{ name: 'Othello', id: 'othello' }
	];

	let query = '';
	let searchInput: HTMLInputElement;

	onMount(() => searchInput.focus());

	function toggleGame(game: string) {
		if ($match?.game === game) {
			$match.game = '';
		} else {
			$match.game = game;
		}
	}
</script>

<main class="flush-y">
	<form class="my-md">
		<header>
			<h1 class="display mt-none">What did you play?</h1>

			<label class="sr-only" for="search">Search</label>
			<input
				placeholder="..."
				type="text"
				id="search"
				name="search"
				bind:value={query}
				bind:this={searchInput}
				autocomplete="off"
			/>
		</header>

		<div>
			<h2>Recently Played</h2>
			<ul class="games scroll-x">
				{#each games as game}
					<li>
						<button
							class="button square mr-sm my-none"
							on:click|preventDefault={() => toggleGame(game.name)}
						>
							{game.name}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</form>

	{#if $match.game}
		<div
			style="
				position: fixed;
				bottom: var(--space-sm);
			"
		>
			<button in:fade class="button" on:click={() => goto('/app/players')}> Next </button>
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

	input {
		font-size: min(7vw, 4rem);
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
