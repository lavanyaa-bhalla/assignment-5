function processArray(numbers) {
  
  // Remove odd numbers
  let evenNumbers = numbers.filter(num => num % 2 === 0);

  // Multiply remaining numbers by 2
  let multiplied = evenNumbers.map(num => num * 2);

  // Sum of resulting numbers
  let sum = multiplied.reduce((acc, val) => acc + val, 0);

  console.log("Original array:", numbers);
  console.log("Even numbers:", evenNumbers);
  console.log("After multiplying by 2:", multiplied);
  console.log("Sum:", sum);
}

processArray([1, 2, 3, 4, 5, 6]);
