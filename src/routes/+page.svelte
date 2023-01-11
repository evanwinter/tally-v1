<script lang="ts">
	import type { Game, Player } from '$lib/types';
	import { onMount } from 'svelte';

	import { match } from '$lib/stores';
	import Button from '$lib/components/Button.svelte';
	import { createGame, createMatch, getGames, getPlayers } from '$lib/db';

	let games: Game[] = [];
	let players: Player[] = [];

	const formData = {
		gameTitle: '',
		playerName: ''
	};

	onMount(() => {
		fetchGames();
		fetchPlayers();
	});

	async function fetchGames() {
		games = await getGames();
	}

	async function fetchPlayers() {
		players = await getPlayers();
	}

	function handleSelectGame(game: Game) {
		if ($match.game.title === game.title) {
			$match.game = {};
		} else {
			$match.game = game;
		}
	}

	function handleSelectPlayer(player: Player) {
		if ($match.players.some(({ id }) => id === player.id)) {
			$match.players = $match.players.filter(({ id }) => id !== player.id);
		} else {
			$match.players = [...$match.players, player];
		}
	}

	function handleSelectWinner(player: Player) {
		if ($match.outcome.winner?.id === player.id) {
			$match.outcome.winner = null;
		} else {
			$match.outcome.winner = player;
		}
	}

	async function handleSubmit() {
		if ($match.game.title && $match.players.length > 0 && $match.outcome.winner) {
			await createMatch($match);
		}
	}

	async function handleClear() {
		match.set({
			game: {},
			players: [],
			outcome: {
				winner: null
			}
		});
	}
</script>

<h1 class="display">New Game</h1>

<p>What did you play?</p>
<form on:submit={async () => createGame({ title: formData.gameTitle })}>
	<input
		type="text"
		bind:value={formData.gameTitle}
		disabled={!!$match.game.title}
		class="mb-sm"
		placeholder={$match.game.title}
	/>
</form>

{#each games as game}
	<Button
		classes="mr-xs mb-xs"
		selected={$match.game.title === game.title}
		onClick={() => handleSelectGame(game)}
	>
		{game.title}
	</Button>
{/each}

<p>Who did you play with?</p>
<input
	type="text"
	bind:value={formData.playerName}
	class="mb-sm"
	disabled={$match.players.length > 0}
	placeholder={$match.players.map(({ username }) => username).join(', ')}
/>
{#each players as player}
	<Button
		classes="mr-xs"
		selected={$match.players.some(({ id }) => id === player.id)}
		onClick={() => handleSelectPlayer(player)}
	>
		{player.username}
	</Button>
{/each}

<p>Who won?</p>
{#each $match.players as player}
	<Button
		classes="mr-xs"
		selected={$match.outcome.winner?.id === player.id}
		onClick={() => handleSelectWinner(player)}
	>
		{player.username}
	</Button>
{/each}

<nav class="flex bg-white p-sm border-top color-black-10">
	<Button onClick={handleSubmit}>Submit</Button>
	<Button onClick={handleClear}>Clear</Button>
</nav>

<style>
	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>
