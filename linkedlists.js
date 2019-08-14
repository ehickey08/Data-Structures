class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    printList() {
        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.nextNode;
        }
    }

    insertStart(data) {
        this.size += 1;
        let newNode = new Node(data);

        if (!this.head) this.head = newNode;
        else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

    insertEnd(data) {
        this.size++;
        let newNode = new Node(data)
        let currentNode = this.head;

        while(currentNode.nextNode){
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = newNode
    }

    remove(data) {
        this.size--;
        let currentNode = this.head;
        let previousNode = null;

        while(currentNode.data !== data){
            previousNode = currentNode;
            currentNode = currentNode.nextNode
        }

        if(!previousNode)
            this.head = currentNode.nextNode
        else
            previousNode.nextNode = currentNode.nextNode;
    }
}

let linkedlist = new LinkedList()
linkedlist.insertStart(3)
linkedlist.insertStart(4)
linkedlist.insertStart(5)
linkedlist.insertEnd(5)
linkedlist.printList()
console.log('size', linkedlist.getSize())

linkedlist.remove(5)
linkedlist.printList()
console.log(linkedlist.getSize())