const display = document.getElementById("calc-display"); // Select display
const buttons = document.querySelectorAll("buttons-id buttons"); // selects all buttons

let error = false

for (let button of buttons) {
    button.addEventListener("click", () => {
        let value = button.textContent;
    })
}

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


function updateDisplay()


function clearCalculator()


