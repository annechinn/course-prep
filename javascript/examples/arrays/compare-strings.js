// https://www.rapidtables.com/convert/number/ascii-to-binary.html
// https://docs.google.com/document/d/1gCUm58NoEIbL6quJ81zJMD11n2qZunJAKX-e8EP_jzY/edit

let str1 = "cat";
let str2 = "cut";

/*
str1: 01100011
--------------
      01100001
--------------
      01110100
--------------

str2: 01100011
--------------
      01110101
--------------
      01110100 
--------------

*/

for (let i=0; i<str1.length;++i) {
  console.log(str2.charCodeAt(i));
}
