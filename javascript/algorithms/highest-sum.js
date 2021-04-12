

const highestSumBruteForce = (arr, K) => {

    let maxSum = Number.NEGATIVE_INFINITY;
    for (let i=0;i<=arr.length-K; ++i) {
        let sum = 0;
        for (let j=i;j<i+K;++j) {
            sum+=arr[j];
        }

        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

// let arr = [1, 5, 2, 3, 7, 1];
//console.log(highestSumBruteForce(arr, 3));

//  let arr = [5, -3, 7, -6, 8];
// console.log(highestSumBruteForce(arr, 2));

// let arr = [5, -3, 7, -6, 8];
// console.log(highestSumBruteForce(arr, 3));

const highestSumSlidingWindow = (arr, K) => {
    let maxSum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    for (let i=0;i<arr.length; ++i) {
        console.log(i);
        sum+=arr[i];
        if (i>=K) {
            sum-=arr[i-K];
            console.log("minus: " + arr[i-K]);
            maxSum = Math.max(maxSum, sum);
        }
        console.log("add: " + arr[i]);
        console.log("sum: " + sum);
        console.log("max: " + maxSum);
    }

    return maxSum; 
}

// let arr = [1, 5, 2, 3, 7, 1];
// console.log(highestSumSlidingWindow(arr, 3));

//  let arr = [5, -3, 7, -6, 8];
// console.log(highestSumSlidingWindow(arr, 2));

// let arr = [5, -3, 7, -6, 8];
// console.log(highestSumSlidingWindow(arr, 3));

const highestSum = (arr, K) => {

    // the brute-force method is to have two loops, i,j
    // where i iterates over the entire arr and at each
    // iteration j iterates from i to i+K-1, recording
    // the max sum.
    // time: O(n*k), for each n we have to 

    // improvement
    // Sum(0,j)-Sum(0,i), where j-i = K, will be the Sum(k).
    // If we cache the sums as we go along, 
    // then at each i,j we know the Sum(i,j) and we can look up
    // the sum from Sum(i, j-k), then Sum(i,j) - Sum(i, j-k) will
    // be the Sum(i,k). We can then test against maxSum.
    // 
    let sums = {};
    let maxSum = Number.NEGATIVE_INFINITY;
   
    let sum = 0;
    for (let i=0;i<arr.length;++i) {
        sum+=arr[i];
        sums[i] = sum;
        if (i>=K) {
            let kSum = sum - sums[i-K];
            if (kSum>maxSum) {
                maxSum = kSum;
            }
        }
    }

    return maxSum;
}

// let arr = [1, 5, 2, 3, 7, 1];
// console.log(highestSum(arr, 3));

// let arr = [5, -3, 7, -6, 8];
// console.log(highestSum(arr, 2));

let arr = [5, -3, 7, -6, 8];
console.log(highestSum(arr, 3));

