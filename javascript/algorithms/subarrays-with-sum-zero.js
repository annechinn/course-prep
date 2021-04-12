// Subarrays with sum zero
// Tags: arrays, subarray with sum zero, zero sum subarray
// Given an array of positive and negative integers, find number of subarrays 
// with sum zero in that array. For example, in the array given below, 
// there are two subarrays whose elements sum to zero.

// Input:
// A = [1,3,2,-1,5,4,-8,4,3,-7]
// Output:
// 4
// Explanation:
// Subarrays [-1,5,4,-8], [4,-8,4], [-1,5,4,-8,4,3,-7] and [4,3,-7] 
// are subarrays with zero sum.



const printSubArrays = (arr) => {
    for (let i=0; i<arr.length;++i) {
        let sub = [];
        for (let j=i;j<arr.length;++j) {
            sub.push(arr[j]);
            console.log(sub);
        }
        console.log('');
    }
}

printSubArrays([0,1,2]);