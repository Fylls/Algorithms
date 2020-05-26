// f() console-logs all the numbers from 1 to n.
// for numbers multiples of three it prints “fizz”
// for numbers multiples of five it prints “buzz”
// For numbers multiples of both three and five it prints “fizzbuzz”.

//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

//  HERE ORDER IS REALLY IMPORTANT
//  i % 15 === 0
//  i % 3  === 0 && i % 5 === 0

function fizzBuzz1(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 15 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 3 === 0) {
      str += "fizz";
    }

    if (i % 5 === 0) {
      str += "buzz";
    }

    if (str === "") {
      str = i;
    }

    console.log(str);
  }
}
