function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    console.log("can't divide by zero");
  }

  if (a === 0 && b === 0) {
    console.log("undetermined");
  }

  //or this without any IFs
  return a / b;
}
