// f() splits an array into groups the length of size and returns them as a two-dimensional array.

// chunk(["a", "b", "c", "d"], 2) --> [[ "a", "b"], ["c", "d"]]
// chunk([0, 1, 2, 3, 4, 5], 4) -->  [[0, 1, 2, 3], [4, 5]]

function chunk(array, size) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const last = res[res.length - 1];

    if (!last || last.length === size) {
      res.push([item]);
    } else {
      last.push(item);
    }
  }
  return res;
}
