
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

function createAnimal(animal) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      animals.push(animal);
      const status = true;
      if (status) resolve();
      else reject("Failed");
    }, 2000);
  });
}


// createAnimal({name: "Boo", age: 12,})
//   .then(getAnimals)
//   .catch(err=>console.log(err));


  // async function init() {
  //   await createAnimal({name: "Boo", age: 12,})
  //   getAnimals();
  // }

  async function init() {
    const response = await axios('http://localhost:3000/api/animals');
    console.log(response.data);
  }

  init();




