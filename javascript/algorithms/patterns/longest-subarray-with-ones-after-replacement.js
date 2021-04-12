
const test = (arr, k) => {

    let map = {};
    let start = 0;
    let max = Number.NEGATIVE_INFINITY;
    let kCount = 0;

    for (let end=0;end<arr.length;++end) {
        let num = arr[end];
        map[num] = map[num]+1 || 1;
        if (num!=1) kCount++;

        while (kCount>k) {
            let startNum = arr[start];
            map[startNum]--;
            start++;
            startNum = arr[start];
            kCount = end-start+1 - map[1];
        }

        max = Math.max(max, end-start+1);
    }

    return max;
}

// let arr = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1];

// console.log(test(arr,2));

let arr = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1];
console.log(test(arr,3));