function area(width, height) {
  const area = width * height;
  if (area >= 20) {
    console.log(`Valor acima do permitido: ${area}`);
  } else {
    return area;
  }
}

console.log(area(2, 5));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 5, 7));
console.log(area(5, 5));
