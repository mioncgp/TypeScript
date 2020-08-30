"use strict";
// Narrow type of a value to a primitive type with typeof: number, string, boolean, symbol
// Narrow down every other type of value with instanceof: every value that is created with a constructor function
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var StringCollection_1 = require("./StringCollection");
var st = new StringCollection_1.StringCollection("Xaayb");
var sorted = new Sorter_1.Sorted(st);
sorted.sort();
console.log(st.data);
