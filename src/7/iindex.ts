type Prev = Record<string, number>;
type Next = Record<number, string>;

const swapKeysAndValues = <T extends Prev> (prevObj : T): Next => {
    const keys = Object.keys(prevObj);
    if (keys.length === 0) throw new Error(`keys must be ${keys.length}`);
    return keys
        .map(key => {
            const newKey = prevObj[key];
            return {[newKey]: key}
        })
        .reduce((a, b) => Object.assign(a, b))
}