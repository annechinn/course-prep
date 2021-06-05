


function colorInList(colors, color) {
  let found = false;

  let index = 0;
  while (!found && index<colors.length) {
    if (colors[index] === color) {
      found = true;
    }
  }

  return found;
}