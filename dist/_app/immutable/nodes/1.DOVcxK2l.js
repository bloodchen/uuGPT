import{s as S,j as _,t as d,k as q,l as f,m as g,o as h,d as l,p as x,i as m,q as v,v as $,n as E,w as j}from"../chunks/XjJ2S-dt.js";import{S as k,i as w}from"../chunks/BiSmBOS4.js";import{s as y}from"../chunks/C6gvEwSs.js";const C=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,p=((b=s[0].error)==null?void 0:b.message)+"",u;return{c(){t=_("h1"),o=d(r),n=q(),i=_("p"),u=d(p)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(l),n=x(e),i=f(e,"P",{});var c=g(i);u=h(c,p),c.forEach(l)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,u)},p(e,[a]){var c;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&p!==(p=((c=e[0].error)==null?void 0:c.message)+"")&&$(u,p)},i:E,o:E,d(e){e&&(l(t),l(n),l(i))}}}function z(s,t,r){let o;return j(s,H,n=>r(0,o=n)),[o]}let F=class extends k{constructor(t){super(),w(this,t,z,P,S,{})}};export{F as component};
