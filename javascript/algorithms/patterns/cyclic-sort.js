
const test = (nums) => {

    let left = 0;
    while (left<nums.length) {
        let num = nums[left];
        // swap value in left with the value at num-1 (zero-based)
        [nums[num-1], nums[left]] = [nums[left], nums[num-1]];
        if (nums[left]==left+1) left++;
    }

    return nums;
}

console.log(test([3, 1, 5, 4, 2]));