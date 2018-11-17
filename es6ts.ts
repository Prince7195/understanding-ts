// let and const
let variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable);

const maxValue = 100;
console.log(maxValue);
// maxValue = 22; // won't work

// Block scope
function reset() {
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

//Arrow functions
const addNumbers = function(num1: number, num2: number): number {
  return num1 + num2;
};
console.log(addNumbers(1, 2));

const multiplyNUmbers = (num1: number, num2: number): number => num1 * num2;
console.log(multiplyNUmbers(1, 2));

const greet = () => console.log("Hello");
greet();

// Default parameters
const greetFunc = (greet: string = "Hello", name: string) => {
  console.log(greet, name);
};
greetFunc(undefined, "Vijay");

// Rest and Spread
const numbers = [1, 3, 22, 444, -33];
console.log(Math.max(1, 5, 22, 555));
console.log(Math.max(...numbers)); // Spread

function makeArray(...args: number[]) {
  // Rest
  return args;
}
console.log(makeArray(1, 2, 3, 4));
function makeArray2(name: string, ...args: number[]) {
  return args;
}
console.log(makeArray2("Vijay", 1, 2, 3, 4));

// Destructuring
const myHobbies = ["Cooking", "Coding"];
const [hobie1, hobie2] = myHobbies;
console.log(hobie1, hobie2);

const personData = { personName: "Vijay", age: 27 };
const { personName: myNamee, age: myAgee } = personData; // creating an alias variable name
console.log(myNamee, myAgee);

// Template literals
const username = "Vijay";
const greetingVar = `Hello, I'm ${username}`;
console.log(greetingVar);
