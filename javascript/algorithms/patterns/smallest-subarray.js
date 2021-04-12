// Given an array of positive numbers and a positive number ‘S,’ 
// find the length of the smallest contiguous subarray whose sum is 
// greater than or equal to ‘S’. Return 0 if no such subarray exists.

// time: O(N*N)=> O(n)
// space: O(1)
const test = (arr,target) => {
    let len = arr.length;
    let minLen = Number.POSITIVE_INFINITY;
    let sum = 0;
    let start = 0;
 
    for (let end=0;end<len;++end) {
        sum+=arr[end];

        while (sum>=target) {
            minLen = Math.min(minLen, end-start+1);
            sum-=arr[start];
            start++;
        }
    }
    if (minLen == Number.POSITIVE_INFINITY) return 0;
    return minLen;
}

let arr = [2, 1, 5, 2, 3, 2];

console.log(test(arr, 7));
