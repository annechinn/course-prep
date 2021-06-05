// divisible by 3 ==> Fizz
// divisible by 5 ==> Buzz
// divisible by both 3 and 5 ==> FizzBuzz
// not divisible by 3 or 5 ==> input

function fizzBuzz(num) {
  if (typeof num!=="number") {
    return "Not a Number";
    return NaN;
  }
  if (num%3 ===0 && num%5===0) {
    return "FizzBuzz";
  }
  else if (num%3===0) {
    return "Fizz";
  }
  else if (num%5===0) {
    return "Buzz";
  }
  else {
    return num;
  }
}