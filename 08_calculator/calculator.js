const add = function(...args) {
  let sum = 0;

  args.forEach(n => sum += n);

	return sum;
};

const subtract = function(...args) {
  let result = args[0];

  for (let i = 1; i < args.length; i++) {
    result -= args[i];
  }

  return result;
};

const sum = function(arr) {
	let sum = 0;

  arr.forEach(n => sum += n);

	return sum;
};

const multiply = function(arr) {
  let sum = 1;
  arr.forEach(n => sum *= n);
  
  return sum;
};

const power = function(a, b) {
  return Math.pow(a,b);
};

const factorial = function(n) {
  let sum = 1;

	for (let i = 2; i <= n; i++) {
    sum *= i;
  }

  return sum;
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
