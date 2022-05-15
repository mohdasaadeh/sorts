import { Sorter } from "./Sorter";

export class NumberCollection extends Sorter {
  constructor(public collection: number[]) {
    super();
  }

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.collection[leftIndex] > this.collection[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.collection[leftIndex], this.collection[rightIndex]] = [
      this.collection[rightIndex],
      this.collection[leftIndex],
    ];
  }
}
