import{e as d,f,g as y,r as C,o as t,c as n,a as s,b as g,t as c,P as h,F as i,h as w,i as D}from"./e946biZu.js";import{u as k}from"./3BPpJ31g.js";const S=d({__name:"[...slug]",async setup(v){let e,a;const{path:o}=f(),{data:m}=([e,a]=y(()=>k(`content-${o}`,()=>queryContent().where({_path:o}).findOne())),e=await e,a(),e);return(r,u)=>{var l;const _=C("ContentDoc");return t(),n(i,null,[u[0]||(u[0]=s("div",{id:"firstSection"}," ",-1)),s("main",null,[g(_,{class:"prose max-w-5xl"})]),s("pre",null,c((r._.provides[h]||r.$route).params),1),(t(!0),n(i,null,w((l=D(m))==null?void 0:l.tags,p=>(t(),n("span",{key:p},c(p)+", ",1))),128))],64)}}});export{S as default};
