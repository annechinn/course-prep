
const test = (str) => {

    let max = Number.NEGATIVE_INFINITY;
    let dupCount = 0;
    let map = {};
    let start = 0;
    let lastIndex = 0;

    for (let end=0;end<str.length;++end) {
        let ch = str[end];
      //  console.log("map", map);
       
        if (ch in map) {
            lastIndex = map[ch];
            dupCount++;
        }
        map[ch]=end;

    //    console.log("dupCOunt: ",dupCount);
        while (dupCount>=1) {
            dupCount--;
            start=lastIndex+1;
        }

        console.log("start", start, "end" , end, str.substring(start, end+1));
        max = Math.max(max, end-start+1);
    }

    return max;
}

// let str = "aabccbb";
// let str = "abbbb";
let str = "abccde";

console.log(test(str));