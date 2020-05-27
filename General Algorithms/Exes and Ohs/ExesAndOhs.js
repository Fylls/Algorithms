// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// explained
function XO(str) {
  let array = str.toLowerCase().split("");

  let numberX = 0;
  let numberO = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "x") {
      numberX += 1;
    }

    if (array[i] === "o") {
      numberO += 1;
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

// contracted
function XO(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == "x") sum++;
    if (str[i].toLowerCase() == "o") sum--;
  }
  return sum == 0;
}

// regex
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// replace
function XO(str) {
  var a = str.replace(/x/gi, ""),
    b = str.replace(/o/gi, "");
  return a.length === b.length;
}

// filter
const XO = (str) => {
  str = str.toLowerCase().split("");
  return (
    str.filter((x) => x === "x").length === str.filter((x) => x === "o").length
  );
};

// split
function XO(str) {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
}
