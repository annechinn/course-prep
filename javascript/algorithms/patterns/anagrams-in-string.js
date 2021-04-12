const test = (str, pattern) => {

    let patternMap = {};
    let start = 0;
    let matchCount = 0;
    let patternLen = pattern.length;
    let results = [];

    // first, create a map of the frequency of each of the
    // characters in the pattern.
    for (let i=0;i<patternLen;++i) {
        let ch = pattern[i];
        patternMap[ch] = patternMap[ch]+1||1;
    }

    let uniqueChCount = Object.keys(patternMap).length;

    debugger;
    // in order to track whether we have found a match
    // between the current window and the pattern, we
    // will decrement the patternMap ch count for each
    // time we see a charater in the window that's in the
    // pattern. When the count gets to zero, we know that
    // we have met the requirement for that character and
    // we can increment the matchCount.  
    // 
    // as we slide the window right, we move the start index,
    // and if the start index loses a ch that is in the pattern
    // we check to see it is back down to zero, and if so
    // we decrement the matchCount.

    for (let end=0;end<str.length;++end) {
        let ch = str[end];

        if (ch in patternMap) {
            patternMap[ch]--;
            if (patternMap[ch]==0) {
                // we've met the requirements for this ch
                matchCount++;
            }
        }

        if (uniqueChCount == matchCount) {
            results.push(str.substring(start,end+1));
        }

        // don't start checking to slide window until we have a 
        // window as long as the pattern.
        if (end+1>=patternLen) {

            ch = str[start];
            start++;
            if (ch in patternMap) {
                if (patternMap[ch]==0) {
                    // have to take away this ch
                    // being complete
                    matchCount--;
                }
            }
            patternMap[ch]++;
        }
    }
    return results;
}
// let str = 'ppqp';
// console.log(test(str, 'pq'));

let str = 'abbcabc';
console.log(test(str, 'abc'));
