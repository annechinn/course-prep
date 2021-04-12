
// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

const testBruteForce = (nums, k) => {
    let count = 0;
    let sum = 0;
    let total = 0;

    for (let i=0;i+k-1<nums.length;++i) {
        sum = 0;
        for (let j=i;j<i+k;++j) {
            sum+=nums[j];
        }
        total+=sum;
        count++;
    }
    console.log(total, sum,count);
    return total/count;

}

const testSlidingWindow = (nums, k) => {
    let count = 0;
    let total = 0;

    let sum = 0;
    for (let i=0;i<k;++i) {
        sum+=nums[i];
    }
    total = sum;
    count = 1;

    let left = 1;
    let right = k;

    while (right<nums.length) {
        sum-=nums[left-1];
        sum+=nums[right];
        total+=sum;
        left++;
        right++;
        count++;
    }
    return total/count;

}

const testSlidingWindow2 = (nums, k) => {
    let count = 0;
    let total = 0;
    let left = 0;
    let right = 0;
    let sum = 0;

    while (right<nums.length) {
        sum+=nums[right];
        if (right>=k-1) {
            total+=sum;
            console.log("sum", sum, "total", total);
            sum-=nums[left];
            left++;
            count++;
        }
        right++;
    }

    return total/count;
}

let nums = [1, 3, 2, 6, -1, 4, 1, 8, 2];

console.log("brute");
console.log(testBruteForce(nums, 5));
console.log("slide");
console.log(testSlidingWindow(nums, 5));
console.log("slide2");
console.log(testSlidingWindow2(nums, 5));