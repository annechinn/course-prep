// https://github.com/codefellows/seattle-code-201d74/tree/main/class-03/demo/js
// challenge: create a list of your favorite movies. Give the user 5 guesses to figure out one of the movies from your list. If the user guesses correctly tell them they are correct and stop giving them more chances to guess. If they guess incorrectly, let them know and prompt them to guess again. 
// list/array of movies
// a way to count the guesses
// a way to iterate through the array

// make a loop that exists to ask the user the question
// The Goonies - to lowercase if all of our array els are LC

let myFavMovies = ['indiana jones', 'star wars', 'inception', '5th element', 'lotr'];
let guesses = 5;
// create a flag - variable you set to let you know that a condition has changed (true false);
let correctGuess = false;
// !correctGuess

while (guesses > 0 && correctGuess === false) {
  let movieGuess = prompt('What is one of my favorite movies?');
  // loop through ALL MOVIES and check if their guess is one of the favorites
  // for loops are great for checking each value of an array
  console.log(movieGuess, 'user guess')
  // inner loop
  for (let index = 0; index < myFavMovies.length; index++) {
    // console.log(myFavMovies[index], 'this is the movie at ', index);
    if (movieGuess === myFavMovies[index]) {
      console.log('its a match');
      alert('congratulations you got it right');
      correctGuess = true;
    }
  }
  if (correctGuess === false) {
    alert('sorry you got it wrong');
  }
  guesses--;
  // decrement: guesses = guesses - 1;
  // increment: guesses = guesses + 1;
}