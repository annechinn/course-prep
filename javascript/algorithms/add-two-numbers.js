var addTwoNumbers = function(l1, l2) {
    
    let head = null;
    let carry = 0;
    while (l1 || l2) {
        let l1val = l1?l1.val:0;
        let l2val = l2?l2.val:0;
        let sum = l1val + l2val + carry;
        if (sum>=10) {
            carry = sum % 10;
        }
        else {
            carry = 0;
        }
        let next = new ListNode(sum, head);
        head = next;
        l1=l1.next;
        l2=l2.next;
        
    }
    
    return head; 
};


const books = [1, 2, 3, 4];

books.forEach((b, i)=> console.log(b, i));
