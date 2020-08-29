"use strict";
// Narrow type of a value to a primitive type with typeof: number, string, boolean, symbol
// Narrow down every other type of value with instanceof: every value that is created with a constructor function
var Sorted = /** @class */ (function () {
    function Sorted(collection) {
        this.collection = collection;
    }
    Sorted.prototype.sort = function () {
        // type guard
        if (this.collection instanceof Array) {
            var length_1 = this.collection.length;
            for (var i = 0; i < length_1; i++) {
                for (var j = 0; j < length_1 - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
        // type guard
        if (this.collection === "string") {
        }
    };
    return Sorted;
}());
var sorted = new Sorted([10, 3, -5, 0]);
sorted.sort();
console.log(sorted.collection);
