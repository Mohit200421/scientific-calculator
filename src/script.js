// Get the display element
const display = document.getElementById('calc-display');

// Initialize the current expression and the last result
let currentExpression = '';
let lastResult = '';

// Function to update the display
function updateDisplay() {
    display.value = currentExpression;
}

// Function to evaluate expression safely
function evaluateExpression(expression) {
    try {
        // Convert log and ln to correct JavaScript functions
        let processedExpression = expression
            .replace(/log\(/g, 'Math.log10(') // Convert log to base-10
            .replace(/ln\(/g, 'Math.log('); // Convert ln to natural log

        const result = eval(processedExpression);
        return result;
    } catch (error) {
        return 'Error';
    }
}

// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    // Handle special buttons
    if (buttonValue === 'AC') {
        currentExpression = '';
        lastResult = '';
        updateDisplay();
    } else if (buttonValue === '⌫') {
        currentExpression = currentExpression.slice(0, -1);
        updateDisplay();
    } else if (buttonValue === '=') {
        const result = evaluateExpression(currentExpression);
        lastResult = result;
        currentExpression = result.toString();
        updateDisplay();
    } else if (buttonValue === 'Ans') {
        currentExpression += lastResult;
        updateDisplay();
    } else if (buttonValue === 'π') {
        currentExpression += Math.PI;
        updateDisplay();
    } else if (buttonValue === 'e') {
        currentExpression += Math.E;
        updateDisplay();
    } else if (buttonValue === 'log') {
        currentExpression += 'log(';
        updateDisplay();
    } else if (buttonValue === 'ln') {
        currentExpression += 'ln(';
        updateDisplay();
    } else if (buttonValue === 'sin') {
        currentExpression += 'Math.sin(';
        updateDisplay();
    } else if (buttonValue === 'cos') {
        currentExpression += 'Math.cos(';
        updateDisplay();
    } else if (buttonValue === 'tan') {
        currentExpression += 'Math.tan(';
        updateDisplay();
    } else if (buttonValue === 'xⁿ') {
        currentExpression += '**';
        updateDisplay();
    } else if (buttonValue === '√') {
        currentExpression += 'Math.sqrt(';
        updateDisplay();
    } else if (buttonValue === '|x|') {
        currentExpression += 'Math.abs(';
        updateDisplay();
    } else {
        currentExpression += buttonValue;
        updateDisplay();
    }
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
