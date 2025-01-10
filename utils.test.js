const utils = require('./utils');

describe('String Utils', () => {
    test('capitalize should capitalize first letter', () => {
        expect(utils.capitalize('hello')).toBe('Hello');
        expect(utils.capitalize('world')).toBe('World');
    });

    test('slugify should create URL-friendly strings', () => {
        expect(utils.slugify('Hello World')).toBe('hello-world');
        expect(utils.slugify('This is a test')).toBe('this-is-a-test');
    });
});

describe('Array Utils', () => {
    test('chunk should split array into chunks', () => {
        expect(utils.chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });

    test('uniqueBy should remove duplicates', () => {
        const input = [
            { id: 1, name: 'John' },
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' }
        ];
        expect(utils.uniqueBy(input, 'id')).toHaveLength(2);
    });
});
