
function reverse(array) {

  for (let i=0, j=array.length-1;i<=j;++i,--j) {

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


function reverse(array) {

  let start = 0;
  let end = array.length-1;

  while (start<=end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}


let array = [1, 2, 3, 4];
console.log(array);
reverse(array);
console.log(array);

function binarySearch(arr, target) {
    
  let left = 0;
  let right = arr.length-1;

  while (left<=right) {
      let mid = left + Math.floor((right-left)/2);
      if (arr[mid]===target) {
          return target;
      }
      if (target>arr[mid]) {
          left = mid+1;
      }
      else {
          right = mid-1;
      }
  }

  return -1;
}

function linearSearch(arr, target) {

  for (let i=0; i<arr.length; ++i) {
    if (arr[i]===target) {
      return target;
    }
  }
  
  return -1;
}

function insert(arr, num) {

  for (let i=0; i<arr.length;++i) {
    if (num<=arr[i]) {
      for (let j=arr.length;j>=0;j--) {
        arr[j] = arr[j-1];
      }
      arr[i] = num;
      break;
    }
  }

  return arr;
}

console.log(insert(array, 3));


function level3() {
  let l3Var = "level3";
  console.log("enter level3");
  console.log("exit level3");
}

function level2() {
  let l2Var = "level2";
  console.log("enter level2");
  level3();
  console.log("exit level2");
}

function level1() {
  let l1Var = "level1";
  console.log("enter level1");
  level2();
  console.log("exit level1");
}

level1();