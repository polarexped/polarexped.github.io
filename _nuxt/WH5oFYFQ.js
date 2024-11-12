import{_ as K}from"./DlAUqK2U.js";import{o as z,c as D,j as M,p as b,k as _,l as I,b as J,w as Y,d as G,a as p,m as X,n as x,q as Q,s as Z,e as ee,i as y,v as L,x as N,y as O,z as C,A as te}from"./C-0fSnjO.js";import{_ as se}from"./B3BL5TNw.js";import{u as re}from"./CVNs_Ah0.js";const W=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ae(a,r){r?r={...W,...r}:r=W;const s=$(r);return s.dispatch(a),s.toString()}const ne=Object.freeze(["prototype","__proto__","constructor"]);function $(a){let r="",s=new Map;const e=t=>{r+=t};return{toString(){return r},getContext(){return s},dispatch(t){return a.replacer&&(t=a.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const n=Object.prototype.toString.call(t);let o="";const c=n.length;c<10?o="unknown:["+n+"]":o=n.slice(8,c-1),o=o.toLowerCase();let d=null;if((d=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+d+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):a.ignoreUnknown||this.unkown(t,o);else{let u=Object.keys(t);a.unorderedObjects&&(u=u.sort());let h=[];a.respectType!==!1&&!H(t)&&(h=ne),a.excludeKeys&&(u=u.filter(l=>!a.excludeKeys(l)),h=h.filter(l=>!a.excludeKeys(l))),e("object:"+(u.length+h.length)+":");const i=l=>{this.dispatch(l),e(":"),a.excludeValues||this.dispatch(t[l]),e(",")};for(const l of u)i(l);for(const l of h)i(l)}},array(t,n){if(n=n===void 0?a.unorderedArrays!==!1:n,e("array:"+t.length+":"),!n||t.length<=1){for(const d of t)this.dispatch(d);return}const o=new Map,c=t.map(d=>{const u=$(a);u.dispatch(d);for(const[h,i]of u.getContext())o.set(h,i);return u.toString()});return s=o,c.sort(),this.array(c,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),H(t)?this.dispatch("[native]"):this.dispatch(t.toString()),a.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),a.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const n=[...t];return this.array(n,a.unorderedSets!==!1)},set(t){e("set:");const n=[...t];return this.array(n,a.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(a.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const V="[native code] }",oe=V.length;function H(a){return typeof a!="function"?!1:Function.prototype.toString.call(a).slice(-oe)===V}var ie=Object.defineProperty,le=(a,r,s)=>r in a?ie(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,S=(a,r,s)=>(le(a,typeof r!="symbol"?r+"":r,s),s);class m{constructor(r,s){S(this,"words"),S(this,"sigBytes"),r=this.words=r||[],this.sigBytes=s===void 0?r.length*4:s}toString(r){return(r||de).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new m([...this.words])}}const de={stringify(a){const r=[];for(let s=0;s<a.sigBytes;s++){const e=a.words[s>>>2]>>>24-s%4*8&255;r.push((e>>>4).toString(16),(e&15).toString(16))}return r.join("")}},ce={stringify(a){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<a.sigBytes;e+=3){const t=a.words[e>>>2]>>>24-e%4*8&255,n=a.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=a.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|n<<8|o;for(let d=0;d<4&&e*8+d*6<a.sigBytes*8;d++)s.push(r.charAt(c>>>6*(3-d)&63))}return s.join("")}},ue={parse(a){const r=a.length,s=[];for(let e=0;e<r;e++)s[e>>>2]|=(a.charCodeAt(e)&255)<<24-e%4*8;return new m(s,r)}},he={parse(a){return ue.parse(unescape(encodeURIComponent(a)))}};class pe{constructor(){S(this,"_data",new m),S(this,"_nDataBytes",0),S(this,"_minBufferSize",0),S(this,"blockSize",512/32)}reset(){this._data=new m,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=he.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,e=this._data.sigBytes/(this.blockSize*4);r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=n}return new m(s,n)}}class fe extends pe{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}var ye=Object.defineProperty,ge=(a,r,s)=>r in a?ye(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,me=(a,r,s)=>(ge(a,r+"",s),s);const R=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],be=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],v=[];class we extends fe{constructor(){super(...arguments),me(this,"_hash",new m([...R]))}reset(){super.reset(),this._hash=new m([...R])}_doProcessBlock(r,s){const e=this._hash.words;let t=e[0],n=e[1],o=e[2],c=e[3],d=e[4],u=e[5],h=e[6],i=e[7];for(let l=0;l<64;l++){if(l<16)v[l]=r[s+l]|0;else{const g=v[l-15],j=(g<<25|g>>>7)^(g<<14|g>>>18)^g>>>3,f=v[l-2],U=(f<<15|f>>>17)^(f<<13|f>>>19)^f>>>10;v[l]=j+v[l-7]+U+v[l-16]}const k=d&u^~d&h,T=t&n^t&o^n&o,w=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),B=(d<<26|d>>>6)^(d<<21|d>>>11)^(d<<7|d>>>25),P=i+B+k+be[l]+v[l],A=w+T;i=h,h=u,u=d,d=c+P|0,c=o,o=n,n=t,t=P+A|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+o|0,e[3]=e[3]+c|0,e[4]=e[4]+d|0,e[5]=e[5]+u|0,e[6]=e[6]+h|0,e[7]=e[7]+i|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ve(a){return new we().finalize(a).toString(ce)}function _e(a,r={}){const s=typeof a=="string"?a:ae(a,r);return ve(s).slice(0,10)}const xe={},ke={class:"page-container"};function Be(a,r){return z(),D("div",ke,r[0]||(r[0]=[M('<div class="card-container cursor-default"><div class="card special"><h3 class="h1">Benefits</h3><p>We want to set you up for success, that&#39;s why with Polar Exped - you&#39;ll get much, much more.</p><p>Joining our expeditions comes with a lot of unique benefits. Discover some of them here.</p></div><div class="card"><h4 class="h4"><i class="icon fa-solid fa-person-skiing-nordic"></i>Training Plan</h4><p>Preparing your body and mind for the expedition is the first step towards success. The better you&#39;ve trained the more enjoyable your experience will be. </p><p> We will discuss your current fitness and experience, help you do a realistic assessment and set up a training plan. </p></div><div class="card"><h4 class="h4"><i class="icon fa-regular fa-circle-question"></i>Gear Assistance</h4><p> Having the right gear is important. We will go trough the gear you already have and provide advice on what you need and where to get it. </p><p> We don&#39;t send out generic copy/paste gear lists and hope for the best, instead we&#39;ll make sure you have exactly what you need. </p></div><div class="card"><h4 class="h4"><i class="icon fa-solid fa-cart-shopping"></i>Deals with brands</h4><p>We&#39;re working together with some of the leading equipment brands, manufactures and stores to make sure you can use the best gear possible. </p><p>In many cases we can offer you a special discount. </p></div><div class="card"><h4 class="h4"><i class="icon fa-regular fa-clipboard"></i>Planning &amp; Preparation</h4><p><strong>Roald Amundsen</strong>, first man to reach both the North and South Pole said:<br> &quot;<i>Adventure is just bad planning</i>&quot;. We live by those words. You can count on us to take care of all the preparations so you can just join without worrying about anything. </p></div><div class="card"><h4 class="h4"><i class="icon fa-regular fa-heart"></i>Safety First</h4><p> Being outside is not without risks, but our focus is keeping everyone safe. <strong>Planning, Gear, Education &amp; Experience.</strong> Those things combined make for a successful expedition. </p><p>For additional safety we travel in <strong>small groups</strong> of max 5 participants.</p></div></div>',1)]))}const Ye=K(xe,[["render",Be]]),Se=b("/img/travel.webp"),Te=b("/img/sings.webp"),ze=b("/img/kungsleden.webp"),De=b("/img/tjaktja.webp"),Pe=b("/img/salka.webp"),Ae=b("/img/singi.webp"),je=b("/img/kebnekeise.webp"),Fe=b("/img/snowmobile.webp"),Le={class:"page-container"},Ne={__name:"DayByDay",setup(a){const r=_(null);return I(()=>{const s=r.value;s&&(s.scrollTop=100,s.scrollLeft=0);let e={top:0,left:0,x:0,y:0};const t=function(c){s&&(e={left:s.scrollLeft,top:s.scrollTop,x:c.clientX,y:c.clientY},document.addEventListener("mousemove",n),document.addEventListener("mouseup",o),s.style.cursor="grabbing",s.style.userSelect="none")},n=function(c){const d=c.clientX-e.x,u=c.clientY-e.y;s.scrollTop=e.top-u,s.scrollLeft=e.left-d},o=function(){let c=Math.round(s.scrollLeft/330)*330;s.scrollTo({left:c,behavior:"smooth"}),document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",o),s.style.cursor="grab",s.style.removeProperty("user-select")};s.addEventListener("mousedown",t)}),(s,e)=>{const t=se;return z(),D("div",Le,[J(t,{type:"h3"},{default:Y(()=>e[0]||(e[0]=[G("Day by day ")])),_:1}),e[2]||(e[2]=p("p",{class:"pb-5 text-base md:pb-8 md:text-lg"},"A very brief summary of the highlights of the days to come. Focussed on the hut-to-hut tour. The camping expedition follows the same route and a similar schedule, with one additional day.",-1)),p("div",{class:"scrolling-wrapper scroll flex flex-nowrap overflow-visible overflow-x-scroll",ref_key:"scrollingWrapper",ref:r,id:"scrolling-wrapper"},e[1]||(e[1]=[M('<div class="card flex-[0_0_auto]" data-v-7d23605b><img src="'+Se+'" alt="impression photo" loading="lazy" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 1</h4><p data-v-7d23605b>In the morning we meet in a city called Kiruna and travel together to Abisko where we will stay for the night. We will spend the afternoon getting comfortable on our skis and with out safety equipment. Kiruna can be reached by train or plane.</p></div><div class="card" data-v-7d23605b><img class="" src="'+Te+'" alt="impression photo" loading="lazy" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 2</h4><p data-v-7d23605b>First day on the trail we will travel through Abisko National Park. The first half of it is through a birch forrest, second part we will cross a frozen lake with Abiskojaure as our destination for the day. There we will find a small shop, warm huts and a sauna.</p></div><div class="card" data-v-7d23605b><img class="" src="'+ze+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 3</h4><p data-v-7d23605b>This will be the longest day of the journey so it&#39;s very important we start early. The first hour will be on a flat, which will be a good warm up for the not very steep, but quite long uphill that awaits us. Towards the end of the day we will take a break inside King&#39;s hut and then continue for few more hours across a frozen lake to Alesjaure. Hot sauna will be our reward.</p></div><div class="card" data-v-7d23605b><img class="" src="'+De+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 4</h4><p data-v-7d23605b>After a long journey the day before, this day will be easier as we&#39;re heading to Tjäktja. We will stay at the hut, located half hour away from the pass itself. This is one of the smaller huts, so there&#39;s no shop or sauna, but we do have views of the pass.</p></div><div class="card" data-v-7d23605b><img class="" src="'+Pe+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 5</h4><p data-v-7d23605b>The day will start with a relatively mild uphill bringing us to the highest pass on the trail: Tjäktja Pass. Here the views really start to open up and if the weather permits, we will have some of the best views on the trip. Then we will go down, either fast or zig-zagging slowly. From there is an easy 4 hour cruise to Sälka. Shop &amp; sauna available.</p></div><div class="card" data-v-7d23605b><img class="" src="'+Ae+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 6</h4><p data-v-7d23605b>Today we travel from Sälka to Singi. It should be an easy day of around 4-5h depending on the weather. The small hills will give you a chance to practice your down-hill technique - that&#39;s great fun. Half way we can stop in an emergency shelter to warm up and bit and have a second breakfast - that will give us a boost for the second part of the day.</p></div><div class="card" data-v-7d23605b><img class="" src="'+je+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 7</h4><p data-v-7d23605b>We start the day with a bit of an uphill and then we will head to Kebnekaise through the valleys. This day will not be long but it might challenge us with icy terrain. This will be the windiest part of the trail. Lucky for us, the wind will be in our backs. Still, it&#39;s important to stay focussed. Kebnekeise will offer us a comfortable hut, long awaited showers and a fancy meal in a restaurant. </p></div><div class="card" data-v-7d23605b><img class="" src="'+Fe+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 8</h4><p data-v-7d23605b>This is where our expedition will come to an end. After breakfast we will be picked up by a snow mobile that will bring us to a nearby town called Nikkaluokta, from where we will be transported back to Kiruna.</p></div>',8)]),512)])}}},Ge=K(Ne,[["__scopeId","data-v-7d23605b"]]);function Oe(a,r,s){const[e={},t]=typeof r=="string"?[{},r]:[r,s],n=X(()=>x(a)),o=e.key||_e([t,typeof n.value=="string"?n.value:"",...Ue(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);const c=o===t?"$f"+o:o;if(!e.baseURL&&typeof n.value=="string"&&n.value[0]==="/"&&n.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:d,lazy:u,default:h,transform:i,pick:l,watch:k,immediate:T,getCachedData:w,deep:B,dedupe:P,...A}=e,g=Q({...Z,...A,cache:typeof e.cache=="boolean"?void 0:e.cache}),j={server:d,lazy:u,default:h,transform:i,pick:l,immediate:T,getCachedData:w,deep:B,dedupe:P,watch:k===!1?[]:[g,n,...k||[]]};let f;return re(c,()=>{var q;(q=f==null?void 0:f.abort)==null||q.call(f,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),f=typeof AbortController<"u"?new AbortController:{};const E=x(e.timeout);let F;return E&&(F=setTimeout(()=>f.abort(new DOMException("Request aborted due to timeout.","AbortError")),E),f.signal.onabort=()=>clearTimeout(F)),(e.$fetch||globalThis.$fetch)(n.value,{signal:f.signal,...g}).finally(()=>{clearTimeout(F)})},j)}function Ue(a){var s;const r=[((s=x(a.method))==null?void 0:s.toUpperCase())||"GET",x(a.baseURL)];for(const e of[a.params||a.query]){const t=x(e);if(!t)continue;const n={};for(const[o,c]of Object.entries(t))n[x(o)]=x(c);r.push(n)}return r}const Ee={key:0},qe={class:"relative mb-4"},Ce={class:"relative mb-4"},We={class:"relative mb-4"},He={key:0},Re=["disabled"],Ke={key:1},Xe=ee({__name:"SignupForm",props:{expedition:{}},setup(a){const r=a,s=_(!1),e=_(!1),t=_(""),n=_(""),o=_(""),c=async()=>{const{data:h,status:i,error:l,refresh:k,clear:T}=await Oe("https://form.taxi/s/yftw0ywm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.value,email:n.value,phone:o.value,expeidtion:r.expedition}),onResponse({response:w}){var B;e.value=!0,s.value=(B=w==null?void 0:w._data)==null?void 0:B.success}},"$1rDnbICDoU");return{data:h,status:i,error:l,refresh:k,clear:T}},d=_(!1),u=h=>{h.preventDefault(),c(),d.value=!0};return(h,i)=>y(s)?y(e)&&y(s)?(z(),D("div",Ke,i[9]||(i[9]=[p("div",{class:"text-2xl text-green-500 pb-4"},"Well done!",-1),p("p",{class:"text-base/relaxed"},"Your details are submitted successfully! We're looking forward to meeting you and we'll be in touch shortly",-1)]))):C("",!0):(z(),D("div",Ee,[p("form",{onSubmit:te(u,["prevent"])},[p("div",qe,[i[3]||(i[3]=p("label",{for:"full-name",class:"leading-7 text-sm text-gray-600"},"Full Name *",-1)),L(p("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":i[0]||(i[0]=l=>O(t)?t.value=l:null),required:"",class:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[N,y(t)]])]),p("div",Ce,[i[4]||(i[4]=p("label",{for:"email",class:"leading-7 text-sm text-gray-600"},"E-mail address*",-1)),L(p("input",{type:"email",id:"email",name:"email","onUpdate:modelValue":i[1]||(i[1]=l=>O(n)?n.value=l:null),required:"",class:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[N,y(n)]])]),p("div",We,[i[5]||(i[5]=p("label",{for:"phone",class:"leading-7 text-sm text-gray-600"},"Phone number*",-1)),L(p("input",{type:"phone",id:"phone",name:"phone","onUpdate:modelValue":i[2]||(i[2]=l=>O(o)?o.value=l:null),required:"",class:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[N,y(o)]]),i[6]||(i[6]=p("input",{type:"text",name:"jimothy",style:{display:"none"}},null,-1))]),y(e)&&y(s)===!1?(z(),D("div",He,i[7]||(i[7]=[p("p",{class:"text-red-500 pb-4"},"Something went wrong. Please try again or contact us if the issue remains.",-1)]))):C("",!0),p("button",{disabled:y(d),type:"submit",class:"text-white bg-green border-0 py-2 px-8 focus:outline-none hover:bg-lime-500 rounded text-lg w-full disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed"},"Reserve my spot",8,Re),i[8]||(i[8]=p("p",{class:"text-xs text-gray-500 mt-3"},"We respect your privacy and will not share or sell your details. ",-1))],32)]))}});export{Ye as _,Ge as a,Xe as b};
