class Animal {
  // field declarations are an experimental feature proposed at TC39
  // Check it out, here: https://javascript.info/class#class-fields
  speed;
  name;
  species;
  predator = false;
  prey = false;

  constructor(name) {
    this.speed = 0;
    this.name = name;
    this.hunts = function (cat) {
      if (cat === "feline") {
        return (this.predator = true);
      } else {
        return (this.predator = false);
      }
    };
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} got tired and is now stands still.`);
  }
}

class Rabbit extends Animal {
  furColor;
  gender;

  constructor(name, color, gender) {
    super(name);
    this.furColor = color;
    this.gender = gender;
  }
}

let myRabbit = new Rabbit("Fred", "white", "male");

const hunter = myRabbit.hunts("feline");
console.log(` Am I a hunter? ${hunter}`);
console.log(` -> Predator is ${myRabbit.predator}`);
myRabbit.run(10);
