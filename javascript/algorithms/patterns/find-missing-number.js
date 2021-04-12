
const test = (nums) => {

    nums.sort((a,b)=>a-b);
    for (let i=1;i<nums.length;++i) {
        if (nums[i]-nums[i-1]>1) return nums[i]-1;
    }

    return 0-1;
    
}

console.log(test([4, 0, 3, 1]));
console.log(test([8, 3, 5, 2, 4, 6, 0, 1]));