// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let array = str.toLowerCase().split("");

  let numberX;
  let numberO;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "x") {
      numberX = +1;
    }

    if (array[i] === "o") {
      numberO = +1;
    }
  }

  if (numberX === numberO) {
    return true;
  } else if (numberX === 0 && numberO === 0) {
    return true;
  } else {
    return false;
  }
}
