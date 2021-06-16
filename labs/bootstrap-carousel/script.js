function getHTMLForCauroselItem(item, index) {
  return `
    <div class='carousel-item ${index===0?"active":""}'>
      <img src="${item.imageURL}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${item.name}</h5>
        <p>${item.description}</p>
      </div>
    </div>
  `;
}

function setupFormCaurosel() {

  let div = document.getElementById('carousel-content'); 
  let html = food.map((x,index)=> {
      return getHTMLForCauroselItem(x, index);
    }).join("");
    div.innerHTML = html;
}

setupFormCaurosel();