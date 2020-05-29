// FROM NUMBER TO ARRAY

//                           N  E  W

const numToSeparate = 12345;

const arrayOfDigits = Array.from(String(numToSeparate), Number);

console.log(arrayOfDigits); //[1,2,3,4,5]

//                           O  L  D

// You can omit the replace if you are sure that n has no decimals.

// integer
var arr = n.toString(10).split("").map(Number);

// float
var arr = n.toString(10).replace(/\D/g, "0").split("").map(Number);
