// Your math teacher keeps giving you long lists of numbers (meaning integers AND floats),
// and expects you to find the Maximum (max), Minimum (min), Median (med) and Mean!

// How are you supposed to do that? That's way too much work!

// Like any good programmer, you only like to do things once,
// so create function list_mix() to do it for you!

// list_mix() will take an input in the form of a list of numbers, and output the
// max,
// min,
// med,
// mean
// in that order!

// max is the biggest number in the list.
// min is the smallest number in the list.
// med is the number in the middle when the list is sorted.
// mean is all the elements of the list summed together divided by the length of the list, or the average.

// Note: The list will only have valid types, so no need for error checking,
// and if the list has an even amount of numbers, return the average of the two numbers
// in the middle for the median.

// All floats should be rounded to two decimal places.

// Here are a few examples to help clarify:

// list_mix([1, 5, 4, 3, 2]) == [5, 1, 3, 3] #max, min, med, mean
// list_mix([1]) == [1, 1, 1, 1]
// list_mix([-12, 2, 1.2, 20]) == [20, -12, 1.6, 2.8]

function listMix(arr) {
  const max = Math.max(...arr)

  const min = Math.min(...arr)

  const mean = arr.reduce((a, b) => a + b) / arr.length

  let med

  if (arr.length === 1) {
    med = arr[0]
  } else if (arr.length % 2 === 1) {
    med = arr[arr.length / 2]
  } else {
    const sort = arr.sort((a, b) => a - b)
    const floor = sort[Math.floor(arr.length / 2) - 1]
    const ceil = sort[Math.floor(arr.length / 2)]

    med = (floor + ceil) / 2
    console.log(med)
  }

  return [max, min, med, mean]
}
