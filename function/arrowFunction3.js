let compareWithThis = function (param) {
  console.log(this === param);
};

compareWithThis(global);

const obj = {};
compareWithThis = compareWithThis.bind(obj);
compareWithThis(global);
compareWithThis(obj);

let compareWithThisArrow = (param) => console.log(this === param);
compareWithThisArrow(global);
compareWithThisArrow(module.exports);

compareWithThisArrow = compareWithThisArrow.bind(obj);
compareWithThisArrow(obj);
compareWithThisArrow(module.exports);
