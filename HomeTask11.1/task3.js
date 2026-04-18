
async function fetchTodo() {
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const todo = await response.json();
 return todo;
}

async function fetchUser() {
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
const user = await response.json();
return user;
}

async function runAll() {
try {
const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
console.log("Promise.all results:");
console.log("Todo:", todo);
console.log("User:", user);
} catch (error) {
console.error("Promise.all error:", error);
}
}


async function runRace() {
try {
const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
console.log("\nPromise.race result");
console.log(raceResult);
} catch (error) {
console.error("Promise.race error:", error);
}
}

await runAll();
await runRace();
