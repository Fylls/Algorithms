// First find the substring of the string to replace, then replace the first occurrence of that string with the empty string.

S = S.replace(S.substring(bindex, eindex), "");

//Another way is to convert the string to an array, splice out the unwanted part and convert to string again.

var result = S.split("");
result.splice(bindex, eindex - bindex);
S = result.join("");
