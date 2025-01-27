let firstOperand = '';
let operator = '';
let nextOperand = '';
let result = '';

const displayScreen = document.querySelector('.display');
const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');

numberBtns.forEach((numBtn) => {
  numBtn.addEventListener('click', () => updateDisplayWithNumber(numBtn));
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener('click', () => updateDisplayWithOperator(operatorBtn));
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

function updateDisplayWithNumber(numBtn) {
  if(!operator){
    firstOperand += numBtn.textContent;
    displayScreen.textContent = firstOperand;
  } else {
    nextOperand += numBtn.textContent;
    displayScreen.textContent = firstOperand + operator + nextOperand;
  }
}

function updateDisplayWithOperator(operatorBtn) {
  if(firstOperand && !nextOperand) {
    operator += operatorBtn.textContent;
    displayScreen.textContent = firstOperand + operator;
  }
}