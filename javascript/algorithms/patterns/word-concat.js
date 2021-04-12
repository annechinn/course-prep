
const test = (str, words) => {

    let wordMap = {};
    let firstChMap = {};
    let matchCount = 0;

    let wordConcatLen = 0;
    for (let i=0;i<words.length;++i) {
        let word = words[i];
        wordConcatLen+=word.length;
        wordMap[word] = true;
        let firstCh = word[0];
        if (firstCh in firstChMap) {
            firstChMap[firstCh].push(word);
        }
        else {
            firstChMap[firstCh] = [word];
        }
    }

    // to find words we will check when end matches
    // the first character of one of the words. If so
    // then we will look at start to see if we are at the
    // beginning of the first word, or the end of a word.

    let results = [];
    let start = 0;
    let end = 0;
    let inPhrase = false;
    while (end<str.length) {
        let ch = str[start];
        if (ch in firstChMap) {
            // potentially starting a new word
            let wordsToCheck = firstChMap[ch];
            for (let word of wordsToCheck) {
                if (str.indexOf(word, start)==0) {
                    matchCount++;
                    if (matchCount==Object.keys(wordMap).length) {
                        results.push(str.substring(start,end+1));
                    }
                    else {
                        start = end+word.length;
                        inPhrase = true;
                    }

                    end = start;
                    break;
                }
            }
        }
        else {
            inPhrase = false;
            matchCount = 0;
            start++;end++;
        }
    }

    return results;
}

let str = "catfoxcat"
let words=["cat", "fox"];
console.log(test(str, words));