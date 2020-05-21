const people = {
  name: "Bruno",
  age: 31,
  weight: 90,
};

console.log(Object.keys(people));
console.log(Object.values(people));
console.log(Object.entries(people));

// Object.entries(people).forEach((e) => {
//   console.log(`${e[0]}: ${e[1]}`);
// });

Object.entries(people).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

Object.defineProperty(people, "dateOfBirth", {
  enumerable: true,
  writable: false,
  value: "01/01/1997",
});

people.dateOfBirth = "01/01/2021";
console.log(people.dateOfBirth);
console.log(Object.keys(people));

//Object.assign (ECMAScript 2015)
const destiny = { a: 1 };
const object1 = { b: 2 };
const object2 = { c: 3, a: 4 };
const object = Object.assign(destiny, object1, object2);

Object.freeze(object);
object.c = 1234;
console.log(object);
