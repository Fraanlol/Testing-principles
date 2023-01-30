const functions = require('./main');

test('Capitalize with random upper case letters', () => {
    expect(functions.reverseString('This is a sunday morning')).toBe('gninrom yadnus a si sihT');
});

test('Capitalize with random upper case letters', () => {
    expect(functions.reverseString('this is a nice morning')).toBe('gninrom ecin a si siht');
});

test('Capitalize with random upper case letters', () => {
    expect(functions.reverseString('abcdefghijk')).toBe('kjihgfedcba');
});
