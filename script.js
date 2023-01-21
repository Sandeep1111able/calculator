const numbers = document.querySelectorAll(".numbers");
const screen = document.querySelector(".screen");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
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
  if (screen.textContent.length >= 11) {
    return;
  }
  if (this.textContent === ".") {
    if (screen.textContent.indexOf(".") !== -1) {
      return;
    }
  }
  if (choosenOperator === "") {
    screen.textContent += this.textContent;
    firstNumber = Number(screen.textContent);
  } else {
    screen.textContent += this.textContent;
    secondNumber = Number(screen.textContent);
  }
};

const toggleBtn = function (buttons, booleanValue) {
  buttons.forEach((button) => {
    button.disabled = booleanValue;
  });
};

numbers.forEach((number) => {
  number.addEventListener("click", populateDisplay);
});

const calculate = function () {
  finalValue = operate(choosenOperator, firstNumber, secondNumber);
  if (finalValue.toString().length > 11) {
    finalValue = finalValue.toPrecision(8);
  }
  screen.textContent = finalValue;
  firstNumber = finalValue;
  secondNumber = "";
  toggleBtn(numbers, true);
};

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    toggleBtn(numbers, false);
    toggleBtn(operators, false);
    if (operator.textContent !== "=") {
      if (firstNumber !== "" && secondNumber !== "") {
        calculate();
        return;
      }
      screen.textContent = "";
      choosenOperator = operator.textContent;
    } else {
      calculate();
      operator.disabled = true;
    }
  });
});

clear.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  choosenOperator = "";
  finalValue = "";
  screen.textContent = "";
  toggleBtn(numbers, false);
  toggleBtn(operators, false);
});

backspace.addEventListener("click", () => {
  screen.textContent = screen.textContent.slice(
    0,
    screen.textContent.length - 1
  );
});
