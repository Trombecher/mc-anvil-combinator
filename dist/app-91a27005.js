var q=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var o=(n,e,t)=>(q(n,e,"read from private field"),t?t.call(n):e.get(n)),N=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)},O=(n,e,t,s)=>(q(n,e,"write to private field"),s?s.call(n,t):e.set(n,t),t);import{i as F,e as _,I as D,g as J}from"./mceb-8860921f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var l,E,A,L,T;class V{constructor(e){N(this,l,void 0);N(this,E,[]);N(this,A,[]);N(this,L,[]);N(this,T,[]);O(this,l,e||[])}[Symbol.iterator](){return o(this,l).values()}reduce(e,t){for(let s=0;s<o(this,l).length;s++)t=e(t,o(this,l)[s],s);return t}map(e){const t=[];for(let s=0;s<o(this,l).length;s++)t.push(e(o(this,l)[s],s));return t}get length(){return o(this,l).length}add(e){this.set(o(this,l).length,e)}insert(e,t){o(this,l).splice(e,0,t);for(const s of o(this,L))s(e,t)}addAll(e){for(const t of e)this.add(t)}entries(){return o(this,l).entries()}every(e){return o(this,l).every(e)}fill(e,t,s){for(let r=t||0;r<(s||o(this,l).length)-1;r++)for(const i of o(this,A))i(r,this.get(r));return o(this,l).fill(e,t,s),this}removeIf(e){let t=this.length;for(;t--;)e(o(this,l)[t],t)&&this.removeAt(t)}extractIf(e){const t=[];let s=this.length;for(;s--;)e(o(this,l)[s],s)&&t.push(this.extractAt(s));return t}get(e){return o(this,l)[e]}subscribeToRemoveAt(e){return o(this,E).push(e),()=>o(this,E).splice(o(this,A).indexOf(e),1)}remove(e){const t=o(this,l).indexOf(e);return t===-1?!1:(this.removeAt(t),!0)}removeAt(e){o(this,l).splice(e,1);for(const t of o(this,E))t(e)}extractAt(e){for(const t of o(this,E))t(e);return o(this,l).splice(e,1)[0]}subscribeToMove(e){return o(this,T).push(e),()=>{const t=o(this,T).indexOf(e);t!==-1&&o(this,T).splice(t,1)}}subscribeToInsert(e){return o(this,L).push(e),()=>{const t=o(this,L).indexOf(e);t!==-1&&o(this,L).splice(t,1)}}subscribeToSet(e){return o(this,A).push(e),()=>{const t=o(this,A).indexOf(e);t!==-1&&o(this,A).splice(t,1)}}move(e,t){o(this,l).splice(t,0,o(this,l).splice(e,1)[0]);for(const s of o(this,T))s(e,t)}set(e,t){o(this,l)[e]=t;for(const s of o(this,A))s(e,t)}clear(){for(let e=0;e<o(this,l).length;e++)for(const t of o(this,E))t(e);o(this,l).splice(0,o(this,l).length)}contains(e){return o(this,l).includes(e)}containsAll(e){e:for(const t of e){for(const s of this)if(t===s)continue e;return!1}return!0}first(e){for(let t=0;t<o(this,l).length;t++){const s=o(this,l)[t];if(e(s,t))return s}return null}indexOf(e){return o(this,l).indexOf(e)}isEmpty(){return o(this,l).length===0}nthIndexOf(e,t){let s=-1;for(const r of this)if(e===r&&(s++,s===t))return s;return s}lastIndexOf(e){return o(this,l).lastIndexOf(e)}removeAll(e){let t=!1;for(const s of e){const r=o(this,l).indexOf(s);r!==-1&&(t=!0,this.removeAt(r))}return t}retainAll(e){const t=[];for(const s of this)for(const r of e)s===r&&t.push(s);return t}subArray(e,t){const s=[];for(let r=Math.max(e,0);r<Math.min(o(this,l).length,t);r++)s.push(o(this,l)[r]);return s}toArray(){return o(this,l)}}l=new WeakMap,E=new WeakMap,A=new WeakMap,L=new WeakMap,T=new WeakMap;var X,R;const U=class U{constructor(e){N(this,X,void 0);N(this,R,[]);O(this,X,e)}set value(e){if(o(this,X)!==e){O(this,X,e);for(const t of o(this,R))t(e)}}get value(){return o(this,X)}subscribe(e,t=!0){return t&&e(this.value),o(this,R).push(e),()=>o(this,R).splice(o(this,R).indexOf(e),1)}derive(e){const t=new U(e(this.value));return this.subscribe(s=>t.value=e(s),!1),t}};X=new WeakMap,R=new WeakMap;let v=U;function ee(n,e){const t=new Array(n.length);for(let r=0;r<n.length;r++){const i=n[r];t[r]=i.value,i.subscribe(u=>{t[r]=u,s.value=e(t)},!1)}const s=new v(e(t));return s}const te=/(<([a-zA-Z][a-zA-Z\-\d]*)([^\/"'>]|(("((\\")|[^"])*")|('((\\')|[^'])*')|([^\/"'>\s]+)))*\/?>)|(<\/([a-zA-Z][a-zA-Z\-\d]*)\s*>)/gm,K=/\s*([^\/"'>\s]+)\s*=\s*(("(((\\")|[^"])*)")|('(((\\')|[^'])*)')|([^\/"'>\s]+))/gm;function y(n,...e){const t="a0",s=n.join(t);let r=-1;function i(){return r++,e[r]}const u=[];let f=0;for(const d of s.matchAll(te))u.push(s.substring(f,d.index),d),f=d.index+d[0].length;u.push(s.substring(f));const m=u[Symbol.iterator]();function B(d){if(typeof d=="string"){const h=d.split("a0"),w=[document.createTextNode(h[0])];for(let S=1;S<h.length;S++){const c=i();if(c instanceof Node)w.push(c);else if(c instanceof Array)w.push(...c);else if(c instanceof v)if(c.value instanceof Node){let a=c.value;c.subscribe(p=>{a.parentElement.replaceChild(p,a),a=p}),w.push(a)}else if(c.value instanceof Array){const a=document.createTextNode(""),p=[...c.value];a.after(...p),c.subscribe(x=>{for(let g of p)a.parentElement.removeChild(g);p.splice(0,p.length),p.push(...x),a.after(...x)},!1),w.push(a,...c.value)}else{const a=document.createTextNode(c.value+"");c.subscribe(p=>a.textContent=p+"",!1),w.push(a)}else w.push(document.createTextNode(c));w.push(document.createTextNode(h[S]))}return w}if(d[2]){if(d[2]===t){const c=i(),a={},p=d[0].substring(1+d[2].length,d[0].length);for(const g of p.matchAll(K)){const k=g[8]||g[4]||g[2];k===t?a[g[1]]=i():a[g[1]]=k}if(a.children=[],d[0].at(-2)==="/")return c(a);let x;for(const g of m){const k=B(g);if(k instanceof Array)a.children.push(...k);else if(k instanceof Node)a.children.push(k);else if(typeof k=="function"){x=k;break}else throw new Error("TF?")}if(c!==x)throw new Error("Start and end tags of component do not match");return c(a)}const h=document.createElement(d[2]),w=d[0].substring(1+d[2].length,d[0].length);for(const c of w.matchAll(K)){let a=c[1];a==="class"&&(a="className");const p=c[8]||c[4]||c[2];if(p===t){const x=i();x instanceof v?x.subscribe(g=>h[a]=g):h[a]=x}else h[a]=p}if(d[0].at(-2)==="/")return[h];let S;for(const c of m){const a=B(c);if(a instanceof Array)h.append(...a);else if(a instanceof Node)h.append(a);else if(typeof a=="string"){S=a;break}else throw new Error("TF?")}if(d[2]!==S)throw new Error(`Start and end tags <${d[2]}> and </${S}> do not match`);return[h]}return d[13]===t?i():d[13]}const P=[];for(const d of m){const h=B(d);if(h instanceof Array)P.push(...h);else if(h instanceof Node)P.push(h);else throw new Error("TF?")}return P}function Q(n,e){const t=document.createTextNode(""),s=n.map(e);return n.subscribeToRemoveAt(r=>{const[i]=s.splice(r,1);i.parentElement.removeChild(i)}),n.subscribeToSet((r,i)=>{const u=e(i,r);if(r<s.length)t.parentElement.replaceChild(s[r],s[r]),s[r]=u;else{const f=s[s.length-1];t.parentElement.insertBefore(u,(f||t).nextSibling),s.push(u)}}),n.subscribeToInsert((r,i)=>{const u=e(i,r);s[r].parentElement.insertBefore(u,s[r]),s.splice(r,0,u)}),n.subscribeToMove((r,i)=>{const[u]=s.splice(r,1);t.parentElement.removeChild(u),t.parentElement.insertBefore(s[r],u),s.splice(i,0,u)}),[t,...s]}function H(n,...e){const t=document.createElement("div");let s=n[0];for(let i=0;i<e.length;i++)s+=e[i]+n[i+1];t.innerHTML=s;const r=[];for(const i of t.childNodes)r.push(i);return r}const M=new URL(location.href).searchParams;function I(){M.set("i",b.map(n=>`${F[n.item.value]}${n.enchantments.reduce((e,t)=>e+_.find(s=>s.name===t.type.value).id+t.level.value,"")}`).join("-")),history.replaceState(null,"",`${location.pathname}?${M}`)}function W(n,e){const t=new V(n);t.subscribeToInsert(I),t.subscribeToRemoveAt(I),t.subscribeToSet(I);const s=new v(e);return s.subscribe(I,!1),{enchantments:t,item:s}}function Y(n,e){const t=new v(n),s=new v(e);return t.subscribe(I,!1),s.subscribe(I,!1),{type:t,level:s}}const b=new V(M.get("i")?M.get("i").split("-").map(n=>{const e=n.substring(1).match(/.{2}/g);return W(e?e.map(t=>Y(_.find(s=>s.id===t[0]).name,+t[1])):[],Object.keys(F).find(t=>F[t]===n[0]))}):[]);b.subscribeToInsert(I);b.subscribeToRemoveAt(I);b.subscribeToSet(I);const se=["0","I","II","III","IV","V"];function ne(){b.add(W([],"Book"))}const re=H`
    <svg width="16" height="16" viewBox="0 0 16 16" class="fill-none stroke-gray-900 dark:stroke-gray-200" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7L8 12L13 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`[1],oe=H`
    <svg width="16" height="16" viewBox="0 0 16 16" class="fill-none stroke-gray-900 dark:stroke-gray-200" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10L8 5L13 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`[1];function $({children:n,className:e,reference:t,...s}){const r=y`
        <button
            class="select-none px-3 py-0.5 rounded-full bg-gray-400/10 hover:bg-gray-400/20 transition flex items-center gap-1"
        >
            ${n}
        </button>
    `[1];return t&&t(r),Object.assign(r,s),e&&r.classList.add(...e.split(" ")),r}function j({options:n,target:e}){const t=new v(!1),s=re.cloneNode(!0),r=oe.cloneNode(!0);t.subscribe(f=>{f?(s.style.display="none",r.style.display="block"):(s.style.display="block",r.style.display="none",document.onmousedown=null)});let i=y`
        <div
            class=${t.derive(f=>{let m;if(f){const B=u.getBoundingClientRect();m=B.y+B.height+320>window.innerHeight?"bottom-[calc(100%+.5rem)]":"top-[calc(100%+.5rem)]"}else m="hidden";return`${m} z-10 absolute shadow-xl dark:shadow-none shadow-black/20 border border-gray-200 rounded-lg w-60 max-h-80 overflow-y-auto bg-white dark:bg-gray-800 dark:border-gray-700`})}>
            ${n.derive(f=>f.map(m=>y`
                <button onclick=${()=>{t.value=!1,e.value=m}} class="px-3 py-0.5 block hover:bg-indigo-600 hover:text-white w-full text-left">${m}
                </button>
            `[1]))}
        </div>
    `[1],u;return y`
        <div class="relative select-none">
            <${$}
                onclick=${f=>{t.value=!t.value,document.onmousedown=m=>{f.target!==m.target&&m.target!==i&&!i.contains(m.target)&&(t.value=!1)}}}
                reference=${f=>u=f}
            >
                ${e}
                ${s}
                ${r}
            </${$}>
            ${i}
        </div>
    `}const G=new Worker("worker.js",{type:"module"}),ie=new v(Object.keys(F).sort()),z=new v(void 0),C=new v(!1);C.subscribe(n=>{if(!n){z.value=void 0;return}G.postMessage(M.get("i"))});G.onmessage=n=>{n.data.success?z.value={totalCost:n.data.totalCost,steps:n.data.steps.map(e=>({cost:e.cost,target:D.unpack(e.target),sacrifice:D.unpack(e.sacrifice),result:D.unpack(e.result)}))}:z.value=n.data.error};function Z({item:n}){return H`
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
            <h1 class="font-semibold mr-auto text-black dark:text-white select-none">Items (${(()=>{const n=new v(b.length),e=()=>n.value=b.length;return b.subscribeToInsert(e),b.subscribeToRemoveAt(e),b.subscribeToSet(e),n})()}) To Combine:</h1>
            ${Q(b,n=>y`
                <div
                    class="border bg-white border-gray-200 pt-4 pb-2 rounded-lg dark:border-gray-700 dark:bg-gray-800/50">
                    <div class="flex gap-4 mb-2 pb-4 mx-4 items-center border-b border-gray-200 dark:border-gray-700">
                        <img alt="" class="w-8 h-8 [image-rendering:pixelated]"
                             src=${n.item.derive(e=>`${e.toLowerCase().replaceAll(" ","_")}.png`)}></img>
                        <${j} options=${ie} target=${n.item}></${j}>
                        <${$} onclick=${()=>{n.enchantments.add(Y("Mending",1))}}>+ Add Enchantment
                        </${$}>
                        <${$} onclick=${()=>{b.removeIf(e=>e===n)}} className="ml-auto">
                            Delete Item
                        </${$}>
                    </div>
                    <div>
                        ${Q(n.enchantments,e=>y`
                            <div
                                class=${ee([e.level,e.type],([t,s])=>`${J(s).maxLevel<t?"bg-yellow-300 ":""}flex gap-4 py-2 px-4`)}>
                                <${j}
                                    options=${n.item.derive(t=>t==="Book"?_.map(s=>s.name).sort():_.filter(s=>s.applicable.indexOf(t)!==-1).map(s=>s.name).sort())}
                                    target=${e.type}
                                ></${j}>
                                <${j}
                                    options=${e.type.derive(t=>new Array(J(t).maxLevel).fill(0).map((s,r)=>r+1))}
                                    target=${e.level}
                                ></${j}>
                                <${$} className="ml-auto" onclick=${()=>{n.enchantments.removeIf(t=>t===e)}}>Remove
                                </${$}>
                            </div>
                        `[1])}
                    </div>
                </div>
            `[1])}
        </div>
        <div class=${C.derive(n=>n?"":"hidden")}>
            ${z.derive(n=>typeof n=="object"?y`
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
