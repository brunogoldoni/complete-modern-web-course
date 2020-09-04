const cart = [
  '{ "name": "Borracha", "price": 3.45 }',
  '{ "name": "Caderno", "price": 12.90 }',
  '{ "name": "Borracha", "price": 31.39 }',
  '{ "name": "Borracha", "price": 3.50 }',
];

// Return a array only with prices
const toObject = (json) => JSON.parse(json);
const onlyPrice = (product) => product.price;

const result = cart.map(toObject).map(onlyPrice);

console.log(result);
