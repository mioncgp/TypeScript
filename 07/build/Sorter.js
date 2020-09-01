"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorted = void 0;
var Sorted = /** @class */ (function () {
    function Sorted() {
    }
    Sorted.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorted;
}());
exports.Sorted = Sorted;
