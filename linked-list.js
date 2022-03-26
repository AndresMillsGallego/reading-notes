'use strict';

// code along with Jacob during our class discussion on linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = value ? new Node(value) : null;
  }

  // read all values in the list while traversing
  traverse(callback) {
    let currentRef = this.head;
    while(currentRef !== null) {
      callback(currentRef.value);
      currentRef = currentRef.next;
    }
  }
  // add values to the end of the list
  add() {

  }

  // add values to the start of the list
  prepending() {

  }
}

let ll = new LinkedList();

let nodeA = new Node(20);
let nodeB = new Node(25);
let nodeC = new Node(12);
let nodeD = new Node(-13);

ll.head = nodeA;
ll.head.next = nodeB;
ll.head.next.next = nodeC;
ll.head.next.next.next = nodeD;

console.table(ll);
