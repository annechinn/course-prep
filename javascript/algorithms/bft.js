
class Node { 
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breadthFirstPrint = (root) => {
    const queue = [root];
    while (queue.length>0) {
        let curr = queue.shift();
        console.log(curr.val);

        if (curr.left!==null) queue.push(curr.left);
        if (curr.right!=null) queue.push(curr.right);
    }
}

const depthFirstPrint = (root) => {
    const stack = [root];
    while (stack.length>0) {
        let curr = stack.pop();
        console.log(curr.val);

        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
}

//breadthFirstPrint(a);
//depthFirstPrint(a);


const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);
const seven = new Node(7);

one.left = three;
one.right = five;
three.left = two;
five.left = four;
five.right = six;
six.right = seven;


const breadthFirstSumIterative = (root) => {
    // process current level, left to right, before moving down
    // use a queue to control processing.
    // stick the current node in the queue, then
    // in a while loop process all entries in the queue,
    // adding to the queue the left and right child of the current 
    // node 

    let sum = 0;
    let queue = [root];
    while (queue.length>0) {
        // get the first value
        const next = queue.shift(); 
        sum+= next.val;

        if (next.left) queue.push(next.left);
        if (next.right) queue.push(next.right);
    }

    return sum;
}

// console.log(breadthFirstSumIterative(one));

const breadthFirstSumRecursive = (node, sum) => {
    if (node === null) return 0;

    sum+=breadthFirstSumRecursive(node.left);
    sum+=breadthFirstSumRecursive(node.right);
    return node.val+sum;
}

// console.log(breadthFirstSumRecursive(one, 0));

const depthFirstSumInterative = (root) => {
    let sum = 0;
    let stack = [root];
    while (stack.length>0) {
        const next = stack.pop();

        sum+= next.val;
        if (next.left) stack.push(next.left);
        if (next.right) stack.push(next.right);
    }

    return sum;
}

// console.log(depthFirstSumInterative(one, 0));

const depthFirstSumRecursive = (node, sum) => {
    if (node === null) return 0;

    const leftSum = depthFirstSumRecursive(node.left);
    const rightSum = depthFirstSumRecursive(node.right);
    return node.val + leftSum + rightSum;
}

console.log(depthFirstSumRecursive(one, 0));
