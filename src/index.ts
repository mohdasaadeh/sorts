import { NumberCollection } from "./NumberCollection";
import { StringCollection } from "./StringCollection";
import { LinkedListCollection } from "./LinkedListCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumberCollection([3, 0, -5, -10]);
const numberSorter = new Sorter(numberCollection);

numberSorter.sort();

console.log(numberCollection.collection);

const stringCollection = new StringCollection("XayB");
const stringSorter = new Sorter(stringCollection);

stringSorter.sort();

console.log(stringCollection.collection);

const linkedListCollection = new LinkedListCollection();
const linkedListSorter = new Sorter(linkedListCollection);

linkedListCollection.add(3);
linkedListCollection.add(-5);
linkedListCollection.add(-10);
linkedListCollection.add(0);

linkedListSorter.sort();

linkedListCollection.collection();
