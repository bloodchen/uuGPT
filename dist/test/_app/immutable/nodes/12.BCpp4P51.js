import{_ as m}from"../chunks/C1FmrZbK.js";import{_ as k}from"../chunks/BheWnx7M.js";import{s as w,e as v,i as g,d as _,z as E,j as h,l as y,m as $,A as b,B as D,n as u}from"../chunks/XjJ2S-dt.js";import{S as x,i as I,a as d,c as A,t as f,g as C,b as L,d as P,m as R,e as S}from"../chunks/BiSmBOS4.js";import{S as O}from"../chunks/Bx04PVku.js";function V(l){let e,t,a;return t=new O({props:{source:l[0]}}),{c(){e=h("main"),L(t.$$.fragment),this.h()},l(o){e=y(o,"MAIN",{class:!0});var s=$(e);P(t.$$.fragment,s),s.forEach(_),this.h()},h(){b(e,"class","max-w-4xl mx-auto px-4 py-8")},m(o,s){g(o,e,s),R(t,e,null),a=!0},p(o,s){const r={};s&1&&(r.source=o[0]),t.$set(r)},i(o){a||(f(t.$$.fragment,o),a=!0)},o(o){d(t.$$.fragment,o),a=!1},d(o){o&&_(e),S(t)}}}function T(l){let e,t="Loading...";return{c(){e=h("div"),e.textContent=t,this.h()},l(a){e=y(a,"DIV",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1vz1a4m"&&(e.textContent=t),this.h()},h(){b(e,"class","text-center")},m(a,o){g(a,e,o)},p:u,i:u,o:u,d(a){a&&_(e)}}}function z(l){let e,t,a,o;const s=[T,V],r=[];function i(n,c){return n[1]?0:1}return e=i(l),t=r[e]=s[e](l),{c(){t.c(),a=v()},l(n){t.l(n),a=v()},m(n,c){r[e].m(n,c),g(n,a,c),o=!0},p(n,[c]){let p=e;e=i(n),e===p?r[e].p(n,c):(C(),d(r[p],1,1,()=>{r[p]=null}),A(),t=r[e],t?t.p(n,c):(t=r[e]=s[e](n),t.c()),f(t,1),t.m(a.parentNode,a))},i(n){o||(f(t),o=!0)},o(n){d(t),o=!1},d(n){n&&_(a),r[e].d(n)}}}let M="2025-03-14",j="2025-03-14";function F(l,e,t){let a="https://forms.gle/KJ58Ggm3Reytv3Cm8";a=a.replace(/(\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b)/g,"`$1`");let o="",s=!0;return E(async()=>{try{const r=localStorage.getItem("locale")||"en",i=await k(Object.assign({"../../locales/docs/privacy.en.md":()=>m(()=>import("../chunks/vFFknRWQ.js"),[],import.meta.url),"../../locales/docs/privacy.es.md":()=>m(()=>import("../chunks/BBxO8S4O.js"),[],import.meta.url),"../../locales/docs/privacy.ru.md":()=>m(()=>import("../chunks/BvNrfJbx.js"),[],import.meta.url),"../../locales/docs/privacy.zh.md":()=>m(()=>import("../chunks/tCGOZeCQ.js"),[],import.meta.url)}),`../../locales/docs/privacy.${r}.md`,5);t(0,o=i.default.toString().replace(/{contactEmail}/g,a).replace(/{writtenDate}/g,M).replace(/{updateDate}/g,j))}catch(r){console.error("Failed to load markdown:",r),t(0,o=`# Error
Fail to Load the page：${r.message}`)}finally{t(1,s=!1)}}),[o,s]}class J extends x{constructor(e){super(),I(this,e,F,z,w,{})}}export{J as component};
