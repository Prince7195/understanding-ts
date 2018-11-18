interface NamedPerson {
  firstName: string;
  age?: number;
  [key: string]: any;
  greet(lastName: string): void;
}

function greetMe(person: NamedPerson) {
  console.log(`Hello, ${person.firstName}`);
}

function changeName(person: NamedPerson) {
  person.firstName = "Anna";
}

const persen: NamedPerson = {
  firstName: "Vijay",
  greet(lastName: string) {
    console.log(`Hi, I'm ${this.firstName} ${lastName}`);
  }
};

// greetMe({
//   firstName: "Max",
//   age: 24
// });
// changeName(persen);
greetMe(persen);
persen.greet("Deepak");

class NewPerson implements NamedPerson {
  firstName: string = "";
  lastName: string = "";
  constructor() {}
  greet(lastName: string) {
    console.log(`Hi, I'm ${this.firstName} ${lastName}`);
  }
}

const myPersonal = new NewPerson();
myPersonal.firstName = "Vijay";
myPersonal.lastName = "Deepak";
greetMe(myPersonal);
myPersonal.greet(myPersonal.lastName);

// Function Types

interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

const myDoubleFunction: DoubleValueFunc = function(
  number1: number,
  number2: number
): number {
  return number1 * number2 * 2;
};

console.log(myDoubleFunction(2, 3));

// Interface Ingeritance
interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  firstName: "VJ",
  age: 24,
  greet(lastName: string) {
    console.log(`Hi, I'm ${this.firstName} ${lastName}`);
  }
};

console.log(oldPerson);
