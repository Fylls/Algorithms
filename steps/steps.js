/* f() takes a number N and console-logs a step shape with N levels using the # character.

steps(2)   
'# '
'##'

steps(3)   
'#  '
'## '
'###'

steps(4)
'#   '
'##  '
'### '
'####'

*/

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = "";

    for (let hash = i; hash > 0; hash--) {
      step += "#";
    }

    for (let space = n - i; space > 0; space--) {
      step += " ";
    }

    console.log(step);
  }
}

//   USING STRING.REPEAT()

function steps2(n) {
  for (let i = 1; i <= n; i++) {
    let step = "";
    step += "#".repeat(i);
    step += " ".repeat(n - i);
    console.log(step);
  }
}
