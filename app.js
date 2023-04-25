const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// function fromDollarToYen(dollar) {
//     return (dollar/(1.2*127.9)).toFixed(2);
// }

const fromEuroToDollar = function(euro) {
    let valueDollar = euro*1.2;
    return valueDollar
}


const fromDollarToYen = (dollar) =>{
    let valueEuro = dollar/1.2
    return Number((valueEuro*127.9).toFixed(2))
}

const fromYenToPound = (valueYen) =>{
    let valueEuro = valueYen/127.9
    return Number((valueEuro*0.8).toFixed(2));
}
