
// head: where to dequeue from
//  starts at 0, but can't be accessed until length>0
//  pop: 
//    return null if length = 0
//    remove item at head
//    decrement length
//    if len = 0, set head to zero
//    if len > 0 && head + 1 will be inbounds, increment head
//    if len > 0 && head + 1 will be out of bounds, set head to 0
//  push:
//    return null if length = 0
//    if len + 1 is < capacity, 
//    if tail is inbounds, insert at t and increment t
//    if tail is out of bounds, set t = 0, insert at t and increment t
//    increment len
// 
//  learning:
//  should use % to determine the correct index, since it will wrap
//  to use %, need to start tail at last index so that when we
//  calculate the insertion index with % it will result in 0.

class Queue {
    constructor() {
        this.capacity = 3;
        this.content = new Array(this.capacity);
        this._length = 0;
        this.head = 0;

        // set tail to the last element so that it will start
        // at zero when first called in enqueue
        this.tail = this.capacity-1; 
    }

    dequeue() {
        if (this.isEmpty()) return Number.MIN_SAFE_INTEGER;

        let item = this.content[this.head];
        this.content[this.head] = -1;
        this._length--;
        this.head = (this.head+1)%this.capacity;

        console.log("popped", item);
        this.print("dequeue");
        return item;
    }

    enqueue(item) {

        if (this.isFull()) {
            return;
        }

        this.tail = (this.tail+1)%this.capacity;

        this.content[this.tail]= item;
        this._length++;

        console.log("pushed", item);
        this.print("enqueue");
    }

    isEmpty() {
        return this._length==0;
    }

    isFull() {
        return this._length == this.capacity;
    }

    print(msg) {
        console.log(msg, "len", this._length, "tail", this.tail, "head", this.head, "queue", this.content);
    }

    get length() { return this._length; }
}


let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.enqueue(5);
q.dequeue();
q.dequeue();
q.dequeue();
q.enqueue(6);
q.enqueue(7);
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
