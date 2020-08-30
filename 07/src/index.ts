// Narrow type of a value to a primitive type with typeof: number, string, boolean, symbol
// Narrow down every other type of value with instanceof: every value that is created with a constructor function

import { Sorted } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { StringCollection } from "./StringCollection";

const st = new StringCollection("Xaayb");
const sorted = new Sorted(st);
sorted.sort();
console.log(st.data);
