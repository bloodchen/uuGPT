var wt=Object.defineProperty;var yt=(e,t,n)=>t in e?wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>yt(e,typeof t!="symbol"?t+"":t,n);import{z as Oe,E as _t}from"./XjJ2S-dt.js";import{w as _e}from"./CGtxKakP.js";new URL("sveltekit-internal://");function vt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function bt(e){return e.split("%25").map(decodeURI).join("%25")}function kt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function de({href:e}){return e.split("#")[0]}function At(e,t,n,a=!1){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];a&&s.push("hash");for(const i of s)Object.defineProperty(r,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return r}const Et="/__data.json",St=".html__data.json";function Rt(e){return e.endsWith(".html")?e.replace(/\.html$/,St):e.replace(/\/$/,"")+Et}function It(...e){let t=5381;for(const n of e)if(typeof n=="string"){let a=n.length;for(;a;)t=t*33^n.charCodeAt(--a)}else if(ArrayBuffer.isView(n)){const a=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let r=a.length;for(;r;)t=t*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Ut(e){const t=atob(e),n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n.buffer}const Lt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&G.delete(ve(e)),Lt(e,t));const G=new Map;function Tt(e,t){const n=ve(e,t),a=document.querySelector(n);if(a!=null&&a.textContent){let{body:r,...s}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&G.set(n,{body:r,init:s,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Ut(r)),Promise.resolve(new Response(r,s))}return window.fetch(e,t)}function xt(e,t,n){if(G.size>0){const a=ve(e,n),r=G.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(r.body,r.init);G.delete(a)}}return window.fetch(t,n)}function ve(e,t){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const r=[];t.headers&&r.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&r.push(t.body),a+=`[data-hash="${It(...r)}"]`}return a}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ct(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Nt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return t.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return he(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return he(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const h=Pt.exec(c),[,u,w,d,m]=h;return t.push({name:d,matcher:m,optional:!!u,rest:!!w,chained:w?f===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return he(c)}).join("")}).join("")}/?$`),params:t}}function Ot(e){return!/^\([^)]+\)$/.test(e)}function Nt(e){return e.slice(1).split("/").filter(Ot)}function $t(e,t,n){const a={},r=e.slice(1),s=r.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let f=r[o-i];if(c.chained&&c.rest&&i&&(f=r.slice(o-i,o+1).filter(h=>h).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){a[c.name]=f;const h=t[o+1],u=r[o+1];h&&!h.rest&&h.optional&&u&&c.chained&&(i=0),!h&&!u&&Object.keys(a).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function he(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt({nodes:e,server_loads:t,dictionary:n,matchers:a}){const r=new Set(t);return Object.entries(n).map(([o,[c,f,h]])=>{const{pattern:u,params:w}=Ct(o),d={id:o,exec:m=>{const l=u.exec(m);if(l)return $t(l,w,a)},errors:[1,...h||[]].map(m=>e[m]),layouts:[0,...f||[]].map(i),leaf:s(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[r.has(o),e[o]]}}function Ke(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function Ne(e,t,n=JSON.stringify){const a=n(t);try{sessionStorage[e]=a}catch{}}var qe;const T=((qe=globalThis.__sveltekit_1k0lj7g)==null?void 0:qe.base)??"";var He;const Dt=((He=globalThis.__sveltekit_1k0lj7g)==null?void 0:He.assets)??T,Ft="1742791567376",We="sveltekit:snapshot",Ye="sveltekit:scroll",ze="sveltekit:states",Vt="sveltekit:pageurl",j="sveltekit:history",H="sveltekit:navigation",J={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function Je(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function be(){return{x:pageXOffset,y:pageYOffset}}function $(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const $e={...J,"":J.hover};function Xe(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function Ze(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Xe(e)}}function me(e,t,n){let a;try{if(a=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&a.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";a.hash=`#${o}${a.hash}`}}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,s=!a||!!r||se(a,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===z&&e.hasAttribute("download");return{url:a,external:s,target:r,download:i}}function X(e){let t=null,n=null,a=null,r=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)a===null&&(a=$(o,"preload-code")),r===null&&(r=$(o,"preload-data")),t===null&&(t=$(o,"keepfocus")),n===null&&(n=$(o,"noscroll")),s===null&&(s=$(o,"reload")),i===null&&(i=$(o,"replacestate")),o=Xe(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:$e[a??"off"],preload_data:$e[r??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function je(e){const t=_e(e);let n=!0;function a(){n=!0,t.update(i=>i)}function r(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:a,set:r,subscribe:s}}const Qe={v:()=>{}};function Bt(){const{set:e,subscribe:t}=_e(!1);let n;async function a(){clearTimeout(n);try{const r=await fetch(`${Dt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Ft;return i&&(e(!0),Qe.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:a}}function se(e,t,n){return e.origin!==z||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function De(e){const t=Mt(e),n=new ArrayBuffer(t.length),a=new DataView(n);for(let r=0;r<n.byteLength;r++)a.setUint8(r,t.charCodeAt(r));return n}const Gt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Mt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,a=0;for(let r=0;r<e.length;r++)n<<=6,n|=Gt.indexOf(e[r]),a+=6,a===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=a=0);return a===12?(n>>=4,t+=String.fromCharCode(n)):a===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const qt=-1,Ht=-2,Kt=-3,Wt=-4,Yt=-5,zt=-6;function Jt(e,t){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,a=Array(n.length);function r(s,i=!1){if(s===qt)return;if(s===Kt)return NaN;if(s===Wt)return 1/0;if(s===Yt)return-1/0;if(s===zt)return-0;if(i)throw new Error("Invalid input");if(s in a)return a[s];const o=n[s];if(!o||typeof o!="object")a[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=t==null?void 0:t[c];if(f)return a[s]=f(r(o[1]));switch(c){case"Date":a[s]=new Date(o[1]);break;case"Set":const h=new Set;a[s]=h;for(let d=1;d<o.length;d+=1)h.add(r(o[d]));break;case"Map":const u=new Map;a[s]=u;for(let d=1;d<o.length;d+=2)u.set(r(o[d]),r(o[d+1]));break;case"RegExp":a[s]=new RegExp(o[1],o[2]);break;case"Object":a[s]=Object(o[1]);break;case"BigInt":a[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);a[s]=w;for(let d=1;d<o.length;d+=2)w[o[d]]=r(o[d+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const d=globalThis[c],m=o[1],l=De(m),g=new d(l);a[s]=g;break}case"ArrayBuffer":{const d=o[1],m=De(d);a[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);a[s]=c;for(let f=0;f<o.length;f+=1){const h=o[f];h!==Ht&&(c[f]=r(h))}}else{const c={};a[s]=c;for(const f in o){const h=o[f];c[f]=r(h)}}return a[s]}return r(0)}const et=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...et];const Xt=new Set([...et]);[...Xt];function Zt(e){return e.filter(t=>t!=null)}class ie{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class ke{constructor(t,n){this.status=t,this.location=n}}class Ae extends Error{constructor(t,n,a){super(a),this.status=t,this.text=n}}const Qt="x-sveltekit-invalidated",en="x-sveltekit-trailing-slash";function Z(e){return e instanceof ie||e instanceof Ae?e.status:500}function tn(e){return e instanceof Ae?e.text:"Internal Error"}let I,K,pe;const nn=Oe.toString().includes("$$")||/function \w+\(\) \{\}/.test(Oe.toString());nn?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},K={current:null},pe={current:!1}):(I=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},K=new class{constructor(){x(this,"current",$state.raw(null))}},pe=new class{constructor(){x(this,"current",$state.raw(!1))}},Qe.v=()=>pe.current=!0);function an(e){Object.assign(I,e)}const rn=new Set(["icon","shortcut icon","apple-touch-icon"]),N=Ke(Ye)??{},W=Ke(We)??{},C={url:je({}),page:je({}),navigating:_e(null),updated:Bt()};function Ee(e){N[e]=be()}function on(e,t){let n=e+1;for(;N[n];)delete N[n],n+=1;for(n=t+1;W[n];)delete W[n],n+=1}function F(e){return location.href=e.href,new Promise(()=>{})}async function tt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function Fe(){}let ce,we,Q,P,ye,k;const ee=[],te=[];let U=null;const nt=new Set,sn=new Set,M=new Set;let _={branch:[],error:null,url:null},Se=!1,ne=!1,Ve=!0,Y=!1,V=!1,at=!1,Re=!1,rt,R,L,ae;const q=new Set;async function En(e,t,n){var r,s,i,o;document.URL!==location.href&&(location.href=location.href),k=e,await((s=(r=e.hooks).init)==null?void 0:s.call(r)),ce=jt(e),P=document.documentElement,ye=t,we=e.nodes[0],Q=e.nodes[1],we(),Q(),R=(i=history.state)==null?void 0:i[j],L=(o=history.state)==null?void 0:o[H],R||(R=L=Date.now(),history.replaceState({...history.state,[j]:R,[H]:L},""));const a=N[R];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),n?await mn(ye,n):hn(k.hash?mt(new URL(location.href)):location.href,{replaceState:!0}),gn()}function cn(){ee.length=0,Re=!1}function ot(e){te.some(t=>t==null?void 0:t.snapshot)&&(W[e]=te.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function st(e){var t;(t=W[e])==null||t.forEach((n,a)=>{var r,s;(s=(r=te[a])==null?void 0:r.snapshot)==null||s.restore(n)})}function Be(){Ee(R),Ne(Ye,N),ot(L),Ne(We,W)}async function Ie(e,t,n,a){return B({type:"goto",url:Je(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:a,accept:()=>{t.invalidateAll&&(Re=!0),t.invalidate&&t.invalidate.forEach(pn)}})}async function ln(e){if(e.id!==(U==null?void 0:U.id)){const t={};q.add(t),U={id:e.id,token:t,promise:ct({...e,preload:t}).then(n=>(q.delete(t),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function ge(e){const t=lt(e);if(!t)return;const n=ce.find(a=>a.exec(ft(t)));n&&await Promise.all([...n.layouts,n.leaf].map(a=>a==null?void 0:a[1]()))}function it(e,t,n){var s;_=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(I,e.props.page),rt=new k.root({target:t,props:{...e.props,stores:C,components:te},hydrate:n,sync:!1}),st(L);const r={from:null,to:{params:_.params,route:{id:((s=_.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};M.forEach(i=>i(r)),ne=!0}function re({url:e,params:t,branch:n,status:a,error:r,route:s,form:i}){let o="never";if(T&&(e.pathname===T||e.pathname===T+"/"))o="always";else for(const d of n)(d==null?void 0:d.slash)!==void 0&&(o=d.slash);e.pathname=vt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:r,route:s},props:{constructors:Zt(n).map(d=>d.node.component),page:xe(I)}};i!==void 0&&(c.props.form=i);let f={},h=!I,u=0;for(let d=0;d<Math.max(n.length,_.branch.length);d+=1){const m=n[d],l=_.branch[d];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(h=!0),m&&(f={...f,...m.data},h&&(c.props[`data_${u}`]=f),u+=1)}return(!_.url||e.href!==_.url.href||_.error!==r||i!==void 0&&i!==I.form||h)&&(c.props.page={error:r,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:h?f:I.data}),c}async function Ue({loader:e,parent:t,url:n,params:a,route:r,server_data_node:s}){var h,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((h=f.universal)!=null&&h.load){let d=function(...l){for(const g of l){const{href:y}=new URL(g,n);c.dependencies.add(y)}};const m={route:new Proxy(r,{get:(l,g)=>(o&&(c.route=!0),l[g])}),params:new Proxy(a,{get:(l,g)=>(o&&c.params.add(g),l[g])}),data:(s==null?void 0:s.data)??null,url:At(n,()=>{o&&(c.url=!0)},l=>{o&&c.search_params.add(l)},k.hash),async fetch(l,g){let y;l instanceof Request?(y=l.url,g={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...g}):y=l;const S=new URL(y,n);return o&&d(S.href),S.origin===n.origin&&(y=S.href.slice(n.origin.length)),ne?xt(y,S.href,g):Tt(y,g)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(l){o=!1;try{return l()}finally{o=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:e,server:s,universal:(u=f.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=f.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function Ge(e,t,n,a,r,s){if(Re)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(s[i]!==_.params[i])return!0;for(const i of r.dependencies)if(ee.some(o=>o(new URL(i))))return!0;return!1}function Le(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function fn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const a of n){const r=e.searchParams.getAll(a),s=t.searchParams.getAll(a);r.every(i=>s.includes(i))&&s.every(i=>r.includes(i))&&n.delete(a)}return n}function Me({error:e,url:t,route:n,params:a}){return{type:"loaded",state:{error:e,url:t,route:n,params:a,branch:[]},props:{page:xe(I),constructors:[]}}}async function ct({id:e,invalidating:t,url:n,params:a,route:r,preload:s}){if((U==null?void 0:U.id)===e)return q.delete(U.token),U.promise;const{errors:i,layouts:o,leaf:c}=r,f=[...o,c];i.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let h=null;const u=_.url?e!==oe(_.url):!1,w=_.route?r.id!==_.route.id:!1,d=fn(_.url,n);let m=!1;const l=f.map((p,v)=>{var O;const A=_.branch[v],E=!!(p!=null&&p[0])&&((A==null?void 0:A.loader)!==p[1]||Ge(m,w,u,d,(O=A.server)==null?void 0:O.uses,a));return E&&(m=!0),E});if(l.some(Boolean)){try{h=await ht(n,l)}catch(p){const v=await D(p,{url:n,params:a,route:{id:e}});return q.has(s)?Me({error:v,url:n,params:a,route:r}):le({status:Z(p),error:v,url:n,route:r})}if(h.type==="redirect")return h}const g=h==null?void 0:h.nodes;let y=!1;const S=f.map(async(p,v)=>{var fe;if(!p)return;const A=_.branch[v],E=g==null?void 0:g[v];if((!E||E.type==="skip")&&p[1]===(A==null?void 0:A.loader)&&!Ge(y,w,u,d,(fe=A.universal)==null?void 0:fe.uses,a))return A;if(y=!0,(E==null?void 0:E.type)==="error")throw E;return Ue({loader:p[1],url:n,params:a,route:r,parent:async()=>{var Ce;const Pe={};for(let ue=0;ue<v;ue+=1)Object.assign(Pe,(Ce=await S[ue])==null?void 0:Ce.data);return Pe},server_data_node:Le(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?A==null?void 0:A.server:void 0)})});for(const p of S)p.catch(()=>{});const b=[];for(let p=0;p<f.length;p+=1)if(f[p])try{b.push(await S[p])}catch(v){if(v instanceof ke)return{type:"redirect",location:v.location};if(q.has(s))return Me({error:await D(v,{params:a,url:n,route:{id:r.id}}),url:n,params:a,route:r});let A=Z(v),E;if(g!=null&&g.includes(v))A=v.status??A,E=v.error;else if(v instanceof ie)E=v.body;else{if(await C.updated.check())return await tt(),await F(n);E=await D(v,{params:a,url:n,route:{id:r.id}})}const O=await un(p,b,i);return O?re({url:n,params:a,branch:b.slice(0,O.idx).concat(O.node),status:A,error:E,route:r}):await dt(n,{id:r.id},E,A)}else b.push(void 0);return re({url:n,params:a,branch:b,status:200,error:null,route:r,form:t?void 0:null})}async function un(e,t,n){for(;e--;)if(n[e]){let a=e;for(;!t[a];)a-=1;try{return{idx:a+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:e,error:t,url:n,route:a}){const r={};let s=null;if(k.server_loads[0]===0)try{const o=await ht(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==z||n.pathname!==location.pathname||Se)&&await F(n)}try{const o=await Ue({loader:we,url:n,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Le(s)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return re({url:n,params:r,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof ke)return Ie(new URL(o.location,location.href),{},0);throw o}}function lt(e){let t;try{if(t=k.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);k.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}function Te(e,t){if(!e||se(e,T,k.hash))return;const n=lt(e);if(!n)return;const a=ft(n);for(const r of ce){const s=r.exec(a);if(s)return{id:oe(e),invalidating:t,route:r,params:kt(s),url:e}}}function ft(e){return bt(k.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function oe(e){return(k.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ut({url:e,type:t,intent:n,delta:a}){let r=!1;const s=gt(_,n,e,t);a!==void 0&&(s.navigation.delta=a);const i={...s.navigation,cancel:()=>{r=!0,s.reject(new Error("navigation cancelled"))}};return Y||nt.forEach(o=>o(i)),r?null:s}async function B({type:e,url:t,popped:n,keepfocus:a,noscroll:r,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=Fe,block:h=Fe}){const u=Te(t,!1),w=ut({url:t,type:e,delta:n==null?void 0:n.delta,intent:u});if(!w){h();return}const d=R,m=L;f(),Y=!0,ne&&C.navigating.set(K.current=w.navigation),ae=c;let l=u&&await ct(u);if(!l){if(se(t,T,k.hash))return await F(t);l=await dt(t,{id:null},await D(new Ae(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(u==null?void 0:u.url)||t,ae!==c)return w.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(o>=20)l=await le({status:500,error:await D(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Ie(new URL(l.location,t).href,{},o+1,c),!1;else l.props.page.status>=400&&await C.updated.check()&&(await tt(),await F(t));if(cn(),Ee(d),ot(m),l.props.page.url.pathname!==t.pathname&&(t.pathname=l.props.page.url.pathname),i=n?n.state:i,!n){const b=s?0:1,p={[j]:R+=b,[H]:L+=b,[ze]:i};(s?history.replaceState:history.pushState).call(history,p,"",t),s||on(R,L)}if(U=null,l.props.page.state=i,ne){_=l.state,l.props.page&&(l.props.page.url=t);const b=(await Promise.all(Array.from(sn,p=>p(w.navigation)))).filter(p=>typeof p=="function");if(b.length>0){let p=function(){b.forEach(v=>{M.delete(v)})};b.push(p),b.forEach(v=>{M.add(v)})}rt.$set(l.props),an(l.props.page),at=!0}else it(l,ye,!1);const{activeElement:g}=document;await _t();const y=n?n.scroll:r?be():null;if(Ve){const b=t.hash&&document.getElementById(decodeURIComponent(k.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));y?scrollTo(y.x,y.y):b?b.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==g&&document.activeElement!==document.body;!a&&!S&&wn(),Ve=!0,l.props.page&&Object.assign(I,l.props.page),Y=!1,e==="popstate"&&st(L),w.fulfil(void 0),M.forEach(b=>b(w.navigation)),C.navigating.set(K.current=null)}async function dt(e,t,n,a){return e.origin===z&&e.pathname===location.pathname&&!Se?await le({status:a,error:n,url:e,route:t}):await F(e)}function dn(){let e;P.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function t(s){s.defaultPrevented||a(s.composedPath()[0],1)}P.addEventListener("mousedown",t),P.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(ge(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function a(s,i){const o=Ze(s,P);if(!o)return;const{url:c,external:f,download:h}=me(o,T,k.hash);if(f||h)return;const u=X(o),w=c&&oe(_.url)===oe(c);if(!u.reload&&!w)if(i<=u.preload_data){const d=Te(c,!1);d&&ln(d)}else i<=u.preload_code&&ge(c)}function r(){n.disconnect();for(const s of P.querySelectorAll("a")){const{url:i,external:o,download:c}=me(s,T,k.hash);if(o||c)continue;const f=X(s);f.reload||(f.preload_code===J.viewport&&n.observe(s),f.preload_code===J.eager&&ge(i))}}M.add(r),r()}function D(e,t){if(e instanceof ie)return e.body;const n=Z(e),a=tn(e);return k.hooks.handleError({error:e,event:t,status:n,message:a})??{message:a}}function hn(e,t={}){return e=new URL(Je(e)),e.origin!==z?Promise.reject(new Error("goto: invalid URL")):Ie(e,t,0)}function pn(e){if(typeof e=="function")ee.push(e);else{const{href:t}=new URL(e,location.href);ee.push(n=>n.href===t)}}function gn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let a=!1;if(Be(),!Y){const r=gt(_,void 0,null,"leave"),s={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};nt.forEach(i=>i(s))}a?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Be()}),(t=navigator.connection)!=null&&t.saveData||dn(),P.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const a=Ze(n.composedPath()[0],P);if(!a)return;const{url:r,external:s,target:i,download:o}=me(a,T,k.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=X(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||o)return;const[h,u]=(k.hash?r.hash.replace(/^#/,""):r.href).split("#"),w=h===de(location);if(s||c.reload&&(!w||!u)){ut({url:r,type:"link"})?Y=!0:n.preventDefault();return}if(u!==void 0&&w){const[,d]=_.url.href.split("#");if(d===u){if(n.preventDefault(),u===""||u==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=a.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(V=!0,Ee(R),e(r),!c.replace_state)return;V=!1}n.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),B({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",n=>{if(n.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(n.target),r=n.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const o=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(se(o,T,!1))return;const c=n.target,f=X(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),u=r==null?void 0:r.getAttribute("name");u&&h.append(u,(r==null?void 0:r.getAttribute("value"))??""),o.search=new URLSearchParams(h).toString(),B({type:"form",url:o,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var a;if((a=n.state)!=null&&a[j]){const r=n.state[j];if(ae={},r===R)return;const s=N[r],i=n.state[ze]??{},o=new URL(n.state[Vt]??location.href),c=n.state[H],f=_.url?de(location)===de(_.url):!1;if(c===L&&(at||f)){i!==I.state&&(I.state=i),e(o),N[R]=be(),s&&scrollTo(s.x,s.y),R=r;return}const u=r-R;await B({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{R=r,L=c},block:()=>{history.go(-u)},nav_token:ae})}else if(!V){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{V?(V=!1,history.replaceState({...history.state,[j]:++R,[H]:L},"",location.href)):k.hash&&_.url.hash===location.hash&&B({type:"goto",url:mt(_.url)})});for(const n of document.querySelectorAll("link"))rn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&C.navigating.set(K.current=null)});function e(n){_.url=I.url=n,C.page.set(xe(I)),C.page.notify()}}async function mn(e,{status:t=200,error:n,node_ids:a,params:r,route:s,data:i,form:o}){Se=!0;const c=new URL(location.href);({params:r={},route:s={id:null}}=Te(c,!1)||{});let f,h=!0;try{const u=a.map(async(m,l)=>{const g=i[l];return g!=null&&g.uses&&(g.uses=pt(g.uses)),Ue({loader:k.nodes[m],url:c,params:r,route:s,parent:async()=>{const y={};for(let S=0;S<l;S+=1)Object.assign(y,(await u[S]).data);return y},server_data_node:Le(g)})}),w=await Promise.all(u),d=ce.find(({id:m})=>m===s.id);if(d){const m=d.layouts;for(let l=0;l<m.length;l++)m[l]||w.splice(l,0,void 0)}f=re({url:c,params:r,branch:w,status:t,error:n,form:o,route:d??null})}catch(u){if(u instanceof ke){await F(new URL(u.location,location.href));return}f=await le({status:Z(u),error:await D(u,{url:c,params:r,route:s}),url:c,route:s}),e.textContent="",h=!1}f.props.page&&(f.props.page.state={}),it(f,e,h)}async function ht(e,t){var s;const n=new URL(e);n.pathname=Rt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(en,"1"),n.searchParams.append(Qt,t.map(i=>i?"1":"0").join(""));const a=window.fetch,r=await a(n.href,{});if(!r.ok){let i;throw(s=r.headers.get("content-type"))!=null&&s.includes("application/json")?i=await r.json():r.status===404?i="Not Found":r.status===500&&(i="Internal Error"),new ie(r.status,i)}return new Promise(async i=>{var w;const o=new Map,c=r.body.getReader(),f=new TextDecoder;function h(d){return Jt(d,{...k.decoders,Promise:m=>new Promise((l,g)=>{o.set(m,{fulfil:l,reject:g})})})}let u="";for(;;){const{done:d,value:m}=await c.read();if(d&&!u)break;for(u+=!m&&u?`
`:f.decode(m,{stream:!0});;){const l=u.indexOf(`
`);if(l===-1)break;const g=JSON.parse(u.slice(0,l));if(u=u.slice(l+1),g.type==="redirect")return i(g);if(g.type==="data")(w=g.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=pt(y.uses),y.data=h(y.data))}),i(g);else if(g.type==="chunk"){const{id:y,data:S,error:b}=g,p=o.get(y);o.delete(y),b?p.reject(h(b)):p.fulfil(h(S))}}}})}function pt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function wn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let s=0;s<a.rangeCount;s+=1)r.push(a.getRangeAt(s));setTimeout(()=>{if(a.rangeCount===r.length){for(let s=0;s<a.rangeCount;s+=1){const i=r[s],o=a.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}a.removeAllRanges()}})}}}function gt(e,t,n,a){var c,f;let r,s;const i=new Promise((h,u)=>{r=h,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((f=t==null?void 0:t.route)==null?void 0:f.id)??null},url:n},willUnload:!t,type:a,complete:i},fulfil:r,reject:s}}function xe(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function mt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{En as a,hn as g,C as s};
