// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//1
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

//2
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

//3
const even_or_odd = (n) => (n % 2 === 0 ? "Even" : "Odd");
