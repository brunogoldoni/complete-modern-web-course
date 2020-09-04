const products = [
  { name: "Notebook", price: 2499, fragile: true },
  { name: "Ipad Pro", price: 4199, fragile: true },
  { name: "Copo de Vidro", price: 12.49, fragile: true },
  { name: "Copo de Plástico", price: 9.99, fragile: false },
];

console.log(
  products.filter(function (p) {
    return false;
  })
);

const expensive = (product) => product.price >= 500;
const fragile = (product) => product.fragile;

console.log(products.filter(expensive).filter(fragile));
