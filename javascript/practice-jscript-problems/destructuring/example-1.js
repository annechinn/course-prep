let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }


const address = [221, 'Baker Street', 'London'];
const [ houseNo, , city ] = address;
console.log(houseNo, city)
// 221 'London'

const details = { firstName: 'Code', lastName: 'Burst', age: 22 };
const { firstName, age } = details;
console.log(firstName, age);
// Code 22



