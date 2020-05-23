const ferrari = {
  model: "F40",
  maxSpeed: 324,
};

const volvo = {
  model: "V40",
  maxSpeed: 200,
};

console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(Object.prototype.__proto__ === null);
console.log(volvo.__proto__ === Object.prototype);
console.log(ferrari.__proto__ === Object.prototype);

function myObject() {}
console.log(typeof Object, typeof myObject);
console.log(Object.prototype, myObject.prototype);
