import{s as g,e as _,i as p,d as v,o as k,c as h,u as b,g as w,a as y,j as M,l as S,B as $,A as x,n as d}from"../chunks/BO7LHGCG.js";import{S as L,i as P,a as f,c as T,t as m,g as j}from"../chunks/Cz-Vg_QN.js";import{b as z}from"../chunks/CA32pBUg.js";import{b as C}from"../chunks/4-LTQWWN.js";/* empty css                */import"../chunks/Ds43uomR.js";import{u as O,g as q}from"../chunks/uqKJ4KFK.js";import{g as H}from"../chunks/WU-2KyjJ.js";const G=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));function I(i){let e;const a=i[2].default,s=h(a,i,i[1],null);return{c(){s&&s.c()},l(t){s&&s.l(t)},m(t,r){s&&s.m(t,r),e=!0},p(t,r){s&&s.p&&(!e||r&2)&&b(s,a,t,t[1],e?y(a,t[1],r,null):w(t[1]),null)},i(t){e||(m(s,t),e=!0)},o(t){f(s,t),e=!1},d(t){s&&s.d(t)}}}function N(i){let e,a='<aside class="sidebar-skeleton z-[21] flex shrink-0 overflow-x-hidden max-md:!w-0 w-64 flex-col h-full bg-grey-700"><div class="header skeleton"></div> <div class="chat-item skeleton"></div> <div class="chat-item skeleton"></div> <div class="chat-item skeleton"></div> <div class="chat-item skeleton"></div> <div class="message-loader"></div></aside> <div class="main-chat-skeleton"><div class="message skeleton mb-5 message-flex-end"></div> <div class="message skeleton"></div> <div class="message large skeleton"></div> <div class="message skeleton"></div></div>';return{c(){e=M("div"),e.innerHTML=a,this.h()},l(s){e=S(s,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-170qrsz"&&(e.innerHTML=a),this.h()},h(){x(e,"class","flex h-screen")},m(s,t){p(s,e,t)},p:d,i:d,o:d,d(s){s&&v(e)}}}function U(i){let e,a,s,t;const r=[N,I],o=[];function c(l,n){return l[0]?0:1}return e=c(i),a=o[e]=r[e](i),{c(){a.c(),s=_()},l(l){a.l(l),s=_()},m(l,n){o[e].m(l,n),p(l,s,n),t=!0},p(l,[n]){let u=e;e=c(l),e===u?o[e].p(l,n):(j(),f(o[u],1,1,()=>{o[u]=null}),T(),a=o[e],a?a.p(l,n):(a=o[e]=r[e](l),a.c()),m(a,1),a.m(s.parentNode,s))},i(l){t||(m(a),t=!0)},o(l){f(a),t=!1},d(l){l&&v(s),o[e].d(l)}}}function V(i,e,a){let{$$slots:s={},$$scope:t}=e,r=!0;return k(async()=>{let c=new URLSearchParams(window.location.search).get("mxcallback");const l=C();z.set(l),(H("MXTOKEN")!=null||c!=null)&&await O(),await q(),a(0,r=!1)}),i.$$set=o=>{"$$scope"in o&&a(1,t=o.$$scope)},[r,t,s]}class J extends L{constructor(e){super(),P(this,e,V,U,g,{})}}export{J as component,G as universal};
