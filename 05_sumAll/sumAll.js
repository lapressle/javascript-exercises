const sumAll = function(number1, number2) {
    let adding = 0;
    if (typeof number1 != 'number' || typeof number2 != 'number') {
        return 'ERROR';
    }
    else if (number1 < 0 || number2 < 0) {
        return 'ERROR';
    } else {
        for (let i = Math.min(number1, number2); i <= Math.max(number1, number2); i++) {
            adding += i;
        }
        return adding;
    }
};

// Do not edit below this line
module.exports = sumAll;
