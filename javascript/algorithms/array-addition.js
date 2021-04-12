

const canSum = (target, numbers) => {
  if (target == 0) return true;
  if (target <0) return false;


  for (let i=0;i<numbers.length;++i) {
    let remainder = target-numbers[i];
    let yes = canSum(remainder, numbers);
    if (yes) {
      return true;
    } 
  }

  return false;
}


function ArrayAddition(arr) { 
  let max = Math.max( ...arr );
  let result = canSum(max, arr);
  console.log(result);
  return arr; 
}
    
let array = [1,2,3,4];
//let array = [3,5,-1,8,12];
console.log(ArrayAddition(array));
