

const test = (arr) => {
   
    let left = 0;
    let right = 1;

    while (right<arr.length) {
        if (arr[right]!=arr[left]) {
            left++;
            arr[left] = arr[right];
        }
        right++;
    }

    return left;

}

console.log(test([2, 3, 3, 3, 6, 9, 9]));