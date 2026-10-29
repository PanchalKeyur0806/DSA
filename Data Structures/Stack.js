class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push node to stack
  push(value) {
    // create a new node
    const newNode = new Node(value);

    // if there is no node at stack, assign newNode to first and last
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // variable used for holding first value
      const temp = this.first;
      // assign newNode to first
      this.first = newNode;
      // assign first next pointer to temp variable
      this.first.next = temp;
    }

    // increase the size
    this.size++;

    // return the stack
    return this;
  }

  // removing node from stack
  pop() {
    // if stack is empty return undefined
    if (!this.first) return undefined;

    // if stack have one node, assign null to first and last
    if (this.size === 1) {
      this.first = null;
      this.last = null;
      this.size--;
      return this;
    }

    // get the first node that needs to be  deleted
    const deletedNode = this.first;

    // assign deletedNode.next to first
    this.first = deletedNode.next;
    // remove all the pointers of deleted node
    deletedNode.next = null;

    // decrease the size of stack
    this.size--;

    // return the stack
    return this;
  }
}

const stack = new Stack();
stack.push("Keyur");
stack.push("Manish");
stack.push("Nitin Rathod");
stack.push("Harsh");
stack.push("Nirav");
stack.push("Indra");

console.log(stack.pop());

console.log(stack);
