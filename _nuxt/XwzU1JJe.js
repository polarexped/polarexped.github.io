import{e as n,o as r,c as i,a,O as c,R as m,m as p,b as f,w as u,d as _,t as g,N as l,i as y}from"./Cn9B47Uk.js";import{_ as h}from"./CkPZrTVg.js";const v=["src","alt"],C=n({__name:"ResponsiveImage",props:{image:{type:String},class:{type:String,default:""},alt:{type:String},position:{type:String,default:"50% 50%"}},setup(e){return(t,o)=>(r(),i("div",null,[a("img",{loading:"lazy",class:c([e.class,"h-60 w-full rounded-md object-cover md:h-96 selector"]),src:`/img/${e.image}`,style:m(`object-position: ${e.position}`),alt:e.alt},null,14,v)]))}}),x={class:"page-container"},S={class:"flex-wrap md:flex md:gap-20"},$={class:"flex-1 grow"},N=n({__name:"ContentBlock",props:{title:{default:""},orderFirst:{type:Boolean,default:!1},variant:{default:"default"},container:{type:Boolean,default:!0},headerType:{default:"h2"}},setup(e){const t=e,o=p(()=>({"order-first":t.orderFirst,"flex-none md:size-1/3":t.variant==="small"}));return(s,B)=>{const d=h;return r(),i("div",x,[f(d,{type:t.headerType},{default:u(()=>[_(g(s.title),1)]),_:1},8,["type"]),a("div",S,[a("div",$,[l(s.$slots,"content")]),a("div",{class:c(["flex-1",[y(o)]])},[l(s.$slots,"image")],2)])])}}});export{N as _,C as a};
