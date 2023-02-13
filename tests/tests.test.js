const sum = require('../sum');

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}

function reverse(str) {
    return str.split("").reverse().join("");
}

function calculator(a,b) {
    return {
        add: a+b,
        subtract: a-b,
        multiply: a*b,
        divide: a/b,
    }
}

it('adds 1 and 2 to return 3', () => {
    expect(sum(1, 2)).toBe(3);
});

it('returns word with first letter capitalized', () => {
    expect(capitalize('hello')).toBe('Hello');
})

it('returns the string but in reverse', () => {
    expect(reverse('hello')).toBe('olleh');
})

it('returns an object with calculations from 2 and 3', () => {
    const calc = calculator(1,2);

    expect(calc.add).toEqual(3);
    expect(calc.subtract).toEqual(-1);
    expect(calc.multiply).toEqual(2);
    expect(calc.divide).toEqual(0.5);
})