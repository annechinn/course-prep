
// Given a string, find the length of the longest substring in it 
// with no more than K distinct characters.

// time: O(n+n), O(n) - outer loop iterates over n, inner loop
// max is n if k=n
// space: o(k), storing k+1 max chars in map 
// 
const test = (str, k) => {

    let map = {};
    let uniqueChCount = 0;
    let start = 0;
    let result = '';

    for (let end=0;end<str.length;++end) {
        let ch = str[end];
        map[ch] = map[ch] +1 || 1;
        if (map[ch]==1) uniqueChCount++;
        
        while (uniqueChCount>k) {
            let startCh = str[start];
            map[startCh]--;
            if (map[startCh]==0) uniqueChCount--;
            start++;
        }

        let currStr = str.substring(start, end+1);
        if (currStr.length>result.length) {
            result = currStr;
        }
    }
    return result;
}

//let str = "araaci";
let str = "cbbebi";

console.log(test(str, 3));