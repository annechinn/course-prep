

const test = (arr, target) => {

    let results = [];

    let low = 0;
    let high = arr.length-1;
    while (low<=high) {
        let product = 1;
        for (let i=low;i<=high;++i) {
            product*=arr[i];
            if (sum<target) {
                results.push(arr.slice(low,i+1));
            }
        }
        low++;
    }
    return results;  
}

console.log(test([2, 5, 3, 10], 30));
console.log(test([8, 2, 6, 5], 50));