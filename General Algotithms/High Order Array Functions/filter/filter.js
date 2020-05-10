//  CREATING THE ALGORITHM BEHIND HIGH-ORDER-ARRAY-FUNCTION "FILTER"

const x = [0, 1, 2, 3, 4, 5];

// example of FUNCTION
function isGreaterThanOne(num) {
  return num > 1;
}

// isGreaterThanOne(-27)   =>      false
// isGreaterThanOne(0)     =>      false
// isGreaterThanOne(1)     =>      false
// isGreaterThanOne(53)    =>      true

// USING FILTER
// filter doesn`t modify directly the data, just applies an operation

x.filter(isGreaterThanOne); // [ 2, 3, 4, 5 ]

/////////////////// A L G O R I T H M ///////////////////

// using forEach
function filter(arr, fn) {
  const newArr = [];

  arr.forEach((val) => {
    if (fn(val)) {
      newArr.push(val);
    }
  });

  return newArr;
}

// using FOR, no sanitizing input
function filter2(arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (fn(val)) {
      newArr.push(val);
    }
  }

  return newArr;
}

// using FOR, with sanitizing input
function filter3(arr, fn) {
  const newArr = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];

      if (fn(val)) {
        newArr.push(val);
      }
    }
  } else {
    console.log("ERROR: parameter1 is not an array!!");
  }
  return newArr;
}

//  calling function
console.log(filter(x, isGreaterThanOne));
