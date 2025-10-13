class Bucket<T, V> {
    readonly #key: T;
    readonly #value: V;

    constructor(key: T, value: V) {
        this.#key = key;
        this.#value = value;
    }

    get value() {
        return this.#value;
    }

    get key() {
        return this.#key;
    }

}


class HashMap<T, V> {
    #data: Bucket<T, V>[][] = [];

    get(key: T): V {
        const index = this.#hashKey(key);
        const value = this.#data[index];
        if (typeof value === "undefined") {
            throw new Error("Could not find key '" + key + "'");
        }
        const result = value.find(el => el.key === key)
        if (result === undefined) {
            throw new Error("Could not find key '" + key + "'");
        }
        return result.value;
    }

    set(key: T, value: V): void {
        const index: number = this.#hashKey(key);
        const bucket: Bucket<T, V>[] = this.#data[index];
        if (typeof bucket === "undefined") {
            this.#data[index] = [new Bucket(key, value)];
        } else {
            bucket.push(new Bucket(key, value));
            this.#data[index] = bucket;
        }
    }

    delete(key: T): void {
        const index = this.#hashKey(key);
        const bucket: Bucket<T, V>[] = this.#data[index];
        if (typeof bucket === "undefined") {
            throw new Error("Could not find key '" + key + "'");
        }
        this.#data[index] = bucket.filter(el => el.key !== key);
    }

    clear(): void {
        this.#data = [];
    }

    #hashKey(key: T): number {
        if (typeof key === 'string') {
            return key.length * (this.#data.length > 0 ? this.#data.length : 1);
        }
        switch (typeof key) {
            case 'string':
                return key.length * (this.#data.length > 0 ? this.#data.length : 1);
            case 'number':
                if (key < 0) {
                    return -key * (this.#data.length > 0 ? this.#data.length : 1)
                }
                return key * (this.#data.length > 0 ? this.#data.length : 1);
            case 'boolean':
                return (key ? 2 : 1) * (this.#data.length > 0 ? this.#data.length : 1);
            default:
                throw new Error(`Incorrect type key: ${typeof key}`);
        }
    }
}