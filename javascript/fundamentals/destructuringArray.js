// const [a] = [10];
// console.log(a);

// const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
// console.log(n1, n3, n5, n6);

// const [, [, value]] = [
//   [, 8, 8],
//   [9, 6, 8],
// ];
// console.log(value);

//other example with function
function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}

console.log(rand([50, 40]));
console.log(rand([990]));
console.log(rand([, 10]));
console.log(rand([]));
