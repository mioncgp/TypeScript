"use strict";
// Narrow type of a value to a primitive type with typeof: number, string, boolean, symbol
// Narrow down every other type of value with instanceof: every value that is created with a constructor function
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorted = new Sorter_1.Sorted(numbersCollection);
