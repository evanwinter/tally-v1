import { c as create_ssr_component, d as add_attribute, f as each, e as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1lh0mhl.svelte-1lh0mhl{padding:var(--space-lg) var(--space-sm) var(--space-sm);height:100vh;display:flex;flex-direction:column;justify-content:space-between}.scroll-x.svelte-1lh0mhl.svelte-1lh0mhl{display:flex;flex-wrap:none;overflow-x:scroll;overflow-y:hidden;scroll-snap-type:x mandatory;scroll-behavior:smooth}.scroll-x.svelte-1lh0mhl>.svelte-1lh0mhl{scroll-snap-align:start}input.svelte-1lh0mhl.svelte-1lh0mhl{font-size:min(7vw, 4rem)}.games.svelte-1lh0mhl.svelte-1lh0mhl{padding-inline-start:var(--space-sm);scroll-padding-inline-start:var(--space-sm);margin-inline:calc(var(--space-sm) * -1)}button.square.svelte-1lh0mhl.svelte-1lh0mhl{--tile-size:calc(100vw / 1.5);width:var(--tile-size);height:var(--tile-size);padding:var(--space-xs);display:flex;align-items:flex-end;line-height:1}li.svelte-1lh0mhl.svelte-1lh0mhl{font-size:6vw}@media(min-width: 768px){button.square.svelte-1lh0mhl.svelte-1lh0mhl{font-size:2rem;--tile-size:300px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const games = [
    { name: "Tic Tac Toe", id: "tictactoe" },
    { name: "Connect Four", id: "connectfour" },
    { name: "Chess", id: "chess" },
    { name: "Checkers", id: "checkers" },
    { name: "Go", id: "go" },
    { name: "Poker", id: "poker" },
    { name: "Backgammon", id: "backgammon" },
    { name: "Dominoes", id: "dominoes" },
    { name: "Mancala", id: "mancala" },
    { name: "Reversi", id: "reversi" },
    { name: "Othello", id: "othello" }
  ];
  let query = "";
  let searchInput;
  $$result.css.add(css);
  return `<div class="${"screen"}"><main class="${"flush-y svelte-1lh0mhl"}"><header><h1 class="${"display mt-none"}">Select a game</h1>

			<div class="${"my-md"}"><label class="${"sr-only"}" for="${"search"}">Search</label>
				<input placeholder="${"..."}" type="${"text"}" id="${"search"}" name="${"search"}" autocomplete="${"off"}" class="${"svelte-1lh0mhl"}"${add_attribute("value", query, 0)}${add_attribute("this", searchInput, 0)}></div></header>

		<div><ul class="${"games scroll-x svelte-1lh0mhl"}">${each(games, (game) => {
    return `<li class="${"svelte-1lh0mhl"}"><button class="${"button square mr-sm my-none svelte-1lh0mhl"}">${escape(game.name)}</button>
					</li>`;
  })}</ul></div></main>
</div>`;
});
export {
  Page as default
};
