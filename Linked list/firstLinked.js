// 10 --->5--->16

class LinkedList  {
    constructor(value){
    this.head = {
        value : value,
        next : null
    }
    this.tail = this.head;
    this.length = 1;

    }
}

const myLinkedList1 = new LinkedList(10);
console.log(myLinkedList1);
