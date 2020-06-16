// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

// Examples:
// numberToString(123); // returns '123';`
// numberToString(999); // returns '999';`

// toString()
function numberToString(num) {
  return num.toString();
}

// String()
function numberToString(num) {
  return String(num);
}

// ""
function numberToString(num) {
  return "" + num;
}

// `${}`
const numberToString = (num) => `${num}`;

// lol
var numberToString = String;

// regex
numberToString = (_) =>
  (_ + "").indexOf("-") == -1
    ? (~(_ - 1) + "").replace(/\-/, "")
    : "-" + (~(_ - 1) + "");
