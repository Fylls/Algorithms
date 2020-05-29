// Given two numbers and an arithmetic operator (the name of it, as a string),
// return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

/*

A few examples:

arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5
ArithmeticFunction.arithmetic(5, 2, "add")      => returns 7
ArithmeticFunction.arithmetic(5, 2, "subtract") => returns 3
ArithmeticFunction.arithmetic(5, 2, "multiply") => returns 10
ArithmeticFunction.arithmetic(5, 2, "divide")   => returns 2
Try to do it without using if statements!

*/

// classic
function arithmetic(a, b, operator) {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else if (operator === "divide") {
    return a / b;
  } else {
    console.log("operator not valid");
    return null;
  }
}

// using cases
function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

// obj
const arithmetic = (a, b, operator) =>
  ({
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  }[operator]);

// short
function arithmetic(a, b, operator) {
  optable = { add: "+", subtract: "-", multiply: "*", divide: "/" };
  return eval(a + optable[operator] + b);
}

// implicit ?
const arithmetic = (a, b, operator) => {
  return operator === "add"
    ? a + b
    : operator === "subtract"
    ? a - b
    : operator === "multiply"
    ? a * b
    : a / b;
};

// one liner
arithmetic = (a, b, o) => eval(a + "*/+-"["mdas".search(o[0])] + b);
