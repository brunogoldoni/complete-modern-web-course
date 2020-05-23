function Class(name, videoID) {
  (this.name = name), (this.videoID = videoID);
}

const class1 = new Class("Bem Vindo", 123);
const class2 = new Class("Até breve", 456);

console.log(class1, class2);

// simulating new operator
function neww(f, ...params) {
  const obj = {};
  obj.__prto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula3 = neww(Class, "Bem Vindo", 123);
const aula4 = neww(Class, "Até Breve", 456);

console.log(class1, class2);
