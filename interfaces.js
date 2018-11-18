function greetMe(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var persen = {
    firstName: "Vijay",
    greet: function (lastName) {
        console.log("Hi, I'm " + this.firstName + " " + lastName);
    }
};
// greetMe({
//   firstName: "Max",
//   age: 24
// });
// changeName(persen);
greetMe(persen);
persen.greet("Deepak");
var NewPerson = /** @class */ (function () {
    function NewPerson() {
        this.firstName = "";
        this.lastName = "";
    }
    NewPerson.prototype.greet = function (lastName) {
        console.log("Hi, I'm " + this.firstName + " " + lastName);
    };
    return NewPerson;
}());
var myPersonal = new NewPerson();
myPersonal.firstName = "Vijay";
myPersonal.lastName = "Deepak";
greetMe(myPersonal);
myPersonal.greet(myPersonal.lastName);
var myDoubleFunction = function (number1, number2) {
    return number1 * number2 * 2;
};
console.log(myDoubleFunction(2, 3));
var oldPerson = {
    firstName: "VJ",
    age: 24,
    greet: function (lastName) {
        console.log("Hi, I'm " + this.firstName + " " + lastName);
    }
};
console.log(oldPerson);
