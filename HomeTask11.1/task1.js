function delayaction
(text, ms) {
setTimeout(() => {
console.log(text);
}, ms);
}

delayaction("Hello after 2 seconds!", 2000);