"use strict";
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    if (y === 0) {
        alert("You cannot divide by 0");
        return y;
    }
    else {
        return x / y;
    }
}
const operators = ["add", "subtract", "multiply", "divide"];
let num1;
let num2;
let operator;
function operate(n1, n2, op) {
    switch (op) {
        case "add":
            return add(n1, n2);
        case "subtract":
            return subtract(n1, n2);
        case "multiply":
            return multiply(n1, n2);
        case "divide":
            return divide(n1, n2);
    }
}
