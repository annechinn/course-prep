
const test = (arr, target) => {

    let left = 0;
    let right = arr.length-1;

    while (left<right) {
        let lNum = arr[left];
        let rNum = arr[right];
        let sum = lNum + rNum;
        if (sum==target) return [lNum, rNum];
        if (target>sum) left++;
        else if (target<sum) right--;
    }

    return [];
}


console.log(test([1, 2, 3, 4, 6], 6));
console.log(test([2, 5, 9, 11], 11));