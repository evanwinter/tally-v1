import type { Toast } from '$lib/types';
import { writable } from 'svelte/store';

export const toasts = writable<Toast[]>([]);

export const addToast = (toast: Toast) => {
	toasts.update((toasts) => [...toasts, toast]);
};

export const removeToast = (id: string) => {
	toasts.update((toasts) => toasts.filter((toast) => toast.id !== id));
};

export const clearToasts = () => {
	toasts.set([]);
};
