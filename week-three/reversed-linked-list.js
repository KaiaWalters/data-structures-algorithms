// Reverse a singly linked list.
// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:
// A linked list can be reversed either iteratively or recursively. Could you implement both?

//Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.


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
    };

    reverse() {
        console.log(this.tail)
       //take the tail from the nd of the linked list 
       //prepend that tail's value to the liked list 
       //delete the former tail 
       //reassign it's previous element as the new tail 
    }

};

class Node {
    constructor(value, next, prev) {
        this.value = value
        this.next = next
        this.prev = prev 
    }
};

let linkedList = new LinkedList()

linkedList.add("Frog")
linkedList.add("Bat")
linkedList.add("Toad")
linkedList.add("Newt")

linkedList.reverse()