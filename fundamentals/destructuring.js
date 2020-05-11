const people = {
  name: "Josué",
  age: 37,
  address: {
    street: "Rua ABC",
    number: 100,
  },
};

const { name, age } = people;
console.log(name, age);

const { name: Neimar, age: i } = people;
console.log(Neimar, i);

const { lastName, goodHumored = true } = people;
console.log(lastName, goodHumored);

const {
  address: { street, number, cep },
} = people;
console.log(street, number, cep);

// const {
//   account: { agency, number },
// } = people;
// console.log(agency, number);
