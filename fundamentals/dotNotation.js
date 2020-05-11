console.log(Math.ceil(6.1));

const ball = {};
ball.name = "Jabulani";
console.log(ball.name);

function Person(name) {
  this.name = name;
  this.exec = function () {
    console.log("Exec...");
  };
}

const obj1 = new Person("Rodolpho");
const obj2 = new Person("Tereza");

console.log(obj1.name);
console.log(obj2.name);

obj2.exec();
