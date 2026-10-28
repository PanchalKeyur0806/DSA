// Define Node:
// This stores the data and refrence to the next node
// Node is a single value
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// SignlyLinkedList for creating linked list
class SingleLinkedList {
  // constructor that defines head, tail and legth
  // by default it sets to null and zero
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //   method for adding value at the tail of the list
  push(value) {
    // create a new node
    let newNode = new Node(value);

    // if singly linked list is empty
    // create a singly linked list with head and tail
    // else add node to tail.next and update the tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increase the length
    this.length++;
  }

  // remove the tail node
  pop() {
    // if head not found
    if (!this.head) {
      return;
    }

    // get the currentNode
    let currentNode = this.head;
    // set new tail to current node
    let newTail = currentNode;

    // loop untill there is a next node on currentNode
    while (currentNode.next) {
      // set new tail to currentNode
      newTail = currentNode;
      // set current node to currentNode.next node
      currentNode = currentNode.next;
    }

    // update the tail
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
  }

  // remove the element from the start
  shift() {
    // if head doesn't found, return
    if (!this.head) return undefined;

    // get current head
    let currentHead = this.head;
    // set head to currentHead.next node
    this.head = currentHead.next;

    // decrease the length
    this.length--;

    // if length is zero, remove the tail
    if (this.length === 0) {
      this.tail = null;
    }
  }

  // add element to start of the linked list
  unshift(value) {
    // create a new node
    let newNode = new Node(value);

    // if head not found, then add tail and head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set newNode to head
      newNode.next = this.head;
      this.head = newNode;
    }

    // increase the length
    this.length++;
  }

  // get the node by index
  get(index) {
    // check that index is valid or not
    if (index < 0 || index >= this.length) return false;

    // track the index
    let i = 0;
    // get currentNode
    let currentNode = this.head;

    // loop untill i mathces with index
    while (i !== index) {
      // increment the currentNode
      currentNode = currentNode.next;
      i++;
    }

    // return the currentNode
    return currentNode;
  }

  // set the node value using indes
  set(index, value) {
    // check that if index is valid or not
    if (index < 0 || index >= this.length) return false;

    // get the node
    const getNode = this.get(index);
    // if node doesn't found return false
    if (!getNode) {
      return false;
    }

    // set the node value
    getNode.value = value;

    // return true
    return true;
  }

  // insert node at specific index
  insert(index, value) {
    // check thatif index is valid or not
    if (index < 0 || index > this.length) return undefined;

    // if index is at end of list
    if (index === this.length - 1) {
      this.push(value);
      return true;
    }

    // if index is at starting position of list
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    // get previousNode
    const previousNode = this.get(index - 1);

    // create a new node
    const newNode = new Node(value);

    // set newNode.next = previousNode.next
    newNode.next = previousNode.next;
    // set previousNode.next = newNode
    previousNode.next = newNode;

    this.length++;

    return true;
  }

  // remove the element at specific position
  remove(index) {
    // check if index is valid
    if (index < 0 || index > this.length) return false;

    // if index is at starting position then remove it using shift
    if (index === 0) {
      this.shift(index);
      return true;
    }

    // if index is at ending position then remove it using pop
    if (index === this.length - 1) {
      this.pop();
      return true;
    }

    // get previousNode
    let previousNode = this.get(index - 1);
    // get the nextNode of previousNode.next
    let nextNode = previousNode.next.next;

    // update the next
    previousNode.next = nextNode;
    this.length--;
  }
}

const list = new SingleLinkedList();
list.push("Keyur");
list.push("Manish");
list.push("Yash Vyas");
list.push("Yash Darji");

// list.pop();
// list.pop();

// list.shift();
// list.shift();
// list.shift();
// list.shift();

// list.unshift("Yash Gami");

// console.log(JSON.stringify(list.get(2), null, 2));
// console.log(JSON.stringify(list.set(2, "Nitin Rathod"), null, 2));

// list.insert(2, "Nitin Rathod");

// list.remove(2);
// list.remove(1);
// list.remove(0);

console.log(JSON.stringify(list, null, 2));
