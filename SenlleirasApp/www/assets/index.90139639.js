const mw=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};mw();function Xu(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Ju(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?ww(r):Ju(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(ze(t))return t;if(Ie(t))return t}}const gw=/;(?![^(]*\))/g,yw=/:([^]+)/,vw=/\/\*.*?\*\//gs;function ww(t){const e={};return t.replace(vw,"").split(gw).forEach(n=>{if(n){const r=n.split(yw);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tr(t){let e="";if(ze(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const r=Tr(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_w=Xu(bw);function ng(t){return!!t||t===""}function Ew(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Nr(t[r],e[r]);return n}function Nr(t,e){if(t===e)return!0;let n=ld(t),r=ld(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Ei(t),r=Ei(e),n||r)return t===e;if(n=G(t),r=G(e),n||r)return n&&r?Ew(t,e):!1;if(n=Ie(t),r=Ie(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Nr(t[o],e[o]))return!1}}return String(t)===String(e)}function Zu(t,e){return t.findIndex(n=>Nr(n,e))}const u3=t=>ze(t)?t:t==null?"":G(t)||Ie(t)&&(t.toString===ig||!re(t.toString))?JSON.stringify(t,rg,2):String(t),rg=(t,e)=>e&&e.__v_isRef?rg(t,e.value):as(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ns(e)?{[`Set(${e.size})`]:[...e.values()]}:Ie(e)&&!G(e)&&!og(e)?String(e):e,Te={},os=[],$t=()=>{},Iw=()=>!1,Tw=/^on[^a-z]/,rc=t=>Tw.test(t),eh=t=>t.startsWith("onUpdate:"),dt=Object.assign,th=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sw=Object.prototype.hasOwnProperty,ue=(t,e)=>Sw.call(t,e),G=Array.isArray,as=t=>Ji(t)==="[object Map]",Ns=t=>Ji(t)==="[object Set]",ld=t=>Ji(t)==="[object Date]",re=t=>typeof t=="function",ze=t=>typeof t=="string",Ei=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",sg=t=>Ie(t)&&re(t.then)&&re(t.catch),ig=Object.prototype.toString,Ji=t=>ig.call(t),kw=t=>Ji(t).slice(8,-1),og=t=>Ji(t)==="[object Object]",nh=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ra=Xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Aw=/-(\w)/g,rn=sc(t=>t.replace(Aw,(e,n)=>n?n.toUpperCase():"")),Cw=/\B([A-Z])/g,zr=sc(t=>t.replace(Cw,"-$1").toLowerCase()),ic=sc(t=>t.charAt(0).toUpperCase()+t.slice(1)),ll=sc(t=>t?`on${ic(t)}`:""),Ii=(t,e)=>!Object.is(t,e),sa=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wa=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ti=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ud;const xw=()=>ud||(ud=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let It;class ag{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}run(e){if(this.active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function cg(t){return new ag(t)}function Rw(t,e=It){e&&e.active&&e.effects.push(t)}function Ow(){return It}function Pw(t){It&&It.cleanups.push(t)}const rh=t=>{const e=new Set(t);return e.w=0,e.n=0,e},lg=t=>(t.w&Yn)>0,ug=t=>(t.n&Yn)>0,Nw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Yn},Dw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];lg(s)&&!ug(s)?s.delete(t):e[n++]=s,s.w&=~Yn,s.n&=~Yn}e.length=n}},Bl=new WeakMap;let Zs=0,Yn=1;const jl=30;let Lt;const Sr=Symbol(""),ql=Symbol("");class sh{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Rw(this,r)}run(){if(!this.active)return this.fn();let e=Lt,n=qn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Lt,Lt=this,qn=!0,Yn=1<<++Zs,Zs<=jl?Nw(this):hd(this),this.fn()}finally{Zs<=jl&&Dw(this),Yn=1<<--Zs,Lt=this.parent,qn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Lt===this?this.deferStop=!0:this.active&&(hd(this),this.onStop&&this.onStop(),this.active=!1)}}function hd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let qn=!0;const hg=[];function Ds(){hg.push(qn),qn=!1}function Ls(){const t=hg.pop();qn=t===void 0?!0:t}function St(t,e,n){if(qn&&Lt){let r=Bl.get(t);r||Bl.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=rh()),fg(s)}}function fg(t,e){let n=!1;Zs<=jl?ug(t)||(t.n|=Yn,n=!lg(t)):n=!t.has(Lt),n&&(t.add(Lt),Lt.deps.push(t))}function gn(t,e,n,r,s,i){const o=Bl.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=Ti(r);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?nh(n)&&a.push(o.get("length")):(a.push(o.get(Sr)),as(t)&&a.push(o.get(ql)));break;case"delete":G(t)||(a.push(o.get(Sr)),as(t)&&a.push(o.get(ql)));break;case"set":as(t)&&a.push(o.get(Sr));break}if(a.length===1)a[0]&&zl(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);zl(rh(c))}}function zl(t,e){const n=G(t)?t:[...t];for(const r of n)r.computed&&fd(r);for(const r of n)r.computed||fd(r)}function fd(t,e){(t!==Lt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Lw=Xu("__proto__,__v_isRef,__isVue"),dg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ei)),Mw=ih(),Fw=ih(!1,!0),Uw=ih(!0),dd=$w();function $w(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=de(this);for(let i=0,o=this.length;i<o;i++)St(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(de)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ds();const r=de(this)[e].apply(this,n);return Ls(),r}}),t}function ih(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?tb:vg:e?yg:gg).get(r))return r;const o=G(r);if(!t&&o&&ue(dd,s))return Reflect.get(dd,s,i);const a=Reflect.get(r,s,i);return(Ei(s)?dg.has(s):Lw(s))||(t||St(r,"get",s),e)?a:De(a)?o&&nh(s)?a:a.value:Ie(a)?t?wg(a):Ms(a):a}}const Vw=pg(),Bw=pg(!0);function pg(t=!1){return function(n,r,s,i){let o=n[r];if(ms(o)&&De(o)&&!De(s))return!1;if(!t&&(!ba(s)&&!ms(s)&&(o=de(o),s=de(s)),!G(n)&&De(o)&&!De(s)))return o.value=s,!0;const a=G(n)&&nh(r)?Number(r)<n.length:ue(n,r),c=Reflect.set(n,r,s,i);return n===de(i)&&(a?Ii(s,o)&&gn(n,"set",r,s):gn(n,"add",r,s)),c}}function jw(t,e){const n=ue(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&gn(t,"delete",e,void 0),r}function qw(t,e){const n=Reflect.has(t,e);return(!Ei(e)||!dg.has(e))&&St(t,"has",e),n}function zw(t){return St(t,"iterate",G(t)?"length":Sr),Reflect.ownKeys(t)}const mg={get:Mw,set:Vw,deleteProperty:jw,has:qw,ownKeys:zw},Hw={get:Uw,set(t,e){return!0},deleteProperty(t,e){return!0}},Kw=dt({},mg,{get:Fw,set:Bw}),oh=t=>t,oc=t=>Reflect.getPrototypeOf(t);function No(t,e,n=!1,r=!1){t=t.__v_raw;const s=de(t),i=de(e);n||(e!==i&&St(s,"get",e),St(s,"get",i));const{has:o}=oc(s),a=r?oh:n?lh:Si;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Do(t,e=!1){const n=this.__v_raw,r=de(n),s=de(t);return e||(t!==s&&St(r,"has",t),St(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Lo(t,e=!1){return t=t.__v_raw,!e&&St(de(t),"iterate",Sr),Reflect.get(t,"size",t)}function pd(t){t=de(t);const e=de(this);return oc(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function md(t,e){e=de(e);const n=de(this),{has:r,get:s}=oc(n);let i=r.call(n,t);i||(t=de(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Ii(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function gd(t){const e=de(this),{has:n,get:r}=oc(e);let s=n.call(e,t);s||(t=de(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&gn(e,"delete",t,void 0),i}function yd(){const t=de(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function Mo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=de(o),c=e?oh:t?lh:Si;return!t&&St(a,"iterate",Sr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Fo(t,e,n){return function(...r){const s=this.__v_raw,i=de(s),o=as(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?oh:e?lh:Si;return!e&&St(i,"iterate",c?ql:Sr),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Rn(t){return function(...e){return t==="delete"?!1:this}}function Ww(){const t={get(i){return No(this,i)},get size(){return Lo(this)},has:Do,add:pd,set:md,delete:gd,clear:yd,forEach:Mo(!1,!1)},e={get(i){return No(this,i,!1,!0)},get size(){return Lo(this)},has:Do,add:pd,set:md,delete:gd,clear:yd,forEach:Mo(!1,!0)},n={get(i){return No(this,i,!0)},get size(){return Lo(this,!0)},has(i){return Do.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:Mo(!0,!1)},r={get(i){return No(this,i,!0,!0)},get size(){return Lo(this,!0)},has(i){return Do.call(this,i,!0)},add:Rn("add"),set:Rn("set"),delete:Rn("delete"),clear:Rn("clear"),forEach:Mo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Fo(i,!1,!1),n[i]=Fo(i,!0,!1),e[i]=Fo(i,!1,!0),r[i]=Fo(i,!0,!0)}),[t,n,e,r]}const[Gw,Yw,Qw,Xw]=Ww();function ah(t,e){const n=e?t?Xw:Qw:t?Yw:Gw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ue(n,s)&&s in r?n:r,s,i)}const Jw={get:ah(!1,!1)},Zw={get:ah(!1,!0)},eb={get:ah(!0,!1)},gg=new WeakMap,yg=new WeakMap,vg=new WeakMap,tb=new WeakMap;function nb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rb(t){return t.__v_skip||!Object.isExtensible(t)?0:nb(kw(t))}function Ms(t){return ms(t)?t:ch(t,!1,mg,Jw,gg)}function sb(t){return ch(t,!1,Kw,Zw,yg)}function wg(t){return ch(t,!0,Hw,eb,vg)}function ch(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=rb(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zn(t){return ms(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function ms(t){return!!(t&&t.__v_isReadonly)}function ba(t){return!!(t&&t.__v_isShallow)}function bg(t){return zn(t)||ms(t)}function de(t){const e=t&&t.__v_raw;return e?de(e):t}function gs(t){return wa(t,"__v_skip",!0),t}const Si=t=>Ie(t)?Ms(t):t,lh=t=>Ie(t)?wg(t):t;function _g(t){qn&&Lt&&(t=de(t),fg(t.dep||(t.dep=rh())))}function Eg(t,e){t=de(t),t.dep&&zl(t.dep)}function De(t){return!!(t&&t.__v_isRef===!0)}function ki(t){return Ig(t,!1)}function ib(t){return Ig(t,!0)}function Ig(t,e){return De(t)?t:new ob(t,e)}class ob{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:de(e),this._value=n?e:Si(e)}get value(){return _g(this),this._value}set value(e){const n=this.__v_isShallow||ba(e)||ms(e);e=n?e:de(e),Ii(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Si(e),Eg(this))}}function xt(t){return De(t)?t.value:t}const ab={get:(t,e,n)=>xt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return De(s)&&!De(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Tg(t){return zn(t)?t:new Proxy(t,ab)}function cb(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=ub(t,n);return e}class lb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ub(t,e,n){const r=t[e];return De(r)?r:new lb(t,e,n)}var Sg;class hb{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Sg]=!1,this._dirty=!0,this.effect=new sh(e,()=>{this._dirty||(this._dirty=!0,Eg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=de(this);return _g(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Sg="__v_isReadonly";function fb(t,e,n=!1){let r,s;const i=re(t);return i?(r=t,s=$t):(r=t.get,s=t.set),new hb(r,s,i||!s,n)}function Hn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ac(i,e,n)}return s}function Vt(t,e,n,r){if(re(t)){const i=Hn(t,e,n,r);return i&&sg(i)&&i.catch(o=>{ac(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Vt(t[i],e,n,r));return s}function ac(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Hn(c,null,10,[t,o,a]);return}}db(t,n,s,r)}function db(t,e,n,r=!0){console.error(t)}let Ai=!1,Hl=!1;const nt=[];let Yt=0;const cs=[];let ln=null,mr=0;const kg=Promise.resolve();let uh=null;function hh(t){const e=uh||kg;return t?e.then(this?t.bind(this):t):e}function pb(t){let e=Yt+1,n=nt.length;for(;e<n;){const r=e+n>>>1;Ci(nt[r])<t?e=r+1:n=r}return e}function fh(t){(!nt.length||!nt.includes(t,Ai&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?nt.push(t):nt.splice(pb(t.id),0,t),Ag())}function Ag(){!Ai&&!Hl&&(Hl=!0,uh=kg.then(xg))}function mb(t){const e=nt.indexOf(t);e>Yt&&nt.splice(e,1)}function gb(t){G(t)?cs.push(...t):(!ln||!ln.includes(t,t.allowRecurse?mr+1:mr))&&cs.push(t),Ag()}function vd(t,e=Ai?Yt+1:0){for(;e<nt.length;e++){const n=nt[e];n&&n.pre&&(nt.splice(e,1),e--,n())}}function Cg(t){if(cs.length){const e=[...new Set(cs)];if(cs.length=0,ln){ln.push(...e);return}for(ln=e,ln.sort((n,r)=>Ci(n)-Ci(r)),mr=0;mr<ln.length;mr++)ln[mr]();ln=null,mr=0}}const Ci=t=>t.id==null?1/0:t.id,yb=(t,e)=>{const n=Ci(t)-Ci(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function xg(t){Hl=!1,Ai=!0,nt.sort(yb);const e=$t;try{for(Yt=0;Yt<nt.length;Yt++){const n=nt[Yt];n&&n.active!==!1&&Hn(n,null,14)}}finally{Yt=0,nt.length=0,Cg(),Ai=!1,uh=null,(nt.length||cs.length)&&xg()}}function vb(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Te;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=r[u]||Te;f&&(s=n.map(p=>ze(p)?p.trim():p)),h&&(s=n.map(Ti))}let a,c=r[a=ll(e)]||r[a=ll(rn(e))];!c&&i&&(c=r[a=ll(zr(e))]),c&&Vt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Vt(l,t,6,s)}}function Rg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!re(t)){const c=l=>{const u=Rg(l,e,!0);u&&(a=!0,dt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&r.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):dt(o,i),Ie(t)&&r.set(t,o),o)}function cc(t,e){return!t||!rc(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,zr(e))||ue(t,e))}let Tt=null,lc=null;function _a(t){const e=Tt;return Tt=t,lc=t&&t.type.__scopeId||null,e}function h3(t){lc=t}function f3(){lc=null}function ut(t,e=Tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ad(-1);const i=_a(e);let o;try{o=t(...s)}finally{_a(i),r._d&&Ad(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ul(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:v}=t;let I,y;const b=_a(t);try{if(n.shapeFlag&4){const O=s||r;I=Gt(u.call(O,O,h,i,p,f,g)),y=c}else{const O=e;I=Gt(O.length>1?O(i,{attrs:c,slots:a,emit:l}):O(i,null)),y=e.props?c:wb(c)}}catch(O){li.length=0,ac(O,t,1),I=ne(Dr)}let k=I;if(y&&v!==!1){const O=Object.keys(y),{shapeFlag:U}=k;O.length&&U&7&&(o&&O.some(eh)&&(y=bb(y,o)),k=ys(k,y))}return n.dirs&&(k=ys(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),I=k,_a(b),I}const wb=t=>{let e;for(const n in t)(n==="class"||n==="style"||rc(n))&&((e||(e={}))[n]=t[n]);return e},bb=(t,e)=>{const n={};for(const r in t)(!eh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function _b(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wd(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==r[f]&&!cc(l,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wd(r,o,l):!0:!!o;return!1}function wd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!cc(n,i))return!0}return!1}function Eb({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ib=t=>t.__isSuspense;function Tb(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):gb(t)}function ia(t,e){if(Ye){let n=Ye.provides;const r=Ye.parent&&Ye.parent.provides;r===n&&(n=Ye.provides=Object.create(r)),n[t]=e}}function Rt(t,e,n=!1){const r=Ye||Tt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&re(e)?e.call(r.proxy):e}}const Uo={};function ls(t,e,n){return Og(t,e,n)}function Og(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Te){const a=Ye;let c,l=!1,u=!1;if(De(t)?(c=()=>t.value,l=ba(t)):zn(t)?(c=()=>t,r=!0):G(t)?(u=!0,l=t.some(k=>zn(k)||ba(k)),c=()=>t.map(k=>{if(De(k))return k.value;if(zn(k))return vr(k);if(re(k))return Hn(k,a,2)})):re(t)?e?c=()=>Hn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Vt(t,a,3,[f])}:c=$t,e&&r){const k=c;c=()=>vr(k())}let h,f=k=>{h=y.onStop=()=>{Hn(k,a,4)}},p;if(Ri)if(f=$t,e?n&&Vt(e,a,3,[c(),u?[]:void 0,f]):c(),s==="sync"){const k=w_();p=k.__watcherHandles||(k.__watcherHandles=[])}else return $t;let g=u?new Array(t.length).fill(Uo):Uo;const v=()=>{if(!!y.active)if(e){const k=y.run();(r||l||(u?k.some((O,U)=>Ii(O,g[U])):Ii(k,g)))&&(h&&h(),Vt(e,a,3,[k,g===Uo?void 0:u&&g[0]===Uo?[]:g,f]),g=k)}else y.run()};v.allowRecurse=!!e;let I;s==="sync"?I=v:s==="post"?I=()=>vt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),I=()=>fh(v));const y=new sh(c,I);e?n?v():g=y.run():s==="post"?vt(y.run.bind(y),a&&a.suspense):y.run();const b=()=>{y.stop(),a&&a.scope&&th(a.scope.effects,y)};return p&&p.push(b),b}function Sb(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Pg(r,t):()=>r[t]:t.bind(r,r);let i;re(e)?i=e:(i=e.handler,n=e);const o=Ye;vs(this);const a=Og(s,i.bind(r),n);return o?vs(o):kr(),a}function Pg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function vr(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),De(t))vr(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)vr(t[n],e);else if(Ns(t)||as(t))t.forEach(n=>{vr(n,e)});else if(og(t))for(const n in t)vr(t[n],e);return t}function Zi(t){return re(t)?{setup:t,name:t.name}:t}const oa=t=>!!t.type.__asyncLoader,Ng=t=>t.type.__isKeepAlive;function kb(t,e){Dg(t,"a",e)}function Ab(t,e){Dg(t,"da",e)}function Dg(t,e,n=Ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(uc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ng(s.parent.vnode)&&Cb(r,e,n,s),s=s.parent}}function Cb(t,e,n,r){const s=uc(e,t,r,!0);Lg(()=>{th(r[e],s)},n)}function uc(t,e,n=Ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ds(),vs(n);const a=Vt(e,n,t,o);return kr(),Ls(),a});return r?s.unshift(i):s.push(i),i}}const kn=t=>(e,n=Ye)=>(!Ri||t==="sp")&&uc(t,(...r)=>e(...r),n),xb=kn("bm"),Rb=kn("m"),Ob=kn("bu"),Pb=kn("u"),Nb=kn("bum"),Lg=kn("um"),Db=kn("sp"),Lb=kn("rtg"),Mb=kn("rtc");function Fb(t,e=Ye){uc("ec",t,e)}function Ub(t,e){const n=Tt;if(n===null)return t;const r=dc(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Te]=e[i];o&&(re(o)&&(o={mounted:o,updated:o}),o.deep&&vr(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function hr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ds(),Vt(c,n,8,[t.el,a,t,e]),Ls())}}const Mg="components";function Ea(t,e){return Vb(Mg,t,!0,e)||t}const $b=Symbol();function Vb(t,e,n=!0,r=!1){const s=Tt||Ye;if(s){const i=s.type;if(t===Mg){const a=g_(i,!1);if(a&&(a===e||a===rn(e)||a===ic(rn(e))))return i}const o=bd(s[t]||i[t],e)||bd(s.appContext[t],e);return!o&&r?i:o}}function bd(t,e){return t&&(t[e]||t[rn(e)]||t[ic(rn(e))])}function d3(t,e,n,r){let s;const i=n&&n[r];if(G(t)||ze(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Kl=t=>t?Gg(t)?dc(t)||t.proxy:Kl(t.parent):null,ci=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Kl(t.parent),$root:t=>Kl(t.root),$emit:t=>t.emit,$options:t=>dh(t),$forceUpdate:t=>t.f||(t.f=()=>fh(t.update)),$nextTick:t=>t.n||(t.n=hh.bind(t.proxy)),$watch:t=>Sb.bind(t)}),hl=(t,e)=>t!==Te&&!t.__isScriptSetup&&ue(t,e),Bb={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(hl(r,e))return o[e]=1,r[e];if(s!==Te&&ue(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ue(l,e))return o[e]=3,i[e];if(n!==Te&&ue(n,e))return o[e]=4,n[e];Wl&&(o[e]=0)}}const u=ci[e];let h,f;if(u)return e==="$attrs"&&St(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Te&&ue(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,ue(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return hl(s,e)?(s[e]=n,!0):r!==Te&&ue(r,e)?(r[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Te&&ue(t,o)||hl(e,o)||(a=i[0])&&ue(a,o)||ue(r,o)||ue(ci,o)||ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wl=!0;function jb(t){const e=dh(t),n=t.proxy,r=t.ctx;Wl=!1,e.beforeCreate&&_d(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:v,deactivated:I,beforeDestroy:y,beforeUnmount:b,destroyed:k,unmounted:O,render:U,renderTracked:se,renderTriggered:W,errorCaptured:Z,serverPrefetch:ge,expose:Le,inheritAttrs:mt,components:Ct,directives:xn,filters:_t}=e;if(l&&qb(l,r,null,t.appContext.config.unwrapInjectedRef),o)for(const we in o){const ye=o[we];re(ye)&&(r[we]=ye.bind(n))}if(s){const we=s.call(n,n);Ie(we)&&(t.data=Ms(we))}if(Wl=!0,i)for(const we in i){const ye=i[we],Pt=re(ye)?ye.bind(n,n):re(ye.get)?ye.get.bind(n,n):$t,ur=!re(ye)&&re(ye.set)?ye.set.bind(n):$t,Nt=Ce({get:Pt,set:ur});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:gt=>Nt.value=gt})}if(a)for(const we in a)Fg(a[we],r,n,we);if(c){const we=re(c)?c.call(n):c;Reflect.ownKeys(we).forEach(ye=>{ia(ye,we[ye])})}u&&_d(u,t,"c");function Me(we,ye){G(ye)?ye.forEach(Pt=>we(Pt.bind(n))):ye&&we(ye.bind(n))}if(Me(xb,h),Me(Rb,f),Me(Ob,p),Me(Pb,g),Me(kb,v),Me(Ab,I),Me(Fb,Z),Me(Mb,se),Me(Lb,W),Me(Nb,b),Me(Lg,O),Me(Db,ge),G(Le))if(Le.length){const we=t.exposed||(t.exposed={});Le.forEach(ye=>{Object.defineProperty(we,ye,{get:()=>n[ye],set:Pt=>n[ye]=Pt})})}else t.exposed||(t.exposed={});U&&t.render===$t&&(t.render=U),mt!=null&&(t.inheritAttrs=mt),Ct&&(t.components=Ct),xn&&(t.directives=xn)}function qb(t,e,n=$t,r=!1){G(t)&&(t=Gl(t));for(const s in t){const i=t[s];let o;Ie(i)?"default"in i?o=Rt(i.from||s,i.default,!0):o=Rt(i.from||s):o=Rt(i),De(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function _d(t,e,n){Vt(G(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Fg(t,e,n,r){const s=r.includes(".")?Pg(n,r):()=>n[r];if(ze(t)){const i=e[t];re(i)&&ls(s,i)}else if(re(t))ls(s,t.bind(n));else if(Ie(t))if(G(t))t.forEach(i=>Fg(i,e,n,r));else{const i=re(t.handler)?t.handler.bind(n):e[t.handler];re(i)&&ls(s,i,t)}}function dh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ia(c,l,o,!0)),Ia(c,e,o)),Ie(e)&&i.set(e,c),c}function Ia(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ia(t,i,n,!0),s&&s.forEach(o=>Ia(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=zb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const zb={data:Ed,props:dr,emits:dr,methods:dr,computed:dr,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:dr,directives:dr,watch:Kb,provide:Ed,inject:Hb};function Ed(t,e){return e?t?function(){return dt(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function Hb(t,e){return dr(Gl(t),Gl(e))}function Gl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function dr(t,e){return t?dt(dt(Object.create(null),t),e):e}function Kb(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function Wb(t,e,n,r=!1){const s={},i={};wa(i,fc,1),t.propsDefaults=Object.create(null),Ug(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sb(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Gb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=de(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(cc(t.emitsOptions,f))continue;const p=e[f];if(c)if(ue(i,f))p!==i[f]&&(i[f]=p,l=!0);else{const g=rn(f);s[g]=Yl(c,a,g,p,t,!1)}else p!==i[f]&&(i[f]=p,l=!0)}}}else{Ug(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ue(e,h)&&((u=zr(h))===h||!ue(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Yl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ue(e,h)&&!0)&&(delete i[h],l=!0)}l&&gn(t,"set","$attrs")}function Ug(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ra(c))continue;const l=e[c];let u;s&&ue(s,u=rn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:cc(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=de(n),l=a||Te;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Yl(s,c,h,l[h],t,!ue(l,h))}}return o}function Yl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&re(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(vs(s),r=l[n]=c.call(null,e),kr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===zr(n))&&(r=!0))}return r}function $g(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!re(t)){const u=h=>{c=!0;const[f,p]=$g(h,e,!0);dt(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ie(t)&&r.set(t,os),os;if(G(i))for(let u=0;u<i.length;u++){const h=rn(i[u]);Id(h)&&(o[h]=Te)}else if(i)for(const u in i){const h=rn(u);if(Id(h)){const f=i[u],p=o[h]=G(f)||re(f)?{type:f}:Object.assign({},f);if(p){const g=kd(Boolean,p.type),v=kd(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||ue(p,"default"))&&a.push(h)}}}const l=[o,a];return Ie(t)&&r.set(t,l),l}function Id(t){return t[0]!=="$"}function Td(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Sd(t,e){return Td(t)===Td(e)}function kd(t,e){return G(e)?e.findIndex(n=>Sd(n,t)):re(e)&&Sd(e,t)?0:-1}const Vg=t=>t[0]==="_"||t==="$stable",ph=t=>G(t)?t.map(Gt):[Gt(t)],Yb=(t,e,n)=>{if(e._n)return e;const r=ut((...s)=>ph(e(...s)),n);return r._c=!1,r},Bg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Vg(s))continue;const i=t[s];if(re(i))e[s]=Yb(s,i,r);else if(i!=null){const o=ph(i);e[s]=()=>o}}},jg=(t,e)=>{const n=ph(e);t.slots.default=()=>n},Qb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=de(e),wa(e,"_",n)):Bg(e,t.slots={})}else t.slots={},e&&jg(t,e);wa(t.slots,fc,1)},Xb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Te;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(dt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Bg(e,s)),o=e}else e&&(jg(t,e),o={default:1});if(i)for(const a in s)!Vg(a)&&!(a in o)&&delete s[a]};function qg(){return{app:null,config:{isNativeTag:Iw,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jb=0;function Zb(t,e){return function(r,s=null){re(r)||(r=Object.assign({},r)),s!=null&&!Ie(s)&&(s=null);const i=qg(),o=new Set;let a=!1;const c=i.app={_uid:Jb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:b_,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&re(l.install)?(o.add(l),l.install(c,...u)):re(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const f=ne(r,s);return f.appContext=i,u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,dc(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c}};return c}}function Ql(t,e,n,r,s=!1){if(G(t)){t.forEach((f,p)=>Ql(f,e&&(G(e)?e[p]:e),n,r,s));return}if(oa(r)&&!s)return;const i=r.shapeFlag&4?dc(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Te?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(ze(l)?(u[l]=null,ue(h,l)&&(h[l]=null)):De(l)&&(l.value=null)),re(c))Hn(c,a,12,[o,u]);else{const f=ze(c),p=De(c);if(f||p){const g=()=>{if(t.f){const v=f?ue(h,c)?h[c]:u[c]:c.value;s?G(v)&&th(v,i):G(v)?v.includes(i)||v.push(i):f?(u[c]=[i],ue(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,ue(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,vt(g,n)):g()}}}const vt=Tb;function e_(t){return t_(t)}function t_(t,e){const n=xw();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=$t,insertStaticContent:g}=t,v=(d,m,w,E=null,S=null,R=null,L=!1,x=null,P=!!m.dynamicChildren)=>{if(d===m)return;d&&!Ws(d,m)&&(E=D(d),gt(d,S,R,!0),d=null),m.patchFlag===-2&&(P=!1,m.dynamicChildren=null);const{type:A,ref:H,shapeFlag:$}=m;switch(A){case hc:I(d,m,w,E);break;case Dr:y(d,m,w,E);break;case aa:d==null&&b(m,w,E,L);break;case Wt:Ct(d,m,w,E,S,R,L,x,P);break;default:$&1?U(d,m,w,E,S,R,L,x,P):$&6?xn(d,m,w,E,S,R,L,x,P):($&64||$&128)&&A.process(d,m,w,E,S,R,L,x,P,le)}H!=null&&S&&Ql(H,d&&d.ref,R,m||d,!m)},I=(d,m,w,E)=>{if(d==null)r(m.el=a(m.children),w,E);else{const S=m.el=d.el;m.children!==d.children&&l(S,m.children)}},y=(d,m,w,E)=>{d==null?r(m.el=c(m.children||""),w,E):m.el=d.el},b=(d,m,w,E)=>{[d.el,d.anchor]=g(d.children,m,w,E,d.el,d.anchor)},k=({el:d,anchor:m},w,E)=>{let S;for(;d&&d!==m;)S=f(d),r(d,w,E),d=S;r(m,w,E)},O=({el:d,anchor:m})=>{let w;for(;d&&d!==m;)w=f(d),s(d),d=w;s(m)},U=(d,m,w,E,S,R,L,x,P)=>{L=L||m.type==="svg",d==null?se(m,w,E,S,R,L,x,P):ge(d,m,S,R,L,x,P)},se=(d,m,w,E,S,R,L,x)=>{let P,A;const{type:H,props:$,shapeFlag:K,transition:J,dirs:oe}=d;if(P=d.el=o(d.type,R,$&&$.is,$),K&8?u(P,d.children):K&16&&Z(d.children,P,null,E,S,R&&H!=="foreignObject",L,x),oe&&hr(d,null,E,"created"),$){for(const ve in $)ve!=="value"&&!ra(ve)&&i(P,ve,null,$[ve],R,d.children,E,S,M);"value"in $&&i(P,"value",null,$.value),(A=$.onVnodeBeforeMount)&&Kt(A,E,d)}W(P,d,d.scopeId,L,E),oe&&hr(d,null,E,"beforeMount");const be=(!S||S&&!S.pendingBranch)&&J&&!J.persisted;be&&J.beforeEnter(P),r(P,m,w),((A=$&&$.onVnodeMounted)||be||oe)&&vt(()=>{A&&Kt(A,E,d),be&&J.enter(P),oe&&hr(d,null,E,"mounted")},S)},W=(d,m,w,E,S)=>{if(w&&p(d,w),E)for(let R=0;R<E.length;R++)p(d,E[R]);if(S){let R=S.subTree;if(m===R){const L=S.vnode;W(d,L,L.scopeId,L.slotScopeIds,S.parent)}}},Z=(d,m,w,E,S,R,L,x,P=0)=>{for(let A=P;A<d.length;A++){const H=d[A]=x?Dn(d[A]):Gt(d[A]);v(null,H,m,w,E,S,R,L,x)}},ge=(d,m,w,E,S,R,L)=>{const x=m.el=d.el;let{patchFlag:P,dynamicChildren:A,dirs:H}=m;P|=d.patchFlag&16;const $=d.props||Te,K=m.props||Te;let J;w&&fr(w,!1),(J=K.onVnodeBeforeUpdate)&&Kt(J,w,m,d),H&&hr(m,d,w,"beforeUpdate"),w&&fr(w,!0);const oe=S&&m.type!=="foreignObject";if(A?Le(d.dynamicChildren,A,x,w,E,oe,R):L||ye(d,m,x,null,w,E,oe,R,!1),P>0){if(P&16)mt(x,m,$,K,w,E,S);else if(P&2&&$.class!==K.class&&i(x,"class",null,K.class,S),P&4&&i(x,"style",$.style,K.style,S),P&8){const be=m.dynamicProps;for(let ve=0;ve<be.length;ve++){const Fe=be[ve],Dt=$[Fe],Qr=K[Fe];(Qr!==Dt||Fe==="value")&&i(x,Fe,Dt,Qr,S,d.children,w,E,M)}}P&1&&d.children!==m.children&&u(x,m.children)}else!L&&A==null&&mt(x,m,$,K,w,E,S);((J=K.onVnodeUpdated)||H)&&vt(()=>{J&&Kt(J,w,m,d),H&&hr(m,d,w,"updated")},E)},Le=(d,m,w,E,S,R,L)=>{for(let x=0;x<m.length;x++){const P=d[x],A=m[x],H=P.el&&(P.type===Wt||!Ws(P,A)||P.shapeFlag&70)?h(P.el):w;v(P,A,H,null,E,S,R,L,!0)}},mt=(d,m,w,E,S,R,L)=>{if(w!==E){if(w!==Te)for(const x in w)!ra(x)&&!(x in E)&&i(d,x,w[x],null,L,m.children,S,R,M);for(const x in E){if(ra(x))continue;const P=E[x],A=w[x];P!==A&&x!=="value"&&i(d,x,A,P,L,m.children,S,R,M)}"value"in E&&i(d,"value",w.value,E.value)}},Ct=(d,m,w,E,S,R,L,x,P)=>{const A=m.el=d?d.el:a(""),H=m.anchor=d?d.anchor:a("");let{patchFlag:$,dynamicChildren:K,slotScopeIds:J}=m;J&&(x=x?x.concat(J):J),d==null?(r(A,w,E),r(H,w,E),Z(m.children,w,H,S,R,L,x,P)):$>0&&$&64&&K&&d.dynamicChildren?(Le(d.dynamicChildren,K,w,S,R,L,x),(m.key!=null||S&&m===S.subTree)&&zg(d,m,!0)):ye(d,m,w,H,S,R,L,x,P)},xn=(d,m,w,E,S,R,L,x,P)=>{m.slotScopeIds=x,d==null?m.shapeFlag&512?S.ctx.activate(m,w,E,L,P):_t(m,w,E,S,R,L,P):We(d,m,P)},_t=(d,m,w,E,S,R,L)=>{const x=d.component=u_(d,E,S);if(Ng(d)&&(x.ctx.renderer=le),f_(x),x.asyncDep){if(S&&S.registerDep(x,Me),!d.el){const P=x.subTree=ne(Dr);y(null,P,m,w)}return}Me(x,d,m,w,S,R,L)},We=(d,m,w)=>{const E=m.component=d.component;if(_b(d,m,w))if(E.asyncDep&&!E.asyncResolved){we(E,m,w);return}else E.next=m,mb(E.update),E.update();else m.el=d.el,E.vnode=m},Me=(d,m,w,E,S,R,L)=>{const x=()=>{if(d.isMounted){let{next:H,bu:$,u:K,parent:J,vnode:oe}=d,be=H,ve;fr(d,!1),H?(H.el=oe.el,we(d,H,L)):H=oe,$&&sa($),(ve=H.props&&H.props.onVnodeBeforeUpdate)&&Kt(ve,J,H,oe),fr(d,!0);const Fe=ul(d),Dt=d.subTree;d.subTree=Fe,v(Dt,Fe,h(Dt.el),D(Dt),d,S,R),H.el=Fe.el,be===null&&Eb(d,Fe.el),K&&vt(K,S),(ve=H.props&&H.props.onVnodeUpdated)&&vt(()=>Kt(ve,J,H,oe),S)}else{let H;const{el:$,props:K}=m,{bm:J,m:oe,parent:be}=d,ve=oa(m);if(fr(d,!1),J&&sa(J),!ve&&(H=K&&K.onVnodeBeforeMount)&&Kt(H,be,m),fr(d,!0),$&&ie){const Fe=()=>{d.subTree=ul(d),ie($,d.subTree,d,S,null)};ve?m.type.__asyncLoader().then(()=>!d.isUnmounted&&Fe()):Fe()}else{const Fe=d.subTree=ul(d);v(null,Fe,w,E,d,S,R),m.el=Fe.el}if(oe&&vt(oe,S),!ve&&(H=K&&K.onVnodeMounted)){const Fe=m;vt(()=>Kt(H,be,Fe),S)}(m.shapeFlag&256||be&&oa(be.vnode)&&be.vnode.shapeFlag&256)&&d.a&&vt(d.a,S),d.isMounted=!0,m=w=E=null}},P=d.effect=new sh(x,()=>fh(A),d.scope),A=d.update=()=>P.run();A.id=d.uid,fr(d,!0),A()},we=(d,m,w)=>{m.component=d;const E=d.vnode.props;d.vnode=m,d.next=null,Gb(d,m.props,E,w),Xb(d,m.children,w),Ds(),vd(),Ls()},ye=(d,m,w,E,S,R,L,x,P=!1)=>{const A=d&&d.children,H=d?d.shapeFlag:0,$=m.children,{patchFlag:K,shapeFlag:J}=m;if(K>0){if(K&128){ur(A,$,w,E,S,R,L,x,P);return}else if(K&256){Pt(A,$,w,E,S,R,L,x,P);return}}J&8?(H&16&&M(A,S,R),$!==A&&u(w,$)):H&16?J&16?ur(A,$,w,E,S,R,L,x,P):M(A,S,R,!0):(H&8&&u(w,""),J&16&&Z($,w,E,S,R,L,x,P))},Pt=(d,m,w,E,S,R,L,x,P)=>{d=d||os,m=m||os;const A=d.length,H=m.length,$=Math.min(A,H);let K;for(K=0;K<$;K++){const J=m[K]=P?Dn(m[K]):Gt(m[K]);v(d[K],J,w,null,S,R,L,x,P)}A>H?M(d,S,R,!0,!1,$):Z(m,w,E,S,R,L,x,P,$)},ur=(d,m,w,E,S,R,L,x,P)=>{let A=0;const H=m.length;let $=d.length-1,K=H-1;for(;A<=$&&A<=K;){const J=d[A],oe=m[A]=P?Dn(m[A]):Gt(m[A]);if(Ws(J,oe))v(J,oe,w,null,S,R,L,x,P);else break;A++}for(;A<=$&&A<=K;){const J=d[$],oe=m[K]=P?Dn(m[K]):Gt(m[K]);if(Ws(J,oe))v(J,oe,w,null,S,R,L,x,P);else break;$--,K--}if(A>$){if(A<=K){const J=K+1,oe=J<H?m[J].el:E;for(;A<=K;)v(null,m[A]=P?Dn(m[A]):Gt(m[A]),w,oe,S,R,L,x,P),A++}}else if(A>K)for(;A<=$;)gt(d[A],S,R,!0),A++;else{const J=A,oe=A,be=new Map;for(A=oe;A<=K;A++){const Et=m[A]=P?Dn(m[A]):Gt(m[A]);Et.key!=null&&be.set(Et.key,A)}let ve,Fe=0;const Dt=K-oe+1;let Qr=!1,od=0;const Ks=new Array(Dt);for(A=0;A<Dt;A++)Ks[A]=0;for(A=J;A<=$;A++){const Et=d[A];if(Fe>=Dt){gt(Et,S,R,!0);continue}let Ht;if(Et.key!=null)Ht=be.get(Et.key);else for(ve=oe;ve<=K;ve++)if(Ks[ve-oe]===0&&Ws(Et,m[ve])){Ht=ve;break}Ht===void 0?gt(Et,S,R,!0):(Ks[Ht-oe]=A+1,Ht>=od?od=Ht:Qr=!0,v(Et,m[Ht],w,null,S,R,L,x,P),Fe++)}const ad=Qr?n_(Ks):os;for(ve=ad.length-1,A=Dt-1;A>=0;A--){const Et=oe+A,Ht=m[Et],cd=Et+1<H?m[Et+1].el:E;Ks[A]===0?v(null,Ht,w,cd,S,R,L,x,P):Qr&&(ve<0||A!==ad[ve]?Nt(Ht,w,cd,2):ve--)}}},Nt=(d,m,w,E,S=null)=>{const{el:R,type:L,transition:x,children:P,shapeFlag:A}=d;if(A&6){Nt(d.component.subTree,m,w,E);return}if(A&128){d.suspense.move(m,w,E);return}if(A&64){L.move(d,m,w,le);return}if(L===Wt){r(R,m,w);for(let $=0;$<P.length;$++)Nt(P[$],m,w,E);r(d.anchor,m,w);return}if(L===aa){k(d,m,w);return}if(E!==2&&A&1&&x)if(E===0)x.beforeEnter(R),r(R,m,w),vt(()=>x.enter(R),S);else{const{leave:$,delayLeave:K,afterLeave:J}=x,oe=()=>r(R,m,w),be=()=>{$(R,()=>{oe(),J&&J()})};K?K(R,oe,be):be()}else r(R,m,w)},gt=(d,m,w,E=!1,S=!1)=>{const{type:R,props:L,ref:x,children:P,dynamicChildren:A,shapeFlag:H,patchFlag:$,dirs:K}=d;if(x!=null&&Ql(x,null,w,d,!0),H&256){m.ctx.deactivate(d);return}const J=H&1&&K,oe=!oa(d);let be;if(oe&&(be=L&&L.onVnodeBeforeUnmount)&&Kt(be,m,d),H&6)T(d.component,w,E);else{if(H&128){d.suspense.unmount(w,E);return}J&&hr(d,null,m,"beforeUnmount"),H&64?d.type.remove(d,m,w,S,le,E):A&&(R!==Wt||$>0&&$&64)?M(A,m,w,!1,!0):(R===Wt&&$&384||!S&&H&16)&&M(P,m,w),E&&Yr(d)}(oe&&(be=L&&L.onVnodeUnmounted)||J)&&vt(()=>{be&&Kt(be,m,d),J&&hr(d,null,m,"unmounted")},w)},Yr=d=>{const{type:m,el:w,anchor:E,transition:S}=d;if(m===Wt){Po(w,E);return}if(m===aa){O(d);return}const R=()=>{s(w),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(d.shapeFlag&1&&S&&!S.persisted){const{leave:L,delayLeave:x}=S,P=()=>L(w,R);x?x(d.el,R,P):P()}else R()},Po=(d,m)=>{let w;for(;d!==m;)w=f(d),s(d),d=w;s(m)},T=(d,m,w)=>{const{bum:E,scope:S,update:R,subTree:L,um:x}=d;E&&sa(E),S.stop(),R&&(R.active=!1,gt(L,d,m,w)),x&&vt(x,m),vt(()=>{d.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},M=(d,m,w,E=!1,S=!1,R=0)=>{for(let L=R;L<d.length;L++)gt(d[L],m,w,E,S)},D=d=>d.shapeFlag&6?D(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),z=(d,m,w)=>{d==null?m._vnode&&gt(m._vnode,null,null,!0):v(m._vnode||null,d,m,null,null,null,w),vd(),Cg(),m._vnode=d},le={p:v,um:gt,m:Nt,r:Yr,mt:_t,mc:Z,pc:ye,pbc:Le,n:D,o:t};let Re,ie;return e&&([Re,ie]=e(le)),{render:z,hydrate:Re,createApp:Zb(z,Re)}}function fr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function zg(t,e,n=!1){const r=t.children,s=e.children;if(G(r)&&G(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Dn(s[i]),a.el=o.el),n||zg(o,a)),a.type===hc&&(a.el=o.el)}}function n_(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const r_=t=>t.__isTeleport,Wt=Symbol(void 0),hc=Symbol(void 0),Dr=Symbol(void 0),aa=Symbol(void 0),li=[];let Ft=null;function un(t=!1){li.push(Ft=t?null:[])}function s_(){li.pop(),Ft=li[li.length-1]||null}let xi=1;function Ad(t){xi+=t}function Hg(t){return t.dynamicChildren=xi>0?Ft||os:null,s_(),xi>0&&Ft&&Ft.push(t),t}function gr(t,e,n,r,s,i){return Hg(he(t,e,n,r,s,i,!0))}function Kg(t,e,n,r,s){return Hg(ne(t,e,n,r,s,!0))}function Xl(t){return t?t.__v_isVNode===!0:!1}function Ws(t,e){return t.type===e.type&&t.key===e.key}const fc="__vInternal",Wg=({key:t})=>t!=null?t:null,ca=({ref:t,ref_key:e,ref_for:n})=>t!=null?ze(t)||De(t)||re(t)?{i:Tt,r:t,k:e,f:!!n}:t:null;function he(t,e=null,n=null,r=0,s=null,i=t===Wt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wg(e),ref:e&&ca(e),scopeId:lc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return a?(mh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),xi>0&&!o&&Ft&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ft.push(c),c}const ne=i_;function i_(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$b)&&(t=Dr),Xl(t)){const a=ys(t,e,!0);return n&&mh(a,n),xi>0&&!i&&Ft&&(a.shapeFlag&6?Ft[Ft.indexOf(t)]=a:Ft.push(a)),a.patchFlag|=-2,a}if(y_(t)&&(t=t.__vccOpts),e){e=o_(e);let{class:a,style:c}=e;a&&!ze(a)&&(e.class=Tr(a)),Ie(c)&&(bg(c)&&!G(c)&&(c=dt({},c)),e.style=Ju(c))}const o=ze(t)?1:Ib(t)?128:r_(t)?64:Ie(t)?4:re(t)?2:0;return he(t,e,n,r,s,o,i,!0)}function o_(t){return t?bg(t)||fc in t?dt({},t):t:null}function ys(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?a_(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Wg(a),ref:e&&e.ref?n&&s?G(s)?s.concat(ca(e)):[s,ca(e)]:ca(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Wt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ys(t.ssContent),ssFallback:t.ssFallback&&ys(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function ei(t=" ",e=0){return ne(hc,null,t,e)}function p3(t,e){const n=ne(aa,null,t);return n.staticCount=e,n}function Gs(t="",e=!1){return e?(un(),Kg(Dr,null,t)):ne(Dr,null,t)}function Gt(t){return t==null||typeof t=="boolean"?ne(Dr):G(t)?ne(Wt,null,t.slice()):typeof t=="object"?Dn(t):ne(hc,null,String(t))}function Dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ys(t)}function mh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),mh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(fc in e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[ei(e)]):n=8);t.children=e,t.shapeFlag|=n}function a_(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tr([e.class,r.class]));else if(s==="style")e.style=Ju([e.style,r.style]);else if(rc(s)){const i=e[s],o=r[s];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Vt(t,e,7,[n,r])}const c_=qg();let l_=0;function u_(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||c_,i={uid:l_++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ag(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$g(r,s),emitsOptions:Rg(r,s),emit:null,emitted:null,propsDefaults:Te,inheritAttrs:r.inheritAttrs,ctx:Te,data:Te,props:Te,attrs:Te,slots:Te,refs:Te,setupState:Te,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vb.bind(null,i),t.ce&&t.ce(i),i}let Ye=null;const h_=()=>Ye||Tt,vs=t=>{Ye=t,t.scope.on()},kr=()=>{Ye&&Ye.scope.off(),Ye=null};function Gg(t){return t.vnode.shapeFlag&4}let Ri=!1;function f_(t,e=!1){Ri=e;const{props:n,children:r}=t.vnode,s=Gg(t);Wb(t,n,s,e),Qb(t,r);const i=s?d_(t,e):void 0;return Ri=!1,i}function d_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gs(new Proxy(t.ctx,Bb));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?m_(t):null;vs(t),Ds();const i=Hn(r,t,0,[t.props,s]);if(Ls(),kr(),sg(i)){if(i.then(kr,kr),e)return i.then(o=>{Cd(t,o,e)}).catch(o=>{ac(o,t,0)});t.asyncDep=i}else Cd(t,i,e)}else Yg(t,e)}function Cd(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Tg(e)),Yg(t,n)}let xd;function Yg(t,e,n){const r=t.type;if(!t.render){if(!e&&xd&&!r.render){const s=r.template||dh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=dt(dt({isCustomElement:i,delimiters:a},o),c);r.render=xd(s,l)}}t.render=r.render||$t}vs(t),Ds(),jb(t),Ls(),kr()}function p_(t){return new Proxy(t.attrs,{get(e,n){return St(t,"get","$attrs"),e[n]}})}function m_(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=p_(t))},slots:t.slots,emit:t.emit,expose:e}}function dc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Tg(gs(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ci)return ci[n](t)},has(e,n){return n in e||n in ci}}))}function g_(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function y_(t){return re(t)&&"__vccOpts"in t}const Ce=(t,e)=>fb(t,e,Ri);function pc(t,e,n){const r=arguments.length;return r===2?Ie(e)&&!G(e)?Xl(e)?ne(t,null,[e]):ne(t,e):ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xl(n)&&(n=[n]),ne(t,e,n))}const v_=Symbol(""),w_=()=>Rt(v_),b_="3.2.45",__="http://www.w3.org/2000/svg",yr=typeof document!="undefined"?document:null,Rd=yr&&yr.createElement("template"),E_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?yr.createElementNS(__,t):yr.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>yr.createTextNode(t),createComment:t=>yr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>yr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rd.innerHTML=r?`<svg>${t}</svg>`:t;const a=Rd.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function I_(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function T_(t,e,n){const r=t.style,s=ze(n);if(n&&!s){for(const i in n)Jl(r,i,n[i]);if(e&&!ze(e))for(const i in e)n[i]==null&&Jl(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Od=/\s*!important$/;function Jl(t,e,n){if(G(n))n.forEach(r=>Jl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=S_(t,e);Od.test(n)?t.setProperty(zr(r),n.replace(Od,""),"important"):t[r]=n}}const Pd=["Webkit","Moz","ms"],fl={};function S_(t,e){const n=fl[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return fl[e]=r;r=ic(r);for(let s=0;s<Pd.length;s++){const i=Pd[s]+r;if(i in t)return fl[e]=i}return e}const Nd="http://www.w3.org/1999/xlink";function k_(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Nd,e.slice(6,e.length)):t.setAttributeNS(Nd,e,n);else{const i=_w(e);n==null||i&&!ng(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function A_(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n==null?"":n;(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ng(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function hn(t,e,n,r){t.addEventListener(e,n,r)}function C_(t,e,n,r){t.removeEventListener(e,n,r)}function x_(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=R_(e);if(r){const l=i[e]=N_(r,s);hn(t,a,l,c)}else o&&(C_(t,a,o,c),i[e]=void 0)}}const Dd=/(?:Once|Passive|Capture)$/;function R_(t){let e;if(Dd.test(t)){e={};let r;for(;r=t.match(Dd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zr(t.slice(2)),e]}let dl=0;const O_=Promise.resolve(),P_=()=>dl||(O_.then(()=>dl=0),dl=Date.now());function N_(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Vt(D_(r,n.value),e,5,[r])};return n.value=t,n.attached=P_(),n}function D_(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ld=/^on[a-z]/,L_=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?I_(t,r,s):e==="style"?T_(t,n,r):rc(e)?eh(e)||x_(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):M_(t,e,r,s))?A_(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),k_(t,e,r,s))};function M_(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ld.test(e)&&re(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ld.test(e)&&ze(n)?!1:e in t}const Qn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>sa(e,n):e};function F_(t){t.target.composing=!0}function Md(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const U_={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Qn(s);const i=r||s.props&&s.props.type==="number";hn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ti(a)),t._assign(a)}),n&&hn(t,"change",()=>{t.value=t.value.trim()}),e||(hn(t,"compositionstart",F_),hn(t,"compositionend",Md),hn(t,"change",Md))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Qn(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&Ti(t.value)===e))return;const o=e==null?"":e;t.value!==o&&(t.value=o)}},m3={deep:!0,created(t,e,n){t._assign=Qn(n),hn(t,"change",()=>{const r=t._modelValue,s=ws(t),i=t.checked,o=t._assign;if(G(r)){const a=Zu(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Ns(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Qg(t,i))})},mounted:Fd,beforeUpdate(t,e,n){t._assign=Qn(n),Fd(t,e,n)}};function Fd(t,{value:e,oldValue:n},r){t._modelValue=e,G(e)?t.checked=Zu(e,r.props.value)>-1:Ns(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Nr(e,Qg(t,!0)))}const g3={created(t,{value:e},n){t.checked=Nr(e,n.props.value),t._assign=Qn(n),hn(t,"change",()=>{t._assign(ws(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t._assign=Qn(r),e!==n&&(t.checked=Nr(e,r.props.value))}},y3={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ns(e);hn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ti(ws(o)):ws(o));t._assign(t.multiple?s?new Set(i):i:i[0])}),t._assign=Qn(r)},mounted(t,{value:e}){Ud(t,e)},beforeUpdate(t,e,n){t._assign=Qn(n)},updated(t,{value:e}){Ud(t,e)}};function Ud(t,e){const n=t.multiple;if(!(n&&!G(e)&&!Ns(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=ws(i);if(n)G(e)?i.selected=Zu(e,o)>-1:i.selected=e.has(o);else if(Nr(ws(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ws(t){return"_value"in t?t._value:t.value}function Qg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const $_=["ctrl","shift","alt","meta"],V_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>$_.some(n=>t[`${n}Key`]&&!e.includes(n))},v3=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=V_[e[s]];if(i&&i(n,e))return}return t(n,...r)},B_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},j_=(t,e)=>n=>{if(!("key"in n))return;const r=zr(n.key);if(e.some(s=>s===r||B_[s]===r))return t(n)},w3={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ys(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Ys(t,!0),r.enter(t)):r.leave(t,()=>{Ys(t,!1)}):Ys(t,e))},beforeUnmount(t,{value:e}){Ys(t,e)}};function Ys(t,e){t.style.display=e?t._vod:"none"}const q_=dt({patchProp:L_},E_);let $d;function z_(){return $d||($d=e_(q_))}const H_=(...t)=>{const e=z_().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=K_(r);if(!s)return;const i=e._component;!re(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function K_(t){return ze(t)?document.querySelector(t):t}var W_=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let Xg;const mc=t=>Xg=t,Jg=Symbol();function Zl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ui;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ui||(ui={}));function G_(){const t=cg(!0),e=t.run(()=>ki({}));let n=[],r=[];const s=gs({install(i){mc(s),s._a=i,i.provide(Jg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!W_?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Zg=()=>{};function Vd(t,e,n,r=Zg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ow()&&Pw(s),s}function Xr(t,...e){t.slice().forEach(n=>{n(...e)})}function eu(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Zl(s)&&Zl(r)&&t.hasOwnProperty(n)&&!De(r)&&!zn(r)?t[n]=eu(s,r):t[n]=r}return t}const Y_=Symbol();function Q_(t){return!Zl(t)||!t.hasOwnProperty(Y_)}const{assign:Ln}=Object;function X_(t){return!!(De(t)&&t.effect)}function J_(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=cb(n.state.value[t]);return Ln(u,i,Object.keys(o||{}).reduce((h,f)=>(h[f]=gs(Ce(()=>{mc(n);const p=n._s.get(t);return o[f].call(p,p)})),h),{}))}return c=ey(t,l,e,n,r,!0),c.$reset=function(){const h=s?s():{};this.$patch(f=>{Ln(f,h)})},c}function ey(t,e,n={},r,s,i){let o;const a=Ln({actions:{}},n),c={deep:!0};let l,u,h=gs([]),f=gs([]),p;const g=r.state.value[t];!i&&!g&&(r.state.value[t]={}),ki({});let v;function I(W){let Z;l=u=!1,typeof W=="function"?(W(r.state.value[t]),Z={type:ui.patchFunction,storeId:t,events:p}):(eu(r.state.value[t],W),Z={type:ui.patchObject,payload:W,storeId:t,events:p});const ge=v=Symbol();hh().then(()=>{v===ge&&(l=!0)}),u=!0,Xr(h,Z,r.state.value[t])}const y=Zg;function b(){o.stop(),h=[],f=[],r._s.delete(t)}function k(W,Z){return function(){mc(r);const ge=Array.from(arguments),Le=[],mt=[];function Ct(We){Le.push(We)}function xn(We){mt.push(We)}Xr(f,{args:ge,name:W,store:U,after:Ct,onError:xn});let _t;try{_t=Z.apply(this&&this.$id===t?this:U,ge)}catch(We){throw Xr(mt,We),We}return _t instanceof Promise?_t.then(We=>(Xr(Le,We),We)).catch(We=>(Xr(mt,We),Promise.reject(We))):(Xr(Le,_t),_t)}}const O={_p:r,$id:t,$onAction:Vd.bind(null,f),$patch:I,$reset:y,$subscribe(W,Z={}){const ge=Vd(h,W,Z.detached,()=>Le()),Le=o.run(()=>ls(()=>r.state.value[t],mt=>{(Z.flush==="sync"?u:l)&&W({storeId:t,type:ui.direct,events:p},mt)},Ln({},c,Z)));return ge},$dispose:b},U=Ms(O);r._s.set(t,U);const se=r._e.run(()=>(o=cg(),o.run(()=>e())));for(const W in se){const Z=se[W];if(De(Z)&&!X_(Z)||zn(Z))i||(g&&Q_(Z)&&(De(Z)?Z.value=g[W]:eu(Z,g[W])),r.state.value[t][W]=Z);else if(typeof Z=="function"){const ge=k(W,Z);se[W]=ge,a.actions[W]=Z}}return Ln(U,se),Ln(de(U),se),Object.defineProperty(U,"$state",{get:()=>r.state.value[t],set:W=>{I(Z=>{Ln(Z,W)})}}),r._p.forEach(W=>{Ln(U,o.run(()=>W({store:U,app:r._a,pinia:r,options:a})))}),g&&i&&n.hydrate&&n.hydrate(U.$state,g),l=!0,u=!0,U}function eo(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=h_();return a=a||l&&Rt(Jg,null),a&&mc(a),a=Xg,a._s.has(r)||(i?ey(r,e,s,a):J_(r,s,a)),a._s.get(r)}return o.$id=r,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Z_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ny={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(f=64)),r.push(n[u],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ty(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Z_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw Error();const f=i<<2|a>>4;if(r.push(f),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},eE=function(t){const e=ty(t);return ny.encodeByteArray(e,!0)},Ta=function(t){return eE(t).replace(/\./g,"")},ry=function(t){try{return ny.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tE(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function nE(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function iE(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oE(){try{return typeof indexedDB=="object"}catch{return!1}}function aE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function cE(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=()=>cE().__FIREBASE_DEFAULTS__,uE=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hE=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ry(t[1]);return e&&JSON.parse(e)},gh=()=>{try{return lE()||uE()||hE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sy=t=>{var e,n;return(n=(e=gh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iy=t=>{const e=sy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fE=()=>{var t;return(t=gh())===null||t===void 0?void 0:t.config},oy=t=>{var e;return(e=gh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pE,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mE(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new on(s,a,r)}}function mE(t,e){return t.replace(gE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gE=/\{\$([^}]+)}/g;function yE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bd(i)&&Bd(o)){if(!Sa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ni(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vE(t,e){const n=new wE(t,e);return n.subscribe.bind(n)}class wE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=pl),s.error===void 0&&(s.error=pl),s.complete===void 0&&(s.complete=pl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IE(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:EE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EE(t){return t===pr?void 0:t}function IE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _E(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const SE={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},kE=fe.INFO,AE={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},CE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=AE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yh{constructor(e){this.name=e,this._logLevel=kE,this._logHandler=CE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const xE=(t,e)=>e.some(n=>t instanceof n);let jd,qd;function RE(){return jd||(jd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OE(){return qd||(qd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cy=new WeakMap,tu=new WeakMap,ly=new WeakMap,ml=new WeakMap,vh=new WeakMap;function PE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cy.set(n,t)}).catch(()=>{}),vh.set(e,t),e}function NE(t){if(tu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});tu.set(t,e)}let nu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ly.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DE(t){nu=t(nu)}function LE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gl(this),e,...n);return ly.set(r,e.sort?e.sort():[e]),Kn(r)}:OE().includes(t)?function(...e){return t.apply(gl(this),e),Kn(cy.get(this))}:function(...e){return Kn(t.apply(gl(this),e))}}function ME(t){return typeof t=="function"?LE(t):(t instanceof IDBTransaction&&NE(t),xE(t,RE())?new Proxy(t,nu):t)}function Kn(t){if(t instanceof IDBRequest)return PE(t);if(ml.has(t))return ml.get(t);const e=ME(t);return e!==t&&(ml.set(t,e),vh.set(e,t)),e}const gl=t=>vh.get(t);function FE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Kn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kn(o.result),c.oldVersion,c.newVersion,Kn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const UE=["get","getKey","getAll","getAllKeys","count"],$E=["put","add","delete","clear"],yl=new Map;function zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yl.get(e))return yl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$E.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return yl.set(e,i),i}DE(t=>({...t,get:(e,n,r)=>zd(e,n)||t.get(e,n,r),has:(e,n)=>!!zd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ru="@firebase/app",Hd="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new yh("@firebase/app"),jE="@firebase/app-compat",qE="@firebase/analytics-compat",zE="@firebase/analytics",HE="@firebase/app-check-compat",KE="@firebase/app-check",WE="@firebase/auth",GE="@firebase/auth-compat",YE="@firebase/database",QE="@firebase/database-compat",XE="@firebase/functions",JE="@firebase/functions-compat",ZE="@firebase/installations",e2="@firebase/installations-compat",t2="@firebase/messaging",n2="@firebase/messaging-compat",r2="@firebase/performance",s2="@firebase/performance-compat",i2="@firebase/remote-config",o2="@firebase/remote-config-compat",a2="@firebase/storage",c2="@firebase/storage-compat",l2="@firebase/firestore",u2="@firebase/firestore-compat",h2="firebase",f2="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="[DEFAULT]",d2={[ru]:"fire-core",[jE]:"fire-core-compat",[zE]:"fire-analytics",[qE]:"fire-analytics-compat",[KE]:"fire-app-check",[HE]:"fire-app-check-compat",[WE]:"fire-auth",[GE]:"fire-auth-compat",[YE]:"fire-rtdb",[QE]:"fire-rtdb-compat",[XE]:"fire-fn",[JE]:"fire-fn-compat",[ZE]:"fire-iid",[e2]:"fire-iid-compat",[t2]:"fire-fcm",[n2]:"fire-fcm-compat",[r2]:"fire-perf",[s2]:"fire-perf-compat",[i2]:"fire-rc",[o2]:"fire-rc-compat",[a2]:"fire-gcs",[c2]:"fire-gcs-compat",[l2]:"fire-fst",[u2]:"fire-fst-compat","fire-js":"fire-js",[h2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Map,iu=new Map;function p2(t,e){try{t.container.addComponent(e)}catch(n){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Mr(t){const e=t.name;if(iu.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,t);for(const n of ka.values())p2(n,t);return!0}function gc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wn=new to("app","Firebase",m2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=f2;function uy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:su,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=fE()),!n)throw Wn.create("no-options");const i=ka.get(s);if(i){if(Sa(n,i.options)&&Sa(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const o=new TE(s);for(const c of iu.values())o.addComponent(c);const a=new g2(n,r,o);return ka.set(s,a),a}function wh(t=su){const e=ka.get(t);if(!e&&t===su)return uy();if(!e)throw Wn.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let s=(r=d2[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(a.join(" "));return}Mr(new Xn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2="firebase-heartbeat-database",v2=1,Oi="firebase-heartbeat-store";let vl=null;function hy(){return vl||(vl=FE(y2,v2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oi)}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),vl}async function w2(t){try{return(await hy()).transaction(Oi).objectStore(Oi).get(fy(t))}catch(e){if(e instanceof on)Lr.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(n.message)}}}async function Kd(t,e){try{const r=(await hy()).transaction(Oi,"readwrite");return await r.objectStore(Oi).put(e,fy(t)),r.done}catch(n){if(n instanceof on)Lr.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Lr.warn(r.message)}}}function fy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2=1024,_2=30*24*60*60*1e3;class E2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new T2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=_2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wd(),{heartbeatsToSend:n,unsentEntries:r}=I2(this._heartbeatsCache.heartbeats),s=Ta(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wd(){return new Date().toISOString().substring(0,10)}function I2(t,e=b2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Gd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class T2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oE()?aE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await w2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gd(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t){Mr(new Xn("platform-logger",e=>new VE(e),"PRIVATE")),Mr(new Xn("heartbeat",e=>new E2(e),"PRIVATE")),Zt(ru,Hd,t),Zt(ru,Hd,"esm2017"),Zt("fire-js","")}S2("");var k2="firebase",A2="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt(k2,A2,"app");var C2=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},B,bh=bh||{},X=C2||self;function Aa(){}function yc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ro(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function x2(t){return Object.prototype.hasOwnProperty.call(t,wl)&&t[wl]||(t[wl]=++R2)}var wl="closure_uid_"+(1e9*Math.random()>>>0),R2=0;function O2(t,e,n){return t.call.apply(t.bind,arguments)}function P2(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=O2:st=P2,st.apply(null,arguments)}function $o(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ze(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function sr(){this.s=this.s,this.o=this.o}var N2=0;sr.prototype.s=!1;sr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),N2!=0)&&x2(this)};sr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const dy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function _h(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yc(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var D2=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",Aa,e),X.removeEventListener("test",Aa,e)}catch{}return t}();function Ca(t){return/^[\s\xa0]*$/.test(t)}var Qd=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function bl(t,e){return t<e?-1:t>e?1:0}function vc(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return vc().indexOf(t)!=-1}function Eh(t){return Eh[" "](t),t}Eh[" "]=Aa;function L2(t){var e=U2;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var M2=Qt("Opera"),bs=Qt("Trident")||Qt("MSIE"),py=Qt("Edge"),ou=py||bs,my=Qt("Gecko")&&!(vc().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),F2=vc().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function gy(){var t=X.document;return t?t.documentMode:void 0}var xa;e:{var _l="",El=function(){var t=vc();if(my)return/rv:([^\);]+)(\)|;)/.exec(t);if(py)return/Edge\/([\d\.]+)/.exec(t);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(F2)return/WebKit\/(\S+)/.exec(t);if(M2)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(El&&(_l=El?El[1]:""),bs){var Il=gy();if(Il!=null&&Il>parseFloat(_l)){xa=String(Il);break e}}xa=_l}var U2={};function $2(){return L2(function(){let t=0;const e=Qd(String(xa)).split("."),n=Qd("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=bl(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||bl(s[2].length==0,i[2].length==0)||bl(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var au;if(X.document&&bs){var Xd=gy();au=Xd||parseInt(xa,10)||void 0}else au=void 0;var V2=au;function Pi(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(my){e:{try{Eh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:B2[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Pi.X.h.call(this)}}Ze(Pi,it);var B2={2:"touch",3:"pen",4:"mouse"};Pi.prototype.h=function(){Pi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var so="closure_listenable_"+(1e6*Math.random()|0),j2=0;function q2(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++j2,this.ba=this.ea=!1}function wc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ih(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function yy(t){const e={};for(const n in t)e[n]=t[n];return e}const Jd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vy(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Jd.length;i++)n=Jd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function bc(t){this.src=t,this.g={},this.h=0}bc.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=lu(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new q2(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function cu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=dy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(wc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function lu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var Th="closure_lm_"+(1e6*Math.random()|0),Tl={};function wy(t,e,n,r,s){if(r&&r.once)return _y(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)wy(t,e[i],n,r,s);return null}return n=Ah(n),t&&t[so]?t.N(e,n,ro(r)?!!r.capture:!!r,s):by(t,e,n,!1,r,s)}function by(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=ro(s)?!!s.capture:!!s,a=kh(t);if(a||(t[Th]=a=new bc(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=z2(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)D2||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Iy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function z2(){function t(n){return e.call(t.src,t.listener,n)}const e=H2;return t}function _y(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_y(t,e[i],n,r,s);return null}return n=Ah(n),t&&t[so]?t.O(e,n,ro(r)?!!r.capture:!!r,s):by(t,e,n,!0,r,s)}function Ey(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ey(t,e[i],n,r,s);else r=ro(r)?!!r.capture:!!r,n=Ah(n),t&&t[so]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=lu(i,n,r,s),-1<n&&(wc(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=kh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lu(e,n,r,s)),(n=-1<t?e[t]:null)&&Sh(n))}function Sh(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[so])cu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Iy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=kh(e))?(cu(n,t),n.h==0&&(n.src=null,e[Th]=null)):wc(t)}}}function Iy(t){return t in Tl?Tl[t]:Tl[t]="on"+t}function H2(t,e){if(t.ba)t=!0;else{e=new Pi(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Sh(t),t=n.call(r,e)}return t}function kh(t){return t=t[Th],t instanceof bc?t:null}var Sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ah(t){return typeof t=="function"?t:(t[Sl]||(t[Sl]=function(e){return t.handleEvent(e)}),t[Sl])}function Qe(){sr.call(this),this.i=new bc(this),this.P=this,this.I=null}Ze(Qe,sr);Qe.prototype[so]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){Ey(this,t,e,n,r)};function Je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var s=e;e=new it(r,t),vy(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Vo(o,r,!0,e)&&s}if(o=e.g=t,s=Vo(o,r,!0,e)&&s,s=Vo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Vo(o,r,!1,e)&&s}Qe.prototype.M=function(){if(Qe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wc(n[r]);delete t.g[e],t.h--}}this.I=null};Qe.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Vo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&cu(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Ch=X.JSON.stringify;function K2(){var t=ky;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class W2{constructor(){this.h=this.g=null}add(e,n){const r=Ty.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ty=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new G2,t=>t.reset());class G2{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Y2(t){X.setTimeout(()=>{throw t},0)}function Sy(t,e){uu||Q2(),hu||(uu(),hu=!0),ky.add(t,e)}var uu;function Q2(){var t=X.Promise.resolve(void 0);uu=function(){t.then(X2)}}var hu=!1,ky=new W2;function X2(){for(var t;t=K2();){try{t.h.call(t.g)}catch(n){Y2(n)}var e=Ty;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hu=!1}function _c(t,e){Qe.call(this),this.h=t||1,this.g=e||X,this.j=st(this.lb,this),this.l=Date.now()}Ze(_c,Qe);B=_c.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Je(this,"tick"),this.ca&&(xh(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function xh(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){_c.X.M.call(this),xh(this),delete this.g};function Rh(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Ay(t){t.g=Rh(()=>{t.g=null,t.i&&(t.i=!1,Ay(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class J2 extends sr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ay(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ni(t){sr.call(this),this.h=t,this.g={}}Ze(Ni,sr);var Zd=[];function Cy(t,e,n,r){Array.isArray(n)||(n&&(Zd[0]=n.toString()),n=Zd);for(var s=0;s<n.length;s++){var i=wy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function xy(t){Ih(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sh(e)},t),t.g={}}Ni.prototype.M=function(){Ni.X.M.call(this),xy(this)};Ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ec(){this.g=!0}Ec.prototype.Aa=function(){this.g=!1};function Z2(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function eI(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ns(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+nI(t,n)+(r?" "+r:"")})}function tI(t,e){t.info(function(){return"TIMEOUT: "+e})}Ec.prototype.info=function(){};function nI(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Ch(n)}catch{return e}}var Hr={},ep=null;function Ic(){return ep=ep||new Qe}Hr.Pa="serverreachability";function Ry(t){it.call(this,Hr.Pa,t)}Ze(Ry,it);function Di(t){const e=Ic();Je(e,new Ry(e))}Hr.STAT_EVENT="statevent";function Oy(t,e){it.call(this,Hr.STAT_EVENT,t),this.stat=e}Ze(Oy,it);function ht(t){const e=Ic();Je(e,new Oy(e,t))}Hr.Qa="timingevent";function Py(t,e){it.call(this,Hr.Qa,t),this.size=e}Ze(Py,it);function io(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var Tc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ny={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Oh(){}Oh.prototype.h=null;function tp(t){return t.h||(t.h=t.i())}function Dy(){}var oo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ph(){it.call(this,"d")}Ze(Ph,it);function Nh(){it.call(this,"c")}Ze(Nh,it);var fu;function Sc(){}Ze(Sc,Oh);Sc.prototype.g=function(){return new XMLHttpRequest};Sc.prototype.i=function(){return{}};fu=new Sc;function ao(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ni(this),this.O=rI,t=ou?125:void 0,this.T=new _c(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Ly}function Ly(){this.i=null,this.g="",this.h=!1}var rI=45e3,du={},Ra={};B=ao.prototype;B.setTimeout=function(t){this.O=t};function pu(t,e,n){t.K=1,t.v=Ac(yn(e)),t.s=n,t.P=!0,My(t,null)}function My(t,e){t.F=Date.now(),co(t),t.A=yn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),zy(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Ly,t.g=hv(t.l,n?e:null,!t.s),0<t.N&&(t.L=new J2(st(t.La,t,t.g),t.N)),Cy(t.S,t.g,"readystatechange",t.ib),e=t.H?yy(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Di(),Z2(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&fn(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const u=fn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||ou||this.g&&(this.h.h||this.g.fa()||ip(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Di(3):Di(2)),kc(this);var n=this.g.aa();this.Y=n;t:if(Fy(this)){var r=ip(this.g);t="";var s=r.length,i=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){wr(this),hi(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,eI(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ca(a)){var l=a;break t}}l=null}if(n=l)ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,mu(this,n);else{this.i=!1,this.o=3,ht(12),wr(this),hi(this);break e}}this.P?(Uy(this,u,o),ou&&this.i&&u==3&&(Cy(this.S,this.T,"tick",this.hb),this.T.start())):(ns(this.j,this.m,o,null),mu(this,o)),u==4&&wr(this),this.i&&!this.I&&(u==4?av(this.l,this):(this.i=!1,co(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ht(12)):(this.o=0,ht(13)),wr(this),hi(this)}}}catch{}finally{}};function Fy(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Uy(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=sI(t,n),s==Ra){e==4&&(t.o=4,ht(14),r=!1),ns(t.j,t.m,null,"[Incomplete Response]");break}else if(s==du){t.o=4,ht(15),ns(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ns(t.j,t.m,s,null),mu(t,s);Fy(t)&&s!=Ra&&s!=du&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vh(e),e.K=!0,ht(11))):(ns(t.j,t.m,n,"[Invalid Chunked Response]"),wr(t),hi(t))}B.hb=function(){if(this.g){var t=fn(this.g),e=this.g.fa();this.C<e.length&&(kc(this),Uy(this,t,e),this.i&&t!=4&&co(this))}};function sI(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ra:(n=Number(e.substring(n,r)),isNaN(n)?du:(r+=1,r+n>e.length?Ra:(e=e.substr(r,n),t.C=r+n,e)))}B.cancel=function(){this.I=!0,wr(this)};function co(t){t.V=Date.now()+t.O,$y(t,t.O)}function $y(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=io(st(t.gb,t),e)}function kc(t){t.B&&(X.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(tI(this.j,this.A),this.K!=2&&(Di(),ht(17)),wr(this),this.o=2,hi(this)):$y(this,this.V-t)};function hi(t){t.l.G==0||t.I||av(t.l,t)}function wr(t){kc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,xh(t.T),xy(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function mu(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||gu(n.h,t))){if(!t.J&&gu(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Na(n),Rc(n);else break e;$h(n),ht(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=io(st(n.cb,n),6e3));if(1>=Wy(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else br(n,11)}else if((t.J||n.g==t)&&Na(n),!Ca(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const u=l[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=l[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Dh(i,i.h),i.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,xe(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=uv(r,r.H?r.ka:null,r.V),o.J){Gy(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(kc(a),co(a)),r.g=o}else iv(r);0<n.i.length&&Oc(n)}else l[0]!="stop"&&l[0]!="close"||br(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?br(n,7):Uh(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}Di(4)}catch{}}function iI(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map!="undefined"&&t instanceof Map||typeof Set!="undefined"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function oI(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map!="undefined"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set!="undefined"&&t instanceof Set)){if(yc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Vy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=oI(t),r=iI(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var By=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function aI(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ar(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ar){this.h=e!==void 0?e:t.h,Oa(this,t.j),this.s=t.s,this.g=t.g,Pa(this,t.m),this.l=t.l,e=t.i;var n=new Li;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),np(this,n),this.o=t.o}else t&&(n=String(t).match(By))?(this.h=!!e,Oa(this,n[1]||"",!0),this.s=ri(n[2]||""),this.g=ri(n[3]||"",!0),Pa(this,n[4]),this.l=ri(n[5]||"",!0),np(this,n[6]||"",!0),this.o=ri(n[7]||"")):(this.h=!!e,this.i=new Li(null,this.h))}Ar.prototype.toString=function(){var t=[],e=this.j;e&&t.push(si(e,rp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(si(e,rp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(si(n,n.charAt(0)=="/"?uI:lI,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",si(n,fI)),t.join("")};function yn(t){return new Ar(t)}function Oa(t,e,n){t.j=n?ri(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function np(t,e,n){e instanceof Li?(t.i=e,dI(t.i,t.h)):(n||(e=si(e,hI)),t.i=new Li(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function Ac(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ri(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function si(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,cI),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function cI(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rp=/[#\/\?@]/g,lI=/[#\?:]/g,uI=/[#\?]/g,hI=/[#\?@]/g,fI=/#/g;function Li(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ir(t){t.g||(t.g=new Map,t.h=0,t.i&&aI(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=Li.prototype;B.add=function(t,e){ir(this),this.i=null,t=Us(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jy(t,e){ir(t),e=Us(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function qy(t,e){return ir(t),e=Us(t,e),t.g.has(e)}B.forEach=function(t,e){ir(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};B.oa=function(){ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};B.W=function(t){ir(this);let e=[];if(typeof t=="string")qy(this,t)&&(e=e.concat(this.g.get(Us(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return ir(this),this.i=null,t=Us(this,t),qy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function zy(t,e,n){jy(t,e),0<n.length&&(t.i=null,t.g.set(Us(t,e),_h(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Us(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dI(t,e){e&&!t.j&&(ir(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(jy(this,r),zy(this,s,n))},t)),t.j=e}var pI=class{constructor(t,e){this.h=t,this.g=e}};function Hy(t){this.l=t||mI,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mI=10;function Ky(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Wy(t){return t.h?1:t.g?t.g.size:0}function gu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Dh(t,e){t.g?t.g.add(e):t.h=e}function Gy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Hy.prototype.cancel=function(){if(this.i=Yy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Yy(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return _h(t.i)}function Lh(){}Lh.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Lh.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function gI(){this.g=new Lh}function yI(t,e,n){const r=n||"";try{Vy(t,function(s,i){let o=s;ro(s)&&(o=Ch(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function vI(t,e){const n=new Ec;if(X.Image){const r=new Image;r.onload=$o(Bo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=$o(Bo,n,r,"TestLoadImage: error",!1,e),r.onabort=$o(Bo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=$o(Bo,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Bo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function lo(t){this.l=t.ac||null,this.j=t.jb||!1}Ze(lo,Oh);lo.prototype.g=function(){return new Cc(this.l,this.j)};lo.prototype.i=function(t){return function(){return t}}({});function Cc(t,e){Qe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ze(Cc,Qe);var Mh=0;B=Cc.prototype;B.open=function(t,e){if(this.readyState!=Mh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Mi(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,uo(this)),this.readyState=Mh};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Mi(this)),this.g&&(this.readyState=3,Mi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Qy(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Qy(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?uo(this):Mi(this),this.readyState==3&&Qy(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,uo(this))};B.Ua=function(t){this.g&&(this.response=t,uo(this))};B.ga=function(){this.g&&uo(this)};function uo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Mi(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Mi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var wI=X.JSON.parse;function Pe(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Xy,this.K=this.L=!1}Ze(Pe,Qe);var Xy="",bI=/^https?$/i,_I=["POST","PUT"];B=Pe.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fu.g(),this.C=this.u?tp(this.u):tp(fu),this.g.onreadystatechange=st(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){sp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=X.FormData&&t instanceof X.FormData,!(0<=dy(_I,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ev(this),0<this.B&&((this.K=EI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.qa,this)):this.A=Rh(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sp(this,i)}};function EI(t){return bs&&$2()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof bh!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Je(this,"timeout"),this.abort(8))};function sp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Jy(t),xc(t)}function Jy(t){t.D||(t.D=!0,Je(t,"complete"),Je(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Je(this,"complete"),Je(this,"abort"),xc(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xc(this,!0)),Pe.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?Zy(this):this.fb())};B.fb=function(){Zy(this)};function Zy(t){if(t.h&&typeof bh!="undefined"&&(!t.C[1]||fn(t)!=4||t.aa()!=2)){if(t.v&&fn(t)==4)Rh(t.Ha,0,t);else if(Je(t,"readystatechange"),fn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(By)[1]||null;if(!s&&X.self&&X.self.location){var i=X.self.location.protocol;s=i.substr(0,i.length-1)}r=!bI.test(s?s.toLowerCase():"")}n=r}if(n)Je(t,"complete"),Je(t,"success");else{t.m=6;try{var o=2<fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Jy(t)}}finally{xc(t)}}}}function xc(t,e){if(t.g){ev(t);const n=t.g,r=t.C[0]?Aa:null;t.g=null,t.C=null,e||Je(t,"ready");try{n.onreadystatechange=r}catch{}}}function ev(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function fn(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),wI(e)}};function ip(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Xy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function tv(t){let e="";return Ih(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Fh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=tv(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nv(t){this.Ca=0,this.i=[],this.j=new Ec,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qs("baseRetryDelayMs",5e3,t),this.bb=Qs("retryDelaySeedMs",1e4,t),this.$a=Qs("forwardChannelMaxRetries",2,t),this.ta=Qs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Hy(t&&t.concurrentRequestLimit),this.Fa=new gI,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=nv.prototype;B.ma=8;B.G=1;function Uh(t){if(rv(t),t.G==3){var e=t.U++,n=yn(t.F);xe(n,"SID",t.I),xe(n,"RID",e),xe(n,"TYPE","terminate"),ho(t,n),e=new ao(t,t.j,e,void 0),e.K=2,e.v=Ac(yn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=hv(e.l,null),e.g.da(e.v)),e.F=Date.now(),co(e)}lv(t)}function Rc(t){t.g&&(Vh(t),t.g.cancel(),t.g=null)}function rv(t){Rc(t),t.u&&(X.clearTimeout(t.u),t.u=null),Na(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function Oc(t){Ky(t.h)||t.m||(t.m=!0,Sy(t.Ja,t),t.C=0)}function II(t,e){return Wy(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=io(st(t.Ja,t,e),cv(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new ao(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=yy(i),vy(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=sv(this,s,e),n=yn(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),ho(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(tv(i)))+"&"+e:this.o&&Fh(n,this.o,i)),Dh(this.h,s),this.Ya&&xe(n,"TYPE","init"),this.O?(xe(n,"$req",e),xe(n,"SID","null"),s.Z=!0,pu(s,n,null)):pu(s,n,e),this.G=2}}else this.G==3&&(t?op(this,t):this.i.length==0||Ky(this.h)||op(this))};function op(t,e){var n;e?n=e.m:n=t.U++;const r=yn(t.F);xe(r,"SID",t.I),xe(r,"RID",n),xe(r,"AID",t.T),ho(t,r),t.o&&t.s&&Fh(r,t.o,t.s),n=new ao(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=sv(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Dh(t.h,n),pu(n,r,e)}function ho(t,e){t.ia&&Ih(t.ia,function(n,r){xe(e,r,n)}),t.l&&Vy({},function(n,r){xe(e,r,n)})}function sv(t,e,n){n=Math.min(t.i.length,n);var r=t.l?st(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].h;const u=s[c].g;if(l-=i,0>l)i=Math.max(0,s[c].h-100),a=!1;else try{yI(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function iv(t){t.g||t.u||(t.Z=1,Sy(t.Ia,t),t.A=0)}function $h(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=io(st(t.Ia,t),cv(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,ov(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=io(st(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ht(10),Rc(this),ov(this))};function Vh(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function ov(t){t.g=new ao(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=yn(t.sa);xe(e,"RID","rpc"),xe(e,"SID",t.I),xe(e,"CI",t.L?"0":"1"),xe(e,"AID",t.T),xe(e,"TYPE","xmlhttp"),ho(t,e),t.o&&t.s&&Fh(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ac(yn(e)),n.s=null,n.P=!0,My(n,t)}B.cb=function(){this.v!=null&&(this.v=null,Rc(this),$h(this),ht(19))};function Na(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function av(t,e){var n=null;if(t.g==e){Na(t),Vh(t),t.g=null;var r=2}else if(gu(t.h,e))n=e.D,Gy(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Ic(),Je(r,new Py(r,n)),Oc(t)}else iv(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&II(t,e)||r==2&&$h(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}}function cv(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function br(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=st(t.kb,t);n||(n=new Ar("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Oa(n,"https"),Ac(n)),vI(n.toString(),r)}else ht(2);t.G=0,t.l&&t.l.va(e),lv(t),rv(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function lv(t){if(t.G=0,t.la=[],t.l){const e=Yy(t.h);(e.length!=0||t.i.length!=0)&&(Yd(t.la,e),Yd(t.la,t.i),t.h.i.length=0,_h(t.i),t.i.length=0),t.l.ua()}}function uv(t,e,n){var r=n instanceof Ar?yn(n):new Ar(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Pa(r,r.m);else{var s=X.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ar(null,void 0);r&&Oa(i,r),e&&(i.g=e),s&&Pa(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&xe(r,n,e),xe(r,"VER",t.ma),ho(t,r),r}function hv(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Pe(new lo({jb:!0})):new Pe(t.ra),e.Ka(t.H),e}function fv(){}B=fv.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function Da(){if(bs&&!(10<=Number(V2)))throw Error("Environmental error: no available transport.")}Da.prototype.g=function(t,e){return new kt(t,e)};function kt(t,e){Qe.call(this),this.g=new nv(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ca(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ca(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new $s(this)}Ze(kt,Qe);kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=uv(t,null,t.V),Oc(t)};kt.prototype.close=function(){Uh(this.g)};kt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ch(t),t=n);e.i.push(new pI(e.ab++,t)),e.G==3&&Oc(e)};kt.prototype.M=function(){this.g.l=null,delete this.j,Uh(this.g),delete this.g,kt.X.M.call(this)};function dv(t){Ph.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ze(dv,Ph);function pv(){Nh.call(this),this.status=1}Ze(pv,Nh);function $s(t){this.g=t}Ze($s,fv);$s.prototype.xa=function(){Je(this.g,"a")};$s.prototype.wa=function(t){Je(this.g,new dv(t))};$s.prototype.va=function(t){Je(this.g,new pv)};$s.prototype.ua=function(){Je(this.g,"b")};Da.prototype.createWebChannel=Da.prototype.g;kt.prototype.send=kt.prototype.u;kt.prototype.open=kt.prototype.m;kt.prototype.close=kt.prototype.close;Tc.NO_ERROR=0;Tc.TIMEOUT=8;Tc.HTTP_ERROR=6;Ny.COMPLETE="complete";Dy.EventType=oo;oo.OPEN="a";oo.CLOSE="b";oo.ERROR="c";oo.MESSAGE="d";Qe.prototype.listen=Qe.prototype.N;Pe.prototype.listenOnce=Pe.prototype.O;Pe.prototype.getLastError=Pe.prototype.Oa;Pe.prototype.getLastErrorCode=Pe.prototype.Ea;Pe.prototype.getStatus=Pe.prototype.aa;Pe.prototype.getResponseJson=Pe.prototype.Sa;Pe.prototype.getResponseText=Pe.prototype.fa;Pe.prototype.send=Pe.prototype.da;Pe.prototype.setWithCredentials=Pe.prototype.Ka;var TI=function(){return new Da},SI=function(){return Ic()},kl=Tc,kI=Ny,AI=Hr,ap={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},CI=lo,jo=Dy,xI=Pe;const cp="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs="9.15.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new yh("@firebase/firestore");function lp(){return Fr.logLevel}function j(t,...e){if(Fr.logLevel<=fe.DEBUG){const n=e.map(Bh);Fr.debug(`Firestore (${Vs}): ${t}`,...n)}}function vn(t,...e){if(Fr.logLevel<=fe.ERROR){const n=e.map(Bh);Fr.error(`Firestore (${Vs}): ${t}`,...n)}}function yu(t,...e){if(Fr.logLevel<=fe.WARN){const n=e.map(Bh);Fr.warn(`Firestore (${Vs}): ${t}`,...n)}}function Bh(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+t;throw vn(e),new Error(e)}function Ee(t,e){t||Q()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class OI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PI{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new mn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new mv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new et(e)}}class NI{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=et.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ee(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class DI{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new NI(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class MI{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.A=n.token,new LI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=FI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new N(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new N(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new N(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new N(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return je.fromMillis(Date.now())}static fromDate(e){return je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new je(0,0))}static max(){return new ee(new je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Fi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Fi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends Fi{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new N(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const UI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends Fi{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return UI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new N(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new N(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new N(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new N(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(_e.fromString(e))}static fromName(e){return new q(_e.fromString(e).popFirst(5))}static empty(){return new q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new _e(e.slice()))}}function $I(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new je(n+1,0):new je(n,r));return new Jn(s,q.empty(),e)}function VI(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ee.min(),q.empty(),-1)}static max(){return new Jn(ee.max(),q.empty(),-1)}}function BI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t){if(t.code!==_.FAILED_PRECONDITION||t.message!==jI)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(s=>s?C.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new C((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new C((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function po(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}jh.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Ui{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ui("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ui&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function yv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t){return t==null}function La(t){return t===0&&1/t==-1/0}function HI(t){return typeof t=="number"&&Number.isInteger(t)&&!La(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new at(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const KI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=KI.exec(t);if(Ee(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Es(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vv(t){const e=t.mapValue.fields.__previous_value__;return qh(e)?vv(e):e}function $i(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qh(t)?4:WI(t)?9007199254740991:10:Q()}function sn(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return $i(t).isEqual($i(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Zn(r.timestampValue),o=Zn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Es(r.bytesValue).isEqual(Es(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Ve(r.geoPointValue.latitude)===Ve(s.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ve(r.integerValue)===Ve(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ve(r.doubleValue),o=Ve(s.doubleValue);return i===o?La(i)===La(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(up(i)!==up(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!sn(i[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function Vi(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ve(s.integerValue||s.doubleValue),a=Ve(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return hp(t.timestampValue,e.timestampValue);case 4:return hp($i(t),$i(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(s,i){const o=Es(s),a=Es(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=pe(o[c],a[c]);if(l!==0)return l}return pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=pe(Ve(s.latitude),Ve(i.latitude));return o!==0?o:pe(Ve(s.longitude),Ve(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=Is(o[c],a[c]);if(l)return l}return pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===qo.mapValue&&i===qo.mapValue)return 0;if(s===qo.mapValue)return 1;if(i===qo.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=pe(a[u],l[u]);if(h!==0)return h;const f=Is(o[a[u]],c[l[u]]);if(f!==0)return f}return pe(a.length,l.length)}(t.mapValue,e.mapValue);default:throw Q()}}function hp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Zn(t),r=Zn(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function Ts(t){return vu(t)}function vu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Zn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Es(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,q.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=vu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${vu(r.fields[a])}`;return i+"}"}(t.mapValue):Q();var e,n}function Ma(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function wu(t){return!!t&&"integerValue"in t}function zh(t){return!!t&&"arrayValue"in t}function fp(t){return!!t&&"nullValue"in t}function dp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function la(t){return!!t&&"mapValue"in t}function fi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function WI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n){this.position=e,this.inclusive=n}}function pp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function mp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{}class Be extends wv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new QI(e,n,r):n==="array-contains"?new ZI(e,r):n==="in"?new eT(e,r):n==="not-in"?new tT(e,r):n==="array-contains-any"?new nT(e,r):new Be(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new XI(e,r):new JI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Is(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jt extends wv{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new jt(e,n)}matches(e){return bv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function bv(t){return t.op==="and"}function GI(t){return YI(t)&&bv(t)}function YI(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function _v(t){if(t instanceof Be)return t.field.canonicalString()+t.op.toString()+Ts(t.value);{const e=t.filters.map(n=>_v(n)).join(",");return`${t.op}(${e})`}}function Ev(t,e){return t instanceof Be?function(n,r){return r instanceof Be&&n.op===r.op&&n.field.isEqual(r.field)&&sn(n.value,r.value)}(t,e):t instanceof jt?function(n,r){return r instanceof jt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&Ev(i,r.filters[o]),!0):!1}(t,e):void Q()}function Iv(t){return t instanceof Be?function(e){return`${e.field.canonicalString()} ${e.op} ${Ts(e.value)}`}(t):t instanceof jt?function(e){return e.op.toString()+" {"+e.getFilters().map(Iv).join(" ,")+"}"}(t):"Filter"}class QI extends Be{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class XI extends Be{constructor(e,n){super(e,"in",n),this.keys=Tv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class JI extends Be{constructor(e,n){super(e,"not-in",n),this.keys=Tv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class ZI extends Be{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zh(n)&&Vi(n.arrayValue,this.value)}}class eT extends Be{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class tT extends Be{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vi(this.value.arrayValue,n)}}class nT extends Be{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n="asc"){this.field=e,this.dir=n}}function rT(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zo(this.root,e,this.comparator,!1)}getReverseIterator(){return new zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zo(this.root,e,this.comparator,!0)}}class zo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:Xe.RED,this.left=s!=null?s:Xe.EMPTY,this.right=i!=null?i:Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gp(this.data.getIterator())}getIteratorFrom(e){return new gp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class gp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new qe(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!la(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fi(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=fi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];la(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new wt(fi(this.value))}}function Sv(t){const e=[];return Kr(t.fields,(n,r)=>{const s=new rt([n]);if(la(r)){const i=Sv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,ee.min(),ee.min(),ee.min(),wt.empty(),0)}static newFoundDocument(e,n,r,s){return new tt(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new tt(e,2,n,ee.min(),ee.min(),wt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ee.min(),ee.min(),wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function yp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new sT(t,e,n,r,s,i,o)}function Hh(t){const e=te(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_v(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ts(r)).join(",")),e.ft=n}return e.ft}function Kh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rT(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ev(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mp(t.startAt,e.startAt)&&mp(t.endAt,e.endAt)}function bu(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function iT(t,e,n,r,s,i,o,a){return new or(t,e,n,r,s,i,o,a)}function Wh(t){return new or(t)}function vp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Gh(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Nc(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Yh(t){return t.collectionGroup!==null}function Cr(t){const e=te(t);if(e.dt===null){e.dt=[];const n=Nc(e),r=Gh(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new us(n)),e.dt.push(new us(rt.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new us(rt.keyField(),i))}}}return e.dt}function wn(t){const e=te(t);if(!e._t)if(e.limitType==="F")e._t=yp(e.path,e.collectionGroup,Cr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Cr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new us(i.field,o))}const r=e.endAt?new Ss(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ss(e.startAt.position,e.startAt.inclusive):null;e._t=yp(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function _u(t,e){e.getFirstInequalityField(),Nc(t);const n=t.filters.concat([e]);return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Fa(t,e,n){return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return Kh(wn(t),wn(e))&&t.limitType===e.limitType}function kv(t){return`${Hh(wn(t))}|lt:${t.limitType}`}function Eu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>Iv(r)).join(", ")}]`),Pc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ts(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ts(r)).join(",")),`Target(${n})`}(wn(t))}; limitType=${t.limitType})`}function Qh(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):q.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Cr(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=pp(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Cr(n),r)||n.endAt&&!function(s,i,o){const a=pp(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Cr(n),r))}(t,e)}function oT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Av(t){return(e,n)=>{let r=!1;for(const s of Cr(t)){const i=aT(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function aT(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Is(a,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:La(e)?"-0":e}}function xv(t){return{integerValue:""+t}}function cT(t,e){return HI(e)?xv(e):Cv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(){this._=void 0}}function lT(t,e,n){return t instanceof Ua?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof Bi?Ov(t,e):t instanceof ji?Pv(t,e):function(r,s){const i=Rv(r,s),o=wp(i)+wp(r.gt);return wu(i)&&wu(r.gt)?xv(o):Cv(r.yt,o)}(t,e)}function uT(t,e,n){return t instanceof Bi?Ov(t,e):t instanceof ji?Pv(t,e):n}function Rv(t,e){return t instanceof $a?wu(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Ua extends Lc{}class Bi extends Lc{constructor(e){super(),this.elements=e}}function Ov(t,e){const n=Nv(e);for(const r of t.elements)n.some(s=>sn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ji extends Lc{constructor(e){super(),this.elements=e}}function Pv(t,e){let n=Nv(e);for(const r of t.elements)n=n.filter(s=>!sn(s,r));return{arrayValue:{values:n}}}class $a extends Lc{constructor(e,n){super(),this.yt=e,this.gt=n}}function wp(t){return Ve(t.integerValue||t.doubleValue)}function Nv(t){return zh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function hT(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Bi&&r instanceof Bi||n instanceof ji&&r instanceof ji?_s(n.elements,r.elements,sn):n instanceof $a&&r instanceof $a?sn(n.gt,r.gt):n instanceof Ua&&r instanceof Ua}(t.transform,e.transform)}class fT{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mc{}function Dv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Xh(t.key,Bt.none()):new mo(t.key,t.data,Bt.none());{const n=t.data,r=wt.empty();let s=new qe(rt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ar(t.key,r,new Ot(s.toArray()),Bt.none())}}function dT(t,e,n){t instanceof mo?function(r,s,i){const o=r.value.clone(),a=_p(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(r,s,i){if(!ua(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=_p(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Lv(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function di(t,e,n,r){return t instanceof mo?function(s,i,o,a){if(!ua(s.precondition,i))return o;const c=s.value.clone(),l=Ep(s.fieldTransforms,a,i);return c.setAll(l),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ar?function(s,i,o,a){if(!ua(s.precondition,i))return o;const c=Ep(s.fieldTransforms,a,i),l=i.data;return l.setAll(Lv(s)),l.setAll(c),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,r):function(s,i,o){return ua(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function pT(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Rv(r.transform,s||null);i!=null&&(n===null&&(n=wt.empty()),n.set(r.field,i))}return n||null}function bp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&_s(n,r,(s,i)=>hT(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mo extends Mc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ar extends Mc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _p(t,e,n){const r=new Map;Ee(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,uT(o,a,n[s]))}return r}function Ep(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,lT(i,o,e))}return r}class Xh extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mT extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ce;function yT(t){switch(t){default:return Q();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Mv(t){if(t===void 0)return vn("GRPC error has no .code"),_.UNKNOWN;switch(t){case $e.OK:return _.OK;case $e.CANCELLED:return _.CANCELLED;case $e.UNKNOWN:return _.UNKNOWN;case $e.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case $e.INTERNAL:return _.INTERNAL;case $e.UNAVAILABLE:return _.UNAVAILABLE;case $e.UNAUTHENTICATED:return _.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case $e.NOT_FOUND:return _.NOT_FOUND;case $e.ALREADY_EXISTS:return _.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return _.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case $e.ABORTED:return _.ABORTED;case $e.OUT_OF_RANGE:return _.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return _.UNIMPLEMENTED;case $e.DATA_LOSS:return _.DATA_LOSS;default:return Q()}}(ce=$e||($e={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return yv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new He(q.comparator);function bn(){return vT}const Fv=new He(q.comparator);function ii(...t){let e=Fv;for(const n of t)e=e.insert(n.key,n);return e}function Uv(t){let e=Fv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return pi()}function $v(){return pi()}function pi(){return new Bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const wT=new He(q.comparator),bT=new qe(q.comparator);function ae(...t){let e=bT;for(const n of t)e=e.add(n);return e}const _T=new qe(pe);function Vv(){return _T}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,go.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fc(ee.min(),s,Vv(),bn(),ae())}}class go{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new go(r,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,r,s){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=s}}class Bv{constructor(e,n){this.targetId=e,this.Et=n}}class jv{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ip{constructor(){this.At=0,this.Rt=Sp(),this.bt=at.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ae(),n=ae(),r=ae();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Q()}}),new go(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=Sp()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class ET{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=bn(),this.qt=Tp(),this.Ut=new qe(pe)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,s)=>{this.zt(s)&&n(s)})}Jt(e){const n=e.targetId,r=e.Et.count,s=this.Yt(n);if(s){const i=s.target;if(bu(i))if(r===0){const o=new q(i.path);this.Qt(n,o,tt.newNoDocument(o,ee.min()))}else Ee(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&bu(a.target)){const c=new q(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,tt.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let r=ae();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Yt(c);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new Fc(e,n,this.Ut,this.Lt,r);return this.Lt=bn(),this.qt=Tp(),this.Ut=new qe(pe),s}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const s=this.Wt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Ip,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new qe(pe),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Ip),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Tp(){return new He(q.comparator)}function Sp(){return new He(q.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),TT=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ST=(()=>({and:"AND",or:"OR"}))();class kT{constructor(e,n){this.databaseId=e,this.wt=n}}function Va(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qv(t,e){return t.wt?e.toBase64():e.toUint8Array()}function AT(t,e){return Va(t,e.toTimestamp())}function en(t){return Ee(!!t),ee.fromTimestamp(function(e){const n=Zn(e);return new je(n.seconds,n.nanos)}(t))}function Jh(t,e){return function(n){return new _e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function zv(t){const e=_e.fromString(t);return Ee(Gv(e)),e}function Iu(t,e){return Jh(t.databaseId,e.path)}function Al(t,e){const n=zv(e);if(n.get(1)!==t.databaseId.projectId)throw new N(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new N(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Hv(n))}function Tu(t,e){return Jh(t.databaseId,e)}function CT(t){const e=zv(t);return e.length===4?_e.emptyPath():Hv(e)}function Su(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hv(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function kp(t,e,n){return{name:Iu(t,e),fields:n.value.mapValue.fields}}function xT(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,l){return c.wt?(Ee(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(Ee(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?_.UNKNOWN:Mv(c.code);return new N(l,c.message||"")}(o);n=new jv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Al(t,r.document.name),i=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):ee.min(),a=new wt({mapValue:{fields:r.document.fields}}),c=tt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ha(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Al(t,r.document),i=r.readTime?en(r.readTime):ee.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new ha([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Al(t,r.document),i=r.removedTargetIds||[];n=new ha([],i,s,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new gT(s),o=r.targetId;n=new Bv(o,i)}}return n}function RT(t,e){let n;if(e instanceof mo)n={update:kp(t,e.key,e.value)};else if(e instanceof Xh)n={delete:Iu(t,e.key)};else if(e instanceof ar)n={update:kp(t,e.key,e.data),updateMask:$T(e.fieldMask)};else{if(!(e instanceof mT))return Q();n={verify:Iu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof Ua)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Bi)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ji)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $a)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:AT(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function OT(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?en(r.updateTime):en(s);return i.isEqual(ee.min())&&(i=en(s)),new fT(i,r.transformResults||[])}(n,e))):[]}function PT(t,e){return{documents:[Tu(t,e.path)]}}function NT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Tu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Tu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Wv(jt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:Zr(u.field),direction:MT(u.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,l){return c.wt||Pc(l)?l:{value:l}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function DT(t){let e=CT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ee(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(u){const h=Kv(u);return h instanceof jt&&GI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new us(es(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Pc(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,f=u.values||[];return new Ss(f,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,f=u.values||[];return new Ss(f,h)}(n.endAt)),iT(e,s,o,i,a,"F",c,l)}function LT(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kv(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=es(e.unaryFilter.field);return Be.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=es(e.unaryFilter.field);return Be.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=es(e.unaryFilter.field);return Be.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=es(e.unaryFilter.field);return Be.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(e){return Be.create(es(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return jt.create(e.compositeFilter.filters.map(n=>Kv(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(e.compositeFilter.op))}(t):Q()}function MT(t){return IT[t]}function FT(t){return TT[t]}function UT(t){return ST[t]}function Zr(t){return{fieldPath:t.canonicalString()}}function es(t){return rt.fromServerFormat(t.fieldPath)}function Wv(t){return t instanceof Be?function(e){if(e.op==="=="){if(dp(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NAN"}};if(fp(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(dp(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NAN"}};if(fp(e.value))return{unaryFilter:{field:Zr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(e.field),op:FT(e.op),value:e.value}}}(t):t instanceof jt?function(e){const n=e.getFilters().map(r=>Wv(r));return n.length===1?n[0]:{compositeFilter:{op:UT(e.op),filters:n}}}(t):Q()}function $T(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dT(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$v();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Dv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>bp(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>bp(n,r))}}class Zh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ee(e.mutations.length===r.length);let s=wT;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=at.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new xr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new xr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.ie=e}}function qT(t){const e=DT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Fa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(){this.Je=new HT}addToCollectionParentIndex(e,n){return this.Je.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Jn.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class HT{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new qe(_e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ks(0)}static vn(){return new ks(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.changes=new Bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&di(r.mutation,s,Ot.empty(),je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ae()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ae()){const s=_r();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ii();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ae()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=bn();const o=pi(),a=pi();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof ar)?i=i.insert(l.key,l):u!==void 0&&(o.set(l.key,u.mutation.getFieldMask()),di(u.mutation,l,u.mutation.getFieldMask(),je.now()))}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new WT(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=pi();let s=new He((o,a)=>o-a),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ot.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ae()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=$v();u.forEach(f=>{if(!i.has(f)){const p=Dv(n.get(f),r.get(f));p!==null&&h.set(f,p),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return q.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yh(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):C.resolve(_r());let a=-1,c=i;return o.next(l=>C.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?C.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ae())).next(u=>({batchId:a,changes:Uv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=ii();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=ii();return this.indexManager.getCollectionParents(e,s).next(o=>C.forEach(o,a=>{const c=function(l,u){return new or(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(l=>{l.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,tt.newInvalidDocument(l)))});let o=ii();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&di(l.mutation,c,Ot.empty(),je.now()),Qh(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return C.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:en(r.createTime)}),C.resolve()}getNamedQuery(e,n){return C.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:qT(r.bundledQuery),readTime:en(r.readTime)}}(n)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.overlays=new He(q.comparator),this.es=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return C.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.oe(e,n,i)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const s=_r(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return C.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=_r(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=_r(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return C.resolve(a)}oe(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BT(n,r));let i=this.es.get(n);i===void 0&&(i=ae(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.ns=new qe(Ge.ss),this.rs=new qe(Ge.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Ge(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new q(new _e([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new q(new _e([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ae();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return q.comparator(e.key,n.key)||pe(e._s,n._s)}static os(e,n){return pe(e._s,n._s)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new qe(Ge.ss)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VT(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Ge(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(pe);return n.forEach(s=>{const i=new Ge(s,0),o=new Ge(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),C.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new Ge(new q(i),0);let a=new qe(pe);return this.gs.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c._s)),!0)},o),C.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ee(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return C.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Ge(n,0),s=this.gs.firstAfterOrEqual(r);return C.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.Es=e,this.docs=new He(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),C.resolve(r)}getAllFromCollection(e,n,r){let s=bn();const i=new q(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||BI(VI(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,s){Q()}As(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ZT(this)}getSize(e){return C.resolve(this.size)}}class ZT extends KT{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.persistence=e,this.Rs=new Bs(n=>Hh(n),Kh),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.bs=0,this.Ps=new ef,this.targetCount=0,this.vs=ks.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),C.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ks(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.Dn(n),C.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),C.waitFor(i).next(()=>s)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),C.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new jh(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new eS(this),this.indexManager=new zT,this.remoteDocumentCache=function(r){return new JT(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new jT(n),this.Ns=new YT(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new XT(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new nS(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return C.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class nS extends qI{constructor(e){super(),this.currentSequenceNumber=e}}class tf{constructor(e){this.persistence=e,this.Fs=new ef,this.$s=null}static Bs(e){return new tf(e)}get Ls(){if(this.$s)return this.$s;throw Q()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),C.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Ls,r=>{const s=q.fromPath(r);return this.qs(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return C.or([()=>C.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=ae(),s=ae();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(vp(n))return C.resolve(null);let r=wn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Fa(n,null,"F"),r=wn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ae(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Fi(n,a);return this.$i(n,l,o,c.readTime)?this.ki(e,Fa(n,null,"F")):this.Bi(e,l,n,c)}))})))}Oi(e,n,r,s){return vp(n)||s.isEqual(ee.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(lp()<=fe.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Eu(n)),this.Bi(e,o,n,$I(s,-1)))})}Fi(e,n){let r=new qe(Av(e));return n.forEach((s,i)=>{Qh(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return lp()<=fe.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Eu(n)),this.Ni.getDocumentsMatchingQuery(e,n,Jn.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.yt=s,this.qi=new He(pe),this.Ui=new Bs(i=>Hh(i),Kh),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GT(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function iS(t,e,n,r){return new sS(t,e,n,r)}async function Yv(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ae();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ji:l,removedBatchIds:o,addedBatchIds:a}))})})}function oS(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let f=C.resolve();return h.forEach(p=>{f=f.next(()=>l.getEntry(a,p)).next(g=>{const v=c.docVersions.get(p);Ee(v!==null),g.version.compareTo(v)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ae();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Qv(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function aS(t,e){const n=te(t),r=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const a=[];e.targetChanges.forEach((u,h)=>{const f=s.get(h);if(!f)return;a.push(n.Cs.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,u.addedDocuments,h)));let p=f.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(at.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(g,v,I){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(f,p,u)&&a.push(n.Cs.updateTargetData(i,p))});let c=bn(),l=ae();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(cS(i,o,e.documentUpdates).next(u=>{c=u.Wi,l=u.zi})),!r.isEqual(ee.min())){const u=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return C.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.qi=s,i))}function cS(t,e,n){let r=ae(),s=ae();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=bn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function lS(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uS(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,C.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new xr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.qi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function ku(t,e,n){const r=te(t),s=r.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!po(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(s.target)}function Ap(t,e,n){const r=te(t);let s=ee.min(),i=ae();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,l){const u=te(a),h=u.Ui.get(l);return h!==void 0?C.resolve(u.qi.get(h)):u.Cs.getTargetData(c,l)}(r,o,wn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ae())).next(a=>(hS(r,oT(e),a),{documents:a,Hi:i})))}function hS(t,e,n){let r=t.Ki.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class Cp{constructor(){this.activeTargetIds=Vv()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fS{constructor(){this.Lr=new Cp,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Cp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);j("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(j("RestConnection","Received: ",c),c),c=>{throw yu("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=pS[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new xI;a.setWithCredentials(!0),a.listenOnce(kI.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case kl.NO_ERROR:const l=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(l)),i(l);break;case kl.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new N(_.DEADLINE_EXCEEDED,"Request time out"));break;case kl.HTTP_ERROR:const u=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const f=h==null?void 0:h.error;if(f&&f.status&&f.message){const p=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(v)>=0?v:_.UNKNOWN}(f.status);o(new N(p,f.message))}else o(new N(_.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(_.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=TI(),o=SI(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new CI({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");j("Connection","Creating WebChannel: "+c,a);const l=i.createWebChannel(c,a);let u=!1,h=!1;const f=new mS({Hr:g=>{h?j("Connection","Not sending because WebChannel is closed:",g):(u||(j("Connection","Opening WebChannel transport."),l.open(),u=!0),j("Connection","WebChannel sending:",g),l.send(g))},Jr:()=>l.close()}),p=(g,v,I)=>{g.listen(v,y=>{try{I(y)}catch(b){setTimeout(()=>{throw b},0)}})};return p(l,jo.EventType.OPEN,()=>{h||j("Connection","WebChannel transport opened.")}),p(l,jo.EventType.CLOSE,()=>{h||(h=!0,j("Connection","WebChannel transport closed"),f.io())}),p(l,jo.EventType.ERROR,g=>{h||(h=!0,yu("Connection","WebChannel transport errored:",g),f.io(new N(_.UNAVAILABLE,"The operation could not be completed")))}),p(l,jo.EventType.MESSAGE,g=>{var v;if(!h){const I=g.data[0];Ee(!!I);const y=I,b=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(b){j("Connection","WebChannel received error:",b);const k=b.status;let O=function(se){const W=$e[se];if(W!==void 0)return Mv(W)}(k),U=b.message;O===void 0&&(O=_.INTERNAL,U="Unknown error status: "+k+" with message "+b.message),h=!0,f.io(new N(O,U)),l.close()}else j("Connection","WebChannel received:",I),f.ro(I)}}),p(o,AI.STAT_EVENT,g=>{g.stat===ap.PROXY?j("Connection","Detected buffering proxy"):g.stat===ap.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.so()},0),f}}function Cl(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){return new kT(t,!0)}class Xv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Xv(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(vn(n.toString()),vn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new N(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yS extends Jv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=xT(this.yt,e),r=function(s){if(!("targetChange"in s))return ee.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?ee.min():i.readTime?en(i.readTime):ee.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=Su(this.yt),n.addTarget=function(s,i){let o;const a=i.target;return o=bu(a)?{documents:PT(s,a)}:{query:NT(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=qv(s,i.resumeToken):i.snapshotVersion.compareTo(ee.min())>0&&(o.readTime=Va(s,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=LT(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=Su(this.yt),n.removeTarget=e,this.Bo(n)}}class vS extends Jv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=OT(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.Zo(r,n)}return Ee(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Su(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RT(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=s,this.nu=!1}su(){if(this.nu)throw new N(_.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new N(_.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new N(_.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class bS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(vn(n),this.ou=!1):j("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Wr(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=te(a);c._u.add(4),await yo(c),c.gu.set("Unknown"),c._u.delete(4),await $c(c)}(this))})}),this.gu=new bS(r,s)}}async function $c(t){if(Wr(t))for(const e of t.wu)await e(!0)}async function yo(t){for(const e of t.wu)await e(!1)}function Zv(t,e){const n=te(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),of(n)?sf(n):js(n).ko()&&rf(n,e))}function e1(t,e){const n=te(t),r=js(n);n.du.delete(e),r.ko()&&t1(n,e),n.du.size===0&&(r.ko()?r.Fo():Wr(n)&&n.gu.set("Unknown"))}function rf(t,e){t.yu.Ot(e.targetId),js(t).zo(e)}function t1(t,e){t.yu.Ot(e),js(t).Ho(e)}function sf(t){t.yu=new ET({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),js(t).start(),t.gu.uu()}function of(t){return Wr(t)&&!js(t).No()&&t.du.size>0}function Wr(t){return te(t)._u.size===0}function n1(t){t.yu=void 0}async function ES(t){t.du.forEach((e,n)=>{rf(t,e)})}async function IS(t,e){n1(t),of(t)?(t.gu.hu(e),sf(t)):t.gu.set("Unknown")}async function TS(t,e,n){if(t.gu.set("Online"),e instanceof jv&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ba(t,r)}else if(e instanceof ha?t.yu.Kt(e):e instanceof Bv?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(ee.min()))try{const r=await Qv(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const l=s.du.get(c);l&&s.du.set(c,l.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),t1(s,a);const l=new xr(c.target,a,1,c.sequenceNumber);rf(s,l)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Ba(t,r)}}async function Ba(t,e,n){if(!po(e))throw e;t._u.add(1),await yo(t),t.gu.set("Offline"),n||(n=()=>Qv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await $c(t)})}function r1(t,e){return e().catch(n=>Ba(t,n,e))}async function Vc(t){const e=te(t),n=er(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;SS(e);)try{const s=await lS(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,kS(e,s)}catch(s){await Ba(e,s)}s1(e)&&i1(e)}function SS(t){return Wr(t)&&t.fu.length<10}function kS(t,e){t.fu.push(e);const n=er(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function s1(t){return Wr(t)&&!er(t).No()&&t.fu.length>0}function i1(t){er(t).start()}async function AS(t){er(t).eu()}async function CS(t){const e=er(t);for(const n of t.fu)e.Xo(n.mutations)}async function xS(t,e,n){const r=t.fu.shift(),s=Zh.from(r,e,n);await r1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Vc(t)}async function RS(t,e){e&&er(t).Yo&&await async function(n,r){if(s=r.code,yT(s)&&s!==_.ABORTED){const i=n.fu.shift();er(n).Mo(),await r1(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Vc(n)}var s}(t,e),s1(t)&&i1(t)}async function Rp(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n._u.add(3),await yo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await $c(n)}async function OS(t,e){const n=te(t);e?(n._u.delete(2),await $c(n)):e||(n._u.add(2),await yo(n),n.gu.set("Unknown"))}function js(t){return t.pu||(t.pu=function(e,n,r){const s=te(e);return s.su(),new yS(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:ES.bind(null,t),Zr:IS.bind(null,t),Wo:TS.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),of(t)?sf(t):t.gu.set("Unknown")):(await t.pu.stop(),n1(t))})),t.pu}function er(t){return t.Iu||(t.Iu=function(e,n,r){const s=te(e);return s.su(),new vS(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:AS.bind(null,t),Zr:RS.bind(null,t),tu:CS.bind(null,t),Zo:xS.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Vc(t)):(await t.Iu.stop(),t.fu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new af(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cf(t,e){if(vn("AsyncQueue",`${e}: ${t}`),po(t))return new N(_.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=ii(),this.sortedSet=new He(this.comparator)}static emptySet(e){return new hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new hs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(){this.Tu=new He(q.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Q():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class As{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new As(e,n,hs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(){this.Au=void 0,this.listeners=[]}}class NS{constructor(){this.queries=new Bs(e=>kv(e),Dc),this.onlineState="Unknown",this.Ru=new Set}}async function o1(t,e){const n=te(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new PS),s)try{i.Au=await n.onListen(r)}catch(o){const a=cf(o,`Initialization of query '${Eu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&lf(n)}async function a1(t,e){const n=te(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function DS(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&lf(n)}function LS(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function lf(t){t.Ru.forEach(e=>{e.next()})}class c1{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new As(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=As.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.key=e}}class u1{constructor(e){this.key=e}}class MS{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ae(),this.mutatedKeys=ae(),this.Gu=Av(e),this.Qu=new hs(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Op,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),p=Qh(this.query,h)?h:null,g=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let I=!1;f&&p?f.data.isEqual(p.data)?g!==v&&(r.track({type:3,doc:p}),I=!0):this.Hu(f,p)||(r.track({type:2,doc:p}),I=!0,(c&&this.Gu(p,c)>0||l&&this.Gu(p,l)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),I=!0):f&&!p&&(r.track({type:1,doc:f}),I=!0,(c||l)&&(a=!0)),I&&(p?(o=o.add(p),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((l,u)=>function(h,f){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return p(h)-p(f)}(l.type,u.type)||this.Gu(l.doc,u.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new As(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Op,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ae(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new u1(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new l1(r))}),n}tc(e){this.qu=e.Hi,this.Ku=ae();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return As.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class FS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class US{constructor(e){this.key=e,this.nc=!1}}class $S{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Bs(a=>kv(a),Dc),this.rc=new Map,this.oc=new Set,this.uc=new He(q.comparator),this.cc=new Map,this.ac=new ef,this.hc={},this.lc=new Map,this.fc=ks.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function VS(t,e){const n=QS(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await uS(n.localStore,wn(e));n.isPrimaryClient&&Zv(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await BS(n,e,r,a==="current",o.resumeToken)}return s}async function BS(t,e,n,r,s){t._c=(h,f,p)=>async function(g,v,I,y){let b=v.view.Wu(I);b.$i&&(b=await Ap(g.localStore,v.query,!1).then(({documents:U})=>v.view.Wu(U,b)));const k=y&&y.targetChanges.get(v.targetId),O=v.view.applyChanges(b,g.isPrimaryClient,k);return Np(g,v.targetId,O.Xu),O.snapshot}(t,h,f,p);const i=await Ap(t.localStore,e,!0),o=new MS(e,i.Hi),a=o.Wu(i.documents),c=go.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Np(t,n,l.Xu);const u=new FS(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function jS(t,e){const n=te(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!Dc(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ku(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e1(n.remoteStore,r.targetId),Au(n,r.targetId)}).catch(fo)):(Au(n,r.targetId),await ku(n.localStore,r.targetId,!0))}async function qS(t,e,n){const r=XS(t);try{const s=await function(i,o){const a=te(i),c=je.now(),l=o.reduce((f,p)=>f.add(p.key),ae());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let p=bn(),g=ae();return a.Gi.getEntries(f,l).next(v=>{p=v,p.forEach((I,y)=>{y.isValidDocument()||(g=g.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,p)).next(v=>{u=v;const I=[];for(const y of o){const b=pT(y,u.get(y.key).overlayedDocument);b!=null&&I.push(new ar(y.key,b,Sv(b.value.mapValue),Bt.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,I,o)}).next(v=>{h=v;const I=v.applyToLocalDocumentSet(u,g);return a.documentOverlayCache.saveOverlays(f,v.batchId,I)})}).then(()=>({batchId:h.batchId,changes:Uv(u)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new He(pe)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await vo(r,s.changes),await Vc(r.remoteStore)}catch(s){const i=cf(s,"Failed to persist write");n.reject(i)}}async function h1(t,e){const n=te(t);try{const r=await aS(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?Ee(o.nc):s.removedDocuments.size>0&&(Ee(o.nc),o.nc=!1))}),await vo(n,r,e)}catch(r){await fo(r)}}function Pp(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=te(i);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.bu(o)&&(c=!0)}),c&&lf(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zS(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new He(q.comparator);o=o.insert(i,tt.newNoDocument(i,ee.min()));const a=ae().add(i),c=new Fc(ee.min(),new Map,new qe(pe),o,a);await h1(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),uf(r)}else await ku(r.localStore,e,!1).then(()=>Au(r,e,n)).catch(fo)}async function HS(t,e){const n=te(t),r=e.batch.batchId;try{const s=await oS(n.localStore,e);d1(n,r,null),f1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await vo(n,s)}catch(s){await fo(s)}}async function KS(t,e,n){const r=te(t);try{const s=await function(i,o){const a=te(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(Ee(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(r.localStore,e);d1(r,e,n),f1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await vo(r,s)}catch(s){await fo(s)}}function f1(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function d1(t,e,n){const r=te(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function Au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||p1(t,r)})}function p1(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(e1(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),uf(t))}function Np(t,e,n){for(const r of n)r instanceof l1?(t.ac.addReference(r.key,e),WS(t,r)):r instanceof u1?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||p1(t,r.key)):Q()}function WS(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.oc.add(r),uf(t))}function uf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new q(_e.fromString(e)),r=t.fc.next();t.cc.set(r,new US(n)),t.uc=t.uc.insert(n,r),Zv(t.remoteStore,new xr(wn(Wh(n.path)),r,2,jh.at))}}async function vo(t,e,n){const r=te(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=nf.Ci(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const l=te(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>C.forEach(c,h=>C.forEach(h.Si,f=>l.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>C.forEach(h.Di,f=>l.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!po(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const f=l.qi.get(h),p=f.snapshotVersion,g=f.withLastLimboFreeSnapshotVersion(p);l.qi=l.qi.insert(h,g)}}}(r.localStore,i))}async function GS(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Yv(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new N(_.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await vo(n,r.ji)}}function YS(t,e){const n=te(t),r=n.cc.get(e);if(r&&r.nc)return ae().add(r.key);{let s=ae();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function QS(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=h1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zS.bind(null,e),e.sc.Wo=DS.bind(null,e.eventManager),e.sc.wc=LS.bind(null,e.eventManager),e}function XS(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KS.bind(null,e),e}class JS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return iS(this.persistence,new rS,e.initialUser,this.yt)}yc(e){return new tS(tf.Bs,this.yt)}gc(e){return new fS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GS.bind(null,this.syncEngine),await OS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new NS}createDatastore(e){const n=Uc(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new gS(s));var s;return function(i,o,a,c){return new wS(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Pp(this.syncEngine,a,0),o=xp.C()?new xp:new dS,new _S(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,l){const u=new $S(r,s,i,o,a,c);return l&&(u.dc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);j("RemoteStore","RemoteStore shutting down."),n._u.add(5),await yo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t,e,n){if(!n)throw new N(_.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ek(t,e,n,r){if(e===!0&&r===!0)throw new N(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dp(t){if(!q.isDocumentKey(t))throw new N(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Lp(t){if(q.isDocumentKey(t))throw new N(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new N(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bc(t);throw new N(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function g1(t,e){if(e<=0)throw new N(_.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Map;class Fp{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new N(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new N(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ek("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new N(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fp(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new RI;switch(n.type){case"gapi":const r=n.client;return new DI(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Mp.get(e);n&&(j("ComponentProvider","Removing Datastore"),Mp.delete(e),n.terminate())}(this),Promise.resolve()}}function tk(t,e,n,r={}){var s;const i=(t=_n(t,jc))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&yu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=et.MOCK_USER;else{o=ay(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new N(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}t._authCredentials=new OI(new mv(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class an{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new an(this.firestore,e,this._query)}}class Gn extends an{constructor(e,n,r){super(e,n,Wh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new q(e))}withConverter(e){return new Gn(this.firestore,e,this._path)}}function An(t,e,...n){if(t=Ae(t),m1("collection","path",e),t instanceof jc){const r=_e.fromString(e,...n);return Lp(r),new Gn(t,null,r)}{if(!(t instanceof bt||t instanceof Gn))throw new N(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Lp(r),new Gn(t.firestore,null,r)}}function Gr(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=gv.R()),m1("doc","path",e),t instanceof jc){const r=_e.fromString(e,...n);return Dp(r),new bt(t,null,new q(r))}{if(!(t instanceof bt||t instanceof Gn))throw new N(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Dp(r),new bt(t.firestore,t instanceof Gn?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):vn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=gv.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function rk(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Yv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function sk(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ik(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Rp(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Rp(e.remoteStore,i)),t.onlineComponents=e}async function ik(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await rk(t,new JS)),t.offlineComponents}async function v1(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await sk(t,new ZS)),t.onlineComponents}function ok(t){return v1(t).then(e=>e.syncEngine)}async function w1(t){const e=await v1(t),n=e.eventManager;return n.onListen=VS.bind(null,e.syncEngine),n.onUnlisten=jS.bind(null,e.syncEngine),n}function ak(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new y1({next:h=>{i.enqueueAndForget(()=>a1(s,u));const f=h.docs.has(o);!f&&h.fromCache?c.reject(new N(_.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&h.fromCache&&a&&a.source==="server"?c.reject(new N(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new c1(Wh(o.path),l,{includeMetadataChanges:!0,Nu:!0});return o1(s,u)}(await w1(t),t.asyncQueue,e,n,r)),r.promise}function ck(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const l=new y1({next:h=>{i.enqueueAndForget(()=>a1(s,u)),h.fromCache&&a.source==="server"?c.reject(new N(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new c1(o,l,{includeMetadataChanges:!0,Nu:!0});return o1(s,u)}(await w1(t),t.asyncQueue,e,n,r)),r.promise}class lk{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Xv(this,"async_queue_retry"),this.Wc=()=>{const n=Cl();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Cl();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new mn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!po(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=af.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.Uc.push(s),s}zc(){this.Kc&&Q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class qs extends jc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new lk,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||b1(this),this._firestoreClient.terminate()}}function uk(t,e){const n=typeof t=="object"?t:wh(),r=typeof t=="string"?t:e||"(default)",s=gc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=iy("firestore");i&&tk(s,...i)}return s}function hf(t){return t._firestoreClient||b1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function b1(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new zI(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new nk(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(at.fromBase64String(e))}catch(n){throw new N(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new N(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new N(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new N(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=/^__.*__$/;class fk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new mo(e,this.data,n,this.fieldTransforms)}}class _1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function E1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class pf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new pf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ja(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(E1(this.sa)&&hk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class dk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Uc(e)}da(e,n,r,s=!1){return new pf({sa:e,methodName:n,fa:r,path:rt.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function zc(t){const e=t._freezeSettings(),n=Uc(t._databaseId);return new dk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pk(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);mf("Data must be an object, but it was:",o,r);const a=T1(r,o);let c,l;if(i.merge)c=new Ot(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const f=Cu(e,h,n);if(!o.contains(f))throw new N(_.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);k1(u,f)||u.push(f)}c=new Ot(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new fk(new wt(a),c,l)}class wo extends ff{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wo}}function mk(t,e,n,r){const s=t.da(1,e,n);mf("Data must be an object, but it was:",s,r);const i=[],o=wt.empty();Kr(r,(c,l)=>{const u=gf(e,c,n);l=Ae(l);const h=s.ca(u);if(l instanceof wo)i.push(u);else{const f=bo(l,h);f!=null&&(i.push(u),o.set(u,f))}});const a=new Ot(i);return new _1(o,a,s.fieldTransforms)}function gk(t,e,n,r,s,i){const o=t.da(1,e,n),a=[Cu(e,r,n)],c=[s];if(i.length%2!=0)throw new N(_.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<i.length;f+=2)a.push(Cu(e,i[f])),c.push(i[f+1]);const l=[],u=wt.empty();for(let f=a.length-1;f>=0;--f)if(!k1(l,a[f])){const p=a[f];let g=c[f];g=Ae(g);const v=o.ca(p);if(g instanceof wo)l.push(p);else{const I=bo(g,v);I!=null&&(l.push(p),u.set(p,I))}}const h=new Ot(l);return new _1(u,h,o.fieldTransforms)}function I1(t,e,n,r=!1){return bo(n,t.da(r?4:3,e))}function bo(t,e){if(S1(t=Ae(t)))return mf("Unsupported field value:",e,t),T1(t,e);if(t instanceof ff)return function(n,r){if(!E1(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=bo(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return cT(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=je.fromDate(n);return{timestampValue:Va(r.yt,s)}}if(n instanceof je){const s=new je(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Va(r.yt,s)}}if(n instanceof df)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Cs)return{bytesValue:qv(r.yt,n._byteString)};if(n instanceof bt){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jh(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Bc(n)}`)}(t,e)}function T1(t,e){const n={};return yv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Kr(t,(r,s)=>{const i=bo(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function S1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof je||t instanceof df||t instanceof Cs||t instanceof bt||t instanceof ff)}function mf(t,e,n){if(!S1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Bc(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function Cu(t,e,n){if((e=Ae(e))instanceof qc)return e._internalPath;if(typeof e=="string")return gf(t,e);throw ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const yk=new RegExp("[~\\*/\\[\\]]");function gf(t,e,n){if(e.search(yk)>=0)throw ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qc(...e.split("."))._internalPath}catch{throw ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ja(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new N(_.INVALID_ARGUMENT,a+t+c)}function k1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vk extends yf{data(){return super.data()}}function Hc(t,e){return typeof e=="string"?gf(t,e):e instanceof qc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new N(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vf{}class _o extends vf{}function cr(t,e,...n){let r=[];e instanceof vf&&r.push(e),r=r.concat(n),function(s){const i=s.filter(a=>a instanceof wf).length,o=s.filter(a=>a instanceof Kc).length;if(i>1||i>0&&o>0)throw new N(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Kc extends _o{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kc(e,n,r)}_apply(e){const n=this._parse(e);return x1(e._query,n),new an(e.firestore,e.converter,_u(e._query,n))}_parse(e){const n=zc(e.firestore);return function(s,i,o,a,c,l,u){let h;if(c.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new N(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){$p(u,l);const f=[];for(const p of u)f.push(Up(a,s,p));h={arrayValue:{values:f}}}else h=Up(a,s,u)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||$p(u,l),h=I1(o,i,u,l==="in"||l==="not-in");return Be.create(c,l,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function xu(t,e,n){const r=e,s=Hc("where",t);return Kc._create(s,r,n)}class wf extends vf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new wf(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)x1(i,a),i=_u(i,a)}(e._query,n),new an(e.firestore,e.converter,_u(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bf extends _o{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new bf(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new N(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new N(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new us(s,i);return function(a,c){if(Gh(a)===null){const l=Nc(a);l!==null&&R1(a,l,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new an(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new or(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function $r(t,e="asc"){const n=e,r=Hc("orderBy",t);return bf._create(r,n)}class Wc extends _o{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Wc(e,n,r)}_apply(e){return new an(e.firestore,e.converter,Fa(e._query,this._limit,this._limitType))}}function A1(t){return g1("limit",t),Wc._create("limit",t,"F")}function bk(t){return g1("limitToLast",t),Wc._create("limitToLast",t,"L")}class _f extends _o{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new _f(e,n,r)}_apply(e){const n=C1(e,this.type,this._docOrFields,this._inclusive);return new an(e.firestore,e.converter,function(r,s){return new or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,n))}}function _k(...t){return _f._create("startAfter",t,!1)}class Ef extends _o{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ef(e,n,r)}_apply(e){const n=C1(e,this.type,this._docOrFields,this._inclusive);return new an(e.firestore,e.converter,function(r,s){return new or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,n))}}function Ek(...t){return Ef._create("endBefore",t,!1)}function C1(t,e,n,r){if(n[0]=Ae(n[0]),n[0]instanceof yf)return function(s,i,o,a,c){if(!a)throw new N(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const u of Cr(s))if(u.field.isKeyField())l.push(Ma(i,a.key));else{const h=a.data.field(u.field);if(qh(h))throw new N(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const f=u.field.canonicalString();throw new N(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}l.push(h)}return new Ss(l,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=zc(t.firestore);return function(i,o,a,c,l,u){const h=i.explicitOrderBy;if(l.length>h.length)throw new N(_.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let p=0;p<l.length;p++){const g=l[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new N(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Yh(i)&&g.indexOf("/")!==-1)throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const v=i.path.child(_e.fromString(g));if(!q.isDocumentKey(v))throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const I=new q(v);f.push(Ma(o,I))}else{const v=I1(a,c,g);f.push(v)}}return new Ss(f,u)}(t._query,t.firestore._databaseId,s,e,n,r)}}function Up(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new N(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Yh(e)&&n.indexOf("/")!==-1)throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!q.isDocumentKey(r))throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ma(t,new q(r))}if(n instanceof bt)return Ma(t,n._key);throw new N(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bc(n)}.`)}function $p(t,e){if(!Array.isArray(t)||t.length===0)throw new N(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new N(_.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function x1(t,e){if(e.isInequality()){const r=Nc(t),s=e.field;if(r!==null&&!r.isEqual(s))throw new N(_.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=Gh(t);i!==null&&R1(t,s,i)}const n=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new N(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new N(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function R1(t,e,n){if(!n.isEqual(e))throw new N(_.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Ik{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const r={};return Kr(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new df(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=vv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp($i(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);Ee(Gv(r));const s=new Ui(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class O1 extends yf{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class fa extends O1{data(e={}){return super.data(e)}}class Sk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new oi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fa(this._firestore,this._userDataWriter,r.key,r,new oi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new N(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new fa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new fa(r._firestore,r._userDataWriter,o.doc.key,o.doc,new oi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,l=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),l=i.indexOf(o.doc.key)),{type:kk(o.type),doc:a,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(t){t=_n(t,bt);const e=_n(t.firestore,qs);return ak(hf(e),t._key).then(n=>xk(e,t,n))}class P1 extends Ik{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function lr(t){t=_n(t,an);const e=_n(t.firestore,qs),n=hf(e),r=new P1(e);return wk(t._query),ck(n,t._query).then(s=>new Sk(e,r,t,s))}function N1(t,e,n,...r){t=_n(t,bt);const s=_n(t.firestore,qs),i=zc(s);let o;return o=typeof(e=Ae(e))=="string"||e instanceof qc?gk(i,"updateDoc",t._key,e,n,r):mk(i,"updateDoc",t._key,e),Tf(s,[o.toMutation(t._key,Bt.exists(!0))])}function Ak(t){return Tf(_n(t.firestore,qs),[new Xh(t._key,Bt.none())])}function Ck(t,e){const n=_n(t.firestore,qs),r=Gr(t),s=Tk(t.converter,e);return Tf(n,[pk(zc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function Tf(t,e){return function(n,r){const s=new mn;return n.asyncQueue.enqueueAndForget(async()=>qS(await ok(n),r,s)),s.promise}(hf(t),e)}function xk(t,e,n){const r=n.docs.get(e._key),s=new P1(t);return new O1(t,s,e._key,r,new oi(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(){return new wo("deleteField")}(function(t,e=!0){(function(n){Vs=n})(Fs),Mr(new Xn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new qs(new PI(n.getProvider("auth-internal")),new MI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new N(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ui(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Zt(cp,"3.8.0",t),Zt(cp,"3.8.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1="firebasestorage.googleapis.com",L1="storageBucket",Ok=2*60*1e3,Pk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends on{constructor(e,n,r=0){super(xl(e),`Firebase Storage: ${n} (${xl(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return xl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function xl(t){return"storage/"+t}function Sf(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne("unknown",t)}function Nk(t){return new Ne("object-not-found","Object '"+t+"' does not exist.")}function Dk(t){return new Ne("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Lk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne("unauthenticated",t)}function Mk(){return new Ne("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Fk(t){return new Ne("unauthorized","User does not have permission to access '"+t+"'.")}function Uk(){return new Ne("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function $k(){return new Ne("canceled","User canceled the upload/download.")}function Vk(t){return new Ne("invalid-url","Invalid URL '"+t+"'.")}function Bk(t){return new Ne("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function jk(){return new Ne("no-default-bucket","No default bucket found. Did you set the '"+L1+"' property when initializing the app?")}function qk(){return new Ne("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function zk(){return new Ne("no-download-url","The given file does not have any download URLs.")}function Hk(t){return new Ne("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ru(t){return new Ne("invalid-argument",t)}function M1(){return new Ne("app-deleted","The Firebase app was deleted.")}function Kk(t){return new Ne("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function mi(t,e){return new Ne("invalid-format","String does not match format '"+t+"': "+e)}function Xs(t){throw new Ne("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ft.makeFromUrl(e,n)}catch{return new ft(e,"")}if(r.path==="")return r;throw Bk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(O){O.path_=decodeURIComponent(O.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${f}`,"i"),g={bucket:1,path:3},v=n===D1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",y=new RegExp(`^https?://${v}/${s}/${I}`,"i"),k=[{regex:a,indices:c,postModify:i},{regex:p,indices:g,postModify:l},{regex:y,indices:{bucket:1,path:2},postModify:l}];for(let O=0;O<k.length;O++){const U=k[O],se=U.regex.exec(e);if(se){const W=se[U.indices.bucket];let Z=se[U.indices.path];Z||(Z=""),r=new ft(W,Z),U.postModify(r);break}}if(r==null)throw Vk(e);return r}}class Wk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...I){l||(l=!0,e.apply(null,I))}function h(I){s=setTimeout(()=>{s=null,t(p,c())},I)}function f(){i&&clearTimeout(i)}function p(I,...y){if(l){f();return}if(I){f(),u.call(null,I,...y);return}if(c()||o){f(),u.call(null,I,...y);return}r<64&&(r*=2);let k;a===1?(a=2,k=0):k=(r+Math.random())*1e3,h(k)}let g=!1;function v(I){g||(g=!0,f(),!l&&(s!==null?(I||(a=2),clearTimeout(s),h(0)):I||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,v(!0)},n),v}function Yk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){return t!==void 0}function Xk(t){return typeof t=="object"&&!Array.isArray(t)}function kf(t){return typeof t=="string"||t instanceof String}function Vp(t){return Af()&&t instanceof Blob}function Af(){return typeof Blob!="undefined"&&!nE()}function Ou(t,e,n,r){if(r<e)throw Ru(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ru(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function F1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Rr||(Rr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e,n,r,s,i,o,a,c,l,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ho(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Rr.NO_ERROR,c=i.getStatus();if((!a||Jk(c,this.additionalRetryCodes_))&&this.retry){const u=i.getErrorCode()===Rr.ABORT;r(!1,new Ho(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Ho(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());Qk(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Sf();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?M1():$k();o(c)}else{const c=Uk();o(c)}};this.canceled_?n(!1,new Ho(!1,null,!0)):this.backoffId_=Gk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Yk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ho{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function eA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function nA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function rA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function sA(t,e,n,r,s,i,o=!0){const a=F1(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return nA(l,e),eA(l,n),tA(l,i),rA(l,r),new Zk(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function oA(...t){const e=iA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Af())return new Blob(t);throw new Ne("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function aA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(t){if(typeof atob=="undefined")throw Hk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rl{constructor(e,n){this.data=e,this.contentType=n||null}}function lA(t,e){switch(t){case Xt.RAW:return new Rl(U1(e));case Xt.BASE64:case Xt.BASE64URL:return new Rl($1(t,e));case Xt.DATA_URL:return new Rl(hA(e),fA(e))}throw Sf()}function U1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function uA(t){let e;try{e=decodeURIComponent(t)}catch{throw mi(Xt.DATA_URL,"Malformed data URL.")}return U1(e)}function $1(t,e){switch(t){case Xt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw mi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Xt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw mi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=cA(e)}catch(s){throw s.message.includes("polyfill")?s:mi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class V1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw mi(Xt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=dA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hA(t){const e=new V1(t);return e.base64?$1(Xt.BASE64,e.rest):uA(e.rest)}function fA(t){return new V1(t).contentType}function dA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n){let r=0,s="";Vp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Vp(this.data_)){const r=this.data_,s=aA(r,e,n);return s===null?null:new Fn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Fn(r,!0)}}static getBlob(...e){if(Af()){const n=e.map(r=>r instanceof Fn?r.data_:r);return new Fn(oA.apply(null,n))}else{const n=e.map(o=>kf(o)?lA(Xt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Fn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){let e;try{e=JSON.parse(t)}catch{return null}return Xk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function B1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(t,e){return e}class ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||gA}}let Ko=null;function yA(t){return!kf(t)||t.length<2?t:B1(t)}function j1(){if(Ko)return Ko;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(i,o){return yA(o)}const n=new ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ct("size");return s.xform=r,t.push(s),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),Ko=t,Ko}function vA(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new ft(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function wA(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return vA(r,t),r}function q1(t,e,n){const r=Cf(e);return r===null?null:wA(t,r,n)}function bA(t,e,n,r){const s=Cf(e);if(s===null||!kf(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),p=Eo(f,n,r),g=F1({alt:"media",token:l});return p+g})[0]}function _A(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="prefixes",jp="items";function EA(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[Bp])for(const s of n[Bp]){const i=s.replace(/\/$/,""),o=t._makeStorageReference(new ft(e,i));r.prefixes.push(o)}if(n[jp])for(const s of n[jp]){const i=t._makeStorageReference(new ft(e,s.name));r.items.push(i)}return r}function IA(t,e,n){const r=Cf(n);return r===null?null:EA(t,e,r)}class Gc{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(t){if(!t)throw Sf()}function TA(t,e){function n(r,s){const i=q1(t,s,e);return xf(i!==null),i}return n}function SA(t,e){function n(r,s){const i=IA(t,e,s);return xf(i!==null),i}return n}function kA(t,e){function n(r,s){const i=q1(t,s,e);return xf(i!==null),bA(i,s,t.host,t._protocol)}return n}function Rf(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Mk():s=Lk():n.getStatus()===402?s=Dk(t.bucket):n.getStatus()===403?s=Fk(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function z1(t){const e=Rf(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Nk(t.path)),i.serverResponse=s.serverResponse,i}return n}function AA(t,e,n,r,s){const i={};e.isRoot?i.prefix="":i.prefix=e.path+"/",n&&n.length>0&&(i.delimiter=n),r&&(i.pageToken=r),s&&(i.maxResults=s);const o=e.bucketOnlyServerUrl(),a=Eo(o,t.host,t._protocol),c="GET",l=t.maxOperationRetryTime,u=new Gc(a,c,SA(t,e.bucket),l);return u.urlParams=i,u.errorHandler=Rf(e),u}function CA(t,e,n){const r=e.fullServerUrl(),s=Eo(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Gc(s,i,kA(t,n),o);return a.errorHandler=z1(e),a}function xA(t,e){const n=e.fullServerUrl(),r=Eo(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,l){}const a=new Gc(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=z1(e),a}function RA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function OA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RA(null,e)),r}function PA(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let k="";for(let O=0;O<2;O++)k=k+Math.random().toString().slice(2);return k}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=OA(e,r,s),u=_A(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,f=`\r
--`+c+"--",p=Fn.getBlob(h,r,f);if(p===null)throw qk();const g={name:l.fullPath},v=Eo(i,t.host,t._protocol),I="POST",y=t.maxUploadRetryTime,b=new Gc(v,I,TA(t,n),y);return b.urlParams=g,b.headers=o,b.body=p.uploadData(),b.errorHandler=Rf(e),b}class NA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Xs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DA extends NA{initXhr(){this.xhr_.responseType="text"}}function Yc(){return new DA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this._service=e,n instanceof ft?this._location=n:this._location=ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vr(e,n)}get root(){const e=new ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return B1(this._location.path)}get storage(){return this._service}get parent(){const e=pA(this._location.path);if(e===null)return null;const n=new ft(this._location.bucket,e);return new Vr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Kk(e)}}function LA(t,e,n){t._throwIfRoot("uploadBytes");const r=PA(t.storage,t._location,j1(),new Fn(e,!0),n);return t.storage.makeRequestWithTokens(r,Yc).then(s=>({metadata:s,ref:t}))}function MA(t){const e={prefixes:[],items:[]};return H1(t,e).then(()=>e)}async function H1(t,e,n){const s=await FA(t,{pageToken:n});e.prefixes.push(...s.prefixes),e.items.push(...s.items),s.nextPageToken!=null&&await H1(t,e,s.nextPageToken)}function FA(t,e){e!=null&&typeof e.maxResults=="number"&&Ou("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=AA(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Yc)}function UA(t){t._throwIfRoot("getDownloadURL");const e=CA(t.storage,t._location,j1());return t.storage.makeRequestWithTokens(e,Yc).then(n=>{if(n===null)throw zk();return n})}function $A(t){t._throwIfRoot("deleteObject");const e=xA(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Yc)}function VA(t,e){const n=mA(t._location.path,e),r=new ft(t._location.bucket,n);return new Vr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t){return/^[A-Za-z]+:\/\//.test(t)}function jA(t,e){return new Vr(t,e)}function K1(t,e){if(t instanceof Of){const n=t;if(n._bucket==null)throw jk();const r=new Vr(n,n._bucket);return e!=null?K1(r,e):r}else return e!==void 0?VA(t,e):t}function qA(t,e){if(e&&BA(e)){if(t instanceof Of)return jA(t,e);throw Ru("To use ref(service, url), the first argument must be a Storage instance.")}else return K1(t,e)}function qp(t,e){const n=e==null?void 0:e[L1];return n==null?null:ft.makeFromBucketSpec(n,t)}function zA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:ay(s,t.app.options.projectId))}class Of{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=D1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ok,this._maxUploadRetryTime=Pk,this._requests=new Set,s!=null?this._bucket=ft.makeFromBucketSpec(s,this._host):this._bucket=qp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ft.makeFromBucketSpec(this._url,e):this._bucket=qp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ou("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ou("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Wk(M1());{const o=sA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const zp="@firebase/storage",Hp="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="storage";function HA(t,e,n){return t=Ae(t),LA(t,e,n)}function G1(t){return t=Ae(t),MA(t)}function Y1(t){return t=Ae(t),UA(t)}function KA(t){return t=Ae(t),$A(t)}function Io(t,e){return t=Ae(t),qA(t,e)}function WA(t=wh(),e){t=Ae(t);const r=gc(t,W1).getImmediate({identifier:e}),s=iy("storage");return s&&GA(r,...s),r}function GA(t,e,n,r={}){zA(t,e,n,r)}function YA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Of(n,r,s,e,Fs)}function QA(){Mr(new Xn(W1,YA,"PUBLIC").setMultipleInstances(!0)),Zt(zp,Hp,""),Zt(zp,Hp,"esm2017")}QA();function Pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Q1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XA=Q1,X1=new to("auth","Firebase",Q1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new yh("@firebase/auth");function da(t,...e){Kp.logLevel<=fe.ERROR&&Kp.error(`Auth (${Fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw Nf(t,...e)}function tn(t,...e){return Nf(t,...e)}function JA(t,e,n){const r=Object.assign(Object.assign({},XA()),{[e]:n});return new to("auth","Firebase",r).create(e,{appName:t.name})}function Nf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return X1.create(t,...e)}function Y(t,e,...n){if(!t)throw Nf(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw da(e),new Error(e)}function En(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new Map;function pn(t){En(t instanceof Function,"Expected a class definition");let e=Wp.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(t,e){const n=gc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Sa(i,e!=null?e:{}))return s;qt(s,"already-initialized")}return n.initialize({options:e})}function eC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tC(){return Gp()==="http:"||Gp()==="https:"}function Gp(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tC()||rE()||"connection"in navigator)?navigator.onLine:!0}function rC(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=tE()||sE()}get(){return nC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new To(3e4,6e4);function Qc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function So(t,e,n,r,s={}){return Z1(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=no(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),J1.fetch()(e0(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Z1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sC),e);try{const s=new oC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Wo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw JA(t,u,l);qt(t,u)}}catch(s){if(s instanceof on)throw s;qt(t,"network-request-failed")}}async function Xc(t,e,n,r,s={}){const i=await So(t,e,n,r,s);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function e0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Df(t.config,s):`${t.config.apiScheme}://${s}`}class oC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),iC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e){return So(t,"POST","/v1/accounts:delete",e)}async function cC(t,e){return So(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lC(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),s=Lf(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:gi(Ol(s.auth_time)),issuedAtTime:gi(Ol(s.iat)),expirationTime:gi(Ol(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ol(t){return Number(t)*1e3}function Lf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return da("JWT malformed, contained fewer than 3 sections"),null;try{const s=ry(n);return s?JSON.parse(s):(da("Failed to decode base64 JWT payload"),null)}catch(s){return da("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function uC(t){const e=Lf(t);return Y(e,"internal-error"),Y(typeof e.exp!="undefined","internal-error"),Y(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&hC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function hC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gi(this.lastLoginAt),this.creationTime=gi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await qi(t,cC(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?mC(i.providerUserInfo):[],a=pC(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new t0(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function dC(t){const e=Ae(t);await qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function mC(t){return t.map(e=>{var{providerId:n}=e,r=Pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){const n=await Z1(t,{},async()=>{const r=no({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=e0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",J1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken!="undefined","internal-error"),Y(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):uC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await gC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zi;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){Y(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Or{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new t0(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qi(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lC(this,e)}reload(){return dC(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Or(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qi(this,aC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=n.createdAt)!==null&&l!==void 0?l:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:O,isAnonymous:U,providerData:se,stsTokenManager:W}=n;Y(k&&W,e,"internal-error");const Z=zi.fromJSON(this.name,W);Y(typeof k=="string",e,"internal-error"),On(h,e.name),On(f,e.name),Y(typeof O=="boolean",e,"internal-error"),Y(typeof U=="boolean",e,"internal-error"),On(p,e.name),On(g,e.name),On(v,e.name),On(I,e.name),On(y,e.name),On(b,e.name);const ge=new Or({uid:k,auth:e,email:f,emailVerified:O,displayName:h,isAnonymous:U,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:Z,createdAt:y,lastLoginAt:b});return se&&Array.isArray(se)&&(ge.providerData=se.map(Le=>Object.assign({},Le))),I&&(ge._redirectEventId=I),ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new zi;s.updateFromServerResponse(n);const i=new Or({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await qa(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}n0.type="NONE";const Yp=n0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e,n){return`firebase:${t}:${e}:${n}`}class fs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=pa(this.userKey,s.apiKey,i),this.fullPersistenceKey=pa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Or._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new fs(pn(Yp),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||pn(Yp);const o=pa(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Or._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new fs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new fs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(r0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(a0(e))return"Blackberry";if(c0(e))return"Webos";if(Mf(e))return"Safari";if((e.includes("chrome/")||s0(e))&&!e.includes("edge/"))return"Chrome";if(o0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function r0(t=ot()){return/firefox\//i.test(t)}function Mf(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s0(t=ot()){return/crios\//i.test(t)}function i0(t=ot()){return/iemobile/i.test(t)}function o0(t=ot()){return/android/i.test(t)}function a0(t=ot()){return/blackberry/i.test(t)}function c0(t=ot()){return/webos/i.test(t)}function Jc(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yC(t=ot()){var e;return Jc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vC(){return iE()&&document.documentMode===10}function l0(t=ot()){return Jc(t)||o0(t)||c0(t)||a0(t)||/windows phone/i.test(t)||i0(t)}function wC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e=[]){let n;switch(t){case"Browser":n=Qp(ot());break;case"Worker":n=`${Qp(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xp(this),this.idTokenSubscription=new Xp(this),this.beforeStateQueue=new bC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=X1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c==null?void 0:c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ae(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new to("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=u0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Zc(t){return Ae(t)}class Xp{constructor(e){this.auth=e,this.observer=null,this.addObserver=vE(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function EC(t,e,n){const r=Zc(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=h0(e),{host:o,port:a}=IC(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||TC()}function h0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function IC(t){const e=h0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Jp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Jp(o)}}}function Jp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function TC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function SC(t,e){return So(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return Xc(t,"POST","/v1/accounts:signInWithPassword",Qc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e){return Xc(t,"POST","/v1/accounts:signInWithEmailLink",Qc(t,e))}async function CC(t,e){return Xc(t,"POST","/v1/accounts:signInWithEmailLink",Qc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends Ff{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Hi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Hi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return kC(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return AC(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return SC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return CC(e,{idToken:n,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Xc(t,"POST","/v1/accounts:signInWithIdp",Qc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="http://localhost";class Br extends Ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Pf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ds(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ds(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ds(e,n)}buildRequest(){const e={requestUri:xC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=no(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OC(t){const e=ti(ni(t)).link,n=e?ti(ni(e)).deep_link_id:null,r=ti(ni(t)).deep_link_id;return(r?ti(ni(r)).link:null)||r||n||e||t}class Uf{constructor(e){var n,r,s,i,o,a;const c=ti(ni(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=RC((s=c.mode)!==null&&s!==void 0?s:null);Y(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=OC(e);try{return new Uf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.providerId=zs.PROVIDER_ID}static credential(e,n){return Hi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uf.parseLink(n);return Y(r,"argument-error"),Hi._fromEmailAndCode(e,r.code,r.tenantId)}}zs.PROVIDER_ID="password";zs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends f0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ko{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ko{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ko{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Or._fromIdTokenResponse(e,r,s),o=Zp(r);return new xs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zp(r);return new xs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends on{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,za.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new za(e,n,r,s)}}function d0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?za._fromErrorAndOperation(t,i,e,r):i})}async function PC(t,e,n=!1){const r=await qi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await qi(t,d0(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Lf(i.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),xs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p0(t,e,n=!1){const r="signIn",s=await d0(t,r,e),i=await xs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function DC(t,e){return p0(Zc(t),e)}function LC(t,e,n){return DC(Ae(t),zs.credential(e,n))}function MC(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function FC(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function UC(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function $C(t){return Ae(t).signOut()}const Ha="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ha,"1"),this.storage.removeItem(Ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(){const t=ot();return Mf(t)||Jc(t)}const BC=1e3,jC=10;class g0 extends m0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=VC()&&wC(),this.fallbackToPolling=l0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);vC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}g0.type="LOCAL";const qC=g0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0 extends m0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}y0.type="SESSION";const v0=y0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new el(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await zC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}el.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=$f("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function KC(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(){return typeof nn().WorkerGlobalScope!="undefined"&&typeof nn().importScripts=="function"}async function WC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function YC(){return w0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="firebaseLocalStorageDb",QC=1,Ka="firebaseLocalStorage",_0="fbase_key";class Ao{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tl(t,e){return t.transaction([Ka],e?"readwrite":"readonly").objectStore(Ka)}function XC(){const t=indexedDB.deleteDatabase(b0);return new Ao(t).toPromise()}function Nu(){const t=indexedDB.open(b0,QC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ka,{keyPath:_0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ka)?e(r):(r.close(),await XC(),e(await Nu()))})})}async function em(t,e,n){const r=tl(t,!0).put({[_0]:e,value:n});return new Ao(r).toPromise()}async function JC(t,e){const n=tl(t,!1).get(e),r=await new Ao(n).toPromise();return r===void 0?null:r.value}function tm(t,e){const n=tl(t,!0).delete(e);return new Ao(n).toPromise()}const ZC=800,ex=3;class E0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ex)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return w0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=el._getInstance(YC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WC(),!this.activeServiceWorker)return;this.sender=new HC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nu();return await em(e,Ha,"1"),await tm(e,Ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>em(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tl(s,!1).getAll();return new Ao(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}E0.type="LOCAL";const tx=E0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function rx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",nx().appendChild(r)})}function sx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new To(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t,e){return e?pn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends Ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ox(t){return p0(t.auth,new Vf(t),t.bypassAuthState)}function ax(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),NC(n,new Vf(t),t.bypassAuthState)}async function cx(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),PC(n,new Vf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ox;case"linkViaPopup":case"linkViaRedirect":return cx;case"reauthViaPopup":case"reauthViaRedirect":return ax;default:qt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=new To(2e3,1e4);class rs extends I0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,rs.currentPopupAction&&rs.currentPopupAction.cancel(),rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=$f();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,lx.get())};e()}}rs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux="pendingRedirect",ma=new Map;class hx extends I0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const r=await fx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fx(t,e){const n=mx(e),r=px(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dx(t,e){ma.set(t._key(),e)}function px(t){return pn(t._redirectPersistence)}function mx(t){return pa(ux,t.config.apiKey,t.name)}async function gx(t,e,n=!1){const r=Zc(t),s=ix(r,e),o=await new hx(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=10*60*1e3;class vx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!T0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yx&&this.cachedEventUids.clear(),this.cachedEventUids.has(nm(e))}saveEventToCache(e){this.cachedEventUids.add(nm(e)),this.lastProcessedEventTime=Date.now()}}function nm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function T0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return T0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e={}){return So(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ex=/^https?/;async function Ix(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bx(t);for(const n of e)try{if(Tx(n))return}catch{}qt(t,"unauthorized-domain")}function Tx(t){const e=Pu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ex.test(n))return!1;if(_x.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx=new To(3e4,6e4);function rm(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kx(t){return new Promise((e,n)=>{var r,s,i;function o(){rm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rm(),n(tn(t,"network-request-failed"))},timeout:Sx.get()})}if(!((s=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)o();else{const a=sx("iframefcb");return nn()[a]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},rx(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ga=null,e})}let ga=null;function Ax(t){return ga=ga||kx(t),ga}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cx=new To(5e3,15e3),xx="__/auth/iframe",Rx="emulator/auth/iframe",Ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Px=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nx(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Df(e,Rx):`https://${t.config.authDomain}/${xx}`,r={apiKey:e.apiKey,appName:t.name,v:Fs},s=Px.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${no(r).slice(1)}`}async function Dx(t){const e=await Ax(t),n=nn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:Nx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ox,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),a=nn().setTimeout(()=>{i(o)},Cx.get());function c(){nn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mx=500,Fx=600,Ux="_blank",$x="http://localhost";class sm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Vx(t,e,n,r=Mx,s=Fx){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Lx),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ot().toLowerCase();n&&(a=s0(l)?Ux:n),r0(l)&&(e=e||$x,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(yC(l)&&a!=="_self")return Bx(e||"",a),new sm(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new sm(h)}function Bx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="__/auth/handler",qx="emulator/auth/handler";function im(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fs,eventId:s};if(e instanceof f0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ko){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${zx(t)}?${no(a).slice(1)}`}function zx({config:t}){return t.emulator?Df(t,qx):`https://${t.authDomain}/${jx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl="webStorageSupport";class Hx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=v0,this._completeRedirectFn=gx,this._overrideRedirectResult=dx}async _openPopup(e,n,r,s){var i;En((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=im(e,n,r,Pu(),s);return Vx(e,o,$f())}async _openRedirect(e,n,r,s){return await this._originValidation(e),KC(im(e,n,r,Pu(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(En(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Dx(e),r=new vx(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pl,{type:Pl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pl];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ix(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return l0()||Mf()||Jc()}}const Kx=Hx;var om="@firebase/auth",am="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yx(t){Mr(new Xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{Y(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),Y(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u0(t)},u=new _C(a,c,l);return eC(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new Xn("auth-internal",e=>{const n=Zc(e.getProvider("auth").getImmediate());return(r=>new Wx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(om,am,Gx(t)),Zt(om,am,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=5*60,Xx=oy("authIdTokenMaxAge")||Qx;let cm=null;const Jx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Xx)return;const s=n==null?void 0:n.token;cm!==s&&(cm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zx(t=wh()){const e=gc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZA(t,{popupRedirectResolver:Kx,persistence:[tx,qC,v0]}),r=oy("authTokenSyncURL");if(r){const i=Jx(r);FC(n,i,()=>i(n.currentUser)),MC(n,o=>i(o))}const s=sy("auth");return s&&EC(n,`http://${s}`),n}Yx("Browser");const eR={apiKey:"AIzaSyAidhWfwN3WKa-P2-uBQL81M-T4KJj5mWs",authDomain:"senlleirapp-3e5fe.firebaseapp.com",projectId:"senlleirapp-3e5fe",storageBucket:"senlleirapp-3e5fe.appspot.com",messagingSenderId:"857393304559",appId:"1:857393304559:web:62d4f7e4ff2dc00c5cdc1a"},S0=uy(eR),Co=WA(S0),pt=uk(S0),Nl=Zx();/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ts=typeof window!="undefined";function tR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function Dl(t,e){const n={};for(const r in e){const s=e[r];n[r]=zt(s)?s.map(t):t(s)}return n}const yi=()=>{},zt=Array.isArray,nR=/\/$/,rR=t=>t.replace(nR,"");function Ll(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=aR(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function sR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function lm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function iR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Rs(e.matched[r],n.matched[s])&&k0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Rs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function k0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!oR(t[n],e[n]))return!1;return!0}function oR(t,e){return zt(t)?um(t,e):zt(e)?um(e,t):t===e}function um(t,e){return zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function aR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Ki;(function(t){t.pop="pop",t.push="push"})(Ki||(Ki={}));var vi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(vi||(vi={}));function cR(t){if(!t)if(ts){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rR(t)}const lR=/^[^#]+#/;function uR(t,e){return t.replace(lR,"#")+e}function hR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const nl=()=>({left:window.pageXOffset,top:window.pageYOffset});function fR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=hR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hm(t,e){return(history.state?history.state.position-e:-1)+t}const Du=new Map;function dR(t,e){Du.set(t,e)}function pR(t){const e=Du.get(t);return Du.delete(t),e}let mR=()=>location.protocol+"//"+location.host;function A0(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),lm(c,"")}return lm(n,t)+r+s}function gR(t,e,n,r){let s=[],i=[],o=null;const a=({state:f})=>{const p=A0(t,location),g=n.value,v=e.value;let I=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}I=v?f.position-v.position:0}else r(p);s.forEach(y=>{y(n.value,g,{delta:I,type:Ki.pop,direction:I?I>0?vi.forward:vi.back:vi.unknown})})};function c(){o=n.value}function l(f){s.push(f);const p=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return i.push(p),p}function u(){const{history:f}=window;!f.state||f.replaceState(me({},f.state,{scroll:nl()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function fm(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?nl():null}}function yR(t){const{history:e,location:n}=window,r={value:A0(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:mR()+t+c;try{e[u?"replaceState":"pushState"](l,"",f),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(c,l){const u=me({},e.state,fm(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=me({},s.value,e.state,{forward:c,scroll:nl()});i(u.current,u,!0);const h=me({},fm(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function vR(t){t=cR(t);const e=yR(t),n=gR(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:uR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function wR(t){return typeof t=="string"||t&&typeof t=="object"}function C0(t){return typeof t=="string"||typeof t=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},x0=Symbol("");var dm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(dm||(dm={}));function Os(t,e){return me(new Error,{type:t,[x0]:!0},e)}function cn(t,e){return t instanceof Error&&x0 in t&&(e==null||!!(t.type&e))}const pm="[^/]+?",bR={sensitive:!1,strict:!1,start:!0,end:!0},_R=/[.+*?^${}()[\]/\\]/g;function ER(t,e){const n=me({},bR,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const f=l[h];let p=40+(n.sensitive?.25:0);if(f.type===0)h||(s+="/"),s+=f.value.replace(_R,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:v,optional:I,regexp:y}=f;i.push({name:g,repeatable:v,optional:I});const b=y||pm;if(b!==pm){p+=10;try{new RegExp(`(${b})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+O.message)}}let k=v?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(k=I&&l.length<2?`(?:/${k})`:"/"+k),I&&(k+="?"),s+=k,p+=20,I&&(p+=-8),v&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=i[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:I}=p,y=g in l?l[g]:"";if(zt(y)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=zt(y)?y.join("/"):y;if(!b)if(I)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function IR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function TR(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=IR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(mm(r))return 1;if(mm(s))return-1}return s.length-r.length}function mm(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const SR={type:0,value:""},kR=/[a-zA-Z0-9_]/;function AR(t){if(!t)return[[]];if(t==="/")return[[SR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){!l||(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function f(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:c==="("?n=2:kR.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function CR(t,e,n){const r=ER(AR(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xR(t,e){const n=[],r=new Map;e=vm({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,f){const p=!f,g=RR(u);g.aliasOf=f&&f.record;const v=vm(e,u),I=[g];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const O of k)I.push(me({},g,{components:f?f.record.components:g.components,path:O,aliasOf:f?f.record:g}))}let y,b;for(const k of I){const{path:O}=k;if(h&&O[0]!=="/"){const U=h.record.path,se=U[U.length-1]==="/"?"":"/";k.path=h.record.path+(O&&se+O)}if(y=CR(k,h,v),f?f.alias.push(y):(b=b||y,b!==y&&b.alias.push(y),p&&u.name&&!ym(y)&&o(u.name)),g.children){const U=g.children;for(let se=0;se<U.length;se++)i(U[se],y,f&&f.children[se])}f=f||y,(y.record.components&&Object.keys(y.record.components).length||y.record.name||y.record.redirect)&&c(y)}return b?()=>{o(b)}:yi}function o(u){if(C0(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&TR(u,n[h])>=0&&(u.record.path!==n[h].record.path||!R0(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ym(u)&&r.set(u.record.name,u)}function l(u,h){let f,p={},g,v;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Os(1,{location:u});v=f.record.name,p=me(gm(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&gm(u.params,f.keys.map(b=>b.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=n.find(b=>b.re.test(g)),f&&(p=f.parse(g),v=f.record.name);else{if(f=h.name?r.get(h.name):n.find(b=>b.re.test(h.path)),!f)throw Os(1,{location:u,currentLocation:h});v=f.record.name,p=me({},h.params,u.params),g=f.stringify(p)}const I=[];let y=f;for(;y;)I.unshift(y.record),y=y.parent;return{name:v,path:g,params:p,matched:I,meta:PR(I)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function gm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function RR(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:OR(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function OR(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function ym(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function PR(t){return t.reduce((e,n)=>me(e,n.meta),{})}function vm(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function R0(t,e){return e.children.some(n=>n===t||R0(t,n))}const O0=/#/g,NR=/&/g,DR=/\//g,LR=/=/g,MR=/\?/g,P0=/\+/g,FR=/%5B/g,UR=/%5D/g,N0=/%5E/g,$R=/%60/g,D0=/%7B/g,VR=/%7C/g,L0=/%7D/g,BR=/%20/g;function Bf(t){return encodeURI(""+t).replace(VR,"|").replace(FR,"[").replace(UR,"]")}function jR(t){return Bf(t).replace(D0,"{").replace(L0,"}").replace(N0,"^")}function Lu(t){return Bf(t).replace(P0,"%2B").replace(BR,"+").replace(O0,"%23").replace(NR,"%26").replace($R,"`").replace(D0,"{").replace(L0,"}").replace(N0,"^")}function qR(t){return Lu(t).replace(LR,"%3D")}function zR(t){return Bf(t).replace(O0,"%23").replace(MR,"%3F")}function HR(t){return t==null?"":zR(t).replace(DR,"%2F")}function Wa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function KR(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(P0," "),o=i.indexOf("="),a=Wa(o<0?i:i.slice(0,o)),c=o<0?null:Wa(i.slice(o+1));if(a in e){let l=e[a];zt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function wm(t){let e="";for(let n in t){const r=t[n];if(n=qR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(zt(r)?r.map(i=>i&&Lu(i)):[r&&Lu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function WR(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const GR=Symbol(""),bm=Symbol(""),rl=Symbol(""),jf=Symbol(""),Mu=Symbol("");function Js(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Mn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(Os(4,{from:n,to:e})):h instanceof Error?a(h):wR(h)?a(Os(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function Ml(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(YR(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Mn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=tR(l)?l.default:l;i.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&Mn(f,n,r,i,o)()}))}}return s}function YR(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _m(t){const e=Rt(rl),n=Rt(jf),r=Ce(()=>e.resolve(xt(t.to))),s=Ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Rs.bind(null,u));if(f>-1)return f;const p=Em(c[l-2]);return l>1&&Em(u)===p&&h[h.length-1].path!==p?h.findIndex(Rs.bind(null,c[l-2])):f}),i=Ce(()=>s.value>-1&&ZR(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&k0(n.params,r.value.params));function a(c={}){return JR(c)?e[xt(t.replace)?"replace":"push"](xt(t.to)).catch(yi):Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const QR=Zi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:_m,setup(t,{slots:e}){const n=Ms(_m(t)),{options:r}=Rt(rl),s=Ce(()=>({[Im(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Im(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:pc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),XR=QR;function JR(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ZR(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!zt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Em(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Im=(t,e,n)=>t!=null?t:e!=null?e:n,eO=Zi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Rt(Mu),s=Ce(()=>t.route||r.value),i=Rt(bm,0),o=Ce(()=>{let l=xt(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Ce(()=>s.value.matched[o.value]);ia(bm,Ce(()=>o.value+1)),ia(GR,a),ia(Mu,s);const c=ki();return ls(()=>[c.value,a.value,t.name],([l,u,h],[f,p,g])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!Rs(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Tm(n.default,{Component:f,route:l});const p=h.props[u],g=p?p===!0?l.params:typeof p=="function"?p(l):p:null,I=pc(f,me({},g,e,{onVnodeUnmounted:y=>{y.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Tm(n.default,{Component:I,route:l})||I}}});function Tm(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const M0=eO;function tO(t){const e=xR(t.routes,t),n=t.parseQuery||KR,r=t.stringifyQuery||wm,s=t.history,i=Js(),o=Js(),a=Js(),c=ib(Pn);let l=Pn;ts&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Dl.bind(null,T=>""+T),h=Dl.bind(null,HR),f=Dl.bind(null,Wa);function p(T,M){let D,z;return C0(T)?(D=e.getRecordMatcher(T),z=M):z=T,e.addRoute(z,D)}function g(T){const M=e.getRecordMatcher(T);M&&e.removeRoute(M)}function v(){return e.getRoutes().map(T=>T.record)}function I(T){return!!e.getRecordMatcher(T)}function y(T,M){if(M=me({},M||c.value),typeof T=="string"){const d=Ll(n,T,M.path),m=e.resolve({path:d.path},M),w=s.createHref(d.fullPath);return me(d,m,{params:f(m.params),hash:Wa(d.hash),redirectedFrom:void 0,href:w})}let D;if("path"in T)D=me({},T,{path:Ll(n,T.path,M.path).path});else{const d=me({},T.params);for(const m in d)d[m]==null&&delete d[m];D=me({},T,{params:h(T.params)}),M.params=h(M.params)}const z=e.resolve(D,M),le=T.hash||"";z.params=u(f(z.params));const Re=sR(r,me({},T,{hash:jR(le),path:z.path})),ie=s.createHref(Re);return me({fullPath:Re,hash:le,query:r===wm?WR(T.query):T.query||{}},z,{redirectedFrom:void 0,href:ie})}function b(T){return typeof T=="string"?Ll(n,T,c.value.path):me({},T)}function k(T,M){if(l!==T)return Os(8,{from:M,to:T})}function O(T){return W(T)}function U(T){return O(me(b(T),{replace:!0}))}function se(T){const M=T.matched[T.matched.length-1];if(M&&M.redirect){const{redirect:D}=M;let z=typeof D=="function"?D(T):D;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=b(z):{path:z},z.params={}),me({query:T.query,hash:T.hash,params:"path"in z?{}:T.params},z)}}function W(T,M){const D=l=y(T),z=c.value,le=T.state,Re=T.force,ie=T.replace===!0,d=se(D);if(d)return W(me(b(d),{state:typeof d=="object"?me({},le,d.state):le,force:Re,replace:ie}),M||D);const m=D;m.redirectedFrom=M;let w;return!Re&&iR(r,z,D)&&(w=Os(16,{to:m,from:z}),ur(z,z,!0,!1)),(w?Promise.resolve(w):ge(m,z)).catch(E=>cn(E)?cn(E,2)?E:Pt(E):we(E,m,z)).then(E=>{if(E){if(cn(E,2))return W(me({replace:ie},b(E.to),{state:typeof E.to=="object"?me({},le,E.to.state):le,force:Re}),M||m)}else E=mt(m,z,!0,ie,le);return Le(m,z,E),E})}function Z(T,M){const D=k(T,M);return D?Promise.reject(D):Promise.resolve()}function ge(T,M){let D;const[z,le,Re]=nO(T,M);D=Ml(z.reverse(),"beforeRouteLeave",T,M);for(const d of z)d.leaveGuards.forEach(m=>{D.push(Mn(m,T,M))});const ie=Z.bind(null,T,M);return D.push(ie),Jr(D).then(()=>{D=[];for(const d of i.list())D.push(Mn(d,T,M));return D.push(ie),Jr(D)}).then(()=>{D=Ml(le,"beforeRouteUpdate",T,M);for(const d of le)d.updateGuards.forEach(m=>{D.push(Mn(m,T,M))});return D.push(ie),Jr(D)}).then(()=>{D=[];for(const d of T.matched)if(d.beforeEnter&&!M.matched.includes(d))if(zt(d.beforeEnter))for(const m of d.beforeEnter)D.push(Mn(m,T,M));else D.push(Mn(d.beforeEnter,T,M));return D.push(ie),Jr(D)}).then(()=>(T.matched.forEach(d=>d.enterCallbacks={}),D=Ml(Re,"beforeRouteEnter",T,M),D.push(ie),Jr(D))).then(()=>{D=[];for(const d of o.list())D.push(Mn(d,T,M));return D.push(ie),Jr(D)}).catch(d=>cn(d,8)?d:Promise.reject(d))}function Le(T,M,D){for(const z of a.list())z(T,M,D)}function mt(T,M,D,z,le){const Re=k(T,M);if(Re)return Re;const ie=M===Pn,d=ts?history.state:{};D&&(z||ie?s.replace(T.fullPath,me({scroll:ie&&d&&d.scroll},le)):s.push(T.fullPath,le)),c.value=T,ur(T,M,D,ie),Pt()}let Ct;function xn(){Ct||(Ct=s.listen((T,M,D)=>{if(!Po.listening)return;const z=y(T),le=se(z);if(le){W(me(le,{replace:!0}),z).catch(yi);return}l=z;const Re=c.value;ts&&dR(hm(Re.fullPath,D.delta),nl()),ge(z,Re).catch(ie=>cn(ie,12)?ie:cn(ie,2)?(W(ie.to,z).then(d=>{cn(d,20)&&!D.delta&&D.type===Ki.pop&&s.go(-1,!1)}).catch(yi),Promise.reject()):(D.delta&&s.go(-D.delta,!1),we(ie,z,Re))).then(ie=>{ie=ie||mt(z,Re,!1),ie&&(D.delta&&!cn(ie,8)?s.go(-D.delta,!1):D.type===Ki.pop&&cn(ie,20)&&s.go(-1,!1)),Le(z,Re,ie)}).catch(yi)}))}let _t=Js(),We=Js(),Me;function we(T,M,D){Pt(T);const z=We.list();return z.length?z.forEach(le=>le(T,M,D)):console.error(T),Promise.reject(T)}function ye(){return Me&&c.value!==Pn?Promise.resolve():new Promise((T,M)=>{_t.add([T,M])})}function Pt(T){return Me||(Me=!T,xn(),_t.list().forEach(([M,D])=>T?D(T):M()),_t.reset()),T}function ur(T,M,D,z){const{scrollBehavior:le}=t;if(!ts||!le)return Promise.resolve();const Re=!D&&pR(hm(T.fullPath,0))||(z||!D)&&history.state&&history.state.scroll||null;return hh().then(()=>le(T,M,Re)).then(ie=>ie&&fR(ie)).catch(ie=>we(ie,T,M))}const Nt=T=>s.go(T);let gt;const Yr=new Set,Po={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:I,getRoutes:v,resolve:y,options:t,push:O,replace:U,go:Nt,back:()=>Nt(-1),forward:()=>Nt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:We.add,isReady:ye,install(T){const M=this;T.component("RouterLink",XR),T.component("RouterView",M0),T.config.globalProperties.$router=M,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>xt(c)}),ts&&!gt&&c.value===Pn&&(gt=!0,O(s.location).catch(le=>{}));const D={};for(const le in Pn)D[le]=Ce(()=>c.value[le]);T.provide(rl,M),T.provide(jf,Ms(D)),T.provide(Mu,c);const z=T.unmount;Yr.add(T),T.unmount=function(){Yr.delete(T),Yr.size<1&&(l=Pn,Ct&&Ct(),Ct=null,c.value=Pn,gt=!1,Me=!1),z()}}};return Po}function Jr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function nO(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Rs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Rs(l,c))||s.push(c))}return[n,r,s]}function b3(){return Rt(rl)}function _3(){return Rt(jf)}const rO="modulepreload",Sm={},sO="/",Ue=function(e,n){return!n||n.length===0?e():Promise.all(n.map(r=>{if(r=`${sO}${r}`,r in Sm)return;Sm[r]=!0;const s=r.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=s?"stylesheet":rO,s||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),s)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())},iO=[{path:"/",name:"inicio",meta:{title:"Senlleira"},component:()=>Ue(()=>import("./Inicio.8beedea5.js"),["assets/Inicio.8beedea5.js","assets/Inicio.4773110a.css","assets/carruselStories.182beb76.css","assets/CarruselImagenes.3b51b3a3.js","assets/CarruselImagenes.39b5a0f2.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/nova-arbore",name:"NuevoArbol",meta:{title:"Engadir \xE1rbore"},component:()=>Ue(()=>import("./NuevoArbol.ead3a459.js"),["assets/NuevoArbol.ead3a459.js","assets/NuevoArbol.cd055607.css","assets/TheUploader.4775a76a.js","assets/TheUploader.8ad6ad2b.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/TheGeolocationComponent.62266f76.js","assets/TheGeolocationComponent.bd839865.css"])},{path:"/catalogo-propostas",name:"CatalogoPropostas",meta:{title:"Propostas cidad\xE1s"},component:()=>Ue(()=>import("./CatalogoPropostasView.895ba23a.js"),["assets/CatalogoPropostasView.895ba23a.js","assets/catalogo.b43e5714.css","assets/SkeletonCatalogo.8ae791cd.js","assets/SkeletonCatalogo.200289d3.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/catalogo-senlleiras",name:"CatalogoSenlleiras",meta:{title:"Cat\xE1logo de Senlleiras"},component:()=>Ue(()=>import("./CatalogoSenlleirasView.025863f2.js"),["assets/CatalogoSenlleirasView.025863f2.js","assets/catalogo.b43e5714.css","assets/SkeletonCatalogo.8ae791cd.js","assets/SkeletonCatalogo.200289d3.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/mapa-parques",name:"MapaParques",meta:{title:"Mapa dos parques"},component:()=>Ue(()=>import("./ParkMapView.02ff4408.js"),["assets/ParkMapView.02ff4408.js","assets/TheLeafletComponent.c834c87a.js","assets/TheLeafletComponent.c1fba59f.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/google-maps.179fea2c.js","assets/google-maps.aa1c674d.css"])},{path:"/mapa-senlleiras",name:"MapaSenlleiras",meta:{title:"Cat\xE1logo de Senlleiras"},component:()=>Ue(()=>import("./SenlleiraMapView.1a34c816.js"),["assets/SenlleiraMapView.1a34c816.js","assets/TheLeafletComponent.c834c87a.js","assets/TheLeafletComponent.c1fba59f.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/google-maps.179fea2c.js","assets/google-maps.aa1c674d.css"])},{path:"/catalogo-de-especies",name:"CatalogoDeEspecies",meta:{title:"Especies"},component:()=>Ue(()=>import("./CatalogoEspecies.7f918e94.js"),["assets/CatalogoEspecies.7f918e94.js","assets/CatalogoEspecies.2301abf6.css"])},{path:"/catalogo-de-parques",name:"CatalogoDeParques",meta:{title:"Cat\xE1logo de parques"},component:()=>Ue(()=>import("./CatalogoParques.2f4e2987.js"),["assets/CatalogoParques.2f4e2987.js","assets/CatalogoParques.a36d8a6f.css","assets/catalogo.b43e5714.css","assets/SkeletonCatalogo.8ae791cd.js","assets/SkeletonCatalogo.200289d3.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/ficha-parque/:idDoc",name:"FichaParque",meta:{title:"Ficha do parque"},component:()=>Ue(()=>import("./FichaParqueView.c3265d2c.js"),["assets/FichaParqueView.c3265d2c.js","assets/FichaParqueView.372f8d9e.css","assets/ficha-tecnica.26e13ee1.css","assets/TheLeafletComponent.c834c87a.js","assets/TheLeafletComponent.c1fba59f.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/CarruselImagenes.3b51b3a3.js","assets/CarruselImagenes.39b5a0f2.css","assets/SkeletonFichaTecnica.a2113552.js"])},{path:"/ficha-tecnica/:idDoc",name:"FichaSenlleira",meta:{title:"Ficha da senlleira"},component:()=>Ue(()=>import("./FichaSenlleiraView.39964d08.js"),["assets/FichaSenlleiraView.39964d08.js","assets/ficha-tecnica.26e13ee1.css","assets/TheLeafletComponent.c834c87a.js","assets/TheLeafletComponent.c1fba59f.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/CarruselImagenes.3b51b3a3.js","assets/CarruselImagenes.39b5a0f2.css","assets/SkeletonCatalogo.8ae791cd.js","assets/SkeletonCatalogo.200289d3.css"])},{path:"/ficha-especie/:idDoc",name:"FichaEspecie",meta:{title:"Ficha da especie"},component:()=>Ue(()=>import("./FichaEspecieView.5b27a94f.js"),["assets/FichaEspecieView.5b27a94f.js","assets/ficha-tecnica.26e13ee1.css","assets/carruselStories.182beb76.css","assets/SkeletonFichaTecnica.a2113552.js"])},{path:"/ajustes",name:"ajustes",meta:{title:"Axustes e infromaci\xF3n"},component:()=>Ue(()=>import("./Ajustes.634a5fc7.js"),["assets/Ajustes.634a5fc7.js","assets/Ajustes.9d9bf5e6.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/adpower10",name:"administrador",component:()=>Ue(()=>import("./LoginAdmin.7c6ab244.js"),["assets/LoginAdmin.7c6ab244.js","assets/LoginAdmin.4080437d.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/admin-especies",name:"admin-especies",meta:{requiereAuth:!0},component:()=>Ue(()=>import("./CatalogoEspecies.d450f62b.js"),["assets/CatalogoEspecies.d450f62b.js","assets/CatalogoEspecies.65b7eca1.css","assets/catalogoAdmin.53a373b5.css","assets/TheUploader.4775a76a.js","assets/TheUploader.8ad6ad2b.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/programadores",name:"Programadores",meta:{requiereAuth:!0},component:()=>Ue(()=>import("./ProgramadoresView.fdb52853.js"),["assets/ProgramadoresView.fdb52853.js","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/supersecretodeldesarrollador",name:"supersecretpdeldesarrollador",component:()=>Ue(()=>import("./ComponenteSecreto.2e85bc2c.js"),["assets/ComponenteSecreto.2e85bc2c.js","assets/ComponenteSecreto.a6a0da27.css","assets/plugin-vue_export-helper.21dcd24c.js"])},{path:"/admin-senlleira",name:"admin-senlleira",meta:{requiereAuth:!0},component:()=>Ue(()=>import("./CatalogoSenlleiras.5b1ccd5c.js"),["assets/CatalogoSenlleiras.5b1ccd5c.js","assets/CatalogoSenlleiras.70425250.css","assets/catalogoAdmin.53a373b5.css","assets/TheUploader.4775a76a.js","assets/TheUploader.8ad6ad2b.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/TheGeolocationComponent.62266f76.js","assets/TheGeolocationComponent.bd839865.css"])},{path:"/admin-parque-especies/:idDoc",name:"AdminParqueEspecies",meta:{requiereAuth:!0},component:()=>Ue(()=>import("./ParqueEspeciesView.80c5b5bf.js"),["assets/ParqueEspeciesView.80c5b5bf.js","assets/ParqueEspeciesView.3bd9aeee.css"])},{path:"/admin-parque",name:"admin-parque",component:()=>Ue(()=>import("./CatalogoParques.74952de3.js"),["assets/CatalogoParques.74952de3.js","assets/CatalogoParques.9908e9a9.css","assets/catalogoAdmin.53a373b5.css","assets/TheUploader.4775a76a.js","assets/TheUploader.8ad6ad2b.css","assets/plugin-vue_export-helper.21dcd24c.js","assets/TheGeolocationComponent.62266f76.js","assets/TheGeolocationComponent.bd839865.css"])},{path:"/prueba2",name:"prueba2",component:()=>Ue(()=>import("./PaginationPrueba.07e64c52.js"),[])}],jn=tO({history:vR("/"),routes:iO});jn.beforeEach((t,e,n)=>{var s;window.document.title=t.meta.title?t.meta.title:"Selleiras";const r=sl();t.meta.requiereAuth===!0&&((s=r.user)==null?void 0:s.uid)===void 0?n("/"):n()});const sl=eo("users",{state:()=>({user:null}),getters:{getEmailUser:t=>t.user&&t.user.email?t.user.email:"No hay usuarios"},actions:{async signIn({email:t,password:e}){const n=await LC(Nl,t,e);this.user=n.user,jn.push("/")},logout(){$C(Nl).then(()=>{this.user=null,jn.push("/")}).catch(t=>{console.log(t)})},async onAuthState(){return new Promise((t,e)=>{UC(Nl,r=>{r?this.user={email:r.email,uid:r.uid}:this.user=null,t(r)},r=>e(r))()})}}});var oO="/assets/LOGO2_forma.138b57aa.png";const qf=async(t,e="carpeta/imagen.ext")=>{const n=Io(Co,e);await HA(n,t)},Pr=async(t="carpeta/imagen.ext")=>{const e=Io(Co,t);return await KA(e)},Ga=async t=>{const e=Io(Co,t),n=await G1(e),{items:r}=n;return await Promise.all(r.map(s=>Y1(s)))},Ya=async t=>{const e=Io(Co,t),n=await G1(e),{items:r}=n;return r.map(s=>s._location.path_)},Qa=async t=>{let e="";try{e=await Y1(Io(Co,t))}catch{return""}return e},zf=async(t,e)=>await Ck(An(pt,t),e),aO=async(t,e)=>{const n=Gr(pt,t,e),r=await If(n);return r.exists()?{idDoc:r.id,...r.data()}:null},cO=async(t,e,n)=>{const r=[],s=cr(An(pt,t),xu(e,"==",n));return(await lr(s)).forEach(o=>{r.push({idDoc:o.id,...o.data()})}),r},F0=async(t,e)=>{const n=[],r=cr(An(pt,t),$r(e));return(await lr(r)).forEach(i=>{n.push({idDoc:i.id,...i.data()})}),n},lO=async(t,e,n)=>{const r=[],s=cr(An(pt,t),$r(e),$r(n));return(await lr(s)).forEach(o=>{r.push({idDoc:o.id,...o.data()})}),r},Hf=async(t,e)=>{await Ak(Gr(pt,t,e))},Fu=async(t="Qsdfa1fdfdfjdfdj",e="especies",n={})=>await N1(Gr(pt,e,t),n),uO=async(t="Qsdfa1fdfdfjdfdj",e="especies",n="campo")=>await N1(Gr(pt,e,t),{especies:Rk()}),km=async(t=!0)=>{const e=[],n=cr(An(pt,"Arbores"),xu("propuesta_senlleira","==",t),xu("publicado","==",!0),$r("nombre_arbol"));return(await lr(n)).forEach(s=>{e.push({idDoc:s.id,...s.data()})}),e},Am=eo("arbores",{state:()=>({arbores:[],arboresSenlleirasPropostas:[],arboresParticipacionCidada:[],imagenes:[]}),actions:{async subirFoto({ref:t,file:e}){await qf(e,`${t}/${e.name}`)},async borrarFoto(t){await Pr(t)},async insertarArbore(t,e){const n=await zf("Arbores",t),r={idDoc:n.id,...t};if(this.arbores.push(r),n.id&&e.length){const s=`Arbores/${n.id}/${e}`;await Fu(n.id,"Arbores",{storage_ref:s})}return n},async google_url_save(t,e){const n=await Qa(e);await Fu(t,"Arbores",{google_url:n})},async borrarArbore(t){(await Ya(`Arbores/${t}`)).forEach(async r=>{await Pr(r)}),await Hf("Arbores",t);const n=this.arbores.findIndex(r=>r.idDoc===t);this.arbores.splice(n,1)},async setArbores(){this.arbores=await F0("Arbores","genero")},async setSenlleiras(){this.arbores=await cO("Arbores","senlleira",!0)},async setSenlleirasPropostas(){this.arboresSenlleirasPropostas.length||(this.arboresSenlleirasPropostas=await km())},async setArboresParticipacionCidada(){this.arboresParticipacionCidada.length||(this.arboresParticipacionCidada=await km(!1))},async setImagenes(t){this.imagenes=await Ga(t)},async setImagenes(t){this.imagenes=await Ga(t)},async getDownloadURL(){for(let t=0,e=this.arbores.length;t<e;t++){const n=this.arbores[t].storage_ref;this.arbores[t].google_url=await Qa(n)}}}}),U0=eo("especies",{state:()=>({especies:[],imagenes:[]}),actions:{async subirFoto({ref:t,file:e}){await qf(e,`${t}/${e.name}`)},async borrarFoto(t){await Pr(t)},async setEspecies(){this.especies.length>0||(this.especies=await F0("Especies","genero"))},async loadEspecie(t){const e=await zf("Especies",t),n={idDoc:e.id,...t};return this.especies.push(n),e},async borrarEspecie(t){(await Ya(`especies/${t}`)).forEach(async r=>{await Pr(r)}),await Hf("Especies",t);const n=this.especies.findIndex(r=>r.idDoc===t);this.especies.splice(n,1)},async listarImagenes(t){this.imagenes=await Ga(t)}}}),hO=eo("parques",{state:()=>({parques:[],imagenes:[]}),actions:{async subirParque({ref:t,file:e}){await qf(e,`${t}/${e.name}`)},async borrarFoto(t){await Pr(t)},async insertarParque(t){const e=await zf("Parques",t),n={idDoc:e.id,...t};return this.parques.push(n),e},async getParque(t){return await aO("Parques",t)},async getAllEspecies(){const t=U0();return await t.setEspecies(),t.especies},async updateEspeciesParque(t,e){await Fu(t,"Parques",{especies:e})},async deleteEspeciesParque(t){try{await uO(t,"Parques","especies")}catch(e){console.log(e)}},async borrarParque(t){const e=await Ya(`parques/${t}`),n=await Ya(`parquesficha/${t}`);e.forEach(async s=>{await Pr(s)}),n.forEach(async s=>{await Pr(s)}),await Hf("Parques",t);const r=this.parques.findIndex(s=>s.idDoc===t);this.parques.splice(r,1)},async setParques(){if(!(this.parques.length>0)){this.parques=await lO("Parques","orden","nombre");for(let t=0;t<this.parques.length;t++)try{this.parques[t].urlficha&&(this.parques[t].url_google=await Qa(this.parques[t].urlficha))}catch(e){console.log(e)}}},async listarImagenes(t){this.imagenes=await Ga(t)},async getDownloadURL(){for(let t=0,e=this.parques.length;t<e;t++){const n=this.parques[t].storage_ref;this.parques[t].google_url=await Qa(n)}}}}),Cm=async(t,e,n)=>{const r={data:[],idDocLast:"",idDocFirst:""},s=await lr(cr(An(pt,t),$r(e),A1(n))),i=s.size;return i>0&&(s.forEach(o=>{r.data.push({idDoc:o.id,...o.data()})}),r.idDocLast=s.docs[i-1].id,r.idDocFirst=s.docs[0].id),r},fO=async(t,e,n,r)=>{const s={data:[],idDocLast:"",idDocFirst:""},i=Gr(pt,t,n),o=await If(i),a=await lr(cr(An(pt,t),$r(e),_k(o),A1(r))),c=a.size;return c>0&&(a.forEach(l=>{s.data.push({idDoc:l.id,...l.data()})}),s.idDocLast=a.docs[c-1].id,s.idDocFirst=a.docs[0].id),s},dO=async(t,e,n,r)=>{const s={data:[],idDocLast:"",idDocFirst:""},i=Gr(pt,t,n),o=await If(i),a=await lr(cr(An(pt,t),$r(e),Ek(o),bk(r))),c=a.size;return c>0&&(a.forEach(l=>{s.data.push({idDoc:l.id,...l.data()})}),s.idDocLast=a.docs[c-1].id,s.idDocFirst=a.docs[0].id),s},pO=async t=>{const e=cr(An(pt,t));return(await lr(e)).size},mO=eo("busqueda",{state:()=>({buscador:"",tmp:[],categoria:"",tmpPag:[],limit:3,total:0,actualPage:1,tmpNext:[],btnNext:!0,btnPrevious:!1}),actions:{filtraArboresSenlleirasPropostas(){const t=Am();this.tmp=t.arboresSenlleirasPropostas.filter(e=>e.genero.toLowerCase().includes(this.buscador.toLowerCase())||e.especie.toLowerCase().includes(this.buscador.toLowerCase())||e.nombre_comun.toLowerCase().includes(this.buscador.toLowerCase())||e.nombre_arbol.toLowerCase().includes(this.buscador.toLowerCase()))},filtraArboresParticipacionCidada(){const t=Am();this.tmp=t.arboresParticipacionCidada.filter(e=>e.genero.toLowerCase().includes(this.buscador.toLowerCase())||e.especie.toLowerCase().includes(this.buscador.toLowerCase())||e.nombre_comun.toLowerCase().includes(this.buscador.toLowerCase())||e.nombre_arbol.toLowerCase().includes(this.buscador.toLowerCase()))},filtrarEspecies(){const t=U0();this.tmp=t.especies.filter(e=>e.genero.toLowerCase().includes(this.buscador.toLowerCase())||e.especie.toLowerCase().includes(this.buscador.toLowerCase())||e.nombre_comun.toLowerCase().includes(this.buscador.toLowerCase())||e.nombre_comun_gal.toLowerCase().includes(this.buscador.toLowerCase()))},filtrarParques(){const t=hO();this.tmp=t.parques.filter(e=>e.nombre.toLowerCase().includes(this.buscador.toLowerCase())||e.tipoloxia.toLowerCase().includes(this.buscador.toLowerCase())||e.localizacion.toLowerCase().includes(this.buscador.toLowerCase())||e.cronoloxia.toLowerCase().includes(this.buscador.toLowerCase()))},async setPagination(){this.tmpPag=await Cm("Arbores","genero",this.limit)},async setNextPagination(t){this.tmpPag=await fO("Arbores","genero",t,this.limit)},async setPreviousPagination(t){this.tmpPag=await dO("Arbores","genero",t,this.limit)},async setTotalPages(){this.total=await pO("Arbores")},async setPaginationNumbers(t){let e=[];const n=t*this.limit;this.limit*t-this.limit-1,e=await Cm("Arbores","genero",n),console.log(e),console.log(arrayLast)}}}),gO={class:"main-header"},yO=he("img",{src:oO,alt:"logo senlleirap"},null,-1),vO={key:1,class:"nav-admin"},wO={class:"header-nav-buttons"},bO={key:0,class:"header-upload"},_O={key:1,class:"buscador"},EO={key:2,class:"filtro"},IO={class:"icon-filter-busqueda"},TO={class:"btn-catalogo-filtro"},SO=he("p",null,"\xC1rbores",-1),kO=he("p",null,"Parques",-1),AO=he("p",null,"Especies",-1),CO=he("p",null,"Cidadan\xEDa",-1),xO={__name:"Navegador",setup(t){const e=ki(!1),n=ki(!1),r=()=>{n.value=!n.value},s=mO(),i=sl(),o=()=>{jn.currentRoute.value.fullPath==="/catalogo-propostas"?s.filtraArboresParticipacionCidada():jn.currentRoute.value.fullPath==="/catalogo-senlleiras"?(s.filtraArboresSenlleirasPropostas(),s.buscador==="sansus2022"&&jn.push("/supersecretodeldesarrollador")):jn.currentRoute.value.fullPath==="/catalogo-de-especies"?s.filtrarEspecies():s.filtrarParques()};return window.addEventListener("click",a=>{document.querySelector(".icon-filter-busqueda")&&!document.querySelector(".icon-filter-busqueda").contains(a.target)&&(n.value=!1)}),(a,c)=>{const l=Ea("router-link"),u=Ea("icono");return un(),gr("header",gO,[he("nav",{class:Tr(["header-nav-app",{"administrador-active":xt(i).user}])},[a.$route.path.includes("catalogo")?Gs("",!0):(un(),Kg(l,{key:0,to:"/",class:"header-logo"},{default:ut(()=>[yO]),_:1})),xt(i).user?(un(),gr("ul",vO,[he("li",null,[ne(l,{to:"/admin-senlleira"},{default:ut(()=>[ei("cat-arbores")]),_:1})]),he("li",null,[ne(l,{to:"/admin-especies"},{default:ut(()=>[ei("cat-especies")]),_:1})]),he("li",null,[ne(l,{to:"/admin-parque"},{default:ut(()=>[ei("cat-parques")]),_:1})]),he("li",null,[ne(l,{to:"/adpower10"},{default:ut(()=>[ei("admin")]),_:1})])])):Gs("",!0),he("ul",wO,[a.$route.name=="inicio"?(un(),gr("li",bO,[ne(l,{to:"/nova-arbore"},{default:ut(()=>[ne(u,{icon:["fa","upload"]})]),_:1})])):Gs("",!0),a.$route.path.includes("catalogo")?(un(),gr("li",_O,[Ub(he("input",{type:"text",name:"buscar",id:"buscar",placeholder:"Buscar",onKeyup:c[0]||(c[0]=j_(h=>o(),["enter"])),"onUpdate:modelValue":c[1]||(c[1]=h=>xt(s).buscador=h),onFocus:c[2]||(c[2]=h=>e.value=!0),onFocusout:c[3]||(c[3]=h=>e.value=!1)},null,544),[[U_,xt(s).buscador,void 0,{trim:!0}]]),he("label",{for:"buscar",class:Tr({animacion:e.value})},[ne(u,{icon:["fa","magnifying-glass"],onClick:c[4]||(c[4]=h=>o())})],2)])):Gs("",!0),a.$route.path.includes("catalogo")?(un(),gr("li",EO,[he("div",IO,[he("button",TO,[ne(u,{icon:["fa","sliders"],onClick:r})]),he("ul",{class:Tr(["elementos-filtro",{filtroOculto:!n.value}])},[he("li",null,[ne(l,{to:"/catalogo-senlleiras"},{default:ut(()=>[ne(u,{icon:["fa","tree"]}),SO]),_:1})]),he("li",null,[ne(l,{to:"/catalogo-de-parques"},{default:ut(()=>[ne(u,{icon:["fa","tree-city"]}),kO]),_:1})]),he("li",null,[ne(l,{to:"/catalogo-de-especies"},{default:ut(()=>[ne(u,{icon:["fa","leaf"]}),AO]),_:1})]),he("li",null,[ne(l,{to:"/catalogo-propostas"},{default:ut(()=>[ne(u,{icon:["fa","user"]}),CO]),_:1})])],2)])])):Gs("",!0)])],2)])}}};const RO={class:"main-footer"},OO={class:"menu-elements"},PO=he("p",null,"Inicio",-1),NO=he("p",null,"Cat\xE1logo",-1),DO=he("p",null,"Mapa",-1),LO=he("p",{class:"ajuste-txt"},"Axustes e inf",-1),MO={__name:"Footer",setup(t){const e=sl();return(n,r)=>{const s=Ea("icono"),i=Ea("router-link");return un(),gr("footer",RO,[he("nav",{class:Tr(["menu-principal",{"administrador-active":xt(e).user}])},[he("ul",OO,[he("li",null,[ne(i,{class:"menu-inicio",to:"/"},{default:ut(()=>[ne(s,{icon:["fa","home"]}),PO]),_:1})]),he("li",null,[ne(i,{class:"menu-catalogo",to:"/catalogo-senlleiras"},{default:ut(()=>[ne(s,{icon:["fa","images"]}),NO]),_:1})]),he("li",null,[ne(i,{class:"mapa",to:"/mapa-senlleiras"},{default:ut(()=>[ne(s,{icon:["fa","map"]}),DO]),_:1})]),he("li",null,[ne(i,{class:"ajustes",to:"/ajustes"},{default:ut(()=>[ne(s,{icon:["fa","gears"]}),LO]),_:1})])])],2)])}}};const FO=window.matchMedia("(prefers-color-scheme: dark)"),UO=()=>{FO.matches?localStorage.getItem("dark-mode")=="false"?document.documentElement.classList.remove("dark"):(document.documentElement.classList.add("dark"),localStorage.setItem("dark-mode",!0)):localStorage.getItem("dark-mode")=="true"?(localStorage.setItem("dark-mode",!0),document.documentElement.classList.add("dark")):(document.documentElement.classList.remove("dark"),localStorage.setItem("dark-mode",!1))},$O=()=>{localStorage.getItem("dark-mode")=="true"?(localStorage.setItem("dark-mode",!0),document.documentElement.classList.add("dark")):(localStorage.setItem("dark-mode",!1),document.documentElement.classList.remove("dark"))},VO={__name:"App",setup(t){return UO(),$O(),(e,n)=>(un(),gr(Wt,null,[ne(xO),ne(MO),ne(xt(M0))],64))}};function xm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function F(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xm(Object(n),!0).forEach(function(r){Ke(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xa(t){return Xa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xa(t)}function BO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Rm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jO(t,e,n){return e&&Rm(t.prototype,e),n&&Rm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ke(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Kf(t,e){return zO(t)||KO(t,e)||$0(t,e)||GO()}function xo(t){return qO(t)||HO(t)||$0(t)||WO()}function qO(t){if(Array.isArray(t))return Uu(t)}function zO(t){if(Array.isArray(t))return t}function HO(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function KO(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],s=!0,i=!1,o,a;try{for(n=n.call(t);!(s=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));s=!0);}catch(c){i=!0,a=c}finally{try{!s&&n.return!=null&&n.return()}finally{if(i)throw a}}return r}}function $0(t,e){if(!!t){if(typeof t=="string")return Uu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uu(t,e)}}function Uu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function WO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Om=function(){},Wf={},V0={},B0=null,j0={mark:Om,measure:Om};try{typeof window!="undefined"&&(Wf=window),typeof document!="undefined"&&(V0=document),typeof MutationObserver!="undefined"&&(B0=MutationObserver),typeof performance!="undefined"&&(j0=performance)}catch{}var YO=Wf.navigator||{},Pm=YO.userAgent,Nm=Pm===void 0?"":Pm,tr=Wf,ke=V0,Dm=B0,Go=j0;tr.document;var Cn=!!ke.documentElement&&!!ke.head&&typeof ke.addEventListener=="function"&&typeof ke.createElement=="function",q0=~Nm.indexOf("MSIE")||~Nm.indexOf("Trident/"),Yo,Qo,Xo,Jo,Zo,In="___FONT_AWESOME___",$u=16,z0="fa",H0="svg-inline--fa",jr="data-fa-i2svg",Vu="data-fa-pseudo-element",QO="data-fa-pseudo-element-pending",Gf="data-prefix",Yf="data-icon",Lm="fontawesome-i2svg",XO="async",JO=["HTML","HEAD","STYLE","SCRIPT"],K0=function(){try{return!0}catch{return!1}}(),Se="classic",Oe="sharp",Qf=[Se,Oe];function Ro(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Se]}})}var Wi=Ro((Yo={},Ke(Yo,Se,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ke(Yo,Oe,{fa:"solid",fass:"solid","fa-solid":"solid"}),Yo)),Gi=Ro((Qo={},Ke(Qo,Se,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ke(Qo,Oe,{solid:"fass"}),Qo)),Yi=Ro((Xo={},Ke(Xo,Se,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ke(Xo,Oe,{fass:"fa-solid"}),Xo)),ZO=Ro((Jo={},Ke(Jo,Se,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ke(Jo,Oe,{"fa-solid":"fass"}),Jo)),eP=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,W0="fa-layers-text",tP=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,nP=Ro((Zo={},Ke(Zo,Se,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ke(Zo,Oe,{900:"fass"}),Zo)),G0=[1,2,3,4,5,6,7,8,9,10],rP=G0.concat([11,12,13,14,15,16,17,18,19,20]),sP=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Er={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qi=new Set;Object.keys(Gi[Se]).map(Qi.add.bind(Qi));Object.keys(Gi[Oe]).map(Qi.add.bind(Qi));var iP=[].concat(Qf,xo(Qi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Er.GROUP,Er.SWAP_OPACITY,Er.PRIMARY,Er.SECONDARY]).concat(G0.map(function(t){return"".concat(t,"x")})).concat(rP.map(function(t){return"w-".concat(t)})),wi=tr.FontAwesomeConfig||{};function oP(t){var e=ke.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function aP(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ke&&typeof ke.querySelector=="function"){var cP=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cP.forEach(function(t){var e=Kf(t,2),n=e[0],r=e[1],s=aP(oP(n));s!=null&&(wi[r]=s)})}var Y0={styleDefault:"solid",familyDefault:"classic",cssPrefix:z0,replacementClass:H0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};wi.familyPrefix&&(wi.cssPrefix=wi.familyPrefix);var Ps=F(F({},Y0),wi);Ps.autoReplaceSvg||(Ps.observeMutations=!1);var V={};Object.keys(Y0).forEach(function(t){Object.defineProperty(V,t,{enumerable:!0,set:function(n){Ps[t]=n,bi.forEach(function(r){return r(V)})},get:function(){return Ps[t]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(e){Ps.cssPrefix=e,bi.forEach(function(n){return n(V)})},get:function(){return Ps.cssPrefix}});tr.FontAwesomeConfig=V;var bi=[];function lP(t){return bi.push(t),function(){bi.splice(bi.indexOf(t),1)}}var Nn=$u,Jt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uP(t){if(!(!t||!Cn)){var e=ke.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ke.head.childNodes,r=null,s=n.length-1;s>-1;s--){var i=n[s],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ke.head.insertBefore(e,r),t}}var hP="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xi(){for(var t=12,e="";t-- >0;)e+=hP[Math.random()*62|0];return e}function Hs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Xf(t){return t.classList?Hs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Q0(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function fP(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Q0(t[n]),'" ')},"").trim()}function il(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Jf(t){return t.size!==Jt.size||t.x!==Jt.x||t.y!==Jt.y||t.rotate!==Jt.rotate||t.flipX||t.flipY}function dP(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,s={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(a)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:c,path:l}}function pP(t){var e=t.transform,n=t.width,r=n===void 0?$u:n,s=t.height,i=s===void 0?$u:s,o=t.startCentered,a=o===void 0?!1:o,c="";return a&&q0?c+="translate(".concat(e.x/Nn-r/2,"em, ").concat(e.y/Nn-i/2,"em) "):a?c+="translate(calc(-50% + ".concat(e.x/Nn,"em), calc(-50% + ").concat(e.y/Nn,"em)) "):c+="translate(".concat(e.x/Nn,"em, ").concat(e.y/Nn,"em) "),c+="scale(".concat(e.size/Nn*(e.flipX?-1:1),", ").concat(e.size/Nn*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var mP=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function X0(){var t=z0,e=H0,n=V.cssPrefix,r=V.replacementClass,s=mP;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");s=s.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return s}var Mm=!1;function Fl(){V.autoAddCss&&!Mm&&(uP(X0()),Mm=!0)}var gP={mixout:function(){return{dom:{css:X0,insertCss:Fl}}},hooks:function(){return{beforeDOMElementCreation:function(){Fl()},beforeI2svg:function(){Fl()}}}},Tn=tr||{};Tn[In]||(Tn[In]={});Tn[In].styles||(Tn[In].styles={});Tn[In].hooks||(Tn[In].hooks={});Tn[In].shims||(Tn[In].shims=[]);var Ut=Tn[In],J0=[],yP=function t(){ke.removeEventListener("DOMContentLoaded",t),Ja=1,J0.map(function(e){return e()})},Ja=!1;Cn&&(Ja=(ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ke.readyState),Ja||ke.addEventListener("DOMContentLoaded",yP));function vP(t){!Cn||(Ja?setTimeout(t,0):J0.push(t))}function Oo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,s=t.children,i=s===void 0?[]:s;return typeof t=="string"?Q0(t):"<".concat(e," ").concat(fP(r),">").concat(i.map(Oo).join(""),"</").concat(e,">")}function Fm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var wP=function(e,n){return function(r,s,i,o){return e.call(n,r,s,i,o)}},Ul=function(e,n,r,s){var i=Object.keys(e),o=i.length,a=s!==void 0?wP(n,s):n,c,l,u;for(r===void 0?(c=1,u=e[i[0]]):(c=0,u=r);c<o;c++)l=i[c],u=a(u,e[l],l,e);return u};function bP(t){for(var e=[],n=0,r=t.length;n<r;){var s=t.charCodeAt(n++);if(s>=55296&&s<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((s&1023)<<10)+(i&1023)+65536):(e.push(s),n--)}else e.push(s)}return e}function Bu(t){var e=bP(t);return e.length===1?e[0].toString(16):null}function _P(t,e){var n=t.length,r=t.charCodeAt(e),s;return r>=55296&&r<=56319&&n>e+1&&(s=t.charCodeAt(e+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function Um(t){return Object.keys(t).reduce(function(e,n){var r=t[n],s=!!r.icon;return s?e[r.iconName]=r.icon:e[n]=r,e},{})}function ju(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,s=r===void 0?!1:r,i=Um(e);typeof Ut.hooks.addPack=="function"&&!s?Ut.hooks.addPack(t,Um(e)):Ut.styles[t]=F(F({},Ut.styles[t]||{}),i),t==="fas"&&ju("fa",e)}var ea,ta,na,ss=Ut.styles,EP=Ut.shims,IP=(ea={},Ke(ea,Se,Object.values(Yi[Se])),Ke(ea,Oe,Object.values(Yi[Oe])),ea),Zf=null,Z0={},ew={},tw={},nw={},rw={},TP=(ta={},Ke(ta,Se,Object.keys(Wi[Se])),Ke(ta,Oe,Object.keys(Wi[Oe])),ta);function SP(t){return~iP.indexOf(t)}function kP(t,e){var n=e.split("-"),r=n[0],s=n.slice(1).join("-");return r===t&&s!==""&&!SP(s)?s:null}var sw=function(){var e=function(i){return Ul(ss,function(o,a,c){return o[c]=Ul(a,i,{}),o},{})};Z0=e(function(s,i,o){if(i[3]&&(s[i[3]]=o),i[2]){var a=i[2].filter(function(c){return typeof c=="number"});a.forEach(function(c){s[c.toString(16)]=o})}return s}),ew=e(function(s,i,o){if(s[o]=o,i[2]){var a=i[2].filter(function(c){return typeof c=="string"});a.forEach(function(c){s[c]=o})}return s}),rw=e(function(s,i,o){var a=i[2];return s[o]=o,a.forEach(function(c){s[c]=o}),s});var n="far"in ss||V.autoFetchSvg,r=Ul(EP,function(s,i){var o=i[0],a=i[1],c=i[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(s.names[o]={prefix:a,iconName:c}),typeof o=="number"&&(s.unicodes[o.toString(16)]={prefix:a,iconName:c}),s},{names:{},unicodes:{}});tw=r.names,nw=r.unicodes,Zf=ol(V.styleDefault,{family:V.familyDefault})};lP(function(t){Zf=ol(t.styleDefault,{family:V.familyDefault})});sw();function ed(t,e){return(Z0[t]||{})[e]}function AP(t,e){return(ew[t]||{})[e]}function Ir(t,e){return(rw[t]||{})[e]}function iw(t){return tw[t]||{prefix:null,iconName:null}}function CP(t){var e=nw[t],n=ed("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function nr(){return Zf}var td=function(){return{prefix:null,iconName:null,rest:[]}};function ol(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Se:n,s=Wi[r][t],i=Gi[r][t]||Gi[r][s],o=t in Ut.styles?t:null;return i||o||null}var $m=(na={},Ke(na,Se,Object.keys(Yi[Se])),Ke(na,Oe,Object.keys(Yi[Oe])),na);function al(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,s=r===void 0?!1:r,i=(e={},Ke(e,Se,"".concat(V.cssPrefix,"-").concat(Se)),Ke(e,Oe,"".concat(V.cssPrefix,"-").concat(Oe)),e),o=null,a=Se;(t.includes(i[Se])||t.some(function(l){return $m[Se].includes(l)}))&&(a=Se),(t.includes(i[Oe])||t.some(function(l){return $m[Oe].includes(l)}))&&(a=Oe);var c=t.reduce(function(l,u){var h=kP(V.cssPrefix,u);if(ss[u]?(u=IP[a].includes(u)?ZO[a][u]:u,o=u,l.prefix=u):TP[a].indexOf(u)>-1?(o=u,l.prefix=ol(u,{family:a})):h?l.iconName=h:u!==V.replacementClass&&u!==i[Se]&&u!==i[Oe]&&l.rest.push(u),!s&&l.prefix&&l.iconName){var f=o==="fa"?iw(l.iconName):{},p=Ir(l.prefix,l.iconName);f.prefix&&(o=null),l.iconName=f.iconName||p||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!ss.far&&ss.fas&&!V.autoFetchSvg&&(l.prefix="fas")}return l},td());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&a===Oe&&(ss.fass||V.autoFetchSvg)&&(c.prefix="fass",c.iconName=Ir(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=nr()||"fas"),c}var xP=function(){function t(){BO(this,t),this.definitions={}}return jO(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var o=s.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=F(F({},n.definitions[a]||{}),o[a]),ju(a,o[a]);var c=Yi[Se][a];c&&ju(c,o[a]),sw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var o=s[i],a=o.prefix,c=o.iconName,l=o.icon,u=l[2];n[a]||(n[a]={}),u.length>0&&u.forEach(function(h){typeof h=="string"&&(n[a][h]=l)}),n[a][c]=l}),n}}]),t}(),Vm=[],is={},ps={},RP=Object.keys(ps);function OP(t,e){var n=e.mixoutsTo;return Vm=t,is={},Object.keys(ps).forEach(function(r){RP.indexOf(r)===-1&&delete ps[r]}),Vm.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(o){typeof s[o]=="function"&&(n[o]=s[o]),Xa(s[o])==="object"&&Object.keys(s[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=s[o][a]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){is[o]||(is[o]=[]),is[o].push(i[o])})}r.provides&&r.provides(ps)}),n}function qu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),s=2;s<n;s++)r[s-2]=arguments[s];var i=is[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function qr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var s=is[t]||[];s.forEach(function(i){i.apply(null,n)})}function Sn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ps[t]?ps[t].apply(null,e):void 0}function zu(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||nr();if(!!e)return e=Ir(n,e)||e,Fm(ow.definitions,n,e)||Fm(Ut.styles,n,e)}var ow=new xP,PP=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,qr("noAuto")},NP={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Cn?(qr("beforeI2svg",e),Sn("pseudoElements2svg",e),Sn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,vP(function(){LP({autoReplaceSvgRoot:n}),qr("watch",e)})}},DP={icon:function(e){if(e===null)return null;if(Xa(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ir(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ol(e[0]);return{prefix:r,iconName:Ir(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(V.cssPrefix,"-"))>-1||e.match(eP))){var s=al(e.split(" "),{skipLookups:!0});return{prefix:s.prefix||nr(),iconName:Ir(s.prefix,s.iconName)||s.iconName}}if(typeof e=="string"){var i=nr();return{prefix:i,iconName:Ir(i,e)||e}}}},At={noAuto:PP,config:V,dom:NP,parse:DP,library:ow,findIconDefinition:zu,toHtml:Oo},LP=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ke:n;(Object.keys(Ut.styles).length>0||V.autoFetchSvg)&&Cn&&V.autoReplaceSvg&&At.dom.i2svg({node:r})};function cl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Oo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Cn){var r=ke.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function MP(t){var e=t.children,n=t.main,r=t.mask,s=t.attributes,i=t.styles,o=t.transform;if(Jf(o)&&n.found&&!r.found){var a=n.width,c=n.height,l={x:a/c/2,y:.5};s.style=il(F(F({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function FP(t){var e=t.prefix,n=t.iconName,r=t.children,s=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(V.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:F(F({},s),{},{id:o}),children:r}]}]}function nd(t){var e=t.icons,n=e.main,r=e.mask,s=t.prefix,i=t.iconName,o=t.transform,a=t.symbol,c=t.title,l=t.maskId,u=t.titleId,h=t.extra,f=t.watchable,p=f===void 0?!1:f,g=r.found?r:n,v=g.width,I=g.height,y=s==="fak",b=[V.replacementClass,i?"".concat(V.cssPrefix,"-").concat(i):""].filter(function(ge){return h.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(h.classes).join(" "),k={children:[],attributes:F(F({},h.attributes),{},{"data-prefix":s,"data-icon":i,class:b,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(I)})},O=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/I*16*.0625,"em")}:{};p&&(k.attributes[jr]=""),c&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||Xi())},children:[c]}),delete k.attributes.title);var U=F(F({},k),{},{prefix:s,iconName:i,main:n,mask:r,maskId:l,transform:o,symbol:a,styles:F(F({},O),h.styles)}),se=r.found&&n.found?Sn("generateAbstractMask",U)||{children:[],attributes:{}}:Sn("generateAbstractIcon",U)||{children:[],attributes:{}},W=se.children,Z=se.attributes;return U.children=W,U.attributes=Z,a?FP(U):MP(U)}function Bm(t){var e=t.content,n=t.width,r=t.height,s=t.transform,i=t.title,o=t.extra,a=t.watchable,c=a===void 0?!1:a,l=F(F(F({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(l[jr]="");var u=F({},o.styles);Jf(s)&&(u.transform=pP({transform:s,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var h=il(u);h.length>0&&(l.style=h);var f=[];return f.push({tag:"span",attributes:l,children:[e]}),i&&f.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),f}function UP(t){var e=t.content,n=t.title,r=t.extra,s=F(F(F({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=il(r.styles);i.length>0&&(s.style=i);var o=[];return o.push({tag:"span",attributes:s,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var $l=Ut.styles;function Hu(t){var e=t[0],n=t[1],r=t.slice(4),s=Kf(r,1),i=s[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(Er.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Er.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(Er.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var $P={found:!1,width:512,height:512};function VP(t,e){!K0&&!V.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ku(t,e){var n=e;return e==="fa"&&V.styleDefault!==null&&(e=nr()),new Promise(function(r,s){if(Sn("missingIconAbstract"),n==="fa"){var i=iw(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&$l[e]&&$l[e][t]){var o=$l[e][t];return r(Hu(o))}VP(t,e),r(F(F({},$P),{},{icon:V.showMissingIcons&&t?Sn("missingIconAbstract")||{}:{}}))})}var jm=function(){},Wu=V.measurePerformance&&Go&&Go.mark&&Go.measure?Go:{mark:jm,measure:jm},ai='FA "6.2.1"',BP=function(e){return Wu.mark("".concat(ai," ").concat(e," begins")),function(){return aw(e)}},aw=function(e){Wu.mark("".concat(ai," ").concat(e," ends")),Wu.measure("".concat(ai," ").concat(e),"".concat(ai," ").concat(e," begins"),"".concat(ai," ").concat(e," ends"))},rd={begin:BP,end:aw},ya=function(){};function qm(t){var e=t.getAttribute?t.getAttribute(jr):null;return typeof e=="string"}function jP(t){var e=t.getAttribute?t.getAttribute(Gf):null,n=t.getAttribute?t.getAttribute(Yf):null;return e&&n}function qP(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(V.replacementClass)}function zP(){if(V.autoReplaceSvg===!0)return va.replace;var t=va[V.autoReplaceSvg];return t||va.replace}function HP(t){return ke.createElementNS("http://www.w3.org/2000/svg",t)}function KP(t){return ke.createElement(t)}function cw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?HP:KP:n;if(typeof t=="string")return ke.createTextNode(t);var s=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){s.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){s.appendChild(cw(o,{ceFn:r}))}),s}function WP(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var va={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(s){n.parentNode.insertBefore(cw(s),n)}),n.getAttribute(jr)===null&&V.keepOriginalSource){var r=ke.createComment(WP(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Xf(n).indexOf(V.replacementClass))return va.replace(e);var s=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(a,c){return c===V.replacementClass||c.match(s)?a.toSvg.push(c):a.toNode.push(c),a},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(a){return Oo(a)}).join(`
`);n.setAttribute(jr,""),n.innerHTML=o}};function zm(t){t()}function lw(t,e){var n=typeof e=="function"?e:ya;if(t.length===0)n();else{var r=zm;V.mutateApproach===XO&&(r=tr.requestAnimationFrame||zm),r(function(){var s=zP(),i=rd.begin("mutate");t.map(s),i(),n()})}}var sd=!1;function uw(){sd=!0}function Gu(){sd=!1}var Za=null;function Hm(t){if(!!Dm&&!!V.observeMutations){var e=t.treeCallback,n=e===void 0?ya:e,r=t.nodeCallback,s=r===void 0?ya:r,i=t.pseudoElementsCallback,o=i===void 0?ya:i,a=t.observeMutationsRoot,c=a===void 0?ke:a;Za=new Dm(function(l){if(!sd){var u=nr();Hs(l).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!qm(h.addedNodes[0])&&(V.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&V.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&qm(h.target)&&~sP.indexOf(h.attributeName))if(h.attributeName==="class"&&jP(h.target)){var f=al(Xf(h.target)),p=f.prefix,g=f.iconName;h.target.setAttribute(Gf,p||u),g&&h.target.setAttribute(Yf,g)}else qP(h.target)&&s(h.target)})}}),Cn&&Za.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function GP(){!Za||Za.disconnect()}function YP(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,s){var i=s.split(":"),o=i[0],a=i.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function QP(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",s=al(Xf(t));return s.prefix||(s.prefix=nr()),e&&n&&(s.prefix=e,s.iconName=n),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=AP(s.prefix,t.innerText)||ed(s.prefix,Bu(t.innerText))),!s.iconName&&V.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=t.firstChild.data)),s}function XP(t){var e=Hs(t.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return V.autoA11y&&(n?e["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||Xi()):(e["aria-hidden"]="true",e.focusable="false")),e}function JP(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Jt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Km(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=QP(t),r=n.iconName,s=n.prefix,i=n.rest,o=XP(t),a=qu("parseNodeAttributes",{},t),c=e.styleParser?YP(t):[];return F({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:Jt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},a)}var ZP=Ut.styles;function hw(t){var e=V.autoReplaceSvg==="nest"?Km(t,{styleParser:!1}):Km(t);return~e.extra.classes.indexOf(W0)?Sn("generateLayersText",t,e):Sn("generateSvgReplacementMutation",t,e)}var rr=new Set;Qf.map(function(t){rr.add("fa-".concat(t))});Object.keys(Wi[Se]).map(rr.add.bind(rr));Object.keys(Wi[Oe]).map(rr.add.bind(rr));rr=xo(rr);function Wm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Cn)return Promise.resolve();var n=ke.documentElement.classList,r=function(h){return n.add("".concat(Lm,"-").concat(h))},s=function(h){return n.remove("".concat(Lm,"-").concat(h))},i=V.autoFetchSvg?rr:Qf.map(function(u){return"fa-".concat(u)}).concat(Object.keys(ZP));i.includes("fa")||i.push("fa");var o=[".".concat(W0,":not([").concat(jr,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(jr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Hs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),s("complete");else return Promise.resolve();var c=rd.begin("onTree"),l=a.reduce(function(u,h){try{var f=hw(h);f&&u.push(f)}catch(p){K0||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,h){Promise.all(l).then(function(f){lw(f,function(){r("active"),r("complete"),s("pending"),typeof e=="function"&&e(),c(),u()})}).catch(function(f){c(),h(f)})})}function eN(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hw(t).then(function(n){n&&lw([n],e)})}function tN(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:zu(e||{}),s=n.mask;return s&&(s=(s||{}).icon?s:zu(s||{})),t(r,F(F({},n),{},{mask:s}))}}var nN=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,s=r===void 0?Jt:r,i=n.symbol,o=i===void 0?!1:i,a=n.mask,c=a===void 0?null:a,l=n.maskId,u=l===void 0?null:l,h=n.title,f=h===void 0?null:h,p=n.titleId,g=p===void 0?null:p,v=n.classes,I=v===void 0?[]:v,y=n.attributes,b=y===void 0?{}:y,k=n.styles,O=k===void 0?{}:k;if(!!e){var U=e.prefix,se=e.iconName,W=e.icon;return cl(F({type:"icon"},e),function(){return qr("beforeDOMElementCreation",{iconDefinition:e,params:n}),V.autoA11y&&(f?b["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(g||Xi()):(b["aria-hidden"]="true",b.focusable="false")),nd({icons:{main:Hu(W),mask:c?Hu(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:se,transform:F(F({},Jt),s),symbol:o,title:f,maskId:u,titleId:g,extra:{attributes:b,styles:O,classes:I}})})}},rN={mixout:function(){return{icon:tN(nN)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Wm,n.nodeCallback=eN,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,s=r===void 0?ke:r,i=n.callback,o=i===void 0?function(){}:i;return Wm(s,o)},e.generateSvgReplacementMutation=function(n,r){var s=r.iconName,i=r.title,o=r.titleId,a=r.prefix,c=r.transform,l=r.symbol,u=r.mask,h=r.maskId,f=r.extra;return new Promise(function(p,g){Promise.all([Ku(s,a),u.iconName?Ku(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var I=Kf(v,2),y=I[0],b=I[1];p([n,nd({icons:{main:y,mask:b},prefix:a,iconName:s,transform:c,symbol:l,maskId:h,title:i,titleId:o,extra:f,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.transform,a=n.styles,c=il(a);c.length>0&&(s.style=c);var l;return Jf(o)&&(l=Sn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(l||i.icon),{children:r,attributes:s}}}},sN={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return cl({type:"layer"},function(){qr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(c){o=o.concat(c.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(xo(i)).join(" ")},children:o}]})}}}},iN={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,o=r.classes,a=o===void 0?[]:o,c=r.attributes,l=c===void 0?{}:c,u=r.styles,h=u===void 0?{}:u;return cl({type:"counter",content:n},function(){return qr("beforeDOMElementCreation",{content:n,params:r}),UP({content:n.toString(),title:i,extra:{attributes:l,styles:h,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(xo(a))}})})}}}},oN={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?Jt:s,o=r.title,a=o===void 0?null:o,c=r.classes,l=c===void 0?[]:c,u=r.attributes,h=u===void 0?{}:u,f=r.styles,p=f===void 0?{}:f;return cl({type:"text",content:n},function(){return qr("beforeDOMElementCreation",{content:n,params:r}),Bm({content:n,transform:F(F({},Jt),i),title:a,extra:{attributes:h,styles:p,classes:["".concat(V.cssPrefix,"-layers-text")].concat(xo(l))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var s=r.title,i=r.transform,o=r.extra,a=null,c=null;if(q0){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();a=u.width/l,c=u.height/l}return V.autoA11y&&!s&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Bm({content:n.innerHTML,width:a,height:c,transform:i,title:s,extra:o,watchable:!0})])}}},aN=new RegExp('"',"ug"),Gm=[1105920,1112319];function cN(t){var e=t.replace(aN,""),n=_P(e,0),r=n>=Gm[0]&&n<=Gm[1],s=e.length===2?e[0]===e[1]:!1;return{value:Bu(s?e[0]:e),isSecondary:r||s}}function Ym(t,e){var n="".concat(QO).concat(e.replace(":","-"));return new Promise(function(r,s){if(t.getAttribute(n)!==null)return r();var i=Hs(t.children),o=i.filter(function(W){return W.getAttribute(Vu)===e})[0],a=tr.getComputedStyle(t,e),c=a.getPropertyValue("font-family").match(tP),l=a.getPropertyValue("font-weight"),u=a.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&u!=="none"&&u!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(c[2])?Oe:Se,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Gi[f][c[2].toLowerCase()]:nP[f][l],g=cN(h),v=g.value,I=g.isSecondary,y=c[0].startsWith("FontAwesome"),b=ed(p,v),k=b;if(y){var O=CP(v);O.iconName&&O.prefix&&(b=O.iconName,p=O.prefix)}if(b&&!I&&(!o||o.getAttribute(Gf)!==p||o.getAttribute(Yf)!==k)){t.setAttribute(n,k),o&&t.removeChild(o);var U=JP(),se=U.extra;se.attributes[Vu]=e,Ku(b,p).then(function(W){var Z=nd(F(F({},U),{},{icons:{main:W,mask:td()},prefix:p,iconName:k,extra:se,watchable:!0})),ge=ke.createElement("svg");e==="::before"?t.insertBefore(ge,t.firstChild):t.appendChild(ge),ge.outerHTML=Z.map(function(Le){return Oo(Le)}).join(`
`),t.removeAttribute(n),r()}).catch(s)}else r()}else r()})}function lN(t){return Promise.all([Ym(t,"::before"),Ym(t,"::after")])}function uN(t){return t.parentNode!==document.head&&!~JO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Vu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Qm(t){if(!!Cn)return new Promise(function(e,n){var r=Hs(t.querySelectorAll("*")).filter(uN).map(lN),s=rd.begin("searchPseudoElements");uw(),Promise.all(r).then(function(){s(),Gu(),e()}).catch(function(){s(),Gu(),n()})})}var hN={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Qm,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,s=r===void 0?ke:r;V.searchPseudoElements&&Qm(s)}}},Xm=!1,fN={mixout:function(){return{dom:{unwatch:function(){uw(),Xm=!0}}}},hooks:function(){return{bootstrap:function(){Hm(qu("mutationObserverCallbacks",{}))},noAuto:function(){GP()},watch:function(n){var r=n.observeMutationsRoot;Xm?Gu():Hm(qu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Jm=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),o=i[0],a=i.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},dN={mixout:function(){return{parse:{transform:function(n){return Jm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-transform");return s&&(n.transform=Jm(s)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,s=n.transform,i=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),h={transform:"".concat(c," ").concat(l," ").concat(u)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:f};return{tag:"g",attributes:F({},p.outer),children:[{tag:"g",attributes:F({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:F(F({},r.icon.attributes),p.path)}]}]}}}},Vl={x:0,y:0,width:"100%",height:"100%"};function Zm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function pN(t){return t.tag==="g"?t.children:[t]}var mN={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-mask"),i=s?al(s.split(" ").map(function(o){return o.trim()})):td();return i.prefix||(i.prefix=nr()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,s=n.attributes,i=n.main,o=n.mask,a=n.maskId,c=n.transform,l=i.width,u=i.icon,h=o.width,f=o.icon,p=dP({transform:c,containerWidth:h,iconWidth:l}),g={tag:"rect",attributes:F(F({},Vl),{},{fill:"white"})},v=u.children?{children:u.children.map(Zm)}:{},I={tag:"g",attributes:F({},p.inner),children:[Zm(F({tag:u.tag,attributes:F(F({},u.attributes),p.path)},v))]},y={tag:"g",attributes:F({},p.outer),children:[I]},b="mask-".concat(a||Xi()),k="clip-".concat(a||Xi()),O={tag:"mask",attributes:F(F({},Vl),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,y]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:pN(f)},O]};return r.push(U,{tag:"rect",attributes:F({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(b,")")},Vl)}),{children:r,attributes:s}}}},gN={provides:function(e){var n=!1;tr.matchMedia&&(n=tr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:F(F({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=F(F({},i),{},{attributeName:"opacity"}),a={tag:"circle",attributes:F(F({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:F(F({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:F(F({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:F(F({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:F(F({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:F(F({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:F(F({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yN={hooks:function(){return{parseNodeAttributes:function(n,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return n.symbol=i,n}}}},vN=[gP,rN,sN,iN,oN,hN,fN,dN,mN,gN,yN];OP(vN,{mixoutsTo:At});At.noAuto;var fw=At.config,wN=At.library;At.dom;var ec=At.parse;At.findIconDefinition;At.toHtml;var bN=At.icon;At.layer;var _N=At.text;At.counter;var EN={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"]},IN={prefix:"fas",iconName:"circle-exclamation",icon:[512,512,["exclamation-circle"],"f06a","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zm32 224c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"]},TN={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"]},SN={prefix:"fas",iconName:"angle-right",icon:[320,512,[8250],"f105","M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]},kN={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},AN={prefix:"fas",iconName:"signature",icon:[640,512,[],"f5b7","M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32v7.8c0 27.7-2.4 55.3-7.1 82.5l-84.4 25.3c-40.6 12.2-68.4 49.6-68.4 92v71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3-12.5 37.5c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H460.4l18-53.9c3.8-11.3 .9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3V128c0-53-43-96-96-96s-96 43-96 96v32c0 17.7 14.3 32 32 32s32-14.3 32-32V128zm-9.2 177l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5V335.6c0-14.1 9.3-26.6 22.8-30.7zM24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24H64.3c-.2-2.8-.3-5.6-.3-8.5V368H24zm592 48c13.3 0 24-10.7 24-24s-10.7-24-24-24H305.9c-6.7 16.3-14.2 32.3-22.3 48H616z"]},CN={prefix:"fas",iconName:"registered",icon:[512,512,[174],"f25d","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM160 152c0-13.3 10.7-24 24-24h88c44.2 0 80 35.8 80 80c0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1 .1 26.3-11.9 31.8s-26.3 .1-31.8-11.9L268.9 288H208v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V264 152zm48 88h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H208v64z"]},xN={prefix:"fas",iconName:"arrows-left-right",icon:[512,512,["arrows-h"],"f07e","M406.6 374.6l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224l-293.5 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288l293.5 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"]},RN={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]},ON={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"]},PN={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},NN={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},DN={prefix:"fas",iconName:"sliders",icon:[512,512,["sliders-h"],"f1de","M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"]},LN={prefix:"fas",iconName:"images",icon:[576,512,[],"f302","M160 32c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160zM396 138.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S480.9 320 472 320H328 280 200c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C360.5 132 368 128 376 128s15.5 4 20 10.7zM256 128c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V344c0 75.1 60.9 136 136 136H456c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-48.6 0-88-39.4-88-88V120z"]},MN={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},FN=MN,UN={prefix:"fas",iconName:"up-long",icon:[320,512,["long-arrow-alt-up"],"f30c","M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192h88l0 288c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32l0-288h88c9.6 0 18.2-5.7 22-14.5z"]},$N={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24z"]},VN={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"]},BN={prefix:"fas",iconName:"tree-city",icon:[640,512,[],"e587","M288 48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V192h40V120c0-13.3 10.7-24 24-24s24 10.7 24 24v72h24c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H432 336c-26.5 0-48-21.5-48-48V48zm64 32v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H368zM352 272v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm176-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H528zM512 368v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H528c-8.8 0-16 7.2-16 16zM224 160c0 6-1 11-2 16c20 14 34 38 34 64c0 45-36 80-80 80H160V480c0 18-15 32-32 32c-18 0-32-14-32-32V320H80c-45 0-80-35-80-80c0-26 13-50 33-64c-1-5-1-10-1-16c0-53 42-96 96-96c53 0 96 43 96 96z"]},jN={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]},qN={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},zN={prefix:"fas",iconName:"map",icon:[576,512,[128506,62072],"f279","M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"]},HN={prefix:"fas",iconName:"gears",icon:[640,512,["cogs"],"f085","M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.7 8.4 166.9 8 160 8s-13.7 .4-20.4 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM208 176c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 400c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"]},KN={prefix:"fas",iconName:"angle-left",icon:[320,512,[8249],"f104","M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},WN={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]};const GN=()=>{wN.add(FN,kN,zN,LN,$N,ON,WN,KN,SN,NN,PN,HN,IN,RN,VN,jN,qN,DN,TN,BN,AN,UN,xN,EN,CN)};function eg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,r)}return n}function Mt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?eg(Object(n),!0).forEach(function(r){yt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):eg(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function tc(t){return tc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tc(t)}function yt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function YN(t,e){if(t==null)return{};var n={},r=Object.keys(t),s,i;for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&(n[s]=t[s]);return n}function QN(t,e){if(t==null)return{};var n=YN(t,e),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Yu(t){return XN(t)||JN(t)||ZN(t)||e3()}function XN(t){if(Array.isArray(t))return Qu(t)}function JN(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ZN(t,e){if(!!t){if(typeof t=="string")return Qu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Qu(t,e)}}function Qu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var t3=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},dw={exports:{}};(function(t){(function(e){var n=function(y,b,k){if(!l(b)||h(b)||f(b)||p(b)||c(b))return b;var O,U=0,se=0;if(u(b))for(O=[],se=b.length;U<se;U++)O.push(n(y,b[U],k));else{O={};for(var W in b)Object.prototype.hasOwnProperty.call(b,W)&&(O[y(W,k)]=n(y,b[W],k))}return O},r=function(y,b){b=b||{};var k=b.separator||"_",O=b.split||/(?=[A-Z])/;return y.split(O).join(k)},s=function(y){return g(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(b,k){return k?k.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var b=s(y);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(y,b){return r(y,b).toLowerCase()},a=Object.prototype.toString,c=function(y){return typeof y=="function"},l=function(y){return y===Object(y)},u=function(y){return a.call(y)=="[object Array]"},h=function(y){return a.call(y)=="[object Date]"},f=function(y){return a.call(y)=="[object RegExp]"},p=function(y){return a.call(y)=="[object Boolean]"},g=function(y){return y=y-0,y===y},v=function(y,b){var k=b&&"process"in b?b.process:b;return typeof k!="function"?y:function(O,U){return k(O,y,U)}},I={camelize:s,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,b){return n(v(s,b),y)},decamelizeKeys:function(y,b){return n(v(o,b),y,b)},pascalizeKeys:function(y,b){return n(v(i,b),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(t3)})(dw);var n3=dw.exports,r3=["class","style"];function s3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),s=n3.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[s]=i,e},{})}function i3(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function id(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return id(c)}),s=Object.keys(t.attributes||{}).reduce(function(c,l){var u=t.attributes[l];switch(l){case"class":c.class=i3(u);break;case"style":c.style=s3(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,a=QN(n,r3);return pc(t.tag,Mt(Mt(Mt({},e),{},{class:s.class,style:Mt(Mt({},s.style),o)},s.attrs),a),r)}var pw=!1;try{pw=!0}catch{}function o3(){if(!pw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _i(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?yt({},t,e):{}}function a3(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},yt(e,"fa-".concat(t.size),t.size!==null),yt(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),yt(e,"fa-pull-".concat(t.pull),t.pull!==null),yt(e,"fa-swap-opacity",t.swapOpacity),yt(e,"fa-bounce",t.bounce),yt(e,"fa-shake",t.shake),yt(e,"fa-beat",t.beat),yt(e,"fa-fade",t.fade),yt(e,"fa-beat-fade",t.beatFade),yt(e,"fa-flash",t.flash),yt(e,"fa-spin-pulse",t.spinPulse),yt(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function tg(t){if(t&&tc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ec.icon)return ec.icon(t);if(t===null)return null;if(tc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var c3=Zi({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,s=Ce(function(){return tg(e.icon)}),i=Ce(function(){return _i("classes",a3(e))}),o=Ce(function(){return _i("transform",typeof e.transform=="string"?ec.transform(e.transform):e.transform)}),a=Ce(function(){return _i("mask",tg(e.mask))}),c=Ce(function(){return bN(s.value,Mt(Mt(Mt(Mt({},i.value),o.value),a.value),{},{symbol:e.symbol,title:e.title}))});ls(c,function(u){if(!u)return o3("Could not find one or more icon(s)",s.value,a.value)},{immediate:!0});var l=Ce(function(){return c.value?id(c.value.abstract[0],{},r):null});return function(){return l.value}}});Zi({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,s=fw.familyPrefix,i=Ce(function(){return["".concat(s,"-layers")].concat(Yu(e.fixedWidth?["".concat(s,"-fw")]:[]))});return function(){return pc("div",{class:i.value},r.default?r.default():[])}}});Zi({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,s=fw.familyPrefix,i=Ce(function(){return _i("classes",[].concat(Yu(e.counter?["".concat(s,"-layers-counter")]:[]),Yu(e.position?["".concat(s,"-layers-").concat(e.position)]:[])))}),o=Ce(function(){return _i("transform",typeof e.transform=="string"?ec.transform(e.transform):e.transform)}),a=Ce(function(){var l=_N(e.value.toString(),Mt(Mt({},o.value),i.value)),u=l.abstract;return e.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),c=Ce(function(){return id(a.value,{},r)});return function(){return c.value}}});GN();const nc=H_(VO);nc.use(G_());nc.component("icono",c3);const l3=sl();(async()=>(await l3.onAuthState(),nc.use(jn),nc.mount("#app")))();export{Am as A,U_ as B,y3 as C,ia as D,Rt as E,Wt as F,mO as G,hh as H,pc as I,Nb as J,Ce as K,ls as L,Lg as M,Ju as N,aO as O,Ga as P,_3 as Q,$O as R,sl as S,Fu as T,Ya as U,Qa as V,m3 as W,g3 as X,Ue as _,hO as a,he as b,gr as c,ne as d,d3 as e,xt as f,Ms as g,Rb as h,ei as i,p3 as j,ki as k,Kg as l,cO as m,Tr as n,un as o,Gs as p,Ub as q,Ea as r,v3 as s,u3 as t,b3 as u,w3 as v,ut as w,h3 as x,f3 as y,U0 as z};
