function sum(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}
console.log(sum(), sum(3), sum(1, 2, 3), sum(0, 0, 0));

//ES6(2015)
function sum1(a = 1, b = 1, c = 1) {
  return a + b + c;
}
console.log(sum(), sum(3), sum(1, 2, 3), sum(0, 0, 0));
