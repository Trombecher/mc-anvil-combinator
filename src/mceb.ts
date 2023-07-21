export type EnchantmentType = {
    maxLevel: number,
    applicable: string[],
    incompatible: string[],
    itemMultiplier: number,
    bookMultiplier: number,
    name: string,
    id: string
};

export const enchantmentTypes: EnchantmentType[] = [
    {
        name: "Protection",
        id: "A",
        maxLevel: 4,
        applicable: ["Helmet", "Chestplate", "Leggings", "Boots"],
        itemMultiplier: 1,
        bookMultiplier: 1,
        incompatible: ["Fire Protection", "Blast Protection", "Projectile Protection"]
    }, {
        name: "Fire Protection",
        id: "B",
        maxLevel: 4,
        applicable: ["Helmet", "Chestplate", "Leggings", "Boots"],
        itemMultiplier: 2,
        bookMultiplier: 1,
        incompatible: ["Protection", "Blast Protection", "Projectile Protection"]
    }, {
        name: "Feather Falling",
        id: "C",
        maxLevel: 4,
        applicable: ["Boots"],
        itemMultiplier: 2,
        bookMultiplier: 1,
        incompatible: []
    }, {
        name: "Blast Protection",
        id: "D",
        maxLevel: 4,
        applicable: ["Helmet", "Chestplate", "Leggings", "Boots"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: ["Protection", "Fire Protection", "Projectile Protection"]
    }, {
        name: "Projectile Protection",
        id: "E",
        maxLevel: 4,
        applicable: ["Helmet", "Chestplate", "Leggings", "Boots"],
        itemMultiplier: 2,
        bookMultiplier: 1,
        incompatible: ["Protection", "Fire Protection", "Blast Protection"]
    }, {
        name: "Thorns",
        id: "F",
        maxLevel: 3,
        applicable: ["Helmet", "Chestplate", "Leggings", "Boots"],
        itemMultiplier: 8,
        bookMultiplier: 4,
        incompatible: []
    }, {
        name: "Respiration",
        id: "G",
        maxLevel: 3,
        applicable: ["Helmet"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }, {
        name: "Depth Strider",
        id: "H",
        maxLevel: 3,
        applicable: ["Boots"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: ["Frost Walker"]
    }, {
        name: "Aqua Affinity",
        id: "I",
        maxLevel: 1,
        applicable: ["Helmet"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }, {
        name: "Sharpness",
        id: "J",
        maxLevel: 5,
        applicable: ["Sword", "Axe"],
        itemMultiplier: 1,
        bookMultiplier: 1,
        incompatible: ["Smite", "Bane of Arthropods"]
    }, {
        name: "Smite",
        id: "K",
        maxLevel: 5,
        applicable: ["Sword", "Axe"],
        itemMultiplier: 2,
        bookMultiplier: 1,
        incompatible: ["Sharpness", "Bane of Arthropods"]
    }, {
        name: "Bane of Arthropods",
        id: "L",
        maxLevel: 5,
        applicable: ["Sword", "Axe"],
        itemMultiplier: 2,
        bookMultiplier: 1,
        incompatible: ["Smite", "Sharpness"]
    }, {
        name: "Knockback",
        id: "M",
        maxLevel: 2,
        applicable: ["Sword"],
        itemMultiplier: 2,
        bookMultiplier: 1,
        incompatible: []
    }, {
        name: "Fire Aspect",
        id: "N",
        maxLevel: 2,
        applicable: ["Sword"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }, {
        name: "Looting",
        id: "O",
        maxLevel: 3,
        applicable: ["Sword"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }, {
        name: "Efficiency",
        id: "P",
        maxLevel: 5,
        applicable: ["Pickaxe", "Shovel", "Axe", "Hoe", "Shears"],
        itemMultiplier: 1,
        bookMultiplier: 1,
        incompatible: []
    }, {
        name: "Silk Touch",
        id: "Q",
        maxLevel: 1,
        applicable: ["Pickaxe", "Shovel", "Axe", "Hoe"],
        itemMultiplier: 8,
        bookMultiplier: 4,
        incompatible: ["Fortune"]
    }, {
        name: "Unbreaking",
        id: "R",
        maxLevel: 3,
        applicable: [
            "Sword",
            "Pickaxe",
            "Shovel",
            "Axe",
            "Hoe",
            "Fishing Rod",
            "Helmet",
            "Chestplate",
            "Leggings",
            "Boots",
            "Bow",
            "Shears",
            "Flint and Steel",
            "Carrot on a Stick",
            "Warped Fungus on a Stick",
            "Shield",
            "Elytra",
            "Trident",
            "Crossbow"
        ],
        itemMultiplier: 2,
        bookMultiplier: 1,
        incompatible: []
    }, {
        name: "Fortune",
        id: "S",
        maxLevel: 3,
        applicable: ["Pickaxe", "Shovel", "Axe", "Hoe"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: ["Silk Touch"]
    }, {
        name: "Power",
        id: "T",
        maxLevel: 5,
        applicable: ["Bow"],
        itemMultiplier: 1,
        bookMultiplier: 1,
        incompatible: []
    }, {
        name: "Punch",
        id: "U",
        maxLevel: 2,
        applicable: ["Bow"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }, {
        name: "Flame",
        id: "V",
        maxLevel: 1,
        applicable: ["Bow"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }, {
        name: "Infinity",
        id: "W",
        maxLevel: 1,
        applicable: ["Bow"],
        itemMultiplier: 8,
        bookMultiplier: 4,
        incompatible: ["Mending"]
    }, {
        name: "Luck of the Sea",
        id: "X",
        maxLevel: 3,
        applicable: ["Fishing Rod"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }, {
        name: "Lure",
        id: "Y",
        maxLevel: 3,
        applicable: ["Fishing Rod"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }, {
        name: "Frost Walker",
        id: "Z",
        maxLevel: 2,
        applicable: ["Boots"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: ["Depth Strider"]
    }, {
        name: "Mending",
        id: "a",
        maxLevel: 1,
        applicable: [
            "Sword",
            "Pickaxe",
            "Shovel",
            "Axe",
            "Hoe",
            "Fishing Rod",
            "Helmet",
            "Chestplate",
            "Leggings",
            "Boots",
            "Bow",
            "Shears",
            "Flint and Steel",
            "Carrot on a Stick",
            "Warped Fungus on a Stick",
            "Shield",
            "Elytra",
            "Trident",
            "Crossbow"
        ],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: ["Infinity"]
    }, {
        name: "Curse of Binding",
        id: "b",
        maxLevel: 1,
        applicable: [
            "Helmet",
            "Chestplate",
            "Leggings",
            "Boots",
            "Elytra",
            "Carved Pumpkin",
            "Head"
        ],
        itemMultiplier: 8,
        bookMultiplier: 4,
        incompatible: []
    }, {
        name: "Curse of Vanishing",
        id: "c",
        maxLevel: 1,
        applicable: [
            "Sword",
            "Pickaxe",
            "Shovel",
            "Axe",
            "Hoe",
            "Fishing Rod",
            "Helmet",
            "Chestplate",
            "Leggings",
            "Boots",
            "Bow",
            "Shears",
            "Flint and Steel",
            "Carrot on a Stick",
            "Warped Fungus on a Stick",
            "Shield",
            "Elytra",
            "Trident",
            "Crossbow",
            "Carved Pumpkin",
            "Head",
            "Compass",
            "Recovery Compass"
        ],
        itemMultiplier: 8,
        bookMultiplier: 4,
        incompatible: []
    }, {
        name: "Impaling",
        id: "d",
        maxLevel: 5,
        applicable: ["Trident"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }, {
        name: "Riptide",
        id: "e",
        maxLevel: 3,
        applicable: ["Trident"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: ["Loyalty", "Channeling"]
    }, {
        name: "Loyalty",
        id: "f",
        maxLevel: 3,
        applicable: ["Trident"],
        itemMultiplier: 1,
        bookMultiplier: 1,
        incompatible: ["Riptide"]
    }, {
        name: "Channeling",
        id: "g",
        maxLevel: 1,
        applicable: ["Trident"],
        itemMultiplier: 8,
        bookMultiplier: 4,
        incompatible: ["Riptide"]
    }, {
        name: "Multishot",
        id: "h",
        maxLevel: 1,
        applicable: ["Crossbow"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: ["Piercing"]
    }, {
        name: "Piecing",
        id: "i",
        maxLevel: 4,
        applicable: ["Crossbow"],
        itemMultiplier: 1,
        bookMultiplier: 1,
        incompatible: ["Multishot"]
    }, {
        name: "Quick Charge",
        id: "j",
        maxLevel: 3,
        applicable: ["Crossbow"],
        itemMultiplier: 2,
        bookMultiplier: 1,
        incompatible: []
    }, {
        name: "Soul Speed",
        id: "k",
        maxLevel: 3,
        applicable: ["Boots"],
        itemMultiplier: 8,
        bookMultiplier: 4,
        incompatible: []
    }, {
        name: "Swift Sneak",
        id: "l",
        maxLevel: 3,
        applicable: ["Leggings"],
        itemMultiplier: 8,
        bookMultiplier: 4,
        incompatible: []
    }, {
        name: "Sweeping Edge",
        id: "m",
        maxLevel: 3,
        applicable: ["Sword"],
        itemMultiplier: 4,
        bookMultiplier: 2,
        incompatible: []
    }
];

export const itemTypes: {[index: string]: string} = {
    Helmet: "A",
    Chestplate: "B",
    Leggings: "C",
    Boots: "D",
    Sword: "E",
    Axe: "F",
    Pickaxe: "G",
    Shovel: "H",
    Hoe: "I",
    Shears: "J",
    "Fishing Rod": "K",
    Bow: "L",
    "Flint and Steel": "M",
    "Carrot on a Stick": "N",
    "Warped Fungus on a Stick": "O",
    Shield: "P",
    Elytra: "Q",
    Trident: "R",
    Crossbow: "S",
    "Carved Pumpkin": "T",
    Head: "U",
    Compass: "V",
    "Recovery Compass": "W",
    Book: "X"
};

export type Enchantment = {
    type: EnchantmentType,
    level: number
}

export class Item {
    enchantments: Enchantment[] = [];
    priorWorkPenalty = 0;
    item: string;

    constructor(item: string) {
        this.item = item;
    }

    toString() {
        return `${this.item}(${this.enchantments.join(", ")}) (${this.priorWorkPenalty})`;
    }

    addEnchantment(name: string, level: number) {
        this.enchantments.push({
            type: enchantmentTypes.find(e => e.name === name)!,
            level
        });
    }

    static unpack(pack: string) {
        const item = new Item(Object.keys(itemTypes).find(key => itemTypes[key] === pack[0])!);

        const eps = pack.substring(1).match(/.{2}/g);

        if(eps) item.enchantments = eps.map(ep => ({
            type: enchantmentTypes.find(e => e.id === ep[0])!,
            level: +ep[1]
        }));

        return item;
    }

    pack() {
        return `${itemTypes[this.item]}${this.enchantments.reduce((acc, e) => acc + e.type.id + e.level, "")}`;
    }
}

export const combine = (target: Item, sacrifice: Item) => {
    if(target.item !== sacrifice.item && sacrifice.item !== "Book")
        throw new Error(`Cannot combine items ${target.item} and ${sacrifice.item}`);

    const step: Step = {
        target,
        sacrifice,
        result: new Item(target.item),
        cost: target.priorWorkPenalty + sacrifice.priorWorkPenalty
    };

    const pack = target.pack() + sacrifice.pack();
    const lookup = cache.get(pack);

    if(lookup) {
        step.result.enchantments.push(...lookup.result.enchantments);
        step.result.priorWorkPenalty = Math.max(target.priorWorkPenalty, sacrifice.priorWorkPenalty) * 2 + 1;
        step.cost = lookup.cost
            - lookup.target.priorWorkPenalty
            - lookup.sacrifice.priorWorkPenalty
            + step.target.priorWorkPenalty
            + step.sacrifice.priorWorkPenalty;
        return step;
    }

    step.result.enchantments.push(...target.enchantments);
    step.result.priorWorkPenalty = Math.max(target.priorWorkPenalty, sacrifice.priorWorkPenalty) * 2 + 1;

    // Calculate resulting enchantments and enchantment cost
    for(const sacrificeEnchantment of sacrifice.enchantments) {
        if(target.item !== "Book" && sacrificeEnchantment.type.applicable.indexOf(target.item) === -1)
            continue;

        let match: Enchantment | null = null;
        let compatible = true;

        for(const resultEnchantment of step.result.enchantments) {
            if(sacrificeEnchantment.type.incompatible.indexOf(resultEnchantment.type.name) > 0) {
                step.cost += 1;
                compatible = false;
                break;
            }

            if(resultEnchantment.type === sacrificeEnchantment.type) {
                match = resultEnchantment;
                break;
            }
        }

        if(!compatible) break;

        if(!match) {
            match = {
                type: sacrificeEnchantment.type,
                level: sacrificeEnchantment.level
            };
            step.result.enchantments.push(match);
        } else if(match.level < sacrificeEnchantment.level)
            match.level = sacrificeEnchantment.level;
        else if(match.level === sacrificeEnchantment.level &&
            match.level < match.type.maxLevel)
            match.level++;

        step.cost += (sacrifice.item === "Book" ?
            match.type.bookMultiplier
            : match.type.itemMultiplier) * match.level;
    }

    cache.set(pack, step);

    return step;
};

const cache = new Map<string, Step>();

export type Step = {
    target: Item,
    sacrifice: Item,
    result: Item,
    cost: number
}

export type Branch = {
    steps: Step[],
    totalCost: number
}

// return `Branch with total cost: ${this.totalCost} Level:\n${this.steps.map((step, i) => `Step ${i}: ${step}`).join("\n")}`;

/**
 * Runtime: O((n!)^2)
 */
export function bruteForce(items: Item[]): Branch {
    const branches: Branch[] = [];

    for(let i = 0; i < items.length; i++) {
        for(let j = i + 1; j < items.length; j++) {
            let result1, result2, error;

            try {
                result1 = combine(items[i], items[j]);
            } catch(e) {
                error = e;
            }

            try {
                result2 = combine(items[j], items[i]);
            } catch(e) {
                if(error) throw e;
            }

            const newItems = items.filter((_, index) => !(index === i || index === j));
            newItems.push((result1 || result2)!.result);

            const chosen = result1 && result2 ? (result1.cost < result2.cost ? result1 : result2) : (result1 || result2)!;

            const branch: Branch = newItems.length === 1 ?
                {steps: [], totalCost: 0}
                : bruteForce(newItems);

            branch.steps.push(chosen);
            branch.totalCost += chosen.cost;

            branches.push(branch);
        }
    }

    let min: Branch | null = null;
    for(const branch of branches)
        if(!min || branch.totalCost < min.totalCost)
            min = branch;

    return min!;
}

export function bruteForceOptimized(items: Item[]): Branch[] {
    if(items.length === 2) {
        const branch: Branch = {
            steps: [],
            totalCost: 0
        };

        let addRightToLeft, addLeftToRight, error;

        try {
            addRightToLeft = combine(items[0], items[1]);
        } catch(e) {
            error = e;
        }

        try {
            addLeftToRight = combine(items[1], items[0]);
        } catch(e) {
            if(error) throw e;
        }

        const chosen = addRightToLeft && addLeftToRight ?
            (addRightToLeft.cost < addLeftToRight.cost ? addRightToLeft : addLeftToRight) :
            (addRightToLeft || addLeftToRight)!;

        branch.steps.push(chosen);
        branch.totalCost = chosen.cost;
        return [branch];
    }

    /** @type {Branch[]} */
    const branches = [];

    for(let split = 0; split < (items.length - 1) / 2; split++) {
        const collect: Item[][][] = [];

        distribution(items, collect, split + 1);

        for(const lr of collect) {
            const leftBranches = split === 0 ?
                [{steps: [], totalCost: 0}]
                : bruteForceOptimized(lr[0]);
            const rightBranches = bruteForceOptimized(lr[1]);

            for(const leftBranch of leftBranches) {
                for(const rightBranch of rightBranches) {
                    const leftItem = split === 0 ? lr[0][0] : leftBranch.steps.at(-1)!.result;
                    const rightItem = rightBranch.steps.at(-1)!.result;

                    let addRightToLeft, addLeftToRight, error;

                    try {
                        addRightToLeft = combine(leftItem, rightItem);
                    } catch(e) {
                        error = e;
                    }

                    try {
                        addLeftToRight = combine(rightItem, leftItem);
                    } catch(e) {
                        if(error) throw e;
                    }

                    const chosen = addRightToLeft && addLeftToRight ?
                        (addRightToLeft.cost < addLeftToRight.cost ? addRightToLeft : addLeftToRight) :
                        (addRightToLeft || addLeftToRight)!;

                    const newBranch: Branch = {
                        steps: [],
                        totalCost: 0
                    };
                    newBranch.steps.push(...leftBranch.steps, ...rightBranch.steps);
                    newBranch.steps.push(chosen);
                    newBranch.totalCost += leftBranch.totalCost + rightBranch.totalCost + chosen.cost;

                    branches.push(newBranch);
                }
            }
        }
    }

    return branches;
}

export function best(branches: Branch[]) {
    let min = null;
    for(const branch of branches)
        if(!min || branch.totalCost < min.totalCost)
            min = branch;
    return min;
}

export function createEnchantedBook(enchantmentName: string, level: number) {
    const book = new Item("Book");
    book.enchantments.push({
        type: getEnchantmentType(enchantmentName),
        level
    });
    return book;
}

export function getEnchantmentType(name: string) {
    return enchantmentTypes.find(e => e.name === name)!;
}

export function distribution<T>(
    previousRight: T[],
    collect: T[][][],
    targetLength: number,
    previousLeft: T[] = [],
    max = previousRight.length
) {
    if(previousLeft.length === targetLength) {
        collect.push([previousLeft, previousRight]);
        return;
    }

    for(let i = 0; i < max; i++) {
        const right = [...previousRight];
        const left = right.splice(i, 1);
        left.push(...previousLeft);
        let l = collect.length;
        distribution(right, collect, targetLength, left, i);
        if(previousLeft.length === previousRight.length) {
            const remove = (l - collect.length) / 2;
            collect.splice(-remove, remove);
        }
    }
}