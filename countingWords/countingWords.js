// f() returns how many times an element is present in an array

const list = ["hello", "world", "hello", "dogs", "hello", "cats"];

ountWords(list);
// {hello: 3, world: 1, dogs: 1, cats: 1}

const countWords = (wordList) => {
  return wordList.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
};

// if we implement owr own reduce
const myReduce = (list, initialValue, reducer) => {
  if (list.length === 0) {
    return initialValue;
  } else {
    const [first, ...rest] = list;
    const updatedAcc = reducer(initialValue, first);
    return myReduce(rest, updatedAcc, reducer);
  }
};

const countWords = (wordList) => {
  return myReduce(wordList, {}, (acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  });
};
