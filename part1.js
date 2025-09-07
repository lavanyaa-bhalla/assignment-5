
const prompt = require("prompt-sync")();

function calculateTwoNumbers() {
  const num1 = parseFloat(prompt("Enter first number: "));
  const num2 = parseFloat(prompt("Enter second number: "));

  console.log(`Sum: ${num1 + num2}`);
  console.log(`Difference: ${num1 - num2}`);
  console.log(`Product: ${num1 * num2}`);

  if (num2 !== 0) {
    console.log(`Quotient: ${num1 / num2}`);
  } else {
    console.log("Quotient: Cannot divide by zero");
  }
}

calculateTwoNumbers();
