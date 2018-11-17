"use strict";
// let and const
var variable = "Test";
console.log(variable);
variable = "Another Value";
console.log(variable);
var maxValue = 100;
console.log(maxValue);
// maxValue = 22; // won't work
// Block scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//Arrow functions
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(1, 2));
var multiplyNUmbers = function (num1, num2) { return num1 * num2; };
console.log(multiplyNUmbers(1, 2));
var greet = function () { return console.log("Hello"); };
greet();
// Default parameters
var greetFunc = function (greet, name) {
    if (greet === void 0) { greet = "Hello"; }
    console.log(greet, name);
};
greetFunc(undefined, "Vijay");
// Rest and Spread
var numbers = [1, 3, 22, 444, -33];
console.log(Math.max(1, 5, 22, 555));
console.log(Math.max.apply(Math, numbers)); // Spread
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Rest
    return args;
}
console.log(makeArray(1, 2, 3, 4));
function makeArray2(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray2("Vijay", 1, 2, 3, 4));
// Destructuring
var myHobbies = ["Cooking", "Coding"];
var hobie1 = myHobbies[0], hobie2 = myHobbies[1];
console.log(hobie1, hobie2);
var personData = { personName: "Vijay", age: 27 };
var myNamee = personData.personName, myAgee = personData.age; // creating an alias variable name
console.log(myNamee, myAgee);
// Template literals
var username = "Vijay";
var greetingVar = "Hello, I'm " + username;
console.log(greetingVar);
