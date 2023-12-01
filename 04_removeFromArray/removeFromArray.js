const removeFromArray = function(arr, ...removeValue) {
    filteredArray = [];
loop1:   for (const value of arr) {
    loop2:    for (const arg of removeValue) {
                    if (value === arg) {
                        continue loop1;
                    }
            }
            filteredArray.push(value)
        }
    return filteredArray;   
};

// Do not edit below this line
module.exports = removeFromArray;
