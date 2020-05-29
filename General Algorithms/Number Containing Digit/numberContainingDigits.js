// Check it by string contains:
var num = 752;
num.toString().indexOf("5") > -1; //return true or false - contains or not

// Check by loop#
var f = 2;
while (num > 0) {
  if (num % 10 == f) {
    console.log("true");
    break;
  }
  num = Math.floor(num / 10);
}

// Check by regular expressions
num.toString().match(/5/) != null; //return true if contains

// function
function contains(number, digit) {
  if (number < 0) {
    // make sure negatives are dealt with properly, alternatively replace this if statement with number = Math.abs(number)
    number *= -1;
  }
  if (number == digit) {
    // this is to deal with the number=0, digit=0 edge case
    return true;
  }
  while (number != 0) {
    // stop once all digits are cut off
    if (number % 10 == digit) {
      // check if the last digit matches
      return true;
    }
    number = Math.floor(number / 10); // cut off the last digit
  }
  return false;
}
