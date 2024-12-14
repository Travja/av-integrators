import{i as x,E as O,aC as R,aD as W,aE as q,a1 as B,A,aF as G,z as I,n as y,aG as P,at as T,ak as L,M as U}from"./runtime.CbNJRfT8.js";import{a as j}from"./render.dh1erWVX.js";function Z(t,a){var r=t.__className,s=D(a);x&&t.className===s?t.__className=s:(r!==s||x&&t.className!==s)&&(a==null?t.removeAttribute("class"):t.className=s,t.__className=s)}function D(t){return t??""}function aa(t,a,r){if(r){if(t.classList.contains(a))return;t.classList.add(a)}else{if(!t.classList.contains(a))return;t.classList.remove(a)}}const K=()=>performance.now(),p={tick:t=>requestAnimationFrame(t),now:()=>K(),tasks:new Set};function z(){const t=p.now();p.tasks.forEach(a=>{a.c(t)||(p.tasks.delete(a),a.f())}),p.tasks.size!==0&&p.tick(z)}function H(t){let a;return p.tasks.size===0&&p.tick(z),{promise:new Promise(r=>{p.tasks.add(a={c:t,f:r})}),abort(){p.tasks.delete(a)}}}function w(t,a){t.dispatchEvent(new CustomEvent(a))}function J(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const a=t.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function S(t){const a={},r=t.split(";");for(const s of r){const[d,o]=s.split(":");if(!d||o===void 0)break;const c=J(d.trim());a[c]=o.trim()}return a}const Q=t=>t;function ta(t,a,r,s){var d=(t&P)!==0,o="both",c,$=a.inert,v,e;function i(){var n=U,_=A;T(null),L(null);try{return c??(c=r()(a,(s==null?void 0:s())??{},{direction:o}))}finally{T(n),L(_)}}var m={is_global:d,in(){a.inert=$,w(a,"introstart"),v=E(a,i(),e,1,()=>{w(a,"introend"),v==null||v.abort(),v=c=void 0})},out(n){a.inert=!0,w(a,"outrostart"),e=E(a,i(),v,0,()=>{w(a,"outroend"),n==null||n()})},stop:()=>{v==null||v.abort(),e==null||e.abort()}},l=A;if((l.transitions??(l.transitions=[])).push(m),j){var h=d;if(!h){for(var u=l.parent;u&&u.f&O;)for(;(u=u.parent)&&!(u.f&R););h=!u||(u.f&W)!==0}h&&q(()=>{B(()=>m.in())})}}function E(t,a,r,s,d){var o=s===1;if(G(a)){var c,$=!1;return I(()=>{if(!$){var _=a({direction:o?"in":"out"});c=E(t,_,r,s,d)}}),{abort:()=>{$=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(r==null||r.deactivate(),!(a!=null&&a.duration))return d(),{abort:y,deactivate:y,reset:y,t:()=>s};const{delay:v=0,css:e,tick:i,easing:m=Q}=a;var l=[];if(o&&r===void 0&&(i&&i(0,1),e)){var h=S(e(0,1));l.push(h,h)}var u=()=>1-s,n=t.animate(l,{duration:v});return n.onfinish=()=>{var _=(r==null?void 0:r.t())??1-s;r==null||r.abort();var f=s-_,g=a.duration*Math.abs(f),N=[];if(g>0){if(e)for(var k=Math.ceil(g/16.666666666666668),F=0;F<=k;F+=1){var C=_+f*m(F/k),M=e(C,1-C);N.push(S(M))}u=()=>{var b=n.currentTime;return _+f*m(b/g)},i&&H(()=>{if(n.playState!=="running")return!1;var b=u();return i(b,1-b),!0})}n=t.animate(N,{duration:g,fill:"forwards"}),n.onfinish=()=>{u=()=>s,i==null||i(s,1-s),d()}},{abort:()=>{n&&(n.cancel(),n.effect=null,n.onfinish=y)},deactivate:()=>{d=y},reset:()=>{s===0&&(i==null||i(1,0))},t:()=>u()}}function V(t){const a=t-1;return a*a*a+1}function ra(t,{delay:a=0,duration:r=400,easing:s=V,axis:d="y"}={}){const o=getComputedStyle(t),c=+o.opacity,$=d==="y"?"height":"width",v=parseFloat(o[$]),e=d==="y"?["top","bottom"]:["left","right"],i=e.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),m=parseFloat(o[`padding${i[0]}`]),l=parseFloat(o[`padding${i[1]}`]),h=parseFloat(o[`margin${i[0]}`]),u=parseFloat(o[`margin${i[1]}`]),n=parseFloat(o[`border${i[0]}Width`]),_=parseFloat(o[`border${i[1]}Width`]);return{delay:a,duration:r,easing:s,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*c};${$}: ${f*v}px;padding-${e[0]}: ${f*m}px;padding-${e[1]}: ${f*l}px;margin-${e[0]}: ${f*h}px;margin-${e[1]}: ${f*u}px;border-${e[0]}-width: ${f*n}px;border-${e[1]}-width: ${f*_}px;`}}export{aa as a,ra as b,Z as s,ta as t};