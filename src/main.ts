import "./main.css";
import {
    Branch,
    enchantmentTypes,
    getEnchantmentType,
    Item,
    itemTypes
} from "./mceb.ts";
import {Message} from "./api.ts";

import {html, map, native} from "azero";
import {Observable, ObservableArray, reduce} from "azero/observable";

type ObservableEnchantment = {
    type: Observable<string>,
    level: Observable<number>
}

type ObservableItem = {
    enchantments: ObservableArray<ObservableEnchantment>,
    item: Observable<string>,
}

const params = new URL(location.href).searchParams;

function generateURL() {
    params.set("i", items.map(item =>
        `${itemTypes[item.item.value]}${item.enchantments.reduce((acc, o) =>
            acc + enchantmentTypes.find(e => e.name === o.type.value)!.id + o.level.value, "")}`).join("-"));
    history.replaceState(null, "", `${location.pathname}?${params}`);
}

function createObservableItem(
    enchantments: ObservableEnchantment[],
    itemName: string
): ObservableItem {
    const observableEnchantments = new ObservableArray(enchantments);

    observableEnchantments.subscribeToInsert(generateURL);
    observableEnchantments.subscribeToRemoveAt(generateURL);
    observableEnchantments.subscribeToSet(generateURL);

    const item = new Observable(itemName);
    item.subscribe(generateURL, false);

    return {
        enchantments: observableEnchantments,
        item
    };
}

function createObservableEnchantment(
    type: string,
    level: number
): ObservableEnchantment {
    const observableType = new Observable(type);
    const observableLevel = new Observable(level);

    observableType.subscribe(generateURL, false);
    observableLevel.subscribe(generateURL, false);

    return {
        type: observableType,
        level: observableLevel
    };
}

const items = new ObservableArray<ObservableItem>(
    params.get("i") ? params.get("i")!.split("-").map(pack => {
        const eps = pack.substring(1).match(/.{2}/g);

        return createObservableItem(
            eps ?
                eps.map(ep => createObservableEnchantment(
                    enchantmentTypes.find(e => e.id === ep[0])!.name,
                    +ep[1]
                )) : [],
            Object.keys(itemTypes).find(key => itemTypes[key] === pack[0])!
        );
    }) : []
);

items.subscribeToInsert(generateURL);
items.subscribeToRemoveAt(generateURL);
items.subscribeToSet(generateURL);

const roman = ["0", "I", "II", "III", "IV", "V"];

function addDefaultItem() {
    items.add(createObservableItem([], "Book"));
}

const downArrow = native`
    <svg width="16" height="16" viewBox="0 0 16 16" class="fill-none stroke-gray-900 dark:stroke-gray-200" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7L8 12L13 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`[1];

const upArrow = native`
    <svg width="16" height="16" viewBox="0 0 16 16" class="fill-none stroke-gray-900 dark:stroke-gray-200" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10L8 5L13 10" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`[1];

function Button({children, className, reference, ...attributes}: {
    children: Node[],
    reference: (self: HTMLElement) => void,
    className: string
}) {
    const button = html`
        <button
            class="select-none px-3 py-0.5 rounded-full bg-gray-400/10 hover:bg-gray-400/20 transition flex items-center gap-1"
        >
            ${children}
        </button>
    `[1] as HTMLElement;
    if(reference)
        reference(button);
    Object.assign(button, attributes);
    if(className)
        button.classList.add(...className.split(" "));
    return button;
}

function SelectBox<T>({options, target}: {options: Observable<T[]>, target: Observable<T>}) {
    const open = new Observable(false);

    const downArrowClone = downArrow.cloneNode(true) as HTMLElement;
    const upArrowClone = upArrow.cloneNode(true) as HTMLElement;

    open.subscribe(open => {
        if(open) {
            downArrowClone.style.display = "none";
            upArrowClone.style.display = "block";
        } else {
            downArrowClone.style.display = "block";
            upArrowClone.style.display = "none";
            document.onmousedown = null;
        }
    });

    let selector = html`
        <div
            class=${open.derive(open => {
                let conditional: string;
                if(open) {
                    const rect = button.getBoundingClientRect();
                    conditional = rect.y + rect.height + 320 > window.innerHeight ? "bottom-[calc(100%+.5rem)]" : "top-[calc(100%+.5rem)]";
                } else conditional = "hidden";
                return `${conditional} z-10 absolute shadow-xl dark:shadow-none shadow-black/20 border border-gray-200 rounded-lg w-60 max-h-80 overflow-y-auto bg-white dark:bg-gray-800 dark:border-gray-700`;
            })}>
            ${options.derive(options => options.map(option => html`
                <button onclick=${() => {
                    open.value = false;
                    target.value = option;
                }} class="px-3 py-0.5 block hover:bg-indigo-600 hover:text-white w-full text-left">${option}
                </button>
            `[1]))}
        </div>
    `[1] as HTMLElement;

    let button: HTMLElement;

    return html`
        <div class="relative select-none">
            <${Button}
                onclick=${(be: Event) => {
                    open.value = !open.value;
                    document.onmousedown = e => {
                        if(be.target !== e.target && (e.target !== selector && !selector.contains(e.target as Node)))
                            open.value = false;
                    };
                }}
                reference=${(self: HTMLElement) => button = self}
            >
                ${target}
                ${downArrowClone}
                ${upArrowClone}
            </${Button}>
            ${selector}
        </div>
    `;
}

const worker = new Worker("worker.js", {type: "module"});

const itemNames = new Observable(Object.keys(itemTypes).sort());

// @ts-ignore
const result: Observable<Branch | string | undefined> = new Observable(undefined);

const output = new Observable(false);
output.subscribe(output => {
    if(!output) {
        result.value = undefined;
        return;
    }

    worker.postMessage(params.get("i"));
});

worker.onmessage = (e: MessageEvent<Message>) => {
    if(e.data.success) {
        result.value = {
            totalCost: e.data.totalCost,
            steps: e.data.steps.map(step => ({
                cost: step.cost,
                target: Item.unpack(step.target),
                sacrifice: Item.unpack(step.sacrifice),
                result: Item.unpack(step.result)
            }))
        };
    } else result.value = e.data.error;
};

function UIItem({item}: {item: Item}) {
    return native`
        <div class="table-cell">
            <h3 class="text-white">${item.item}</h3>
            ${item.enchantments.map(enchantment => `
                <div>${enchantment.type.name} ${roman[enchantment.level]}</div>
            `).join("")}
        </div>
    `;
}

document.querySelector("#app")!.append(...html`
    <header
        class="py-4 bg-gray-100/30 dark:bg-gray-900/30 backdrop-blur-xl z-10 backdrop:saturate-200 sticky top-0 w-full gap-4 flex justify-center">
        <div class="px-6 grid grid-cols-[1fr_min-content_1fr] w-full max-w-screen-md items-center">
            <div class="font-semibold text-black text-lg dark:text-white select-none">Minecraft Anvil Combinator</div>
            <div class="rounded-full bg-gray-400/10 p-1 gap-2 flex">
                <button
                    class=${output.derive(output => `${output ? "" : "bg-gray-400/20 "}rounded-full px-4 hover:bg-gray-400/20 transition`)}
                    onclick=${() => output.value = false}>Input
                </button>
                <button
                    class=${output.derive(output => `${output ? "bg-gray-400/20 " : ""}rounded-full px-4 hover:bg-gray-400/20 transition`)}
                    onclick=${() => output.value = true}>Calculate
                </button>
            </div>
            <div class="flex justify-end">
                <${Button} onclick=${addDefaultItem}>+ Add Item</${Button}>
            </div>
        </div>
    </header>
    <main class="max-w-screen-md w-full px-6">
        <div class=${output.derive(output => `${output ? "hidden" : ""} flex flex-col gap-4`)}>
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
            <h1 class="font-semibold mr-auto text-black dark:text-white select-none">Items (${(() => {
                const observable = new Observable(items.length);
                
                const update = () => observable.value = items.length;
                
                items.subscribeToInsert(update);
                items.subscribeToRemoveAt(update);
                items.subscribeToSet(update);
                
                return observable;
            })()}) To Combine:</h1>
            ${map(items, item => html`
                <div
                    class="border bg-white border-gray-200 pt-4 pb-2 rounded-lg dark:border-gray-700 dark:bg-gray-800/50">
                    <div class="flex gap-4 mb-2 pb-4 mx-4 items-center border-b border-gray-200 dark:border-gray-700">
                        <img alt="" class="w-8 h-8 [image-rendering:pixelated]"
                             src=${item.item.derive(item => `${item.toLowerCase().replaceAll(" ", "_")}.png`)}></img>
                        <${SelectBox} options=${itemNames} target=${item.item}></${SelectBox}>
                        <${Button} onclick=${() => {
                            item.enchantments.add(createObservableEnchantment("Mending", 1));
                        }}>+ Add Enchantment
                        </${Button}>
                        <${Button} onclick=${() => {
                            items.removeIf(i => i === item);
                        }} className="ml-auto">
                            Delete Item
                        </${Button}>
                    </div>
                    <div>
                        ${map(item.enchantments, enchantment => html`
                            <div
                                class=${reduce([enchantment.level, enchantment.type], ([level, type]) =>
                                    `${getEnchantmentType(type).maxLevel < level ? "bg-yellow-300 " : ""}flex gap-4 py-2 px-4`)
                                }>
                                <${SelectBox}
                                    options=${item.item.derive(item => item === "Book" ?
                                        enchantmentTypes.map(type => type.name).sort() :
                                        enchantmentTypes.filter(type =>
                                            type.applicable.indexOf(item) !== -1).map(type =>
                                            type.name).sort())}
                                    target=${enchantment.type}
                                ></${SelectBox}>
                                <${SelectBox}
                                    options=${enchantment.type.derive(type =>
                                        new Array(getEnchantmentType(type).maxLevel).fill(0).map((_, i) =>
                                            i + 1))}
                                    target=${enchantment.level}
                                ></${SelectBox}>
                                <${Button} className="ml-auto" onclick=${() => {
                                    item.enchantments.removeIf(e => e === enchantment);
                                }}>Remove
                                </${Button}>
                            </div>
                        `[1])}
                    </div>
                </div>
            `[1])}
        </div>
        <div class=${output.derive(output => output ? "" : "hidden")}>
            ${result.derive(result => {
                if(typeof result === "object") {
                    return html`
                        <h1 class="text-lg">Branch with total cost: ${result.totalCost}</h1>
                        <div class="grid [grid-template-columns:min-content_min-content_1fr_1fr_1fr] gap-4">
                            <div>Step</div>
                            <div>Cost</div>
                            <div>Target</div>
                            <div>Sacrifice</div>
                            <div>Result</div>
                            ${result.steps.map((step, index) => html`
                                <div class="table-cell">${index + 1}</div>
                                <div class="table-cell">${step.cost}</div>
                                <${UIItem} item=${step.target}/>
                                <${UIItem} item=${step.sacrifice}/>
                                <${UIItem} item=${step.result}/>
                            `).reduce((nodes, node) => (nodes.push(...node), nodes), [])}
                        </div>
                    `;
                }
                
                if(typeof result === "string") {
                    return html`<div>Error: ${result}</div>`;
                }
                
                return html`<div>Loading</div>`;
            })}
        </div>
    </main>
    <footer class="p-6 text-gray-500 text-sm select-none font-light mt-auto">
        © Trombecher ${new Date().getFullYear()}. All Rights Reserved.
    </footer>
`);

// http://localhost:5173/?i=F-XP5-XJ5-XQ1-XR3-Xa1