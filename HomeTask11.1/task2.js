
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
Promise.all([fetchTodo(), fetchUser()])
.then((results) => {
const allTodo = results[0];
const allUser = results[1];
console.log("Promise all results:");
console.log("Todo:", allTodo);
console.log("User:", allUser);
})
.catch((error) => {
console.error("Promise.all error:", error);
});

Promise.race([fetchTodo(), fetchUser()])
.then((raceResult) => {
console.log("\nPromise.race result:");
console.log(raceResult);
})
.catch((error) => {
console.error("Promise.race error:", error);
});