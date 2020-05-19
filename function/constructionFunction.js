function Car(MaximumSpeed = 200, delta = 5) {
  let ActualSpeed = 0;

  this.speedUp = function () {
    if (ActualSpeed + delta <= MaximumSpeed) {
      ActualSpeed += delta;
    } else {
      ActualSpeed = MaximumSpeed;
    }
  };

  this.getActualSpeed = function () {
    return ActualSpeed;
  };
}

const fusca = new Car();
fusca.speedUp();
console.log(fusca.getActualSpeed());

const ferrari = new Car(350, 20);
ferrari.speedUp();
console.log(ferrari.getActualSpeed());

console.log(typeof Car);
console.log(typeof ferrari);
