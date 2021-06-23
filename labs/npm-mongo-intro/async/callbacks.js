
 const animals = [
  {
    name: "Zena",
    age: 12,
  },
  {
    name: "Maxwell",
    age: 15,
  }
];

function getAnimals() {
  setTimeout(()=> {
    console.log(animals.map(x=>x.name).join(", "));
  }, 1000);
}

// function createAnimal(animal) {
//   setTimeout(()=> {
//     animals.push(animal);
//   }, 2000);
// }
//
// createAnimal({
//   name: "Boo",
//   age: 12,
// });

function createAnimal(animal, callback) {
  setTimeout(()=> {
    animals.push(animal);
    callback();
  }, 2000);
}

createAnimal({
  name: "Boo",
  age: 12,
}, getAnimals);

// for (let i=0;i<=5;++i) {
//   setTimeout(()=> {
//     console.log(`i: ${i}`);
//   }, i*1000);
// }



