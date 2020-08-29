"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorted = void 0;
var Sorted = /** @class */ (function () {
    function Sorted(collection) {
        this.collection = collection;
    }
    Sorted.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorted;
}());
exports.Sorted = Sorted;
