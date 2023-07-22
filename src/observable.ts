export class ObservableArray<E> implements Iterable<E> {
    readonly #data: E[];

    constructor(init?: E[]) {
        this.#data = init ? init : [];
    }

    [Symbol.iterator]() {
        return this.#data.values();
    }

    reduce<T>(reducer: (accumulator: T, element: E, index: number) => T, initialValue: T) {
        for(let i = 0; i < this.#data.length; i++)
            initialValue = reducer(initialValue, this.#data[i], i);
        return initialValue;
    }

    map<T>(mapper: (element: E, index: number) => T): T[] {
        const map: T[] = [];
        for(let i = 0; i < this.#data.length; i++)
            map.push(mapper(this.#data[i], i));
        return map;
    }

    /**
     * The length of the array.
     */
    get length() {
        return this.#data.length;
    }

    add(element: E): void {
        this.set(this.#data.length, element);
    }

    insert(index: number, element: E) {
        this.#data.splice(index, 0, element);
        for(const notify of this.#onInsert)
            notify(index, element);
    }

    addAll(elements: Iterable<E>): void {
        for(const element of elements) this.add(element);
    }

    entries(): IterableIterator<[number, E]> {
        return this.#data.entries();
    }

    /**
     * @returns true if every element in the array passes the test.
     */
    every(predicate: (value: E, index: number) => unknown): boolean {
        return this.#data.every(predicate);
    }

    /**
     * Changes all values in the given range (start index included, end index not included) to a given value;
     */
    fill(value: E, start?: number, end?: number): this {
        for(let i = start ? start : 0; i < (end ? end : this.#data.length) - 1; i++)
            for(const notify of this.#onSet)
                notify(i, this.get(i));
        this.#data.fill(value, start, end);
        return this;
    }

    removeIf(predicate: (value: E, index: number) => unknown): void {
        let i = this.length;
        while(i--)
            if(predicate(this.#data[i], i))
                this.removeAt(i);
    }

    extractIf(predicate: (value: E, index: number) => unknown): E[] {
        const collect: E[] = [];

        let i = this.length;
        while(i--)
            if(predicate(this.#data[i], i))
                collect.push(this.extractAt(i));

        return collect;
    }

    get(index: number): E {
        return this.#data[index];
    }

    #onRemoveAt: ((index: number) => void)[] = [];

    /**
     * Subscribes to remove events.
     * @returns An function that unsubscribes.
     */
    subscribeToRemoveAt(subscription: (index: number) => void): () => void {
        this.#onRemoveAt.push(subscription);
        return () => this.#onRemoveAt.splice(this.#onSet.indexOf(subscription), 1);
    }

    remove(element: E): boolean {
        const index = this.#data.indexOf(element);
        if(index === -1) return false;
        this.removeAt(index);
        return true;
    }

    removeAt(index: number) {
        this.#data.splice(index, 1);
        for(const notify of this.#onRemoveAt)
            notify(index);
    }

    extractAt(index: number): E {
        for(const notify of this.#onRemoveAt)
            notify(index);
        return this.#data.splice(index, 1)[0];
    }

    readonly #onSet: ((index: number, element: E) => void)[] = [];

    readonly #onInsert: ((index: number, element: E) => void)[] = [];

    readonly #onMove: ((from: number, to: number) => void)[] = [];

    /**
     * Subscribes to move events.
     * @returns A function that unsubscribes.
     */
    subscribeToMove(subscription: (from: number, to: number) => void) {
        this.#onMove.push(subscription);
        return () => {
            const index = this.#onMove.indexOf(subscription);
            if(index !== -1) this.#onMove.splice(index, 1);
        };
    }

    /**
     * Subscribes to insert events.
     * @returns A function that unsubscribes.
     */
    subscribeToInsert(subscription: (index: number, element: E) => void) {
        this.#onInsert.push(subscription);
        return () => {
            const index = this.#onInsert.indexOf(subscription);
            if(index !== -1) this.#onInsert.splice(index, 1);
        };
    }

    /**
     * Subscribes to set events.
     * @returns A function that unsubscribes.
     */
    subscribeToSet(subscription: (index: number, element: E) => void): () => void {
        this.#onSet.push(subscription);
        return () => {
            const index = this.#onSet.indexOf(subscription);
            if(index !== -1) this.#onSet.splice(index, 1);
        };
    }

    /**
     * Moves the item at index _from_ to index _to_.
     * Note, that the element will _result at that exact index_ and nodes will shift _upwards_.
     */
    move(from: number, to: number) {
        this.#data.splice(to, 0, this.#data.splice(from, 1)[0]);
        for(const notify of this.#onMove) notify(from, to);
    }

    set(index: number, element: E): void {
        this.#data[index] = element;
        for(const notify of this.#onSet) notify(index, element);
    }

    clear(): void {
        for(let i = 0; i < this.#data.length; i++)
            for(const notify of this.#onRemoveAt)
                notify(i);
        this.#data.splice(0, this.#data.length);
    }

    contains(element: E): boolean {
        return this.#data.includes(element);
    }

    containsAll(elements: Iterable<E>): boolean {
        main: for(const e1 of elements) {
            for(const e2 of this)
                if(e1 === e2)
                    continue main;
            return false;
        }
        return true;
    }

    first(predicate: (element: E, index: number) => boolean): E | null {
        for(let i = 0; i < this.#data.length; i++) {
            const element = this.#data[i];
            if(predicate(element, i))
                return element;
        }

        return null;
    }

    indexOf(element: E): number {
        return this.#data.indexOf(element);
    }

    isEmpty(): boolean {
        return this.#data.length === 0;
    }

    nthIndexOf(element: E, n: number): number {
        let index = -1;

        for(const e of this) {
            if(element === e) {
                index++;
                if(index === n) return index;
            }
        }

        return index;
    }

    lastIndexOf(element: E): number {
        return this.#data.lastIndexOf(element);
    }

    removeAll(elements: Iterable<E>): boolean {
        let modified = false;
        for(const element of elements) {
            const index = this.#data.indexOf(element);
            if(index !== -1) {
                modified = true;
                this.removeAt(index);
            }
        }
        return modified;
    }

    retainAll(elements: Iterable<E>): E[] {
        const accumulate: E[] = [];
        for(const e1 of this)
            for(const e2 of elements)
                if(e1 === e2) accumulate.push(e1);

        return accumulate;
    }

    subArray(fromIndex: number, toIndex: number): E[] {
        const range: E[] = [];
        for(let i = Math.max(fromIndex, 0); i < Math.min(this.#data.length, toIndex); i++)
            range.push(this.#data[i]);
        return range;
    }

    /**
     * **ATTENTION** this is the underlying array. **DO NOT MODIFY, OR THE CHANGES WILL NOT BE RECORDED!**
     */
    toArray() {
        return this.#data;
    }
}

/**
 * This is a watchable value. **ONLY STORE PRIMITIVE VALUES**,
 * as they can be compared in equality using '==='.
 * When using **objects** or **arrays**, consider **ArrayWatch** or **ObjectWatch**.
 */
export class Observable<T> {
    #value: T;
    #subscriptions: ((value: T) => void)[] = [];

    constructor(initialValue: T) {
        this.#value = initialValue;
    }

    set value(value: T) {
        if(this.#value === value) return;
        this.#value = value;
        for(const notify of this.#subscriptions)
            notify(value);
    }

    get value() {
        return this.#value;
    }

    /**
     * @param subscription The function called when this value changes.
     * @param init If true, when initially subscribing, the function is called.
     */
    subscribe(subscription: (value: T) => void, init: boolean = true): () => void {
        if(init) subscription(this.value);
        this.#subscriptions.push(subscription);
        return () => this.#subscriptions.splice(this.#subscriptions.indexOf(subscription), 1);
    }

    derive<N>(produce: (value: T) => N): Observable<N> {
        const observable = new Observable(produce(this.value));
        this.subscribe(value => observable.value = produce(value), false);
        return observable;
    }
}

/**
 * Merges an array of Observables into one Observable that updates
 * whenever any of the provided Observables update.
 * If you just want to reduce one Observable, just use `Observable.derive(...)`.
 * The array given to the reducer will be **recycled** between updates.
 */
export function reduce<N>(dependencies: Observable<any>[], reducer: (values: any[]) => N): Observable<N> {
    const values: any[] = new Array(dependencies.length);
    for(let i = 0; i < dependencies.length; i++) {
        const dependency = dependencies[i];
        values[i] = dependency.value;
        dependency.subscribe(value => {
            values[i] = value;
            reduced.value = reducer(values);
        }, false);
    }
    const reduced = new Observable(reducer(values));
    return reduced;
}

export class ObservableMap<K, V> extends Map<K, V> {
    #onDelete: ((key: K) => void)[] = [];

    subscribeToDelete(subscription: (key: K) => void): () => void {
        this.#onDelete.push(subscription);
        return () => {
            const index = this.#onDelete.indexOf(subscription);
            if(index === -1) return;
            this.#onDelete.splice(index, 1);
        };
    }

    #onSet: ((key: K, value: V) => void)[] = [];

    subscribeToSet(subscription: (key: K, value: V) => void): () => void {
        this.#onSet.push(subscription);
        return () => {
            const index = this.#onSet.indexOf(subscription);
            if(index === -1) return;
            this.#onSet.splice(index, 1);
        };
    }

    set(key: K, value: V): this {
        if(#onSet in this)
            for(const dispatch of this.#onSet)
                dispatch(key, value);
        super.set(key, value);
        return this;
    }

    delete(key: K): boolean {
        for(const dispatch of this.#onDelete)
            dispatch(key);
        return super.delete(key);
    }
}