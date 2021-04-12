
class QueueNode { 
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.enter = null;
        this.exit =  null;
        this.size = 0;
    }

    enqueue(val) {
        if (this.size===0) {
            this.enter = new QueueNode(val);
            this.exit = this.enter;
        }
        else {
            let node = new QueueNode(val);
            this.enter.next = node;
            this.enter = node;
        }
        this.size++;
    }

    dequeue() {
        let node = this.exit;
        this.exit = this.exit.next;
        node.next = null;
        this.size--;
        return node.val;
    }

    print() {
        let curr = this.exit;
        while (curr!==null) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.print();
console.log('---');
queue.enqueue(3);
queue.print();
console.log('---');
queue.dequeue();
queue.enqueue(3);
queue.enqueue(4);
queue.print();