
class StackNode { 
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }

    push(val) {
        if (this.top === null) {
            this.top = new StackNode(val);
            return;
        }
        let node = new StackNode(val);
        node.next = this.top;
        this.top = node;
    }

    pop() {
        let node = this.top;
        this.top = this.top.next;
        return node;
    }

    print() {
        let curr = this.top;
        while (curr!==null) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.push(3);
stack.push(4);
stack.print();