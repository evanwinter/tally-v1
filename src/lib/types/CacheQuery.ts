import type { Match } from '$lib/types';

export interface CacheQuery {
	key: string;
	default: Match;
}
