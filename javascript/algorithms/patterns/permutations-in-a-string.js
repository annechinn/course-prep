
const test = (str, pattern) => {

    let matchCount = 0;
    let patternLen = pattern.length;
    let patternMap = {};
    for (let i=0;i<pattern.length;++i) {
        let ch = pattern[i];
        patternMap[ch] = patternMap[ch] + 1 || 1;
    }

    let start = 0;
    for (let end=0;end<str.length;++end) {
        let ch = str[end];
        if (ch in patternMap) {
            patternMap[ch]--;
            // decrement the pattern ch count and if we have found them all
            // then we increment the matchCount
            if (patternMap[ch]==0) {
                matchCount++;
            }
        }

        // if we have matched all pattern chars return true
        if (Object.keys(patternMap).length == matchCount) return true;

        // start checking once end is correct window size
        if (end+1>=patternLen) {
            ch = str[start];
            // always increment start, but it might not be a pattern ch
            start++;
            if (ch in patternMap) {
                // if this one was contributing to count, decrement count
                if (patternMap[ch]==0) matchCount--;
            }
            // put back one of the pattern char counts since it's no longer
            // in the string.
            patternMap[ch]++;
        }
    }

    return false;
}

// let str = "oidbcaf";
// let pattern = "abc";

// console.log(test(str, pattern));

// let str = "odicf";
// let pattern = "dc";

// console.log(test(str, pattern));

// let str = "bcdxabcdy";
// let pattern = "bcdyabcdx";

// console.log(test(str, pattern));


let str = "aaacb";
let pattern = "abc";

console.log(test(str, pattern));
