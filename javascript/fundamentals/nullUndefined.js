let value; //not initialized
console.log(value);

value = null; //absense of value
console.log(value);

//console.log(value.toString()); // Error

const product = {};
console.log(product.price);
console.log(product);

product.price = 3.5;
console.log(product);

product.price = undefined; //avoid assigning undefined
console.log(!!product.price);

//delete product.price //correct way to remove an attribute from a bject
console.log(product);

product.price = null; //without price
console.log(!!product.price);
console.log(product);
