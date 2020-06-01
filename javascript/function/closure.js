//Closure is the scope created when a function is declared
//This scope allows the function to access and manipulate

// lexical context in action
const x = "Global";

function out() {
  const x = "Locale";

  function inside() {
    return x;
  }
  return inside;
}

const myFunction = out();
console.log(myFunction());
