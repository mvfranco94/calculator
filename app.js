const container = document.querySelector("#container");
const display = document.querySelector("#display");

let number1 = 0;
let number2 = 0;
let operator = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

container.addEventListener("click", function (e) {
  const target = e.target;
  
  if (target.type !== "submit") {
    return;
  }

  if (target.value === "clear") {
    display.value = "";
    return;
  }
})

function operate(operator, number1, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
  }
}