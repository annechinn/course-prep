// https://gist.github.com/mikaelbr/9900818

// === Arrays

var [a, b] = [1, 2];
console.log(a, b);
//=> 1 2


// Use from functions, only select from pattern
var foo = () => [1, 2, 3];

var [a, b] = foo();
console.log(a, b);
// => 1 2


// Omit certain values
var [a, , b] = [1, 2, 3];
console.log(a, b);
// => 1 3


// Combine with spread/rest operator (accumulates the rest of the values)
var [a, ...b] = [1, 2, 3];
console.log(a, b);
// => 1 [ 2, 3 ]


// Fail-safe.
var [, , , a, b] = [1, 2, 3];
console.log(a, b);
// => undefined undefined


// Swap variables easily without temp
var a = 1, b = 2;
[b, a] = [a, b];
console.log(a, b);
// => 2 1


// Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6


// === Objects

var {user: x} = {user: 5};
console.log(x);
// => 5


// Fail-safe
var {user: x} = {user2: 5};
console.log(x);
// => undefined


// More values
var {prop: x, prop2: y} = {prop: 5, prop2: 10};
console.log(x, y);
// => 5 10

// Short-hand syntax
var { prop, prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// Equal to:
var { prop: prop, prop2: prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// === Potential grammar hiccups

// Oops: This doesn't work:
var a, b;
{ a, b } = {a: 1, b: 2};

// But this does work
var a, b;
({ a, b } = {a: 1, b: 2});
console.log(a, b);
// => 1 2

// This due to the grammar in JS. 
// Starting with { implies a block scope, not an object literal. 
// () converts to an expression.

// From Harmony Wiki:
// Note that object literals cannot appear in
// statement positions, so a plain object
// destructuring assignment statement
//  { x } = y must be parenthesized either
// as ({ x } = y) or ({ x }) = y.


// === Combined destructuring of objects and arrays

// Combine objects and arrays
var {prop: x, prop2: [, y]} = {prop: 5, prop2: [10, 100]};
console.log(x, y);
// => 5 100


// === Nested object destructuring

// Deep objects
var {
  prop: x,
  prop2: {
    prop2: {
      nested: [ , , b]
    }
  }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
console.log(x, b);
// => Hello c


// === Combining all to make fun happen

// All well and good, can we do more? Yes!
// Using as method parameters
var foo = function ({prop: x}) {
  console.log(x);
};

foo({invalid: 1});
foo({prop: 1});
// => undefined
// => 1

// === Nested advanced examples

// Can also use with the advanced example
var foo = function ({
  prop: x,
  prop2: {
    prop2: {
      nested: b
    }
  }
}) {
  console.log(x, ...b);
};
foo({ prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}});
// => Hello a b c


// === In combination with other ES2015 features.

// Computed property names
const name = 'fieldName';
const computedObject = { [name]: name }; // (where object is { 'fieldName': 'fieldName' })
const { [name]: nameValue } = computedObject;
console.log(nameValue)
// => fieldName



// === Rest and defaults
var ajax = function ({ url = "localhost", port: p = 80}, ...data) {
  console.log("Url:", url, "Port:", p, "Rest:", data);
};

ajax({ url: "someHost" }, "additional", "data", "hello");
// => Url: someHost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ }, "additional", "data", "hello");
// => Url: localhost Port: 80 Rest: [ 'additional', 'data', 'hello' ]

ajax({ });
// => Url: localhost Port: 80 Rest: []

// Doesn't work due to trying to destructure undefined
ajax();
//  => Uncaught TypeError: Cannot match against 'undefined' or 'null'

// To fix this we need to have default value for parameter in function
// Note: See the `= {}` at the end, saying default empty object if the first argument is undefined.
var ajax = ({ url: url = "localhost", port: p = 80} = {}) => {
  console.log("Url:", url, "Port:", p);
};

// Now this works.
ajax();
// => Url: localhost Port: 80

ajax({ });
// => Url: localhost Port: 80

ajax({ port: 8080 });
//  => Url: localhost Port: 8080

ajax({ url: "someHost", port: 8080 });
//  => Url: someHost Port: 8080


// === Similar to _.pluck
var users = [
  { user: "Name1" },
  { user: "Name2" },
  { user: "Name2" },
  { user: "Name3" }
];
var names = users.map( ({ user }) => user );
console.log(names);
// => [ 'Name1', 'Name2', 'Name2', 'Name3' ]


// === Usage in for..of loops
var users = [
  { user: "Name1" },
  { user: "Name2", age: 2 },
  { user: "Name2" },
  { user: "Name3", age: 4 }
];

for (let { user, age = "DEFAULT AGE" } of users) {
  console.log(user, age);
}
// => Name1 DEFAULT AGE
// => Name2 2
// => Name2 DEFAULT AGE
// => Name3 4

const name = "fieldName"
const {[name]: nameValue} = {fieldName: 'value'}

console.log(nameValue)
// => value

[
    { firstName: "Paul", lastName: "Nicklen", age: 48, profession: "Photography"},
    { firstName: "Steve", lastName: "McCurry", age: 66, profession: "Photography"},
    { firstName: "Frans", lastName: "Lanting", age: 65, profession: "Photography"},
    { firstName: "Jimmy", lastName: "Chinn", age: 42, profession: "Photography"}
  ].map(({firstName, lastName, age}) => ({name:firstName + lastName, age}));


  var users = [
    { user: "Name1" },
    { user: "Name2", age: 2 },
    { user: "Name2" },
    { user: "Name3", age: 4 }
  ];
  users.forEach(({ user, age = "DEFAULT AGE" }) => console.log(user, age));


  let str = "hello";
const toCapital = ([a, ...b]) => [a.toUpperCase(), ...b].join('');
console.log(toCapital(str)); // Hello

{
    const key = 'user';
    const { [key]: x } = { user: 5 };
  
    console.log(x);
    // 5
  }


  onst data = [{
    item: 'Awesome shoe',
    price: 19.99,
    inStore: ['Regent Street', 'Oxford Street', 'Harrods']
  }, {
    item: 'Fave shirt',
    price: 12.99,
    inStore: ['Regent Street']
  }];
  const [ { item, inStore: [, , x] } ] = data;
  console.log(item + " is in " + x);
//   Which would result in the same. We can reduce the structure 
// further if we just focus on the item and not the inStore property:
  
  const data = [{
    item: 'Awesome shoe'
  }, {
    item: 'Fave shirt'
  }];
  const [ { item } ] = data;
  console.log(item); //=> Awesome shoe
//   And that again is pretty much the same as:
  
  const data = [1, 2];
  const [ item ] = data;
  console.log(item); //=> 1
//   And hopefully it's easier to see what is going on. We're 
//   destructuring an array and fetching the first element and 
//   ignore all other in the array. As if we did const [ item, ].

// Thank you! Another one I find nifty when iterating objects and 
// requiring both the keys and values:

Object.entries({x: "xval", y: "yval"}).map(([key, val]) => console.log(key, val));
// x xval
// y yval










