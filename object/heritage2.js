// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = "0";

const grandfather = { attr1: "A" };
const dad = { __proto__: grandfather, attr2: "B", attr3: "3" };
const son = { __proto__: dad, attr3: "C" };

console.log(son.attr0, son.attr1, son.attr2, son.attr3);

const car = {
  Actualspeed: 0,
  MaxSpeed: 200,
  aceleration(delta) {
    if (this.Actualspeed + delta <= this.MaxSpeed) {
      this.Actualspeed += delta;
    } else {
      this.Actualspeed = this.MaxSpeed;
    }
  },

  status() {
    return `${this.Actualspeed}Km/h de ${this.MaxSpeed}Km/h`;
  },
};

const ferrari = {
  model: "F40",
  MaxSpeed: 324,
};

const volvo = {
  model: "F40",
  status() {
    return `${this.model}: ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);

console.log(volvo);
console.log(ferrari);

volvo.aceleration(120);
console.log(volvo.status());

ferrari.aceleration(300);
console.log(ferrari.status());
