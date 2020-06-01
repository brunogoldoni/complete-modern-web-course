function errorHandler(err) {
  // throw new Error('...')
  // throw 10
  // throw true
  // throw 'message'
  throw {
    name: err.name,
    msg: err.message,
    date: new Date(),
  };
}

function printName(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    errorHandler(e);
  } finally {
    console.log("End...");
  }
}

const obj = { name: "Bruno" };
printName(obj);
