let firstOperand = '';
let operator = '';
let nextOperand = '';
let result = '';

const displayScreen = document.querySelector('.display');
const numberBtns = document.querySelectorAll('.number-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const equateBtn = document.querySelector('.equal-btn');

numberBtns.forEach((numBtn) => {
  numBtn.addEventListener('click', () => updateDisplayWithNumber(numBtn));
});

operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener('click', () => updateDisplayWithOperator(operatorBtn));
});

equateBtn.addEventListener('click', () => operate(firstOperand, operator, nextOperand));
equateBtn.addEventListener('click', () => updateDisplayWithResult());

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
    case '+':
      return result =  add(a, b);
    case '-':
      return result =  subtract(a, b);
    case '×':
      return result =  multiply(a, b);
    case '÷':
      return result =  divide(a, b);
    default:
      return result =  'Error: Invalid Operator';
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

function updateDisplayWithResult() {
  if(firstOperand, operator, nextOperand) {
    displayScreen.textContent = result;
    firstOperand = result.toString();
    nextOperand = '';
    operator = '';
  } 
}