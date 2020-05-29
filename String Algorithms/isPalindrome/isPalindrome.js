// Given a string, f() returns whether the string is a palindrome (true) or not (false)
// Palindromes are words that read the same backwards and forwards.
// f() it is case insensitive!

// palindrome("Madam") === true
// palindrome("love") === false

// fast implementation
function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

function isPalindrome(str) {
  str = str.toLowerCase();
  // takes str, puts every character inside and array, swaps every index of the array
  // and joins every item of the reversed array back together into a new string
  const reversed = str.split("").reverse().join("");

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}
