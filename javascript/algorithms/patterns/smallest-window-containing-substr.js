
const test = (str, pattern) => {

    let result = '';
    let patternMap = {};
    let start = 0;
    let matchCount = 0;
    let patternLen = pattern.length;

    for (let i=0;i<pattern.length;++i) {
        let ch = pattern[i];
        patternMap[ch] = patternMap[ch]+1 || 1;
    }

    for (let end=0;end<str.length;++end) {
        let ch = str[end];
        if (ch in patternMap) {
            patternMap[ch]--;
            if (patternMap[ch]==0) matchCount++;
        }


        let startCh = str[start];

        while (!(startCh in patternMap) || patternMap[startCh]<0) {
            start++;
            if (startCh in patternMap) {
                if (patternMap[startCh]==0) matchCount--;
                patternMap[startCh]++;
            }
            startCh = str[start];
        }

        if (matchCount == patternLen) {
            if (result.length==0 || end-start+1<result.length) {
                result = str.substring(start, end+1);
            }
        }
    }

    return result;
}


console.log(test('aabdec', 'abc'));
console.log(test('abdbca', 'abc'));
console.log(test('adcad', 'abc'));