

const binarySearchHelper = (i, arr, start, end) => {

    i++;
    if (i>10) return -1;

    mid = Math.floor((start+end)/2);
    console.log("i: " + i + " start: " + start + " mid: " + mid + " end: " + end);

    if (arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]) return arr[mid];

    if (arr[mid-1]<arr[mid] && arr[mid]<arr[mid+1]) {
        return binarySearchHelper(i, arr, mid+1, end);
    }
    else {
        return binarySearchHelper(i, arr, start, mid-1);
    }
}

const findMaxNumber = (arr) => {
    let mid = Math.floor(arr.length/2);
    return binarySearchHelper(0, arr, 0, arr.length-1);
}


let arr = [6,9,15,20,35,50,41,29,23,8];

console.log(findMaxNumber(arr));