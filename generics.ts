// Simple Generics
function echo(data: any) {
  return data;
}

console.log(echo("Vijay"));
console.log(echo(24));
console.log(echo({ name: "Vijay", age: 24 }));

// Better Generic
function betterEcho<T>(param: T) {
  return param;
}

console.log(betterEcho("Vijay").length);
console.log(betterEcho<number>(24));
console.log(betterEcho({ name: "Vijay", age: 24 }));

// Built-in Generic
const testResult: Array<number> = [1.99, 2.44];
testResult.push(-22.0);
console.log(testResult);

// Arrays
function printAll<T>(params: T[]) {
  params.forEach(el => console.log(el));
}

printAll<string>(["Apple", "Mango"]);

// Generic Function Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2("SSS"));

// Generic Class
class SimpleMath<T, U extends number | string> {
  baseValue: T;
  multipleValue: U;
  calculate(): number {
    return +this.baseValue * +this.multipleValue;
  }
}

const simpleMath = new SimpleMath<number, number>();
simpleMath.baseValue = 10;
simpleMath.multipleValue = 20;
console.log(simpleMath.calculate());
