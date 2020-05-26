// JavaScript - finds if there is duplicate in an array.
// Returns True or False.

const isThereAnyDuplicate = function (arrayOfNumbers) {
  // Create an empty associative array or hash.
  // This is preferred,
  let counts = {};
  // // but this also works. Comment in below and comment out above if you want to try.
  // let counts = [];

  for (var i = 0; i <= arrayOfNumbers.length; i++) {
    // As the arrayOfNumbers is being iterated through,
    // the counts hash is being populated.
    // Each value in the array becomes a key in the hash.
    // The value assignment of 1, is there to complete the hash structure.
    // Once the key exists, meaning there is a duplicate, return true.
    // If there are no duplicates, the if block completes and returns false.
    if (counts[arrayOfNumbers[i]] === undefined) {
      counts[arrayOfNumbers[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
};
