const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

console.log("i =", i);
