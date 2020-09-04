const approved = ["Abreu", "Amaral", "Daniel", "Raquel"];

approved.forEach(function (name, indice) {
  console.log("First list:", `${indice + 1} ${name}`);
});

//
approved.forEach((indice, name) => console.log("Second list:", indice, name));

//
const showApproved = (approved) => console.log("Third list:", approved);
approved.forEach(showApproved);
