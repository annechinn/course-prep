// https://exercism.io/tracks/javascript/exercises/rna-transcription/solutions/bcb8bdecf64649f2a591206be32c9955

// Given a DNA strand, return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides.
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

// G -> C
// C -> G
// T -> A
// A -> U


export const toRna1 = (str) => {
    let rtrn = '';
    for(let i = 0; i < str.length; i++){
        switch(str[i]){
            case 'G':
                rtrn = rtrn.concat('C');
                break;
            case 'C':
                rtrn = rtrn.concat('G');
                break;
            case 'T':
                rtrn = rtrn.concat('A');
                break;
            case 'A':
                rtrn = rtrn.concat('U');
                break;
        }
    }
   return rtrn;
};

const transcription = {G: 'C', C: 'G', T: 'A', A: 'U'};

export const toRna2 = (nucleotides) => {
  return nucleotides.split('').map((nucleotide) => {
    return transcription[nucleotide]
  }).join('')
};



const COMPLEMENTS = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  };
  
  export const toRna3 = (strand) => {
    let rnaComplement = '';
  
    for (let element of strand) {
      rnaComplement += COMPLEMENTS[element];
    }
  
    return rnaComplement;
  };