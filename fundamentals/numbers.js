const weight1 = 1.0;
const weight2 = Number("2.0");

console.log(weight1, weight2);
console.log(Number.isInteger(weight1));
console.log(Number.isInteger(weight2));

const evaluetion1 = 9.831;
const evaluetion2 = 6.823;

const total = evaluetion1 * weight1 + evaluetion2 * weight2;
const average = total / (weight1 + weight2);

console.log(average.toFixed(2));
console.log(average.toString("2"));

console.log(typeof average);
console.log(typeof Number);
