const sumAll = function(number1, number2) {
    let adding = 0;
    for (let i = Math.min(number1, number2); i <= Math.max(number1, number2); i++) {
        adding += i;
    }
    return adding;
};

// Do not edit below this line
module.exports = sumAll;
