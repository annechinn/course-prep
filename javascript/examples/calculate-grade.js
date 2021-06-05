function calculateGrade(grades) {
  let total = 0;

  grades.forEach((grade) => {
    total += grade;
  });

  let average = total / grades.length;

  if (average >= 0 && average <= 60) {
    return "F";
  } else if (average >= 61 && average <= 70) {
    return "D";
  } else if (average >= 71 && average <= 80) {
    return "C";
  } else if (average >= 81 && average <= 90) {
    return "B";
  } else if (average >= 91 && average <= 100) {
    return "A";
  }
  // returns 'A', 'B', 'C', 'D', 'F'
}

console.log(calculateGrade([65, 56, 78, 89, 90]));

console.log(calculateGrade([23, 56, 78, 89, 90]));
