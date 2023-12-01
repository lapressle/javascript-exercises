const repeatString = function(word,number) {

    let repeatword = ''

    if (number<0) {
        return 'ERROR'
    }
        else {
            for (let i = 0; i<number; i++) {
                repeatword+=word
            }
            return repeatword
    }

};

// Do not edit below this line
module.exports = repeatString;
