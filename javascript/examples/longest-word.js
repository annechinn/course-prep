function longestWord(str) {

  let longestWord = "";
  const words = str.split(" ");
  words.forEach(word=>{
    if (word.length>longestWord.length) {
      longestWord=word;
    }
  });

  return longestWord;
}

console.log(longestWord ("the cow jumped over the moon"));