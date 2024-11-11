// Check if there are sufficient command-line arguments
if (process.argv.length < 5) {
    console.log("Usage: node calculator.js <num1> <operator> <num2>");
    console.log("Example: node calculator.js 10 + 5");
    process.exit(1);
}

// Get the numbers and operator from command-line arguments
const num1 = parseFloat(process.argv[2]);
const operator = process.argv[3];
const num2 = parseFloat(process.argv[4]);

// Function to perform the calculation
function calculate(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Error: Cannot divide by zero.");
                process.exit(1);
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator. Please use +, -, *, or /.");
            process.exit(1);
    }

    return result;
}

// Perform the calculation and display the result
const result = calculate(num1, operator, num2);
console.log(`Result: ${num1} ${operator} ${num2} = ${result}`);
