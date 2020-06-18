// Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a multidimentional sequence.

// Example:

// locate(['a','b',['c','d',['e']]],'e'); // should return true
// locate(['a','b',['c','d',['e']]],'a'); // should return true
// locate(['a','b',['c','d',['e']]],'f'); // should return false

var locate = function (arr, value) {
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      locate(el, value);
      if (el === value) return true;
    }

    if (el === value) return true;
  });
  return false;
};

var locate = function (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(el)) {
      locate(el, value);
    }

    if (el === value) return true;
  }
  return false;
};
