

const maxConsecutiveOnes = (arr, K) => {

    let maxLen = Number.NEGATIVE_INFINITY;
    let left = 0;
    let right = 0;
    let oneCount = 0;
    let zeroCount = 0;

    while (right<arr.length) {
        if (arr[right]==1) oneCount++;
        else if (arr[right]==0) zeroCount++;

        while (zeroCount>K) {
            maxLen = Math.max(maxLen, right-left);
            if (arr[left]==1) oneCount--;
            else if (arr[left]==0) zeroCount--;
            left++;
        }

        right++;
    }

    return maxLen;
}

//let arr = [1,1,1,0,0,0,1,1,1,1,0];
//console.log(maxConsecutiveOnes(arr, 2));
let arr = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
console.log(maxConsecutiveOnes(arr, 3));

