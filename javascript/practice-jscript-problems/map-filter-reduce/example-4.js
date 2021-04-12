// https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4

data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

// sum all of the dogs ages in dog years.
// Select only the dogs
// Translate their ages into dog years (multiply them by seven)
// Sum the results

function getAges(data) {
    let sum = 0;
    for (var i = 0; i < data.length; i++){
      if (data[i].type === 'dog'){
        let tempAge = data[i].age;
        sum += (tempAge * 7);
      }
    }
    return sum;
}

getAges(data) = 84;


let ages = data
  .filter((animal) => {
    return animal.type === 'dog';
}).map((animal) => {
    return animal.age * 7
}).reduce((sum, animal) => {
    return sum + animal.age;
});
// ages = 84

// To fix this, we’ll create three pure functions and use them with our chain.
// If you’re unfamiliar, a pure function in 
// JavaScript is one that given the same input, will 
// always return the same output without side effects. Put 
// simply, pure functions only depend on their input arguments.

let isDog = (animal) => {
    return animal.type === 'dog';
  }

  let dogYears = (animal) => {
    return animal.age * 7;
  }

  let sum = (sum, animal) => {
    return sum + animal;
  }

  let ages = data
  .filter(isDog)
  .map(dogYears)
  .reduce(sum);
// ages = 84










