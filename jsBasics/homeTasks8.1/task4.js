const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 === 1);
console.log(`Even numbers: ${evenNumbers}`);
console.log(`Odd numbers: ${oddNumbers}`);
