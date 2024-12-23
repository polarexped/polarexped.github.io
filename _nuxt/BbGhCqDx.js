import{_ as x}from"./BjhC-VOC.js";import{_ as f}from"./PZtZL2SG.js";import{_ as b}from"./CChwvNgc.js";import{e as p,o,c as i,a as t,b as n,w as c,t as s,d as _,F as h,h as g,i as y,Q as k}from"./Bjkwcjrx.js";const v=["id"],w={class:"relative mb-6 rounded-md border border-slate-200 bg-white hover:shadow-md"},T=["src","alt"],E={class:"bg-slate-50 p-2 text-xs font-bold uppercase"},S={class:"border-e border-gray-300 px-4"},B={class:"border-e border-gray-300 px-4"},C={class:"border-e border-gray-300 px-4"},N={class:"px-4"},P={class:"compare-card-content px-4 pb-4 text-base font-light"},$={class:"py-4 text-xl font-bold lg:text-2xl hover:underline text-card-blue-color"},K={class:"list-image-[url('checkmark.svg')] list-inside text-black"},q={class:"leading-7"},H=p({__name:"TourCompare2",props:{data:{}},setup(m){const e=m;return(l,a)=>{const r=f,u=b;return o(),i("div",{class:"w-full md:w-1/2 md:px-4 hover:cursor-pointer h-full",onClick:a[0]||(a[0]=d=>("navigateTo"in l?l.navigateTo:y(k))(e==null?void 0:e.data.uri)),id:e.data.tourId},[t("div",w,[n(r,{to:e.data.uri},{default:c(()=>[t("img",{class:"h-56 w-full rounded-t-md object-cover md:h-60",src:e.data.image,loading:"lazy",alt:e.data.imageAlt},null,8,T)]),_:1},8,["to"]),t("div",E,[t("span",S,s(e.data.summary.duration),1),t("span",B,s(e.data.summary.distance),1),t("span",C,s(e.data.summary.difficulty),1),t("span",N,s(e.data.summary.hours),1)]),t("div",P,[t("h3",$,[n(r,{to:e.data.uri},{default:c(()=>[_(s(e.data.title),1)]),_:1},8,["to"])]),(o(!0),i(h,null,g(e.data.features,d=>(o(),i("ul",K,[t("li",q,s(d),1)]))),256)),a[1]||(a[1]=t("hr",{class:"mt-4"},null,-1))]),n(u,{href:e==null?void 0:e.data.uri,pre:"Discover",text:e.data.title,class:"pt-0 p-4"},null,8,["href","text"])])],8,v)}}}),A={class:"page-container"},D={class:"flex flex-wrap md:justify-center"},V=p({__name:"Expeditions",setup(m){const e=[{data:{summary:{duration:"8 days",distance:"90 km",difficulty:"Easy",hours:"4-6 h/day"},image:"/img/hut.webp",imageAlt:"Kungsleden Hut accommodation",title:"Kungsleden Hut Tour",price:2195,features:["Sleep in a warm hut","Kitchen with a gas stove","Sauna included","Backpack 10-15 kg","No experience required"],date:"March 2025",uri:"/expeditions/kungsleden-hut-tour",tourId:"kungsleden-hut-tour"}},{data:{summary:{duration:"9 days",distance:"90 km",difficulty:"Medium",hours:"6-8 h/day"},title:"Kungsleden Camping Expedition",image:"/img/tent.webp",imageAlt:"Kungsleden Tent Hilleberg",price:2495,features:["Sleep in a warm sleeping bag","Expedition stove & fuel to boil water","Develop your Polar Expedition skills","Pulka (sled) 30-45 kg","Some camping experience required"],date:"March 2025",uri:"/expeditions/kungsleden-camping-expedition",tourId:"kungsleden-camping-expedition"}}];return(l,a)=>{const r=x,u=H;return o(),i("div",A,[n(r,{type:"h2"},{default:c(()=>a[0]||(a[0]=[_("Upcoming Ski Touring Expeditions 2025")])),_:1}),a[1]||(a[1]=t("p",{class:"text-md/relaxed pb-5 md:pb-8 md:text-lg/relaxed"}," With Polar Exped, you can choose from two types of Nordic ski touring expeditions in Sweden. Both use the same route and have the same duration. The main difference is accommodation - either huts or tents. Both are unique experiences with their own benefits. The hut tour is more accessible as it requires less gear and is therefore easier to do. ",-1)),t("div",D,[(o(),i(h,null,g(e,d=>n(u,{data:d.data},null,8,["data"])),64))])])}}});export{V as _};
