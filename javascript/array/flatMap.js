const school = [
  {
    name: "Class M1",
    students: [
      {
        name: "Roberto",
        note: 8.1,
      },
      {
        name: "Claudia",
        note: 9.1,
      },
    ],
  },
  {
    name: "Class M2",
    students: [
      {
        name: "Regina",
        note: 8.7,
      },
      {
        name: "Augusto",
        note: 7.8,
      },
    ],
  },
];

const getStudentsNote = (student) => student.note;
const getClassNote = (group) => group.students.map(getStudentsNote);

const notes1 = school.map(getClassNote);
console.log(notes1);

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

const notes2 = school.flatMap(getClassNote);
console.log(notes2);
