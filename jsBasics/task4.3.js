const  radius = 30;
const height = 40;
const cylinderVolume = calculateCylinderVolume(radius, height);


function calculateCylinderVolume(radius, height) {
  return Math.PI * Math.pow(radius, 2) * height;
}
console.log(cylinderVolume);

const roundedVolume = Math.round(cylinderVolume * 100) / 100;
console.log(roundedVolume);