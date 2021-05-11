
function getBoxes() {
    return document.getElementsByClassName('box');
}

function updateCurrentValue(prop, value) {
  Array.from(getBoxes()).forEach((box)=>box.style[prop] = `${value}px`);

  let el = document.getElementById(prop);
  el.innerText = `${value}px`;
}

function updatePadding(value){
  updateCurrentValue('padding', value);
}

function updateMargin(value){
  updateCurrentValue('margin', value);
}

function updateBorder(value){
  updateCurrentValue('borderWidth', value);
}
