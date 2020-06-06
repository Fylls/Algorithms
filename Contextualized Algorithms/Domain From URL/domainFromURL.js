// Write a function that when given a URL as a string,
// parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github"
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

// best
function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

// regex full
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

// regex replace
function domainName(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0];
}

// regex 3
function domainName(url) {
  return url.replace(/.+\/\/|www.|\..+/g, "");
}

// not optimized, no need to check ifContainer when using replace
function domainName(url) {
  let sub = url;
  const stringsToCheck = ["https://", "http://", "www."];

  for (let i = 0; i < 3; i++) {
    if (url.includes(stringsToCheck[i]) || sub.includes(stringsToCheck[i])) {
      sub = sub.replace(stringsToCheck[i], "");
    }
  }
  return sub.split(".")[0];
}

// complete but terrible to use
function domainName(url) {
  var cleanUrl = "";
  var restricted = [
    "de",
    "br",
    "fr",
    "io",
    "it",
    "net",
    "info",
    "tv",
    "name",
    "users",
    "pro",
    "img",
    "error",
    "uk",
    "warez",
    "www",
    "ru",
    "http",
    "https",
    "com",
    "co",
    "jp",
    "us",
    "net",
    "org",
    "edu",
    "biz",
    "za",
    "index",
    "php",
    "kata",
    "default",
    "html",
    "archive",
    "error",
  ];
  var splitAddr = url.split(/[/.:]/);
  for (var i = 0; i < splitAddr.length; i++) {
    if (restricted.indexOf(splitAddr[i]) == -1) {
      cleanUrl += splitAddr[i];
    }
  }
  return cleanUrl;
}
