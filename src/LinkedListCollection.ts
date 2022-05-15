class MyNode {
  next: MyNode | null = null;

  constructor(public value: number) {}
}

export class LinkedListCollection {
  head: MyNode | null = null;

  add(value: number): void {
    const node = new MyNode(value);

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

  at(index: number): MyNode {
    if (!this.head) throw new Error("The linkedlist is empty");

    let node = this.head;

    for (let i = 0; i < index; i++) {
      if (!node.next) throw new Error("The index is out of bounds");

      node = node.next;
    }

    return node;
  }

  get length(): number {
    if (!this.head) throw new Error("The linkedlist is empty");

    let node = this.head;
    let counter = 1;

    while (node.next) {
      counter++;

      node = node.next;
    }

    return counter;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.at(leftIndex).value, this.at(rightIndex).value] = [
      this.at(rightIndex).value,
      this.at(leftIndex).value,
    ];
  }

  collection(): void {
    if (!this.head) throw new Error("The linkedlist is empty");

    let node = this.head;

    while (node.next) {
      console.log(node.value);

      node = node.next;
    }

    console.log(node.value);
  }
}
