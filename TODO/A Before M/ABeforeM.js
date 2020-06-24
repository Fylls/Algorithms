// Write a function that accepts an array of randomized letters "a" to "z" and returns true if the letter "a" is before the letter "m" in the array, and returns false if the letter "m" is before the letter "a".

// Letters in the provided array will only be downcase and there will only be one instance of a letter in the array, resulting in an array that is 26 elements long.

// Example:
// randoArray = "q a z w s x e d c r f v t g b y h n u j m i k o l p".split(' ')
// aBeforeM(randoArray) // => true
// randoArray2 = "p o l i k u j m y h n t g b r f v e d c w s x q a z".split(' ')
// aBeforeM(randoArray2) // => false

// classic double for
function isABeforeM(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (
        (arr[i] === "a" && arr[j] === "m" && i < j) ||
        (arr[i] === "m" && arr[j] === "a" && i > j)
      ) {
        return true
      }
    }
  }
  return false
}

// using indexOf
function isABeforeM(a) {
  return a.indexOf("a") < a.indexOf("m")
}

// using indexes
function isABeforeM(arr) {
  const findIndexOfA = (el) => el === "a"
  const findIndexOfM = (el) => el === "m"

  const aIndex = arr.findIndex(findIndexOfA)
  const mIndex = arr.findIndex(findIndexOfM)

  if (mIndex > aIndex) return true
  return false
}

// interestng design pattern
const isABeforeM = (arr) => {
  for (const letter of arr) {
    if (letter === "a") return true
    if (letter === "m") return false
  }
}

// regex
function isABeforeM(arr) {
  str = arr.join("")

  return /^.*[a].*[m].*$/.test(str)
}

// regex oneliner
isABeforeM = (t) => /a.*m/.test(t)
