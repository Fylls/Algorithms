// having an array this f() finds the 2 smallest numeber and sums them

const numbers = [33, 420, 69, 96, 3.14];

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);

  let firstMinNumber = numbers[0];
  let secondMinNumber = numbers[1];
  return firstMinNumber + secondMinNumber;
}
