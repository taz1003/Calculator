// DOM elements
const display = document.getElementById("calc-display"); // Select display
const numberButtons = document.querySelectorAll(".numbers");
const equalsButton = document.querySelector(".button-equal");
const operatorButtons = document.querySelectorAll(".button-operator");
const decimalButton = document.getElementById("decimal");
const clearButton = document.getElementById("button-clear");

// Initialize variables for the calculator state
let error = false; // error state
let currentInput = ""; // stores the latest input
let num1 = null; // first number
let operator = null; // operators

// Iterating through all the number buttons
for (let button of numberButtons) {
    button.addEventListener("click", () => {
        let value = button.textContent;
        appendNumber()
    });
};

// Iterating through all the operator buttons
for (let button of operatorButtons) {
    button.addEventListener("click" => (
        let value = button.textContent;
        setOperator()
    ));
};

/**
 * Calculates 
 */
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
    };
};


/**
 * 
 */
function appendNumber()

/**
 * 
 */
function setOperator()


/**
 * 
 */
function updateDisplay()

/**
 * 
 */
function clearCalculator()