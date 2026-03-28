function divide (numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by zero");
  }

  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Both arguments must be numbers");
  }

  return numerator / denominator;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message);
}
finally {
  console.log("work is finished.");
}

try {
  const result2 = divide('pol', 'ina');
  console.log(result2);
} catch (error) {
  console.error(error.message);
}
finally {
  console.log("work is finished.");
}
try {  const result3 = divide(10, 2);
  console.log(result3);
} catch (error) {
  console.error(error.message);
}
finally {
  console.log("work is finished.");
}