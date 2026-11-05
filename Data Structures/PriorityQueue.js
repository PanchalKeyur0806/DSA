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
}

const queue = new PriorityQueue();

queue.enqueue("Keyur", 3);
queue.enqueue("Manish", 3);
queue.enqueue("Vatsal", 1);
queue.enqueue("Yash Gami", 2);
queue.enqueue("Yash Darji", 2);
queue.enqueue("Yash Vyas", 1);

console.log(queue);
