function doThis(func) {

  func();
}

function sayHello() {
  console.log("Hello");
}

function sayGoodBye() {
  console.log("GoodBye");
}

sayHello();
sayGoodBye();


doThis(sayHello);
doThis(sayGoodBye);




function filterElements(array, filterfn ){
  let results = [];
  for (i=0;i<array.length;i++) {   
      if (filterfn(array[i])) {
          results.push(array[i]);
      }
  }

  return results;
}


function myFilterFn(number) { 
return number<6; 
}

let numbers = [1, 2, 5, 6, 8, 3];

let newArray = numbers.filter(myFilterFn);
console.log(newArray);

newArray = numbers.filter(number => number>2);
console.log(newArray);