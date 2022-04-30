// we should make the interface generic
// and we can add to it properties we use inside functions, not all properties

// the point is that we can use a single interface to describe the shape or the different
// properties of very different objects.

interface Reportable {
  summary(): string; // function that return a string
}

const oldCivicCar = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary() {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable) => {
  console.log(item.summary);
};
printSummary(oldCivicCar);
printSummary(drink);
