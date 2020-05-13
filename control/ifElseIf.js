Number.prototype.enter = function (begin, end) {
  return this >= begin && this <= end;
};

const printResult = function (value) {
  if (value.enter(9, 10)) {
    console.log("Quadro de honra!!!");
  } else if (value.enter(7, 8.99)) {
    console.log("Aprovado!");
  } else if (value.enter(4, 6.99)) {
    console.log("Recuperação");
  } else if (value.enter(0, 3.99)) {
    console.log("Reprovado!");
  } else {
    console.log("Nota inválida...");
  }
};

printResult(10);
printResult(8.9);
printResult(6.55);
printResult(2);
printResult(-1);
printResult(11);
