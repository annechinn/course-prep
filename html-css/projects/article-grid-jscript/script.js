let sections = ["tech", "sports", "arts", "food", "science"];

function capitalize (string) {
  return string[0].toUpperCase() + string.slice(1)
}

function buildArticleHTML(article) {
  return `
  <article>
        <img src="${article.imageURL}" alt="" />
        <span class="category category-${article.topic}">${capitalize(article.topic)}</span>
        <h3><a href="">${article.title}</a></h3>
        <p>
          ${article.abstract}
        </p>
      </article>
  `
}

function buildNavLinkHTML(sectionName) {
  return `<li><a id="${sectionName}-link" onclick="respondToClick(event)" href="">${capitalize(sectionName)}</a></li>`;
}

// `<li><a id="tech-link" onclick="respondToClick(event)" href="">Tech</a></li>
//  <li><a id="food-link" onclick="respondToClick(event)" href="">Food</a></li>
//  <li><a id="sports-link" onclick="respondToClick(event)" href="">Sports</a></li>
//  `
function addNavBar() {
  let linksHTML = sections
                    .map(x=>buildNavLinkHTML(x))
                    .join("");

  element = document.getElementById("nav-bar");
  element.innerHTML =
  `<nav class="nav-container">
  <a href="index.html">
    <img src="images/logo.png" class="logo" />
  </a>
  <ul>
    ${linksHTML}
    <li><a href="">Account</a></li>
 </ul>
</nav>
  `
}

function addShowCaseArticle(sectionName) {
  element = document.getElementById("showcase");
 
  // for now, just get the first article in the section
  let article = articles
    .filter(x=>x.topic ===sectionName)[0];

  let capSectionName = capitalize(sectionName);
  let showCaseHTML =
    `<section style="background:url(${article.imageURL}) center/cover" class="showcase ${sectionName}">
        <span class="category category-${sectionName}">${capSectionName}</span>
        <h1>${article.title}</h1>
        <p>
         ${article.abstract}
        </p>
        <a href="" class="btn">Learn More</a>
    </section>`;

    element.innerHTML = showCaseHTML;
}

function addArticleGrid(sectionName) {
  element = document.getElementById("article-grid");
 
  let articlesHTML = articles
    .filter(x=>x.topic===sectionName)
    .map(x=>buildArticleHTML(x))
    .join("");

  element.innerHTML = articlesHTML;
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

function setActiveSectionLink(sectionId) {
  // make all links inactive first
  removeActiveClassFromAllSections();

  let element = document.getElementById(sectionId);
  // add the active class to the one that was clicked
  element.classList.add("active");
}

function respondToClick(event) {
  // necessary to prevent page from refreshing
  event.preventDefault();

  let sectionId = event.target.id;
  let sectionName = sectionId.split("-")[0];
 
  setActiveSectionLink(sectionId);

  addShowCaseArticle(sectionName);
  addArticleGrid(sectionName);
}

addNavBar();