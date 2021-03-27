
// https://exercism.io/tracks/javascript/exercises/pangram/solutions/2e2a70616db547128ef9375b244a667e
// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, 
// pan gramma, "every letter") is a sentence using every 
// letter of the alphabet at least once. The best known English pangram is:

// The quick brown fox jumps over the lazy dog.

// The alphabet used consists of ASCII letters a to z, inclusive, 
// and is case insensitive. Input will not contain non-ASCII symbols.


const alphabet = 'abcdefghijklmnopqrstuvwxyz'


export const isPangram1 = (phrase) => {
  const toLowerPhrase = phrase.toLowerCase()
    
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i]
     if(toLowerPhrase.indexOf(letter) < 0){
       return false
     }
  }

  return true
};

export const isPangram2 = (text) => {
    for(var i = 0; i < alphabet.length; i++){
      const letter = alphabet[i]
      const textContainsLetter = text.toLowerCase().includes(letter)
      if (!textContainsLetter) return false
  
    }
    return true;
  
  };

  export const isPangram3 = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
    str = str.toLowerCase();
  
    return alphabet.every((item) => str.includes(item));
  };


  export const isPangram4 = (phrase) => {
    const toLowerPhrase = phrase.toLowerCase();
   
    for (let i = 0; i < toLowerPhrase.length; i++) {
      const codeOffSet = toLowerPhrase.charCodeAt(i) - 97;
      codeArray[codeOffSet] = 1;
    }
  
    for (let i=0; i<codeArray.length;++i) {
      if (codeArray[i] === 0) return false;
    }
  
    return true;
  };

  

