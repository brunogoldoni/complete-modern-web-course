pilots = ["Vettel", "Alonso", "Raikkonen", "Massa"];
console.log(pilots);

//
pilots.pop(); //break car
console.log(pilots);

//
pilots.push("Verstappen");
console.log(pilots);

//
pilots.shift(); //remove first
console.log(pilots);

//
pilots.unshift("Hamilton");
console.log(pilots);

// splice add and remove elements

// add
pilots.splice(2, 0, "Bottas", "Massa");
console.log(pilots);

// remove
pilots.splice(3, 1); // break car
console.log(pilots);

//
const somePilotsFirst = pilots.slice(2); // new array
console.log(somePilotsFirst);

//
const somePilotsSecond = pilots.slice(1, 2);
console.log(somePilotsSecond);
