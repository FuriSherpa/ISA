// Get the display input field
const display = document.getElementById("display");

// Variables to keep track of calculator state
let firstOperand = null;
let operator = null;
let secondOperand = null;
let lastResult = null;

// Function to clear the calculator state
function clear() {
  firstOperand = null;
  operator = null;
  secondOperand = null;
  display.value = "";
}

// Function to handle number button clicks
function handleNumberClick(number) {
  if (lastResult !== null) {
    clear();
    lastResult = null;
  }
  if (operator === null) {
    // If no operator has been selected yet, add the number to the first operand
    firstOperand = (firstOperand === null) ? number.toString() : firstOperand + number.toString();
    display.value = firstOperand;
  } else {
    // If an operator has been selected, add the number to the second operand
    secondOperand = (secondOperand === null) ? number.toString() : secondOperand + number.toString();
    display.value = secondOperand;
  }
}

// Function to handle operator button clicks
function handleOperatorClick(selectedOperator) {
  if (lastResult !== null) {
    operator = selectedOperator;
    firstOperand = lastResult.toString();
    secondOperand = null;
    lastResult = null;
  } else if (firstOperand !== null && secondOperand !== null) {
    // If both operands are set, perform the previous operation before setting the new operator
    performOperation();
    operator = selectedOperator;
  } else {
    operator = selectedOperator;
  }
}

// Function to perform the selected operation on the two operands
function performOperation() {
  let result;
  switch(operator) {
    case "+":
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case "-":
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case "*":
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case "/":
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      result = null;
  }
  // Handle special cases
  if (result === Infinity) {
    display.value = "Infinity";
  } else if (isNaN(result)) {
    display.value = "";
  } else {
    display.value = result.toString();
  }
  // Update the calculator state
  firstOperand = result.toString();
  secondOperand = null;
  lastResult = result;
}

// Add click event listeners to number buttons
for (let i = 0; i <= 9; i++) {
  const button = document.getElementById("button" + i);
  button.addEventListener("click", () => {
    handleNumberClick(i);
  });
}

// Add click event listeners to operator buttons
document.getElementById("addButton").addEventListener("click", () => {
  handleOperatorClick("+");
});
document.getElementById("subtractButton").addEventListener("click", () => {
  handleOperatorClick("-");
});
document.getElementById("multiplyButton").addEventListener("click", () => {
  handleOperatorClick("*");
});
document.getElementById("divideButton").addEventListener("click", () => {
  handleOperatorClick("/");
});

// Add click event listener to equals button
document.getElementById("equalsButton").addEventListener("click", () => {
  if (lastResult !== null) {
    secondOperand = lastResult.toString();
    secondOperand = secondOperand - firstOperand;
  }
  if (firstOperand !== null && secondOperand !== null) {
    performOperation();
  }
});

// Add click event listener to clear button
document.getElementById("clearButton").addEventListener("click", () => {
    clear();
  });