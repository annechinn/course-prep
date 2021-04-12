
arr = ['a', 'b', 'c', 'd'];

console.log('for (let i...');
for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }

console.log('arr.forEach...');

  arr.forEach(v => console.log(v));

  console.log('for let i in...');
  for (let i in arr) {
    console.log(arr[i]);
  }

console.log('for (x of arr');

  for (const v of arr) {
    console.log(v);
  }