const reverseString = function(word) {

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
    return reversedWords.join(' ');
};

// Do not edit below this line
module.exports = reverseString;
