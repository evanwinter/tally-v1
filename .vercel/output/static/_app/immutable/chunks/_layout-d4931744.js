import{i as b,a as g,g as f,b as y}from"./index-5cf64a95.js";function S(e){const{supabaseUrl:t,supabaseKey:n,options:s,globalInstance:r}=f();return b()?r:g(t,n,{...s,auth:{autoRefreshToken:!1,storage:{async getItem(u){var l;let o=null;if(typeof((l=e.data)==null?void 0:l.session)<"u")o=e.data.session;else{const a=await e.parent();o=a==null?void 0:a.session}return o?JSON.stringify(o):null},removeItem(u){},setItem(u,o){}}}})}const p=Symbol("supabase-client");function C(e){const{cookies:t,request:n}=e,s=e.locals;if(s[p])return s[p];const{supabaseUrl:r,supabaseKey:u,options:o,cookieOptions:l}=f(),a=y({supabaseUrl:r,supabaseKey:u,getCookie(i){return t.get(i)},setCookie(i,c,d){t.set(i,c,d)},getRequestHeader(i){var c;return(c=n.headers.get(i))!=null?c:void 0},options:o,cookieOptions:l});return s[p]=a,a}async function k(e){const t=e,n=e;let s;if(typeof n.depends=="function"&&n.depends("supabase:auth"),t.locals)s=C(t);else if(typeof n.parent=="function")s=S(n);else throw new Error("invalid event");const{data:{session:r}}=await s.auth.getSession();return{supabaseClient:s,session:r}}const m=async e=>{const{session:t}=await k(e);return{session:t}},h=Object.freeze(Object.defineProperty({__proto__:null,load:m},Symbol.toStringTag,{value:"Module"}));export{h as _,m as l};
