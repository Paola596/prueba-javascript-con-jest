const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(10)).toBe(12); 
})

test("One dollar should be 106.583 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1065.83);
})

test("One yen should be 0.00625 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(10)).toBe(0.06); 
})