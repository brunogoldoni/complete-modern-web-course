const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in numbers) {
  if (x == 5) {
    break;
  }
  console.log(`${x} = ${numbers[x]}`);
}

for (y in numbers) {
  if (y == 5) {
    continue;
  }
  console.log(`${y} = ${numbers[y]}`);
}
