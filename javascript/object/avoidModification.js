//Object.preventExtensions
const product = Object.preventExtensions({
  name: "pencil",
  price: 1.99,
  tag: "promotion",
});

console.log("Extensível:", Object.isExtensible(product));

//
product.name = "Erazer";
product.description = "White erazer";
delete product.tag;

console.log(product);

// Object.seal
const people = {
  name: "Joyce",
  age: 35,
};
Object.seal(people);

console.log("Selado:", Object.isSealed(people));

people.lastName = "Silva";
delete people.name;
people.age = 25;

console.log(people);

//Object.freeze = seal + const values
