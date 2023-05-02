
const fromYenToPound = require('./app.js')
test("One yen should be 0.00625 pounds", () =>{
    let result = fromYenToPound(10)
    expect(result).toBe(0.06); 
});