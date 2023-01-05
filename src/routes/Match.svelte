<script lang="ts">
	import { onMount } from 'svelte';
	import { match } from '$lib/stores/match';
	import { supabase } from '$lib/db/supabaseClient';
	import Button from '$lib/components/Button.svelte';

	export let session: any;

	$: game = $match.game;
	$: players = $match.players;
	$: winner = $match.outcome.winner;

	let currentPlayer = '';

	let newGame = '';
	let recentGames = [
		{ name: 'Settlers of Catan', id: 'settlersofcatan' },
		{ name: 'Gin Rummy', id: 'ginrummy' },
		{ name: 'Chess', id: 'chess' }
	];

	let newPlayer = '';
	let recentPlayers = [
		{ name: 'Evan', id: 'evan' },
		{ name: 'Emily', id: 'emily' },
		{ name: 'Frankie', id: 'frankie' }
	];

	let newWinner = '';

	function listPlayers() {
		return players.join(', ');
	}

	function setGame(name: string) {
		game = name;
		newGame = '';
	}

	function togglePlayer(name: string) {
		if (players.includes(name)) {
			players = players.filter((player) => player !== name);
		} else {
			players = [...players, name];
		}

		newPlayer = '';
	}

	onMount(() => {
		getCurrentUser();
	});

	async function getCurrentUser() {
		const { user } = session;
		if (user) {
			const { data } = await supabase
				.from('profiles')
				.select('username')
				.eq('id', session.user.id)
				.single();
			if (data) {
				currentPlayer = data.username;
			}
		}
	}
</script>

<div class="mw-lg">
	<h1 class="display">
		I played

		{#if game}
			<span class="game">{game}</span>
		{:else}
			...
			<span class="new-game">
				<input type="text" bind:value={newGame} />
				{#if !newGame}
					<span class="suggested">
						{#each recentGames as recentGame}
							<button class="button" on:click={() => setGame(recentGame.name)}>
								{recentGame.name}
							</button>
						{/each}
					</span>
				{/if}
			</span>
		{/if}

		{#if game}
			with

			<span>
				<input type="text" bind:value={newPlayer} />
				{#if newPlayer}
					<button class="button new-button">+</button>
				{:else}
					<span class="suggested">
						{#each recentPlayers as recentPlayer}
							<Button onClick={() => togglePlayer(recentPlayer.name)}>
								{recentPlayer.name}
							</Button>
						{/each}
					</span>
				{/if}
			</span>

			<!-- {#if players.length > 0}
				<span class="players">{listPlayers()}</span>
			{:else}
			{/if} -->
		{/if}

		{#if players.length > 0}
			and

			{#if winner}
				<span class="winner">
					{#if winner === currentPlayer}
						I ({winner})
					{:else}
						{winner}
					{/if}
				</span>
			{:else}
				<div style="width: 100%; position: relative;">
					<input type="text" bind:value={newWinner} />
					<span class="suggested">
						<Button onClick={() => (winner = currentPlayer)}>
							I ({currentPlayer})
						</Button>
						{#each players as player}
							<Button onClick={() => (winner = player)}>
								{player}
							</Button>
						{/each}
					</span>
				</div>
			{/if}
			won.
		{/if}
	</h1>

	{#if game && players.length > 0 && winner}
		<div class="mt-xl">
			<Button classes="primary mr-sm" onClick={() => console.log('Saving match', $match)}>
				Save
			</Button>
			<Button onClick={() => (winner = '')}>Edit</Button>
		</div>
	{/if}
</div>

<style>
	input[type='text'] {
		width: auto;
		padding-top: 0;
		max-width: calc(100% * (2 / 3));
	}

	span {
		position: relative;
	}

	.suggested button {
		font-size: 30%;
		background-color: #f1f1ef;
		border-radius: 16px;
		border: none;
		color: #b8b8b8;
		flex-shrink: 0;
	}

	button.new-button {
		position: absolute;
		right: 0;
		top: 0;
		color: var(--color-white);
		background-color: var(--color-gray);
		line-height: 1;
		height: auto;
		padding: 0;
		margin: 0;
		display: flex;
	}

	.suggested {
		display: flex;
		gap: var(--space-sm);
		position: absolute;
		left: 0;
	}

	span.game {
		color: #375f9c;
	}
	span.players {
		color: #ec4c27;
	}
	span.winner {
		color: #6b9650;
	}
</style>
