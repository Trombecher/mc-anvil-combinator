import "./main.css";
import {html, insert, map} from "./lib.ts";
import {Observable, ObservableArray, reduce} from "./observable.ts";
import {
    best,
    Branch,
    bruteForceOptimized,
    enchantmentTypes,
    getEnchantmentType,
    Item,
    itemTypes
} from "./mceb.ts";

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

function fromHTML(html: string) {
    const dummy = document.createElement("div");
    dummy.innerHTML = html;
    return dummy.children[0];
}

function staticHTML(html: string) {
    const dummy = document.createElement("div");
    dummy.innerHTML = html;
    const nodes: Node[] = [];
    for(const node of dummy.childNodes)
        nodes.push(node);
    return nodes;
}

const downArrow = fromHTML(`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 7L8 12L13 7" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`);

const upArrow = fromHTML(`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10L8 5L13 10" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`);

function Button({children, className, reference, ...attributes}: {children: Node[], reference: (self: HTMLElement) => void, className: string}) {
    const button = html`
        <button
            class="px-3 py-0.5 rounded-full bg-gray-600/10 hover:bg-gray-600/20 transition flex items-center gap-1"
        >
            ${children}
        </button>
    `[1] as HTMLElement;
    if(reference)
        reference(button);
    Object.assign(button, attributes);
    if(className)
        button.classList.add(...className.split(" "));
    return [button];
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
    })

    let selector: HTMLElement;
    let button: HTMLElement;

    return html`
        <div class="relative select-none">
            <${Button}
                onclick=${(be: Event) => {
                    open.value = !open.value;
                    document.onmousedown = e => {
                        if(be.target !== e.target && (e.target !== selector && !selector.contains(e.target as Node)))
                            open.value = false;
                    }
                }}
                reference=${(self: HTMLElement) => button = self}
            >
                ${target}
                ${downArrowClone}
                ${upArrowClone}
            </${Button}>
            <div
                self=${(self: HTMLElement) => selector = self}
                class=${open.derive(open => {
                    let conditional: string;
                    if(open) {
                        const rect = button.getBoundingClientRect();
                        conditional = rect.y + rect.height + 320 > window.innerHeight ? "bottom-[calc(100%+.5rem)]" : "top-[calc(100%+.5rem)]";
                    } else conditional = "hidden";
                    return `${conditional} z-10 absolute shadow-xl shadow-black/20 border border-gray-200 rounded-lg w-60 max-h-80 overflow-y-auto bg-white`;
                })}>
                ${insert(options.derive(options => options.map(option => html`
                    <button onclick=${() => {
                        open.value = false;
                        target.value = option;
                    }} class="px-3 py-0.5 block hover:bg-indigo-600 hover:text-white w-full text-left">${option}
                    </button>
                `[1])))}
            </div>
        </div>
    `;
}

const itemNames = new Observable(Object.keys(itemTypes).sort());

const output = new Observable(false);
output.subscribe(output => {
    if(!output) return;

    bestBranch.value = best(bruteForceOptimized(items.map(item => {
        const itemData = new Item(item.item.value)

        itemData.enchantments = item.enchantments.map(enchantment => ({
            level: enchantment.level.value,
            type: getEnchantmentType(enchantment.type.value)
        }));

        return itemData;
    })));
});

// @ts-ignore
const bestBranch: Observable<Branch | null> = new Observable(null);

function UIItem({item}: {item: Item}) {
    return `
        <div class="table-cell">
            <h3>${item.item}</h3>
            ${item.enchantments.map(enchantment => `
                <div>${enchantment.type.name} ${roman[enchantment.level]}</div>
            `).join("")}
        </div>
    `;
}

document.querySelector("#app")!.append(...html`
    <header class="py-6 bg-white/30 backdrop-blur-xl z-10 backdrop:saturate-200 sticky top-0 w-full flex justify-center gap-4 items-center">
        <${Button} onclick=${addDefaultItem}>+ Add Item</${Button}>
        <div class="flex rounded-full bg-gray-600/10 p-1 gap-2">
            <button class=${output.derive(output => `${output ? "" : "bg-gray-600/20 "}rounded-full px-4 hover:bg-gray-600/10 transition`)} onclick=${() => output.value = false}>Input</button>
            <button class=${output.derive(output => `${output ? "bg-gray-600/20 " : ""}rounded-full px-4 hover:bg-gray-600/10 transition`)} onclick=${() => output.value = true}>Calculate</button>
        </div>
    </header>
    <main class="max-w-screen-md w-full px-6">
        <div class=${output.derive(output => `${output ? "hidden" : ""} flex flex-col gap-4`)}>
            ${map(items, item => html`
                <div class="border border-gray-200 pt-4 pb-2 rounded-lg">
                    <div class="flex gap-4 mb-2 pb-4 mx-4 items-center border-b">
                        <img alt="" class="w-8 h-8 [image-rendering:pixelated]" src=${item.item.derive(item => `/${item.toLowerCase().replaceAll(" ", "_")}.png`)}></img>
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
            ${insert(bestBranch.derive(branch => branch ? staticHTML(`
                <h1 class="text-lg">Branch with total cost: ${branch.totalCost}</h1>
                <div class="grid [grid-template-columns:min-content_min-content_1fr_1fr_1fr] gap-4">
                    <div>Step</div>
                    <div>Cost</div>
                    <div>Target</div>
                    <div>Sacrifice</div>
                    <div>Result</div>
                    ${branch.steps.map((step, index) => `
                        <div class="table-cell">${index + 1}</div>
                        <div class="table-cell">${step.cost}</div>
                        ${UIItem({item: step.target})}
                        ${UIItem({item: step.sacrifice})}
                        ${UIItem({item: step.result})}
                    `).join("")}
                </div>
            `) : []))}
        </div>
    </main>
    <footer class="p-6 text-gray-400 font-light mt-auto">
        © Trombecher ${new Date().getFullYear()}. All Rights Reserved.
    </footer>
`);

// http://localhost:5173/?i=F-XP5-XJ5-XQ1-XR3-Xa1