export class StringCollection {
  stringArray: string[];

  constructor(public collection: string) {
    this.stringArray = collection.toLowerCase().split("");
  }

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.stringArray[leftIndex] > this.stringArray[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    [this.stringArray[leftIndex], this.stringArray[rightIndex]] = [
      this.stringArray[rightIndex],
      this.stringArray[leftIndex],
    ];

    this.collection = this.stringArray.join("");
  }
}
