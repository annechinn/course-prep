
// Max depth of a binary tree
// Prereq: DFS on Tree

// Max depth of a binary tree is the longest root-to-leaf path. 
// Given a binary tree, find its max depth.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


// let root = new TreeNode('e');
// let a = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let g = new TreeNode('g');
// let h = new TreeNode('h');
// let i = new TreeNode('i');

// root.left = a;
// a.left = c;
// c.left = b;
// root.right = h;
// h.left = g;
// h.right = i;

// const findMaxDepthOfTreeRecursive = (node) => {
//     if (node === null) return 0;

//     let leftDepth = findMaxDepthOfTreeRecursive(node.left);
//     let rightDepth = findMaxDepthOfTreeRecursive(node.right);

//     return Math.max(leftDepth, rightDepth) + 1;
// }

// console.log(findMaxDepthOfTreeRecursive(root));

// const one = new TreeNode(1);
// const two = new TreeNode(2);
// const three = new TreeNode(3);
// const four = new TreeNode(4);
// const five = new TreeNode(5);
// const six = new TreeNode(6);
// const seven = new TreeNode(7);

// one.left = three;
// one.right = five;
// three.left = two;
// five.left = four;
// five.right = six;
// six.right = seven;

// //       1
// //     /   \
// //    3     5
// //   / \     \
// //  2   4     6
// //             \ 
// //              7

// const findMaxDepthofTreeInterative = (root) => {
//     if (root === null) return 0;

//     let sum = 0;
//     let stack = [root];
//     while (stack.length>0) {
//         const next = stack.pop();
//         if (next.left) stack.push(next.left);
//         if (next.right) stack.push(next.right);
//         sum+=next.val;
//     }
//     return sum;
// }

//console.log(findMaxDepthofTreeInterative(one));


// Visible Tree Node
// Prereq: DFS on Tree

// In a binary tree, a node is considered "visible" if no node on the root-to-itself 
// path has a greater value. The root is always "visible" since there are no other 
// nodes between the root and itself. Given a binary tree, count the number of
//  "visible" nodes.

// Input:

// const one = new TreeNode(1);
// const two = new TreeNode(2);
// const three = new TreeNode(3);
// const four = new TreeNode(4);
// const five = new TreeNode(5);
// const six = new TreeNode(6);
// const seven = new TreeNode(7);

// one.left = three;
// one.right = five;
// three.left = two;
// five.left = four;
// five.right = six;
// six.right = seven;

// //       1
// //     /   \
// //    3     5
// //   / \     \
// //  2   4     6
// //             \ 
// //              7

// a visible node has the greatest value in its ancestor path
// so no ancestor can have a greater value.
// for the root case, that doesn't have an ancestor it is a visible node.

// const findNumVisibleNodesInTree = (node, maxAncestorValue) => {

//     if (node === null) return 0;

//     let total = 0;
//     if (node.val>maxAncestorValue) ++total;

//     const newMax = Math.max(maxAncestorValue, node.val);
//     const leftNum = findNumVisibleNodesInTree(node.left, newMax);
//     const rightNum = findNumVisibleNodesInTree(node.right, newMax);
//     total = total + leftNum + rightNum;

//     console.log("node: " + node.val +  " leftNum: " + leftNum + " rightNum: " + rightNum + " total: " + total);
//     return total;
// }

// console.log(findNumVisibleNodesInTree(one, Number.NEGATIVE_INFINITY));


// Valid Binary Search Tree
// Prereq: DFS on Tree

// A binary search tree is a binary tree with the property that any of its 
// node's value is greater than or equal to any node in its left subtree and 
// less than or equal to any node's value in its right subtree.

// Given a binary tree, determine whether it is a binary search tree.

// const one = new TreeNode(1);
// const two = new TreeNode(2);
// const three = new TreeNode(3);
// const four = new TreeNode(4);
// const five = new TreeNode(5);
// const six = new TreeNode(6);
// const seven = new TreeNode(7);

// four.left = two;
// two.left = one;
// two.right = three;
// four.right = five;
// five.right = six;
// //six.right = seven;
// three.right = seven;

// //       4
// //     /   \
// //    2     5
// //   / \     \
// //  1   3     6
// //             \ 
// //              7


// const isValidBinarySearchTree = (node, min, max) => {
//     if (node === null) return true;

//     const nodeIsValid = node.val > min && node.val < max;

//     const leftIsValid = isValidBinarySearchTree(node.left, min, node.val);
//     const rightIsValid = isValidBinarySearchTree(node.right, node.val, max);
//     return nodeIsValid && leftIsValid && rightIsValid;

//     // check if this node is valid: 
//     // since parent has to be >= left child, left child has to be < minParent
//     // since parent has to be <= right child, right child has to be > maxParent
//     // so the parent can pass down the low and high boundary for the child to be legal
//     // root case: low value will be smallest possible negative number and largest possible
//     // positive number.
// }

// console.log(isValidBinarySearchTree(four, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY));



// Serializing and Deserializing Binary Tree
// Prereq: DFS on Tree

// Given a binary tree, write a serialize function that converts the tree into a 
// string and a deserialize function that converts a string to a binary tree. 
// You may serialize the tree into any string representation you want as long 
// as it can be deseralized.

// const one = new TreeNode(1);
// const two = new TreeNode(2);
// const three = new TreeNode(3);
// const four = new TreeNode(4);
// const five = new TreeNode(5);
// const six = new TreeNode(6);
// const seven = new TreeNode(7);

// four.left = two;
// two.left = one;
// two.right = three;
// four.right = five;
// five.right = six;
// six.right = seven;

//       4
//     /   \
//    2     5
//   / \     \
//  1   3     6
//             \ 
//              7

// let tree = 
// { val: 4,
//   left : {
//     val: 2,
//     left: {
//         val: 1,
//         left: null,
//         right: null
//     },
//     right: {
//         val: 3,
//         left: null,
//         right: null
//     }
//   },
//   right: {
//       val: 5,
//       left: null,
//       right: {
//           val: 6,
//           left: null,
//           right: {
//               val: 7,
//               left: null,
//               right: null
//           }
//       }
//   }


// const deSerializeTree = (str) => {
//     return JSON.parse(str);
// }

// const serializeTree = (node) => {
//    if (node === null) return 'null';

//    const currVal = node.val.toString;

//    const leftVal = serializeTree(node.left);
//    const rightVal = serializeTree(node.right);

//    return `{ "val": ${node.val}, "left": ${leftVal}, "right": ${rightVal} }`;
// }

// let json = serializeTree(four);
// console.log(json);
// console.log(deSerializeTree(json));


// const deSerializeTree = (str) => {
//     return JSON.parse(str);
// }

//       4
//     /   \
//    2     5
//   / \     \
//  1   3     6
//             \ 
//              7

// const _serializeTree = (node, result = []) => {
//    if (node === null) result.push('x');

//    result.push(node.val);

//    serializeTree(node.left);
//    serializeTree(node.right);
// }

// const serializeTree = () => {
//     let result = [];
//     _serializeTree(four,res);
//     return result.join(" ");
// }

// let result = serializeTree(four);
//  console.log(result);


// const _deserializeTree = (str) => {

// }

// const deserializeTree = () => {
//     _deserializeTree(result);
// }

// console.log(deSerializeTree(result));


// const one = new TreeNode(1);
// const two = new TreeNode(2);
// const three = new TreeNode(3);
// const four = new TreeNode(4);
// const five = new TreeNode(5);
// const six = new TreeNode(6);
// const seven = new TreeNode(7);

// four.left = two;
// two.left = one;
// two.right = three;
// four.right = five;
// five.right = six;
// six.right = seven;

//       4
//     /   \
//    2     5
//   / \     \
//  1   3     6
//             \ 
//              7

// Lowest Common Ancestor of a Binary Tree
// Prereq: DFS on Tree

// Lowest common ancestor (LCA) of two nodes v and w in a tree is the lowest (i.e. deepest) node that has both v and w as descendants. We also define each node to be a descendant of itself (so if v has a direct connection from w, w is the lowest common ancestor).

// Given two nodes of a binary tree, find their lowest common ancestor.


// const ancestorPath = (node, ancestors = []) => {

// }

// const lowestCommonAncestor = () => {
//     const firstAncestors = ancestorPath(three);
//     const secondAncestors = ancestorPath(seven);

//     while (firstIndex<firstAncestors.length && secondIndex<secondIndex.length) {

//         if (firstAncestors[firstIndex]!=secondAncestors[secondIndex])
//     }

//     return firstAncestors[firstIndex];
// }


// DFS with States
// Prereq: DFS on Tree

// Let's reinforce our understanding of state with one more example.

// Ternary Tree Paths
// Given a ternary tree (each node of the tree has at most three children), 
// find all root-to-leaf paths.


class TernaryTreeNode {
    constructor(val) {
        this.val = val;
        this.children = [];
    }
}

const one = new TernaryTreeNode(1);
const two = new TernaryTreeNode(2);
const three = new TernaryTreeNode(3);
const four = new TernaryTreeNode(4);
const five = new TernaryTreeNode(5);
const six = new TernaryTreeNode(6);

one.children.push(two);
one.children.push(four);
one.children.push(six);
two.children.push(three);

//       1
//     / | \
//    2  4  6
//   /      
//  3       

const buildPath = (node, pathStack, paths = []) => {
    pathStack.push(node.val);

    if (node.children.length===0) {
        paths.push(pathStack.join('->'));
    }

    for (next of node.children) {
        buildPath(next, pathStack, paths);
    }

    pathStack.pop();
}

let paths = [];
buildPath(one, [], paths);
console.log(paths);
