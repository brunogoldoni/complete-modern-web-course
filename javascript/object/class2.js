class Grandfather {
  constructor(lastName) {
    this.lastName = lastName;
  }
}

class Dad extends Grandfather {
  constructor(lastName, profession = "Teacher") {
    super(lastName);
    this.profession = profession;
  }
}

class Son extends Dad {
  constructor() {
    super("Silva");
  }
}

const son = new Son();
console.log(son);
