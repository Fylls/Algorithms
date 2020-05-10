/*  f() accepts a positive number N and console-logs a pyramid shape
    with N levels using the # character.

pyramid(1)         
     '#'

pyramid(2)             
    ' # '
    '###'

pyramid(3)           
   '  #  '
   ' ### '
   '#####'
   
*/

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    const padding = " ".repeat(n - i);
    const hashes = "#".repeat(i * 2 - 1);
    console.log(padding + hashes + padding);
  }
}

function pyramid1(n) {
  for (let i = 0; i <= n - 1; i++) {
    let step = "";
    step += " ".repeat(n - i - 1);
    step += "#".repeat(2 * i + 1);
    step += " ".repeat(n - i - 1);
    console.log(step);
  }
}
