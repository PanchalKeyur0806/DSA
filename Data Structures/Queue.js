class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add value to the queue
  enqueue(value) {
    // create a new node
    const newNode = new Node(value);

    // if first node not found, create the first and last
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      this.size++;
      return this;
    }

    // add new node to last
    this.last.next = newNode;
    this.last = newNode;

    // increase the size
    this.size++;

    // return the queue
    return this;
  }

  //   remove value to the queue
  dequeue() {
    // if first node not found, return undefined
    if (!this.first) return undefined;

    // if there is only one node, then remove the first and last
    if (this.size == 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return this;
    }

    // get the first node
    const temp = this.first;
    // assign first node.next to this.first
    this.first = temp.next;

    // remove the pointer of deleted node
    temp.next = null;

    // decrease the size
    this.size--;

    // return this
    return this;
  }
}

const queue = new Queue();

queue.enqueue("Keyur");
queue.enqueue("Manish");
queue.enqueue("Vatsal");

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
