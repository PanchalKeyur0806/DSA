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

  pop() {
    // if head doesn't found return undefined
    if (!this.head) return undefined;

    // if there is only one element in the list
    // remove it
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    }

    // get the current tail
    // this tail is needed to be removed
    let deletedTail = this.tail;

    // assign a deletedTail.prev node to new tail
    this.tail = deletedTail.prev;
    // remove the next pointer of newly created tail
    this.tail.next = null;
    // remove the all previous pointer of deletedTail
    deletedTail.prev = null;

    // decrease the length
    this.length--;

    // return the deleted tail
    return deletedTail;
  }
}

const list = new DoubleLinkedList();
list.push("Keyur");
list.push("Manish");
list.push("Vatsal");
list.push("Yash Gami");

list.pop();

console.log(list.head.next.next);
console.log(list);
