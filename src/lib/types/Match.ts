import type { Outcome } from './Outcome';

export interface Match {
	game: string;
	players: string[];
	outcome: Outcome;
}
