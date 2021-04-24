
function getBoxes() {
    return document.getElementsByClassName('example');
}

function updateHeight(value){
    Array.from(getBoxes()).forEach((box)=>box.style.height = `${value}em`);
  }
  
  function updateWidth(value){
     Array.from(getBoxes()).forEach((box)=>box.style.width = `${value}em`);
  }
  
  
  function updatePadding(value){
     Array.from(getBoxes()).forEach((box)=>box.style.padding = `${value}em`);
  }
  
  function updateMargin(value){
    Array.from(getBoxes()).forEach((box)=>box.style.margin = `${value}em`);
  }
  
  
  function updateBorder(value){
    Array.from(getBoxes()).forEach((box)=>box.style.borderWidth = `${value}em`);
  }
  
  function updateBoxSizing(cb){
    cb.checked ? document.querySelector('#wrapper').style.boxSizing = "border-box" : document.querySelector('#wrapper').style.boxSizing = "content-box";
  }