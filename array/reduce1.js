const students = [
  { name: "João", note: 7.1, scholarship: false },
  { name: "Rodrigo", note: 8.3, scholarship: true },
  { name: "Bartolomeu", note: 5.3, scholarship: false },
  { name: "Euzébio", note: 9.1, scholarship: true },
];

console.log(students.map((s) => s.note));

//
const result = students
  .map((s) => s.note)
  .reduce(function (accumulator, actual) {
    console.log(accumulator, actual);
    return accumulator + actual;
  }, 0);

console.log(result.toFixed(2));
