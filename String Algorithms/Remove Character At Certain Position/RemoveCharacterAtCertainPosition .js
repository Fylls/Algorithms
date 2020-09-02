// It depends how easy you find the following, which uses simple String methods (in this case slice()).

// removing char at index 3
var str = "Hello World"
str = str.slice(0, 3) + str.slice(4)
// console.log(str);
