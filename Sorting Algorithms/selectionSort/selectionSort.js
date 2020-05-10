// Implement a swap helper function that we will use in both BS and SS
function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// SelectionSort works by having sorted data accumulated at start of array
// O( n^2 )
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    swapIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[swapIndex]) {
        swapIndex = j;
      }
    }
    swap(arr, i, swapIndex);
  }
  return arr;
}
