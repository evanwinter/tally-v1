<script>
	import { onMount } from 'svelte';

	const games = [
		{ name: 'Tic Tac Toe', id: 'tictactoe' },
		{ name: 'Connect Four', id: 'connectfour' },
		{ name: 'Chess', id: 'chess' },
		{ name: 'Checkers', id: 'checkers' },
		{ name: 'Go', id: 'go' },
		{ name: 'Poker', id: 'poker' },
		{ name: 'Backgammon', id: 'backgammon' },
		{ name: 'Dominoes', id: 'dominoes' },
		{ name: 'Mancala', id: 'mancala' },
		{ name: 'Reversi', id: 'reversi' },
		{ name: 'Othello', id: 'othello' }
	];

	let query = '';
	let searchInput;

	onMount(() => {
		searchInput.focus();
	});
</script>

<div class="screen">
	<main class="flush-y">
		<header>
			<h1 class="display mt-none">Select a game</h1>

			<div class="my-md">
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
			</div>
		</header>

		<div>
			<ul class="games scroll-x">
				{#each games as game}
					<li>
						<button class="button square mr-sm my-none">
							{game.name}
						</button>
					</li>
				{/each}
			</ul>
		</div>
	</main>
</div>

<style lang="scss">
	main {
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

	button.square {
		--tile-size: calc(100vw / 1.5);
		width: var(--tile-size);
		height: var(--tile-size);
		padding: var(--space-xs);
		display: flex;
		align-items: flex-end;
		line-height: 1;
	}

	li {
		font-size: 6vw;
	}

	@media (min-width: 768px) {
		button.square {
			font-size: 2rem;
			--tile-size: 300px;
		}
	}
</style>
