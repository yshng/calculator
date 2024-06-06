"use strict";
const displayText = document.querySelector("#display");
function resetDisplay() {
    if (displayText !== null) {
        displayText.textContent = "0";
    }
    else {
        console.log("Error: No element with id = 'display'");
    }
}
resetDisplay();
function add(x, y) {
    return String(parseInt(x) + parseInt(y));
}
function subtract(x, y) {
    return String(parseInt(x) - parseInt(y));
}
function multiply(x, y) {
    return String(parseInt(x) * parseInt(y));
}
function divide(x, y) {
    if (y === "0") {
        alert("You cannot divide by 0");
        return undefined;
    }
    else {
        let result = parseInt(x) / parseInt(y);
        let buffer = 10 - String(result).length;
        return result.toFixed(buffer);
    }
}
let num1 = "";
let num2 = "";
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
const number_buttons = document.querySelectorAll("button.number");
number_buttons.forEach((number_button) => {
    const value = number_button.getAttribute("id");
    number_button.addEventListener("click", () => type_number(value));
});
function type_number(value) {
    if (num1 === "") {
        num1 += value;
        updateDisplay(num1);
    }
    else {
        num2 += value;
        updateDisplay(num2);
    }
}
function updateDisplay(value) {
    if (displayText !== null && displayText.textContent !== null) {
        if (displayText.textContent.length >= 10) {
            alert("Calculator can only take inputs up to 10 digits");
        }
        else {
            displayText.textContent = value;
        }
    }
}
function clearMemory() {
    num1 = "";
    num2 = "";
}
const clear_button = document.querySelector("#clear");
if (clear_button !== null) {
    clear_button.addEventListener("click", () => resetDisplay());
}
else {
    console.log("Error: No element with id = 'clear'");
}
const equals_button = document.querySelector("#equals");
if (equals_button !== null) {
    equals_button.addEventListener("click", () => {
        if (num1 === "") {
            updateDisplay("0");
        }
        else if (num2 === "") {
            updateDisplay(num1);
            clearMemory();
        }
        else {
            num1 = String(operate(num1, num2, operator));
            updateDisplay(num1);
            num2 = "";
        }
    });
}
else {
    console.log("Error: No element with id = 'equals'");
}
const operation_buttons = document.querySelectorAll("operator");
if (operation_buttons !== null) {
    operation_buttons.forEach((operation_button) => {
        operation_button.addEventListener("click", (event) => event);
    });
}
