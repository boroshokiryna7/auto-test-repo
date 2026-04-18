class TodoService {
async fetchTodo() {
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const todo = await response.json();
return todo;
}
}


class UserService {
async fetchUser() {
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
const user = await response.json();
return user;
}
}


const todoService = new TodoService();
const userService = new UserService();


try {
const [todo, user] = await Promise.all([todoService.fetchTodo(), userService.fetchUser()]);
console.log("Promise.all results:");
console.log("Todo:", todo);
console.log("User:", user);
} catch (error) {
console.error("Promise.all error:", error);
}


try {
const raceResult = await Promise.race([todoService.fetchTodo(), userService.fetchUser()]);
console.log("\nPromise.race result (перший хто відповів):");
console.log(raceResult);
} catch (error) {
console.error("Promise.race error:", error);
}

