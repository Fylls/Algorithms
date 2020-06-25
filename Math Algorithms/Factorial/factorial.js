// Write a function that returns the factorial of a number

// EXAMPLE: factorial(5) == 120

// recursive
function factorial(num) {
  if (num === 0) {
    return 1
  } else {
    return num * factorial(num - 1)
  }
}

// compact
function factorial(num) {
  return num ? factorial(num - 1) * num : 1
}

// oneliner
factorial = (n) => (n < 2 ? 1 : n * factorial(n - 1))

// not recursive
function factorial(num) {
  var f = 1
  while (num >= 2) f *= num--
  return f
}
