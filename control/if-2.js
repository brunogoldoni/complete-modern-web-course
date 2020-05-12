function test1(num) {
  if (num > 7) console.log(num);
  console.log("End... ");
}
// test1(6);
// test1(8);

function teste2(num) {
  if (num > 7); //don't use " ; " with control structure
  {
    console.log(num);
  }
}
teste2(6);
teste2(8);
