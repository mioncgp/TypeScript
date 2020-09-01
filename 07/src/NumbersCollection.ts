import { Sorted } from "./Sorter";

export class NumbersCollection extends Sorted {
  constructor(public data: number[]) {
    super();
  }

  // the get keyword eliminates the need of parentheses to call a method
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number) {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}
