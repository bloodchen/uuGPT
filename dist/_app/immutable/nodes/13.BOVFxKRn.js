import{_ as m}from"../chunks/C1FmrZbK.js";import{_ as w}from"../chunks/BheWnx7M.js";import{s as E,e as h,i as g,d as _,o as $,j as v,l as b,m as y,A as k,B as D,n as p}from"../chunks/Db3hOLLS.js";import{S as x,i as I,a as d,c as A,t as f,g as C,b as L,d as P,m as R,e as S}from"../chunks/Hw2OSJ_j.js";import{S as O}from"../chunks/Bj3XPhqe.js";function V(l){let e,t,r;return t=new O({props:{source:l[0]}}),{c(){e=v("main"),L(t.$$.fragment),this.h()},l(o){e=b(o,"MAIN",{class:!0});var n=y(e);P(t.$$.fragment,n),n.forEach(_),this.h()},h(){k(e,"class","max-w-4xl mx-auto px-4 py-8")},m(o,n){g(o,e,n),R(t,e,null),r=!0},p(o,n){const a={};n&1&&(a.source=o[0]),t.$set(a)},i(o){r||(f(t.$$.fragment,o),r=!0)},o(o){d(t.$$.fragment,o),r=!1},d(o){o&&_(e),S(t)}}}function T(l){let e,t="Loading...";return{c(){e=v("div"),e.textContent=t,this.h()},l(r){e=b(r,"DIV",{class:!0,"data-svelte-h":!0}),D(e)!=="svelte-1vz1a4m"&&(e.textContent=t),this.h()},h(){k(e,"class","text-center")},m(r,o){g(r,e,o)},p,i:p,o:p,d(r){r&&_(e)}}}function M(l){let e,t,r,o;const n=[T,V],a=[];function i(s,c){return s[1]?0:1}return e=i(l),t=a[e]=n[e](l),{c(){t.c(),r=h()},l(s){t.l(s),r=h()},m(s,c){a[e].m(s,c),g(s,r,c),o=!0},p(s,[c]){let u=e;e=i(s),e===u?a[e].p(s,c):(C(),d(a[u],1,1,()=>{a[u]=null}),A(),t=a[e],t?t.p(s,c):(t=a[e]=n[e](s),t.c()),f(t,1),t.m(r.parentNode,r))},i(s){o||(f(t),o=!0)},o(s){d(t),o=!1},d(s){s&&_(r),a[e].d(s)}}}let j="2025-03-14",z="2025-03-14";function F(l,e,t){let r="https://forms.gle/KJ58Ggm3Reytv3Cm8";r=r.replace(/(\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b)/g,"`$1`");let o="",n=!0;return $(async()=>{try{const a=localStorage.getItem("locale")||"en",i=await w(Object.assign({"../../locales/docs/terms.en.md":()=>m(()=>import("../chunks/DLktIYgk.js"),[],import.meta.url),"../../locales/docs/terms.es.md":()=>m(()=>import("../chunks/BZJeeO0h.js"),[],import.meta.url),"../../locales/docs/terms.ru.md":()=>m(()=>import("../chunks/DPAOYd6q.js"),[],import.meta.url),"../../locales/docs/terms.zh.md":()=>m(()=>import("../chunks/-3coNkfI.js"),[],import.meta.url)}),`../../locales/docs/terms.${a}.md`,5);t(0,o=i.default.toString().replace(/{contactEmail}/g,r).replace(/{writtenDate}/g,j).replace(/{updateDate}/g,z))}catch(a){console.error("Failed to load markdown:",a),t(0,o=`# Error
Fail to Load the page：${a.message}`)}finally{t(1,n=!1)}}),[o,n]}class J extends x{constructor(e){super(),I(this,e,F,M,E,{})}}export{J as component};
