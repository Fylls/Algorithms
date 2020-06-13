// Write a function called repeatString which repeats the given String src exactly count times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n);
}

// short
repeatStr = (n, s) => s.repeat(n);

//
function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i < n; i++) str += s;
  return str;
}
