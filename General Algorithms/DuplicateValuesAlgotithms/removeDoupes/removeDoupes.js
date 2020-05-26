//      this is (N x M) time complexity
//      .includes uses linear search behind the scenes

const naiveRemoveDupes = (arr) => {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    const inputNum = arr[i];
    if (!unique.includes(inputNum)) {
      unique.push(inputNum);
    }
  }
  return unique;
};

//////////////////////////////////////////////////////////////////////

//      this is (N) time complexity
//      searching into an object is O(1) complexity

//      objects are better than arreys if your data are not in order
//      and need faster search

const optimizedRemoveDoupes = (arr) => {
  const unique = [];
  const hashMap = {}; //{0.363293763827: true, 0.234788934201: true}

  for (let i = 0; i < arr.length; i++) {
    const inputNum = arr[i];
    if (!hashMap[inputNum]) {
      unique.push(inputNum);
    }
    hashMap[inputNum] = true;
  }
  return unique;
};
