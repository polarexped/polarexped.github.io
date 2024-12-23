import{_ as K}from"./DlAUqK2U.js";import{o as D,c as P,j as M,p as w,k,l as I,b as J,w as Y,d as G,a as u,m as X,n as B,q as Q,s as Z,e as ee,i as g,v as L,x as N,y as E,z as C,A as te}from"./DGvALBsT.js";import{_ as se}from"./CqDpAhMN.js";import{u as re}from"./iwkzMGxA.js";const W=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ae(a,r){r?r={...W,...r}:r=W;const s=$(r);return s.dispatch(a),s.toString()}const ne=Object.freeze(["prototype","__proto__","constructor"]);function $(a){let r="",s=new Map;const e=t=>{r+=t};return{toString(){return r},getContext(){return s},dispatch(t){return a.replacer&&(t=a.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const o=Object.prototype.toString.call(t);let i="";const d=o.length;d<10?i="unknown:["+o+"]":i=o.slice(8,d-1),i=i.toLowerCase();let l=null;if((l=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+l+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this[i]?this[i](t):a.ignoreUnknown||this.unkown(t,i);else{let c=Object.keys(t);a.unorderedObjects&&(c=c.sort());let h=[];a.respectType!==!1&&!H(t)&&(h=ne),a.excludeKeys&&(c=c.filter(n=>!a.excludeKeys(n)),h=h.filter(n=>!a.excludeKeys(n))),e("object:"+(c.length+h.length)+":");const p=n=>{this.dispatch(n),e(":"),a.excludeValues||this.dispatch(t[n]),e(",")};for(const n of c)p(n);for(const n of h)p(n)}},array(t,o){if(o=o===void 0?a.unorderedArrays!==!1:o,e("array:"+t.length+":"),!o||t.length<=1){for(const l of t)this.dispatch(l);return}const i=new Map,d=t.map(l=>{const c=$(a);c.dispatch(l);for(const[h,p]of c.getContext())i.set(h,p);return c.toString()});return s=i,d.sort(),this.array(d,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,o){if(e(o),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),H(t)?this.dispatch("[native]"):this.dispatch(t.toString()),a.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),a.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const o=[...t];return this.array(o,a.unorderedSets!==!1)},set(t){e("set:");const o=[...t];return this.array(o,a.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(a.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const V="[native code] }",oe=V.length;function H(a){return typeof a!="function"?!1:Function.prototype.toString.call(a).slice(-oe)===V}var ie=Object.defineProperty,le=(a,r,s)=>r in a?ie(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,S=(a,r,s)=>(le(a,typeof r!="symbol"?r+"":r,s),s);class b{constructor(r,s){S(this,"words"),S(this,"sigBytes"),r=this.words=r||[],this.sigBytes=s===void 0?r.length*4:s}toString(r){return(r||de).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new b([...this.words])}}const de={stringify(a){const r=[];for(let s=0;s<a.sigBytes;s++){const e=a.words[s>>>2]>>>24-s%4*8&255;r.push((e>>>4).toString(16),(e&15).toString(16))}return r.join("")}},ce={stringify(a){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<a.sigBytes;e+=3){const t=a.words[e>>>2]>>>24-e%4*8&255,o=a.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=a.words[e+2>>>2]>>>24-(e+2)%4*8&255,d=t<<16|o<<8|i;for(let l=0;l<4&&e*8+l*6<a.sigBytes*8;l++)s.push(r.charAt(d>>>6*(3-l)&63))}return s.join("")}},ue={parse(a){const r=a.length,s=[];for(let e=0;e<r;e++)s[e>>>2]|=(a.charCodeAt(e)&255)<<24-e%4*8;return new b(s,r)}},he={parse(a){return ue.parse(unescape(encodeURIComponent(a)))}};class pe{constructor(){S(this,"_data",new b),S(this,"_nDataBytes",0),S(this,"_minBufferSize",0),S(this,"blockSize",512/32)}reset(){this._data=new b,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=he.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,e=this._data.sigBytes/(this.blockSize*4);r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,o=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,t),this._data.sigBytes-=o}return new b(s,o)}}class fe extends pe{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}var ye=Object.defineProperty,ge=(a,r,s)=>r in a?ye(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,me=(a,r,s)=>(ge(a,r+"",s),s);const R=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],be=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],x=[];class we extends fe{constructor(){super(...arguments),me(this,"_hash",new b([...R]))}reset(){super.reset(),this._hash=new b([...R])}_doProcessBlock(r,s){const e=this._hash.words;let t=e[0],o=e[1],i=e[2],d=e[3],l=e[4],c=e[5],h=e[6],p=e[7];for(let n=0;n<64;n++){if(n<16)x[n]=r[s+n]|0;else{const m=x[n-15],j=(m<<25|m>>>7)^(m<<14|m>>>18)^m>>>3,f=x[n-2],O=(f<<15|f>>>17)^(f<<13|f>>>19)^f>>>10;x[n]=j+x[n-7]+O+x[n-16]}const y=l&c^~l&h,T=t&o^t&i^o&i,z=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),v=(l<<26|l>>>6)^(l<<21|l>>>11)^(l<<7|l>>>25),_=p+v+y+be[n]+x[n],A=z+T;p=h,h=c,c=l,l=d+_|0,d=i,i=o,o=t,t=_+A|0}e[0]=e[0]+t|0,e[1]=e[1]+o|0,e[2]=e[2]+i|0,e[3]=e[3]+d|0,e[4]=e[4]+l|0,e[5]=e[5]+c|0,e[6]=e[6]+h|0,e[7]=e[7]+p|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ve(a){return new we().finalize(a).toString(ce)}function _e(a,r={}){const s=typeof a=="string"?a:ae(a,r);return ve(s).slice(0,10)}const xe={},ke={class:"page-container"};function Be(a,r){return D(),P("div",ke,r[0]||(r[0]=[M('<div class="card-container cursor-default"><div class="card special"><h3 class="h1">Benefits</h3><p>We want to set you up for success, that&#39;s why with Polar Exped - you&#39;ll get much, much more.</p><p>Joining our expeditions comes with a lot of unique benefits. Discover some of them here.</p></div><div class="card"><h4 class="h4"><i class="icon fa-solid fa-person-skiing-nordic"></i>Training Plan</h4><p>Preparing your body and mind for the expedition is the first step towards success. The better you&#39;ve trained the more enjoyable your experience will be. </p><p> We will discuss your current fitness and experience, help you do a realistic assessment and set up a training plan. </p></div><div class="card"><h4 class="h4"><i class="icon fa-regular fa-circle-question"></i>Gear Assistance</h4><p> Having the right gear is important. We will go trough the gear you already have and provide advice on what you need and where to get it. </p><p> We don&#39;t send out generic copy/paste gear lists and hope for the best, instead we&#39;ll make sure you have exactly what you need. </p></div><div class="card"><h4 class="h4"><i class="icon fa-solid fa-cart-shopping"></i>Deals with brands</h4><p>We&#39;re working together with some of the leading equipment brands, manufactures and stores to make sure you can use the best gear possible. </p><p>In many cases we can offer you a special discount. </p></div><div class="card"><h4 class="h4"><i class="icon fa-regular fa-clipboard"></i>Planning &amp; Preparation</h4><p><strong>Roald Amundsen</strong>, first man to reach both the North and South Pole said:<br> &quot;<i>Adventure is just bad planning</i>&quot;. We live by those words. You can count on us to take care of all the preparations so you can just join without worrying about anything. </p></div><div class="card"><h4 class="h4"><i class="icon fa-regular fa-heart"></i>Safety First</h4><p> Being outside is not without risks, but our focus is keeping everyone safe. <strong>Planning, Gear, Education &amp; Experience.</strong> Those things combined make for a successful expedition. </p><p>For additional safety we travel in <strong>small groups</strong> of max 5 participants.</p></div></div>',1)]))}const Ye=K(xe,[["render",Be]]),Se=w("/img/travel.webp"),Te=w("/img/sings.webp"),ze=w("/img/kungsleden.webp"),De=w("/img/tjaktja.webp"),Pe=w("/img/salka.webp"),Ae=w("/img/singi.webp"),je=w("/img/kebnekeise.webp"),Fe=w("/img/snowmobile.webp"),Le={class:"page-container"},Ne={__name:"DayByDay",setup(a){const r=k(null);return I(()=>{const s=r.value;s&&(s.scrollTop=100,s.scrollLeft=0);let e={top:0,left:0,x:0,y:0};const t=function(d){s&&(e={left:s.scrollLeft,top:s.scrollTop,x:d.clientX,y:d.clientY},document.addEventListener("mousemove",o),document.addEventListener("mouseup",i),s.style.cursor="grabbing",s.style.userSelect="none")},o=function(d){const l=d.clientX-e.x,c=d.clientY-e.y;s.scrollTop=e.top-c,s.scrollLeft=e.left-l},i=function(){let d=Math.round(s.scrollLeft/330)*330;s.scrollTo({left:d,behavior:"smooth"}),document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",i),s.style.cursor="grab",s.style.removeProperty("user-select")};s.addEventListener("mousedown",t)}),(s,e)=>{const t=se;return D(),P("div",Le,[J(t,{type:"h3"},{default:Y(()=>e[0]||(e[0]=[G("Day by day ")])),_:1}),e[2]||(e[2]=u("p",{class:"pb-5 text-base md:pb-8 md:text-lg"},"A very brief summary of the highlights of the days to come. Focussed on the hut-to-hut tour. The camping expedition follows the same route and a similar schedule, with one additional day.",-1)),u("div",{class:"scrolling-wrapper scroll flex flex-nowrap overflow-visible overflow-x-scroll",ref_key:"scrollingWrapper",ref:r,id:"scrolling-wrapper"},e[1]||(e[1]=[M('<div class="card flex-[0_0_auto]" data-v-7d23605b><img src="'+Se+'" alt="impression photo" loading="lazy" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 1</h4><p data-v-7d23605b>In the morning we meet in a city called Kiruna and travel together to Abisko where we will stay for the night. We will spend the afternoon getting comfortable on our skis and with out safety equipment. Kiruna can be reached by train or plane.</p></div><div class="card" data-v-7d23605b><img class="" src="'+Te+'" alt="impression photo" loading="lazy" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 2</h4><p data-v-7d23605b>First day on the trail we will travel through Abisko National Park. The first half of it is through a birch forrest, second part we will cross a frozen lake with Abiskojaure as our destination for the day. There we will find a small shop, warm huts and a sauna.</p></div><div class="card" data-v-7d23605b><img class="" src="'+ze+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 3</h4><p data-v-7d23605b>This will be the longest day of the journey so it&#39;s very important we start early. The first hour will be on a flat, which will be a good warm up for the not very steep, but quite long uphill that awaits us. Towards the end of the day we will take a break inside King&#39;s hut and then continue for few more hours across a frozen lake to Alesjaure. Hot sauna will be our reward.</p></div><div class="card" data-v-7d23605b><img class="" src="'+De+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 4</h4><p data-v-7d23605b>After a long journey the day before, this day will be easier as we&#39;re heading to Tjäktja. We will stay at the hut, located half hour away from the pass itself. This is one of the smaller huts, so there&#39;s no shop or sauna, but we do have views of the pass.</p></div><div class="card" data-v-7d23605b><img class="" src="'+Pe+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 5</h4><p data-v-7d23605b>The day will start with a relatively mild uphill bringing us to the highest pass on the trail: Tjäktja Pass. Here the views really start to open up and if the weather permits, we will have some of the best views on the trip. Then we will go down, either fast or zig-zagging slowly. From there is an easy 4 hour cruise to Sälka. Shop &amp; sauna available.</p></div><div class="card" data-v-7d23605b><img class="" src="'+Ae+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 6</h4><p data-v-7d23605b>Today we travel from Sälka to Singi. It should be an easy day of around 4-5h depending on the weather. The small hills will give you a chance to practice your down-hill technique - that&#39;s great fun. Half way we can stop in an emergency shelter to warm up and bit and have a second breakfast - that will give us a boost for the second part of the day.</p></div><div class="card" data-v-7d23605b><img class="" src="'+je+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 7</h4><p data-v-7d23605b>We start the day with a bit of an uphill and then we will head to Kebnekaise through the valleys. This day will not be long but it might challenge us with icy terrain. This will be the windiest part of the trail. Lucky for us, the wind will be in our backs. Still, it&#39;s important to stay focussed. Kebnekeise will offer us a comfortable hut, long awaited showers and a fancy meal in a restaurant. </p></div><div class="card" data-v-7d23605b><img class="" src="'+Fe+'" loading="lazy" alt="impression photo" height="175" style="pointer-events:none;" data-v-7d23605b><h4 data-v-7d23605b>Day 8</h4><p data-v-7d23605b>This is where our expedition will come to an end. After breakfast we will be picked up by a snow mobile that will bring us to a nearby town called Nikkaluokta, from where we will be transported back to Kiruna.</p></div>',8)]),512)])}}},Ge=K(Ne,[["__scopeId","data-v-7d23605b"]]);function Ee(a,r,s){const[e={},t]=typeof r=="string"?[{},r]:[r,s],o=X(()=>B(a)),i=e.key||_e([t,typeof o.value=="string"?o.value:"",...Oe(e)]);if(!i||typeof i!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+i);if(!a)throw new Error("[nuxt] [useFetch] request is missing.");const d=i===t?"$f"+i:i;if(!e.baseURL&&typeof o.value=="string"&&o.value[0]==="/"&&o.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:l,lazy:c,default:h,transform:p,pick:n,watch:y,immediate:T,getCachedData:z,deep:v,dedupe:_,...A}=e,m=Q({...Z,...A,cache:typeof e.cache=="boolean"?void 0:e.cache}),j={server:l,lazy:c,default:h,transform:p,pick:n,immediate:T,getCachedData:z,deep:v,dedupe:_,watch:y===!1?[]:[m,o,...y||[]]};let f;return re(d,()=>{var q;(q=f==null?void 0:f.abort)==null||q.call(f,new DOMException("Request aborted as another request to the same endpoint was initiated.","AbortError")),f=typeof AbortController<"u"?new AbortController:{};const U=B(e.timeout);let F;return U&&(F=setTimeout(()=>f.abort(new DOMException("Request aborted due to timeout.","AbortError")),U),f.signal.onabort=()=>clearTimeout(F)),(e.$fetch||globalThis.$fetch)(o.value,{signal:f.signal,...m}).finally(()=>{clearTimeout(F)})},j)}function Oe(a){var s;const r=[((s=B(a.method))==null?void 0:s.toUpperCase())||"GET",B(a.baseURL)];for(const e of[a.params||a.query]){const t=B(e);if(!t)continue;const o={};for(const[i,d]of Object.entries(t))o[B(i)]=B(d);r.push(o)}return r}const Ue={key:0},qe={class:"relative mb-4"},Ce={class:"relative mb-4"},We={class:"relative mb-4"},He={key:0},Re=["disabled"],Ke={key:1},Xe=ee({__name:"SignupForm",props:{expedition:{}},setup(a){const r=a,s=(location==null?void 0:location.hostname)==="localhost"?"https://form.taxi/s/yftw0ywm":"https://form.taxi/s/6pki3qox",e=k(!1),t=k(!1),o=k(""),i=k(""),d=k(""),l=async()=>{const{data:p,status:n,error:y,refresh:T,clear:z}=await Ee(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o.value,email:i.value,phone:d.value,expeidtion:r.expedition}),onResponse({response:v}){var _;t.value=!0,e.value=(_=v==null?void 0:v._data)==null?void 0:_.success}},"$1rDnbICDoU");return{data:p,status:n,error:y,refresh:T,clear:z}},c=k(!1),h=p=>{p.preventDefault(),l(),c.value=!0};return(p,n)=>g(e)?g(t)&&g(e)?(D(),P("div",Ke,n[9]||(n[9]=[u("div",{class:"text-2xl text-green-500 pb-4"},"Well done!",-1),u("p",{class:"text-base/relaxed"},"Your details are submitted successfully! We're looking forward to meeting you and we'll be in touch shortly",-1)]))):C("",!0):(D(),P("div",Ue,[u("form",{onSubmit:te(h,["prevent"])},[u("div",qe,[n[3]||(n[3]=u("label",{for:"full-name",class:"leading-7 text-sm text-gray-600"},"Full Name *",-1)),L(u("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":n[0]||(n[0]=y=>E(o)?o.value=y:null),required:"",class:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[N,g(o)]])]),u("div",Ce,[n[4]||(n[4]=u("label",{for:"email",class:"leading-7 text-sm text-gray-600"},"E-mail address*",-1)),L(u("input",{type:"email",id:"email",name:"email","onUpdate:modelValue":n[1]||(n[1]=y=>E(i)?i.value=y:null),required:"",class:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[N,g(i)]])]),u("div",We,[n[5]||(n[5]=u("label",{for:"phone",class:"leading-7 text-sm text-gray-600"},"Phone number*",-1)),L(u("input",{type:"phone",id:"phone",name:"phone","onUpdate:modelValue":n[2]||(n[2]=y=>E(d)?d.value=y:null),required:"",class:"w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"},null,512),[[N,g(d)]]),n[6]||(n[6]=u("input",{type:"text",name:"jimothy",style:{display:"none"}},null,-1))]),g(t)&&g(e)===!1?(D(),P("div",He,n[7]||(n[7]=[u("p",{class:"text-red-500 pb-4"},"Something went wrong. Please try again or contact us if the issue remains.",-1)]))):C("",!0),u("button",{disabled:g(c),type:"submit",class:"text-white bg-green border-0 py-2 px-8 focus:outline-none hover:bg-lime-500 rounded text-lg w-full disabled:bg-gray-300 disabled:hover:bg-gray-300 disabled:cursor-not-allowed"},"Reserve my spot",8,Re),n[8]||(n[8]=u("p",{class:"text-xs text-gray-500 mt-3"},"We respect your privacy and will not share or sell your details. ",-1))],32)]))}});export{Ye as _,Ge as a,Xe as b};
