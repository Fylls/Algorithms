// f() returns the provided string with the first letter of each word capitalized
// the rest of the word is in lower case.

// capitalize("I'm a little tea pot") --> 'I'm A Little Tea Pot'
// capitalize('sHoRt AnD sToUt') --> 'Short And Stout'

// VERSION 1
function capitalize1(str) {
  const arrOfWords = str.split(" ");
  const arrOfWordsCased = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    const word = arrOfWords[i];
    arrOfWordsCased.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  }

  return arrOfWordsCased.join(" ");
}

// VERSION 2
// better readability
// without using .slice()
// working on single characters instead of whole word
function capitalize2(str) {
  str = str.toLowerCase();

  const arrOfWords = str.split(" ");

  const arrOfWordsCased = [];

  for (let i = 0; i < arrOfWords.length; i++) {
    const char = arrOfWords[i].split("");
    char[0] = char[0].toUpperCase();

    res.push(char.join(""));
  }
  return arrOfWordsCased.join(" ");
}
