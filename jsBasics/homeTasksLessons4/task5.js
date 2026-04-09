const users = [
{ name: "Тарас", email: "taras@gmail.com", age: 25 },
{ name: "Оксана", age: 30, city: "Київ" },
{ name: "Андрій", email: "andriy@gmail.com" },
{ email: "maria@gmail.com", age: 28, city: "Львів" },
];

for (const { name, email, age, city } of users) {
console.log(
`Name: ${name ?? "невідомо"}, Email: ${email ?? "невідомо"}, Age: ${age ?? "невідомо"}, City: ${city ?? "невідомо"}`
);
}