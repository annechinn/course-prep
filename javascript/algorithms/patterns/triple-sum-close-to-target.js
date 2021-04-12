


const getPairClosestToTarget = (arr, firstNumIndex, target) => {

    let left = firstNumIndex+1;
    let right = arr.length-1;
    let bestSum = null;
    let bestPair = [];

    debugger;
    while (left<right) {
        let lNum = arr[left];
        let rNum = arr[right];
        let sum = lNum+rNum;

        if (bestSum == null || target-sum<target-bestSum) {
            bestPair = [lNum, rNum];
            bestSum = lNum+rNum;
        }

        if (sum<target) {
            left++;
        }
        else if (sum>target) {
            right--;
        }
    }
    return bestPair;
}

const test = (arr, target) => {

    let bestSum = null;
    let bestTriple = [];
    let left = 0;
    let right = arr.length-1;

    while (left+3<=right) {
        let lNum = arr[left];
        let bestPair = getPairClosestToTarget(arr, left, target-lNum);
        let sum = lNum + bestPair[0] + bestPair[1];
        if (bestSum == null || target-sum<target-bestSum) {
            bestSum = sum;
            bestTriple = [lNum, bestPair[0], bestPair[1]];
        }
        left++;
    }

    return bestTriple;
}

console.log(test([-2, 0, 1, 2], 2));
console.log(test([-3, -1, 1, 2], 1));
console.log(test([1, 0, 1, 1], 100));