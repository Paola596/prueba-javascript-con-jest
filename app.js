let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8 // british pound
};

function fromEuroToDollar(euro){
    return euro*1.2;
};
module.exports = fromEuroToDollar;

function fromDollarToYen (dollar) {
    let valueEuro = dollar / 1.2;
    let yen = ((valueEuro * 127.9).toFixed(2));
    return yen;
};
module.exports = fromDollarToYen;

function fromYenToPound(yens) {
    let euros = yens / 127.9;
    let pound = ((euros*0.8).toFixed(2));
    return pound;
};
module.exports = fromYenToPound;