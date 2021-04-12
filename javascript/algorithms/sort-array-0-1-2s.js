

const swap = (arr, srcIndex, targetIndex) => {
    console.log("swap: " + srcIndex + " " + targetIndex);
    let temp = arr[targetIndex];
    arr[targetIndex] = arr[srcIndex];
    arr[srcIndex] = temp;
}

const sortArray = (arr) => {

    let right = arr.length-1;
    let left = 0;
    let mid = 0;
    while (mid<=right) {

        console.log(arr);
        console.log("left: " + left + ": " + arr[left]);
        console.log("mid: " + mid + ": " + arr[mid]);
        console.log("right: " + right + ": " + arr[right]);
        if (arr[mid]===2) {
            swap(arr, mid, right);
            right--;
        }
        else if (arr[mid]==0) {
            swap(arr, mid, left);
            left++;
            mid++;
        }
        else if (arr[mid]==1) {
            mid++;
        }
    }

}


let arr = [2,1,1,0,1,2,1,2,0,0,0,1];

sortArray(arr);
console.log(arr);