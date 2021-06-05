function numbsInRange(array, min, max) {

  let results = [];
  array.forEach(num=> {
    if (num>=min && num<=max) {
      results.push(num);
    }
  });

  return results;
}

console.log(numbsInRange([ 1, 2, 3, 5, 8], 1,5));
console.log(numbsInRange([ 1, 2, 3, 5, 8], 1,3));