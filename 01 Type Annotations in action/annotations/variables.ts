let apples: number = 5; // the colon and the word after the variale is our type annotations
let speed: string = "lol";
let boolean: boolean = true;

// build in objects
let now: Date = new Date();

// array
let colors: string[] = ["sss", "black", "ss"]; // array that contains strings
let numbers: number[] = [1, 2, 4];
let falseTrue: boolean[] = [true, true, false];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
const logNum: (i: number) => void = (i: number) => {
  console.log(i);
};

// generally, "type inference" is preferred over "type annotations"
//  except 3 cases:
// 1) when a function returns the "any" type and we need to clarify the value
const json = '{"x": 10, "y: 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// 2) when we declare a variable on one line then initialize it later
const arr = ["1", "2"];
let falsy: boolean;
for (let i = 0; i < 10; i++) {
  if (arr[i] === "1") {
    falsy = true;
  }
}
// 3) when we want a variable to have a tpye that can't be inferred correctly
