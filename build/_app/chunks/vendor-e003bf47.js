function m(){}function F(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(T)}function H(t){return typeof t=="function"}function I(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function G(t){return Object.keys(t).length===0}function ot(t,n,e,r){if(t){const c=v(t,n,e,r);return t[0](c)}}function v(t,n,e,r){return t[1]&&r?F(e.ctx.slice(),t[1](r(n))):e.ctx}function lt(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|c[l];return s}return n.dirty|c}return n.dirty}function ut(t,n,e,r,c,s){if(c){const o=v(n,e,r,s);t.p(o,c)}}function st(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let k=!1;function J(){k=!0}function L(){k=!1}function P(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&i.push(a)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:P(1,c,x=>n[e[x]].claim_order,u))-1;r[i]=e[a]+1;const f=a+1;e[f]=i,c=Math.max(f,c)}const s=[],o=[];let l=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(s.push(n[i-1]);l>=i;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<o.length;i++){for(;u<s.length&&o[i].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(o[i],a)}}function K(t,n){if(k){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ft(t,n,e){k&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function Q(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function at(){return j(" ")}function dt(){return j("")}function _t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function U(t){return Array.from(t.childNodes)}function V(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,r,c=!1){V(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const i=e(l);return i===void 0?t.splice(o,1):t[o]=i,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const i=e(l);return i===void 0?t.splice(o,1):t[o]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function X(t,n,e,r){return O(t,c=>c.nodeName===n,c=>{const s=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>c.removeAttribute(o))},()=>r(n))}function ht(t,n,e){return X(t,n,e,R)}function Y(t,n){return O(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>j(n),!0)}function mt(t){return Y(t," ")}function pt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function yt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let y;function p(t){y=t}function N(){if(!y)throw new Error("Function called outside component initialization");return y}function gt(t){N().$$.on_mount.push(t)}function xt(t){N().$$.after_update.push(t)}function bt(t,n){N().$$.context.set(t,n)}const h=[],z=[],$=[],B=[],Z=Promise.resolve();let E=!1;function tt(){E||(E=!0,Z.then(D))}function S(t){$.push(t)}const A=new Set;let b=0;function D(){const t=y;do{for(;b<h.length;){const n=h[b];b++,p(n),nt(n.$$)}for(p(null),h.length=0,b=0;z.length;)z.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];A.has(e)||(A.add(e),e())}$.length=0}while(h.length);for(;B.length;)B.pop()();E=!1,A.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(S)}}const w=new Set;let d;function $t(){d={r:0,c:[],p:d}}function wt(){d.r||g(d.c),d=d.p}function et(t,n){t&&t.i&&(w.delete(t),t.i(n))}function kt(t,n,e,r){if(t&&t.o){if(w.has(t))return;w.add(t),d.c.push(()=>{w.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function At(t,n){const e={},r={},c={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const i in o)i in l||(r[i]=1);for(const i in l)c[i]||(e[i]=l[i],c[i]=1);t[s]=l}else for(const i in o)c[i]=1}for(const o in r)o in e||(e[o]=void 0);return e}function Et(t){return typeof t=="object"&&t!==null?t:{}}function St(t){t&&t.c()}function jt(t,n){t&&t.l(n)}function it(t,n,e,r){const{fragment:c,on_mount:s,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),r||S(()=>{const i=s.map(T).filter(H);o?o.push(...i):g(i),t.$$.on_mount=[]}),l.forEach(S)}function rt(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(h.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Nt(t,n,e,r,c,s,o,l=[-1]){const i=y;p(t);const u=t.$$={fragment:null,ctx:null,props:s,update:m,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||i.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,x,...C)=>{const q=C.length?C[0]:x;return u.ctx&&c(u.ctx[f],u.ctx[f]=q)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](q),a&&ct(t,f)),x}):[],u.update(),a=!0,g(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){J();const f=U(n.target);u.fragment&&u.fragment.l(f),f.forEach(Q)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),L(),D()}p(i)}class Ct{$destroy(){rt(this,1),this.$destroy=m}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function qt(t,n=m){let e;const r=new Set;function c(l){if(I(t,l)&&(t=l,e)){const i=!_.length;for(const u of r)u[1](),_.push(u,t);if(i){for(let u=0;u<_.length;u+=2)_[u][0](_[u+1]);_.length=0}}}function s(l){c(l(t))}function o(l,i=m){const u=[l,i];return r.add(u),r.size===1&&(e=n(c)||m),l(t),()=>{r.delete(u),r.size===0&&(e(),e=null)}}return{set:c,update:s,subscribe:o}}export{rt as A,F as B,qt as C,ot as D,yt as E,ut as F,st as G,lt as H,K as I,m as J,Ct as S,U as a,_t as b,ht as c,Q as d,R as e,ft as f,Y as g,pt as h,Nt as i,at as j,dt as k,mt as l,$t as m,kt as n,wt as o,et as p,bt as q,xt as r,I as s,j as t,gt as u,St as v,jt as w,it as x,At as y,Et as z};
