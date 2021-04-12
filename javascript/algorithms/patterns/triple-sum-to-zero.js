

const findPairForTarget = (arr, firstNumIndex, target) => {

    let left = firstNumIndex+1;
    let right = arr.length-1;

    let results = [];
    while (left<right) {

        let lNum = arr[left];
        let rNum = arr[right];
        let sum = lNum+rNum;

        if (sum == target) {
            results.push([arr[firstNumIndex], lNum, rNum]);
            while (left<right && arr[left+1]==lNum) left++;
            left++;
            continue;
        }

        if (sum<target) left++;
        else if (sum>target) right--;
    }

    return results;
}

const test = (arr) => {

    // for each element in the arr, perform a 'find target sum in array'
    // on the remaining elements.
    // to prevent dups, we skip dups as we're moving through the array
    // looking for the first number. we also need to skip dups iterating 
    // through for the second number.

    let results = [];
    arr.sort((a,b)=>a-b);

    let left = 0; 
    let len = arr.length;
    while (left<len) {
        let firstNum = arr[left];
        let pairTarget = -firstNum;

        let pairs = findPairForTarget(arr, left, pairTarget);
        if (pairs.length>0) {
            results = [...results, ...pairs];
        }
        
        while (left<len && arr[left]==firstNum) left++;
    }

    return results;

}

//[-3,-2, -1, 0, 1, 1,2]
console.log(test([-3, 0, 1, 2, -1, 1, -2]));
console.log(test([-5, 2, -1, -2, 3]));