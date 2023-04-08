export default function apply(target: any, object: any) {
    for (const key in object) {
        const value = object[key];
        if (value === undefined || value === null) continue;
        target[key] = value;
    }
    return target;
}