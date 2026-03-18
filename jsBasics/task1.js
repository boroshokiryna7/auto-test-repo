let text = "Hello Spring!";
console.log("text: " + text);
text="Hello Summer!";
console.log("text: " + text);

let month = 3;
console.log("month: " + month);
month = 4;
console.log("month: " + month);

let isSpring = true;
console.log("isSpring: " + isSpring);
isSpring = false;
console.log("isSpring: " + isSpring);

if (isSpring) {
    console.log("It's Spring!");
} else {
    console.log("It's not Spring!");
}       

let season;
console.log("season: " + season);
season = "Spring";
console.log("season: " + season);

// for null
let monthNumber = 2;
let dayNumber = 30;
console.log("monthNumber: " + monthNumber);
console.log("dayNumber: " + dayNumber);
if (monthNumber === 2 && dayNumber > 28) {
    dayNumber = null;
    console.log("February has 28 days. Day 30 is invalid: " + dayNumber);
} else {
    console.log("Valid day for February: " + dayNumber);
}
