// Task
// Create a function called one that accepts two params:

// a sequence
// a function
// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.

// Example
// one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
// one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
// one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false

function one(arr, fn) {
  let counter = 0;
  let res = false;

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      if (counter === 0) {
        res = true;
        counter++;
      } else {
        res = false;
      }
    }
  }
  return res;
}

// using filter
function one(arr, fun) {
  return arr.filter(fun).length === 1;
}

// onliner
const one = (arr, fun) => arr.filter(fun).length === 1;

// counter
function one(arr, fun) {
  var count = 0;
  for (var i = 0; i < arr.length; ++i) if (fun(arr[i])) count++;
  return count == 1;
}
