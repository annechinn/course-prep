// https://gist.github.com/TessMyers/a252520dd9a8fe68f8e5

// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"
var capitalize = function(string){
    // code code code!
}

  const capitalize = (input) =>
  [...input].map(x => x.toUpperCase()).join("");


// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
var swapCase = function(string){
    // Codeeeee
}

const swapCase = (input) =>
  input
    .split(" ")
    .map((x, idx) => (idx % 2 ? x : capitalize(x)))
    .join(" ");

console.log(swapCase("In arithmetic, the division of two integers produces a quotient and a remainder."))


// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the 
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"

const shiftLetters = (input) =>
  [...input].map(x => String.fromCharCode(x.charCodeAt(0) + 1));


// Write a function that takes a string and returns an object representing the character 
// count for each letter. Use .reduce to build this object. 
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}


const countLetters = (input) =>
  [...input].reduce(
    (acc, value, idx) => ({
      ...acc,
      [value]: !acc[value] ? 1 : ++acc[value]
    }),
    {}
  );
  
  
  // Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
  // .reduce to acomplish this.
  // ex. isPresent('abcd', 'b') // => true
  // ex. isPresent('efghi', 'a') // => false

const isTargetPresent = (input, target) => {
    let comparison = "";
    return [...input].reduce((acc, value) => {
      comparison += value;
      return acc || comparison.indexOf(target) >= 0;
    }, false);
  };
  


