import{b as H,e as ot,a as g,t as k,c as it}from"../chunks/disclose-version._JfMwdE8.js";import"../chunks/legacy.DfgMRP9R.js";import{d as st,h as L,k as U,e as nt,j as K,R as lt,ax as dt,aw as ct,m as ut,K as ft,i as vt,E as mt,aI as pt,aJ as _t,aC as ht,a0 as gt,A as G,aK as yt,z as bt,n as R,aL as wt,at as J,ai as Y,M as xt,p as kt,a9 as j,f as I,c as T,s as z,r as x,t as W,a as $t,g as m,as as Tt,b as St}from"../chunks/runtime.DJfT7W6z.js";import{a as At,d as Ct,s as O}from"../chunks/render.BKNhTfPl.js";import{i as q}from"../chunks/if.CHki6OTV.js";import{e as B,i as D}from"../chunks/each.D3RLAJZk.js";import{s as Q}from"../chunks/attributes.CiYqycgH.js";import{s as Ft}from"../chunks/snippet.BzBtEDNF.js";import{t as X}from"../chunks/class.BGqmhpaX.js";import{o as Et}from"../chunks/index-client.9NuBXYDB.js";import{B as Rt}from"../chunks/Badge.DoDgGVmR.js";import{M as zt}from"../chunks/Meta.CUQCXlPb.js";function It(e,t,a,o,i){var s=e,n="",c;st(()=>{if(n===(n=t()??"")){L&&U();return}c!==void 0&&(vt(c),c=void 0),n!==""&&(c=nt(()=>{if(L){K.data;for(var r=U(),l=r;r!==null&&(r.nodeType!==8||r.data!=="");)l=r,r=lt(r);if(r===null)throw dt(),ct;H(K,l),s=ut(r);return}var d=n+"",p=ot(d);H(ft(p),p.lastChild),s.before(p)}))})}const Nt=()=>performance.now(),$={tick:e=>requestAnimationFrame(e),now:()=>Nt(),tasks:new Set};function tt(){const e=$.now();$.tasks.forEach(t=>{t.c(e)||($.tasks.delete(t),t.f())}),$.tasks.size!==0&&$.tick(tt)}function Wt(e){let t;return $.tasks.size===0&&$.tick(tt),{promise:new Promise(a=>{$.tasks.add(t={c:e,f:a})}),abort(){$.tasks.delete(t)}}}function N(e,t){e.dispatchEvent(new CustomEvent(t))}function Mt(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Z(e){const t={},a=e.split(";");for(const o of a){const[i,s]=o.split(":");if(!i||s===void 0)break;const n=Mt(i.trim());t[n]=s.trim()}return t}const Vt=e=>e;function qt(e,t,a,o){var i=(e&wt)!==0,s="both",n,c=t.inert,r,l;function d(){var u=xt,h=G;J(null),Y(null);try{return n??(n=a()(t,(o==null?void 0:o())??{},{direction:s}))}finally{J(u),Y(h)}}var p={is_global:i,in(){t.inert=c,N(t,"introstart"),r=P(t,d(),l,1,()=>{N(t,"introend"),r==null||r.abort(),r=n=void 0})},out(u){t.inert=!0,N(t,"outrostart"),l=P(t,d(),r,0,()=>{N(t,"outroend"),u==null||u()})},stop:()=>{r==null||r.abort(),l==null||l.abort()}},y=G;if((y.transitions??(y.transitions=[])).push(p),At){var _=i;if(!_){for(var f=y.parent;f&&f.f&mt;)for(;(f=f.parent)&&!(f.f&pt););_=!f||(f.f&_t)!==0}_&&ht(()=>{gt(()=>p.in())})}}function P(e,t,a,o,i){var s=o===1;if(yt(t)){var n,c=!1;return bt(()=>{if(!c){var h=t({direction:s?"in":"out"});n=P(e,h,a,o,i)}}),{abort:()=>{c=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(a==null||a.deactivate(),!(t!=null&&t.duration))return i(),{abort:R,deactivate:R,reset:R,t:()=>o};const{delay:r=0,css:l,tick:d,easing:p=Vt}=t;var y=[];if(s&&a===void 0&&(d&&d(0,1),l)){var _=Z(l(0,1));y.push(_,_)}var f=()=>1-o,u=e.animate(y,{duration:r});return u.onfinish=()=>{var h=(a==null?void 0:a.t())??1-o;a==null||a.abort();var v=o-h,C=t.duration*Math.abs(v),b=[];if(C>0){if(l)for(var w=Math.ceil(C/16.666666666666668),S=0;S<=w;S+=1){var F=h+v*p(S/w),E=l(F,1-F);b.push(Z(E))}f=()=>{var A=u.currentTime;return h+v*p(A/C)},d&&Wt(()=>{if(u.playState!=="running")return!1;var A=f();return d(A,1-A),!0})}u=e.animate(b,{duration:C,fill:"forwards"}),u.onfinish=()=>{f=()=>o,d==null||d(o,1-o),i()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=R)},deactivate:()=>{i=R},reset:()=>{o===0&&(d==null||d(1,0))},t:()=>f()}}function Bt(e){const t=e-1;return t*t*t+1}function Dt(e,{delay:t=0,duration:a=400,easing:o=Bt,axis:i="y"}={}){const s=getComputedStyle(e),n=+s.opacity,c=i==="y"?"height":"width",r=parseFloat(s[c]),l=i==="y"?["top","bottom"]:["left","right"],d=l.map(v=>`${v[0].toUpperCase()}${v.slice(1)}`),p=parseFloat(s[`padding${d[0]}`]),y=parseFloat(s[`padding${d[1]}`]),_=parseFloat(s[`margin${d[0]}`]),f=parseFloat(s[`margin${d[1]}`]),u=parseFloat(s[`border${d[0]}Width`]),h=parseFloat(s[`border${d[1]}Width`]);return{delay:t,duration:a,easing:o,css:v=>`overflow: hidden;opacity: ${Math.min(v*20,1)*n};${c}: ${v*r}px;padding-${l[0]}: ${v*p}px;padding-${l[1]}: ${v*y}px;margin-${l[0]}: ${v*_}px;margin-${l[1]}: ${v*f}px;border-${l[0]}-width: ${v*u}px;border-${l[1]}-width: ${v*h}px;`}}var Pt=(e,t)=>j(t,!m(t)),jt=(e,t)=>e.key==="Enter"&&j(t,!m(t)),Ot=k('<div class="mb-2 text-xl font-bold svelte-w9tyoz" role="button" tabindex="0"><h3 class="flex items-center justify-center gap-1"><span class="material-symbols-rounded arrow svelte-w9tyoz">arrow_right</span> </h3></div> <div class="content mb-3 svelte-w9tyoz"><!></div>',1);function Ht(e,t){kt(t,!0);let a=Tt(!0);Et(()=>{j(a,!1)});var o=Ot(),i=I(o);i.__click=[Pt,a],i.__keydown=[jt,a];var s=T(i),n=z(T(s));x(s),x(i);var c=z(i,2),r=T(c);Ft(r,()=>t.children),x(c),W(()=>{X(i,"open",m(a)),O(n,` ${t.header??""}`),X(c,"open",m(a))}),qt(3,c,()=>Dt,()=>({duration:300})),g(e,o),$t()}Ct(["click","keydown"]);const Lt=(e,t=R)=>{var a=it(),o=I(a);B(o,1,t,D,(i,s)=>{var n=Ut(),c=T(n,!0);x(n),W(()=>O(c,m(s))),g(i,n)}),g(e,a)};var Ut=k('<li class="rounded-md bg-gray-300 p-2 dark:bg-slate-600"> </li>'),Kt=k('<img class="max-h-64 rounded-lg shadow-lg">'),Gt=k('<div class="flex flex-wrap justify-center gap-4"></div>'),Jt=k('<div class="font-bold text-black dark:text-white"> </div>'),Yt=k("<!> <div>(801) 755-0877</div>",1),Qt=k("<div><!></div>"),Xt=k("<!> <!> <!>",1),Zt=k('<div class="mt-2"><!></div>'),te=k('<!> <h1 class="my-4 text-center text-3xl font-bold">Services</h1> <div class="mx-auto" id="services"></div> <h2 class="my-4 text-center text-2xl font-bold">Systems</h2> <ul class="mx-auto mt-2 flex w-11/12 flex-wrap justify-center gap-3 sm:w-2/3"><!></ul>',1);function ve(e){const t=[{title:"Consultation & Design",content:`<p>Whether you are starting from scratch or you want to expand and upgrade your existing equipment,
									we will design a great system to fit your structure and budget.</p>`,callBadge:!0,badgeText:"Call today to schedule a consultation"},{title:"Equipment Installation",content:`
				<p>We offer customized, professional installation of all Audio/Video and smart home components.
				<br>No job is too big or too small.</p>
			`,images:["/tv-mount.webp"]},{title:"Retro-fit Wiring",content:`
				<p>We specialize in installing wires invisibly in completed homes and businesses without compromising aesthetics or sound quality.</p>
				<p>With our specialty tools and experienced installers, your system can be optimized even if there is no existing wiring.</p>
			`,images:["/retro-fit.webp","/tv-mount.webp"]},{title:"New Construction Wiring",content:`
				<p>For all your low-voltage needs including Phone, Network, Cable, Satellite, Distributed Audio,
				 Home Theater, Intercom, Surveillance, Alarm and more.</p>
			`},{title:"Commercial Audio & Video",content:`
				<p>Conference Rooms, Automation, TVs, Surveillance, Background Music, Satellite TV.</p>
			`},{title:"Automation/Universal Remote",content:`
				<p>Integrate your lighting, thermostat, security and TV with a sophisticated Universal Remote from
				Logitech or full Control4 Automation System that will combine the functions into one remote, touchscreen or mobile app.</p>
				<p>The remote control programming is custom tailored to your equipment and your needs. The process
				usually takes a few hours and is followed by detailed personal instruction.</p>
			`},{title:"Personalized Instruction",content:`
				<p>We will teach you how to easily use your equipment to make the most of all the features available.</p>
				<p>Call us today to find out how we can make your system easier to use as well as improve the quality of your audio and video experience.</p>
			`,callBadge:!0}];var a=te(),o=I(a);zt(o,{description:"Audio Video Integrators offers a variety of services from Home Automation to TV Mounting.",title:"Services"});var i=z(o,4);B(i,5,()=>t,D,(c,r)=>{var l=Zt(),d=T(l);Ht(d,{get header(){return m(r).title},children:(p,y)=>{var _=Xt(),f=I(_);It(f,()=>m(r).content);var u=z(f,2);{var h=b=>{var w=Gt();B(w,5,()=>m(r).images,D,(S,F)=>{var E=Kt();W(()=>{Q(E,"alt",m(r).title),Q(E,"src",m(F))}),g(S,E)}),x(w),g(b,w)};q(u,b=>{m(r).images&&b(h)})}var v=z(u,2);{var C=b=>{var w=Qt(),S=T(w);Rt(S,{icon:"phone",link:"tel:+18017550877",children:(F,E)=>{var A=Yt(),et=I(A);{var at=M=>{var V=Jt(),rt=T(V,!0);x(V),W(()=>O(rt,m(r).badgeText)),g(M,V)};q(et,M=>{m(r).badgeText&&M(at)})}St(2),g(F,A)},$$slots:{default:!0}}),x(w),g(b,w)};q(v,b=>{m(r).callBadge&&b(C)})}g(p,_)},$$slots:{default:!0}}),x(l),g(c,l)}),x(i);var s=z(i,4),n=T(s);Lt(n,()=>["Surround Sound Systems","Home Automation","Flat Screen TVs","Home Theater Systems","Network/Phone/Data","Distributed Audio Systems","Dish + DirecTV","Alarm/Surveillance","Intercom Systems"]),x(s),g(e,a)}export{ve as component};
