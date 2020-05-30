// TASK
// Given a list of digits, return the smallest number that could be formed from these digits,
// using the digits only once (ignore duplicates).

// NOTES:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

// inValue ({1, 3, 1})  ==> return (13)
// minValue({5, 7, 5, 9, 7})  ==> return (579)
// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)

// best practice
function minValue(values) {
  let arr = Array.from(new Set(values));
  return parseInt(arr.sort().join(""));
}

// using filter
function minValue(values) {
  const n = values
    .filter((e, i, arr) => arr.indexOf(e) === i)
    .sort()
    .join("");
  return Number(n);
}

// easy set
function minValue(values) {
  return Number(Array.from(new Set(values)).sort().join(""));
}

// one liner
const minValue = (v) => +[...new Set(v)].sort().join``;

// classic
function minValue(values) {
  values.forEach((el) => {
    el.toString();
  });

  let set = new Set(values);
  return parseInt(Array.from(set).sort().join(""));
}
