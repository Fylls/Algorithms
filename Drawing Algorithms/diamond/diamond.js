// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed,
// and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

/*

A size 3 diamond:

 *
***
 *
 * 
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
  * 
...that is: " *\n ***\n*****\n ***\n *\n"
*/

///////////////////////////////////////////////////////////////////////////////////////////

// best implementation
function diamond(n) {
  if (n % 2 == 0 || n < 1) return null;
  var x = 0,
    add,
    diam = line(x, n);
  while ((x += 2) < n) {
    add = line(x / 2, n - x);
    diam = add + diam + add;
  }
  return diam;
}

function repeat(str, x) {
  return Array(x + 1).join(str);
}

function line(spaces, stars) {
  return repeat(" ", spaces) + repeat("*", stars) + "\n";
}

///////////////////////////////////////////////////////////////////////////////////////////

// clean
function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;
  str = "";
  for (let i = 0; i < n; i++) {
    let len = Math.abs((n - 2 * i - 1) / 2);
    str += " ".repeat(len);
    str += "*".repeat(n - 2 * len);
    str += "\n";
  }
  return str;
}

///////////////////////////////////////////////////////////////////////////////////////////

// using spaces

function diamond(n) {
  if (n === 1) {
    console.log("*");
  }

  if (n < 3 || n % 2 == 0) {
    return null;
  }

  // n is always odd
  for (let i = 1; i <= n; i += 2) {
    let step = "";
    step += " ".repeat((n - i) / 2);
    step += "*".repeat(i);
    step += " ".repeat((n - i) / 2);
    console.log(step);
  }

  // n is always odd
  for (let j = 1; j < n / 2; j++) {
    let step2 = "";
    step2 += " ".repeat(j);
    step2 += "*".repeat(n - 2 * j);
    step2 += " ".repeat(j);
    console.log(step2);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////

//using strings and new line (\n)

function diamond(n) {
  if (n === 1) {
    console.log("*");
  }

  if (n < 3 || n % 2 == 0) {
    return null;
  }

  let string = "";

  for (let i = 1; i <= n; i += 2) {
    string += " ".repeat((n - i) / 2);
    string += "*".repeat(i);
    string += "\n";
  }

  for (let j = 1; j < n / 2; j++) {
    string += " ".repeat(j);
    string += "*".repeat(n - 2 * j);
    string += "\n";
  }
  console.log(string);
}
