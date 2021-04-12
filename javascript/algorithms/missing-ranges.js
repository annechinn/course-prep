var findMissingRanges = function(nums, lower, upper) {
    
    let results = [];
    let len = nums.length;
    let start = lower;
    let end = upper;

    Number.
    
    for (let i=lower;i<=upper||i<len;++i) {
        if (nums[i]!==i) {
            if (start === 0) {
                start = i;
                end = i;
            }
            else {
                end++;
            }
        }
        else {
            if (end-start>1) {
               results.push(`${start}->${end}`);
            }
            else {
                results.push(`${start}`);
            }
            start = 0;
        }
    }
    
    return results;
};

let nums = [0,1,3,50,75];
console.log(findMissingRanges(nums, 0, 99));
