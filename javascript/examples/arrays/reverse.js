
function reverse(array) {

  for (let i=0, j=array.length-1;i<=j;++i,--j) {

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

let array = [1, 2, 3, 4];
console.log(array);
reverse(array);
console.log(array);

