import * as shared from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-a8b51e11.js';
export { shared };
export { server };
export const imports = ["_app/immutable/components/pages/_layout.svelte-a8b51e11.js","_app/immutable/chunks/index-b7867e78.js","_app/immutable/chunks/supabaseClient-63289d63.js","_app/immutable/chunks/index-5cf64a95.js","_app/immutable/chunks/singletons-18b931dc.js","_app/immutable/modules/pages/_layout.js-c0274dbd.js","_app/immutable/chunks/_layout-d4931744.js","_app/immutable/chunks/index-5cf64a95.js"];
export const stylesheets = ["_app/immutable/assets/_layout-de61646d.css"];
export const fonts = [];
