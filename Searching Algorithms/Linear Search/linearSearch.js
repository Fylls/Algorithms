// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// const foods = ["pizza", "orange", "yogurt"];

// linearSearchIndexOf(foods, "pizza") --> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

//  arr.indexOf(val)
function linearSearchIndexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

//  arr.includes(val)
function linearSearchIncludes(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

//  arr.find(cb)
//  cb = CallBack Function

function linearSearchFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i]) === true) {
      return arr[i];
    }
  }
  return undefined;
}
