const container = document.querySelector("#container");
const display = document.querySelector("#display");

let number1 = null;
let number2 = null;
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
    number1 = null;
    number2 = null;
    operator = null;
    return;
  }

  populateDisplay(target.value);
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

function populateDisplay(value) {
  if (!number1 && !isNaN(value)) {
    number1 = value;
  }

  if (!operator && "+-*/".includes(value) && number1 !== null) {
    operator = value;
  }

  if (!number2 && !isNaN(value) && number1 !== null && operator !== null) {
    number2 = value;
  }

  display.value = number1 ? number1 : "";
  display.value += operator ? operator : "";
  display.value += number2 ? number2 : "";
}