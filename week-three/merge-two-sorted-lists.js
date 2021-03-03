//Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

class Node {
    constructor(value, next, prev) {
        value = this.value
        next = this.next
        prev = this.prev 
    }
}

class LinkedList {
    constructor(){
        this.head = this.tail = null;
    }
    add(value) {
        if(!this.tail) {
            this.head = this.tail = new Node(value)
        }else {
            let oldTail = this.tail
            this.tail = new Node(value)
            oldTail.next = this.tail
        }
    }
}

let linkedList = new LinkedList()

linkedList.add("Frog")
linkedList.add("Bat")
linkedList.add("Toad")
linkedList.add("Newt")

return linkedList

