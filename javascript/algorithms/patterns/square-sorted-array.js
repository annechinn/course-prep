
const test2 = (arr) => {
    return arr.map(x=>Math.pow(x,2)).sort((a,b)=>a-b);
}

const test = (arr) => {
    let left = 0;
    let right = arr.length-1;

    let resultIndex = arr.length-1;
    let result = new Array(arr.length);
    while (left<=right) {
        let numLeft = arr[left];
        let numRight = arr[right];
        if (Math.abs(numLeft)>=Math.abs(numRight)) {
            result[resultIndex--] = Math.pow(numLeft,2);
            left++;
        }
        else {
            result[resultIndex--] = Math.pow(numRight,2);
            right--;
        }
    }

    return result;
}

console.log(test2([-2, -1, 0, 2, 3]));