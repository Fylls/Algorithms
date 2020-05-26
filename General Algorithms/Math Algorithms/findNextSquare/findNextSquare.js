// this f() returns the next square if sq is a perfect square, -1 otherwise

function findNextSquare(sq) {
  const isSquare = function (n) {
    if (n < 0) {
      return false;
    }

    if (n === 0) {
      return true;
    }

    for (let i = 0; i < n; i++) {
      if (i * i === n) {
        return true;
      }
    } // else
    return false;
  };

  if (isSquare(sq) === false) {
    return -1;
  }

  const squareRoot = Math.sqrt(sq);

  return Math.pow(squareRoot + 1, 2);
}

// using modulo
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

// compressed version
function findNextSquare2(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
