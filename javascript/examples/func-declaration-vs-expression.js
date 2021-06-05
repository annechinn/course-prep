
function walk() {
  console.log('walk');
}

// annonymous
let run = function() {
  console.log("run");
};

let run = function run() {
  console.log("run");
};

let move = run;
move();
run();