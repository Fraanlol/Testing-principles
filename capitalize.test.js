const functions = require('./main');

test('Capitalize with random upper case letters', () => {
    expect(functions.capitalize('aBcDeFgHiJk')).toBe('Abcdefghijk');
});

test('Capitalize with random upper case letters', () => {
    expect(functions.capitalize('this is a nice morning')).toBe('This is a nice morning');
});

test('Capitalize with random upper case letters', () => {
    expect(functions.capitalize('INDEED')).toBe('Indeed');
});

test('Capitalize with random upper case letters', () => {
    expect(functions.capitalize('AlformiGorianopolis')).toBe('Alformigorianopolis');
});

test('Capitalize with random upper case letters', () => {
    expect(functions.capitalize('QWE ASD saA')).toBe('Qwe asd saa');
});