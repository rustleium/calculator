let firstOperand = '';
let operator = '';
let nextOperand = '';
let result = '';

const displayScreen = document.querySelector('.display');
const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');

numberBtns.forEach((num) => {
  num.addEventListener('click', () => populateNumbers(num));
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {

  if (b === 0) {
    return 'Error: Cannot divide a number by 0';
  } else {
    return a / b;
  }
}

function operate(firstOperand, operator, nextOperand) {
  const a = parseInt(firstOperand);
  const b = parseInt(nextOperand);
  switch (operator) {
    case 'add':
      return add(a, b);
    case 'subtract':
      return subtract(a, b);
    case 'multiply':
      return multiply(a, b);
    case 'divide':
      return divide(a, b);
    default:
      return 'Error: Invalid Operator';
      break;
  }
}

function populateNumbers(num) {
  displayScreen.textContent += num.textContent;
}