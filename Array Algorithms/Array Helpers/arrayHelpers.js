/*

This kata is designed to test your ability to extend the functionality of built-in classes.
In this case, we want you to extend the built-in Array class with the following methods:

square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]

*/
// ??

//                                                  S  Q  U  A  R  E
Array.prototype.square = function () {
  return this.map((el) => el ** 2);
};

//                                                     C   U   B   E
Array.prototype.cube = function () {
  return this.map((el) => el ** 3);
};

//                                                      S    U    M
Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

//                                               A  V  E  R  A  G  E
Array.prototype.average = function () {
  const numOfTerms = this.length;
  const sum = this.reduce((a, b) => a + b, 0);
  return sum / numOfTerms;
};

//                                                    E   V   E   N
Array.prototype.even = function () {
  return this.filter((el) => el % 2 === 0);
};

//                                                     O    D    D
Array.prototype.odd = function () {
  return this.filter((el) => el % 2 === 1);
};

// Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
// Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
// Array.prototype.average = function () { return this.sum() / this.length; }
// Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
// Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
// Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

Array.prototype.square = Square;
Array.prototype.cube = Cube;
Array.prototype.average = Average;
Array.prototype.sum = Sum;
Array.prototype.even = Even;
Array.prototype.odd = Odd;

function Square() {
  return this.map(function (e) {
    return e * e;
  });
}
function Cube() {
  return this.map(function (e) {
    return e * e * e;
  });
}
function Average() {
  return this.sum() / this.length;
}
function Sum() {
  return this == ""
    ? 0
    : this.reduce(function (a, b) {
        return a + b;
      });
}
function Even() {
  return this.filter(function (e) {
    return e % 2 == 0;
  });
}
function Odd() {
  return this.filter(function (e) {
    return e % 2 != 0;
  });
}