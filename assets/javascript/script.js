const display = document.getElementById("calc-display"); // Select display
const buttons = document.querySelectorAll("buttons-id buttons"); // selects all buttons

for (let button of buttons) {
    button.addEventListener("click", () => {
        let value = button.textContent;
    })
}