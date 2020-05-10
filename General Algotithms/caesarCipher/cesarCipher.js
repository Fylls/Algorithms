// Given a phrase, f() substitutes each character by shifting it up
// the alphabet by a given integer.
// the shifting wraps around back to the beginning of the alphabet.
// f() only shifts letters.

// caeserCipher("abcd", 1) === "bcde";
// caeserCipher("yz", 1) === "za";
// caeserCipher("abcd", 100) === "wxyz";
// caeserCipher("gurer ner 9 qbtf!", 13) === "there are 9 dogs!"

function caesarCipher(str, shift) {
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  let res = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const idx = alphabetArr.indexOf(char);

    // if it is not a letter, don`t shift it
    if (idx === -1) {
      res += char;
      continue;
    }

    // only 26 letters in alphabet, if > 26 it wraps around
    const encodedIdx = (idx + shift) % 26;
    res += alphabetArr[encodedIdx];
  }
  return res;
}
