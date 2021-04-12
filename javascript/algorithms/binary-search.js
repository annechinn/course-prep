
const binarySearchIterative = (arr, target) => {
    
    let left = 0;
    let right = arr.length-1;

    while (left<=right) {
        let mid = left + Math.floor((right-left)/2);
        if (arr[mid]===target) {
            return target;
        }
        if (target>arr[mid]) {
            left = mid+1;
        }
        else {
            right = mid-1;
        }
    }

    return -1;
}

// for just searching for a target in a sorted list
// left: 0
// right: starts at len-1
// while: (left<=right)
// because we are just searching for a single element and just
// comparing mid each round we don't have to worry about
// overruning the boundaries.

// let arr = [1,2,3,4,5,6,7,8,9,10,11];
// console.log(binarySearchIterative(arr, 11));



// const binarySearchRecursive = (arr, target, left, right) => {

//     if (left>right) return -1;

//     let mid = left + Math.floor((right-left)/2);
//     if (arr[mid]===target) {
//         return target;
//     }

//     if (target > arr[mid]) {
//         left = mid+1;
//     }
//     else {
//         right = mid-1;
//     }

//     return binarySearchRecursive(arr, target, left, right-1);

// }

// // let arr = [1,2,3,4,5,6,7,8,9,10];
// // console.log(binarySearchRecursive(arr, 1, 0, arr.length-1));


const binarySearchFirstAfterPivotFalseTrue = (arr) => {

    let left = 0;
    let right = arr.length-1;

    while (left<=right) {
        mid = left + Math.floor((right-left)/2);

        //console.log("left: " + left + " mid: " + mid + " right: " + right);

        if (arr[mid-1]===false && arr[mid]===true) {
            return mid;
        }
        // add this special case to avoid edge case where we can move mid past the pivot
        else if (arr[left]===false && arr[left+1]===true) {
            return left+1;
        }
        else if (arr[mid]===false) {
            left = mid + 1;
        }
        else {
            right = mid-1;
        }
    }

    return -1;
}

//arr = [false, false, false, false, false, false, true, true, true, true, true, true];
//arr = [false, false, false, false, false, false, false, false, false, false, false, true];
//arr = [false, true, true, true, true, true, true, true, true, true, , true, true];
//arr = [true, true, true, true, true, true, true, true, true, true, , true, true];
//arr = [false, false, false, false, false, false, false, false, false, false, false, false];
//arr = [false, false, false, true, true, true];
//arr = [false, true, true, true, true, true];
// arr = [false, false, false, false, false, true];
// console.log(binarySearchFirstAfterPivotFalseTrue(arr));

// because we have to test more than one index, we can get caught where we move past
// the pivot point. to prevent this, we can explicitly check if left,left+1 is the pivot point.


const binarySearchFirstAfterPivotUpDown = (arr) => {

    let left = 0;
    let right = arr.length-1;

    while (left<=right) {
        mid = left + Math.floor((right-left)/2);

       // console.log("left: " + left + " mid: " + mid + " right: " + right);

        if (arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]) {
            return mid+1;
        }

        // checking the edge case when mid one to the right of target
        // then left moves to be on target and mid will never get there
        if (arr[left-1]<arr[left] && arr[left]>arr[left+1]) {
            return left+1;
        }

        if (arr[mid-1]<arr[mid]) {
            left = mid+1;
        }
        else {
            right = mid-1;
        }

    }

    return -1;
}



// arr = [1, 2, 3, 4, 5, 6, 7, 5, 4, 3, 2, 1];
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// arr = [4,5,6,4,3,2];
// arr = [4,5,6,7,3,2];
// console.log(binarySearchFirstAfterPivotUpDown(arr));

// in both of these cases you can choose to test either L or R
// because they will eventually converge on the target element.


const binarySearchFirstLargerThanOrEqualToTarget = (arr, target) => {

    let left = 0;
    let right = arr.length-1;

    while (left<=right) {
        mid = left + Math.floor((right-left)/2);

       console.log("left: [" + left + ", " + arr[left] + "] mid: [" + mid + "," + arr[mid] + "] right: [" +  right  + ", " + arr[right] + "]");

        if (arr[mid-1]<target && arr[mid]>=target) {
            return arr[mid];
        }

        // checking the edge case when mid one to the right of target
        // then left moves to be on target and mid will never get there

        if (arr[left-1]<target && arr[left]>=target) {
            return arr[left];
        }

        if (arr[mid]<target) {
            left = mid+1;
        }
        else {
            right = mid-1;
        }

    }

    return -1;
}


// arr = [1, 2, 3, 3, 5, 8, 8, 10];

// console.log(binarySearchFirstLargerThanOrEqualToTarget(arr,7));

// First Element Not Smaller Than Target
// Prereq: Finding Boundary with Binary Search
// Given an array of integers sorted in increasing order and a target, find the index of the 
// first element in the array that is larger than or equal to the target. 
// Assume that it is guaranteed to find a satisfying number.
// Input:
// arr = [1, 2, 3, 3, 5, 8, 8, 10]
// target = 2
// Output:
// 1
//
// condition to be met: boundary is #'s < target and #'s >= target
// test at a particular guess: # to the left of target are less than guess
// # to the right of guess >= target.
//
// this can be looked at like the boolean problem, where the target
// was when the ones to the left were false, and the ones to the right
// were true.
//
// test: arr[mid-1]<target && arr[mid]>=target
// because we have to test more than one index we have to handle
// the edge case like in the true/false problem.



// Find Element in Sorted Array with Duplicates
// Prereq: Finding Boundary with Binary Search
// Given a sorted array of integers and a target integer, find the first occurrence of the target 
// and return its index. Return -1 if the target is not in the array.
// Input:
// arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
// target = 3
// Output:
// 1
//
// condition is #'s to the left are < target and numbers to the right are >= target
// just like the previous one..

const findFirstOccurrenceOfNumber = (arr, target) => {

    let left = 0;
    let right = arr.length-1;

    while (left<=right) {
        const mid = left + Math.floor((right-left)/2);

        console.log("left: [" + left + ", " + arr[left] + "] mid: [" + mid + "," + arr[mid] + "] right: [" +  right  + ", " + arr[right] + "]");

        if (arr[mid-1]<target && arr[mid]>=target) {
            return mid;
        }

        if (arr[left-1]<target && arr[left]>=target) {
            return left;
        }

        if (arr[mid]<target) {
            left = mid+1;
        }
        else {
            right = mid-1;
        }
    }

    return -1;
}

// arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100];
// console.log(findFirstOccurrenceOfNumber(arr, 10));


// Square Root
// Prereq: Finding Boundary with Binary Search
// Given an integer, find its square root without using built-in square root function. 
// Only return the integer part (truncate the decimals).
// Input: 16
// Output: 4
// Input: 8
// Output: 2
// Explanation: square root of 8 is 2.83..., return integer part 2


const getSquareRoot = (num) => {

    for (let i=1;i<num;++i) {
        const currentSquare = i*i;
        const nextSquare = (i+1)*(i+1);
        if (num>=currentSquare && num<nextSquare) {
            return i;
        }
    }
}


// console.log(getSquareRoot(36));



// Find Minimum in Rotated Sorted Array
// Prereq: Finding Boundary with Binary Search
// A sorted array was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. 
// Find the index of the minimum element in this array.
// Input: [30, 40, 50, 10, 20]
// Output: 3
// Explanation: the smallest element is 10 and its index is 3.
//
// condition to test at mid: mid<prev && mid<next
const findMinimumInRotatedSortedArray = (arr) => {

    let left = 0;
    let right = arr.length-1;

    while (left<=right) {
        const mid = left + Math.floor((right-left)/2);

        console.log("left: [" + left + ", " + arr[left] + "] mid: [" + mid + "," + arr[mid] + "] right: [" +  right  + ", " + arr[right] + "]");

        if (arr[mid-1]>arr[mid] && (mid<right && arr[mid]<arr[mid+1])) {
            return arr[mid];
        }

        if (arr[left-1]>arr[left] && (left<right && arr[left]<arr[left+1])) {
            return arr[left];
        }

        if (arr[mid]>arr[0]) {
            // we're too the left of max and need to move right
            left = mid+1;
        }
        else {
            right = mid-1;
        }
    }

    return -1;
}

// let arr = [30, 40, 50, 10, 20];

// console.log(findMinimumInRotatedSortedArray(arr));


// Going to try this again using the boundary index, since it appears that many problems
// can be solved this way and it is less complicated than my solution.
//
// Finding Boundary with Binary Search
// Prereq: Binary Search Introduction
// An array of boolean values is divided into two sections; 
// the left section consists of all false and the right section consists of all true. 
// Find the boundary of the right section, i.e. the index of the first true element. 
// If there is no true element, return -1.
// Input: arr = [false, false, true, true, true]
// Output: 2
// Explanation: first true's index is 2.

const findFirstTrueAfterFalse = (arr) => {

    let left = 0;
    let right = arr.length-1;
    let boundaryIndex =-1;

    while (left<=right) {

        const mid = left + Math.floor((right-left)/2);
        const val = arr[mid];
        if (val===false) {
            // too far left, move left
            left = mid+1;
        }
        if (val === true) {
            // either at the correct position, or too far right
            // save the index and return at the end
            boundaryIndex = mid;
            right = mid-1;
        }
    
    }

    if (boundaryIndex!==-1) {
        return boundaryIndex;
    }

    return -1;

}

//let arr = [false, false, true, true, true];
// arr = [false, false, false, false, false];
// arr = [true, true, true, true, true];

// console.log(findFirstTrueAfterFalse(arr));



// try again, this time using the boundary index
// First Element Not Smaller Than Target
// Prereq: Finding Boundary with Binary Search

// Given an array of integers sorted in increasing order and a target, 
// find the index of the first element in the array that is larger than or equal to the target. 
// Assume that it is guaranteed to find a satisfying number.
// Input:
// arr = [1, 3, 3, 5, 8, 8, 10]
// target = 2
// Output: 1
// Explanation: the first element larger than 2 is 3 which has index 1.
// 
// 

const findFirstNumGreaterOrEqualThanTarget = (arr, target) => {

    let left = 0;
    let right = arr.length-1;
    let boundaryIndex = -1;

    while (left<=right) {
        const mid = left + Math.floor((right-left)/2);
        const val = arr[mid];
        if (val<target) {
            // too far left, move left boundary right
            left = mid+1;
        }
        if (val>=target) {
            // possibly target, but may need to move left more
            boundaryIndex = mid;
            right = mid-1;
        }
    }

    return boundaryIndex;
}

// let arr = [1, 3, 3, 5, 8, 8, 10];

// console.log(findFirstNumGreaterOrEqualThanTarget(arr, 2));


// try again using boundaryIndex
// 
// Find Element in Sorted Array with Duplicates
// Prereq: Finding Boundary with Binary Search

// Given a sorted array of integers and a target integer, find the first occurrence 
// of the target and return its index. Return -1 if the target is not in the array.
// Input:
// arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
// target = 3
// Output: 1
// Explanation: First occurrence of 3 is at index 1.

const findFirstElementOfDupsInSortedArray = (arr, target) => {

    let left = 0;
    let right = arr.length-1;
    let boundaryIndex = -1;

    while (left<=right) {

        const mid = left + Math.floor((right-left)/2);
        const val = arr[mid];

        if (val<target) {
            left = mid+1;
        }
        else {
            boundaryIndex = mid;
            right = mid-1;
        }
    }

    return boundaryIndex;
}

// let arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100];

// console.log(findFirstElementOfDupsInSortedArray(arr, 100));


// trying again with boundaryIndex, because my solution isn't efficient for large numbers.
// it is O(n) instead of O(logn) since we have to traverse the whole list sequentially
// instead of using the binary search.
//
// Square Root
// Prereq: Finding Boundary with Binary Search
// Given an integer, find its square root without using built-in square root function. 
// Only return the integer part (truncate the decimals).
// Input: 16
// Output: 4

// Input: 8
// Output: 2

// Explanation: square root of 8 is 2.83..., return integer part 2

const findSqareRootOfNumber = (num) => {

    let left = 0;
    let right = num-1;
    let answer = -1;

    while (left<=right) {

        const mid = left + Math.floor((right-left)/2);

        if (mid*mid<num) {
            left = mid+1;
        }
        else {
            answer = mid;
            right = mid-1;
        }
    }

    if (answer*answer > n) {
        return answer - 1;
    }

    return answer;
}


// console.log(findSqareRootOfNumber(8));


// try again with boundaryIndex
// Find Minimum in Rotated Sorted Array
// Prereq: Finding Boundary with Binary Search

// A sorted array was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] 
// becomes [30, 40, 50, 10, 20]. Find the index of the minimum element in this array.

// Input: [30, 40, 50, 10, 20]

// Output: 3

// Explanation: the smallest element is 10 and its index is 3.


const findIndexForMinNumInSortedRotatedArray = (arr) => {

    let left = 0; 
    let right = arr.length-1;
    let boundaryIndex = -1;

    while (left<=right) {
        const mid = left + Math.floor((right-left)/2);
        const num = arr[mid];

        // all numbers to the left of target are > target
        // all numbers to the right of target are < last number
        // test is whether num is < last number, but we don't 
        // know whether it's the left-most less, so we have
        // to store in boundaryIndex;

        const lastNum = arr[arr.length-1];
        if (num>lastNum) {
            left = mid+1;
        }
        else {
            boundaryIndex = mid;
            right = mid-1;
        }
    }

    return boundaryIndex;
}

// let arr = [30, 40, 50, 10, 20];
// console.log(findIndexForMinNumInSortedRotatedArray(arr));


// try again with boundaryIndex
// The Peak of Mountain Array
// Prereq: Finding Boundary with Binary Search
// A mountain array is defined as an array that
// has at least 3 elements
// let's call the element with the largest value the "peak", with index k. The array elements monotonically increase from the first element to A[k], and then monotonically decreases from A[k + 1] to the last element of the array. Thus creating a "mountain" of numbers.
// Find the index of the peak element. Assume there is no duplicate.
// Input: 0 1 2 3 2 1 0
// Output: 3
// Explanation: the largest element is 3 and its index is 3.

const findIndexOfPeakInSortedIncreaseDecreaseArray = (arr) => {

    let left = 0;
    let right = arr.length-1;
    let boundaryIndex = -1;

    while (left<=right) {
        const mid = left + Math.floor((right-left)/2);
        const num = arr[mid];
        const prevNum = arr[mid-1];

        // this time we are trying to find the greatest number before
        // they start decreasing. 
        // if mid is less than next then it migth be the greatest but
        // cant be sure so we store it in boundaryIndex. otherwise we
        // need to move left
        if (num>prevNum) {
            boundaryIndex= mid;
            left=mid+1;
        }
        else {
            right=mid-1;
        }
    }

    return boundaryIndex;
}


// let arr = [0,1,2,3,2,1,0];
// console.log(findIndexOfPeakInSortedIncreaseDecreaseArray(arr));

const findIndexOfValley = (arr) => {

    let left = 0;
    let right = arr.length-1;
    let boundaryIndex = -1;

    while (left<=right) {
        const mid = left + Math.floor((right-left)/2);

        const num = arr[mid];
        const prevNum = arr[mid-1];
        if (num<prevNum) {
            left = mid+1;
            boundaryIndex = mid;
        }
        else {
            right = mid-1;
        }
    }

    return boundaryIndex;
}

// condition: find lower value before turns up
// TTTTTTFFFFF
// is mid < prev? store boundaryIndex because
// we don't know if it's the very bottom
let arr = [40, 30, 20, 10, 5, 20, 30, 40, 50];

console.log(findIndexOfValley(arr));