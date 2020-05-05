//  CREATING THE ALGORITHM BEHIND HIGH-ORDER-ARRAY-FUNCTION "REDUCE"

const x = [1, 2, 3, 4];

// example of FUNCTION
function add(x, y) {
  return x + y;
}

// add(1, 3)     =>      4
// add(5, 3)     =>      8

// USING REDUCE
// reduce doesn`t modify directly the data, just applies an operation

x.reduce(x, add); // 15

/////////////////// A L G O R I T H M ///////////////////

// final version
function myReduce(list, initialValue, reducer) {
  if (list.length === 0) {
    return initialValue;
  } else {
    const [first, ...rest] = list;
    const updatedAcc = reducer(initialValue, first);
    return myReduce(rest, updatedAcc, reducer);
  }
}

//  for strings
function reduceString(input, fn) {
  let output = "";

  input.forEach((val) => {
    output = fn(output, val);
  });

  return output;
}

//  for numbers
function reduceNumber(input, fn) {
  let output = 0;

  input.forEach((val) => {
    output = fn(output, val);
  });

  return output;
}

//  calling function
console.log(reduceString(x, add));
console.log(reduceNumber(x, add));
