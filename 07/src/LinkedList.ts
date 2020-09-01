import { Sorted } from "./Sorter";

class NodeObj {
  next: NodeObj | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorted {
  head: NodeObj | null = null;
  constructor() {
    super();
  }

  // get length of a linked list
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  // add a node at the end of a linked list
  add(data: number): void {
    const node = new NodeObj(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  // return an item at given index
  at(index: number): NodeObj {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
    let counter = 0;
    let node: NodeObj | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }

  // compare the value of two given nodes
  compare(leftIndex: number, rightIndex: number) {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // swap two cvalues of nodes
  swap(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print() {
    if (!this.head) {
      return;
    }
    let node: NodeObj | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
