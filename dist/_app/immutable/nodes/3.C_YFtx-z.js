import{a as lt,v as ke,e as y,t as Q,b as U,c as E,d as D,f as Y,g as _,h as G,w as n,x as _e,j as N,k as b,y as ye,z as J,l as Z,A as st,r as Ie,m as ve,B as rt,C as at,D as nt,n as pe,E as ue,F as it,G as Oe,H as W}from"../chunks/scheduler.Dej80spf.js";import{S as ot,i as ct,b as ut,c as we,d as Se,m as Te,t as j,a as K,e as fe,f as De,g as de}from"../chunks/index.3KxsqwtT.js";import{T as ft,c as dt,m as _t,H as Pe,S as pt,a as se,$ as ht,s as mt,i as gt,C as bt,E as vt,L as kt,b as yt,P as Et,d as It,e as wt,f as Be,l as Le,g as St,h as Ue,j as Tt,k as Dt,n as Ge,o as Mt,p as At,q as Ct,r as He,U as je,R as Re,t as Nt,u as Pt,W as Bt,v as Lt,w as Vt,D as Ot,x as Ut,y as qe,z as Ke,A as ze,B as Fe,F as et,G as Ee}from"../chunks/remapping.umd.5N-peMaq.js";function Je(s,e,l){const t=s.slice();return t[44]=e[l],t[46]=l,t}function We(s){let e,l;return e=new pt({}),e.$on("settings-changed",Zt),{c(){we(e.$$.fragment)},l(t){Se(e.$$.fragment,t)},m(t,r){Te(e,t,r),l=!0},p:pe,i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){K(e.$$.fragment,t),l=!1},d(t){De(e,t)}}}function Gt(s){let e,l,t=s[8]("app.noConversation")+"",r;return{c(){e=y("div"),l=y("p"),r=Q(t),this.h()},l(a){e=E(a,"DIV",{class:!0});var m=D(e);l=E(m,"P",{});var o=D(l);r=Y(o,t),o.forEach(_),m.forEach(_),this.h()},h(){n(e,"class","flex justify-center items-center h-full")},m(a,m){N(a,e,m),b(e,l),b(l,r)},p(a,m){m[0]&256&&t!==(t=a[8]("app.noConversation")+"")&&Z(r,t)},i:pe,o:pe,d(a){a&&_(e)}}}function Ht(s){let e,l,t,r=He(s[7]),a=[];for(let o=0;o<r.length;o+=1)a[o]=$e(Je(s,r,o));const m=o=>K(a[o],1,1,()=>{a[o]=null});return{c(){e=y("div"),l=y("div");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=E(o,"DIV",{class:!0});var h=D(e);l=E(h,"DIV",{class:!0});var i=D(l);for(let p=0;p<a.length;p+=1)a[p].l(i);i.forEach(_),h.forEach(_),this.h()},h(){n(l,"class","w-full"),n(e,"class","flex flex-col pt-2 grow max-w-full px-0 sm:px-5")},m(o,h){N(o,e,h),b(e,l);for(let i=0;i<a.length;i+=1)a[i]&&a[i].m(l,null);t=!0},p(o,h){if(h[0]&1035748){r=He(o[7]);let i;for(i=0;i<r.length;i+=1){const p=Je(o,r,i);a[i]?(a[i].p(p,h),j(a[i],1)):(a[i]=$e(p),a[i].c(),j(a[i],1),a[i].m(l,null))}for(de(),i=r.length;i<a.length;i+=1)m(i);fe()}},i(o){if(!t){for(let h=0;h<r.length;h+=1)j(a[h]);t=!0}},o(o){a=a.filter(Boolean);for(let h=0;h<a.length;h+=1)K(a[h]);t=!1},d(o){o&&_(e),it(a,o)}}}function Xe(s){let e,l,t,r,a,m,o,h,i,p,k,f;function w(v,T){return v[44].role==="assistant"?Rt:jt}let S=w(s),u=S(s);const g=[Kt,qt],c=[];function M(v,T){return v[5]===v[46]?0:1}return i=M(s),p=c[i]=g[i](s),{c(){e=y("div"),l=y("div"),t=y("div"),r=y("img"),m=U(),o=y("div"),u.c(),h=U(),p.c(),k=U(),this.h()},l(v){e=E(v,"DIV",{class:!0});var T=D(e);l=E(T,"DIV",{class:!0});var P=D(l);t=E(P,"DIV",{});var A=D(t);r=E(A,"IMG",{src:!0,alt:!0,class:!0}),A.forEach(_),m=G(P),o=E(P,"DIV",{class:!0});var C=D(o);u.l(C),C.forEach(_),P.forEach(_),h=G(T),p.l(T),k=G(T),T.forEach(_),this.h()},h(){W(r.src,a=s[44].role==="user"?je:Re)||n(r,"src",a),n(r,"alt","Profile"),n(r,"class","w-[1.5rem] h-[1.5rem]"),n(o,"class","relative ml-2 font-bold"),n(l,"class","profile-picture flex align-middle"),n(e,"class","message relative inline-block bg-primary px-3 mt-3 flex flex-col transition-all duration-200 ease-in-out")},m(v,T){N(v,e,T),b(e,l),b(l,t),b(t,r),b(l,m),b(l,o),u.m(o,null),b(e,h),c[i].m(e,null),b(e,k),f=!0},p(v,T){(!f||T[0]&128&&!W(r.src,a=v[44].role==="user"?je:Re))&&n(r,"src",a),S===(S=w(v))&&u?u.p(v,T):(u.d(1),u=S(v),u&&(u.c(),u.m(o,null)));let P=i;i=M(v),i===P?c[i].p(v,T):(de(),K(c[P],1,1,()=>{c[P]=null}),fe(),p=c[i],p?p.p(v,T):(p=c[i]=g[i](v),p.c()),j(p,1),p.m(e,k))},i(v){f||(j(p),f=!0)},o(v){K(p),f=!1},d(v){v&&_(e),u.d(),c[i].d()}}}function jt(s){let e=s[8]("app.username")+"",l;return{c(){l=Q(e)},l(t){l=Y(t,e)},m(t,r){N(t,l,r)},p(t,r){r[0]&256&&e!==(e=t[8]("app.username")+"")&&Z(l,e)},d(t){t&&_(l)}}}function Rt(s){let e=s[8]("app.assistantname")+"",l;return{c(){l=Q(e)},l(t){l=Y(t,e)},m(t,r){N(t,l,r)},p(t,r){r[0]&256&&e!==(e=t[8]("app.assistantname")+"")&&Z(l,e)},d(t){t&&_(l)}}}function qt(s){let e,l,t,r,a,m,o,h,i,p;const k=[Ft,zt],f=[];function w(c,M){return c[44].role==="assistant"?0:1}l=w(s),t=f[l]=k[l](s);let S=s[44].role==="assistant"&&Qe(s),u=s[44].role==="user"&&Ye(s),g=s[44].role==="assistant"&&Ze(s);return{c(){e=y("div"),t.c(),r=U(),a=y("div"),m=y("div"),S&&S.c(),o=U(),u&&u.c(),h=U(),i=y("div"),g&&g.c(),this.h()},l(c){e=E(c,"DIV",{class:!0});var M=D(e);t.l(M),M.forEach(_),r=G(c),a=E(c,"DIV",{class:!0});var v=D(a);m=E(v,"DIV",{class:!0});var T=D(m);S&&S.l(T),o=G(T),u&&u.l(T),T.forEach(_),h=G(v),i=E(v,"DIV",{class:!0});var P=D(i);g&&g.l(P),P.forEach(_),v.forEach(_),this.h()},h(){n(e,"class","message-display mt-2 transition-all duration-200 ease-in-out"),n(m,"class","flex space-x-2"),n(i,"class","flex space-x-2"),n(a,"class","toolbelt flex mb-2 tools justify-between")},m(c,M){N(c,e,M),f[l].m(e,null),N(c,r,M),N(c,a,M),b(a,m),S&&S.m(m,null),b(m,o),u&&u.m(m,null),b(a,h),b(a,i),g&&g.m(i,null),p=!0},p(c,M){let v=l;l=w(c),l===v?f[l].p(c,M):(de(),K(f[v],1,1,()=>{f[v]=null}),fe(),t=f[l],t?t.p(c,M):(t=f[l]=k[l](c),t.c()),j(t,1),t.m(e,null)),c[44].role==="assistant"?S?S.p(c,M):(S=Qe(c),S.c(),S.m(m,o)):S&&(S.d(1),S=null),c[44].role==="user"?u?u.p(c,M):(u=Ye(c),u.c(),u.m(m,null)):u&&(u.d(1),u=null),c[44].role==="assistant"?g?g.p(c,M):(g=Ze(c),g.c(),g.m(i,null)):g&&(g.d(1),g=null)},i(c){p||(j(t),p=!0)},o(c){K(t),p=!1},d(c){c&&(_(e),_(r),_(a)),f[l].d(),S&&S.d(),u&&u.d(),g&&g.d()}}}function Kt(s){let e,l,t,r,a=s[8]("app.cancel")+"",m,o,h,i=s[8]("app.submit")+"",p,k,f,w;function S(){return s[24](s[46])}return{c(){e=y("textarea"),l=U(),t=y("div"),r=y("button"),m=Q(a),o=U(),h=y("button"),p=Q(i),this.h()},l(u){e=E(u,"TEXTAREA",{class:!0,style:!0}),D(e).forEach(_),l=G(u),t=E(u,"DIV",{class:!0});var g=D(t);r=E(g,"BUTTON",{class:!0});var c=D(r);m=Y(c,a),c.forEach(_),o=G(g),h=E(g,"BUTTON",{class:!0});var M=D(h);p=Y(M,i),M.forEach(_),g.forEach(_),this.h()},h(){n(e,"class","message-edit-textarea mt-2 bg-secondary p-2 mx-2 border-2 border-themegreyborder resize-none focus:outline-2 focus:outline-themegreen shadow rounded-lg transition-all duration-200 ease-in-out"),e.autofocus=!0,_e(e,"height","6.5rem"),_e(e,"overflow-y","auto"),n(r,"class","cancel-edit border-2 border-themegreyborder bg-themegreyhover hover:bg-secondary rounded-lg px-3 py-1 mr-2"),n(h,"class",k="submit-edit rounded-lg px-3 py-1 mr-2 text-white bg-themegreen "+(s[10]?"bg-themegreylight text-white cursor-not-allowed":"hover:bg-themegreenhover hover:text-white")),h.disabled=s[10],n(t,"class","flex place-content-center mt-4")},m(u,g){N(u,e,g),s[21](e),ye(e,s[6]),N(u,l,g),N(u,t,g),b(t,r),b(r,m),b(t,o),b(t,h),b(h,p),e.focus(),f||(w=[J(e,"input",s[22]),J(e,"input",tt),J(r,"click",s[23]),J(h,"click",S)],f=!0)},p(u,g){s=u,g[0]&64&&ye(e,s[6]),g[0]&256&&a!==(a=s[8]("app.cancel")+"")&&Z(m,a),g[0]&256&&i!==(i=s[8]("app.submit")+"")&&Z(p,i),g[0]&1024&&k!==(k="submit-edit rounded-lg px-3 py-1 mr-2 text-white bg-themegreen "+(s[10]?"bg-themegreylight text-white cursor-not-allowed":"hover:bg-themegreenhover hover:text-white"))&&n(h,"class",k),g[0]&1024&&(h.disabled=s[10])},i:pe,o:pe,d(u){u&&(_(e),_(l),_(t)),s[21](null),f=!1,Ie(w)}}}function zt(s){let e,l;return e=new et({props:{renderers:s[11],source:Ee(s[44].content.toString())}}),{c(){we(e.$$.fragment)},l(t){Se(e.$$.fragment,t)},m(t,r){Te(e,t,r),l=!0},p(t,r){const a={};r[0]&128&&(a.source=Ee(t[44].content.toString())),e.$set(a)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){K(e.$$.fragment,t),l=!1},d(t){De(e,t)}}}function Ft(s){let e,l;return e=new et({props:{renderers:s[11],source:Ee(s[44].content.toString())}}),{c(){we(e.$$.fragment)},l(t){Se(e.$$.fragment,t)},m(t,r){Te(e,t,r),l=!0},p(t,r){const a={};r[0]&128&&(a.source=Ee(t[44].content.toString())),e.$set(a)},i(t){l||(j(e.$$.fragment,t),l=!0)},o(t){K(e.$$.fragment,t),l=!1},d(t){De(e,t)}}}function Qe(s){let e,l,t,r,a,m,o=s[8]("app.copy")+"",h,i,p,k,f,w,S,u,g=s[8]("app.retry")+"",c,M,v,T,P,A,C,R,H=s[8]("app.delete")+"",z,ee,L;function ie(){return s[25](s[44])}function re(){return s[26](s[46])}function oe(){return s[27](s[46])}return{c(){e=y("button"),l=y("img"),a=U(),m=y("span"),h=Q(o),i=U(),p=y("button"),k=y("img"),S=U(),u=y("span"),c=Q(g),M=U(),v=y("button"),T=y("img"),C=U(),R=y("span"),z=Q(H),this.h()},l(V){e=E(V,"BUTTON",{class:!0});var O=D(e);l=E(O,"IMG",{class:!0,alt:!0,src:!0}),a=G(O),m=E(O,"SPAN",{class:!0});var ae=D(m);h=Y(ae,o),ae.forEach(_),O.forEach(_),i=G(V),p=E(V,"BUTTON",{class:!0});var $=D(p);k=E($,"IMG",{class:!0,alt:!0,src:!0}),S=G($),u=E($,"SPAN",{class:!0});var F=D(u);c=Y(F,g),F.forEach(_),$.forEach(_),M=G(V),v=E(V,"BUTTON",{class:!0});var I=D(v);T=E(I,"IMG",{class:!0,alt:!0,src:!0}),C=G(I),R=E(I,"SPAN",{class:!0});var B=D(R);z=Y(B,H),B.forEach(_),I.forEach(_),this.h()},h(){n(l,"class","copy-icon"),n(l,"alt",t=s[8]("app.copy")),W(l.src,r=Lt)||n(l,"src",r),n(m,"class","btn-text"),n(e,"class","copyButton btn-custom"),n(k,"class",""),n(k,"alt",f=s[8]("app.retry")),W(k.src,w=Vt)||n(k,"src",w),n(u,"class","btn-text"),n(p,"class","copyButton btn-custom"),n(T,"class","delete-icon"),n(T,"alt",P=s[8]("app.delete")),W(T.src,A=Ot)||n(T,"src",A),n(R,"class","btn-text"),n(v,"class","deleteButton btn-custom")},m(V,O){N(V,e,O),b(e,l),b(e,a),b(e,m),b(m,h),N(V,i,O),N(V,p,O),b(p,k),b(p,S),b(p,u),b(u,c),N(V,M,O),N(V,v,O),b(v,T),b(v,C),b(v,R),b(R,z),ee||(L=[J(e,"click",ie),J(p,"click",re),J(v,"click",oe)],ee=!0)},p(V,O){s=V,O[0]&256&&t!==(t=s[8]("app.copy"))&&n(l,"alt",t),O[0]&256&&o!==(o=s[8]("app.copy")+"")&&Z(h,o),O[0]&256&&f!==(f=s[8]("app.retry"))&&n(k,"alt",f),O[0]&256&&g!==(g=s[8]("app.retry")+"")&&Z(c,g),O[0]&256&&P!==(P=s[8]("app.delete"))&&n(T,"alt",P),O[0]&256&&H!==(H=s[8]("app.delete")+"")&&Z(z,H)},d(V){V&&(_(e),_(i),_(p),_(M),_(v)),ee=!1,Ie(L)}}}function Ye(s){let e,l,t,r,a,m,o=s[8]("app.edit")+"",h,i,p;function k(){return s[28](s[46])}return{c(){e=y("button"),l=y("img"),a=U(),m=y("span"),h=Q(o),this.h()},l(f){e=E(f,"BUTTON",{class:!0});var w=D(e);l=E(w,"IMG",{class:!0,alt:!0,src:!0}),a=G(w),m=E(w,"SPAN",{class:!0});var S=D(m);h=Y(S,o),S.forEach(_),w.forEach(_),this.h()},h(){n(l,"class","edit-icon"),n(l,"alt",t=s[8]("app.edit")),W(l.src,r=Ut)||n(l,"src",r),n(m,"class","btn-text"),n(e,"class","btn-custom")},m(f,w){N(f,e,w),b(e,l),b(e,a),b(e,m),b(m,h),i||(p=J(e,"click",k),i=!0)},p(f,w){s=f,w[0]&256&&t!==(t=s[8]("app.edit"))&&n(l,"alt",t),w[0]&256&&o!==(o=s[8]("app.edit")+"")&&Z(h,o)},d(f){f&&_(e),i=!1,p()}}}function Ze(s){let e,l,t,r,a,m,o=s[8]("app.like")+"",h,i,p,k,f,w,S,u,g=s[8]("app.dislike")+"",c,M,v;function T(){return s[29](s[46])}function P(){return s[30](s[46])}return{c(){e=y("button"),l=y("img"),a=U(),m=y("span"),h=Q(o),i=U(),p=y("button"),k=y("img"),S=U(),u=y("span"),c=Q(g),this.h()},l(A){e=E(A,"BUTTON",{id:!0,class:!0});var C=D(e);l=E(C,"IMG",{alt:!0,src:!0,class:!0}),a=G(C),m=E(C,"SPAN",{class:!0});var R=D(m);h=Y(R,o),R.forEach(_),C.forEach(_),i=G(A),p=E(A,"BUTTON",{id:!0,class:!0});var H=D(p);k=E(H,"IMG",{alt:!0,src:!0,class:!0}),S=G(H),u=E(H,"SPAN",{class:!0});var z=D(u);c=Y(z,g),z.forEach(_),H.forEach(_),this.h()},h(){n(l,"alt","like"),W(l.src,t=s[44].isLiked?qe:Ke)||n(l,"src",t),n(l,"class",r=s[44].isLiked?"small-rotate-animation":""),n(m,"class","btn-text"),n(e,"id","likeBtn"),n(e,"class","btn-custom"),n(k,"alt","dislike"),W(k.src,f=s[44].isDisliked?ze:Fe)||n(k,"src",f),n(k,"class",w=s[44].isDisliked?"small-rotate-animation":""),n(u,"class","btn-text"),n(p,"id","dislikeBtn"),n(p,"class","btn-custom")},m(A,C){N(A,e,C),b(e,l),b(e,a),b(e,m),b(m,h),N(A,i,C),N(A,p,C),b(p,k),b(p,S),b(p,u),b(u,c),M||(v=[J(e,"click",T),J(p,"click",P)],M=!0)},p(A,C){s=A,C[0]&128&&!W(l.src,t=s[44].isLiked?qe:Ke)&&n(l,"src",t),C[0]&128&&r!==(r=s[44].isLiked?"small-rotate-animation":"")&&n(l,"class",r),C[0]&256&&o!==(o=s[8]("app.like")+"")&&Z(h,o),C[0]&128&&!W(k.src,f=s[44].isDisliked?ze:Fe)&&n(k,"src",f),C[0]&128&&w!==(w=s[44].isDisliked?"small-rotate-animation":"")&&n(k,"class",w),C[0]&256&&g!==(g=s[8]("app.dislike")+"")&&Z(c,g)},d(A){A&&(_(e),_(i),_(p)),M=!1,Ie(v)}}}function $e(s){let e,l,t=s[44].role!=="system"&&Xe(s);return{c(){t&&t.c(),e=Oe()},l(r){t&&t.l(r),e=Oe()},m(r,a){t&&t.m(r,a),N(r,e,a),l=!0},p(r,a){r[44].role!=="system"?t?(t.p(r,a),a[0]&128&&j(t,1)):(t=Xe(r),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(de(),K(t,1,1,()=>{t=null}),fe())},i(r){l||(j(t),l=!0)},o(r){K(t),l=!1},d(r){r&&_(e),t&&t.d(r)}}}function Jt(s){let e,l;return{c(){e=y("img"),this.h()},l(t){e=E(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){W(e.src,l=Nt)||n(e,"src",l),n(e,"alt","send"),n(e,"class","min-w-[32px] w-[32px]")},m(t,r){N(t,e,r)},d(t){t&&_(e)}}}function Wt(s){let e,l;return{c(){e=y("img"),this.h()},l(t){e=E(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){W(e.src,l=Pt)||n(e,"src",l),n(e,"alt","send"),n(e,"class","min-w-[32px] w-[32px]")},m(t,r){N(t,e,r)},d(t){t&&_(e)}}}function Xt(s){let e,l;return{c(){e=y("img"),this.h()},l(t){e=E(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){W(e.src,l=Bt)||n(e,"src",l),n(e,"alt","wait"),n(e,"class","min-w-[32px] w-[32px]")},m(t,r){N(t,e,r)},d(t){t&&_(e)}}}function Qt(s){let e,l=s[8]("app.title")+"",t,r,a,m,o,h,i,p,k,f,w,S,u,g,c,M,v,T,P,A,C,R,H,z,ee,L=s[9]&&We();function ie(I){s[20](I)}let re={};s[4]!==void 0&&(re.conversation_title=s[4]),h=new ft({props:re}),ke.push(()=>ut(h,"conversation_title",ie)),h.$on("new-chat",dt);const oe=[Ht,Gt],V=[];function O(I,B){return I[7].length>0?0:1}f=O(s),w=V[f]=oe[f](s);function ae(I,B){return B[0]&1&&(C=null),I[10]?Xt:(C==null&&(C=I[0].trim().length===0),C?Wt:Jt)}let $=ae(s,[-1,-1]),F=$(s);return{c(){e=y("title"),t=Q(l),r=U(),L&&L.c(),a=U(),m=y("main"),o=y("div"),we(h.$$.fragment),p=U(),k=y("div"),w.c(),S=U(),u=y("div"),g=y("div"),c=y("textarea"),v=U(),T=y("div"),P=y("div"),A=y("button"),F.c(),this.h()},l(I){e=E(I,"TITLE",{});var B=D(e);t=Y(B,l),B.forEach(_),r=G(I),L&&L.l(I),a=G(I),m=E(I,"MAIN",{class:!0});var ne=D(m);o=E(ne,"DIV",{class:!0});var X=D(o);Se(h.$$.fragment,X),p=G(X),k=E(X,"DIV",{class:!0});var he=D(k);w.l(he),he.forEach(_),S=G(X),u=E(X,"DIV",{class:!0});var me=D(u);g=E(me,"DIV",{class:!0});var ce=D(g);c=E(ce,"TEXTAREA",{class:!0,placeholder:!0,style:!0}),D(c).forEach(_),v=G(ce),T=E(ce,"DIV",{class:!0});var ge=D(T);P=E(ge,"DIV",{class:!0});var Me=D(P);A=E(Me,"BUTTON",{class:!0});var d=D(A);F.l(d),d.forEach(_),Me.forEach(_),ge.forEach(_),ce.forEach(_),me.forEach(_),X.forEach(_),ne.forEach(_),this.h()},h(){n(k,"class","flex bg-primary overflow-y-auto overflow-x-hidden justify-center grow"),n(c,"class","w-full min-h-[6.5rem] h-24 rounded-lg p-2 pb-11 mx-1 border-2 border-themegreyborder resize-none focus:outline-2 focus:outline-themegreen shadow-xl"),n(c,"placeholder",M=s[8]("app.textareaPlaceholder")),c.autofocus=!0,_e(c,"height","6.5rem"),_e(c,"overflow-y","auto"),_e(c,"overflow","visible",1),n(A,"class","file-label bg-primary rounded cursor-pointer hover:themegray transition-colors"),A.disabled=R=!s[10]&&!s[0].trim().length,n(P,"class","flex send-btn-set flex-end items-center gap-1"),n(T,"class","absolute textarea-btn-set flex justify-between bg-primary pb-1"),n(g,"class","inputbox flex flex-1 bg-primary mt-auto mx-auto mb-3 relative"),n(u,"class","inputbox-container w-full flex justify-center items-center bg-primary"),n(o,"class","h-screen flex justify-stretch flex-col bg-secondary text-black/80 height-manager"),n(m,"class","bg-primary overflow-hidden")},m(I,B){N(I,e,B),b(e,t),N(I,r,B),L&&L.m(I,B),N(I,a,B),N(I,m,B),b(m,o),Te(h,o,null),b(o,p),b(o,k),V[f].m(k,null),s[31](k),b(o,S),b(o,u),b(u,g),b(g,c),s[32](c),ye(c,s[0]),b(g,v),b(g,T),b(T,P),b(P,A),F.m(A,null),H=!0,c.focus(),z||(ee=[J(c,"input",s[33]),J(c,"input",Yt),J(c,"keydown",s[12]),J(A,"click",s[34])],z=!0)},p(I,B){(!H||B[0]&256)&&l!==(l=I[8]("app.title")+"")&&Z(t,l),I[9]?L?(L.p(I,B),B[0]&512&&j(L,1)):(L=We(),L.c(),j(L,1),L.m(a.parentNode,a)):L&&(de(),K(L,1,1,()=>{L=null}),fe());const ne={};!i&&B[0]&16&&(i=!0,ne.conversation_title=I[4],st(()=>i=!1)),h.$set(ne);let X=f;f=O(I),f===X?V[f].p(I,B):(de(),K(V[X],1,1,()=>{V[X]=null}),fe(),w=V[f],w?w.p(I,B):(w=V[f]=oe[f](I),w.c()),j(w,1),w.m(k,null)),(!H||B[0]&256&&M!==(M=I[8]("app.textareaPlaceholder")))&&n(c,"placeholder",M),B[0]&1&&ye(c,I[0]),$!==($=ae(I,B))&&(F.d(1),F=$(I),F&&(F.c(),F.m(A,null))),(!H||B[0]&1025&&R!==(R=!I[10]&&!I[0].trim().length))&&(A.disabled=R)},i(I){H||(j(L),j(h.$$.fragment,I),j(w),H=!0)},o(I){K(L),K(h.$$.fragment,I),K(w),H=!1},d(I){I&&(_(e),_(r),_(a),_(m)),L&&L.d(I),De(h),V[f].d(),s[31](null),s[32](null),F.d(),z=!1,Ie(ee)}}}const xe=300;function tt(s){s.target.style.height="inherit";const e=window.getComputedStyle(s.target),l=parseInt(e.getPropertyValue("border-top-width"),10)+s.target.scrollHeight+parseInt(e.getPropertyValue("border-bottom-width"),10),t=Math.min(l,xe);s.target.style.height=`${t}px`,t>=xe&&(s.target.scrollTop=s.target.scrollHeight)}function Yt(s){tt(s)}function Zt(){console.log()}function $t(s,e,l){let t,r,a,m;ve(s,se,d=>l(7,t=d)),ve(s,ht,d=>l(8,r=d)),ve(s,mt,d=>l(9,a=d)),ve(s,gt,d=>l(10,m=d));const o={code:bt,em:vt,list:kt,listitem:yt,paragraph:Et,html:It};_t.setOptions({highlight(d,q){return Pe.getLanguage(q)?Pe.highlight(q,d).value:Pe.highlightAuto(d).value},langPrefix:"hljs language-"});let h,i="",p,k,f,w="",S=null,u="",g=null,c=!1;function M(){if(!f)return;const d={childList:!0,subtree:!0,characterData:!0};g=new MutationObserver((q,te)=>{v()}),g.observe(f,d)}rt(async()=>{await wt(),c=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),M(),h=new URLSearchParams(window.location.search).get("aisearch_q"),h&&(l(0,i=h),A()),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".message-display h1, .message-display h2, .message-display h3, .message-display h4, .message-display h5, .message-display h6").forEach(le=>{const Ne=le.textContent+"...";le.setAttribute("data-text",Ne)})});let q=localStorage.getItem("sendkey")||"Enter",te=localStorage.getItem("linebreakkey")||"Shift+Enter",be=localStorage.getItem("search_messages"),Ae=be!==null?JSON.parse(be):[];Be.set(q),Be.subscribe(x=>{localStorage.setItem("sendkey",x)}),Le.set(te),Le.subscribe(x=>{localStorage.setItem("linebreakkey",x)}),se.set(Ae),se.subscribe(x=>{localStorage.setItem("search_messages",JSON.stringify(x))});const Ve=localStorage.getItem("locale")||St()||"en";Ue.set(Ve),Ue.subscribe(x=>{localStorage.setItem("locale",x)})}),at(()=>{g&&(g.disconnect(),g=null),Tt()});function v(){f&&f.scrollHeight-f.scrollTop-150<=f.clientHeight&&l(3,f.scrollTop=f.scrollHeight,f)}const T={Enter:"001","Shift+Enter":"011","Ctrl+Enter":"101"};function P(d){let q=parseInt(T[ue(Be)],2),te=parseInt(T[ue(Le)],2),be=parseInt(d.key==="Enter"?"001":"000",2),Ae=parseInt(d.shiftKey?"010":"000",2),x=parseInt(d.ctrlKey?"100":"000",2)|Ae|be;if(!(q^x)&&!c&&(d.preventDefault(),A()),!(te^x)||d.key==="Enter"&&c){d.preventDefault();const le=this,Ce=le.selectionStart,Ne=le.selectionEnd;le.value=le.value.substring(0,Ce)+`
`+le.value.substring(Ne),le.selectionStart=le.selectionEnd=Ce+1}}function A(){Dt(i),l(0,i=""),l(1,p.style.height="6rem",p)}function C(){f&&l(3,f.scrollTop=f.scrollHeight,f)}let R=0;nt(()=>{const d=t.length||0;d>R&&C(),R=d});function H(d){l(5,S=d),l(6,u=ue(se)[d].content)}function z(d){Ge(ue(se)[d-1].content,d)}function ee(){l(5,S=null),l(6,u=""),l(2,k.style.height="96px",k)}function L(d){Ge(u,d+1),ee()}function ie(d){let q=t[d];q.isLiked=!0,q.isDisliked=!1;let te=ue(se);te[d]=q,se.set(te)}function re(d){let q=t[d];q.isLiked=!1,q.isDisliked=!0;let te=ue(se);te[d]=q,se.set(te)}function oe(d){w=d,l(4,w)}function V(d){ke[d?"unshift":"push"](()=>{k=d,l(2,k)})}function O(){u=this.value,l(6,u)}const ae=()=>ee(),$=d=>L(d),F=d=>Mt(d.content),I=d=>z(d),B=d=>At(d),ne=d=>H(d),X=d=>ie(d),he=d=>re(d);function me(d){ke[d?"unshift":"push"](()=>{f=d,l(3,f)})}function ce(d){ke[d?"unshift":"push"](()=>{p=d,l(1,p)})}function ge(){i=this.value,l(0,i)}return[i,p,k,f,w,S,u,t,r,a,m,o,P,A,H,z,ee,L,ie,re,oe,V,O,ae,$,F,I,B,ne,X,he,me,ce,ge,()=>{m?Ct():A()}]}class ll extends ot{constructor(e){super(),ct(this,e,$t,Qt,lt,{},null,[-1,-1])}}export{ll as component};
