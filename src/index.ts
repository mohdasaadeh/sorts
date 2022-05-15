import { NumberCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollection";
import { LinkedListCollection } from "./LinkedListCollection";

const numberCollection = new NumberCollection([3, 0, -5, -10]);

numberCollection.sort();

console.log(numberCollection.collection);

const stringCollection = new StringCollection("XayB");

stringCollection.sort();

console.log(stringCollection.collection);

const linkedListCollection = new LinkedListCollection();

linkedListCollection.add(3);
linkedListCollection.add(-5);
linkedListCollection.add(-10);
linkedListCollection.add(0);

linkedListCollection.sort();

linkedListCollection.printCollection();
