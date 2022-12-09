import { c as create_ssr_component, d as add_attribute, b as subscribe, v as validate_component } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import "../../../chunks/supabaseClient.js";
const Account = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { session } = $$props;
  let username = null;
  let website = null;
  if ($$props.session === void 0 && $$bindings.session && session !== void 0)
    $$bindings.session(session);
  return `<form><div><label for="${"email"}">Email</label>
		<input id="${"email"}" type="${"text"}"${add_attribute("value", session.user.email, 0)} disabled></div>
	<div><label for="${"username"}">Name</label>
		<input id="${"username"}" type="${"text"}"${add_attribute("value", username, 0)}></div>
	<div><label for="${"website"}">Website</label>
		<input id="${"website"}" type="${"website"}"${add_attribute("value", website, 0)}></div>

	<div><input type="${"submit"}" class="${"button"}"${add_attribute("value", "Update", 0)} ${""}></div>

	<div><button class="${"button"}" ${""}>Sign Out</button></div></form>`;
});
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  return `<form><div><input class="${"inputField"}" type="${"email"}" placeholder="${"Your email"}"${add_attribute("value", email, 0)}></div>
	<div><input type="${"submit"}" class="${"button block"}"${add_attribute("value", "Send Login link", 0)} ${""}></div></form>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-kxjkt8_START -->${$$result.title = `<title>Sign in</title>`, ""}<!-- HEAD_svelte-kxjkt8_END -->`, ""}

${!$page.data.session ? `${validate_component(Auth, "Auth").$$render($$result, {}, {}, {})}` : `${validate_component(Account, "Account").$$render($$result, { session: $page.data.session }, {}, {})}`}`;
});
export {
  Page as default
};
