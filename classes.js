var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.age = 24;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Programmer");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Vijay", "Prince222");
console.log(person);
console.log(person.name, person.userName);
person.printAge();
// person.setType("Programmer");
// Inheritence
var Vijay = /** @class */ (function (_super) {
    __extends(Vijay, _super);
    //   name = "Vijay";
    function Vijay(name, userName) {
        var _this = _super.call(this, name, userName) || this;
        _this.userName = userName;
        _this.age = 24;
        return _this;
    }
    return Vijay;
}(Person));
var vj = new Vijay("Prince", "Vijay");
console.log(vj);
// Getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Tomato";
console.log(plant.species);
// Static Properties and Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14; // variable declared with static type is to access the variable without Initiative.
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(6));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        // Abstract can't be initiate it is used for only to inherite it.
        this.projectName = "Default";
        this.budget = 1000;
    }
    // abstract method inside an abstract class expects the same name and type methon in its extracted class.
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
