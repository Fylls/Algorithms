// ROT13 is a simple letter substitution cipher that replaces a letter
// with the letter 13 letters after it in the alphabet.

// ROT13 is an example of the Caesar cipher. (subset)

// Create a function that takes a string and returns the string ciphered with Rot13.
// If there are numbers or special characters included in the string,
// they should be returned as they are.

// Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(str) {
  const alphabetArrayLower = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetArrayUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idxLower = alphabetArrayLower.indexOf(char);
    const idxUpper = alphabetArrayUpper.indexOf(char);

    const encodedIdx = (index) => (index + 13) % 26;

    if (idxLower === -1 && idxUpper === -1) {
      res += char;
      continue;
      
    } else if (idxLower === -1) {
      res += alphabetArrayUpper[encodedIdx(idxUpper)];
      
    } else if (idxUpper === -1) {
      res += alphabetArrayLower[encodedIdx(idxLower)];
    }
  }
  return res;
}

// best
function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
}

// v1
function rot13(message) {
  var abc =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
  return message.replace(/[a-z]/gi, (c) => abc[abc.indexOf(c) + 13]);
}

// one liner
// const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
const rot13 = (str) =>
  str.replace(/[a-z]/gi, (letter) =>
    String.fromCharCode(
      letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
    )
  );

// match
function rot13(message) {
  return message.replace(/[a-zA-Z]/g, function (match) {
    return String.fromCharCode(
      match.charCodeAt(0) +
        (match.toUpperCase().localeCompare("M") > 0 ? -13 : 13)
    );
  });
}

// map
var codeA = "A".charCodeAt(0),
  codeZ = "Z".charCodeAt(0),
  codea = "a".charCodeAt(0),
  codez = "z".charCodeAt(0);
function rot13(message) {
  return message
    .split("")
    .map(function (char) {
      var code = char.charCodeAt(0);
      if (codeA <= code && code <= codeZ) {
        return String.fromCharCode(((code - codeA + 13) % 26) + codeA);
      } else if (codea <= code && code <= codez) {
        return String.fromCharCode(((code - codea + 13) % 26) + codea);
      }
      return char;
    })
    .join("");
}
