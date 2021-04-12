
// Given an array of characters where each character represents a
//  fruit tree, you are given two baskets, and your goal is to put
//  maximum number of fruits in each basket. The only restriction is 
// that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you 
// have started. You will pick one fruit from each tree until you 
// cannot, i.e., you will stop when you have to pick from a third 
// fruit type.

// Write a function to return the maximum number of fruits in 
// both the baskets.

const test = (arr) => {

    let max = Number.NEGATIVE_INFINITY;
    let totalCount = 0;
    let uniqueCount = 0;
    let start = 0;
    let map = {};

    for (let end=0;end<arr.length;++end) {
        let ch = arr[end];
        map[ch] = map[ch] + 1 || 1;
        if (map[ch]==1) uniqueCount++;
        totalCount++;

        while (uniqueCount>=3) {
            let startCh = arr[start];
            map[startCh]--;
            totalCount--;
            if (map[startCh]==0) uniqueCount--;
            start++;
        }

        max = Math.max(max, totalCount);
    }
    return max;
}

//let arr = ['A', 'B', 'C', 'A', 'C'];
let arr = ['A', 'B', 'C', 'B', 'B', 'C'];
console.log(test(arr));