/**
 * Advanced array manipulation utilities
 */

const flatten = (arr) => {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
};

const groupBy = (arr, key) => {
    return arr.reduce((grouped, item) => {
        const groupKey = typeof key === 'function' ? key(item) : item[key];
        grouped[groupKey] = grouped[groupKey] || [];
        grouped[groupKey].push(item);
        return grouped;
    }, {});
};

const intersection = (arr1, arr2) => {
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
};

module.exports = {
    flatten,
    groupBy,
    intersection
};
