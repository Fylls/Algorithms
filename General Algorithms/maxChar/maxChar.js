//  f() returns the character most commonly used in the string.

// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function maxChar(str) {
  let charCountObj = {};
  let maxChar = "";
  let maxCount = 0;

  //  Fill out CharCountObj
  //  Updates new MaxCount

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    charCountObj[char] = charCountObj[char] + 1 || 1;

    if (charCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = charCountObj[char];
    }
  }

  return maxChar;
}
