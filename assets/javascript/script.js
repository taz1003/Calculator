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
        appendNumber(value)
    });
};

// Iterating through all the operator buttons
for (let button of operatorButtons) {
    button.addEventListener("click", () => {
        let value = button.textContent;
        setOperator()
    });
};

// Add event listener for equals button
equalsButton.addEventListener("click", () => {
    mainCalculate();
});

// Add event listener for clear button
clearButton.addEventListener("click", () => {
    clearCalculator();
});

// Add event listener for decimal button
decimalButton.addEventListener("click", () => {
    appendNumber(".");
});


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
 * Appends numbers or decimal point
 */
function appendNumber(value) {
    // Stops if under any error state
    if (error)
        return;
    // Stops multiple decimal point inputs
    if (value === "." && currentInput.includes("."))
        return;
    // Appends value for each input
    currentInput += value;
    updateDisplay(currentInput);
}

/**
 * 
 */
function setOperator(op) {
    // Stops if under any error state
    if(error)
        return;

    // Allow operator change without entering a new number
    if (currentInput = "" && num1 !== null)
        operator = op;
        updateDisplay(`${num1} ${operator}`)

    // Initializes the current input as the number which is then saved as num1
    // for the calculation
    if (num1 === null) {
        num1 = parseFloat(currentInput);
    };

    operator = op;
    currentInput = ""; // Resets for new number input
    updateDisplay(`${num1} ${operator}`); // Show the operator in the display
}


/**
 * 
 */
function updateDisplay(value) {
    display.textContent = value;
}

/**
 * 
 */
function clearCalculator()