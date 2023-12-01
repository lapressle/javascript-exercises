const fibonacci = function(number) {
    if (number < 0) {
        return 'OOPS';
    } else {
        let number1 = 0;
        let number2 =1
        let n = 1;
        while (n < Number(number)) {
            i = number1 + number2;
            number1 = number2;
            number2 = i;
            n += 1;
        }
        return number2
    }
};

// Do not edit below this line
module.exports = fibonacci;
