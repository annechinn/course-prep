
class ChInfo {
    constructor(count) {
        this.subCount = count;
        this.foundCount = 0;
    }
}

const initMap = (sub) => {

    let map = {
        uniqueChars:0,
    };
    for (let i=0;i<sub.length;++i) {
        let ch = sub[i];
        let chInfo = map[ch];
        if (!chInfo) {
            chInfo = new ChInfo(1);
            map[ch] = chInfo;
            map.uniqueChars++;
        }
        else {
            chInfo.count++;
        }
    }

    return map;
}

const chInSub = (chSeen, ch, sub) => {
    return chSeen[ch].subCount>0;
}

const minWindowSubString = (str, sub) => {

    let minLen = Number.POSITIVE_INFINITY;
    let minLeft = 0;
    let minRight = 0;

    let left = 0;
    let right = 0;

    let map = initMap(sub);
    let matchCount = 0;

    while (right<str.length) {

        let ch = str[right];
        if (map[ch]) {
            map[ch].foundCount++;
            if (map[ch].foundCount == map[ch].subCount)
                matchCount++;

            while (left<=right && matchCount==map.uniqueChars) {
                let currLen = right-left + 1;
                if (currLen < minLen) {
                    minLen = currLen;
                    minLeft = left;
                    minRight = right;
                }

                ch = str[left];
                if (map[ch]) {
                    map[ch].foundCount--;
                    matchCount--;
                }
                // move ahead to look for a new window
                left++;
            }
        }
        right++;
    }

    return minLen===Number.POSITIVE_INFINITY?'': str.substring(minLeft, minRight+1);
}

console.log(minWindowSubString("ADOBECODEBANC", "ABC"));
