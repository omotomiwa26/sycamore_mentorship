// Create a function that divides two numbers. Throw a custom error if the second number is zero.

function divide(a, b) {
  if (b === 0) {
    throw new Error( a + ' ' + 'is not divisible by zero');
  }
  return a / b;
}

try {
    console.log(divide(10, 2)); 
    console.log(divide(10, 0));
}
catch (error) {
  console.log('Logical Error: ', error.message);
}