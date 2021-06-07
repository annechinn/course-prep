(() => {
  function getHTMLForAnimal(animal) {
    return `
      <div class="card">
        <img src="${animal.imageURL}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${animal.name}</h5>
          <p class="card-text">sex: ${animal.female ? "female" : "male"}</p>
          <p class="card-text">age: ${animal.age}</p>
        </div>
      </div>
  `;
  }

  function getHTMLForAnimalType(animalType) {
    let careTaker = zoo.careTakers.find((x) => x.id === animalType.careTakerId);
    let animals = zoo.animals.filter((x) => x.typeId === animalType.id);
    let animalsHTML = animals.map((x) => getHTMLForAnimal(x)).join(" ");

    return `
      <div class="animal-type-header">
        <div>Animal: ${animalType.name}</div>
        <div>Region: ${animalType.location}</div>
        <div>Number: ${animals.length}</div>
        <div>Caretaker: ${careTaker.firstName} ${careTaker.lastName}</div>
      </div>
      <div class='animals'>
        ${animalsHTML}
      </div>`;
  }

  function initButton(animalType) {
    let button = document.getElementById(`${animalType.name}-link`);

    button.addEventListener("click", () => {
      let element = document.getElementById("ac-content");
      element.innerHTML = getHTMLForAnimalType(animalType);
    });
  }

  function initButtons() {
    zoo.animalTypes.forEach((x) => initButton(x));
  }

  initButtons();
})();
