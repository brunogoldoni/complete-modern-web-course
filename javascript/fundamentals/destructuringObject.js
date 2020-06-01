// const people = {
//   name: "Josué",
//   age: 37,
//   address: {
//     street: "Rua ABC",
//     number: 100,
//   },
// };

// const { name, age } = people;
// console.log(name, age);

// const { name: Neimar, age: i } = people;
// console.log(Neimar, i);

// const { lastName, goodHumored = true } = people;
// console.log(lastName, goodHumored);

// const {
//   address: { street, number, cep },
// } = people;
// console.log(street, number, cep);

//Other example with function
function rand({ min = 0, max = 1000 }) {
  const value = Math.random() * (max - min) + min;
  return Math.floor(value);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 955 }));
console.log(rand({}));
