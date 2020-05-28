// Task:
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

// Rules:
// You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return 0.00
// You will only be given Natural Numbers as arguments.

// Examples:
// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

function SeriesSum(n) {
  let value = 0;

  for (let i = 0; i < n; i++) {
    value += 1 / (1 + 3 * i);
  }

  return `${value.toFixed(2)}`;
}

// intern sum
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3);
  }

  return s.toFixed(2);
}

// short
function SeriesSum(n) {
  for (a = 0, i = 1; i <= n * 3; i += 3) a += 1 / i;
  return a.toFixed(2);
}

// recursive
function SeriesSum(n, s = 0) {
  return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2);
}

// using reduce
SeriesSum = (n) =>
  Array.from(Array(n), (e, i) => 1 / (i * 3 + 1))
    .reduce((s, e) => s + e, 0)
    .toFixed(2);
