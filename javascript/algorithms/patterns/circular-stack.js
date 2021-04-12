
class Stack {
    constructor() {
        this.index = 0;
        this.length = 0;
        this.capacity = 3;
        this.content = new Array(3);
    }

    push(item) {
        if (this.index==this.capacity)
            this.index = 0;

        this.content[this.index++] = item;
        if (this.length+1<=this.capacity)
            this.length++;

        this.print('push');
    }

    print(msg) {
        console.log(msg, "len", this.length, "index", this.index, "content", this.content);
    }

    pop() {
        if (this.length==0) return null;
        if (this.index==0)
            this.index = this.capacity;

        this.index--;
        this.length--;
        item = this.content[this.index];
        this.content[this.index]=0;
        this.print('pop');
        return item;
    }
}

let s = new Stack();
s.push(9);
s.push(8);
s.push(7);
s.push(6);
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
 s.push(5);
 s.push(4);
 console.log(s.pop());