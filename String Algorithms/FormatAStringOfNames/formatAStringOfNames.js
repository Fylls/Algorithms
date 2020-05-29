// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

/*

Example:
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

*/

///////////////////////////////////////////////////////////////////////////

// => names.map((x) => x.name)

// using map
function list(names) {
  var xs = names.map((p) => p.name);
  var x = xs.pop();
  return xs.length ? xs.join(", ") + " & " + x : x || "";
}

// oneliner (with regex)
// var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

var list = (names) =>
  names
    .map((x) => x.name)
    .join(", ")
    .replace(/(.*),(.*)$/, "$1 &$2");

// using reduce
function list(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return prev + " & " + current.name;
    } else {
      return prev + ", " + current.name;
    }
  }, "");
}

// too many IFs
// prettier-ignore
function list(names) {
  let string = "";

  if (names.length === 0) {
    return "";

  } else if (names.length === 1) {
    return names[0].name;

  } else if (names.length === 2) {
    return `${names[0].name} & ${names[1].name}`;

  } else {
    for (let i = 0; i < names.length; i++) {
      string += names[i].name;

      if (i === names.length - 2) {
        string += " & ";
      } else if (i === names.length - 1) {
        return string;
      } else {
        string += ", ";
      }
    }

    return string;
  }
}
