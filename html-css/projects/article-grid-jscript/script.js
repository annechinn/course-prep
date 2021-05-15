let sections = ["tech", "sports", "arts", "food", "science"];

function capitalize (string) {
  return string[0].toUpperCase() + string.slice(1)
}

function removeActiveClassFromAllSections() {

  for (let i=0;i<sections.length; ++i) {
 
    // get the section string out of the array
    let section = sections[i];
    
    //  build the value of the id attribute for the section
    // "tech-link", "food-link", etc
    let sectionId = `${section}-link`;
    
    // get the anchor element with the sectionId
    let element = document.getElementById(sectionId);
    
    // remove the active value from the class attribute
    element.classList.remove("active");
  }
}

function updateMainContent(sectionId) {

  let sectionNameLC = sectionId.split("-")[0];
  let sectionNameCap = capitalize(sectionNameLC);
  
  element = document.getElementById("main-content");
    
  element.innerHTML = `<section class="showcase ${sectionNameLC}">
  <span class="category category-${sectionNameLC}">${sectionNameCap}</span>
  <h1>An Article About ${sectionNameCap}</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
    recusandae consequatur similique doloribus. Corporis, et a ullam
  </p>
  <a href="" class="btn">Learn More</a>
</section>`
}

function respondToTechLinkClick(event) {
  event.preventDefault();
  let sectionId = event.target.id;
  let element = document.getElementById(sectionId);

  // first remove the active class value from all of
  // the anchor elements
  removeActiveClassFromAllSections();

  // add the active class to the one that was clicked
  element.classList.add("active");

  updateMainContent(sectionId);
}