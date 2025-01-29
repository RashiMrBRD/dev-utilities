/**
 * A collection of useful utility functions for common development tasks
 */

// Date formatting utilities
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

// String manipulation utilities
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const slugify = (str) => {
    return str
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

// Array utilities
const chunk = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
};

const uniqueBy = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()];
};

// Object utilities
const pick = (obj, keys) => {
    return keys.reduce((acc, key) => {
        if (obj.hasOwnProperty(key)) {
            acc[key] = obj[key];
        }
        return acc;
    }, {});
};

const omit = (obj, keys) => {
    return Object.keys(obj)
        .filter(key => !keys.includes(key))
        .reduce((acc, key) => {
            acc[key] = obj[key];
            return acc;
        }, {});
};

module.exports = {
    formatDate,
    capitalize,
    slugify,
    chunk,
    uniqueBy,
    pick,
    omit
};
