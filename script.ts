const displayText = document.querySelector("#display");

function resetDisplay() {
	if (displayText !== null) {
		displayText.textContent = "0";
	} else {
		console.log("Error: No element with id = 'display'");
	}
}

resetDisplay();

function add(x: number,y: number): number {
	return x + y;
}


function subtract(x: number, y: number): number {
	return x - y;
}


function multiply(x: number, y: number): number {
	return x * y;
}


function divide(x: number, y: number): number  {
	if (y === 0) {
		alert("You cannot divide by 0");
		return y;		
	} else {
		return x / y;
	}
}

let num1: string = "";
let num2: string = "";
let operator: string;
let waiting_for_second_number: boolean = false;

function operate (n1: number, n2: number, op: string): number | undefined {
	switch (op) {
	case "add": 
		return add(n1,n2);
	case "subtract":
		return subtract(n1,n2);
	case "multiply":
		return multiply(n1,n2);
	case "divide":
		return divide(n1,n2);
	}
}

const number_buttons = document.querySelectorAll("button.number");
number_buttons.forEach((number_button) => {
	const value: string = number_button.getAttribute("id")!;
	number_button.addEventListener("click", () => type_number(value));
})

function type_number(val: string) {


	if (!waiting_for_second_number) {num1 += val;}

	if (displayText !== null && displayText.textContent !== null) {
		if (displayText.textContent.length >= 10) {
			alert ("Calculator can only take inputs up to 10 digits");
		} else {
			displayText.textContent = num1;
		}
	}
}

const clear_button = document.querySelector("#clear");
if (clear_button !== null) {
	clear_button.addEventListener("click", () => resetDisplay());
} else {
	console.log("Error: No element with id = 'clear'");
}

const operation_buttons = document.querySelectorAll("operator"); 
if (operation_buttons !== null) {
	operation_buttons.forEach((operation_button) => {
		operation_button.addEventListener("click", (event) => event)
	})
}