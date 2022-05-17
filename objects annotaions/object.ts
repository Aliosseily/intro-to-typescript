// creating alias type to reduce typing same type multiple times;
type Person = {
  name: string;
  age: number;
};

// let person: {
//   name: string;
//   age: number;
// };
let person: Person;

person = {
  name: "ali",
  age: 20,
};

// people is array of {name,age} objects
// let people: {
//   name: string;
//   age: number;
// }[];
let people: Person[];
