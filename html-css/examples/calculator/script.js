
const calculate = (n1, operator, n2) => {
  const firstNum = parseFloat(n1)
  const secondNum = parseFloat(n2)
  if (operator === 'add') return firstNum + secondNum
  if (operator === 'subtract') return firstNum - secondNum
  if (operator === 'multiply') return firstNum * secondNum
  if (operator === 'divide') return firstNum / secondNum
}

const updateCalculatorState = (key, calculator, calculatedValue, displayedNum) => {
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = calculator.dataset

  calculator.dataset.previousKeyType = keyType

  if (keyType === 'operator') {
    calculator.dataset.operator = key.dataset.action
    calculator.dataset.firstValue = firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculatedValue
      : displayedNum
  }

  if (keyType === 'calculate') {
    calculator.dataset.modValue = firstValue && previousKeyType === 'calculate'
      ? modValue
      : displayedNum
  }

  if (keyType === 'clear' && key.textContent === 'AC') {
    calculator.dataset.firstValue = ''
    calculator.dataset.modValue = ''
    calculator.dataset.operator = ''
    calculator.dataset.previousKeyType = ''
  }
}

const updateVisualState = (key, calculator) => {
  const keyType = getKeyType(key)
  Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

  if (keyType === 'operator') key.classList.add('is-depressed')
  if (keyType === 'clear' && key.textContent !== 'AC') key.textContent = 'AC'
  if (keyType !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
  }
}

const createResultString = (key, displayedNum, state) => {
  const keyContent = key.textContent;
  const keyType = getKeyType(key)
  const {
    firstValue,
    operator,
    modValue,
    previousKeyType
  } = state

  if (keyType === 'number') {
    return displayedNum === '0' ||
      previousKeyType === 'operator' ||
      previousKeyType === 'calculate'
      ? keyContent
      : displayedNum + keyContent
  }

  if (keyType === 'decimal') {
    if (!displayedNum.includes('.')) return displayedNum + '.'
    if (previousKeyType === 'operator' || previousKeyType === 'calculate') return '0.'
    return displayedNum
  }

  if (keyType === 'operator') {
    return firstValue &&
      operator &&
      previousKeyType !== 'operator' &&
      previousKeyType !== 'calculate'
      ? calculate(firstValue, operator, displayedNum)
      : displayedNum
  }

  if (keyType === 'clear') return 0;

  if (keyType === 'calculate') {
    return firstValue
      ? previousKeyType === 'calculate'
        ? calculate(displayedNum, operator, modValue)
        : calculate(firstValue, operator, displayedNum)
      : displayedNum;
  }
}

const operators = new Set();
operators.add('add');
operators.add('substract');
operators.add('multiply');
operators.add('divide');

const getKeyType = key => {
  const { action } = key.dataset;
  if (!action) return 'number';
  if (operators.has(action)) return 'operator';
  return action;
}

const calculator = document.getElementById('calculator');
const display = document.getElementById('display');
const keys = document.getElementById('keys');

let operand1 = 0;
let operator = null;
let operand2 = null;

const processAction = (key) => {
  const { action } = key.dataset;
  if (action === 'clear') {
    display.textContext = '';
    // clear global state
  }
  else if (action === 'calculate') {

  }
}

const processNumClick = (key) => {
  if (display.textContent === "0") {
    display.textContent = key.textContent;
  }
  else {
    display.textContent += key.textContent;
  }
  
  operand1 = display.textContent;
}

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return;

  const key = e.target;
  const keyType = getKeyType(key);
  if (keyType === 'number') {
    processNumClick(key);
  }
  else if (keyType === 'operator') {
    processOperator(key);
  }
  else if (keyType === 'action') {
    processAction(key);
  }
  // const displayedNum = display.textContent;
  // const resultString = createResultString(key, displayedNum, calculator.dataset);

  // display.textContent = resultString;
  // updateCalculatorState(key, calculator, resultString, displayedNum);
  // updateVisualState(key, calculator);
})
