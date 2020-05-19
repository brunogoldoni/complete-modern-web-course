class People {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`My names is ${this.name}`);
  }
}

const p1 = new People("João");
p1.speak();

const people = (name) => {
  return {
    speak: () => console.log(`My name is ${name}`),
  };
};

const p2 = createPeople("Maria");
p2.speak();
