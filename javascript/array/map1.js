const numbers = [1, 2, 3, 4, 5];

//FOR with purpose
let result = numbers.map(function (e) {
  return e * 2;
});

console.log(result);

//
const sum = (e) => e + 10;

//
const triple = (e) => e * 3;

//
const toMoney = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

//
result = numbers.map(sum).map(triple).map(toMoney);

console.log(result);
