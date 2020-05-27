// Your task is to make a function that can take any non-negative integer as a argument
// and return it with its digits in ascending order.

//Essentially, rearrange the digits to create the lowest possible number.

function ascendingOrder(n) {
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => a - b)
      .join("")
  );
}

// contracted
function ascendingOrder(n) {
  return parseInt(n.toString().split("").sort().join(""));
}
