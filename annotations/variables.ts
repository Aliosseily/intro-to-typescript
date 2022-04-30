// type annotation
// the colon and type is called type annotation

// type inference: typescript guesses the type
// when we are declaring and then initializing on the same line, we can not to add type annotation.
// instead if let test:number = 5; declare let test = 5; (on same line you don't have to add type annotation)

// in this case we are not declaring and initializing on the same line.
// so test variable well be of type any, you should add type annotaion to it.
// let test;
// test = 5

let apples: number = 5;
//apples = "test" // throw error

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

//Arrays
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {}
let car: Car = new Car();

//Object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
// logNumber accept num parameter of type number and does not return value
// (void means that this function does not return value)
let logNumber: (num: number) => void = (num) => {
  console.log(num);
};
logNumber(5);

// when to use type annotations

// 1) Function that return the 'any' type.

// JSON.parse is one of the functions that returns type 'any'
// coordinates is type any
// any time we have a variable of type any, it is generally a bad idea
//because typescript can't do it's job.
//JSON.parse returns type 'any', because typescript can't predict what json is going to return
// after we add annotaion { x: number; y: number }, coordinates will now not of typ 'any'
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x:10, y:20}

// 2) when we declare a variable on one line
// and initialize it later.

let words = ["red", "green", "blue"];
let foundWord: boolean; // better way let foundWord= false
for (let word of words) {
  if (word === "green") {
    foundWord = true;
  }
}

// 3) when we declare a varibale whose type cannot be infered correcty
// numberAboveZero can have two types
let numbers = [-10, -2, 5];
let numberAboveZero: boolean | number = false;
for (let num of numbers) {
  if (num > 0) {
    numberAboveZero = num;
  }
}
