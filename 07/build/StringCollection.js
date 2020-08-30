"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
var StringCollection = /** @class */ (function () {
    function StringCollection(data) {
        this.data = data;
    }
    Object.defineProperty(StringCollection.prototype, "length", {
        // the get keyword eliminates the need of parentheses to call a method
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    StringCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    StringCollection.prototype.swap = function (leftIndex, rightIndex) {
        var arr = this.data.split("");
        var temp = arr[leftIndex];
        arr[leftIndex] = arr[rightIndex];
        arr[rightIndex] = temp;
        this.data = arr.join("");
    };
    return StringCollection;
}());
exports.StringCollection = StringCollection;
