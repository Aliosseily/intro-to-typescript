export {};
// Tuples
// Array-like structure where each element represents some property of a record
// an Array tell us a bunch of different records or organizes a collection of different records
// a tuple usually contains multiple diffrent properties to describe one single thing.
// usually in tuples we mix and match many different types of data inside there.

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

//instead of define tuples type like this every time
const coffee: [string, boolean, number] = ["black", false, 0];

// we create Drink type alias
type Drink = [string, boolean, number];
const pepsi = ["brown", true, 40];
const sprite = ["white", true, 40];
const tea = ["brown", false, 0];
