// Write a function named sumDigits which takes a number as input and returns
// the sum of the absolute value of each of the number's decimal digits. For example:

// sumDigits(10);    Returns 1
// sumDigits(99);    Returns 18
// sumDigits(-32);   Returns 5

// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
  const arrayOfDigits = Array.from(String(Math.abs(number)), Number);
  return arrayOfDigits.reduce((a, b) => a + b, 0);
}

// methods
sumDigits = (n) =>
  Math.abs(n)
    .toString()
    .split("")
    .reduce((s, e) => s + +e, 0);

// slow
function sumDigits(number) {
  // Turn number into absolute value -> Stringify number -> Split at each character
  var values = String(Math.abs(number)).split("");
  // Instantiate variable to hold math result
  var product = null;
  // For each value, add the value to the product
  for (var i = 0; i < values.length; i++) {
    product = product + Number(values[i]);
  }
  // Return the product variable
  return product;
}
