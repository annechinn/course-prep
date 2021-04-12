

const getPairsWithSumLessThanTarget = (arr, leftIndex, firstNum, target, triplets) => {

    let low = leftIndex+1;
    let high = arr.length-1;
    let localTarget = target - firstNum;

    while (low<high) {
        let lowNum = arr[low];
        let highNum = arr[high];
        let sum = lowNum+highNum;
        if (sum<localTarget) {
            triplets.push([firstNum, lowNum, highNum]);
            for (let next = highNum-1;next>low;--next) {
                triplets.push([firstNum, lowNum, arr[next]]);  
            }
            low++;
        }
        else high--;
    }
}

const test = (arr, target) => {

    arr.sort((a,b)=>a-b);

    let triplets = [];
    for (let left = 0;left+2<arr.length;++left) {
        let firstNum = arr[left];
        getPairsWithSumLessThanTarget(arr, left, firstNum, target, triplets);
        left++;
    }

    return triplets; 
}

//console.log(test([-1, 0, 2, 3], 3));
console.log(test([-1, 4, 2, 1, 3], 5));