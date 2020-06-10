// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    res += s.charAt(i).toUpperCase();
    res += s.charAt(i).toLowerCase().repeat(i);
    if (i !== s.length - 1) {
      res += "-";
    }
  }
  console.log(res);
  return res;
}

// array
function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
