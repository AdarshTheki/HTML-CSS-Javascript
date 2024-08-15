// Create a Linked List Class:
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirst(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    insertLast(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    search(key) {
        if (this.size === 0) {
            console.log('you list is empty');
            return;
        }
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data === key) {
                console.log(true);
                return;
            }
            currentNode = currentNode.next;
        }
        console.log(false);
    }

    getNthPosition(index) {
        if (index < 0 || index > this.size) {
            console.log('invalid index');
            return;
        } else if (this.size === 0) {
            console.log('your list is empty');
            return;
        } else if (index === this.size - 1) {
            return this.head.data;
        }

        let count = 0;
        let currentNode = this.head;
        while (currentNode !== null) {
            if (count == index) {
                return currentNode.data;
            }
            currentNode = currentNode.next;
            count++;
        }
    }

    removeFirst() {
        if (this.size === 0) {
            console.log('you list is empty');
            return;
        }
        this.head = this.head.next;
        this.size--;
        if (this.size === 0) {
            this.tail = null;
        }
    }

    removeLast() {
        if (this.size === 0) {
            console.log('you list is empty');
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            this.tail = null;
            this.size--;
            return;
        }

        let secondLastNode = this.head;
        let lastNode = this.head.next;
        while (lastNode.next !== null) {
            lastNode = lastNode.next;
            secondLastNode = secondLastNode.next;
        }
        secondLastNode.next = null;
        this.tail = secondLastNode;
        this.size--;
    }

    display() {
        if (this.size === 0) {
            console.log('your node is empty');
            return;
        }
        let currentNode = this.head;
        const result = [];
        while (currentNode) {
            result.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(`size: ${this.size} | list: [${result}]`);
    }

    // Intermediate Level
    insertAt(value, index) {
        if (index < 0 || index > this.size) {
            console.log('invalid index');
            return;
        }

        // Insert at the beginning
        if (index === 0) {
            this.insertFirst(value);
            return;
        }
        // Insert at the ending
        if (index === this.size) {
            this.insertLast(value);
            return;
        }

        // Insert in the middle
        const newNode = new Node(value);
        let current = this.head;
        let previous = null;
        let currentIndex = 0;
        while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }
        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    deleteAt(index) {
        if (index < 0 || index > this.size) {
            console.log('invalid index');
            return;
        }
        if (index === 0) {
            this.removeFirst();
            return;
        }
        if (index === this.size) {
            this.removeLast();
            return;
        }
        let current = this.head;
        let previous = null;
        let currentIndex = 0;
        while (currentIndex < index) {
            previous = current;
            current = current.next;
            currentIndex++;
        }
        previous.next = current.next;
        if (index === this.size - 1) {
            this.tail = previous;
        }
        this.size--;
    }

    reverse() {
        if (this.size === 0) {
            console.log('your list is empty');
        } else if (this.size === 1) {
            console.log('your list is single data');
        }
        let current = this.head;
        let previous = null;
        let next = null;

        this.tail = this.head;
        while (current !== null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }

    hasCycle() {
        // Implement cycle detection logic.
    }

    findMiddle() {}

    removeDuplicates() {}

    mergeSortedLists(list1, list2) {}

    flattenList() {}
}

const list = new LinkedList();

list.insertFirst(40);
list.insertFirst(50);
list.insertFirst(60);
list.insertFirst(70);
list.insertFirst(80);
list.display();
list.display();
