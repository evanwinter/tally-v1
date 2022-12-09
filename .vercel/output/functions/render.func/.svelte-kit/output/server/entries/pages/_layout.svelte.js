import { c as create_ssr_component } from "../../chunks/index.js";
import "../../chunks/supabaseClient.js";
const index = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-15r891b{position:fixed;top:0;width:100vw;height:100vh;border:1px solid red;overflow:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"svelte-15r891b"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
