// Given an integer, f() returns an integer with the digits reversed.

//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1

// optimized version
function reverseInt(n) {
  let reversed = n.toString().split("").reverse().join("");
  //from string to integer
  reversed = parseInt(reversed);

  if (n < 0) {
    return reversed * -1;
  }

  return reversed;
}

// unoptimized version
function reverseInt2(n) {
  if (n < 0) {
    n = Math.abs(n);
    const str = n.toString();
    const reversed = str.split("").reverse().join("");

    return parseInt("-" + reversed);
  } else {
    const str = n.toString();
    const reversed = str.split("").reverse().join("");

    return parseInt(reversed);
  }
}
