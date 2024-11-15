import{_ as v}from"./BJbg_zYk.js";import{p as y,o as n,c as l,a as t,b as c,w as p,d as u,e as k,F as b,h,t as f,O as C,z as E}from"./e946biZu.js";import{_ as S}from"./DlAUqK2U.js";const B=y("/img/logo.svg"),L={class:"z-[200] fixed left-0 right-0 top-0 flex items-center bg-transparent py-5",id:"navbar"},P={class:"page-container flex justify-between"},A={class:"nav flex items-center"},Q={__name:"PageHeader",setup(m){if(typeof window<"u"){let a=!1,e=window.scrollY;const o=window.scrollY,s=document.getElementById("navbar"),_=()=>{const x=document.getElementById("whatsapp"),d=document.getElementById("firstSection"),w=d?d.offsetTop-50:0,i=window.scrollY;if(s&&e>i)s.style.top="0";else if(s&&i>=w){x&&x.classList.remove("hideMe");const g=d?d.offsetTop-i-50:0;g<0&&(s.style.top=g+"px")}e=i,s&&(i>=50?s.classList.add("navbar-top"):s.classList.remove("navbar-top"))};o&&o>=1&&a&&_(),window.onscroll=function(){a=!0,_()}}return(a,e)=>{const o=v;return n(),l("header",L,[t("div",P,[c(o,{to:"/"},{default:p(()=>e[0]||(e[0]=[t("img",{class:"logo brightness-[90%] w transition-[width] duration-[0.25s] ease-[ease] w-24 lg:w-32",width:"128px",src:B,alt:"Polar Exped Logo"},null,-1)])),_:1}),t("nav",A,[c(o,{to:"/expeditions",type:"button",class:"px-2 py-4 sm:p-4 inline-block box-border relative hover:underline"},{default:p(()=>e[1]||(e[1]=[u(" Expeditions")])),_:1}),c(o,{to:"/about",type:"button",class:"px-2 py-4 sm:p-4 inline-block box-border relative hover:underline"},{default:p(()=>e[2]||(e[2]=[u(" About ")])),_:1}),c(o,{to:"/about#contact",type:"button",class:"px-2 py-4 sm:p-4 inline-block box-border relative hover:underline"},{default:p(()=>e[3]||(e[3]=[u("Contact ")])),_:1})])])])}}},F={},z={class:"whatsapp hideMe",id:"whatsapp"};function T(m,r){return n(),l("div",z,r[0]||(r[0]=[t("a",{href:"https://wa.me/message/ACKVS7VF3GB4I1","aria-label":"Whatsapp with Polar Exped"},[t("div",{class:"whatsapp-icon"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#ffffff",viewBox:"0 0 90 90"},[t("path",{d:"M90 43.841c0 24.213-19.779 43.841-44.182 43.841a44.256 44.256 0 01-21.357-5.455L0 90l7.975-23.522a43.38 43.38 0 01-6.34-22.637C1.635 19.628 21.416 0 45.818 0 70.223 0 90 19.628 90 43.841zM45.818 6.982c-20.484 0-37.146 16.535-37.146 36.859 0 8.065 2.629 15.534 7.076 21.61L11.107 79.14l14.275-4.537A37.122 37.122 0 0045.819 80.7c20.481 0 37.146-16.533 37.146-36.857S66.301 6.982 45.818 6.982zm22.311 46.956c-.273-.447-.994-.717-2.076-1.254-1.084-.537-6.41-3.138-7.4-3.495-.993-.358-1.717-.538-2.438.537-.721 1.076-2.797 3.495-3.43 4.212-.632.719-1.263.809-2.347.271-1.082-.537-4.571-1.673-8.708-5.333-3.219-2.848-5.393-6.364-6.025-7.441-.631-1.075-.066-1.656.475-2.191.488-.482 1.084-1.255 1.625-1.882.543-.628.723-1.075 1.082-1.793.363-.717.182-1.344-.09-1.883-.27-.537-2.438-5.825-3.34-7.977-.902-2.15-1.803-1.792-2.436-1.792-.631 0-1.354-.09-2.076-.09s-1.896.269-2.889 1.344c-.992 1.076-3.789 3.676-3.789 8.963 0 5.288 3.879 10.397 4.422 11.113.541.716 7.49 11.92 18.5 16.223C58.2 65.771 58.2 64.336 60.186 64.156c1.984-.179 6.406-2.599 7.312-5.107.9-2.512.9-4.663.631-5.111z"})])])],-1)]))}const R=S(F,[["render",T]]),V={class:"page-container","aria-labelledby":"footer-heading"},$={class:"mb-8"},N={class:"mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"},j={class:"text-sm/6 font-semibold text-gray-900"},I={role:"list",class:"mt-4 space-y-4"},M={class:"group"},Y=["href"],D={key:0},K={class:"items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-2 md:grid-cols-2"},H={class:"text-sm/6 text-slate-600 max-md:text-center"},U=k({__name:"Footer",setup(m){const r=[{title:"Expeditions in Sweden",links:[{title:"Kungsleden Hut Tour",url:"/expeditions/kungsleden-hut-tour"},{title:"Kungsleden Camping",url:"/expeditions/kungsleden-camping-expedition"},{title:"All Expeditions",url:"/expeditions",all:!0}]},{title:"Company",links:[{title:"About Polar Exped",url:"/about"},{title:"Contact us",url:"/about#contact",all:!0}]},{title:"Support",links:[{title:"FAQ",url:"/faq"}]}];return(a,e)=>(n(),l("footer",V,[e[2]||(e[2]=t("h2",{id:"footer-heading",class:"sr-only"},"Footer",-1)),t("div",$,[e[0]||(e[0]=t("hr",{class:"mt-10 border-t border-zinc-100"},null,-1)),t("div",N,[(n(),l(b,null,h(r,o=>t("div",null,[t("h3",j,f(o.title),1),t("ul",I,[(n(!0),l(b,null,h(o.links,s=>(n(),l("li",M,[t("a",{href:s.url,class:C(["text-sm/6 text-gray-600 hover:text-gray-900 group-last:text-slate-900",{"[&>span]:group-last:inline-block [&>span]:group-last:transition [&>span]:group-last:hover:translate-x-0.5":s.all}])},[u(f(s.title)+" ",1),s.all?(n(),l("span",D,"→")):E("",!0)],10,Y)]))),256))])])),64))])]),t("div",K,[t("p",H,"© "+f(new Date().getFullYear())+" Polar Exped. All rights reserved.",1),e[1]||(e[1]=t("div",{class:"flex hidden items-center justify-center space-x-4 text-sm/6 font-semibold text-slate-900 md:justify-end"},[t("a",{href:"#"},"Privacy policy"),t("div",{class:"h-4 w-px bg-slate-200"}),t("a",{href:"#"},"Terms of use")],-1))])]))}});export{Q as _,R as a,U as b};
