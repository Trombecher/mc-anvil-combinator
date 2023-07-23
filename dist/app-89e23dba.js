var q=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var r=(n,e,t)=>(q(n,e,"read from private field"),t?t.call(n):e.get(n)),E=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},O=(n,e,t,s)=>(q(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t);import{i as F,e as P,I as D,g as J}from"./mceb-8860921f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var i,N,x,L,M;class V{constructor(e){E(this,i,void 0);E(this,N,[]);E(this,x,[]);E(this,L,[]);E(this,M,[]);O(this,i,e||[])}[Symbol.iterator](){return r(this,i).values()}reduce(e,t){for(let s=0;s<r(this,i).length;s++)t=e(t,r(this,i)[s],s);return t}map(e){const t=[];for(let s=0;s<r(this,i).length;s++)t.push(e(r(this,i)[s],s));return t}get length(){return r(this,i).length}add(e){this.set(r(this,i).length,e)}insert(e,t){e>r(this,i).length?e=r(this,i).length:e<0&&(e=Math.max(0,r(this,i).length+e)),r(this,i).splice(e,0,t);for(const s of r(this,L))s(e,t)}addAll(e){for(const t of e)this.add(t)}entries(){return r(this,i).entries()}every(e){return r(this,i).every(e)}fill(e,t,s){r(this,i).fill(e,t,s);for(let o=t||0;o<(s||r(this,i).length)-1;o++)for(const l of r(this,x))l(o,this.get(o));return this}removeIf(e){let t=this.length;for(;t--;)e(r(this,i)[t],t)&&this.removeAt(t)}extractIf(e){const t=[];let s=this.length;for(;s--;)e(r(this,i)[s],s)&&t.push(this.extractAt(s));return t}get(e){return r(this,i).at(e)}subscribeToRemoveAt(e){return r(this,N).push(e),()=>r(this,N).splice(r(this,x).indexOf(e),1)}remove(e){const t=r(this,i).indexOf(e);return t===-1?!1:(this.removeAt(t),!0)}removeAt(e){if(e>r(this,i).length)return;e<0&&(e=Math.max(0,r(this,i).length+e));const t=r(this,i).splice(e,1)[0];for(const s of r(this,N))s(e,t)}extractAt(e){if(e>r(this,i).length)return;e<0&&(e=Math.max(0,r(this,i).length+e));const t=r(this,i).splice(e,1)[0];for(const s of r(this,N))s(e,t);return t}subscribeToMove(e){return r(this,M).push(e),()=>{const t=r(this,M).indexOf(e);t!==-1&&r(this,M).splice(t,1)}}subscribeToInsert(e){return r(this,L).push(e),()=>{const t=r(this,L).indexOf(e);t!==-1&&r(this,L).splice(t,1)}}subscribeToSet(e){return r(this,x).push(e),()=>{const t=r(this,x).indexOf(e);t!==-1&&r(this,x).splice(t,1)}}move(e,t){r(this,i).splice(t,0,r(this,i).splice(e,1)[0]);for(const s of r(this,M))s(e,t)}set(e,t){if(e>r(this,i).length)throw new RangeError(`Provided index ${e} is greater than the array length.`);r(this,i)[e]=t;for(const s of r(this,x))s(e,t)}clear(){const e=r(this,i).splice(0,r(this,i).length);for(let t=0;t<e.length;t++)for(const s of r(this,N))s(t,e[t])}includes(e){return r(this,i).includes(e)}includesAll(e){e:for(const t of e){for(const s of this)if(t===s)continue e;return!1}return!0}first(e){for(let t=0;t<r(this,i).length;t++){const s=r(this,i)[t];if(e(s,t))return s}}indexOf(e,t){return r(this,i).indexOf(e,t)}isEmpty(){return r(this,i).length===0}nthIndexOf(e,t){let s=-1;for(const o of this)if(e===o&&(s++,s===t))return s;return s}lastIndexOf(e){return r(this,i).lastIndexOf(e)}removeAll(e){let t=!1;for(const s of e){const o=r(this,i).indexOf(s);o!==-1&&(t=!0,this.removeAt(o))}return t}subArray(e,t){const s=[];e<0&&(e=Math.max(0,r(this,i).length+e)),t<0&&(t=Math.max(0,r(this,i).length+t));for(let o=Math.max(e,0);o<Math.min(r(this,i).length,t);o++)s.push(r(this,i)[o]);return s}toArray(){return r(this,i)}}i=new WeakMap,N=new WeakMap,x=new WeakMap,L=new WeakMap,M=new WeakMap;var T,X;const U=class U{constructor(e){E(this,T,void 0);E(this,X,[]);O(this,T,e)}set value(e){if(r(this,T)!==e){O(this,T,e);for(const t of r(this,X))t(e)}}get value(){return r(this,T)}subscribe(e,t=!0){return t&&e(this.value),r(this,X).push(e),()=>r(this,X).splice(r(this,X).indexOf(e),1)}derive(e){const t=new U(e(this.value));return this.subscribe(s=>t.value=e(s),!1),t}};T=new WeakMap,X=new WeakMap;let v=U;function ee(n,e){const t=new Array(n.length);for(let o=0;o<n.length;o++){const l=n[o];t[o]=l.value,l.subscribe(d=>{t[o]=d,s.value=e(t)},!1)}const s=new v(e(t));return s}const te=/(<([a-zA-Z][a-zA-Z\-\d]*)([^\/"'>]|(("((\\")|[^"])*")|('((\\')|[^'])*')|([^\/"'>\s]+)))*\/?>)|(<\/([a-zA-Z][a-zA-Z\-\d]*)\s*>)/gm,K=/\s*([^\/"'>\s]+)\s*=\s*(("(((\\")|[^"])*)")|('(((\\')|[^'])*)')|([^\/"'>\s]+))/gm;function y(n,...e){const t="a0",s=n.join(t);let o=-1;function l(){return o++,e[o]}const d=[];let h=0;for(const u of s.matchAll(te))d.push(s.substring(h,u.index),u),h=u.index+u[0].length;d.push(s.substring(h));const p=d[Symbol.iterator]();function R(u){if(typeof u=="string"){const f=u.split("a0"),w=[document.createTextNode(f[0])];for(let S=1;S<f.length;S++){const c=l();if(c instanceof Node)w.push(c);else if(c instanceof Array)w.push(...c);else if(c instanceof v)if(c.value instanceof Node){let a=c.value;c.subscribe(m=>{a.parentElement.replaceChild(m,a),a=m}),w.push(a)}else if(c.value instanceof Array){const a=document.createTextNode(""),m=[...c.value];a.after(...m),c.subscribe(k=>{for(let b of m)a.parentElement.removeChild(b);m.splice(0,m.length),m.push(...k),a.after(...k)},!1),w.push(a,...c.value)}else{const a=document.createTextNode(c.value+"");c.subscribe(m=>a.textContent=m+"",!1),w.push(a)}else w.push(document.createTextNode(c));w.push(document.createTextNode(f[S]))}return w}if(u[2]){if(u[2]===t){const c=l(),a={},m=u[0].substring(1+u[2].length,u[0].length);for(const b of m.matchAll(K)){const A=b[8]||b[4]||b[2];A===t?a[b[1]]=l():a[b[1]]=A}if(a.children=[],u[0].at(-2)==="/")return c(a);let k;for(const b of p){const A=R(b);if(A instanceof Array)a.children.push(...A);else if(A instanceof Node)a.children.push(A);else if(typeof A=="function"){k=A;break}else throw new Error("TF?")}if(c!==k)throw new Error("Start and end tags of component do not match");return c(a)}const f=document.createElement(u[2]),w=u[0].substring(1+u[2].length,u[0].length);for(const c of w.matchAll(K)){let a=c[1];a==="class"&&(a="className");const m=c[8]||c[4]||c[2];if(m===t){const k=l();k instanceof v?k.subscribe(b=>f[a]=b):f[a]=k}else f[a]=m}if(u[0].at(-2)==="/")return[f];let S;for(const c of p){const a=R(c);if(a instanceof Array)f.append(...a);else if(a instanceof Node)f.append(a);else if(typeof a=="string"){S=a;break}else throw new Error("TF?")}if(u[2]!==S)throw new Error(`Start and end tags <${u[2]}> and </${S}> do not match`);return[f]}return u[13]===t?l():u[13]}const z=[];for(const u of p){const f=R(u);if(f instanceof Array)z.push(...f);else if(f instanceof Node)z.push(f);else throw new Error("TF?")}return z}function Q(n,e){const t=document.createTextNode(""),s=n.map(e);return n.subscribeToRemoveAt(o=>{const l=s.splice(o,1)[0];l.parentElement.removeChild(l)}),n.subscribeToSet((o,l)=>{const d=e(l,o);if(o<s.length)t.parentElement.replaceChild(s[o],s[o]),s[o]=d;else{const h=s[s.length-1];t.parentElement.insertBefore(d,(h||t).nextSibling),s.push(d)}}),n.subscribeToInsert((o,l)=>{const d=e(l,o);s[o].parentElement.insertBefore(d,s[o]),s.splice(o,0,d)}),n.subscribeToMove((o,l)=>{const d=s.splice(o,1)[0];t.parentElement.removeChild(d),t.parentElement.insertBefore(s[o],d),s.splice(l,0,d)}),[t,...s]}function H(n,...e){const t=document.createElement("div");let s=n[0];for(let l=0;l<e.length;l++)s+=e[l]+n[l+1];t.innerHTML=s;const o=[];for(const l of t.childNodes)o.push(l);return o}const j=new URL(location.href).searchParams;function I(){j.set("i",g.map(n=>`${F[n.item.value]}${n.enchantments.reduce((e,t)=>e+P.find(s=>s.name===t.type.value).id+t.level.value,"")}`).join("-")),history.replaceState(null,"",`${location.pathname}?${j}`)}function W(n,e){const t=new V(n);t.subscribeToInsert(I),t.subscribeToRemoveAt(I),t.subscribeToSet(I);const s=new v(e);return s.subscribe(I,!1),{enchantments:t,item:s}}function Y(n,e){const t=new v(n),s=new v(e);return t.subscribe(I,!1),s.subscribe(I,!1),{type:t,level:s}}const g=new V(j.get("i")?j.get("i").split("-").map(n=>{const e=n.substring(1).match(/.{2}/g);return W(e?e.map(t=>Y(P.find(s=>s.id===t[0]).name,+t[1])):[],Object.keys(F).find(t=>F[t]===n[0]))}):[]);g.subscribeToInsert(I);g.subscribeToRemoveAt(I);g.subscribeToSet(I);const se=["0","I","II","III","IV","V"];function ne(){g.add(W([],"Book"))}const re=H`
    <svg width="16" height="16" viewBox="0 0 16 16" class="fill-none stroke-gray-900 dark:stroke-gray-200" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7L8 12L13 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`[1],oe=H`
    <svg width="16" height="16" viewBox="0 0 16 16" class="fill-none stroke-gray-900 dark:stroke-gray-200" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10L8 5L13 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`[1];function $({children:n,className:e,reference:t,...s}){const o=y`
        <button
            class="select-none px-3 py-0.5 rounded-full bg-gray-400/10 hover:bg-gray-400/20 transition flex items-center gap-1"
        >
            ${n}
        </button>
    `[1];return t&&t(o),Object.assign(o,s),e&&o.classList.add(...e.split(" ")),o}function B({options:n,target:e}){const t=new v(!1),s=re.cloneNode(!0),o=oe.cloneNode(!0);t.subscribe(h=>{h?(s.style.display="none",o.style.display="block"):(s.style.display="block",o.style.display="none",document.onmousedown=null)});let l=y`
        <div
            class=${t.derive(h=>{let p;if(h){const R=d.getBoundingClientRect();p=R.y+R.height+320>window.innerHeight?"bottom-[calc(100%+.5rem)]":"top-[calc(100%+.5rem)]"}else p="hidden";return`${p} z-10 absolute shadow-xl dark:shadow-none shadow-black/20 border border-gray-200 rounded-lg w-60 max-h-80 overflow-y-auto bg-white dark:bg-gray-800 dark:border-gray-700`})}>
            ${n.derive(h=>h.map(p=>y`
                <button onclick=${()=>{t.value=!1,e.value=p}} class="px-3 py-0.5 block hover:bg-indigo-600 hover:text-white w-full text-left">${p}
                </button>
            `[1]))}
        </div>
    `[1],d;return y`
        <div class="relative select-none">
            <${$}
                onclick=${h=>{t.value=!t.value,document.onmousedown=p=>{h.target!==p.target&&p.target!==l&&!l.contains(p.target)&&(t.value=!1)}}}
                reference=${h=>d=h}
            >
                ${e}
                ${s}
                ${o}
            </${$}>
            ${l}
        </div>
    `}const G=new Worker("worker.js",{type:"module"}),ie=new v(Object.keys(F).sort()),_=new v(void 0),C=new v(!1);C.subscribe(n=>{if(!n){_.value=void 0;return}G.postMessage(j.get("i"))});G.onmessage=n=>{n.data.success?_.value={totalCost:n.data.totalCost,steps:n.data.steps.map(e=>({cost:e.cost,target:D.unpack(e.target),sacrifice:D.unpack(e.sacrifice),result:D.unpack(e.result)}))}:_.value=n.data.error};function Z({item:n}){return H`
        <div class="table-cell">
            <h3 class="text-white">${n.item}</h3>
            ${n.enchantments.map(e=>`
                <div>${e.type.name} ${se[e.level]}</div>
            `).join("")}
        </div>
    `}document.querySelector("#app").append(...y`
    <header
        class="py-4 bg-gray-100/30 dark:bg-gray-900/30 backdrop-blur-xl z-10 backdrop:saturate-200 sticky top-0 w-full gap-4 flex justify-center">
        <div class="px-6 grid grid-cols-[1fr_min-content_1fr] w-full max-w-screen-md items-center">
            <div class="font-semibold text-black text-lg dark:text-white select-none">Minecraft Anvil Combinator</div>
            <div class="rounded-full bg-gray-400/10 p-1 gap-2 flex">
                <button
                    class=${C.derive(n=>`${n?"":"bg-gray-400/20 "}rounded-full px-4 hover:bg-gray-400/20 transition`)}
                    onclick=${()=>C.value=!1}>Input
                </button>
                <button
                    class=${C.derive(n=>`${n?"bg-gray-400/20 ":""}rounded-full px-4 hover:bg-gray-400/20 transition`)}
                    onclick=${()=>C.value=!0}>Calculate
                </button>
            </div>
            <div class="flex justify-end">
                <${$} onclick=${ne}>+ Add Item</${$}>
            </div>
        </div>
    </header>
    <main class="max-w-screen-md w-full px-6">
        <div class=${C.derive(n=>`${n?"hidden":""} flex flex-col gap-4`)}>
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
            <h1 class="font-semibold mr-auto text-black dark:text-white select-none">Items (${(()=>{const n=new v(g.length),e=()=>n.value=g.length;return g.subscribeToInsert(e),g.subscribeToRemoveAt(e),g.subscribeToSet(e),n})()}) To Combine:</h1>
            ${Q(g,n=>y`
                <div
                    class="border bg-white border-gray-200 pt-4 pb-2 rounded-lg dark:border-gray-700 dark:bg-gray-800/50">
                    <div class="flex gap-4 mb-2 pb-4 mx-4 items-center border-b border-gray-200 dark:border-gray-700">
                        <img alt="" class="w-8 h-8 [image-rendering:pixelated]"
                             src=${n.item.derive(e=>`${e.toLowerCase().replaceAll(" ","_")}.png`)}></img>
                        <${B} options=${ie} target=${n.item}></${B}>
                        <${$} onclick=${()=>{n.enchantments.add(Y("Mending",1))}}>+ Add Enchantment
                        </${$}>
                        <${$} onclick=${()=>{g.removeIf(e=>e===n)}} className="ml-auto">
                            Delete Item
                        </${$}>
                    </div>
                    <div>
                        ${Q(n.enchantments,e=>y`
                            <div
                                class=${ee([e.level,e.type],([t,s])=>`${J(s).maxLevel<t?"bg-yellow-300 ":""}flex gap-4 py-2 px-4`)}>
                                <${B}
                                    options=${n.item.derive(t=>t==="Book"?P.map(s=>s.name).sort():P.filter(s=>s.applicable.indexOf(t)!==-1).map(s=>s.name).sort())}
                                    target=${e.type}
                                ></${B}>
                                <${B}
                                    options=${e.type.derive(t=>new Array(J(t).maxLevel).fill(0).map((s,o)=>o+1))}
                                    target=${e.level}
                                ></${B}>
                                <${$} className="ml-auto" onclick=${()=>{n.enchantments.removeIf(t=>t===e)}}>Remove
                                </${$}>
                            </div>
                        `[1])}
                    </div>
                </div>
            `[1])}
        </div>
        <div class=${C.derive(n=>n?"":"hidden")}>
            ${_.derive(n=>typeof n=="object"?y`
                        <h1 class="text-lg">Branch with total cost: ${n.totalCost}</h1>
                        <div class="grid [grid-template-columns:min-content_min-content_1fr_1fr_1fr] gap-4">
                            <div>Step</div>
                            <div>Cost</div>
                            <div>Target</div>
                            <div>Sacrifice</div>
                            <div>Result</div>
                            ${n.steps.map((e,t)=>y`
                                <div class="table-cell">${t+1}</div>
                                <div class="table-cell">${e.cost}</div>
                                <${Z} item=${e.target}/>
                                <${Z} item=${e.sacrifice}/>
                                <${Z} item=${e.result}/>
                            `).reduce((e,t)=>(e.push(...t),e),[])}
                        </div>
                    `:typeof n=="string"?y`<div>Error: ${n}</div>`:y`<div>Loading</div>`)}
        </div>
    </main>
    <footer class="p-6 text-gray-500 text-sm select-none font-light mt-auto">
        © Trombecher ${new Date().getFullYear()}. All Rights Reserved.
    </footer>
`);
