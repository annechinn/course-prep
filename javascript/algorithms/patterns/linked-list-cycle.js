
class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }
  
//   head = new Node(1)
//   head.next = new Node(2)
//   head.next.next = new Node(3)
//   head.next.next.next = new Node(4)
//   head.next.next.next.next = new Node(5)
//   head.next.next.next.next.next = new Node(6)

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;

const calculateCycleLength = (node) => {

    let count = 0;
    let start = node;
    while (node.next != start) {
        count++;
        node = node.next;
    }

    return count;

}

const test = (head) => {

    if (head == null || head.next == null) return -1;
    
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow==fast) return calculateCycleLength(slow);
    }

    return -1;

}

console.log(test(head));