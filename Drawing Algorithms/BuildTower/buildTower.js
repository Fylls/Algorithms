// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

/*
for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

function towerBuilder(n) {
  let tower = [];

  for (let i = 0; i <= n - 1; i++) {
    let step = "";
    step += " ".repeat(n - i - 1);
    step += "*".repeat(2 * i + 1);
    step += " ".repeat(n - i - 1);
    array.push(step);
  }
  return tower;
}

// short
function towerBuilder(n) {
  return Array.from({ length: n }, function (v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}

// one liner
const towerBuilder = (n) =>
  [...Array(n)].map(
    (_, i) =>
      " ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1)
  );
