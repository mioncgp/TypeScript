// Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow.
// Classes that are derived from an interface must follow the structure provided by their interface.

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

// with interface
// we can use anytype we want not just primitive values
interface Reportable {
  summary(): string;
}

const summary = (item: Reportable): void => {
  console.log(`${item.summary()}`);
};

// General strategy for reusable code in TS
// 1) Create functions that accept argumrnts that are typed with interfaces
// 2) Object/classes can decide to implement a given interface to work with a function
