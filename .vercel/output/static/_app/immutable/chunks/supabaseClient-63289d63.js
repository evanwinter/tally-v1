import{c as b,s as h}from"./index-5cf64a95.js";const c="@supabase/auth-helpers-sveltekit",g="0.8.6";function A(t,s,a,e){var n,_;const r={...a,global:{...a==null?void 0:a.global,headers:{...(n=a==null?void 0:a.global)==null?void 0:n.headers,"X-Client-Info":`${c}@${g}`}},auth:{storageKey:(_=e==null?void 0:e.name)!=null?_:"supabase-auth-token"}},u=b({supabaseUrl:t,supabaseKey:s,options:r,cookieOptions:e});return h({globalInstance:u,supabaseUrl:t,supabaseKey:s,options:r,cookieOptions:{name:"supabase-auth-token",path:"/",sameSite:"lax",maxAge:1e3*60*60*24*365,...e}}),u}let l={};function m(t){l=t}const C=A(l.PUBLIC_SUPABASE_URL,l.PUBLIC_SUPABASE_ANON_KEY);export{C as a,m as s};
