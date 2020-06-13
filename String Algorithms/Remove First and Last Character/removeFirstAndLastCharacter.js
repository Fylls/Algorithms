// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
// You're given one parameter, the original string.
// You don't have to worry with strings with less than two characters.

// without slice
function removeChar(str) {
  const array = str.split("");
  let res = "";

  for (let i = 1; i < array.length - 1; i++) {
    res += array[i];
  }

  return res;
}

// slice
function removeChar(str) {
  return str.slice(1, -1);
}

// oneliner
const removeChar = (str) => str.slice(1, -1);

// regex
function removeChar(str) {
  return str.replace(/^.|.$/g, "");
}
