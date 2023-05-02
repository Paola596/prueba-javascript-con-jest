const fromDollarToYen = require('./app.js')
test("One dollar should be 1060.583 yens", () =>{ 
    let result = fromDollarToYen(10)
    expect(result).toBe(1065.83);
});
