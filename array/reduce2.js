const students = [
  { name: "João", note: 7.1, scholarship: false },
  { name: "Rodrigo", note: 8.3, scholarship: true },
  { name: "Bartolomeu", note: 5.3, scholarship: false },
  { name: "Euzébio", note: 9.1, scholarship: true },
];

// are all students scholarship holders?
const allScholarship = (result, scholarship) => result && scholarship;
console.log(students.map((s) => s.scholarship).reduce(allScholarship));

// some student has a scholarship
const someScholarship = (result, scholarship) => result || scholarship;
console.log(students.map((s) => s.scholarship).reduce(someScholarship));
