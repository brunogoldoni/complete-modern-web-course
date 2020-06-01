const people = {
  name: "Joaquim",
};

people.name = "Gabriel";
console.log(people);

// people = {
//   name: "Ana",
// };

Object.freeze(people);

people.name = "Maria";
console.log(people.name);
delete people.name;

console.log(people.name);
console.log(people);

const peopleConstant = Object.freeze({ name: "Robert" });
console.log(peopleConstant);
