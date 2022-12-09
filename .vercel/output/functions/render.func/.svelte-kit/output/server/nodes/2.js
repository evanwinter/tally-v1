import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-cde3d9b9.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-cde3d9b9.js","_app/immutable/chunks/index-b7867e78.js"];
export const stylesheets = [];
export const fonts = [];
