// Google and pickPay = freellancer

function shopping(google, picPay) {
  const buyIceCream = google || picPay;
  const buyTv50 = google && picPay;
  const buyTv32 = google != picPay;
  const stayHealth = !buyIceCream;

  return {
    buyIceCream,
    buyTv50,
    buyTv32,
    stayHealth,
  };
}

console.log(shopping(true, true));
console.log(shopping(true, false));
console.log(shopping(false, true));
console.log(shopping(false, false));
