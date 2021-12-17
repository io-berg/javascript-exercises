const ftoc = function(input) {
  let c = (input - 32) * 5 / 9;

  return Math.round(c * 10) / 10;
};

const ctof = function(input) {
  let f =  input * 1.8000 + 32;
  return Math.round(f * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
