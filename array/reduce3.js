Array.prototype.reduce2 = function (callback, initialValue) {
  const currentIndex = initialValue ? 0 : 1;

  let accumulator = initialValue || this[0];

  for (let i = currentIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

const sum = (total, value) => total + value;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.reduce2(sum));
