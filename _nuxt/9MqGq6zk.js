const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./4yn8yeQN.js","./B0iOdX0_.js","./Bp_XFKbE.js","./IShi1APO.js","./BLRsB-Cu.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{h as f}from"./IShi1APO.js";import{u as m}from"./CI0TeoJ-.js";import{I as v,_ as l,C as d,M as g,x as y,e as h,N as _,l as w,J as C,L as p}from"./B0iOdX0_.js";import{q as x,w as c,e as N,s as P,j as $,u as E}from"./Bp_XFKbE.js";import{u as T}from"./BLRsB-Cu.js";import{_ as j}from"./uvLDur7r.js";const S=async t=>{const{content:e}=v().public;typeof(t==null?void 0:t.params)!="function"&&(t=x(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${N(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(P())return(await l(()=>import("./4yn8yeQN.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:$(n),previewToken:T().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},b="$s";function D(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=b+n,r=d(),i=g(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(y(s))return r.payload.state[a]=s,s;i.value=s}return i}const R=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=_(t),n=w(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&D("dd-navigation").value){const{navigation:a}=E();return{navigation:a}}const{data:o}=await m(`content-navigation-${f(n.value)}`,()=>S(n.value));return{navigation:o}},render(t){const e=C(),{navigation:n}=t,o=i=>p(j,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),K=R;export{K as default};