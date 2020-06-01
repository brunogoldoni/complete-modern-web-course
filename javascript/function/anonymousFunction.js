const sum = function (x, y) {
  return x + y;
};

const printResult = function (a, b, operation = sum) {
  console.log(operation(a, b));
};

printResult(3, 4);

printResult(3, 4, sum);

printResult(3, 4, function (x, y) {
  return x - y;
});

printResult(3, 4, (x, y) => x * 2);

const people = {
  speak: function () {
    console.log("Olá...");
  },
};
people.speak();
