const palindromes = function (word) {
    const regex = /[!"#$%&, '()*+-./:;<=>?@[\]^_`{|}~]/g;
    word = word.replace(regex,'');
    word = word.toLowerCase();
    const splitWord = word.split(' ');
    const splitString = [];
    const reverse = [];
    const words = [];

    for (let i = 0; i<splitWord.length; i++) {
        splitString.push(splitWord[i].split(''));
        reverse.push(splitString[i].reverse());
        words.push(reverse[i].join(''));
    }
    const reversedWords = words.reverse();
    if (reversedWords.join('') == word) {
        console.log('help')
        return true;
    }   else {
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
