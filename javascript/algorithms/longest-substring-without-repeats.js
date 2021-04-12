
const longestSubstringWithoutRepeats = (str) => {

    let chSeen = {};
    let maxLen = 0;
    let currLen = 0;

    let i = 0;
    while (i<str.length) {

        if (chSeen[str[i]]) {
            let ch = str[i];
            while (str[--i]!==ch);
            chSeen = {};
            currLen = 0;
        }
        else {
            currLen++;
            chSeen[str[i]] = 1;
            maxLen = Math.max(currLen, maxLen);   
        }

        i++;
    }

    return maxLen;
}

// the last one is still not as efficient as it can be because
// it is backtracking

// sliding window removes the need to backtrack.


const longestSubstringWithoutRepeats2 = (str) => {

    let maxLen = Number.NEGATIVE_INFINITY;
    let chSeen = {};
    let left = 0;
    let right = 0;

    if (str.length==0) return 0;

    while (right<str.length) {
        let ch = str[right];
        if (!chSeen[ch]) {
            chSeen[ch] = 1;
        }
        else {
            chSeen[ch]++;
        }
        right++;

        while (chSeen[ch]>1) {
            chSeen[str[left]]--;
            left++;
        }

        maxLen = Math.max(right-left, maxLen);
    }

    return maxLen;

}

//console.log(longestSubstringWithoutRepeats2("pwwkew"));
//console.log(longestSubstringWithoutRepeats("abcabcbb"));
//console.log(longestSubstringWithoutRepeats("bbbbb"));
//console.log(longestSubstringWithoutRepeats('dvdf'));