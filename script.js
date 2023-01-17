const numbers = document.querySelectorAll(".numbers");
const screen = document.querySelector(".screen");
const operators = document.querySelectorAll(".operators");
let firstNumber = "";
let secondNumber = "";
let choosenOperator = "";
let finalValue = "";

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "x":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
  }
};

const populateDisplay = function (e) {
  if (choosenOperator === "") {
    screen.textContent += this.textContent;
    firstNumber = Number(screen.textContent);
  } else {
    screen.textContent += this.textContent;
    secondNumber = Number(screen.textContent);
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", populateDisplay);
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (operator.textContent !== "=") {
      screen.textContent = "";
      choosenOperator = operator.textContent;
    } else {
      finalValue = operate(choosenOperator, firstNumber, secondNumber);
      screen.textContent = finalValue;
    }
  });
});
