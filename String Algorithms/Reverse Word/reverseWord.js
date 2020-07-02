// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  const allWords = str.split(" ")
  return allWords.map(item => item.split("").reverse().join("")).join(" ")
}

function reverseWords(str) {
  return str
    .split(" ")
    .map(word => {
      return word.split("").reverse().join("")
    })
    .join(" ")
}

var reverseWords = s => s.replace(/\S+/g, v => [...v].reverse().join``)
