export interface Toast {
	id: string;
	text: string;
	type: 'success' | 'error';
	duration: number;
	dismiss: () => void;
}
