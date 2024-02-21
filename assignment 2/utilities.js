// Function to print a welcome message
function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
}

// Function to convert measurement units
function convertMeasurement(value, unit) {
    switch (unit) {
        case 'CelsiusToFahrenheit':
            return (value * 9/5) + 32;
        // Add more conversion cases as needed
        default:
            return value;
    }
}

// Function to perform math operations
function performMathOperation(value, operation) {
    switch (operation) {
        case 'factorial':
            return factorial(value);
        // Add more math operations as needed
        default:
            return value;
    }
}

// Function to calculate factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example of an advanced function(arrow function)
const multiply = (a, b) => a * b;

// Exporting functions to be used in other files

    exports.printWelcomeMessage=printWelcomeMessage;
    exports.convertMeasurement=convertMeasurement;
    exports.performMathOperation=performMathOperation;
    exports.multiply=multiply;

