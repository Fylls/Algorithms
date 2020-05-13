// The basic idea is that we select one element at a time and then search
// for the correct place to insert it. Hence the name, insertion sort.

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let tmp = nums[i];
    while (j >= 0 && nums[j] > tmp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = tmp;
  }
  return nums;
};
