// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA"

// array
function DNAStrand(dna) {
  const arrayDNA = dna.split("");
  let complementaryDNA = [];

  arrayDNA.forEach((base) => {
    if (base === "A") complementaryDNA.push("T");
    if (base === "T") complementaryDNA.push("A");
    if (base === "C") complementaryDNA.push("G");
    if (base === "G") complementaryDNA.push("C");
  });

  return complementaryDNA.join("");
}

// string
function DNAStrand(dna) {
  const arrayDNA = dna.split("");
  let complementaryDNA = "";

  arrayDNA.forEach((base) => {
    if (base === "A") complementaryDNA += "T";
    if (base === "T") complementaryDNA += "A";
    if (base === "C") complementaryDNA += "G";
    if (base === "G") complementaryDNA += "C";
  });

  return complementaryDNA;
}

// replace
let pairs = { A: "T", T: "A", C: "G", G: "C" };
const DNAStrand = (dna) => dna.replace(/./g, (c) => pairs[c]);

// using map
var pairs = { A: "T", T: "A", C: "G", G: "C" };

function DNAStrand(dna) {
  return dna
    .split("")
    .map(function (v) {
      return pairs[v];
    })
    .join("");
}
