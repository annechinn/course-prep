// https://exercism.io/tracks/javascript/exercises/two-fer/solutions/e417ddd5633f464ebe5d11b6317b0bd6

// Two-fer or 2-fer is short for two for one. One for you and one for me.
// Given a name, return a string with the message:
// One for name, one for me.
// Where "name" is the given name.
// However, if the name is missing, return the string:
// One for you, one for me.
// Here are some examples:
// Name	String to return
// Alice	One for Alice, one for me.
// Bob	One for Bob, one for me.
// One for you, one for me.

export const twoFer1 = (name) => {
    return name
      ? `One for ${name}, one for me.`
      : `One for you, one for me.`;
  };


export const twoFer2 = (name = "you") => {
    return `One for ${name}, one for me.`;
};

