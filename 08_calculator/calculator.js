const add = function(number1,number2) {
	return number1+number2;
};

const subtract = function(number1,number2) {
  return number1-number2;
};

const sum = function(...numbers) {
  let adding = 0;
  for (const number of numbers) {
    for (const i of number) {
      adding += i;
    }
  }
  return adding;
};

const multiply = function(...numbers) {
  let multiplying = 1;
  for (const number of numbers) {
    for (const i of number) {
      multiplying = multiplying * i;
    }
  }
  return multiplying;
};

const power = function(number1, number2) {
	return number1**number2;
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  } else {
      let multiplying = number
      for (let i=number-1; i>0; i--) {
        multiplying = i * multiplying;
    }
    return multiplying
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
