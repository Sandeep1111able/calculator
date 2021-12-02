const screen = document.querySelector('.screen');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear');
const backSpace = document.querySelector('.backspace');
let firstValue = '',
    result = '',
    secondValue = '',
    symbol = '';


function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);

        case '-':
            return sub(num1, num2);

        case '/':
            if (num2 === 0) {
                return "Please don't divide by zero";
            } else {
                return divide(num1, num2);
            }
        case '*':
            return multiply(num1, num2);


    }

}


clear.addEventListener('click', function() {
    screen.textContent = '';
    firstValue = '';
    secondValue = '';
    symbol = '';
});

backSpace.addEventListener('click', function() {
    screen.textContent = screen.textContent.slice(0, -1);
});







operators.forEach((operator) => {
    operator.addEventListener('click', function(e) {

        if (symbol === '') {
            symbol = e.target.textContent.trim();

        } else {

            screen.textContent = operate(symbol, +firstValue, +secondValue);
            firstValue = screen.textContent;
            secondValue = '';
            symbol = e.target.textContent.trim();

        }
    });
});

numbers.forEach((number) => {
    number.addEventListener('click', function(e) {

        if (symbol === '') {

            if (!(screen.textContent.includes(".") && e.target.textContent === ".")) {
                screen.textContent = '';
                firstValue += number.textContent;
                screen.textContent = firstValue;
            }
        } else {

            if (!(screen.textContent.includes(".") && e.target.textContent === ".")) {
                screen.textContent = '';
                secondValue += number.textContent;
                screen.textContent = secondValue;
            }
        }


    });
});

equals.addEventListener('click', function() {
    if (screen.textContent === '') {
        return;
    }


    screen.textContent = '';

    result = operate(symbol, +firstValue, +secondValue);
    screen.textContent = result;
    firstValue = result;
    secondValue = '';
    symbol = '';
    console.log(secondValue, firstValue, symbol);
});