function goodNews(grade) {
  if (grade >= 7) {
    console.log(`Aprovado com ${grade}`);
  }
}

goodNews(8.1);
goodNews(6.1);

function isTrueISpeak(value) {
  if (value) {
    console.log("É verdade... " + value);
  }
}

isTrueISpeak();
isTrueISpeak(null);
isTrueISpeak(undefined);
isTrueISpeak(NaN);
isTrueISpeak("");
isTrueISpeak(0);
isTrueISpeak(-1);
isTrueISpeak(" ");
isTrueISpeak("?");
isTrueISpeak([]);
isTrueISpeak([1, 2]);
isTrueISpeak({});
