function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class PersonX {
  constructor() {
    console.log("Hi, Hello");
  }
}

// Decorator Factory
function logging(val: boolean) {
  return val ? logged : null;
}

@logging(true)
class Car {
  firstname: string = "Vijay";
  lastName: string = "Deepak";
}

// Advanced Decorator
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}

@logging(true)
@printable
class Plants {
  name = "Prince";
}
const plant = new Plants();
(<any>plant).print();

// Method Decorator
function editable(val: boolean) {
  return function(target, propertyKey: string, descriptor: PropertyDescriptor) {
    // descriptor.writable = val;
    console.log(descriptor);
  };
}

// Property Decorator
function overwritable(value: boolean) {
  return function(target, propertyKey: string) {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  };
}

class Projects {
  @overwritable(false)
  projectName: string;
  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const newprojectX = new Projects("Super Project");
newprojectX.calcBudget();
newprojectX.calcBudget = function() {
  console.log(2000);
};
newprojectX.calcBudget();
console.log(newprojectX);

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target ", target);
  console.log("Method Name ", methodName);
  console.log("Param Index ", paramIndex);
}

class Course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  printAll(mode: string, @printInfo print: boolean) {
    if (print) {
      console.log(100000);
    } else {
      console.log(1000);
    }
  }
}

const course = new Course("Java Script");
course.printAll("one", true);
course.printAll("two", false);
