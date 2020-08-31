class NodeObj {
  next: NodeObj | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: NodeObj | null = null;

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
}
