const fromEuroToDollar = require('./app.js');
test('One euro should be 1.2 dollars', () => {
    let result = fromEuroToDollar(10)
    expect(result).toBe(12);
});

// const fromDollarToYen = require('./app.js')
// test("One dollar should be 1060.583 yens", () =>{ 
//     let result = fromDollarToYen(10)
//     expect(result).toBe(1065.83);
// });

// const fromYenToPound = require('./app.js')
// test("One yen should be 0.00625 pounds", () =>{
//     let result = fromYenToPound(10)
//     expect(result).toBe(0.06); 
// });