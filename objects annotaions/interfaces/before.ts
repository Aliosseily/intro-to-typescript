// interfaces are about creating a new type, describing the property names and value types
// of an object
// So, when we create an interface, we are creating a new type inside our application, just the
// same way that we have types like string, number, boolean etc., we create another new type,
// it's a custom type that we are going to define.

interface Vehicle1 {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // function that return a string
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary() {
    return `Name: ${this.name}`;
  },
};

// instead of repeating this type of annotation every time we create a function that
// takes oldCivic parameter.we will end up with alot of duplicate code.
// const printVehicle = (vehicle: { name: string; year: number; broken: boolean }) => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

const printVehicle = (vehicle: Vehicle1) => {
  console.log(vehicle.summary);
};
printVehicle(oldCivic);
