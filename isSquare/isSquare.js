// isSquare
// works for random square numbers
// works for random numbers

const isSquare = function (n) {
  if (n < 0) {
    console.log(`${n}: Negative numbers cannot be square numbers`);
    return false;
  }

  if (n === 0) {
    console.log("0 is a square number (0 * 0)");
    return true;
  }

  const squareRootOfN = Math.sqrt(n);

  if (Number.isInteger(squareRootOfN)) {
    console.log(
      `${n} is a square number (${squareRootOfN} * ${squareRootOfN})`
    );
    return true;
  } else {
    console.log(`${n} is not a square number`);
    return false;
  }
};
