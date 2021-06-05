let scores = [80, 85, 91, 90, 76];

function filterScores(array) {
  let passingScores = [];
  for (let i=0;i<array.length;++i) {
    if (score >= 85) {
      passingScores.push(score);
    }
  }

  return passingScores;
}

function filterScores(array) {
  let passingScores = [];
  array.forEach(score => {
    if (score >= 85) {
      passingScores.push(score);
    }
  });

  return passingScores;
}

function passingScore(score) {
  return score>=85;
}

function filterScores(array, filterFcn) {
  let passingScores = [];
  array.forEach(score => {
    if (filterFcn(score)) {
      passingScores.push(score);
    }
  });

  return passingScores;
}

// console.log(filterScores(scores));
console.log(filterScores(scores, passingScore));
//console.log(scores.filter(score=>score>=85));