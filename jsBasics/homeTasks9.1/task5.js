const array = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
]



for (const element of array) {
const { name, age } = element;
console.log(name, age);
}