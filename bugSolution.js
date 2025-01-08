function add(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : NaN;
}

function subtract(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a - b : NaN;
}

function multiply(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a * b : NaN;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return typeof a === 'number' && typeof b === 'number' ? a / b : NaN;
}

function calculate(a, b, operator) {
  if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN
  }
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      throw new Error('Invalid operator');
  }
}

console.log(calculate(10, 2, '+')); // 12
console.log(calculate(10, 2, '-')); // 8
console.log(calculate(10, 2, '*')); // 20
console.log(calculate(10, 2, '/')); // 5
console.log(calculate(10, 0, '/')); // throws error
console.log(calculate(10, 2, '%')); // throws error
console.log(calculate('abc',2,'+')) //NaN