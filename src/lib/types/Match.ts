import type { Outcome } from './Outcome';
import type { Game } from './Game';
import type { Player } from './Player';

export interface Match {
	game: Game;
	players: Player[];
	outcome: Outcome;
}
