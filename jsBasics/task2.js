const firstName = "Iryna";
const lastName = "Fal";
const text = "Hello";

const fullName = text + " " + firstName + " " + lastName;
console.log(fullName);

const fullNameTemplate = `${text} ${firstName} ${lastName}`;
console.log(fullNameTemplate);

const name1 = "Iryna";
const name2 = "Artur";
const text2 = "Welcome";
const welcomeMessage1 = text2 + " " + name1 + " and " + name2 + "!";
console.log(welcomeMessage1);
const newtemplate = `Welcome, ${welcomeMessage1}!`;
console.log(newtemplate);