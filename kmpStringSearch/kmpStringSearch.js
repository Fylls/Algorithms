// processing time O(m)
// added space O(m)
// time complexity: O(n+m)

function errorTable(p, m, f) {
  for (var j = 1; j <= m - 1; j++) {
    k = f[j - 1];
    while (k != -1 && p[j - 1] != p[k]) {
      k = f[k];
    }
    f[j] = k + 1;
  }
}

function kmp(s, n, p, m, f) {
  var i = 0;
  var j = 0;
  while (i < n) {
    while (j != -1 && s[i] != p[j]) {
      j = f[j];
    }
    if (j == m - 1) {
      return i - m + 1;
    } else {
      i++;
      j++;
    }
  }
  return -1;
}

var s = "ababacaababac";
var n = s.length;
var p = "abac";
var m = p.length;
var f = [-1];

errorTable(p, m, f);
console.log(f, kmp(s, n, p, m, f));
