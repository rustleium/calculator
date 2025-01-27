let firstOperand = '';
let operator = '';
let nextOperand = '';
let result = '';

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