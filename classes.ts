class Person {
  public name: string;
  private type: string;
  protected age: number = 24;

  constructor(name: string, public userName: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Programmer");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Vijay", "Prince222");
console.log(person);
console.log(person.name, person.userName);
person.printAge();
// person.setType("Programmer");

// Inheritence
class Vijay extends Person {
  //   name = "Vijay";
  constructor(name: string, public userName: string) {
    super(name, userName);
    this.age = 24;
  }
}
const vj = new Vijay("Prince", "Vijay");
console.log(vj);

// Getters and setters

class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Tomato";
console.log(plant.species);

// Static Properties and Methods
class Helpers {
  static PI: number = 3.14; // variable declared with static type is to access the variable without Initiative.
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(6));

// Abstract Classes
abstract class Project {
  // Abstract can't be initiate it, It have to be inherited.
  projectName: string = "Default";
  budget: number = 1000;

  abstract changeName(name: string): void;
  // abstract method inside an abstract class expects the same name and type methon in its extracted class.

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

// Private Constructor
class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("Only One");
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne("The only One");
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = "Som other";
