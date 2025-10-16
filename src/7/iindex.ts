type Prev = Record<string, number>;
type Next = Record<number, string>;

export const swapKeysAndValues = <T extends Prev> (prevObj : T): Next => {
    const keys = Object.keys(prevObj);

    return keys
        .map(key => {
            const newKey = prevObj[key];
            return {[newKey]: key}
        })
        .reduce((a, b) => Object.assign(a, b), {})
}