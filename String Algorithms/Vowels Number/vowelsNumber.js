// f() returns the number of vowels found within a string.
// f() is case insensitive!

//   vowels('What') --> 1
//   vowels('Why?') --> 0
//   vowels('aEiOu') --> 5
//   vowels('I am a world-class developer using iterations') --> 16

function vowelsNumber(str) {
  //sanitizing
  str = str.toLowerCase().replace(/[\W_]+/g, "")

  const vowels = "aeiou".split("")
  let = counter = 0

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    for (let j = 0; j < vowels.length; j++) {
      const vowel = vowels[j]

      if (char === vowel) {
        counter++
      }
    }
  }
  return counter
}

// fast regex
const countVowels = str => (str.match(/[aeiou]/gi) || []).length

// worse readability
function vowelsNumber(str) {
  str = str.toLowerCase().replace(/[\W_]+/g, "")

  const vowelArr = "aeiou".split("")
  let = vowelCounter = 0

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowelArr.length; j++) {
      if (str[i] === vowelArr[j]) {
        vowelCounter++
      }
    }
  }
  return vowelCounter
}

const countVowels = str => {
  str = str.toLowerCase().replace(/[\W_]+/g, "") //sanitizing input
  let counts = 0
  for (vowel of vowels) if (vowels.includes(str[i])) counts++
  return counts
}
