import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
import "../../../chunks/supabaseClient.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  return `<form><div><input class="${"inputField"}" type="${"email"}" placeholder="${"Your email"}"${add_attribute("value", email, 0)}></div>
	<div><input type="${"submit"}" class="${"button mt-sm"}"${add_attribute("value", "Send Login link", 0)} ${""}></div></form>`;
});
export {
  Page as default
};
