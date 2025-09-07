const prompt = require('prompt-sync')();


function arrayOperations() {
    let numbers = [];

    
    for (let i = 0; i < 5; i++) {
        let num = parseFloat(prompt(`Enter number ${i + 1}: `));
        numbers.push(num);
    }

    console.log(`\nOriginal Array: ${numbers}`);

    
    let largest = Math.max(...numbers);
    let smallest = Math.min(...numbers);

    console.log(`Largest Number: ${largest}`);
    console.log(`Smallest Number: ${smallest}`);

   
    let ascending = [...numbers].sort((a, b) => a - b);
    console.log(`Ascending Order: ${ascending}`);

    
    let descending = [...numbers].sort((a, b) => b - a);
    console.log(`Descending Order: ${descending}`);
}

arrayOperations();
