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
    append(value){
        const newNode = {
            value : value,
            next : null
        };
        this.tail.next = newNode;
        this.tail= newNode;
        this.length++;
        return this;
    }
}

const myLinkedList1 = new LinkedList(10);
 myLinkedList1.append(6);
myLinkedList1.append(17);

console.log(myLinkedList1);


