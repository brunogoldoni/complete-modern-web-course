const people = {
  greetings: "Good morning!",
  speak() {
    console.log(this.greetings);
  },
};

people.speak();
const speak = people.speak;
speak();

const speakAbout = people.speak.bind(people);
speakAbout();
