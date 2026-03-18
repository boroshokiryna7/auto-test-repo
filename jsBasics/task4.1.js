const circleRadius = 30;

console.log(Math.PI);


function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

const circleArea = calculateCircleArea(circleRadius);

console.log(circleArea);

const roundedArea = Math.round(circleArea * 100) / 100;
console.log(roundedArea);
