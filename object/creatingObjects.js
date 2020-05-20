// Usando notação literal
const object1 = {};
console.log(object1);

// Object em JS
console.log(typeof Object, typeof new Object());

const object2 = new Object();
console.log(object2);

//Funções construtoras
function Product(name, price, disc) {
  (this.name = name),
    (this.getPriceWithDiscount = () => {
      return price * (1 - disc);
    });
}

const p1 = new Product("Caneta", 123.99, 0.15);
const p2 = new Product("Notebook", 2990.0, 0.25);
console.log(p1.getPriceWithDiscount().toFixed(2));
console.log(p2.getPriceWithDiscount());

// Função factory
function createEmployee(name, salary, faults) {
  return {
    name,
    salary,
    faults,
    getSalary() {
      return (salary / 30) * (30 - faults);
    },
  };
}

const f1 = createEmployee("Joniscleison", 21200, 4);
const f2 = createEmployee("Mario Covas", 11400, 1);
console.log(f1.getSalary());
console.log(f2.getSalary());

//Object.create
const son = Object.create(null);
son.name = "Adailton";
console.log(son);

// Função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
