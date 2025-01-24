import{w as j}from"./CYG6huir.js";import{j as m}from"./B_VO3ox3.js";import{a as $,c as X}from"./DHaLF_0p.js";const t0=j(""),r0=j(""),O=j("");function i0(S=!1){if(m(O)!=""&&!S)return m(O);let v=Math.random().toString(36).substring(2,15);return O.set(v),v}O.subscribe(S=>{setTimeout(()=>{O.set("")},5*60*1e3)});const e0=j("");var P={exports:{}};const q={},G=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),V=$(G);/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */(function(S){(function(){var v="input is invalid type",M=typeof window=="object",p=M?window:{};p.JS_SHA256_NO_WINDOW&&(M=!1);var T=!M&&typeof self=="object",I=!p.JS_SHA256_NO_NODE_JS&&typeof process=="object"&&process.versions&&process.versions.node;I?p=X:T&&(p=self);var K=!p.JS_SHA256_NO_COMMON_JS&&!0&&S.exports,B=!p.JS_SHA256_NO_ARRAY_BUFFER&&typeof ArrayBuffer<"u",s="0123456789abcdef".split(""),Y=[-2147483648,8388608,32768,128],d=[24,16,8,0],R=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],U=["hex","array","digest","arrayBuffer"],F=[];(p.JS_SHA256_NO_NODE_JS||!Array.isArray)&&(Array.isArray=function(t){return Object.prototype.toString.call(t)==="[object Array]"}),B&&(p.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW||!ArrayBuffer.isView)&&(ArrayBuffer.isView=function(t){return typeof t=="object"&&t.buffer&&t.buffer.constructor===ArrayBuffer});var g=function(t,h){return function(a){return new u(h,!0).update(a)[t]()}},C=function(t){var h=g("hex",t);I&&(h=k(h,t)),h.create=function(){return new u(t)},h.update=function(x){return h.create().update(x)};for(var a=0;a<U.length;++a){var e=U[a];h[e]=g(e,t)}return h},k=function(t,h){var a=V,e=V.Buffer,x=h?"sha224":"sha256",i;e.from&&!p.JS_SHA256_NO_BUFFER_FROM?i=e.from:i=function(r){return new e(r)};var f=function(r){if(typeof r=="string")return a.createHash(x).update(r,"utf8").digest("hex");if(r==null)throw new Error(v);return r.constructor===ArrayBuffer&&(r=new Uint8Array(r)),Array.isArray(r)||ArrayBuffer.isView(r)||r.constructor===e?a.createHash(x).update(i(r)).digest("hex"):t(r)};return f},D=function(t,h){return function(a,e){return new H(a,h,!0).update(e)[t]()}},W=function(t){var h=D("hex",t);h.create=function(x){return new H(x,t)},h.update=function(x,i){return h.create(x).update(i)};for(var a=0;a<U.length;++a){var e=U[a];h[e]=D(e,t)}return h};function u(t,h){h?(F[0]=F[16]=F[1]=F[2]=F[3]=F[4]=F[5]=F[6]=F[7]=F[8]=F[9]=F[10]=F[11]=F[12]=F[13]=F[14]=F[15]=0,this.blocks=F):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225),this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0,this.is224=t}u.prototype.update=function(t){if(!this.finalized){var h,a=typeof t;if(a!=="string"){if(a==="object"){if(t===null)throw new Error(v);if(B&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!B||!ArrayBuffer.isView(t)))throw new Error(v)}else throw new Error(v);h=!0}for(var e,x=0,i,f=t.length,r=this.blocks;x<f;){if(this.hashed&&(this.hashed=!1,r[0]=this.block,this.block=r[16]=r[1]=r[2]=r[3]=r[4]=r[5]=r[6]=r[7]=r[8]=r[9]=r[10]=r[11]=r[12]=r[13]=r[14]=r[15]=0),h)for(i=this.start;x<f&&i<64;++x)r[i>>>2]|=t[x]<<d[i++&3];else for(i=this.start;x<f&&i<64;++x)e=t.charCodeAt(x),e<128?r[i>>>2]|=e<<d[i++&3]:e<2048?(r[i>>>2]|=(192|e>>>6)<<d[i++&3],r[i>>>2]|=(128|e&63)<<d[i++&3]):e<55296||e>=57344?(r[i>>>2]|=(224|e>>>12)<<d[i++&3],r[i>>>2]|=(128|e>>>6&63)<<d[i++&3],r[i>>>2]|=(128|e&63)<<d[i++&3]):(e=65536+((e&1023)<<10|t.charCodeAt(++x)&1023),r[i>>>2]|=(240|e>>>18)<<d[i++&3],r[i>>>2]|=(128|e>>>12&63)<<d[i++&3],r[i>>>2]|=(128|e>>>6&63)<<d[i++&3],r[i>>>2]|=(128|e&63)<<d[i++&3]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.block=r[16],this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},u.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,h=this.lastByteIndex;t[16]=this.block,t[h>>>2]|=Y[h&3],this.block=t[16],h>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},u.prototype.hash=function(){var t=this.h0,h=this.h1,a=this.h2,e=this.h3,x=this.h4,i=this.h5,f=this.h6,r=this.h7,o=this.blocks,c,l,b,A,n,_,w,E,z,J,N;for(c=16;c<64;++c)n=o[c-15],l=(n>>>7|n<<25)^(n>>>18|n<<14)^n>>>3,n=o[c-2],b=(n>>>17|n<<15)^(n>>>19|n<<13)^n>>>10,o[c]=o[c-16]+l+o[c-7]+b<<0;for(N=h&a,c=0;c<64;c+=4)this.first?(this.is224?(E=300032,n=o[0]-1413257819,r=n-150054599<<0,e=n+24177077<<0):(E=704751109,n=o[0]-210244248,r=n-1521486534<<0,e=n+143694565<<0),this.first=!1):(l=(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10),b=(x>>>6|x<<26)^(x>>>11|x<<21)^(x>>>25|x<<7),E=t&h,A=E^t&a^N,w=x&i^~x&f,n=r+b+w+R[c]+o[c],_=l+A,r=e+n<<0,e=n+_<<0),l=(e>>>2|e<<30)^(e>>>13|e<<19)^(e>>>22|e<<10),b=(r>>>6|r<<26)^(r>>>11|r<<21)^(r>>>25|r<<7),z=e&t,A=z^e&h^E,w=r&x^~r&i,n=f+b+w+R[c+1]+o[c+1],_=l+A,f=a+n<<0,a=n+_<<0,l=(a>>>2|a<<30)^(a>>>13|a<<19)^(a>>>22|a<<10),b=(f>>>6|f<<26)^(f>>>11|f<<21)^(f>>>25|f<<7),J=a&e,A=J^a&t^z,w=f&r^~f&x,n=i+b+w+R[c+2]+o[c+2],_=l+A,i=h+n<<0,h=n+_<<0,l=(h>>>2|h<<30)^(h>>>13|h<<19)^(h>>>22|h<<10),b=(i>>>6|i<<26)^(i>>>11|i<<21)^(i>>>25|i<<7),N=h&a,A=N^h&e^J,w=i&f^~i&r,n=x+b+w+R[c+3]+o[c+3],_=l+A,x=t+n<<0,t=n+_<<0,this.chromeBugWorkAround=!0;this.h0=this.h0+t<<0,this.h1=this.h1+h<<0,this.h2=this.h2+a<<0,this.h3=this.h3+e<<0,this.h4=this.h4+x<<0,this.h5=this.h5+i<<0,this.h6=this.h6+f<<0,this.h7=this.h7+r<<0},u.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,a=this.h2,e=this.h3,x=this.h4,i=this.h5,f=this.h6,r=this.h7,o=s[t>>>28&15]+s[t>>>24&15]+s[t>>>20&15]+s[t>>>16&15]+s[t>>>12&15]+s[t>>>8&15]+s[t>>>4&15]+s[t&15]+s[h>>>28&15]+s[h>>>24&15]+s[h>>>20&15]+s[h>>>16&15]+s[h>>>12&15]+s[h>>>8&15]+s[h>>>4&15]+s[h&15]+s[a>>>28&15]+s[a>>>24&15]+s[a>>>20&15]+s[a>>>16&15]+s[a>>>12&15]+s[a>>>8&15]+s[a>>>4&15]+s[a&15]+s[e>>>28&15]+s[e>>>24&15]+s[e>>>20&15]+s[e>>>16&15]+s[e>>>12&15]+s[e>>>8&15]+s[e>>>4&15]+s[e&15]+s[x>>>28&15]+s[x>>>24&15]+s[x>>>20&15]+s[x>>>16&15]+s[x>>>12&15]+s[x>>>8&15]+s[x>>>4&15]+s[x&15]+s[i>>>28&15]+s[i>>>24&15]+s[i>>>20&15]+s[i>>>16&15]+s[i>>>12&15]+s[i>>>8&15]+s[i>>>4&15]+s[i&15]+s[f>>>28&15]+s[f>>>24&15]+s[f>>>20&15]+s[f>>>16&15]+s[f>>>12&15]+s[f>>>8&15]+s[f>>>4&15]+s[f&15];return this.is224||(o+=s[r>>>28&15]+s[r>>>24&15]+s[r>>>20&15]+s[r>>>16&15]+s[r>>>12&15]+s[r>>>8&15]+s[r>>>4&15]+s[r&15]),o},u.prototype.toString=u.prototype.hex,u.prototype.digest=function(){this.finalize();var t=this.h0,h=this.h1,a=this.h2,e=this.h3,x=this.h4,i=this.h5,f=this.h6,r=this.h7,o=[t>>>24&255,t>>>16&255,t>>>8&255,t&255,h>>>24&255,h>>>16&255,h>>>8&255,h&255,a>>>24&255,a>>>16&255,a>>>8&255,a&255,e>>>24&255,e>>>16&255,e>>>8&255,e&255,x>>>24&255,x>>>16&255,x>>>8&255,x&255,i>>>24&255,i>>>16&255,i>>>8&255,i&255,f>>>24&255,f>>>16&255,f>>>8&255,f&255];return this.is224||o.push(r>>>24&255,r>>>16&255,r>>>8&255,r&255),o},u.prototype.array=u.prototype.digest,u.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(this.is224?28:32),h=new DataView(t);return h.setUint32(0,this.h0),h.setUint32(4,this.h1),h.setUint32(8,this.h2),h.setUint32(12,this.h3),h.setUint32(16,this.h4),h.setUint32(20,this.h5),h.setUint32(24,this.h6),this.is224||h.setUint32(28,this.h7),t};function H(t,h,a){var e,x=typeof t;if(x==="string"){var i=[],f=t.length,r=0,o;for(e=0;e<f;++e)o=t.charCodeAt(e),o<128?i[r++]=o:o<2048?(i[r++]=192|o>>>6,i[r++]=128|o&63):o<55296||o>=57344?(i[r++]=224|o>>>12,i[r++]=128|o>>>6&63,i[r++]=128|o&63):(o=65536+((o&1023)<<10|t.charCodeAt(++e)&1023),i[r++]=240|o>>>18,i[r++]=128|o>>>12&63,i[r++]=128|o>>>6&63,i[r++]=128|o&63);t=i}else if(x==="object"){if(t===null)throw new Error(v);if(B&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!B||!ArrayBuffer.isView(t)))throw new Error(v)}else throw new Error(v);t.length>64&&(t=new u(h,!0).update(t).array());var c=[],l=[];for(e=0;e<64;++e){var b=t[e]||0;c[e]=92^b,l[e]=54^b}u.call(this,h,a),this.update(l),this.oKeyPad=c,this.inner=!0,this.sharedMemory=a}H.prototype=new u,H.prototype.finalize=function(){if(u.prototype.finalize.call(this),this.inner){this.inner=!1;var t=this.array();u.call(this,this.is224,this.sharedMemory),this.update(this.oKeyPad),this.update(t),u.prototype.finalize.call(this)}};var y=C();y.sha256=y,y.sha224=C(!0),y.sha256.hmac=W(),y.sha224.hmac=W(!0),K?S.exports=y:(p.sha256=y.sha256,p.sha224=y.sha224)})()})(P);var h0=P.exports;export{r0 as a,i0 as g,e0 as l,h0 as s,t0 as u};
