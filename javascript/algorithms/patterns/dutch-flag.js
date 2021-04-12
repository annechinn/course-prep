
const test = (arr) => {

    let low = 0;
    let mid = low;
    let high = arr.length;

    while (mid<=high) {
        if (arr[mid]==0) {
            [arr[low],arr[mid]] = [arr[mid],arr[low]];
            low++;
            mid++;
        }
        else if (arr[mid]==2) {
            [arr[high],arr[mid]] = [arr[mid],arr[high]];
            high--;
        }
        else if (arr[mid]==1) {
            mid++;
        }
    }

}

console.log(test([1, 0, 2, 1, 0]));