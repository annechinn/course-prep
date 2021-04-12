// Given a list of unique letters, find all of its distinct permutations.
// Input:
// ['a', 'b', 'c']
// Output:
// [['a', 'b', 'c'], 
// ['a', 'c', 'b'], 
// ['b', 'a', 'c'], 
// ['b', 'c', 'a'], 
// ['c', 'a', 'b'], 
// ['c', 'b', 'a']]

// ['c']
// ['b', 'c'], ['c', 'b']

// const getPermutations = (arr) => {

//     console.log(arr);
//    if (arr.length===0) return [[]];

//     const firstEl = arr[0];
//     const restOfElements = arr.slice(1);
//     const restOfPermutations = getPermutations(restOfElements);

//     let newPerms = [];
//     for (let p of restOfPermutations) {
//         for (let i=0;i<=p.length;i++) {
//             let newPerm = [...p.slice(0,i), firstEl, ...p.slice(i)];
//             newPerms.push(newPerm);
//         }
//     }

//     return newPerms;
// }


// const _getPermutations = (letters, currentPerm, used, results) => {

//     if (currentPerm.length === letters.length) {
//         results.push(Array.from(currentPerm));
//         return;
//     }

//     for (let i=0;i<letters.length;++i) {

//         if (used[i]) continue;

//         currentPerm.push(letters[i]);
//         used[i] = true;

//         _getPermutations(letters, currentPerm, used, results);
//         currentPerm.pop();
//         used[i] = false;
//     }
// }

// const getPermutations=() => {
//     let results = [];
//     let letters = ['a', 'b', 'c'];
//     let used = Array(letters.length).fill(false);

//     _getPermutations(letters, [], used, results);
//     return results;
// }

// let arr = ['a', 'b', 'c'];
// console.log(getPermutations(arr, 0));


// DFS and Combinatorial Problems
// Prereq: Backtracking

// Letter Combinations of Phone Number
// Given a phone number that contains 2-9, 
// find all possible letter combinations the phone number could translate to.

// const KEYBOARD = {
//     '2': 'abc',
//     '3': 'def',
//     '4': 'ghi',
//     '5': 'jkl',
//     '6': 'mno',
//     '7': 'pqrs',
//     '8': 'tuv',
//     '9': 'wxyz',
//   };

// const dfs = (digits, path, results) => {
//     if (path.length == digits.length) {
//         results.push(path.join(''));
//         return;
//     }

//     let next_number = digits.charAt(path.length);
//     for (let letter of KEYBOARD[next_number]) {
//         path.push(letter);
//         dfs(digits, path, results);
//         path.pop();
//     }
// }

// const getPermutationsForPhoneNumber = () => {
//     let results = [];
//     dfs("34", [], results);
//     console.log(results);
// }

// getPermutationsForPhoneNumber();



