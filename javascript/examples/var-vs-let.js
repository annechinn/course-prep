

function start() {
  for (let i=0; i<5; ++i) {
    console.log(i);
  }

  console.log(i);

}

// var is not limited to the scope in which it is defined
// var is limited to the function within it is defined.

// let creates block-scoped variables


// override your variables from other libraries
var color = 'red';
let age = 30;

console.log(window.color);
console.log(window.age);

