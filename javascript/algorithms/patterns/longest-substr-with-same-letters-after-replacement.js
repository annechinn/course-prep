
const test = (str, k) => {

    let max = Number.NEGATIVE_INFINITY;
    let map = {};
    let start = 0;
    let kCount = 0;
    let startCh = '';

  debugger;
    for (let end=0;end<str.length;++end) {
        let ch = str[end];
        map[ch] = map[ch]+1|| 1;
        if (ch!=str[start]) kCount++;

        while (kCount>k) {
            startCh = str[start];
            map[startCh]--;
            start++;
            startCh=str[start];
            kCount = end-start+1 - map[startCh];
        }

        max = Math.max(max, end-start+1);
    }

    return max;
}

// let str = "aabccbb";
// console.log(test(str, 2));

// let str = "abbcb";
// console.log(test(str, 1));

let str = "abccde";
console.log(test(str, 1));

