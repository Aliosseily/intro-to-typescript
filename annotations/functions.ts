// this function accept two numbers, and return a number
// you can't return a string, boolean..., and also you should return a number not console.log for example.
// although we get inference type on the output from the function,
// always add annotation for the function ,  because we can easily make a mistake inside of function
// and forget to return a value or even return an incorrect type

// use annotation in all kind of functions declaration

// arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

//function declaration
function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void
const logger = (message: string): void => {
  console.log(message);
};

// never
// the function wil not return any thing
// never means that we never going to reach the end of this function.
// we are never going to execute the function completely at some point inside of here.
// we're going to throw an error and exit the function early without returning any value.
// only annotate a function eit hthe type never when we really never expect the function to return any thing ever.

// if at least expect to return something eventually and only possibly through an error
// then we're going to annotate it with whatever we expect to eventually return (e.g. throwError2)

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
};

// destruturing with annotations and functions

const todayWeather = {
  date: new Date(),
  weather: "sunny",
};
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todayWeather);
