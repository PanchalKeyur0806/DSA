// Node calss with value, pointer to the next node, and previous node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// DoubleLinkedList class
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push mehtod
  push(value) {
    // create a new Node
    const newNode = new Node(value);

    // if head doesn't found
    // set head, tail to newNode
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // add newNode to tail.next
      // newNode.prev to previous tail node
      // assign newNode to tail
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    // increment the length
    this.length++;

    // return
    return this;
  }
}

const list = new DoubleLinkedList();
list.push("Keyur");
list.push("Manish");
console.log(list.push("Vatsal"));

// console.log(list);
