const functions = require('./main');

test('Test sum between 2 positives', () => {
    expect(functions.calculator.sum(2,2)).toBe(4);
});

test('test sum between 1 negative and 1 positive', () => {
    expect(functions.calculator.sum(-2,2)).toBe(0);
});

test('Test sum between 1 integer and 1 float', () => {
    expect(functions.calculator.sum(2,2.24)).toBe(4.24);
});


test('Test multiply between 2 positives', () => {
    expect(functions.calculator.mult(2,2)).toBe(4);
});

test('test multiply between 1 negative and 1 positive', () => {
    expect(functions.calculator.mult(-2,2)).toBe(-4);
});

test('Test multiply between 1 integer and 1 float', () => {
    expect(functions.calculator.mult(2,2.24)).toBe(4.48);
});

test('Test divide between 2 positives', () => {
    expect(functions.calculator.divide(2,2)).toBe(1);
});

test('test divide between 1 negative and 1 positive', () => {
    expect(functions.calculator.divide(-2,2)).toBe(-1);
});

test('Test divide between 1 integer and 1 float', () => {
    expect(functions.calculator.divide(2,2.24)).toBe(0.893);
});

test('Test subtract between 2 positives', () => {
    expect(functions.calculator.subtract(2,2)).toBe(0);
});

test('test subtract between 1 negative and 1 positive', () => {
    expect(functions.calculator.subtract(-2,2)).toBe(-4);
});

test('Test subtract between 1 integer and 1 float', () => {
    expect(functions.calculator.subtract(2,2.24)).toBe(-0.24);
});