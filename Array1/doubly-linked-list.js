class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        console.log(newNode)
        newNode.prev = this.tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        newNode.next = this.head;
        this.head.prev = newNode
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }
    insert(index, value){
        //Check for proper parameters;
        if(index >= this.length) {
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null,
            prev: null
        }
        const leader = this.traverseToIndex(index-1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        console.log(this)
        return this.printList();
    }
    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index) {
        let delNode = null
        if (index === 0){
            delNode = this.head;
            this.head = delNode.next;
            this.head.prev = null;
            this.length--;
            return this;
        };
        let pre = this.head;
        for (let i = 0; i < index - 1; i++) {
            pre = pre.next;
        }
        let del = pre.next;
        let aft = del.next;
        pre.next = aft;
        del.pre = pre;
        aft.prev = pre
        this.length--
    };
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(1)
myLinkedList.insert(2, 99)
 myLinkedList.insert(20, 88)
console.log(myLinkedList.printList())
myLinkedList.remove(2)
// myLinkedList.reverse()

