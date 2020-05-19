function createProduct(name, price) {
  return {
    name,
    price,
    discount: 0.1,
  };
}

console.log(createProduct("Macbook Pro", 2199.0));
console.log(createProduct("PenDrive", 30.0));
