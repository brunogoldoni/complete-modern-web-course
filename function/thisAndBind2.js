function people() {
  this.age = 0;

  const self = this;
  setInterval(
    function () {
      this.age++;
      console.log(this.age);
    } /*.bind(this)*/,
    1000
  );
}

new people();
