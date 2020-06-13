// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.
// Square all numbers k (0 <= k <= n) between 0 and n.
// Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...)
// the function taking n and d as parameters and returning this count.

// Examples:

/// n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
/// We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.

// nb_dig(25, 1):

// the numbers of interest are
// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
// so there are 11 digits `1` for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1.

// not optimized
function nbDig(n, d) {
  let digit = d.toString();
  let k = [];
  let sum = 0;

  function including(number, digit) {
    return number.includes(digit);
  }

  for (let i = 0; i <= n; i++) {
    k.push((i * i).toString());
  }

  const kWithDigits = k.filter((item) => including(item, digit));

  kWithDigits.forEach((el) => {
    const array = el.split("");

    for (let i = 0; i < array.length; i++) {
      if (array[i] === digit) {
        sum++;
      }
    }
  });

  return sum;
}

// best
function nbDig(n, d) {
  var res = 0;

  for (var g = 0; g <= n; g++) {
    var square = (g * g + "").split("");
    square.forEach((s) => (s == d ? res++ : null));
  }

  return res;
}

// pow
function nbDig(n, d) {
  var o = "";
  for (var i = 0; i <= n; i++) {
    o += Math.pow(i, 2);
  }
  return o.split(d).length - 1;
}

// spread
function nbDig(n, d) {
  return [...Array(n + 1).keys()]
    .map((i) => {
      return i * i;
    })
    .join("")
    .split("")
    .filter((i) => {
      return i == d;
    }).length;
}

// regex
// nbDig = (n, d) => Array.from(Array(n + 1), (e, i) => i * i).join('').match(new RegExp(d, 'g')).length;
nbDig = (n, d) =>
  Array.from(Array(n + 1), (e, i) => i * i)
    .join("")
    .match(new RegExp(d, "g")).length;
