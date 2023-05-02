const fromEuroToDollar = require('./app.js');
test('One euro should be 1.2 dollars', () => {
    let result = fromEuroToDollar(10)
    expect(result).toBe(12);
});