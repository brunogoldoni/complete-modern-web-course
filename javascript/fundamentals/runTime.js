let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = "test";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//crazy variable. Don't works this
abc = 3;
console.log(global.abc);
