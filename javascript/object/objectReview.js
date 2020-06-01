const product = new Object();

product.name = "Cadeira";
product["Product brand"] = "Generica";
product.price = 220;

console.log(product);

delete product.price;
delete product["Product brand"];
console.log(product);

const car = {
  model: "A4",
  price: 8900,
  owner: {
    name: "José Alencar",
    age: 39,
    address: {
      street: "Rua ABC",
      number: 123,
    },
  },
  conductors: [
    {
      name: "Junior",
      age: "31",
    },
    {
      name: "Odair Playboy",
      age: 51,
    },
  ],
  calculateSafeValue: function () {
    // ...
  },
};

console.log(
  `O cliente ${car.owner.name}, possui o carro ${car.model} no valor de ${car.price} que será conduzido por ${car.conductors[0].name} até o endereço de destino na rua: ${car.owner.address.street} número ${car.owner.address.number}.`
);

car.owner.address.number = 1000;
console.log(car);

delete car.conductors[1];
console.log(car);

(car.conductors.name = "Alfredo"), (car.conductors.age = "47");
console.log(car);
