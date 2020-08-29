// Narrow type of a value to a primitive type with typeof: number, string, boolean, symbol
// Narrow down every other type of value with instanceof: every value that is created with a constructor function

class Sorted {
  collection: number[] | string;
  constructor(collection: number[] | string) {
    this.collection = collection;
  }

  sort(): void {
    // type guard
    if (this.collection instanceof Array) {
      const { length } = this.collection;
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            let temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
      }
    }

    // type guard
    if (this.collection === "string") {
    }
  }
}

const sorted = new Sorted([10, 3, -5, 0]);
sorted.sort();
console.log(sorted.collection);
