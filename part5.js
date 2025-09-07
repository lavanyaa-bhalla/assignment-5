const prompt = require('prompt-sync')({sigint: true});


const input = prompt("Enter an array of numbers (comma separated): ");
const numbers = input.split(',').map(num => parseInt(num.trim(), 10));


function processArray(arr) {

    const evens = arr.filter(num => num % 2 === 0);
   
    const multiplied = evens.map(num => num * 2);
  
    const sum = multiplied.reduce((acc, num) => acc + num, 0);

    return { evens, multiplied, sum };
}

const result = processArray(numbers);

console.log("Filtered even numbers:", result.evens);
console.log("After multiplying by 2:", result.multiplied);
console.log("Sum of resulting numbers:", result.sum);
