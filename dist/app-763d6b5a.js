var U=Object.defineProperty;var z=(r,e,t)=>e in r?U(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var b=(r,e,t)=>(z(r,typeof e!="symbol"?e+"":e,t),t),j=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var n=(r,e,t)=>(j(r,e,"read from private field"),t?t.call(r):e.get(r)),x=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},T=(r,e,t,s)=>(j(r,e,"write to private field"),s?s.call(r,t):e.set(r,t),t);import{i as E,e as O,I as L,g as V}from"./mceb-8860921f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var o,p,m,y;class P{constructor(e){x(this,o,void 0);x(this,p,[]);x(this,m,[]);x(this,y,[]);T(this,o,e||[])}[Symbol.iterator](){return n(this,o).values()}reduce(e,t){for(let s=0;s<n(this,o).length;s++)t=e(t,n(this,o)[s],s);return t}map(e){const t=[];for(let s=0;s<n(this,o).length;s++)t.push(e(n(this,o)[s],s));return t}get length(){return n(this,o).length}add(e){this.set(n(this,o).length,e)}insert(e,t){n(this,o).splice(e,0,t);for(const s of n(this,y))s(e,t)}addAll(e){for(const t of e)this.add(t)}entries(){return n(this,o).entries()}every(e){return n(this,o).every(e)}fill(e,t,s){for(let i=t||0;i<(s||n(this,o).length)-1;i++)for(const a of n(this,m))a(i,this.get(i));return n(this,o).fill(e,t,s),this}removeIf(e){let t=this.length;for(;t--;)e(n(this,o)[t],t)&&this.removeAt(t)}extractIf(e){const t=[];let s=this.length;for(;s--;)e(n(this,o)[s],s)&&t.push(this.extractAt(s));return t}get(e){return n(this,o)[e]}subscribeToRemoveAt(e){return n(this,p).push(e),()=>n(this,p).splice(n(this,m).indexOf(e),1)}remove(e){const t=n(this,o).indexOf(e);return t===-1?!1:(this.removeAt(t),!0)}removeAt(e){n(this,o).splice(e,1);for(const t of n(this,p))t(e)}extractAt(e){for(const t of n(this,p))t(e);return n(this,o).splice(e,1)[0]}subscribeToInsert(e){return n(this,y).push(e),()=>{const t=n(this,y).indexOf(e);t!==-1&&n(this,y).splice(t,1)}}subscribeToSet(e){return n(this,m).push(e),()=>{const t=n(this,m).indexOf(e);t!==-1&&n(this,m).splice(t,1)}}set(e,t){n(this,o)[e]=t;for(const s of n(this,m))s(e,t)}clear(){for(let e=0;e<n(this,o).length;e++)for(const t of n(this,p))t(e);n(this,o).splice(0,n(this,o).length)}contains(e){return n(this,o).includes(e)}containsAll(e){e:for(const t of e){for(const s of this)if(t===s)continue e;return!1}return!0}first(e){for(let t=0;t<n(this,o).length;t++){const s=n(this,o)[t];if(e(s,t))return s}return null}indexOf(e){return n(this,o).indexOf(e)}isEmpty(){return n(this,o).length===0}nthIndexOf(e,t){let s=-1;for(const i of this)if(e===i&&(s++,s===t))return s;return s}lastIndexOf(e){return n(this,o).lastIndexOf(e)}removeAll(e){let t=!1;for(const s of e){const i=n(this,o).indexOf(s);i!==-1&&(t=!0,this.removeAt(i))}return t}retainAll(e){const t=[];for(const s of this)for(const i of e)s===i&&t.push(s);return t}subArray(e,t){const s=[];for(let i=Math.max(e,0);i<Math.min(n(this,o).length,t);i++)s.push(n(this,o)[i]);return s}toArray(){return n(this,o)}}o=new WeakMap,p=new WeakMap,m=new WeakMap,y=new WeakMap;var v,$;const M=class M{constructor(e){x(this,v,void 0);x(this,$,[]);T(this,v,e)}set value(e){if(n(this,v)!==e){T(this,v,e);for(const t of n(this,$))t(e)}}get value(){return n(this,v)}subscribe(e,t=!0){return t&&e(this.value),n(this,$).push(e),()=>n(this,$).splice(n(this,$).indexOf(e),1)}derive(e){const t=new M(e(this.value));return this.subscribe(s=>t.value=e(s),!1),t}};v=new WeakMap,$=new WeakMap;let u=M;function K(r,e){const t=new Array(r.length);for(let i=0;i<r.length;i++){const a=r[i];t[i]=a.value,a.subscribe(l=>{t[i]=l,s.value=e(t)},!1)}const s=new u(e(t));return s}class Q{constructor(e,t){b(this,"nextIndex",0);b(this,"si",0);b(this,"strings");b(this,"nextValueIndex",0);b(this,"values");b(this,"char");this.strings=e,this.values=t}next(){return this.char=this.strings[this.si][this.nextIndex],this.nextIndex++,this.char}skipWS(){for(;k.test(this.char)&&this.hasNext();)this.next()}hasNext(){return this.strings[this.si].length>this.nextIndex}getNextValue(){return this.nextIndex=0,this.nextValueIndex++,this.si++,this.values[this.nextValueIndex-1]}hasNextValue(){return this.values.length>this.nextValueIndex}}function A(r,...e){const t=new Q(r,e),[s,i]=R(t);if(i)throw new Error("End tag without a starting tag");return s}const k=/\s/;function Y(r){if(r.char){let e=r.char;for(;r.next(),!(r.char===">"||k.test(r.char));)e+=r.char;const t=document.createElement(e);H(r,t);const[s,i]=R(r);if(i!==e)throw new Error(`Start and end tags of native HTML element ${i} do not match`);return t.append(...s),[t]}else{const e=r.getNextValue();if(r.next(),typeof e!="function")throw new Error("Provided component is not a function");const t={};H(r,t);let s;if([t.children,s]=R(r),e!==s)throw new Error("Start and end tags of component do not match");return e(t)}}function H(r,e){for(;;){r.skipWS();let t="";for(;;){if(r.char===">"||r.char==="/"){t!==""&&(e[t]="");return}if(r.char==="=")break;if(k.test(r.char)){if(r.skipWS(),r.char!=="=")throw new Error(JSON.stringify(r));break}t+=r.char,r.next()}r.next();let s;if(r.char==='"'||r.char==="'"){const i=r.char;for(s="",r.next();r.char!==i;)s+=r.char,r.next()}else if(!r.char)s=r.getNextValue();else for(s="",r.next();!k.test(r.char);)s+=r.char,r.next();r.next(),t==="class"&&(t="className"),s instanceof u&&e instanceof HTMLElement?s.subscribe(i=>e[t]=i):t==="self"&&e instanceof HTMLElement?s(e):e[t]=s}}function G(r){if(r.next()!=="-"||r.next()!=="-")throw new Error("TODO");for(;r.next()==="-"&&r.next()==="-"&&r.next()===">";);}function R(r){const e=[];for(;;){const t=Z(r);if(typeof t=="string"||typeof t=="function")return[e,t];if(t&&e.push(...t),!r.hasNextValue()&&!r.hasNext())return[e]}}function Z(r){r.next();let e=!1;if(k.test(r.char)&&(e=!0,r.next(),r.skipWS()),r.char==="<"){if(r.next()==="!")return G(r);if(r.char==="/")if(r.next()){let t=r.char;for(;r.next()!==">";){if(k.test(r.char)){if(r.skipWS(),r.char!==">")throw new Error("Expected '>'");break}t+=r.char}return t}else{const t=r.getNextValue();if(r.next(),r.skipWS(),r.char!==">")throw new Error("Expected '>'");return t}else{if(r.char===">")throw new Error("Fragments are not supported");{const t=Y(r);return e&&t.splice(0,0,document.createTextNode(" ")),t}}}else if(r.hasNext()){let t=(e?" ":"")+r.char;for(;r.hasNext();){if(r.next(),k.test(r.char)){if(t+=" ",r.next(),r.skipWS(),r.char==="<"){r.nextIndex--;break}else if(!r.hasNext())break}else if(r.char==="<"){r.nextIndex--;break}t+=r.char}return[document.createTextNode(t)]}else if(r.hasNextValue()){const t=[];e&&t.push(document.createTextNode(" "));const s=r.getNextValue();if(s instanceof u){const i=document.createTextNode(s.value);s.subscribe(a=>i.textContent=a,!1),t.push(i)}else s instanceof Node?t.push(s):s instanceof Array&&(s.length===0||s[0]instanceof Node)?t.push(...s):t.push(document.createTextNode(s+""));return t}else return[]}function _(r){const e=document.createComment(""),t=[...r.value];return e.after(...t),r.subscribe(s=>{for(let i of t)e.parentElement.removeChild(i);t.splice(0,t.length),t.push(...s),e.after(...s)},!1),[e,...r.value]}function W(r,e){const t=document.createComment(""),s=r.map(e);return r.subscribeToRemoveAt(i=>{const[a]=s.splice(i,1);a.parentElement.removeChild(a)}),r.subscribeToSet((i,a)=>{const l=e(a,i);if(i<s.length)t.parentElement.replaceChild(s[i],s[i]),s[i]=l;else{const c=s[s.length-1];t.parentElement.insertBefore(l,(c||t).nextSibling),s.push(l)}}),r.subscribeToInsert((i,a)=>{const l=e(a,i);s[i].parentElement.insertBefore(l,s[i]),s.splice(i,0,l)}),[t,...s]}const N=new URL(location.href).searchParams;function g(){N.set("i",d.map(r=>`${E[r.item.value]}${r.enchantments.reduce((e,t)=>e+O.find(s=>s.name===t.type.value).id+t.level.value,"")}`).join("-")),history.replaceState(null,"",`${location.pathname}?${N}`)}function D(r,e){const t=new P(r);t.subscribeToInsert(g),t.subscribeToRemoveAt(g),t.subscribeToSet(g);const s=new u(e);return s.subscribe(g,!1),{enchantments:t,item:s}}function F(r,e){const t=new u(r),s=new u(e);return t.subscribe(g,!1),s.subscribe(g,!1),{type:t,level:s}}const d=new P(N.get("i")?N.get("i").split("-").map(r=>{const e=r.substring(1).match(/.{2}/g);return D(e?e.map(t=>F(O.find(s=>s.id===t[0]).name,+t[1])):[],Object.keys(E).find(t=>E[t]===r[0]))}):[]);d.subscribeToInsert(g);d.subscribeToRemoveAt(g);d.subscribeToSet(g);const ee=["0","I","II","III","IV","V"];function te(){d.add(D([],"Book"))}function q(r){const e=document.createElement("div");return e.innerHTML=r,e.children[0]}function C(r){const e=document.createElement("div");e.innerHTML=r;const t=[];for(const s of e.childNodes)t.push(s);return t}const re=q(`
    <svg width="16" height="16" viewBox="0 0 16 16" class="fill-none stroke-gray-900 dark:stroke-gray-200" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7L8 12L13 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`),se=q(`
    <svg width="16" height="16" viewBox="0 0 16 16" class="fill-none stroke-gray-900 dark:stroke-gray-200" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10L8 5L13 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`);function f({children:r,className:e,reference:t,...s}){const i=A`
        <button
            class="select-none px-3 py-0.5 rounded-full bg-gray-400/10 hover:bg-gray-400/20 transition flex items-center gap-1"
        >
            ${r}
        </button>
    `[1];return t&&t(i),Object.assign(i,s),e&&i.classList.add(...e.split(" ")),[i]}function I({options:r,target:e}){const t=new u(!1),s=re.cloneNode(!0),i=se.cloneNode(!0);t.subscribe(c=>{c?(s.style.display="none",i.style.display="block"):(s.style.display="block",i.style.display="none",document.onmousedown=null)});let a,l;return A`
        <div class="relative select-none">
            <${f}
                onclick=${c=>{t.value=!t.value,document.onmousedown=h=>{c.target!==h.target&&h.target!==a&&!a.contains(h.target)&&(t.value=!1)}}}
                reference=${c=>l=c}
            >
                ${e}
                ${s}
                ${i}
            </${f}>
            <div
                self=${c=>a=c}
                class=${t.derive(c=>{let h;if(c){const B=l.getBoundingClientRect();h=B.y+B.height+320>window.innerHeight?"bottom-[calc(100%+.5rem)]":"top-[calc(100%+.5rem)]"}else h="hidden";return`${h} z-10 absolute shadow-xl dark:shadow-none shadow-black/20 border border-gray-200 rounded-lg w-60 max-h-80 overflow-y-auto bg-white dark:bg-gray-800 dark:border-gray-700`})}>
                ${_(r.derive(c=>c.map(h=>A`
                    <button onclick=${()=>{t.value=!1,e.value=h}} class="px-3 py-0.5 block hover:bg-indigo-600 hover:text-white w-full text-left">${h}
                    </button>
                `[1])))}
            </div>
        </div>
    `}const J=new Worker("worker.js",{type:"module"}),ie=new u(Object.keys(E).sort()),S=new u(void 0),w=new u(!1);w.subscribe(r=>{if(!r){S.value=void 0;return}J.postMessage(N.get("i"))});J.onmessage=r=>{r.data.success?S.value={totalCost:r.data.totalCost,steps:r.data.steps.map(e=>({cost:e.cost,target:L.unpack(e.target),sacrifice:L.unpack(e.sacrifice),result:L.unpack(e.result)}))}:S.value=r.data.error};function X({item:r}){return`
        <div class="table-cell">
            <h3 class="text-white">${r.item}</h3>
            ${r.enchantments.map(e=>`
                <div>${e.type.name} ${ee[e.level]}</div>
            `).join("")}
        </div>
    `}document.querySelector("#app").append(...A`
    <header
        class="py-4 bg-gray-100/30 dark:bg-gray-900/30 backdrop-blur-xl z-10 backdrop:saturate-200 sticky top-0 w-full gap-4 flex justify-center">
        <div class="px-6 grid grid-cols-[1fr_min-content_1fr] w-full max-w-screen-md items-center">
            <div class="font-semibold text-black text-lg dark:text-white select-none">Minecraft Anvil Combinator</div>
            <div class="rounded-full bg-gray-400/10 p-1 gap-2 flex">
                <button
                    class=${w.derive(r=>`${r?"":"bg-gray-400/20 "}rounded-full px-4 hover:bg-gray-400/20 transition`)}
                    onclick=${()=>w.value=!1}>Input
                </button>
                <button
                    class=${w.derive(r=>`${r?"bg-gray-400/20 ":""}rounded-full px-4 hover:bg-gray-400/20 transition`)}
                    onclick=${()=>w.value=!0}>Calculate
                </button>
            </div>
            <div class="flex justify-end">
                <${f} onclick=${te}>+ Add Item</${f}>
            </div>
        </div>
    </header>
    <main class="max-w-screen-md w-full px-6">
        <div class=${w.derive(r=>`${r?"hidden":""} flex flex-col gap-4`)}>
            <div class="border bg-white border-gray-200 p-4 rounded-lg dark:border-gray-700 dark:bg-gray-800/50">
                Some popular presets:
                <ul class="list-inside list-disc">
                    <li>
                        <a href="?i=F-XP5-XJ5-XQ1-XR3-Xa1"
                           class="text-indigo-600 font-medium hover:text-indigo-400 transition">Best Axe</a>
                    </li>
                    <li>
                        <a href="?i=E-Xa1-XR3-XJ5-XN2-Xm3-XO3"
                           class="text-indigo-600 font-medium hover:text-indigo-400 transition">Best Sword</a>
                    </li>
                    <li>
                        <a href="?i=D-XA4-XH3-XC4-Xa1-XR3-XF3-Xk3"
                           class="text-indigo-600 font-medium hover:text-indigo-400 transition">Best Boots</a>
                    </li>
                </ul>
            </div>
            <h1 class="font-semibold mr-auto text-black dark:text-white select-none">Items ${"("}${(()=>{const r=new u(d.length),e=()=>r.value=d.length;return d.subscribeToInsert(e),d.subscribeToRemoveAt(e),d.subscribeToSet(e),r})()}) To Combine:</h1>
            ${W(d,r=>A`
                <div
                    class="border bg-white border-gray-200 pt-4 pb-2 rounded-lg dark:border-gray-700 dark:bg-gray-800/50">
                    <div class="flex gap-4 mb-2 pb-4 mx-4 items-center border-b border-gray-200 dark:border-gray-700">
                        <img alt="" class="w-8 h-8 [image-rendering:pixelated]"
                             src=${r.item.derive(e=>`${e.toLowerCase().replaceAll(" ","_")}.png`)}></img>
                        <${I} options=${ie} target=${r.item}></${I}>
                        <${f} onclick=${()=>{r.enchantments.add(F("Mending",1))}}>+ Add Enchantment
                        </${f}>
                        <${f} onclick=${()=>{d.removeIf(e=>e===r)}} className="ml-auto">
                            Delete Item
                        </${f}>
                    </div>
                    <div>
                        ${W(r.enchantments,e=>A`
                            <div
                                class=${K([e.level,e.type],([t,s])=>`${V(s).maxLevel<t?"bg-yellow-300 ":""}flex gap-4 py-2 px-4`)}>
                                <${I}
                                    options=${r.item.derive(t=>t==="Book"?O.map(s=>s.name).sort():O.filter(s=>s.applicable.indexOf(t)!==-1).map(s=>s.name).sort())}
                                    target=${e.type}
                                ></${I}>
                                <${I}
                                    options=${e.type.derive(t=>new Array(V(t).maxLevel).fill(0).map((s,i)=>i+1))}
                                    target=${e.level}
                                ></${I}>
                                <${f} className="ml-auto" onclick=${()=>{r.enchantments.removeIf(t=>t===e)}}>Remove
                                </${f}>
                            </div>
                        `[1])}
                    </div>
                </div>
            `[1])}
        </div>
        <div class=${w.derive(r=>r?"":"hidden")}>
            ${_(S.derive(r=>C(typeof r=="object"?`
                        <h1 class="text-lg">Branch with total cost: ${r.totalCost}</h1>
                        <div class="grid [grid-template-columns:min-content_min-content_1fr_1fr_1fr] gap-4">
                            <div>Step</div>
                            <div>Cost</div>
                            <div>Target</div>
                            <div>Sacrifice</div>
                            <div>Result</div>
                            ${r.steps.map((e,t)=>`
                                <div class="table-cell">${t+1}</div>
                                <div class="table-cell">${e.cost}</div>
                                ${X({item:e.target})}
                                ${X({item:e.sacrifice})}
                                ${X({item:e.result})}
                            `).join("")}
                        </div>
                    `:typeof r=="string"?`
                        <div>Error: ${r}</div>
                    `:`
                    <div>Loading</div>
                `)))}
        </div>
    </main>
    <footer class="p-6 text-gray-500 text-sm select-none font-light mt-auto">
        © Trombecher ${new Date().getFullYear()}. All Rights Reserved.
    </footer>
`);
