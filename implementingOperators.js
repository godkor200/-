const multiply = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  let div = x / y;
  div = div.toFixed(3);
  return div;
};

const modulo = function (x, y) {
  return x % y;
};

console.log("multiply -> multiply", multiply(2.5, 10.2));
