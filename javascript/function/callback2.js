const values = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// no callback
let lowValues1 = [];
for (let i in values) {
  if (values[i] < 7) {
    lowValues1.push(values[i]);
  }
}

console.log(lowValues1);

// With Callback
lowValues2 = values.filter(function (values) {
  return values < 7;
});

console.log(lowValues2);

lessThanFive = (values) => values < 7;
const lowValues3 = values.filter(lessThanFive);

console.log(lowValues3);
