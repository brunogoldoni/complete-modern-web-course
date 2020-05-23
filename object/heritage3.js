const dad = {
  name: "Alberto",
  hairColor: "Preto",
};

const son1 = Object.create(dad);
son1.name = "Ana";

console.log(`${son1.name} tem cabelo ${son1.hairColor}`);

//
const son2 = Object.create(dad, {
  name: { value: "Carla", writable: false, enumerable: true },
});

console.log(son2.name);

//
son2.name = "Amanda";
console.log(`${son2.name} tem cabelo ${son2.hairColor}`);

console.log(Object.keys(son1));
console.log(Object.keys(son2));

//
for (let key in son2) {
  son2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança: ${key}`);
}
