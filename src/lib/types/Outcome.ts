export interface Outcome {
	winner?: string;
	scores?: {
		[player: string]: number;
	};
}
