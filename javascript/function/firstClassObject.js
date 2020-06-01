//store leterally
function people() {}

//store variable
const car = function () {};

//store array
const array = [
  function (a, b) {
    return a + b;
  },
  people,
  car,
];
console.log(array[0](2, 3));

//store in an object attribute
const ball = {};
ball.name = function () {
  return "Jabulani";
};
console.log(ball.name());

//function with param
function run(forrestGump) {
  forrestGump();
}

run(function () {
  console.log("Executando...");
});

function sum(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

sum(2, 3)(4);

const number = sum(2, 3);
number(4);
