export {};
// if we want to initialize an array as empty array, we should add our annotaion
const carMakers: string[] = [];

// if we want to initialize an array with some contnet, then we we can remove our annotaion
// because of inference type by typescript will know automatically that this array for example
// will contains strings

const carMakers2 = ["bmw", "toyota", "ford"];
const dates = [new Date(), new Date()];
// multidimention array
const carsByMake: string[][] = [];

const carsByMake2 = [["newboy"], ["corolla"], ["f150"]];

// why types arrays?

// 1) Help with inference when extracting values
// because of type inference, typescript will know that car and myCar variable is going to be a string.
const car = carMakers2[0];
const myCar = carMakers2.pop();
console.log(car, myCar);

// 2) prevent incompitable values
// carMakers2.push(5); cannot push number to array of strings

// 3) help with map, reduce, foreach...
// any time we are going to work with map, reduce, foreach. helpers typescript is going to give
// us autocomplete on the variable being passed into this function.
carMakers2.map((car: string): string => {
  return car.toUpperCase();
});

// 4) flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push("2030-10-10");
// importantDates.push(100); throw error

// type script will automatically know that this array is going to have Date and string
const importantDates2 = [new Date(), "2030-10-10"];
