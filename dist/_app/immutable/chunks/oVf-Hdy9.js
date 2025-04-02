import{p as K,q as L,t as U}from"./BSf3bDIO.js";import{b as C}from"./BNhpmeTk.js";var $={exports:{}};const Y={},X=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),J=K(X);/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */(function(l){(function(){var x="input is invalid type",u=typeof window=="object",F=u?window:{};F.JS_SHA256_NO_WINDOW&&(u=!1);var E=!u&&typeof self=="object",A=!F.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;A?F=L:E&&(F=self);var m=!F.JS_SHA256_NO_COMMON_JS&&!0&&l.exports,O=!F.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",s="0123456789abcdef".split(""),I=[-2147483648,8388608,32768,128],y=[24,16,8,0],B=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],H=["hex","array","digest","arrayBuffer"],p=[];(F.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return Object.prototype.toString.call(t)==="[object Array]"}),O&&(F.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return typeof t=="object"&&t.buffer&&t.buffer.constructor===ArrayBuffer});var P=function(t,h){return function(a){return new b(h,!0).update(a)[t]()}},k=function(t){var h=P("hex",t);A&&(h=V(h,t)),h.create=function(){return new b(t)},h.update=function(o){return h.create().update(o)};for(var a=0;a<H.length;++a){var i=H[a];h[i]=P(i,t)}return h},V=function(t,h){var a=J,i=J.Buffer,o=h?"sha224":"sha256",e;i.from&&!F.JS_SHA256_NO_BUFFER_FROM?e=i.from:e=function(r){return new i(r)};var n=function(r){if(typeof r=="string")return a.createHash(o).update(r,"utf8").digest("hex");if(r==null)throw new Error(x);return r.constructor===ArrayBuffer&&(r=new Uint8Array(r)),Array.isArray(r)||ArrayBuffer.isView(r)||r.constructor===i?a.createHash(o).update(e(r)).digest("hex"):t(r)};return n},z=function(t,h){return function(a,i){return new M(a,h,!0).update(i)[t]()}},D=function(t){var h=z("hex",t);h.create=function(o){return new M(o,t)},h.update=function(o,e){return h.create(o).update(e)};for(var a=0;a<H.length;++a){var i=H[a];h[i]=z(i,t)}return h};function b(t,h){h?(p[0]=p[16]=p[1]=p[2]=p[3]=p[4]=p[5]=p[6]=p[7]=p[8]=p[9]=p[10]=p[11]=p[12]=p[13]=p[14]=p[15]=0,this.blocks=p):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}b.prototype.update=function(t){if(!this.finalized){var h,a=typeof t;if(a!=="string"){if(a==="object"){if(t===null)throw new Error(x);if(O&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!O||!ArrayBuffer.isView(t)))throw new Error(x)}else throw new Error(x);h=!0}for(var i,o=0,e,n=t.length,r=this.blocks;o<n;){if(this.hashed&&(this.hashed=!1,r[0]=this.block,this.block=r[16]=r[1]=r[2]=r[3]=r[4]=r[5]=r[6]=r[7]=r[8]=r[9]=r[10]=r[11]=r[12]=r[13]=r[14]=r[15]=0),h)for(e=this.start;o<n&&e<64;++o)r[e>>>2]|=t[o]<<y[e++&3];else for(e=this.start;o<n&&e<64;++o)i=t.charCodeAt(o),i<128?r[e>>>2]|=i<<y[e++&3]:i<2048?(r[e>>>2]|=(192|i>>>6)<<y[e++&3],r[e>>>2]|=(128|i&63)<<y[e++&3]):i<55296||i>=57344?(r[e>>>2]|=(224|i>>>12)<<y[e++&3],r[e>>>2]|=(128|i>>>6&63)<<y[e++&3],r[e>>>2]|=(128|i&63)<<y[e++&3]):(i=65536+((i&1023)<<10|t.charCodeAt(++o)&1023),r[e>>>2]|=(240|i>>>18)<<y[e++&3],r[e>>>2]|=(128|i>>>12&63)<<y[e++&3],r[e>>>2]|=(128|i>>>6&63)<<y[e++&3],r[e>>>2]|=(128|i&63)<<y[e++&3]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=r[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},b.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,h=this.lastByteIndex;t[16]=this.block,t[h>>>2]|=I[h&3],this.block=t[16],h>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},b.prototype.hash=function(){var t=this.h0,h=this.h1,a=this.h2,i=this.h3,o=this.h4,e=this.h5,n=this.h6,r=this.h7,f=this.blocks,d,w,v,g,c,R,S,N,T,j,W;for(d=16;d<64;++d)c=f[d-15],w=(c>>>7|c<<25)^(c>>>18|c<<14)^c>>>3,c=f[d-2],v=(c>>>17|c<<15)^(c>>>19|c<<13)^c>>>10,f[d]=f[d-16]+w+f[d-7]+v<<0;for(W=h&a,d=0;d<64;d+=4)this.first?(this.is224?(N=300032,c=f[0]-1413257819,r=c-150054599<<0,i=c+24177077<<0):(N=704751109,c=f[0]-210244248,r=c-1521486534<<0,i=c+143694565<<0),this.first=!1):(w=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),v=(o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7),N=t&h,g=N^t&a^W,S=o&e^~o&n,c=r+v+S+B[d]+f[d],R=w+g,r=i+c<<0,i=c+R<<0),w=(i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10),v=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),T=i&t,g=T^i&h^N,S=r&o^~r&e,c=n+v+S+B[d+1]+f[d+1],R=w+g,n=a+c<<0,a=c+R<<0,w=(a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10),v=(n>>>6|n<<26)^(n>>>11|n<<21)^(n>>>25|n<<7),j=a&i,g=j^a&t^T,S=n&r^~n&o,c=e+v+S+B[d+2]+f[d+2],R=w+g,e=h+c<<0,h=c+R<<0,w=(h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),v=(e>>>6|e<<26)^(e>>>11|e<<21)^(e>>>25|e<<7),W=h&a,g=W^h&i^j,S=e&n^~e&r,c=o+v+S+B[d+3]+f[d+3],R=w+g,o=t+c<<0,t=c+R<<0,this.chromeBugWorkAround=!0;this.h0=this.h0+t<<0,this.h1=this.h1+h<<0,this.h2=this.h2+a<<0,this.h3=this.h3+i<<0,this.h4=this.h4+o<<0,this.h5=this.h5+e<<0,this.h6=this.h6+n<<0,this.h7=this.h7+r<<0},b.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,a=this.h2,i=this.h3,o=this.h4,e=this.h5,n=this.h6,r=this.h7,f=s[t>>>28&15]+s[t>>>24&15]+s[t>>>20&15]+s[t>>>16&15]+s[t>>>12&15]+s[t>>>8&15]+s[t>>>4&15]+s[t&15]+s[h>>>28&15]+s[h>>>24&15]+s[h>>>20&15]+s[h>>>16&15]+s[h>>>12&15]+s[h>>>8&15]+s[h>>>4&15]+s[h&15]+s[a>>>28&15]+s[a>>>24&15]+s[a>>>20&15]+s[a>>>16&15]+s[a>>>12&15]+s[a>>>8&15]+s[a>>>4&15]+s[a&15]+s[i>>>28&15]+s[i>>>24&15]+s[i>>>20&15]+s[i>>>16&15]+s[i>>>12&15]+s[i>>>8&15]+s[i>>>4&15]+s[i&15]+s[o>>>28&15]+s[o>>>24&15]+s[o>>>20&15]+s[o>>>16&15]+s[o>>>12&15]+s[o>>>8&15]+s[o>>>4&15]+s[o&15]+s[e>>>28&15]+s[e>>>24&15]+s[e>>>20&15]+s[e>>>16&15]+s[e>>>12&15]+s[e>>>8&15]+s[e>>>4&15]+s[e&15]+s[n>>>28&15]+s[n>>>24&15]+s[n>>>20&15]+s[n>>>16&15]+s[n>>>12&15]+s[n>>>8&15]+s[n>>>4&15]+s[n&15];return this.is224||(f+=s[r>>>28&15]+s[r>>>24&15]+s[r>>>20&15]+s[r>>>16&15]+s[r>>>12&15]+s[r>>>8&15]+s[r>>>4&15]+s[r&15]),f},b.prototype.toString=b.prototype.hex,b.prototype.digest=function(){this.finalize();var t=this.h0,h=this.h1,a=this.h2,i=this.h3,o=this.h4,e=this.h5,n=this.h6,r=this.h7,f=[t>>>24&255,t>>>16&255,t>>>8&255,t&255,h>>>24&255,h>>>16&255,h>>>8&255,h&255,a>>>24&255,a>>>16&255,a>>>8&255,a&255,i>>>24&255,i>>>16&255,i>>>8&255,i&255,o>>>24&255,o>>>16&255,o>>>8&255,o&255,e>>>24&255,e>>>16&255,e>>>8&255,e&255,n>>>24&255,n>>>16&255,n>>>8&255,n&255];return this.is224||f.push(r>>>24&255,r>>>16&255,r>>>8&255,r&255),f},b.prototype.array=b.prototype.digest,b.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),h=new DataView(t);return h.setUint32(0,this.h0),h.setUint32(4,this.h1),h.setUint32(8,this.h2),h.setUint32(12,this.h3),h.setUint32(16,this.h4),h.setUint32(20,this.h5),h.setUint32(24,this.h6),this.is224||h.setUint32(28,this.h7),t};function M(t,h,a){var i,o=typeof t;if(o==="string"){var e=[],n=t.length,r=0,f;for(i=0;i<n;++i)f=t.charCodeAt(i),f<128?e[r++]=f:f<2048?(e[r++]=192|f>>>6,e[r++]=128|f&63):f<55296||f>=57344?(e[r++]=224|f>>>12,e[r++]=128|f>>>6&63,e[r++]=128|f&63):(f=65536+((f&1023)<<10|t.charCodeAt(++i)&1023),e[r++]=240|f>>>18,e[r++]=128|f>>>12&63,e[r++]=128|f>>>6&63,e[r++]=128|f&63);t=e}else if(o==="object"){if(t===null)throw new Error(x);if(O&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!O||!ArrayBuffer.isView(t)))throw new Error(x)}else throw new Error(x);t.length>64&&(t=new b(h,!0).update(t).array());var d=[],w=[];for(i=0;i<64;++i){var v=t[i]||0;d[i]=92^v,w[i]=54^v}b.call(this,h,a),this.update(w),this.oKeyPad=d,this.inner=!0,this.sharedMemory=a}M.prototype=new b,M.prototype.finalize=function(){if(b.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();b.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),b.prototype.finalize.call(this)}};var _=k();_.sha256=_,_.sha224=k(!0),_.sha256.hmac=D(),_.sha224.hmac=D(!0),m?l.exports=_:(F.sha256=_.sha256,F.sha224=_.sha224)})()})($);var q=$.exports;function Z(l){return l.replace(/\\n/g,`\r
`)}async function tt(l){try{return await navigator.clipboard.writeText(l),console.log("Text successfully copied to clipboard"),!0}catch(x){return console.error("Failed to copy text to clipboard: ",x),!1}}function rt(l,x){console.log(x);function u(F){var E,A;!l.contains(F.target)&&!((E=x.originElement)!=null&&E.contains(F.target))&&((A=x.callback)==null||A.call(x))}return document.addEventListener("click",u,!0),{destroy(){document.removeEventListener("click",u,!0)}}}function et(l){let x=l.getBoundingClientRect(),u={top:0,left:0,right:0,bottom:0};const F=x.left,E=x.top,A=window.innerWidth/2,m=window.innerHeight/2;return F<A?u.left=x.left:u.right=window.innerWidth-x.left,E<m?u.top=x.bottom:u.bottom=window.innerHeight-x.top,u}function it(l){return l.split("").filter(u=>u==="`").length}function ht(l=60*1e3){return(x,u={})=>{let F=new AbortController;return u=u||{},u.signal=F.signal,setTimeout(()=>{F.abort()},l),fetch(x,u)}}function st(l){const x={1:C(U)("ERR.CONNECTION_FAILED",{default:"Connection failed, please check your network or try again later"}),1e3:C(U)("ERR.INVALID_EMAIL",{default:"Invalid Email, please check your email or verify again"}),101:C(U)("ERR.NO_UID",{default:"User not found. This may be due to a server interface issue. Please log out and try again. If the problem persists, contact the administrator."}),100:C(U)("ERR.UNKNOWN",{default:"Unknown error, please try again later"}),ERR_PASSWORD_ERROR:C(U)("ERR.PASSWORD_ERROR",{default:"Wrong password. Please check your password and try again."})};let u=x[l];return u?x[l]:u=x[100]}async function at(l){return q.sha256(l).toString()}function ot(l){const x=document.cookie.split(";");for(let u=0;u<x.length;u++){const F=x[u].trim();if(F.startsWith(`${l}=`))return F.substring(l.length+1)}return null}function nt(l,x,u){const F=l.match(/^(.*?:\/\/)?([^\/?#]*)([^?#]*)(\?[^#]*)?(#.*)?$/);if(!F)return l;const[E,A="",m,O,s,I=""]=F,y=new URLSearchParams(s?s.slice(1):"");y.set(x,u);const B=y.toString();return`${A}${m}${O}${B?"?"+B:""}${I}`}export{nt as a,st as b,ht as c,rt as d,et as e,tt as f,ot as g,at as h,Z as i,it as j};
