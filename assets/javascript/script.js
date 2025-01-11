// DOM elements
const display = document.getElementById("calc-display"); // Select display
const numberButtons = document.querySelectorAll(".numbers");
const equalsButton = document.querySelector(".button-equal");
const operatorButtons = document.querySelectorAll(".button-operator");
const decimalButton = document.getElementById("decimal");
const clearButton = document.getElementById("button-clear");

let error = false



for (let button of numberButtons) {
    button.addEventListener("click", () => {
        let value = button.textContent;
    });
};

function mainCalculate() {

    let result
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "x") {
        result = num1 * num2;
    } else if (operator === "÷") {
        result = num2 !== 0 ? num1/num2 : "Error" // Shows error if dividing by zero
    } else {
        result = "Invalid Operator" // Handle invalid operators
    }
}


function updateDisplay() {
    
}


function clearCalculator()


