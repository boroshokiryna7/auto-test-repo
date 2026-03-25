// function getArea(width, length) {
// const area = width * length;
// return area;
// }
// const result = getArea(5, 10);
// console.log(result);


function getArea(width, length){
return width * length;
}

getArea(5, 10);
console.log(getArea(5, 10));


const area1 = function (width, length) {
return width * length;
}

console.log(area1(5, 10));

const area2 = (width, length) => width * length;

console.log(area2(5, 10));