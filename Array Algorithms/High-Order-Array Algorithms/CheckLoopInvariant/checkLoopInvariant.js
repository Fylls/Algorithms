// The loop invariant for insertion sort states that all elements up to the current index,
// A[0..index], make up a sorted permutation of the elements originally found in A[0..index]
// before we began sorting.

const checkLoopInvariant = (newArr, originalArr, index) => {
  //need to slice at least 1 element out
  if (index < 1) index = 1;

  newArr = newArr.slice(0, index);
  originalArr = originalArr.slice(0, index);

  for (let i = 0; i < newArr.length; i++) {
    //check that the original array contains the value
    if (!originalArr.includes(newArr[i])) {
      console.error(`Failed! Original array does not include ${newArr[i]}`);
    }

    //check that the new array is in sorted order
    if (i < newArr.length - 1 && newArr[i] > newArr[i + 1]) {
      console.error(`Failed! ${newArr[i]} is not less than ${newArr[i + 1]}`);
    }
  }
};
