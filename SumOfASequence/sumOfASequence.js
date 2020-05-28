// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns 0

// Examples:
// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4

const sequenceSum = (begin, end, step) => {
  let sum = 0;

  for (let i = begin; i <= end; i += step) {
    sum += i;
  }
  return sum;
};

// recursive
const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  return begin + sequenceSum(begin + step, end, step);
};

// one liner (recursive)
// sequenceSum = (begin, end, step) =>  begin > end ? 0 : begin + sequenceSum(begin + step, end, step)
sequenceSum = (b, e, s) => (b > e ? 0 : b + sequenceSum(b + s, e, s));
