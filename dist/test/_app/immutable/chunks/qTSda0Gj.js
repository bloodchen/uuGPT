import{u as o,a as s}from"./cGBS7uHv.js";import{c as r,i as c,h as i}from"./U4A57tt4.js";async function u(){try{let a=await r()("https://api.uugpt.com/user/info");if(a.ok){const t=await a.json();return console.log(t),t}else return 1}catch{return 1}}async function d(a){try{let t=await r()(`https://api.uugpt.com/user/exist?email=${a}`);if(t.ok){const e=await t.json();return console.log(e),e}else return 1}catch{return 1}}async function f(a,t){try{let e=await r()("https://api.maxthon.com/web/sendcode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a,code_id:t})});return e.ok?await e.json():1}catch{return 1}}async function l(a,t){try{let e=await r()("https://api.maxthon.com/web/verifycode",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:a,code_id:t})});return e.ok?await e.json():1}catch{return 1}}async function y(a,t){try{let e=await r()(`https://api.uugpt.com/user/signup?email=${a}&password=${t}`);return e.ok?await e.json():1}catch{return 1}}async function p(a,t){try{let e=await r()(`https://api.uugpt.com/user/login?email=${a}&password=${t}`);return e.ok?await e.json():1}catch{return 1}}async function h(a,t){try{let e=await r()("https://api.uugpt.com/user/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({info:{password:t,email:a}})});return e.ok?await e.json():1}catch{return 1}}async function g(){u().then(a=>{a.code==0&&(o.set(a.info.uid),c.set(!0))})}async function j(a){let t=await d(a);return t==1||t.code!=0?1:t.exist}async function k(a){let t=await f(a,s(!0));return t==1||t.code!=0?1:0}async function O(a){let t=await l(a,s());return t==1?1:t.code!=0?t.code:0}async function P(a,t){t=await i(t);let e=await y(a,t);return e==1?1:e.code!=0?e.code:0}async function T(a,t){t=await i(t);let e=await h(a,t);return e==1?1:e.code!=0?e.code:0}async function b(a,t){t=await i(t);let e=await p(a,t);return e==1?1:e.code!=0?e.code:(o.set(e.uid),c.set(!0),0)}export{O as a,P as b,j as c,g,T as r,k as s,b as u};
