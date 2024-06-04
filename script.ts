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

const operators: string[] = ["add","subtract","multiply","divide"];

let num1: number;
let num2: number;
let operator: string;

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

