export class StringCollection {
  constructor(public data: String) {}

  // the get keyword eliminates the need of parentheses to call a method
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number) {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number) {
    const arr = this.data.split("");
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
    this.data = arr.join("");
  }
}
