// f() Checks if two strings are anagrams of each other.

// One string is an anagram of another if it uses exact same characters
// in exact same quantity.
// Only considering word characters.
// f() is case insensitive.

//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

//  VERSION 1
function anagrams1(stringA, stringB) {
  //Sanitize input string
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  // if different length return false
  if (stringA.length !== stringB.length) {
    return false;
  }

  const stringAcharCount = {};

  for (let i = 0; i < stringA.length; i++) {
    const aChar = stringA[i];
    stringAcharCount[aChar] = stringAcharCount[aChar] + 1 || 1;
  }

  for (let i = 0; i < stringB.length; i++) {
    const bChar = stringB[i];
    if (!stringAcharCount[bChar]) {
      return false;
    } else {
      stringAcharCount[bChar]--;
    }
  }

  return true;
}

//  VERSION 2
//  words that are anagrams to eachother will be the same word
//  if their letters are sorted alphabetically

// array.sort()

// ARRAY REFERENCE TYPE RULE:
// ["A"]===["A"]      false: different space in memory
//  "A" === "A"        true: same string value

function anagrams2(stringA, stringB) {
  // Sanitizing
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  // sorting
  const stringASorted = stringA.split("").sort().join("");
  const stringBSorted = stringB.split("").sort().join("");

  return stringASorted === stringBSorted;
}
