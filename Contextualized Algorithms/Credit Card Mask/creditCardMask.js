// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// return masked string
function maskify(card) {
  if (card.length <= 4) {
    return card;
  } else {
    const cc = card.split("").reverse();
    const res = "#".repeat(cc.length - 4);
    return res + cc[3] + cc[2] + cc[1] + cc[0];
  }
}

// using slice
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

// regex 1
function maskify(cc) {
  return cc.replace(/.(?=....)/g, "#");
}

// regex 2
function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}

// for
function maskify(cc) {
  cc = cc.split("");
  for (var i = 0; i < cc.length - 4; i++) {
    cc[i] = "#";
  }

  cc = cc.join("");
  return cc;
}

// max
maskify = (cc) => "#".repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);
