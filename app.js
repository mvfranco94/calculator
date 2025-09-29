let number1 = 0;
let number2 = 0;
let operator = "";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

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

number1 = 3;
number2 = 2;

operator = "+"
console.log(`operate ${number1} ${operator} ${number2} : `, operate(operator, number1, number2));

operator = "-"
console.log(`operate ${number1} ${operator} ${number2} : `, operate(operator, number1, number2));

operator = "*"
console.log(`operate ${number1} ${operator} ${number2} : `, operate(operator, number1, number2));

operator = "/"
console.log(`operate ${number1} ${operator} ${number2} : `, operate(operator, number1, number2));