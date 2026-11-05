class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  // function for adding data to priority queue
  enqueue(value, priority) {
    // create a new node
    const node = new Node(value, priority);
    // push node
    this.values.push(node);

    // helper function for updating node
    this.bubbleUp();
  }

  // function for removing elements at higher priority
  dequeue() {
    // get the first element with highest priority
    let max = this.values[0];
    // remove the last element
    let end = this.values.pop();

    // if length is greater than zero
    if (this.values.length > 0) {
      // swap the value to the front
      this.values[0] = end;
      // helper function for arranging values properly
      this.shrinkDown();
    }

    // return the highest priority node
    return max;
  }

  // helper function
  bubbleUp() {
    // get the last index
    let lastIdx = this.values.length - 1;
    // get the last element
    let element = this.values[lastIdx];

    // bubbleup until element reaches at valid place
    while (lastIdx > 0) {
      // get the parent index of an element
      let parentIdx = Math.floor((lastIdx - 1) / 2);
      // get the parent node
      let parent = this.values[parentIdx];

      // check that element priority is higher than parent priority
      // if it is then break the loop
      if (parent.priority <= element.priority) break;

      // swap the elements
      this.values[parentIdx] = element;
      this.values[lastIdx] = parent;

      // now index will be parent index
      // and this parent index will be used for bubbling up
      lastIdx = parentIdx;
    }
  }

  // helper function
  shrinkDown() {
    // get the index
    let index = 0;
    // get the first element
    let element = this.values[0];
    // get the length
    let length = this.values.length;

    // loop until it breaks
    while (true) {
      // get the left and right child index
      let leftChildIdx = Math.floor(2 * index + 1);
      let rightChildIdx = Math.floor(2 * index + 2);

      // define left and right child
      let leftChild, rightChild;
      // define the swap, this variable is used for swapping the nodes
      let swap = null;

      // if leftchild index is correct
      if (leftChildIdx < length) {
        // get the left child
        leftChild = this.values[leftChildIdx];

        // if first node priority is less than lefthcild priority
        if (element.priority > leftChild.priority) {
          // swap it with leftchild index
          swap = leftChildIdx;
        }
      }

      // if right child index is correct
      if (rightChildIdx < length) {
        // get the right child
        rightChild = this.values[rightChildIdx];

        // swap if one node has higher priority
        if (
          (swap === null && element.priority > rightChild.priority) ||
          (swap !== null && leftChild.priority > rightChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      // if swap is null break the loop
      if (swap === null) break;

      // swap the values
      this.values[index] = this.values[swap];
      this.values[swap] = element;

      // update the index
      index = swap;
    }
  }
}

const queue = new PriorityQueue();

queue.enqueue("Keyur", 3);
queue.enqueue("Manish", 3);
queue.enqueue("Vatsal", 1);
queue.enqueue("Yash Gami", 2);
queue.enqueue("Yash Darji", 2);
queue.enqueue("Yash Vyas", 1);

console.log(queue);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
