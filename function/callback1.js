const maker = ["Mercedes", "Audi", "BMW"];

function print(name, indice) {
  console.log(`${indice + 1}. ${name}`);
}

maker.forEach(print);
maker.forEach((maker) => console.log(maker));
