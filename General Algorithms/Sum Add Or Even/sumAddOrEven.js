// TASK:
// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// odd_or_even([0])          ==  "even"
// odd_or_even([0, 1, 4])    ==  "odd"
// odd_or_even([0, -1, -5])  ==  "even"

function oddOrEven(array) {
  sum = 0;
  array.forEach((el) => {
    sum += el;
  });
  return sum % 2 == 0 ? "even" : "odd";
}

// one liner 1
// const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 == 0 ? "even" : "odd";
const oddOrEven = (a) =>
  a.reduce((s, n) => s + n, 0) % 2 == 0 ? "even" : "odd";

// one liner 2
// const oddOrEven=arr=>["even","odd"][Math.abs(arr.reduce((a,b)=>a+b,0))%2];
const oddOrEven = (arr) =>
  ["even", "odd"][Math.abs(arr.reduce((a, b) => a + b, 0)) % 2];

// using reduce
function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

// classic
function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (result % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
