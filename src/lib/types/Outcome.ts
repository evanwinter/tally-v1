import type { Player } from './Player';

export interface Outcome {
	winner: Player | null;
	scores?: {
		[player: string]: number;
	};
}
