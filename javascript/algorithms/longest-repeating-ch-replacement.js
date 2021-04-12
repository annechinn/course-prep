
// given a string with only uppercase letters, determine the
// longest string that only contains a single letter, with
// a maximum of K replacements.

// need to track
// count for each char
// char with max count
// number of chars that aren't the max count char, K = length - max count
// once K is reached, record maxLen (maxCount + K) and move the
// left index until K is under again and then start moving right again.


const longestRepeatingCharReplacement = (str, K) => {

    let map = {};
    let start = 0;
    let end = 0;
    let maxLen = 0;
    let maxCount = 0;
    let len = str.length;

    for (let end=0;end<len;++end) {

        let ch = str[end];

        map[ch] = map[ch] + 1 || 1;

        maxCount = Math.max(maxCount, map[ch]);
        
        while ((end-start+1-maxCount)>K) {
            ch = str[start];
            map[ch]--;
            start++;
        }
        maxLen = Math.max(maxLen, end-start+1);

    }

    return maxLen;
}

//console.log(longestRepeatingCharReplacement("ABAB", 2));

console.log(longestRepeatingCharReplacement("AABABBA", 1));