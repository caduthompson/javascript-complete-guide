const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
  const result = num1 + num2;
  return;
 // alert('Hi there!');
 // the statement 'return' is the end of block command, so nothing happen after this.
}  

currentResult = add(1, 2);

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);