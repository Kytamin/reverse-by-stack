"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var stack = new Stack_1.Stack();
function reverse(Array) {
    for (var i = 0; i < numbers.length; i++) {
        stack.push(numbers[i]);
    }
    for (var i = 0; i < Array.length; i++) {
        Array[i] = stack.pop();
    }
    return Array;
}
console.log(reverse(numbers));
