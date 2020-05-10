//  CREATING THE ALGORITHM BEHIND HIGH-ORDER-ARRAY-FUNCTION "MAP"

const x = [0, 1, 2, 3, 4, 5];

// example of FUNCTION
function addOne(num) {
  return num + 1;
}

// addOne(1)     =>      2
// addOne(53)    =>      54

//  USING MAP
//  map doesn`t modify directly the data, just applies an operation

x.map(addOne); // [ 1, 2, 3, 4, 5, 6]

/////////////////// A L G O R I T H M ///////////////////

// using forEach
function map(arr, fn) {
  const newArr = [];

  arr.forEach((val) => {
    newArr.push(fn(val));
  });

  return newArr;
}

// using FOR, no sanitizing input
function map2(arr, fn) {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    newArr.push(fn(val));
  }

  return newArr;
}

// using FOR, with sanitizing input
function map3(arr, fn) {
  const newArr = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      newArr.push(fn(val));
    }
  } else {
    console.log("ERROR: parameter1 is not an array!!");
  }
  return newArr;
}

//  calling function
console.log(map(x, addOne));
