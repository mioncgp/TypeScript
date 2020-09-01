"use strict";
// Narrow type of a value to a primitive type with typeof: number, string, boolean, symbol
// Narrow down every other type of value with instanceof: every value that is created with a constructor function
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var st = new LinkedList_1.LinkedList();
st.add(2);
st.add(13);
st.add(1);
st.add(6);
st.sort();
st.print();
