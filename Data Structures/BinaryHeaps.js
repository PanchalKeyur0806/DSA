class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  // function for inserting value to binaryheap
  insert(value) {
    // push value
    this.values.push(value);

    // function for updaing parent after inserting value
    this.bubbleUp();
  }

  // helper function of insert
  bubbleUp() {
    // get the index of newly inserted value
    let index = this.values.length - 1;
    // get the value
    const element = this.values[index];

    // loop untill index become zero, if current inserted value is bigger
    // if value is smaller break the loop
    while (index > 0) {
      // get the parent index
      const parentIdx = Math.floor((index - 1) / 2);
      // get the parent value
      const parent = this.values[parentIdx];

      // if current element is smaller than parent,
      // break the loop
      if (element <= parent) {
        break;
      }

      // swap the values
      this.values[parentIdx] = element;
      this.values[index] = parent;

      // now update the index to parent, and loop again if parent is smaller than current inserted value
      index = parentIdx;
    }
  }
}

const binaryHeap = new MaxBinaryHeap();
console.log(binaryHeap.insert(55));
console.log(binaryHeap.insert(56));
console.log(binaryHeap.values);
