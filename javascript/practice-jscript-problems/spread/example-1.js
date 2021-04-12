// https://www.javascripttutorial.net/es6/javascript-spread/

// JavaScript spread operator and array manipulation

// 1) Constructing array literal
// The spread operator allows you to insert another array into the initialized array when you construct an array using the literal form. See the following example:

let initialChars = ['A', 'B'];
let chars = [...initialChars, 'C', 'D'];
console.log(chars); // ["A", "B", "C", "D"]


// 2) Concatenating arrays
// Also, you can use the spread operator to concatenate two or more arrays:

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); // [1, 2, 3, 4]


// 3) Copying an array
// In addition, you can copy an array instance by using the spread operator:

let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]

// Note that the spread operator only copies the array itself to the new one, 
// not the elements, meaning that the copy is shallow, not deep.
// JavaScript spread operator and strings
// Consider the following example:

let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

// In this example, we constructed the chars array from individual strings. 
// When we applied the spread operator to the 'BC'string, it spreads out 
// each individual character of the string 'BC' into individual characters.


Math.max(1,3,5) // 5
Math.max([1,3,5]) // NaN
Math.max(...[1,3,5]) // 5

const codeburst = 'CODEBURST'; // Line 1
const characters = [ ...codeburst ]; // Line 2
// [ 'C', 'O', 'D', 'E', 'B', 'U', 'R', 'S', 'T' ]

const items = ['This', 'is', 'a', 'sentence'];
console.log(items) // Line 1
console.log(...items) // Line 2
// [ 'This', 'is', 'a', 'sentence' ] // Output 1
// This is a sentence // Output 2

const obj1 = { firstName: 'Foo', age: 22 };
const obj2 = { lastName: 'Bar', gender: 'M' };
const newObj = { ...obj1, ...obj2, planet: 'Earth' };
console.log(newObj)
// { firstName: 'Foo', age: 22, lastName: 'Bar', gender: 'M', planet: 'Earth' }


const numbers = [1, 2, 3];
const [ firstNumber, ...restOfTheNumbers ] = numbers;
console.log(firstNumber, restOfTheNumbers);
// 1 [ 2, 3 ]

const details = {
    firstName: 'Code',
    lastName: 'Burst',
    age: 22
};
const { age, ...restOfTheDetails } = details;
console.log(age, restOfTheDetails);
// 22 { firstName: 'Code', lastName: 'Burst' }






