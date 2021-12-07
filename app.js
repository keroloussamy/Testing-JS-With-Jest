function stringLength(str) {
  if(str < 1 || str > 10) {throw 'String should be > 0 and < 10.'}
  return str.length;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: function(a, b) {return a+b},  
  subtract: function(a, b) {return a-b}, 
  divide: function(a, b) {return a/b},
  multiply: function(a, b) {return a*b}
}

class Abc {
  name(params) {
    return params;
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = { stringLength, reverseString, calculator, capitalize, Abc};