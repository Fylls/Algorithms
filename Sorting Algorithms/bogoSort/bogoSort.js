// In computer science, bogosort (also known as permutation sort, stupid sort, slowsort, shotgun sort, or monkey sort)
// is a highly inefficient sorting algorithm based on the generate and test paradigm.

// The function successively generates permutations of its input until it finds one that is sorted.
// It is not useful for sorting, but may be used for educational purposes, to contrast it with more efficient algorithms.

function shuffle(arr) {
  var shuffled = [];
  var rand;
  while (arr.length !== 0) {
    rand = Math.floor(Math.random() * arr.length);
    shuffled.push(arr.splice(rand, 1)[0]);
  }
  return shuffled;
}

function sorted(shuffle) {
  for (var i = 0; i < shuffle.length - 1; i++) {
    if (shuffle[i] <= shuffle[i + 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function bogoSort(arr) {
  var shuffleCount = 0;

  do {
    shuffleCount++;
    arr = shuffle(arr);
  } while (!sorted(arr));

  return shuffleCount + " | " + arr.join();
}

console.log(bogo([1, 2, 3, 4]));
