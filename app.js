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

function fromEuroToDollar(euro) {
    return euro* 1.20;
}

// function fromYenToPound(yen) {
//     return (yen * 0.8/127.9).toFixed(2) ;
// }

