console.log(typeof Array, typeof new Array(), typeof []);

let approved = new Array("Bia", "Carlos", "Roberval");
console.log(approved);

approved = ["Josué", "Caio", "Roberto Carlos"];
console.log(approved[0]);
console.log(approved[1]);
console.log(approved[2]);
console.log(approved[3]);

//
approved[3] = "Gabriela";
approved.push("Fábia");

console.log(approved.length);

//
approved[9] = "Romeu";
console.log(approved.length);
console.log(approved[8] === undefined);

console.log(approved);

//
approved.sort();
console.log(approved);

delete approved[1];
console.log(approved[1]);
console.log(approved[2]);

//
approved = ["Bruno", "Carlos", "Aparecida"];
approved.splice(2, 1);
console.log(approved);
