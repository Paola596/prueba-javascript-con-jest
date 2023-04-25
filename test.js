const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js')
test("One euro should be 1.20 dollars", function(){
    let dolares = fromEuroToDollar(1)
    expect(dolares).toBe(1.20);  
})

/* test("One Dollar should be 106.58 yen", function(){
    const { fromDollarToYen } = require('./app.js') 
    expect(fromDollarToYen(1)).toBe( );  
})

test("One Yen should be 0.00625 pound", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1)).toBe( );  
}) */