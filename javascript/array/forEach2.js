Array.prototype.forEachExample = function (callback) {
  for (let i = 0; i < this.length; i++) callback(this[i], i, this);
};

const approved = ["Agatha", "Aldo", "Daniel", "Raquel"];

approved.forEachExample(function (name, indice) {
  console.log(`${indice + 1} ${name}`);
});
