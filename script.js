"use strict";
// storage, only ever working with two operands at a time 
let num1 = "";
let num2 = "";
let operator = "";
let waiting_on_second_number = false;
let last_button_equals = false;
// operation functions, less type-switching overall if use strings as input and output here
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
    const nonZeroY = parseInt(y);
    if (nonZeroY !== 0) {
        let result = parseInt(x) / nonZeroY;
        if (Number.isInteger(result)) {
            return result.toString();
        }
        else {
            return String(parseFloat(result.toFixed(8)));
        }
    }
    else {
        alert("You cannot divide by 0");
        return ":(";
    }
}
function operate(n1, n2, op) {
    if (op === "add") {
        return add(n1, n2);
    }
    else if (op === "subtract") {
        return subtract(n1, n2);
    }
    else if (op === "multiply") {
        return multiply(n1, n2);
    }
    else if (op === "divide") {
        return divide(n1, n2);
    }
    else
        return "how did we get here?";
}
// display
const displayText = document.querySelector("#display");
function clearAll() {
    num1 = "";
    num2 = "";
    operator = "";
    waiting_on_second_number = false;
    last_button_equals = false;
    if (displayText !== null) {
        displayText.textContent = "0";
    }
    else {
        console.log("Error: No element with id = 'display'");
    }
}
function updateDisplay(value) {
    if (displayText !== null && displayText.textContent !== null) {
        if (value === "NaN") {
            displayText.textContent = "Error";
            clearAll();
        }
        else {
            displayText.textContent = value;
        }
    }
}
clearAll();
// make buttons work
const number_buttons = document.querySelectorAll("button.number");
number_buttons.forEach((number_button) => {
    number_button.addEventListener("click", () => {
        const value = number_button.getAttribute("id");
        if (value !== null) {
            input_number(value);
        }
        ;
    });
});
function input_number(value) {
    if (last_button_equals === true) {
        clearAll();
    }
    if (waiting_on_second_number === false) {
        num1 += value;
        updateDisplay(num1);
    }
    else {
        num2 += value;
        updateDisplay(num2);
    }
}
const clear_button = document.querySelector("#clear");
if (clear_button !== null) {
    clear_button.addEventListener("click", () => clearAll());
}
else {
    console.log("Error: No element with id = 'clear'");
}
const equals_button = document.querySelector("#equals");
if (equals_button !== null) {
    equals_button.addEventListener("click", () => {
        if (num1 === "" || num2 === "") {
            ; // need two operands to do something
        }
        else {
            displayAnswer(num1, num2, operator);
            last_button_equals = true;
        }
    });
}
else {
    console.log("Error: No element with id = 'equals'");
}
function displayAnswer(n1, n2, op) {
    num1 = operate(num1, num2, operator);
    updateDisplay(num1);
    // save result as num1 so that another operation can immediately be used
    num2 = "";
    operator = "";
}
const operation_buttons = document.querySelectorAll(".operation");
if (operation_buttons !== null) {
    operation_buttons.forEach((operation_button) => {
        operation_button.addEventListener("click", () => {
            const value = operation_button.getAttribute("id");
            if (value !== null) {
                last_button_equals = false;
                if (operator !== "" && num1 !== "" && num2 !== "") { // chain operations
                    displayAnswer(num1, num2, operator);
                    input_operation(value);
                }
                else if (operator === "" && num1 !== "") { // regular operation
                    input_operation(value);
                }
            }
        });
    });
}
function input_operation(value) {
    operator = value;
    waiting_on_second_number = true;
}
