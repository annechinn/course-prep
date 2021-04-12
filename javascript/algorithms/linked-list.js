
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            curr.next = node;
        }
    }


    print() {
        if (!this.head) { return '';}

        let curr = this.head;
        while (curr) {
            console.log(curr.val + '->');
            curr = curr.next;
        }
    }


    delete(val) {
        if (!this.head) return null;
        if (this.head.val === val) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        let prev = null;
        while (curr) {
            if (curr.val === target) {
                prev.next = curr.next;
                break;
            }
        
            prev = curr;
            curr = curr.next;   
        }
    }

    // reverse() {
    //     if (!this.head) {
    //         return;
    //     }

    //     let prev = null;
    //     let curr = this.head;
    //     while (curr) {
    //         const next = curr.next;
    //         curr.next = prev;
    //         prev = curr;
    //         curr = next;
    //     }
    // }




    reverse() {
        if (!this.head){ return; }

        let curr = this.head;
        let prev = null;
        while (curr) {
            const next = curr.next;
            curr.prev = prev;
            prev = curr;
            curr = next;
        }
    }
}