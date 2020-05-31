//                                              T A S K

/*

Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

ipToInt32("128.32.10.1") => 2149583361

*/

//                                       M A T H   B E H I N D

// To convert an IP address to integer notation, each section of the IP address (separated by ".")
// is multiplied by 256x. In this case, x represents the position of the section from right to left starting with 0.
// Here is an example using this formula:

// 192.168.1.1 = (192 * 2563) + (168 * 2562) + (1 * 2561) + (1 * 2560)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// classic
function ipToInt32(ip) {
  const ipArray = ip.split(".").reverse();
  ipArray.forEach((el) => parseInt(el));

  let result = 0;

  for (let i = 0; i < ipArray.length; i++) {
    result += ipArray[i] * Math.pow(256, i);
  }

  return result;
}

// using reduce
function ipToInt32(ip) {
  return ip.split(".").reduce((s, v) => 256 * s + Number(v), 0);
}

// oneliner
let ipToInt32 = (ip) => ip.split(".").reduce((a, b) => (a << 8) | b) >>> 0;

// oneliner 2
const ipToInt32 = (ip) => ip.split`.`.reduce((r, e) => r * 256 + +e);

// slow
function ipToInt32(ip) {
  let arr = ip.split(".").map((n) => Number(n));

  arr[0] *= Math.pow(256, 3);
  arr[1] *= Math.pow(256, 2);
  arr[2] *= 256;
  arr[3];

  return arr[0] + arr[1] + arr[2] + arr[3];
}
