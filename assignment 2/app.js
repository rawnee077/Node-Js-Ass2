// CommonJS syntax for importing the second file
const myUtility = require('./utilities');

// Calling functions from the second file
myUtility.printWelcomeMessage('Advik', 'Advik');
const fahrenheitValue = myUtility.convertMeasurement(25, 'CelsiusToFahrenheit');
console.log(`Converted value: ${fahrenheitValue} Fahrenheit`);
const factorialResult =myUtility.performMathOperation(5, 'factorial');
console.log(`Factorial of 5 is: ${factorialResult}`);
const multiply1 = myUtility.multiply(2,3)
console.log(`Result of advanced function: ${multiply1}`);
