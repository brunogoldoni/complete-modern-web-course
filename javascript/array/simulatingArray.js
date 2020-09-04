const almostArray = {
  0: "Rafael",
  1: "Ana",
  2: "Bia",
};

console.log(almostArray);

//
Object.defineProperty(almostArray, "toString", {
  value: function () {
    return Object.values(this);
  },
  enumerable: false,
});

console.log(almostArray[0]);

//
const myArray = ["Rafael", "Ana", "Bia"];
console.log(almostArray.toString(), myArray);
