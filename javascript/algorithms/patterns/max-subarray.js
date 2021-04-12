// Given an array of positive numbers and a positive number ‘k,’ 
// find the maximum sum of any contiguous subarray of size ‘k’.


// time: O(n*k), for each of n elements in the array, need to add k elements
// space: O(1), just local vars for max, sum, etc. none related to n.
const testBruteForce = (arr, k) => {
    let max = Number.NEGATIVE_INFINITY;
    for (let i=0;i<=arr.length-k;++i) {
        let sum = 0;
        for (let j=i;j<i+k;++j) {
            sum+=arr[j];
            max = Math.max(max, sum);
        }
    }

    return max;
}

// time: O(n): for each of n elements it just gets added/subtracted from the sum
// as the window moves.
// space: O(1): no change.
const test = (arr,k) => {
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let start = 0;
    for (let end=0;end<arr.length&&start<=arr.length-k;++end) {
        sum+=arr[end];
        // don't start sliding until we've reached window size = k
        if (end>=k-1) {
            max = Math.max(max, sum);
            sum-=arr[start];
            start++;
        }
    }
    return max;
}

// let arr = [2, 1, 5, 1, 3, 2];
// console.log(test(arr, 3));

let arr = [2, 3, 4, 1, 5];
console.log(test(arr, 2));



