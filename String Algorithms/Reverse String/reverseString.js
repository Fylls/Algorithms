// f() returns a string with the order of characters reversed

//   reverse('abcd') === 'dcba'
//   reverse('Hello!') === '!olleH'

// one liner
const solution = (str) => str.split("").reverse().join("");

// explanation
function reverse1(str) {
  // turn string to array, each char of the string will be part of the array as an individual element
  const arr = str.split("");

  // swap all the indexes of the array
  arr.reverse();

  // join every element back together
  const res = arr.join("");
  return res;
}

//  without using REVERSE method
//  recursive function
function reverse2(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    res = char + res;
  }

  return res;
}

// using REDUCE ( high order array function )
function reverse3(str) {
  return str.split("").reduce((output, char) => {
    output = char + output;
    return output;
  }, "");
}
