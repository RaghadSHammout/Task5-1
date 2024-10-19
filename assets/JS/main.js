let firstNumber = '';
let secondNumber = '';
let operator = '';

const display = document.querySelector('#display');

function addToDisplay(value) {
    display.value += value;
    if (!operator) {
        firstNumber += value;
    } else {
        secondNumber += value;
    }
}

const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b === 0 ? 'ERROR' : a / b
};

document.querySelector('#sqrt').addEventListener('click', () => {
    updateDisplay(Math.sqrt(parseFloat(firstNumber)));
});

document.querySelector('#square').addEventListener('click', () => {
    updateDisplay(Math.pow(parseFloat(firstNumber), 2));
});

document.querySelector('#factorial').addEventListener('click', () => {
    let result = 1;
    for (let i = 2; i <= parseInt(firstNumber); i++) {
        result *= i;
    }
    updateDisplay(result);
});

function calculateResult() {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result;
    if (operations[operator]) {
        result = operations[operator](num1, num2);
    } else {
        result = 'ERROR';
    }
    updateDisplay(result);
    secondNumber = '';
    operator = '';
}

function clearDisplay() {
    updateDisplay('');
    firstNumber = '';
    secondNumber = '';
    operator = '';
}

function updateDisplay(result) {
    display.value = result;
    firstNumber = result;
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;

        if (['+', '-', '*', '/'].includes(value)) {
            operator = value;
            display.value += ` ${value} `;
        } else if (value === 'C') {
            clearDisplay();
        } else {
            addToDisplay(value);1
        }
    });
});

document.querySelector('#equals').addEventListener('click', calculateResult);

document.querySelector('#clear').addEventListener('click', clearDisplay);
