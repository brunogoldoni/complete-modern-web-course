Array.prototype.filter2 = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const products = [
  { name: "Notebook", price: 2499, fragile: true },
  { name: "Ipad Pro", price: 4199, fragile: true },
  { name: "Copo de Vidro", price: 12.49, fragile: true },
  { name: "Copo de Plástico", price: 9.99, fragile: false },
];

const expensive = (product) => product.price >= 500;
const fragile = (product) => product.fragile;

console.log(products.filter2(expensive).filter2(fragile));
