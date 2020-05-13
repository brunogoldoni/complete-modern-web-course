const values = [6.7, 7.4, 9.4, 8.1, 7.7];

for (let i in values) {
  console.log(i, values[i]);
}

const people = {
  name: "Bruno",
  lastName: "Goldoni",
  age: "31",
  weigth: 90,
  heith: 1.88,
};

for (let atribute in people) {
  console.log(`${atribute} = ${people[atribute]}`);
}
