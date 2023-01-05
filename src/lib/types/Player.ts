export interface AnonymousPlayer {
	id: string;
	display_name: string;
	username: string;
}

export interface Player {
	id: string;
	display_name: string;
	full_name: string;
	username: string;
	friends: [];
}
