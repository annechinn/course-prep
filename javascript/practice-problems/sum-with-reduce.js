
const sum = (arr)=> {
    return arr.reduce((acc,next)=> {return acc+next},0);
  }
  
  const arr = [1,2,3];
  console.log(sum(arr));