import {Observable, ObservableArray} from "./observable.ts";

class ParseEnvironment {
    nextIndex = 0;
    si = 0;
    strings: TemplateStringsArray;
    nextValueIndex = 0;
    values: any[];
    // @ts-ignore
    char: string;

    constructor(strings: TemplateStringsArray, values: any[]) {
        this.strings = strings;
        this.values = values;
    }

    next() {
        this.char = this.strings[this.si][this.nextIndex];
        this.nextIndex++;
        return this.char;
    }

    skipWS() {
        while(wsRegExp.test(this.char) && this.hasNext()) this.next();
    }

    hasNext() {
        return this.strings[this.si].length > this.nextIndex;
    }

    getNextValue() {
        this.nextIndex = 0;
        this.nextValueIndex++;
        this.si++;
        return this.values[this.nextValueIndex - 1];
    }

    hasNextValue() {
        return this.values.length > this.nextValueIndex;
    }
}

export function html(strings: TemplateStringsArray, ...values: any[]): Node[] {
    const env = new ParseEnvironment(strings, values);

    const [nodes, tail] = parseMultipleAny(env);

    if(tail) throw new Error("End tag without a starting tag");

    return nodes;
}

const wsRegExp = /\s/;

function parseElement(env: ParseEnvironment): HTMLElement[] {
    if(!env.char) {
        const fn = env.getNextValue();
        env.next();

        if(typeof fn !== "function")
            throw new Error("Provided component is not a function");

        const params: {children?: Node[]} = {};
        parseAttributes(env, params);

        let tail: string | Function | undefined;
        [params.children, tail] = parseMultipleAny(env);

        if(fn !== tail)
            throw new Error(`Start and end tags of component do not match`);

        return fn(params);
    } else { // native
        let tagName = env.char;
        while(true) {
            env.next();
            if(env.char === ">" || wsRegExp.test(env.char)) break;
            tagName += env.char;
        }

        const element = document.createElement(tagName);
        parseAttributes(env, element);

        const [nodes, tail] = parseMultipleAny(env);

        if(tail !== tagName)
            throw new Error(`Start and end tags of native HTML element ${tail} do not match`);

        element.append(...nodes);

        return [element];
    }
}

function parseAttributes(env: ParseEnvironment, store: object) {
    // attributes
    while(true) {
        // key
        env.skipWS();
        let key = "";

        while(true) {
            if(env.char === ">" || env.char === "/") {
                // @ts-ignore
                if(key !== "") store[key] = "";
                return;
            }

            if(env.char === "=") break;

            if(wsRegExp.test(env.char)) {
                env.skipWS();
                if(env.char !== "=") throw new Error(JSON.stringify(env));
                break;
            }
            key += env.char;
            env.next();
        }

        env.next();
        let value: any;

        // TypeScript does not realize that env.next() modifies env.char (internally)
        // @ts-ignore
        if(env.char === "\"" || env.char === "'") { // string value
            const quote: string = env.char;
            value = "";
            env.next();
            // same here, smart cast is not right
            while(env.char !== quote) {
                value += env.char;
                env.next();
            }
        } else if(!env.char) // template value
            value = env.getNextValue();
        else { // unquoted value
            value = "";
            env.next();
            while(!wsRegExp.test(env.char)) {
                value += env.char;
                env.next();
            }
        }
        env.next();

        if(key === "class") key = "className";

        if(value instanceof Observable && store instanceof HTMLElement)
        // @ts-ignore
            value.subscribe(value => store[key] = value);
        else if(key === "self" && store instanceof HTMLElement)
            value(store);
        // @ts-ignore
        else store[key] = value;
    }
}

function skipComment(env: ParseEnvironment) {
    if(env.next() !== "-" || env.next() !== "-")
        throw new Error("TODO");

    while(env.next() === "-" && env.next() === "-" && env.next() === ">") {
    }
}

function parseMultipleAny(env: ParseEnvironment): [Node[], (string | Function)?] {
    const nodes = [];
    // for(let j = 0; j < 20; j++)
    while(true) {
        const nodesToAdd = parseAny(env);
        if(typeof nodesToAdd === "string" || typeof nodesToAdd === "function")
            return [nodes, nodesToAdd];
        if(nodesToAdd) nodes.push(...nodesToAdd);
        if(!env.hasNextValue() && !env.hasNext())
            return [nodes];
    }
}

function parseAny(env: ParseEnvironment): Node[] | void | string | Function {
    env.next();
    let skippedInitialWS = false;
    if(wsRegExp.test(env.char)) {
        skippedInitialWS = true;
        env.next();
        env.skipWS();
    }

    if(env.char === "<") {
        if(env.next() === "!") return skipComment(env);
        // @ts-ignore
        else if(env.char === "/") {
            if(!env.next()) {
                const fn = env.getNextValue();
                env.next(); // fetches first char for skipWS()
                env.skipWS();

                // @ts-ignore smart cast is false
                if(env.char !== ">") throw new Error("Expected '>'");
                return fn;
            } else {
                // smart cast is false
                let tagName = env.char;

                while(true) {
                    if(env.next() === ">") break;

                    // smart cast is false
                    if(wsRegExp.test(env.char)) {
                        env.skipWS();

                        // @ts-ignore smart cast is false
                        if(env.char !== ">") throw new Error("Expected '>'");
                        break;
                    }

                    // @ts-ignore
                    tagName += env.char;
                }

                return tagName;
            }
        // @ts-ignore
        } else if(env.char === ">") throw new Error("Fragments are not supported");
        else {
            const nodes = parseElement(env) as Node[];
            if(skippedInitialWS)
                nodes.splice(0, 0, document.createTextNode(" "));
            return nodes;
        }
    } else if(env.hasNext()) {
        let text = (skippedInitialWS ? " " : "") + env.char;
        while(env.hasNext()) {
            env.next();
            if(wsRegExp.test(env.char)) {
                text += " ";
                env.next();
                env.skipWS();
                if(env.char === "<") {
                    env.nextIndex--;
                    break;
                } else if(!env.hasNext()) break;
            } else if(env.char === "<") {
                env.nextIndex--;
                break;
            }

            text += env.char;
        }
        return [document.createTextNode(text)];
    } else if(env.hasNextValue()) {
        const nodes = [];

        if(skippedInitialWS) nodes.push(document.createTextNode(" "));

        const value = env.getNextValue();

        if(value instanceof Observable) {
            const node = document.createTextNode(value.value);
            value.subscribe(value => node.textContent = value, false);
            nodes.push(node);
        } else if(value instanceof Node)
            nodes.push(value);
        else if(value instanceof Array && (value.length === 0 || value[0] instanceof Node))
            nodes.push(...value);
        else
            nodes.push(document.createTextNode(value + ""));

        return nodes;
    } else return [];
}

export function insert(nodes: Observable<Node[]>) {
    const anchor = document.createComment("");
    const oldNodes = [...nodes.value];
    anchor.after(...oldNodes);

    nodes.subscribe(nodes => {
        for(let oldNode of oldNodes)
            anchor.parentElement!.removeChild(oldNode);
        oldNodes.splice(0, oldNodes.length);
        oldNodes.push(...nodes);
        anchor.after(...nodes);
    }, false);

    return [anchor, ...nodes.value];
}

export function map<E>(
    array: ObservableArray<E>,
    mapper: (element: E, index: number) => Node
): Node[] {
    const anchor = document.createComment("");
    const nodes = array.map(mapper);

    array.subscribeToRemoveAt(index => {
        const [node] = nodes.splice(index, 1);
        node.parentElement!.removeChild(node);
    });

    array.subscribeToSet((index, element) => {
        const mapped = mapper(element, index);

        if(index < nodes.length) {
            anchor.parentElement!.replaceChild(nodes[index], nodes[index]);
            nodes[index] = mapped;
        } else {
            const last = nodes[nodes.length - 1];
            anchor.parentElement!.insertBefore(mapped, (last ? last : anchor).nextSibling);
            nodes.push(mapped);
        }
    });

    array.subscribeToInsert((index, element) => {
        const mapped = mapper(element, index);
        nodes[index].parentElement!.insertBefore(mapped, nodes[index]);
        nodes.splice(index, 0, mapped);
    });

    return [anchor, ...nodes];
}